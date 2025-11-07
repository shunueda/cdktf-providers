// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomIamRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#id CustomIamRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the iam role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#name CustomIamRole#name}
  */
  readonly name: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#meta CustomIamRole#meta}
  */
  readonly meta?: CustomIamRoleMeta;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#spec CustomIamRole#spec}
  */
  readonly spec: CustomIamRoleSpec;
}
export interface CustomIamRoleMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#annotations CustomIamRole#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#description CustomIamRole#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#labels CustomIamRole#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function customIamRoleMetaToTerraform(struct?: CustomIamRoleMetaOutputReference | CustomIamRoleMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function customIamRoleMetaToHclTerraform(struct?: CustomIamRoleMetaOutputReference | CustomIamRoleMeta): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class CustomIamRoleMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomIamRoleMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomIamRoleMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface CustomIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpression {
  /**
  * Key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#key CustomIamRole#key}
  */
  readonly key: string;
  /**
  * Operator represents a key's relationship to a set of values.
  * Valid operators are "In", "NotIn", "Exists" and "DoesNotExist".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#operator CustomIamRole#operator}
  */
  readonly operator: string;
  /**
  * Values is an array of string values.
  * If the operator is "In" or "NotIn", the values array must be non-empty.
  * If the operator is "Exists" or "DoesNotExist", the values array must be empty.
  * This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#values CustomIamRole#values}
  */
  readonly values?: string[];
}

