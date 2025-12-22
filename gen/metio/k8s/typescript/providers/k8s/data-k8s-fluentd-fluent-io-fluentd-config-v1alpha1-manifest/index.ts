// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#metadata DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestMetadata;
  /**
  * FluentdConfigSpec defines the desired state of FluentdConfig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#spec DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpec;
}
export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#annotations DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#labels DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#name DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#namespace DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#key DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#operator DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#values DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressionsToTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressionsOutputReference {
    return new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#match_expressions DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#match_labels DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorToTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorToHclTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressionsList",
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#key DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#operator DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#values DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressionsToTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressionsOutputReference {
    return new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#match_expressions DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#match_labels DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorToTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorToHclTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressionsList",
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#key DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#operator DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#values DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressionsToTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressionsOutputReference {
    return new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#match_expressions DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#match_labels DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorToTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorToHclTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressionsList",
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#key DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#operator DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#values DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressionsToTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressionsOutputReference {
    return new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#match_expressions DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#match_labels DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorToTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorToHclTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressionsList",
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#key DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#operator DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#values DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressionsToTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressionsOutputReference {
    return new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#match_expressions DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#match_labels DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorToTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorToHclTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressionsList",
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#key DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#operator DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#values DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressionsToTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressionsOutputReference {
    return new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#match_expressions DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#match_labels DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorToTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorToHclTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressionsList",
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

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpec {
  /**
  * Select cluster filter plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#cluster_filter_selector DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#cluster_filter_selector}
  */
  readonly clusterFilterSelector?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelector;
  /**
  * Select cluster input plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#cluster_input_selector DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#cluster_input_selector}
  */
  readonly clusterInputSelector?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelector;
  /**
  * Select cluster output plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#cluster_output_selector DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#cluster_output_selector}
  */
  readonly clusterOutputSelector?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelector;
  /**
  * Emit mode. If batch, the plugin will emit events per labels matched. Enum: record, batch. will make no effect if EnableFilterKubernetes is set false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#emit_mode DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#emit_mode}
  */
  readonly emitMode?: string;
  /**
  * Select namespaced filter plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#filter_selector DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#filter_selector}
  */
  readonly filterSelector?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelector;
  /**
  * Select cluster input plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#input_selector DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#input_selector}
  */
  readonly inputSelector?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelector;
  /**
  * Select namespaced output plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#output_selector DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#output_selector}
  */
  readonly outputSelector?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelector;
  /**
  * Sticky tags will match only one record from an event stream. The same tag will be treated the same way. will make no effect if EnableFilterKubernetes is set false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#sticky_tags DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#sticky_tags}
  */
  readonly stickyTags?: string;
  /**
  * A set of container names. Ignored if left empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#watched_constainers DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#watched_constainers}
  */
  readonly watchedConstainers?: string[];
  /**
  * A set of hosts. Ignored if left empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#watched_hosts DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#watched_hosts}
  */
  readonly watchedHosts?: string[];
  /**
  * Use this field to filter the logs, will make no effect if EnableFilterKubernetes is set false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#watched_labels DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest#watched_labels}
  */
  readonly watchedLabels?: { [key: string]: string };
}

export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_filter_selector: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorToTerraform(struct!.clusterFilterSelector),
    cluster_input_selector: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorToTerraform(struct!.clusterInputSelector),
    cluster_output_selector: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorToTerraform(struct!.clusterOutputSelector),
    emit_mode: cdktf.stringToTerraform(struct!.emitMode),
    filter_selector: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorToTerraform(struct!.filterSelector),
    input_selector: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorToTerraform(struct!.inputSelector),
    output_selector: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorToTerraform(struct!.outputSelector),
    sticky_tags: cdktf.stringToTerraform(struct!.stickyTags),
    watched_constainers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.watchedConstainers),
    watched_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.watchedHosts),
    watched_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.watchedLabels),
  }
}


