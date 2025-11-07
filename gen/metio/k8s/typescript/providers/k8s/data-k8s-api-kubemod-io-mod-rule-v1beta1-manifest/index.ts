// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApiKubemodIoModRuleV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#metadata DataK8SApiKubemodIoModRuleV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SApiKubemodIoModRuleV1Beta1ManifestMetadata;
  /**
  * ModRuleSpec defines the desired state of ModRule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#spec DataK8SApiKubemodIoModRuleV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpec;
}
export interface DataK8SApiKubemodIoModRuleV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#annotations DataK8SApiKubemodIoModRuleV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#labels DataK8SApiKubemodIoModRuleV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#name DataK8SApiKubemodIoModRuleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#namespace DataK8SApiKubemodIoModRuleV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApiKubemodIoModRuleV1Beta1ManifestMetadataToTerraform(struct?: DataK8SApiKubemodIoModRuleV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApiKubemodIoModRuleV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SApiKubemodIoModRuleV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApiKubemodIoModRuleV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiKubemodIoModRuleV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApiKubemodIoModRuleV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatch {
  /**
  * MatchFor instructs how to match the results against the match... requirements. Valid values are: - 'Any' - the match is considered positive if any of the results of select have a match. - 'All' - the match is considered positive only if all of the results of select have a match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#match_for DataK8SApiKubemodIoModRuleV1Beta1Manifest#match_for}
  */
  readonly matchFor?: string;
  /**
  * MatchRegex specifies the regular expression to compare the result of Select by. The match is considered positive if at least one of the results of evaluating the select query yields a match when compared to value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#match_regex DataK8SApiKubemodIoModRuleV1Beta1Manifest#match_regex}
  */
  readonly matchRegex?: string;
  /**
  * MatchValue specifies the exact value to match the result of Select by. The match is considered positive if at least one of the results of evaluating the select query yields a match when compared to matchValue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#match_value DataK8SApiKubemodIoModRuleV1Beta1Manifest#match_value}
  */
  readonly matchValue?: string;
  /**
  * MatchValues specifies a list of values to match the result of Select by. The match is considered positive if at least one of the results of evaluating the select query yields a match when compared to any of the values in the array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#match_values DataK8SApiKubemodIoModRuleV1Beta1Manifest#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Negate indicates whether the match result should be to inverted. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#negate DataK8SApiKubemodIoModRuleV1Beta1Manifest#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Select is a JSONPath query expression: https://goessner.net/articles/JsonPath/ which yields zero or more values. If no match value or regex is specified, if the query yields a non-empty result, the match is considered positive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#select DataK8SApiKubemodIoModRuleV1Beta1Manifest#select}
  */
  readonly select: string;
}

export function dataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatchToTerraform(struct?: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_for: cdktf.stringToTerraform(struct!.matchFor),
    match_regex: cdktf.stringToTerraform(struct!.matchRegex),
    match_value: cdktf.stringToTerraform(struct!.matchValue),
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate: cdktf.booleanToTerraform(struct!.negate),
    select: cdktf.stringToTerraform(struct!.select),
  }
}