export function customIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpressionToTerraform(struct?: CustomIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpression | cdktf.IResolvable): any {
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


export function customIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpressionToHclTerraform(struct?: CustomIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpression | cdktf.IResolvable): any {
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

export class CustomIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpression | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CustomIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpression | cdktf.IResolvable | undefined) {
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

export class CustomIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpressionList extends cdktf.ComplexList {
  public internalValue? : CustomIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpression[] | cdktf.IResolvable

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
  public get(index: number): CustomIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpressionOutputReference {
    return new CustomIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomIamRoleSpecAggregationRuleClusterRoleSelector {
  /**
  * Map of {key,value} pairs.
  * A single {key,value} in the match_labels map is equivalent to an element of match_expression, whose key field is "key", the operator is "In", and the values array contains only "value". 
  * The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#match_labels CustomIamRole#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#match_expression CustomIamRole#match_expression}
  */
  readonly matchExpression?: CustomIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpression[] | cdktf.IResolvable;
}

export function customIamRoleSpecAggregationRuleClusterRoleSelectorToTerraform(struct?: CustomIamRoleSpecAggregationRuleClusterRoleSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expression: cdktf.listMapper(customIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpressionToTerraform, true)(struct!.matchExpression),
  }
}


export function customIamRoleSpecAggregationRuleClusterRoleSelectorToHclTerraform(struct?: CustomIamRoleSpecAggregationRuleClusterRoleSelector | cdktf.IResolvable): any {
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
    match_expression: {
      value: cdktf.listMapperHcl(customIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpressionToHclTerraform, true)(struct!.matchExpression),
      isBlock: true,
      type: "list",
      storageClassType: "CustomIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomIamRoleSpecAggregationRuleClusterRoleSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomIamRoleSpecAggregationRuleClusterRoleSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpression = this._matchExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomIamRoleSpecAggregationRuleClusterRoleSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
      this._matchExpression.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
      this._matchExpression.internalValue = value.matchExpression;
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

  // match_expression - computed: false, optional: true, required: false
  private _matchExpression = new CustomIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpressionList(this, "match_expression", false);
  public get matchExpression() {
    return this._matchExpression;
  }
  public putMatchExpression(value: CustomIamRoleSpecAggregationRuleClusterRoleSelectorMatchExpression[] | cdktf.IResolvable) {
    this._matchExpression.internalValue = value;
  }
  public resetMatchExpression() {
    this._matchExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionInput() {
    return this._matchExpression.internalValue;
  }
}

export class CustomIamRoleSpecAggregationRuleClusterRoleSelectorList extends cdktf.ComplexList {
  public internalValue? : CustomIamRoleSpecAggregationRuleClusterRoleSelector[] | cdktf.IResolvable

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
  public get(index: number): CustomIamRoleSpecAggregationRuleClusterRoleSelectorOutputReference {
    return new CustomIamRoleSpecAggregationRuleClusterRoleSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomIamRoleSpecAggregationRule {
  /**
  * cluster_role_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#cluster_role_selector CustomIamRole#cluster_role_selector}
  */
  readonly clusterRoleSelector: CustomIamRoleSpecAggregationRuleClusterRoleSelector[] | cdktf.IResolvable;
}

export function customIamRoleSpecAggregationRuleToTerraform(struct?: CustomIamRoleSpecAggregationRuleOutputReference | CustomIamRoleSpecAggregationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_role_selector: cdktf.listMapper(customIamRoleSpecAggregationRuleClusterRoleSelectorToTerraform, true)(struct!.clusterRoleSelector),
  }
}


export function customIamRoleSpecAggregationRuleToHclTerraform(struct?: CustomIamRoleSpecAggregationRuleOutputReference | CustomIamRoleSpecAggregationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_role_selector: {
      value: cdktf.listMapperHcl(customIamRoleSpecAggregationRuleClusterRoleSelectorToHclTerraform, true)(struct!.clusterRoleSelector),
      isBlock: true,
      type: "list",
      storageClassType: "CustomIamRoleSpecAggregationRuleClusterRoleSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomIamRoleSpecAggregationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomIamRoleSpecAggregationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRoleSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoleSelector = this._clusterRoleSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomIamRoleSpecAggregationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterRoleSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterRoleSelector.internalValue = value.clusterRoleSelector;
    }
  }

  // cluster_role_selector - computed: false, optional: false, required: true
  private _clusterRoleSelector = new CustomIamRoleSpecAggregationRuleClusterRoleSelectorList(this, "cluster_role_selector", false);
  public get clusterRoleSelector() {
    return this._clusterRoleSelector;
  }
  public putClusterRoleSelector(value: CustomIamRoleSpecAggregationRuleClusterRoleSelector[] | cdktf.IResolvable) {
    this._clusterRoleSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleSelectorInput() {
    return this._clusterRoleSelector.internalValue;
  }
}
export interface CustomIamRoleSpecKubernetesPermissionsRule {
  /**
  * API groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#api_groups CustomIamRole#api_groups}
  */
  readonly apiGroups?: string[];
  /**
  * Restricts the rule to resources by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#resource_names CustomIamRole#resource_names}
  */
  readonly resourceNames?: string[];
  /**
  * Resources for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#resources CustomIamRole#resources}
  */
  readonly resources?: string[];
  /**
  * Non-resource urls for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#url_paths CustomIamRole#url_paths}
  */
  readonly urlPaths?: string[];
  /**
  * Verbs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#verbs CustomIamRole#verbs}
  */
  readonly verbs: string[];
}

export function customIamRoleSpecKubernetesPermissionsRuleToTerraform(struct?: CustomIamRoleSpecKubernetesPermissionsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    resource_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceNames),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    url_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urlPaths),
    verbs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verbs),
  }
}


export function customIamRoleSpecKubernetesPermissionsRuleToHclTerraform(struct?: CustomIamRoleSpecKubernetesPermissionsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urlPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verbs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verbs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomIamRoleSpecKubernetesPermissionsRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomIamRoleSpecKubernetesPermissionsRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._resourceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNames = this._resourceNames;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._urlPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPaths = this._urlPaths;
    }
    if (this._verbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbs = this._verbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomIamRoleSpecKubernetesPermissionsRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._resourceNames = undefined;
      this._resources = undefined;
      this._urlPaths = undefined;
      this._verbs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._resourceNames = value.resourceNames;
      this._resources = value.resources;
      this._urlPaths = value.urlPaths;
      this._verbs = value.verbs;
    }
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  public resetApiGroups() {
    this._apiGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // resource_names - computed: false, optional: true, required: false
  private _resourceNames?: string[]; 
  public get resourceNames() {
    return this.getListAttribute('resource_names');
  }
  public set resourceNames(value: string[]) {
    this._resourceNames = value;
  }
  public resetResourceNames() {
    this._resourceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamesInput() {
    return this._resourceNames;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // url_paths - computed: false, optional: true, required: false
  private _urlPaths?: string[]; 
  public get urlPaths() {
    return this.getListAttribute('url_paths');
  }
  public set urlPaths(value: string[]) {
    this._urlPaths = value;
  }
  public resetUrlPaths() {
    this._urlPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathsInput() {
    return this._urlPaths;
  }

  // verbs - computed: false, optional: false, required: true
  private _verbs?: string[]; 
  public get verbs() {
    return this.getListAttribute('verbs');
  }
  public set verbs(value: string[]) {
    this._verbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verbsInput() {
    return this._verbs;
  }
}

export class CustomIamRoleSpecKubernetesPermissionsRuleList extends cdktf.ComplexList {
  public internalValue? : CustomIamRoleSpecKubernetesPermissionsRule[] | cdktf.IResolvable

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
  public get(index: number): CustomIamRoleSpecKubernetesPermissionsRuleOutputReference {
    return new CustomIamRoleSpecKubernetesPermissionsRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomIamRoleSpecKubernetesPermissions {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#rule CustomIamRole#rule}
  */
  readonly rule: CustomIamRoleSpecKubernetesPermissionsRule[] | cdktf.IResolvable;
}

export function customIamRoleSpecKubernetesPermissionsToTerraform(struct?: CustomIamRoleSpecKubernetesPermissionsOutputReference | CustomIamRoleSpecKubernetesPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(customIamRoleSpecKubernetesPermissionsRuleToTerraform, true)(struct!.rule),
  }
}


export function customIamRoleSpecKubernetesPermissionsToHclTerraform(struct?: CustomIamRoleSpecKubernetesPermissionsOutputReference | CustomIamRoleSpecKubernetesPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(customIamRoleSpecKubernetesPermissionsRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "CustomIamRoleSpecKubernetesPermissionsRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomIamRoleSpecKubernetesPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomIamRoleSpecKubernetesPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomIamRoleSpecKubernetesPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new CustomIamRoleSpecKubernetesPermissionsRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: CustomIamRoleSpecKubernetesPermissionsRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface CustomIamRoleSpec {
  /**
  * The allowed scopes for the iam role.
  * Valid values are (ORGANIZATION, MANAGEMENT_CLUSTER, PROVISIONER, CLUSTER_GROUP, CLUSTER, WORKSPACE, NAMESPACE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#allowed_scopes CustomIamRole#allowed_scopes}
  */
  readonly allowedScopes: string[];
  /**
  * Flag representing whether role is deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#is_deprecated CustomIamRole#is_deprecated}
  */
  readonly isDeprecated?: boolean | cdktf.IResolvable;
  /**
  * Tanzu-specific permissions for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#tanzu_permissions CustomIamRole#tanzu_permissions}
  */
  readonly tanzuPermissions?: string[];
  /**
  * aggregation_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#aggregation_rule CustomIamRole#aggregation_rule}
  */
  readonly aggregationRule?: CustomIamRoleSpecAggregationRule;
  /**
  * kubernetes_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#kubernetes_permissions CustomIamRole#kubernetes_permissions}
  */
  readonly kubernetesPermissions?: CustomIamRoleSpecKubernetesPermissions;
}

export function customIamRoleSpecToTerraform(struct?: CustomIamRoleSpecOutputReference | CustomIamRoleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedScopes),
    is_deprecated: cdktf.booleanToTerraform(struct!.isDeprecated),
    tanzu_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tanzuPermissions),
    aggregation_rule: customIamRoleSpecAggregationRuleToTerraform(struct!.aggregationRule),
    kubernetes_permissions: customIamRoleSpecKubernetesPermissionsToTerraform(struct!.kubernetesPermissions),
  }
}


export function customIamRoleSpecToHclTerraform(struct?: CustomIamRoleSpecOutputReference | CustomIamRoleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_deprecated: {
      value: cdktf.booleanToHclTerraform(struct!.isDeprecated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tanzu_permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tanzuPermissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    aggregation_rule: {
      value: customIamRoleSpecAggregationRuleToHclTerraform(struct!.aggregationRule),
      isBlock: true,
      type: "list",
      storageClassType: "CustomIamRoleSpecAggregationRuleList",
    },
    kubernetes_permissions: {
      value: customIamRoleSpecKubernetesPermissionsToHclTerraform(struct!.kubernetesPermissions),
      isBlock: true,
      type: "list",
      storageClassType: "CustomIamRoleSpecKubernetesPermissionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomIamRoleSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomIamRoleSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScopes = this._allowedScopes;
    }
    if (this._isDeprecated !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeprecated = this._isDeprecated;
    }
    if (this._tanzuPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.tanzuPermissions = this._tanzuPermissions;
    }
    if (this._aggregationRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationRule = this._aggregationRule?.internalValue;
    }
    if (this._kubernetesPermissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesPermissions = this._kubernetesPermissions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomIamRoleSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedScopes = undefined;
      this._isDeprecated = undefined;
      this._tanzuPermissions = undefined;
      this._aggregationRule.internalValue = undefined;
      this._kubernetesPermissions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedScopes = value.allowedScopes;
      this._isDeprecated = value.isDeprecated;
      this._tanzuPermissions = value.tanzuPermissions;
      this._aggregationRule.internalValue = value.aggregationRule;
      this._kubernetesPermissions.internalValue = value.kubernetesPermissions;
    }
  }

  // allowed_scopes - computed: false, optional: false, required: true
  private _allowedScopes?: string[]; 
  public get allowedScopes() {
    return this.getListAttribute('allowed_scopes');
  }
  public set allowedScopes(value: string[]) {
    this._allowedScopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedScopesInput() {
    return this._allowedScopes;
  }

  // is_deprecated - computed: false, optional: true, required: false
  private _isDeprecated?: boolean | cdktf.IResolvable; 
  public get isDeprecated() {
    return this.getBooleanAttribute('is_deprecated');
  }
  public set isDeprecated(value: boolean | cdktf.IResolvable) {
    this._isDeprecated = value;
  }
  public resetIsDeprecated() {
    this._isDeprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeprecatedInput() {
    return this._isDeprecated;
  }

  // tanzu_permissions - computed: false, optional: true, required: false
  private _tanzuPermissions?: string[]; 
  public get tanzuPermissions() {
    return this.getListAttribute('tanzu_permissions');
  }
  public set tanzuPermissions(value: string[]) {
    this._tanzuPermissions = value;
  }
  public resetTanzuPermissions() {
    this._tanzuPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tanzuPermissionsInput() {
    return this._tanzuPermissions;
  }

  // aggregation_rule - computed: false, optional: true, required: false
  private _aggregationRule = new CustomIamRoleSpecAggregationRuleOutputReference(this, "aggregation_rule");
  public get aggregationRule() {
    return this._aggregationRule;
  }
  public putAggregationRule(value: CustomIamRoleSpecAggregationRule) {
    this._aggregationRule.internalValue = value;
  }
  public resetAggregationRule() {
    this._aggregationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationRuleInput() {
    return this._aggregationRule.internalValue;
  }

  // kubernetes_permissions - computed: false, optional: true, required: false
  private _kubernetesPermissions = new CustomIamRoleSpecKubernetesPermissionsOutputReference(this, "kubernetes_permissions");
  public get kubernetesPermissions() {
    return this._kubernetesPermissions;
  }
  public putKubernetesPermissions(value: CustomIamRoleSpecKubernetesPermissions) {
    this._kubernetesPermissions.internalValue = value;
  }
  public resetKubernetesPermissions() {
    this._kubernetesPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesPermissionsInput() {
    return this._kubernetesPermissions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role tanzu-mission-control_custom_iam_role}
*/
export class CustomIamRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_custom_iam_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomIamRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomIamRole to import
  * @param importFromId The id of the existing CustomIamRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomIamRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_custom_iam_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_iam_role tanzu-mission-control_custom_iam_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomIamRoleConfig
  */
  public constructor(scope: Construct, id: string, config: CustomIamRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_custom_iam_role',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._meta.internalValue = config.meta;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
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

  // meta - computed: false, optional: true, required: false
  private _meta = new CustomIamRoleMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: CustomIamRoleMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new CustomIamRoleSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: CustomIamRoleSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      meta: customIamRoleMetaToTerraform(this._meta.internalValue),
      spec: customIamRoleSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: customIamRoleMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomIamRoleMetaList",
      },
      spec: {
        value: customIamRoleSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomIamRoleSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
