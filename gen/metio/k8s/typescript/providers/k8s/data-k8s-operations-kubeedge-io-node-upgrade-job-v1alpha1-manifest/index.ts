// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#metadata DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestMetadata;
  /**
  * Specification of the desired behavior of NodeUpgradeJob.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#spec DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpec;
}
export interface DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#annotations DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#labels DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#name DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#key DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#operator DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#values DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#match_expressions DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#match_labels DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorToTerraform(struct?: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorToHclTerraform(struct?: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressionsList",
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

export class DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpec {
  /**
  * CheckItems specifies the items need to be checked before the task is executed. The default CheckItems value is nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#check_items DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#check_items}
  */
  readonly checkItems?: string[];
  /**
  * Concurrency specifies the max number of edge nodes that can be upgraded at the same time. The default Concurrency value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#concurrency DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#concurrency}
  */
  readonly concurrency?: number;
  /**
  * FailureTolerate specifies the task tolerance failure ratio. The default FailureTolerate value is 0.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#failure_tolerate DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#failure_tolerate}
  */
  readonly failureTolerate?: string;
  /**
  * Image specifies a container image name, the image contains: keadm and edgecore. keadm is used as upgradetool, to install the new version of edgecore. The image name consists of registry hostname and repository name, if it includes the tag or digest, the tag or digest will be overwritten by Version field above. If the registry hostname is empty, docker.io will be used as default. The default image name is: kubeedge/installation-package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#image DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * LabelSelector is a filter to select member clusters by labels. It must match a node's labels for the NodeUpgradeJob to be operated on that node. Please note that sets of NodeNames and LabelSelector are ORed. Users must set one and can only set one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#label_selector DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelector;
  /**
  * NodeNames is a request to select some specific nodes. If it is non-empty, the upgrade job simply select these edge nodes to do upgrade operation. Please note that sets of NodeNames and LabelSelector are ORed. Users must set one and can only set one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#node_names DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#node_names}
  */
  readonly nodeNames?: string[];
  /**
  * TimeoutSeconds limits the duration of the node upgrade job. Default to 300. If set to 0, we'll use the default value 300.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#timeout_seconds DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#version DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.checkItems),
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    failure_tolerate: cdktf.stringToTerraform(struct!.failureTolerate),
    image: cdktf.stringToTerraform(struct!.image),
    label_selector: dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorToTerraform(struct!.labelSelector),
    node_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeNames),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.checkItems),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_tolerate: {
      value: cdktf.stringToHclTerraform(struct!.failureTolerate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelector",
    },
    node_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkItems = this._checkItems;
    }
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._failureTolerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureTolerate = this._failureTolerate;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._nodeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNames = this._nodeNames;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkItems = undefined;
      this._concurrency = undefined;
      this._failureTolerate = undefined;
      this._image = undefined;
      this._labelSelector.internalValue = undefined;
      this._nodeNames = undefined;
      this._timeoutSeconds = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkItems = value.checkItems;
      this._concurrency = value.concurrency;
      this._failureTolerate = value.failureTolerate;
      this._image = value.image;
      this._labelSelector.internalValue = value.labelSelector;
      this._nodeNames = value.nodeNames;
      this._timeoutSeconds = value.timeoutSeconds;
      this._version = value.version;
    }
  }

  // check_items - computed: false, optional: true, required: false
  private _checkItems?: string[]; 
  public get checkItems() {
    return this.getListAttribute('check_items');
  }
  public set checkItems(value: string[]) {
    this._checkItems = value;
  }
  public resetCheckItems() {
    this._checkItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkItemsInput() {
    return this._checkItems;
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

  // failure_tolerate - computed: false, optional: true, required: false
  private _failureTolerate?: string; 
  public get failureTolerate() {
    return this.getStringAttribute('failure_tolerate');
  }
  public set failureTolerate(value: string) {
    this._failureTolerate = value;
  }
  public resetFailureTolerate() {
    this._failureTolerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureTolerateInput() {
    return this._failureTolerate;
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

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // node_names - computed: false, optional: true, required: false
  private _nodeNames?: string[]; 
  public get nodeNames() {
    return this.getListAttribute('node_names');
  }
  public set nodeNames(value: string[]) {
    this._nodeNames = value;
  }
  public resetNodeNames() {
    this._nodeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNamesInput() {
    return this._nodeNames;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest k8s_operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest}
*/
export class DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest k8s_operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operations_kubeedge_io_node_upgrade_job_v1alpha1_manifest',
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
  private _metadata = new DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpec) {
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
      metadata: dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperationsKubeedgeIoNodeUpgradeJobV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