export function dataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatchToHclTerraform(struct?: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_for: {
      value: cdktf.stringToHclTerraform(struct!.matchFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_value: {
      value: cdktf.stringToHclTerraform(struct!.matchValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    select: {
      value: cdktf.stringToHclTerraform(struct!.select),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFor = this._matchFor;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._matchValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValue = this._matchValue;
    }
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._select !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchFor = undefined;
      this._matchRegex = undefined;
      this._matchValue = undefined;
      this._matchValues = undefined;
      this._negate = undefined;
      this._select = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchFor = value.matchFor;
      this._matchRegex = value.matchRegex;
      this._matchValue = value.matchValue;
      this._matchValues = value.matchValues;
      this._negate = value.negate;
      this._select = value.select;
    }
  }

  // match_for - computed: false, optional: true, required: false
  private _matchFor?: string; 
  public get matchFor() {
    return this.getStringAttribute('match_for');
  }
  public set matchFor(value: string) {
    this._matchFor = value;
  }
  public resetMatchFor() {
    this._matchFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchForInput() {
    return this._matchFor;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: string; 
  public get matchRegex() {
    return this.getStringAttribute('match_regex');
  }
  public set matchRegex(value: string) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // match_value - computed: false, optional: true, required: false
  private _matchValue?: string; 
  public get matchValue() {
    return this.getStringAttribute('match_value');
  }
  public set matchValue(value: string) {
    this._matchValue = value;
  }
  public resetMatchValue() {
    this._matchValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueInput() {
    return this._matchValue;
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // select - computed: false, optional: false, required: true
  private _select?: string; 
  public get select() {
    return this.getStringAttribute('select');
  }
  public set select(value: string) {
    this._select = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select;
  }
}

export class DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatch[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatchOutputReference {
    return new DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatch {
  /**
  * Operation is the type of JSON Path operation to perform against the target element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#op DataK8SApiKubemodIoModRuleV1Beta1Manifest#op}
  */
  readonly op: string;
  /**
  * Path is the JSON path to the target element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#path DataK8SApiKubemodIoModRuleV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Optional JSONPath query expression: https://goessner.net/articles/JsonPath/ used to construct path. A patch operation is created for each result of the query. A placeholder is created for each wildcard and filter in the expression. These placeholders can be used when constructing 'path'. For example, if select is '$.spec.containers[*].ports[?@.containerPort == 80]' placeholder #0 will point to the index of 'containers' and #1 will point to the index of 'ports'. This allows us to define paths such as '/spec/template/spec/containers/#0/securityContext'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#select DataK8SApiKubemodIoModRuleV1Beta1Manifest#select}
  */
  readonly select?: string;
  /**
  * Value is the JSON representation of the modification. The value is a golang template which is evaluated against the context of the target resource. KubeMod performs some analysis of the result of the template evaluation in order to infer its JSON type: - If the value matches the format of a JavaScript number, it is considered to be a number. - If the value matches a boolean literal (true/false), it is considered to be a boolean literal. - If the value matches 'null', it is considered to be null. - If the value is surrounded by double-quotes, it is considered to be a string. - If the value is surrounded by brackets, it is considered to be a JSON array. - If the value is surrounded by curly braces, it is considered to be a JSON object. - If none of the above is true, the value is considered to be a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#value DataK8SApiKubemodIoModRuleV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatchToTerraform(struct?: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    path: cdktf.stringToTerraform(struct!.path),
    select: cdktf.stringToTerraform(struct!.select),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatchToHclTerraform(struct?: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    select: {
      value: cdktf.stringToHclTerraform(struct!.select),
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

export class DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._select !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._path = undefined;
      this._select = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._path = value.path;
      this._select = value.select;
      this._value = value.value;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // select - computed: false, optional: true, required: false
  private _select?: string; 
  public get select() {
    return this.getStringAttribute('select');
  }
  public set select(value: string) {
    this._select = value;
  }
  public resetSelect() {
    this._select = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatch[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatchOutputReference {
    return new DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiKubemodIoModRuleV1Beta1ManifestSpec {
  /**
  * AdmissionOperations specifies which admission hook operations this ModRule applies to. Valid values are: - 'CREATE' - the rule applies to all matching resources as they are created. - 'UPDATE' - the rule applies to all matching resources as they are updated. - 'DELETE' - the rule applies to all matching resources as they are deleted. By default, a ModRule applies to all admission operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#admission_operations DataK8SApiKubemodIoModRuleV1Beta1Manifest#admission_operations}
  */
  readonly admissionOperations?: string[];
  /**
  * ExecutionTier is a value between -32767 and 32766. ExecutionTier controls when this ModRule will be executed as it relates to the other ModRules loaded in the system. ModRules are matched and executed in tiers, starting with the lowest tier. The results of executing all ModRules in a tier are passed as input to the ModRules in the next tier. This cascading execution continues until the highest tier of ModRules has been executed. ModRules in the same tier are executed in indeterminate order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#execution_tier DataK8SApiKubemodIoModRuleV1Beta1Manifest#execution_tier}
  */
  readonly executionTier?: number;
  /**
  * Match is a list of match items which consist of select queries and expected match values or regular expressions. When all match items for an object are positive, the rule is in effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#match DataK8SApiKubemodIoModRuleV1Beta1Manifest#match}
  */
  readonly match: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatch[] | cdktf.IResolvable;
  /**
  * Patch is a list of patch operations to perform on the matching resources at the time of creation. The value part of a patch operation can be a golang template which accepts the resource as its context. This field must be provided for ModRules of type 'patch'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#patch DataK8SApiKubemodIoModRuleV1Beta1Manifest#patch}
  */
  readonly patch?: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatch[] | cdktf.IResolvable;
  /**
  * RejectMessage is an optional message displayed when a resource is rejected by a Reject ModRule. The field is a Golang template evaluated in the context of the object being rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#reject_message DataK8SApiKubemodIoModRuleV1Beta1Manifest#reject_message}
  */
  readonly rejectMessage?: string;
  /**
  * TargetNamespaceRegex is optional and only applies to ModRules in 'kubemod-system' namespace. Its usage enables cluster-wide matching of namespaced resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#target_namespace_regex DataK8SApiKubemodIoModRuleV1Beta1Manifest#target_namespace_regex}
  */
  readonly targetNamespaceRegex?: string;
  /**
  * Type describes the type of a ModRule. Valid values are: - 'Patch' - the rule performs modifications on all the matching resources as they are created. - 'Reject' - the rule rejects the creation of all matching resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#type DataK8SApiKubemodIoModRuleV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SApiKubemodIoModRuleV1Beta1ManifestSpecToTerraform(struct?: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admission_operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.admissionOperations),
    execution_tier: cdktf.numberToTerraform(struct!.executionTier),
    match: cdktf.listMapper(dataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatchToTerraform, false)(struct!.match),
    patch: cdktf.listMapper(dataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatchToTerraform, false)(struct!.patch),
    reject_message: cdktf.stringToTerraform(struct!.rejectMessage),
    target_namespace_regex: cdktf.stringToTerraform(struct!.targetNamespaceRegex),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApiKubemodIoModRuleV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admission_operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.admissionOperations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    execution_tier: {
      value: cdktf.numberToHclTerraform(struct!.executionTier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.listMapperHcl(dataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatchToHclTerraform, false)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatchList",
    },
    patch: {
      value: cdktf.listMapperHcl(dataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatchToHclTerraform, false)(struct!.patch),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatchList",
    },
    reject_message: {
      value: cdktf.stringToHclTerraform(struct!.rejectMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_namespace_regex: {
      value: cdktf.stringToHclTerraform(struct!.targetNamespaceRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiKubemodIoModRuleV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admissionOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.admissionOperations = this._admissionOperations;
    }
    if (this._executionTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTier = this._executionTier;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._patch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch?.internalValue;
    }
    if (this._rejectMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectMessage = this._rejectMessage;
    }
    if (this._targetNamespaceRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNamespaceRegex = this._targetNamespaceRegex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admissionOperations = undefined;
      this._executionTier = undefined;
      this._match.internalValue = undefined;
      this._patch.internalValue = undefined;
      this._rejectMessage = undefined;
      this._targetNamespaceRegex = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admissionOperations = value.admissionOperations;
      this._executionTier = value.executionTier;
      this._match.internalValue = value.match;
      this._patch.internalValue = value.patch;
      this._rejectMessage = value.rejectMessage;
      this._targetNamespaceRegex = value.targetNamespaceRegex;
      this._type = value.type;
    }
  }

  // admission_operations - computed: false, optional: true, required: false
  private _admissionOperations?: string[]; 
  public get admissionOperations() {
    return this.getListAttribute('admission_operations');
  }
  public set admissionOperations(value: string[]) {
    this._admissionOperations = value;
  }
  public resetAdmissionOperations() {
    this._admissionOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionOperationsInput() {
    return this._admissionOperations;
  }

  // execution_tier - computed: false, optional: true, required: false
  private _executionTier?: number; 
  public get executionTier() {
    return this.getNumberAttribute('execution_tier');
  }
  public set executionTier(value: number) {
    this._executionTier = value;
  }
  public resetExecutionTier() {
    this._executionTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTierInput() {
    return this._executionTier;
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // patch - computed: false, optional: true, required: false
  private _patch = new DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatchList(this, "patch", false);
  public get patch() {
    return this._patch;
  }
  public putPatch(value: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecPatch[] | cdktf.IResolvable) {
    this._patch.internalValue = value;
  }
  public resetPatch() {
    this._patch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch.internalValue;
  }

  // reject_message - computed: false, optional: true, required: false
  private _rejectMessage?: string; 
  public get rejectMessage() {
    return this.getStringAttribute('reject_message');
  }
  public set rejectMessage(value: string) {
    this._rejectMessage = value;
  }
  public resetRejectMessage() {
    this._rejectMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectMessageInput() {
    return this._rejectMessage;
  }

  // target_namespace_regex - computed: false, optional: true, required: false
  private _targetNamespaceRegex?: string; 
  public get targetNamespaceRegex() {
    return this.getStringAttribute('target_namespace_regex');
  }
  public set targetNamespaceRegex(value: string) {
    this._targetNamespaceRegex = value;
  }
  public resetTargetNamespaceRegex() {
    this._targetNamespaceRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNamespaceRegexInput() {
    return this._targetNamespaceRegex;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest k8s_api_kubemod_io_mod_rule_v1beta1_manifest}
*/
export class DataK8SApiKubemodIoModRuleV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_api_kubemod_io_mod_rule_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApiKubemodIoModRuleV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApiKubemodIoModRuleV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SApiKubemodIoModRuleV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApiKubemodIoModRuleV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_api_kubemod_io_mod_rule_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/api_kubemod_io_mod_rule_v1beta1_manifest k8s_api_kubemod_io_mod_rule_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApiKubemodIoModRuleV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApiKubemodIoModRuleV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_api_kubemod_io_mod_rule_v1beta1_manifest',
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
  private _metadata = new DataK8SApiKubemodIoModRuleV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApiKubemodIoModRuleV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApiKubemodIoModRuleV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApiKubemodIoModRuleV1Beta1ManifestSpec) {
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
      metadata: dataK8SApiKubemodIoModRuleV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApiKubemodIoModRuleV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApiKubemodIoModRuleV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApiKubemodIoModRuleV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SApiKubemodIoModRuleV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApiKubemodIoModRuleV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
