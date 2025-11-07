// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGetambassadorIoListenerV3Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#metadata DataK8SGetambassadorIoListenerV3Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SGetambassadorIoListenerV3Alpha1ManifestMetadata;
  /**
  * ListenerSpec defines the desired state of this Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#spec DataK8SGetambassadorIoListenerV3Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpec;
}
export interface DataK8SGetambassadorIoListenerV3Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#annotations DataK8SGetambassadorIoListenerV3Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#labels DataK8SGetambassadorIoListenerV3Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#name DataK8SGetambassadorIoListenerV3Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#namespace DataK8SGetambassadorIoListenerV3Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGetambassadorIoListenerV3Alpha1ManifestMetadataToTerraform(struct?: DataK8SGetambassadorIoListenerV3Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGetambassadorIoListenerV3Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SGetambassadorIoListenerV3Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoListenerV3Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoListenerV3Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoListenerV3Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingNamespace {
  /**
  * NamespaceFromType defines how we evaluate a NamespaceBindingType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#from DataK8SGetambassadorIoListenerV3Alpha1Manifest#from}
  */
  readonly from?: string;
}

export function dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingNamespaceToTerraform(struct?: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
  }
}


export function dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingNamespaceToHclTerraform(struct?: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingNamespaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingNamespace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingNamespace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }
}
export interface DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#key DataK8SGetambassadorIoListenerV3Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#operator DataK8SGetambassadorIoListenerV3Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#values DataK8SGetambassadorIoListenerV3Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressionsToTerraform(struct?: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressionsToHclTerraform(struct?: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressionsOutputReference {
    return new DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#match_expressions DataK8SGetambassadorIoListenerV3Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#match_labels DataK8SGetambassadorIoListenerV3Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorToTerraform(struct?: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorToHclTerraform(struct?: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressionsList",
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

export class DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBinding {
  /**
  * NamespaceBindingType defines we we specify which namespaces to look for Hosts in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#namespace DataK8SGetambassadorIoListenerV3Alpha1Manifest#namespace}
  */
  readonly namespace?: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingNamespace;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#selector DataK8SGetambassadorIoListenerV3Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelector;
}

