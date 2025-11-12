// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#metadata DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#metadata}
  */
  readonly metadata: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestMetadata;
  /**
  * CouchbaseEphemeralBucketSpec is the specification for an ephemeral Couchbase bucket resource, and allows the bucket to be customized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#spec DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#spec}
  */
  readonly spec?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpec;
}
export interface DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#annotations DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#labels DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#name DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#namespace DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestMetadataToTerraform(struct?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestMetadataToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResources {
  /**
  * Kind indicates the kind of resource that is being referenced. A scope can only reference 'CouchbaseScope' and 'CouchbaseScopeGroup' resource kinds. This field defaults to 'CouchbaseScope' if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#kind DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the Kubernetes resource name that is being referenced. Legal scope names have a maximum length of 251 characters and may be composed of any character from 'a-z', 'A-Z', '0-9' and '_-%'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#name DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResourcesToTerraform(struct?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResourcesToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResources | cdktf.IResolvable): any {
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

export class DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResources | cdktf.IResolvable | undefined) {
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

export class DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResourcesOutputReference {
    return new DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#key DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#operator DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#values DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressionsToTerraform(struct?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressionsOutputReference {
    return new DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#match_expressions DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#match_labels DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorToTerraform(struct?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressionsList",
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

export class DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopes {
  /**
  * Managed defines whether scopes are managed for this bucket. This field is 'false' by default, and the Operator will take no actions that will affect scopes and collections in this bucket. The default scope and collection will be present. When set to 'true', the Operator will manage user defined scopes, and optionally, their collections as defined by the 'CouchbaseScope', 'CouchbaseScopeGroup', 'CouchbaseCollection' and 'CouchbaseCollectionGroup' resource documentation. If this field is set to 'false' while the already managed, then the Operator will leave whatever configuration is already present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#managed DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * Resources is an explicit list of named resources that will be considered for inclusion in this bucket. If a resource reference doesn't match a resource, then no error conditions are raised due to undefined resource creation ordering and eventual consistency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#resources DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#resources}
  */
  readonly resources?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResources[] | cdktf.IResolvable;
  /**
  * Selector allows resources to be implicitly considered for inclusion in this bucket. More info: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#labelselector-v1-meta
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#selector DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#selector}
  */
  readonly selector?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelector;
}

