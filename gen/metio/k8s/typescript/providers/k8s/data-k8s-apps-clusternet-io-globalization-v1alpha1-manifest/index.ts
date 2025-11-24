// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#metadata DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestMetadata;
  /**
  * GlobalizationSpec defines the desired state of Globalization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#spec DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpec;
}
export interface DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#annotations DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#labels DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#name DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#key DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#operator DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#values DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressionsToTerraform(struct?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressionsToHclTerraform(struct?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressionsOutputReference {
    return new DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinity {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#match_expressions DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#match_labels DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityToTerraform(struct?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityToHclTerraform(struct?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressionsList",
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

export class DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinity | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecFeed {
  /**
  * APIVersion defines the versioned schema of this representation of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#api_version DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind is a string value representing the REST resource this object represents. In CamelCase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#kind DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#name DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#namespace DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecFeedToTerraform(struct?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecFeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecFeedToHclTerraform(struct?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecFeed | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecFeedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecFeed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecFeed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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
export interface DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverrides {
  /**
  * Name indicate the OverrideConfig name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#name DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * OverrideChart indicates whether the override value for the HelmChart CR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#override_chart DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#override_chart}
  */
  readonly overrideChart?: boolean | cdktf.IResolvable;
  /**
  * Type specifies the override type for override value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#type DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Value represents override value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#value DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverridesToTerraform(struct?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    override_chart: cdktf.booleanToTerraform(struct!.overrideChart),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverridesToHclTerraform(struct?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverrides | cdktf.IResolvable): any {
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
    override_chart: {
      value: cdktf.booleanToHclTerraform(struct!.overrideChart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overrideChart !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideChart = this._overrideChart;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._overrideChart = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._overrideChart = value.overrideChart;
      this._type = value.type;
      this._value = value.value;
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

  // override_chart - computed: false, optional: true, required: false
  private _overrideChart?: boolean | cdktf.IResolvable; 
  public get overrideChart() {
    return this.getBooleanAttribute('override_chart');
  }
  public set overrideChart(value: boolean | cdktf.IResolvable) {
    this._overrideChart = value;
  }
  public resetOverrideChart() {
    this._overrideChart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideChartInput() {
    return this._overrideChart;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverridesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverridesOutputReference {
    return new DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpec {
  /**
  * ClusterAffinity is a label query over managed clusters by labels. If no labels are specified, all clusters will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#cluster_affinity DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#cluster_affinity}
  */
  readonly clusterAffinity?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinity;
  /**
  * Feed holds references to the objects the Globalization applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#feed DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#feed}
  */
  readonly feed?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecFeed;
  /**
  * OverridePolicy specifies the override policy for this Globalization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#override_policy DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#override_policy}
  */
  readonly overridePolicy?: string;
  /**
  * Overrides holds all the OverrideConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#overrides DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#overrides}
  */
  readonly overrides?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverrides[] | cdktf.IResolvable;
  /**
  * Priority is an integer defining the relative importance of this Globalization compared to others. Lower numbers are considered lower priority. And these Globalization(s) will be applied by order from lower priority to higher. That means override values in lower Globalization will be overridden by those in higher Globalization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#priority DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
}

export function dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_affinity: dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityToTerraform(struct!.clusterAffinity),
    feed: dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecFeedToTerraform(struct!.feed),
    override_policy: cdktf.stringToTerraform(struct!.overridePolicy),
    overrides: cdktf.listMapper(dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverridesToTerraform, false)(struct!.overrides),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_affinity: {
      value: dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityToHclTerraform(struct!.clusterAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinity",
    },
    feed: {
      value: dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecFeedToHclTerraform(struct!.feed),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecFeed",
    },
    override_policy: {
      value: cdktf.stringToHclTerraform(struct!.overridePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overrides: {
      value: cdktf.listMapperHcl(dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverridesToHclTerraform, false)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverridesList",
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

export class DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAffinity = this._clusterAffinity?.internalValue;
    }
    if (this._feed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.feed = this._feed?.internalValue;
    }
    if (this._overridePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.overridePolicy = this._overridePolicy;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterAffinity.internalValue = undefined;
      this._feed.internalValue = undefined;
      this._overridePolicy = undefined;
      this._overrides.internalValue = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterAffinity.internalValue = value.clusterAffinity;
      this._feed.internalValue = value.feed;
      this._overridePolicy = value.overridePolicy;
      this._overrides.internalValue = value.overrides;
      this._priority = value.priority;
    }
  }

  // cluster_affinity - computed: false, optional: true, required: false
  private _clusterAffinity = new DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinityOutputReference(this, "cluster_affinity");
  public get clusterAffinity() {
    return this._clusterAffinity;
  }
  public putClusterAffinity(value: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecClusterAffinity) {
    this._clusterAffinity.internalValue = value;
  }
  public resetClusterAffinity() {
    this._clusterAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAffinityInput() {
    return this._clusterAffinity.internalValue;
  }

  // feed - computed: false, optional: true, required: false
  private _feed = new DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecFeedOutputReference(this, "feed");
  public get feed() {
    return this._feed;
  }
  public putFeed(value: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecFeed) {
    this._feed.internalValue = value;
  }
  public resetFeed() {
    this._feed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedInput() {
    return this._feed.internalValue;
  }

  // override_policy - computed: false, optional: true, required: false
  private _overridePolicy?: string; 
  public get overridePolicy() {
    return this.getStringAttribute('override_policy');
  }
  public set overridePolicy(value: string) {
    this._overridePolicy = value;
  }
  public resetOverridePolicy() {
    this._overridePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePolicyInput() {
    return this._overridePolicy;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest k8s_apps_clusternet_io_globalization_v1alpha1_manifest}
*/
export class DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_clusternet_io_globalization_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsClusternetIoGlobalizationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_clusternet_io_globalization_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_globalization_v1alpha1_manifest k8s_apps_clusternet_io_globalization_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_clusternet_io_globalization_v1alpha1_manifest',
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
  private _metadata = new DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsClusternetIoGlobalizationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
