// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SVeleroIoScheduleV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#metadata DataK8SVeleroIoScheduleV1Manifest#metadata}
  */
  readonly metadata: DataK8SVeleroIoScheduleV1ManifestMetadata;
  /**
  * ScheduleSpec defines the specification for a Velero schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#spec DataK8SVeleroIoScheduleV1Manifest#spec}
  */
  readonly spec?: DataK8SVeleroIoScheduleV1ManifestSpec;
}
export interface DataK8SVeleroIoScheduleV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#annotations DataK8SVeleroIoScheduleV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#labels DataK8SVeleroIoScheduleV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#name DataK8SVeleroIoScheduleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#namespace DataK8SVeleroIoScheduleV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SVeleroIoScheduleV1ManifestMetadataToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoScheduleV1ManifestMetadataToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoScheduleV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#key DataK8SVeleroIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#operator DataK8SVeleroIoScheduleV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#values DataK8SVeleroIoScheduleV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#match_expressions DataK8SVeleroIoScheduleV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#match_labels DataK8SVeleroIoScheduleV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressionsList",
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

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostExec {
  /**
  * Command is the command and arguments to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#command DataK8SVeleroIoScheduleV1Manifest#command}
  */
  readonly command: string[];
  /**
  * Container is the container in the pod where the command should be executed. If not specified, the pod's first container is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#container DataK8SVeleroIoScheduleV1Manifest#container}
  */
  readonly container?: string;
  /**
  * OnError specifies how Velero should behave if it encounters an error executing this hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#on_error DataK8SVeleroIoScheduleV1Manifest#on_error}
  */
  readonly onError?: string;
  /**
  * Timeout defines the maximum amount of time Velero should wait for the hook to complete before considering the execution a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#timeout DataK8SVeleroIoScheduleV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostExecToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    container: cdktf.stringToTerraform(struct!.container),
    on_error: cdktf.stringToTerraform(struct!.onError),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostExecToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_error: {
      value: cdktf.stringToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._container = undefined;
      this._onError = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._container = value.container;
      this._onError = value.onError;
      this._timeout = value.timeout;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // on_error - computed: false, optional: true, required: false
  private _onError?: string; 
  public get onError() {
    return this.getStringAttribute('on_error');
  }
  public set onError(value: string) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
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
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPost {
  /**
  * Exec defines an exec hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#exec DataK8SVeleroIoScheduleV1Manifest#exec}
  */
  readonly exec: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostExec;
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostExecToTerraform(struct!.exec),
  }
}


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostExec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
    }
  }

  // exec - computed: false, optional: false, required: true
  private _exec = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostExec) {
    this._exec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }
}

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPost[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostOutputReference {
    return new DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreExec {
  /**
  * Command is the command and arguments to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#command DataK8SVeleroIoScheduleV1Manifest#command}
  */
  readonly command: string[];
  /**
  * Container is the container in the pod where the command should be executed. If not specified, the pod's first container is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#container DataK8SVeleroIoScheduleV1Manifest#container}
  */
  readonly container?: string;
  /**
  * OnError specifies how Velero should behave if it encounters an error executing this hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#on_error DataK8SVeleroIoScheduleV1Manifest#on_error}
  */
  readonly onError?: string;
  /**
  * Timeout defines the maximum amount of time Velero should wait for the hook to complete before considering the execution a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#timeout DataK8SVeleroIoScheduleV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreExecToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    container: cdktf.stringToTerraform(struct!.container),
    on_error: cdktf.stringToTerraform(struct!.onError),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreExecToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_error: {
      value: cdktf.stringToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._container = undefined;
      this._onError = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._container = value.container;
      this._onError = value.onError;
      this._timeout = value.timeout;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // on_error - computed: false, optional: true, required: false
  private _onError?: string; 
  public get onError() {
    return this.getStringAttribute('on_error');
  }
  public set onError(value: string) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
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
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPre {
  /**
  * Exec defines an exec hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#exec DataK8SVeleroIoScheduleV1Manifest#exec}
  */
  readonly exec: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreExec;
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreExecToTerraform(struct!.exec),
  }
}


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreExec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPre | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPre | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
    }
  }

  // exec - computed: false, optional: false, required: true
  private _exec = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreExec) {
    this._exec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }
}

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPre[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreOutputReference {
    return new DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResources {
  /**
  * ExcludedNamespaces specifies the namespaces to which this hook spec does not apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#excluded_namespaces DataK8SVeleroIoScheduleV1Manifest#excluded_namespaces}
  */
  readonly excludedNamespaces?: string[];
  /**
  * ExcludedResources specifies the resources to which this hook spec does not apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#excluded_resources DataK8SVeleroIoScheduleV1Manifest#excluded_resources}
  */
  readonly excludedResources?: string[];
  /**
  * IncludedNamespaces specifies the namespaces to which this hook spec applies. If empty, it applies to all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#included_namespaces DataK8SVeleroIoScheduleV1Manifest#included_namespaces}
  */
  readonly includedNamespaces?: string[];
  /**
  * IncludedResources specifies the resources to which this hook spec applies. If empty, it applies to all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#included_resources DataK8SVeleroIoScheduleV1Manifest#included_resources}
  */
  readonly includedResources?: string[];
  /**
  * LabelSelector, if specified, filters the resources to which this hook spec applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#label_selector DataK8SVeleroIoScheduleV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelector;
  /**
  * Name is the name of this hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#name DataK8SVeleroIoScheduleV1Manifest#name}
  */
  readonly name: string;
  /**
  * PostHooks is a list of BackupResourceHooks to execute after storing the item in the backup. These are executed after all 'additional items' from item actions are processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#post DataK8SVeleroIoScheduleV1Manifest#post}
  */
  readonly post?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPost[] | cdktf.IResolvable;
  /**
  * PreHooks is a list of BackupResourceHooks to execute prior to storing the item in the backup. These are executed before any 'additional items' from item actions are processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#pre DataK8SVeleroIoScheduleV1Manifest#pre}
  */
  readonly pre?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPre[] | cdktf.IResolvable;
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNamespaces),
    excluded_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedResources),
    included_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedNamespaces),
    included_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedResources),
    label_selector: dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    post: cdktf.listMapper(dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostToTerraform, false)(struct!.post),
    pre: cdktf.listMapper(dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreToTerraform, false)(struct!.pre),
  }
}


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label_selector: {
      value: dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelector",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostToHclTerraform, false)(struct!.post),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostList",
    },
    pre: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreToHclTerraform, false)(struct!.pre),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNamespaces = this._excludedNamespaces;
    }
    if (this._excludedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedResources = this._excludedResources;
    }
    if (this._includedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedNamespaces = this._includedNamespaces;
    }
    if (this._includedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedResources = this._includedResources;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._post?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.post = this._post?.internalValue;
    }
    if (this._pre?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pre = this._pre?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedNamespaces = undefined;
      this._excludedResources = undefined;
      this._includedNamespaces = undefined;
      this._includedResources = undefined;
      this._labelSelector.internalValue = undefined;
      this._name = undefined;
      this._post.internalValue = undefined;
      this._pre.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedNamespaces = value.excludedNamespaces;
      this._excludedResources = value.excludedResources;
      this._includedNamespaces = value.includedNamespaces;
      this._includedResources = value.includedResources;
      this._labelSelector.internalValue = value.labelSelector;
      this._name = value.name;
      this._post.internalValue = value.post;
      this._pre.internalValue = value.pre;
    }
  }

  // excluded_namespaces - computed: false, optional: true, required: false
  private _excludedNamespaces?: string[]; 
  public get excludedNamespaces() {
    return this.getListAttribute('excluded_namespaces');
  }
  public set excludedNamespaces(value: string[]) {
    this._excludedNamespaces = value;
  }
  public resetExcludedNamespaces() {
    this._excludedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNamespacesInput() {
    return this._excludedNamespaces;
  }

  // excluded_resources - computed: false, optional: true, required: false
  private _excludedResources?: string[]; 
  public get excludedResources() {
    return this.getListAttribute('excluded_resources');
  }
  public set excludedResources(value: string[]) {
    this._excludedResources = value;
  }
  public resetExcludedResources() {
    this._excludedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedResourcesInput() {
    return this._excludedResources;
  }

  // included_namespaces - computed: false, optional: true, required: false
  private _includedNamespaces?: string[]; 
  public get includedNamespaces() {
    return this.getListAttribute('included_namespaces');
  }
  public set includedNamespaces(value: string[]) {
    this._includedNamespaces = value;
  }
  public resetIncludedNamespaces() {
    this._includedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedNamespacesInput() {
    return this._includedNamespaces;
  }

  // included_resources - computed: false, optional: true, required: false
  private _includedResources?: string[]; 
  public get includedResources() {
    return this.getListAttribute('included_resources');
  }
  public set includedResources(value: string[]) {
    this._includedResources = value;
  }
  public resetIncludedResources() {
    this._includedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedResourcesInput() {
    return this._includedResources;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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

  // post - computed: false, optional: true, required: false
  private _post = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPostList(this, "post", false);
  public get post() {
    return this._post;
  }
  public putPost(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPost[] | cdktf.IResolvable) {
    this._post.internalValue = value;
  }
  public resetPost() {
    this._post.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postInput() {
    return this._post.internalValue;
  }

  // pre - computed: false, optional: true, required: false
  private _pre = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPreList(this, "pre", false);
  public get pre() {
    return this._pre;
  }
  public putPre(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesPre[] | cdktf.IResolvable) {
    this._pre.internalValue = value;
  }
  public resetPre() {
    this._pre.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preInput() {
    return this._pre.internalValue;
  }
}

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesOutputReference {
    return new DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooks {
  /**
  * Resources are hooks that should be executed when backing up individual instances of a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#resources DataK8SVeleroIoScheduleV1Manifest#resources}
  */
  readonly resources?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResources[] | cdktf.IResolvable;
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesToTerraform, false)(struct!.resources),
  }
}


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#key DataK8SVeleroIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#operator DataK8SVeleroIoScheduleV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#values DataK8SVeleroIoScheduleV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#match_expressions DataK8SVeleroIoScheduleV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#match_labels DataK8SVeleroIoScheduleV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressionsList",
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

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#labels DataK8SVeleroIoScheduleV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateMetadataToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateMetadataToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
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
}
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#key DataK8SVeleroIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#operator DataK8SVeleroIoScheduleV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#values DataK8SVeleroIoScheduleV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressionsToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressionsOutputReference {
    return new DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#match_expressions DataK8SVeleroIoScheduleV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#match_labels DataK8SVeleroIoScheduleV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressionsList",
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

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsMatchExpressions[] | cdktf.IResolvable) {
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

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsOutputReference {
    return new DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateResourcePolicy {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#api_group DataK8SVeleroIoScheduleV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#kind DataK8SVeleroIoScheduleV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#name DataK8SVeleroIoScheduleV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateResourcePolicyToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateResourcePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateResourcePolicyToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateResourcePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateResourcePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateResourcePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateResourcePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplateUploaderConfig {
  /**
  * ParallelFilesUpload is the number of files parallel uploads to perform when using the uploader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#parallel_files_upload DataK8SVeleroIoScheduleV1Manifest#parallel_files_upload}
  */
  readonly parallelFilesUpload?: number;
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateUploaderConfigToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateUploaderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parallel_files_upload: cdktf.numberToTerraform(struct!.parallelFilesUpload),
  }
}


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateUploaderConfigToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateUploaderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parallel_files_upload: {
      value: cdktf.numberToHclTerraform(struct!.parallelFilesUpload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateUploaderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplateUploaderConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parallelFilesUpload !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelFilesUpload = this._parallelFilesUpload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateUploaderConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parallelFilesUpload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parallelFilesUpload = value.parallelFilesUpload;
    }
  }

  // parallel_files_upload - computed: false, optional: true, required: false
  private _parallelFilesUpload?: number; 
  public get parallelFilesUpload() {
    return this.getNumberAttribute('parallel_files_upload');
  }
  public set parallelFilesUpload(value: number) {
    this._parallelFilesUpload = value;
  }
  public resetParallelFilesUpload() {
    this._parallelFilesUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelFilesUploadInput() {
    return this._parallelFilesUpload;
  }
}
export interface DataK8SVeleroIoScheduleV1ManifestSpecTemplate {
  /**
  * CSISnapshotTimeout specifies the time used to wait for CSI VolumeSnapshot status turns to ReadyToUse during creation, before returning error as timeout. The default value is 10 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#csi_snapshot_timeout DataK8SVeleroIoScheduleV1Manifest#csi_snapshot_timeout}
  */
  readonly csiSnapshotTimeout?: string;
  /**
  * DataMover specifies the data mover to be used by the backup. If DataMover is '' or 'velero', the built-in data mover will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#datamover DataK8SVeleroIoScheduleV1Manifest#datamover}
  */
  readonly datamover?: string;
  /**
  * DefaultVolumesToFsBackup specifies whether pod volume file system backup should be used for all volumes by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#default_volumes_to_fs_backup DataK8SVeleroIoScheduleV1Manifest#default_volumes_to_fs_backup}
  */
  readonly defaultVolumesToFsBackup?: boolean | cdktf.IResolvable;
  /**
  * DefaultVolumesToRestic specifies whether restic should be used to take a backup of all pod volumes by default. Deprecated: this field is no longer used and will be removed entirely in future. Use DefaultVolumesToFsBackup instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#default_volumes_to_restic DataK8SVeleroIoScheduleV1Manifest#default_volumes_to_restic}
  */
  readonly defaultVolumesToRestic?: boolean | cdktf.IResolvable;
  /**
  * ExcludedClusterScopedResources is a slice of cluster-scoped resource type names to exclude from the backup. If set to '*', all cluster-scoped resource types are excluded. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#excluded_cluster_scoped_resources DataK8SVeleroIoScheduleV1Manifest#excluded_cluster_scoped_resources}
  */
  readonly excludedClusterScopedResources?: string[];
  /**
  * ExcludedNamespaceScopedResources is a slice of namespace-scoped resource type names to exclude from the backup. If set to '*', all namespace-scoped resource types are excluded. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#excluded_namespace_scoped_resources DataK8SVeleroIoScheduleV1Manifest#excluded_namespace_scoped_resources}
  */
  readonly excludedNamespaceScopedResources?: string[];
  /**
  * ExcludedNamespaces contains a list of namespaces that are not included in the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#excluded_namespaces DataK8SVeleroIoScheduleV1Manifest#excluded_namespaces}
  */
  readonly excludedNamespaces?: string[];
  /**
  * ExcludedResources is a slice of resource names that are not included in the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#excluded_resources DataK8SVeleroIoScheduleV1Manifest#excluded_resources}
  */
  readonly excludedResources?: string[];
  /**
  * Hooks represent custom behaviors that should be executed at different phases of the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#hooks DataK8SVeleroIoScheduleV1Manifest#hooks}
  */
  readonly hooks?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooks;
  /**
  * IncludeClusterResources specifies whether cluster-scoped resources should be included for consideration in the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#include_cluster_resources DataK8SVeleroIoScheduleV1Manifest#include_cluster_resources}
  */
  readonly includeClusterResources?: boolean | cdktf.IResolvable;
  /**
  * IncludedClusterScopedResources is a slice of cluster-scoped resource type names to include in the backup. If set to '*', all cluster-scoped resource types are included. The default value is empty, which means only related cluster-scoped resources are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#included_cluster_scoped_resources DataK8SVeleroIoScheduleV1Manifest#included_cluster_scoped_resources}
  */
  readonly includedClusterScopedResources?: string[];
  /**
  * IncludedNamespaceScopedResources is a slice of namespace-scoped resource type names to include in the backup. The default value is '*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#included_namespace_scoped_resources DataK8SVeleroIoScheduleV1Manifest#included_namespace_scoped_resources}
  */
  readonly includedNamespaceScopedResources?: string[];
  /**
  * IncludedNamespaces is a slice of namespace names to include objects from. If empty, all namespaces are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#included_namespaces DataK8SVeleroIoScheduleV1Manifest#included_namespaces}
  */
  readonly includedNamespaces?: string[];
  /**
  * IncludedResources is a slice of resource names to include in the backup. If empty, all resources are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#included_resources DataK8SVeleroIoScheduleV1Manifest#included_resources}
  */
  readonly includedResources?: string[];
  /**
  * ItemOperationTimeout specifies the time used to wait for asynchronous BackupItemAction operations The default value is 4 hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#item_operation_timeout DataK8SVeleroIoScheduleV1Manifest#item_operation_timeout}
  */
  readonly itemOperationTimeout?: string;
  /**
  * LabelSelector is a metav1.LabelSelector to filter with when adding individual objects to the backup. If empty or nil, all objects are included. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#label_selector DataK8SVeleroIoScheduleV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#metadata DataK8SVeleroIoScheduleV1Manifest#metadata}
  */
  readonly metadata?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateMetadata;
  /**
  * OrLabelSelectors is list of metav1.LabelSelector to filter with when adding individual objects to the backup. If multiple provided they will be joined by the OR operator. LabelSelector as well as OrLabelSelectors cannot co-exist in backup request, only one of them can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#or_label_selectors DataK8SVeleroIoScheduleV1Manifest#or_label_selectors}
  */
  readonly orLabelSelectors?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectors[] | cdktf.IResolvable;
  /**
  * OrderedResources specifies the backup order of resources of specific Kind. The map key is the resource name and value is a list of object names separated by commas. Each resource name has format 'namespace/objectname'. For cluster resources, simply use 'objectname'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#ordered_resources DataK8SVeleroIoScheduleV1Manifest#ordered_resources}
  */
  readonly orderedResources?: { [key: string]: string };
  /**
  * ResourcePolicy specifies the referenced resource policies that backup should follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#resource_policy DataK8SVeleroIoScheduleV1Manifest#resource_policy}
  */
  readonly resourcePolicy?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateResourcePolicy;
  /**
  * SnapshotMoveData specifies whether snapshot data should be moved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#snapshot_move_data DataK8SVeleroIoScheduleV1Manifest#snapshot_move_data}
  */
  readonly snapshotMoveData?: boolean | cdktf.IResolvable;
  /**
  * SnapshotVolumes specifies whether to take snapshots of any PV's referenced in the set of objects included in the Backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#snapshot_volumes DataK8SVeleroIoScheduleV1Manifest#snapshot_volumes}
  */
  readonly snapshotVolumes?: boolean | cdktf.IResolvable;
  /**
  * StorageLocation is a string containing the name of a BackupStorageLocation where the backup should be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#storage_location DataK8SVeleroIoScheduleV1Manifest#storage_location}
  */
  readonly storageLocation?: string;
  /**
  * TTL is a time.Duration-parseable string describing how long the Backup should be retained for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#ttl DataK8SVeleroIoScheduleV1Manifest#ttl}
  */
  readonly ttl?: string;
  /**
  * UploaderConfig specifies the configuration for the uploader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#uploader_config DataK8SVeleroIoScheduleV1Manifest#uploader_config}
  */
  readonly uploaderConfig?: DataK8SVeleroIoScheduleV1ManifestSpecTemplateUploaderConfig;
  /**
  * VolumeSnapshotLocations is a list containing names of VolumeSnapshotLocations associated with this backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#volume_snapshot_locations DataK8SVeleroIoScheduleV1Manifest#volume_snapshot_locations}
  */
  readonly volumeSnapshotLocations?: string[];
}

export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csi_snapshot_timeout: cdktf.stringToTerraform(struct!.csiSnapshotTimeout),
    datamover: cdktf.stringToTerraform(struct!.datamover),
    default_volumes_to_fs_backup: cdktf.booleanToTerraform(struct!.defaultVolumesToFsBackup),
    default_volumes_to_restic: cdktf.booleanToTerraform(struct!.defaultVolumesToRestic),
    excluded_cluster_scoped_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedClusterScopedResources),
    excluded_namespace_scoped_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNamespaceScopedResources),
    excluded_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNamespaces),
    excluded_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedResources),
    hooks: dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksToTerraform(struct!.hooks),
    include_cluster_resources: cdktf.booleanToTerraform(struct!.includeClusterResources),
    included_cluster_scoped_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedClusterScopedResources),
    included_namespace_scoped_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedNamespaceScopedResources),
    included_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedNamespaces),
    included_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedResources),
    item_operation_timeout: cdktf.stringToTerraform(struct!.itemOperationTimeout),
    label_selector: dataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorToTerraform(struct!.labelSelector),
    metadata: dataK8SVeleroIoScheduleV1ManifestSpecTemplateMetadataToTerraform(struct!.metadata),
    or_label_selectors: cdktf.listMapper(dataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsToTerraform, false)(struct!.orLabelSelectors),
    ordered_resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.orderedResources),
    resource_policy: dataK8SVeleroIoScheduleV1ManifestSpecTemplateResourcePolicyToTerraform(struct!.resourcePolicy),
    snapshot_move_data: cdktf.booleanToTerraform(struct!.snapshotMoveData),
    snapshot_volumes: cdktf.booleanToTerraform(struct!.snapshotVolumes),
    storage_location: cdktf.stringToTerraform(struct!.storageLocation),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    uploader_config: dataK8SVeleroIoScheduleV1ManifestSpecTemplateUploaderConfigToTerraform(struct!.uploaderConfig),
    volume_snapshot_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumeSnapshotLocations),
  }
}


