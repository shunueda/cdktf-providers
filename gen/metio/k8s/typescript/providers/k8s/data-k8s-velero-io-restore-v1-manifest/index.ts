// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SVeleroIoRestoreV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#metadata DataK8SVeleroIoRestoreV1Manifest#metadata}
  */
  readonly metadata: DataK8SVeleroIoRestoreV1ManifestMetadata;
  /**
  * RestoreSpec defines the specification for a Velero restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#spec DataK8SVeleroIoRestoreV1Manifest#spec}
  */
  readonly spec?: DataK8SVeleroIoRestoreV1ManifestSpec;
}
export interface DataK8SVeleroIoRestoreV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#annotations DataK8SVeleroIoRestoreV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#labels DataK8SVeleroIoRestoreV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#name DataK8SVeleroIoRestoreV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#namespace DataK8SVeleroIoRestoreV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SVeleroIoRestoreV1ManifestMetadataToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoRestoreV1ManifestMetadataToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoRestoreV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#key DataK8SVeleroIoRestoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#operator DataK8SVeleroIoRestoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#values DataK8SVeleroIoRestoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#match_expressions DataK8SVeleroIoRestoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#match_labels DataK8SVeleroIoRestoreV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsList",
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

export class DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksExec {
  /**
  * Command is the command and arguments to execute from within a container after a pod has been restored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#command DataK8SVeleroIoRestoreV1Manifest#command}
  */
  readonly command: string[];
  /**
  * Container is the container in the pod where the command should be executed. If not specified, the pod's first container is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#container DataK8SVeleroIoRestoreV1Manifest#container}
  */
  readonly container?: string;
  /**
  * ExecTimeout defines the maximum amount of time Velero should wait for the hook to complete before considering the execution a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#exec_timeout DataK8SVeleroIoRestoreV1Manifest#exec_timeout}
  */
  readonly execTimeout?: string;
  /**
  * OnError specifies how Velero should behave if it encounters an error executing this hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#on_error DataK8SVeleroIoRestoreV1Manifest#on_error}
  */
  readonly onError?: string;
  /**
  * WaitForReady ensures command will be launched when container is Ready instead of Running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#wait_for_ready DataK8SVeleroIoRestoreV1Manifest#wait_for_ready}
  */
  readonly waitForReady?: boolean | cdktf.IResolvable;
  /**
  * WaitTimeout defines the maximum amount of time Velero should wait for the container to be Ready before attempting to run the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#wait_timeout DataK8SVeleroIoRestoreV1Manifest#wait_timeout}
  */
  readonly waitTimeout?: string;
}

export function dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksExecToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    container: cdktf.stringToTerraform(struct!.container),
    exec_timeout: cdktf.stringToTerraform(struct!.execTimeout),
    on_error: cdktf.stringToTerraform(struct!.onError),
    wait_for_ready: cdktf.booleanToTerraform(struct!.waitForReady),
    wait_timeout: cdktf.stringToTerraform(struct!.waitTimeout),
  }
}


