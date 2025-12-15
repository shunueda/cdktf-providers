// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SVeleroIoBackupV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#metadata DataK8SVeleroIoBackupV1Manifest#metadata}
  */
  readonly metadata: DataK8SVeleroIoBackupV1ManifestMetadata;
  /**
  * BackupSpec defines the specification for a Velero backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#spec DataK8SVeleroIoBackupV1Manifest#spec}
  */
  readonly spec?: DataK8SVeleroIoBackupV1ManifestSpec;
}
export interface DataK8SVeleroIoBackupV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#annotations DataK8SVeleroIoBackupV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#labels DataK8SVeleroIoBackupV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#name DataK8SVeleroIoBackupV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#namespace DataK8SVeleroIoBackupV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SVeleroIoBackupV1ManifestMetadataToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoBackupV1ManifestMetadataToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoBackupV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#key DataK8SVeleroIoBackupV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#operator DataK8SVeleroIoBackupV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#values DataK8SVeleroIoBackupV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#match_expressions DataK8SVeleroIoBackupV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#match_labels DataK8SVeleroIoBackupV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsList",
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

export class DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostExec {
  /**
  * Command is the command and arguments to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#command DataK8SVeleroIoBackupV1Manifest#command}
  */
  readonly command: string[];
  /**
  * Container is the container in the pod where the command should be executed. If not specified, the pod's first container is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#container DataK8SVeleroIoBackupV1Manifest#container}
  */
  readonly container?: string;
  /**
  * OnError specifies how Velero should behave if it encounters an error executing this hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#on_error DataK8SVeleroIoBackupV1Manifest#on_error}
  */
  readonly onError?: string;
  /**
  * Timeout defines the maximum amount of time Velero should wait for the hook to complete before considering the execution a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#timeout DataK8SVeleroIoBackupV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostExecToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostExec | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostExecToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostExec | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPost {
  /**
  * Exec defines an exec hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#exec DataK8SVeleroIoBackupV1Manifest#exec}
  */
  readonly exec: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostExec;
}

export function dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostExecToTerraform(struct!.exec),
  }
}


export function dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostExec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPost | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPost | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostExec) {
    this._exec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }
}

export class DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPost[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostOutputReference {
    return new DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreExec {
  /**
  * Command is the command and arguments to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#command DataK8SVeleroIoBackupV1Manifest#command}
  */
  readonly command: string[];
  /**
  * Container is the container in the pod where the command should be executed. If not specified, the pod's first container is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#container DataK8SVeleroIoBackupV1Manifest#container}
  */
  readonly container?: string;
  /**
  * OnError specifies how Velero should behave if it encounters an error executing this hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#on_error DataK8SVeleroIoBackupV1Manifest#on_error}
  */
  readonly onError?: string;
  /**
  * Timeout defines the maximum amount of time Velero should wait for the hook to complete before considering the execution a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#timeout DataK8SVeleroIoBackupV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreExecToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreExec | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreExecToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreExec | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPre {
  /**
  * Exec defines an exec hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#exec DataK8SVeleroIoBackupV1Manifest#exec}
  */
  readonly exec: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreExec;
}

export function dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreExecToTerraform(struct!.exec),
  }
}


export function dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreExec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPre | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPre | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreExec) {
    this._exec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }
}

export class DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPre[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreOutputReference {
    return new DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoBackupV1ManifestSpecHooksResources {
  /**
  * ExcludedNamespaces specifies the namespaces to which this hook spec does not apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#excluded_namespaces DataK8SVeleroIoBackupV1Manifest#excluded_namespaces}
  */
  readonly excludedNamespaces?: string[];
  /**
  * ExcludedResources specifies the resources to which this hook spec does not apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#excluded_resources DataK8SVeleroIoBackupV1Manifest#excluded_resources}
  */
  readonly excludedResources?: string[];
  /**
  * IncludedNamespaces specifies the namespaces to which this hook spec applies. If empty, it applies to all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#included_namespaces DataK8SVeleroIoBackupV1Manifest#included_namespaces}
  */
  readonly includedNamespaces?: string[];
  /**
  * IncludedResources specifies the resources to which this hook spec applies. If empty, it applies to all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#included_resources DataK8SVeleroIoBackupV1Manifest#included_resources}
  */
  readonly includedResources?: string[];
  /**
  * LabelSelector, if specified, filters the resources to which this hook spec applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#label_selector DataK8SVeleroIoBackupV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelector;
  /**
  * Name is the name of this hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#name DataK8SVeleroIoBackupV1Manifest#name}
  */
  readonly name: string;
  /**
  * PostHooks is a list of BackupResourceHooks to execute after storing the item in the backup. These are executed after all 'additional items' from item actions are processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#post DataK8SVeleroIoBackupV1Manifest#post}
  */
  readonly post?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPost[] | cdktf.IResolvable;
  /**
  * PreHooks is a list of BackupResourceHooks to execute prior to storing the item in the backup. These are executed before any 'additional items' from item actions are processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#pre DataK8SVeleroIoBackupV1Manifest#pre}
  */
  readonly pre?: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPre[] | cdktf.IResolvable;
}

export function dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooksResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNamespaces),
    excluded_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedResources),
    included_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedNamespaces),
    included_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedResources),
    label_selector: dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    post: cdktf.listMapper(dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostToTerraform, false)(struct!.post),
    pre: cdktf.listMapper(dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreToTerraform, false)(struct!.pre),
  }
}


