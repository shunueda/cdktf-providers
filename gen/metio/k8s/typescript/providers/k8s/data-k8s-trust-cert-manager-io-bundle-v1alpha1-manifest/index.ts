// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#metadata DataK8STrustCertManagerIoBundleV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STrustCertManagerIoBundleV1Alpha1ManifestMetadata;
  /**
  * Desired state of the Bundle resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#spec DataK8STrustCertManagerIoBundleV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpec;
}
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#annotations DataK8STrustCertManagerIoBundleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#labels DataK8STrustCertManagerIoBundleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#name DataK8STrustCertManagerIoBundleV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#key DataK8STrustCertManagerIoBundleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#operator DataK8STrustCertManagerIoBundleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#values DataK8STrustCertManagerIoBundleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressionsToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressionsToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressionsOutputReference {
    return new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#match_expressions DataK8STrustCertManagerIoBundleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#match_labels DataK8STrustCertManagerIoBundleV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressionsList",
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

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMap {
  /**
  * Key is the key of the entry in the object's 'data' field to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#key DataK8STrustCertManagerIoBundleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name is the name of the source object in the trust Namespace. This field must be left empty when 'selector' is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#name DataK8STrustCertManagerIoBundleV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Selector is the label selector to use to fetch a list of objects. Must not be set when 'Name' is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#selector DataK8STrustCertManagerIoBundleV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelector;
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorToTerraform(struct!.selector),
  }
}


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMap | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._selector.internalValue = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapSelector) {
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
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#key DataK8STrustCertManagerIoBundleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#operator DataK8STrustCertManagerIoBundleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#values DataK8STrustCertManagerIoBundleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressionsToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressionsToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressionsOutputReference {
    return new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#match_expressions DataK8STrustCertManagerIoBundleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#match_labels DataK8STrustCertManagerIoBundleV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressionsList",
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

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecret {
  /**
  * Key is the key of the entry in the object's 'data' field to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#key DataK8STrustCertManagerIoBundleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name is the name of the source object in the trust Namespace. This field must be left empty when 'selector' is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#name DataK8STrustCertManagerIoBundleV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Selector is the label selector to use to fetch a list of objects. Must not be set when 'Name' is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#selector DataK8STrustCertManagerIoBundleV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelector;
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorToTerraform(struct!.selector),
  }
}


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecret | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._selector.internalValue = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretSelector) {
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
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSources {
  /**
  * ConfigMap is a reference (by name) to a ConfigMap's 'data' key, or to a list of ConfigMap's 'data' key using label selector, in the trust Namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#config_map DataK8STrustCertManagerIoBundleV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMap;
  /**
  * InLine is a simple string to append as the source data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#in_line DataK8STrustCertManagerIoBundleV1Alpha1Manifest#in_line}
  */
  readonly inLine?: string;
  /**
  * Secret is a reference (by name) to a Secret's 'data' key, or to a list of Secret's 'data' key using label selector, in the trust Namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#secret DataK8STrustCertManagerIoBundleV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecret;
  /**
  * UseDefaultCAs, when true, requests the default CA bundle to be used as a source. Default CAs are available if trust-manager was installed via Helm or was otherwise set up to include a package-injecting init container by using the '--default-package-location' flag when starting the trust-manager controller. If default CAs were not configured at start-up, any request to use the default CAs will fail. The version of the default CA package which is used for a Bundle is stored in the defaultCAPackageVersion field of the Bundle's status field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#use_default_c_as DataK8STrustCertManagerIoBundleV1Alpha1Manifest#use_default_c_as}
  */
  readonly useDefaultCAs?: boolean | cdktf.IResolvable;
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapToTerraform(struct!.configMap),
    in_line: cdktf.stringToTerraform(struct!.inLine),
    secret: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretToTerraform(struct!.secret),
    use_default_c_as: cdktf.booleanToTerraform(struct!.useDefaultCAs),
  }
}


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMap",
    },
    in_line: {
      value: cdktf.stringToHclTerraform(struct!.inLine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecret",
    },
    use_default_c_as: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultCAs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._inLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.inLine = this._inLine;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._useDefaultCAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultCAs = this._useDefaultCAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._inLine = undefined;
      this._secret.internalValue = undefined;
      this._useDefaultCAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._inLine = value.inLine;
      this._secret.internalValue = value.secret;
      this._useDefaultCAs = value.useDefaultCAs;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // in_line - computed: false, optional: true, required: false
  private _inLine?: string; 
  public get inLine() {
    return this.getStringAttribute('in_line');
  }
  public set inLine(value: string) {
    this._inLine = value;
  }
  public resetInLine() {
    this._inLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inLineInput() {
    return this._inLine;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // use_default_c_as - computed: false, optional: true, required: false
  private _useDefaultCAs?: boolean | cdktf.IResolvable; 
  public get useDefaultCAs() {
    return this.getBooleanAttribute('use_default_c_as');
  }
  public set useDefaultCAs(value: boolean | cdktf.IResolvable) {
    this._useDefaultCAs = value;
  }
  public resetUseDefaultCAs() {
    this._useDefaultCAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultCAsInput() {
    return this._useDefaultCAs;
  }
}

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesOutputReference {
    return new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsJks {
  /**
  * Key is the key of the entry in the object's 'data' field to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#key DataK8STrustCertManagerIoBundleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Password for JKS trust store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#password DataK8STrustCertManagerIoBundleV1Alpha1Manifest#password}
  */
  readonly password?: string;
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsJksToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsJks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsJksToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsJks | cdktf.IResolvable): any {
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsJksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsJks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsJks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._password = value.password;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsPkcs12 {
  /**
  * Key is the key of the entry in the object's 'data' field to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#key DataK8STrustCertManagerIoBundleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Password for PKCS12 trust store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#password DataK8STrustCertManagerIoBundleV1Alpha1Manifest#password}
  */
  readonly password?: string;
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsPkcs12ToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsPkcs12 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsPkcs12ToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsPkcs12 | cdktf.IResolvable): any {
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsPkcs12OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsPkcs12 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsPkcs12 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._password = value.password;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormats {
  /**
  * JKS requests a JKS-formatted binary trust bundle to be written to the target. The bundle has 'changeit' as the default password. For more information refer to this link https://cert-manager.io/docs/faq/#keystore-passwords
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#jks DataK8STrustCertManagerIoBundleV1Alpha1Manifest#jks}
  */
  readonly jks?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsJks;
  /**
  * PKCS12 requests a PKCS12-formatted binary trust bundle to be written to the target. The bundle is by default created without a password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#pkcs12 DataK8STrustCertManagerIoBundleV1Alpha1Manifest#pkcs12}
  */
  readonly pkcs12?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsPkcs12;
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jks: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsJksToTerraform(struct!.jks),
    pkcs12: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsPkcs12ToTerraform(struct!.pkcs12),
  }
}


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jks: {
      value: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsJksToHclTerraform(struct!.jks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsJks",
    },
    pkcs12: {
      value: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsPkcs12ToHclTerraform(struct!.pkcs12),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsPkcs12",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jks = this._jks?.internalValue;
    }
    if (this._pkcs12?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkcs12 = this._pkcs12?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jks.internalValue = undefined;
      this._pkcs12.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jks.internalValue = value.jks;
      this._pkcs12.internalValue = value.pkcs12;
    }
  }

  // jks - computed: false, optional: true, required: false
  private _jks = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsJksOutputReference(this, "jks");
  public get jks() {
    return this._jks;
  }
  public putJks(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsJks) {
    this._jks.internalValue = value;
  }
  public resetJks() {
    this._jks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jksInput() {
    return this._jks.internalValue;
  }

  // pkcs12 - computed: false, optional: true, required: false
  private _pkcs12 = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsPkcs12OutputReference(this, "pkcs12");
  public get pkcs12() {
    return this._pkcs12;
  }
  public putPkcs12(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsPkcs12) {
    this._pkcs12.internalValue = value;
  }
  public resetPkcs12() {
    this._pkcs12.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkcs12Input() {
    return this._pkcs12.internalValue;
  }
}
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetConfigMap {
  /**
  * Key is the key of the entry in the object's 'data' field to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#key DataK8STrustCertManagerIoBundleV1Alpha1Manifest#key}
  */
  readonly key: string;
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetConfigMapToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetConfigMapToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetConfigMap | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
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
}
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetNamespaceSelector {
  /**
  * MatchLabels matches on the set of labels that must be present on a Namespace for the Bundle target to be synced there.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#match_labels DataK8STrustCertManagerIoBundleV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetNamespaceSelectorToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetNamespaceSelectorToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
    }
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
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetSecret {
  /**
  * Key is the key of the entry in the object's 'data' field to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#key DataK8STrustCertManagerIoBundleV1Alpha1Manifest#key}
  */
  readonly key: string;
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetSecretToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetSecretToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetSecret | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
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
}
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTarget {
  /**
  * AdditionalFormats specifies any additional formats to write to the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#additional_formats DataK8STrustCertManagerIoBundleV1Alpha1Manifest#additional_formats}
  */
  readonly additionalFormats?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormats;
  /**
  * ConfigMap is the target ConfigMap in Namespaces that all Bundle source data will be synced to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#config_map DataK8STrustCertManagerIoBundleV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetConfigMap;
  /**
  * NamespaceSelector will, if set, only sync the target resource in Namespaces which match the selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#namespace_selector DataK8STrustCertManagerIoBundleV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetNamespaceSelector;
  /**
  * Secret is the target Secret that all Bundle source data will be synced to. Using Secrets as targets is only supported if enabled at trust-manager startup. By default, trust-manager has no permissions for writing to secrets and can only read secrets in the trust namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#secret DataK8STrustCertManagerIoBundleV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetSecret;
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_formats: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsToTerraform(struct!.additionalFormats),
    config_map: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetConfigMapToTerraform(struct!.configMap),
    namespace_selector: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetNamespaceSelectorToTerraform(struct!.namespaceSelector),
    secret: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetSecretToTerraform(struct!.secret),
  }
}


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_formats: {
      value: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsToHclTerraform(struct!.additionalFormats),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormats",
    },
    config_map: {
      value: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetConfigMap",
    },
    namespace_selector: {
      value: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetNamespaceSelector",
    },
    secret: {
      value: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalFormats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalFormats = this._additionalFormats?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalFormats.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalFormats.internalValue = value.additionalFormats;
      this._configMap.internalValue = value.configMap;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._secret.internalValue = value.secret;
    }
  }

  // additional_formats - computed: false, optional: true, required: false
  private _additionalFormats = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormatsOutputReference(this, "additional_formats");
  public get additionalFormats() {
    return this._additionalFormats;
  }
  public putAdditionalFormats(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetAdditionalFormats) {
    this._additionalFormats.internalValue = value;
  }
  public resetAdditionalFormats() {
    this._additionalFormats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalFormatsInput() {
    return this._additionalFormats.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpec {
  /**
  * Sources is a set of references to data whose data will sync to the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#sources DataK8STrustCertManagerIoBundleV1Alpha1Manifest#sources}
  */
  readonly sources: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSources[] | cdktf.IResolvable;
  /**
  * Target is the target location in all namespaces to sync source data to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#target DataK8STrustCertManagerIoBundleV1Alpha1Manifest#target}
  */
  readonly target: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTarget;
}

export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecToTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sources: cdktf.listMapper(dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesToTerraform, false)(struct!.sources),
    target: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetToTerraform(struct!.target),
  }
}


export function dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sources: {
      value: cdktf.listMapperHcl(dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesList",
    },
    target: {
      value: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sources.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sources.internalValue = value.sources;
      this._target.internalValue = value.target;
    }
  }

  // sources - computed: false, optional: false, required: true
  private _sources = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest k8s_trust_cert_manager_io_bundle_v1alpha1_manifest}
*/
export class DataK8STrustCertManagerIoBundleV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_trust_cert_manager_io_bundle_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STrustCertManagerIoBundleV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STrustCertManagerIoBundleV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STrustCertManagerIoBundleV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STrustCertManagerIoBundleV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_trust_cert_manager_io_bundle_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/trust_cert_manager_io_bundle_v1alpha1_manifest k8s_trust_cert_manager_io_bundle_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STrustCertManagerIoBundleV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STrustCertManagerIoBundleV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_trust_cert_manager_io_bundle_v1alpha1_manifest',
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
  private _metadata = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpec) {
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
      metadata: dataK8STrustCertManagerIoBundleV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STrustCertManagerIoBundleV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STrustCertManagerIoBundleV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STrustCertManagerIoBundleV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
