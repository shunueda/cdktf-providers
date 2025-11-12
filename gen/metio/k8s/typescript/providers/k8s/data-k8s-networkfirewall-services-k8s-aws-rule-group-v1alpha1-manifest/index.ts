// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#metadata DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestMetadata;
  /**
  * RuleGroupSpec defines the desired state of RuleGroup. The object that defines the rules in a rule group. This, along with RuleGroupResponse, define the rule group. You can retrieve all objects for a rule group by calling DescribeRuleGroup. Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow. To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#spec DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpec;
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#annotations DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#labels DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#name DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#namespace DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#key_id DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#type_ DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#type_}
  */
  readonly type?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecEncryptionConfigurationToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecEncryptionConfigurationToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable): any {
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

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsIpSetReferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#reference_arn DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#reference_arn}
  */
  readonly referenceArn?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsIpSetReferencesToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsIpSetReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference_arn: cdktf.stringToTerraform(struct!.referenceArn),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsIpSetReferencesToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsIpSetReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference_arn: {
      value: cdktf.stringToHclTerraform(struct!.referenceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsIpSetReferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsIpSetReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceArn = this._referenceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsIpSetReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referenceArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referenceArn = value.referenceArn;
    }
  }

  // reference_arn - computed: false, optional: true, required: false
  private _referenceArn?: string; 
  public get referenceArn() {
    return this.getStringAttribute('reference_arn');
  }
  public set referenceArn(value: string) {
    this._referenceArn = value;
  }
  public resetReferenceArn() {
    this._referenceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceArnInput() {
    return this._referenceArn;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#ip_set_references DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#ip_set_references}
  */
  readonly ipSetReferences?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsIpSetReferences;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_set_references: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsIpSetReferencesToTerraform(struct!.ipSetReferences),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_set_references: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsIpSetReferencesToHclTerraform(struct!.ipSetReferences),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsIpSetReferences",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipSetReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSetReferences = this._ipSetReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipSetReferences.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipSetReferences.internalValue = value.ipSetReferences;
    }
  }

  // ip_set_references - computed: false, optional: true, required: false
  private _ipSetReferences = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsIpSetReferencesOutputReference(this, "ip_set_references");
  public get ipSetReferences() {
    return this._ipSetReferences;
  }
  public putIpSetReferences(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsIpSetReferences) {
    this._ipSetReferences.internalValue = value;
  }
  public resetIpSetReferences() {
    this._ipSetReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetReferencesInput() {
    return this._ipSetReferences.internalValue;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesIpSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#definition DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#definition}
  */
  readonly definition?: string[];
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesIpSetsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesIpSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.definition),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesIpSetsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesIpSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.definition),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesIpSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesIpSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesIpSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
    }
  }

  // definition - computed: false, optional: true, required: false
  private _definition?: string[]; 
  public get definition() {
    return this.getListAttribute('definition');
  }
  public set definition(value: string[]) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesPortSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#definition DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#definition}
  */
  readonly definition?: string[];
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesPortSetsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesPortSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.definition),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesPortSetsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesPortSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.definition),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesPortSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesPortSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesPortSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
    }
  }

  // definition - computed: false, optional: true, required: false
  private _definition?: string[]; 
  public get definition() {
    return this.getListAttribute('definition');
  }
  public set definition(value: string[]) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#ip_sets DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#ip_sets}
  */
  readonly ipSets?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesIpSets;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#port_sets DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#port_sets}
  */
  readonly portSets?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesPortSets;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_sets: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesIpSetsToTerraform(struct!.ipSets),
    port_sets: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesPortSetsToTerraform(struct!.portSets),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_sets: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesIpSetsToHclTerraform(struct!.ipSets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesIpSets",
    },
    port_sets: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesPortSetsToHclTerraform(struct!.portSets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesPortSets",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSets = this._ipSets?.internalValue;
    }
    if (this._portSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSets = this._portSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipSets.internalValue = undefined;
      this._portSets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipSets.internalValue = value.ipSets;
      this._portSets.internalValue = value.portSets;
    }
  }

  // ip_sets - computed: false, optional: true, required: false
  private _ipSets = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesIpSetsOutputReference(this, "ip_sets");
  public get ipSets() {
    return this._ipSets;
  }
  public putIpSets(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesIpSets) {
    this._ipSets.internalValue = value;
  }
  public resetIpSets() {
    this._ipSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetsInput() {
    return this._ipSets.internalValue;
  }

  // port_sets - computed: false, optional: true, required: false
  private _portSets = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesPortSetsOutputReference(this, "port_sets");
  public get portSets() {
    return this._portSets;
  }
  public putPortSets(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesPortSets) {
    this._portSets.internalValue = value;
  }
  public resetPortSets() {
    this._portSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSetsInput() {
    return this._portSets.internalValue;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceRulesSourceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#generated_rules_type DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#generated_rules_type}
  */
  readonly generatedRulesType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#target_types DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#target_types}
  */
  readonly targetTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#targets DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#targets}
  */
  readonly targets?: string[];
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceRulesSourceListStructToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceRulesSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generated_rules_type: cdktf.stringToTerraform(struct!.generatedRulesType),
    target_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetTypes),
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceRulesSourceListStructToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceRulesSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generated_rules_type: {
      value: cdktf.stringToHclTerraform(struct!.generatedRulesType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceRulesSourceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceRulesSourceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generatedRulesType !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedRulesType = this._generatedRulesType;
    }
    if (this._targetTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTypes = this._targetTypes;
    }
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceRulesSourceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generatedRulesType = undefined;
      this._targetTypes = undefined;
      this._targets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generatedRulesType = value.generatedRulesType;
      this._targetTypes = value.targetTypes;
      this._targets = value.targets;
    }
  }

  // generated_rules_type - computed: false, optional: true, required: false
  private _generatedRulesType?: string; 
  public get generatedRulesType() {
    return this.getStringAttribute('generated_rules_type');
  }
  public set generatedRulesType(value: string) {
    this._generatedRulesType = value;
  }
  public resetGeneratedRulesType() {
    this._generatedRulesType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedRulesTypeInput() {
    return this._generatedRulesType;
  }

  // target_types - computed: false, optional: true, required: false
  private _targetTypes?: string[]; 
  public get targetTypes() {
    return this.getListAttribute('target_types');
  }
  public set targetTypes(value: string[]) {
    this._targetTypes = value;
  }
  public resetTargetTypes() {
    this._targetTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypesInput() {
    return this._targetTypes;
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#destination DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#destination_port DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#direction DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#protocol DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#source DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#source_port DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#source_port}
  */
  readonly sourcePort?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesHeaderToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    direction: cdktf.stringToTerraform(struct!.direction),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source: cdktf.stringToTerraform(struct!.source),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesHeaderToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._destinationPort = undefined;
      this._direction = undefined;
      this._protocol = undefined;
      this._source = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._destinationPort = value.destinationPort;
      this._direction = value.direction;
      this._protocol = value.protocol;
      this._source = value.source;
      this._sourcePort = value.sourcePort;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#keyword DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#keyword}
  */
  readonly keyword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#settings DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#settings}
  */
  readonly settings?: string[];
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keyword: cdktf.stringToTerraform(struct!.keyword),
    settings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.settings),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptionsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keyword: {
      value: cdktf.stringToHclTerraform(struct!.keyword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.settings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyword = this._keyword;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyword = undefined;
      this._settings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyword = value.keyword;
      this._settings = value.settings;
    }
  }

  // keyword - computed: false, optional: true, required: false
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  public resetKeyword() {
    this._keyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: string[]; 
  public get settings() {
    return this.getListAttribute('settings');
  }
  public set settings(value: string[]) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#action DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#action}
  */
  readonly action?: string;
  /**
  * The basic rule criteria for Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding StatefulRule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#header DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#header}
  */
  readonly header?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesHeader;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#rule_options DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#rule_options}
  */
  readonly ruleOptions?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptions[] | cdktf.IResolvable;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    header: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesHeaderToTerraform(struct!.header),
    rule_options: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform, false)(struct!.ruleOptions),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesHeader",
    },
    rule_options: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptionsToHclTerraform, false)(struct!.ruleOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._ruleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOptions = this._ruleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._header.internalValue = undefined;
      this._ruleOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._header.internalValue = value.header;
      this._ruleOptions.internalValue = value.ruleOptions;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // header - computed: false, optional: true, required: false
  private _header = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // rule_options - computed: false, optional: true, required: false
  private _ruleOptions = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptionsList(this, "rule_options", false);
  public get ruleOptions() {
    return this._ruleOptions;
  }
  public putRuleOptions(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesRuleOptions[] | cdktf.IResolvable) {
    this._ruleOptions.internalValue = value;
  }
  public resetRuleOptions() {
    this._ruleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOptionsInput() {
    return this._ruleOptions.internalValue;
  }
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#value DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#dimensions DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#dimensions}
  */
  readonly dimensions?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions[] | cdktf.IResolvable;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform, false)(struct!.dimensions),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition {
  /**
  * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#publish_metric_action DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#publish_metric_action}
  */
  readonly publishMetricAction?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    publish_metric_action: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform(struct!.publishMetricAction),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    publish_metric_action: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToHclTerraform(struct!.publishMetricAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publishMetricAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishMetricAction = this._publishMetricAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publishMetricAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publishMetricAction.internalValue = value.publishMetricAction;
    }
  }

  // publish_metric_action - computed: false, optional: true, required: false
  private _publishMetricAction = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference(this, "publish_metric_action");
  public get publishMetricAction() {
    return this._publishMetricAction;
  }
  public putPublishMetricAction(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction) {
    this._publishMetricAction.internalValue = value;
  }
  public resetPublishMetricAction() {
    this._publishMetricAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishMetricActionInput() {
    return this._publishMetricAction.internalValue;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions {
  /**
  * A custom action to use in stateless rule actions settings. This is used in CustomAction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#action_definition DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#action_definition}
  */
  readonly actionDefinition?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#action_name DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#action_name}
  */
  readonly actionName?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_definition: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform(struct!.actionDefinition),
    action_name: cdktf.stringToTerraform(struct!.actionName),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_definition: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToHclTerraform(struct!.actionDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition",
    },
    action_name: {
      value: cdktf.stringToHclTerraform(struct!.actionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDefinition = this._actionDefinition?.internalValue;
    }
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionDefinition.internalValue = undefined;
      this._actionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionDefinition.internalValue = value.actionDefinition;
      this._actionName = value.actionName;
    }
  }

  // action_definition - computed: false, optional: true, required: false
  private _actionDefinition = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference(this, "action_definition");
  public get actionDefinition() {
    return this._actionDefinition;
  }
  public putActionDefinition(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition) {
    this._actionDefinition.internalValue = value;
  }
  public resetActionDefinition() {
    this._actionDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDefinitionInput() {
    return this._actionDefinition.internalValue;
  }

  // action_name - computed: false, optional: true, required: false
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  public resetActionName() {
    this._actionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#from_port DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#to_port DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#to_port}
  */
  readonly toPort?: number;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_port: {
      value: cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#address_definition DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#address_definition}
  */
  readonly addressDefinition?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_definition: {
      value: cdktf.stringToHclTerraform(struct!.addressDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressDefinition = this._addressDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressDefinition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressDefinition = value.addressDefinition;
    }
  }

  // address_definition - computed: false, optional: true, required: false
  private _addressDefinition?: string; 
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
  public set addressDefinition(value: string) {
    this._addressDefinition = value;
  }
  public resetAddressDefinition() {
    this._addressDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressDefinitionInput() {
    return this._addressDefinition;
  }
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#from_port DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#to_port DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#to_port}
  */
  readonly toPort?: number;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_port: {
      value: cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#address_definition DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#address_definition}
  */
  readonly addressDefinition?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_definition: {
      value: cdktf.stringToHclTerraform(struct!.addressDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressDefinition = this._addressDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressDefinition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressDefinition = value.addressDefinition;
    }
  }

  // address_definition - computed: false, optional: true, required: false
  private _addressDefinition?: string; 
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
  public set addressDefinition(value: string) {
    this._addressDefinition = value;
  }
  public resetAddressDefinition() {
    this._addressDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressDefinitionInput() {
    return this._addressDefinition;
  }
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#flags DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#masks DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#masks}
  */
  readonly masks?: string[];
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    masks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.masks),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    masks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.masks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._masks !== undefined) {
      hasAnyValues = true;
      internalValueResult.masks = this._masks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._masks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._masks = value.masks;
    }
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return this.getListAttribute('flags');
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // masks - computed: false, optional: true, required: false
  private _masks?: string[]; 
  public get masks() {
    return this.getListAttribute('masks');
  }
  public set masks(value: string[]) {
    this._masks = value;
  }
  public resetMasks() {
    this._masks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masksInput() {
    return this._masks;
  }
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#destination_ports DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#destination_ports}
  */
  readonly destinationPorts?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#destinations DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#destinations}
  */
  readonly destinations?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#protocols DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#source_ports DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#source_ports}
  */
  readonly sourcePorts?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#sources DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#tcp_flags DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#tcp_flags}
  */
  readonly tcpFlags?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags[] | cdktf.IResolvable;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ports: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform, false)(struct!.destinationPorts),
    destinations: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform, false)(struct!.destinations),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
    source_ports: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform, false)(struct!.sourcePorts),
    sources: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform, false)(struct!.sources),
    tcp_flags: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform, false)(struct!.tcpFlags),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_ports: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToHclTerraform, false)(struct!.destinationPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList",
    },
    destinations: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ports: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToHclTerraform, false)(struct!.sourcePorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList",
    },
    tcp_flags: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToHclTerraform, false)(struct!.tcpFlags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts?.internalValue;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourcePorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._tcpFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFlags = this._tcpFlags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationPorts.internalValue = undefined;
      this._destinations.internalValue = undefined;
      this._protocols = undefined;
      this._sourcePorts.internalValue = undefined;
      this._sources.internalValue = undefined;
      this._tcpFlags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationPorts.internalValue = value.destinationPorts;
      this._destinations.internalValue = value.destinations;
      this._protocols = value.protocols;
      this._sourcePorts.internalValue = value.sourcePorts;
      this._sources.internalValue = value.sources;
      this._tcpFlags.internalValue = value.tcpFlags;
    }
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList(this, "destination_ports", false);
  public get destinationPorts() {
    return this._destinationPorts;
  }
  public putDestinationPorts(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts[] | cdktf.IResolvable) {
    this._destinationPorts.internalValue = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts.internalValue;
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList(this, "source_ports", false);
  public get sourcePorts() {
    return this._sourcePorts;
  }
  public putSourcePorts(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts[] | cdktf.IResolvable) {
    this._sourcePorts.internalValue = value;
  }
  public resetSourcePorts() {
    this._sourcePorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // tcp_flags - computed: false, optional: true, required: false
  private _tcpFlags = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList(this, "tcp_flags", false);
  public get tcpFlags() {
    return this._tcpFlags;
  }
  public putTcpFlags(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags[] | cdktf.IResolvable) {
    this._tcpFlags.internalValue = value;
  }
  public resetTcpFlags() {
    this._tcpFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagsInput() {
    return this._tcpFlags.internalValue;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#actions DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#actions}
  */
  readonly actions?: string[];
  /**
  * Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#match_attributes DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#match_attributes}
  */
  readonly matchAttributes?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    match_attributes: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform(struct!.matchAttributes),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_attributes: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToHclTerraform(struct!.matchAttributes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._matchAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAttributes = this._matchAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._matchAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._matchAttributes.internalValue = value.matchAttributes;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // match_attributes - computed: false, optional: true, required: false
  private _matchAttributes = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference(this, "match_attributes");
  public get matchAttributes() {
    return this._matchAttributes;
  }
  public putMatchAttributes(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes) {
    this._matchAttributes.internalValue = value;
  }
  public resetMatchAttributes() {
    this._matchAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAttributesInput() {
    return this._matchAttributes.internalValue;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#priority DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * The inspection criteria and action for a single stateless rule. Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#rule_definition DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#rule_definition}
  */
  readonly ruleDefinition?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    rule_definition: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform(struct!.ruleDefinition),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_definition: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToHclTerraform(struct!.ruleDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ruleDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleDefinition = this._ruleDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._ruleDefinition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._ruleDefinition.internalValue = value.ruleDefinition;
    }
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rule_definition - computed: false, optional: true, required: false
  private _ruleDefinition = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference(this, "rule_definition");
  public get ruleDefinition() {
    return this._ruleDefinition;
  }
  public putRuleDefinition(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition) {
    this._ruleDefinition.internalValue = value;
  }
  public resetRuleDefinition() {
    this._ruleDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDefinitionInput() {
    return this._ruleDefinition.internalValue;
  }
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#custom_actions DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#custom_actions}
  */
  readonly customActions?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#stateless_rules DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#stateless_rules}
  */
  readonly statelessRules?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules[] | cdktf.IResolvable;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_actions: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform, false)(struct!.customActions),
    stateless_rules: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform, false)(struct!.statelessRules),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_actions: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToHclTerraform, false)(struct!.customActions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList",
    },
    stateless_rules: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToHclTerraform, false)(struct!.statelessRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customActions = this._customActions?.internalValue;
    }
    if (this._statelessRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessRules = this._statelessRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customActions.internalValue = undefined;
      this._statelessRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customActions.internalValue = value.customActions;
      this._statelessRules.internalValue = value.statelessRules;
    }
  }

  // custom_actions - computed: false, optional: true, required: false
  private _customActions = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList(this, "custom_actions", false);
  public get customActions() {
    return this._customActions;
  }
  public putCustomActions(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions[] | cdktf.IResolvable) {
    this._customActions.internalValue = value;
  }
  public resetCustomActions() {
    this._customActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionsInput() {
    return this._customActions.internalValue;
  }

  // stateless_rules - computed: false, optional: true, required: false
  private _statelessRules = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList(this, "stateless_rules", false);
  public get statelessRules() {
    return this._statelessRules;
  }
  public putStatelessRules(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules[] | cdktf.IResolvable) {
    this._statelessRules.internalValue = value;
  }
  public resetStatelessRules() {
    this._statelessRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessRulesInput() {
    return this._statelessRules.internalValue;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSource {
  /**
  * Stateful inspection criteria for a domain list rule group. For HTTPS traffic, domain filtering is SNI-based. It uses the server name indicator extension of the TLS handshake. By default, Network Firewall domain list inspection only includes traffic coming from the VPC where you deploy the firewall. To inspect traffic from IP addresses outside of the deployment VPC, you set the HOME_NET rule variable to include the CIDR range of the deployment VPC plus the other CIDR ranges. For more information, see RuleVariables in this guide and Stateful domain list rule groups in Network Firewall (https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateful-rule-groups-domain-names.html) in the Network Firewall Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#rules_source_list DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#rules_source_list}
  */
  readonly rulesSourceList?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceRulesSourceListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#rules_string DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#rules_string}
  */
  readonly rulesString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#stateful_rules DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#stateful_rules}
  */
  readonly statefulRules?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRules[] | cdktf.IResolvable;
  /**
  * Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#stateless_rules_and_custom_actions DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#stateless_rules_and_custom_actions}
  */
  readonly statelessRulesAndCustomActions?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActions;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules_source_list: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceRulesSourceListStructToTerraform(struct!.rulesSourceList),
    rules_string: cdktf.stringToTerraform(struct!.rulesString),
    stateful_rules: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesToTerraform, false)(struct!.statefulRules),
    stateless_rules_and_custom_actions: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct!.statelessRulesAndCustomActions),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules_source_list: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceRulesSourceListStructToHclTerraform(struct!.rulesSourceList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceRulesSourceListStruct",
    },
    rules_string: {
      value: cdktf.stringToHclTerraform(struct!.rulesString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stateful_rules: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesToHclTerraform, false)(struct!.statefulRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesList",
    },
    stateless_rules_and_custom_actions: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsToHclTerraform(struct!.statelessRulesAndCustomActions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rulesSourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesSourceList = this._rulesSourceList?.internalValue;
    }
    if (this._rulesString !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesString = this._rulesString;
    }
    if (this._statefulRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulRules = this._statefulRules?.internalValue;
    }
    if (this._statelessRulesAndCustomActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessRulesAndCustomActions = this._statelessRulesAndCustomActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rulesSourceList.internalValue = undefined;
      this._rulesString = undefined;
      this._statefulRules.internalValue = undefined;
      this._statelessRulesAndCustomActions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rulesSourceList.internalValue = value.rulesSourceList;
      this._rulesString = value.rulesString;
      this._statefulRules.internalValue = value.statefulRules;
      this._statelessRulesAndCustomActions.internalValue = value.statelessRulesAndCustomActions;
    }
  }

  // rules_source_list - computed: false, optional: true, required: false
  private _rulesSourceList = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceRulesSourceListStructOutputReference(this, "rules_source_list");
  public get rulesSourceList() {
    return this._rulesSourceList;
  }
  public putRulesSourceList(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceRulesSourceListStruct) {
    this._rulesSourceList.internalValue = value;
  }
  public resetRulesSourceList() {
    this._rulesSourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesSourceListInput() {
    return this._rulesSourceList.internalValue;
  }

  // rules_string - computed: false, optional: true, required: false
  private _rulesString?: string; 
  public get rulesString() {
    return this.getStringAttribute('rules_string');
  }
  public set rulesString(value: string) {
    this._rulesString = value;
  }
  public resetRulesString() {
    this._rulesString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesStringInput() {
    return this._rulesString;
  }

  // stateful_rules - computed: false, optional: true, required: false
  private _statefulRules = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRulesList(this, "stateful_rules", false);
  public get statefulRules() {
    return this._statefulRules;
  }
  public putStatefulRules(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatefulRules[] | cdktf.IResolvable) {
    this._statefulRules.internalValue = value;
  }
  public resetStatefulRules() {
    this._statefulRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulRulesInput() {
    return this._statefulRules.internalValue;
  }

  // stateless_rules_and_custom_actions - computed: false, optional: true, required: false
  private _statelessRulesAndCustomActions = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference(this, "stateless_rules_and_custom_actions");
  public get statelessRulesAndCustomActions() {
    return this._statelessRulesAndCustomActions;
  }
  public putStatelessRulesAndCustomActions(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceStatelessRulesAndCustomActions) {
    this._statelessRulesAndCustomActions.internalValue = value;
  }
  public resetStatelessRulesAndCustomActions() {
    this._statelessRulesAndCustomActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessRulesAndCustomActionsInput() {
    return this._statelessRulesAndCustomActions.internalValue;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupStatefulRuleOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#rule_order DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#rule_order}
  */
  readonly ruleOrder?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupStatefulRuleOptionsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupStatefulRuleOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_order: cdktf.stringToTerraform(struct!.ruleOrder),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupStatefulRuleOptionsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupStatefulRuleOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_order: {
      value: cdktf.stringToHclTerraform(struct!.ruleOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupStatefulRuleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupStatefulRuleOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOrder = this._ruleOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupStatefulRuleOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleOrder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleOrder = value.ruleOrder;
    }
  }

  // rule_order - computed: false, optional: true, required: false
  private _ruleOrder?: string; 
  public get ruleOrder() {
    return this.getStringAttribute('rule_order');
  }
  public set ruleOrder(value: string) {
    this._ruleOrder = value;
  }
  public resetRuleOrder() {
    this._ruleOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOrderInput() {
    return this._ruleOrder;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroup {
  /**
  * Contains a set of IP set references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#reference_sets DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#reference_sets}
  */
  readonly referenceSets?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSets;
  /**
  * Settings that are available for use in the rules in the RuleGroup where this is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#rule_variables DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#rule_variables}
  */
  readonly ruleVariables?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariables;
  /**
  * The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single RulesSource. You can use an instance of this for either stateless rules or stateful rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#rules_source DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#rules_source}
  */
  readonly rulesSource?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSource;
  /**
  * Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#stateful_rule_options DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#stateful_rule_options}
  */
  readonly statefulRuleOptions?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupStatefulRuleOptions;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference_sets: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsToTerraform(struct!.referenceSets),
    rule_variables: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesToTerraform(struct!.ruleVariables),
    rules_source: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceToTerraform(struct!.rulesSource),
    stateful_rule_options: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupStatefulRuleOptionsToTerraform(struct!.statefulRuleOptions),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference_sets: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsToHclTerraform(struct!.referenceSets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSets",
    },
    rule_variables: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesToHclTerraform(struct!.ruleVariables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariables",
    },
    rules_source: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceToHclTerraform(struct!.rulesSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSource",
    },
    stateful_rule_options: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupStatefulRuleOptionsToHclTerraform(struct!.statefulRuleOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupStatefulRuleOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceSets = this._referenceSets?.internalValue;
    }
    if (this._ruleVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleVariables = this._ruleVariables?.internalValue;
    }
    if (this._rulesSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesSource = this._rulesSource?.internalValue;
    }
    if (this._statefulRuleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulRuleOptions = this._statefulRuleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referenceSets.internalValue = undefined;
      this._ruleVariables.internalValue = undefined;
      this._rulesSource.internalValue = undefined;
      this._statefulRuleOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referenceSets.internalValue = value.referenceSets;
      this._ruleVariables.internalValue = value.ruleVariables;
      this._rulesSource.internalValue = value.rulesSource;
      this._statefulRuleOptions.internalValue = value.statefulRuleOptions;
    }
  }

  // reference_sets - computed: false, optional: true, required: false
  private _referenceSets = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSetsOutputReference(this, "reference_sets");
  public get referenceSets() {
    return this._referenceSets;
  }
  public putReferenceSets(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupReferenceSets) {
    this._referenceSets.internalValue = value;
  }
  public resetReferenceSets() {
    this._referenceSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceSetsInput() {
    return this._referenceSets.internalValue;
  }

  // rule_variables - computed: false, optional: true, required: false
  private _ruleVariables = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariablesOutputReference(this, "rule_variables");
  public get ruleVariables() {
    return this._ruleVariables;
  }
  public putRuleVariables(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRuleVariables) {
    this._ruleVariables.internalValue = value;
  }
  public resetRuleVariables() {
    this._ruleVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleVariablesInput() {
    return this._ruleVariables.internalValue;
  }

  // rules_source - computed: false, optional: true, required: false
  private _rulesSource = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSourceOutputReference(this, "rules_source");
  public get rulesSource() {
    return this._rulesSource;
  }
  public putRulesSource(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupRulesSource) {
    this._rulesSource.internalValue = value;
  }
  public resetRulesSource() {
    this._rulesSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesSourceInput() {
    return this._rulesSource.internalValue;
  }

  // stateful_rule_options - computed: false, optional: true, required: false
  private _statefulRuleOptions = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupStatefulRuleOptionsOutputReference(this, "stateful_rule_options");
  public get statefulRuleOptions() {
    return this._statefulRuleOptions;
  }
  public putStatefulRuleOptions(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupStatefulRuleOptions) {
    this._statefulRuleOptions.internalValue = value;
  }
  public resetStatefulRuleOptions() {
    this._statefulRuleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulRuleOptionsInput() {
    return this._statefulRuleOptions.internalValue;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecSourceMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#source_arn DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#source_arn}
  */
  readonly sourceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#source_update_token DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#source_update_token}
  */
  readonly sourceUpdateToken?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecSourceMetadataToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecSourceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_arn: cdktf.stringToTerraform(struct!.sourceArn),
    source_update_token: cdktf.stringToTerraform(struct!.sourceUpdateToken),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecSourceMetadataToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecSourceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_arn: {
      value: cdktf.stringToHclTerraform(struct!.sourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_update_token: {
      value: cdktf.stringToHclTerraform(struct!.sourceUpdateToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecSourceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecSourceMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceArn = this._sourceArn;
    }
    if (this._sourceUpdateToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUpdateToken = this._sourceUpdateToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecSourceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceArn = undefined;
      this._sourceUpdateToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceArn = value.sourceArn;
      this._sourceUpdateToken = value.sourceUpdateToken;
    }
  }

  // source_arn - computed: false, optional: true, required: false
  private _sourceArn?: string; 
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string) {
    this._sourceArn = value;
  }
  public resetSourceArn() {
    this._sourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn;
  }

  // source_update_token - computed: false, optional: true, required: false
  private _sourceUpdateToken?: string; 
  public get sourceUpdateToken() {
    return this.getStringAttribute('source_update_token');
  }
  public set sourceUpdateToken(value: string) {
    this._sourceUpdateToken = value;
  }
  public resetSourceUpdateToken() {
    this._sourceUpdateToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUpdateTokenInput() {
    return this._sourceUpdateToken;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#key DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#value DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpec {
  /**
  * Indicates whether you want Network Firewall to analyze the stateless rules in the rule group for rule behavior such as asymmetric routing. If set to TRUE, Network Firewall runs the analysis and then creates the rule group for you. To run the stateless rule group analyzer without creating the rule group, set DryRun to TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#analyze_rule_group DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#analyze_rule_group}
  */
  readonly analyzeRuleGroup?: boolean | cdktf.IResolvable;
  /**
  * The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation. When you update a rule group, you are limited to this capacity. When you reference a rule group from a firewall policy, Network Firewall reserves this capacity for the rule group. You can retrieve the capacity that would be required for a rule group before you create the rule group by calling CreateRuleGroup with DryRun set to TRUE. You can't change or exceed this capacity when you update the rule group, so leave room for your rule group to grow. Capacity for a stateless rule group For a stateless rule group, the capacity required is the sum of the capacity requirements of the individual rules that you expect to have in the rule group. To calculate the capacity requirement of a single rule, multiply the capacity requirement values of each of the rule's match settings: * A match setting with no criteria specified has a value of 1. * A match setting with Any specified has a value of 1. * All other match settings have a value equal to the number of elements provided in the setting. For example, a protocol setting ['UDP'] and a source setting ['10.0.0.0/24'] each have a value of 1. A protocol setting ['UDP','TCP'] has a value of 2. A source setting ['10.0.0.0/24','10.0.0.1/24','10.0.0.2/24'] has a value of 3. A rule with no criteria specified in any of its match settings has a capacity requirement of 1. A rule with protocol setting ['UDP','TCP'], source setting ['10.0.0.0/24','10.0.0.1/24','10.0.0.2/24'], and a single specification or no specification for each of the other match settings has a capacity requirement of 6. Capacity for a stateful rule group For a stateful rule group, the minimum capacity required is the number of individual rules that you expect to have in the rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#capacity DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#capacity}
  */
  readonly capacity: number;
  /**
  * A description of the rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#description DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid. If set to FALSE, Network Firewall makes the requested changes to your resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#dry_run DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * A complex type that contains settings for encryption of your rule group resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#encryption_configuration DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#encryption_configuration}
  */
  readonly encryptionConfiguration?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecEncryptionConfiguration;
  /**
  * An object that defines the rule group rules. You must provide either this rule group setting or a Rules setting, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#rule_group DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#rule_group}
  */
  readonly ruleGroup?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroup;
  /**
  * The descriptive name of the rule group. You can't change the name of a rule group after you create it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#rule_group_name DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#rule_group_name}
  */
  readonly ruleGroupName: string;
  /**
  * A string containing stateful rule group rules specifications in Suricata flat format, with one rule per line. Use this to import your existing Suricata compatible rule groups. You must provide either this rules setting or a populated RuleGroup setting, but not both. You can provide your rule group specification in Suricata flat format through this setting when you create or update your rule group. The call response returns a RuleGroup object that Network Firewall has populated from your string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#rules DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#rules}
  */
  readonly rules?: string;
  /**
  * A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to keep track of updates made to the originating rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#source_metadata DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#source_metadata}
  */
  readonly sourceMetadata?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecSourceMetadata;
  /**
  * The key:value pairs to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#tags DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#type_ DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest#type_}
  */
  readonly type: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analyze_rule_group: cdktf.booleanToTerraform(struct!.analyzeRuleGroup),
    capacity: cdktf.numberToTerraform(struct!.capacity),
    description: cdktf.stringToTerraform(struct!.description),
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    encryption_configuration: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    rule_group: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupToTerraform(struct!.ruleGroup),
    rule_group_name: cdktf.stringToTerraform(struct!.ruleGroupName),
    rules: cdktf.stringToTerraform(struct!.rules),
    source_metadata: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecSourceMetadataToTerraform(struct!.sourceMetadata),
    tags: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analyze_rule_group: {
      value: cdktf.booleanToHclTerraform(struct!.analyzeRuleGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_configuration: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecEncryptionConfiguration",
    },
    rule_group: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupToHclTerraform(struct!.ruleGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroup",
    },
    rule_group_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.stringToHclTerraform(struct!.rules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_metadata: {
      value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecSourceMetadataToHclTerraform(struct!.sourceMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecSourceMetadata",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTagsList",
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

export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzeRuleGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzeRuleGroup = this._analyzeRuleGroup;
    }
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    if (this._ruleGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleGroup = this._ruleGroup?.internalValue;
    }
    if (this._ruleGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleGroupName = this._ruleGroupName;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    if (this._sourceMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMetadata = this._sourceMetadata?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzeRuleGroup = undefined;
      this._capacity = undefined;
      this._description = undefined;
      this._dryRun = undefined;
      this._encryptionConfiguration.internalValue = undefined;
      this._ruleGroup.internalValue = undefined;
      this._ruleGroupName = undefined;
      this._rules = undefined;
      this._sourceMetadata.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzeRuleGroup = value.analyzeRuleGroup;
      this._capacity = value.capacity;
      this._description = value.description;
      this._dryRun = value.dryRun;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
      this._ruleGroup.internalValue = value.ruleGroup;
      this._ruleGroupName = value.ruleGroupName;
      this._rules = value.rules;
      this._sourceMetadata.internalValue = value.sourceMetadata;
      this._tags.internalValue = value.tags;
      this._type = value.type;
    }
  }

  // analyze_rule_group - computed: false, optional: true, required: false
  private _analyzeRuleGroup?: boolean | cdktf.IResolvable; 
  public get analyzeRuleGroup() {
    return this.getBooleanAttribute('analyze_rule_group');
  }
  public set analyzeRuleGroup(value: boolean | cdktf.IResolvable) {
    this._analyzeRuleGroup = value;
  }
  public resetAnalyzeRuleGroup() {
    this._analyzeRuleGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzeRuleGroupInput() {
    return this._analyzeRuleGroup;
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // rule_group - computed: false, optional: true, required: false
  private _ruleGroup = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroupOutputReference(this, "rule_group");
  public get ruleGroup() {
    return this._ruleGroup;
  }
  public putRuleGroup(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecRuleGroup) {
    this._ruleGroup.internalValue = value;
  }
  public resetRuleGroup() {
    this._ruleGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupInput() {
    return this._ruleGroup.internalValue;
  }

  // rule_group_name - computed: false, optional: false, required: true
  private _ruleGroupName?: string; 
  public get ruleGroupName() {
    return this.getStringAttribute('rule_group_name');
  }
  public set ruleGroupName(value: string) {
    this._ruleGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupNameInput() {
    return this._ruleGroupName;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: string; 
  public get rules() {
    return this.getStringAttribute('rules');
  }
  public set rules(value: string) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // source_metadata - computed: false, optional: true, required: false
  private _sourceMetadata = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecSourceMetadataOutputReference(this, "source_metadata");
  public get sourceMetadata() {
    return this._sourceMetadata;
  }
  public putSourceMetadata(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecSourceMetadata) {
    this._sourceMetadata.internalValue = value;
  }
  public resetSourceMetadata() {
    this._sourceMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMetadataInput() {
    return this._sourceMetadata.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // type_ - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest k8s_networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest}
*/
export class DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest k8s_networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_networkfirewall_services_k8s_aws_rule_group_v1alpha1_manifest',
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
  private _metadata = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkfirewallServicesK8SAwsRuleGroupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
