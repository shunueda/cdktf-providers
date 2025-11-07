import * as cdktf from 'cdktf';
export interface ApplicationSetMetadata {
  /**
  * An unstructured key value map stored with the applicationsets.argoproj.io that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the applicationsets.argoproj.io. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the applicationsets.argoproj.io, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Namespace of the applicationsets.argoproj.io, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetMetadataToTerraform(struct?: ApplicationSetMetadataOutputReference | ApplicationSetMetadata): any {
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


export function applicationSetMetadataToHclTerraform(struct?: ApplicationSetMetadataOutputReference | ApplicationSetMetadata): any {
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

export class ApplicationSetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetMetadata | undefined {
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

  public set internalValue(value: ApplicationSetMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
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

  // name - computed: true, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#key ApplicationSet#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#operator ApplicationSet#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: string[];
}

export function applicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressionsToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressionsToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressionsOutputReference {
    return new ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#match_labels ApplicationSet#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#match_expressions ApplicationSet#match_expressions}
  */
  readonly matchExpressions?: ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorClusterDecisionResourceLabelSelectorToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(applicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceLabelSelectorToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelector): any {
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
    match_expressions: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
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

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateMetadata {
  /**
  * An unstructured key value map that may be used to store arbitrary metadata for the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * List of finalizers to apply to the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#finalizers ApplicationSet#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateMetadataToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateMetadataOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateMetadataOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateMetadata): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._finalizers = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestination {
  /**
  * Name of the target cluster. Can be used instead of `server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Target namespace for the application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * URL of the target cluster and must be set to the Kubernetes control plane API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#server ApplicationSet#server}
  */
  readonly server?: string;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestinationToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestinationToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestination): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._server = value.server;
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifference {
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * List of JQ path expression strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jq_path_expressions ApplicationSet#jq_path_expressions}
  */
  readonly jqPathExpressions?: string[];
  /**
  * List of JSONPaths strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#json_pointers ApplicationSet#json_pointers}
  */
  readonly jsonPointers?: string[];
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * List of external controller manager names whose changes to fields should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_fields_managers ApplicationSet#managed_fields_managers}
  */
  readonly managedFieldsManagers?: string[];
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifferenceToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    jq_path_expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jqPathExpressions),
    json_pointers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonPointers),
    kind: cdktf.stringToTerraform(struct!.kind),
    managed_fields_managers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedFieldsManagers),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifferenceToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
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
    jq_path_expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jqPathExpressions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    json_pointers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonPointers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_fields_managers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedFieldsManagers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._jqPathExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jqPathExpressions = this._jqPathExpressions;
    }
    if (this._jsonPointers !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPointers = this._jsonPointers;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._managedFieldsManagers !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFieldsManagers = this._managedFieldsManagers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._jqPathExpressions = undefined;
      this._jsonPointers = undefined;
      this._kind = undefined;
      this._managedFieldsManagers = undefined;
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
      this._group = value.group;
      this._jqPathExpressions = value.jqPathExpressions;
      this._jsonPointers = value.jsonPointers;
      this._kind = value.kind;
      this._managedFieldsManagers = value.managedFieldsManagers;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // jq_path_expressions - computed: false, optional: true, required: false
  private _jqPathExpressions?: string[]; 
  public get jqPathExpressions() {
    return cdktf.Fn.tolist(this.getListAttribute('jq_path_expressions'));
  }
  public set jqPathExpressions(value: string[]) {
    this._jqPathExpressions = value;
  }
  public resetJqPathExpressions() {
    this._jqPathExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqPathExpressionsInput() {
    return this._jqPathExpressions;
  }

  // json_pointers - computed: false, optional: true, required: false
  private _jsonPointers?: string[]; 
  public get jsonPointers() {
    return cdktf.Fn.tolist(this.getListAttribute('json_pointers'));
  }
  public set jsonPointers(value: string[]) {
    this._jsonPointers = value;
  }
  public resetJsonPointers() {
    this._jsonPointers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPointersInput() {
    return this._jsonPointers;
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

  // managed_fields_managers - computed: false, optional: true, required: false
  private _managedFieldsManagers?: string[]; 
  public get managedFieldsManagers() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_fields_managers'));
  }
  public set managedFieldsManagers(value: string[]) {
    this._managedFieldsManagers = value;
  }
  public resetManagedFieldsManagers() {
    this._managedFieldsManagers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldsManagersInput() {
    return this._managedFieldsManagers;
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifferenceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifference[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifferenceOutputReference {
    return new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfo {
  /**
  * Name of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfoToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfoToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfo | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfo | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfoList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfo[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfoOutputReference {
    return new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVar {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVarToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
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

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
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
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVarList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVarOutputReference {
    return new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTla {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTlaToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
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

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
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
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTlaList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTlaOutputReference {
    return new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnet {
  /**
  * Additional library search dirs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#libs ApplicationSet#libs}
  */
  readonly libs?: string[];
  /**
  * ext_var block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ext_var ApplicationSet#ext_var}
  */
  readonly extVar?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable;
  /**
  * tla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#tla ApplicationSet#tla}
  */
  readonly tla?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    ext_var: cdktf.listMapper(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVarToTerraform, true)(struct!.extVar),
    tla: cdktf.listMapper(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTlaToTerraform, true)(struct!.tla),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ext_var: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform, true)(struct!.extVar),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVarList",
    },
    tla: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform, true)(struct!.tla),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._extVar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVar = this._extVar?.internalValue;
    }
    if (this._tla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tla = this._tla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._libs = undefined;
      this._extVar.internalValue = undefined;
      this._tla.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._libs = value.libs;
      this._extVar.internalValue = value.extVar;
      this._tla.internalValue = value.tla;
    }
  }

  // libs - computed: false, optional: true, required: false
  private _libs?: string[]; 
  public get libs() {
    return this.getListAttribute('libs');
  }
  public set libs(value: string[]) {
    this._libs = value;
  }
  public resetLibs() {
    this._libs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libsInput() {
    return this._libs;
  }

  // ext_var - computed: false, optional: true, required: false
  private _extVar = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVarList(this, "ext_var", false);
  public get extVar() {
    return this._extVar;
  }
  public putExtVar(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable) {
    this._extVar.internalValue = value;
  }
  public resetExtVar() {
    this._extVar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarInput() {
    return this._extVar.internalValue;
  }

  // tla - computed: false, optional: true, required: false
  private _tla = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTlaList(this, "tla", true);
  public get tla() {
    return this._tla;
  }
  public putTla(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable) {
    this._tla.internalValue = value;
  }
  public resetTla() {
    this._tla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlaInput() {
    return this._tla.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectory {
  /**
  * Glob pattern to match paths against that should be explicitly excluded from being used during manifest generation. This takes precedence over the `include` field. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{config.yaml,env-use2/*}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#exclude ApplicationSet#exclude}
  */
  readonly exclude?: string;
  /**
  * Glob pattern to match paths against that should be explicitly included during manifest generation. If this field is set, only matching manifests will be included. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{*.yml,*.yaml}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#include ApplicationSet#include}
  */
  readonly include?: string;
  /**
  * Whether to scan a directory recursively for manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#recurse ApplicationSet#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
  /**
  * jsonnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jsonnet ApplicationSet#jsonnet}
  */
  readonly jsonnet?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnet;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    jsonnet: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetToTerraform(struct!.jsonnet),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jsonnet: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
      this._recurse = undefined;
      this._jsonnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
      this._recurse = value.recurse;
      this._jsonnet.internalValue = value.jsonnet;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryJsonnet) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameter {
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name: string;
  /**
  * Path to the file containing the values for the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path: string;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameterToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameterOutputReference {
    return new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameter {
  /**
  * Determines whether to tell Helm to interpret booleans and numbers as strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#force_string ApplicationSet#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameterToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_string: cdktf.booleanToTerraform(struct!.forceString),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_string: {
      value: cdktf.booleanToHclTerraform(struct!.forceString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceString !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceString = this._forceString;
    }
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

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceString = undefined;
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
      this._forceString = value.forceString;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // force_string - computed: false, optional: true, required: false
  private _forceString?: boolean | cdktf.IResolvable; 
  public get forceString() {
    return this.getBooleanAttribute('force_string');
  }
  public set forceString(value: boolean | cdktf.IResolvable) {
    this._forceString = value;
  }
  public resetForceString() {
    this._forceString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStringInput() {
    return this._forceString;
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameterOutputReference {
    return new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelm {
  /**
  * Prevents 'helm template' from failing when `value_files` do not exist locally by not appending them to 'helm template --values'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_missing_value_files ApplicationSet#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * If true then adds '--pass-credentials' to Helm commands to pass credentials to all domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#pass_credentials ApplicationSet#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * Helm release name. If omitted it will use the application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#release_name ApplicationSet#release_name}
  */
  readonly releaseName?: string;
  /**
  * Whether to skip custom resource definition installation step (Helm's [--skip-crds](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#skip_crds ApplicationSet#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * List of Helm value files to use when generating a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value_files ApplicationSet#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Helm values to be passed to 'helm template', typically defined as a block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: string;
  /**
  * The Helm version to use for templating. Accepts either `v2` or `v3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * file_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#file_parameter ApplicationSet#file_parameter}
  */
  readonly fileParameter?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#parameter ApplicationSet#parameter}
  */
  readonly parameter?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameter[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    version: cdktf.stringToTerraform(struct!.version),
    file_parameter: cdktf.listMapper(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameterToTerraform, true)(struct!.fileParameter),
    parameter: cdktf.listMapper(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameterToTerraform, true)(struct!.parameter),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.passCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_crds: {
      value: cdktf.booleanToHclTerraform(struct!.skipCrds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
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
    file_parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameterToHclTerraform, true)(struct!.fileParameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameterList",
    },
    parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
    }
    if (this._passCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.passCredentials = this._passCredentials;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    if (this._skipCrds !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCrds = this._skipCrds;
    }
    if (this._valueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFiles = this._valueFiles;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._fileParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameter = this._fileParameter?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreMissingValueFiles = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._version = undefined;
      this._fileParameter.internalValue = undefined;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._version = value.version;
      this._fileParameter.internalValue = value.fileParameter;
      this._parameter.internalValue = value.parameter;
    }
  }

  // ignore_missing_value_files - computed: false, optional: true, required: false
  private _ignoreMissingValueFiles?: boolean | cdktf.IResolvable; 
  public get ignoreMissingValueFiles() {
    return this.getBooleanAttribute('ignore_missing_value_files');
  }
  public set ignoreMissingValueFiles(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingValueFiles = value;
  }
  public resetIgnoreMissingValueFiles() {
    this._ignoreMissingValueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingValueFilesInput() {
    return this._ignoreMissingValueFiles;
  }

  // pass_credentials - computed: false, optional: true, required: false
  private _passCredentials?: boolean | cdktf.IResolvable; 
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }
  public set passCredentials(value: boolean | cdktf.IResolvable) {
    this._passCredentials = value;
  }
  public resetPassCredentials() {
    this._passCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passCredentialsInput() {
    return this._passCredentials;
  }

  // release_name - computed: false, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktf.IResolvable; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }
  public set skipCrds(value: boolean | cdktf.IResolvable) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds;
  }

  // value_files - computed: false, optional: true, required: false
  private _valueFiles?: string[]; 
  public get valueFiles() {
    return this.getListAttribute('value_files');
  }
  public set valueFiles(value: string[]) {
    this._valueFiles = value;
  }
  public resetValueFiles() {
    this._valueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFilesInput() {
    return this._valueFiles;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // file_parameter - computed: false, optional: true, required: false
  private _fileParameter = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameterList(this, "file_parameter", true);
  public get fileParameter() {
    return this._fileParameter;
  }
  public putFileParameter(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable) {
    this._fileParameter.internalValue = value;
  }
  public resetFileParameter() {
    this._fileParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParameterInput() {
    return this._fileParameter.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTarget {
  /**
  * Annotation selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotation_selector ApplicationSet#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * Label selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#label_selector ApplicationSet#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * The Kubernetes resource Version to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTargetToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: cdktf.stringToTerraform(struct!.annotationSelector),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: cdktf.stringToHclTerraform(struct!.annotationSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotationSelector = value.annotationSelector;
      this._group = value.group;
      this._kind = value.kind;
      this._labelSelector = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector?: string; 
  public get annotationSelector() {
    return this.getStringAttribute('annotation_selector');
  }
  public set annotationSelector(value: string) {
    this._annotationSelector = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
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
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatches {
  /**
  * Additional [options](https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/patches/#name-and-kind-changes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#options ApplicationSet#options}
  */
  readonly options?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Inline Kustomize patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patch ApplicationSet#patch}
  */
  readonly patch?: string;
  /**
  * Path to a file containing the patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target ApplicationSet#target}
  */
  readonly target: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTarget;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "booleanMap",
    },
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
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
    target: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
      this._patch = undefined;
      this._path = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
      this._patch = value.patch;
      this._path = value.path;
      this._target.internalValue = value.target;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get options() {
    return this.getBooleanMapAttribute('options');
  }
  public set options(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // target - computed: false, optional: false, required: true
  private _target = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesOutputReference {
    return new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomize {
  /**
  * List of additional annotations to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_annotations ApplicationSet#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * List of additional labels to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_labels ApplicationSet#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * List of Kustomize image override specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#images ApplicationSet#images}
  */
  readonly images?: string[];
  /**
  * Prefix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_prefix ApplicationSet#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Suffix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_suffix ApplicationSet#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Version of Kustomize to use for rendering manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * patches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patches ApplicationSet#patches}
  */
  readonly patches?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizeToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    version: cdktf.stringToTerraform(struct!.version),
    patches: cdktf.listMapper(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesToTerraform, true)(struct!.patches),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizeToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.nameSuffix),
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
    patches: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesToHclTerraform, true)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonAnnotations = undefined;
      this._commonLabels = undefined;
      this._images = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._version = undefined;
      this._patches.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonAnnotations = value.commonAnnotations;
      this._commonLabels = value.commonLabels;
      this._images = value.images;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._version = value.version;
      this._patches.internalValue = value.patches;
    }
  }

  // common_annotations - computed: false, optional: true, required: false
  private _commonAnnotations?: { [key: string]: string }; 
  public get commonAnnotations() {
    return this.getStringMapAttribute('common_annotations');
  }
  public set commonAnnotations(value: { [key: string]: string }) {
    this._commonAnnotations = value;
  }
  public resetCommonAnnotations() {
    this._commonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsInput() {
    return this._commonAnnotations;
  }

  // common_labels - computed: false, optional: true, required: false
  private _commonLabels?: { [key: string]: string }; 
  public get commonLabels() {
    return this.getStringMapAttribute('common_labels');
  }
  public set commonLabels(value: { [key: string]: string }) {
    this._commonLabels = value;
  }
  public resetCommonLabels() {
    this._commonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonLabelsInput() {
    return this._commonLabels;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return cdktf.Fn.tolist(this.getListAttribute('images'));
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // patches - computed: false, optional: true, required: false
  private _patches = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnv {
  /**
  * Name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnvToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnvToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnvList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnv[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnvOutputReference {
    return new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePlugin {
  /**
  * Name of the plugin. Only set the plugin name if the plugin is defined in `argocd-cm`. If the plugin is defined as a sidecar, omit the name. The plugin will be automatically matched with the Application according to the plugin's discovery rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#env ApplicationSet#env}
  */
  readonly env?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnv[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    env: cdktf.listMapper(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnvToTerraform, true)(struct!.env),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePlugin): any {
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
    env: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._env.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._env.internalValue = value.env;
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

  // env - computed: false, optional: true, required: false
  private _env = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSource {
  /**
  * Helm chart name. Must be specified for applications sourced from a Helm repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#chart ApplicationSet#chart}
  */
  readonly chart?: string;
  /**
  * Name is used to refer to a source and is displayed in the UI. It is supported in multi-source Applications since version 2.14
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Directory path within the repository. Only valid for applications sourced from Git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * Reference to another `source` within defined sources. See associated documentation on [Helm value files from external Git repository](https://argo-cd.readthedocs.io/en/stable/user-guide/multiple_sources/#helm-value-files-from-external-git-repository) regarding combining `ref` with `path` and/or `chart`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ref ApplicationSet#ref}
  */
  readonly ref?: string;
  /**
  * URL to the repository (Git or Helm) that contains the application manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#repo_url ApplicationSet#repo_url}
  */
  readonly repoUrl?: string;
  /**
  * Revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target_revision ApplicationSet#target_revision}
  */
  readonly targetRevision?: string;
  /**
  * directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#directory ApplicationSet#directory}
  */
  readonly directory?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectory;
  /**
  * helm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#helm ApplicationSet#helm}
  */
  readonly helm?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelm;
  /**
  * kustomize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kustomize ApplicationSet#kustomize}
  */
  readonly kustomize?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomize;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#plugin ApplicationSet#plugin}
  */
  readonly plugin?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePlugin;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
    directory: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryToTerraform(struct!.directory),
    helm: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmToTerraform(struct!.helm),
    kustomize: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizeToTerraform(struct!.kustomize),
    plugin: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginToTerraform(struct!.plugin),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_revision: {
      value: cdktf.stringToHclTerraform(struct!.targetRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryList",
    },
    helm: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmList",
    },
    kustomize: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizeList",
    },
    plugin: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._targetRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRevision = this._targetRevision;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._helm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helm = this._helm?.internalValue;
    }
    if (this._kustomize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomize = this._kustomize?.internalValue;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._plugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._name = value.name;
      this._path = value.path;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._kustomize.internalValue = value.kustomize;
      this._plugin.internalValue = value.plugin;
    }
  }

  // chart - computed: false, optional: true, required: false
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  public resetChart() {
    this._chart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repo_url - computed: false, optional: true, required: false
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  public resetRepoUrl() {
    this._repoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // target_revision - computed: false, optional: true, required: false
  private _targetRevision?: string; 
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
  public set targetRevision(value: string) {
    this._targetRevision = value;
  }
  public resetTargetRevision() {
    this._targetRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRevisionInput() {
    return this._targetRevision;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // helm - computed: false, optional: true, required: false
  private _helm = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceHelm) {
    this._helm.internalValue = value;
  }
  public resetHelm() {
    this._helm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmInput() {
    return this._helm.internalValue;
  }

  // kustomize - computed: false, optional: true, required: false
  private _kustomize = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourcePlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSource[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceOutputReference {
    return new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomated {
  /**
  * Allows apps have zero live resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#allow_empty ApplicationSet#allow_empty}
  */
  readonly allowEmpty?: boolean | cdktf.IResolvable;
  /**
  * Whether to delete resources from the cluster that are not found in the sources anymore as part of automated sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#prune ApplicationSet#prune}
  */
  readonly prune?: boolean | cdktf.IResolvable;
  /**
  * Whether to revert resources back to their desired state upon modification in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#self_heal ApplicationSet#self_heal}
  */
  readonly selfHeal?: boolean | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomatedToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_empty: cdktf.booleanToTerraform(struct!.allowEmpty),
    prune: cdktf.booleanToTerraform(struct!.prune),
    self_heal: cdktf.booleanToTerraform(struct!.selfHeal),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomatedToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_empty: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prune: {
      value: cdktf.booleanToHclTerraform(struct!.prune),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    self_heal: {
      value: cdktf.booleanToHclTerraform(struct!.selfHeal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmpty = this._allowEmpty;
    }
    if (this._prune !== undefined) {
      hasAnyValues = true;
      internalValueResult.prune = this._prune;
    }
    if (this._selfHeal !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfHeal = this._selfHeal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowEmpty = undefined;
      this._prune = undefined;
      this._selfHeal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowEmpty = value.allowEmpty;
      this._prune = value.prune;
      this._selfHeal = value.selfHeal;
    }
  }

  // allow_empty - computed: false, optional: true, required: false
  private _allowEmpty?: boolean | cdktf.IResolvable; 
  public get allowEmpty() {
    return this.getBooleanAttribute('allow_empty');
  }
  public set allowEmpty(value: boolean | cdktf.IResolvable) {
    this._allowEmpty = value;
  }
  public resetAllowEmpty() {
    this._allowEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyInput() {
    return this._allowEmpty;
  }

  // prune - computed: false, optional: true, required: false
  private _prune?: boolean | cdktf.IResolvable; 
  public get prune() {
    return this.getBooleanAttribute('prune');
  }
  public set prune(value: boolean | cdktf.IResolvable) {
    this._prune = value;
  }
  public resetPrune() {
    this._prune = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pruneInput() {
    return this._prune;
  }

  // self_heal - computed: false, optional: true, required: false
  private _selfHeal?: boolean | cdktf.IResolvable; 
  public get selfHeal() {
    return this.getBooleanAttribute('self_heal');
  }
  public set selfHeal(value: boolean | cdktf.IResolvable) {
    this._selfHeal = value;
  }
  public resetSelfHeal() {
    this._selfHeal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfHealInput() {
    return this._selfHeal;
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadata {
  /**
  * Annotations to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
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
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoff {
  /**
  * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#duration ApplicationSet#duration}
  */
  readonly duration?: string;
  /**
  * Factor to multiply the base duration after each failed retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#factor ApplicationSet#factor}
  */
  readonly factor?: string;
  /**
  * Maximum amount of time allowed for the backoff strategy. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#max_duration ApplicationSet#max_duration}
  */
  readonly maxDuration?: string;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoffToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    factor: cdktf.stringToTerraform(struct!.factor),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    factor: {
      value: cdktf.stringToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._factor !== undefined) {
      hasAnyValues = true;
      internalValueResult.factor = this._factor;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._factor = undefined;
      this._maxDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._factor = value.factor;
      this._maxDuration = value.maxDuration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // factor - computed: false, optional: true, required: false
  private _factor?: string; 
  public get factor() {
    return this.getStringAttribute('factor');
  }
  public set factor(value: string) {
    this._factor = value;
  }
  public resetFactor() {
    this._factor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorInput() {
    return this._factor;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetry {
  /**
  * Maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#limit ApplicationSet#limit}
  */
  readonly limit?: string;
  /**
  * backoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#backoff ApplicationSet#backoff}
  */
  readonly backoff?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoff;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    backoff: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoffToTerraform(struct!.backoff),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backoff: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct!.backoff),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._backoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoff = this._backoff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
      this._backoff.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
      this._backoff.internalValue = value.backoff;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoffOutputReference(this, "backoff");
  public get backoff() {
    return this._backoff;
  }
  public putBackoff(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryBackoff) {
    this._backoff.internalValue = value;
  }
  public resetBackoff() {
    this._backoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicy {
  /**
  * List of sync options. More info: https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_options ApplicationSet#sync_options}
  */
  readonly syncOptions?: string[];
  /**
  * automated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#automated ApplicationSet#automated}
  */
  readonly automated?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomated;
  /**
  * managed_namespace_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_namespace_metadata ApplicationSet#managed_namespace_metadata}
  */
  readonly managedNamespaceMetadata?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadata;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#retry ApplicationSet#retry}
  */
  readonly retry?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetry;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncOptions),
    automated: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomatedToTerraform(struct!.automated),
    managed_namespace_metadata: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct!.managedNamespaceMetadata),
    retry: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryToTerraform(struct!.retry),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    automated: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomatedToHclTerraform(struct!.automated),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomatedList",
    },
    managed_namespace_metadata: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct!.managedNamespaceMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadataList",
    },
    retry: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOptions = this._syncOptions;
    }
    if (this._automated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automated = this._automated?.internalValue;
    }
    if (this._managedNamespaceMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedNamespaceMetadata = this._managedNamespaceMetadata?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._syncOptions = undefined;
      this._automated.internalValue = undefined;
      this._managedNamespaceMetadata.internalValue = undefined;
      this._retry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._syncOptions = value.syncOptions;
      this._automated.internalValue = value.automated;
      this._managedNamespaceMetadata.internalValue = value.managedNamespaceMetadata;
      this._retry.internalValue = value.retry;
    }
  }

  // sync_options - computed: false, optional: true, required: false
  private _syncOptions?: string[]; 
  public get syncOptions() {
    return this.getListAttribute('sync_options');
  }
  public set syncOptions(value: string[]) {
    this._syncOptions = value;
  }
  public resetSyncOptions() {
    this._syncOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOptionsInput() {
    return this._syncOptions;
  }

  // automated - computed: false, optional: true, required: false
  private _automated = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomatedOutputReference(this, "automated");
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyAutomated) {
    this._automated.internalValue = value;
  }
  public resetAutomated() {
    this._automated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedInput() {
    return this._automated.internalValue;
  }

  // managed_namespace_metadata - computed: false, optional: true, required: false
  private _managedNamespaceMetadata = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference(this, "managed_namespace_metadata");
  public get managedNamespaceMetadata() {
    return this._managedNamespaceMetadata;
  }
  public putManagedNamespaceMetadata(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyManagedNamespaceMetadata) {
    this._managedNamespaceMetadata.internalValue = value;
  }
  public resetManagedNamespaceMetadata() {
    this._managedNamespaceMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedNamespaceMetadataInput() {
    return this._managedNamespaceMetadata.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpec {
  /**
  * The project the application belongs to. Defaults to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#project ApplicationSet#project}
  */
  readonly project?: string;
  /**
  * Limits the number of items kept in the application's revision history, which is used for informational purposes as well as for rollbacks to previous versions. This should only be changed in exceptional circumstances. Setting to zero will store no history. This will reduce storage used. Increasing will increase the space used to store the history, so we do not recommend increasing it. Default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#revision_history_limit ApplicationSet#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#destination ApplicationSet#destination}
  */
  readonly destination?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestination;
  /**
  * ignore_difference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_difference ApplicationSet#ignore_difference}
  */
  readonly ignoreDifference?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifference[] | cdktf.IResolvable;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#info ApplicationSet#info}
  */
  readonly info?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfo[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#source ApplicationSet#source}
  */
  readonly source?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSource[] | cdktf.IResolvable;
  /**
  * sync_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_policy ApplicationSet#sync_policy}
  */
  readonly syncPolicy?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicy;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    destination: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestinationToTerraform(struct!.destination),
    ignore_difference: cdktf.listMapper(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifferenceToTerraform, true)(struct!.ignoreDifference),
    info: cdktf.listMapper(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfoToTerraform, true)(struct!.info),
    source: cdktf.listMapper(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceToTerraform, true)(struct!.source),
    sync_policy: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyToTerraform(struct!.syncPolicy),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestinationList",
    },
    ignore_difference: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifferenceToHclTerraform, true)(struct!.ignoreDifference),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifferenceList",
    },
    info: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfoToHclTerraform, true)(struct!.info),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfoList",
    },
    source: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceList",
    },
    sync_policy: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._ignoreDifference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDifference = this._ignoreDifference?.internalValue;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._syncPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPolicy = this._syncPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._revisionHistoryLimit = undefined;
      this._destination.internalValue = undefined;
      this._ignoreDifference.internalValue = undefined;
      this._info.internalValue = undefined;
      this._source.internalValue = undefined;
      this._syncPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._destination.internalValue = value.destination;
      this._ignoreDifference.internalValue = value.ignoreDifference;
      this._info.internalValue = value.info;
      this._source.internalValue = value.source;
      this._syncPolicy.internalValue = value.syncPolicy;
    }
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // revision_history_limit - computed: false, optional: true, required: false
  private _revisionHistoryLimit?: number; 
  public get revisionHistoryLimit() {
    return this.getNumberAttribute('revision_history_limit');
  }
  public set revisionHistoryLimit(value: number) {
    this._revisionHistoryLimit = value;
  }
  public resetRevisionHistoryLimit() {
    this._revisionHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitInput() {
    return this._revisionHistoryLimit;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // ignore_difference - computed: false, optional: true, required: false
  private _ignoreDifference = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifferenceList(this, "ignore_difference", false);
  public get ignoreDifference() {
    return this._ignoreDifference;
  }
  public putIgnoreDifference(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecIgnoreDifference[] | cdktf.IResolvable) {
    this._ignoreDifference.internalValue = value;
  }
  public resetIgnoreDifference() {
    this._ignoreDifference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDifferenceInput() {
    return this._ignoreDifference.internalValue;
  }

  // info - computed: false, optional: true, required: false
  private _info = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfoList(this, "info", true);
  public get info() {
    return this._info;
  }
  public putInfo(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sync_policy - computed: false, optional: true, required: false
  private _syncPolicy = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecSyncPolicy) {
    this._syncPolicy.internalValue = value;
  }
  public resetSyncPolicy() {
    this._syncPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPolicyInput() {
    return this._syncPolicy.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResourceTemplate {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#metadata ApplicationSet#metadata}
  */
  readonly metadata?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#spec ApplicationSet#spec}
  */
  readonly spec?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpec;
}

export function applicationSetSpecGeneratorClusterDecisionResourceTemplateToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: applicationSetSpecGeneratorClusterDecisionResourceTemplateMetadataToTerraform(struct!.metadata),
    spec: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecToTerraform(struct!.spec),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceTemplateToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateOutputReference | ApplicationSetSpecGeneratorClusterDecisionResourceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateMetadataList",
    },
    spec: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResourceTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClusterDecisionResource {
  /**
  * ConfigMap with the duck type definitions needed to retrieve the data this includes apiVersion(group/version), kind, matchKey and validation settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#config_map_ref ApplicationSet#config_map_ref}
  */
  readonly configMapRef: string;
  /**
  * Resource name of the kind, group and version, defined in the `config_map_ref`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * How often to check for changes (in seconds). Default: 3min.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#requeue_after_seconds ApplicationSet#requeue_after_seconds}
  */
  readonly requeueAfterSeconds?: string;
  /**
  * Arbitrary string key-value pairs which are passed directly as parameters to the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: { [key: string]: string };
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#label_selector ApplicationSet#label_selector}
  */
  readonly labelSelector?: ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelector;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#template ApplicationSet#template}
  */
  readonly template?: ApplicationSetSpecGeneratorClusterDecisionResourceTemplate;
}

export function applicationSetSpecGeneratorClusterDecisionResourceToTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_ref: cdktf.stringToTerraform(struct!.configMapRef),
    name: cdktf.stringToTerraform(struct!.name),
    requeue_after_seconds: cdktf.stringToTerraform(struct!.requeueAfterSeconds),
    values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.values),
    label_selector: applicationSetSpecGeneratorClusterDecisionResourceLabelSelectorToTerraform(struct!.labelSelector),
    template: applicationSetSpecGeneratorClusterDecisionResourceTemplateToTerraform(struct!.template),
  }
}


export function applicationSetSpecGeneratorClusterDecisionResourceToHclTerraform(struct?: ApplicationSetSpecGeneratorClusterDecisionResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_ref: {
      value: cdktf.stringToHclTerraform(struct!.configMapRef),
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
    requeue_after_seconds: {
      value: cdktf.stringToHclTerraform(struct!.requeueAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    label_selector: {
      value: applicationSetSpecGeneratorClusterDecisionResourceLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorList",
    },
    template: {
      value: applicationSetSpecGeneratorClusterDecisionResourceTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClusterDecisionResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRef = this._configMapRef;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requeueAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.requeueAfterSeconds = this._requeueAfterSeconds;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusterDecisionResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapRef = undefined;
      this._name = undefined;
      this._requeueAfterSeconds = undefined;
      this._values = undefined;
      this._labelSelector.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapRef = value.configMapRef;
      this._name = value.name;
      this._requeueAfterSeconds = value.requeueAfterSeconds;
      this._values = value.values;
      this._labelSelector.internalValue = value.labelSelector;
      this._template.internalValue = value.template;
    }
  }

  // config_map_ref - computed: false, optional: false, required: true
  private _configMapRef?: string; 
  public get configMapRef() {
    return this.getStringAttribute('config_map_ref');
  }
  public set configMapRef(value: string) {
    this._configMapRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefInput() {
    return this._configMapRef;
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

  // requeue_after_seconds - computed: false, optional: true, required: false
  private _requeueAfterSeconds?: string; 
  public get requeueAfterSeconds() {
    return this.getStringAttribute('requeue_after_seconds');
  }
  public set requeueAfterSeconds(value: string) {
    this._requeueAfterSeconds = value;
  }
  public resetRequeueAfterSeconds() {
    this._requeueAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requeueAfterSecondsInput() {
    return this._requeueAfterSeconds;
  }

  // values - computed: false, optional: true, required: false
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: ApplicationSetSpecGeneratorClusterDecisionResourceLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new ApplicationSetSpecGeneratorClusterDecisionResourceTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: ApplicationSetSpecGeneratorClusterDecisionResourceTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class ApplicationSetSpecGeneratorClusterDecisionResourceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClusterDecisionResource[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClusterDecisionResourceOutputReference {
    return new ApplicationSetSpecGeneratorClusterDecisionResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClustersSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#key ApplicationSet#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#operator ApplicationSet#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: string[];
}

export function applicationSetSpecGeneratorClustersSelectorMatchExpressionsToTerraform(struct?: ApplicationSetSpecGeneratorClustersSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorClustersSelectorMatchExpressionsToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersSelectorMatchExpressions | cdktf.IResolvable): any {
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
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClustersSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorClustersSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
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

export class ApplicationSetSpecGeneratorClustersSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClustersSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClustersSelectorMatchExpressionsOutputReference {
    return new ApplicationSetSpecGeneratorClustersSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClustersSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#match_labels ApplicationSet#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#match_expressions ApplicationSet#match_expressions}
  */
  readonly matchExpressions?: ApplicationSetSpecGeneratorClustersSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorClustersSelectorToTerraform(struct?: ApplicationSetSpecGeneratorClustersSelectorOutputReference | ApplicationSetSpecGeneratorClustersSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(applicationSetSpecGeneratorClustersSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function applicationSetSpecGeneratorClustersSelectorToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersSelectorOutputReference | ApplicationSetSpecGeneratorClustersSelector): any {
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
    match_expressions: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClustersSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
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

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ApplicationSetSpecGeneratorClustersSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ApplicationSetSpecGeneratorClustersSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateMetadata {
  /**
  * An unstructured key value map that may be used to store arbitrary metadata for the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * List of finalizers to apply to the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#finalizers ApplicationSet#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorClustersTemplateMetadataToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateMetadataOutputReference | ApplicationSetSpecGeneratorClustersTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorClustersTemplateMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateMetadataOutputReference | ApplicationSetSpecGeneratorClustersTemplateMetadata): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorClustersTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._finalizers = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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
export interface ApplicationSetSpecGeneratorClustersTemplateSpecDestination {
  /**
  * Name of the target cluster. Can be used instead of `server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Target namespace for the application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * URL of the target cluster and must be set to the Kubernetes control plane API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#server ApplicationSet#server}
  */
  readonly server?: string;
}

export function applicationSetSpecGeneratorClustersTemplateSpecDestinationToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecDestinationToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecDestination): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._server = value.server;
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecIgnoreDifference {
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * List of JQ path expression strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jq_path_expressions ApplicationSet#jq_path_expressions}
  */
  readonly jqPathExpressions?: string[];
  /**
  * List of JSONPaths strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#json_pointers ApplicationSet#json_pointers}
  */
  readonly jsonPointers?: string[];
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * List of external controller manager names whose changes to fields should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_fields_managers ApplicationSet#managed_fields_managers}
  */
  readonly managedFieldsManagers?: string[];
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorClustersTemplateSpecIgnoreDifferenceToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    jq_path_expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jqPathExpressions),
    json_pointers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonPointers),
    kind: cdktf.stringToTerraform(struct!.kind),
    managed_fields_managers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedFieldsManagers),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecIgnoreDifferenceToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
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
    jq_path_expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jqPathExpressions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    json_pointers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonPointers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_fields_managers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedFieldsManagers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorClustersTemplateSpecIgnoreDifferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._jqPathExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jqPathExpressions = this._jqPathExpressions;
    }
    if (this._jsonPointers !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPointers = this._jsonPointers;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._managedFieldsManagers !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFieldsManagers = this._managedFieldsManagers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._jqPathExpressions = undefined;
      this._jsonPointers = undefined;
      this._kind = undefined;
      this._managedFieldsManagers = undefined;
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
      this._group = value.group;
      this._jqPathExpressions = value.jqPathExpressions;
      this._jsonPointers = value.jsonPointers;
      this._kind = value.kind;
      this._managedFieldsManagers = value.managedFieldsManagers;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // jq_path_expressions - computed: false, optional: true, required: false
  private _jqPathExpressions?: string[]; 
  public get jqPathExpressions() {
    return cdktf.Fn.tolist(this.getListAttribute('jq_path_expressions'));
  }
  public set jqPathExpressions(value: string[]) {
    this._jqPathExpressions = value;
  }
  public resetJqPathExpressions() {
    this._jqPathExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqPathExpressionsInput() {
    return this._jqPathExpressions;
  }

  // json_pointers - computed: false, optional: true, required: false
  private _jsonPointers?: string[]; 
  public get jsonPointers() {
    return cdktf.Fn.tolist(this.getListAttribute('json_pointers'));
  }
  public set jsonPointers(value: string[]) {
    this._jsonPointers = value;
  }
  public resetJsonPointers() {
    this._jsonPointers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPointersInput() {
    return this._jsonPointers;
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

  // managed_fields_managers - computed: false, optional: true, required: false
  private _managedFieldsManagers?: string[]; 
  public get managedFieldsManagers() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_fields_managers'));
  }
  public set managedFieldsManagers(value: string[]) {
    this._managedFieldsManagers = value;
  }
  public resetManagedFieldsManagers() {
    this._managedFieldsManagers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldsManagersInput() {
    return this._managedFieldsManagers;
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

export class ApplicationSetSpecGeneratorClustersTemplateSpecIgnoreDifferenceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClustersTemplateSpecIgnoreDifference[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClustersTemplateSpecIgnoreDifferenceOutputReference {
    return new ApplicationSetSpecGeneratorClustersTemplateSpecIgnoreDifferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecInfo {
  /**
  * Name of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorClustersTemplateSpecInfoToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecInfoToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecInfo | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorClustersTemplateSpecInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecInfo | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorClustersTemplateSpecInfoList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClustersTemplateSpecInfo[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClustersTemplateSpecInfoOutputReference {
    return new ApplicationSetSpecGeneratorClustersTemplateSpecInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVar {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVarToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
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

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
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
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVarList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVarOutputReference {
    return new ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTla {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTlaToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
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

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
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
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTlaList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTlaOutputReference {
    return new ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnet {
  /**
  * Additional library search dirs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#libs ApplicationSet#libs}
  */
  readonly libs?: string[];
  /**
  * ext_var block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ext_var ApplicationSet#ext_var}
  */
  readonly extVar?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable;
  /**
  * tla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#tla ApplicationSet#tla}
  */
  readonly tla?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    ext_var: cdktf.listMapper(applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVarToTerraform, true)(struct!.extVar),
    tla: cdktf.listMapper(applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTlaToTerraform, true)(struct!.tla),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ext_var: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform, true)(struct!.extVar),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVarList",
    },
    tla: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform, true)(struct!.tla),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._extVar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVar = this._extVar?.internalValue;
    }
    if (this._tla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tla = this._tla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._libs = undefined;
      this._extVar.internalValue = undefined;
      this._tla.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._libs = value.libs;
      this._extVar.internalValue = value.extVar;
      this._tla.internalValue = value.tla;
    }
  }

  // libs - computed: false, optional: true, required: false
  private _libs?: string[]; 
  public get libs() {
    return this.getListAttribute('libs');
  }
  public set libs(value: string[]) {
    this._libs = value;
  }
  public resetLibs() {
    this._libs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libsInput() {
    return this._libs;
  }

  // ext_var - computed: false, optional: true, required: false
  private _extVar = new ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVarList(this, "ext_var", false);
  public get extVar() {
    return this._extVar;
  }
  public putExtVar(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable) {
    this._extVar.internalValue = value;
  }
  public resetExtVar() {
    this._extVar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarInput() {
    return this._extVar.internalValue;
  }

  // tla - computed: false, optional: true, required: false
  private _tla = new ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTlaList(this, "tla", true);
  public get tla() {
    return this._tla;
  }
  public putTla(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable) {
    this._tla.internalValue = value;
  }
  public resetTla() {
    this._tla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlaInput() {
    return this._tla.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectory {
  /**
  * Glob pattern to match paths against that should be explicitly excluded from being used during manifest generation. This takes precedence over the `include` field. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{config.yaml,env-use2/*}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#exclude ApplicationSet#exclude}
  */
  readonly exclude?: string;
  /**
  * Glob pattern to match paths against that should be explicitly included during manifest generation. If this field is set, only matching manifests will be included. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{*.yml,*.yaml}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#include ApplicationSet#include}
  */
  readonly include?: string;
  /**
  * Whether to scan a directory recursively for manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#recurse ApplicationSet#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
  /**
  * jsonnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jsonnet ApplicationSet#jsonnet}
  */
  readonly jsonnet?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnet;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    jsonnet: applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetToTerraform(struct!.jsonnet),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jsonnet: {
      value: applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
      this._recurse = undefined;
      this._jsonnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
      this._recurse = value.recurse;
      this._jsonnet.internalValue = value.jsonnet;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryJsonnet) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameter {
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name: string;
  /**
  * Path to the file containing the values for the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path: string;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameterToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameterOutputReference {
    return new ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameter {
  /**
  * Determines whether to tell Helm to interpret booleans and numbers as strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#force_string ApplicationSet#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameterToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_string: cdktf.booleanToTerraform(struct!.forceString),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_string: {
      value: cdktf.booleanToHclTerraform(struct!.forceString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceString !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceString = this._forceString;
    }
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

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceString = undefined;
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
      this._forceString = value.forceString;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // force_string - computed: false, optional: true, required: false
  private _forceString?: boolean | cdktf.IResolvable; 
  public get forceString() {
    return this.getBooleanAttribute('force_string');
  }
  public set forceString(value: boolean | cdktf.IResolvable) {
    this._forceString = value;
  }
  public resetForceString() {
    this._forceString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStringInput() {
    return this._forceString;
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

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameterOutputReference {
    return new ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelm {
  /**
  * Prevents 'helm template' from failing when `value_files` do not exist locally by not appending them to 'helm template --values'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_missing_value_files ApplicationSet#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * If true then adds '--pass-credentials' to Helm commands to pass credentials to all domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#pass_credentials ApplicationSet#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * Helm release name. If omitted it will use the application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#release_name ApplicationSet#release_name}
  */
  readonly releaseName?: string;
  /**
  * Whether to skip custom resource definition installation step (Helm's [--skip-crds](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#skip_crds ApplicationSet#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * List of Helm value files to use when generating a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value_files ApplicationSet#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Helm values to be passed to 'helm template', typically defined as a block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: string;
  /**
  * The Helm version to use for templating. Accepts either `v2` or `v3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * file_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#file_parameter ApplicationSet#file_parameter}
  */
  readonly fileParameter?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#parameter ApplicationSet#parameter}
  */
  readonly parameter?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameter[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSourceHelmToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    version: cdktf.stringToTerraform(struct!.version),
    file_parameter: cdktf.listMapper(applicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameterToTerraform, true)(struct!.fileParameter),
    parameter: cdktf.listMapper(applicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameterToTerraform, true)(struct!.parameter),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSourceHelmToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.passCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_crds: {
      value: cdktf.booleanToHclTerraform(struct!.skipCrds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
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
    file_parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameterToHclTerraform, true)(struct!.fileParameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameterList",
    },
    parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
    }
    if (this._passCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.passCredentials = this._passCredentials;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    if (this._skipCrds !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCrds = this._skipCrds;
    }
    if (this._valueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFiles = this._valueFiles;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._fileParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameter = this._fileParameter?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreMissingValueFiles = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._version = undefined;
      this._fileParameter.internalValue = undefined;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._version = value.version;
      this._fileParameter.internalValue = value.fileParameter;
      this._parameter.internalValue = value.parameter;
    }
  }

  // ignore_missing_value_files - computed: false, optional: true, required: false
  private _ignoreMissingValueFiles?: boolean | cdktf.IResolvable; 
  public get ignoreMissingValueFiles() {
    return this.getBooleanAttribute('ignore_missing_value_files');
  }
  public set ignoreMissingValueFiles(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingValueFiles = value;
  }
  public resetIgnoreMissingValueFiles() {
    this._ignoreMissingValueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingValueFilesInput() {
    return this._ignoreMissingValueFiles;
  }

  // pass_credentials - computed: false, optional: true, required: false
  private _passCredentials?: boolean | cdktf.IResolvable; 
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }
  public set passCredentials(value: boolean | cdktf.IResolvable) {
    this._passCredentials = value;
  }
  public resetPassCredentials() {
    this._passCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passCredentialsInput() {
    return this._passCredentials;
  }

  // release_name - computed: false, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktf.IResolvable; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }
  public set skipCrds(value: boolean | cdktf.IResolvable) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds;
  }

  // value_files - computed: false, optional: true, required: false
  private _valueFiles?: string[]; 
  public get valueFiles() {
    return this.getListAttribute('value_files');
  }
  public set valueFiles(value: string[]) {
    this._valueFiles = value;
  }
  public resetValueFiles() {
    this._valueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFilesInput() {
    return this._valueFiles;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // file_parameter - computed: false, optional: true, required: false
  private _fileParameter = new ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameterList(this, "file_parameter", true);
  public get fileParameter() {
    return this._fileParameter;
  }
  public putFileParameter(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable) {
    this._fileParameter.internalValue = value;
  }
  public resetFileParameter() {
    this._fileParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParameterInput() {
    return this._fileParameter.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTarget {
  /**
  * Annotation selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotation_selector ApplicationSet#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * Label selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#label_selector ApplicationSet#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * The Kubernetes resource Version to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTargetToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: cdktf.stringToTerraform(struct!.annotationSelector),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: cdktf.stringToHclTerraform(struct!.annotationSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
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

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotationSelector = value.annotationSelector;
      this._group = value.group;
      this._kind = value.kind;
      this._labelSelector = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector?: string; 
  public get annotationSelector() {
    return this.getStringAttribute('annotation_selector');
  }
  public set annotationSelector(value: string) {
    this._annotationSelector = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
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
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatches {
  /**
  * Additional [options](https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/patches/#name-and-kind-changes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#options ApplicationSet#options}
  */
  readonly options?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Inline Kustomize patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patch ApplicationSet#patch}
  */
  readonly patch?: string;
  /**
  * Path to a file containing the patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target ApplicationSet#target}
  */
  readonly target: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTarget;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: applicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "booleanMap",
    },
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
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
    target: {
      value: applicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
      this._patch = undefined;
      this._path = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
      this._patch = value.patch;
      this._path = value.path;
      this._target.internalValue = value.target;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get options() {
    return this.getBooleanMapAttribute('options');
  }
  public set options(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // target - computed: false, optional: false, required: true
  private _target = new ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesOutputReference {
    return new ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomize {
  /**
  * List of additional annotations to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_annotations ApplicationSet#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * List of additional labels to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_labels ApplicationSet#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * List of Kustomize image override specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#images ApplicationSet#images}
  */
  readonly images?: string[];
  /**
  * Prefix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_prefix ApplicationSet#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Suffix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_suffix ApplicationSet#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Version of Kustomize to use for rendering manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * patches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patches ApplicationSet#patches}
  */
  readonly patches?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSourceKustomizeToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    version: cdktf.stringToTerraform(struct!.version),
    patches: cdktf.listMapper(applicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesToTerraform, true)(struct!.patches),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSourceKustomizeToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.nameSuffix),
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
    patches: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesToHclTerraform, true)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonAnnotations = undefined;
      this._commonLabels = undefined;
      this._images = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._version = undefined;
      this._patches.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonAnnotations = value.commonAnnotations;
      this._commonLabels = value.commonLabels;
      this._images = value.images;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._version = value.version;
      this._patches.internalValue = value.patches;
    }
  }

  // common_annotations - computed: false, optional: true, required: false
  private _commonAnnotations?: { [key: string]: string }; 
  public get commonAnnotations() {
    return this.getStringMapAttribute('common_annotations');
  }
  public set commonAnnotations(value: { [key: string]: string }) {
    this._commonAnnotations = value;
  }
  public resetCommonAnnotations() {
    this._commonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsInput() {
    return this._commonAnnotations;
  }

  // common_labels - computed: false, optional: true, required: false
  private _commonLabels?: { [key: string]: string }; 
  public get commonLabels() {
    return this.getStringMapAttribute('common_labels');
  }
  public set commonLabels(value: { [key: string]: string }) {
    this._commonLabels = value;
  }
  public resetCommonLabels() {
    this._commonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonLabelsInput() {
    return this._commonLabels;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return cdktf.Fn.tolist(this.getListAttribute('images'));
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // patches - computed: false, optional: true, required: false
  private _patches = new ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnv {
  /**
  * Name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnvToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnvToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnvList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnv[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnvOutputReference {
    return new ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSourcePlugin {
  /**
  * Name of the plugin. Only set the plugin name if the plugin is defined in `argocd-cm`. If the plugin is defined as a sidecar, omit the name. The plugin will be automatically matched with the Application according to the plugin's discovery rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#env ApplicationSet#env}
  */
  readonly env?: ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnv[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSourcePluginToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSourcePlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    env: cdktf.listMapper(applicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnvToTerraform, true)(struct!.env),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSourcePluginToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSourcePlugin): any {
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
    env: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSourcePlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourcePlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._env.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._env.internalValue = value.env;
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

  // env - computed: false, optional: true, required: false
  private _env = new ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSource {
  /**
  * Helm chart name. Must be specified for applications sourced from a Helm repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#chart ApplicationSet#chart}
  */
  readonly chart?: string;
  /**
  * Name is used to refer to a source and is displayed in the UI. It is supported in multi-source Applications since version 2.14
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Directory path within the repository. Only valid for applications sourced from Git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * Reference to another `source` within defined sources. See associated documentation on [Helm value files from external Git repository](https://argo-cd.readthedocs.io/en/stable/user-guide/multiple_sources/#helm-value-files-from-external-git-repository) regarding combining `ref` with `path` and/or `chart`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ref ApplicationSet#ref}
  */
  readonly ref?: string;
  /**
  * URL to the repository (Git or Helm) that contains the application manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#repo_url ApplicationSet#repo_url}
  */
  readonly repoUrl?: string;
  /**
  * Revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target_revision ApplicationSet#target_revision}
  */
  readonly targetRevision?: string;
  /**
  * directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#directory ApplicationSet#directory}
  */
  readonly directory?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectory;
  /**
  * helm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#helm ApplicationSet#helm}
  */
  readonly helm?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelm;
  /**
  * kustomize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kustomize ApplicationSet#kustomize}
  */
  readonly kustomize?: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomize;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#plugin ApplicationSet#plugin}
  */
  readonly plugin?: ApplicationSetSpecGeneratorClustersTemplateSpecSourcePlugin;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSourceToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
    directory: applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryToTerraform(struct!.directory),
    helm: applicationSetSpecGeneratorClustersTemplateSpecSourceHelmToTerraform(struct!.helm),
    kustomize: applicationSetSpecGeneratorClustersTemplateSpecSourceKustomizeToTerraform(struct!.kustomize),
    plugin: applicationSetSpecGeneratorClustersTemplateSpecSourcePluginToTerraform(struct!.plugin),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSourceToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_revision: {
      value: cdktf.stringToHclTerraform(struct!.targetRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: applicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryList",
    },
    helm: {
      value: applicationSetSpecGeneratorClustersTemplateSpecSourceHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmList",
    },
    kustomize: {
      value: applicationSetSpecGeneratorClustersTemplateSpecSourceKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizeList",
    },
    plugin: {
      value: applicationSetSpecGeneratorClustersTemplateSpecSourcePluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._targetRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRevision = this._targetRevision;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._helm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helm = this._helm?.internalValue;
    }
    if (this._kustomize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomize = this._kustomize?.internalValue;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._plugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._name = value.name;
      this._path = value.path;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._kustomize.internalValue = value.kustomize;
      this._plugin.internalValue = value.plugin;
    }
  }

  // chart - computed: false, optional: true, required: false
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  public resetChart() {
    this._chart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repo_url - computed: false, optional: true, required: false
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  public resetRepoUrl() {
    this._repoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // target_revision - computed: false, optional: true, required: false
  private _targetRevision?: string; 
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
  public set targetRevision(value: string) {
    this._targetRevision = value;
  }
  public resetTargetRevision() {
    this._targetRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRevisionInput() {
    return this._targetRevision;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // helm - computed: false, optional: true, required: false
  private _helm = new ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceHelm) {
    this._helm.internalValue = value;
  }
  public resetHelm() {
    this._helm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmInput() {
    return this._helm.internalValue;
  }

  // kustomize - computed: false, optional: true, required: false
  private _kustomize = new ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourceKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new ApplicationSetSpecGeneratorClustersTemplateSpecSourcePluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: ApplicationSetSpecGeneratorClustersTemplateSpecSourcePlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSourceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClustersTemplateSpecSource[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClustersTemplateSpecSourceOutputReference {
    return new ApplicationSetSpecGeneratorClustersTemplateSpecSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomated {
  /**
  * Allows apps have zero live resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#allow_empty ApplicationSet#allow_empty}
  */
  readonly allowEmpty?: boolean | cdktf.IResolvable;
  /**
  * Whether to delete resources from the cluster that are not found in the sources anymore as part of automated sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#prune ApplicationSet#prune}
  */
  readonly prune?: boolean | cdktf.IResolvable;
  /**
  * Whether to revert resources back to their desired state upon modification in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#self_heal ApplicationSet#self_heal}
  */
  readonly selfHeal?: boolean | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomatedToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_empty: cdktf.booleanToTerraform(struct!.allowEmpty),
    prune: cdktf.booleanToTerraform(struct!.prune),
    self_heal: cdktf.booleanToTerraform(struct!.selfHeal),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomatedToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_empty: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prune: {
      value: cdktf.booleanToHclTerraform(struct!.prune),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    self_heal: {
      value: cdktf.booleanToHclTerraform(struct!.selfHeal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmpty = this._allowEmpty;
    }
    if (this._prune !== undefined) {
      hasAnyValues = true;
      internalValueResult.prune = this._prune;
    }
    if (this._selfHeal !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfHeal = this._selfHeal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowEmpty = undefined;
      this._prune = undefined;
      this._selfHeal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowEmpty = value.allowEmpty;
      this._prune = value.prune;
      this._selfHeal = value.selfHeal;
    }
  }

  // allow_empty - computed: false, optional: true, required: false
  private _allowEmpty?: boolean | cdktf.IResolvable; 
  public get allowEmpty() {
    return this.getBooleanAttribute('allow_empty');
  }
  public set allowEmpty(value: boolean | cdktf.IResolvable) {
    this._allowEmpty = value;
  }
  public resetAllowEmpty() {
    this._allowEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyInput() {
    return this._allowEmpty;
  }

  // prune - computed: false, optional: true, required: false
  private _prune?: boolean | cdktf.IResolvable; 
  public get prune() {
    return this.getBooleanAttribute('prune');
  }
  public set prune(value: boolean | cdktf.IResolvable) {
    this._prune = value;
  }
  public resetPrune() {
    this._prune = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pruneInput() {
    return this._prune;
  }

  // self_heal - computed: false, optional: true, required: false
  private _selfHeal?: boolean | cdktf.IResolvable; 
  public get selfHeal() {
    return this.getBooleanAttribute('self_heal');
  }
  public set selfHeal(value: boolean | cdktf.IResolvable) {
    this._selfHeal = value;
  }
  public resetSelfHeal() {
    this._selfHeal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfHealInput() {
    return this._selfHeal;
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadata {
  /**
  * Annotations to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
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
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoff {
  /**
  * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#duration ApplicationSet#duration}
  */
  readonly duration?: string;
  /**
  * Factor to multiply the base duration after each failed retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#factor ApplicationSet#factor}
  */
  readonly factor?: string;
  /**
  * Maximum amount of time allowed for the backoff strategy. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#max_duration ApplicationSet#max_duration}
  */
  readonly maxDuration?: string;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoffToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    factor: cdktf.stringToTerraform(struct!.factor),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    factor: {
      value: cdktf.stringToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._factor !== undefined) {
      hasAnyValues = true;
      internalValueResult.factor = this._factor;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._factor = undefined;
      this._maxDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._factor = value.factor;
      this._maxDuration = value.maxDuration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // factor - computed: false, optional: true, required: false
  private _factor?: string; 
  public get factor() {
    return this.getStringAttribute('factor');
  }
  public set factor(value: string) {
    this._factor = value;
  }
  public resetFactor() {
    this._factor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorInput() {
    return this._factor;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetry {
  /**
  * Maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#limit ApplicationSet#limit}
  */
  readonly limit?: string;
  /**
  * backoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#backoff ApplicationSet#backoff}
  */
  readonly backoff?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoff;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    backoff: applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoffToTerraform(struct!.backoff),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backoff: {
      value: applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct!.backoff),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._backoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoff = this._backoff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
      this._backoff.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
      this._backoff.internalValue = value.backoff;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff = new ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoffOutputReference(this, "backoff");
  public get backoff() {
    return this._backoff;
  }
  public putBackoff(value: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryBackoff) {
    this._backoff.internalValue = value;
  }
  public resetBackoff() {
    this._backoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicy {
  /**
  * List of sync options. More info: https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_options ApplicationSet#sync_options}
  */
  readonly syncOptions?: string[];
  /**
  * automated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#automated ApplicationSet#automated}
  */
  readonly automated?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomated;
  /**
  * managed_namespace_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_namespace_metadata ApplicationSet#managed_namespace_metadata}
  */
  readonly managedNamespaceMetadata?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadata;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#retry ApplicationSet#retry}
  */
  readonly retry?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetry;
}

export function applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncOptions),
    automated: applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomatedToTerraform(struct!.automated),
    managed_namespace_metadata: applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct!.managedNamespaceMetadata),
    retry: applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryToTerraform(struct!.retry),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    automated: {
      value: applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomatedToHclTerraform(struct!.automated),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomatedList",
    },
    managed_namespace_metadata: {
      value: applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct!.managedNamespaceMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadataList",
    },
    retry: {
      value: applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOptions = this._syncOptions;
    }
    if (this._automated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automated = this._automated?.internalValue;
    }
    if (this._managedNamespaceMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedNamespaceMetadata = this._managedNamespaceMetadata?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._syncOptions = undefined;
      this._automated.internalValue = undefined;
      this._managedNamespaceMetadata.internalValue = undefined;
      this._retry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._syncOptions = value.syncOptions;
      this._automated.internalValue = value.automated;
      this._managedNamespaceMetadata.internalValue = value.managedNamespaceMetadata;
      this._retry.internalValue = value.retry;
    }
  }

  // sync_options - computed: false, optional: true, required: false
  private _syncOptions?: string[]; 
  public get syncOptions() {
    return this.getListAttribute('sync_options');
  }
  public set syncOptions(value: string[]) {
    this._syncOptions = value;
  }
  public resetSyncOptions() {
    this._syncOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOptionsInput() {
    return this._syncOptions;
  }

  // automated - computed: false, optional: true, required: false
  private _automated = new ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomatedOutputReference(this, "automated");
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyAutomated) {
    this._automated.internalValue = value;
  }
  public resetAutomated() {
    this._automated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedInput() {
    return this._automated.internalValue;
  }

  // managed_namespace_metadata - computed: false, optional: true, required: false
  private _managedNamespaceMetadata = new ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference(this, "managed_namespace_metadata");
  public get managedNamespaceMetadata() {
    return this._managedNamespaceMetadata;
  }
  public putManagedNamespaceMetadata(value: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyManagedNamespaceMetadata) {
    this._managedNamespaceMetadata.internalValue = value;
  }
  public resetManagedNamespaceMetadata() {
    this._managedNamespaceMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedNamespaceMetadataInput() {
    return this._managedNamespaceMetadata.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplateSpec {
  /**
  * The project the application belongs to. Defaults to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#project ApplicationSet#project}
  */
  readonly project?: string;
  /**
  * Limits the number of items kept in the application's revision history, which is used for informational purposes as well as for rollbacks to previous versions. This should only be changed in exceptional circumstances. Setting to zero will store no history. This will reduce storage used. Increasing will increase the space used to store the history, so we do not recommend increasing it. Default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#revision_history_limit ApplicationSet#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#destination ApplicationSet#destination}
  */
  readonly destination?: ApplicationSetSpecGeneratorClustersTemplateSpecDestination;
  /**
  * ignore_difference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_difference ApplicationSet#ignore_difference}
  */
  readonly ignoreDifference?: ApplicationSetSpecGeneratorClustersTemplateSpecIgnoreDifference[] | cdktf.IResolvable;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#info ApplicationSet#info}
  */
  readonly info?: ApplicationSetSpecGeneratorClustersTemplateSpecInfo[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#source ApplicationSet#source}
  */
  readonly source?: ApplicationSetSpecGeneratorClustersTemplateSpecSource[] | cdktf.IResolvable;
  /**
  * sync_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_policy ApplicationSet#sync_policy}
  */
  readonly syncPolicy?: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicy;
}

export function applicationSetSpecGeneratorClustersTemplateSpecToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    destination: applicationSetSpecGeneratorClustersTemplateSpecDestinationToTerraform(struct!.destination),
    ignore_difference: cdktf.listMapper(applicationSetSpecGeneratorClustersTemplateSpecIgnoreDifferenceToTerraform, true)(struct!.ignoreDifference),
    info: cdktf.listMapper(applicationSetSpecGeneratorClustersTemplateSpecInfoToTerraform, true)(struct!.info),
    source: cdktf.listMapper(applicationSetSpecGeneratorClustersTemplateSpecSourceToTerraform, true)(struct!.source),
    sync_policy: applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyToTerraform(struct!.syncPolicy),
  }
}


export function applicationSetSpecGeneratorClustersTemplateSpecToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateSpecOutputReference | ApplicationSetSpecGeneratorClustersTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination: {
      value: applicationSetSpecGeneratorClustersTemplateSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecDestinationList",
    },
    ignore_difference: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClustersTemplateSpecIgnoreDifferenceToHclTerraform, true)(struct!.ignoreDifference),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecIgnoreDifferenceList",
    },
    info: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClustersTemplateSpecInfoToHclTerraform, true)(struct!.info),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecInfoList",
    },
    source: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClustersTemplateSpecSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSourceList",
    },
    sync_policy: {
      value: applicationSetSpecGeneratorClustersTemplateSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._ignoreDifference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDifference = this._ignoreDifference?.internalValue;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._syncPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPolicy = this._syncPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._revisionHistoryLimit = undefined;
      this._destination.internalValue = undefined;
      this._ignoreDifference.internalValue = undefined;
      this._info.internalValue = undefined;
      this._source.internalValue = undefined;
      this._syncPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._destination.internalValue = value.destination;
      this._ignoreDifference.internalValue = value.ignoreDifference;
      this._info.internalValue = value.info;
      this._source.internalValue = value.source;
      this._syncPolicy.internalValue = value.syncPolicy;
    }
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // revision_history_limit - computed: false, optional: true, required: false
  private _revisionHistoryLimit?: number; 
  public get revisionHistoryLimit() {
    return this.getNumberAttribute('revision_history_limit');
  }
  public set revisionHistoryLimit(value: number) {
    this._revisionHistoryLimit = value;
  }
  public resetRevisionHistoryLimit() {
    this._revisionHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitInput() {
    return this._revisionHistoryLimit;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new ApplicationSetSpecGeneratorClustersTemplateSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ApplicationSetSpecGeneratorClustersTemplateSpecDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // ignore_difference - computed: false, optional: true, required: false
  private _ignoreDifference = new ApplicationSetSpecGeneratorClustersTemplateSpecIgnoreDifferenceList(this, "ignore_difference", false);
  public get ignoreDifference() {
    return this._ignoreDifference;
  }
  public putIgnoreDifference(value: ApplicationSetSpecGeneratorClustersTemplateSpecIgnoreDifference[] | cdktf.IResolvable) {
    this._ignoreDifference.internalValue = value;
  }
  public resetIgnoreDifference() {
    this._ignoreDifference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDifferenceInput() {
    return this._ignoreDifference.internalValue;
  }

  // info - computed: false, optional: true, required: false
  private _info = new ApplicationSetSpecGeneratorClustersTemplateSpecInfoList(this, "info", true);
  public get info() {
    return this._info;
  }
  public putInfo(value: ApplicationSetSpecGeneratorClustersTemplateSpecInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ApplicationSetSpecGeneratorClustersTemplateSpecSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: ApplicationSetSpecGeneratorClustersTemplateSpecSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sync_policy - computed: false, optional: true, required: false
  private _syncPolicy = new ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: ApplicationSetSpecGeneratorClustersTemplateSpecSyncPolicy) {
    this._syncPolicy.internalValue = value;
  }
  public resetSyncPolicy() {
    this._syncPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPolicyInput() {
    return this._syncPolicy.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClustersTemplate {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#metadata ApplicationSet#metadata}
  */
  readonly metadata?: ApplicationSetSpecGeneratorClustersTemplateMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#spec ApplicationSet#spec}
  */
  readonly spec?: ApplicationSetSpecGeneratorClustersTemplateSpec;
}

export function applicationSetSpecGeneratorClustersTemplateToTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateOutputReference | ApplicationSetSpecGeneratorClustersTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: applicationSetSpecGeneratorClustersTemplateMetadataToTerraform(struct!.metadata),
    spec: applicationSetSpecGeneratorClustersTemplateSpecToTerraform(struct!.spec),
  }
}


export function applicationSetSpecGeneratorClustersTemplateToHclTerraform(struct?: ApplicationSetSpecGeneratorClustersTemplateOutputReference | ApplicationSetSpecGeneratorClustersTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: applicationSetSpecGeneratorClustersTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateMetadataList",
    },
    spec: {
      value: applicationSetSpecGeneratorClustersTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorClustersTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClustersTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ApplicationSetSpecGeneratorClustersTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ApplicationSetSpecGeneratorClustersTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new ApplicationSetSpecGeneratorClustersTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ApplicationSetSpecGeneratorClustersTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorClusters {
  /**
  * Boolean value defaulting to `true` to indicate that this block has been added thereby allowing all other attributes to be optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#enabled ApplicationSet#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Arbitrary string key-value pairs to pass to the template via the values field of the cluster generator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: { [key: string]: string };
  /**
  * selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#selector ApplicationSet#selector}
  */
  readonly selector?: ApplicationSetSpecGeneratorClustersSelector;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#template ApplicationSet#template}
  */
  readonly template?: ApplicationSetSpecGeneratorClustersTemplate;
}

export function applicationSetSpecGeneratorClustersToTerraform(struct?: ApplicationSetSpecGeneratorClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.values),
    selector: applicationSetSpecGeneratorClustersSelectorToTerraform(struct!.selector),
    template: applicationSetSpecGeneratorClustersTemplateToTerraform(struct!.template),
  }
}


export function applicationSetSpecGeneratorClustersToHclTerraform(struct?: ApplicationSetSpecGeneratorClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    selector: {
      value: applicationSetSpecGeneratorClustersSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersSelectorList",
    },
    template: {
      value: applicationSetSpecGeneratorClustersTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._values = undefined;
      this._selector.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._values = value.values;
      this._selector.internalValue = value.selector;
      this._template.internalValue = value.template;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // values - computed: false, optional: true, required: false
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new ApplicationSetSpecGeneratorClustersSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: ApplicationSetSpecGeneratorClustersSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new ApplicationSetSpecGeneratorClustersTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: ApplicationSetSpecGeneratorClustersTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class ApplicationSetSpecGeneratorClustersList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorClusters[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorClustersOutputReference {
    return new ApplicationSetSpecGeneratorClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorGitDirectory {
  /**
  * Flag indicating whether or not the directory should be excluded when templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#exclude ApplicationSet#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Path in the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path: string;
}

export function applicationSetSpecGeneratorGitDirectoryToTerraform(struct?: ApplicationSetSpecGeneratorGitDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function applicationSetSpecGeneratorGitDirectoryToHclTerraform(struct?: ApplicationSetSpecGeneratorGitDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitDirectoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorGitDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._path = value.path;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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
}

export class ApplicationSetSpecGeneratorGitDirectoryList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorGitDirectory[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorGitDirectoryOutputReference {
    return new ApplicationSetSpecGeneratorGitDirectoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorGitFile {
  /**
  * Path to the file in the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path: string;
}

export function applicationSetSpecGeneratorGitFileToTerraform(struct?: ApplicationSetSpecGeneratorGitFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function applicationSetSpecGeneratorGitFileToHclTerraform(struct?: ApplicationSetSpecGeneratorGitFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorGitFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
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
}

export class ApplicationSetSpecGeneratorGitFileList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorGitFile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorGitFileOutputReference {
    return new ApplicationSetSpecGeneratorGitFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateMetadata {
  /**
  * An unstructured key value map that may be used to store arbitrary metadata for the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * List of finalizers to apply to the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#finalizers ApplicationSet#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorGitTemplateMetadataToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateMetadataOutputReference | ApplicationSetSpecGeneratorGitTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorGitTemplateMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateMetadataOutputReference | ApplicationSetSpecGeneratorGitTemplateMetadata): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorGitTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._finalizers = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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
export interface ApplicationSetSpecGeneratorGitTemplateSpecDestination {
  /**
  * Name of the target cluster. Can be used instead of `server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Target namespace for the application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * URL of the target cluster and must be set to the Kubernetes control plane API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#server ApplicationSet#server}
  */
  readonly server?: string;
}

export function applicationSetSpecGeneratorGitTemplateSpecDestinationToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecDestinationToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecDestination): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._server = value.server;
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecIgnoreDifference {
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * List of JQ path expression strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jq_path_expressions ApplicationSet#jq_path_expressions}
  */
  readonly jqPathExpressions?: string[];
  /**
  * List of JSONPaths strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#json_pointers ApplicationSet#json_pointers}
  */
  readonly jsonPointers?: string[];
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * List of external controller manager names whose changes to fields should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_fields_managers ApplicationSet#managed_fields_managers}
  */
  readonly managedFieldsManagers?: string[];
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorGitTemplateSpecIgnoreDifferenceToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    jq_path_expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jqPathExpressions),
    json_pointers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonPointers),
    kind: cdktf.stringToTerraform(struct!.kind),
    managed_fields_managers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedFieldsManagers),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecIgnoreDifferenceToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
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
    jq_path_expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jqPathExpressions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    json_pointers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonPointers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_fields_managers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedFieldsManagers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorGitTemplateSpecIgnoreDifferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._jqPathExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jqPathExpressions = this._jqPathExpressions;
    }
    if (this._jsonPointers !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPointers = this._jsonPointers;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._managedFieldsManagers !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFieldsManagers = this._managedFieldsManagers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._jqPathExpressions = undefined;
      this._jsonPointers = undefined;
      this._kind = undefined;
      this._managedFieldsManagers = undefined;
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
      this._group = value.group;
      this._jqPathExpressions = value.jqPathExpressions;
      this._jsonPointers = value.jsonPointers;
      this._kind = value.kind;
      this._managedFieldsManagers = value.managedFieldsManagers;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // jq_path_expressions - computed: false, optional: true, required: false
  private _jqPathExpressions?: string[]; 
  public get jqPathExpressions() {
    return cdktf.Fn.tolist(this.getListAttribute('jq_path_expressions'));
  }
  public set jqPathExpressions(value: string[]) {
    this._jqPathExpressions = value;
  }
  public resetJqPathExpressions() {
    this._jqPathExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqPathExpressionsInput() {
    return this._jqPathExpressions;
  }

  // json_pointers - computed: false, optional: true, required: false
  private _jsonPointers?: string[]; 
  public get jsonPointers() {
    return cdktf.Fn.tolist(this.getListAttribute('json_pointers'));
  }
  public set jsonPointers(value: string[]) {
    this._jsonPointers = value;
  }
  public resetJsonPointers() {
    this._jsonPointers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPointersInput() {
    return this._jsonPointers;
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

  // managed_fields_managers - computed: false, optional: true, required: false
  private _managedFieldsManagers?: string[]; 
  public get managedFieldsManagers() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_fields_managers'));
  }
  public set managedFieldsManagers(value: string[]) {
    this._managedFieldsManagers = value;
  }
  public resetManagedFieldsManagers() {
    this._managedFieldsManagers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldsManagersInput() {
    return this._managedFieldsManagers;
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

export class ApplicationSetSpecGeneratorGitTemplateSpecIgnoreDifferenceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorGitTemplateSpecIgnoreDifference[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorGitTemplateSpecIgnoreDifferenceOutputReference {
    return new ApplicationSetSpecGeneratorGitTemplateSpecIgnoreDifferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecInfo {
  /**
  * Name of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorGitTemplateSpecInfoToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecInfoToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecInfo | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorGitTemplateSpecInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecInfo | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorGitTemplateSpecInfoList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorGitTemplateSpecInfo[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorGitTemplateSpecInfoOutputReference {
    return new ApplicationSetSpecGeneratorGitTemplateSpecInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVar {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVarToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
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

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
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
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVarList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVarOutputReference {
    return new ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTla {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTlaToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
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

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
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
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTlaList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTlaOutputReference {
    return new ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnet {
  /**
  * Additional library search dirs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#libs ApplicationSet#libs}
  */
  readonly libs?: string[];
  /**
  * ext_var block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ext_var ApplicationSet#ext_var}
  */
  readonly extVar?: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable;
  /**
  * tla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#tla ApplicationSet#tla}
  */
  readonly tla?: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    ext_var: cdktf.listMapper(applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVarToTerraform, true)(struct!.extVar),
    tla: cdktf.listMapper(applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTlaToTerraform, true)(struct!.tla),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ext_var: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform, true)(struct!.extVar),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVarList",
    },
    tla: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform, true)(struct!.tla),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._extVar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVar = this._extVar?.internalValue;
    }
    if (this._tla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tla = this._tla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._libs = undefined;
      this._extVar.internalValue = undefined;
      this._tla.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._libs = value.libs;
      this._extVar.internalValue = value.extVar;
      this._tla.internalValue = value.tla;
    }
  }

  // libs - computed: false, optional: true, required: false
  private _libs?: string[]; 
  public get libs() {
    return this.getListAttribute('libs');
  }
  public set libs(value: string[]) {
    this._libs = value;
  }
  public resetLibs() {
    this._libs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libsInput() {
    return this._libs;
  }

  // ext_var - computed: false, optional: true, required: false
  private _extVar = new ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVarList(this, "ext_var", false);
  public get extVar() {
    return this._extVar;
  }
  public putExtVar(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable) {
    this._extVar.internalValue = value;
  }
  public resetExtVar() {
    this._extVar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarInput() {
    return this._extVar.internalValue;
  }

  // tla - computed: false, optional: true, required: false
  private _tla = new ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTlaList(this, "tla", true);
  public get tla() {
    return this._tla;
  }
  public putTla(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable) {
    this._tla.internalValue = value;
  }
  public resetTla() {
    this._tla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlaInput() {
    return this._tla.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectory {
  /**
  * Glob pattern to match paths against that should be explicitly excluded from being used during manifest generation. This takes precedence over the `include` field. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{config.yaml,env-use2/*}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#exclude ApplicationSet#exclude}
  */
  readonly exclude?: string;
  /**
  * Glob pattern to match paths against that should be explicitly included during manifest generation. If this field is set, only matching manifests will be included. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{*.yml,*.yaml}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#include ApplicationSet#include}
  */
  readonly include?: string;
  /**
  * Whether to scan a directory recursively for manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#recurse ApplicationSet#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
  /**
  * jsonnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jsonnet ApplicationSet#jsonnet}
  */
  readonly jsonnet?: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnet;
}

export function applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    jsonnet: applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetToTerraform(struct!.jsonnet),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jsonnet: {
      value: applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
      this._recurse = undefined;
      this._jsonnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
      this._recurse = value.recurse;
      this._jsonnet.internalValue = value.jsonnet;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryJsonnet) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameter {
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name: string;
  /**
  * Path to the file containing the values for the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path: string;
}

export function applicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameterToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameterOutputReference {
    return new ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmParameter {
  /**
  * Determines whether to tell Helm to interpret booleans and numbers as strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#force_string ApplicationSet#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorGitTemplateSpecSourceHelmParameterToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_string: cdktf.booleanToTerraform(struct!.forceString),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSourceHelmParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_string: {
      value: cdktf.booleanToHclTerraform(struct!.forceString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceString !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceString = this._forceString;
    }
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

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceString = undefined;
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
      this._forceString = value.forceString;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // force_string - computed: false, optional: true, required: false
  private _forceString?: boolean | cdktf.IResolvable; 
  public get forceString() {
    return this.getBooleanAttribute('force_string');
  }
  public set forceString(value: boolean | cdktf.IResolvable) {
    this._forceString = value;
  }
  public resetForceString() {
    this._forceString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStringInput() {
    return this._forceString;
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

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmParameterOutputReference {
    return new ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSourceHelm {
  /**
  * Prevents 'helm template' from failing when `value_files` do not exist locally by not appending them to 'helm template --values'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_missing_value_files ApplicationSet#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * If true then adds '--pass-credentials' to Helm commands to pass credentials to all domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#pass_credentials ApplicationSet#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * Helm release name. If omitted it will use the application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#release_name ApplicationSet#release_name}
  */
  readonly releaseName?: string;
  /**
  * Whether to skip custom resource definition installation step (Helm's [--skip-crds](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#skip_crds ApplicationSet#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * List of Helm value files to use when generating a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value_files ApplicationSet#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Helm values to be passed to 'helm template', typically defined as a block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: string;
  /**
  * The Helm version to use for templating. Accepts either `v2` or `v3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * file_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#file_parameter ApplicationSet#file_parameter}
  */
  readonly fileParameter?: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#parameter ApplicationSet#parameter}
  */
  readonly parameter?: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmParameter[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorGitTemplateSpecSourceHelmToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    version: cdktf.stringToTerraform(struct!.version),
    file_parameter: cdktf.listMapper(applicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameterToTerraform, true)(struct!.fileParameter),
    parameter: cdktf.listMapper(applicationSetSpecGeneratorGitTemplateSpecSourceHelmParameterToTerraform, true)(struct!.parameter),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSourceHelmToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.passCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_crds: {
      value: cdktf.booleanToHclTerraform(struct!.skipCrds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
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
    file_parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameterToHclTerraform, true)(struct!.fileParameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameterList",
    },
    parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorGitTemplateSpecSourceHelmParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSourceHelm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
    }
    if (this._passCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.passCredentials = this._passCredentials;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    if (this._skipCrds !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCrds = this._skipCrds;
    }
    if (this._valueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFiles = this._valueFiles;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._fileParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameter = this._fileParameter?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreMissingValueFiles = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._version = undefined;
      this._fileParameter.internalValue = undefined;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._version = value.version;
      this._fileParameter.internalValue = value.fileParameter;
      this._parameter.internalValue = value.parameter;
    }
  }

  // ignore_missing_value_files - computed: false, optional: true, required: false
  private _ignoreMissingValueFiles?: boolean | cdktf.IResolvable; 
  public get ignoreMissingValueFiles() {
    return this.getBooleanAttribute('ignore_missing_value_files');
  }
  public set ignoreMissingValueFiles(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingValueFiles = value;
  }
  public resetIgnoreMissingValueFiles() {
    this._ignoreMissingValueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingValueFilesInput() {
    return this._ignoreMissingValueFiles;
  }

  // pass_credentials - computed: false, optional: true, required: false
  private _passCredentials?: boolean | cdktf.IResolvable; 
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }
  public set passCredentials(value: boolean | cdktf.IResolvable) {
    this._passCredentials = value;
  }
  public resetPassCredentials() {
    this._passCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passCredentialsInput() {
    return this._passCredentials;
  }

  // release_name - computed: false, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktf.IResolvable; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }
  public set skipCrds(value: boolean | cdktf.IResolvable) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds;
  }

  // value_files - computed: false, optional: true, required: false
  private _valueFiles?: string[]; 
  public get valueFiles() {
    return this.getListAttribute('value_files');
  }
  public set valueFiles(value: string[]) {
    this._valueFiles = value;
  }
  public resetValueFiles() {
    this._valueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFilesInput() {
    return this._valueFiles;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // file_parameter - computed: false, optional: true, required: false
  private _fileParameter = new ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameterList(this, "file_parameter", true);
  public get fileParameter() {
    return this._fileParameter;
  }
  public putFileParameter(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable) {
    this._fileParameter.internalValue = value;
  }
  public resetFileParameter() {
    this._fileParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParameterInput() {
    return this._fileParameter.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTarget {
  /**
  * Annotation selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotation_selector ApplicationSet#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * Label selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#label_selector ApplicationSet#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * The Kubernetes resource Version to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
}

export function applicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTargetToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: cdktf.stringToTerraform(struct!.annotationSelector),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: cdktf.stringToHclTerraform(struct!.annotationSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
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

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotationSelector = value.annotationSelector;
      this._group = value.group;
      this._kind = value.kind;
      this._labelSelector = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector?: string; 
  public get annotationSelector() {
    return this.getStringAttribute('annotation_selector');
  }
  public set annotationSelector(value: string) {
    this._annotationSelector = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
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
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatches {
  /**
  * Additional [options](https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/patches/#name-and-kind-changes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#options ApplicationSet#options}
  */
  readonly options?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Inline Kustomize patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patch ApplicationSet#patch}
  */
  readonly patch?: string;
  /**
  * Path to a file containing the patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target ApplicationSet#target}
  */
  readonly target: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTarget;
}

export function applicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: applicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "booleanMap",
    },
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
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
    target: {
      value: applicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
      this._patch = undefined;
      this._path = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
      this._patch = value.patch;
      this._path = value.path;
      this._target.internalValue = value.target;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get options() {
    return this.getBooleanMapAttribute('options');
  }
  public set options(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // target - computed: false, optional: false, required: true
  private _target = new ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesOutputReference {
    return new ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomize {
  /**
  * List of additional annotations to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_annotations ApplicationSet#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * List of additional labels to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_labels ApplicationSet#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * List of Kustomize image override specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#images ApplicationSet#images}
  */
  readonly images?: string[];
  /**
  * Prefix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_prefix ApplicationSet#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Suffix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_suffix ApplicationSet#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Version of Kustomize to use for rendering manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * patches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patches ApplicationSet#patches}
  */
  readonly patches?: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorGitTemplateSpecSourceKustomizeToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    version: cdktf.stringToTerraform(struct!.version),
    patches: cdktf.listMapper(applicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesToTerraform, true)(struct!.patches),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSourceKustomizeToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.nameSuffix),
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
    patches: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesToHclTerraform, true)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonAnnotations = undefined;
      this._commonLabels = undefined;
      this._images = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._version = undefined;
      this._patches.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonAnnotations = value.commonAnnotations;
      this._commonLabels = value.commonLabels;
      this._images = value.images;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._version = value.version;
      this._patches.internalValue = value.patches;
    }
  }

  // common_annotations - computed: false, optional: true, required: false
  private _commonAnnotations?: { [key: string]: string }; 
  public get commonAnnotations() {
    return this.getStringMapAttribute('common_annotations');
  }
  public set commonAnnotations(value: { [key: string]: string }) {
    this._commonAnnotations = value;
  }
  public resetCommonAnnotations() {
    this._commonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsInput() {
    return this._commonAnnotations;
  }

  // common_labels - computed: false, optional: true, required: false
  private _commonLabels?: { [key: string]: string }; 
  public get commonLabels() {
    return this.getStringMapAttribute('common_labels');
  }
  public set commonLabels(value: { [key: string]: string }) {
    this._commonLabels = value;
  }
  public resetCommonLabels() {
    this._commonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonLabelsInput() {
    return this._commonLabels;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return cdktf.Fn.tolist(this.getListAttribute('images'));
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // patches - computed: false, optional: true, required: false
  private _patches = new ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginEnv {
  /**
  * Name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorGitTemplateSpecSourcePluginEnvToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSourcePluginEnvToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginEnvList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginEnv[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginEnvOutputReference {
    return new ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSourcePlugin {
  /**
  * Name of the plugin. Only set the plugin name if the plugin is defined in `argocd-cm`. If the plugin is defined as a sidecar, omit the name. The plugin will be automatically matched with the Application according to the plugin's discovery rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#env ApplicationSet#env}
  */
  readonly env?: ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginEnv[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorGitTemplateSpecSourcePluginToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSourcePlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    env: cdktf.listMapper(applicationSetSpecGeneratorGitTemplateSpecSourcePluginEnvToTerraform, true)(struct!.env),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSourcePluginToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSourcePlugin): any {
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
    env: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorGitTemplateSpecSourcePluginEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSourcePlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSourcePlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._env.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._env.internalValue = value.env;
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

  // env - computed: false, optional: true, required: false
  private _env = new ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSource {
  /**
  * Helm chart name. Must be specified for applications sourced from a Helm repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#chart ApplicationSet#chart}
  */
  readonly chart?: string;
  /**
  * Name is used to refer to a source and is displayed in the UI. It is supported in multi-source Applications since version 2.14
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Directory path within the repository. Only valid for applications sourced from Git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * Reference to another `source` within defined sources. See associated documentation on [Helm value files from external Git repository](https://argo-cd.readthedocs.io/en/stable/user-guide/multiple_sources/#helm-value-files-from-external-git-repository) regarding combining `ref` with `path` and/or `chart`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ref ApplicationSet#ref}
  */
  readonly ref?: string;
  /**
  * URL to the repository (Git or Helm) that contains the application manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#repo_url ApplicationSet#repo_url}
  */
  readonly repoUrl?: string;
  /**
  * Revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target_revision ApplicationSet#target_revision}
  */
  readonly targetRevision?: string;
  /**
  * directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#directory ApplicationSet#directory}
  */
  readonly directory?: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectory;
  /**
  * helm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#helm ApplicationSet#helm}
  */
  readonly helm?: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelm;
  /**
  * kustomize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kustomize ApplicationSet#kustomize}
  */
  readonly kustomize?: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomize;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#plugin ApplicationSet#plugin}
  */
  readonly plugin?: ApplicationSetSpecGeneratorGitTemplateSpecSourcePlugin;
}

export function applicationSetSpecGeneratorGitTemplateSpecSourceToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
    directory: applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryToTerraform(struct!.directory),
    helm: applicationSetSpecGeneratorGitTemplateSpecSourceHelmToTerraform(struct!.helm),
    kustomize: applicationSetSpecGeneratorGitTemplateSpecSourceKustomizeToTerraform(struct!.kustomize),
    plugin: applicationSetSpecGeneratorGitTemplateSpecSourcePluginToTerraform(struct!.plugin),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSourceToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_revision: {
      value: cdktf.stringToHclTerraform(struct!.targetRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: applicationSetSpecGeneratorGitTemplateSpecSourceDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryList",
    },
    helm: {
      value: applicationSetSpecGeneratorGitTemplateSpecSourceHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmList",
    },
    kustomize: {
      value: applicationSetSpecGeneratorGitTemplateSpecSourceKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizeList",
    },
    plugin: {
      value: applicationSetSpecGeneratorGitTemplateSpecSourcePluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._targetRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRevision = this._targetRevision;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._helm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helm = this._helm?.internalValue;
    }
    if (this._kustomize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomize = this._kustomize?.internalValue;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._plugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._name = value.name;
      this._path = value.path;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._kustomize.internalValue = value.kustomize;
      this._plugin.internalValue = value.plugin;
    }
  }

  // chart - computed: false, optional: true, required: false
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  public resetChart() {
    this._chart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repo_url - computed: false, optional: true, required: false
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  public resetRepoUrl() {
    this._repoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // target_revision - computed: false, optional: true, required: false
  private _targetRevision?: string; 
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
  public set targetRevision(value: string) {
    this._targetRevision = value;
  }
  public resetTargetRevision() {
    this._targetRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRevisionInput() {
    return this._targetRevision;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // helm - computed: false, optional: true, required: false
  private _helm = new ApplicationSetSpecGeneratorGitTemplateSpecSourceHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceHelm) {
    this._helm.internalValue = value;
  }
  public resetHelm() {
    this._helm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmInput() {
    return this._helm.internalValue;
  }

  // kustomize - computed: false, optional: true, required: false
  private _kustomize = new ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: ApplicationSetSpecGeneratorGitTemplateSpecSourceKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new ApplicationSetSpecGeneratorGitTemplateSpecSourcePluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: ApplicationSetSpecGeneratorGitTemplateSpecSourcePlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSourceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorGitTemplateSpecSource[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorGitTemplateSpecSourceOutputReference {
    return new ApplicationSetSpecGeneratorGitTemplateSpecSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomated {
  /**
  * Allows apps have zero live resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#allow_empty ApplicationSet#allow_empty}
  */
  readonly allowEmpty?: boolean | cdktf.IResolvable;
  /**
  * Whether to delete resources from the cluster that are not found in the sources anymore as part of automated sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#prune ApplicationSet#prune}
  */
  readonly prune?: boolean | cdktf.IResolvable;
  /**
  * Whether to revert resources back to their desired state upon modification in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#self_heal ApplicationSet#self_heal}
  */
  readonly selfHeal?: boolean | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomatedToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_empty: cdktf.booleanToTerraform(struct!.allowEmpty),
    prune: cdktf.booleanToTerraform(struct!.prune),
    self_heal: cdktf.booleanToTerraform(struct!.selfHeal),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomatedToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_empty: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prune: {
      value: cdktf.booleanToHclTerraform(struct!.prune),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    self_heal: {
      value: cdktf.booleanToHclTerraform(struct!.selfHeal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmpty = this._allowEmpty;
    }
    if (this._prune !== undefined) {
      hasAnyValues = true;
      internalValueResult.prune = this._prune;
    }
    if (this._selfHeal !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfHeal = this._selfHeal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowEmpty = undefined;
      this._prune = undefined;
      this._selfHeal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowEmpty = value.allowEmpty;
      this._prune = value.prune;
      this._selfHeal = value.selfHeal;
    }
  }

  // allow_empty - computed: false, optional: true, required: false
  private _allowEmpty?: boolean | cdktf.IResolvable; 
  public get allowEmpty() {
    return this.getBooleanAttribute('allow_empty');
  }
  public set allowEmpty(value: boolean | cdktf.IResolvable) {
    this._allowEmpty = value;
  }
  public resetAllowEmpty() {
    this._allowEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyInput() {
    return this._allowEmpty;
  }

  // prune - computed: false, optional: true, required: false
  private _prune?: boolean | cdktf.IResolvable; 
  public get prune() {
    return this.getBooleanAttribute('prune');
  }
  public set prune(value: boolean | cdktf.IResolvable) {
    this._prune = value;
  }
  public resetPrune() {
    this._prune = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pruneInput() {
    return this._prune;
  }

  // self_heal - computed: false, optional: true, required: false
  private _selfHeal?: boolean | cdktf.IResolvable; 
  public get selfHeal() {
    return this.getBooleanAttribute('self_heal');
  }
  public set selfHeal(value: boolean | cdktf.IResolvable) {
    this._selfHeal = value;
  }
  public resetSelfHeal() {
    this._selfHeal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfHealInput() {
    return this._selfHeal;
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadata {
  /**
  * Annotations to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function applicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
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
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoff {
  /**
  * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#duration ApplicationSet#duration}
  */
  readonly duration?: string;
  /**
  * Factor to multiply the base duration after each failed retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#factor ApplicationSet#factor}
  */
  readonly factor?: string;
  /**
  * Maximum amount of time allowed for the backoff strategy. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#max_duration ApplicationSet#max_duration}
  */
  readonly maxDuration?: string;
}

export function applicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoffToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    factor: cdktf.stringToTerraform(struct!.factor),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    factor: {
      value: cdktf.stringToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._factor !== undefined) {
      hasAnyValues = true;
      internalValueResult.factor = this._factor;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._factor = undefined;
      this._maxDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._factor = value.factor;
      this._maxDuration = value.maxDuration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // factor - computed: false, optional: true, required: false
  private _factor?: string; 
  public get factor() {
    return this.getStringAttribute('factor');
  }
  public set factor(value: string) {
    this._factor = value;
  }
  public resetFactor() {
    this._factor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorInput() {
    return this._factor;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetry {
  /**
  * Maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#limit ApplicationSet#limit}
  */
  readonly limit?: string;
  /**
  * backoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#backoff ApplicationSet#backoff}
  */
  readonly backoff?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoff;
}

export function applicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    backoff: applicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoffToTerraform(struct!.backoff),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backoff: {
      value: applicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct!.backoff),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._backoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoff = this._backoff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
      this._backoff.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
      this._backoff.internalValue = value.backoff;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff = new ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoffOutputReference(this, "backoff");
  public get backoff() {
    return this._backoff;
  }
  public putBackoff(value: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryBackoff) {
    this._backoff.internalValue = value;
  }
  public resetBackoff() {
    this._backoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicy {
  /**
  * List of sync options. More info: https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_options ApplicationSet#sync_options}
  */
  readonly syncOptions?: string[];
  /**
  * automated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#automated ApplicationSet#automated}
  */
  readonly automated?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomated;
  /**
  * managed_namespace_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_namespace_metadata ApplicationSet#managed_namespace_metadata}
  */
  readonly managedNamespaceMetadata?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadata;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#retry ApplicationSet#retry}
  */
  readonly retry?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetry;
}

export function applicationSetSpecGeneratorGitTemplateSpecSyncPolicyToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncOptions),
    automated: applicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomatedToTerraform(struct!.automated),
    managed_namespace_metadata: applicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct!.managedNamespaceMetadata),
    retry: applicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryToTerraform(struct!.retry),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecSyncPolicyToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    automated: {
      value: applicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomatedToHclTerraform(struct!.automated),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomatedList",
    },
    managed_namespace_metadata: {
      value: applicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct!.managedNamespaceMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadataList",
    },
    retry: {
      value: applicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOptions = this._syncOptions;
    }
    if (this._automated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automated = this._automated?.internalValue;
    }
    if (this._managedNamespaceMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedNamespaceMetadata = this._managedNamespaceMetadata?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._syncOptions = undefined;
      this._automated.internalValue = undefined;
      this._managedNamespaceMetadata.internalValue = undefined;
      this._retry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._syncOptions = value.syncOptions;
      this._automated.internalValue = value.automated;
      this._managedNamespaceMetadata.internalValue = value.managedNamespaceMetadata;
      this._retry.internalValue = value.retry;
    }
  }

  // sync_options - computed: false, optional: true, required: false
  private _syncOptions?: string[]; 
  public get syncOptions() {
    return this.getListAttribute('sync_options');
  }
  public set syncOptions(value: string[]) {
    this._syncOptions = value;
  }
  public resetSyncOptions() {
    this._syncOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOptionsInput() {
    return this._syncOptions;
  }

  // automated - computed: false, optional: true, required: false
  private _automated = new ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomatedOutputReference(this, "automated");
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyAutomated) {
    this._automated.internalValue = value;
  }
  public resetAutomated() {
    this._automated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedInput() {
    return this._automated.internalValue;
  }

  // managed_namespace_metadata - computed: false, optional: true, required: false
  private _managedNamespaceMetadata = new ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference(this, "managed_namespace_metadata");
  public get managedNamespaceMetadata() {
    return this._managedNamespaceMetadata;
  }
  public putManagedNamespaceMetadata(value: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyManagedNamespaceMetadata) {
    this._managedNamespaceMetadata.internalValue = value;
  }
  public resetManagedNamespaceMetadata() {
    this._managedNamespaceMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedNamespaceMetadataInput() {
    return this._managedNamespaceMetadata.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorGitTemplateSpec {
  /**
  * The project the application belongs to. Defaults to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#project ApplicationSet#project}
  */
  readonly project?: string;
  /**
  * Limits the number of items kept in the application's revision history, which is used for informational purposes as well as for rollbacks to previous versions. This should only be changed in exceptional circumstances. Setting to zero will store no history. This will reduce storage used. Increasing will increase the space used to store the history, so we do not recommend increasing it. Default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#revision_history_limit ApplicationSet#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#destination ApplicationSet#destination}
  */
  readonly destination?: ApplicationSetSpecGeneratorGitTemplateSpecDestination;
  /**
  * ignore_difference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_difference ApplicationSet#ignore_difference}
  */
  readonly ignoreDifference?: ApplicationSetSpecGeneratorGitTemplateSpecIgnoreDifference[] | cdktf.IResolvable;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#info ApplicationSet#info}
  */
  readonly info?: ApplicationSetSpecGeneratorGitTemplateSpecInfo[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#source ApplicationSet#source}
  */
  readonly source?: ApplicationSetSpecGeneratorGitTemplateSpecSource[] | cdktf.IResolvable;
  /**
  * sync_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_policy ApplicationSet#sync_policy}
  */
  readonly syncPolicy?: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicy;
}

export function applicationSetSpecGeneratorGitTemplateSpecToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecOutputReference | ApplicationSetSpecGeneratorGitTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    destination: applicationSetSpecGeneratorGitTemplateSpecDestinationToTerraform(struct!.destination),
    ignore_difference: cdktf.listMapper(applicationSetSpecGeneratorGitTemplateSpecIgnoreDifferenceToTerraform, true)(struct!.ignoreDifference),
    info: cdktf.listMapper(applicationSetSpecGeneratorGitTemplateSpecInfoToTerraform, true)(struct!.info),
    source: cdktf.listMapper(applicationSetSpecGeneratorGitTemplateSpecSourceToTerraform, true)(struct!.source),
    sync_policy: applicationSetSpecGeneratorGitTemplateSpecSyncPolicyToTerraform(struct!.syncPolicy),
  }
}


export function applicationSetSpecGeneratorGitTemplateSpecToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateSpecOutputReference | ApplicationSetSpecGeneratorGitTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination: {
      value: applicationSetSpecGeneratorGitTemplateSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecDestinationList",
    },
    ignore_difference: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorGitTemplateSpecIgnoreDifferenceToHclTerraform, true)(struct!.ignoreDifference),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecIgnoreDifferenceList",
    },
    info: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorGitTemplateSpecInfoToHclTerraform, true)(struct!.info),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecInfoList",
    },
    source: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorGitTemplateSpecSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSourceList",
    },
    sync_policy: {
      value: applicationSetSpecGeneratorGitTemplateSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._ignoreDifference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDifference = this._ignoreDifference?.internalValue;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._syncPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPolicy = this._syncPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._revisionHistoryLimit = undefined;
      this._destination.internalValue = undefined;
      this._ignoreDifference.internalValue = undefined;
      this._info.internalValue = undefined;
      this._source.internalValue = undefined;
      this._syncPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._destination.internalValue = value.destination;
      this._ignoreDifference.internalValue = value.ignoreDifference;
      this._info.internalValue = value.info;
      this._source.internalValue = value.source;
      this._syncPolicy.internalValue = value.syncPolicy;
    }
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // revision_history_limit - computed: false, optional: true, required: false
  private _revisionHistoryLimit?: number; 
  public get revisionHistoryLimit() {
    return this.getNumberAttribute('revision_history_limit');
  }
  public set revisionHistoryLimit(value: number) {
    this._revisionHistoryLimit = value;
  }
  public resetRevisionHistoryLimit() {
    this._revisionHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitInput() {
    return this._revisionHistoryLimit;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new ApplicationSetSpecGeneratorGitTemplateSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ApplicationSetSpecGeneratorGitTemplateSpecDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // ignore_difference - computed: false, optional: true, required: false
  private _ignoreDifference = new ApplicationSetSpecGeneratorGitTemplateSpecIgnoreDifferenceList(this, "ignore_difference", false);
  public get ignoreDifference() {
    return this._ignoreDifference;
  }
  public putIgnoreDifference(value: ApplicationSetSpecGeneratorGitTemplateSpecIgnoreDifference[] | cdktf.IResolvable) {
    this._ignoreDifference.internalValue = value;
  }
  public resetIgnoreDifference() {
    this._ignoreDifference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDifferenceInput() {
    return this._ignoreDifference.internalValue;
  }

  // info - computed: false, optional: true, required: false
  private _info = new ApplicationSetSpecGeneratorGitTemplateSpecInfoList(this, "info", true);
  public get info() {
    return this._info;
  }
  public putInfo(value: ApplicationSetSpecGeneratorGitTemplateSpecInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ApplicationSetSpecGeneratorGitTemplateSpecSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: ApplicationSetSpecGeneratorGitTemplateSpecSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sync_policy - computed: false, optional: true, required: false
  private _syncPolicy = new ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: ApplicationSetSpecGeneratorGitTemplateSpecSyncPolicy) {
    this._syncPolicy.internalValue = value;
  }
  public resetSyncPolicy() {
    this._syncPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPolicyInput() {
    return this._syncPolicy.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorGitTemplate {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#metadata ApplicationSet#metadata}
  */
  readonly metadata?: ApplicationSetSpecGeneratorGitTemplateMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#spec ApplicationSet#spec}
  */
  readonly spec?: ApplicationSetSpecGeneratorGitTemplateSpec;
}

export function applicationSetSpecGeneratorGitTemplateToTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateOutputReference | ApplicationSetSpecGeneratorGitTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: applicationSetSpecGeneratorGitTemplateMetadataToTerraform(struct!.metadata),
    spec: applicationSetSpecGeneratorGitTemplateSpecToTerraform(struct!.spec),
  }
}


export function applicationSetSpecGeneratorGitTemplateToHclTerraform(struct?: ApplicationSetSpecGeneratorGitTemplateOutputReference | ApplicationSetSpecGeneratorGitTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: applicationSetSpecGeneratorGitTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateMetadataList",
    },
    spec: {
      value: applicationSetSpecGeneratorGitTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorGitTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGitTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ApplicationSetSpecGeneratorGitTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ApplicationSetSpecGeneratorGitTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new ApplicationSetSpecGeneratorGitTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ApplicationSetSpecGeneratorGitTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorGit {
  /**
  * Prefix for all path-related parameter names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path_param_prefix ApplicationSet#path_param_prefix}
  */
  readonly pathParamPrefix?: string;
  /**
  * URL to the repository to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#repo_url ApplicationSet#repo_url}
  */
  readonly repoUrl: string;
  /**
  * Revision of the source repository to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#revision ApplicationSet#revision}
  */
  readonly revision?: string;
  /**
  * Arbitrary string key-value pairs to pass to the template via the values field of the git generator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: { [key: string]: string };
  /**
  * directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#directory ApplicationSet#directory}
  */
  readonly directory?: ApplicationSetSpecGeneratorGitDirectory[] | cdktf.IResolvable;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#file ApplicationSet#file}
  */
  readonly file?: ApplicationSetSpecGeneratorGitFile[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#template ApplicationSet#template}
  */
  readonly template?: ApplicationSetSpecGeneratorGitTemplate;
}

export function applicationSetSpecGeneratorGitToTerraform(struct?: ApplicationSetSpecGeneratorGit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_param_prefix: cdktf.stringToTerraform(struct!.pathParamPrefix),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    revision: cdktf.stringToTerraform(struct!.revision),
    values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.values),
    directory: cdktf.listMapper(applicationSetSpecGeneratorGitDirectoryToTerraform, true)(struct!.directory),
    file: cdktf.listMapper(applicationSetSpecGeneratorGitFileToTerraform, true)(struct!.file),
    template: applicationSetSpecGeneratorGitTemplateToTerraform(struct!.template),
  }
}


export function applicationSetSpecGeneratorGitToHclTerraform(struct?: ApplicationSetSpecGeneratorGit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path_param_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathParamPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    directory: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorGitDirectoryToHclTerraform, true)(struct!.directory),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitDirectoryList",
    },
    file: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorGitFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitFileList",
    },
    template: {
      value: applicationSetSpecGeneratorGitTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorGitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorGit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pathParamPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathParamPrefix = this._pathParamPrefix;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorGit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pathParamPrefix = undefined;
      this._repoUrl = undefined;
      this._revision = undefined;
      this._values = undefined;
      this._directory.internalValue = undefined;
      this._file.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pathParamPrefix = value.pathParamPrefix;
      this._repoUrl = value.repoUrl;
      this._revision = value.revision;
      this._values = value.values;
      this._directory.internalValue = value.directory;
      this._file.internalValue = value.file;
      this._template.internalValue = value.template;
    }
  }

  // path_param_prefix - computed: false, optional: true, required: false
  private _pathParamPrefix?: string; 
  public get pathParamPrefix() {
    return this.getStringAttribute('path_param_prefix');
  }
  public set pathParamPrefix(value: string) {
    this._pathParamPrefix = value;
  }
  public resetPathParamPrefix() {
    this._pathParamPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathParamPrefixInput() {
    return this._pathParamPrefix;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // values - computed: false, optional: true, required: false
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new ApplicationSetSpecGeneratorGitDirectoryList(this, "directory", false);
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: ApplicationSetSpecGeneratorGitDirectory[] | cdktf.IResolvable) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new ApplicationSetSpecGeneratorGitFileList(this, "file", false);
  public get file() {
    return this._file;
  }
  public putFile(value: ApplicationSetSpecGeneratorGitFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new ApplicationSetSpecGeneratorGitTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: ApplicationSetSpecGeneratorGitTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class ApplicationSetSpecGeneratorGitList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorGit[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorGitOutputReference {
    return new ApplicationSetSpecGeneratorGitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorListTemplateMetadata {
  /**
  * An unstructured key value map that may be used to store arbitrary metadata for the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * List of finalizers to apply to the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#finalizers ApplicationSet#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorListTemplateMetadataToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateMetadataOutputReference | ApplicationSetSpecGeneratorListTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorListTemplateMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateMetadataOutputReference | ApplicationSetSpecGeneratorListTemplateMetadata): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorListTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._finalizers = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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
export interface ApplicationSetSpecGeneratorListTemplateSpecDestination {
  /**
  * Name of the target cluster. Can be used instead of `server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Target namespace for the application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * URL of the target cluster and must be set to the Kubernetes control plane API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#server ApplicationSet#server}
  */
  readonly server?: string;
}

export function applicationSetSpecGeneratorListTemplateSpecDestinationToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorListTemplateSpecDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecDestinationToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorListTemplateSpecDestination): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._server = value.server;
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecIgnoreDifference {
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * List of JQ path expression strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jq_path_expressions ApplicationSet#jq_path_expressions}
  */
  readonly jqPathExpressions?: string[];
  /**
  * List of JSONPaths strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#json_pointers ApplicationSet#json_pointers}
  */
  readonly jsonPointers?: string[];
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * List of external controller manager names whose changes to fields should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_fields_managers ApplicationSet#managed_fields_managers}
  */
  readonly managedFieldsManagers?: string[];
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorListTemplateSpecIgnoreDifferenceToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    jq_path_expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jqPathExpressions),
    json_pointers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonPointers),
    kind: cdktf.stringToTerraform(struct!.kind),
    managed_fields_managers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedFieldsManagers),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecIgnoreDifferenceToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
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
    jq_path_expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jqPathExpressions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    json_pointers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonPointers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_fields_managers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedFieldsManagers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorListTemplateSpecIgnoreDifferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._jqPathExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jqPathExpressions = this._jqPathExpressions;
    }
    if (this._jsonPointers !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPointers = this._jsonPointers;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._managedFieldsManagers !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFieldsManagers = this._managedFieldsManagers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._jqPathExpressions = undefined;
      this._jsonPointers = undefined;
      this._kind = undefined;
      this._managedFieldsManagers = undefined;
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
      this._group = value.group;
      this._jqPathExpressions = value.jqPathExpressions;
      this._jsonPointers = value.jsonPointers;
      this._kind = value.kind;
      this._managedFieldsManagers = value.managedFieldsManagers;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // jq_path_expressions - computed: false, optional: true, required: false
  private _jqPathExpressions?: string[]; 
  public get jqPathExpressions() {
    return cdktf.Fn.tolist(this.getListAttribute('jq_path_expressions'));
  }
  public set jqPathExpressions(value: string[]) {
    this._jqPathExpressions = value;
  }
  public resetJqPathExpressions() {
    this._jqPathExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqPathExpressionsInput() {
    return this._jqPathExpressions;
  }

  // json_pointers - computed: false, optional: true, required: false
  private _jsonPointers?: string[]; 
  public get jsonPointers() {
    return cdktf.Fn.tolist(this.getListAttribute('json_pointers'));
  }
  public set jsonPointers(value: string[]) {
    this._jsonPointers = value;
  }
  public resetJsonPointers() {
    this._jsonPointers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPointersInput() {
    return this._jsonPointers;
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

  // managed_fields_managers - computed: false, optional: true, required: false
  private _managedFieldsManagers?: string[]; 
  public get managedFieldsManagers() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_fields_managers'));
  }
  public set managedFieldsManagers(value: string[]) {
    this._managedFieldsManagers = value;
  }
  public resetManagedFieldsManagers() {
    this._managedFieldsManagers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldsManagersInput() {
    return this._managedFieldsManagers;
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

export class ApplicationSetSpecGeneratorListTemplateSpecIgnoreDifferenceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorListTemplateSpecIgnoreDifference[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorListTemplateSpecIgnoreDifferenceOutputReference {
    return new ApplicationSetSpecGeneratorListTemplateSpecIgnoreDifferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecInfo {
  /**
  * Name of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorListTemplateSpecInfoToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecInfoToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecInfo | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorListTemplateSpecInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecInfo | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorListTemplateSpecInfoList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorListTemplateSpecInfo[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorListTemplateSpecInfoOutputReference {
    return new ApplicationSetSpecGeneratorListTemplateSpecInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVar {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVarToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
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

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
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
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

export class ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVarList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVarOutputReference {
    return new ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTla {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTlaToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
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

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
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
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

export class ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTlaList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTlaOutputReference {
    return new ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnet {
  /**
  * Additional library search dirs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#libs ApplicationSet#libs}
  */
  readonly libs?: string[];
  /**
  * ext_var block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ext_var ApplicationSet#ext_var}
  */
  readonly extVar?: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable;
  /**
  * tla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#tla ApplicationSet#tla}
  */
  readonly tla?: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    ext_var: cdktf.listMapper(applicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVarToTerraform, true)(struct!.extVar),
    tla: cdktf.listMapper(applicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTlaToTerraform, true)(struct!.tla),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ext_var: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform, true)(struct!.extVar),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVarList",
    },
    tla: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform, true)(struct!.tla),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._extVar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVar = this._extVar?.internalValue;
    }
    if (this._tla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tla = this._tla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._libs = undefined;
      this._extVar.internalValue = undefined;
      this._tla.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._libs = value.libs;
      this._extVar.internalValue = value.extVar;
      this._tla.internalValue = value.tla;
    }
  }

  // libs - computed: false, optional: true, required: false
  private _libs?: string[]; 
  public get libs() {
    return this.getListAttribute('libs');
  }
  public set libs(value: string[]) {
    this._libs = value;
  }
  public resetLibs() {
    this._libs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libsInput() {
    return this._libs;
  }

  // ext_var - computed: false, optional: true, required: false
  private _extVar = new ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVarList(this, "ext_var", false);
  public get extVar() {
    return this._extVar;
  }
  public putExtVar(value: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable) {
    this._extVar.internalValue = value;
  }
  public resetExtVar() {
    this._extVar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarInput() {
    return this._extVar.internalValue;
  }

  // tla - computed: false, optional: true, required: false
  private _tla = new ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTlaList(this, "tla", true);
  public get tla() {
    return this._tla;
  }
  public putTla(value: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable) {
    this._tla.internalValue = value;
  }
  public resetTla() {
    this._tla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlaInput() {
    return this._tla.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSourceDirectory {
  /**
  * Glob pattern to match paths against that should be explicitly excluded from being used during manifest generation. This takes precedence over the `include` field. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{config.yaml,env-use2/*}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#exclude ApplicationSet#exclude}
  */
  readonly exclude?: string;
  /**
  * Glob pattern to match paths against that should be explicitly included during manifest generation. If this field is set, only matching manifests will be included. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{*.yml,*.yaml}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#include ApplicationSet#include}
  */
  readonly include?: string;
  /**
  * Whether to scan a directory recursively for manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#recurse ApplicationSet#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
  /**
  * jsonnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jsonnet ApplicationSet#jsonnet}
  */
  readonly jsonnet?: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnet;
}

export function applicationSetSpecGeneratorListTemplateSpecSourceDirectoryToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    jsonnet: applicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetToTerraform(struct!.jsonnet),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSourceDirectoryToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jsonnet: {
      value: applicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSourceDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
      this._recurse = undefined;
      this._jsonnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
      this._recurse = value.recurse;
      this._jsonnet.internalValue = value.jsonnet;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryJsonnet) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameter {
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name: string;
  /**
  * Path to the file containing the values for the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path: string;
}

export function applicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameterToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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
}

export class ApplicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameterOutputReference {
    return new ApplicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSourceHelmParameter {
  /**
  * Determines whether to tell Helm to interpret booleans and numbers as strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#force_string ApplicationSet#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorListTemplateSpecSourceHelmParameterToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_string: cdktf.booleanToTerraform(struct!.forceString),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSourceHelmParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_string: {
      value: cdktf.booleanToHclTerraform(struct!.forceString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationSetSpecGeneratorListTemplateSpecSourceHelmParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceString !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceString = this._forceString;
    }
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

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceString = undefined;
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
      this._forceString = value.forceString;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // force_string - computed: false, optional: true, required: false
  private _forceString?: boolean | cdktf.IResolvable; 
  public get forceString() {
    return this.getBooleanAttribute('force_string');
  }
  public set forceString(value: boolean | cdktf.IResolvable) {
    this._forceString = value;
  }
  public resetForceString() {
    this._forceString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStringInput() {
    return this._forceString;
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

export class ApplicationSetSpecGeneratorListTemplateSpecSourceHelmParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorListTemplateSpecSourceHelmParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorListTemplateSpecSourceHelmParameterOutputReference {
    return new ApplicationSetSpecGeneratorListTemplateSpecSourceHelmParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSourceHelm {
  /**
  * Prevents 'helm template' from failing when `value_files` do not exist locally by not appending them to 'helm template --values'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_missing_value_files ApplicationSet#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * If true then adds '--pass-credentials' to Helm commands to pass credentials to all domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#pass_credentials ApplicationSet#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * Helm release name. If omitted it will use the application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#release_name ApplicationSet#release_name}
  */
  readonly releaseName?: string;
  /**
  * Whether to skip custom resource definition installation step (Helm's [--skip-crds](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#skip_crds ApplicationSet#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * List of Helm value files to use when generating a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value_files ApplicationSet#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Helm values to be passed to 'helm template', typically defined as a block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: string;
  /**
  * The Helm version to use for templating. Accepts either `v2` or `v3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * file_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#file_parameter ApplicationSet#file_parameter}
  */
  readonly fileParameter?: ApplicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#parameter ApplicationSet#parameter}
  */
  readonly parameter?: ApplicationSetSpecGeneratorListTemplateSpecSourceHelmParameter[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorListTemplateSpecSourceHelmToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    version: cdktf.stringToTerraform(struct!.version),
    file_parameter: cdktf.listMapper(applicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameterToTerraform, true)(struct!.fileParameter),
    parameter: cdktf.listMapper(applicationSetSpecGeneratorListTemplateSpecSourceHelmParameterToTerraform, true)(struct!.parameter),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSourceHelmToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.passCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_crds: {
      value: cdktf.booleanToHclTerraform(struct!.skipCrds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
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
    file_parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameterToHclTerraform, true)(struct!.fileParameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameterList",
    },
    parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorListTemplateSpecSourceHelmParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSourceHelmParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecSourceHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSourceHelm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
    }
    if (this._passCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.passCredentials = this._passCredentials;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    if (this._skipCrds !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCrds = this._skipCrds;
    }
    if (this._valueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFiles = this._valueFiles;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._fileParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameter = this._fileParameter?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSourceHelm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreMissingValueFiles = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._version = undefined;
      this._fileParameter.internalValue = undefined;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._version = value.version;
      this._fileParameter.internalValue = value.fileParameter;
      this._parameter.internalValue = value.parameter;
    }
  }

  // ignore_missing_value_files - computed: false, optional: true, required: false
  private _ignoreMissingValueFiles?: boolean | cdktf.IResolvable; 
  public get ignoreMissingValueFiles() {
    return this.getBooleanAttribute('ignore_missing_value_files');
  }
  public set ignoreMissingValueFiles(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingValueFiles = value;
  }
  public resetIgnoreMissingValueFiles() {
    this._ignoreMissingValueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingValueFilesInput() {
    return this._ignoreMissingValueFiles;
  }

  // pass_credentials - computed: false, optional: true, required: false
  private _passCredentials?: boolean | cdktf.IResolvable; 
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }
  public set passCredentials(value: boolean | cdktf.IResolvable) {
    this._passCredentials = value;
  }
  public resetPassCredentials() {
    this._passCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passCredentialsInput() {
    return this._passCredentials;
  }

  // release_name - computed: false, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktf.IResolvable; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }
  public set skipCrds(value: boolean | cdktf.IResolvable) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds;
  }

  // value_files - computed: false, optional: true, required: false
  private _valueFiles?: string[]; 
  public get valueFiles() {
    return this.getListAttribute('value_files');
  }
  public set valueFiles(value: string[]) {
    this._valueFiles = value;
  }
  public resetValueFiles() {
    this._valueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFilesInput() {
    return this._valueFiles;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // file_parameter - computed: false, optional: true, required: false
  private _fileParameter = new ApplicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameterList(this, "file_parameter", true);
  public get fileParameter() {
    return this._fileParameter;
  }
  public putFileParameter(value: ApplicationSetSpecGeneratorListTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable) {
    this._fileParameter.internalValue = value;
  }
  public resetFileParameter() {
    this._fileParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParameterInput() {
    return this._fileParameter.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new ApplicationSetSpecGeneratorListTemplateSpecSourceHelmParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ApplicationSetSpecGeneratorListTemplateSpecSourceHelmParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTarget {
  /**
  * Annotation selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotation_selector ApplicationSet#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * Label selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#label_selector ApplicationSet#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * The Kubernetes resource Version to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
}

export function applicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTargetToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: cdktf.stringToTerraform(struct!.annotationSelector),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: cdktf.stringToHclTerraform(struct!.annotationSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
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

export class ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotationSelector = value.annotationSelector;
      this._group = value.group;
      this._kind = value.kind;
      this._labelSelector = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector?: string; 
  public get annotationSelector() {
    return this.getStringAttribute('annotation_selector');
  }
  public set annotationSelector(value: string) {
    this._annotationSelector = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
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
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatches {
  /**
  * Additional [options](https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/patches/#name-and-kind-changes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#options ApplicationSet#options}
  */
  readonly options?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Inline Kustomize patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patch ApplicationSet#patch}
  */
  readonly patch?: string;
  /**
  * Path to a file containing the patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target ApplicationSet#target}
  */
  readonly target: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTarget;
}

export function applicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: applicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "booleanMap",
    },
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
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
    target: {
      value: applicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
      this._patch = undefined;
      this._path = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
      this._patch = value.patch;
      this._path = value.path;
      this._target.internalValue = value.target;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get options() {
    return this.getBooleanMapAttribute('options');
  }
  public set options(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // target - computed: false, optional: false, required: true
  private _target = new ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesOutputReference {
    return new ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSourceKustomize {
  /**
  * List of additional annotations to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_annotations ApplicationSet#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * List of additional labels to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_labels ApplicationSet#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * List of Kustomize image override specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#images ApplicationSet#images}
  */
  readonly images?: string[];
  /**
  * Prefix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_prefix ApplicationSet#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Suffix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_suffix ApplicationSet#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Version of Kustomize to use for rendering manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * patches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patches ApplicationSet#patches}
  */
  readonly patches?: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorListTemplateSpecSourceKustomizeToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSourceKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    version: cdktf.stringToTerraform(struct!.version),
    patches: cdktf.listMapper(applicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesToTerraform, true)(struct!.patches),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSourceKustomizeToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSourceKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.nameSuffix),
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
    patches: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesToHclTerraform, true)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSourceKustomize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonAnnotations = undefined;
      this._commonLabels = undefined;
      this._images = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._version = undefined;
      this._patches.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonAnnotations = value.commonAnnotations;
      this._commonLabels = value.commonLabels;
      this._images = value.images;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._version = value.version;
      this._patches.internalValue = value.patches;
    }
  }

  // common_annotations - computed: false, optional: true, required: false
  private _commonAnnotations?: { [key: string]: string }; 
  public get commonAnnotations() {
    return this.getStringMapAttribute('common_annotations');
  }
  public set commonAnnotations(value: { [key: string]: string }) {
    this._commonAnnotations = value;
  }
  public resetCommonAnnotations() {
    this._commonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsInput() {
    return this._commonAnnotations;
  }

  // common_labels - computed: false, optional: true, required: false
  private _commonLabels?: { [key: string]: string }; 
  public get commonLabels() {
    return this.getStringMapAttribute('common_labels');
  }
  public set commonLabels(value: { [key: string]: string }) {
    this._commonLabels = value;
  }
  public resetCommonLabels() {
    this._commonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonLabelsInput() {
    return this._commonLabels;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return cdktf.Fn.tolist(this.getListAttribute('images'));
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // patches - computed: false, optional: true, required: false
  private _patches = new ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSourcePluginEnv {
  /**
  * Name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorListTemplateSpecSourcePluginEnvToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSourcePluginEnvToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorListTemplateSpecSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorListTemplateSpecSourcePluginEnvList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorListTemplateSpecSourcePluginEnv[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorListTemplateSpecSourcePluginEnvOutputReference {
    return new ApplicationSetSpecGeneratorListTemplateSpecSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSourcePlugin {
  /**
  * Name of the plugin. Only set the plugin name if the plugin is defined in `argocd-cm`. If the plugin is defined as a sidecar, omit the name. The plugin will be automatically matched with the Application according to the plugin's discovery rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#env ApplicationSet#env}
  */
  readonly env?: ApplicationSetSpecGeneratorListTemplateSpecSourcePluginEnv[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorListTemplateSpecSourcePluginToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSourcePlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    env: cdktf.listMapper(applicationSetSpecGeneratorListTemplateSpecSourcePluginEnvToTerraform, true)(struct!.env),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSourcePluginToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSourcePlugin): any {
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
    env: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorListTemplateSpecSourcePluginEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSourcePluginEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecSourcePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSourcePlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSourcePlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._env.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._env.internalValue = value.env;
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

  // env - computed: false, optional: true, required: false
  private _env = new ApplicationSetSpecGeneratorListTemplateSpecSourcePluginEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: ApplicationSetSpecGeneratorListTemplateSpecSourcePluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSource {
  /**
  * Helm chart name. Must be specified for applications sourced from a Helm repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#chart ApplicationSet#chart}
  */
  readonly chart?: string;
  /**
  * Name is used to refer to a source and is displayed in the UI. It is supported in multi-source Applications since version 2.14
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Directory path within the repository. Only valid for applications sourced from Git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * Reference to another `source` within defined sources. See associated documentation on [Helm value files from external Git repository](https://argo-cd.readthedocs.io/en/stable/user-guide/multiple_sources/#helm-value-files-from-external-git-repository) regarding combining `ref` with `path` and/or `chart`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ref ApplicationSet#ref}
  */
  readonly ref?: string;
  /**
  * URL to the repository (Git or Helm) that contains the application manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#repo_url ApplicationSet#repo_url}
  */
  readonly repoUrl?: string;
  /**
  * Revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target_revision ApplicationSet#target_revision}
  */
  readonly targetRevision?: string;
  /**
  * directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#directory ApplicationSet#directory}
  */
  readonly directory?: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectory;
  /**
  * helm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#helm ApplicationSet#helm}
  */
  readonly helm?: ApplicationSetSpecGeneratorListTemplateSpecSourceHelm;
  /**
  * kustomize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kustomize ApplicationSet#kustomize}
  */
  readonly kustomize?: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomize;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#plugin ApplicationSet#plugin}
  */
  readonly plugin?: ApplicationSetSpecGeneratorListTemplateSpecSourcePlugin;
}

export function applicationSetSpecGeneratorListTemplateSpecSourceToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
    directory: applicationSetSpecGeneratorListTemplateSpecSourceDirectoryToTerraform(struct!.directory),
    helm: applicationSetSpecGeneratorListTemplateSpecSourceHelmToTerraform(struct!.helm),
    kustomize: applicationSetSpecGeneratorListTemplateSpecSourceKustomizeToTerraform(struct!.kustomize),
    plugin: applicationSetSpecGeneratorListTemplateSpecSourcePluginToTerraform(struct!.plugin),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSourceToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_revision: {
      value: cdktf.stringToHclTerraform(struct!.targetRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: applicationSetSpecGeneratorListTemplateSpecSourceDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryList",
    },
    helm: {
      value: applicationSetSpecGeneratorListTemplateSpecSourceHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSourceHelmList",
    },
    kustomize: {
      value: applicationSetSpecGeneratorListTemplateSpecSourceKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizeList",
    },
    plugin: {
      value: applicationSetSpecGeneratorListTemplateSpecSourcePluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSourcePluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._targetRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRevision = this._targetRevision;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._helm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helm = this._helm?.internalValue;
    }
    if (this._kustomize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomize = this._kustomize?.internalValue;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._plugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._name = value.name;
      this._path = value.path;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._kustomize.internalValue = value.kustomize;
      this._plugin.internalValue = value.plugin;
    }
  }

  // chart - computed: false, optional: true, required: false
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  public resetChart() {
    this._chart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repo_url - computed: false, optional: true, required: false
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  public resetRepoUrl() {
    this._repoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // target_revision - computed: false, optional: true, required: false
  private _targetRevision?: string; 
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
  public set targetRevision(value: string) {
    this._targetRevision = value;
  }
  public resetTargetRevision() {
    this._targetRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRevisionInput() {
    return this._targetRevision;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new ApplicationSetSpecGeneratorListTemplateSpecSourceDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: ApplicationSetSpecGeneratorListTemplateSpecSourceDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // helm - computed: false, optional: true, required: false
  private _helm = new ApplicationSetSpecGeneratorListTemplateSpecSourceHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: ApplicationSetSpecGeneratorListTemplateSpecSourceHelm) {
    this._helm.internalValue = value;
  }
  public resetHelm() {
    this._helm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmInput() {
    return this._helm.internalValue;
  }

  // kustomize - computed: false, optional: true, required: false
  private _kustomize = new ApplicationSetSpecGeneratorListTemplateSpecSourceKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: ApplicationSetSpecGeneratorListTemplateSpecSourceKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new ApplicationSetSpecGeneratorListTemplateSpecSourcePluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: ApplicationSetSpecGeneratorListTemplateSpecSourcePlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }
}

export class ApplicationSetSpecGeneratorListTemplateSpecSourceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorListTemplateSpecSource[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorListTemplateSpecSourceOutputReference {
    return new ApplicationSetSpecGeneratorListTemplateSpecSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomated {
  /**
  * Allows apps have zero live resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#allow_empty ApplicationSet#allow_empty}
  */
  readonly allowEmpty?: boolean | cdktf.IResolvable;
  /**
  * Whether to delete resources from the cluster that are not found in the sources anymore as part of automated sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#prune ApplicationSet#prune}
  */
  readonly prune?: boolean | cdktf.IResolvable;
  /**
  * Whether to revert resources back to their desired state upon modification in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#self_heal ApplicationSet#self_heal}
  */
  readonly selfHeal?: boolean | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomatedToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_empty: cdktf.booleanToTerraform(struct!.allowEmpty),
    prune: cdktf.booleanToTerraform(struct!.prune),
    self_heal: cdktf.booleanToTerraform(struct!.selfHeal),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomatedToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_empty: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prune: {
      value: cdktf.booleanToHclTerraform(struct!.prune),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    self_heal: {
      value: cdktf.booleanToHclTerraform(struct!.selfHeal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmpty = this._allowEmpty;
    }
    if (this._prune !== undefined) {
      hasAnyValues = true;
      internalValueResult.prune = this._prune;
    }
    if (this._selfHeal !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfHeal = this._selfHeal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowEmpty = undefined;
      this._prune = undefined;
      this._selfHeal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowEmpty = value.allowEmpty;
      this._prune = value.prune;
      this._selfHeal = value.selfHeal;
    }
  }

  // allow_empty - computed: false, optional: true, required: false
  private _allowEmpty?: boolean | cdktf.IResolvable; 
  public get allowEmpty() {
    return this.getBooleanAttribute('allow_empty');
  }
  public set allowEmpty(value: boolean | cdktf.IResolvable) {
    this._allowEmpty = value;
  }
  public resetAllowEmpty() {
    this._allowEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyInput() {
    return this._allowEmpty;
  }

  // prune - computed: false, optional: true, required: false
  private _prune?: boolean | cdktf.IResolvable; 
  public get prune() {
    return this.getBooleanAttribute('prune');
  }
  public set prune(value: boolean | cdktf.IResolvable) {
    this._prune = value;
  }
  public resetPrune() {
    this._prune = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pruneInput() {
    return this._prune;
  }

  // self_heal - computed: false, optional: true, required: false
  private _selfHeal?: boolean | cdktf.IResolvable; 
  public get selfHeal() {
    return this.getBooleanAttribute('self_heal');
  }
  public set selfHeal(value: boolean | cdktf.IResolvable) {
    this._selfHeal = value;
  }
  public resetSelfHeal() {
    this._selfHeal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfHealInput() {
    return this._selfHeal;
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadata {
  /**
  * Annotations to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function applicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
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
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoff {
  /**
  * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#duration ApplicationSet#duration}
  */
  readonly duration?: string;
  /**
  * Factor to multiply the base duration after each failed retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#factor ApplicationSet#factor}
  */
  readonly factor?: string;
  /**
  * Maximum amount of time allowed for the backoff strategy. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#max_duration ApplicationSet#max_duration}
  */
  readonly maxDuration?: string;
}

export function applicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoffToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    factor: cdktf.stringToTerraform(struct!.factor),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    factor: {
      value: cdktf.stringToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._factor !== undefined) {
      hasAnyValues = true;
      internalValueResult.factor = this._factor;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._factor = undefined;
      this._maxDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._factor = value.factor;
      this._maxDuration = value.maxDuration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // factor - computed: false, optional: true, required: false
  private _factor?: string; 
  public get factor() {
    return this.getStringAttribute('factor');
  }
  public set factor(value: string) {
    this._factor = value;
  }
  public resetFactor() {
    this._factor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorInput() {
    return this._factor;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetry {
  /**
  * Maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#limit ApplicationSet#limit}
  */
  readonly limit?: string;
  /**
  * backoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#backoff ApplicationSet#backoff}
  */
  readonly backoff?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoff;
}

export function applicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    backoff: applicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoffToTerraform(struct!.backoff),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backoff: {
      value: applicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct!.backoff),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._backoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoff = this._backoff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
      this._backoff.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
      this._backoff.internalValue = value.backoff;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff = new ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoffOutputReference(this, "backoff");
  public get backoff() {
    return this._backoff;
  }
  public putBackoff(value: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryBackoff) {
    this._backoff.internalValue = value;
  }
  public resetBackoff() {
    this._backoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpecSyncPolicy {
  /**
  * List of sync options. More info: https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_options ApplicationSet#sync_options}
  */
  readonly syncOptions?: string[];
  /**
  * automated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#automated ApplicationSet#automated}
  */
  readonly automated?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomated;
  /**
  * managed_namespace_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_namespace_metadata ApplicationSet#managed_namespace_metadata}
  */
  readonly managedNamespaceMetadata?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadata;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#retry ApplicationSet#retry}
  */
  readonly retry?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetry;
}

export function applicationSetSpecGeneratorListTemplateSpecSyncPolicyToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncOptions),
    automated: applicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomatedToTerraform(struct!.automated),
    managed_namespace_metadata: applicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct!.managedNamespaceMetadata),
    retry: applicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryToTerraform(struct!.retry),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecSyncPolicyToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorListTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    automated: {
      value: applicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomatedToHclTerraform(struct!.automated),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomatedList",
    },
    managed_namespace_metadata: {
      value: applicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct!.managedNamespaceMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadataList",
    },
    retry: {
      value: applicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpecSyncPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOptions = this._syncOptions;
    }
    if (this._automated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automated = this._automated?.internalValue;
    }
    if (this._managedNamespaceMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedNamespaceMetadata = this._managedNamespaceMetadata?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._syncOptions = undefined;
      this._automated.internalValue = undefined;
      this._managedNamespaceMetadata.internalValue = undefined;
      this._retry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._syncOptions = value.syncOptions;
      this._automated.internalValue = value.automated;
      this._managedNamespaceMetadata.internalValue = value.managedNamespaceMetadata;
      this._retry.internalValue = value.retry;
    }
  }

  // sync_options - computed: false, optional: true, required: false
  private _syncOptions?: string[]; 
  public get syncOptions() {
    return this.getListAttribute('sync_options');
  }
  public set syncOptions(value: string[]) {
    this._syncOptions = value;
  }
  public resetSyncOptions() {
    this._syncOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOptionsInput() {
    return this._syncOptions;
  }

  // automated - computed: false, optional: true, required: false
  private _automated = new ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomatedOutputReference(this, "automated");
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyAutomated) {
    this._automated.internalValue = value;
  }
  public resetAutomated() {
    this._automated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedInput() {
    return this._automated.internalValue;
  }

  // managed_namespace_metadata - computed: false, optional: true, required: false
  private _managedNamespaceMetadata = new ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference(this, "managed_namespace_metadata");
  public get managedNamespaceMetadata() {
    return this._managedNamespaceMetadata;
  }
  public putManagedNamespaceMetadata(value: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyManagedNamespaceMetadata) {
    this._managedNamespaceMetadata.internalValue = value;
  }
  public resetManagedNamespaceMetadata() {
    this._managedNamespaceMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedNamespaceMetadataInput() {
    return this._managedNamespaceMetadata.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorListTemplateSpec {
  /**
  * The project the application belongs to. Defaults to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#project ApplicationSet#project}
  */
  readonly project?: string;
  /**
  * Limits the number of items kept in the application's revision history, which is used for informational purposes as well as for rollbacks to previous versions. This should only be changed in exceptional circumstances. Setting to zero will store no history. This will reduce storage used. Increasing will increase the space used to store the history, so we do not recommend increasing it. Default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#revision_history_limit ApplicationSet#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#destination ApplicationSet#destination}
  */
  readonly destination?: ApplicationSetSpecGeneratorListTemplateSpecDestination;
  /**
  * ignore_difference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_difference ApplicationSet#ignore_difference}
  */
  readonly ignoreDifference?: ApplicationSetSpecGeneratorListTemplateSpecIgnoreDifference[] | cdktf.IResolvable;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#info ApplicationSet#info}
  */
  readonly info?: ApplicationSetSpecGeneratorListTemplateSpecInfo[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#source ApplicationSet#source}
  */
  readonly source?: ApplicationSetSpecGeneratorListTemplateSpecSource[] | cdktf.IResolvable;
  /**
  * sync_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_policy ApplicationSet#sync_policy}
  */
  readonly syncPolicy?: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicy;
}

export function applicationSetSpecGeneratorListTemplateSpecToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecOutputReference | ApplicationSetSpecGeneratorListTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    destination: applicationSetSpecGeneratorListTemplateSpecDestinationToTerraform(struct!.destination),
    ignore_difference: cdktf.listMapper(applicationSetSpecGeneratorListTemplateSpecIgnoreDifferenceToTerraform, true)(struct!.ignoreDifference),
    info: cdktf.listMapper(applicationSetSpecGeneratorListTemplateSpecInfoToTerraform, true)(struct!.info),
    source: cdktf.listMapper(applicationSetSpecGeneratorListTemplateSpecSourceToTerraform, true)(struct!.source),
    sync_policy: applicationSetSpecGeneratorListTemplateSpecSyncPolicyToTerraform(struct!.syncPolicy),
  }
}


export function applicationSetSpecGeneratorListTemplateSpecToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateSpecOutputReference | ApplicationSetSpecGeneratorListTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination: {
      value: applicationSetSpecGeneratorListTemplateSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecDestinationList",
    },
    ignore_difference: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorListTemplateSpecIgnoreDifferenceToHclTerraform, true)(struct!.ignoreDifference),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecIgnoreDifferenceList",
    },
    info: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorListTemplateSpecInfoToHclTerraform, true)(struct!.info),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecInfoList",
    },
    source: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorListTemplateSpecSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSourceList",
    },
    sync_policy: {
      value: applicationSetSpecGeneratorListTemplateSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._ignoreDifference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDifference = this._ignoreDifference?.internalValue;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._syncPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPolicy = this._syncPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._revisionHistoryLimit = undefined;
      this._destination.internalValue = undefined;
      this._ignoreDifference.internalValue = undefined;
      this._info.internalValue = undefined;
      this._source.internalValue = undefined;
      this._syncPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._destination.internalValue = value.destination;
      this._ignoreDifference.internalValue = value.ignoreDifference;
      this._info.internalValue = value.info;
      this._source.internalValue = value.source;
      this._syncPolicy.internalValue = value.syncPolicy;
    }
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // revision_history_limit - computed: false, optional: true, required: false
  private _revisionHistoryLimit?: number; 
  public get revisionHistoryLimit() {
    return this.getNumberAttribute('revision_history_limit');
  }
  public set revisionHistoryLimit(value: number) {
    this._revisionHistoryLimit = value;
  }
  public resetRevisionHistoryLimit() {
    this._revisionHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitInput() {
    return this._revisionHistoryLimit;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new ApplicationSetSpecGeneratorListTemplateSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ApplicationSetSpecGeneratorListTemplateSpecDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // ignore_difference - computed: false, optional: true, required: false
  private _ignoreDifference = new ApplicationSetSpecGeneratorListTemplateSpecIgnoreDifferenceList(this, "ignore_difference", false);
  public get ignoreDifference() {
    return this._ignoreDifference;
  }
  public putIgnoreDifference(value: ApplicationSetSpecGeneratorListTemplateSpecIgnoreDifference[] | cdktf.IResolvable) {
    this._ignoreDifference.internalValue = value;
  }
  public resetIgnoreDifference() {
    this._ignoreDifference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDifferenceInput() {
    return this._ignoreDifference.internalValue;
  }

  // info - computed: false, optional: true, required: false
  private _info = new ApplicationSetSpecGeneratorListTemplateSpecInfoList(this, "info", true);
  public get info() {
    return this._info;
  }
  public putInfo(value: ApplicationSetSpecGeneratorListTemplateSpecInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ApplicationSetSpecGeneratorListTemplateSpecSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: ApplicationSetSpecGeneratorListTemplateSpecSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sync_policy - computed: false, optional: true, required: false
  private _syncPolicy = new ApplicationSetSpecGeneratorListTemplateSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: ApplicationSetSpecGeneratorListTemplateSpecSyncPolicy) {
    this._syncPolicy.internalValue = value;
  }
  public resetSyncPolicy() {
    this._syncPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPolicyInput() {
    return this._syncPolicy.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorListTemplate {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#metadata ApplicationSet#metadata}
  */
  readonly metadata?: ApplicationSetSpecGeneratorListTemplateMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#spec ApplicationSet#spec}
  */
  readonly spec?: ApplicationSetSpecGeneratorListTemplateSpec;
}

export function applicationSetSpecGeneratorListTemplateToTerraform(struct?: ApplicationSetSpecGeneratorListTemplateOutputReference | ApplicationSetSpecGeneratorListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: applicationSetSpecGeneratorListTemplateMetadataToTerraform(struct!.metadata),
    spec: applicationSetSpecGeneratorListTemplateSpecToTerraform(struct!.spec),
  }
}


export function applicationSetSpecGeneratorListTemplateToHclTerraform(struct?: ApplicationSetSpecGeneratorListTemplateOutputReference | ApplicationSetSpecGeneratorListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: applicationSetSpecGeneratorListTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateMetadataList",
    },
    spec: {
      value: applicationSetSpecGeneratorListTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ApplicationSetSpecGeneratorListTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ApplicationSetSpecGeneratorListTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new ApplicationSetSpecGeneratorListTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ApplicationSetSpecGeneratorListTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorListStruct {
  /**
  * List of key/value pairs to pass as parameters into the template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#elements ApplicationSet#elements}
  */
  readonly elements: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#template ApplicationSet#template}
  */
  readonly template?: ApplicationSetSpecGeneratorListTemplate;
}

export function applicationSetSpecGeneratorListStructToTerraform(struct?: ApplicationSetSpecGeneratorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elements: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.elements),
    template: applicationSetSpecGeneratorListTemplateToTerraform(struct!.template),
  }
}


export function applicationSetSpecGeneratorListStructToHclTerraform(struct?: ApplicationSetSpecGeneratorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elements: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.elements),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    template: {
      value: applicationSetSpecGeneratorListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elements !== undefined) {
      hasAnyValues = true;
      internalValueResult.elements = this._elements;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elements = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elements = value.elements;
      this._template.internalValue = value.template;
    }
  }

  // elements - computed: false, optional: false, required: true
  private _elements?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get elements() {
    return this.interpolationForAttribute('elements');
  }
  public set elements(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._elements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements;
  }

  // template - computed: false, optional: true, required: false
  private _template = new ApplicationSetSpecGeneratorListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: ApplicationSetSpecGeneratorListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class ApplicationSetSpecGeneratorListStructList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorListStruct[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorListStructOutputReference {
    return new ApplicationSetSpecGeneratorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateMetadata {
  /**
  * An unstructured key value map that may be used to store arbitrary metadata for the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * List of finalizers to apply to the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#finalizers ApplicationSet#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorMatrixTemplateMetadataToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateMetadataOutputReference | ApplicationSetSpecGeneratorMatrixTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateMetadataOutputReference | ApplicationSetSpecGeneratorMatrixTemplateMetadata): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorMatrixTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._finalizers = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecDestination {
  /**
  * Name of the target cluster. Can be used instead of `server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Target namespace for the application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * URL of the target cluster and must be set to the Kubernetes control plane API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#server ApplicationSet#server}
  */
  readonly server?: string;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecDestinationToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecDestinationToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecDestination): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._server = value.server;
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifference {
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * List of JQ path expression strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jq_path_expressions ApplicationSet#jq_path_expressions}
  */
  readonly jqPathExpressions?: string[];
  /**
  * List of JSONPaths strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#json_pointers ApplicationSet#json_pointers}
  */
  readonly jsonPointers?: string[];
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * List of external controller manager names whose changes to fields should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_fields_managers ApplicationSet#managed_fields_managers}
  */
  readonly managedFieldsManagers?: string[];
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifferenceToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    jq_path_expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jqPathExpressions),
    json_pointers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonPointers),
    kind: cdktf.stringToTerraform(struct!.kind),
    managed_fields_managers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedFieldsManagers),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifferenceToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
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
    jq_path_expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jqPathExpressions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    json_pointers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonPointers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_fields_managers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedFieldsManagers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._jqPathExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jqPathExpressions = this._jqPathExpressions;
    }
    if (this._jsonPointers !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPointers = this._jsonPointers;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._managedFieldsManagers !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFieldsManagers = this._managedFieldsManagers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._jqPathExpressions = undefined;
      this._jsonPointers = undefined;
      this._kind = undefined;
      this._managedFieldsManagers = undefined;
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
      this._group = value.group;
      this._jqPathExpressions = value.jqPathExpressions;
      this._jsonPointers = value.jsonPointers;
      this._kind = value.kind;
      this._managedFieldsManagers = value.managedFieldsManagers;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // jq_path_expressions - computed: false, optional: true, required: false
  private _jqPathExpressions?: string[]; 
  public get jqPathExpressions() {
    return cdktf.Fn.tolist(this.getListAttribute('jq_path_expressions'));
  }
  public set jqPathExpressions(value: string[]) {
    this._jqPathExpressions = value;
  }
  public resetJqPathExpressions() {
    this._jqPathExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqPathExpressionsInput() {
    return this._jqPathExpressions;
  }

  // json_pointers - computed: false, optional: true, required: false
  private _jsonPointers?: string[]; 
  public get jsonPointers() {
    return cdktf.Fn.tolist(this.getListAttribute('json_pointers'));
  }
  public set jsonPointers(value: string[]) {
    this._jsonPointers = value;
  }
  public resetJsonPointers() {
    this._jsonPointers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPointersInput() {
    return this._jsonPointers;
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

  // managed_fields_managers - computed: false, optional: true, required: false
  private _managedFieldsManagers?: string[]; 
  public get managedFieldsManagers() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_fields_managers'));
  }
  public set managedFieldsManagers(value: string[]) {
    this._managedFieldsManagers = value;
  }
  public resetManagedFieldsManagers() {
    this._managedFieldsManagers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldsManagersInput() {
    return this._managedFieldsManagers;
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifferenceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifference[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifferenceOutputReference {
    return new ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecInfo {
  /**
  * Name of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecInfoToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecInfoToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecInfo | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecInfo | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecInfoList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMatrixTemplateSpecInfo[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMatrixTemplateSpecInfoOutputReference {
    return new ApplicationSetSpecGeneratorMatrixTemplateSpecInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVar {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVarToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
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

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
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
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVarList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVarOutputReference {
    return new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTla {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTlaToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
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

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
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
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTlaList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTlaOutputReference {
    return new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnet {
  /**
  * Additional library search dirs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#libs ApplicationSet#libs}
  */
  readonly libs?: string[];
  /**
  * ext_var block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ext_var ApplicationSet#ext_var}
  */
  readonly extVar?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable;
  /**
  * tla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#tla ApplicationSet#tla}
  */
  readonly tla?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    ext_var: cdktf.listMapper(applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVarToTerraform, true)(struct!.extVar),
    tla: cdktf.listMapper(applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTlaToTerraform, true)(struct!.tla),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ext_var: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform, true)(struct!.extVar),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVarList",
    },
    tla: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform, true)(struct!.tla),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._extVar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVar = this._extVar?.internalValue;
    }
    if (this._tla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tla = this._tla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._libs = undefined;
      this._extVar.internalValue = undefined;
      this._tla.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._libs = value.libs;
      this._extVar.internalValue = value.extVar;
      this._tla.internalValue = value.tla;
    }
  }

  // libs - computed: false, optional: true, required: false
  private _libs?: string[]; 
  public get libs() {
    return this.getListAttribute('libs');
  }
  public set libs(value: string[]) {
    this._libs = value;
  }
  public resetLibs() {
    this._libs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libsInput() {
    return this._libs;
  }

  // ext_var - computed: false, optional: true, required: false
  private _extVar = new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVarList(this, "ext_var", false);
  public get extVar() {
    return this._extVar;
  }
  public putExtVar(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable) {
    this._extVar.internalValue = value;
  }
  public resetExtVar() {
    this._extVar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarInput() {
    return this._extVar.internalValue;
  }

  // tla - computed: false, optional: true, required: false
  private _tla = new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTlaList(this, "tla", true);
  public get tla() {
    return this._tla;
  }
  public putTla(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable) {
    this._tla.internalValue = value;
  }
  public resetTla() {
    this._tla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlaInput() {
    return this._tla.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectory {
  /**
  * Glob pattern to match paths against that should be explicitly excluded from being used during manifest generation. This takes precedence over the `include` field. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{config.yaml,env-use2/*}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#exclude ApplicationSet#exclude}
  */
  readonly exclude?: string;
  /**
  * Glob pattern to match paths against that should be explicitly included during manifest generation. If this field is set, only matching manifests will be included. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{*.yml,*.yaml}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#include ApplicationSet#include}
  */
  readonly include?: string;
  /**
  * Whether to scan a directory recursively for manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#recurse ApplicationSet#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
  /**
  * jsonnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jsonnet ApplicationSet#jsonnet}
  */
  readonly jsonnet?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnet;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    jsonnet: applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetToTerraform(struct!.jsonnet),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jsonnet: {
      value: applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
      this._recurse = undefined;
      this._jsonnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
      this._recurse = value.recurse;
      this._jsonnet.internalValue = value.jsonnet;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryJsonnet) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameter {
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name: string;
  /**
  * Path to the file containing the values for the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path: string;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameterToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameterOutputReference {
    return new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