export function dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksExecToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksExec | cdktf.IResolvable): any {
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
    exec_timeout: {
      value: cdktf.stringToHclTerraform(struct!.execTimeout),
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
    wait_for_ready: {
      value: cdktf.booleanToHclTerraform(struct!.waitForReady),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_timeout: {
      value: cdktf.stringToHclTerraform(struct!.waitTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksExec | cdktf.IResolvable | undefined {
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
    if (this._execTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.execTimeout = this._execTimeout;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._waitForReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForReady = this._waitForReady;
    }
    if (this._waitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeout = this._waitTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._container = undefined;
      this._execTimeout = undefined;
      this._onError = undefined;
      this._waitForReady = undefined;
      this._waitTimeout = undefined;
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
      this._execTimeout = value.execTimeout;
      this._onError = value.onError;
      this._waitForReady = value.waitForReady;
      this._waitTimeout = value.waitTimeout;
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

  // exec_timeout - computed: false, optional: true, required: false
  private _execTimeout?: string; 
  public get execTimeout() {
    return this.getStringAttribute('exec_timeout');
  }
  public set execTimeout(value: string) {
    this._execTimeout = value;
  }
  public resetExecTimeout() {
    this._execTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execTimeoutInput() {
    return this._execTimeout;
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

  // wait_for_ready - computed: false, optional: true, required: false
  private _waitForReady?: boolean | cdktf.IResolvable; 
  public get waitForReady() {
    return this.getBooleanAttribute('wait_for_ready');
  }
  public set waitForReady(value: boolean | cdktf.IResolvable) {
    this._waitForReady = value;
  }
  public resetWaitForReady() {
    this._waitForReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForReadyInput() {
    return this._waitForReady;
  }

  // wait_timeout - computed: false, optional: true, required: false
  private _waitTimeout?: string; 
  public get waitTimeout() {
    return this.getStringAttribute('wait_timeout');
  }
  public set waitTimeout(value: string) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }
}
export interface DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksInit {
  /**
  * InitContainers is list of init containers to be added to a pod during its restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#init_containers DataK8SVeleroIoRestoreV1Manifest#init_containers}
  */
  readonly initContainers?: { [key: string]: string };
  /**
  * Timeout defines the maximum amount of time Velero should wait for the initContainers to complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#timeout DataK8SVeleroIoRestoreV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksInitToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    init_containers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.initContainers),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksInitToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    init_containers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.initContainers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksInitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksInit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksInit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initContainers = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initContainers = value.initContainers;
      this._timeout = value.timeout;
    }
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers?: { [key: string]: string }; 
  public get initContainers() {
    return this.getStringMapAttribute('init_containers');
  }
  public set initContainers(value: { [key: string]: string }) {
    this._initContainers = value;
  }
  public resetInitContainers() {
    this._initContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers;
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
export interface DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooks {
  /**
  * Exec defines an exec restore hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#exec DataK8SVeleroIoRestoreV1Manifest#exec}
  */
  readonly exec?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksExec;
  /**
  * Init defines an init restore hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#init DataK8SVeleroIoRestoreV1Manifest#init}
  */
  readonly init?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksInit;
}

export function dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksExecToTerraform(struct!.exec),
    init: dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksInitToTerraform(struct!.init),
  }
}


export function dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksExec",
    },
    init: {
      value: dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksInitToHclTerraform(struct!.init),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksInit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._init?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.init = this._init?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._init.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._init.internalValue = value.init;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // init - computed: false, optional: true, required: false
  private _init = new DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksInitOutputReference(this, "init");
  public get init() {
    return this._init;
  }
  public putInit(value: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksInit) {
    this._init.internalValue = value;
  }
  public resetInit() {
    this._init.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initInput() {
    return this._init.internalValue;
  }
}

export class DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksOutputReference {
    return new DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoRestoreV1ManifestSpecHooksResources {
  /**
  * ExcludedNamespaces specifies the namespaces to which this hook spec does not apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#excluded_namespaces DataK8SVeleroIoRestoreV1Manifest#excluded_namespaces}
  */
  readonly excludedNamespaces?: string[];
  /**
  * ExcludedResources specifies the resources to which this hook spec does not apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#excluded_resources DataK8SVeleroIoRestoreV1Manifest#excluded_resources}
  */
  readonly excludedResources?: string[];
  /**
  * IncludedNamespaces specifies the namespaces to which this hook spec applies. If empty, it applies to all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#included_namespaces DataK8SVeleroIoRestoreV1Manifest#included_namespaces}
  */
  readonly includedNamespaces?: string[];
  /**
  * IncludedResources specifies the resources to which this hook spec applies. If empty, it applies to all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#included_resources DataK8SVeleroIoRestoreV1Manifest#included_resources}
  */
  readonly includedResources?: string[];
  /**
  * LabelSelector, if specified, filters the resources to which this hook spec applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#label_selector DataK8SVeleroIoRestoreV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelector;
  /**
  * Name is the name of this hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#name DataK8SVeleroIoRestoreV1Manifest#name}
  */
  readonly name: string;
  /**
  * PostHooks is a list of RestoreResourceHooks to execute during and after restoring a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#post_hooks DataK8SVeleroIoRestoreV1Manifest#post_hooks}
  */
  readonly postHooks?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooks[] | cdktf.IResolvable;
}

export function dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNamespaces),
    excluded_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedResources),
    included_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedNamespaces),
    included_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedResources),
    label_selector: dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    post_hooks: cdktf.listMapper(dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksToTerraform, false)(struct!.postHooks),
  }
}


export function dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResources | cdktf.IResolvable): any {
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
      value: dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelector",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_hooks: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksToHclTerraform, false)(struct!.postHooks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpecHooksResources | cdktf.IResolvable | undefined {
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
    if (this._postHooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postHooks = this._postHooks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpecHooksResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedNamespaces = undefined;
      this._excludedResources = undefined;
      this._includedNamespaces = undefined;
      this._includedResources = undefined;
      this._labelSelector.internalValue = undefined;
      this._name = undefined;
      this._postHooks.internalValue = undefined;
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
      this._postHooks.internalValue = value.postHooks;
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
  private _labelSelector = new DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesLabelSelector) {
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

  // post_hooks - computed: false, optional: true, required: false
  private _postHooks = new DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooksList(this, "post_hooks", false);
  public get postHooks() {
    return this._postHooks;
  }
  public putPostHooks(value: DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesPostHooks[] | cdktf.IResolvable) {
    this._postHooks.internalValue = value;
  }
  public resetPostHooks() {
    this._postHooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postHooksInput() {
    return this._postHooks.internalValue;
  }
}

export class DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoRestoreV1ManifestSpecHooksResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesOutputReference {
    return new DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoRestoreV1ManifestSpecHooks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#resources DataK8SVeleroIoRestoreV1Manifest#resources}
  */
  readonly resources?: DataK8SVeleroIoRestoreV1ManifestSpecHooksResources[] | cdktf.IResolvable;
}

export function dataK8SVeleroIoRestoreV1ManifestSpecHooksToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesToTerraform, false)(struct!.resources),
  }
}


