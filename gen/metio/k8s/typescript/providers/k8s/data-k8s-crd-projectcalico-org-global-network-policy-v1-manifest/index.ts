// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#metadata DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#metadata}
  */
  readonly metadata: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#spec DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#spec}
  */
  readonly spec?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpec;
}
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#annotations DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#labels DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#name DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServiceAccounts {
  /**
  * Names is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) a pod running as a service account whose name is in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#names DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#names}
  */
  readonly names?: string[];
  /**
  * Selector is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) a pod running as a service account that matches the given label selector. If both Names and Selector are specified then they are AND'ed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#selector}
  */
  readonly selector?: string;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServiceAccountsToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServiceAccountsToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServiceAccountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServiceAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServiceAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
      this._selector = value.selector;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServices {
  /**
  * Name specifies the name of a Kubernetes Service to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#name DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of the given Service. If left empty, the rule will match within this policy's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#namespace DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServicesToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServicesToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServices | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServices | cdktf.IResolvable | undefined) {
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
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestination {
  /**
  * NamespaceSelector is an optional field that contains a selector expression. Only traffic that originates from (or terminates at) endpoints within the selected namespaces will be matched. When both NamespaceSelector and another selector are defined on the same rule, then only workload endpoints that are matched by both selectors will be selected by the rule. For NetworkPolicy, an empty NamespaceSelector implies that the Selector is limited to selecting only workload endpoints in the same namespace as the NetworkPolicy. For NetworkPolicy, 'global()' NamespaceSelector implies that the Selector is limited to selecting only GlobalNetworkSet or HostEndpoint. For GlobalNetworkPolicy, an empty NamespaceSelector implies the Selector applies to workload endpoints across all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#namespace_selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: string;
  /**
  * Nets is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) IP addresses in any of the given subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#nets DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#nets}
  */
  readonly nets?: string[];
  /**
  * NotNets is the negated version of the Nets field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_nets DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_nets}
  */
  readonly notNets?: string[];
  /**
  * NotPorts is the negated version of the Ports field. Since only some protocols have ports, if any ports are specified it requires the Protocol match in the Rule to be set to 'TCP' or 'UDP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_ports DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_ports}
  */
  readonly notPorts?: string[];
  /**
  * NotSelector is the negated version of the Selector field. See Selector field for subtleties with negated selectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_selector}
  */
  readonly notSelector?: string;
  /**
  * Ports is an optional field that restricts the rule to only apply to traffic that has a source (destination) port that matches one of these ranges/values. This value is a list of integers or strings that represent ranges of ports. Since only some protocols have ports, if any ports are specified it requires the Protocol match in the Rule to be set to 'TCP' or 'UDP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#ports DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#ports}
  */
  readonly ports?: string[];
  /**
  * Selector is an optional field that contains a selector expression (see Policy for sample syntax). Only traffic that originates from (terminates at) endpoints matching the selector will be matched. Note that: in addition to the negated version of the Selector (see NotSelector below), the selector expression syntax itself supports negation. The two types of negation are subtly different. One negates the set of matched endpoints, the other negates the whole match: Selector = '!has(my_label)' matches packets that are from other Calico-controlled endpoints that do not have the label 'my_label'. NotSelector = 'has(my_label)' matches packets that are not from Calico-controlled endpoints that do have the label 'my_label'. The effect is that the latter will accept packets from non-Calico sources whereas the former is limited to packets from Calico-controlled endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * ServiceAccounts is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) a pod running as a matching service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#service_accounts DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#service_accounts}
  */
  readonly serviceAccounts?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServiceAccounts;
  /**
  * Services is an optional field that contains options for matching Kubernetes Services. If specified, only traffic that originates from or terminates at endpoints within the selected service(s) will be matched, and only to/from each endpoint's port. Services cannot be specified on the same rule as Selector, NotSelector, NamespaceSelector, Nets, NotNets or ServiceAccounts. Ports and NotPorts can only be specified with Services on ingress rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#services DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#services}
  */
  readonly services?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServices;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selector: cdktf.stringToTerraform(struct!.namespaceSelector),
    nets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nets),
    not_nets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notNets),
    not_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notPorts),
    not_selector: cdktf.stringToTerraform(struct!.notSelector),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
    selector: cdktf.stringToTerraform(struct!.selector),
    service_accounts: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServiceAccountsToTerraform(struct!.serviceAccounts),
    services: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServicesToTerraform(struct!.services),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selector: {
      value: cdktf.stringToHclTerraform(struct!.namespaceSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_nets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notNets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_selector: {
      value: cdktf.stringToHclTerraform(struct!.notSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_accounts: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServiceAccountsToHclTerraform(struct!.serviceAccounts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServiceAccounts",
    },
    services: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServicesToHclTerraform(struct!.services),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServices",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector;
    }
    if (this._nets !== undefined) {
      hasAnyValues = true;
      internalValueResult.nets = this._nets;
    }
    if (this._notNets !== undefined) {
      hasAnyValues = true;
      internalValueResult.notNets = this._notNets;
    }
    if (this._notPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPorts = this._notPorts;
    }
    if (this._notSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSelector = this._notSelector;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._serviceAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccounts = this._serviceAccounts?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceSelector = undefined;
      this._nets = undefined;
      this._notNets = undefined;
      this._notPorts = undefined;
      this._notSelector = undefined;
      this._ports = undefined;
      this._selector = undefined;
      this._serviceAccounts.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceSelector = value.namespaceSelector;
      this._nets = value.nets;
      this._notNets = value.notNets;
      this._notPorts = value.notPorts;
      this._notSelector = value.notSelector;
      this._ports = value.ports;
      this._selector = value.selector;
      this._serviceAccounts.internalValue = value.serviceAccounts;
      this._services.internalValue = value.services;
    }
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector?: string; 
  public get namespaceSelector() {
    return this.getStringAttribute('namespace_selector');
  }
  public set namespaceSelector(value: string) {
    this._namespaceSelector = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector;
  }

  // nets - computed: false, optional: true, required: false
  private _nets?: string[]; 
  public get nets() {
    return this.getListAttribute('nets');
  }
  public set nets(value: string[]) {
    this._nets = value;
  }
  public resetNets() {
    this._nets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netsInput() {
    return this._nets;
  }

  // not_nets - computed: false, optional: true, required: false
  private _notNets?: string[]; 
  public get notNets() {
    return this.getListAttribute('not_nets');
  }
  public set notNets(value: string[]) {
    this._notNets = value;
  }
  public resetNotNets() {
    this._notNets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notNetsInput() {
    return this._notNets;
  }

  // not_ports - computed: false, optional: true, required: false
  private _notPorts?: string[]; 
  public get notPorts() {
    return this.getListAttribute('not_ports');
  }
  public set notPorts(value: string[]) {
    this._notPorts = value;
  }
  public resetNotPorts() {
    this._notPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPortsInput() {
    return this._notPorts;
  }

  // not_selector - computed: false, optional: true, required: false
  private _notSelector?: string; 
  public get notSelector() {
    return this.getStringAttribute('not_selector');
  }
  public set notSelector(value: string) {
    this._notSelector = value;
  }
  public resetNotSelector() {
    this._notSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSelectorInput() {
    return this._notSelector;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // service_accounts - computed: false, optional: true, required: false
  private _serviceAccounts = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServiceAccountsOutputReference(this, "service_accounts");
  public get serviceAccounts() {
    return this._serviceAccounts;
  }
  public putServiceAccounts(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServiceAccounts) {
    this._serviceAccounts.internalValue = value;
  }
  public resetServiceAccounts() {
    this._serviceAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsInput() {
    return this._serviceAccounts.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationServices) {
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
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#exact DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#prefix DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#prefix}
  */
  readonly prefix?: string;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPathsToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPathsToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPathsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPaths[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPathsOutputReference {
    return new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttp {
  /**
  * Methods is an optional field that restricts the rule to apply only to HTTP requests that use one of the listed HTTP Methods (e.g. GET, PUT, etc.) Multiple methods are OR'd together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#methods DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#methods}
  */
  readonly methods?: string[];
  /**
  * Paths is an optional field that restricts the rule to apply to HTTP requests that use one of the listed HTTP Paths. Multiple paths are OR'd together. e.g: - exact: /foo - prefix: /bar NOTE: Each entry may ONLY specify either a 'exact' or a 'prefix' match. The validator will check for it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#paths DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#paths}
  */
  readonly paths?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPaths[] | cdktf.IResolvable;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    paths: cdktf.listMapper(dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPathsToTerraform, false)(struct!.paths),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    paths: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPathsToHclTerraform, false)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._paths.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._paths.internalValue = value.paths;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // paths - computed: false, optional: true, required: false
  private _paths = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  public resetPaths() {
    this._paths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }
}
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressIcmp {
  /**
  * Match on a specific ICMP code. If specified, the Type value must also be specified. This is a technical limitation imposed by the kernel's iptables firewall, which Calico uses to enforce the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#code DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Match on a specific ICMP type. For example a value of 8 refers to ICMP Echo Request (i.e. pings).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#type DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#type}
  */
  readonly type?: number;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressIcmpToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressIcmpToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressIcmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressIcmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
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
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressMetadata {
  /**
  * Annotations is a set of key value pairs that give extra information about the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#annotations DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
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
}
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressNotIcmp {
  /**
  * Match on a specific ICMP code. If specified, the Type value must also be specified. This is a technical limitation imposed by the kernel's iptables firewall, which Calico uses to enforce the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#code DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Match on a specific ICMP type. For example a value of 8 refers to ICMP Echo Request (i.e. pings).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#type DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#type}
  */
  readonly type?: number;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressNotIcmpToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressNotIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressNotIcmpToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressNotIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressNotIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressNotIcmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressNotIcmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
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
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServiceAccounts {
  /**
  * Names is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) a pod running as a service account whose name is in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#names DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#names}
  */
  readonly names?: string[];
  /**
  * Selector is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) a pod running as a service account that matches the given label selector. If both Names and Selector are specified then they are AND'ed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#selector}
  */
  readonly selector?: string;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServiceAccountsToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServiceAccountsToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServiceAccountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServiceAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServiceAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
      this._selector = value.selector;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServices {
  /**
  * Name specifies the name of a Kubernetes Service to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#name DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of the given Service. If left empty, the rule will match within this policy's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#namespace DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServicesToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServicesToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServices | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServices | cdktf.IResolvable | undefined) {
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
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSource {
  /**
  * NamespaceSelector is an optional field that contains a selector expression. Only traffic that originates from (or terminates at) endpoints within the selected namespaces will be matched. When both NamespaceSelector and another selector are defined on the same rule, then only workload endpoints that are matched by both selectors will be selected by the rule. For NetworkPolicy, an empty NamespaceSelector implies that the Selector is limited to selecting only workload endpoints in the same namespace as the NetworkPolicy. For NetworkPolicy, 'global()' NamespaceSelector implies that the Selector is limited to selecting only GlobalNetworkSet or HostEndpoint. For GlobalNetworkPolicy, an empty NamespaceSelector implies the Selector applies to workload endpoints across all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#namespace_selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: string;
  /**
  * Nets is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) IP addresses in any of the given subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#nets DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#nets}
  */
  readonly nets?: string[];
  /**
  * NotNets is the negated version of the Nets field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_nets DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_nets}
  */
  readonly notNets?: string[];
  /**
  * NotPorts is the negated version of the Ports field. Since only some protocols have ports, if any ports are specified it requires the Protocol match in the Rule to be set to 'TCP' or 'UDP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_ports DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_ports}
  */
  readonly notPorts?: string[];
  /**
  * NotSelector is the negated version of the Selector field. See Selector field for subtleties with negated selectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_selector}
  */
  readonly notSelector?: string;
  /**
  * Ports is an optional field that restricts the rule to only apply to traffic that has a source (destination) port that matches one of these ranges/values. This value is a list of integers or strings that represent ranges of ports. Since only some protocols have ports, if any ports are specified it requires the Protocol match in the Rule to be set to 'TCP' or 'UDP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#ports DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#ports}
  */
  readonly ports?: string[];
  /**
  * Selector is an optional field that contains a selector expression (see Policy for sample syntax). Only traffic that originates from (terminates at) endpoints matching the selector will be matched. Note that: in addition to the negated version of the Selector (see NotSelector below), the selector expression syntax itself supports negation. The two types of negation are subtly different. One negates the set of matched endpoints, the other negates the whole match: Selector = '!has(my_label)' matches packets that are from other Calico-controlled endpoints that do not have the label 'my_label'. NotSelector = 'has(my_label)' matches packets that are not from Calico-controlled endpoints that do have the label 'my_label'. The effect is that the latter will accept packets from non-Calico sources whereas the former is limited to packets from Calico-controlled endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * ServiceAccounts is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) a pod running as a matching service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#service_accounts DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#service_accounts}
  */
  readonly serviceAccounts?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServiceAccounts;
  /**
  * Services is an optional field that contains options for matching Kubernetes Services. If specified, only traffic that originates from or terminates at endpoints within the selected service(s) will be matched, and only to/from each endpoint's port. Services cannot be specified on the same rule as Selector, NotSelector, NamespaceSelector, Nets, NotNets or ServiceAccounts. Ports and NotPorts can only be specified with Services on ingress rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#services DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#services}
  */
  readonly services?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServices;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selector: cdktf.stringToTerraform(struct!.namespaceSelector),
    nets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nets),
    not_nets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notNets),
    not_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notPorts),
    not_selector: cdktf.stringToTerraform(struct!.notSelector),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
    selector: cdktf.stringToTerraform(struct!.selector),
    service_accounts: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServiceAccountsToTerraform(struct!.serviceAccounts),
    services: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServicesToTerraform(struct!.services),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selector: {
      value: cdktf.stringToHclTerraform(struct!.namespaceSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_nets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notNets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_selector: {
      value: cdktf.stringToHclTerraform(struct!.notSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_accounts: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServiceAccountsToHclTerraform(struct!.serviceAccounts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServiceAccounts",
    },
    services: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServicesToHclTerraform(struct!.services),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServices",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector;
    }
    if (this._nets !== undefined) {
      hasAnyValues = true;
      internalValueResult.nets = this._nets;
    }
    if (this._notNets !== undefined) {
      hasAnyValues = true;
      internalValueResult.notNets = this._notNets;
    }
    if (this._notPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPorts = this._notPorts;
    }
    if (this._notSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSelector = this._notSelector;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._serviceAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccounts = this._serviceAccounts?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceSelector = undefined;
      this._nets = undefined;
      this._notNets = undefined;
      this._notPorts = undefined;
      this._notSelector = undefined;
      this._ports = undefined;
      this._selector = undefined;
      this._serviceAccounts.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceSelector = value.namespaceSelector;
      this._nets = value.nets;
      this._notNets = value.notNets;
      this._notPorts = value.notPorts;
      this._notSelector = value.notSelector;
      this._ports = value.ports;
      this._selector = value.selector;
      this._serviceAccounts.internalValue = value.serviceAccounts;
      this._services.internalValue = value.services;
    }
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector?: string; 
  public get namespaceSelector() {
    return this.getStringAttribute('namespace_selector');
  }
  public set namespaceSelector(value: string) {
    this._namespaceSelector = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector;
  }

  // nets - computed: false, optional: true, required: false
  private _nets?: string[]; 
  public get nets() {
    return this.getListAttribute('nets');
  }
  public set nets(value: string[]) {
    this._nets = value;
  }
  public resetNets() {
    this._nets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netsInput() {
    return this._nets;
  }

  // not_nets - computed: false, optional: true, required: false
  private _notNets?: string[]; 
  public get notNets() {
    return this.getListAttribute('not_nets');
  }
  public set notNets(value: string[]) {
    this._notNets = value;
  }
  public resetNotNets() {
    this._notNets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notNetsInput() {
    return this._notNets;
  }

  // not_ports - computed: false, optional: true, required: false
  private _notPorts?: string[]; 
  public get notPorts() {
    return this.getListAttribute('not_ports');
  }
  public set notPorts(value: string[]) {
    this._notPorts = value;
  }
  public resetNotPorts() {
    this._notPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPortsInput() {
    return this._notPorts;
  }

  // not_selector - computed: false, optional: true, required: false
  private _notSelector?: string; 
  public get notSelector() {
    return this.getStringAttribute('not_selector');
  }
  public set notSelector(value: string) {
    this._notSelector = value;
  }
  public resetNotSelector() {
    this._notSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSelectorInput() {
    return this._notSelector;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // service_accounts - computed: false, optional: true, required: false
  private _serviceAccounts = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServiceAccountsOutputReference(this, "service_accounts");
  public get serviceAccounts() {
    return this._serviceAccounts;
  }
  public putServiceAccounts(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServiceAccounts) {
    this._serviceAccounts.internalValue = value;
  }
  public resetServiceAccounts() {
    this._serviceAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsInput() {
    return this._serviceAccounts.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceServices) {
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
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#action DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#action}
  */
  readonly action: string;
  /**
  * Destination contains the match criteria that apply to destination entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#destination DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#destination}
  */
  readonly destination?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestination;
  /**
  * HTTP contains match criteria that apply to HTTP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#http DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#http}
  */
  readonly http?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttp;
  /**
  * ICMP is an optional field that restricts the rule to apply to a specific type and code of ICMP traffic. This should only be specified if the Protocol field is set to 'ICMP' or 'ICMPv6'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#icmp DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#icmp}
  */
  readonly icmp?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressIcmp;
  /**
  * IPVersion is an optional field that restricts the rule to only match a specific IP version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#ip_version DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#ip_version}
  */
  readonly ipVersion?: number;
  /**
  * Metadata contains additional information for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#metadata DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#metadata}
  */
  readonly metadata?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressMetadata;
  /**
  * NotICMP is the negated version of the ICMP field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_icmp DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_icmp}
  */
  readonly notIcmp?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressNotIcmp;
  /**
  * NotProtocol is the negated version of the Protocol field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_protocol DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_protocol}
  */
  readonly notProtocol?: string;
  /**
  * Protocol is an optional field that restricts the rule to only apply to traffic of a specific IP protocol. Required if any of the EntityRules contain Ports (because ports only apply to certain protocols). Must be one of these string values: 'TCP', 'UDP', 'ICMP', 'ICMPv6', 'SCTP', 'UDPLite' or an integer in the range 1-255.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#protocol DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Source contains the match criteria that apply to source entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#source DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#source}
  */
  readonly source?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSource;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    destination: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationToTerraform(struct!.destination),
    http: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpToTerraform(struct!.http),
    icmp: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressIcmpToTerraform(struct!.icmp),
    ip_version: cdktf.numberToTerraform(struct!.ipVersion),
    metadata: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressMetadataToTerraform(struct!.metadata),
    not_icmp: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressNotIcmpToTerraform(struct!.notIcmp),
    not_protocol: cdktf.stringToTerraform(struct!.notProtocol),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceToTerraform(struct!.source),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgress | cdktf.IResolvable): any {
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
    destination: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestination",
    },
    http: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttp",
    },
    icmp: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressIcmpToHclTerraform(struct!.icmp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressIcmp",
    },
    ip_version: {
      value: cdktf.numberToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressMetadata",
    },
    not_icmp: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressNotIcmpToHclTerraform(struct!.notIcmp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressNotIcmp",
    },
    not_protocol: {
      value: cdktf.stringToHclTerraform(struct!.notProtocol),
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
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._icmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp?.internalValue;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._notIcmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notIcmp = this._notIcmp?.internalValue;
    }
    if (this._notProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.notProtocol = this._notProtocol;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._destination.internalValue = undefined;
      this._http.internalValue = undefined;
      this._icmp.internalValue = undefined;
      this._ipVersion = undefined;
      this._metadata.internalValue = undefined;
      this._notIcmp.internalValue = undefined;
      this._notProtocol = undefined;
      this._protocol = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._destination.internalValue = value.destination;
      this._http.internalValue = value.http;
      this._icmp.internalValue = value.icmp;
      this._ipVersion = value.ipVersion;
      this._metadata.internalValue = value.metadata;
      this._notIcmp.internalValue = value.notIcmp;
      this._notProtocol = value.notProtocol;
      this._protocol = value.protocol;
      this._source.internalValue = value.source;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }
  public putIcmp(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressIcmp) {
    this._icmp.internalValue = value;
  }
  public resetIcmp() {
    this._icmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp.internalValue;
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: number; 
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }
  public set ipVersion(value: number) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // not_icmp - computed: false, optional: true, required: false
  private _notIcmp = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressNotIcmpOutputReference(this, "not_icmp");
  public get notIcmp() {
    return this._notIcmp;
  }
  public putNotIcmp(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressNotIcmp) {
    this._notIcmp.internalValue = value;
  }
  public resetNotIcmp() {
    this._notIcmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notIcmpInput() {
    return this._notIcmp.internalValue;
  }

  // not_protocol - computed: false, optional: true, required: false
  private _notProtocol?: string; 
  public get notProtocol() {
    return this.getStringAttribute('not_protocol');
  }
  public set notProtocol(value: string) {
    this._notProtocol = value;
  }
  public resetNotProtocol() {
    this._notProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notProtocolInput() {
    return this._notProtocol;
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
  private _source = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressOutputReference {
    return new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServiceAccounts {
  /**
  * Names is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) a pod running as a service account whose name is in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#names DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#names}
  */
  readonly names?: string[];
  /**
  * Selector is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) a pod running as a service account that matches the given label selector. If both Names and Selector are specified then they are AND'ed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#selector}
  */
  readonly selector?: string;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServiceAccountsToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServiceAccountsToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServiceAccountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServiceAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServiceAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
      this._selector = value.selector;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServices {
  /**
  * Name specifies the name of a Kubernetes Service to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#name DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of the given Service. If left empty, the rule will match within this policy's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#namespace DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServicesToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServicesToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServices | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServices | cdktf.IResolvable | undefined) {
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
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestination {
  /**
  * NamespaceSelector is an optional field that contains a selector expression. Only traffic that originates from (or terminates at) endpoints within the selected namespaces will be matched. When both NamespaceSelector and another selector are defined on the same rule, then only workload endpoints that are matched by both selectors will be selected by the rule. For NetworkPolicy, an empty NamespaceSelector implies that the Selector is limited to selecting only workload endpoints in the same namespace as the NetworkPolicy. For NetworkPolicy, 'global()' NamespaceSelector implies that the Selector is limited to selecting only GlobalNetworkSet or HostEndpoint. For GlobalNetworkPolicy, an empty NamespaceSelector implies the Selector applies to workload endpoints across all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#namespace_selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: string;
  /**
  * Nets is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) IP addresses in any of the given subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#nets DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#nets}
  */
  readonly nets?: string[];
  /**
  * NotNets is the negated version of the Nets field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_nets DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_nets}
  */
  readonly notNets?: string[];
  /**
  * NotPorts is the negated version of the Ports field. Since only some protocols have ports, if any ports are specified it requires the Protocol match in the Rule to be set to 'TCP' or 'UDP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_ports DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_ports}
  */
  readonly notPorts?: string[];
  /**
  * NotSelector is the negated version of the Selector field. See Selector field for subtleties with negated selectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_selector}
  */
  readonly notSelector?: string;
  /**
  * Ports is an optional field that restricts the rule to only apply to traffic that has a source (destination) port that matches one of these ranges/values. This value is a list of integers or strings that represent ranges of ports. Since only some protocols have ports, if any ports are specified it requires the Protocol match in the Rule to be set to 'TCP' or 'UDP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#ports DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#ports}
  */
  readonly ports?: string[];
  /**
  * Selector is an optional field that contains a selector expression (see Policy for sample syntax). Only traffic that originates from (terminates at) endpoints matching the selector will be matched. Note that: in addition to the negated version of the Selector (see NotSelector below), the selector expression syntax itself supports negation. The two types of negation are subtly different. One negates the set of matched endpoints, the other negates the whole match: Selector = '!has(my_label)' matches packets that are from other Calico-controlled endpoints that do not have the label 'my_label'. NotSelector = 'has(my_label)' matches packets that are not from Calico-controlled endpoints that do have the label 'my_label'. The effect is that the latter will accept packets from non-Calico sources whereas the former is limited to packets from Calico-controlled endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * ServiceAccounts is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) a pod running as a matching service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#service_accounts DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#service_accounts}
  */
  readonly serviceAccounts?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServiceAccounts;
  /**
  * Services is an optional field that contains options for matching Kubernetes Services. If specified, only traffic that originates from or terminates at endpoints within the selected service(s) will be matched, and only to/from each endpoint's port. Services cannot be specified on the same rule as Selector, NotSelector, NamespaceSelector, Nets, NotNets or ServiceAccounts. Ports and NotPorts can only be specified with Services on ingress rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#services DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#services}
  */
  readonly services?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServices;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selector: cdktf.stringToTerraform(struct!.namespaceSelector),
    nets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nets),
    not_nets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notNets),
    not_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notPorts),
    not_selector: cdktf.stringToTerraform(struct!.notSelector),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
    selector: cdktf.stringToTerraform(struct!.selector),
    service_accounts: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServiceAccountsToTerraform(struct!.serviceAccounts),
    services: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServicesToTerraform(struct!.services),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selector: {
      value: cdktf.stringToHclTerraform(struct!.namespaceSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_nets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notNets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_selector: {
      value: cdktf.stringToHclTerraform(struct!.notSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_accounts: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServiceAccountsToHclTerraform(struct!.serviceAccounts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServiceAccounts",
    },
    services: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServicesToHclTerraform(struct!.services),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServices",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector;
    }
    if (this._nets !== undefined) {
      hasAnyValues = true;
      internalValueResult.nets = this._nets;
    }
    if (this._notNets !== undefined) {
      hasAnyValues = true;
      internalValueResult.notNets = this._notNets;
    }
    if (this._notPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPorts = this._notPorts;
    }
    if (this._notSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSelector = this._notSelector;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._serviceAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccounts = this._serviceAccounts?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceSelector = undefined;
      this._nets = undefined;
      this._notNets = undefined;
      this._notPorts = undefined;
      this._notSelector = undefined;
      this._ports = undefined;
      this._selector = undefined;
      this._serviceAccounts.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceSelector = value.namespaceSelector;
      this._nets = value.nets;
      this._notNets = value.notNets;
      this._notPorts = value.notPorts;
      this._notSelector = value.notSelector;
      this._ports = value.ports;
      this._selector = value.selector;
      this._serviceAccounts.internalValue = value.serviceAccounts;
      this._services.internalValue = value.services;
    }
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector?: string; 
  public get namespaceSelector() {
    return this.getStringAttribute('namespace_selector');
  }
  public set namespaceSelector(value: string) {
    this._namespaceSelector = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector;
  }

  // nets - computed: false, optional: true, required: false
  private _nets?: string[]; 
  public get nets() {
    return this.getListAttribute('nets');
  }
  public set nets(value: string[]) {
    this._nets = value;
  }
  public resetNets() {
    this._nets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netsInput() {
    return this._nets;
  }

  // not_nets - computed: false, optional: true, required: false
  private _notNets?: string[]; 
  public get notNets() {
    return this.getListAttribute('not_nets');
  }
  public set notNets(value: string[]) {
    this._notNets = value;
  }
  public resetNotNets() {
    this._notNets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notNetsInput() {
    return this._notNets;
  }

  // not_ports - computed: false, optional: true, required: false
  private _notPorts?: string[]; 
  public get notPorts() {
    return this.getListAttribute('not_ports');
  }
  public set notPorts(value: string[]) {
    this._notPorts = value;
  }
  public resetNotPorts() {
    this._notPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPortsInput() {
    return this._notPorts;
  }

  // not_selector - computed: false, optional: true, required: false
  private _notSelector?: string; 
  public get notSelector() {
    return this.getStringAttribute('not_selector');
  }
  public set notSelector(value: string) {
    this._notSelector = value;
  }
  public resetNotSelector() {
    this._notSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSelectorInput() {
    return this._notSelector;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // service_accounts - computed: false, optional: true, required: false
  private _serviceAccounts = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServiceAccountsOutputReference(this, "service_accounts");
  public get serviceAccounts() {
    return this._serviceAccounts;
  }
  public putServiceAccounts(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServiceAccounts) {
    this._serviceAccounts.internalValue = value;
  }
  public resetServiceAccounts() {
    this._serviceAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsInput() {
    return this._serviceAccounts.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationServices) {
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
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#exact DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#prefix DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#prefix}
  */
  readonly prefix?: string;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPathsToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPathsToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPathsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPaths[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPathsOutputReference {
    return new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttp {
  /**
  * Methods is an optional field that restricts the rule to apply only to HTTP requests that use one of the listed HTTP Methods (e.g. GET, PUT, etc.) Multiple methods are OR'd together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#methods DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#methods}
  */
  readonly methods?: string[];
  /**
  * Paths is an optional field that restricts the rule to apply to HTTP requests that use one of the listed HTTP Paths. Multiple paths are OR'd together. e.g: - exact: /foo - prefix: /bar NOTE: Each entry may ONLY specify either a 'exact' or a 'prefix' match. The validator will check for it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#paths DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#paths}
  */
  readonly paths?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPaths[] | cdktf.IResolvable;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    paths: cdktf.listMapper(dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPathsToTerraform, false)(struct!.paths),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    paths: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPathsToHclTerraform, false)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._paths.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._paths.internalValue = value.paths;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // paths - computed: false, optional: true, required: false
  private _paths = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  public resetPaths() {
    this._paths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }
}
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressIcmp {
  /**
  * Match on a specific ICMP code. If specified, the Type value must also be specified. This is a technical limitation imposed by the kernel's iptables firewall, which Calico uses to enforce the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#code DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Match on a specific ICMP type. For example a value of 8 refers to ICMP Echo Request (i.e. pings).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#type DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#type}
  */
  readonly type?: number;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressIcmpToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressIcmpToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressIcmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressIcmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
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
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressMetadata {
  /**
  * Annotations is a set of key value pairs that give extra information about the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#annotations DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
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
}
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressNotIcmp {
  /**
  * Match on a specific ICMP code. If specified, the Type value must also be specified. This is a technical limitation imposed by the kernel's iptables firewall, which Calico uses to enforce the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#code DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Match on a specific ICMP type. For example a value of 8 refers to ICMP Echo Request (i.e. pings).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#type DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#type}
  */
  readonly type?: number;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressNotIcmpToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressNotIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressNotIcmpToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressNotIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressNotIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressNotIcmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressNotIcmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
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
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServiceAccounts {
  /**
  * Names is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) a pod running as a service account whose name is in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#names DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#names}
  */
  readonly names?: string[];
  /**
  * Selector is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) a pod running as a service account that matches the given label selector. If both Names and Selector are specified then they are AND'ed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#selector}
  */
  readonly selector?: string;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServiceAccountsToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServiceAccountsToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServiceAccountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServiceAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServiceAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
      this._selector = value.selector;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServices {
  /**
  * Name specifies the name of a Kubernetes Service to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#name DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of the given Service. If left empty, the rule will match within this policy's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#namespace DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServicesToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServicesToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServices | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServices | cdktf.IResolvable | undefined) {
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
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSource {
  /**
  * NamespaceSelector is an optional field that contains a selector expression. Only traffic that originates from (or terminates at) endpoints within the selected namespaces will be matched. When both NamespaceSelector and another selector are defined on the same rule, then only workload endpoints that are matched by both selectors will be selected by the rule. For NetworkPolicy, an empty NamespaceSelector implies that the Selector is limited to selecting only workload endpoints in the same namespace as the NetworkPolicy. For NetworkPolicy, 'global()' NamespaceSelector implies that the Selector is limited to selecting only GlobalNetworkSet or HostEndpoint. For GlobalNetworkPolicy, an empty NamespaceSelector implies the Selector applies to workload endpoints across all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#namespace_selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: string;
  /**
  * Nets is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) IP addresses in any of the given subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#nets DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#nets}
  */
  readonly nets?: string[];
  /**
  * NotNets is the negated version of the Nets field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_nets DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_nets}
  */
  readonly notNets?: string[];
  /**
  * NotPorts is the negated version of the Ports field. Since only some protocols have ports, if any ports are specified it requires the Protocol match in the Rule to be set to 'TCP' or 'UDP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_ports DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_ports}
  */
  readonly notPorts?: string[];
  /**
  * NotSelector is the negated version of the Selector field. See Selector field for subtleties with negated selectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_selector}
  */
  readonly notSelector?: string;
  /**
  * Ports is an optional field that restricts the rule to only apply to traffic that has a source (destination) port that matches one of these ranges/values. This value is a list of integers or strings that represent ranges of ports. Since only some protocols have ports, if any ports are specified it requires the Protocol match in the Rule to be set to 'TCP' or 'UDP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#ports DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#ports}
  */
  readonly ports?: string[];
  /**
  * Selector is an optional field that contains a selector expression (see Policy for sample syntax). Only traffic that originates from (terminates at) endpoints matching the selector will be matched. Note that: in addition to the negated version of the Selector (see NotSelector below), the selector expression syntax itself supports negation. The two types of negation are subtly different. One negates the set of matched endpoints, the other negates the whole match: Selector = '!has(my_label)' matches packets that are from other Calico-controlled endpoints that do not have the label 'my_label'. NotSelector = 'has(my_label)' matches packets that are not from Calico-controlled endpoints that do have the label 'my_label'. The effect is that the latter will accept packets from non-Calico sources whereas the former is limited to packets from Calico-controlled endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * ServiceAccounts is an optional field that restricts the rule to only apply to traffic that originates from (or terminates at) a pod running as a matching service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#service_accounts DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#service_accounts}
  */
  readonly serviceAccounts?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServiceAccounts;
  /**
  * Services is an optional field that contains options for matching Kubernetes Services. If specified, only traffic that originates from or terminates at endpoints within the selected service(s) will be matched, and only to/from each endpoint's port. Services cannot be specified on the same rule as Selector, NotSelector, NamespaceSelector, Nets, NotNets or ServiceAccounts. Ports and NotPorts can only be specified with Services on ingress rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#services DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#services}
  */
  readonly services?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServices;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selector: cdktf.stringToTerraform(struct!.namespaceSelector),
    nets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nets),
    not_nets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notNets),
    not_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notPorts),
    not_selector: cdktf.stringToTerraform(struct!.notSelector),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
    selector: cdktf.stringToTerraform(struct!.selector),
    service_accounts: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServiceAccountsToTerraform(struct!.serviceAccounts),
    services: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServicesToTerraform(struct!.services),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selector: {
      value: cdktf.stringToHclTerraform(struct!.namespaceSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_nets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notNets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_selector: {
      value: cdktf.stringToHclTerraform(struct!.notSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_accounts: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServiceAccountsToHclTerraform(struct!.serviceAccounts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServiceAccounts",
    },
    services: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServicesToHclTerraform(struct!.services),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServices",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector;
    }
    if (this._nets !== undefined) {
      hasAnyValues = true;
      internalValueResult.nets = this._nets;
    }
    if (this._notNets !== undefined) {
      hasAnyValues = true;
      internalValueResult.notNets = this._notNets;
    }
    if (this._notPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPorts = this._notPorts;
    }
    if (this._notSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSelector = this._notSelector;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._serviceAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccounts = this._serviceAccounts?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceSelector = undefined;
      this._nets = undefined;
      this._notNets = undefined;
      this._notPorts = undefined;
      this._notSelector = undefined;
      this._ports = undefined;
      this._selector = undefined;
      this._serviceAccounts.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceSelector = value.namespaceSelector;
      this._nets = value.nets;
      this._notNets = value.notNets;
      this._notPorts = value.notPorts;
      this._notSelector = value.notSelector;
      this._ports = value.ports;
      this._selector = value.selector;
      this._serviceAccounts.internalValue = value.serviceAccounts;
      this._services.internalValue = value.services;
    }
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector?: string; 
  public get namespaceSelector() {
    return this.getStringAttribute('namespace_selector');
  }
  public set namespaceSelector(value: string) {
    this._namespaceSelector = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector;
  }

  // nets - computed: false, optional: true, required: false
  private _nets?: string[]; 
  public get nets() {
    return this.getListAttribute('nets');
  }
  public set nets(value: string[]) {
    this._nets = value;
  }
  public resetNets() {
    this._nets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netsInput() {
    return this._nets;
  }

  // not_nets - computed: false, optional: true, required: false
  private _notNets?: string[]; 
  public get notNets() {
    return this.getListAttribute('not_nets');
  }
  public set notNets(value: string[]) {
    this._notNets = value;
  }
  public resetNotNets() {
    this._notNets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notNetsInput() {
    return this._notNets;
  }

  // not_ports - computed: false, optional: true, required: false
  private _notPorts?: string[]; 
  public get notPorts() {
    return this.getListAttribute('not_ports');
  }
  public set notPorts(value: string[]) {
    this._notPorts = value;
  }
  public resetNotPorts() {
    this._notPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPortsInput() {
    return this._notPorts;
  }

  // not_selector - computed: false, optional: true, required: false
  private _notSelector?: string; 
  public get notSelector() {
    return this.getStringAttribute('not_selector');
  }
  public set notSelector(value: string) {
    this._notSelector = value;
  }
  public resetNotSelector() {
    this._notSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSelectorInput() {
    return this._notSelector;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // service_accounts - computed: false, optional: true, required: false
  private _serviceAccounts = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServiceAccountsOutputReference(this, "service_accounts");
  public get serviceAccounts() {
    return this._serviceAccounts;
  }
  public putServiceAccounts(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServiceAccounts) {
    this._serviceAccounts.internalValue = value;
  }
  public resetServiceAccounts() {
    this._serviceAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsInput() {
    return this._serviceAccounts.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceServices) {
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
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#action DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#action}
  */
  readonly action: string;
  /**
  * Destination contains the match criteria that apply to destination entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#destination DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#destination}
  */
  readonly destination?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestination;
  /**
  * HTTP contains match criteria that apply to HTTP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#http DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#http}
  */
  readonly http?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttp;
  /**
  * ICMP is an optional field that restricts the rule to apply to a specific type and code of ICMP traffic. This should only be specified if the Protocol field is set to 'ICMP' or 'ICMPv6'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#icmp DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#icmp}
  */
  readonly icmp?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressIcmp;
  /**
  * IPVersion is an optional field that restricts the rule to only match a specific IP version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#ip_version DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#ip_version}
  */
  readonly ipVersion?: number;
  /**
  * Metadata contains additional information for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#metadata DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#metadata}
  */
  readonly metadata?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressMetadata;
  /**
  * NotICMP is the negated version of the ICMP field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_icmp DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_icmp}
  */
  readonly notIcmp?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressNotIcmp;
  /**
  * NotProtocol is the negated version of the Protocol field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#not_protocol DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#not_protocol}
  */
  readonly notProtocol?: string;
  /**
  * Protocol is an optional field that restricts the rule to only apply to traffic of a specific IP protocol. Required if any of the EntityRules contain Ports (because ports only apply to certain protocols). Must be one of these string values: 'TCP', 'UDP', 'ICMP', 'ICMPv6', 'SCTP', 'UDPLite' or an integer in the range 1-255.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#protocol DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Source contains the match criteria that apply to source entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#source DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#source}
  */
  readonly source?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSource;
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    destination: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationToTerraform(struct!.destination),
    http: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpToTerraform(struct!.http),
    icmp: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressIcmpToTerraform(struct!.icmp),
    ip_version: cdktf.numberToTerraform(struct!.ipVersion),
    metadata: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressMetadataToTerraform(struct!.metadata),
    not_icmp: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressNotIcmpToTerraform(struct!.notIcmp),
    not_protocol: cdktf.stringToTerraform(struct!.notProtocol),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceToTerraform(struct!.source),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngress | cdktf.IResolvable): any {
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
    destination: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestination",
    },
    http: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttp",
    },
    icmp: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressIcmpToHclTerraform(struct!.icmp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressIcmp",
    },
    ip_version: {
      value: cdktf.numberToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressMetadata",
    },
    not_icmp: {
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressNotIcmpToHclTerraform(struct!.notIcmp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressNotIcmp",
    },
    not_protocol: {
      value: cdktf.stringToHclTerraform(struct!.notProtocol),
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
      value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._icmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp?.internalValue;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._notIcmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notIcmp = this._notIcmp?.internalValue;
    }
    if (this._notProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.notProtocol = this._notProtocol;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._destination.internalValue = undefined;
      this._http.internalValue = undefined;
      this._icmp.internalValue = undefined;
      this._ipVersion = undefined;
      this._metadata.internalValue = undefined;
      this._notIcmp.internalValue = undefined;
      this._notProtocol = undefined;
      this._protocol = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._destination.internalValue = value.destination;
      this._http.internalValue = value.http;
      this._icmp.internalValue = value.icmp;
      this._ipVersion = value.ipVersion;
      this._metadata.internalValue = value.metadata;
      this._notIcmp.internalValue = value.notIcmp;
      this._notProtocol = value.notProtocol;
      this._protocol = value.protocol;
      this._source.internalValue = value.source;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }
  public putIcmp(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressIcmp) {
    this._icmp.internalValue = value;
  }
  public resetIcmp() {
    this._icmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp.internalValue;
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: number; 
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }
  public set ipVersion(value: number) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // not_icmp - computed: false, optional: true, required: false
  private _notIcmp = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressNotIcmpOutputReference(this, "not_icmp");
  public get notIcmp() {
    return this._notIcmp;
  }
  public putNotIcmp(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressNotIcmp) {
    this._notIcmp.internalValue = value;
  }
  public resetNotIcmp() {
    this._notIcmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notIcmpInput() {
    return this._notIcmp.internalValue;
  }

  // not_protocol - computed: false, optional: true, required: false
  private _notProtocol?: string; 
  public get notProtocol() {
    return this.getStringAttribute('not_protocol');
  }
  public set notProtocol(value: string) {
    this._notProtocol = value;
  }
  public resetNotProtocol() {
    this._notProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notProtocolInput() {
    return this._notProtocol;
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
  private _source = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressOutputReference {
    return new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpec {
  /**
  * ApplyOnForward indicates to apply the rules in this policy on forward traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#apply_on_forward DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#apply_on_forward}
  */
  readonly applyOnForward?: boolean | cdktf.IResolvable;
  /**
  * DoNotTrack indicates whether packets matched by the rules in this policy should go through the data plane's connection tracking, such as Linux conntrack. If True, the rules in this policy are applied before any data plane connection tracking, and packets allowed by this policy are marked as not to be tracked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#do_not_track DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#do_not_track}
  */
  readonly doNotTrack?: boolean | cdktf.IResolvable;
  /**
  * The ordered set of egress rules. Each rule contains a set of packet match criteria and a corresponding action to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#egress DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#egress}
  */
  readonly egress?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgress[] | cdktf.IResolvable;
  /**
  * The ordered set of ingress rules. Each rule contains a set of packet match criteria and a corresponding action to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#ingress DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#ingress}
  */
  readonly ingress?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngress[] | cdktf.IResolvable;
  /**
  * NamespaceSelector is an optional field for an expression used to select a pod based on namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#namespace_selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: string;
  /**
  * Order is an optional field that specifies the order in which the policy is applied. Policies with higher 'order' are applied after those with lower order within the same tier. If the order is omitted, it may be considered to be 'infinite' - i.e. the policy will be applied last. Policies with identical order will be applied in alphanumerical order based on the Policy 'Name' within the tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#order DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#order}
  */
  readonly order?: number;
  /**
  * PerformanceHints contains a list of hints to Calico's policy engine to help process the policy more efficiently. Hints never change the enforcement behaviour of the policy. Currently, the only available hint is 'AssumeNeededOnEveryNode'. When that hint is set on a policy, Felix will act as if the policy matches a local endpoint even if it does not. This is useful for 'preloading' any large static policies that are known to be used on every node. If the policy is _not_ used on a particular node then the work done to preload the policy (and to maintain it) is wasted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#performance_hints DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#performance_hints}
  */
  readonly performanceHints?: string[];
  /**
  * PreDNAT indicates to apply the rules in this policy before any DNAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#pre_dnat DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#pre_dnat}
  */
  readonly preDnat?: boolean | cdktf.IResolvable;
  /**
  * The selector is an expression used to pick out the endpoints that the policy should be applied to. Selector expressions follow this syntax: label == 'string_literal' -> comparison, e.g. my_label == 'foo bar' label != 'string_literal' -> not equal; also matches if label is not present label in { 'a', 'b', 'c', ... } -> true if the value of label X is one of 'a', 'b', 'c' label not in { 'a', 'b', 'c', ... } -> true if the value of label X is not one of 'a', 'b', 'c' has(label_name) -> True if that label is present ! expr -> negation of expr expr && expr -> Short-circuit and expr || expr -> Short-circuit or ( expr ) -> parens for grouping all() or the empty selector -> matches all endpoints. Label names are allowed to contain alphanumerics, -, _ and /. String literals are more permissive but they do not support escape characters. Examples (with made-up labels): type == 'webserver' && deployment == 'prod' type in {'frontend', 'backend'} deployment != 'dev' ! has(label_name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * ServiceAccountSelector is an optional field for an expression used to select a pod based on service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#service_account_selector DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#service_account_selector}
  */
  readonly serviceAccountSelector?: string;
  /**
  * The name of the tier that this policy belongs to. If this is omitted, the default tier (name is 'default') is assumed. The specified tier must exist in order to create security policies within the tier, the 'default' tier is created automatically if it does not exist, this means for deployments requiring only a single Tier, the tier name may be omitted on all policy management requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#tier DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#tier}
  */
  readonly tier?: string;
  /**
  * Types indicates whether this policy applies to ingress, or to egress, or to both. When not explicitly specified (and so the value on creation is empty or nil), Calico defaults Types according to what Ingress and Egress rules are present in the policy. The default is: - [ PolicyTypeIngress ], if there are no Egress rules (including the case where there are also no Ingress rules) - [ PolicyTypeEgress ], if there are Egress rules but no Ingress rules - [ PolicyTypeIngress, PolicyTypeEgress ], if there are both Ingress and Egress rules. When the policy is read back again, Types will always be one of these values, never empty or nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#types DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest#types}
  */
  readonly types?: string[];
}

export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecToTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_on_forward: cdktf.booleanToTerraform(struct!.applyOnForward),
    do_not_track: cdktf.booleanToTerraform(struct!.doNotTrack),
    egress: cdktf.listMapper(dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressToTerraform, false)(struct!.egress),
    ingress: cdktf.listMapper(dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressToTerraform, false)(struct!.ingress),
    namespace_selector: cdktf.stringToTerraform(struct!.namespaceSelector),
    order: cdktf.numberToTerraform(struct!.order),
    performance_hints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.performanceHints),
    pre_dnat: cdktf.booleanToTerraform(struct!.preDnat),
    selector: cdktf.stringToTerraform(struct!.selector),
    service_account_selector: cdktf.stringToTerraform(struct!.serviceAccountSelector),
    tier: cdktf.stringToTerraform(struct!.tier),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_on_forward: {
      value: cdktf.booleanToHclTerraform(struct!.applyOnForward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    do_not_track: {
      value: cdktf.booleanToHclTerraform(struct!.doNotTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    egress: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressToHclTerraform, false)(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressList",
    },
    ingress: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressToHclTerraform, false)(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressList",
    },
    namespace_selector: {
      value: cdktf.stringToHclTerraform(struct!.namespaceSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    performance_hints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.performanceHints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pre_dnat: {
      value: cdktf.booleanToHclTerraform(struct!.preDnat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_selector: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountSelector),
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
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyOnForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyOnForward = this._applyOnForward;
    }
    if (this._doNotTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotTrack = this._doNotTrack;
    }
    if (this._egress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._namespaceSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._performanceHints !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceHints = this._performanceHints;
    }
    if (this._preDnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.preDnat = this._preDnat;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._serviceAccountSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountSelector = this._serviceAccountSelector;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyOnForward = undefined;
      this._doNotTrack = undefined;
      this._egress.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._namespaceSelector = undefined;
      this._order = undefined;
      this._performanceHints = undefined;
      this._preDnat = undefined;
      this._selector = undefined;
      this._serviceAccountSelector = undefined;
      this._tier = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyOnForward = value.applyOnForward;
      this._doNotTrack = value.doNotTrack;
      this._egress.internalValue = value.egress;
      this._ingress.internalValue = value.ingress;
      this._namespaceSelector = value.namespaceSelector;
      this._order = value.order;
      this._performanceHints = value.performanceHints;
      this._preDnat = value.preDnat;
      this._selector = value.selector;
      this._serviceAccountSelector = value.serviceAccountSelector;
      this._tier = value.tier;
      this._types = value.types;
    }
  }

  // apply_on_forward - computed: false, optional: true, required: false
  private _applyOnForward?: boolean | cdktf.IResolvable; 
  public get applyOnForward() {
    return this.getBooleanAttribute('apply_on_forward');
  }
  public set applyOnForward(value: boolean | cdktf.IResolvable) {
    this._applyOnForward = value;
  }
  public resetApplyOnForward() {
    this._applyOnForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyOnForwardInput() {
    return this._applyOnForward;
  }

  // do_not_track - computed: false, optional: true, required: false
  private _doNotTrack?: boolean | cdktf.IResolvable; 
  public get doNotTrack() {
    return this.getBooleanAttribute('do_not_track');
  }
  public set doNotTrack(value: boolean | cdktf.IResolvable) {
    this._doNotTrack = value;
  }
  public resetDoNotTrack() {
    this._doNotTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotTrackInput() {
    return this._doNotTrack;
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgressList(this, "egress", false);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecEgress[] | cdktf.IResolvable) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector?: string; 
  public get namespaceSelector() {
    return this.getStringAttribute('namespace_selector');
  }
  public set namespaceSelector(value: string) {
    this._namespaceSelector = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // performance_hints - computed: false, optional: true, required: false
  private _performanceHints?: string[]; 
  public get performanceHints() {
    return this.getListAttribute('performance_hints');
  }
  public set performanceHints(value: string[]) {
    this._performanceHints = value;
  }
  public resetPerformanceHints() {
    this._performanceHints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceHintsInput() {
    return this._performanceHints;
  }

  // pre_dnat - computed: false, optional: true, required: false
  private _preDnat?: boolean | cdktf.IResolvable; 
  public get preDnat() {
    return this.getBooleanAttribute('pre_dnat');
  }
  public set preDnat(value: boolean | cdktf.IResolvable) {
    this._preDnat = value;
  }
  public resetPreDnat() {
    this._preDnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preDnatInput() {
    return this._preDnat;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // service_account_selector - computed: false, optional: true, required: false
  private _serviceAccountSelector?: string; 
  public get serviceAccountSelector() {
    return this.getStringAttribute('service_account_selector');
  }
  public set serviceAccountSelector(value: string) {
    this._serviceAccountSelector = value;
  }
  public resetServiceAccountSelector() {
    this._serviceAccountSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountSelectorInput() {
    return this._serviceAccountSelector;
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

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest k8s_crd_projectcalico_org_global_network_policy_v1_manifest}
*/
export class DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_crd_projectcalico_org_global_network_policy_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest to import
  * @param importFromId The id of the existing DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_crd_projectcalico_org_global_network_policy_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/crd_projectcalico_org_global_network_policy_v1_manifest k8s_crd_projectcalico_org_global_network_policy_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_crd_projectcalico_org_global_network_policy_v1_manifest',
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
  private _metadata = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpec) {
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
      metadata: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgGlobalNetworkPolicyV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
