// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#metadata DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#metadata}
  */
  readonly metadata: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#spec DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#spec}
  */
  readonly spec?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpec;
}
export interface DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#annotations DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#labels DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#name DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestMetadataToTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestMetadataToHclTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#key DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#operator DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#values DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorToTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGateway {
  /**
  * EgressIP is the source IP address that the egress traffic is SNATed with. Example: When set to '192.168.1.100', matching egress traffic will be redirected to the node matching the NodeSelector field and SNATed with IP address 192.168.1.100. When none of the Interface or EgressIP fields is specified, the policy will use the first IPv4 assigned to the interface with the default route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#egress_ip DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#egress_ip}
  */
  readonly egressIp?: string;
  /**
  * Interface is the network interface to which the egress IP address that the traffic is SNATed with is assigned. Example: When set to 'eth1', matching egress traffic will be redirected to the node matching the NodeSelector field and SNATed with the first IPv4 address assigned to the eth1 interface. When none of the Interface or EgressIP fields is specified, the policy will use the first IPv4 assigned to the interface with the default route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#interface DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#interface}
  */
  readonly interface?: string;
  /**
  * This is a label selector which selects the node that should act as egress gateway for the given policy. In case multiple nodes are selected, only the first one in the lexical ordering over the node names will be used. This field follows standard label selector semantics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#node_selector DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#node_selector}
  */
  readonly nodeSelector: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelector;
}

export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayToTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_ip: cdktf.stringToTerraform(struct!.egressIp),
    interface: cdktf.stringToTerraform(struct!.interface),
    node_selector: dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorToTerraform(struct!.nodeSelector),
  }
}


export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayToHclTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_ip: {
      value: cdktf.stringToHclTerraform(struct!.egressIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorToHclTerraform(struct!.nodeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressIp = this._egressIp;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressIp = undefined;
      this._interface = undefined;
      this._nodeSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressIp = value.egressIp;
      this._interface = value.interface;
      this._nodeSelector.internalValue = value.nodeSelector;
    }
  }

  // egress_ip - computed: false, optional: true, required: false
  private _egressIp?: string; 
  public get egressIp() {
    return this.getStringAttribute('egress_ip');
  }
  public set egressIp(value: string) {
    this._egressIp = value;
  }
  public resetEgressIp() {
    this._egressIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressIpInput() {
    return this._egressIp;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // node_selector - computed: false, optional: false, required: true
  private _nodeSelector = new DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }
}
export interface DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#key DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#operator DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#values DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorToTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#key DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#operator DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#values DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorToTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectors {
  /**
  * Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#namespace_selector DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelector;
  /**
  * This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#pod_selector DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelector;
}

export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsToTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selector: dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorToTerraform(struct!.podSelector),
  }
}


export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsToHclTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selector: {
      value: dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelector",
    },
    pod_selector: {
      value: dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._podSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}

export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsOutputReference {
    return new DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpec {
  /**
  * DestinationCIDRs is a list of destination CIDRs for destination IP addresses. If a destination IP matches any one CIDR, it will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#destination_cidrs DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#destination_cidrs}
  */
  readonly destinationCidrs: string[];
  /**
  * EgressGateway is the gateway node responsible for SNATing traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#egress_gateway DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#egress_gateway}
  */
  readonly egressGateway: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGateway;
  /**
  * ExcludedCIDRs is a list of destination CIDRs that will be excluded from the egress gateway redirection and SNAT logic. Should be a subset of destinationCIDRs otherwise it will not have any effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#excluded_cidrs DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#excluded_cidrs}
  */
  readonly excludedCidrs?: string[];
  /**
  * Egress represents a list of rules by which egress traffic is filtered from the source pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#selectors DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest#selectors}
  */
  readonly selectors: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectors[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecToTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationCidrs),
    egress_gateway: dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayToTerraform(struct!.egressGateway),
    excluded_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedCidrs),
    selectors: cdktf.listMapper(dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsToTerraform, false)(struct!.selectors),
  }
}


export function dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecToHclTerraform(struct?: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    egress_gateway: {
      value: dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayToHclTerraform(struct!.egressGateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGateway",
    },
    excluded_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selectors: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsToHclTerraform, false)(struct!.selectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidrs = this._destinationCidrs;
    }
    if (this._egressGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressGateway = this._egressGateway?.internalValue;
    }
    if (this._excludedCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedCidrs = this._excludedCidrs;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationCidrs = undefined;
      this._egressGateway.internalValue = undefined;
      this._excludedCidrs = undefined;
      this._selectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationCidrs = value.destinationCidrs;
      this._egressGateway.internalValue = value.egressGateway;
      this._excludedCidrs = value.excludedCidrs;
      this._selectors.internalValue = value.selectors;
    }
  }

  // destination_cidrs - computed: false, optional: false, required: true
  private _destinationCidrs?: string[]; 
  public get destinationCidrs() {
    return this.getListAttribute('destination_cidrs');
  }
  public set destinationCidrs(value: string[]) {
    this._destinationCidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrsInput() {
    return this._destinationCidrs;
  }

  // egress_gateway - computed: false, optional: false, required: true
  private _egressGateway = new DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGatewayOutputReference(this, "egress_gateway");
  public get egressGateway() {
    return this._egressGateway;
  }
  public putEgressGateway(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecEgressGateway) {
    this._egressGateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get egressGatewayInput() {
    return this._egressGateway.internalValue;
  }

  // excluded_cidrs - computed: false, optional: true, required: false
  private _excludedCidrs?: string[]; 
  public get excludedCidrs() {
    return this.getListAttribute('excluded_cidrs');
  }
  public set excludedCidrs(value: string[]) {
    this._excludedCidrs = value;
  }
  public resetExcludedCidrs() {
    this._excludedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCidrsInput() {
    return this._excludedCidrs;
  }

  // selectors - computed: false, optional: false, required: true
  private _selectors = new DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecSelectors[] | cdktf.IResolvable) {
    this._selectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest k8s_cilium_io_cilium_egress_gateway_policy_v2_manifest}
*/
export class DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cilium_io_cilium_egress_gateway_policy_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest to import
  * @param importFromId The id of the existing DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCiliumIoCiliumEgressGatewayPolicyV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cilium_io_cilium_egress_gateway_policy_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_egress_gateway_policy_v2_manifest k8s_cilium_io_cilium_egress_gateway_policy_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cilium_io_cilium_egress_gateway_policy_v2_manifest',
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
  private _metadata = new DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpec) {
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
      metadata: dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestMetadata",
      },
      spec: {
        value: dataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumEgressGatewayPolicyV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