export function dataK8SVeleroIoRestoreV1ManifestSpecHooksToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoRestoreV1ManifestSpecHooksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpecHooks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpecHooks | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SVeleroIoRestoreV1ManifestSpecHooksResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SVeleroIoRestoreV1ManifestSpecHooksResources[] | cdktf.IResolvable) {
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
export interface DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#key DataK8SVeleroIoRestoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#operator DataK8SVeleroIoRestoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#values DataK8SVeleroIoRestoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoRestoreV1ManifestSpecLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#match_expressions DataK8SVeleroIoRestoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#match_labels DataK8SVeleroIoRestoreV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressionsList",
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

export class DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpecLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpecLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#key DataK8SVeleroIoRestoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#operator DataK8SVeleroIoRestoreV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#values DataK8SVeleroIoRestoreV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressionsToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressionsOutputReference {
    return new DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#match_expressions DataK8SVeleroIoRestoreV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#match_labels DataK8SVeleroIoRestoreV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressionsList",
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

export class DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsMatchExpressions[] | cdktf.IResolvable) {
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

export class DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsOutputReference {
    return new DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoRestoreV1ManifestSpecResourceModifier {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#api_group DataK8SVeleroIoRestoreV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#kind DataK8SVeleroIoRestoreV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#name DataK8SVeleroIoRestoreV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SVeleroIoRestoreV1ManifestSpecResourceModifierToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecResourceModifier | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoRestoreV1ManifestSpecResourceModifierToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecResourceModifier | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoRestoreV1ManifestSpecResourceModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpecResourceModifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpecResourceModifier | cdktf.IResolvable | undefined) {
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
export interface DataK8SVeleroIoRestoreV1ManifestSpecRestoreStatus {
  /**
  * ExcludedResources specifies the resources to which will not restore the status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#excluded_resources DataK8SVeleroIoRestoreV1Manifest#excluded_resources}
  */
  readonly excludedResources?: string[];
  /**
  * IncludedResources specifies the resources to which will restore the status. If empty, it applies to all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#included_resources DataK8SVeleroIoRestoreV1Manifest#included_resources}
  */
  readonly includedResources?: string[];
}

export function dataK8SVeleroIoRestoreV1ManifestSpecRestoreStatusToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecRestoreStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedResources),
    included_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedResources),
  }
}


