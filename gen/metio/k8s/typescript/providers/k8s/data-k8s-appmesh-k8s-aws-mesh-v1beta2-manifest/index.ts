// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppmeshK8SAwsMeshV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#metadata DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestMetadata;
  /**
  * MeshSpec defines the desired state of Mesh refers to https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_MeshSpec.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#spec DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpec;
}
export interface DataK8SAppmeshK8SAwsMeshV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#annotations DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#labels DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#name DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppmeshK8SAwsMeshV1Beta2ManifestMetadataToTerraform(struct?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppmeshK8SAwsMeshV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsMeshV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsMeshV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecEgressFilter {
  /**
  * The egress filter type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#type DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecEgressFilterToTerraform(struct?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecEgressFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecEgressFilterToHclTerraform(struct?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecEgressFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecEgressFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecEgressFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecEgressFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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
}
export interface DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecMeshServiceDiscovery {
  /**
  * The ipPreference for the mesh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#ip_preference DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#ip_preference}
  */
  readonly ipPreference?: string;
}

export function dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecMeshServiceDiscoveryToTerraform(struct?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecMeshServiceDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_preference: cdktf.stringToTerraform(struct!.ipPreference),
  }
}


export function dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecMeshServiceDiscoveryToHclTerraform(struct?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecMeshServiceDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_preference: {
      value: cdktf.stringToHclTerraform(struct!.ipPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecMeshServiceDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecMeshServiceDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPreference = this._ipPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecMeshServiceDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipPreference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipPreference = value.ipPreference;
    }
  }

  // ip_preference - computed: false, optional: true, required: false
  private _ipPreference?: string; 
  public get ipPreference() {
    return this.getStringAttribute('ip_preference');
  }
  public set ipPreference(value: string) {
    this._ipPreference = value;
  }
  public resetIpPreference() {
    this._ipPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPreferenceInput() {
    return this._ipPreference;
  }
}
export interface DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#key DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#operator DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#values DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#match_expressions DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#match_labels DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorToTerraform(struct?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorToHclTerraform(struct?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsList",
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

export class DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpec {
  /**
  * AWSName is the AppMesh Mesh object's name. If unspecified or empty, it defaults to be '${name}' of k8s Mesh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#aws_name DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#aws_name}
  */
  readonly awsName?: string;
  /**
  * The egress filter rules for the service mesh. If unspecified, default settings from AWS API will be applied. Refer to AWS Docs for default settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#egress_filter DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#egress_filter}
  */
  readonly egressFilter?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecEgressFilter;
  /**
  * The AWS IAM account ID of the service mesh owner. Required if the account ID is not your own.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#mesh_owner DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#mesh_service_discovery DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#mesh_service_discovery}
  */
  readonly meshServiceDiscovery?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecMeshServiceDiscovery;
  /**
  * NamespaceSelector selects Namespaces using labels to designate mesh membership. This field follows standard label selector semantics: if present but empty, it selects all namespaces. if absent, it selects no namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#namespace_selector DataK8SAppmeshK8SAwsMeshV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelector;
}

export function dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecToTerraform(struct?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_name: cdktf.stringToTerraform(struct!.awsName),
    egress_filter: dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecEgressFilterToTerraform(struct!.egressFilter),
    mesh_owner: cdktf.stringToTerraform(struct!.meshOwner),
    mesh_service_discovery: dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecMeshServiceDiscoveryToTerraform(struct!.meshServiceDiscovery),
    namespace_selector: dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_name: {
      value: cdktf.stringToHclTerraform(struct!.awsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_filter: {
      value: dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecEgressFilterToHclTerraform(struct!.egressFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecEgressFilter",
    },
    mesh_owner: {
      value: cdktf.stringToHclTerraform(struct!.meshOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mesh_service_discovery: {
      value: dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecMeshServiceDiscoveryToHclTerraform(struct!.meshServiceDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecMeshServiceDiscovery",
    },
    namespace_selector: {
      value: dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsName = this._awsName;
    }
    if (this._egressFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressFilter = this._egressFilter?.internalValue;
    }
    if (this._meshOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshOwner = this._meshOwner;
    }
    if (this._meshServiceDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshServiceDiscovery = this._meshServiceDiscovery?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsName = undefined;
      this._egressFilter.internalValue = undefined;
      this._meshOwner = undefined;
      this._meshServiceDiscovery.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsName = value.awsName;
      this._egressFilter.internalValue = value.egressFilter;
      this._meshOwner = value.meshOwner;
      this._meshServiceDiscovery.internalValue = value.meshServiceDiscovery;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // aws_name - computed: false, optional: true, required: false
  private _awsName?: string; 
  public get awsName() {
    return this.getStringAttribute('aws_name');
  }
  public set awsName(value: string) {
    this._awsName = value;
  }
  public resetAwsName() {
    this._awsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsNameInput() {
    return this._awsName;
  }

  // egress_filter - computed: false, optional: true, required: false
  private _egressFilter = new DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecEgressFilterOutputReference(this, "egress_filter");
  public get egressFilter() {
    return this._egressFilter;
  }
  public putEgressFilter(value: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecEgressFilter) {
    this._egressFilter.internalValue = value;
  }
  public resetEgressFilter() {
    this._egressFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressFilterInput() {
    return this._egressFilter.internalValue;
  }

  // mesh_owner - computed: false, optional: true, required: false
  private _meshOwner?: string; 
  public get meshOwner() {
    return this.getStringAttribute('mesh_owner');
  }
  public set meshOwner(value: string) {
    this._meshOwner = value;
  }
  public resetMeshOwner() {
    this._meshOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshOwnerInput() {
    return this._meshOwner;
  }

  // mesh_service_discovery - computed: false, optional: true, required: false
  private _meshServiceDiscovery = new DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecMeshServiceDiscoveryOutputReference(this, "mesh_service_discovery");
  public get meshServiceDiscovery() {
    return this._meshServiceDiscovery;
  }
  public putMeshServiceDiscovery(value: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecMeshServiceDiscovery) {
    this._meshServiceDiscovery.internalValue = value;
  }
  public resetMeshServiceDiscovery() {
    this._meshServiceDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshServiceDiscoveryInput() {
    return this._meshServiceDiscovery.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest k8s_appmesh_k8s_aws_mesh_v1beta2_manifest}
*/
export class DataK8SAppmeshK8SAwsMeshV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_appmesh_k8s_aws_mesh_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppmeshK8SAwsMeshV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppmeshK8SAwsMeshV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SAppmeshK8SAwsMeshV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppmeshK8SAwsMeshV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_appmesh_k8s_aws_mesh_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_mesh_v1beta2_manifest k8s_appmesh_k8s_aws_mesh_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppmeshK8SAwsMeshV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_appmesh_k8s_aws_mesh_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SAppmeshK8SAwsMeshV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpec) {
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
      metadata: dataK8SAppmeshK8SAwsMeshV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppmeshK8SAwsMeshV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppmeshK8SAwsMeshV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppmeshK8SAwsMeshV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
