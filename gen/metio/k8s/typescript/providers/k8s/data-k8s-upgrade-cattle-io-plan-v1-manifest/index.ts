// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SUpgradeCattleIoPlanV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#metadata DataK8SUpgradeCattleIoPlanV1Manifest#metadata}
  */
  readonly metadata: DataK8SUpgradeCattleIoPlanV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#spec DataK8SUpgradeCattleIoPlanV1Manifest#spec}
  */
  readonly spec?: DataK8SUpgradeCattleIoPlanV1ManifestSpec;
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#annotations DataK8SUpgradeCattleIoPlanV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#labels DataK8SUpgradeCattleIoPlanV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#namespace DataK8SUpgradeCattleIoPlanV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestMetadataToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SUpgradeCattleIoPlanV1ManifestMetadataToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SUpgradeCattleIoPlanV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#key DataK8SUpgradeCattleIoPlanV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#operator DataK8SUpgradeCattleIoPlanV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#values DataK8SUpgradeCattleIoPlanV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressionsToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressionsOutputReference {
    return new DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#match_expressions DataK8SUpgradeCattleIoPlanV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#match_labels DataK8SUpgradeCattleIoPlanV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressionsList",
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecDrain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#delete_emptydir_data DataK8SUpgradeCattleIoPlanV1Manifest#delete_emptydir_data}
  */
  readonly deleteEmptydirData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#delete_local_data DataK8SUpgradeCattleIoPlanV1Manifest#delete_local_data}
  */
  readonly deleteLocalData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#disable_eviction DataK8SUpgradeCattleIoPlanV1Manifest#disable_eviction}
  */
  readonly disableEviction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#force DataK8SUpgradeCattleIoPlanV1Manifest#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#grace_period DataK8SUpgradeCattleIoPlanV1Manifest#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#ignore_daemon_sets DataK8SUpgradeCattleIoPlanV1Manifest#ignore_daemon_sets}
  */
  readonly ignoreDaemonSets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#pod_selector DataK8SUpgradeCattleIoPlanV1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#skip_wait_for_delete_timeout DataK8SUpgradeCattleIoPlanV1Manifest#skip_wait_for_delete_timeout}
  */
  readonly skipWaitForDeleteTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#timeout DataK8SUpgradeCattleIoPlanV1Manifest#timeout}
  */
  readonly timeout?: number;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecDrainToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_emptydir_data: cdktf.booleanToTerraform(struct!.deleteEmptydirData),
    delete_local_data: cdktf.booleanToTerraform(struct!.deleteLocalData),
    disable_eviction: cdktf.booleanToTerraform(struct!.disableEviction),
    force: cdktf.booleanToTerraform(struct!.force),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    ignore_daemon_sets: cdktf.booleanToTerraform(struct!.ignoreDaemonSets),
    pod_selector: dataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorToTerraform(struct!.podSelector),
    skip_wait_for_delete_timeout: cdktf.numberToTerraform(struct!.skipWaitForDeleteTimeout),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecDrainToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_emptydir_data: {
      value: cdktf.booleanToHclTerraform(struct!.deleteEmptydirData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_local_data: {
      value: cdktf.booleanToHclTerraform(struct!.deleteLocalData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_eviction: {
      value: cdktf.booleanToHclTerraform(struct!.disableEviction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_daemon_sets: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDaemonSets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_selector: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelector",
    },
    skip_wait_for_delete_timeout: {
      value: cdktf.numberToHclTerraform(struct!.skipWaitForDeleteTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecDrain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteEmptydirData !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteEmptydirData = this._deleteEmptydirData;
    }
    if (this._deleteLocalData !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteLocalData = this._deleteLocalData;
    }
    if (this._disableEviction !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEviction = this._disableEviction;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._ignoreDaemonSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDaemonSets = this._ignoreDaemonSets;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    if (this._skipWaitForDeleteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipWaitForDeleteTimeout = this._skipWaitForDeleteTimeout;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteEmptydirData = undefined;
      this._deleteLocalData = undefined;
      this._disableEviction = undefined;
      this._force = undefined;
      this._gracePeriod = undefined;
      this._ignoreDaemonSets = undefined;
      this._podSelector.internalValue = undefined;
      this._skipWaitForDeleteTimeout = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteEmptydirData = value.deleteEmptydirData;
      this._deleteLocalData = value.deleteLocalData;
      this._disableEviction = value.disableEviction;
      this._force = value.force;
      this._gracePeriod = value.gracePeriod;
      this._ignoreDaemonSets = value.ignoreDaemonSets;
      this._podSelector.internalValue = value.podSelector;
      this._skipWaitForDeleteTimeout = value.skipWaitForDeleteTimeout;
      this._timeout = value.timeout;
    }
  }

  // delete_emptydir_data - computed: false, optional: true, required: false
  private _deleteEmptydirData?: boolean | cdktf.IResolvable; 
  public get deleteEmptydirData() {
    return this.getBooleanAttribute('delete_emptydir_data');
  }
  public set deleteEmptydirData(value: boolean | cdktf.IResolvable) {
    this._deleteEmptydirData = value;
  }
  public resetDeleteEmptydirData() {
    this._deleteEmptydirData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEmptydirDataInput() {
    return this._deleteEmptydirData;
  }

  // delete_local_data - computed: false, optional: true, required: false
  private _deleteLocalData?: boolean | cdktf.IResolvable; 
  public get deleteLocalData() {
    return this.getBooleanAttribute('delete_local_data');
  }
  public set deleteLocalData(value: boolean | cdktf.IResolvable) {
    this._deleteLocalData = value;
  }
  public resetDeleteLocalData() {
    this._deleteLocalData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteLocalDataInput() {
    return this._deleteLocalData;
  }

  // disable_eviction - computed: false, optional: true, required: false
  private _disableEviction?: boolean | cdktf.IResolvable; 
  public get disableEviction() {
    return this.getBooleanAttribute('disable_eviction');
  }
  public set disableEviction(value: boolean | cdktf.IResolvable) {
    this._disableEviction = value;
  }
  public resetDisableEviction() {
    this._disableEviction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEvictionInput() {
    return this._disableEviction;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // ignore_daemon_sets - computed: false, optional: true, required: false
  private _ignoreDaemonSets?: boolean | cdktf.IResolvable; 
  public get ignoreDaemonSets() {
    return this.getBooleanAttribute('ignore_daemon_sets');
  }
  public set ignoreDaemonSets(value: boolean | cdktf.IResolvable) {
    this._ignoreDaemonSets = value;
  }
  public resetIgnoreDaemonSets() {
    this._ignoreDaemonSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDaemonSetsInput() {
    return this._ignoreDaemonSets;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }

  // skip_wait_for_delete_timeout - computed: false, optional: true, required: false
  private _skipWaitForDeleteTimeout?: number; 
  public get skipWaitForDeleteTimeout() {
    return this.getNumberAttribute('skip_wait_for_delete_timeout');
  }
  public set skipWaitForDeleteTimeout(value: number) {
    this._skipWaitForDeleteTimeout = value;
  }
  public resetSkipWaitForDeleteTimeout() {
    this._skipWaitForDeleteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWaitForDeleteTimeoutInput() {
    return this._skipWaitForDeleteTimeout;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#key DataK8SUpgradeCattleIoPlanV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#operator DataK8SUpgradeCattleIoPlanV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#values DataK8SUpgradeCattleIoPlanV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressionsToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressionsToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressionsOutputReference {
    return new DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#match_expressions DataK8SUpgradeCattleIoPlanV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#match_labels DataK8SUpgradeCattleIoPlanV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressionsList",
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromConfigMapRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#optional DataK8SUpgradeCattleIoPlanV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromConfigMapRefToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromConfigMapRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromConfigMapRefToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromConfigMapRef | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromConfigMapRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromConfigMapRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#optional DataK8SUpgradeCattleIoPlanV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromSecretRefToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromSecretRefToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromSecretRef | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#config_map_ref DataK8SUpgradeCattleIoPlanV1Manifest#config_map_ref}
  */
  readonly configMapRef?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromConfigMapRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#prefix DataK8SUpgradeCattleIoPlanV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#secret_ref DataK8SUpgradeCattleIoPlanV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromSecretRef;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_ref: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    secret_ref: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_ref: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromConfigMapRefToHclTerraform(struct!.configMapRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromConfigMapRef",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRef = this._configMapRef?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = undefined;
      this._prefix = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = value.configMapRef;
      this._prefix = value.prefix;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // config_map_ref - computed: false, optional: true, required: false
  private _configMapRef = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromConfigMapRefOutputReference(this, "config_map_ref");
  public get configMapRef() {
    return this._configMapRef;
  }
  public putConfigMapRef(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromConfigMapRef) {
    this._configMapRef.internalValue = value;
  }
  public resetConfigMapRef() {
    this._configMapRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefInput() {
    return this._configMapRef.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromOutputReference {
    return new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#key DataK8SUpgradeCattleIoPlanV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#optional DataK8SUpgradeCattleIoPlanV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromConfigMapKeyRefToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#api_version DataK8SUpgradeCattleIoPlanV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#field_path DataK8SUpgradeCattleIoPlanV1Manifest#field_path}
  */
  readonly fieldPath?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromFieldRefToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromFieldRefToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromFieldRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromFieldRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
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
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#container_name DataK8SUpgradeCattleIoPlanV1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#divisor DataK8SUpgradeCattleIoPlanV1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#resource DataK8SUpgradeCattleIoPlanV1Manifest#resource}
  */
  readonly resource?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromResourceFieldRefToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromResourceFieldRefToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
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
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#key DataK8SUpgradeCattleIoPlanV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#optional DataK8SUpgradeCattleIoPlanV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromSecretKeyRefToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromSecretKeyRef | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#config_map_key_ref DataK8SUpgradeCattleIoPlanV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromConfigMapKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#field_ref DataK8SUpgradeCattleIoPlanV1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromFieldRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#resource_field_ref DataK8SUpgradeCattleIoPlanV1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromResourceFieldRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#secret_key_ref DataK8SUpgradeCattleIoPlanV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromSecretKeyRef;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#value DataK8SUpgradeCattleIoPlanV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#value_from DataK8SUpgradeCattleIoPlanV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFrom;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvs | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvs | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsList extends cdktf.ComplexList {
  public internalValue? : DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsOutputReference {
    return new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextAppArmorProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#localhost_profile DataK8SUpgradeCattleIoPlanV1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#type DataK8SUpgradeCattleIoPlanV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextAppArmorProfileToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextAppArmorProfileToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextAppArmorProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextAppArmorProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextAppArmorProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#add DataK8SUpgradeCattleIoPlanV1Manifest#add}
  */
  readonly add?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#drop DataK8SUpgradeCattleIoPlanV1Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextCapabilitiesToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextCapabilitiesToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.add),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.drop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._drop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#level DataK8SUpgradeCattleIoPlanV1Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#role DataK8SUpgradeCattleIoPlanV1Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#type DataK8SUpgradeCattleIoPlanV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#user DataK8SUpgradeCattleIoPlanV1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#localhost_profile DataK8SUpgradeCattleIoPlanV1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#type DataK8SUpgradeCattleIoPlanV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeccompProfileToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#gmsa_credential_spec DataK8SUpgradeCattleIoPlanV1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#gmsa_credential_spec_name DataK8SUpgradeCattleIoPlanV1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#host_process DataK8SUpgradeCattleIoPlanV1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#run_as_user_name DataK8SUpgradeCattleIoPlanV1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextWindowsOptionsToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#allow_privilege_escalation DataK8SUpgradeCattleIoPlanV1Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#app_armor_profile DataK8SUpgradeCattleIoPlanV1Manifest#app_armor_profile}
  */
  readonly appArmorProfile?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextAppArmorProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#capabilities DataK8SUpgradeCattleIoPlanV1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextCapabilities;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#privileged DataK8SUpgradeCattleIoPlanV1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#proc_mount DataK8SUpgradeCattleIoPlanV1Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#read_only_root_filesystem DataK8SUpgradeCattleIoPlanV1Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#run_as_group DataK8SUpgradeCattleIoPlanV1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#run_as_non_root DataK8SUpgradeCattleIoPlanV1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#run_as_user DataK8SUpgradeCattleIoPlanV1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#se_linux_options DataK8SUpgradeCattleIoPlanV1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#seccomp_profile DataK8SUpgradeCattleIoPlanV1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#windows_options DataK8SUpgradeCattleIoPlanV1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextWindowsOptions;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    app_armor_profile: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextAppArmorProfileToTerraform(struct!.appArmorProfile),
    capabilities: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_armor_profile: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextAppArmorProfileToHclTerraform(struct!.appArmorProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextAppArmorProfile",
    },
    capabilities: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextCapabilities",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proc_mount: {
      value: cdktf.stringToHclTerraform(struct!.procMount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._appArmorProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appArmorProfile = this._appArmorProfile?.internalValue;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._procMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.procMount = this._procMount;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._appArmorProfile.internalValue = undefined;
      this._capabilities.internalValue = undefined;
      this._privileged = undefined;
      this._procMount = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._appArmorProfile.internalValue = value.appArmorProfile;
      this._capabilities.internalValue = value.capabilities;
      this._privileged = value.privileged;
      this._procMount = value.procMount;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // app_armor_profile - computed: false, optional: true, required: false
  private _appArmorProfile = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextAppArmorProfileOutputReference(this, "app_armor_profile");
  public get appArmorProfile() {
    return this._appArmorProfile;
  }
  public putAppArmorProfile(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextAppArmorProfile) {
    this._appArmorProfile.internalValue = value;
  }
  public resetAppArmorProfile() {
    this._appArmorProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appArmorProfileInput() {
    return this._appArmorProfile.internalValue;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // proc_mount - computed: false, optional: true, required: false
  private _procMount?: string; 
  public get procMount() {
    return this.getStringAttribute('proc_mount');
  }
  public set procMount(value: string) {
    this._procMount = value;
  }
  public resetProcMount() {
    this._procMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procMountInput() {
    return this._procMount;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#destination DataK8SUpgradeCattleIoPlanV1Manifest#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#source DataK8SUpgradeCattleIoPlanV1Manifest#source}
  */
  readonly source?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumesToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumesToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._name = value.name;
      this._source = value.source;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumesOutputReference {
    return new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepare {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#args DataK8SUpgradeCattleIoPlanV1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#command DataK8SUpgradeCattleIoPlanV1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#env_from DataK8SUpgradeCattleIoPlanV1Manifest#env_from}
  */
  readonly envFrom?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#envs DataK8SUpgradeCattleIoPlanV1Manifest#envs}
  */
  readonly envs?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#image DataK8SUpgradeCattleIoPlanV1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#security_context DataK8SUpgradeCattleIoPlanV1Manifest#security_context}
  */
  readonly securityContext?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#volumes DataK8SUpgradeCattleIoPlanV1Manifest#volumes}
  */
  readonly volumes?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumes[] | cdktf.IResolvable;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepare | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env_from: cdktf.listMapper(dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromToTerraform, false)(struct!.envFrom),
    envs: cdktf.listMapper(dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsToTerraform, false)(struct!.envs),
    image: cdktf.stringToTerraform(struct!.image),
    security_context: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextToTerraform(struct!.securityContext),
    volumes: cdktf.listMapper(dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepare | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromList",
    },
    envs: {
      value: cdktf.listMapperHcl(dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsToHclTerraform, false)(struct!.envs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_context: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContext",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepare | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._envs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepare | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._envFrom.internalValue = undefined;
      this._envs.internalValue = undefined;
      this._image = undefined;
      this._securityContext.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._envFrom.internalValue = value.envFrom;
      this._envs.internalValue = value.envs;
      this._image = value.image;
      this._securityContext.internalValue = value.securityContext;
      this._volumes.internalValue = value.volumes;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // envs - computed: false, optional: true, required: false
  private _envs = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvsList(this, "envs", false);
  public get envs() {
    return this._envs;
  }
  public putEnvs(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareEnvs[] | cdktf.IResolvable) {
    this._envs.internalValue = value;
  }
  public resetEnvs() {
    this._envs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#ignore_updates DataK8SUpgradeCattleIoPlanV1Manifest#ignore_updates}
  */
  readonly ignoreUpdates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#path DataK8SUpgradeCattleIoPlanV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecSecretsToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_updates: cdktf.booleanToTerraform(struct!.ignoreUpdates),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecSecretsToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_updates: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUpdates),
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUpdates = this._ignoreUpdates;
    }
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

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreUpdates = undefined;
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
      this._ignoreUpdates = value.ignoreUpdates;
      this._name = value.name;
      this._path = value.path;
    }
  }

  // ignore_updates - computed: false, optional: true, required: false
  private _ignoreUpdates?: boolean | cdktf.IResolvable; 
  public get ignoreUpdates() {
    return this.getBooleanAttribute('ignore_updates');
  }
  public set ignoreUpdates(value: boolean | cdktf.IResolvable) {
    this._ignoreUpdates = value;
  }
  public resetIgnoreUpdates() {
    this._ignoreUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUpdatesInput() {
    return this._ignoreUpdates;
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
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SUpgradeCattleIoPlanV1ManifestSpecSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SUpgradeCattleIoPlanV1ManifestSpecSecretsOutputReference {
    return new DataK8SUpgradeCattleIoPlanV1ManifestSpecSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#effect DataK8SUpgradeCattleIoPlanV1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#key DataK8SUpgradeCattleIoPlanV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#operator DataK8SUpgradeCattleIoPlanV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#toleration_seconds DataK8SUpgradeCattleIoPlanV1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#value DataK8SUpgradeCattleIoPlanV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecTolerationsToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecTolerationsToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SUpgradeCattleIoPlanV1ManifestSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SUpgradeCattleIoPlanV1ManifestSpecTolerationsOutputReference {
    return new DataK8SUpgradeCattleIoPlanV1ManifestSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromConfigMapRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#optional DataK8SUpgradeCattleIoPlanV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromConfigMapRefToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromConfigMapRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromConfigMapRefToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromConfigMapRef | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromConfigMapRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromConfigMapRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#optional DataK8SUpgradeCattleIoPlanV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromSecretRefToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromSecretRefToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromSecretRef | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#config_map_ref DataK8SUpgradeCattleIoPlanV1Manifest#config_map_ref}
  */
  readonly configMapRef?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromConfigMapRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#prefix DataK8SUpgradeCattleIoPlanV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#secret_ref DataK8SUpgradeCattleIoPlanV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromSecretRef;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_ref: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    secret_ref: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_ref: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromConfigMapRefToHclTerraform(struct!.configMapRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromConfigMapRef",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRef = this._configMapRef?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = undefined;
      this._prefix = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = value.configMapRef;
      this._prefix = value.prefix;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // config_map_ref - computed: false, optional: true, required: false
  private _configMapRef = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromConfigMapRefOutputReference(this, "config_map_ref");
  public get configMapRef() {
    return this._configMapRef;
  }
  public putConfigMapRef(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromConfigMapRef) {
    this._configMapRef.internalValue = value;
  }
  public resetConfigMapRef() {
    this._configMapRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefInput() {
    return this._configMapRef.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromOutputReference {
    return new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#key DataK8SUpgradeCattleIoPlanV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#optional DataK8SUpgradeCattleIoPlanV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromConfigMapKeyRefToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#api_version DataK8SUpgradeCattleIoPlanV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#field_path DataK8SUpgradeCattleIoPlanV1Manifest#field_path}
  */
  readonly fieldPath?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromFieldRefToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromFieldRefToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromFieldRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromFieldRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
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
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#container_name DataK8SUpgradeCattleIoPlanV1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#divisor DataK8SUpgradeCattleIoPlanV1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#resource DataK8SUpgradeCattleIoPlanV1Manifest#resource}
  */
  readonly resource?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromResourceFieldRefToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromResourceFieldRefToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
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
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#key DataK8SUpgradeCattleIoPlanV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#optional DataK8SUpgradeCattleIoPlanV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromSecretKeyRefToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromSecretKeyRef | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#config_map_key_ref DataK8SUpgradeCattleIoPlanV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromConfigMapKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#field_ref DataK8SUpgradeCattleIoPlanV1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromFieldRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#resource_field_ref DataK8SUpgradeCattleIoPlanV1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromResourceFieldRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#secret_key_ref DataK8SUpgradeCattleIoPlanV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromSecretKeyRef;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#value DataK8SUpgradeCattleIoPlanV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#value_from DataK8SUpgradeCattleIoPlanV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFrom;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvs | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvs | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsList extends cdktf.ComplexList {
  public internalValue? : DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsOutputReference {
    return new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextAppArmorProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#localhost_profile DataK8SUpgradeCattleIoPlanV1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#type DataK8SUpgradeCattleIoPlanV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextAppArmorProfileToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextAppArmorProfileToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextAppArmorProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextAppArmorProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextAppArmorProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#add DataK8SUpgradeCattleIoPlanV1Manifest#add}
  */
  readonly add?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#drop DataK8SUpgradeCattleIoPlanV1Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextCapabilitiesToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextCapabilitiesToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.add),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.drop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._drop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#level DataK8SUpgradeCattleIoPlanV1Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#role DataK8SUpgradeCattleIoPlanV1Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#type DataK8SUpgradeCattleIoPlanV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#user DataK8SUpgradeCattleIoPlanV1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#localhost_profile DataK8SUpgradeCattleIoPlanV1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#type DataK8SUpgradeCattleIoPlanV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeccompProfileToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#gmsa_credential_spec DataK8SUpgradeCattleIoPlanV1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#gmsa_credential_spec_name DataK8SUpgradeCattleIoPlanV1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#host_process DataK8SUpgradeCattleIoPlanV1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#run_as_user_name DataK8SUpgradeCattleIoPlanV1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextWindowsOptionsToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#allow_privilege_escalation DataK8SUpgradeCattleIoPlanV1Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#app_armor_profile DataK8SUpgradeCattleIoPlanV1Manifest#app_armor_profile}
  */
  readonly appArmorProfile?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextAppArmorProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#capabilities DataK8SUpgradeCattleIoPlanV1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextCapabilities;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#privileged DataK8SUpgradeCattleIoPlanV1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#proc_mount DataK8SUpgradeCattleIoPlanV1Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#read_only_root_filesystem DataK8SUpgradeCattleIoPlanV1Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#run_as_group DataK8SUpgradeCattleIoPlanV1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#run_as_non_root DataK8SUpgradeCattleIoPlanV1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#run_as_user DataK8SUpgradeCattleIoPlanV1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#se_linux_options DataK8SUpgradeCattleIoPlanV1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#seccomp_profile DataK8SUpgradeCattleIoPlanV1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#windows_options DataK8SUpgradeCattleIoPlanV1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextWindowsOptions;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    app_armor_profile: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextAppArmorProfileToTerraform(struct!.appArmorProfile),
    capabilities: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_armor_profile: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextAppArmorProfileToHclTerraform(struct!.appArmorProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextAppArmorProfile",
    },
    capabilities: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextCapabilities",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proc_mount: {
      value: cdktf.stringToHclTerraform(struct!.procMount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._appArmorProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appArmorProfile = this._appArmorProfile?.internalValue;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._procMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.procMount = this._procMount;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._appArmorProfile.internalValue = undefined;
      this._capabilities.internalValue = undefined;
      this._privileged = undefined;
      this._procMount = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._appArmorProfile.internalValue = value.appArmorProfile;
      this._capabilities.internalValue = value.capabilities;
      this._privileged = value.privileged;
      this._procMount = value.procMount;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // app_armor_profile - computed: false, optional: true, required: false
  private _appArmorProfile = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextAppArmorProfileOutputReference(this, "app_armor_profile");
  public get appArmorProfile() {
    return this._appArmorProfile;
  }
  public putAppArmorProfile(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextAppArmorProfile) {
    this._appArmorProfile.internalValue = value;
  }
  public resetAppArmorProfile() {
    this._appArmorProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appArmorProfileInput() {
    return this._appArmorProfile.internalValue;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // proc_mount - computed: false, optional: true, required: false
  private _procMount?: string; 
  public get procMount() {
    return this.getStringAttribute('proc_mount');
  }
  public set procMount(value: string) {
    this._procMount = value;
  }
  public resetProcMount() {
    this._procMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procMountInput() {
    return this._procMount;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#destination DataK8SUpgradeCattleIoPlanV1Manifest#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#name DataK8SUpgradeCattleIoPlanV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#source DataK8SUpgradeCattleIoPlanV1Manifest#source}
  */
  readonly source?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumesToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumesToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._name = value.name;
      this._source = value.source;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumesOutputReference {
    return new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgrade {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#args DataK8SUpgradeCattleIoPlanV1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#command DataK8SUpgradeCattleIoPlanV1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#env_from DataK8SUpgradeCattleIoPlanV1Manifest#env_from}
  */
  readonly envFrom?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#envs DataK8SUpgradeCattleIoPlanV1Manifest#envs}
  */
  readonly envs?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#image DataK8SUpgradeCattleIoPlanV1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#security_context DataK8SUpgradeCattleIoPlanV1Manifest#security_context}
  */
  readonly securityContext?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#volumes DataK8SUpgradeCattleIoPlanV1Manifest#volumes}
  */
  readonly volumes?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumes[] | cdktf.IResolvable;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env_from: cdktf.listMapper(dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromToTerraform, false)(struct!.envFrom),
    envs: cdktf.listMapper(dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsToTerraform, false)(struct!.envs),
    image: cdktf.stringToTerraform(struct!.image),
    security_context: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextToTerraform(struct!.securityContext),
    volumes: cdktf.listMapper(dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromList",
    },
    envs: {
      value: cdktf.listMapperHcl(dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsToHclTerraform, false)(struct!.envs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_context: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContext",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgrade | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._envs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgrade | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._envFrom.internalValue = undefined;
      this._envs.internalValue = undefined;
      this._image = undefined;
      this._securityContext.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._envFrom.internalValue = value.envFrom;
      this._envs.internalValue = value.envs;
      this._image = value.image;
      this._securityContext.internalValue = value.securityContext;
      this._volumes.internalValue = value.volumes;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // envs - computed: false, optional: true, required: false
  private _envs = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvsList(this, "envs", false);
  public get envs() {
    return this._envs;
  }
  public putEnvs(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeEnvs[] | cdktf.IResolvable) {
    this._envs.internalValue = value;
  }
  public resetEnvs() {
    this._envs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataK8SUpgradeCattleIoPlanV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#channel DataK8SUpgradeCattleIoPlanV1Manifest#channel}
  */
  readonly channel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#concurrency DataK8SUpgradeCattleIoPlanV1Manifest#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#cordon DataK8SUpgradeCattleIoPlanV1Manifest#cordon}
  */
  readonly cordon?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#drain DataK8SUpgradeCattleIoPlanV1Manifest#drain}
  */
  readonly drain?: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrain;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#exclusive DataK8SUpgradeCattleIoPlanV1Manifest#exclusive}
  */
  readonly exclusive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#image_pull_secrets DataK8SUpgradeCattleIoPlanV1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#job_active_deadline_secs DataK8SUpgradeCattleIoPlanV1Manifest#job_active_deadline_secs}
  */
  readonly jobActiveDeadlineSecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#node_selector DataK8SUpgradeCattleIoPlanV1Manifest#node_selector}
  */
  readonly nodeSelector?: DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#prepare DataK8SUpgradeCattleIoPlanV1Manifest#prepare}
  */
  readonly prepare?: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepare;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#secrets DataK8SUpgradeCattleIoPlanV1Manifest#secrets}
  */
  readonly secrets?: DataK8SUpgradeCattleIoPlanV1ManifestSpecSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#service_account_name DataK8SUpgradeCattleIoPlanV1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#tolerations DataK8SUpgradeCattleIoPlanV1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SUpgradeCattleIoPlanV1ManifestSpecTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#upgrade DataK8SUpgradeCattleIoPlanV1Manifest#upgrade}
  */
  readonly upgrade: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgrade;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#version DataK8SUpgradeCattleIoPlanV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SUpgradeCattleIoPlanV1ManifestSpecToTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    cordon: cdktf.booleanToTerraform(struct!.cordon),
    drain: dataK8SUpgradeCattleIoPlanV1ManifestSpecDrainToTerraform(struct!.drain),
    exclusive: cdktf.booleanToTerraform(struct!.exclusive),
    image_pull_secrets: cdktf.listMapper(dataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    job_active_deadline_secs: cdktf.numberToTerraform(struct!.jobActiveDeadlineSecs),
    node_selector: dataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorToTerraform(struct!.nodeSelector),
    prepare: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareToTerraform(struct!.prepare),
    secrets: cdktf.listMapper(dataK8SUpgradeCattleIoPlanV1ManifestSpecSecretsToTerraform, false)(struct!.secrets),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    tolerations: cdktf.listMapper(dataK8SUpgradeCattleIoPlanV1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
    upgrade: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeToTerraform(struct!.upgrade),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SUpgradeCattleIoPlanV1ManifestSpecToHclTerraform(struct?: DataK8SUpgradeCattleIoPlanV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cordon: {
      value: cdktf.booleanToHclTerraform(struct!.cordon),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drain: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecDrainToHclTerraform(struct!.drain),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecDrain",
    },
    exclusive: {
      value: cdktf.booleanToHclTerraform(struct!.exclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecretsList",
    },
    job_active_deadline_secs: {
      value: cdktf.numberToHclTerraform(struct!.jobActiveDeadlineSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_selector: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorToHclTerraform(struct!.nodeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelector",
    },
    prepare: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareToHclTerraform(struct!.prepare),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepare",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SUpgradeCattleIoPlanV1ManifestSpecSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecSecretsList",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SUpgradeCattleIoPlanV1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecTolerationsList",
    },
    upgrade: {
      value: dataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeToHclTerraform(struct!.upgrade),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgrade",
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

export class DataK8SUpgradeCattleIoPlanV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeCattleIoPlanV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._cordon !== undefined) {
      hasAnyValues = true;
      internalValueResult.cordon = this._cordon;
    }
    if (this._drain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drain = this._drain?.internalValue;
    }
    if (this._exclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusive = this._exclusive;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._jobActiveDeadlineSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobActiveDeadlineSecs = this._jobActiveDeadlineSecs;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    if (this._prepare?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prepare = this._prepare?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._upgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgrade = this._upgrade?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeCattleIoPlanV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._concurrency = undefined;
      this._cordon = undefined;
      this._drain.internalValue = undefined;
      this._exclusive = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._jobActiveDeadlineSecs = undefined;
      this._nodeSelector.internalValue = undefined;
      this._prepare.internalValue = undefined;
      this._secrets.internalValue = undefined;
      this._serviceAccountName = undefined;
      this._tolerations.internalValue = undefined;
      this._upgrade.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._concurrency = value.concurrency;
      this._cordon = value.cordon;
      this._drain.internalValue = value.drain;
      this._exclusive = value.exclusive;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._jobActiveDeadlineSecs = value.jobActiveDeadlineSecs;
      this._nodeSelector.internalValue = value.nodeSelector;
      this._prepare.internalValue = value.prepare;
      this._secrets.internalValue = value.secrets;
      this._serviceAccountName = value.serviceAccountName;
      this._tolerations.internalValue = value.tolerations;
      this._upgrade.internalValue = value.upgrade;
      this._version = value.version;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // cordon - computed: false, optional: true, required: false
  private _cordon?: boolean | cdktf.IResolvable; 
  public get cordon() {
    return this.getBooleanAttribute('cordon');
  }
  public set cordon(value: boolean | cdktf.IResolvable) {
    this._cordon = value;
  }
  public resetCordon() {
    this._cordon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cordonInput() {
    return this._cordon;
  }

  // drain - computed: false, optional: true, required: false
  private _drain = new DataK8SUpgradeCattleIoPlanV1ManifestSpecDrainOutputReference(this, "drain");
  public get drain() {
    return this._drain;
  }
  public putDrain(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecDrain) {
    this._drain.internalValue = value;
  }
  public resetDrain() {
    this._drain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainInput() {
    return this._drain.internalValue;
  }

  // exclusive - computed: false, optional: true, required: false
  private _exclusive?: boolean | cdktf.IResolvable; 
  public get exclusive() {
    return this.getBooleanAttribute('exclusive');
  }
  public set exclusive(value: boolean | cdktf.IResolvable) {
    this._exclusive = value;
  }
  public resetExclusive() {
    this._exclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveInput() {
    return this._exclusive;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // job_active_deadline_secs - computed: false, optional: true, required: false
  private _jobActiveDeadlineSecs?: number; 
  public get jobActiveDeadlineSecs() {
    return this.getNumberAttribute('job_active_deadline_secs');
  }
  public set jobActiveDeadlineSecs(value: number) {
    this._jobActiveDeadlineSecs = value;
  }
  public resetJobActiveDeadlineSecs() {
    this._jobActiveDeadlineSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobActiveDeadlineSecsInput() {
    return this._jobActiveDeadlineSecs;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }

  // prepare - computed: false, optional: true, required: false
  private _prepare = new DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepareOutputReference(this, "prepare");
  public get prepare() {
    return this._prepare;
  }
  public putPrepare(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecPrepare) {
    this._prepare.internalValue = value;
  }
  public resetPrepare() {
    this._prepare.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepareInput() {
    return this._prepare.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SUpgradeCattleIoPlanV1ManifestSpecSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SUpgradeCattleIoPlanV1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // upgrade - computed: false, optional: false, required: true
  private _upgrade = new DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgradeOutputReference(this, "upgrade");
  public get upgrade() {
    return this._upgrade;
  }
  public putUpgrade(value: DataK8SUpgradeCattleIoPlanV1ManifestSpecUpgrade) {
    this._upgrade.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeInput() {
    return this._upgrade.internalValue;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest k8s_upgrade_cattle_io_plan_v1_manifest}
*/
export class DataK8SUpgradeCattleIoPlanV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_upgrade_cattle_io_plan_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SUpgradeCattleIoPlanV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SUpgradeCattleIoPlanV1Manifest to import
  * @param importFromId The id of the existing DataK8SUpgradeCattleIoPlanV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SUpgradeCattleIoPlanV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_upgrade_cattle_io_plan_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_cattle_io_plan_v1_manifest k8s_upgrade_cattle_io_plan_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SUpgradeCattleIoPlanV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SUpgradeCattleIoPlanV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_upgrade_cattle_io_plan_v1_manifest',
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
  private _metadata = new DataK8SUpgradeCattleIoPlanV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SUpgradeCattleIoPlanV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SUpgradeCattleIoPlanV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SUpgradeCattleIoPlanV1ManifestSpec) {
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
      metadata: dataK8SUpgradeCattleIoPlanV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SUpgradeCattleIoPlanV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SUpgradeCattleIoPlanV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestMetadata",
      },
      spec: {
        value: dataK8SUpgradeCattleIoPlanV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SUpgradeCattleIoPlanV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