export function dataK8SVeleroIoScheduleV1ManifestSpecTemplateToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csi_snapshot_timeout: {
      value: cdktf.stringToHclTerraform(struct!.csiSnapshotTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datamover: {
      value: cdktf.stringToHclTerraform(struct!.datamover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_volumes_to_fs_backup: {
      value: cdktf.booleanToHclTerraform(struct!.defaultVolumesToFsBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_volumes_to_restic: {
      value: cdktf.booleanToHclTerraform(struct!.defaultVolumesToRestic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_cluster_scoped_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedClusterScopedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_namespace_scoped_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedNamespaceScopedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hooks: {
      value: dataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksToHclTerraform(struct!.hooks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooks",
    },
    include_cluster_resources: {
      value: cdktf.booleanToHclTerraform(struct!.includeClusterResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_cluster_scoped_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedClusterScopedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_namespace_scoped_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedNamespaceScopedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    item_operation_timeout: {
      value: cdktf.stringToHclTerraform(struct!.itemOperationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: dataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelector",
    },
    metadata: {
      value: dataK8SVeleroIoScheduleV1ManifestSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateMetadata",
    },
    or_label_selectors: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsToHclTerraform, false)(struct!.orLabelSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsList",
    },
    ordered_resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.orderedResources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_policy: {
      value: dataK8SVeleroIoScheduleV1ManifestSpecTemplateResourcePolicyToHclTerraform(struct!.resourcePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateResourcePolicy",
    },
    snapshot_move_data: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotMoveData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_location: {
      value: cdktf.stringToHclTerraform(struct!.storageLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uploader_config: {
      value: dataK8SVeleroIoScheduleV1ManifestSpecTemplateUploaderConfigToHclTerraform(struct!.uploaderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplateUploaderConfig",
    },
    volume_snapshot_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumeSnapshotLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoScheduleV1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csiSnapshotTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiSnapshotTimeout = this._csiSnapshotTimeout;
    }
    if (this._datamover !== undefined) {
      hasAnyValues = true;
      internalValueResult.datamover = this._datamover;
    }
    if (this._defaultVolumesToFsBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVolumesToFsBackup = this._defaultVolumesToFsBackup;
    }
    if (this._defaultVolumesToRestic !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVolumesToRestic = this._defaultVolumesToRestic;
    }
    if (this._excludedClusterScopedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedClusterScopedResources = this._excludedClusterScopedResources;
    }
    if (this._excludedNamespaceScopedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNamespaceScopedResources = this._excludedNamespaceScopedResources;
    }
    if (this._excludedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNamespaces = this._excludedNamespaces;
    }
    if (this._excludedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedResources = this._excludedResources;
    }
    if (this._hooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hooks = this._hooks?.internalValue;
    }
    if (this._includeClusterResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeClusterResources = this._includeClusterResources;
    }
    if (this._includedClusterScopedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedClusterScopedResources = this._includedClusterScopedResources;
    }
    if (this._includedNamespaceScopedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedNamespaceScopedResources = this._includedNamespaceScopedResources;
    }
    if (this._includedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedNamespaces = this._includedNamespaces;
    }
    if (this._includedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedResources = this._includedResources;
    }
    if (this._itemOperationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemOperationTimeout = this._itemOperationTimeout;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._orLabelSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orLabelSelectors = this._orLabelSelectors?.internalValue;
    }
    if (this._orderedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderedResources = this._orderedResources;
    }
    if (this._resourcePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePolicy = this._resourcePolicy?.internalValue;
    }
    if (this._snapshotMoveData !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotMoveData = this._snapshotMoveData;
    }
    if (this._snapshotVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotVolumes = this._snapshotVolumes;
    }
    if (this._storageLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocation = this._storageLocation;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uploaderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploaderConfig = this._uploaderConfig?.internalValue;
    }
    if (this._volumeSnapshotLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSnapshotLocations = this._volumeSnapshotLocations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csiSnapshotTimeout = undefined;
      this._datamover = undefined;
      this._defaultVolumesToFsBackup = undefined;
      this._defaultVolumesToRestic = undefined;
      this._excludedClusterScopedResources = undefined;
      this._excludedNamespaceScopedResources = undefined;
      this._excludedNamespaces = undefined;
      this._excludedResources = undefined;
      this._hooks.internalValue = undefined;
      this._includeClusterResources = undefined;
      this._includedClusterScopedResources = undefined;
      this._includedNamespaceScopedResources = undefined;
      this._includedNamespaces = undefined;
      this._includedResources = undefined;
      this._itemOperationTimeout = undefined;
      this._labelSelector.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._orLabelSelectors.internalValue = undefined;
      this._orderedResources = undefined;
      this._resourcePolicy.internalValue = undefined;
      this._snapshotMoveData = undefined;
      this._snapshotVolumes = undefined;
      this._storageLocation = undefined;
      this._ttl = undefined;
      this._uploaderConfig.internalValue = undefined;
      this._volumeSnapshotLocations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csiSnapshotTimeout = value.csiSnapshotTimeout;
      this._datamover = value.datamover;
      this._defaultVolumesToFsBackup = value.defaultVolumesToFsBackup;
      this._defaultVolumesToRestic = value.defaultVolumesToRestic;
      this._excludedClusterScopedResources = value.excludedClusterScopedResources;
      this._excludedNamespaceScopedResources = value.excludedNamespaceScopedResources;
      this._excludedNamespaces = value.excludedNamespaces;
      this._excludedResources = value.excludedResources;
      this._hooks.internalValue = value.hooks;
      this._includeClusterResources = value.includeClusterResources;
      this._includedClusterScopedResources = value.includedClusterScopedResources;
      this._includedNamespaceScopedResources = value.includedNamespaceScopedResources;
      this._includedNamespaces = value.includedNamespaces;
      this._includedResources = value.includedResources;
      this._itemOperationTimeout = value.itemOperationTimeout;
      this._labelSelector.internalValue = value.labelSelector;
      this._metadata.internalValue = value.metadata;
      this._orLabelSelectors.internalValue = value.orLabelSelectors;
      this._orderedResources = value.orderedResources;
      this._resourcePolicy.internalValue = value.resourcePolicy;
      this._snapshotMoveData = value.snapshotMoveData;
      this._snapshotVolumes = value.snapshotVolumes;
      this._storageLocation = value.storageLocation;
      this._ttl = value.ttl;
      this._uploaderConfig.internalValue = value.uploaderConfig;
      this._volumeSnapshotLocations = value.volumeSnapshotLocations;
    }
  }

  // csi_snapshot_timeout - computed: false, optional: true, required: false
  private _csiSnapshotTimeout?: string; 
  public get csiSnapshotTimeout() {
    return this.getStringAttribute('csi_snapshot_timeout');
  }
  public set csiSnapshotTimeout(value: string) {
    this._csiSnapshotTimeout = value;
  }
  public resetCsiSnapshotTimeout() {
    this._csiSnapshotTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiSnapshotTimeoutInput() {
    return this._csiSnapshotTimeout;
  }

  // datamover - computed: false, optional: true, required: false
  private _datamover?: string; 
  public get datamover() {
    return this.getStringAttribute('datamover');
  }
  public set datamover(value: string) {
    this._datamover = value;
  }
  public resetDatamover() {
    this._datamover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datamoverInput() {
    return this._datamover;
  }

  // default_volumes_to_fs_backup - computed: false, optional: true, required: false
  private _defaultVolumesToFsBackup?: boolean | cdktf.IResolvable; 
  public get defaultVolumesToFsBackup() {
    return this.getBooleanAttribute('default_volumes_to_fs_backup');
  }
  public set defaultVolumesToFsBackup(value: boolean | cdktf.IResolvable) {
    this._defaultVolumesToFsBackup = value;
  }
  public resetDefaultVolumesToFsBackup() {
    this._defaultVolumesToFsBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVolumesToFsBackupInput() {
    return this._defaultVolumesToFsBackup;
  }

  // default_volumes_to_restic - computed: false, optional: true, required: false
  private _defaultVolumesToRestic?: boolean | cdktf.IResolvable; 
  public get defaultVolumesToRestic() {
    return this.getBooleanAttribute('default_volumes_to_restic');
  }
  public set defaultVolumesToRestic(value: boolean | cdktf.IResolvable) {
    this._defaultVolumesToRestic = value;
  }
  public resetDefaultVolumesToRestic() {
    this._defaultVolumesToRestic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVolumesToResticInput() {
    return this._defaultVolumesToRestic;
  }

  // excluded_cluster_scoped_resources - computed: false, optional: true, required: false
  private _excludedClusterScopedResources?: string[]; 
  public get excludedClusterScopedResources() {
    return this.getListAttribute('excluded_cluster_scoped_resources');
  }
  public set excludedClusterScopedResources(value: string[]) {
    this._excludedClusterScopedResources = value;
  }
  public resetExcludedClusterScopedResources() {
    this._excludedClusterScopedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedClusterScopedResourcesInput() {
    return this._excludedClusterScopedResources;
  }

  // excluded_namespace_scoped_resources - computed: false, optional: true, required: false
  private _excludedNamespaceScopedResources?: string[]; 
  public get excludedNamespaceScopedResources() {
    return this.getListAttribute('excluded_namespace_scoped_resources');
  }
  public set excludedNamespaceScopedResources(value: string[]) {
    this._excludedNamespaceScopedResources = value;
  }
  public resetExcludedNamespaceScopedResources() {
    this._excludedNamespaceScopedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNamespaceScopedResourcesInput() {
    return this._excludedNamespaceScopedResources;
  }

  // excluded_namespaces - computed: false, optional: true, required: false
  private _excludedNamespaces?: string[]; 
  public get excludedNamespaces() {
    return this.getListAttribute('excluded_namespaces');
  }
  public set excludedNamespaces(value: string[]) {
    this._excludedNamespaces = value;
  }
  public resetExcludedNamespaces() {
    this._excludedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNamespacesInput() {
    return this._excludedNamespaces;
  }

  // excluded_resources - computed: false, optional: true, required: false
  private _excludedResources?: string[]; 
  public get excludedResources() {
    return this.getListAttribute('excluded_resources');
  }
  public set excludedResources(value: string[]) {
    this._excludedResources = value;
  }
  public resetExcludedResources() {
    this._excludedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedResourcesInput() {
    return this._excludedResources;
  }

  // hooks - computed: false, optional: true, required: false
  private _hooks = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooksOutputReference(this, "hooks");
  public get hooks() {
    return this._hooks;
  }
  public putHooks(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateHooks) {
    this._hooks.internalValue = value;
  }
  public resetHooks() {
    this._hooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hooksInput() {
    return this._hooks.internalValue;
  }

  // include_cluster_resources - computed: false, optional: true, required: false
  private _includeClusterResources?: boolean | cdktf.IResolvable; 
  public get includeClusterResources() {
    return this.getBooleanAttribute('include_cluster_resources');
  }
  public set includeClusterResources(value: boolean | cdktf.IResolvable) {
    this._includeClusterResources = value;
  }
  public resetIncludeClusterResources() {
    this._includeClusterResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeClusterResourcesInput() {
    return this._includeClusterResources;
  }

  // included_cluster_scoped_resources - computed: false, optional: true, required: false
  private _includedClusterScopedResources?: string[]; 
  public get includedClusterScopedResources() {
    return this.getListAttribute('included_cluster_scoped_resources');
  }
  public set includedClusterScopedResources(value: string[]) {
    this._includedClusterScopedResources = value;
  }
  public resetIncludedClusterScopedResources() {
    this._includedClusterScopedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedClusterScopedResourcesInput() {
    return this._includedClusterScopedResources;
  }

  // included_namespace_scoped_resources - computed: false, optional: true, required: false
  private _includedNamespaceScopedResources?: string[]; 
  public get includedNamespaceScopedResources() {
    return this.getListAttribute('included_namespace_scoped_resources');
  }
  public set includedNamespaceScopedResources(value: string[]) {
    this._includedNamespaceScopedResources = value;
  }
  public resetIncludedNamespaceScopedResources() {
    this._includedNamespaceScopedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedNamespaceScopedResourcesInput() {
    return this._includedNamespaceScopedResources;
  }

  // included_namespaces - computed: false, optional: true, required: false
  private _includedNamespaces?: string[]; 
  public get includedNamespaces() {
    return this.getListAttribute('included_namespaces');
  }
  public set includedNamespaces(value: string[]) {
    this._includedNamespaces = value;
  }
  public resetIncludedNamespaces() {
    this._includedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedNamespacesInput() {
    return this._includedNamespaces;
  }

  // included_resources - computed: false, optional: true, required: false
  private _includedResources?: string[]; 
  public get includedResources() {
    return this.getListAttribute('included_resources');
  }
  public set includedResources(value: string[]) {
    this._includedResources = value;
  }
  public resetIncludedResources() {
    this._includedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedResourcesInput() {
    return this._includedResources;
  }

  // item_operation_timeout - computed: false, optional: true, required: false
  private _itemOperationTimeout?: string; 
  public get itemOperationTimeout() {
    return this.getStringAttribute('item_operation_timeout');
  }
  public set itemOperationTimeout(value: string) {
    this._itemOperationTimeout = value;
  }
  public resetItemOperationTimeout() {
    this._itemOperationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemOperationTimeoutInput() {
    return this._itemOperationTimeout;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // or_label_selectors - computed: false, optional: true, required: false
  private _orLabelSelectors = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectorsList(this, "or_label_selectors", false);
  public get orLabelSelectors() {
    return this._orLabelSelectors;
  }
  public putOrLabelSelectors(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateOrLabelSelectors[] | cdktf.IResolvable) {
    this._orLabelSelectors.internalValue = value;
  }
  public resetOrLabelSelectors() {
    this._orLabelSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orLabelSelectorsInput() {
    return this._orLabelSelectors.internalValue;
  }

  // ordered_resources - computed: false, optional: true, required: false
  private _orderedResources?: { [key: string]: string }; 
  public get orderedResources() {
    return this.getStringMapAttribute('ordered_resources');
  }
  public set orderedResources(value: { [key: string]: string }) {
    this._orderedResources = value;
  }
  public resetOrderedResources() {
    this._orderedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedResourcesInput() {
    return this._orderedResources;
  }

  // resource_policy - computed: false, optional: true, required: false
  private _resourcePolicy = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateResourcePolicyOutputReference(this, "resource_policy");
  public get resourcePolicy() {
    return this._resourcePolicy;
  }
  public putResourcePolicy(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateResourcePolicy) {
    this._resourcePolicy.internalValue = value;
  }
  public resetResourcePolicy() {
    this._resourcePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePolicyInput() {
    return this._resourcePolicy.internalValue;
  }

  // snapshot_move_data - computed: false, optional: true, required: false
  private _snapshotMoveData?: boolean | cdktf.IResolvable; 
  public get snapshotMoveData() {
    return this.getBooleanAttribute('snapshot_move_data');
  }
  public set snapshotMoveData(value: boolean | cdktf.IResolvable) {
    this._snapshotMoveData = value;
  }
  public resetSnapshotMoveData() {
    this._snapshotMoveData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotMoveDataInput() {
    return this._snapshotMoveData;
  }

  // snapshot_volumes - computed: false, optional: true, required: false
  private _snapshotVolumes?: boolean | cdktf.IResolvable; 
  public get snapshotVolumes() {
    return this.getBooleanAttribute('snapshot_volumes');
  }
  public set snapshotVolumes(value: boolean | cdktf.IResolvable) {
    this._snapshotVolumes = value;
  }
  public resetSnapshotVolumes() {
    this._snapshotVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotVolumesInput() {
    return this._snapshotVolumes;
  }

  // storage_location - computed: false, optional: true, required: false
  private _storageLocation?: string; 
  public get storageLocation() {
    return this.getStringAttribute('storage_location');
  }
  public set storageLocation(value: string) {
    this._storageLocation = value;
  }
  public resetStorageLocation() {
    this._storageLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uploader_config - computed: false, optional: true, required: false
  private _uploaderConfig = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateUploaderConfigOutputReference(this, "uploader_config");
  public get uploaderConfig() {
    return this._uploaderConfig;
  }
  public putUploaderConfig(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplateUploaderConfig) {
    this._uploaderConfig.internalValue = value;
  }
  public resetUploaderConfig() {
    this._uploaderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploaderConfigInput() {
    return this._uploaderConfig.internalValue;
  }

  // volume_snapshot_locations - computed: false, optional: true, required: false
  private _volumeSnapshotLocations?: string[]; 
  public get volumeSnapshotLocations() {
    return this.getListAttribute('volume_snapshot_locations');
  }
  public set volumeSnapshotLocations(value: string[]) {
    this._volumeSnapshotLocations = value;
  }
  public resetVolumeSnapshotLocations() {
    this._volumeSnapshotLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSnapshotLocationsInput() {
    return this._volumeSnapshotLocations;
  }
}
export interface DataK8SVeleroIoScheduleV1ManifestSpec {
  /**
  * Paused specifies whether the schedule is paused or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#paused DataK8SVeleroIoScheduleV1Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Schedule is a Cron expression defining when to run the Backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#schedule DataK8SVeleroIoScheduleV1Manifest#schedule}
  */
  readonly schedule: string;
  /**
  * SkipImmediately specifies whether to skip backup if schedule is due immediately from 'schedule.status.lastBackup' timestamp when schedule is unpaused or if schedule is new. If true, backup will be skipped immediately when schedule is unpaused if it is due based on .Status.LastBackupTimestamp or schedule is new, and will run at next schedule time. If false, backup will not be skipped immediately when schedule is unpaused, but will run at next schedule time. If empty, will follow server configuration (default: false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#skip_immediately DataK8SVeleroIoScheduleV1Manifest#skip_immediately}
  */
  readonly skipImmediately?: boolean | cdktf.IResolvable;
  /**
  * Template is the definition of the Backup to be run on the provided schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#template DataK8SVeleroIoScheduleV1Manifest#template}
  */
  readonly template: DataK8SVeleroIoScheduleV1ManifestSpecTemplate;
  /**
  * UseOwnerReferencesBackup specifies whether to use OwnerReferences on backups created by this Schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#use_owner_references_in_backup DataK8SVeleroIoScheduleV1Manifest#use_owner_references_in_backup}
  */
  readonly useOwnerReferencesInBackup?: boolean | cdktf.IResolvable;
}

export function dataK8SVeleroIoScheduleV1ManifestSpecToTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paused: cdktf.booleanToTerraform(struct!.paused),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    skip_immediately: cdktf.booleanToTerraform(struct!.skipImmediately),
    template: dataK8SVeleroIoScheduleV1ManifestSpecTemplateToTerraform(struct!.template),
    use_owner_references_in_backup: cdktf.booleanToTerraform(struct!.useOwnerReferencesInBackup),
  }
}


export function dataK8SVeleroIoScheduleV1ManifestSpecToHclTerraform(struct?: DataK8SVeleroIoScheduleV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_immediately: {
      value: cdktf.booleanToHclTerraform(struct!.skipImmediately),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template: {
      value: dataK8SVeleroIoScheduleV1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpecTemplate",
    },
    use_owner_references_in_backup: {
      value: cdktf.booleanToHclTerraform(struct!.useOwnerReferencesInBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoScheduleV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoScheduleV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._skipImmediately !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipImmediately = this._skipImmediately;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._useOwnerReferencesInBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOwnerReferencesInBackup = this._useOwnerReferencesInBackup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoScheduleV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paused = undefined;
      this._schedule = undefined;
      this._skipImmediately = undefined;
      this._template.internalValue = undefined;
      this._useOwnerReferencesInBackup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paused = value.paused;
      this._schedule = value.schedule;
      this._skipImmediately = value.skipImmediately;
      this._template.internalValue = value.template;
      this._useOwnerReferencesInBackup = value.useOwnerReferencesInBackup;
    }
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // skip_immediately - computed: false, optional: true, required: false
  private _skipImmediately?: boolean | cdktf.IResolvable; 
  public get skipImmediately() {
    return this.getBooleanAttribute('skip_immediately');
  }
  public set skipImmediately(value: boolean | cdktf.IResolvable) {
    this._skipImmediately = value;
  }
  public resetSkipImmediately() {
    this._skipImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipImmediatelyInput() {
    return this._skipImmediately;
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SVeleroIoScheduleV1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SVeleroIoScheduleV1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // use_owner_references_in_backup - computed: false, optional: true, required: false
  private _useOwnerReferencesInBackup?: boolean | cdktf.IResolvable; 
  public get useOwnerReferencesInBackup() {
    return this.getBooleanAttribute('use_owner_references_in_backup');
  }
  public set useOwnerReferencesInBackup(value: boolean | cdktf.IResolvable) {
    this._useOwnerReferencesInBackup = value;
  }
  public resetUseOwnerReferencesInBackup() {
    this._useOwnerReferencesInBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOwnerReferencesInBackupInput() {
    return this._useOwnerReferencesInBackup;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest k8s_velero_io_schedule_v1_manifest}
*/
export class DataK8SVeleroIoScheduleV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_velero_io_schedule_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SVeleroIoScheduleV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SVeleroIoScheduleV1Manifest to import
  * @param importFromId The id of the existing DataK8SVeleroIoScheduleV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SVeleroIoScheduleV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_velero_io_schedule_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_schedule_v1_manifest k8s_velero_io_schedule_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SVeleroIoScheduleV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SVeleroIoScheduleV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_velero_io_schedule_v1_manifest',
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
  private _metadata = new DataK8SVeleroIoScheduleV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SVeleroIoScheduleV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SVeleroIoScheduleV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SVeleroIoScheduleV1ManifestSpec) {
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
      metadata: dataK8SVeleroIoScheduleV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SVeleroIoScheduleV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SVeleroIoScheduleV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVeleroIoScheduleV1ManifestMetadata",
      },
      spec: {
        value: dataK8SVeleroIoScheduleV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVeleroIoScheduleV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
