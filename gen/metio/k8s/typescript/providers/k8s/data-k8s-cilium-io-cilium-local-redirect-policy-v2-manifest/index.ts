// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#metadata DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#metadata}
  */
  readonly metadata: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestMetadata;
  /**
  * Spec is the desired behavior of the local redirect policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#spec DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#spec}
  */
  readonly spec?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpec;
}
export interface DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#annotations DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#labels DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#name DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#namespace DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestMetadataToTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestMetadataToHclTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#key DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#operator DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#values DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorToTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressionsList",
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

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPorts {
  /**
  * Name is a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#name DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Port is an L4 port number. The string will be strictly parsed as a single uint16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#port DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#port}
  */
  readonly port: string;
  /**
  * Protocol is the L4 protocol. Accepted values: 'TCP', 'UDP'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#protocol DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPortsToTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPorts | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPortsOutputReference {
    return new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackend {
  /**
  * LocalEndpointSelector selects node local pod(s) where traffic is redirected to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#local_endpoint_selector DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#local_endpoint_selector}
  */
  readonly localEndpointSelector: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelector;
  /**
  * ToPorts is a list of L4 ports with protocol of node local pod(s) where traffic is redirected to. When multiple ports are specified, the ports must be named.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#to_ports DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#to_ports}
  */
  readonly toPorts: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPorts[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_endpoint_selector: dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorToTerraform(struct!.localEndpointSelector),
    to_ports: cdktf.listMapper(dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPortsToTerraform, false)(struct!.toPorts),
  }
}


export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToHclTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_endpoint_selector: {
      value: dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorToHclTerraform(struct!.localEndpointSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelector",
    },
    to_ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPortsToHclTerraform, false)(struct!.toPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localEndpointSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localEndpointSelector = this._localEndpointSelector?.internalValue;
    }
    if (this._toPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPorts = this._toPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localEndpointSelector.internalValue = undefined;
      this._toPorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localEndpointSelector.internalValue = value.localEndpointSelector;
      this._toPorts.internalValue = value.toPorts;
    }
  }

  // local_endpoint_selector - computed: false, optional: false, required: true
  private _localEndpointSelector = new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelectorOutputReference(this, "local_endpoint_selector");
  public get localEndpointSelector() {
    return this._localEndpointSelector;
  }
  public putLocalEndpointSelector(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendLocalEndpointSelector) {
    this._localEndpointSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localEndpointSelectorInput() {
    return this._localEndpointSelector.internalValue;
  }

  // to_ports - computed: false, optional: false, required: true
  private _toPorts = new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPortsList(this, "to_ports", false);
  public get toPorts() {
    return this._toPorts;
  }
  public putToPorts(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToPorts[] | cdktf.IResolvable) {
    this._toPorts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortsInput() {
    return this._toPorts.internalValue;
  }
}
export interface DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPorts {
  /**
  * Name is a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#name DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Port is an L4 port number. The string will be strictly parsed as a single uint16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#port DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#port}
  */
  readonly port: string;
  /**
  * Protocol is the L4 protocol. Accepted values: 'TCP', 'UDP'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#protocol DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPortsToTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPorts | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPortsOutputReference {
    return new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcher {
  /**
  * IP is a destination ip address for traffic to be redirected. Example: When it is set to '169.254.169.254', traffic destined to '169.254.169.254' is redirected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#ip DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#ip}
  */
  readonly ip: string;
  /**
  * ToPorts is a list of destination L4 ports with protocol for traffic to be redirected. When multiple ports are specified, the ports must be named. Example: When set to Port: '53' and Protocol: UDP, traffic destined to port '53' with UDP protocol is redirected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#to_ports DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#to_ports}
  */
  readonly toPorts: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPorts[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    to_ports: cdktf.listMapper(dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPortsToTerraform, false)(struct!.toPorts),
  }
}


export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToHclTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPortsToHclTerraform, false)(struct!.toPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._toPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPorts = this._toPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._toPorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._toPorts.internalValue = value.toPorts;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // to_ports - computed: false, optional: false, required: true
  private _toPorts = new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPortsList(this, "to_ports", false);
  public get toPorts() {
    return this._toPorts;
  }
  public putToPorts(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToPorts[] | cdktf.IResolvable) {
    this._toPorts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortsInput() {
    return this._toPorts.internalValue;
  }
}
export interface DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPorts {
  /**
  * Name is a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#name DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Port is an L4 port number. The string will be strictly parsed as a single uint16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#port DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#port}
  */
  readonly port: string;
  /**
  * Protocol is the L4 protocol. Accepted values: 'TCP', 'UDP'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#protocol DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPortsToTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPorts | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPortsOutputReference {
    return new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcher {
  /**
  * Namespace is the Kubernetes service namespace. The service namespace must match the namespace of the parent Local Redirect Policy. For Cluster-wide Local Redirect Policy, this can be any namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#namespace DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * Name is the name of a destination Kubernetes service that identifies traffic to be redirected. The service type needs to be ClusterIP. Example: When this field is populated with 'serviceName:myService', all the traffic destined to the cluster IP of this service at the (specified) service port(s) will be redirected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#service_name DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#service_name}
  */
  readonly serviceName: string;
  /**
  * ToPorts is a list of destination service L4 ports with protocol for traffic to be redirected. If not specified, traffic for all the service ports will be redirected. When multiple ports are specified, the ports must be named.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#to_ports DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#to_ports}
  */
  readonly toPorts?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPorts[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    to_ports: cdktf.listMapper(dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPortsToTerraform, false)(struct!.toPorts),
  }
}


export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToHclTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcher | cdktf.IResolvable): any {
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
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPortsToHclTerraform, false)(struct!.toPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._toPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPorts = this._toPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._serviceName = undefined;
      this._toPorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._serviceName = value.serviceName;
      this._toPorts.internalValue = value.toPorts;
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // to_ports - computed: false, optional: true, required: false
  private _toPorts = new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPortsList(this, "to_ports", false);
  public get toPorts() {
    return this._toPorts;
  }
  public putToPorts(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToPorts[] | cdktf.IResolvable) {
    this._toPorts.internalValue = value;
  }
  public resetToPorts() {
    this._toPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortsInput() {
    return this._toPorts.internalValue;
  }
}
export interface DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontend {
  /**
  * AddressMatcher is a tuple {IP, port, protocol} that matches traffic to be redirected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#address_matcher DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#address_matcher}
  */
  readonly addressMatcher?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcher;
  /**
  * ServiceMatcher specifies Kubernetes service and port that matches traffic to be redirected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#service_matcher DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#service_matcher}
  */
  readonly serviceMatcher?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcher;
}

export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendToTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_matcher: dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToTerraform(struct!.addressMatcher),
    service_matcher: dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToTerraform(struct!.serviceMatcher),
  }
}


