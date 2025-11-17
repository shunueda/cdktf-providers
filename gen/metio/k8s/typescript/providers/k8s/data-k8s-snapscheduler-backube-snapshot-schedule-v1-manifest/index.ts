// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#metadata DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#metadata}
  */
  readonly metadata: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestMetadata;
  /**
  * SnapshotScheduleSpec defines the desired state of SnapshotSchedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#spec DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#spec}
  */
  readonly spec?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpec;
}
export interface DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#annotations DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#labels DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#name DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#namespace DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestMetadataToTerraform(struct?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestMetadataToHclTerraform(struct?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#key DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#operator DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#values DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressionsToTerraform(struct?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressionsToHclTerraform(struct?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressionsOutputReference {
    return new DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#match_expressions DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#match_labels DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorToTerraform(struct?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorToHclTerraform(struct?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressionsList",
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

export class DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecRetention {
  /**
  * The length of time (time.Duration) after which a given Snapshot will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#expires DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#expires}
  */
  readonly expires?: string;
  /**
  * The maximum number of snapshots to retain per PVC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#max_count DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#max_count}
  */
  readonly maxCount?: number;
}

export function dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecRetentionToTerraform(struct?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expires: cdktf.stringToTerraform(struct!.expires),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
  }
}


export function dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecRetentionToHclTerraform(struct?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expires: {
      value: cdktf.stringToHclTerraform(struct!.expires),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecRetention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expires !== undefined) {
      hasAnyValues = true;
      internalValueResult.expires = this._expires;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecRetention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expires = undefined;
      this._maxCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expires = value.expires;
      this._maxCount = value.maxCount;
    }
  }

  // expires - computed: false, optional: true, required: false
  private _expires?: string; 
  public get expires() {
    return this.getStringAttribute('expires');
  }
  public set expires(value: string) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }
}
export interface DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecSnapshotTemplate {
  /**
  * A list of labels that should be added to each Snapshot created by this schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#labels DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the VolumeSnapshotClass to be used when creating Snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#snapshot_class_name DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#snapshot_class_name}
  */
  readonly snapshotClassName?: string;
}

export function dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecSnapshotTemplateToTerraform(struct?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecSnapshotTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    snapshot_class_name: cdktf.stringToTerraform(struct!.snapshotClassName),
  }
}


export function dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecSnapshotTemplateToHclTerraform(struct?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecSnapshotTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    snapshot_class_name: {
      value: cdktf.stringToHclTerraform(struct!.snapshotClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecSnapshotTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecSnapshotTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._snapshotClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotClassName = this._snapshotClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecSnapshotTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._snapshotClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._snapshotClassName = value.snapshotClassName;
    }
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

  // snapshot_class_name - computed: false, optional: true, required: false
  private _snapshotClassName?: string; 
  public get snapshotClassName() {
    return this.getStringAttribute('snapshot_class_name');
  }
  public set snapshotClassName(value: string) {
    this._snapshotClassName = value;
  }
  public resetSnapshotClassName() {
    this._snapshotClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotClassNameInput() {
    return this._snapshotClassName;
  }
}
export interface DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpec {
  /**
  * A filter to select which PVCs to snapshot via this schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#claim_selector DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#claim_selector}
  */
  readonly claimSelector?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelector;
  /**
  * Indicates that this schedule should be temporarily disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#disabled DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Retention determines how long this schedule's snapshots will be kept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#retention DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#retention}
  */
  readonly retention?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecRetention;
  /**
  * Schedule is a Cronspec specifying when snapshots should be taken. See https://en.wikipedia.org/wiki/Cron for a description of the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#schedule DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#schedule}
  */
  readonly schedule?: string;
  /**
  * A template to customize the Snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#snapshot_template DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest#snapshot_template}
  */
  readonly snapshotTemplate?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecSnapshotTemplate;
}

export function dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecToTerraform(struct?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_selector: dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorToTerraform(struct!.claimSelector),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    retention: dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecRetentionToTerraform(struct!.retention),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    snapshot_template: dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecSnapshotTemplateToTerraform(struct!.snapshotTemplate),
  }
}


export function dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecToHclTerraform(struct?: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_selector: {
      value: dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorToHclTerraform(struct!.claimSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelector",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention: {
      value: dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecRetention",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_template: {
      value: dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecSnapshotTemplateToHclTerraform(struct!.snapshotTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecSnapshotTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimSelector = this._claimSelector?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._snapshotTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotTemplate = this._snapshotTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimSelector.internalValue = undefined;
      this._disabled = undefined;
      this._retention.internalValue = undefined;
      this._schedule = undefined;
      this._snapshotTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimSelector.internalValue = value.claimSelector;
      this._disabled = value.disabled;
      this._retention.internalValue = value.retention;
      this._schedule = value.schedule;
      this._snapshotTemplate.internalValue = value.snapshotTemplate;
    }
  }

  // claim_selector - computed: false, optional: true, required: false
  private _claimSelector = new DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelectorOutputReference(this, "claim_selector");
  public get claimSelector() {
    return this._claimSelector;
  }
  public putClaimSelector(value: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecClaimSelector) {
    this._claimSelector.internalValue = value;
  }
  public resetClaimSelector() {
    this._claimSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimSelectorInput() {
    return this._claimSelector.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // retention - computed: false, optional: true, required: false
  private _retention = new DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecRetention) {
    this._retention.internalValue = value;
  }
  public resetRetention() {
    this._retention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // snapshot_template - computed: false, optional: true, required: false
  private _snapshotTemplate = new DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecSnapshotTemplateOutputReference(this, "snapshot_template");
  public get snapshotTemplate() {
    return this._snapshotTemplate;
  }
  public putSnapshotTemplate(value: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecSnapshotTemplate) {
    this._snapshotTemplate.internalValue = value;
  }
  public resetSnapshotTemplate() {
    this._snapshotTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotTemplateInput() {
    return this._snapshotTemplate.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest k8s_snapscheduler_backube_snapshot_schedule_v1_manifest}
*/
export class DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_snapscheduler_backube_snapshot_schedule_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest to import
  * @param importFromId The id of the existing DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSnapschedulerBackubeSnapshotScheduleV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_snapscheduler_backube_snapshot_schedule_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/snapscheduler_backube_snapshot_schedule_v1_manifest k8s_snapscheduler_backube_snapshot_schedule_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_snapscheduler_backube_snapshot_schedule_v1_manifest',
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
  private _metadata = new DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpec) {
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
      metadata: dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestMetadata",
      },
      spec: {
        value: dataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSnapschedulerBackubeSnapshotScheduleV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
