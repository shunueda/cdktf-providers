// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#metadata DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestMetadata;
  /**
  * PatchSpec defines the desired state of Patch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#spec DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpec;
}
export interface DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#annotations DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#labels DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#name DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#namespace DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefs {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#api_version DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#field_path DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#kind DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#name DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#namespace DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefsToTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefs | cdktf.IResolvable): any {
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
  }
}


export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefsToHclTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefs | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefs | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
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
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
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
}

export class DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefsOutputReference {
    return new DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#key DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#operator DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#values DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressionsToTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressionsOutputReference {
    return new DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#match_expressions DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#match_labels DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorToTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorToHclTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressionsList",
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

export class DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#key DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#operator DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#values DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#match_expressions DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#match_labels DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorToTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorToHclTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressionsList",
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

export class DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRef {
  /**
  * AnnotationSelector selects objects by label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#annotation_selector DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#annotation_selector}
  */
  readonly annotationSelector?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelector;
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#api_version DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#kind DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * LabelSelector selects objects by label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#label_selector DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelector;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#name DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#namespace DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefToTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorToTerraform(struct!.annotationSelector),
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefToHclTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorToHclTerraform(struct!.annotationSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelector",
    },
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
    label_selector: {
      value: dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelector",
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

export class DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector?.internalValue;
    }
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
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

  public set internalValue(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelector.internalValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._labelSelector.internalValue = undefined;
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
      this._annotationSelector.internalValue = value.annotationSelector;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._labelSelector.internalValue = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector = new DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelectorOutputReference(this, "annotation_selector");
  public get annotationSelector() {
    return this._annotationSelector;
  }
  public putAnnotationSelector(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefAnnotationSelector) {
    this._annotationSelector.internalValue = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector.internalValue;
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

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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
}
export interface DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatches {
  /**
  * PatchTemplate is a go template that will be resolved using the SourceObjectRefs as parameters. The result must be a valid patch based on the pacth type and the target object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#patch_template DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#patch_template}
  */
  readonly patchTemplate?: string;
  /**
  * PatchType is the type of patch to be applied, one of 'application/json-patch+json```application/merge-patch+json','application/strategic-merge-patch+json','application/apply-patch+yaml' default:='application/strategic-merge-patch+json'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#patch_type DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#patch_type}
  */
  readonly patchType?: string;
  /**
  * SourceObjectRefs is an arrays of refereces to source objects that will be used as input for the template processing. These refernces must resolve to single instance. The resolution rule is as follows (+ present, - absent): the King and APIVersion field are mandatory -Namespace +Name: resolves to cluster-level object <Name>. If Kind is namespaced, this results in an error. -Namespace -Name: results in an error Name manespaces Namespace are evaluated as golang templates with the input of the template being the target object. When selecting multiple target, this allows for having specific source objects for each target. ResourceVersion and UID are always ignored If FieldPath is specified, the restuned object is calculated from the path, so for example if FieldPath=.spec, the only the spec portion of the object is returned. The target object is always added as element zero of the array of the SourceObjectRefs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#source_object_refs DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#source_object_refs}
  */
  readonly sourceObjectRefs?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefs[] | cdktf.IResolvable;
  /**
  * TargetObjectRef is a reference to the object to which the pacth should be applied. the King and APIVersion field are mandatory the Name and Namespace field have the following meaning (+ present, - absent) -Namespace +Name: apply the patch to the cluster-level object <Name>. If Kind is namespaced, this results in an error. -Namespace -Name: if the kind is namespaced apply the patch to all of the objects in all of the namespaces. If the kind is not namespaced, apply the patch to all of the cluster level objects. The lable selector can be used to further filter the selected objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#target_object_ref DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#target_object_ref}
  */
  readonly targetObjectRef?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRef;
}

export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesToTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch_template: cdktf.stringToTerraform(struct!.patchTemplate),
    patch_type: cdktf.stringToTerraform(struct!.patchType),
    source_object_refs: cdktf.listMapper(dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefsToTerraform, false)(struct!.sourceObjectRefs),
    target_object_ref: dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefToTerraform(struct!.targetObjectRef),
  }
}


