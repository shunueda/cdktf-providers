// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#metadata DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestMetadata;
  /**
  * FirewallPolicySpec defines the desired state of FirewallPolicy. The firewall policy defines the behavior of a firewall using a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. This, along with FirewallPolicyResponse, define the policy. You can retrieve all objects for a firewall policy by calling DescribeFirewallPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#spec DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpec;
}
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#annotations DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#labels DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#name DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#namespace DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#key_id DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#type_ DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#type_}
  */
  readonly type?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecEncryptionConfigurationToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecEncryptionConfigurationToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable): any {
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

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesRuleVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#definition DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#definition}
  */
  readonly definition?: string[];
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesRuleVariablesToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesRuleVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.definition),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesRuleVariablesToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesRuleVariables | cdktf.IResolvable): any {
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

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesRuleVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesRuleVariables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesRuleVariables | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#rule_variables DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#rule_variables}
  */
  readonly ruleVariables?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesRuleVariables;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_variables: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesRuleVariablesToTerraform(struct!.ruleVariables),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_variables: {
      value: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesRuleVariablesToHclTerraform(struct!.ruleVariables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesRuleVariables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleVariables = this._ruleVariables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleVariables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleVariables.internalValue = value.ruleVariables;
    }
  }

  // rule_variables - computed: false, optional: true, required: false
  private _ruleVariables = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesRuleVariablesOutputReference(this, "rule_variables");
  public get ruleVariables() {
    return this._ruleVariables;
  }
  public putRuleVariables(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesRuleVariables) {
    this._ruleVariables.internalValue = value;
  }
  public resetRuleVariables() {
    this._ruleVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleVariablesInput() {
    return this._ruleVariables.internalValue;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulEngineOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#rule_order DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#rule_order}
  */
  readonly ruleOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#stream_exception_policy DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#stream_exception_policy}
  */
  readonly streamExceptionPolicy?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulEngineOptionsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulEngineOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_order: cdktf.stringToTerraform(struct!.ruleOrder),
    stream_exception_policy: cdktf.stringToTerraform(struct!.streamExceptionPolicy),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulEngineOptionsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulEngineOptions | cdktf.IResolvable): any {
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
    stream_exception_policy: {
      value: cdktf.stringToHclTerraform(struct!.streamExceptionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulEngineOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulEngineOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOrder = this._ruleOrder;
    }
    if (this._streamExceptionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamExceptionPolicy = this._streamExceptionPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulEngineOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleOrder = undefined;
      this._streamExceptionPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleOrder = value.ruleOrder;
      this._streamExceptionPolicy = value.streamExceptionPolicy;
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

  // stream_exception_policy - computed: false, optional: true, required: false
  private _streamExceptionPolicy?: string; 
  public get streamExceptionPolicy() {
    return this.getStringAttribute('stream_exception_policy');
  }
  public set streamExceptionPolicy(value: string) {
    this._streamExceptionPolicy = value;
  }
  public resetStreamExceptionPolicy() {
    this._streamExceptionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamExceptionPolicyInput() {
    return this._streamExceptionPolicy;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#action DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#action}
  */
  readonly action?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOverrideToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOverrideToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOverride | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
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
}
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferences {
  /**
  * The setting that allows the policy owner to change the behavior of the rule group within a policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#override DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#override}
  */
  readonly override?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOverride;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#priority DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#resource_arn DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#resource_arn}
  */
  readonly resourceArn?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOverrideToTerraform(struct!.override),
    priority: cdktf.numberToTerraform(struct!.priority),
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override: {
      value: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOverride",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_arn: {
      value: cdktf.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._override.internalValue = undefined;
      this._priority = undefined;
      this._resourceArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._override.internalValue = value.override;
      this._priority = value.priority;
      this._resourceArn = value.resourceArn;
    }
  }

  // override - computed: false, optional: true, required: false
  private _override = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
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

  // resource_arn - computed: false, optional: true, required: false
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  public resetResourceArn() {
    this._resourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferences[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#value DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions | cdktf.IResolvable): any {
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

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions | cdktf.IResolvable | undefined) {
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

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#dimensions DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#dimensions}
  */
  readonly dimensions?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions[] | cdktf.IResolvable;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform, false)(struct!.dimensions),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction | cdktf.IResolvable | undefined) {
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
  private _dimensions = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions[] | cdktf.IResolvable) {
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
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinition {
  /**
  * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#publish_metric_action DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#publish_metric_action}
  */
  readonly publishMetricAction?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    publish_metric_action: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToTerraform(struct!.publishMetricAction),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    publish_metric_action: {
      value: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToHclTerraform(struct!.publishMetricAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinition | cdktf.IResolvable | undefined) {
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
  private _publishMetricAction = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference(this, "publish_metric_action");
  public get publishMetricAction() {
    return this._publishMetricAction;
  }
  public putPublishMetricAction(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction) {
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
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActions {
  /**
  * A custom action to use in stateless rule actions settings. This is used in CustomAction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#action_definition DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#action_definition}
  */
  readonly actionDefinition?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#action_name DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#action_name}
  */
  readonly actionName?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_definition: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionToTerraform(struct!.actionDefinition),
    action_name: cdktf.stringToTerraform(struct!.actionName),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_definition: {
      value: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionToHclTerraform(struct!.actionDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinition",
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

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActions | cdktf.IResolvable | undefined) {
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
  private _actionDefinition = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference(this, "action_definition");
  public get actionDefinition() {
    return this._actionDefinition;
  }
  public putActionDefinition(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsActionDefinition) {
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

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#priority DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#resource_arn DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#resource_arn}
  */
  readonly resourceArn?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferencesToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferencesToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferences | cdktf.IResolvable): any {
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
    resource_arn: {
      value: cdktf.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._resourceArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._resourceArn = value.resourceArn;
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

  // resource_arn - computed: false, optional: true, required: false
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  public resetResourceArn() {
    this._resourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferencesList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferences[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferencesOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicy {
  /**
  * Contains variables that you can use to override default Suricata settings in your firewall policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#policy_variables DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#policy_variables}
  */
  readonly policyVariables?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariables;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#stateful_default_actions DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#stateful_default_actions}
  */
  readonly statefulDefaultActions?: string[];
  /**
  * Configuration settings for the handling of the stateful rule groups in a firewall policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#stateful_engine_options DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#stateful_engine_options}
  */
  readonly statefulEngineOptions?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulEngineOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#stateful_rule_group_references DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#stateful_rule_group_references}
  */
  readonly statefulRuleGroupReferences?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferences[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#stateless_custom_actions DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#stateless_custom_actions}
  */
  readonly statelessCustomActions?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#stateless_default_actions DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#stateless_default_actions}
  */
  readonly statelessDefaultActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#stateless_fragment_default_actions DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#stateless_fragment_default_actions}
  */
  readonly statelessFragmentDefaultActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#stateless_rule_group_references DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#stateless_rule_group_references}
  */
  readonly statelessRuleGroupReferences?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferences[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#tls_inspection_configuration_arn DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#tls_inspection_configuration_arn}
  */
  readonly tlsInspectionConfigurationArn?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_variables: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesToTerraform(struct!.policyVariables),
    stateful_default_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statefulDefaultActions),
    stateful_engine_options: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulEngineOptionsToTerraform(struct!.statefulEngineOptions),
    stateful_rule_group_references: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesToTerraform, false)(struct!.statefulRuleGroupReferences),
    stateless_custom_actions: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsToTerraform, false)(struct!.statelessCustomActions),
    stateless_default_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statelessDefaultActions),
    stateless_fragment_default_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statelessFragmentDefaultActions),
    stateless_rule_group_references: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferencesToTerraform, false)(struct!.statelessRuleGroupReferences),
    tls_inspection_configuration_arn: cdktf.stringToTerraform(struct!.tlsInspectionConfigurationArn),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_variables: {
      value: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesToHclTerraform(struct!.policyVariables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariables",
    },
    stateful_default_actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statefulDefaultActions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    stateful_engine_options: {
      value: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulEngineOptionsToHclTerraform(struct!.statefulEngineOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulEngineOptions",
    },
    stateful_rule_group_references: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesToHclTerraform, false)(struct!.statefulRuleGroupReferences),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesList",
    },
    stateless_custom_actions: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsToHclTerraform, false)(struct!.statelessCustomActions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsList",
    },
    stateless_default_actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statelessDefaultActions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    stateless_fragment_default_actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statelessFragmentDefaultActions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    stateless_rule_group_references: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferencesToHclTerraform, false)(struct!.statelessRuleGroupReferences),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferencesList",
    },
    tls_inspection_configuration_arn: {
      value: cdktf.stringToHclTerraform(struct!.tlsInspectionConfigurationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyVariables = this._policyVariables?.internalValue;
    }
    if (this._statefulDefaultActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulDefaultActions = this._statefulDefaultActions;
    }
    if (this._statefulEngineOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulEngineOptions = this._statefulEngineOptions?.internalValue;
    }
    if (this._statefulRuleGroupReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulRuleGroupReferences = this._statefulRuleGroupReferences?.internalValue;
    }
    if (this._statelessCustomActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessCustomActions = this._statelessCustomActions?.internalValue;
    }
    if (this._statelessDefaultActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessDefaultActions = this._statelessDefaultActions;
    }
    if (this._statelessFragmentDefaultActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessFragmentDefaultActions = this._statelessFragmentDefaultActions;
    }
    if (this._statelessRuleGroupReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessRuleGroupReferences = this._statelessRuleGroupReferences?.internalValue;
    }
    if (this._tlsInspectionConfigurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsInspectionConfigurationArn = this._tlsInspectionConfigurationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyVariables.internalValue = undefined;
      this._statefulDefaultActions = undefined;
      this._statefulEngineOptions.internalValue = undefined;
      this._statefulRuleGroupReferences.internalValue = undefined;
      this._statelessCustomActions.internalValue = undefined;
      this._statelessDefaultActions = undefined;
      this._statelessFragmentDefaultActions = undefined;
      this._statelessRuleGroupReferences.internalValue = undefined;
      this._tlsInspectionConfigurationArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyVariables.internalValue = value.policyVariables;
      this._statefulDefaultActions = value.statefulDefaultActions;
      this._statefulEngineOptions.internalValue = value.statefulEngineOptions;
      this._statefulRuleGroupReferences.internalValue = value.statefulRuleGroupReferences;
      this._statelessCustomActions.internalValue = value.statelessCustomActions;
      this._statelessDefaultActions = value.statelessDefaultActions;
      this._statelessFragmentDefaultActions = value.statelessFragmentDefaultActions;
      this._statelessRuleGroupReferences.internalValue = value.statelessRuleGroupReferences;
      this._tlsInspectionConfigurationArn = value.tlsInspectionConfigurationArn;
    }
  }

  // policy_variables - computed: false, optional: true, required: false
  private _policyVariables = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariablesOutputReference(this, "policy_variables");
  public get policyVariables() {
    return this._policyVariables;
  }
  public putPolicyVariables(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyPolicyVariables) {
    this._policyVariables.internalValue = value;
  }
  public resetPolicyVariables() {
    this._policyVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyVariablesInput() {
    return this._policyVariables.internalValue;
  }

  // stateful_default_actions - computed: false, optional: true, required: false
  private _statefulDefaultActions?: string[]; 
  public get statefulDefaultActions() {
    return this.getListAttribute('stateful_default_actions');
  }
  public set statefulDefaultActions(value: string[]) {
    this._statefulDefaultActions = value;
  }
  public resetStatefulDefaultActions() {
    this._statefulDefaultActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulDefaultActionsInput() {
    return this._statefulDefaultActions;
  }

  // stateful_engine_options - computed: false, optional: true, required: false
  private _statefulEngineOptions = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulEngineOptionsOutputReference(this, "stateful_engine_options");
  public get statefulEngineOptions() {
    return this._statefulEngineOptions;
  }
  public putStatefulEngineOptions(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulEngineOptions) {
    this._statefulEngineOptions.internalValue = value;
  }
  public resetStatefulEngineOptions() {
    this._statefulEngineOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulEngineOptionsInput() {
    return this._statefulEngineOptions.internalValue;
  }

  // stateful_rule_group_references - computed: false, optional: true, required: false
  private _statefulRuleGroupReferences = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferencesList(this, "stateful_rule_group_references", false);
  public get statefulRuleGroupReferences() {
    return this._statefulRuleGroupReferences;
  }
  public putStatefulRuleGroupReferences(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatefulRuleGroupReferences[] | cdktf.IResolvable) {
    this._statefulRuleGroupReferences.internalValue = value;
  }
  public resetStatefulRuleGroupReferences() {
    this._statefulRuleGroupReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulRuleGroupReferencesInput() {
    return this._statefulRuleGroupReferences.internalValue;
  }

  // stateless_custom_actions - computed: false, optional: true, required: false
  private _statelessCustomActions = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActionsList(this, "stateless_custom_actions", false);
  public get statelessCustomActions() {
    return this._statelessCustomActions;
  }
  public putStatelessCustomActions(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessCustomActions[] | cdktf.IResolvable) {
    this._statelessCustomActions.internalValue = value;
  }
  public resetStatelessCustomActions() {
    this._statelessCustomActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessCustomActionsInput() {
    return this._statelessCustomActions.internalValue;
  }

  // stateless_default_actions - computed: false, optional: true, required: false
  private _statelessDefaultActions?: string[]; 
  public get statelessDefaultActions() {
    return this.getListAttribute('stateless_default_actions');
  }
  public set statelessDefaultActions(value: string[]) {
    this._statelessDefaultActions = value;
  }
  public resetStatelessDefaultActions() {
    this._statelessDefaultActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessDefaultActionsInput() {
    return this._statelessDefaultActions;
  }

  // stateless_fragment_default_actions - computed: false, optional: true, required: false
  private _statelessFragmentDefaultActions?: string[]; 
  public get statelessFragmentDefaultActions() {
    return this.getListAttribute('stateless_fragment_default_actions');
  }
  public set statelessFragmentDefaultActions(value: string[]) {
    this._statelessFragmentDefaultActions = value;
  }
  public resetStatelessFragmentDefaultActions() {
    this._statelessFragmentDefaultActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessFragmentDefaultActionsInput() {
    return this._statelessFragmentDefaultActions;
  }

  // stateless_rule_group_references - computed: false, optional: true, required: false
  private _statelessRuleGroupReferences = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferencesList(this, "stateless_rule_group_references", false);
  public get statelessRuleGroupReferences() {
    return this._statelessRuleGroupReferences;
  }
  public putStatelessRuleGroupReferences(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyStatelessRuleGroupReferences[] | cdktf.IResolvable) {
    this._statelessRuleGroupReferences.internalValue = value;
  }
  public resetStatelessRuleGroupReferences() {
    this._statelessRuleGroupReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessRuleGroupReferencesInput() {
    return this._statelessRuleGroupReferences.internalValue;
  }

  // tls_inspection_configuration_arn - computed: false, optional: true, required: false
  private _tlsInspectionConfigurationArn?: string; 
  public get tlsInspectionConfigurationArn() {
    return this.getStringAttribute('tls_inspection_configuration_arn');
  }
  public set tlsInspectionConfigurationArn(value: string) {
    this._tlsInspectionConfigurationArn = value;
  }
  public resetTlsInspectionConfigurationArn() {
    this._tlsInspectionConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInspectionConfigurationArnInput() {
    return this._tlsInspectionConfigurationArn;
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#key DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#value DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpec {
  /**
  * A description of the firewall policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#description DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * A complex type that contains settings for encryption of your firewall policy resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#encryption_configuration DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#encryption_configuration}
  */
  readonly encryptionConfiguration?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecEncryptionConfiguration;
  /**
  * The rule groups and policy actions to use in the firewall policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#firewall_policy DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#firewall_policy}
  */
  readonly firewallPolicy: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicy;
  /**
  * The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#firewall_policy_name DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#firewall_policy_name}
  */
  readonly firewallPolicyName: string;
  /**
  * The key:value pairs to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#tags DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    encryption_configuration: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    firewall_policy: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyToTerraform(struct!.firewallPolicy),
    firewall_policy_name: cdktf.stringToTerraform(struct!.firewallPolicyName),
    tags: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
    encryption_configuration: {
      value: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecEncryptionConfiguration",
    },
    firewall_policy: {
      value: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyToHclTerraform(struct!.firewallPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicy",
    },
    firewall_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.firewallPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    if (this._firewallPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallPolicy = this._firewallPolicy?.internalValue;
    }
    if (this._firewallPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallPolicyName = this._firewallPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._encryptionConfiguration.internalValue = undefined;
      this._firewallPolicy.internalValue = undefined;
      this._firewallPolicyName = undefined;
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
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
      this._firewallPolicy.internalValue = value.firewallPolicy;
      this._firewallPolicyName = value.firewallPolicyName;
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

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // firewall_policy - computed: false, optional: false, required: true
  private _firewallPolicy = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicyOutputReference(this, "firewall_policy");
  public get firewallPolicy() {
    return this._firewallPolicy;
  }
  public putFirewallPolicy(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecFirewallPolicy) {
    this._firewallPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyInput() {
    return this._firewallPolicy.internalValue;
  }

  // firewall_policy_name - computed: false, optional: false, required: true
  private _firewallPolicyName?: string; 
  public get firewallPolicyName() {
    return this.getStringAttribute('firewall_policy_name');
  }
  public set firewallPolicyName(value: string) {
    this._firewallPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyNameInput() {
    return this._firewallPolicyName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest k8s_networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest}
*/
export class DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest k8s_networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_networkfirewall_services_k8s_aws_firewall_policy_v1alpha1_manifest',
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
  private _metadata = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallPolicyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
