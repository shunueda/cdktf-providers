// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#metadata DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestMetadata;
  /**
  * NamespacedFluentBitCfgSpec defines the desired state of FluentBit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#spec DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpec;
}
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#annotations DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#labels DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#name DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#namespace DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#key DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#operator DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#values DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressionsToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressionsOutputReference {
    return new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#match_expressions DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#match_labels DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressionsList",
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#key DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#operator DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#values DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressionsToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressionsOutputReference {
    return new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#match_expressions DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#match_labels DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressionsList",
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#key DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#operator DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#values DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressionsToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressionsOutputReference {
    return new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#match_expressions DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#match_labels DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressionsList",
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#key DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#operator DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#values DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressionsToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressionsOutputReference {
    return new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#match_expressions DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#match_labels DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressionsList",
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#key DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#operator DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#values DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressionsToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressionsOutputReference {
    return new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#match_expressions DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#match_labels DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressionsList",
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#key DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#operator DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#values DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressionsToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressionsOutputReference {
    return new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#match_expressions DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#match_labels DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressionsList",
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

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceStorage {
  /**
  * This option configure a hint of maximum value of memory to use when processing these records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#backlog_mem_limit DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#backlog_mem_limit}
  */
  readonly backlogMemLimit?: string;
  /**
  * Enable the data integrity check when writing and reading data from the filesystem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#checksum DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#checksum}
  */
  readonly checksum?: string;
  /**
  * When enabled, irrecoverable chunks will be deleted during runtime, and any other irrecoverable chunk located in the configured storage path directory will be deleted when Fluent-Bit starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#delete_irrecoverable_chunks DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#delete_irrecoverable_chunks}
  */
  readonly deleteIrrecoverableChunks?: string;
  /**
  * If the input plugin has enabled filesystem storage type, this property sets the maximum number of Chunks that can be up in memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#max_chunks_up DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#max_chunks_up}
  */
  readonly maxChunksUp?: number;
  /**
  * If http_server option has been enabled in the Service section, this option registers a new endpoint where internal metrics of the storage layer can be consumed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#metrics DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#metrics}
  */
  readonly metrics?: string;
  /**
  * Select an optional location in the file system to store streams and chunks of data/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#path DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#path}
  */
  readonly path?: string;
  /**
  * Configure the synchronization mode used to store the data into the file system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#sync DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#sync}
  */
  readonly sync?: string;
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceStorageToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backlog_mem_limit: cdktf.stringToTerraform(struct!.backlogMemLimit),
    checksum: cdktf.stringToTerraform(struct!.checksum),
    delete_irrecoverable_chunks: cdktf.stringToTerraform(struct!.deleteIrrecoverableChunks),
    max_chunks_up: cdktf.numberToTerraform(struct!.maxChunksUp),
    metrics: cdktf.stringToTerraform(struct!.metrics),
    path: cdktf.stringToTerraform(struct!.path),
    sync: cdktf.stringToTerraform(struct!.sync),
  }
}


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceStorageToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backlog_mem_limit: {
      value: cdktf.stringToHclTerraform(struct!.backlogMemLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_irrecoverable_chunks: {
      value: cdktf.stringToHclTerraform(struct!.deleteIrrecoverableChunks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_chunks_up: {
      value: cdktf.numberToHclTerraform(struct!.maxChunksUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: cdktf.stringToHclTerraform(struct!.metrics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync: {
      value: cdktf.stringToHclTerraform(struct!.sync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backlogMemLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.backlogMemLimit = this._backlogMemLimit;
    }
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._deleteIrrecoverableChunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteIrrecoverableChunks = this._deleteIrrecoverableChunks;
    }
    if (this._maxChunksUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxChunksUp = this._maxChunksUp;
    }
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._sync !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backlogMemLimit = undefined;
      this._checksum = undefined;
      this._deleteIrrecoverableChunks = undefined;
      this._maxChunksUp = undefined;
      this._metrics = undefined;
      this._path = undefined;
      this._sync = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backlogMemLimit = value.backlogMemLimit;
      this._checksum = value.checksum;
      this._deleteIrrecoverableChunks = value.deleteIrrecoverableChunks;
      this._maxChunksUp = value.maxChunksUp;
      this._metrics = value.metrics;
      this._path = value.path;
      this._sync = value.sync;
    }
  }

  // backlog_mem_limit - computed: false, optional: true, required: false
  private _backlogMemLimit?: string; 
  public get backlogMemLimit() {
    return this.getStringAttribute('backlog_mem_limit');
  }
  public set backlogMemLimit(value: string) {
    this._backlogMemLimit = value;
  }
  public resetBacklogMemLimit() {
    this._backlogMemLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backlogMemLimitInput() {
    return this._backlogMemLimit;
  }

  // checksum - computed: false, optional: true, required: false
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // delete_irrecoverable_chunks - computed: false, optional: true, required: false
  private _deleteIrrecoverableChunks?: string; 
  public get deleteIrrecoverableChunks() {
    return this.getStringAttribute('delete_irrecoverable_chunks');
  }
  public set deleteIrrecoverableChunks(value: string) {
    this._deleteIrrecoverableChunks = value;
  }
  public resetDeleteIrrecoverableChunks() {
    this._deleteIrrecoverableChunks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteIrrecoverableChunksInput() {
    return this._deleteIrrecoverableChunks;
  }

  // max_chunks_up - computed: false, optional: true, required: false
  private _maxChunksUp?: number; 
  public get maxChunksUp() {
    return this.getNumberAttribute('max_chunks_up');
  }
  public set maxChunksUp(value: number) {
    this._maxChunksUp = value;
  }
  public resetMaxChunksUp() {
    this._maxChunksUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxChunksUpInput() {
    return this._maxChunksUp;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics?: string; 
  public get metrics() {
    return this.getStringAttribute('metrics');
  }
  public set metrics(value: string) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // sync - computed: false, optional: true, required: false
  private _sync?: string; 
  public get sync() {
    return this.getStringAttribute('sync');
  }
  public set sync(value: string) {
    this._sync = value;
  }
  public resetSync() {
    this._sync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync;
  }
}
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecService {
  /**
  * If true go to background on start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#daemon DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#daemon}
  */
  readonly daemon?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#emitter_mem_buf_limit DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#emitter_mem_buf_limit}
  */
  readonly emitterMemBufLimit?: string;
  /**
  * Per-namespace re-emitter configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#emitter_name DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#emitter_name}
  */
  readonly emitterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#emitter_storage_type DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#emitter_storage_type}
  */
  readonly emitterStorageType?: string;
  /**
  * Interval to flush output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#flush_seconds DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#flush_seconds}
  */
  readonly flushSeconds?: number;
  /**
  * Wait time on exit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#grace_seconds DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#grace_seconds}
  */
  readonly graceSeconds?: number;
  /**
  * the error count to meet the unhealthy requirement, this is a sum for all output plugins in a defined HC_Period, example for output error: [2022/02/16 10:44:10] [ warn] [engine] failed to flush chunk '1-1645008245.491540684.flb', retry in 7 seconds: task_id=0, input=forward.1 > output=cloudwatch_logs.3 (out_id=3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#hc_errors_count DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#hc_errors_count}
  */
  readonly hcErrorsCount?: number;
  /**
  * The time period by second to count the error and retry failure data point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#hc_period DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#hc_period}
  */
  readonly hcPeriod?: number;
  /**
  * the retry failure count to meet the unhealthy requirement, this is a sum for all output plugins in a defined HC_Period, example for retry failure: [2022/02/16 20:11:36] [ warn] [engine] chunk '1-1645042288.260516436.flb' cannot be retried: task_id=0, input=tcp.3 > output=cloudwatch_logs.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#hc_retry_failure_count DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#hc_retry_failure_count}
  */
  readonly hcRetryFailureCount?: number;
  /**
  * enable Health check feature at http://127.0.0.1:2020/api/v1/health Note: Enabling this will not automatically configure kubernetes to use fluentbit's healthcheck endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#health_check DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#health_check}
  */
  readonly healthCheck?: boolean | cdktf.IResolvable;
  /**
  * If true enable reloading via HTTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#hot_reload DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#hot_reload}
  */
  readonly hotReload?: boolean | cdktf.IResolvable;
  /**
  * Address to listen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#http_listen DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#http_listen}
  */
  readonly httpListen?: string;
  /**
  * Port to listen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#http_port DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#http_port}
  */
  readonly httpPort?: number;
  /**
  * If true enable statistics HTTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#http_server DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#http_server}
  */
  readonly httpServer?: boolean | cdktf.IResolvable;
  /**
  * File to log diagnostic output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#log_file DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#log_file}
  */
  readonly logFile?: string;
  /**
  * Diagnostic level (error/warning/info/debug/trace)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#log_level DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Optional 'parsers' config file (can be multiple)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#parsers_file DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#parsers_file}
  */
  readonly parsersFile?: string;
  /**
  * backward compatible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#parsers_files DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#parsers_files}
  */
  readonly parsersFiles?: string[];
  /**
  * Configure a global environment for the storage layer in Service. It is recommended to configure the volume and volumeMount separately for this storage. The hostPath type should be used for that Volume in Fluentbit daemon set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#storage DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#storage}
  */
  readonly storage?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceStorage;
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daemon: cdktf.booleanToTerraform(struct!.daemon),
    emitter_mem_buf_limit: cdktf.stringToTerraform(struct!.emitterMemBufLimit),
    emitter_name: cdktf.stringToTerraform(struct!.emitterName),
    emitter_storage_type: cdktf.stringToTerraform(struct!.emitterStorageType),
    flush_seconds: cdktf.numberToTerraform(struct!.flushSeconds),
    grace_seconds: cdktf.numberToTerraform(struct!.graceSeconds),
    hc_errors_count: cdktf.numberToTerraform(struct!.hcErrorsCount),
    hc_period: cdktf.numberToTerraform(struct!.hcPeriod),
    hc_retry_failure_count: cdktf.numberToTerraform(struct!.hcRetryFailureCount),
    health_check: cdktf.booleanToTerraform(struct!.healthCheck),
    hot_reload: cdktf.booleanToTerraform(struct!.hotReload),
    http_listen: cdktf.stringToTerraform(struct!.httpListen),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    http_server: cdktf.booleanToTerraform(struct!.httpServer),
    log_file: cdktf.stringToTerraform(struct!.logFile),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    parsers_file: cdktf.stringToTerraform(struct!.parsersFile),
    parsers_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parsersFiles),
    storage: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceStorageToTerraform(struct!.storage),
  }
}


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daemon: {
      value: cdktf.booleanToHclTerraform(struct!.daemon),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    emitter_mem_buf_limit: {
      value: cdktf.stringToHclTerraform(struct!.emitterMemBufLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emitter_name: {
      value: cdktf.stringToHclTerraform(struct!.emitterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emitter_storage_type: {
      value: cdktf.stringToHclTerraform(struct!.emitterStorageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush_seconds: {
      value: cdktf.numberToHclTerraform(struct!.flushSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grace_seconds: {
      value: cdktf.numberToHclTerraform(struct!.graceSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hc_errors_count: {
      value: cdktf.numberToHclTerraform(struct!.hcErrorsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hc_period: {
      value: cdktf.numberToHclTerraform(struct!.hcPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hc_retry_failure_count: {
      value: cdktf.numberToHclTerraform(struct!.hcRetryFailureCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check: {
      value: cdktf.booleanToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hot_reload: {
      value: cdktf.booleanToHclTerraform(struct!.hotReload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_listen: {
      value: cdktf.stringToHclTerraform(struct!.httpListen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_server: {
      value: cdktf.booleanToHclTerraform(struct!.httpServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_file: {
      value: cdktf.stringToHclTerraform(struct!.logFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parsers_file: {
      value: cdktf.stringToHclTerraform(struct!.parsersFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parsers_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.parsersFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    storage: {
      value: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daemon !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemon = this._daemon;
    }
    if (this._emitterMemBufLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitterMemBufLimit = this._emitterMemBufLimit;
    }
    if (this._emitterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitterName = this._emitterName;
    }
    if (this._emitterStorageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitterStorageType = this._emitterStorageType;
    }
    if (this._flushSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushSeconds = this._flushSeconds;
    }
    if (this._graceSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.graceSeconds = this._graceSeconds;
    }
    if (this._hcErrorsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcErrorsCount = this._hcErrorsCount;
    }
    if (this._hcPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcPeriod = this._hcPeriod;
    }
    if (this._hcRetryFailureCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcRetryFailureCount = this._hcRetryFailureCount;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._hotReload !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotReload = this._hotReload;
    }
    if (this._httpListen !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpListen = this._httpListen;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpServer = this._httpServer;
    }
    if (this._logFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFile = this._logFile;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._parsersFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsersFile = this._parsersFile;
    }
    if (this._parsersFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsersFiles = this._parsersFiles;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daemon = undefined;
      this._emitterMemBufLimit = undefined;
      this._emitterName = undefined;
      this._emitterStorageType = undefined;
      this._flushSeconds = undefined;
      this._graceSeconds = undefined;
      this._hcErrorsCount = undefined;
      this._hcPeriod = undefined;
      this._hcRetryFailureCount = undefined;
      this._healthCheck = undefined;
      this._hotReload = undefined;
      this._httpListen = undefined;
      this._httpPort = undefined;
      this._httpServer = undefined;
      this._logFile = undefined;
      this._logLevel = undefined;
      this._parsersFile = undefined;
      this._parsersFiles = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daemon = value.daemon;
      this._emitterMemBufLimit = value.emitterMemBufLimit;
      this._emitterName = value.emitterName;
      this._emitterStorageType = value.emitterStorageType;
      this._flushSeconds = value.flushSeconds;
      this._graceSeconds = value.graceSeconds;
      this._hcErrorsCount = value.hcErrorsCount;
      this._hcPeriod = value.hcPeriod;
      this._hcRetryFailureCount = value.hcRetryFailureCount;
      this._healthCheck = value.healthCheck;
      this._hotReload = value.hotReload;
      this._httpListen = value.httpListen;
      this._httpPort = value.httpPort;
      this._httpServer = value.httpServer;
      this._logFile = value.logFile;
      this._logLevel = value.logLevel;
      this._parsersFile = value.parsersFile;
      this._parsersFiles = value.parsersFiles;
      this._storage.internalValue = value.storage;
    }
  }

  // daemon - computed: false, optional: true, required: false
  private _daemon?: boolean | cdktf.IResolvable; 
  public get daemon() {
    return this.getBooleanAttribute('daemon');
  }
  public set daemon(value: boolean | cdktf.IResolvable) {
    this._daemon = value;
  }
  public resetDaemon() {
    this._daemon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonInput() {
    return this._daemon;
  }

  // emitter_mem_buf_limit - computed: false, optional: true, required: false
  private _emitterMemBufLimit?: string; 
  public get emitterMemBufLimit() {
    return this.getStringAttribute('emitter_mem_buf_limit');
  }
  public set emitterMemBufLimit(value: string) {
    this._emitterMemBufLimit = value;
  }
  public resetEmitterMemBufLimit() {
    this._emitterMemBufLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitterMemBufLimitInput() {
    return this._emitterMemBufLimit;
  }

  // emitter_name - computed: false, optional: true, required: false
  private _emitterName?: string; 
  public get emitterName() {
    return this.getStringAttribute('emitter_name');
  }
  public set emitterName(value: string) {
    this._emitterName = value;
  }
  public resetEmitterName() {
    this._emitterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitterNameInput() {
    return this._emitterName;
  }

  // emitter_storage_type - computed: false, optional: true, required: false
  private _emitterStorageType?: string; 
  public get emitterStorageType() {
    return this.getStringAttribute('emitter_storage_type');
  }
  public set emitterStorageType(value: string) {
    this._emitterStorageType = value;
  }
  public resetEmitterStorageType() {
    this._emitterStorageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitterStorageTypeInput() {
    return this._emitterStorageType;
  }

  // flush_seconds - computed: false, optional: true, required: false
  private _flushSeconds?: number; 
  public get flushSeconds() {
    return this.getNumberAttribute('flush_seconds');
  }
  public set flushSeconds(value: number) {
    this._flushSeconds = value;
  }
  public resetFlushSeconds() {
    this._flushSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushSecondsInput() {
    return this._flushSeconds;
  }

  // grace_seconds - computed: false, optional: true, required: false
  private _graceSeconds?: number; 
  public get graceSeconds() {
    return this.getNumberAttribute('grace_seconds');
  }
  public set graceSeconds(value: number) {
    this._graceSeconds = value;
  }
  public resetGraceSeconds() {
    this._graceSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceSecondsInput() {
    return this._graceSeconds;
  }

  // hc_errors_count - computed: false, optional: true, required: false
  private _hcErrorsCount?: number; 
  public get hcErrorsCount() {
    return this.getNumberAttribute('hc_errors_count');
  }
  public set hcErrorsCount(value: number) {
    this._hcErrorsCount = value;
  }
  public resetHcErrorsCount() {
    this._hcErrorsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcErrorsCountInput() {
    return this._hcErrorsCount;
  }

  // hc_period - computed: false, optional: true, required: false
  private _hcPeriod?: number; 
  public get hcPeriod() {
    return this.getNumberAttribute('hc_period');
  }
  public set hcPeriod(value: number) {
    this._hcPeriod = value;
  }
  public resetHcPeriod() {
    this._hcPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcPeriodInput() {
    return this._hcPeriod;
  }

  // hc_retry_failure_count - computed: false, optional: true, required: false
  private _hcRetryFailureCount?: number; 
  public get hcRetryFailureCount() {
    return this.getNumberAttribute('hc_retry_failure_count');
  }
  public set hcRetryFailureCount(value: number) {
    this._hcRetryFailureCount = value;
  }
  public resetHcRetryFailureCount() {
    this._hcRetryFailureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcRetryFailureCountInput() {
    return this._hcRetryFailureCount;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: boolean | cdktf.IResolvable; 
  public get healthCheck() {
    return this.getBooleanAttribute('health_check');
  }
  public set healthCheck(value: boolean | cdktf.IResolvable) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // hot_reload - computed: false, optional: true, required: false
  private _hotReload?: boolean | cdktf.IResolvable; 
  public get hotReload() {
    return this.getBooleanAttribute('hot_reload');
  }
  public set hotReload(value: boolean | cdktf.IResolvable) {
    this._hotReload = value;
  }
  public resetHotReload() {
    this._hotReload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotReloadInput() {
    return this._hotReload;
  }

  // http_listen - computed: false, optional: true, required: false
  private _httpListen?: string; 
  public get httpListen() {
    return this.getStringAttribute('http_listen');
  }
  public set httpListen(value: string) {
    this._httpListen = value;
  }
  public resetHttpListen() {
    this._httpListen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpListenInput() {
    return this._httpListen;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // http_server - computed: false, optional: true, required: false
  private _httpServer?: boolean | cdktf.IResolvable; 
  public get httpServer() {
    return this.getBooleanAttribute('http_server');
  }
  public set httpServer(value: boolean | cdktf.IResolvable) {
    this._httpServer = value;
  }
  public resetHttpServer() {
    this._httpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServerInput() {
    return this._httpServer;
  }

  // log_file - computed: false, optional: true, required: false
  private _logFile?: string; 
  public get logFile() {
    return this.getStringAttribute('log_file');
  }
  public set logFile(value: string) {
    this._logFile = value;
  }
  public resetLogFile() {
    this._logFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileInput() {
    return this._logFile;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // parsers_file - computed: false, optional: true, required: false
  private _parsersFile?: string; 
  public get parsersFile() {
    return this.getStringAttribute('parsers_file');
  }
  public set parsersFile(value: string) {
    this._parsersFile = value;
  }
  public resetParsersFile() {
    this._parsersFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsersFileInput() {
    return this._parsersFile;
  }

  // parsers_files - computed: false, optional: true, required: false
  private _parsersFiles?: string[]; 
  public get parsersFiles() {
    return this.getListAttribute('parsers_files');
  }
  public set parsersFiles(value: string[]) {
    this._parsersFiles = value;
  }
  public resetParsersFiles() {
    this._parsersFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsersFilesInput() {
    return this._parsersFiles;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpec {
  /**
  * Select cluster level multiline parser config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#cluster_multiline_parser_selector DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#cluster_multiline_parser_selector}
  */
  readonly clusterMultilineParserSelector?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelector;
  /**
  * Select cluster level parser config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#cluster_parser_selector DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#cluster_parser_selector}
  */
  readonly clusterParserSelector?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelector;
  /**
  * Select filter plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#filter_selector DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#filter_selector}
  */
  readonly filterSelector?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelector;
  /**
  * Select multiline parser plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#multiline_parser_selector DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#multiline_parser_selector}
  */
  readonly multilineParserSelector?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelector;
  /**
  * Select output plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#output_selector DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#output_selector}
  */
  readonly outputSelector?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelector;
  /**
  * Select parser plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#parser_selector DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#parser_selector}
  */
  readonly parserSelector?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelector;
  /**
  * Service defines the global behaviour of the Fluent Bit engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#service DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest#service}
  */
  readonly service?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecService;
}

export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecToTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_multiline_parser_selector: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorToTerraform(struct!.clusterMultilineParserSelector),
    cluster_parser_selector: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorToTerraform(struct!.clusterParserSelector),
    filter_selector: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorToTerraform(struct!.filterSelector),
    multiline_parser_selector: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorToTerraform(struct!.multilineParserSelector),
    output_selector: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorToTerraform(struct!.outputSelector),
    parser_selector: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorToTerraform(struct!.parserSelector),
    service: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceToTerraform(struct!.service),
  }
}


export function dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_multiline_parser_selector: {
      value: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorToHclTerraform(struct!.clusterMultilineParserSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelector",
    },
    cluster_parser_selector: {
      value: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorToHclTerraform(struct!.clusterParserSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelector",
    },
    filter_selector: {
      value: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorToHclTerraform(struct!.filterSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelector",
    },
    multiline_parser_selector: {
      value: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorToHclTerraform(struct!.multilineParserSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelector",
    },
    output_selector: {
      value: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorToHclTerraform(struct!.outputSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelector",
    },
    parser_selector: {
      value: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorToHclTerraform(struct!.parserSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelector",
    },
    service: {
      value: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterMultilineParserSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMultilineParserSelector = this._clusterMultilineParserSelector?.internalValue;
    }
    if (this._clusterParserSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterParserSelector = this._clusterParserSelector?.internalValue;
    }
    if (this._filterSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSelector = this._filterSelector?.internalValue;
    }
    if (this._multilineParserSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multilineParserSelector = this._multilineParserSelector?.internalValue;
    }
    if (this._outputSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSelector = this._outputSelector?.internalValue;
    }
    if (this._parserSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parserSelector = this._parserSelector?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterMultilineParserSelector.internalValue = undefined;
      this._clusterParserSelector.internalValue = undefined;
      this._filterSelector.internalValue = undefined;
      this._multilineParserSelector.internalValue = undefined;
      this._outputSelector.internalValue = undefined;
      this._parserSelector.internalValue = undefined;
      this._service.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterMultilineParserSelector.internalValue = value.clusterMultilineParserSelector;
      this._clusterParserSelector.internalValue = value.clusterParserSelector;
      this._filterSelector.internalValue = value.filterSelector;
      this._multilineParserSelector.internalValue = value.multilineParserSelector;
      this._outputSelector.internalValue = value.outputSelector;
      this._parserSelector.internalValue = value.parserSelector;
      this._service.internalValue = value.service;
    }
  }

  // cluster_multiline_parser_selector - computed: false, optional: true, required: false
  private _clusterMultilineParserSelector = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelectorOutputReference(this, "cluster_multiline_parser_selector");
  public get clusterMultilineParserSelector() {
    return this._clusterMultilineParserSelector;
  }
  public putClusterMultilineParserSelector(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterMultilineParserSelector) {
    this._clusterMultilineParserSelector.internalValue = value;
  }
  public resetClusterMultilineParserSelector() {
    this._clusterMultilineParserSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMultilineParserSelectorInput() {
    return this._clusterMultilineParserSelector.internalValue;
  }

  // cluster_parser_selector - computed: false, optional: true, required: false
  private _clusterParserSelector = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelectorOutputReference(this, "cluster_parser_selector");
  public get clusterParserSelector() {
    return this._clusterParserSelector;
  }
  public putClusterParserSelector(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecClusterParserSelector) {
    this._clusterParserSelector.internalValue = value;
  }
  public resetClusterParserSelector() {
    this._clusterParserSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterParserSelectorInput() {
    return this._clusterParserSelector.internalValue;
  }

  // filter_selector - computed: false, optional: true, required: false
  private _filterSelector = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelectorOutputReference(this, "filter_selector");
  public get filterSelector() {
    return this._filterSelector;
  }
  public putFilterSelector(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecFilterSelector) {
    this._filterSelector.internalValue = value;
  }
  public resetFilterSelector() {
    this._filterSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSelectorInput() {
    return this._filterSelector.internalValue;
  }

  // multiline_parser_selector - computed: false, optional: true, required: false
  private _multilineParserSelector = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelectorOutputReference(this, "multiline_parser_selector");
  public get multilineParserSelector() {
    return this._multilineParserSelector;
  }
  public putMultilineParserSelector(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecMultilineParserSelector) {
    this._multilineParserSelector.internalValue = value;
  }
  public resetMultilineParserSelector() {
    this._multilineParserSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineParserSelectorInput() {
    return this._multilineParserSelector.internalValue;
  }

  // output_selector - computed: false, optional: true, required: false
  private _outputSelector = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelectorOutputReference(this, "output_selector");
  public get outputSelector() {
    return this._outputSelector;
  }
  public putOutputSelector(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputSelector) {
    this._outputSelector.internalValue = value;
  }
  public resetOutputSelector() {
    this._outputSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSelectorInput() {
    return this._outputSelector.internalValue;
  }

  // parser_selector - computed: false, optional: true, required: false
  private _parserSelector = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelectorOutputReference(this, "parser_selector");
  public get parserSelector() {
    return this._parserSelector;
  }
  public putParserSelector(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecParserSelector) {
    this._parserSelector.internalValue = value;
  }
  public resetParserSelector() {
    this._parserSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserSelectorInput() {
    return this._parserSelector.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest k8s_fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest}
*/
export class DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest k8s_fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_fluentbit_fluent_io_fluent_bit_config_v1alpha2_manifest',
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
  private _metadata = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpec) {
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
      metadata: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentbitFluentIoFluentBitConfigV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