export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesToHclTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patch_template: {
      value: cdktf.stringToHclTerraform(struct!.patchTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_type: {
      value: cdktf.stringToHclTerraform(struct!.patchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_object_refs: {
      value: cdktf.listMapperHcl(dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefsToHclTerraform, false)(struct!.sourceObjectRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefsList",
    },
    target_object_ref: {
      value: dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefToHclTerraform(struct!.targetObjectRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patchTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchTemplate = this._patchTemplate;
    }
    if (this._patchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchType = this._patchType;
    }
    if (this._sourceObjectRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceObjectRefs = this._sourceObjectRefs?.internalValue;
    }
    if (this._targetObjectRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetObjectRef = this._targetObjectRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patchTemplate = undefined;
      this._patchType = undefined;
      this._sourceObjectRefs.internalValue = undefined;
      this._targetObjectRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patchTemplate = value.patchTemplate;
      this._patchType = value.patchType;
      this._sourceObjectRefs.internalValue = value.sourceObjectRefs;
      this._targetObjectRef.internalValue = value.targetObjectRef;
    }
  }

  // patch_template - computed: false, optional: true, required: false
  private _patchTemplate?: string; 
  public get patchTemplate() {
    return this.getStringAttribute('patch_template');
  }
  public set patchTemplate(value: string) {
    this._patchTemplate = value;
  }
  public resetPatchTemplate() {
    this._patchTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchTemplateInput() {
    return this._patchTemplate;
  }

  // patch_type - computed: false, optional: true, required: false
  private _patchType?: string; 
  public get patchType() {
    return this.getStringAttribute('patch_type');
  }
  public set patchType(value: string) {
    this._patchType = value;
  }
  public resetPatchType() {
    this._patchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchTypeInput() {
    return this._patchType;
  }

  // source_object_refs - computed: false, optional: true, required: false
  private _sourceObjectRefs = new DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefsList(this, "source_object_refs", false);
  public get sourceObjectRefs() {
    return this._sourceObjectRefs;
  }
  public putSourceObjectRefs(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesSourceObjectRefs[] | cdktf.IResolvable) {
    this._sourceObjectRefs.internalValue = value;
  }
  public resetSourceObjectRefs() {
    this._sourceObjectRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceObjectRefsInput() {
    return this._sourceObjectRefs.internalValue;
  }

  // target_object_ref - computed: false, optional: true, required: false
  private _targetObjectRef = new DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRefOutputReference(this, "target_object_ref");
  public get targetObjectRef() {
    return this._targetObjectRef;
  }
  public putTargetObjectRef(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesTargetObjectRef) {
    this._targetObjectRef.internalValue = value;
  }
  public resetTargetObjectRef() {
    this._targetObjectRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetObjectRefInput() {
    return this._targetObjectRef.internalValue;
  }
}
export interface DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecServiceAccountRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#name DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecServiceAccountRefToTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecServiceAccountRefToHclTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecServiceAccountRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecServiceAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecServiceAccountRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecServiceAccountRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpec {
  /**
  * Patches is a list of patches that should be enforced at runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#patches DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#patches}
  */
  readonly patches?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatches;
  /**
  * ServiceAccountRef is the service account to be used to run the controllers associated with this configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#service_account_ref DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest#service_account_ref}
  */
  readonly serviceAccountRef?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecServiceAccountRef;
}

export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patches: dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesToTerraform(struct!.patches),
    service_account_ref: dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecServiceAccountRefToTerraform(struct!.serviceAccountRef),
  }
}


export function dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patches: {
      value: dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesToHclTerraform(struct!.patches),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatches",
    },
    service_account_ref: {
      value: dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecServiceAccountRefToHclTerraform(struct!.serviceAccountRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecServiceAccountRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    if (this._serviceAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountRef = this._serviceAccountRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patches.internalValue = undefined;
      this._serviceAccountRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patches.internalValue = value.patches;
      this._serviceAccountRef.internalValue = value.serviceAccountRef;
    }
  }

  // patches - computed: false, optional: true, required: false
  private _patches = new DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatchesOutputReference(this, "patches");
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecPatches) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }

  // service_account_ref - computed: false, optional: true, required: false
  private _serviceAccountRef = new DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecServiceAccountRefOutputReference(this, "service_account_ref");
  public get serviceAccountRef() {
    return this._serviceAccountRef;
  }
  public putServiceAccountRef(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecServiceAccountRef) {
    this._serviceAccountRef.internalValue = value;
  }
  public resetServiceAccountRef() {
    this._serviceAccountRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRefInput() {
    return this._serviceAccountRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest k8s_redhatcop_redhat_io_patch_v1alpha1_manifest}
*/
export class DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_redhatcop_redhat_io_patch_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRedhatcopRedhatIoPatchV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_redhatcop_redhat_io_patch_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/redhatcop_redhat_io_patch_v1alpha1_manifest k8s_redhatcop_redhat_io_patch_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_redhatcop_redhat_io_patch_v1alpha1_manifest',
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
  private _metadata = new DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRedhatcopRedhatIoPatchV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
