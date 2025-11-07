import * as cdktf from 'cdktf';
import { DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteBindings,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteBindingsToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteBindingsToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteBindingsList,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteClusters,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteClustersToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteClustersToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteClustersOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryApply,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryApplyToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryApplyToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryApplyOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryAssert,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryAssertToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryAssertToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryAssertOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCommand,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCommandToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCommandToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCommandOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCreate,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCreateToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCreateToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCreateOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsBindings,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsBindingsToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsBindingsToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsBindingsList,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCatch,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCatchToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCatchToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCatchList,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCleanup,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCleanupToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCleanupToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCleanupList,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsClusters,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsClustersToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsClustersToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsClustersOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsFinally,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsFinallyToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsFinallyToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsFinallyList,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTimeouts,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTimeoutsToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTimeoutsToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTimeoutsOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecBindings,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecBindingsToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecBindingsToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecBindingsList,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecCatch,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecCatchToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecCatchToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecCatchList,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecClusters,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecClustersToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecClustersToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecClustersOutputReference,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecScenarios,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecScenariosToTerraform,
dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecScenariosToHclTerraform,
DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecScenariosList } from './structs0'
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpect {
  /**
  * Check defines the verification statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#check DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#check}
  */
  readonly check: { [key: string]: string };
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#match DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#match}
  */
  readonly match?: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpectToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.check),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpectToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpect | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpect | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpect | cdktf.IResolvable | undefined) {
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpectList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpect[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpectOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#api_version DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kind DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Label selector to match objects to delete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#labels DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteRefToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteRefToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteRef | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDelete {
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#bindings DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteBindings[] | cdktf.IResolvable;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteClusters;
  /**
  * DeletionPropagationPolicy decides if a deletion will propagate to the dependents of the object, and how the garbage collector will handle the propagation. Overrides the deletion propagation policy set in the Configuration, the Test and the TestStep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#deletion_propagation_policy DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#deletion_propagation_policy}
  */
  readonly deletionPropagationPolicy?: string;
  /**
  * Expect defines a list of matched checks to validate the operation outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#expect DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#expect}
  */
  readonly expect?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpect[] | cdktf.IResolvable;
  /**
  * File is the path to the referenced file. This can be a direct path to a file or an expression that matches multiple files, such as 'manifest/*.yaml' for all YAML files within the 'manifest' directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#file DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#file}
  */
  readonly file?: string;
  /**
  * Ref determines objects to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#ref DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#ref}
  */
  readonly ref?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteRef;
  /**
  * Template determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#template DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteBindingsToTerraform, false)(struct!.bindings),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteClustersToTerraform(struct!.clusters),
    deletion_propagation_policy: cdktf.stringToTerraform(struct!.deletionPropagationPolicy),
    expect: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpectToTerraform, false)(struct!.expect),
    file: cdktf.stringToTerraform(struct!.file),
    ref: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteRefToTerraform(struct!.ref),
    template: cdktf.booleanToTerraform(struct!.template),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteBindingsList",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteClusters",
    },
    deletion_propagation_policy: {
      value: cdktf.stringToHclTerraform(struct!.deletionPropagationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expect: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpectToHclTerraform, false)(struct!.expect),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpectList",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteRef",
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindings.internalValue = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
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
      this._bindings.internalValue = value.bindings;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._deletionPropagationPolicy = value.deletionPropagationPolicy;
      this._expect.internalValue = value.expect;
      this._file = value.file;
      this._ref.internalValue = value.ref;
      this._template = value.template;
      this._timeout = value.timeout;
    }
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteBindings[] | cdktf.IResolvable) {
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
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteClusters) {
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

  // expect - computed: false, optional: true, required: false
  private _expect = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpectList(this, "expect", false);
  public get expect() {
    return this._expect;
  }
  public putExpect(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteExpect[] | cdktf.IResolvable) {
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
  private _ref = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteRef) {
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#context DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeClustersToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribe {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#api_version DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeClusters;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kind DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#selector DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Show Events indicates whether to include related events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#show_events DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#show_events}
  */
  readonly showEvents?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeClustersToTerraform(struct!.clusters),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    show_events: cdktf.booleanToTerraform(struct!.showEvents),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribe | cdktf.IResolvable): any {
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
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeClusters",
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
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
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
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
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindings {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindingsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindingsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
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
      this._compiler = value.compiler;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindingsOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#context DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorClustersToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryError {
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#bindings DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindings[] | cdktf.IResolvable;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorClusters;
  /**
  * File is the path to the referenced file. This can be a direct path to a file or an expression that matches multiple files, such as 'manifest/*.yaml' for all YAML files within the 'manifest' directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#file DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#file}
  */
  readonly file?: string;
  /**
  * Check provides a check used in assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#resource DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#resource}
  */
  readonly resource?: { [key: string]: string };
  /**
  * Template determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#template DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindingsToTerraform, false)(struct!.bindings),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorClustersToTerraform(struct!.clusters),
    file: cdktf.stringToTerraform(struct!.file),
    resource: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resource),
    template: cdktf.booleanToTerraform(struct!.template),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindingsList",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorClusters",
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryError | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryError | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindings.internalValue = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
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
      this._bindings.internalValue = value.bindings;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._file = value.file;
      this._resource = value.resource;
      this._template = value.template;
      this._timeout = value.timeout;
    }
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorBindings[] | cdktf.IResolvable) {
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
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#context DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsClustersToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEvents {
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsClusters;
  /**
  * Format determines the output format (json or yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#format DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#selector DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsClustersToTerraform(struct!.clusters),
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsClusters",
    },
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
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
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._format = value.format;
      this._name = value.name;
      this._namespace = value.namespace;
      this._selector = value.selector;
      this._timeout = value.timeout;
    }
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
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#context DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetClustersToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGet {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#api_version DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetClusters;
  /**
  * Format determines the output format (json or yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#format DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kind DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#selector DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetClustersToTerraform(struct!.clusters),
    format: cdktf.stringToTerraform(struct!.format),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGet | cdktf.IResolvable): any {
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
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetClusters",
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
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
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
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
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindings {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindingsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindingsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
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
      this._compiler = value.compiler;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindingsOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#context DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchClustersToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpect {
  /**
  * Check defines the verification statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#check DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#check}
  */
  readonly check: { [key: string]: string };
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#match DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#match}
  */
  readonly match?: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpectToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.check),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpectToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpect | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpect | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpect | cdktf.IResolvable | undefined) {
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpectList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpect[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpectOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputs {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#match DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#match}
  */
  readonly match?: { [key: string]: string };
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
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
      this._compiler = value.compiler;
      this._match = value.match;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputsOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatch {
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#bindings DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindings[] | cdktf.IResolvable;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchClusters;
  /**
  * DryRun determines whether the file should be applied in dry run mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#dry_run DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Expect defines a list of matched checks to validate the operation outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#expect DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#expect}
  */
  readonly expect?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpect[] | cdktf.IResolvable;
  /**
  * File is the path to the referenced file. This can be a direct path to a file or an expression that matches multiple files, such as 'manifest/*.yaml' for all YAML files within the 'manifest' directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#file DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#file}
  */
  readonly file?: string;
  /**
  * Outputs defines output bindings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#outputs DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#outputs}
  */
  readonly outputs?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputs[] | cdktf.IResolvable;
  /**
  * Resource provides a resource to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#resource DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#resource}
  */
  readonly resource?: { [key: string]: string };
  /**
  * Template determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#template DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindingsToTerraform, false)(struct!.bindings),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchClustersToTerraform(struct!.clusters),
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    expect: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpectToTerraform, false)(struct!.expect),
    file: cdktf.stringToTerraform(struct!.file),
    outputs: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputsToTerraform, false)(struct!.outputs),
    resource: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resource),
    template: cdktf.booleanToTerraform(struct!.template),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindingsList",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchClusters",
    },
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expect: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpectToHclTerraform, false)(struct!.expect),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpectList",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outputs: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputsToHclTerraform, false)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputsList",
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindings.internalValue = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._dryRun = undefined;
      this._expect.internalValue = undefined;
      this._file = undefined;
      this._outputs.internalValue = undefined;
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
      this._bindings.internalValue = value.bindings;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._dryRun = value.dryRun;
      this._expect.internalValue = value.expect;
      this._file = value.file;
      this._outputs.internalValue = value.outputs;
      this._resource = value.resource;
      this._template = value.template;
      this._timeout = value.timeout;
    }
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchBindings[] | cdktf.IResolvable) {
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
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
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
  private _expect = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpectList(this, "expect", false);
  public get expect() {
    return this._expect;
  }
  public putExpect(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchExpect[] | cdktf.IResolvable) {
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

  // outputs - computed: false, optional: true, required: false
  private _outputs = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#context DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsClustersToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogs {
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsClusters;
  /**
  * Container in pod to get logs from else --all-containers is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#container DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#container}
  */
  readonly container?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#selector DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Tail is the number of last lines to collect from pods. If omitted or zero, then the default is 10 if you use a selector, or -1 (all) if you use a pod name. This matches default behavior of 'kubectl logs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#tail DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#tail}
  */
  readonly tail?: number;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsClustersToTerraform(struct!.clusters),
    container: cdktf.stringToTerraform(struct!.container),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    tail: cdktf.numberToTerraform(struct!.tail),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsClusters",
    },
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
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
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._container = value.container;
      this._name = value.name;
      this._namespace = value.namespace;
      this._selector = value.selector;
      this._tail = value.tail;
      this._timeout = value.timeout;
    }
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
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#context DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyClustersToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputs {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#match DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#match}
  */
  readonly match?: { [key: string]: string };
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
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
      this._compiler = value.compiler;
      this._match = value.match;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputsOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxy {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#api_version DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyClusters;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kind DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Outputs defines output bindings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#outputs DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#outputs}
  */
  readonly outputs?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputs[] | cdktf.IResolvable;
  /**
  * TargetPath defines the target path to proxy the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#path DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * TargetPort defines the target port to proxy the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#port DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#port}
  */
  readonly port?: string;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyClustersToTerraform(struct!.clusters),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    outputs: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputsToTerraform, false)(struct!.outputs),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxy | cdktf.IResolvable): any {
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
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyClusters",
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
    outputs: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputsToHclTerraform, false)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputsList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
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
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._outputs.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
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
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._outputs.internalValue = value.outputs;
      this._path = value.path;
      this._port = value.port;
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
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
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

  // outputs - computed: false, optional: true, required: false
  private _outputs = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindings {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindingsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindingsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
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
      this._compiler = value.compiler;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindingsOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#context DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptClustersToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnv {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnvToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnvToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
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
      this._compiler = value.compiler;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnvOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputs {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#match DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#match}
  */
  readonly match?: { [key: string]: string };
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
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
      this._compiler = value.compiler;
      this._match = value.match;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputsOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScript {
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#bindings DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindings[] | cdktf.IResolvable;
  /**
  * Check is an assertion tree to validate the operation outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#check DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#check}
  */
  readonly check?: { [key: string]: string };
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptClusters;
  /**
  * Content defines a shell script (run with 'sh -c ...').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#content DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#content}
  */
  readonly content?: string;
  /**
  * Env defines additional environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#env DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnv[] | cdktf.IResolvable;
  /**
  * Outputs defines output bindings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#outputs DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#outputs}
  */
  readonly outputs?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputs[] | cdktf.IResolvable;
  /**
  * SkipLogOutput removes the output from the command. Useful for sensitive logs or to reduce noise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#skip_log_output DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#skip_log_output}
  */
  readonly skipLogOutput?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * WorkDir is the working directory for script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#work_dir DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#work_dir}
  */
  readonly workDir?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindingsToTerraform, false)(struct!.bindings),
    check: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.check),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptClustersToTerraform(struct!.clusters),
    content: cdktf.stringToTerraform(struct!.content),
    env: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnvToTerraform, false)(struct!.env),
    outputs: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputsToTerraform, false)(struct!.outputs),
    skip_log_output: cdktf.booleanToTerraform(struct!.skipLogOutput),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    work_dir: cdktf.stringToTerraform(struct!.workDir),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindingsList",
    },
    check: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.check),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptClusters",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnvList",
    },
    outputs: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputsToHclTerraform, false)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputsList",
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
    work_dir: {
      value: cdktf.stringToHclTerraform(struct!.workDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindings = this._bindings?.internalValue;
    }
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    if (this._skipLogOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLogOutput = this._skipLogOutput;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._workDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workDir = this._workDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindings.internalValue = undefined;
      this._check = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._content = undefined;
      this._env.internalValue = undefined;
      this._outputs.internalValue = undefined;
      this._skipLogOutput = undefined;
      this._timeout = undefined;
      this._workDir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindings.internalValue = value.bindings;
      this._check = value.check;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._content = value.content;
      this._env.internalValue = value.env;
      this._outputs.internalValue = value.outputs;
      this._skipLogOutput = value.skipLogOutput;
      this._timeout = value.timeout;
      this._workDir = value.workDir;
    }
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptBindings[] | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
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
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
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
  private _env = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
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

  // work_dir - computed: false, optional: true, required: false
  private _workDir?: string; 
  public get workDir() {
    return this.getStringAttribute('work_dir');
  }
  public set workDir(value: string) {
    this._workDir = value;
  }
  public resetWorkDir() {
    this._workDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workDirInput() {
    return this._workDir;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTrySleep {
  /**
  * Duration is the delay used for sleeping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#duration DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#duration}
  */
  readonly duration: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTrySleepToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTrySleep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTrySleepToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTrySleep | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTrySleepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTrySleep | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTrySleep | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindings {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindingsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindingsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
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
      this._compiler = value.compiler;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindingsOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#context DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateClustersToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpect {
  /**
  * Check defines the verification statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#check DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#check}
  */
  readonly check: { [key: string]: string };
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#match DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#match}
  */
  readonly match?: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpectToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.check),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpectToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpect | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpect | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpect | cdktf.IResolvable | undefined) {
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpectList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpect[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpectOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputs {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#match DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#match}
  */
  readonly match?: { [key: string]: string };
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
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
      this._compiler = value.compiler;
      this._match = value.match;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputsOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdate {
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#bindings DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindings[] | cdktf.IResolvable;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateClusters;
  /**
  * DryRun determines whether the file should be applied in dry run mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#dry_run DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Expect defines a list of matched checks to validate the operation outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#expect DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#expect}
  */
  readonly expect?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpect[] | cdktf.IResolvable;
  /**
  * File is the path to the referenced file. This can be a direct path to a file or an expression that matches multiple files, such as 'manifest/*.yaml' for all YAML files within the 'manifest' directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#file DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#file}
  */
  readonly file?: string;
  /**
  * Outputs defines output bindings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#outputs DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#outputs}
  */
  readonly outputs?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputs[] | cdktf.IResolvable;
  /**
  * Resource provides a resource to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#resource DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#resource}
  */
  readonly resource?: { [key: string]: string };
  /**
  * Template determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#template DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindingsToTerraform, false)(struct!.bindings),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateClustersToTerraform(struct!.clusters),
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    expect: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpectToTerraform, false)(struct!.expect),
    file: cdktf.stringToTerraform(struct!.file),
    outputs: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputsToTerraform, false)(struct!.outputs),
    resource: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resource),
    template: cdktf.booleanToTerraform(struct!.template),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindingsList",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateClusters",
    },
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expect: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpectToHclTerraform, false)(struct!.expect),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpectList",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outputs: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputsToHclTerraform, false)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputsList",
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindings.internalValue = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._dryRun = undefined;
      this._expect.internalValue = undefined;
      this._file = undefined;
      this._outputs.internalValue = undefined;
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
      this._bindings.internalValue = value.bindings;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._dryRun = value.dryRun;
      this._expect.internalValue = value.expect;
      this._file = value.file;
      this._outputs.internalValue = value.outputs;
      this._resource = value.resource;
      this._template = value.template;
      this._timeout = value.timeout;
    }
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateBindings[] | cdktf.IResolvable) {
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
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
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
  private _expect = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpectList(this, "expect", false);
  public get expect() {
    return this._expect;
  }
  public putExpect(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateExpect[] | cdktf.IResolvable) {
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

  // outputs - computed: false, optional: true, required: false
  private _outputs = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#context DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitClustersToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForCondition {
  /**
  * Name defines the specific condition to wait for, e.g., 'Available', 'Ready'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value defines the specific condition status to wait for, e.g., 'True', 'False'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForConditionToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForConditionToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForCondition | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForCondition | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForJsonPath {
  /**
  * Path defines the json path to wait for, e.g. '{.status.phase}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#path DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Value defines the expected value to wait for, e.g., 'Running'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForJsonPathToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForJsonPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForJsonPathToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForJsonPath | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForJsonPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForJsonPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForJsonPath | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitFor {
  /**
  * Condition specifies the condition to wait for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#condition DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#condition}
  */
  readonly condition?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForCondition;
  /**
  * Deletion specifies parameters for waiting on a resource's deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#deletion DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#deletion}
  */
  readonly deletion?: { [key: string]: string };
  /**
  * JsonPath specifies the json path condition to wait for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#json_path DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#json_path}
  */
  readonly jsonPath?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForJsonPath;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForConditionToTerraform(struct!.condition),
    deletion: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.deletion),
    json_path: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForJsonPathToTerraform(struct!.jsonPath),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForCondition",
    },
    deletion: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.deletion),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    json_path: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForJsonPathToHclTerraform(struct!.jsonPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForJsonPath",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitFor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitFor | cdktf.IResolvable | undefined) {
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
  private _condition = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForCondition) {
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
  private _jsonPath = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForJsonPathOutputReference(this, "json_path");
  public get jsonPath() {
    return this._jsonPath;
  }
  public putJsonPath(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForJsonPath) {
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWait {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#api_version DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitClusters;
  /**
  * WaitFor specifies the condition to wait for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#for DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#for}
  */
  readonly for: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitFor;
  /**
  * Format determines the output format (json or yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#format DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#kind DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#selector DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWait | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitClustersToTerraform(struct!.clusters),
    for: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForToTerraform(struct!.for),
    format: cdktf.stringToTerraform(struct!.format),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWait | cdktf.IResolvable): any {
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
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitClusters",
    },
    for: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForToHclTerraform(struct!.for),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitFor",
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWait | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWait | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
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
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
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
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // for - computed: false, optional: false, required: true
  private _for = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitForOutputReference(this, "for");
  public get for() {
    return this._for;
  }
  public putFor(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitFor) {
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTry {
  /**
  * Apply represents resources that should be applied for this test step. This can include things like configuration settings or any other resources that need to be available during the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#apply DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#apply}
  */
  readonly apply?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryApply;
  /**
  * Assert represents an assertion to be made. It checks whether the conditions specified in the assertion hold true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#assert DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#assert}
  */
  readonly assert?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryAssert;
  /**
  * Command defines a command to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#command DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#command}
  */
  readonly command?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCommand;
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * ContinueOnError determines whether a test should continue or not in case the operation was not successful. Even if the test continues executing, it will still be reported as failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#continue_on_error DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#continue_on_error}
  */
  readonly continueOnError?: boolean | cdktf.IResolvable;
  /**
  * Create represents a creation operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#create DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#create}
  */
  readonly create?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCreate;
  /**
  * Delete represents a deletion operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#delete DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#delete}
  */
  readonly delete?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDelete;
  /**
  * Describe determines the resource describe collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#describe DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#describe}
  */
  readonly describe?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribe;
  /**
  * Description contains a description of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#description DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Error represents the expected errors for this test step. If any of these errors occur, the test will consider them as expected; otherwise, they will be treated as test failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#error DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#error}
  */
  readonly error?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryError;
  /**
  * Events determines the events collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#events DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#events}
  */
  readonly events?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEvents;
  /**
  * Get determines the resource get collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#get DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#get}
  */
  readonly get?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGet;
  /**
  * Patch represents a patch operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#patch DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#patch}
  */
  readonly patch?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatch;
  /**
  * PodLogs determines the pod logs collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#pod_logs DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#pod_logs}
  */
  readonly podLogs?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogs;
  /**
  * Proxy runs a proxy request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#proxy DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#proxy}
  */
  readonly proxy?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxy;
  /**
  * Script defines a script to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#script DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#script}
  */
  readonly script?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScript;
  /**
  * Sleep defines zzzz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#sleep DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#sleep}
  */
  readonly sleep?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTrySleep;
  /**
  * Update represents an update operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#update DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#update}
  */
  readonly update?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdate;
  /**
  * Wait determines the resource wait collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#wait DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#wait}
  */
  readonly wait?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWait;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryApplyToTerraform(struct!.apply),
    assert: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryAssertToTerraform(struct!.assert),
    command: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCommandToTerraform(struct!.command),
    compiler: cdktf.stringToTerraform(struct!.compiler),
    continue_on_error: cdktf.booleanToTerraform(struct!.continueOnError),
    create: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCreateToTerraform(struct!.create),
    delete: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteToTerraform(struct!.delete),
    describe: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeToTerraform(struct!.describe),
    description: cdktf.stringToTerraform(struct!.description),
    error: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorToTerraform(struct!.error),
    events: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsToTerraform(struct!.events),
    get: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetToTerraform(struct!.get),
    patch: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchToTerraform(struct!.patch),
    pod_logs: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsToTerraform(struct!.podLogs),
    proxy: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyToTerraform(struct!.proxy),
    script: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptToTerraform(struct!.script),
    sleep: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTrySleepToTerraform(struct!.sleep),
    update: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateToTerraform(struct!.update),
    wait: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitToTerraform(struct!.wait),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryApplyToHclTerraform(struct!.apply),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryApply",
    },
    assert: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryAssertToHclTerraform(struct!.assert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryAssert",
    },
    command: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCommandToHclTerraform(struct!.command),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCommand",
    },
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    continue_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.continueOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCreateToHclTerraform(struct!.create),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCreate",
    },
    delete: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteToHclTerraform(struct!.delete),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDelete",
    },
    describe: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeToHclTerraform(struct!.describe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribe",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryError",
    },
    events: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsToHclTerraform(struct!.events),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEvents",
    },
    get: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetToHclTerraform(struct!.get),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGet",
    },
    patch: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchToHclTerraform(struct!.patch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatch",
    },
    pod_logs: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsToHclTerraform(struct!.podLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogs",
    },
    proxy: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxy",
    },
    script: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptToHclTerraform(struct!.script),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScript",
    },
    sleep: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTrySleepToHclTerraform(struct!.sleep),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTrySleep",
    },
    update: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateToHclTerraform(struct!.update),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdate",
    },
    wait: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitToHclTerraform(struct!.wait),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWait",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTry | cdktf.IResolvable | undefined {
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
    if (this._command?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command?.internalValue;
    }
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
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
    if (this._patch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch?.internalValue;
    }
    if (this._podLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podLogs = this._podLogs?.internalValue;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apply.internalValue = undefined;
      this._assert.internalValue = undefined;
      this._command.internalValue = undefined;
      this._compiler = undefined;
      this._continueOnError = undefined;
      this._create.internalValue = undefined;
      this._delete.internalValue = undefined;
      this._describe.internalValue = undefined;
      this._description = undefined;
      this._error.internalValue = undefined;
      this._events.internalValue = undefined;
      this._get.internalValue = undefined;
      this._patch.internalValue = undefined;
      this._podLogs.internalValue = undefined;
      this._proxy.internalValue = undefined;
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
      this._command.internalValue = value.command;
      this._compiler = value.compiler;
      this._continueOnError = value.continueOnError;
      this._create.internalValue = value.create;
      this._delete.internalValue = value.delete;
      this._describe.internalValue = value.describe;
      this._description = value.description;
      this._error.internalValue = value.error;
      this._events.internalValue = value.events;
      this._get.internalValue = value.get;
      this._patch.internalValue = value.patch;
      this._podLogs.internalValue = value.podLogs;
      this._proxy.internalValue = value.proxy;
      this._script.internalValue = value.script;
      this._sleep.internalValue = value.sleep;
      this._update.internalValue = value.update;
      this._wait.internalValue = value.wait;
    }
  }

  // apply - computed: false, optional: true, required: false
  private _apply = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryApplyOutputReference(this, "apply");
  public get apply() {
    return this._apply;
  }
  public putApply(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryApply) {
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
  private _assert = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryAssertOutputReference(this, "assert");
  public get assert() {
    return this._assert;
  }
  public putAssert(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryAssert) {
    this._assert.internalValue = value;
  }
  public resetAssert() {
    this._assert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertInput() {
    return this._assert.internalValue;
  }

  // command - computed: false, optional: true, required: false
  private _command = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCommandOutputReference(this, "command");
  public get command() {
    return this._command;
  }
  public putCommand(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCommand) {
    this._command.internalValue = value;
  }
  public resetCommand() {
    this._command.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command.internalValue;
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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
  private _create = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCreateOutputReference(this, "create");
  public get create() {
    return this._create;
  }
  public putCreate(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryCreate) {
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
  private _delete = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDeleteOutputReference(this, "delete");
  public get delete() {
    return this._delete;
  }
  public putDelete(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDelete) {
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
  private _describe = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribeOutputReference(this, "describe");
  public get describe() {
    return this._describe;
  }
  public putDescribe(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryDescribe) {
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
  private _error = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryError) {
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
  private _events = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEventsOutputReference(this, "events");
  public get events() {
    return this._events;
  }
  public putEvents(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryEvents) {
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
  private _get = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGetOutputReference(this, "get");
  public get get() {
    return this._get;
  }
  public putGet(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryGet) {
    this._get.internalValue = value;
  }
  public resetGet() {
    this._get.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get getInput() {
    return this._get.internalValue;
  }

  // patch - computed: false, optional: true, required: false
  private _patch = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatchOutputReference(this, "patch");
  public get patch() {
    return this._patch;
  }
  public putPatch(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPatch) {
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
  private _podLogs = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogsOutputReference(this, "pod_logs");
  public get podLogs() {
    return this._podLogs;
  }
  public putPodLogs(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryPodLogs) {
    this._podLogs.internalValue = value;
  }
  public resetPodLogs() {
    this._podLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podLogsInput() {
    return this._podLogs.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // script - computed: false, optional: true, required: false
  private _script = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScriptOutputReference(this, "script");
  public get script() {
    return this._script;
  }
  public putScript(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryScript) {
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
  private _sleep = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTrySleepOutputReference(this, "sleep");
  public get sleep() {
    return this._sleep;
  }
  public putSleep(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTrySleep) {
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
  private _update = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdateOutputReference(this, "update");
  public get update() {
    return this._update;
  }
  public putUpdate(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryUpdate) {
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
  private _wait = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWaitOutputReference(this, "wait");
  public get wait() {
    return this._wait;
  }
  public putWait(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryWait) {
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTry[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindings {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#value DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindingsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindingsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
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
      this._compiler = value.compiler;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindingsOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWith {
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#bindings DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindings[] | cdktf.IResolvable;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindingsToTerraform, false)(struct!.bindings),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWith | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindings = this._bindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWith | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindings.internalValue = value.bindings;
    }
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithBindings[] | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUse {
  /**
  * Template references a step template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#template DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#template}
  */
  readonly template: string;
  /**
  * With defines arguments passed to the step template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#with DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#with}
  */
  readonly with?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWith;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
    with: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithToTerraform(struct!.with),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    with: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithToHclTerraform(struct!.with),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWith",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._with?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.with = this._with?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
      this._with.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
      this._with.internalValue = value.with;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // with - computed: false, optional: true, required: false
  private _with = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWithOutputReference(this, "with");
  public get with() {
    return this._with;
  }
  public putWith(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseWith) {
    this._with.internalValue = value;
  }
  public resetWith() {
    this._with.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withInput() {
    return this._with.internalValue;
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecSteps {
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#bindings DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsBindings[] | cdktf.IResolvable;
  /**
  * Catch defines what the step will execute when an error happens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#catch DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#catch}
  */
  readonly catch?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCatch[] | cdktf.IResolvable;
  /**
  * Cleanup defines what will be executed after the test is terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cleanup DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cleanup}
  */
  readonly cleanup?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCleanup[] | cdktf.IResolvable;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsClusters;
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * DeletionPropagationPolicy decides if a deletion will propagate to the dependents of the object, and how the garbage collector will handle the propagation. Overrides the deletion propagation policy set in both the Configuration and the Test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#deletion_propagation_policy DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#deletion_propagation_policy}
  */
  readonly deletionPropagationPolicy?: string;
  /**
  * Description contains a description of the test step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#description DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Finally defines what the step will execute after the step is terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#finally DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#finally}
  */
  readonly finally?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsFinally[] | cdktf.IResolvable;
  /**
  * Name of the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#name DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * SkipDelete determines whether the resources created by the step should be deleted after the test step is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#skip_delete DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#skip_delete}
  */
  readonly skipDelete?: boolean | cdktf.IResolvable;
  /**
  * Template determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#template DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Timeouts for the test step. Overrides the global timeouts set in the Configuration and the timeouts eventually set in the Test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#timeouts DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#timeouts}
  */
  readonly timeouts?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTimeouts;
  /**
  * Try defines what the step will try to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#try DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#try}
  */
  readonly try?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTry[] | cdktf.IResolvable;
  /**
  * Use defines a reference to a step template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#use DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#use}
  */
  readonly use?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUse;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsBindingsToTerraform, false)(struct!.bindings),
    catch: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCatchToTerraform, false)(struct!.catch),
    cleanup: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCleanupToTerraform, false)(struct!.cleanup),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsClustersToTerraform(struct!.clusters),
    compiler: cdktf.stringToTerraform(struct!.compiler),
    deletion_propagation_policy: cdktf.stringToTerraform(struct!.deletionPropagationPolicy),
    description: cdktf.stringToTerraform(struct!.description),
    finally: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsFinallyToTerraform, false)(struct!.finally),
    name: cdktf.stringToTerraform(struct!.name),
    skip_delete: cdktf.booleanToTerraform(struct!.skipDelete),
    template: cdktf.booleanToTerraform(struct!.template),
    timeouts: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTimeoutsToTerraform(struct!.timeouts),
    try: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryToTerraform, false)(struct!.try),
    use: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseToTerraform(struct!.use),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsBindingsList",
    },
    catch: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCatchToHclTerraform, false)(struct!.catch),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCatchList",
    },
    cleanup: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCleanupToHclTerraform, false)(struct!.cleanup),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCleanupList",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsClusters",
    },
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsFinallyToHclTerraform, false)(struct!.finally),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsFinallyList",
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
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTimeoutsToHclTerraform(struct!.timeouts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTimeouts",
    },
    try: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryToHclTerraform, false)(struct!.try),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryList",
    },
    use: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseToHclTerraform(struct!.use),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecSteps | cdktf.IResolvable | undefined {
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
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
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
    if (this._use?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.use = this._use?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindings.internalValue = undefined;
      this._catch.internalValue = undefined;
      this._cleanup.internalValue = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._compiler = undefined;
      this._deletionPropagationPolicy = undefined;
      this._description = undefined;
      this._finally.internalValue = undefined;
      this._name = undefined;
      this._skipDelete = undefined;
      this._template = undefined;
      this._timeouts.internalValue = undefined;
      this._try.internalValue = undefined;
      this._use.internalValue = undefined;
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
      this._compiler = value.compiler;
      this._deletionPropagationPolicy = value.deletionPropagationPolicy;
      this._description = value.description;
      this._finally.internalValue = value.finally;
      this._name = value.name;
      this._skipDelete = value.skipDelete;
      this._template = value.template;
      this._timeouts.internalValue = value.timeouts;
      this._try.internalValue = value.try;
      this._use.internalValue = value.use;
    }
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsBindings[] | cdktf.IResolvable) {
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
  private _catch = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCatchList(this, "catch", false);
  public get catch() {
    return this._catch;
  }
  public putCatch(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCatch[] | cdktf.IResolvable) {
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
  private _cleanup = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCleanupList(this, "cleanup", false);
  public get cleanup() {
    return this._cleanup;
  }
  public putCleanup(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsCleanup[] | cdktf.IResolvable) {
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
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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
  private _finally = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsFinallyList(this, "finally", false);
  public get finally() {
    return this._finally;
  }
  public putFinally(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsFinally[] | cdktf.IResolvable) {
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
  private _timeouts = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // try - computed: false, optional: true, required: false
  private _try = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTryList(this, "try", false);
  public get try() {
    return this._try;
  }
  public putTry(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsTry[] | cdktf.IResolvable) {
    this._try.internalValue = value;
  }
  public resetTry() {
    this._try.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tryInput() {
    return this._try.internalValue;
  }

  // use - computed: false, optional: true, required: false
  private _use = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUseOutputReference(this, "use");
  public get use() {
    return this._use;
  }
  public putUse(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsUse) {
    this._use.internalValue = value;
  }
  public resetUse() {
    this._use.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use.internalValue;
  }
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecSteps[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsOutputReference {
    return new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecTimeouts {
  /**
  * Apply defines the timeout for the apply operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#apply DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#apply}
  */
  readonly apply?: string;
  /**
  * Assert defines the timeout for the assert operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#assert DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#assert}
  */
  readonly assert?: string;
  /**
  * Cleanup defines the timeout for the cleanup operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cleanup DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cleanup}
  */
  readonly cleanup?: string;
  /**
  * Delete defines the timeout for the delete operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#delete DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#delete}
  */
  readonly delete?: string;
  /**
  * Error defines the timeout for the error operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#error DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#error}
  */
  readonly error?: string;
  /**
  * Exec defines the timeout for exec operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#exec DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#exec}
  */
  readonly exec?: string;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecTimeoutsToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecTimeouts | cdktf.IResolvable): any {
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


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecTimeoutsToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecTimeouts | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecTimeouts | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpec {
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#bindings DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecBindings[] | cdktf.IResolvable;
  /**
  * Catch defines what the steps will execute when an error happens. This will be combined with catch handlers defined at the step level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#catch DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#catch}
  */
  readonly catch?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecCatch[] | cdktf.IResolvable;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecClusters;
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Concurrent determines whether the test should run concurrently with other tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#concurrent DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#concurrent}
  */
  readonly concurrent?: boolean | cdktf.IResolvable;
  /**
  * DelayBeforeCleanup adds a delay between the time a test ends and the time cleanup starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#delay_before_cleanup DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#delay_before_cleanup}
  */
  readonly delayBeforeCleanup?: string;
  /**
  * DeletionPropagationPolicy decides if a deletion will propagate to the dependents of the object, and how the garbage collector will handle the propagation. Overrides the deletion propagation policy set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#deletion_propagation_policy DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#deletion_propagation_policy}
  */
  readonly deletionPropagationPolicy?: string;
  /**
  * Description contains a description of the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#description DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * FailFast determines whether the test should stop upon encountering the first failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#fail_fast DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#fail_fast}
  */
  readonly failFast?: boolean | cdktf.IResolvable;
  /**
  * ForceTerminationGracePeriod forces the termination grace period on pods, statefulsets, daemonsets and deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#force_termination_grace_period DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#force_termination_grace_period}
  */
  readonly forceTerminationGracePeriod?: string;
  /**
  * Namespace determines whether the test should run in a random ephemeral namespace or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * NamespaceTemplate defines a template to create the test namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#namespace_template DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#namespace_template}
  */
  readonly namespaceTemplate?: { [key: string]: string };
  /**
  * NamespaceTemplateCompiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#namespace_template_compiler DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#namespace_template_compiler}
  */
  readonly namespaceTemplateCompiler?: string;
  /**
  * Scenarios defines test scenarios.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#scenarios DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#scenarios}
  */
  readonly scenarios?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecScenarios[] | cdktf.IResolvable;
  /**
  * Skip determines whether the test should skipped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#skip DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#skip}
  */
  readonly skip?: boolean | cdktf.IResolvable;
  /**
  * SkipDelete determines whether the resources created by the test should be deleted after the test is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#skip_delete DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#skip_delete}
  */
  readonly skipDelete?: boolean | cdktf.IResolvable;
  /**
  * Steps defining the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#steps DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#steps}
  */
  readonly steps: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecSteps[] | cdktf.IResolvable;
  /**
  * Template determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#template DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Timeouts for the test. Overrides the global timeouts set in the Configuration on a per operation basis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/chainsaw_kyverno_io_test_v1alpha1_manifest#timeouts DataK8SChainsawKyvernoIoTestV1Alpha1Manifest#timeouts}
  */
  readonly timeouts?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecTimeouts;
}

export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecToTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecBindingsToTerraform, false)(struct!.bindings),
    catch: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecCatchToTerraform, false)(struct!.catch),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecClustersToTerraform(struct!.clusters),
    compiler: cdktf.stringToTerraform(struct!.compiler),
    concurrent: cdktf.booleanToTerraform(struct!.concurrent),
    delay_before_cleanup: cdktf.stringToTerraform(struct!.delayBeforeCleanup),
    deletion_propagation_policy: cdktf.stringToTerraform(struct!.deletionPropagationPolicy),
    description: cdktf.stringToTerraform(struct!.description),
    fail_fast: cdktf.booleanToTerraform(struct!.failFast),
    force_termination_grace_period: cdktf.stringToTerraform(struct!.forceTerminationGracePeriod),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    namespace_template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.namespaceTemplate),
    namespace_template_compiler: cdktf.stringToTerraform(struct!.namespaceTemplateCompiler),
    scenarios: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecScenariosToTerraform, false)(struct!.scenarios),
    skip: cdktf.booleanToTerraform(struct!.skip),
    skip_delete: cdktf.booleanToTerraform(struct!.skipDelete),
    steps: cdktf.listMapper(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsToTerraform, false)(struct!.steps),
    template: cdktf.booleanToTerraform(struct!.template),
    timeouts: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecTimeoutsToTerraform(struct!.timeouts),
  }
}


export function dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecBindingsList",
    },
    catch: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecCatchToHclTerraform, false)(struct!.catch),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecCatchList",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecClusters",
    },
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    concurrent: {
      value: cdktf.booleanToHclTerraform(struct!.concurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delay_before_cleanup: {
      value: cdktf.stringToHclTerraform(struct!.delayBeforeCleanup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    fail_fast: {
      value: cdktf.booleanToHclTerraform(struct!.failFast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_termination_grace_period: {
      value: cdktf.stringToHclTerraform(struct!.forceTerminationGracePeriod),
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
    namespace_template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.namespaceTemplate),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace_template_compiler: {
      value: cdktf.stringToHclTerraform(struct!.namespaceTemplateCompiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scenarios: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecScenariosToHclTerraform, false)(struct!.scenarios),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecScenariosList",
    },
    skip: {
      value: cdktf.booleanToHclTerraform(struct!.skip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_delete: {
      value: cdktf.booleanToHclTerraform(struct!.skipDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    steps: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsToHclTerraform, false)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsList",
    },
    template: {
      value: cdktf.booleanToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeouts: {
      value: dataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecTimeoutsToHclTerraform(struct!.timeouts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecTimeouts",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
    if (this._concurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrent = this._concurrent;
    }
    if (this._delayBeforeCleanup !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayBeforeCleanup = this._delayBeforeCleanup;
    }
    if (this._deletionPropagationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionPropagationPolicy = this._deletionPropagationPolicy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._failFast !== undefined) {
      hasAnyValues = true;
      internalValueResult.failFast = this._failFast;
    }
    if (this._forceTerminationGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTerminationGracePeriod = this._forceTerminationGracePeriod;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._namespaceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplate = this._namespaceTemplate;
    }
    if (this._namespaceTemplateCompiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplateCompiler = this._namespaceTemplateCompiler;
    }
    if (this._scenarios?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scenarios = this._scenarios?.internalValue;
    }
    if (this._skip !== undefined) {
      hasAnyValues = true;
      internalValueResult.skip = this._skip;
    }
    if (this._skipDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDelete = this._skipDelete;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._timeouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindings.internalValue = undefined;
      this._catch.internalValue = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._compiler = undefined;
      this._concurrent = undefined;
      this._delayBeforeCleanup = undefined;
      this._deletionPropagationPolicy = undefined;
      this._description = undefined;
      this._failFast = undefined;
      this._forceTerminationGracePeriod = undefined;
      this._namespace = undefined;
      this._namespaceTemplate = undefined;
      this._namespaceTemplateCompiler = undefined;
      this._scenarios.internalValue = undefined;
      this._skip = undefined;
      this._skipDelete = undefined;
      this._steps.internalValue = undefined;
      this._template = undefined;
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
      this._catch.internalValue = value.catch;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._compiler = value.compiler;
      this._concurrent = value.concurrent;
      this._delayBeforeCleanup = value.delayBeforeCleanup;
      this._deletionPropagationPolicy = value.deletionPropagationPolicy;
      this._description = value.description;
      this._failFast = value.failFast;
      this._forceTerminationGracePeriod = value.forceTerminationGracePeriod;
      this._namespace = value.namespace;
      this._namespaceTemplate = value.namespaceTemplate;
      this._namespaceTemplateCompiler = value.namespaceTemplateCompiler;
      this._scenarios.internalValue = value.scenarios;
      this._skip = value.skip;
      this._skipDelete = value.skipDelete;
      this._steps.internalValue = value.steps;
      this._template = value.template;
      this._timeouts.internalValue = value.timeouts;
    }
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecBindings[] | cdktf.IResolvable) {
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
  private _catch = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecCatchList(this, "catch", false);
  public get catch() {
    return this._catch;
  }
  public putCatch(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecCatch[] | cdktf.IResolvable) {
    this._catch.internalValue = value;
  }
  public resetCatch() {
    this._catch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catchInput() {
    return this._catch.internalValue;
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
  private _clusters = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
  }

  // concurrent - computed: false, optional: true, required: false
  private _concurrent?: boolean | cdktf.IResolvable; 
  public get concurrent() {
    return this.getBooleanAttribute('concurrent');
  }
  public set concurrent(value: boolean | cdktf.IResolvable) {
    this._concurrent = value;
  }
  public resetConcurrent() {
    this._concurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentInput() {
    return this._concurrent;
  }

  // delay_before_cleanup - computed: false, optional: true, required: false
  private _delayBeforeCleanup?: string; 
  public get delayBeforeCleanup() {
    return this.getStringAttribute('delay_before_cleanup');
  }
  public set delayBeforeCleanup(value: string) {
    this._delayBeforeCleanup = value;
  }
  public resetDelayBeforeCleanup() {
    this._delayBeforeCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayBeforeCleanupInput() {
    return this._delayBeforeCleanup;
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

  // fail_fast - computed: false, optional: true, required: false
  private _failFast?: boolean | cdktf.IResolvable; 
  public get failFast() {
    return this.getBooleanAttribute('fail_fast');
  }
  public set failFast(value: boolean | cdktf.IResolvable) {
    this._failFast = value;
  }
  public resetFailFast() {
    this._failFast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failFastInput() {
    return this._failFast;
  }

  // force_termination_grace_period - computed: false, optional: true, required: false
  private _forceTerminationGracePeriod?: string; 
  public get forceTerminationGracePeriod() {
    return this.getStringAttribute('force_termination_grace_period');
  }
  public set forceTerminationGracePeriod(value: string) {
    this._forceTerminationGracePeriod = value;
  }
  public resetForceTerminationGracePeriod() {
    this._forceTerminationGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTerminationGracePeriodInput() {
    return this._forceTerminationGracePeriod;
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

  // namespace_template - computed: false, optional: true, required: false
  private _namespaceTemplate?: { [key: string]: string }; 
  public get namespaceTemplate() {
    return this.getStringMapAttribute('namespace_template');
  }
  public set namespaceTemplate(value: { [key: string]: string }) {
    this._namespaceTemplate = value;
  }
  public resetNamespaceTemplate() {
    this._namespaceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplateInput() {
    return this._namespaceTemplate;
  }

  // namespace_template_compiler - computed: false, optional: true, required: false
  private _namespaceTemplateCompiler?: string; 
  public get namespaceTemplateCompiler() {
    return this.getStringAttribute('namespace_template_compiler');
  }
  public set namespaceTemplateCompiler(value: string) {
    this._namespaceTemplateCompiler = value;
  }
  public resetNamespaceTemplateCompiler() {
    this._namespaceTemplateCompiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplateCompilerInput() {
    return this._namespaceTemplateCompiler;
  }

  // scenarios - computed: false, optional: true, required: false
  private _scenarios = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecScenariosList(this, "scenarios", false);
  public get scenarios() {
    return this._scenarios;
  }
  public putScenarios(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecScenarios[] | cdktf.IResolvable) {
    this._scenarios.internalValue = value;
  }
  public resetScenarios() {
    this._scenarios.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scenariosInput() {
    return this._scenarios.internalValue;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: boolean | cdktf.IResolvable; 
  public get skip() {
    return this.getBooleanAttribute('skip');
  }
  public set skip(value: boolean | cdktf.IResolvable) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
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

  // steps - computed: false, optional: false, required: true
  private _steps = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
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
  private _timeouts = new DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataK8SChainsawKyvernoIoTestV1Alpha1ManifestSpecTimeouts) {
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