export function dataK8SVeleroIoRestoreV1ManifestSpecRestoreStatusToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecRestoreStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedResources),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoRestoreV1ManifestSpecRestoreStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpecRestoreStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedResources = this._excludedResources;
    }
    if (this._includedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedResources = this._includedResources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpecRestoreStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedResources = undefined;
      this._includedResources = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedResources = value.excludedResources;
      this._includedResources = value.includedResources;
    }
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
}
export interface DataK8SVeleroIoRestoreV1ManifestSpecUploaderConfig {
  /**
  * ParallelFilesDownload is the concurrency number setting for restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#parallel_files_download DataK8SVeleroIoRestoreV1Manifest#parallel_files_download}
  */
  readonly parallelFilesDownload?: number;
  /**
  * WriteSparseFiles is a flag to indicate whether write files sparsely or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#write_sparse_files DataK8SVeleroIoRestoreV1Manifest#write_sparse_files}
  */
  readonly writeSparseFiles?: boolean | cdktf.IResolvable;
}

export function dataK8SVeleroIoRestoreV1ManifestSpecUploaderConfigToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecUploaderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parallel_files_download: cdktf.numberToTerraform(struct!.parallelFilesDownload),
    write_sparse_files: cdktf.booleanToTerraform(struct!.writeSparseFiles),
  }
}


