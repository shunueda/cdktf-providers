// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#metadata DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestMetadata;
  /**
  * ServiceBindingSpec defines the desired state of ServiceBinding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#spec DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpec;
}
export interface DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#annotations DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#labels DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#name DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#namespace DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationBindingPath {
  /**
  * ContainersPath defines the path to the corev1.Containers reference. If BindingPath is not specified, the default location is 'spec.template.spec.containers'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#containers_path DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#containers_path}
  */
  readonly containersPath?: string;
  /**
  * SecretPath defines the path to a string field where the name of the secret object is going to be assigned. Note: The name of the secret object is same as that of the name of service binding custom resource (metadata.name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#secret_path DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#secret_path}
  */
  readonly secretPath?: string;
}

export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationBindingPathToTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationBindingPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers_path: cdktf.stringToTerraform(struct!.containersPath),
    secret_path: cdktf.stringToTerraform(struct!.secretPath),
  }
}


export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationBindingPathToHclTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationBindingPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers_path: {
      value: cdktf.stringToHclTerraform(struct!.containersPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_path: {
      value: cdktf.stringToHclTerraform(struct!.secretPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationBindingPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationBindingPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containersPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containersPath = this._containersPath;
    }
    if (this._secretPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretPath = this._secretPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationBindingPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containersPath = undefined;
      this._secretPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containersPath = value.containersPath;
      this._secretPath = value.secretPath;
    }
  }

  // containers_path - computed: false, optional: true, required: false
  private _containersPath?: string; 
  public get containersPath() {
    return this.getStringAttribute('containers_path');
  }
  public set containersPath(value: string) {
    this._containersPath = value;
  }
  public resetContainersPath() {
    this._containersPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersPathInput() {
    return this._containersPath;
  }

  // secret_path - computed: false, optional: true, required: false
  private _secretPath?: string; 
  public get secretPath() {
    return this.getStringAttribute('secret_path');
  }
  public set secretPath(value: string) {
    this._secretPath = value;
  }
  public resetSecretPath() {
    this._secretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPathInput() {
    return this._secretPath;
  }
}
export interface DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#key DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#operator DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#values DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#match_expressions DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#match_labels DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorToTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorToHclTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressionsList",
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

export class DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplication {
  /**
  * BindingPath refers to the paths in the application workload's schema where the binding workload would be referenced. If BindingPath is not specified, then the default path locations are used. The default location for ContainersPath is 'spec.template.spec.containers'. If SecretPath is not specified, then the name of the secret object does not need to be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#binding_path DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#binding_path}
  */
  readonly bindingPath?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationBindingPath;
  /**
  * Group of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#group DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#kind DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#label_selector DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelector;
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#name DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Resource of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#resource DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#resource}
  */
  readonly resource?: string;
  /**
  * Version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#version DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationToTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_path: dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationBindingPathToTerraform(struct!.bindingPath),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    resource: cdktf.stringToTerraform(struct!.resource),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationToHclTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding_path: {
      value: dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationBindingPathToHclTerraform(struct!.bindingPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationBindingPath",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
      value: dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelector",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindingPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingPath = this._bindingPath?.internalValue;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
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
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindingPath.internalValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector.internalValue = undefined;
      this._name = undefined;
      this._resource = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindingPath.internalValue = value.bindingPath;
      this._group = value.group;
      this._kind = value.kind;
      this._labelSelector.internalValue = value.labelSelector;
      this._name = value.name;
      this._resource = value.resource;
      this._version = value.version;
    }
  }

  // binding_path - computed: false, optional: true, required: false
  private _bindingPath = new DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationBindingPathOutputReference(this, "binding_path");
  public get bindingPath() {
    return this._bindingPath;
  }
  public putBindingPath(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationBindingPath) {
    this._bindingPath.internalValue = value;
  }
  public resetBindingPath() {
    this._bindingPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingPathInput() {
    return this._bindingPath.internalValue;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
  private _labelSelector = new DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationLabelSelector) {
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

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappings {
  /**
  * Name is the name of new binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#name DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value specificies a go template that will be rendered and injected into the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#value DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappingsToTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappingsToHclTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappings | cdktf.IResolvable): any {
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

export class DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
      this._value = value.value;
    }
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

export class DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappingsOutputReference {
    return new DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServices {
  /**
  * Group of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#group DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#id DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#kind DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#name DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. If unspecified, assumes the same namespace as ServiceBinding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#namespace DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Resource of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#resource DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#resource}
  */
  readonly resource?: string;
  /**
  * Version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#version DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServicesToTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    id: cdktf.stringToTerraform(struct!.id),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource: cdktf.stringToTerraform(struct!.resource),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServicesToHclTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._id = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resource = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._id = value.id;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resource = value.resource;
      this._version = value.version;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServicesOutputReference {
    return new DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpec {
  /**
  * Application identifies the application connecting to the backing service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#application DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#application}
  */
  readonly application: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplication;
  /**
  * BindAsFiles makes the binding values available as files in the application's container. By default, values are mounted under the path '/bindings'; this can be changed by setting the SERVICE_BINDING_ROOT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#bind_as_files DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#bind_as_files}
  */
  readonly bindAsFiles?: boolean | cdktf.IResolvable;
  /**
  * DetectBindingResources is a flag that, when set to true, will cause SBO to search for binding information in the owned resources of the specified services. If this binding information exists, then the application is bound to these subresources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#detect_binding_resources DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#detect_binding_resources}
  */
  readonly detectBindingResources?: boolean | cdktf.IResolvable;
  /**
  * Mappings specifies custom mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#mappings DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#mappings}
  */
  readonly mappings?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappings[] | cdktf.IResolvable;
  /**
  * Name is the name of the service as projected into the workload container. Defaults to .metadata.name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#name DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * NamingStrategy defines custom string template for preparing binding names. It can be set to pre-defined strategies: 'none', 'lowercase', or 'uppercase'. Otherwise, it is treated as a custom go template, and it is handled accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#naming_strategy DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#naming_strategy}
  */
  readonly namingStrategy?: string;
  /**
  * Services indicates the backing services to be connected to by an application. At least one service must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#services DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest#services}
  */
  readonly services: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServices[] | cdktf.IResolvable;
}

export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecToTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationToTerraform(struct!.application),
    bind_as_files: cdktf.booleanToTerraform(struct!.bindAsFiles),
    detect_binding_resources: cdktf.booleanToTerraform(struct!.detectBindingResources),
    mappings: cdktf.listMapper(dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappingsToTerraform, false)(struct!.mappings),
    name: cdktf.stringToTerraform(struct!.name),
    naming_strategy: cdktf.stringToTerraform(struct!.namingStrategy),
    services: cdktf.listMapper(dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServicesToTerraform, false)(struct!.services),
  }
}


export function dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationToHclTerraform(struct!.application),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplication",
    },
    bind_as_files: {
      value: cdktf.booleanToHclTerraform(struct!.bindAsFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detect_binding_resources: {
      value: cdktf.booleanToHclTerraform(struct!.detectBindingResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mappings: {
      value: cdktf.listMapperHcl(dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappingsToHclTerraform, false)(struct!.mappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappingsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    naming_strategy: {
      value: cdktf.stringToHclTerraform(struct!.namingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.listMapperHcl(dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServicesToHclTerraform, false)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application?.internalValue;
    }
    if (this._bindAsFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindAsFiles = this._bindAsFiles;
    }
    if (this._detectBindingResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectBindingResources = this._detectBindingResources;
    }
    if (this._mappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.namingStrategy = this._namingStrategy;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application.internalValue = undefined;
      this._bindAsFiles = undefined;
      this._detectBindingResources = undefined;
      this._mappings.internalValue = undefined;
      this._name = undefined;
      this._namingStrategy = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application.internalValue = value.application;
      this._bindAsFiles = value.bindAsFiles;
      this._detectBindingResources = value.detectBindingResources;
      this._mappings.internalValue = value.mappings;
      this._name = value.name;
      this._namingStrategy = value.namingStrategy;
      this._services.internalValue = value.services;
    }
  }

  // application - computed: false, optional: false, required: true
  private _application = new DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplicationOutputReference(this, "application");
  public get application() {
    return this._application;
  }
  public putApplication(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecApplication) {
    this._application.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // bind_as_files - computed: false, optional: true, required: false
  private _bindAsFiles?: boolean | cdktf.IResolvable; 
  public get bindAsFiles() {
    return this.getBooleanAttribute('bind_as_files');
  }
  public set bindAsFiles(value: boolean | cdktf.IResolvable) {
    this._bindAsFiles = value;
  }
  public resetBindAsFiles() {
    this._bindAsFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindAsFilesInput() {
    return this._bindAsFiles;
  }

  // detect_binding_resources - computed: false, optional: true, required: false
  private _detectBindingResources?: boolean | cdktf.IResolvable; 
  public get detectBindingResources() {
    return this.getBooleanAttribute('detect_binding_resources');
  }
  public set detectBindingResources(value: boolean | cdktf.IResolvable) {
    this._detectBindingResources = value;
  }
  public resetDetectBindingResources() {
    this._detectBindingResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectBindingResourcesInput() {
    return this._detectBindingResources;
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings = new DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
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

  // naming_strategy - computed: false, optional: true, required: false
  private _namingStrategy?: string; 
  public get namingStrategy() {
    return this.getStringAttribute('naming_strategy');
  }
  public set namingStrategy(value: string) {
    this._namingStrategy = value;
  }
  public resetNamingStrategy() {
    this._namingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namingStrategyInput() {
    return this._namingStrategy;
  }

  // services - computed: false, optional: false, required: true
  private _services = new DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest k8s_binding_operators_coreos_com_service_binding_v1alpha1_manifest}
*/
export class DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_binding_operators_coreos_com_service_binding_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_binding_operators_coreos_com_service_binding_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/binding_operators_coreos_com_service_binding_v1alpha1_manifest k8s_binding_operators_coreos_com_service_binding_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_binding_operators_coreos_com_service_binding_v1alpha1_manifest',
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
  private _metadata = new DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpec) {
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
      metadata: dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SBindingOperatorsCoreosComServiceBindingV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