export function dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingToTerraform(struct?: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingNamespaceToTerraform(struct!.namespace),
    selector: dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingToHclTerraform(struct?: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingNamespaceToHclTerraform(struct!.namespace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingNamespace",
    },
    selector: {
      value: dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace.internalValue = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace.internalValue = value.namespace;
      this._selector.internalValue = value.selector;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace = new DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingNamespaceOutputReference(this, "namespace");
  public get namespace() {
    return this._namespace;
  }
  public putNamespace(value: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingNamespace) {
    this._namespace.internalValue = value;
  }
  public resetNamespace() {
    this._namespace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingSelector) {
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
export interface DataK8SGetambassadorIoListenerV3Alpha1ManifestSpec {
  /**
  * AmbassadorID declares which Ambassador instances should pay attention to this resource. If no value is provided, the default is: ambassador_id: - 'default'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#ambassador_id DataK8SGetambassadorIoListenerV3Alpha1Manifest#ambassador_id}
  */
  readonly ambassadorId?: string[];
  /**
  * HostBinding allows restricting which Hosts will be used for this Listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#host_binding DataK8SGetambassadorIoListenerV3Alpha1Manifest#host_binding}
  */
  readonly hostBinding: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBinding;
  /**
  * L7Depth specifies how many layer 7 load balancers are between us and the edge of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#l7_depth DataK8SGetambassadorIoListenerV3Alpha1Manifest#l7_depth}
  */
  readonly l7Depth?: number;
  /**
  * Port is the network port. Only one Listener can use a given port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#port DataK8SGetambassadorIoListenerV3Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Protocol is a shorthand for certain predefined stacks. Exactly one of Protocol or ProtocolStack must be supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#protocol DataK8SGetambassadorIoListenerV3Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * ProtocolStack explicitly specifies the protocol stack to set up. Exactly one of Protocol or ProtocolStack must be supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#protocol_stack DataK8SGetambassadorIoListenerV3Alpha1Manifest#protocol_stack}
  */
  readonly protocolStack?: string[];
  /**
  * SecurityModel specifies how to determine whether connections to this port are secure or insecure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#security_model DataK8SGetambassadorIoListenerV3Alpha1Manifest#security_model}
  */
  readonly securityModel: string;
  /**
  * StatsPrefix specifies the prefix for statistics sent by Envoy about this Listener. The default depends on the protocol: 'ingress-http', 'ingress-https', 'ingress-tls-$port', or 'ingress-$port'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#stats_prefix DataK8SGetambassadorIoListenerV3Alpha1Manifest#stats_prefix}
  */
  readonly statsPrefix?: string;
}

export function dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecToTerraform(struct?: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ambassador_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ambassadorId),
    host_binding: dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingToTerraform(struct!.hostBinding),
    l7_depth: cdktf.numberToTerraform(struct!.l7Depth),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_stack: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocolStack),
    security_model: cdktf.stringToTerraform(struct!.securityModel),
    stats_prefix: cdktf.stringToTerraform(struct!.statsPrefix),
  }
}


export function dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecToHclTerraform(struct?: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ambassador_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ambassadorId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host_binding: {
      value: dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingToHclTerraform(struct!.hostBinding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBinding",
    },
    l7_depth: {
      value: cdktf.numberToHclTerraform(struct!.l7Depth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_stack: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocolStack),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_model: {
      value: cdktf.stringToHclTerraform(struct!.securityModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats_prefix: {
      value: cdktf.stringToHclTerraform(struct!.statsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoListenerV3Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ambassadorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ambassadorId = this._ambassadorId;
    }
    if (this._hostBinding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostBinding = this._hostBinding?.internalValue;
    }
    if (this._l7Depth !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7Depth = this._l7Depth;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolStack = this._protocolStack;
    }
    if (this._securityModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityModel = this._securityModel;
    }
    if (this._statsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsPrefix = this._statsPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ambassadorId = undefined;
      this._hostBinding.internalValue = undefined;
      this._l7Depth = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._protocolStack = undefined;
      this._securityModel = undefined;
      this._statsPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ambassadorId = value.ambassadorId;
      this._hostBinding.internalValue = value.hostBinding;
      this._l7Depth = value.l7Depth;
      this._port = value.port;
      this._protocol = value.protocol;
      this._protocolStack = value.protocolStack;
      this._securityModel = value.securityModel;
      this._statsPrefix = value.statsPrefix;
    }
  }

  // ambassador_id - computed: false, optional: true, required: false
  private _ambassadorId?: string[]; 
  public get ambassadorId() {
    return this.getListAttribute('ambassador_id');
  }
  public set ambassadorId(value: string[]) {
    this._ambassadorId = value;
  }
  public resetAmbassadorId() {
    this._ambassadorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ambassadorIdInput() {
    return this._ambassadorId;
  }

  // host_binding - computed: false, optional: false, required: true
  private _hostBinding = new DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBindingOutputReference(this, "host_binding");
  public get hostBinding() {
    return this._hostBinding;
  }
  public putHostBinding(value: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecHostBinding) {
    this._hostBinding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostBindingInput() {
    return this._hostBinding.internalValue;
  }

  // l7_depth - computed: false, optional: true, required: false
  private _l7Depth?: number; 
  public get l7Depth() {
    return this.getNumberAttribute('l7_depth');
  }
  public set l7Depth(value: number) {
    this._l7Depth = value;
  }
  public resetL7Depth() {
    this._l7Depth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7DepthInput() {
    return this._l7Depth;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_stack - computed: false, optional: true, required: false
  private _protocolStack?: string[]; 
  public get protocolStack() {
    return this.getListAttribute('protocol_stack');
  }
  public set protocolStack(value: string[]) {
    this._protocolStack = value;
  }
  public resetProtocolStack() {
    this._protocolStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolStackInput() {
    return this._protocolStack;
  }

  // security_model - computed: false, optional: false, required: true
  private _securityModel?: string; 
  public get securityModel() {
    return this.getStringAttribute('security_model');
  }
  public set securityModel(value: string) {
    this._securityModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModelInput() {
    return this._securityModel;
  }

  // stats_prefix - computed: false, optional: true, required: false
  private _statsPrefix?: string; 
  public get statsPrefix() {
    return this.getStringAttribute('stats_prefix');
  }
  public set statsPrefix(value: string) {
    this._statsPrefix = value;
  }
  public resetStatsPrefix() {
    this._statsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsPrefixInput() {
    return this._statsPrefix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest k8s_getambassador_io_listener_v3alpha1_manifest}
*/
export class DataK8SGetambassadorIoListenerV3Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_getambassador_io_listener_v3alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGetambassadorIoListenerV3Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGetambassadorIoListenerV3Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SGetambassadorIoListenerV3Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGetambassadorIoListenerV3Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_getambassador_io_listener_v3alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_listener_v3alpha1_manifest k8s_getambassador_io_listener_v3alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGetambassadorIoListenerV3Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGetambassadorIoListenerV3Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_getambassador_io_listener_v3alpha1_manifest',
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
  private _metadata = new DataK8SGetambassadorIoListenerV3Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGetambassadorIoListenerV3Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGetambassadorIoListenerV3Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGetambassadorIoListenerV3Alpha1ManifestSpec) {
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
      metadata: dataK8SGetambassadorIoListenerV3Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGetambassadorIoListenerV3Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoListenerV3Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SGetambassadorIoListenerV3Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoListenerV3Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
