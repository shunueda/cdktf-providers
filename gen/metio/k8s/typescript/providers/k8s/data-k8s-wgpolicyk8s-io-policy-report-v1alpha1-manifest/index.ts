// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#metadata DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestMetadata;
  /**
  * PolicyReportResult provides result details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#results DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#results}
  */
  readonly results?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResults[] | cdktf.IResolvable;
  /**
  * Scope is an optional reference to the report scope (e.g. a Deployment, Namespace, or Node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#scope DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#scope}
  */
  readonly scope?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScope;
  /**
  * ScopeSelector is an optional selector for multiple scopes (e.g. Pods). Either one of, or none of, but not both of, Scope or ScopeSelector should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#scope_selector DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#scope_selector}
  */
  readonly scopeSelector?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelector;
  /**
  * PolicyReportSummary provides a summary of results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#summary DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#summary}
  */
  readonly summary?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestSummary;
}
export interface DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#annotations DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#labels DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#name DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#namespace DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#key DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#operator DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#values DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressionsToTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressionsOutputReference {
    return new DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#match_expressions DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#match_labels DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorToTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorToHclTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressionsList",
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

export class DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResources {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#api_version DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#field_path DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#kind DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#name DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#namespace DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#resource_version DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#uid DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourcesToTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourcesToHclTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}

export class DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourcesOutputReference {
    return new DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResults {
  /**
  * Category indicates policy category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#category DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#category}
  */
  readonly category?: string;
  /**
  * Data provides additional information for the policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#data DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Message is a short user friendly description of the policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#message DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#message}
  */
  readonly message?: string;
  /**
  * Policy is the name of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#policy DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#policy}
  */
  readonly policy: string;
  /**
  * ResourceSelector is an optional selector for policy results that apply to multiple resources. For example, a policy result may apply to all pods that match a label. Either a Resource or a ResourceSelector can be specified. If neither are provided, the result is assumed to be for the policy report scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#resource_selector DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#resource_selector}
  */
  readonly resourceSelector?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelector;
  /**
  * Resources is an optional reference to the resource checked by the policy and rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#resources DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResources[] | cdktf.IResolvable;
  /**
  * Rule is the name of the policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#rule DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#rule}
  */
  readonly rule?: string;
  /**
  * Scored indicates if this policy rule is scored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#scored DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#scored}
  */
  readonly scored?: boolean | cdktf.IResolvable;
  /**
  * Severity indicates policy severity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#severity DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#severity}
  */
  readonly severity?: string;
  /**
  * Status indicates the result of the policy rule check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#status DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsToTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    message: cdktf.stringToTerraform(struct!.message),
    policy: cdktf.stringToTerraform(struct!.policy),
    resource_selector: dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorToTerraform(struct!.resourceSelector),
    resources: cdktf.listMapper(dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourcesToTerraform, false)(struct!.resources),
    rule: cdktf.stringToTerraform(struct!.rule),
    scored: cdktf.booleanToTerraform(struct!.scored),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsToHclTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_selector: {
      value: dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorToHclTerraform(struct!.resourceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelector",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourcesList",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scored: {
      value: cdktf.booleanToHclTerraform(struct!.scored),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._resourceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSelector = this._resourceSelector?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._scored !== undefined) {
      hasAnyValues = true;
      internalValueResult.scored = this._scored;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._data = undefined;
      this._message = undefined;
      this._policy = undefined;
      this._resourceSelector.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._rule = undefined;
      this._scored = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._data = value.data;
      this._message = value.message;
      this._policy = value.policy;
      this._resourceSelector.internalValue = value.resourceSelector;
      this._resources.internalValue = value.resources;
      this._rule = value.rule;
      this._scored = value.scored;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // resource_selector - computed: false, optional: true, required: false
  private _resourceSelector = new DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelectorOutputReference(this, "resource_selector");
  public get resourceSelector() {
    return this._resourceSelector;
  }
  public putResourceSelector(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourceSelector) {
    this._resourceSelector.internalValue = value;
  }
  public resetResourceSelector() {
    this._resourceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectorInput() {
    return this._resourceSelector.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // scored - computed: false, optional: true, required: false
  private _scored?: boolean | cdktf.IResolvable; 
  public get scored() {
    return this.getBooleanAttribute('scored');
  }
  public set scored(value: boolean | cdktf.IResolvable) {
    this._scored = value;
  }
  public resetScored() {
    this._scored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoredInput() {
    return this._scored;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResults[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsOutputReference {
    return new DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScope {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#api_version DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#field_path DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#kind DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#name DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#namespace DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#resource_version DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#uid DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeToTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeToHclTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#key DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#operator DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#values DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressionsToTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressionsToHclTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressionsOutputReference {
    return new DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#match_expressions DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#match_labels DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorToTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorToHclTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressionsList",
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

export class DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestSummary {
  /**
  * Error provides the count of policies that could not be evaluated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#error DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#error}
  */
  readonly error?: number;
  /**
  * Fail provides the count of policies whose requirements were not met
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#fail DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#fail}
  */
  readonly fail?: number;
  /**
  * Pass provides the count of policies whose requirements were met
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#pass DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#pass}
  */
  readonly pass?: number;
  /**
  * Skip indicates the count of policies that were not selected for evaluation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#skip DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#skip}
  */
  readonly skip?: number;
  /**
  * Warn provides the count of unscored policies whose requirements were not met
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#warn DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest#warn}
  */
  readonly warn?: number;
}

export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestSummaryToTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error: cdktf.numberToTerraform(struct!.error),
    fail: cdktf.numberToTerraform(struct!.fail),
    pass: cdktf.numberToTerraform(struct!.pass),
    skip: cdktf.numberToTerraform(struct!.skip),
    warn: cdktf.numberToTerraform(struct!.warn),
  }
}