export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendToHclTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_matcher: {
      value: dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherToHclTerraform(struct!.addressMatcher),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcher",
    },
    service_matcher: {
      value: dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherToHclTerraform(struct!.serviceMatcher),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcher",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressMatcher = this._addressMatcher?.internalValue;
    }
    if (this._serviceMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMatcher = this._serviceMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressMatcher.internalValue = undefined;
      this._serviceMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressMatcher.internalValue = value.addressMatcher;
      this._serviceMatcher.internalValue = value.serviceMatcher;
    }
  }

  // address_matcher - computed: false, optional: true, required: false
  private _addressMatcher = new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcherOutputReference(this, "address_matcher");
  public get addressMatcher() {
    return this._addressMatcher;
  }
  public putAddressMatcher(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendAddressMatcher) {
    this._addressMatcher.internalValue = value;
  }
  public resetAddressMatcher() {
    this._addressMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressMatcherInput() {
    return this._addressMatcher.internalValue;
  }

  // service_matcher - computed: false, optional: true, required: false
  private _serviceMatcher = new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcherOutputReference(this, "service_matcher");
  public get serviceMatcher() {
    return this._serviceMatcher;
  }
  public putServiceMatcher(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendServiceMatcher) {
    this._serviceMatcher.internalValue = value;
  }
  public resetServiceMatcher() {
    this._serviceMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMatcherInput() {
    return this._serviceMatcher.internalValue;
  }
}
export interface DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpec {
  /**
  * Description can be used by the creator of the policy to describe the purpose of this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#description DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#description}
  */
  readonly description?: string;
  /**
  * RedirectBackend specifies backend configuration to redirect traffic to. It can not be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#redirect_backend DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#redirect_backend}
  */
  readonly redirectBackend: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackend;
  /**
  * RedirectFrontend specifies frontend configuration to redirect traffic from. It can not be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#redirect_frontend DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#redirect_frontend}
  */
  readonly redirectFrontend: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontend;
  /**
  * SkipRedirectFromBackend indicates whether traffic matching RedirectFrontend from RedirectBackend should skip redirection, and hence the traffic will be forwarded as-is. The default is false which means traffic matching RedirectFrontend will get redirected from all pods, including the RedirectBackend(s). Example: If RedirectFrontend is configured to '169.254.169.254:80' as the traffic that needs to be redirected to backends selected by RedirectBackend, if SkipRedirectFromBackend is set to true, traffic going to '169.254.169.254:80' from such backends will not be redirected back to the backends. Instead, the matched traffic from the backends will be forwarded to the original destination '169.254.169.254:80'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#skip_redirect_from_backend DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest#skip_redirect_from_backend}
  */
  readonly skipRedirectFromBackend?: boolean | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecToTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    redirect_backend: dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToTerraform(struct!.redirectBackend),
    redirect_frontend: dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendToTerraform(struct!.redirectFrontend),
    skip_redirect_from_backend: cdktf.booleanToTerraform(struct!.skipRedirectFromBackend),
  }
}


