// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#metadata DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestMetadata;
  /**
  * GrafanaFolderSpec defines the desired state of GrafanaFolder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#spec DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpec;
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#annotations DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#labels DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#namespace DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestMetadataToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#key DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#operator DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#values DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressionsToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressionsOutputReference {
    return new DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#match_expressions DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#match_labels DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressionsList",
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpec {
  /**
  * Enable matching Grafana instances outside the current namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#allow_cross_namespace_import DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#allow_cross_namespace_import}
  */
  readonly allowCrossNamespaceImport?: boolean | cdktf.IResolvable;
  /**
  * Selects Grafanas for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#instance_selector DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#instance_selector}
  */
  readonly instanceSelector: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelector;
  /**
  * Reference to an existing GrafanaFolder CR in the same namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#parent_folder_ref DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#parent_folder_ref}
  */
  readonly parentFolderRef?: string;
  /**
  * UID of the folder in which the current folder should be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#parent_folder_uid DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#parent_folder_uid}
  */
  readonly parentFolderUid?: string;
  /**
  * Raw json with folder permissions, potentially exported from Grafana
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#permissions DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#permissions}
  */
  readonly permissions?: string;
  /**
  * How often the folder is synced, defaults to 5m if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#resync_period DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#resync_period}
  */
  readonly resyncPeriod?: string;
  /**
  * Display name of the folder in Grafana
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#title DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#title}
  */
  readonly title?: string;
  /**
  * Manually specify the UID the Folder is created with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#uid DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_cross_namespace_import: cdktf.booleanToTerraform(struct!.allowCrossNamespaceImport),
    instance_selector: dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorToTerraform(struct!.instanceSelector),
    parent_folder_ref: cdktf.stringToTerraform(struct!.parentFolderRef),
    parent_folder_uid: cdktf.stringToTerraform(struct!.parentFolderUid),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    resync_period: cdktf.stringToTerraform(struct!.resyncPeriod),
    title: cdktf.stringToTerraform(struct!.title),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_cross_namespace_import: {
      value: cdktf.booleanToHclTerraform(struct!.allowCrossNamespaceImport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_selector: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorToHclTerraform(struct!.instanceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelector",
    },
    parent_folder_ref: {
      value: cdktf.stringToHclTerraform(struct!.parentFolderRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_folder_uid: {
      value: cdktf.stringToHclTerraform(struct!.parentFolderUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resync_period: {
      value: cdktf.stringToHclTerraform(struct!.resyncPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCrossNamespaceImport !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCrossNamespaceImport = this._allowCrossNamespaceImport;
    }
    if (this._instanceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSelector = this._instanceSelector?.internalValue;
    }
    if (this._parentFolderRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentFolderRef = this._parentFolderRef;
    }
    if (this._parentFolderUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentFolderUid = this._parentFolderUid;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._resyncPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.resyncPeriod = this._resyncPeriod;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCrossNamespaceImport = undefined;
      this._instanceSelector.internalValue = undefined;
      this._parentFolderRef = undefined;
      this._parentFolderUid = undefined;
      this._permissions = undefined;
      this._resyncPeriod = undefined;
      this._title = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCrossNamespaceImport = value.allowCrossNamespaceImport;
      this._instanceSelector.internalValue = value.instanceSelector;
      this._parentFolderRef = value.parentFolderRef;
      this._parentFolderUid = value.parentFolderUid;
      this._permissions = value.permissions;
      this._resyncPeriod = value.resyncPeriod;
      this._title = value.title;
      this._uid = value.uid;
    }
  }

  // allow_cross_namespace_import - computed: false, optional: true, required: false
  private _allowCrossNamespaceImport?: boolean | cdktf.IResolvable; 
  public get allowCrossNamespaceImport() {
    return this.getBooleanAttribute('allow_cross_namespace_import');
  }
  public set allowCrossNamespaceImport(value: boolean | cdktf.IResolvable) {
    this._allowCrossNamespaceImport = value;
  }
  public resetAllowCrossNamespaceImport() {
    this._allowCrossNamespaceImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCrossNamespaceImportInput() {
    return this._allowCrossNamespaceImport;
  }

  // instance_selector - computed: false, optional: false, required: true
  private _instanceSelector = new DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelectorOutputReference(this, "instance_selector");
  public get instanceSelector() {
    return this._instanceSelector;
  }
  public putInstanceSelector(value: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecInstanceSelector) {
    this._instanceSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectorInput() {
    return this._instanceSelector.internalValue;
  }

  // parent_folder_ref - computed: false, optional: true, required: false
  private _parentFolderRef?: string; 
  public get parentFolderRef() {
    return this.getStringAttribute('parent_folder_ref');
  }
  public set parentFolderRef(value: string) {
    this._parentFolderRef = value;
  }
  public resetParentFolderRef() {
    this._parentFolderRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentFolderRefInput() {
    return this._parentFolderRef;
  }

  // parent_folder_uid - computed: false, optional: true, required: false
  private _parentFolderUid?: string; 
  public get parentFolderUid() {
    return this.getStringAttribute('parent_folder_uid');
  }
  public set parentFolderUid(value: string) {
    this._parentFolderUid = value;
  }
  public resetParentFolderUid() {
    this._parentFolderUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentFolderUidInput() {
    return this._parentFolderUid;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // resync_period - computed: false, optional: true, required: false
  private _resyncPeriod?: string; 
  public get resyncPeriod() {
    return this.getStringAttribute('resync_period');
  }
  public set resyncPeriod(value: string) {
    this._resyncPeriod = value;
  }
  public resetResyncPeriod() {
    this._resyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resyncPeriodInput() {
    return this._resyncPeriod;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest k8s_grafana_integreatly_org_grafana_folder_v1beta1_manifest}
*/
export class DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_grafana_integreatly_org_grafana_folder_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_grafana_integreatly_org_grafana_folder_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_folder_v1beta1_manifest k8s_grafana_integreatly_org_grafana_folder_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_grafana_integreatly_org_grafana_folder_v1beta1_manifest',
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
  private _metadata = new DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpec) {
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
      metadata: dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaFolderV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
