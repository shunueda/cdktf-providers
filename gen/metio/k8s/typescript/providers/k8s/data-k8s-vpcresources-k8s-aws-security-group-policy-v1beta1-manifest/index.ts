// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#metadata DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestMetadata;
  /**
  * SecurityGroupPolicySpec defines the desired state of SecurityGroupPolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#spec DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpec;
}
export interface DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#annotations DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#labels DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#name DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#namespace DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestMetadataToTerraform(struct?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#key DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#operator DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#values DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressionsToTerraform(struct?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressionsOutputReference {
    return new DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#match_expressions DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#match_labels DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorToTerraform(struct?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorToHclTerraform(struct?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressionsList",
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

export class DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecSecurityGroups {
  /**
  * Groups is the list of EC2 Security Groups Ids that need to be applied to the ENI of a Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#group_ids DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#group_ids}
  */
  readonly groupIds?: string[];
}

export function dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecSecurityGroupsToTerraform(struct?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
  }
}


export function dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecSecurityGroupsToHclTerraform(struct?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecSecurityGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecSecurityGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecSecurityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupIds = value.groupIds;
    }
  }

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return this.getListAttribute('group_ids');
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }
}
export interface DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#key DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#operator DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#values DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressionsToTerraform(struct?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressionsToHclTerraform(struct?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressionsOutputReference {
    return new DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#match_expressions DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#match_labels DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorToTerraform(struct?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorToHclTerraform(struct?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressionsList",
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

export class DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpec {
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#pod_selector DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelector;
  /**
  * GroupIds contains the list of security groups that will be applied to the network interface of the pod matching the criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#security_groups DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#security_groups}
  */
  readonly securityGroups?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecSecurityGroups;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#service_account_selector DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest#service_account_selector}
  */
  readonly serviceAccountSelector?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelector;
}

export function dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecToTerraform(struct?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_selector: dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorToTerraform(struct!.podSelector),
    security_groups: dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecSecurityGroupsToTerraform(struct!.securityGroups),
    service_account_selector: dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorToTerraform(struct!.serviceAccountSelector),
  }
}


export function dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_selector: {
      value: dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelector",
    },
    security_groups: {
      value: dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecSecurityGroupsToHclTerraform(struct!.securityGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecSecurityGroups",
    },
    service_account_selector: {
      value: dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorToHclTerraform(struct!.serviceAccountSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    if (this._securityGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups?.internalValue;
    }
    if (this._serviceAccountSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountSelector = this._serviceAccountSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podSelector.internalValue = undefined;
      this._securityGroups.internalValue = undefined;
      this._serviceAccountSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podSelector.internalValue = value.podSelector;
      this._securityGroups.internalValue = value.securityGroups;
      this._serviceAccountSelector.internalValue = value.serviceAccountSelector;
    }
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups = new DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecSecurityGroupsOutputReference(this, "security_groups");
  public get securityGroups() {
    return this._securityGroups;
  }
  public putSecurityGroups(value: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecSecurityGroups) {
    this._securityGroups.internalValue = value;
  }
  public resetSecurityGroups() {
    this._securityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups.internalValue;
  }

  // service_account_selector - computed: false, optional: true, required: false
  private _serviceAccountSelector = new DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelectorOutputReference(this, "service_account_selector");
  public get serviceAccountSelector() {
    return this._serviceAccountSelector;
  }
  public putServiceAccountSelector(value: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecServiceAccountSelector) {
    this._serviceAccountSelector.internalValue = value;
  }
  public resetServiceAccountSelector() {
    this._serviceAccountSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountSelectorInput() {
    return this._serviceAccountSelector.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest k8s_vpcresources_k8s_aws_security_group_policy_v1beta1_manifest}
*/
export class DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_vpcresources_k8s_aws_security_group_policy_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_vpcresources_k8s_aws_security_group_policy_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/vpcresources_k8s_aws_security_group_policy_v1beta1_manifest k8s_vpcresources_k8s_aws_security_group_policy_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_vpcresources_k8s_aws_security_group_policy_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpec) {
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
      metadata: dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVpcresourcesK8SAwsSecurityGroupPolicyV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