export function dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesToTerraform(struct?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed: cdktf.booleanToTerraform(struct!.managed),
    resources: cdktf.listMapper(dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResourcesToTerraform, false)(struct!.resources),
    selector: dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed: {
      value: cdktf.booleanToHclTerraform(struct!.managed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResourcesList",
    },
    selector: {
      value: dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managed !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managed = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managed = value.managed;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
    }
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpec {
  /**
  * CompressionMode defines how Couchbase server handles document compression. When off, documents are stored in memory, and transferred to the client uncompressed. When passive, documents are stored compressed in memory, and transferred to the client compressed when requested. When active, documents are stored compresses in memory and when transferred to the client. This field must be 'off', 'passive' or 'active', defaulting to 'passive'. Be aware 'off' in YAML 1.2 is a boolean, so must be quoted as a string in configuration files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#compression_mode DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#compression_mode}
  */
  readonly compressionMode?: string;
  /**
  * ConflictResolution defines how XDCR handles concurrent write conflicts. Sequence number based resolution selects the document with the highest sequence number as the most recent. Timestamp based resolution selects the document that was written to most recently as the most recent. This field must be 'seqno' (sequence based), or 'lww' (timestamp based), defaulting to 'seqno'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#conflict_resolution DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#conflict_resolution}
  */
  readonly conflictResolution?: string;
  /**
  * EnableFlush defines whether a client can delete all documents in a bucket. This field defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#enable_flush DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#enable_flush}
  */
  readonly enableFlush?: boolean | cdktf.IResolvable;
  /**
  * EvictionPolicy controls how Couchbase handles memory exhaustion. No eviction means that Couchbase server will make this bucket read-only when memory is exhausted in order to avoid data loss. NRU eviction will delete documents that haven't been used recently in order to free up memory. This field must be 'noEviction' or 'nruEviction', defaulting to 'noEviction'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#eviction_policy DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * IOPriority controls how many threads a bucket has, per pod, to process reads and writes. This field must be 'low' or 'high', defaulting to 'low'. Modification of this field will cause a temporary service disruption as threads are restarted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#io_priority DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#io_priority}
  */
  readonly ioPriority?: string;
  /**
  * MaxTTL defines how long a document is permitted to exist for, without modification, until it is automatically deleted. This is a default and maximum time-to-live and may be set to a lower value by the client. If the client specifies a higher value, then it is truncated to the maximum durability. Documents are removed by Couchbase, after they have expired, when either accessed, the expiry pager is run, or the bucket is compacted. When set to 0, then documents are not expired by default. This field must be a duration in the range 0-2147483648s, defaulting to 0. More info: https://golang.org/pkg/time/#ParseDuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#max_ttl DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#max_ttl}
  */
  readonly maxTtl?: string;
  /**
  * MemoryQuota is a memory limit to the size of a bucket. When this limit is exceeded, documents will be evicted from memory defined by the eviction policy. The memory quota is defined per Couchbase pod running the data service. This field defaults to, and must be greater than or equal to 100Mi. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#memory_quota DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#memory_quota}
  */
  readonly memoryQuota?: string;
  /**
  * MiniumumDurability defines how durable a document write is by default, and can be made more durable by the client. This feature enables ACID transactions. When none, Couchbase server will respond when the document is in memory, it will become eventually consistent across the cluster. When majority, Couchbase server will respond when the document is replicated to at least half of the pods running the data service in the cluster. This field must be either 'none' or 'majority', defaulting to 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#minimum_durability DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#minimum_durability}
  */
  readonly minimumDurability?: string;
  /**
  * Name is the name of the bucket within Couchbase server. By default the Operator will use the 'metadata.name' field to define the bucket name. The 'metadata.name' field only supports a subset of the supported character set. When specified, this field overrides 'metadata.name'. Legal bucket names have a maximum length of 100 characters and may be composed of any character from 'a-z', 'A-Z', '0-9' and '-_%.'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#name DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Rank determines the bucket’s place in the order in which the rebalance process handles the buckets on the cluster. The higher a bucket’s assigned integer (in relation to the integers assigned other buckets), the sooner in the rebalance process the bucket is handled. This assignment of rank allows a cluster’s most mission-critical data to be rebalanced with top priority. This option is only supported for Couchbase Server 7.6.0+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#rank DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#rank}
  */
  readonly rank?: number;
  /**
  * Replicas defines how many copies of documents Couchbase server maintains. This directly affects how fault tolerant a Couchbase cluster is. With a single replica, the cluster can tolerate one data pod going down and still service requests without data loss. The number of replicas also affect memory use. With a single replica, the effective memory quota for documents is halved, with two replicas it is one third. The number of replicas must be between 0 and 3, defaulting to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#replicas DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Scopes defines whether the Operator manages scopes for the bucket or not, and the set of scopes defined for the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#scopes DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest#scopes}
  */
  readonly scopes?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopes;
}

export function dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecToTerraform(struct?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_mode: cdktf.stringToTerraform(struct!.compressionMode),
    conflict_resolution: cdktf.stringToTerraform(struct!.conflictResolution),
    enable_flush: cdktf.booleanToTerraform(struct!.enableFlush),
    eviction_policy: cdktf.stringToTerraform(struct!.evictionPolicy),
    io_priority: cdktf.stringToTerraform(struct!.ioPriority),
    max_ttl: cdktf.stringToTerraform(struct!.maxTtl),
    memory_quota: cdktf.stringToTerraform(struct!.memoryQuota),
    minimum_durability: cdktf.stringToTerraform(struct!.minimumDurability),
    name: cdktf.stringToTerraform(struct!.name),
    rank: cdktf.numberToTerraform(struct!.rank),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    scopes: dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesToTerraform(struct!.scopes),
  }
}


export function dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_mode: {
      value: cdktf.stringToHclTerraform(struct!.compressionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conflict_resolution: {
      value: cdktf.stringToHclTerraform(struct!.conflictResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_flush: {
      value: cdktf.booleanToHclTerraform(struct!.enableFlush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eviction_policy: {
      value: cdktf.stringToHclTerraform(struct!.evictionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    io_priority: {
      value: cdktf.stringToHclTerraform(struct!.ioPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ttl: {
      value: cdktf.stringToHclTerraform(struct!.maxTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_quota: {
      value: cdktf.stringToHclTerraform(struct!.memoryQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_durability: {
      value: cdktf.stringToHclTerraform(struct!.minimumDurability),
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
    rank: {
      value: cdktf.numberToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scopes: {
      value: dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesToHclTerraform(struct!.scopes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMode = this._compressionMode;
    }
    if (this._conflictResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolution = this._conflictResolution;
    }
    if (this._enableFlush !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFlush = this._enableFlush;
    }
    if (this._evictionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionPolicy = this._evictionPolicy;
    }
    if (this._ioPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioPriority = this._ioPriority;
    }
    if (this._maxTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl;
    }
    if (this._memoryQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryQuota = this._memoryQuota;
    }
    if (this._minimumDurability !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumDurability = this._minimumDurability;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._scopes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionMode = undefined;
      this._conflictResolution = undefined;
      this._enableFlush = undefined;
      this._evictionPolicy = undefined;
      this._ioPriority = undefined;
      this._maxTtl = undefined;
      this._memoryQuota = undefined;
      this._minimumDurability = undefined;
      this._name = undefined;
      this._rank = undefined;
      this._replicas = undefined;
      this._scopes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionMode = value.compressionMode;
      this._conflictResolution = value.conflictResolution;
      this._enableFlush = value.enableFlush;
      this._evictionPolicy = value.evictionPolicy;
      this._ioPriority = value.ioPriority;
      this._maxTtl = value.maxTtl;
      this._memoryQuota = value.memoryQuota;
      this._minimumDurability = value.minimumDurability;
      this._name = value.name;
      this._rank = value.rank;
      this._replicas = value.replicas;
      this._scopes.internalValue = value.scopes;
    }
  }

  // compression_mode - computed: false, optional: true, required: false
  private _compressionMode?: string; 
  public get compressionMode() {
    return this.getStringAttribute('compression_mode');
  }
  public set compressionMode(value: string) {
    this._compressionMode = value;
  }
  public resetCompressionMode() {
    this._compressionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionModeInput() {
    return this._compressionMode;
  }

  // conflict_resolution - computed: false, optional: true, required: false
  private _conflictResolution?: string; 
  public get conflictResolution() {
    return this.getStringAttribute('conflict_resolution');
  }
  public set conflictResolution(value: string) {
    this._conflictResolution = value;
  }
  public resetConflictResolution() {
    this._conflictResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionInput() {
    return this._conflictResolution;
  }

  // enable_flush - computed: false, optional: true, required: false
  private _enableFlush?: boolean | cdktf.IResolvable; 
  public get enableFlush() {
    return this.getBooleanAttribute('enable_flush');
  }
  public set enableFlush(value: boolean | cdktf.IResolvable) {
    this._enableFlush = value;
  }
  public resetEnableFlush() {
    this._enableFlush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFlushInput() {
    return this._enableFlush;
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy;
  }

  // io_priority - computed: false, optional: true, required: false
  private _ioPriority?: string; 
  public get ioPriority() {
    return this.getStringAttribute('io_priority');
  }
  public set ioPriority(value: string) {
    this._ioPriority = value;
  }
  public resetIoPriority() {
    this._ioPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioPriorityInput() {
    return this._ioPriority;
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: string; 
  public get maxTtl() {
    return this.getStringAttribute('max_ttl');
  }
  public set maxTtl(value: string) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // memory_quota - computed: false, optional: true, required: false
  private _memoryQuota?: string; 
  public get memoryQuota() {
    return this.getStringAttribute('memory_quota');
  }
  public set memoryQuota(value: string) {
    this._memoryQuota = value;
  }
  public resetMemoryQuota() {
    this._memoryQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryQuotaInput() {
    return this._memoryQuota;
  }

  // minimum_durability - computed: false, optional: true, required: false
  private _minimumDurability?: string; 
  public get minimumDurability() {
    return this.getStringAttribute('minimum_durability');
  }
  public set minimumDurability(value: string) {
    this._minimumDurability = value;
  }
  public resetMinimumDurability() {
    this._minimumDurability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumDurabilityInput() {
    return this._minimumDurability;
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

  // rank - computed: false, optional: true, required: false
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes = new DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopesOutputReference(this, "scopes");
  public get scopes() {
    return this._scopes;
  }
  public putScopes(value: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecScopes) {
    this._scopes.internalValue = value;
  }
  public resetScopes() {
    this._scopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest k8s_couchbase_com_couchbase_ephemeral_bucket_v2_manifest}
*/
export class DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_couchbase_com_couchbase_ephemeral_bucket_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest to import
  * @param importFromId The id of the existing DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCouchbaseComCouchbaseEphemeralBucketV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_couchbase_com_couchbase_ephemeral_bucket_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_ephemeral_bucket_v2_manifest k8s_couchbase_com_couchbase_ephemeral_bucket_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_couchbase_com_couchbase_ephemeral_bucket_v2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpec) {
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
      metadata: dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestMetadata",
      },
      spec: {
        value: dataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCouchbaseComCouchbaseEphemeralBucketV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