export function dataK8SVeleroIoRestoreV1ManifestSpecUploaderConfigToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpecUploaderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parallel_files_download: {
      value: cdktf.numberToHclTerraform(struct!.parallelFilesDownload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_sparse_files: {
      value: cdktf.booleanToHclTerraform(struct!.writeSparseFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoRestoreV1ManifestSpecUploaderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpecUploaderConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parallelFilesDownload !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelFilesDownload = this._parallelFilesDownload;
    }
    if (this._writeSparseFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeSparseFiles = this._writeSparseFiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpecUploaderConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parallelFilesDownload = undefined;
      this._writeSparseFiles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parallelFilesDownload = value.parallelFilesDownload;
      this._writeSparseFiles = value.writeSparseFiles;
    }
  }

  // parallel_files_download - computed: false, optional: true, required: false
  private _parallelFilesDownload?: number; 
  public get parallelFilesDownload() {
    return this.getNumberAttribute('parallel_files_download');
  }
  public set parallelFilesDownload(value: number) {
    this._parallelFilesDownload = value;
  }
  public resetParallelFilesDownload() {
    this._parallelFilesDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelFilesDownloadInput() {
    return this._parallelFilesDownload;
  }

  // write_sparse_files - computed: false, optional: true, required: false
  private _writeSparseFiles?: boolean | cdktf.IResolvable; 
  public get writeSparseFiles() {
    return this.getBooleanAttribute('write_sparse_files');
  }
  public set writeSparseFiles(value: boolean | cdktf.IResolvable) {
    this._writeSparseFiles = value;
  }
  public resetWriteSparseFiles() {
    this._writeSparseFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeSparseFilesInput() {
    return this._writeSparseFiles;
  }
}
export interface DataK8SVeleroIoRestoreV1ManifestSpec {
  /**
  * BackupName is the unique name of the Velero backup to restore from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#backup_name DataK8SVeleroIoRestoreV1Manifest#backup_name}
  */
  readonly backupName?: string;
  /**
  * ExcludedNamespaces contains a list of namespaces that are not included in the restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#excluded_namespaces DataK8SVeleroIoRestoreV1Manifest#excluded_namespaces}
  */
  readonly excludedNamespaces?: string[];
  /**
  * ExcludedResources is a slice of resource names that are not included in the restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#excluded_resources DataK8SVeleroIoRestoreV1Manifest#excluded_resources}
  */
  readonly excludedResources?: string[];
  /**
  * ExistingResourcePolicy specifies the restore behavior for the Kubernetes resource to be restored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#existing_resource_policy DataK8SVeleroIoRestoreV1Manifest#existing_resource_policy}
  */
  readonly existingResourcePolicy?: string;
  /**
  * Hooks represent custom behaviors that should be executed during or post restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#hooks DataK8SVeleroIoRestoreV1Manifest#hooks}
  */
  readonly hooks?: DataK8SVeleroIoRestoreV1ManifestSpecHooks;
  /**
  * IncludeClusterResources specifies whether cluster-scoped resources should be included for consideration in the restore. If null, defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#include_cluster_resources DataK8SVeleroIoRestoreV1Manifest#include_cluster_resources}
  */
  readonly includeClusterResources?: boolean | cdktf.IResolvable;
  /**
  * IncludedNamespaces is a slice of namespace names to include objects from. If empty, all namespaces are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#included_namespaces DataK8SVeleroIoRestoreV1Manifest#included_namespaces}
  */
  readonly includedNamespaces?: string[];
  /**
  * IncludedResources is a slice of resource names to include in the restore. If empty, all resources in the backup are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#included_resources DataK8SVeleroIoRestoreV1Manifest#included_resources}
  */
  readonly includedResources?: string[];
  /**
  * ItemOperationTimeout specifies the time used to wait for RestoreItemAction operations The default value is 4 hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#item_operation_timeout DataK8SVeleroIoRestoreV1Manifest#item_operation_timeout}
  */
  readonly itemOperationTimeout?: string;
  /**
  * LabelSelector is a metav1.LabelSelector to filter with when restoring individual objects from the backup. If empty or nil, all objects are included. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#label_selector DataK8SVeleroIoRestoreV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SVeleroIoRestoreV1ManifestSpecLabelSelector;
  /**
  * NamespaceMapping is a map of source namespace names to target namespace names to restore into. Any source namespaces not included in the map will be restored into namespaces of the same name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#namespace_mapping DataK8SVeleroIoRestoreV1Manifest#namespace_mapping}
  */
  readonly namespaceMapping?: { [key: string]: string };
  /**
  * OrLabelSelectors is list of metav1.LabelSelector to filter with when restoring individual objects from the backup. If multiple provided they will be joined by the OR operator. LabelSelector as well as OrLabelSelectors cannot co-exist in restore request, only one of them can be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#or_label_selectors DataK8SVeleroIoRestoreV1Manifest#or_label_selectors}
  */
  readonly orLabelSelectors?: DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectors[] | cdktf.IResolvable;
  /**
  * PreserveNodePorts specifies whether to restore old nodePorts from backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#preserve_node_ports DataK8SVeleroIoRestoreV1Manifest#preserve_node_ports}
  */
  readonly preserveNodePorts?: boolean | cdktf.IResolvable;
  /**
  * ResourceModifier specifies the reference to JSON resource patches that should be applied to resources before restoration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#resource_modifier DataK8SVeleroIoRestoreV1Manifest#resource_modifier}
  */
  readonly resourceModifier?: DataK8SVeleroIoRestoreV1ManifestSpecResourceModifier;
  /**
  * RestorePVs specifies whether to restore all included PVs from snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#restore_p_vs DataK8SVeleroIoRestoreV1Manifest#restore_p_vs}
  */
  readonly restorePVs?: boolean | cdktf.IResolvable;
  /**
  * RestoreStatus specifies which resources we should restore the status field. If nil, no objects are included. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#restore_status DataK8SVeleroIoRestoreV1Manifest#restore_status}
  */
  readonly restoreStatus?: DataK8SVeleroIoRestoreV1ManifestSpecRestoreStatus;
  /**
  * ScheduleName is the unique name of the Velero schedule to restore from. If specified, and BackupName is empty, Velero will restore from the most recent successful backup created from this schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#schedule_name DataK8SVeleroIoRestoreV1Manifest#schedule_name}
  */
  readonly scheduleName?: string;
  /**
  * UploaderConfig specifies the configuration for the restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#uploader_config DataK8SVeleroIoRestoreV1Manifest#uploader_config}
  */
  readonly uploaderConfig?: DataK8SVeleroIoRestoreV1ManifestSpecUploaderConfig;
}

export function dataK8SVeleroIoRestoreV1ManifestSpecToTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_name: cdktf.stringToTerraform(struct!.backupName),
    excluded_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNamespaces),
    excluded_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedResources),
    existing_resource_policy: cdktf.stringToTerraform(struct!.existingResourcePolicy),
    hooks: dataK8SVeleroIoRestoreV1ManifestSpecHooksToTerraform(struct!.hooks),
    include_cluster_resources: cdktf.booleanToTerraform(struct!.includeClusterResources),
    included_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedNamespaces),
    included_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedResources),
    item_operation_timeout: cdktf.stringToTerraform(struct!.itemOperationTimeout),
    label_selector: dataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorToTerraform(struct!.labelSelector),
    namespace_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.namespaceMapping),
    or_label_selectors: cdktf.listMapper(dataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsToTerraform, false)(struct!.orLabelSelectors),
    preserve_node_ports: cdktf.booleanToTerraform(struct!.preserveNodePorts),
    resource_modifier: dataK8SVeleroIoRestoreV1ManifestSpecResourceModifierToTerraform(struct!.resourceModifier),
    restore_p_vs: cdktf.booleanToTerraform(struct!.restorePVs),
    restore_status: dataK8SVeleroIoRestoreV1ManifestSpecRestoreStatusToTerraform(struct!.restoreStatus),
    schedule_name: cdktf.stringToTerraform(struct!.scheduleName),
    uploader_config: dataK8SVeleroIoRestoreV1ManifestSpecUploaderConfigToTerraform(struct!.uploaderConfig),
  }
}