export function dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooksResources | cdktf.IResolvable): any {
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
      value: dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelector",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostToHclTerraform, false)(struct!.post),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostList",
    },
    pre: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreToHclTerraform, false)(struct!.pre),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecHooksResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecHooksResources | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesLabelSelector) {
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
  private _post = new DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPostList(this, "post", false);
  public get post() {
    return this._post;
  }
  public putPost(value: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPost[] | cdktf.IResolvable) {
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
  private _pre = new DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPreList(this, "pre", false);
  public get pre() {
    return this._pre;
  }
  public putPre(value: DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesPre[] | cdktf.IResolvable) {
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

export class DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoBackupV1ManifestSpecHooksResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesOutputReference {
    return new DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoBackupV1ManifestSpecHooks {
  /**
  * Resources are hooks that should be executed when backing up individual instances of a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#resources DataK8SVeleroIoBackupV1Manifest#resources}
  */
  readonly resources?: DataK8SVeleroIoBackupV1ManifestSpecHooksResources[] | cdktf.IResolvable;
}

export function dataK8SVeleroIoBackupV1ManifestSpecHooksToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesToTerraform, false)(struct!.resources),
  }
}


export function dataK8SVeleroIoBackupV1ManifestSpecHooksToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoBackupV1ManifestSpecHooksResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoBackupV1ManifestSpecHooksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecHooks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecHooks | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SVeleroIoBackupV1ManifestSpecHooksResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SVeleroIoBackupV1ManifestSpecHooksResources[] | cdktf.IResolvable) {
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
export interface DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#key DataK8SVeleroIoBackupV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#operator DataK8SVeleroIoBackupV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#values DataK8SVeleroIoBackupV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoBackupV1ManifestSpecLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#match_expressions DataK8SVeleroIoBackupV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#match_labels DataK8SVeleroIoBackupV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SVeleroIoBackupV1ManifestSpecLabelSelectorToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SVeleroIoBackupV1ManifestSpecLabelSelectorToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressionsList",
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

export class DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SVeleroIoBackupV1ManifestSpecMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#labels DataK8SVeleroIoBackupV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SVeleroIoBackupV1ManifestSpecMetadataToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SVeleroIoBackupV1ManifestSpecMetadataToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecMetadata | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoBackupV1ManifestSpecMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#key DataK8SVeleroIoBackupV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#operator DataK8SVeleroIoBackupV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#values DataK8SVeleroIoBackupV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressionsToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressionsOutputReference {
    return new DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#match_expressions DataK8SVeleroIoBackupV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#match_labels DataK8SVeleroIoBackupV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressionsList",
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

export class DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsMatchExpressions[] | cdktf.IResolvable) {
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

export class DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsOutputReference {
    return new DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SVeleroIoBackupV1ManifestSpecResourcePolicy {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#api_group DataK8SVeleroIoBackupV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#kind DataK8SVeleroIoBackupV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#name DataK8SVeleroIoBackupV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SVeleroIoBackupV1ManifestSpecResourcePolicyToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecResourcePolicy | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoBackupV1ManifestSpecResourcePolicyToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecResourcePolicy | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoBackupV1ManifestSpecResourcePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecResourcePolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecResourcePolicy | cdktf.IResolvable | undefined) {
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
export interface DataK8SVeleroIoBackupV1ManifestSpecUploaderConfig {
  /**
  * ParallelFilesUpload is the number of files parallel uploads to perform when using the uploader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#parallel_files_upload DataK8SVeleroIoBackupV1Manifest#parallel_files_upload}
  */
  readonly parallelFilesUpload?: number;
}

export function dataK8SVeleroIoBackupV1ManifestSpecUploaderConfigToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecUploaderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parallel_files_upload: cdktf.numberToTerraform(struct!.parallelFilesUpload),
  }
}


export function dataK8SVeleroIoBackupV1ManifestSpecUploaderConfigToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpecUploaderConfig | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoBackupV1ManifestSpecUploaderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpecUploaderConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpecUploaderConfig | cdktf.IResolvable | undefined) {
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
export interface DataK8SVeleroIoBackupV1ManifestSpec {
  /**
  * CSISnapshotTimeout specifies the time used to wait for CSI VolumeSnapshot status turns to ReadyToUse during creation, before returning error as timeout. The default value is 10 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#csi_snapshot_timeout DataK8SVeleroIoBackupV1Manifest#csi_snapshot_timeout}
  */
  readonly csiSnapshotTimeout?: string;
  /**
  * DataMover specifies the data mover to be used by the backup. If DataMover is '' or 'velero', the built-in data mover will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#datamover DataK8SVeleroIoBackupV1Manifest#datamover}
  */
  readonly datamover?: string;
  /**
  * DefaultVolumesToFsBackup specifies whether pod volume file system backup should be used for all volumes by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#default_volumes_to_fs_backup DataK8SVeleroIoBackupV1Manifest#default_volumes_to_fs_backup}
  */
  readonly defaultVolumesToFsBackup?: boolean | cdktf.IResolvable;
  /**
  * DefaultVolumesToRestic specifies whether restic should be used to take a backup of all pod volumes by default. Deprecated: this field is no longer used and will be removed entirely in future. Use DefaultVolumesToFsBackup instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#default_volumes_to_restic DataK8SVeleroIoBackupV1Manifest#default_volumes_to_restic}
  */
  readonly defaultVolumesToRestic?: boolean | cdktf.IResolvable;
  /**
  * ExcludedClusterScopedResources is a slice of cluster-scoped resource type names to exclude from the backup. If set to '*', all cluster-scoped resource types are excluded. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#excluded_cluster_scoped_resources DataK8SVeleroIoBackupV1Manifest#excluded_cluster_scoped_resources}
  */
  readonly excludedClusterScopedResources?: string[];
  /**
  * ExcludedNamespaceScopedResources is a slice of namespace-scoped resource type names to exclude from the backup. If set to '*', all namespace-scoped resource types are excluded. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#excluded_namespace_scoped_resources DataK8SVeleroIoBackupV1Manifest#excluded_namespace_scoped_resources}
  */
  readonly excludedNamespaceScopedResources?: string[];
  /**
  * ExcludedNamespaces contains a list of namespaces that are not included in the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#excluded_namespaces DataK8SVeleroIoBackupV1Manifest#excluded_namespaces}
  */
  readonly excludedNamespaces?: string[];
  /**
  * ExcludedResources is a slice of resource names that are not included in the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#excluded_resources DataK8SVeleroIoBackupV1Manifest#excluded_resources}
  */
  readonly excludedResources?: string[];
  /**
  * Hooks represent custom behaviors that should be executed at different phases of the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#hooks DataK8SVeleroIoBackupV1Manifest#hooks}
  */
  readonly hooks?: DataK8SVeleroIoBackupV1ManifestSpecHooks;
  /**
  * IncludeClusterResources specifies whether cluster-scoped resources should be included for consideration in the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#include_cluster_resources DataK8SVeleroIoBackupV1Manifest#include_cluster_resources}
  */
  readonly includeClusterResources?: boolean | cdktf.IResolvable;
  /**
  * IncludedClusterScopedResources is a slice of cluster-scoped resource type names to include in the backup. If set to '*', all cluster-scoped resource types are included. The default value is empty, which means only related cluster-scoped resources are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#included_cluster_scoped_resources DataK8SVeleroIoBackupV1Manifest#included_cluster_scoped_resources}
  */
  readonly includedClusterScopedResources?: string[];
  /**
  * IncludedNamespaceScopedResources is a slice of namespace-scoped resource type names to include in the backup. The default value is '*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#included_namespace_scoped_resources DataK8SVeleroIoBackupV1Manifest#included_namespace_scoped_resources}
  */
  readonly includedNamespaceScopedResources?: string[];
  /**
  * IncludedNamespaces is a slice of namespace names to include objects from. If empty, all namespaces are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#included_namespaces DataK8SVeleroIoBackupV1Manifest#included_namespaces}
  */
  readonly includedNamespaces?: string[];
  /**
  * IncludedResources is a slice of resource names to include in the backup. If empty, all resources are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#included_resources DataK8SVeleroIoBackupV1Manifest#included_resources}
  */
  readonly includedResources?: string[];
  /**
  * ItemOperationTimeout specifies the time used to wait for asynchronous BackupItemAction operations The default value is 4 hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#item_operation_timeout DataK8SVeleroIoBackupV1Manifest#item_operation_timeout}
  */
  readonly itemOperationTimeout?: string;
  /**
  * LabelSelector is a metav1.LabelSelector to filter with when adding individual objects to the backup. If empty or nil, all objects are included. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#label_selector DataK8SVeleroIoBackupV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SVeleroIoBackupV1ManifestSpecLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#metadata DataK8SVeleroIoBackupV1Manifest#metadata}
  */
  readonly metadata?: DataK8SVeleroIoBackupV1ManifestSpecMetadata;
  /**
  * OrLabelSelectors is list of metav1.LabelSelector to filter with when adding individual objects to the backup. If multiple provided they will be joined by the OR operator. LabelSelector as well as OrLabelSelectors cannot co-exist in backup request, only one of them can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#or_label_selectors DataK8SVeleroIoBackupV1Manifest#or_label_selectors}
  */
  readonly orLabelSelectors?: DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectors[] | cdktf.IResolvable;
  /**
  * OrderedResources specifies the backup order of resources of specific Kind. The map key is the resource name and value is a list of object names separated by commas. Each resource name has format 'namespace/objectname'. For cluster resources, simply use 'objectname'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#ordered_resources DataK8SVeleroIoBackupV1Manifest#ordered_resources}
  */
  readonly orderedResources?: { [key: string]: string };
  /**
  * ResourcePolicy specifies the referenced resource policies that backup should follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#resource_policy DataK8SVeleroIoBackupV1Manifest#resource_policy}
  */
  readonly resourcePolicy?: DataK8SVeleroIoBackupV1ManifestSpecResourcePolicy;
  /**
  * SnapshotMoveData specifies whether snapshot data should be moved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#snapshot_move_data DataK8SVeleroIoBackupV1Manifest#snapshot_move_data}
  */
  readonly snapshotMoveData?: boolean | cdktf.IResolvable;
  /**
  * SnapshotVolumes specifies whether to take snapshots of any PV's referenced in the set of objects included in the Backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#snapshot_volumes DataK8SVeleroIoBackupV1Manifest#snapshot_volumes}
  */
  readonly snapshotVolumes?: boolean | cdktf.IResolvable;
  /**
  * StorageLocation is a string containing the name of a BackupStorageLocation where the backup should be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#storage_location DataK8SVeleroIoBackupV1Manifest#storage_location}
  */
  readonly storageLocation?: string;
  /**
  * TTL is a time.Duration-parseable string describing how long the Backup should be retained for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#ttl DataK8SVeleroIoBackupV1Manifest#ttl}
  */
  readonly ttl?: string;
  /**
  * UploaderConfig specifies the configuration for the uploader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#uploader_config DataK8SVeleroIoBackupV1Manifest#uploader_config}
  */
  readonly uploaderConfig?: DataK8SVeleroIoBackupV1ManifestSpecUploaderConfig;
  /**
  * VolumeSnapshotLocations is a list containing names of VolumeSnapshotLocations associated with this backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#volume_snapshot_locations DataK8SVeleroIoBackupV1Manifest#volume_snapshot_locations}
  */
  readonly volumeSnapshotLocations?: string[];
}

export function dataK8SVeleroIoBackupV1ManifestSpecToTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpec | cdktf.IResolvable): any {
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
    hooks: dataK8SVeleroIoBackupV1ManifestSpecHooksToTerraform(struct!.hooks),
    include_cluster_resources: cdktf.booleanToTerraform(struct!.includeClusterResources),
    included_cluster_scoped_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedClusterScopedResources),
    included_namespace_scoped_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedNamespaceScopedResources),
    included_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedNamespaces),
    included_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedResources),
    item_operation_timeout: cdktf.stringToTerraform(struct!.itemOperationTimeout),
    label_selector: dataK8SVeleroIoBackupV1ManifestSpecLabelSelectorToTerraform(struct!.labelSelector),
    metadata: dataK8SVeleroIoBackupV1ManifestSpecMetadataToTerraform(struct!.metadata),
    or_label_selectors: cdktf.listMapper(dataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsToTerraform, false)(struct!.orLabelSelectors),
    ordered_resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.orderedResources),
    resource_policy: dataK8SVeleroIoBackupV1ManifestSpecResourcePolicyToTerraform(struct!.resourcePolicy),
    snapshot_move_data: cdktf.booleanToTerraform(struct!.snapshotMoveData),
    snapshot_volumes: cdktf.booleanToTerraform(struct!.snapshotVolumes),
    storage_location: cdktf.stringToTerraform(struct!.storageLocation),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    uploader_config: dataK8SVeleroIoBackupV1ManifestSpecUploaderConfigToTerraform(struct!.uploaderConfig),
    volume_snapshot_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumeSnapshotLocations),
  }
}