export function dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestSummaryToHclTerraform(struct?: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail: {
      value: cdktf.numberToHclTerraform(struct!.fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pass: {
      value: cdktf.numberToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip: {
      value: cdktf.numberToHclTerraform(struct!.skip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warn: {
      value: cdktf.numberToHclTerraform(struct!.warn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestSummary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fail = this._fail;
    }
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._skip !== undefined) {
      hasAnyValues = true;
      internalValueResult.skip = this._skip;
    }
    if (this._warn !== undefined) {
      hasAnyValues = true;
      internalValueResult.warn = this._warn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestSummary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._error = undefined;
      this._fail = undefined;
      this._pass = undefined;
      this._skip = undefined;
      this._warn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._error = value.error;
      this._fail = value.fail;
      this._pass = value.pass;
      this._skip = value.skip;
      this._warn = value.warn;
    }
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // fail - computed: false, optional: true, required: false
  private _fail?: number; 
  public get fail() {
    return this.getNumberAttribute('fail');
  }
  public set fail(value: number) {
    this._fail = value;
  }
  public resetFail() {
    this._fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInput() {
    return this._fail;
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: number; 
  public get pass() {
    return this.getNumberAttribute('pass');
  }
  public set pass(value: number) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // warn - computed: false, optional: true, required: false
  private _warn?: number; 
  public get warn() {
    return this.getNumberAttribute('warn');
  }
  public set warn(value: number) {
    this._warn = value;
  }
  public resetWarn() {
    this._warn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnInput() {
    return this._warn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest k8s_wgpolicyk8s_io_policy_report_v1alpha1_manifest}
*/
export class DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_wgpolicyk8s_io_policy_report_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SWgpolicyk8SIoPolicyReportV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_wgpolicyk8s_io_policy_report_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/wgpolicyk8s_io_policy_report_v1alpha1_manifest k8s_wgpolicyk8s_io_policy_report_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_wgpolicyk8s_io_policy_report_v1alpha1_manifest',
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
    this._results.internalValue = config.results;
    this._scope.internalValue = config.scope;
    this._scopeSelector.internalValue = config.scopeSelector;
    this._summary.internalValue = config.summary;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // results - computed: false, optional: true, required: false
  private _results = new DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsList(this, "results", false);
  public get results() {
    return this._results;
  }
  public putResults(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResults[] | cdktf.IResolvable) {
    this._results.internalValue = value;
  }
  public resetResults() {
    this._results.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultsInput() {
    return this._results.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // scope_selector - computed: false, optional: true, required: false
  private _scopeSelector = new DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorOutputReference(this, "scope_selector");
  public get scopeSelector() {
    return this._scopeSelector;
  }
  public putScopeSelector(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelector) {
    this._scopeSelector.internalValue = value;
  }
  public resetScopeSelector() {
    this._scopeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeSelectorInput() {
    return this._scopeSelector.internalValue;
  }

  // summary - computed: false, optional: true, required: false
  private _summary = new DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestSummaryOutputReference(this, "summary");
  public get summary() {
    return this._summary;
  }
  public putSummary(value: DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestSummary) {
    this._summary.internalValue = value;
  }
  public resetSummary() {
    this._summary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary.internalValue;
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
      metadata: dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      results: cdktf.listMapper(dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsToTerraform, false)(this._results.internalValue),
      scope: dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeToTerraform(this._scope.internalValue),
      scope_selector: dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorToTerraform(this._scopeSelector.internalValue),
      summary: dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestSummaryToTerraform(this._summary.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestMetadata",
      },
      results: {
        value: cdktf.listMapperHcl(dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsToHclTerraform, false)(this._results.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestResultsList",
      },
      scope: {
        value: dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScope",
      },
      scope_selector: {
        value: dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelectorToHclTerraform(this._scopeSelector.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestScopeSelector",
      },
      summary: {
        value: dataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestSummaryToHclTerraform(this._summary.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWgpolicyk8SIoPolicyReportV1Alpha1ManifestSummary",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