export function dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_filter_selector: {
      value: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorToHclTerraform(struct!.clusterFilterSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelector",
    },
    cluster_input_selector: {
      value: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorToHclTerraform(struct!.clusterInputSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelector",
    },
    cluster_output_selector: {
      value: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorToHclTerraform(struct!.clusterOutputSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelector",
    },
    emit_mode: {
      value: cdktf.stringToHclTerraform(struct!.emitMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_selector: {
      value: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorToHclTerraform(struct!.filterSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelector",
    },
    input_selector: {
      value: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorToHclTerraform(struct!.inputSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelector",
    },
    output_selector: {
      value: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorToHclTerraform(struct!.outputSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelector",
    },
    sticky_tags: {
      value: cdktf.stringToHclTerraform(struct!.stickyTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    watched_constainers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.watchedConstainers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    watched_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.watchedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    watched_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.watchedLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterFilterSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterFilterSelector = this._clusterFilterSelector?.internalValue;
    }
    if (this._clusterInputSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterInputSelector = this._clusterInputSelector?.internalValue;
    }
    if (this._clusterOutputSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterOutputSelector = this._clusterOutputSelector?.internalValue;
    }
    if (this._emitMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitMode = this._emitMode;
    }
    if (this._filterSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSelector = this._filterSelector?.internalValue;
    }
    if (this._inputSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSelector = this._inputSelector?.internalValue;
    }
    if (this._outputSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSelector = this._outputSelector?.internalValue;
    }
    if (this._stickyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickyTags = this._stickyTags;
    }
    if (this._watchedConstainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchedConstainers = this._watchedConstainers;
    }
    if (this._watchedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchedHosts = this._watchedHosts;
    }
    if (this._watchedLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchedLabels = this._watchedLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterFilterSelector.internalValue = undefined;
      this._clusterInputSelector.internalValue = undefined;
      this._clusterOutputSelector.internalValue = undefined;
      this._emitMode = undefined;
      this._filterSelector.internalValue = undefined;
      this._inputSelector.internalValue = undefined;
      this._outputSelector.internalValue = undefined;
      this._stickyTags = undefined;
      this._watchedConstainers = undefined;
      this._watchedHosts = undefined;
      this._watchedLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterFilterSelector.internalValue = value.clusterFilterSelector;
      this._clusterInputSelector.internalValue = value.clusterInputSelector;
      this._clusterOutputSelector.internalValue = value.clusterOutputSelector;
      this._emitMode = value.emitMode;
      this._filterSelector.internalValue = value.filterSelector;
      this._inputSelector.internalValue = value.inputSelector;
      this._outputSelector.internalValue = value.outputSelector;
      this._stickyTags = value.stickyTags;
      this._watchedConstainers = value.watchedConstainers;
      this._watchedHosts = value.watchedHosts;
      this._watchedLabels = value.watchedLabels;
    }
  }

  // cluster_filter_selector - computed: false, optional: true, required: false
  private _clusterFilterSelector = new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelectorOutputReference(this, "cluster_filter_selector");
  public get clusterFilterSelector() {
    return this._clusterFilterSelector;
  }
  public putClusterFilterSelector(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterFilterSelector) {
    this._clusterFilterSelector.internalValue = value;
  }
  public resetClusterFilterSelector() {
    this._clusterFilterSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterFilterSelectorInput() {
    return this._clusterFilterSelector.internalValue;
  }

  // cluster_input_selector - computed: false, optional: true, required: false
  private _clusterInputSelector = new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelectorOutputReference(this, "cluster_input_selector");
  public get clusterInputSelector() {
    return this._clusterInputSelector;
  }
  public putClusterInputSelector(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterInputSelector) {
    this._clusterInputSelector.internalValue = value;
  }
  public resetClusterInputSelector() {
    this._clusterInputSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInputSelectorInput() {
    return this._clusterInputSelector.internalValue;
  }

  // cluster_output_selector - computed: false, optional: true, required: false
  private _clusterOutputSelector = new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelectorOutputReference(this, "cluster_output_selector");
  public get clusterOutputSelector() {
    return this._clusterOutputSelector;
  }
  public putClusterOutputSelector(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecClusterOutputSelector) {
    this._clusterOutputSelector.internalValue = value;
  }
  public resetClusterOutputSelector() {
    this._clusterOutputSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOutputSelectorInput() {
    return this._clusterOutputSelector.internalValue;
  }

  // emit_mode - computed: false, optional: true, required: false
  private _emitMode?: string; 
  public get emitMode() {
    return this.getStringAttribute('emit_mode');
  }
  public set emitMode(value: string) {
    this._emitMode = value;
  }
  public resetEmitMode() {
    this._emitMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitModeInput() {
    return this._emitMode;
  }

  // filter_selector - computed: false, optional: true, required: false
  private _filterSelector = new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelectorOutputReference(this, "filter_selector");
  public get filterSelector() {
    return this._filterSelector;
  }
  public putFilterSelector(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecFilterSelector) {
    this._filterSelector.internalValue = value;
  }
  public resetFilterSelector() {
    this._filterSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSelectorInput() {
    return this._filterSelector.internalValue;
  }

  // input_selector - computed: false, optional: true, required: false
  private _inputSelector = new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelectorOutputReference(this, "input_selector");
  public get inputSelector() {
    return this._inputSelector;
  }
  public putInputSelector(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecInputSelector) {
    this._inputSelector.internalValue = value;
  }
  public resetInputSelector() {
    this._inputSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSelectorInput() {
    return this._inputSelector.internalValue;
  }

  // output_selector - computed: false, optional: true, required: false
  private _outputSelector = new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelectorOutputReference(this, "output_selector");
  public get outputSelector() {
    return this._outputSelector;
  }
  public putOutputSelector(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputSelector) {
    this._outputSelector.internalValue = value;
  }
  public resetOutputSelector() {
    this._outputSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSelectorInput() {
    return this._outputSelector.internalValue;
  }

  // sticky_tags - computed: false, optional: true, required: false
  private _stickyTags?: string; 
  public get stickyTags() {
    return this.getStringAttribute('sticky_tags');
  }
  public set stickyTags(value: string) {
    this._stickyTags = value;
  }
  public resetStickyTags() {
    this._stickyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyTagsInput() {
    return this._stickyTags;
  }

  // watched_constainers - computed: false, optional: true, required: false
  private _watchedConstainers?: string[]; 
  public get watchedConstainers() {
    return this.getListAttribute('watched_constainers');
  }
  public set watchedConstainers(value: string[]) {
    this._watchedConstainers = value;
  }
  public resetWatchedConstainers() {
    this._watchedConstainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchedConstainersInput() {
    return this._watchedConstainers;
  }

  // watched_hosts - computed: false, optional: true, required: false
  private _watchedHosts?: string[]; 
  public get watchedHosts() {
    return this.getListAttribute('watched_hosts');
  }
  public set watchedHosts(value: string[]) {
    this._watchedHosts = value;
  }
  public resetWatchedHosts() {
    this._watchedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchedHostsInput() {
    return this._watchedHosts;
  }

  // watched_labels - computed: false, optional: true, required: false
  private _watchedLabels?: { [key: string]: string }; 
  public get watchedLabels() {
    return this.getStringMapAttribute('watched_labels');
  }
  public set watchedLabels(value: { [key: string]: string }) {
    this._watchedLabels = value;
  }
  public resetWatchedLabels() {
    this._watchedLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchedLabelsInput() {
    return this._watchedLabels;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest k8s_fluentd_fluent_io_fluentd_config_v1alpha1_manifest}
*/
export class DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_fluentd_fluent_io_fluentd_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFluentdFluentIoFluentdConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_fluentd_fluent_io_fluentd_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/fluentd_fluent_io_fluentd_config_v1alpha1_manifest k8s_fluentd_fluent_io_fluentd_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_fluentd_fluent_io_fluentd_config_v1alpha1_manifest',
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
  private _metadata = new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentdFluentIoFluentdConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
