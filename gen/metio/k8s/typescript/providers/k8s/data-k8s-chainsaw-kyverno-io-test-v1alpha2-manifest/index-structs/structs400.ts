import * as cdktf from 'cdktf';
import { DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteExpect,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteExpectToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteExpectToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteExpectList,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteRef,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteRefToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteRefToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteRefOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryApply,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryApplyToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryApplyToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryApplyOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryAssert,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryAssertToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryAssertToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryAssertOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryBindings,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryBindingsToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryBindingsToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryBindingsList,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryClusters,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryClustersToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryClustersToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryClustersOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCommand,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCommandToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCommandToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCommandOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCreate,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCreateToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCreateToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCreateOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsBindings,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsBindingsToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsBindingsToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsBindingsList,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCatch,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCatchToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCatchToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCatchList,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCleanup,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCleanupToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCleanupToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCleanupList,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsClusters,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsClustersToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsClustersToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsClustersOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsFinally,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsFinallyToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsFinallyToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsFinallyList,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTimeouts,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTimeoutsToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTimeoutsToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTimeoutsOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecBindings,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecBindingsToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecBindingsToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecBindingsList,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecCleanup,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecCleanupToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecCleanupToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecCleanupOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecClusters,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecClustersToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecClustersToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecClustersOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecDeletion,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecDeletionToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecDeletionToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecDeletionOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecError,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecErrorToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecErrorToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecErrorOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecExecution,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecExecutionToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecExecutionToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecExecutionOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecNamespace,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecNamespaceToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecNamespaceToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecNamespaceOutputReference } from './structs0'
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDelete {
  /**
  * DeletionPropagationPolicy decides if a deletion will propagate to the dependents of the object, and how the garbage collector will handle the propagation. Overrides the deletion propagation policy set in the Configuration, the Test and the TestStep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#deletion_propagation_policy DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#deletion_propagation_policy}
  */
  readonly deletionPropagationPolicy?: string;
  /**
  * Expect defines a list of matched checks to validate the operation outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#expect DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#expect}
  */
  readonly expect?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteExpect[] | cdktf.IResolvable;
  /**
  * File is the path to the referenced file. This can be a direct path to a file or an expression that matches multiple files, such as 'manifest/*.yaml' for all YAML files within the 'manifest' directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#file DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#file}
  */
  readonly file?: string;
  /**
  * Ref determines objects to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#ref DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#ref}
  */
  readonly ref?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteRef;
  /**
  * Template determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#template DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_propagation_policy: cdktf.stringToTerraform(struct!.deletionPropagationPolicy),
    expect: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteExpectToTerraform, false)(struct!.expect),
    file: cdktf.stringToTerraform(struct!.file),
    ref: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteRefToTerraform(struct!.ref),
    template: cdktf.booleanToTerraform(struct!.template),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_propagation_policy: {
      value: cdktf.stringToHclTerraform(struct!.deletionPropagationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expect: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteExpectToHclTerraform, false)(struct!.expect),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteExpectList",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteRef",
    },
    template: {
      value: cdktf.booleanToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionPropagationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionPropagationPolicy = this._deletionPropagationPolicy;
    }
    if (this._expect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expect = this._expect?.internalValue;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionPropagationPolicy = undefined;
      this._expect.internalValue = undefined;
      this._file = undefined;
      this._ref.internalValue = undefined;
      this._template = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionPropagationPolicy = value.deletionPropagationPolicy;
      this._expect.internalValue = value.expect;
      this._file = value.file;
      this._ref.internalValue = value.ref;
      this._template = value.template;
      this._timeout = value.timeout;
    }
  }

  // deletion_propagation_policy - computed: false, optional: true, required: false
  private _deletionPropagationPolicy?: string; 
  public get deletionPropagationPolicy() {
    return this.getStringAttribute('deletion_propagation_policy');
  }
  public set deletionPropagationPolicy(value: string) {
    this._deletionPropagationPolicy = value;
  }
  public resetDeletionPropagationPolicy() {
    this._deletionPropagationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPropagationPolicyInput() {
    return this._deletionPropagationPolicy;
  }

  // expect - computed: false, optional: true, required: false
  private _expect = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteExpectList(this, "expect", false);
  public get expect() {
    return this._expect;
  }
  public putExpect(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteExpect[] | cdktf.IResolvable) {
    this._expect.internalValue = value;
  }
  public resetExpect() {
    this._expect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectInput() {
    return this._expect.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // ref - computed: false, optional: true, required: false
  private _ref = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteRef) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template?: boolean | cdktf.IResolvable; 
  public get template() {
    return this.getBooleanAttribute('template');
  }
  public set template(value: boolean | cdktf.IResolvable) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDescribe {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#api_version DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#kind DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#namespace DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#selector DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Show Events indicates whether to include related events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#show_events DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#show_events}
  */
  readonly showEvents?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDescribeToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDescribe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    show_events: cdktf.booleanToTerraform(struct!.showEvents),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDescribeToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDescribe | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_events: {
      value: cdktf.booleanToHclTerraform(struct!.showEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDescribeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDescribe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._showEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.showEvents = this._showEvents;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDescribe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._selector = undefined;
      this._showEvents = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._selector = value.selector;
      this._showEvents = value.showEvents;
      this._timeout = value.timeout;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // show_events - computed: false, optional: true, required: false
  private _showEvents?: boolean | cdktf.IResolvable; 
  public get showEvents() {
    return this.getBooleanAttribute('show_events');
  }
  public set showEvents(value: boolean | cdktf.IResolvable) {
    this._showEvents = value;
  }
  public resetShowEvents() {
    this._showEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showEventsInput() {
    return this._showEvents;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryError {
  /**
  * File is the path to the referenced file. This can be a direct path to a file or an expression that matches multiple files, such as 'manifest/*.yaml' for all YAML files within the 'manifest' directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#file DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#file}
  */
  readonly file?: string;
  /**
  * Check provides a check used in assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#resource DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#resource}
  */
  readonly resource?: { [key: string]: string };
  /**
  * Template determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#template DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryErrorToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    resource: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resource),
    template: cdktf.booleanToTerraform(struct!.template),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryErrorToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resource),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    template: {
      value: cdktf.booleanToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryError | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryError | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._resource = undefined;
      this._template = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._resource = value.resource;
      this._template = value.template;
      this._timeout = value.timeout;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: { [key: string]: string }; 
  public get resource() {
    return this.getStringMapAttribute('resource');
  }
  public set resource(value: { [key: string]: string }) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // template - computed: false, optional: true, required: false
  private _template?: boolean | cdktf.IResolvable; 
  public get template() {
    return this.getBooleanAttribute('template');
  }
  public set template(value: boolean | cdktf.IResolvable) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryEvents {
  /**
  * Format determines the output format (json or yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#format DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#format}
  */
  readonly format?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#namespace DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#selector DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryEventsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryEventsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
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
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
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

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._selector = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._namespace = value.namespace;
      this._selector = value.selector;
      this._timeout = value.timeout;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryGet {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#api_version DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Format determines the output format (json or yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#format DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#format}
  */
  readonly format?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#kind DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#namespace DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#selector DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryGetToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    format: cdktf.stringToTerraform(struct!.format),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryGetToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryGet | cdktf.IResolvable): any {
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
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
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

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._format = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._selector = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._format = value.format;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._selector = value.selector;
      this._timeout = value.timeout;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputs {
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#match DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#match}
  */
  readonly match?: { [key: string]: string };
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.match),
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
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
      this._match = value.match;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match?: { [key: string]: string }; 
  public get match() {
    return this.getStringMapAttribute('match');
  }
  public set match(value: { [key: string]: string }) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputsOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpect {
  /**
  * Check defines the verification statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#check DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#check}
  */
  readonly check: { [key: string]: string };
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#match DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#match}
  */
  readonly match?: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpectToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.check),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpectToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.check),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.match),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._check = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._check = value.check;
      this._match = value.match;
    }
  }

  // check - computed: false, optional: false, required: true
  private _check?: { [key: string]: string }; 
  public get check() {
    return this.getStringMapAttribute('check');
  }
  public set check(value: { [key: string]: string }) {
    this._check = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // match - computed: false, optional: true, required: false
  private _match?: { [key: string]: string }; 
  public get match() {
    return this.getStringMapAttribute('match');
  }
  public set match(value: { [key: string]: string }) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpectList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpect[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpectOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatch {
  /**
  * DryRun determines whether the file should be applied in dry run mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#dry_run DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Expect defines a list of matched checks to validate the operation outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#expect DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#expect}
  */
  readonly expect?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpect[] | cdktf.IResolvable;
  /**
  * File is the path to the referenced file. This can be a direct path to a file or an expression that matches multiple files, such as 'manifest/*.yaml' for all YAML files within the 'manifest' directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#file DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#file}
  */
  readonly file?: string;
  /**
  * Resource provides a resource to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#resource DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#resource}
  */
  readonly resource?: { [key: string]: string };
  /**
  * Template determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#template DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    expect: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpectToTerraform, false)(struct!.expect),
    file: cdktf.stringToTerraform(struct!.file),
    resource: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resource),
    template: cdktf.booleanToTerraform(struct!.template),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expect: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpectToHclTerraform, false)(struct!.expect),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpectList",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resource),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    template: {
      value: cdktf.booleanToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._expect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expect = this._expect?.internalValue;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dryRun = undefined;
      this._expect.internalValue = undefined;
      this._file = undefined;
      this._resource = undefined;
      this._template = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dryRun = value.dryRun;
      this._expect.internalValue = value.expect;
      this._file = value.file;
      this._resource = value.resource;
      this._template = value.template;
      this._timeout = value.timeout;
    }
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // expect - computed: false, optional: true, required: false
  private _expect = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpectList(this, "expect", false);
  public get expect() {
    return this._expect;
  }
  public putExpect(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchExpect[] | cdktf.IResolvable) {
    this._expect.internalValue = value;
  }
  public resetExpect() {
    this._expect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectInput() {
    return this._expect.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: { [key: string]: string }; 
  public get resource() {
    return this.getStringMapAttribute('resource');
  }
  public set resource(value: { [key: string]: string }) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // template - computed: false, optional: true, required: false
  private _template?: boolean | cdktf.IResolvable; 
  public get template() {
    return this.getBooleanAttribute('template');
  }
  public set template(value: boolean | cdktf.IResolvable) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPodLogs {
  /**
  * Container in pod to get logs from else --all-containers is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#container DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#container}
  */
  readonly container?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#namespace DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#selector DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Tail is the number of last lines to collect from pods. If omitted or zero, then the default is 10 if you use a selector, or -1 (all) if you use a pod name. This matches default behavior of 'kubectl logs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#tail DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#tail}
  */
  readonly tail?: number;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPodLogsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPodLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    tail: cdktf.numberToTerraform(struct!.tail),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPodLogsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPodLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
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
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tail: {
      value: cdktf.numberToHclTerraform(struct!.tail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPodLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPodLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._tail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tail = this._tail;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPodLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._selector = undefined;
      this._tail = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._name = value.name;
      this._namespace = value.namespace;
      this._selector = value.selector;
      this._tail = value.tail;
      this._timeout = value.timeout;
    }
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

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // tail - computed: false, optional: true, required: false
  private _tail?: number; 
  public get tail() {
    return this.getNumberAttribute('tail');
  }
  public set tail(value: number) {
    this._tail = value;
  }
  public resetTail() {
    this._tail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailInput() {
    return this._tail;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnv {
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnvToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnvToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnv | cdktf.IResolvable): any {
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
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnv | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnvOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScript {
  /**
  * Check is an assertion tree to validate the operation outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#check DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#check}
  */
  readonly check?: { [key: string]: string };
  /**
  * Content defines a shell script (run with 'sh -c ...').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#content DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#content}
  */
  readonly content?: string;
  /**
  * Env defines additional environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#env DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#env}
  */
  readonly env?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnv[] | cdktf.IResolvable;
  /**
  * SkipLogOutput removes the output from the command. Useful for sensitive logs or to reduce noise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#skip_log_output DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#skip_log_output}
  */
  readonly skipLogOutput?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.check),
    content: cdktf.stringToTerraform(struct!.content),
    env: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnvToTerraform, false)(struct!.env),
    skip_log_output: cdktf.booleanToTerraform(struct!.skipLogOutput),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.check),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnvList",
    },
    skip_log_output: {
      value: cdktf.booleanToHclTerraform(struct!.skipLogOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._skipLogOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLogOutput = this._skipLogOutput;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._check = undefined;
      this._content = undefined;
      this._env.internalValue = undefined;
      this._skipLogOutput = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._check = value.check;
      this._content = value.content;
      this._env.internalValue = value.env;
      this._skipLogOutput = value.skipLogOutput;
      this._timeout = value.timeout;
    }
  }

  // check - computed: false, optional: true, required: false
  private _check?: { [key: string]: string }; 
  public get check() {
    return this.getStringMapAttribute('check');
  }
  public set check(value: { [key: string]: string }) {
    this._check = value;
  }
  public resetCheck() {
    this._check = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // skip_log_output - computed: false, optional: true, required: false
  private _skipLogOutput?: boolean | cdktf.IResolvable; 
  public get skipLogOutput() {
    return this.getBooleanAttribute('skip_log_output');
  }
  public set skipLogOutput(value: boolean | cdktf.IResolvable) {
    this._skipLogOutput = value;
  }
  public resetSkipLogOutput() {
    this._skipLogOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLogOutputInput() {
    return this._skipLogOutput;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTrySleep {
  /**
  * Duration is the delay used for sleeping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#duration DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#duration}
  */
  readonly duration: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTrySleepToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTrySleep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTrySleepToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTrySleep | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTrySleepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTrySleep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTrySleep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpect {
  /**
  * Check defines the verification statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#check DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#check}
  */
  readonly check: { [key: string]: string };
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#match DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#match}
  */
  readonly match?: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpectToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.check),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpectToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.check),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.match),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._check = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._check = value.check;
      this._match = value.match;
    }
  }

  // check - computed: false, optional: false, required: true
  private _check?: { [key: string]: string }; 
  public get check() {
    return this.getStringMapAttribute('check');
  }
  public set check(value: { [key: string]: string }) {
    this._check = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // match - computed: false, optional: true, required: false
  private _match?: { [key: string]: string }; 
  public get match() {
    return this.getStringMapAttribute('match');
  }
  public set match(value: { [key: string]: string }) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpectList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpect[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpectOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdate {
  /**
  * DryRun determines whether the file should be applied in dry run mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#dry_run DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Expect defines a list of matched checks to validate the operation outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#expect DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#expect}
  */
  readonly expect?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpect[] | cdktf.IResolvable;
  /**
  * File is the path to the referenced file. This can be a direct path to a file or an expression that matches multiple files, such as 'manifest/*.yaml' for all YAML files within the 'manifest' directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#file DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#file}
  */
  readonly file?: string;
  /**
  * Resource provides a resource to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#resource DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#resource}
  */
  readonly resource?: { [key: string]: string };
  /**
  * Template determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#template DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    expect: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpectToTerraform, false)(struct!.expect),
    file: cdktf.stringToTerraform(struct!.file),
    resource: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resource),
    template: cdktf.booleanToTerraform(struct!.template),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expect: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpectToHclTerraform, false)(struct!.expect),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpectList",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resource),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    template: {
      value: cdktf.booleanToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._expect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expect = this._expect?.internalValue;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dryRun = undefined;
      this._expect.internalValue = undefined;
      this._file = undefined;
      this._resource = undefined;
      this._template = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dryRun = value.dryRun;
      this._expect.internalValue = value.expect;
      this._file = value.file;
      this._resource = value.resource;
      this._template = value.template;
      this._timeout = value.timeout;
    }
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // expect - computed: false, optional: true, required: false
  private _expect = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpectList(this, "expect", false);
  public get expect() {
    return this._expect;
  }
  public putExpect(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateExpect[] | cdktf.IResolvable) {
    this._expect.internalValue = value;
  }
  public resetExpect() {
    this._expect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectInput() {
    return this._expect.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: { [key: string]: string }; 
  public get resource() {
    return this.getStringMapAttribute('resource');
  }
  public set resource(value: { [key: string]: string }) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // template - computed: false, optional: true, required: false
  private _template?: boolean | cdktf.IResolvable; 
  public get template() {
    return this.getBooleanAttribute('template');
  }
  public set template(value: boolean | cdktf.IResolvable) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForCondition {
  /**
  * Name defines the specific condition to wait for, e.g., 'Available', 'Ready'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value defines the specific condition status to wait for, e.g., 'True', 'False'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForConditionToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForConditionToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForCondition | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForCondition | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForJsonPath {
  /**
  * Path defines the json path to wait for, e.g. '{.status.phase}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#path DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#path}
  */
  readonly path: string;
  /**
  * Value defines the expected value to wait for, e.g., 'Running'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForJsonPathToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForJsonPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForJsonPathToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForJsonPath | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForJsonPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForJsonPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForJsonPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitFor {
  /**
  * Condition specifies the condition to wait for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#condition DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#condition}
  */
  readonly condition?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForCondition;
  /**
  * Deletion specifies parameters for waiting on a resource's deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#deletion DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#deletion}
  */
  readonly deletion?: { [key: string]: string };
  /**
  * JsonPath specifies the json path condition to wait for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#json_path DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#json_path}
  */
  readonly jsonPath?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForJsonPath;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForConditionToTerraform(struct!.condition),
    deletion: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.deletion),
    json_path: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForJsonPathToTerraform(struct!.jsonPath),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForCondition",
    },
    deletion: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.deletion),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    json_path: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForJsonPathToHclTerraform(struct!.jsonPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForJsonPath",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitFor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._deletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletion = this._deletion;
    }
    if (this._jsonPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitFor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._deletion = undefined;
      this._jsonPath.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._deletion = value.deletion;
      this._jsonPath.internalValue = value.jsonPath;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // deletion - computed: false, optional: true, required: false
  private _deletion?: { [key: string]: string }; 
  public get deletion() {
    return this.getStringMapAttribute('deletion');
  }
  public set deletion(value: { [key: string]: string }) {
    this._deletion = value;
  }
  public resetDeletion() {
    this._deletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionInput() {
    return this._deletion;
  }

  // json_path - computed: false, optional: true, required: false
  private _jsonPath = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForJsonPathOutputReference(this, "json_path");
  public get jsonPath() {
    return this._jsonPath;
  }
  public putJsonPath(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForJsonPath) {
    this._jsonPath.internalValue = value;
  }
  public resetJsonPath() {
    this._jsonPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath.internalValue;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWait {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#api_version DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * WaitFor specifies the condition to wait for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#for DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#for}
  */
  readonly for: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitFor;
  /**
  * Format determines the output format (json or yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#format DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#format}
  */
  readonly format?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#kind DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#namespace DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#selector DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWait | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    for: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForToTerraform(struct!.for),
    format: cdktf.stringToTerraform(struct!.format),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWait | cdktf.IResolvable): any {
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
    for: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForToHclTerraform(struct!.for),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitFor",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
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

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWait | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._for?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.for = this._for?.internalValue;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWait | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._for.internalValue = undefined;
      this._format = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._selector = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._for.internalValue = value.for;
      this._format = value.format;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._selector = value.selector;
      this._timeout = value.timeout;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // for - computed: false, optional: false, required: true
  private _for = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitForOutputReference(this, "for");
  public get for() {
    return this._for;
  }
  public putFor(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitFor) {
    this._for.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forInput() {
    return this._for.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTry {
  /**
  * Apply represents resources that should be applied for this test step. This can include things like configuration settings or any other resources that need to be available during the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#apply DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#apply}
  */
  readonly apply?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryApply;
  /**
  * Assert represents an assertion to be made. It checks whether the conditions specified in the assertion hold true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#assert DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#assert}
  */
  readonly assert?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryAssert;
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#bindings DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryBindings[] | cdktf.IResolvable;
  /**
  * Cluster defines the target cluster (default cluster will be used if not specified and/or overridden).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryClusters;
  /**
  * Command defines a command to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#command DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#command}
  */
  readonly command?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCommand;
  /**
  * ContinueOnError determines whether a test should continue or not in case the operation was not successful. Even if the test continues executing, it will still be reported as failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#continue_on_error DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#continue_on_error}
  */
  readonly continueOnError?: boolean | cdktf.IResolvable;
  /**
  * Create represents a creation operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#create DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#create}
  */
  readonly create?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCreate;
  /**
  * Delete represents a deletion operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#delete DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#delete}
  */
  readonly delete?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDelete;
  /**
  * Describe determines the resource describe collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#describe DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#describe}
  */
  readonly describe?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDescribe;
  /**
  * Description contains a description of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#description DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#description}
  */
  readonly description?: string;
  /**
  * Error represents the expected errors for this test step. If any of these errors occur, the test will consider them as expected; otherwise, they will be treated as test failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#error DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#error}
  */
  readonly error?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryError;
  /**
  * Events determines the events collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#events DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#events}
  */
  readonly events?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryEvents;
  /**
  * Get determines the resource get collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#get DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#get}
  */
  readonly get?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryGet;
  /**
  * Outputs defines output bindings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#outputs DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#outputs}
  */
  readonly outputs?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputs[] | cdktf.IResolvable;
  /**
  * Patch represents a patch operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#patch DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#patch}
  */
  readonly patch?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatch;
  /**
  * PodLogs determines the pod logs collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#pod_logs DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#pod_logs}
  */
  readonly podLogs?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPodLogs;
  /**
  * Script defines a script to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#script DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#script}
  */
  readonly script?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScript;
  /**
  * Sleep defines zzzz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#sleep DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#sleep}
  */
  readonly sleep?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTrySleep;
  /**
  * Update represents an update operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#update DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#update}
  */
  readonly update?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdate;
  /**
  * Wait determines the resource wait collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#wait DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#wait}
  */
  readonly wait?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWait;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryApplyToTerraform(struct!.apply),
    assert: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryAssertToTerraform(struct!.assert),
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryBindingsToTerraform, false)(struct!.bindings),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryClustersToTerraform(struct!.clusters),
    command: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCommandToTerraform(struct!.command),
    continue_on_error: cdktf.booleanToTerraform(struct!.continueOnError),
    create: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCreateToTerraform(struct!.create),
    delete: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteToTerraform(struct!.delete),
    describe: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDescribeToTerraform(struct!.describe),
    description: cdktf.stringToTerraform(struct!.description),
    error: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryErrorToTerraform(struct!.error),
    events: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryEventsToTerraform(struct!.events),
    get: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryGetToTerraform(struct!.get),
    outputs: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputsToTerraform, false)(struct!.outputs),
    patch: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchToTerraform(struct!.patch),
    pod_logs: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPodLogsToTerraform(struct!.podLogs),
    script: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptToTerraform(struct!.script),
    sleep: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTrySleepToTerraform(struct!.sleep),
    update: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateToTerraform(struct!.update),
    wait: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitToTerraform(struct!.wait),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryApplyToHclTerraform(struct!.apply),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryApply",
    },
    assert: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryAssertToHclTerraform(struct!.assert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryAssert",
    },
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryBindingsList",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryClusters",
    },
    command: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCommandToHclTerraform(struct!.command),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCommand",
    },
    continue_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.continueOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCreateToHclTerraform(struct!.create),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCreate",
    },
    delete: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteToHclTerraform(struct!.delete),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDelete",
    },
    describe: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDescribeToHclTerraform(struct!.describe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDescribe",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryError",
    },
    events: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryEventsToHclTerraform(struct!.events),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryEvents",
    },
    get: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryGetToHclTerraform(struct!.get),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryGet",
    },
    outputs: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputsToHclTerraform, false)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputsList",
    },
    patch: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchToHclTerraform(struct!.patch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatch",
    },
    pod_logs: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPodLogsToHclTerraform(struct!.podLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPodLogs",
    },
    script: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptToHclTerraform(struct!.script),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScript",
    },
    sleep: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTrySleepToHclTerraform(struct!.sleep),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTrySleep",
    },
    update: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateToHclTerraform(struct!.update),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdate",
    },
    wait: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitToHclTerraform(struct!.wait),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWait",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apply?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apply = this._apply?.internalValue;
    }
    if (this._assert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assert = this._assert?.internalValue;
    }
    if (this._bindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindings = this._bindings?.internalValue;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._command?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command?.internalValue;
    }
    if (this._continueOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueOnError = this._continueOnError;
    }
    if (this._create?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create?.internalValue;
    }
    if (this._delete?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete?.internalValue;
    }
    if (this._describe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.describe = this._describe?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._error?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error?.internalValue;
    }
    if (this._events?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events?.internalValue;
    }
    if (this._get?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.get = this._get?.internalValue;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    if (this._patch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch?.internalValue;
    }
    if (this._podLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podLogs = this._podLogs?.internalValue;
    }
    if (this._script?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script?.internalValue;
    }
    if (this._sleep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sleep = this._sleep?.internalValue;
    }
    if (this._update?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update?.internalValue;
    }
    if (this._wait?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apply.internalValue = undefined;
      this._assert.internalValue = undefined;
      this._bindings.internalValue = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._command.internalValue = undefined;
      this._continueOnError = undefined;
      this._create.internalValue = undefined;
      this._delete.internalValue = undefined;
      this._describe.internalValue = undefined;
      this._description = undefined;
      this._error.internalValue = undefined;
      this._events.internalValue = undefined;
      this._get.internalValue = undefined;
      this._outputs.internalValue = undefined;
      this._patch.internalValue = undefined;
      this._podLogs.internalValue = undefined;
      this._script.internalValue = undefined;
      this._sleep.internalValue = undefined;
      this._update.internalValue = undefined;
      this._wait.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apply.internalValue = value.apply;
      this._assert.internalValue = value.assert;
      this._bindings.internalValue = value.bindings;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._command.internalValue = value.command;
      this._continueOnError = value.continueOnError;
      this._create.internalValue = value.create;
      this._delete.internalValue = value.delete;
      this._describe.internalValue = value.describe;
      this._description = value.description;
      this._error.internalValue = value.error;
      this._events.internalValue = value.events;
      this._get.internalValue = value.get;
      this._outputs.internalValue = value.outputs;
      this._patch.internalValue = value.patch;
      this._podLogs.internalValue = value.podLogs;
      this._script.internalValue = value.script;
      this._sleep.internalValue = value.sleep;
      this._update.internalValue = value.update;
      this._wait.internalValue = value.wait;
    }
  }

  // apply - computed: false, optional: true, required: false
  private _apply = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryApplyOutputReference(this, "apply");
  public get apply() {
    return this._apply;
  }
  public putApply(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryApply) {
    this._apply.internalValue = value;
  }
  public resetApply() {
    this._apply.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyInput() {
    return this._apply.internalValue;
  }

  // assert - computed: false, optional: true, required: false
  private _assert = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryAssertOutputReference(this, "assert");
  public get assert() {
    return this._assert;
  }
  public putAssert(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryAssert) {
    this._assert.internalValue = value;
  }
  public resetAssert() {
    this._assert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertInput() {
    return this._assert.internalValue;
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryBindings[] | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // command - computed: false, optional: true, required: false
  private _command = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCommandOutputReference(this, "command");
  public get command() {
    return this._command;
  }
  public putCommand(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCommand) {
    this._command.internalValue = value;
  }
  public resetCommand() {
    this._command.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command.internalValue;
  }

  // continue_on_error - computed: false, optional: true, required: false
  private _continueOnError?: boolean | cdktf.IResolvable; 
  public get continueOnError() {
    return this.getBooleanAttribute('continue_on_error');
  }
  public set continueOnError(value: boolean | cdktf.IResolvable) {
    this._continueOnError = value;
  }
  public resetContinueOnError() {
    this._continueOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnErrorInput() {
    return this._continueOnError;
  }

  // create - computed: false, optional: true, required: false
  private _create = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCreateOutputReference(this, "create");
  public get create() {
    return this._create;
  }
  public putCreate(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryCreate) {
    this._create.internalValue = value;
  }
  public resetCreate() {
    this._create.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create.internalValue;
  }

  // delete - computed: false, optional: true, required: false
  private _delete = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDeleteOutputReference(this, "delete");
  public get delete() {
    return this._delete;
  }
  public putDelete(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDelete) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }

  // describe - computed: false, optional: true, required: false
  private _describe = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDescribeOutputReference(this, "describe");
  public get describe() {
    return this._describe;
  }
  public putDescribe(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryDescribe) {
    this._describe.internalValue = value;
  }
  public resetDescribe() {
    this._describe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get describeInput() {
    return this._describe.internalValue;
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

  // error - computed: false, optional: true, required: false
  private _error = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }

  // events - computed: false, optional: true, required: false
  private _events = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryEventsOutputReference(this, "events");
  public get events() {
    return this._events;
  }
  public putEvents(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryEvents) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // get - computed: false, optional: true, required: false
  private _get = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryGetOutputReference(this, "get");
  public get get() {
    return this._get;
  }
  public putGet(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryGet) {
    this._get.internalValue = value;
  }
  public resetGet() {
    this._get.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get getInput() {
    return this._get.internalValue;
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // patch - computed: false, optional: true, required: false
  private _patch = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatchOutputReference(this, "patch");
  public get patch() {
    return this._patch;
  }
  public putPatch(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPatch) {
    this._patch.internalValue = value;
  }
  public resetPatch() {
    this._patch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch.internalValue;
  }

  // pod_logs - computed: false, optional: true, required: false
  private _podLogs = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPodLogsOutputReference(this, "pod_logs");
  public get podLogs() {
    return this._podLogs;
  }
  public putPodLogs(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryPodLogs) {
    this._podLogs.internalValue = value;
  }
  public resetPodLogs() {
    this._podLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podLogsInput() {
    return this._podLogs.internalValue;
  }

  // script - computed: false, optional: true, required: false
  private _script = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScriptOutputReference(this, "script");
  public get script() {
    return this._script;
  }
  public putScript(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryScript) {
    this._script.internalValue = value;
  }
  public resetScript() {
    this._script.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script.internalValue;
  }

  // sleep - computed: false, optional: true, required: false
  private _sleep = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTrySleepOutputReference(this, "sleep");
  public get sleep() {
    return this._sleep;
  }
  public putSleep(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTrySleep) {
    this._sleep.internalValue = value;
  }
  public resetSleep() {
    this._sleep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepInput() {
    return this._sleep.internalValue;
  }

  // update - computed: false, optional: true, required: false
  private _update = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdateOutputReference(this, "update");
  public get update() {
    return this._update;
  }
  public putUpdate(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryUpdate) {
    this._update.internalValue = value;
  }
  public resetUpdate() {
    this._update.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update.internalValue;
  }

  // wait - computed: false, optional: true, required: false
  private _wait = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWaitOutputReference(this, "wait");
  public get wait() {
    return this._wait;
  }
  public putWait(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryWait) {
    this._wait.internalValue = value;
  }
  public resetWait() {
    this._wait.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait.internalValue;
  }
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTry[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecSteps {
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#bindings DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsBindings[] | cdktf.IResolvable;
  /**
  * Catch defines what the step will execute when an error happens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#catch DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#catch}
  */
  readonly catch?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCatch[] | cdktf.IResolvable;
  /**
  * Cleanup defines what will be executed after the test is terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#cleanup DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#cleanup}
  */
  readonly cleanup?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCleanup[] | cdktf.IResolvable;
  /**
  * Cluster defines the target cluster (default cluster will be used if not specified and/or overridden).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsClusters;
  /**
  * DeletionPropagationPolicy decides if a deletion will propagate to the dependents of the object, and how the garbage collector will handle the propagation. Overrides the deletion propagation policy set in both the Configuration and the Test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#deletion_propagation_policy DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#deletion_propagation_policy}
  */
  readonly deletionPropagationPolicy?: string;
  /**
  * Description contains a description of the test step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#description DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#description}
  */
  readonly description?: string;
  /**
  * Finally defines what the step will execute after the step is terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#finally DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#finally}
  */
  readonly finally?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsFinally[] | cdktf.IResolvable;
  /**
  * Name of the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * SkipDelete determines whether the resources created by the step should be deleted after the test step is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#skip_delete DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#skip_delete}
  */
  readonly skipDelete?: boolean | cdktf.IResolvable;
  /**
  * Template determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#template DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Timeouts for the test step. Overrides the global timeouts set in the Configuration and the timeouts eventually set in the Test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#timeouts DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#timeouts}
  */
  readonly timeouts?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTimeouts;
  /**
  * Try defines what the step will try to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#try DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#try}
  */
  readonly try: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTry[] | cdktf.IResolvable;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsBindingsToTerraform, false)(struct!.bindings),
    catch: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCatchToTerraform, false)(struct!.catch),
    cleanup: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCleanupToTerraform, false)(struct!.cleanup),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsClustersToTerraform(struct!.clusters),
    deletion_propagation_policy: cdktf.stringToTerraform(struct!.deletionPropagationPolicy),
    description: cdktf.stringToTerraform(struct!.description),
    finally: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsFinallyToTerraform, false)(struct!.finally),
    name: cdktf.stringToTerraform(struct!.name),
    skip_delete: cdktf.booleanToTerraform(struct!.skipDelete),
    template: cdktf.booleanToTerraform(struct!.template),
    timeouts: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTimeoutsToTerraform(struct!.timeouts),
    try: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryToTerraform, false)(struct!.try),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsBindingsList",
    },
    catch: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCatchToHclTerraform, false)(struct!.catch),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCatchList",
    },
    cleanup: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCleanupToHclTerraform, false)(struct!.cleanup),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCleanupList",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsClusters",
    },
    deletion_propagation_policy: {
      value: cdktf.stringToHclTerraform(struct!.deletionPropagationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    finally: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsFinallyToHclTerraform, false)(struct!.finally),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsFinallyList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_delete: {
      value: cdktf.booleanToHclTerraform(struct!.skipDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template: {
      value: cdktf.booleanToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeouts: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTimeoutsToHclTerraform(struct!.timeouts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTimeouts",
    },
    try: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryToHclTerraform, false)(struct!.try),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindings = this._bindings?.internalValue;
    }
    if (this._catch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catch = this._catch?.internalValue;
    }
    if (this._cleanup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanup = this._cleanup?.internalValue;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._deletionPropagationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionPropagationPolicy = this._deletionPropagationPolicy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._finally?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.finally = this._finally?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._skipDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDelete = this._skipDelete;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._timeouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts?.internalValue;
    }
    if (this._try?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.try = this._try?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindings.internalValue = undefined;
      this._catch.internalValue = undefined;
      this._cleanup.internalValue = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._deletionPropagationPolicy = undefined;
      this._description = undefined;
      this._finally.internalValue = undefined;
      this._name = undefined;
      this._skipDelete = undefined;
      this._template = undefined;
      this._timeouts.internalValue = undefined;
      this._try.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindings.internalValue = value.bindings;
      this._catch.internalValue = value.catch;
      this._cleanup.internalValue = value.cleanup;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._deletionPropagationPolicy = value.deletionPropagationPolicy;
      this._description = value.description;
      this._finally.internalValue = value.finally;
      this._name = value.name;
      this._skipDelete = value.skipDelete;
      this._template = value.template;
      this._timeouts.internalValue = value.timeouts;
      this._try.internalValue = value.try;
    }
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsBindings[] | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
  }

  // catch - computed: false, optional: true, required: false
  private _catch = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCatchList(this, "catch", false);
  public get catch() {
    return this._catch;
  }
  public putCatch(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCatch[] | cdktf.IResolvable) {
    this._catch.internalValue = value;
  }
  public resetCatch() {
    this._catch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catchInput() {
    return this._catch.internalValue;
  }

  // cleanup - computed: false, optional: true, required: false
  private _cleanup = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCleanupList(this, "cleanup", false);
  public get cleanup() {
    return this._cleanup;
  }
  public putCleanup(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsCleanup[] | cdktf.IResolvable) {
    this._cleanup.internalValue = value;
  }
  public resetCleanup() {
    this._cleanup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupInput() {
    return this._cleanup.internalValue;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // deletion_propagation_policy - computed: false, optional: true, required: false
  private _deletionPropagationPolicy?: string; 
  public get deletionPropagationPolicy() {
    return this.getStringAttribute('deletion_propagation_policy');
  }
  public set deletionPropagationPolicy(value: string) {
    this._deletionPropagationPolicy = value;
  }
  public resetDeletionPropagationPolicy() {
    this._deletionPropagationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPropagationPolicyInput() {
    return this._deletionPropagationPolicy;
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

  // finally - computed: false, optional: true, required: false
  private _finally = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsFinallyList(this, "finally", false);
  public get finally() {
    return this._finally;
  }
  public putFinally(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsFinally[] | cdktf.IResolvable) {
    this._finally.internalValue = value;
  }
  public resetFinally() {
    this._finally.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finallyInput() {
    return this._finally.internalValue;
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

  // skip_delete - computed: false, optional: true, required: false
  private _skipDelete?: boolean | cdktf.IResolvable; 
  public get skipDelete() {
    return this.getBooleanAttribute('skip_delete');
  }
  public set skipDelete(value: boolean | cdktf.IResolvable) {
    this._skipDelete = value;
  }
  public resetSkipDelete() {
    this._skipDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDeleteInput() {
    return this._skipDelete;
  }

  // template - computed: false, optional: true, required: false
  private _template?: boolean | cdktf.IResolvable; 
  public get template() {
    return this.getBooleanAttribute('template');
  }
  public set template(value: boolean | cdktf.IResolvable) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // try - computed: false, optional: false, required: true
  private _try = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTryList(this, "try", false);
  public get try() {
    return this._try;
  }
  public putTry(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsTry[] | cdktf.IResolvable) {
    this._try.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tryInput() {
    return this._try.internalValue;
  }
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecSteps[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTemplating {
  /**
  * Enabled determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#enabled DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTemplatingToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTemplating | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTemplatingToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTemplating | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTemplatingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTemplating | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTemplating | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTimeouts {
  /**
  * Apply defines the timeout for the apply operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#apply DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#apply}
  */
  readonly apply?: string;
  /**
  * Assert defines the timeout for the assert operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#assert DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#assert}
  */
  readonly assert?: string;
  /**
  * Cleanup defines the timeout for the cleanup operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#cleanup DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#cleanup}
  */
  readonly cleanup?: string;
  /**
  * Delete defines the timeout for the delete operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#delete DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#delete}
  */
  readonly delete?: string;
  /**
  * Error defines the timeout for the error operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#error DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#error}
  */
  readonly error?: string;
  /**
  * Exec defines the timeout for exec operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#exec DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#exec}
  */
  readonly exec?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTimeoutsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply: cdktf.stringToTerraform(struct!.apply),
    assert: cdktf.stringToTerraform(struct!.assert),
    cleanup: cdktf.stringToTerraform(struct!.cleanup),
    delete: cdktf.stringToTerraform(struct!.delete),
    error: cdktf.stringToTerraform(struct!.error),
    exec: cdktf.stringToTerraform(struct!.exec),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTimeoutsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply: {
      value: cdktf.stringToHclTerraform(struct!.apply),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assert: {
      value: cdktf.stringToHclTerraform(struct!.assert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cleanup: {
      value: cdktf.stringToHclTerraform(struct!.cleanup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error: {
      value: cdktf.stringToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exec: {
      value: cdktf.stringToHclTerraform(struct!.exec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apply !== undefined) {
      hasAnyValues = true;
      internalValueResult.apply = this._apply;
    }
    if (this._assert !== undefined) {
      hasAnyValues = true;
      internalValueResult.assert = this._assert;
    }
    if (this._cleanup !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanup = this._cleanup;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._exec !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apply = undefined;
      this._assert = undefined;
      this._cleanup = undefined;
      this._delete = undefined;
      this._error = undefined;
      this._exec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apply = value.apply;
      this._assert = value.assert;
      this._cleanup = value.cleanup;
      this._delete = value.delete;
      this._error = value.error;
      this._exec = value.exec;
    }
  }

  // apply - computed: false, optional: true, required: false
  private _apply?: string; 
  public get apply() {
    return this.getStringAttribute('apply');
  }
  public set apply(value: string) {
    this._apply = value;
  }
  public resetApply() {
    this._apply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyInput() {
    return this._apply;
  }

  // assert - computed: false, optional: true, required: false
  private _assert?: string; 
  public get assert() {
    return this.getStringAttribute('assert');
  }
  public set assert(value: string) {
    this._assert = value;
  }
  public resetAssert() {
    this._assert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertInput() {
    return this._assert;
  }

  // cleanup - computed: false, optional: true, required: false
  private _cleanup?: string; 
  public get cleanup() {
    return this.getStringAttribute('cleanup');
  }
  public set cleanup(value: string) {
    this._cleanup = value;
  }
  public resetCleanup() {
    this._cleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupInput() {
    return this._cleanup;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // error - computed: false, optional: true, required: false
  private _error?: string; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: string; 
  public get exec() {
    return this.getStringAttribute('exec');
  }
  public set exec(value: string) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpec {
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#bindings DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecBindings[] | cdktf.IResolvable;
  /**
  * Cleanup contains cleanup configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#cleanup DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#cleanup}
  */
  readonly cleanup?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecCleanup;
  /**
  * Cluster defines the target cluster (default cluster will be used if not specified and/or overridden).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecClusters;
  /**
  * Deletion contains the global deletion configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#deletion DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#deletion}
  */
  readonly deletion?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecDeletion;
  /**
  * Description contains a description of the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#description DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#description}
  */
  readonly description?: string;
  /**
  * Error contains the global error configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#error DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#error}
  */
  readonly error?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecError;
  /**
  * Execution contains tests execution configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#execution DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#execution}
  */
  readonly execution?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecExecution;
  /**
  * Namespace contains properties for the namespace to use for tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#namespace DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#namespace}
  */
  readonly namespace?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecNamespace;
  /**
  * Steps defining the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#steps DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#steps}
  */
  readonly steps: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecSteps[] | cdktf.IResolvable;
  /**
  * Templating contains the templating config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#templating DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#templating}
  */
  readonly templating?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTemplating;
  /**
  * Timeouts for the test. Overrides the global timeouts set in the Configuration on a per operation basis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_test_v1alpha2_manifest#timeouts DataK8SChainsawKyvernoIoTestV1Alpha2Manifest#timeouts}
  */
  readonly timeouts?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTimeouts;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecBindingsToTerraform, false)(struct!.bindings),
    cleanup: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecCleanupToTerraform(struct!.cleanup),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecClustersToTerraform(struct!.clusters),
    deletion: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecDeletionToTerraform(struct!.deletion),
    description: cdktf.stringToTerraform(struct!.description),
    error: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecErrorToTerraform(struct!.error),
    execution: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecExecutionToTerraform(struct!.execution),
    namespace: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecNamespaceToTerraform(struct!.namespace),
    steps: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsToTerraform, false)(struct!.steps),
    templating: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTemplatingToTerraform(struct!.templating),
    timeouts: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTimeoutsToTerraform(struct!.timeouts),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecBindingsList",
    },
    cleanup: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecCleanupToHclTerraform(struct!.cleanup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecCleanup",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecClusters",
    },
    deletion: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecDeletionToHclTerraform(struct!.deletion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecDeletion",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecError",
    },
    execution: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecExecutionToHclTerraform(struct!.execution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecExecution",
    },
    namespace: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecNamespaceToHclTerraform(struct!.namespace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecNamespace",
    },
    steps: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsToHclTerraform, false)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsList",
    },
    templating: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTemplatingToHclTerraform(struct!.templating),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTemplating",
    },
    timeouts: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTimeoutsToHclTerraform(struct!.timeouts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTimeouts",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindings = this._bindings?.internalValue;
    }
    if (this._cleanup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanup = this._cleanup?.internalValue;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._deletion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletion = this._deletion?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._error?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error?.internalValue;
    }
    if (this._execution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.execution = this._execution?.internalValue;
    }
    if (this._namespace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace?.internalValue;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    if (this._templating?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templating = this._templating?.internalValue;
    }
    if (this._timeouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindings.internalValue = undefined;
      this._cleanup.internalValue = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._deletion.internalValue = undefined;
      this._description = undefined;
      this._error.internalValue = undefined;
      this._execution.internalValue = undefined;
      this._namespace.internalValue = undefined;
      this._steps.internalValue = undefined;
      this._templating.internalValue = undefined;
      this._timeouts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindings.internalValue = value.bindings;
      this._cleanup.internalValue = value.cleanup;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._deletion.internalValue = value.deletion;
      this._description = value.description;
      this._error.internalValue = value.error;
      this._execution.internalValue = value.execution;
      this._namespace.internalValue = value.namespace;
      this._steps.internalValue = value.steps;
      this._templating.internalValue = value.templating;
      this._timeouts.internalValue = value.timeouts;
    }
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecBindings[] | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
  }

  // cleanup - computed: false, optional: true, required: false
  private _cleanup = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecCleanupOutputReference(this, "cleanup");
  public get cleanup() {
    return this._cleanup;
  }
  public putCleanup(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecCleanup) {
    this._cleanup.internalValue = value;
  }
  public resetCleanup() {
    this._cleanup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupInput() {
    return this._cleanup.internalValue;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // deletion - computed: false, optional: true, required: false
  private _deletion = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecDeletionOutputReference(this, "deletion");
  public get deletion() {
    return this._deletion;
  }
  public putDeletion(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecDeletion) {
    this._deletion.internalValue = value;
  }
  public resetDeletion() {
    this._deletion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionInput() {
    return this._deletion.internalValue;
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

  // error - computed: false, optional: true, required: false
  private _error = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }

  // execution - computed: false, optional: true, required: false
  private _execution = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecExecutionOutputReference(this, "execution");
  public get execution() {
    return this._execution;
  }
  public putExecution(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecExecution) {
    this._execution.internalValue = value;
  }
  public resetExecution() {
    this._execution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionInput() {
    return this._execution.internalValue;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecNamespaceOutputReference(this, "namespace");
  public get namespace() {
    return this._namespace;
  }
  public putNamespace(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecNamespace) {
    this._namespace.internalValue = value;
  }
  public resetNamespace() {
    this._namespace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace.internalValue;
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // templating - computed: false, optional: true, required: false
  private _templating = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTemplatingOutputReference(this, "templating");
  public get templating() {
    return this._templating;
  }
  public putTemplating(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTemplating) {
    this._templating.internalValue = value;
  }
  public resetTemplating() {
    this._templating.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatingInput() {
    return this._templating.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataK8SChainsawKyvernoIoTestV1Alpha2ManifestSpecTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }
}
