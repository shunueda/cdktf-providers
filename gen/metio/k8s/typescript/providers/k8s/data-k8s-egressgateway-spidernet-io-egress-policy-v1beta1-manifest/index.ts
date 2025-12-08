// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#metadata DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#spec DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpec;
}
export interface DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#annotations DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#labels DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#name DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#namespace DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestMetadataToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#key DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#operator DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#values DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressionsToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressionsOutputReference {
    return new DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#match_expressions DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#match_labels DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressionsList",
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

export class DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedTo {
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#pod_selector DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#pod_subnet DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#pod_subnet}
  */
  readonly podSubnet?: string[];
}

export function dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_selector: dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorToTerraform(struct!.podSelector),
    pod_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podSubnet),
  }
}


export function dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_selector: {
      value: dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelector",
    },
    pod_subnet: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podSubnet),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    if (this._podSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSubnet = this._podSubnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podSelector.internalValue = undefined;
      this._podSubnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podSelector.internalValue = value.podSelector;
      this._podSubnet = value.podSubnet;
    }
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }

  // pod_subnet - computed: false, optional: true, required: false
  private _podSubnet?: string[]; 
  public get podSubnet() {
    return this.getListAttribute('pod_subnet');
  }
  public set podSubnet(value: string[]) {
    this._podSubnet = value;
  }
  public resetPodSubnet() {
    this._podSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSubnetInput() {
    return this._podSubnet;
  }
}
export interface DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecEgressIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#allocator_policy DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#allocator_policy}
  */
  readonly allocatorPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#ipv4 DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#ipv6 DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#use_node_ip DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#use_node_ip}
  */
  readonly useNodeIp?: boolean | cdktf.IResolvable;
}

export function dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecEgressIpToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecEgressIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocator_policy: cdktf.stringToTerraform(struct!.allocatorPolicy),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    use_node_ip: cdktf.booleanToTerraform(struct!.useNodeIp),
  }
}


export function dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecEgressIpToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecEgressIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocator_policy: {
      value: cdktf.stringToHclTerraform(struct!.allocatorPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_node_ip: {
      value: cdktf.booleanToHclTerraform(struct!.useNodeIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecEgressIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecEgressIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatorPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatorPolicy = this._allocatorPolicy;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._useNodeIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNodeIp = this._useNodeIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecEgressIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatorPolicy = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._useNodeIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocatorPolicy = value.allocatorPolicy;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._useNodeIp = value.useNodeIp;
    }
  }

  // allocator_policy - computed: false, optional: true, required: false
  private _allocatorPolicy?: string; 
  public get allocatorPolicy() {
    return this.getStringAttribute('allocator_policy');
  }
  public set allocatorPolicy(value: string) {
    this._allocatorPolicy = value;
  }
  public resetAllocatorPolicy() {
    this._allocatorPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatorPolicyInput() {
    return this._allocatorPolicy;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // use_node_ip - computed: false, optional: true, required: false
  private _useNodeIp?: boolean | cdktf.IResolvable; 
  public get useNodeIp() {
    return this.getBooleanAttribute('use_node_ip');
  }
  public set useNodeIp(value: boolean | cdktf.IResolvable) {
    this._useNodeIp = value;
  }
  public resetUseNodeIp() {
    this._useNodeIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNodeIpInput() {
    return this._useNodeIp;
  }
}
export interface DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#applied_to DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#applied_to}
  */
  readonly appliedTo: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedTo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#dest_subnet DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#dest_subnet}
  */
  readonly destSubnet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#egress_gateway_name DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#egress_gateway_name}
  */
  readonly egressGatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#egress_ip DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#egress_ip}
  */
  readonly egressIp?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecEgressIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#priority DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest#priority}
  */
  readonly priority?: number;
}

export function dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applied_to: dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToToTerraform(struct!.appliedTo),
    dest_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destSubnet),
    egress_gateway_name: cdktf.stringToTerraform(struct!.egressGatewayName),
    egress_ip: dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecEgressIpToTerraform(struct!.egressIp),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applied_to: {
      value: dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToToHclTerraform(struct!.appliedTo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedTo",
    },
    dest_subnet: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destSubnet),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    egress_gateway_name: {
      value: cdktf.stringToHclTerraform(struct!.egressGatewayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_ip: {
      value: dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecEgressIpToHclTerraform(struct!.egressIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecEgressIp",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appliedTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appliedTo = this._appliedTo?.internalValue;
    }
    if (this._destSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.destSubnet = this._destSubnet;
    }
    if (this._egressGatewayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressGatewayName = this._egressGatewayName;
    }
    if (this._egressIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressIp = this._egressIp?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appliedTo.internalValue = undefined;
      this._destSubnet = undefined;
      this._egressGatewayName = undefined;
      this._egressIp.internalValue = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appliedTo.internalValue = value.appliedTo;
      this._destSubnet = value.destSubnet;
      this._egressGatewayName = value.egressGatewayName;
      this._egressIp.internalValue = value.egressIp;
      this._priority = value.priority;
    }
  }

  // applied_to - computed: false, optional: false, required: true
  private _appliedTo = new DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedToOutputReference(this, "applied_to");
  public get appliedTo() {
    return this._appliedTo;
  }
  public putAppliedTo(value: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecAppliedTo) {
    this._appliedTo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appliedToInput() {
    return this._appliedTo.internalValue;
  }

  // dest_subnet - computed: false, optional: true, required: false
  private _destSubnet?: string[]; 
  public get destSubnet() {
    return this.getListAttribute('dest_subnet');
  }
  public set destSubnet(value: string[]) {
    this._destSubnet = value;
  }
  public resetDestSubnet() {
    this._destSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destSubnetInput() {
    return this._destSubnet;
  }

  // egress_gateway_name - computed: false, optional: true, required: false
  private _egressGatewayName?: string; 
  public get egressGatewayName() {
    return this.getStringAttribute('egress_gateway_name');
  }
  public set egressGatewayName(value: string) {
    this._egressGatewayName = value;
  }
  public resetEgressGatewayName() {
    this._egressGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressGatewayNameInput() {
    return this._egressGatewayName;
  }

  // egress_ip - computed: false, optional: true, required: false
  private _egressIp = new DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecEgressIpOutputReference(this, "egress_ip");
  public get egressIp() {
    return this._egressIp;
  }
  public putEgressIp(value: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecEgressIp) {
    this._egressIp.internalValue = value;
  }
  public resetEgressIp() {
    this._egressIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressIpInput() {
    return this._egressIp.internalValue;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest k8s_egressgateway_spidernet_io_egress_policy_v1beta1_manifest}
*/
export class DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_egressgateway_spidernet_io_egress_policy_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_egressgateway_spidernet_io_egress_policy_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/egressgateway_spidernet_io_egress_policy_v1beta1_manifest k8s_egressgateway_spidernet_io_egress_policy_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_egressgateway_spidernet_io_egress_policy_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpec) {
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
      metadata: dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEgressgatewaySpidernetIoEgressPolicyV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
