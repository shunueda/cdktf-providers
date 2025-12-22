// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SExecutionFurikoIoJobV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#metadata DataK8SExecutionFurikoIoJobV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SExecutionFurikoIoJobV1Alpha1ManifestMetadata;
  /**
  * JobSpec defines the desired state of a Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#spec DataK8SExecutionFurikoIoJobV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpec;
}
export interface DataK8SExecutionFurikoIoJobV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#annotations DataK8SExecutionFurikoIoJobV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#labels DataK8SExecutionFurikoIoJobV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#name DataK8SExecutionFurikoIoJobV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#namespace DataK8SExecutionFurikoIoJobV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SExecutionFurikoIoJobV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SExecutionFurikoIoJobV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SExecutionFurikoIoJobV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExecutionFurikoIoJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecStartPolicy {
  /**
  * Specifies the behaviour when there are other concurrent jobs for the JobConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#concurrency_policy DataK8SExecutionFurikoIoJobV1Alpha1Manifest#concurrency_policy}
  */
  readonly concurrencyPolicy: string;
  /**
  * Specifies the earliest time that the Job can be started after. Can be specified together with other fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#start_after DataK8SExecutionFurikoIoJobV1Alpha1Manifest#start_after}
  */
  readonly startAfter?: string;
}

export function dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecStartPolicyToTerraform(struct?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecStartPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency_policy: cdktf.stringToTerraform(struct!.concurrencyPolicy),
    start_after: cdktf.stringToTerraform(struct!.startAfter),
  }
}