export function dataK8SVeleroIoRestoreV1ManifestSpecToHclTerraform(struct?: DataK8SVeleroIoRestoreV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_name: {
      value: cdktf.stringToHclTerraform(struct!.backupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    existing_resource_policy: {
      value: cdktf.stringToHclTerraform(struct!.existingResourcePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hooks: {
      value: dataK8SVeleroIoRestoreV1ManifestSpecHooksToHclTerraform(struct!.hooks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpecHooks",
    },
    include_cluster_resources: {
      value: cdktf.booleanToHclTerraform(struct!.includeClusterResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
      value: dataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpecLabelSelector",
    },
    namespace_mapping: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.namespaceMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    or_label_selectors: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsToHclTerraform, false)(struct!.orLabelSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsList",
    },
    preserve_node_ports: {
      value: cdktf.booleanToHclTerraform(struct!.preserveNodePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_modifier: {
      value: dataK8SVeleroIoRestoreV1ManifestSpecResourceModifierToHclTerraform(struct!.resourceModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpecResourceModifier",
    },
    restore_p_vs: {
      value: cdktf.booleanToHclTerraform(struct!.restorePVs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restore_status: {
      value: dataK8SVeleroIoRestoreV1ManifestSpecRestoreStatusToHclTerraform(struct!.restoreStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpecRestoreStatus",
    },
    schedule_name: {
      value: cdktf.stringToHclTerraform(struct!.scheduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uploader_config: {
      value: dataK8SVeleroIoRestoreV1ManifestSpecUploaderConfigToHclTerraform(struct!.uploaderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpecUploaderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoRestoreV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoRestoreV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupName = this._backupName;
    }
    if (this._excludedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNamespaces = this._excludedNamespaces;
    }
    if (this._excludedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedResources = this._excludedResources;
    }
    if (this._existingResourcePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingResourcePolicy = this._existingResourcePolicy;
    }
    if (this._hooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hooks = this._hooks?.internalValue;
    }
    if (this._includeClusterResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeClusterResources = this._includeClusterResources;
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
    if (this._namespaceMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceMapping = this._namespaceMapping;
    }
    if (this._orLabelSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orLabelSelectors = this._orLabelSelectors?.internalValue;
    }
    if (this._preserveNodePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveNodePorts = this._preserveNodePorts;
    }
    if (this._resourceModifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceModifier = this._resourceModifier?.internalValue;
    }
    if (this._restorePVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.restorePVs = this._restorePVs;
    }
    if (this._restoreStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreStatus = this._restoreStatus?.internalValue;
    }
    if (this._scheduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleName = this._scheduleName;
    }
    if (this._uploaderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploaderConfig = this._uploaderConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoRestoreV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupName = undefined;
      this._excludedNamespaces = undefined;
      this._excludedResources = undefined;
      this._existingResourcePolicy = undefined;
      this._hooks.internalValue = undefined;
      this._includeClusterResources = undefined;
      this._includedNamespaces = undefined;
      this._includedResources = undefined;
      this._itemOperationTimeout = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceMapping = undefined;
      this._orLabelSelectors.internalValue = undefined;
      this._preserveNodePorts = undefined;
      this._resourceModifier.internalValue = undefined;
      this._restorePVs = undefined;
      this._restoreStatus.internalValue = undefined;
      this._scheduleName = undefined;
      this._uploaderConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupName = value.backupName;
      this._excludedNamespaces = value.excludedNamespaces;
      this._excludedResources = value.excludedResources;
      this._existingResourcePolicy = value.existingResourcePolicy;
      this._hooks.internalValue = value.hooks;
      this._includeClusterResources = value.includeClusterResources;
      this._includedNamespaces = value.includedNamespaces;
      this._includedResources = value.includedResources;
      this._itemOperationTimeout = value.itemOperationTimeout;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceMapping = value.namespaceMapping;
      this._orLabelSelectors.internalValue = value.orLabelSelectors;
      this._preserveNodePorts = value.preserveNodePorts;
      this._resourceModifier.internalValue = value.resourceModifier;
      this._restorePVs = value.restorePVs;
      this._restoreStatus.internalValue = value.restoreStatus;
      this._scheduleName = value.scheduleName;
      this._uploaderConfig.internalValue = value.uploaderConfig;
    }
  }

  // backup_name - computed: false, optional: true, required: false
  private _backupName?: string; 
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
  public set backupName(value: string) {
    this._backupName = value;
  }
  public resetBackupName() {
    this._backupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNameInput() {
    return this._backupName;
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

  // existing_resource_policy - computed: false, optional: true, required: false
  private _existingResourcePolicy?: string; 
  public get existingResourcePolicy() {
    return this.getStringAttribute('existing_resource_policy');
  }
  public set existingResourcePolicy(value: string) {
    this._existingResourcePolicy = value;
  }
  public resetExistingResourcePolicy() {
    this._existingResourcePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingResourcePolicyInput() {
    return this._existingResourcePolicy;
  }

  // hooks - computed: false, optional: true, required: false
  private _hooks = new DataK8SVeleroIoRestoreV1ManifestSpecHooksOutputReference(this, "hooks");
  public get hooks() {
    return this._hooks;
  }
  public putHooks(value: DataK8SVeleroIoRestoreV1ManifestSpecHooks) {
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
  private _labelSelector = new DataK8SVeleroIoRestoreV1ManifestSpecLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SVeleroIoRestoreV1ManifestSpecLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_mapping - computed: false, optional: true, required: false
  private _namespaceMapping?: { [key: string]: string }; 
  public get namespaceMapping() {
    return this.getStringMapAttribute('namespace_mapping');
  }
  public set namespaceMapping(value: { [key: string]: string }) {
    this._namespaceMapping = value;
  }
  public resetNamespaceMapping() {
    this._namespaceMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceMappingInput() {
    return this._namespaceMapping;
  }

  // or_label_selectors - computed: false, optional: true, required: false
  private _orLabelSelectors = new DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectorsList(this, "or_label_selectors", false);
  public get orLabelSelectors() {
    return this._orLabelSelectors;
  }
  public putOrLabelSelectors(value: DataK8SVeleroIoRestoreV1ManifestSpecOrLabelSelectors[] | cdktf.IResolvable) {
    this._orLabelSelectors.internalValue = value;
  }
  public resetOrLabelSelectors() {
    this._orLabelSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orLabelSelectorsInput() {
    return this._orLabelSelectors.internalValue;
  }

  // preserve_node_ports - computed: false, optional: true, required: false
  private _preserveNodePorts?: boolean | cdktf.IResolvable; 
  public get preserveNodePorts() {
    return this.getBooleanAttribute('preserve_node_ports');
  }
  public set preserveNodePorts(value: boolean | cdktf.IResolvable) {
    this._preserveNodePorts = value;
  }
  public resetPreserveNodePorts() {
    this._preserveNodePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveNodePortsInput() {
    return this._preserveNodePorts;
  }

  // resource_modifier - computed: false, optional: true, required: false
  private _resourceModifier = new DataK8SVeleroIoRestoreV1ManifestSpecResourceModifierOutputReference(this, "resource_modifier");
  public get resourceModifier() {
    return this._resourceModifier;
  }
  public putResourceModifier(value: DataK8SVeleroIoRestoreV1ManifestSpecResourceModifier) {
    this._resourceModifier.internalValue = value;
  }
  public resetResourceModifier() {
    this._resourceModifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceModifierInput() {
    return this._resourceModifier.internalValue;
  }

  // restore_p_vs - computed: false, optional: true, required: false
  private _restorePVs?: boolean | cdktf.IResolvable; 
  public get restorePVs() {
    return this.getBooleanAttribute('restore_p_vs');
  }
  public set restorePVs(value: boolean | cdktf.IResolvable) {
    this._restorePVs = value;
  }
  public resetRestorePVs() {
    this._restorePVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorePVsInput() {
    return this._restorePVs;
  }

  // restore_status - computed: false, optional: true, required: false
  private _restoreStatus = new DataK8SVeleroIoRestoreV1ManifestSpecRestoreStatusOutputReference(this, "restore_status");
  public get restoreStatus() {
    return this._restoreStatus;
  }
  public putRestoreStatus(value: DataK8SVeleroIoRestoreV1ManifestSpecRestoreStatus) {
    this._restoreStatus.internalValue = value;
  }
  public resetRestoreStatus() {
    this._restoreStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreStatusInput() {
    return this._restoreStatus.internalValue;
  }

  // schedule_name - computed: false, optional: true, required: false
  private _scheduleName?: string; 
  public get scheduleName() {
    return this.getStringAttribute('schedule_name');
  }
  public set scheduleName(value: string) {
    this._scheduleName = value;
  }
  public resetScheduleName() {
    this._scheduleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleNameInput() {
    return this._scheduleName;
  }

  // uploader_config - computed: false, optional: true, required: false
  private _uploaderConfig = new DataK8SVeleroIoRestoreV1ManifestSpecUploaderConfigOutputReference(this, "uploader_config");
  public get uploaderConfig() {
    return this._uploaderConfig;
  }
  public putUploaderConfig(value: DataK8SVeleroIoRestoreV1ManifestSpecUploaderConfig) {
    this._uploaderConfig.internalValue = value;
  }
  public resetUploaderConfig() {
    this._uploaderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploaderConfigInput() {
    return this._uploaderConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest k8s_velero_io_restore_v1_manifest}
*/
export class DataK8SVeleroIoRestoreV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_velero_io_restore_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SVeleroIoRestoreV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SVeleroIoRestoreV1Manifest to import
  * @param importFromId The id of the existing DataK8SVeleroIoRestoreV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SVeleroIoRestoreV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_velero_io_restore_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/velero_io_restore_v1_manifest k8s_velero_io_restore_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SVeleroIoRestoreV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SVeleroIoRestoreV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_velero_io_restore_v1_manifest',
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
  private _metadata = new DataK8SVeleroIoRestoreV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SVeleroIoRestoreV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SVeleroIoRestoreV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SVeleroIoRestoreV1ManifestSpec) {
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
      metadata: dataK8SVeleroIoRestoreV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SVeleroIoRestoreV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SVeleroIoRestoreV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVeleroIoRestoreV1ManifestMetadata",
      },
      spec: {
        value: dataK8SVeleroIoRestoreV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVeleroIoRestoreV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