export function dataK8SVeleroIoBackupV1ManifestSpecToHclTerraform(struct?: DataK8SVeleroIoBackupV1ManifestSpec | cdktf.IResolvable): any {
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
      value: dataK8SVeleroIoBackupV1ManifestSpecHooksToHclTerraform(struct!.hooks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecHooks",
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
      value: dataK8SVeleroIoBackupV1ManifestSpecLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecLabelSelector",
    },
    metadata: {
      value: dataK8SVeleroIoBackupV1ManifestSpecMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecMetadata",
    },
    or_label_selectors: {
      value: cdktf.listMapperHcl(dataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsToHclTerraform, false)(struct!.orLabelSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsList",
    },
    ordered_resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.orderedResources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_policy: {
      value: dataK8SVeleroIoBackupV1ManifestSpecResourcePolicyToHclTerraform(struct!.resourcePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecResourcePolicy",
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
      value: dataK8SVeleroIoBackupV1ManifestSpecUploaderConfigToHclTerraform(struct!.uploaderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoBackupV1ManifestSpecUploaderConfig",
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

export class DataK8SVeleroIoBackupV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoBackupV1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupV1ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _hooks = new DataK8SVeleroIoBackupV1ManifestSpecHooksOutputReference(this, "hooks");
  public get hooks() {
    return this._hooks;
  }
  public putHooks(value: DataK8SVeleroIoBackupV1ManifestSpecHooks) {
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
  private _labelSelector = new DataK8SVeleroIoBackupV1ManifestSpecLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SVeleroIoBackupV1ManifestSpecLabelSelector) {
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
  private _metadata = new DataK8SVeleroIoBackupV1ManifestSpecMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SVeleroIoBackupV1ManifestSpecMetadata) {
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
  private _orLabelSelectors = new DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectorsList(this, "or_label_selectors", false);
  public get orLabelSelectors() {
    return this._orLabelSelectors;
  }
  public putOrLabelSelectors(value: DataK8SVeleroIoBackupV1ManifestSpecOrLabelSelectors[] | cdktf.IResolvable) {
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
  private _resourcePolicy = new DataK8SVeleroIoBackupV1ManifestSpecResourcePolicyOutputReference(this, "resource_policy");
  public get resourcePolicy() {
    return this._resourcePolicy;
  }
  public putResourcePolicy(value: DataK8SVeleroIoBackupV1ManifestSpecResourcePolicy) {
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
  private _uploaderConfig = new DataK8SVeleroIoBackupV1ManifestSpecUploaderConfigOutputReference(this, "uploader_config");
  public get uploaderConfig() {
    return this._uploaderConfig;
  }
  public putUploaderConfig(value: DataK8SVeleroIoBackupV1ManifestSpecUploaderConfig) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest k8s_velero_io_backup_v1_manifest}
*/
export class DataK8SVeleroIoBackupV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_velero_io_backup_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SVeleroIoBackupV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SVeleroIoBackupV1Manifest to import
  * @param importFromId The id of the existing DataK8SVeleroIoBackupV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SVeleroIoBackupV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_velero_io_backup_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_backup_v1_manifest k8s_velero_io_backup_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SVeleroIoBackupV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SVeleroIoBackupV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_velero_io_backup_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SVeleroIoBackupV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SVeleroIoBackupV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SVeleroIoBackupV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SVeleroIoBackupV1ManifestSpec) {
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
      metadata: dataK8SVeleroIoBackupV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SVeleroIoBackupV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SVeleroIoBackupV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVeleroIoBackupV1ManifestMetadata",
      },
      spec: {
        value: dataK8SVeleroIoBackupV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVeleroIoBackupV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