export function dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecStartPolicyToHclTerraform(struct?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecStartPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency_policy: {
      value: cdktf.stringToHclTerraform(struct!.concurrencyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_after: {
      value: cdktf.stringToHclTerraform(struct!.startAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecStartPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecStartPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrencyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrencyPolicy = this._concurrencyPolicy;
    }
    if (this._startAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAfter = this._startAfter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecStartPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrencyPolicy = undefined;
      this._startAfter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrencyPolicy = value.concurrencyPolicy;
      this._startAfter = value.startAfter;
    }
  }

  // concurrency_policy - computed: false, optional: false, required: true
  private _concurrencyPolicy?: string; 
  public get concurrencyPolicy() {
    return this.getStringAttribute('concurrency_policy');
  }
  public set concurrencyPolicy(value: string) {
    this._concurrencyPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyPolicyInput() {
    return this._concurrencyPolicy;
  }

  // start_after - computed: false, optional: true, required: false
  private _startAfter?: string; 
  public get startAfter() {
    return this.getStringAttribute('start_after');
  }
  public set startAfter(value: string) {
    this._startAfter = value;
  }
  public resetStartAfter() {
    this._startAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAfterInput() {
    return this._startAfter;
  }
}
export interface DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateParallelism {
  /**
  * Defines when the Job will complete when there are multiple tasks running in parallel. For example, if using the AllSuccessful strategy, the Job will only terminate once all parallel tasks have terminated successfully, or once any task has exhausted its maxAttempts limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#completion_strategy DataK8SExecutionFurikoIoJobV1Alpha1Manifest#completion_strategy}
  */
  readonly completionStrategy?: string;
  /**
  * Specifies an exact number of tasks to be run in parallel. The index number can be retrieved via the '${task.index_num}' context variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#with_count DataK8SExecutionFurikoIoJobV1Alpha1Manifest#with_count}
  */
  readonly withCount?: number;
  /**
  * Specifies a list of keys corresponding to each task that will be run in parallel. The index key can be retrieved via the '${task.index_key}' context variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#with_keys DataK8SExecutionFurikoIoJobV1Alpha1Manifest#with_keys}
  */
  readonly withKeys?: string[];
  /**
  * Specifies a matrix of key-value pairs, with each key mapped to a list of possible values, such that tasks will be started for each combination of key-value pairs. The matrix values can be retrieved via context variables in the following format: '${task.index_matrix.<key>}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#with_matrix DataK8SExecutionFurikoIoJobV1Alpha1Manifest#with_matrix}
  */
  readonly withMatrix?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateParallelismToTerraform(struct?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateParallelism | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    completion_strategy: cdktf.stringToTerraform(struct!.completionStrategy),
    with_count: cdktf.numberToTerraform(struct!.withCount),
    with_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.withKeys),
    with_matrix: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.withMatrix),
  }
}


export function dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateParallelismToHclTerraform(struct?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateParallelism | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    completion_strategy: {
      value: cdktf.stringToHclTerraform(struct!.completionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    with_count: {
      value: cdktf.numberToHclTerraform(struct!.withCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    with_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.withKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    with_matrix: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.withMatrix),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateParallelismOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateParallelism | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.completionStrategy = this._completionStrategy;
    }
    if (this._withCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.withCount = this._withCount;
    }
    if (this._withKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.withKeys = this._withKeys;
    }
    if (this._withMatrix !== undefined) {
      hasAnyValues = true;
      internalValueResult.withMatrix = this._withMatrix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateParallelism | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._completionStrategy = undefined;
      this._withCount = undefined;
      this._withKeys = undefined;
      this._withMatrix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._completionStrategy = value.completionStrategy;
      this._withCount = value.withCount;
      this._withKeys = value.withKeys;
      this._withMatrix = value.withMatrix;
    }
  }

  // completion_strategy - computed: false, optional: true, required: false
  private _completionStrategy?: string; 
  public get completionStrategy() {
    return this.getStringAttribute('completion_strategy');
  }
  public set completionStrategy(value: string) {
    this._completionStrategy = value;
  }
  public resetCompletionStrategy() {
    this._completionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completionStrategyInput() {
    return this._completionStrategy;
  }

  // with_count - computed: false, optional: true, required: false
  private _withCount?: number; 
  public get withCount() {
    return this.getNumberAttribute('with_count');
  }
  public set withCount(value: number) {
    this._withCount = value;
  }
  public resetWithCount() {
    this._withCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withCountInput() {
    return this._withCount;
  }

  // with_keys - computed: false, optional: true, required: false
  private _withKeys?: string[]; 
  public get withKeys() {
    return this.getListAttribute('with_keys');
  }
  public set withKeys(value: string[]) {
    this._withKeys = value;
  }
  public resetWithKeys() {
    this._withKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withKeysInput() {
    return this._withKeys;
  }

  // with_matrix - computed: false, optional: true, required: false
  private _withMatrix?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get withMatrix() {
    return this.interpolationForAttribute('with_matrix');
  }
  public set withMatrix(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._withMatrix = value;
  }
  public resetWithMatrix() {
    this._withMatrix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withMatrixInput() {
    return this._withMatrix;
  }
}
export interface DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplatePod {
  /**
  * Standard object's metadata that will be added to Pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#metadata DataK8SExecutionFurikoIoJobV1Alpha1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Specification of the desired behavior of the pod. API docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#podspec-v1-core Supports context variable substitution in the following fields for containers and initContainers: image, command, args, env.value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#spec DataK8SExecutionFurikoIoJobV1Alpha1Manifest#spec}
  */
  readonly spec?: { [key: string]: string };
}

export function dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplatePodToTerraform(struct?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplatePod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    spec: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.spec),
  }
}


export function dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplatePodToHclTerraform(struct?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplatePod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spec: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.spec),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplatePodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplatePod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplatePod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._spec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._spec = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: { [key: string]: string }; 
  public get spec() {
    return this.getStringMapAttribute('spec');
  }
  public set spec(value: { [key: string]: string }) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }
}
export interface DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplate {
  /**
  * Describes how to create tasks as Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#pod DataK8SExecutionFurikoIoJobV1Alpha1Manifest#pod}
  */
  readonly pod?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplatePod;
}

export function dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplateToTerraform(struct?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod: dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplatePodToTerraform(struct!.pod),
  }
}


export function dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplateToHclTerraform(struct?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod: {
      value: dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplatePodToHclTerraform(struct!.pod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplatePod",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pod.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pod.internalValue = value.pod;
    }
  }

  // pod - computed: false, optional: true, required: false
  private _pod = new DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplatePodOutputReference(this, "pod");
  public get pod() {
    return this._pod;
  }
  public putPod(value: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplatePod) {
    this._pod.internalValue = value;
  }
  public resetPod() {
    this._pod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod.internalValue;
  }
}
export interface DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplate {
  /**
  * Defines whether tasks are allowed to be force deleted or not. If the node is unresponsive, it may be possible that the task cannot be killed by normal graceful deletion. The controller may choose to force delete the task, which would ignore the final state of the task since the node is unable to return whether the task is actually still alive. If not set to true, there may be some cases when there may actually be two concurrently running tasks when even when ConcurrencyPolicyForbid. Setting this to true would prevent this from happening, but the Job may remain stuck indefinitely until the node recovers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#forbid_task_force_deletion DataK8SExecutionFurikoIoJobV1Alpha1Manifest#forbid_task_force_deletion}
  */
  readonly forbidTaskForceDeletion?: boolean | cdktf.IResolvable;
  /**
  * Specifies maximum number of attempts before the Job will terminate in failure. If defined, the controller will wait retryDelaySeconds before creating the next task. Once maxAttempts is reached, the Job terminates in RetryLimitExceeded. If parallelism is also defined, this corresponds to the maximum attempts for each parallel task. That is, if there are 5 parallel task to be run at a time, with maxAttempts of 3, the Job may create up to a maximum of 15 tasks if each has failed. Value must be a positive integer. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#max_attempts DataK8SExecutionFurikoIoJobV1Alpha1Manifest#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * Describes how to run multiple tasks in parallel for the Job. If not set, then there will be at most a single task running at any time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#parallelism DataK8SExecutionFurikoIoJobV1Alpha1Manifest#parallelism}
  */
  readonly parallelism?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateParallelism;
  /**
  * Optional duration in seconds to wait between retries. If left empty or zero, it means no delay (i.e. retry immediately). If parallelism is also defined, the retry delay is from the time of the last failed task with the same index. That is, if there are two parallel tasks - index 0 and index 1 - which failed at t=0 and t=15, with retryDelaySeconds of 30, the controller will only create the next attempts at t=30 and t=45 respectively. Value must be a non-negative integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#retry_delay_seconds DataK8SExecutionFurikoIoJobV1Alpha1Manifest#retry_delay_seconds}
  */
  readonly retryDelaySeconds?: number;
  /**
  * Optional duration in seconds to wait before terminating the task if it is still pending. This field is useful to prevent jobs from being stuck forever if the Job has a deadline to start running by. If not set, it will be set to the DefaultPendingTimeoutSeconds configuration value in the controller. To disable pending timeout, set this to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#task_pending_timeout_seconds DataK8SExecutionFurikoIoJobV1Alpha1Manifest#task_pending_timeout_seconds}
  */
  readonly taskPendingTimeoutSeconds?: number;
  /**
  * Defines the template to create a single task in the Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#task_template DataK8SExecutionFurikoIoJobV1Alpha1Manifest#task_template}
  */
  readonly taskTemplate: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplate;
}

export function dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateToTerraform(struct?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forbid_task_force_deletion: cdktf.booleanToTerraform(struct!.forbidTaskForceDeletion),
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    parallelism: dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateParallelismToTerraform(struct!.parallelism),
    retry_delay_seconds: cdktf.numberToTerraform(struct!.retryDelaySeconds),
    task_pending_timeout_seconds: cdktf.numberToTerraform(struct!.taskPendingTimeoutSeconds),
    task_template: dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplateToTerraform(struct!.taskTemplate),
  }
}


export function dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateToHclTerraform(struct?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forbid_task_force_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.forbidTaskForceDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parallelism: {
      value: dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateParallelismToHclTerraform(struct!.parallelism),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateParallelism",
    },
    retry_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.retryDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_pending_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.taskPendingTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_template: {
      value: dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplateToHclTerraform(struct!.taskTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forbidTaskForceDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbidTaskForceDeletion = this._forbidTaskForceDeletion;
    }
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._parallelism?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism?.internalValue;
    }
    if (this._retryDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDelaySeconds = this._retryDelaySeconds;
    }
    if (this._taskPendingTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskPendingTimeoutSeconds = this._taskPendingTimeoutSeconds;
    }
    if (this._taskTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskTemplate = this._taskTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forbidTaskForceDeletion = undefined;
      this._maxAttempts = undefined;
      this._parallelism.internalValue = undefined;
      this._retryDelaySeconds = undefined;
      this._taskPendingTimeoutSeconds = undefined;
      this._taskTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forbidTaskForceDeletion = value.forbidTaskForceDeletion;
      this._maxAttempts = value.maxAttempts;
      this._parallelism.internalValue = value.parallelism;
      this._retryDelaySeconds = value.retryDelaySeconds;
      this._taskPendingTimeoutSeconds = value.taskPendingTimeoutSeconds;
      this._taskTemplate.internalValue = value.taskTemplate;
    }
  }

  // forbid_task_force_deletion - computed: false, optional: true, required: false
  private _forbidTaskForceDeletion?: boolean | cdktf.IResolvable; 
  public get forbidTaskForceDeletion() {
    return this.getBooleanAttribute('forbid_task_force_deletion');
  }
  public set forbidTaskForceDeletion(value: boolean | cdktf.IResolvable) {
    this._forbidTaskForceDeletion = value;
  }
  public resetForbidTaskForceDeletion() {
    this._forbidTaskForceDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbidTaskForceDeletionInput() {
    return this._forbidTaskForceDeletion;
  }

  // max_attempts - computed: false, optional: true, required: false
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism = new DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateParallelismOutputReference(this, "parallelism");
  public get parallelism() {
    return this._parallelism;
  }
  public putParallelism(value: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateParallelism) {
    this._parallelism.internalValue = value;
  }
  public resetParallelism() {
    this._parallelism.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism.internalValue;
  }

  // retry_delay_seconds - computed: false, optional: true, required: false
  private _retryDelaySeconds?: number; 
  public get retryDelaySeconds() {
    return this.getNumberAttribute('retry_delay_seconds');
  }
  public set retryDelaySeconds(value: number) {
    this._retryDelaySeconds = value;
  }
  public resetRetryDelaySeconds() {
    this._retryDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDelaySecondsInput() {
    return this._retryDelaySeconds;
  }

  // task_pending_timeout_seconds - computed: false, optional: true, required: false
  private _taskPendingTimeoutSeconds?: number; 
  public get taskPendingTimeoutSeconds() {
    return this.getNumberAttribute('task_pending_timeout_seconds');
  }
  public set taskPendingTimeoutSeconds(value: number) {
    this._taskPendingTimeoutSeconds = value;
  }
  public resetTaskPendingTimeoutSeconds() {
    this._taskPendingTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskPendingTimeoutSecondsInput() {
    return this._taskPendingTimeoutSeconds;
  }

  // task_template - computed: false, optional: false, required: true
  private _taskTemplate = new DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplateOutputReference(this, "task_template");
  public get taskTemplate() {
    return this._taskTemplate;
  }
  public putTaskTemplate(value: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateTaskTemplate) {
    this._taskTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTemplateInput() {
    return this._taskTemplate.internalValue;
  }
}
export interface DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpec {
  /**
  * ConfigName allows specifying the name of the JobConfig to create the Job from. The JobConfig must be in the same namespace as the Job. It is provided as a write-only input field for convenience, and will override the template, labels and annotations from the JobConfig's template. This field will never be returned from the API. To look up the parent JobConfig, use ownerReferences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#config_name DataK8SExecutionFurikoIoJobV1Alpha1Manifest#config_name}
  */
  readonly configName?: string;
  /**
  * Specifies the time to start killing the job. When the time passes this timestamp, the controller will start attempting to kill all tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#kill_timestamp DataK8SExecutionFurikoIoJobV1Alpha1Manifest#kill_timestamp}
  */
  readonly killTimestamp?: string;
  /**
  * Specifies key-values pairs of values for Options, in JSON or YAML format. Example specification: spec: optionValues: |- myStringOption: 'value' myBoolOption: true mySelectOption: - option1 - option3 Each entry in the optionValues struct should consist of the option's name, and the value could be an arbitrary type that corresponds to the option's type itself. Each option value specified will be evaluated to a string based on the JobConfig's OptionsSpec and added to Substitutions. If the key also exists in Substitutions, that one takes priority. Cannot be updated after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#option_values DataK8SExecutionFurikoIoJobV1Alpha1Manifest#option_values}
  */
  readonly optionValues?: string;
  /**
  * Specifies optional start policy for a Job, which specifies certain conditions which have to be met before a Job is started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#start_policy DataK8SExecutionFurikoIoJobV1Alpha1Manifest#start_policy}
  */
  readonly startPolicy?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecStartPolicy;
  /**
  * Defines key-value pairs of context variables to be substituted into the TaskTemplate. Each entry should consist of the full context variable name (i.e. 'ctx.name'), and the values must be a string. Substitutions defined here take highest precedence over both predefined context variables and evaluated OptionValues. Most users should be using OptionValues to specify custom Job Option values for running the Job instead of using Subsitutions directly. Cannot be updated after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#substitutions DataK8SExecutionFurikoIoJobV1Alpha1Manifest#substitutions}
  */
  readonly substitutions?: { [key: string]: string };
  /**
  * Template specifies how to create the Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#template DataK8SExecutionFurikoIoJobV1Alpha1Manifest#template}
  */
  readonly template?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplate;
  /**
  * Specifies the maximum lifetime of a Job that is finished. If not set, it will be set to the DefaultTTLSecondsAfterFinished configuration value in the controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#ttl_seconds_after_finished DataK8SExecutionFurikoIoJobV1Alpha1Manifest#ttl_seconds_after_finished}
  */
  readonly ttlSecondsAfterFinished?: number;
  /**
  * Specifies the type of Job. Can be one of: Adhoc, Scheduled Default: Adhoc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#type DataK8SExecutionFurikoIoJobV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecToTerraform(struct?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_name: cdktf.stringToTerraform(struct!.configName),
    kill_timestamp: cdktf.stringToTerraform(struct!.killTimestamp),
    option_values: cdktf.stringToTerraform(struct!.optionValues),
    start_policy: dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecStartPolicyToTerraform(struct!.startPolicy),
    substitutions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.substitutions),
    template: dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateToTerraform(struct!.template),
    ttl_seconds_after_finished: cdktf.numberToTerraform(struct!.ttlSecondsAfterFinished),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_name: {
      value: cdktf.stringToHclTerraform(struct!.configName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kill_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.killTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_values: {
      value: cdktf.stringToHclTerraform(struct!.optionValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_policy: {
      value: dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecStartPolicyToHclTerraform(struct!.startPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecStartPolicy",
    },
    substitutions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.substitutions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    template: {
      value: dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplate",
    },
    ttl_seconds_after_finished: {
      value: cdktf.numberToHclTerraform(struct!.ttlSecondsAfterFinished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configName = this._configName;
    }
    if (this._killTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.killTimestamp = this._killTimestamp;
    }
    if (this._optionValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValues = this._optionValues;
    }
    if (this._startPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPolicy = this._startPolicy?.internalValue;
    }
    if (this._substitutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitutions = this._substitutions;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._ttlSecondsAfterFinished !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlSecondsAfterFinished = this._ttlSecondsAfterFinished;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configName = undefined;
      this._killTimestamp = undefined;
      this._optionValues = undefined;
      this._startPolicy.internalValue = undefined;
      this._substitutions = undefined;
      this._template.internalValue = undefined;
      this._ttlSecondsAfterFinished = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configName = value.configName;
      this._killTimestamp = value.killTimestamp;
      this._optionValues = value.optionValues;
      this._startPolicy.internalValue = value.startPolicy;
      this._substitutions = value.substitutions;
      this._template.internalValue = value.template;
      this._ttlSecondsAfterFinished = value.ttlSecondsAfterFinished;
      this._type = value.type;
    }
  }

  // config_name - computed: false, optional: true, required: false
  private _configName?: string; 
  public get configName() {
    return this.getStringAttribute('config_name');
  }
  public set configName(value: string) {
    this._configName = value;
  }
  public resetConfigName() {
    this._configName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configNameInput() {
    return this._configName;
  }

  // kill_timestamp - computed: false, optional: true, required: false
  private _killTimestamp?: string; 
  public get killTimestamp() {
    return this.getStringAttribute('kill_timestamp');
  }
  public set killTimestamp(value: string) {
    this._killTimestamp = value;
  }
  public resetKillTimestamp() {
    this._killTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get killTimestampInput() {
    return this._killTimestamp;
  }

  // option_values - computed: false, optional: true, required: false
  private _optionValues?: string; 
  public get optionValues() {
    return this.getStringAttribute('option_values');
  }
  public set optionValues(value: string) {
    this._optionValues = value;
  }
  public resetOptionValues() {
    this._optionValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValuesInput() {
    return this._optionValues;
  }

  // start_policy - computed: false, optional: true, required: false
  private _startPolicy = new DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecStartPolicyOutputReference(this, "start_policy");
  public get startPolicy() {
    return this._startPolicy;
  }
  public putStartPolicy(value: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecStartPolicy) {
    this._startPolicy.internalValue = value;
  }
  public resetStartPolicy() {
    this._startPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPolicyInput() {
    return this._startPolicy.internalValue;
  }

  // substitutions - computed: false, optional: true, required: false
  private _substitutions?: { [key: string]: string }; 
  public get substitutions() {
    return this.getStringMapAttribute('substitutions');
  }
  public set substitutions(value: { [key: string]: string }) {
    this._substitutions = value;
  }
  public resetSubstitutions() {
    this._substitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionsInput() {
    return this._substitutions;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // ttl_seconds_after_finished - computed: false, optional: true, required: false
  private _ttlSecondsAfterFinished?: number; 
  public get ttlSecondsAfterFinished() {
    return this.getNumberAttribute('ttl_seconds_after_finished');
  }
  public set ttlSecondsAfterFinished(value: number) {
    this._ttlSecondsAfterFinished = value;
  }
  public resetTtlSecondsAfterFinished() {
    this._ttlSecondsAfterFinished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecondsAfterFinishedInput() {
    return this._ttlSecondsAfterFinished;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest k8s_execution_furiko_io_job_v1alpha1_manifest}
*/
export class DataK8SExecutionFurikoIoJobV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_execution_furiko_io_job_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SExecutionFurikoIoJobV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SExecutionFurikoIoJobV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SExecutionFurikoIoJobV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SExecutionFurikoIoJobV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_execution_furiko_io_job_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/execution_furiko_io_job_v1alpha1_manifest k8s_execution_furiko_io_job_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SExecutionFurikoIoJobV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SExecutionFurikoIoJobV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_execution_furiko_io_job_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SExecutionFurikoIoJobV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SExecutionFurikoIoJobV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpec) {
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
      metadata: dataK8SExecutionFurikoIoJobV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SExecutionFurikoIoJobV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExecutionFurikoIoJobV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SExecutionFurikoIoJobV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExecutionFurikoIoJobV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
