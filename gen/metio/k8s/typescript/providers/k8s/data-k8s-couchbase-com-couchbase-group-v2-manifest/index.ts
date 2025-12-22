// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#metadata DataK8SCouchbaseComCouchbaseGroupV2Manifest#metadata}
  */
  readonly metadata: DataK8SCouchbaseComCouchbaseGroupV2ManifestMetadata;
  /**
  * CouchbaseGroupSpec allows the specification of Couchbase group configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#spec DataK8SCouchbaseComCouchbaseGroupV2Manifest#spec}
  */
  readonly spec: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpec;
}
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#annotations DataK8SCouchbaseComCouchbaseGroupV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#labels DataK8SCouchbaseComCouchbaseGroupV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#name DataK8SCouchbaseComCouchbaseGroupV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#namespace DataK8SCouchbaseComCouchbaseGroupV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestMetadataToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestMetadataToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResources {
  /**
  * Kind indicates the kind of resource that is being referenced. A Role can only reference 'CouchbaseBucket' kind. This field defaults to 'CouchbaseBucket' if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#kind DataK8SCouchbaseComCouchbaseGroupV2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the Kubernetes resource name that is being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#name DataK8SCouchbaseComCouchbaseGroupV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResourcesToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResourcesToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResources | cdktf.IResolvable): any {
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResources | cdktf.IResolvable | undefined) {
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResourcesOutputReference {
    return new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#key DataK8SCouchbaseComCouchbaseGroupV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#operator DataK8SCouchbaseComCouchbaseGroupV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#values DataK8SCouchbaseComCouchbaseGroupV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressionsToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressionsOutputReference {
    return new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#match_expressions DataK8SCouchbaseComCouchbaseGroupV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#match_labels DataK8SCouchbaseComCouchbaseGroupV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressionsList",
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBuckets {
  /**
  * Resources is an explicit list of named bucket resources that will be considered for inclusion in this role. If a resource reference doesn't match a resource, then no error conditions are raised due to undefined resource creation ordering and eventual consistency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#resources DataK8SCouchbaseComCouchbaseGroupV2Manifest#resources}
  */
  readonly resources?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResources[] | cdktf.IResolvable;
  /**
  * Selector allows resources to be implicitly considered for inclusion in this role. More info: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#labelselector-v1-meta
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#selector DataK8SCouchbaseComCouchbaseGroupV2Manifest#selector}
  */
  readonly selector?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelector;
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResourcesToTerraform, false)(struct!.resources),
    selector: dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResourcesList",
    },
    selector: {
      value: dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBuckets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBuckets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsResources[] | cdktf.IResolvable) {
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
  private _selector = new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsSelector) {
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
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResources {
  /**
  * Kind indicates the kind of resource that is being referenced. A scope can only reference 'CouchbaseCollection' and 'CouchbaseCollectionGroup' resource kinds. This field defaults to 'CouchbaseCollection' if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#kind DataK8SCouchbaseComCouchbaseGroupV2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the Kubernetes resource name that is being referenced. Legal collection names have a maximum length of 251 characters and may be composed of any character from 'a-z', 'A-Z', '0-9' and '_-%'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#name DataK8SCouchbaseComCouchbaseGroupV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResourcesToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResourcesToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResources | cdktf.IResolvable): any {
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResources | cdktf.IResolvable | undefined) {
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResourcesOutputReference {
    return new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#key DataK8SCouchbaseComCouchbaseGroupV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#operator DataK8SCouchbaseComCouchbaseGroupV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#values DataK8SCouchbaseComCouchbaseGroupV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressionsToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressionsOutputReference {
    return new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#match_expressions DataK8SCouchbaseComCouchbaseGroupV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#match_labels DataK8SCouchbaseComCouchbaseGroupV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressionsList",
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollections {
  /**
  * Resources is an explicit list of named resources that will be considered for inclusion in this collection or collections. If a resource reference doesn't match a resource, then no error conditions are raised due to undefined resource creation ordering and eventual consistency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#resources DataK8SCouchbaseComCouchbaseGroupV2Manifest#resources}
  */
  readonly resources?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResources[] | cdktf.IResolvable;
  /**
  * Selector allows resources to be implicitly considered for inclusion in this collection or collections. More info: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#labelselector-v1-meta
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#selector DataK8SCouchbaseComCouchbaseGroupV2Manifest#selector}
  */
  readonly selector?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelector;
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResourcesToTerraform, false)(struct!.resources),
    selector: dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResourcesList",
    },
    selector: {
      value: dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsResources[] | cdktf.IResolvable) {
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
  private _selector = new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsSelector) {
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
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResources {
  /**
  * Kind indicates the kind of resource that is being referenced. A scope can only reference 'CouchbaseScope' and 'CouchbaseScopeGroup' resource kinds. This field defaults to 'CouchbaseScope' if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#kind DataK8SCouchbaseComCouchbaseGroupV2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the Kubernetes resource name that is being referenced. Legal scope names have a maximum length of 251 characters and may be composed of any character from 'a-z', 'A-Z', '0-9' and '_-%'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#name DataK8SCouchbaseComCouchbaseGroupV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResourcesToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResourcesToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResources | cdktf.IResolvable): any {
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResources | cdktf.IResolvable | undefined) {
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResourcesOutputReference {
    return new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#key DataK8SCouchbaseComCouchbaseGroupV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#operator DataK8SCouchbaseComCouchbaseGroupV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#values DataK8SCouchbaseComCouchbaseGroupV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressionsToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressionsOutputReference {
    return new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#match_expressions DataK8SCouchbaseComCouchbaseGroupV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#match_labels DataK8SCouchbaseComCouchbaseGroupV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressionsList",
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopes {
  /**
  * Resources is an explicit list of named resources that will be considered for inclusion in this scope or scopes. If a resource reference doesn't match a resource, then no error conditions are raised due to undefined resource creation ordering and eventual consistency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#resources DataK8SCouchbaseComCouchbaseGroupV2Manifest#resources}
  */
  readonly resources?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResources[] | cdktf.IResolvable;
  /**
  * Selector allows resources to be implicitly considered for inclusion in this scope or scopes. More info: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#labelselector-v1-meta
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#selector DataK8SCouchbaseComCouchbaseGroupV2Manifest#selector}
  */
  readonly selector?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelector;
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResourcesToTerraform, false)(struct!.resources),
    selector: dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResourcesList",
    },
    selector: {
      value: dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesResources[] | cdktf.IResolvable) {
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
  private _selector = new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesSelector) {
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
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRoles {
  /**
  * Bucket name for bucket admin roles. When not specified for a role that can be scoped to a specific bucket, the role will apply to all buckets in the cluster. Deprecated: Couchbase Autonomous Operator 2.3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#bucket DataK8SCouchbaseComCouchbaseGroupV2Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Bucket level access to apply to specified role. The bucket must exist. When not specified, the bucket field will be checked. If both are empty and the role can be scoped to a specific bucket, the role will apply to all buckets in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#buckets DataK8SCouchbaseComCouchbaseGroupV2Manifest#buckets}
  */
  readonly buckets?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBuckets;
  /**
  * Collection level access to apply to the specified role. The collection must exist. When not specified, the role is subject to scope or bucket level access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#collections DataK8SCouchbaseComCouchbaseGroupV2Manifest#collections}
  */
  readonly collections?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollections;
  /**
  * Name of role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#name DataK8SCouchbaseComCouchbaseGroupV2Manifest#name}
  */
  readonly name: string;
  /**
  * Scope level access to apply to specified role. The scope must exist. When not specified, the role will apply to selected bucket or all buckets in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#scopes DataK8SCouchbaseComCouchbaseGroupV2Manifest#scopes}
  */
  readonly scopes?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopes;
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    buckets: dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsToTerraform(struct!.buckets),
    collections: dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsToTerraform(struct!.collections),
    name: cdktf.stringToTerraform(struct!.name),
    scopes: dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesToTerraform(struct!.scopes),
  }
}


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buckets: {
      value: dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsToHclTerraform(struct!.buckets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBuckets",
    },
    collections: {
      value: dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsToHclTerraform(struct!.collections),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollections",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesToHclTerraform(struct!.scopes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._buckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets?.internalValue;
    }
    if (this._collections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scopes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._buckets.internalValue = undefined;
      this._collections.internalValue = undefined;
      this._name = undefined;
      this._scopes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._buckets.internalValue = value.buckets;
      this._collections.internalValue = value.collections;
      this._name = value.name;
      this._scopes.internalValue = value.scopes;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets = new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBucketsOutputReference(this, "buckets");
  public get buckets() {
    return this._buckets;
  }
  public putBuckets(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesBuckets) {
    this._buckets.internalValue = value;
  }
  public resetBuckets() {
    this._buckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets.internalValue;
  }

  // collections - computed: false, optional: true, required: false
  private _collections = new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollectionsOutputReference(this, "collections");
  public get collections() {
    return this._collections;
  }
  public putCollections(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesCollections) {
    this._collections.internalValue = value;
  }
  public resetCollections() {
    this._collections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections.internalValue;
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

  // scopes - computed: false, optional: true, required: false
  private _scopes = new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopesOutputReference(this, "scopes");
  public get scopes() {
    return this._scopes;
  }
  public putScopes(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesScopes) {
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

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesOutputReference {
    return new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCouchbaseComCouchbaseGroupV2ManifestSpec {
  /**
  * LDAPGroupRef is a reference to an LDAP group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#ldap_group_ref DataK8SCouchbaseComCouchbaseGroupV2Manifest#ldap_group_ref}
  */
  readonly ldapGroupRef?: string;
  /**
  * Roles is a list of roles that this group is granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#roles DataK8SCouchbaseComCouchbaseGroupV2Manifest#roles}
  */
  readonly roles: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRoles[] | cdktf.IResolvable;
}

export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecToTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ldap_group_ref: cdktf.stringToTerraform(struct!.ldapGroupRef),
    roles: cdktf.listMapper(dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesToTerraform, false)(struct!.roles),
  }
}


export function dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ldap_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.ldapGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesToHclTerraform, false)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseGroupV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ldapGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapGroupRef = this._ldapGroupRef;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ldapGroupRef = undefined;
      this._roles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ldapGroupRef = value.ldapGroupRef;
      this._roles.internalValue = value.roles;
    }
  }

  // ldap_group_ref - computed: false, optional: true, required: false
  private _ldapGroupRef?: string; 
  public get ldapGroupRef() {
    return this.getStringAttribute('ldap_group_ref');
  }
  public set ldapGroupRef(value: string) {
    this._ldapGroupRef = value;
  }
  public resetLdapGroupRef() {
    this._ldapGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupRefInput() {
    return this._ldapGroupRef;
  }

  // roles - computed: false, optional: false, required: true
  private _roles = new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest k8s_couchbase_com_couchbase_group_v2_manifest}
*/
export class DataK8SCouchbaseComCouchbaseGroupV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_couchbase_com_couchbase_group_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCouchbaseComCouchbaseGroupV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCouchbaseComCouchbaseGroupV2Manifest to import
  * @param importFromId The id of the existing DataK8SCouchbaseComCouchbaseGroupV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCouchbaseComCouchbaseGroupV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_couchbase_com_couchbase_group_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/couchbase_com_couchbase_group_v2_manifest k8s_couchbase_com_couchbase_group_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCouchbaseComCouchbaseGroupV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCouchbaseComCouchbaseGroupV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_couchbase_com_couchbase_group_v2_manifest',
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
  private _metadata = new DataK8SCouchbaseComCouchbaseGroupV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCouchbaseComCouchbaseGroupV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCouchbaseComCouchbaseGroupV2ManifestSpec) {
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
      metadata: dataK8SCouchbaseComCouchbaseGroupV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCouchbaseComCouchbaseGroupV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestMetadata",
      },
      spec: {
        value: dataK8SCouchbaseComCouchbaseGroupV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCouchbaseComCouchbaseGroupV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