export function dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecToHclTerraform(struct?: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpec | cdktf.IResolvable): any {
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
    redirect_backend: {
      value: dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendToHclTerraform(struct!.redirectBackend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackend",
    },
    redirect_frontend: {
      value: dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendToHclTerraform(struct!.redirectFrontend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontend",
    },
    skip_redirect_from_backend: {
      value: cdktf.booleanToHclTerraform(struct!.skipRedirectFromBackend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._redirectBackend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectBackend = this._redirectBackend?.internalValue;
    }
    if (this._redirectFrontend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectFrontend = this._redirectFrontend?.internalValue;
    }
    if (this._skipRedirectFromBackend !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipRedirectFromBackend = this._skipRedirectFromBackend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._redirectBackend.internalValue = undefined;
      this._redirectFrontend.internalValue = undefined;
      this._skipRedirectFromBackend = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._redirectBackend.internalValue = value.redirectBackend;
      this._redirectFrontend.internalValue = value.redirectFrontend;
      this._skipRedirectFromBackend = value.skipRedirectFromBackend;
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

  // redirect_backend - computed: false, optional: false, required: true
  private _redirectBackend = new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackendOutputReference(this, "redirect_backend");
  public get redirectBackend() {
    return this._redirectBackend;
  }
  public putRedirectBackend(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectBackend) {
    this._redirectBackend.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectBackendInput() {
    return this._redirectBackend.internalValue;
  }

  // redirect_frontend - computed: false, optional: false, required: true
  private _redirectFrontend = new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontendOutputReference(this, "redirect_frontend");
  public get redirectFrontend() {
    return this._redirectFrontend;
  }
  public putRedirectFrontend(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecRedirectFrontend) {
    this._redirectFrontend.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectFrontendInput() {
    return this._redirectFrontend.internalValue;
  }

  // skip_redirect_from_backend - computed: false, optional: true, required: false
  private _skipRedirectFromBackend?: boolean | cdktf.IResolvable; 
  public get skipRedirectFromBackend() {
    return this.getBooleanAttribute('skip_redirect_from_backend');
  }
  public set skipRedirectFromBackend(value: boolean | cdktf.IResolvable) {
    this._skipRedirectFromBackend = value;
  }
  public resetSkipRedirectFromBackend() {
    this._skipRedirectFromBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRedirectFromBackendInput() {
    return this._skipRedirectFromBackend;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest k8s_cilium_io_cilium_local_redirect_policy_v2_manifest}
*/
export class DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cilium_io_cilium_local_redirect_policy_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest to import
  * @param importFromId The id of the existing DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCiliumIoCiliumLocalRedirectPolicyV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cilium_io_cilium_local_redirect_policy_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_local_redirect_policy_v2_manifest k8s_cilium_io_cilium_local_redirect_policy_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cilium_io_cilium_local_redirect_policy_v2_manifest',
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
  private _metadata = new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpec) {
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
      metadata: dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestMetadata",
      },
      spec: {
        value: dataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumLocalRedirectPolicyV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
