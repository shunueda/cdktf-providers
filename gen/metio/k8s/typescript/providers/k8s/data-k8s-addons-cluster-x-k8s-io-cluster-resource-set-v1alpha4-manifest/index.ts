// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#metadata DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#metadata}
  */
  readonly metadata: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestMetadata;
  /**
  * ClusterResourceSetSpec defines the desired state of ClusterResourceSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#spec DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#spec}
  */
  readonly spec?: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpec;
}
export interface DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#annotations DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#labels DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#name DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#namespace DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestMetadataToTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestMetadataToHclTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#key DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#operator DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#values DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressionsToTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressionsOutputReference {
    return new DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#match_expressions DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#match_labels DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorToTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorToHclTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressionsList",
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

export class DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResources {
  /**
  * Kind of the resource. Supported kinds are: Secrets and ConfigMaps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#kind DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the resource that is in the same namespace with ClusterResourceSet object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#name DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResourcesToTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResourcesToHclTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResources | cdktf.IResolvable): any {
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

export class DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResources | cdktf.IResolvable | undefined) {
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

export class DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResourcesOutputReference {
    return new DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpec {
  /**
  * Label selector for Clusters. The Clusters that are selected by this will be the ones affected by this ClusterResourceSet. It must match the Cluster labels. This field is immutable. Label selector cannot be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#cluster_selector DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#cluster_selector}
  */
  readonly clusterSelector: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelector;
  /**
  * Resources is a list of Secrets/ConfigMaps where each contains 1 or more resources to be applied to remote clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#resources DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#resources}
  */
  readonly resources?: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResources[] | cdktf.IResolvable;
  /**
  * Strategy is the strategy to be used during applying resources. Defaults to ApplyOnce. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#strategy DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecToTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_selector: dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorToTerraform(struct!.clusterSelector),
    resources: cdktf.listMapper(dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResourcesToTerraform, false)(struct!.resources),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecToHclTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_selector: {
      value: dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorToHclTerraform(struct!.clusterSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelector",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResourcesList",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSelector = this._clusterSelector?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterSelector.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterSelector.internalValue = value.clusterSelector;
      this._resources.internalValue = value.resources;
      this._strategy = value.strategy;
    }
  }

  // cluster_selector - computed: false, optional: false, required: true
  private _clusterSelector = new DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelectorOutputReference(this, "cluster_selector");
  public get clusterSelector() {
    return this._clusterSelector;
  }
  public putClusterSelector(value: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecClusterSelector) {
    this._clusterSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSelectorInput() {
    return this._clusterSelector.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest k8s_addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest}
*/
export class DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest to import
  * @param importFromId The id of the existing DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest k8s_addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_addons_cluster_x_k8s_io_cluster_resource_set_v1alpha4_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpec) {
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
      metadata: dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestMetadata",
      },
      spec: {
        value: dataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAddonsClusterXK8SIoClusterResourceSetV1Alpha4ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
