// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#metadata DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestMetadata;
  /**
  * Spec is a human readable description of a BGP peering policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#spec DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpec;
}
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#annotations DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#labels DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#name DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestMetadataToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#key DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#operator DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#values DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#match_expressions DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#match_labels DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressionsList",
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

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesCommunities {
  /**
  * Large holds a list of the BGP Large Communities Attribute (RFC 8092) values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#large DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#large}
  */
  readonly large?: string[];
  /**
  * Standard holds a list of 'standard' 32-bit BGP Communities Attribute (RFC 1997) values defined as numeric values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#standard DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#standard}
  */
  readonly standard?: string[];
  /**
  * WellKnown holds a list 'standard' 32-bit BGP Communities Attribute (RFC 1997) values defined as well-known string aliases to their numeric values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#well_known DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#well_known}
  */
  readonly wellKnown?: string[];
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesCommunitiesToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesCommunities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    large: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.large),
    standard: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.standard),
    well_known: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wellKnown),
  }
}


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesCommunitiesToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesCommunities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    large: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.large),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    standard: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.standard),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    well_known: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wellKnown),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesCommunitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesCommunities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._large !== undefined) {
      hasAnyValues = true;
      internalValueResult.large = this._large;
    }
    if (this._standard !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard;
    }
    if (this._wellKnown !== undefined) {
      hasAnyValues = true;
      internalValueResult.wellKnown = this._wellKnown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesCommunities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._large = undefined;
      this._standard = undefined;
      this._wellKnown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._large = value.large;
      this._standard = value.standard;
      this._wellKnown = value.wellKnown;
    }
  }

  // large - computed: false, optional: true, required: false
  private _large?: string[]; 
  public get large() {
    return this.getListAttribute('large');
  }
  public set large(value: string[]) {
    this._large = value;
  }
  public resetLarge() {
    this._large = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeInput() {
    return this._large;
  }

  // standard - computed: false, optional: true, required: false
  private _standard?: string[]; 
  public get standard() {
    return this.getListAttribute('standard');
  }
  public set standard(value: string[]) {
    this._standard = value;
  }
  public resetStandard() {
    this._standard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard;
  }

  // well_known - computed: false, optional: true, required: false
  private _wellKnown?: string[]; 
  public get wellKnown() {
    return this.getListAttribute('well_known');
  }
  public set wellKnown(value: string[]) {
    this._wellKnown = value;
  }
  public resetWellKnown() {
    this._wellKnown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellKnownInput() {
    return this._wellKnown;
  }
}
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#key DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#operator DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#values DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#match_expressions DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#match_labels DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressionsList",
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

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributes {
  /**
  * Communities defines a set of community values advertised in the supported BGP Communities path attributes. If nil / not set, no BGP Communities path attribute will be advertised.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#communities DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#communities}
  */
  readonly communities?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesCommunities;
  /**
  * LocalPreference defines the preference value advertised in the BGP Local Preference path attribute. As Local Preference is only valid for iBGP peers, this value will be ignored for eBGP peers (no Local Preference path attribute will be advertised). If nil / not set, the default Local Preference of 100 will be advertised in the Local Preference path attribute for iBGP peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#local_preference DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Selector selects a group of objects of the SelectorType resulting into routes that will be announced with the configured Attributes. If nil / not set, all objects of the SelectorType are selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#selector DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelector;
  /**
  * SelectorType defines the object type on which the Selector applies: - For 'PodCIDR' the Selector matches k8s CiliumNode resources (path attributes apply to routes announced for PodCIDRs of selected CiliumNodes. Only affects routes of cluster scope / Kubernetes IPAM CIDRs, not Multi-Pool IPAM CIDRs. - For 'CiliumLoadBalancerIPPool' the Selector matches CiliumLoadBalancerIPPool custom resources (path attributes apply to routes announced for selected CiliumLoadBalancerIPPools). - For 'CiliumPodIPPool' the Selector matches CiliumPodIPPool custom resources (path attributes apply to routes announced for allocated CIDRs of selected CiliumPodIPPools).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#selector_type DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#selector_type}
  */
  readonly selectorType: string;
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    communities: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesCommunitiesToTerraform(struct!.communities),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    selector: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorToTerraform(struct!.selector),
    selector_type: cdktf.stringToTerraform(struct!.selectorType),
  }
}


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    communities: {
      value: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesCommunitiesToHclTerraform(struct!.communities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesCommunities",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selector: {
      value: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelector",
    },
    selector_type: {
      value: cdktf.stringToHclTerraform(struct!.selectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.communities = this._communities?.internalValue;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._selectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorType = this._selectorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._communities.internalValue = undefined;
      this._localPreference = undefined;
      this._selector.internalValue = undefined;
      this._selectorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._communities.internalValue = value.communities;
      this._localPreference = value.localPreference;
      this._selector.internalValue = value.selector;
      this._selectorType = value.selectorType;
    }
  }

  // communities - computed: false, optional: true, required: false
  private _communities = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesCommunitiesOutputReference(this, "communities");
  public get communities() {
    return this._communities;
  }
  public putCommunities(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesCommunities) {
    this._communities.internalValue = value;
  }
  public resetCommunities() {
    this._communities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communitiesInput() {
    return this._communities.internalValue;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // selector_type - computed: false, optional: false, required: true
  private _selectorType?: string; 
  public get selectorType() {
    return this.getStringAttribute('selector_type');
  }
  public set selectorType(value: string) {
    this._selectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorTypeInput() {
    return this._selectorType;
  }
}

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesOutputReference {
    return new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamilies {
  /**
  * Afi is the Address Family Identifier (AFI) of the family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#afi DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#afi}
  */
  readonly afi: string;
  /**
  * Safi is the Subsequent Address Family Identifier (SAFI) of the family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#safi DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#safi}
  */
  readonly safi: string;
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamiliesToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    afi: cdktf.stringToTerraform(struct!.afi),
    safi: cdktf.stringToTerraform(struct!.safi),
  }
}


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamiliesToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    afi: {
      value: cdktf.stringToHclTerraform(struct!.afi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    safi: {
      value: cdktf.stringToHclTerraform(struct!.safi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamilies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afi !== undefined) {
      hasAnyValues = true;
      internalValueResult.afi = this._afi;
    }
    if (this._safi !== undefined) {
      hasAnyValues = true;
      internalValueResult.safi = this._safi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamilies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._afi = undefined;
      this._safi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._afi = value.afi;
      this._safi = value.safi;
    }
  }

  // afi - computed: false, optional: false, required: true
  private _afi?: string; 
  public get afi() {
    return this.getStringAttribute('afi');
  }
  public set afi(value: string) {
    this._afi = value;
  }
  // Temporarily expose input value. Use with caution.
  public get afiInput() {
    return this._afi;
  }

  // safi - computed: false, optional: false, required: true
  private _safi?: string; 
  public get safi() {
    return this.getStringAttribute('safi');
  }
  public set safi(value: string) {
    this._safi = value;
  }
  // Temporarily expose input value. Use with caution.
  public get safiInput() {
    return this._safi;
  }
}

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamiliesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamilies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamiliesOutputReference {
    return new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsGracefulRestart {
  /**
  * Enabled flag, when set enables graceful restart capability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#enabled DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * RestartTimeSeconds is the estimated time it will take for the BGP session to be re-established with peer after a restart. After this period, peer will remove stale routes. This is described RFC 4724 section 4.2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#restart_time_seconds DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#restart_time_seconds}
  */
  readonly restartTimeSeconds?: number;
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsGracefulRestartToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsGracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    restart_time_seconds: cdktf.numberToTerraform(struct!.restartTimeSeconds),
  }
}


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsGracefulRestartToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsGracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restart_time_seconds: {
      value: cdktf.numberToHclTerraform(struct!.restartTimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsGracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsGracefulRestart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._restartTimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartTimeSeconds = this._restartTimeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsGracefulRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._restartTimeSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._restartTimeSeconds = value.restartTimeSeconds;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // restart_time_seconds - computed: false, optional: true, required: false
  private _restartTimeSeconds?: number; 
  public get restartTimeSeconds() {
    return this.getNumberAttribute('restart_time_seconds');
  }
  public set restartTimeSeconds(value: number) {
    this._restartTimeSeconds = value;
  }
  public resetRestartTimeSeconds() {
    this._restartTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartTimeSecondsInput() {
    return this._restartTimeSeconds;
  }
}
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighbors {
  /**
  * AdvertisedPathAttributes can be used to apply additional path attributes to selected routes when advertising them to the peer. If empty / nil, no additional path attributes are advertised.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#advertised_path_attributes DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#advertised_path_attributes}
  */
  readonly advertisedPathAttributes?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributes[] | cdktf.IResolvable;
  /**
  * AuthSecretRef is the name of the secret to use to fetch a TCP authentication password for this peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#auth_secret_ref DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#auth_secret_ref}
  */
  readonly authSecretRef?: string;
  /**
  * ConnectRetryTimeSeconds defines the initial value for the BGP ConnectRetryTimer (RFC 4271, Section 8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#connect_retry_time_seconds DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#connect_retry_time_seconds}
  */
  readonly connectRetryTimeSeconds?: number;
  /**
  * EBGPMultihopTTL controls the multi-hop feature for eBGP peers. Its value defines the Time To Live (TTL) value used in BGP packets sent to the neighbor. The value 1 implies that eBGP multi-hop feature is disabled (only a single hop is allowed). This field is ignored for iBGP peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#e_bgp_multihop_ttl DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#e_bgp_multihop_ttl}
  */
  readonly eBgpMultihopTtl?: number;
  /**
  * Families, if provided, defines a set of AFI/SAFIs the speaker will negotiate with it's peer. If this slice is not provided the default families of IPv6 and IPv4 will be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#families DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#families}
  */
  readonly families?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamilies[] | cdktf.IResolvable;
  /**
  * GracefulRestart defines graceful restart parameters which are negotiated with this neighbor. If empty / nil, the graceful restart capability is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#graceful_restart DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#graceful_restart}
  */
  readonly gracefulRestart?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsGracefulRestart;
  /**
  * HoldTimeSeconds defines the initial value for the BGP HoldTimer (RFC 4271, Section 4.2). Updating this value will cause a session reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#hold_time_seconds DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#hold_time_seconds}
  */
  readonly holdTimeSeconds?: number;
  /**
  * KeepaliveTimeSeconds defines the initial value for the BGP KeepaliveTimer (RFC 4271, Section 8). It can not be larger than HoldTimeSeconds. Updating this value will cause a session reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#keep_alive_time_seconds DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#keep_alive_time_seconds}
  */
  readonly keepAliveTimeSeconds?: number;
  /**
  * PeerAddress is the IP address of the peer. This must be in CIDR notation and use a /32 to express a single host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#peer_address DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#peer_address}
  */
  readonly peerAddress: string;
  /**
  * PeerASN is the ASN of the peer BGP router. Supports extended 32bit ASNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#peer_asn DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#peer_asn}
  */
  readonly peerAsn: number;
  /**
  * PeerPort is the TCP port of the peer. 1-65535 is the range of valid port numbers that can be specified. If unset, defaults to 179.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#peer_port DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#peer_port}
  */
  readonly peerPort?: number;
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_path_attributes: cdktf.listMapper(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesToTerraform, false)(struct!.advertisedPathAttributes),
    auth_secret_ref: cdktf.stringToTerraform(struct!.authSecretRef),
    connect_retry_time_seconds: cdktf.numberToTerraform(struct!.connectRetryTimeSeconds),
    e_bgp_multihop_ttl: cdktf.numberToTerraform(struct!.eBgpMultihopTtl),
    families: cdktf.listMapper(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamiliesToTerraform, false)(struct!.families),
    graceful_restart: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsGracefulRestartToTerraform(struct!.gracefulRestart),
    hold_time_seconds: cdktf.numberToTerraform(struct!.holdTimeSeconds),
    keep_alive_time_seconds: cdktf.numberToTerraform(struct!.keepAliveTimeSeconds),
    peer_address: cdktf.stringToTerraform(struct!.peerAddress),
    peer_asn: cdktf.numberToTerraform(struct!.peerAsn),
    peer_port: cdktf.numberToTerraform(struct!.peerPort),
  }
}


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertised_path_attributes: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesToHclTerraform, false)(struct!.advertisedPathAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesList",
    },
    auth_secret_ref: {
      value: cdktf.stringToHclTerraform(struct!.authSecretRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_retry_time_seconds: {
      value: cdktf.numberToHclTerraform(struct!.connectRetryTimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    e_bgp_multihop_ttl: {
      value: cdktf.numberToHclTerraform(struct!.eBgpMultihopTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    families: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamiliesToHclTerraform, false)(struct!.families),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamiliesList",
    },
    graceful_restart: {
      value: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsGracefulRestartToHclTerraform(struct!.gracefulRestart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsGracefulRestart",
    },
    hold_time_seconds: {
      value: cdktf.numberToHclTerraform(struct!.holdTimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_alive_time_seconds: {
      value: cdktf.numberToHclTerraform(struct!.keepAliveTimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_address: {
      value: cdktf.stringToHclTerraform(struct!.peerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_asn: {
      value: cdktf.numberToHclTerraform(struct!.peerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_port: {
      value: cdktf.numberToHclTerraform(struct!.peerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighbors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedPathAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedPathAttributes = this._advertisedPathAttributes?.internalValue;
    }
    if (this._authSecretRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSecretRef = this._authSecretRef;
    }
    if (this._connectRetryTimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectRetryTimeSeconds = this._connectRetryTimeSeconds;
    }
    if (this._eBgpMultihopTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.eBgpMultihopTtl = this._eBgpMultihopTtl;
    }
    if (this._families?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.families = this._families?.internalValue;
    }
    if (this._gracefulRestart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart?.internalValue;
    }
    if (this._holdTimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTimeSeconds = this._holdTimeSeconds;
    }
    if (this._keepAliveTimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveTimeSeconds = this._keepAliveTimeSeconds;
    }
    if (this._peerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAddress = this._peerAddress;
    }
    if (this._peerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAsn = this._peerAsn;
    }
    if (this._peerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerPort = this._peerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighbors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertisedPathAttributes.internalValue = undefined;
      this._authSecretRef = undefined;
      this._connectRetryTimeSeconds = undefined;
      this._eBgpMultihopTtl = undefined;
      this._families.internalValue = undefined;
      this._gracefulRestart.internalValue = undefined;
      this._holdTimeSeconds = undefined;
      this._keepAliveTimeSeconds = undefined;
      this._peerAddress = undefined;
      this._peerAsn = undefined;
      this._peerPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertisedPathAttributes.internalValue = value.advertisedPathAttributes;
      this._authSecretRef = value.authSecretRef;
      this._connectRetryTimeSeconds = value.connectRetryTimeSeconds;
      this._eBgpMultihopTtl = value.eBgpMultihopTtl;
      this._families.internalValue = value.families;
      this._gracefulRestart.internalValue = value.gracefulRestart;
      this._holdTimeSeconds = value.holdTimeSeconds;
      this._keepAliveTimeSeconds = value.keepAliveTimeSeconds;
      this._peerAddress = value.peerAddress;
      this._peerAsn = value.peerAsn;
      this._peerPort = value.peerPort;
    }
  }

  // advertised_path_attributes - computed: false, optional: true, required: false
  private _advertisedPathAttributes = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributesList(this, "advertised_path_attributes", false);
  public get advertisedPathAttributes() {
    return this._advertisedPathAttributes;
  }
  public putAdvertisedPathAttributes(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsAdvertisedPathAttributes[] | cdktf.IResolvable) {
    this._advertisedPathAttributes.internalValue = value;
  }
  public resetAdvertisedPathAttributes() {
    this._advertisedPathAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedPathAttributesInput() {
    return this._advertisedPathAttributes.internalValue;
  }

  // auth_secret_ref - computed: false, optional: true, required: false
  private _authSecretRef?: string; 
  public get authSecretRef() {
    return this.getStringAttribute('auth_secret_ref');
  }
  public set authSecretRef(value: string) {
    this._authSecretRef = value;
  }
  public resetAuthSecretRef() {
    this._authSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSecretRefInput() {
    return this._authSecretRef;
  }

  // connect_retry_time_seconds - computed: false, optional: true, required: false
  private _connectRetryTimeSeconds?: number; 
  public get connectRetryTimeSeconds() {
    return this.getNumberAttribute('connect_retry_time_seconds');
  }
  public set connectRetryTimeSeconds(value: number) {
    this._connectRetryTimeSeconds = value;
  }
  public resetConnectRetryTimeSeconds() {
    this._connectRetryTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectRetryTimeSecondsInput() {
    return this._connectRetryTimeSeconds;
  }

  // e_bgp_multihop_ttl - computed: false, optional: true, required: false
  private _eBgpMultihopTtl?: number; 
  public get eBgpMultihopTtl() {
    return this.getNumberAttribute('e_bgp_multihop_ttl');
  }
  public set eBgpMultihopTtl(value: number) {
    this._eBgpMultihopTtl = value;
  }
  public resetEBgpMultihopTtl() {
    this._eBgpMultihopTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eBgpMultihopTtlInput() {
    return this._eBgpMultihopTtl;
  }

  // families - computed: false, optional: true, required: false
  private _families = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamiliesList(this, "families", false);
  public get families() {
    return this._families;
  }
  public putFamilies(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsFamilies[] | cdktf.IResolvable) {
    this._families.internalValue = value;
  }
  public resetFamilies() {
    this._families.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familiesInput() {
    return this._families.internalValue;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsGracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }
  public putGracefulRestart(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsGracefulRestart) {
    this._gracefulRestart.internalValue = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart.internalValue;
  }

  // hold_time_seconds - computed: false, optional: true, required: false
  private _holdTimeSeconds?: number; 
  public get holdTimeSeconds() {
    return this.getNumberAttribute('hold_time_seconds');
  }
  public set holdTimeSeconds(value: number) {
    this._holdTimeSeconds = value;
  }
  public resetHoldTimeSeconds() {
    this._holdTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeSecondsInput() {
    return this._holdTimeSeconds;
  }

  // keep_alive_time_seconds - computed: false, optional: true, required: false
  private _keepAliveTimeSeconds?: number; 
  public get keepAliveTimeSeconds() {
    return this.getNumberAttribute('keep_alive_time_seconds');
  }
  public set keepAliveTimeSeconds(value: number) {
    this._keepAliveTimeSeconds = value;
  }
  public resetKeepAliveTimeSeconds() {
    this._keepAliveTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimeSecondsInput() {
    return this._keepAliveTimeSeconds;
  }

  // peer_address - computed: false, optional: false, required: true
  private _peerAddress?: string; 
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }
  public set peerAddress(value: string) {
    this._peerAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress;
  }

  // peer_asn - computed: false, optional: false, required: true
  private _peerAsn?: number; 
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }

  // peer_port - computed: false, optional: true, required: false
  private _peerPort?: number; 
  public get peerPort() {
    return this.getNumberAttribute('peer_port');
  }
  public set peerPort(value: number) {
    this._peerPort = value;
  }
  public resetPeerPort() {
    this._peerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerPortInput() {
    return this._peerPort;
  }
}

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighbors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsOutputReference {
    return new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#key DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#operator DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#values DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#match_expressions DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#match_labels DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressionsList",
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

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#key DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#operator DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#values DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#match_expressions DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#match_labels DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressionsList",
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

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRouters {
  /**
  * ExportPodCIDR determines whether to export the Node's private CIDR block to the configured neighbors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#export_pod_cidr DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#export_pod_cidr}
  */
  readonly exportPodCidr?: boolean | cdktf.IResolvable;
  /**
  * LocalASN is the ASN of this virtual router. Supports extended 32bit ASNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#local_asn DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#local_asn}
  */
  readonly localAsn: number;
  /**
  * Neighbors is a list of neighboring BGP peers for this virtual router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#neighbors DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#neighbors}
  */
  readonly neighbors: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighbors[] | cdktf.IResolvable;
  /**
  * PodIPPoolSelector selects CiliumPodIPPools based on labels. The virtual router will announce allocated CIDRs of matching CiliumPodIPPools. If empty / nil no CiliumPodIPPools will be announced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#pod_ip_pool_selector DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#pod_ip_pool_selector}
  */
  readonly podIpPoolSelector?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelector;
  /**
  * ServiceAdvertisements selects a group of BGP Advertisement(s) to advertise for the selected services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#service_advertisements DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#service_advertisements}
  */
  readonly serviceAdvertisements?: string[];
  /**
  * ServiceSelector selects a group of load balancer services which this virtual router will announce. The loadBalancerClass for a service must be nil or specify a class supported by Cilium, e.g. 'io.cilium/bgp-control-plane'. Refer to the following document for additional details regarding load balancer classes: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-class If empty / nil no services will be announced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#service_selector DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#service_selector}
  */
  readonly serviceSelector?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelector;
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRouters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_pod_cidr: cdktf.booleanToTerraform(struct!.exportPodCidr),
    local_asn: cdktf.numberToTerraform(struct!.localAsn),
    neighbors: cdktf.listMapper(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsToTerraform, false)(struct!.neighbors),
    pod_ip_pool_selector: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorToTerraform(struct!.podIpPoolSelector),
    service_advertisements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAdvertisements),
    service_selector: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorToTerraform(struct!.serviceSelector),
  }
}


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRouters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_pod_cidr: {
      value: cdktf.booleanToHclTerraform(struct!.exportPodCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_asn: {
      value: cdktf.numberToHclTerraform(struct!.localAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbors: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsToHclTerraform, false)(struct!.neighbors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsList",
    },
    pod_ip_pool_selector: {
      value: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorToHclTerraform(struct!.podIpPoolSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelector",
    },
    service_advertisements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAdvertisements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_selector: {
      value: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorToHclTerraform(struct!.serviceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRouters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportPodCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPodCidr = this._exportPodCidr;
    }
    if (this._localAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsn = this._localAsn;
    }
    if (this._neighbors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbors = this._neighbors?.internalValue;
    }
    if (this._podIpPoolSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIpPoolSelector = this._podIpPoolSelector?.internalValue;
    }
    if (this._serviceAdvertisements !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAdvertisements = this._serviceAdvertisements;
    }
    if (this._serviceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSelector = this._serviceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRouters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportPodCidr = undefined;
      this._localAsn = undefined;
      this._neighbors.internalValue = undefined;
      this._podIpPoolSelector.internalValue = undefined;
      this._serviceAdvertisements = undefined;
      this._serviceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportPodCidr = value.exportPodCidr;
      this._localAsn = value.localAsn;
      this._neighbors.internalValue = value.neighbors;
      this._podIpPoolSelector.internalValue = value.podIpPoolSelector;
      this._serviceAdvertisements = value.serviceAdvertisements;
      this._serviceSelector.internalValue = value.serviceSelector;
    }
  }

  // export_pod_cidr - computed: false, optional: true, required: false
  private _exportPodCidr?: boolean | cdktf.IResolvable; 
  public get exportPodCidr() {
    return this.getBooleanAttribute('export_pod_cidr');
  }
  public set exportPodCidr(value: boolean | cdktf.IResolvable) {
    this._exportPodCidr = value;
  }
  public resetExportPodCidr() {
    this._exportPodCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPodCidrInput() {
    return this._exportPodCidr;
  }

  // local_asn - computed: false, optional: false, required: true
  private _localAsn?: number; 
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }
  public set localAsn(value: number) {
    this._localAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
  }

  // neighbors - computed: false, optional: false, required: true
  private _neighbors = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighborsList(this, "neighbors", false);
  public get neighbors() {
    return this._neighbors;
  }
  public putNeighbors(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersNeighbors[] | cdktf.IResolvable) {
    this._neighbors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborsInput() {
    return this._neighbors.internalValue;
  }

  // pod_ip_pool_selector - computed: false, optional: true, required: false
  private _podIpPoolSelector = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelectorOutputReference(this, "pod_ip_pool_selector");
  public get podIpPoolSelector() {
    return this._podIpPoolSelector;
  }
  public putPodIpPoolSelector(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersPodIpPoolSelector) {
    this._podIpPoolSelector.internalValue = value;
  }
  public resetPodIpPoolSelector() {
    this._podIpPoolSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIpPoolSelectorInput() {
    return this._podIpPoolSelector.internalValue;
  }

  // service_advertisements - computed: false, optional: true, required: false
  private _serviceAdvertisements?: string[]; 
  public get serviceAdvertisements() {
    return this.getListAttribute('service_advertisements');
  }
  public set serviceAdvertisements(value: string[]) {
    this._serviceAdvertisements = value;
  }
  public resetServiceAdvertisements() {
    this._serviceAdvertisements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAdvertisementsInput() {
    return this._serviceAdvertisements;
  }

  // service_selector - computed: false, optional: true, required: false
  private _serviceSelector = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelectorOutputReference(this, "service_selector");
  public get serviceSelector() {
    return this._serviceSelector;
  }
  public putServiceSelector(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersServiceSelector) {
    this._serviceSelector.internalValue = value;
  }
  public resetServiceSelector() {
    this._serviceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSelectorInput() {
    return this._serviceSelector.internalValue;
  }
}

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRouters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersOutputReference {
    return new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpec {
  /**
  * NodeSelector selects a group of nodes where this BGP Peering Policy applies. If empty / nil this policy applies to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#node_selector DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelector;
  /**
  * A list of CiliumBGPVirtualRouter(s) which instructs the BGP control plane how to instantiate virtual BGP routers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#virtual_routers DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest#virtual_routers}
  */
  readonly virtualRouters: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRouters[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecToTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorToTerraform(struct!.nodeSelector),
    virtual_routers: cdktf.listMapper(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersToTerraform, false)(struct!.virtualRouters),
  }
}


export function dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorToHclTerraform(struct!.nodeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelector",
    },
    virtual_routers: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersToHclTerraform, false)(struct!.virtualRouters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    if (this._virtualRouters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualRouters = this._virtualRouters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector.internalValue = undefined;
      this._virtualRouters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector.internalValue = value.nodeSelector;
      this._virtualRouters.internalValue = value.virtualRouters;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }

  // virtual_routers - computed: false, optional: false, required: true
  private _virtualRouters = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRoutersList(this, "virtual_routers", false);
  public get virtualRouters() {
    return this._virtualRouters;
  }
  public putVirtualRouters(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecVirtualRouters[] | cdktf.IResolvable) {
    this._virtualRouters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRoutersInput() {
    return this._virtualRouters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest k8s_cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest}
*/
export class DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest k8s_cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cilium_io_cilium_bgp_peering_policy_v2alpha1_manifest',
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
  private _metadata = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpec) {
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
      metadata: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumBgpPeeringPolicyV2Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
