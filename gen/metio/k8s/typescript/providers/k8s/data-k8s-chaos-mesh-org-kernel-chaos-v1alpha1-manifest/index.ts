// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#metadata DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestMetadata;
  /**
  * Spec defines the behavior of a kernel chaos experiment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#spec DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpec;
}
export interface DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#annotations DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#labels DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#name DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#namespace DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchain {
  /**
  * Funcname can be find from kernel source or '/proc/kallsyms', such as 'ext4_mount'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#funcname DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#funcname}
  */
  readonly funcname?: string;
  /**
  * Parameters is used with predicate, for example, if you want to inject slab error in 'd_alloc_parallel(struct dentry *parent, const struct qstr *name)' with a special name 'bananas', you need to set it to 'struct dentry *parent, const struct qstr *name' otherwise omit it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#parameters DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#parameters}
  */
  readonly parameters?: string;
  /**
  * Predicate will access the arguments of this Frame, example with Parameters's, you can set it to 'STRNCMP(name->name, 'bananas', 8)' to make inject only with it, or omit it to inject for all d_alloc_parallel call chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#predicate DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#predicate}
  */
  readonly predicate?: string;
}

export function dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchainToTerraform(struct?: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    funcname: cdktf.stringToTerraform(struct!.funcname),
    parameters: cdktf.stringToTerraform(struct!.parameters),
    predicate: cdktf.stringToTerraform(struct!.predicate),
  }
}


export function dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchainToHclTerraform(struct?: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    funcname: {
      value: cdktf.stringToHclTerraform(struct!.funcname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predicate: {
      value: cdktf.stringToHclTerraform(struct!.predicate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._funcname !== undefined) {
      hasAnyValues = true;
      internalValueResult.funcname = this._funcname;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._predicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._funcname = undefined;
      this._parameters = undefined;
      this._predicate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._funcname = value.funcname;
      this._parameters = value.parameters;
      this._predicate = value.predicate;
    }
  }

  // funcname - computed: false, optional: true, required: false
  private _funcname?: string; 
  public get funcname() {
    return this.getStringAttribute('funcname');
  }
  public set funcname(value: string) {
    this._funcname = value;
  }
  public resetFuncname() {
    this._funcname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcnameInput() {
    return this._funcname;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // predicate - computed: false, optional: true, required: false
  private _predicate?: string; 
  public get predicate() {
    return this.getStringAttribute('predicate');
  }
  public set predicate(value: string) {
    this._predicate = value;
  }
  public resetPredicate() {
    this._predicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate;
  }
}

export class DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchainList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchain[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchainOutputReference {
    return new DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequest {
  /**
  * Callchain indicate a special call chain, such as: ext4_mount -> mount_subtree -> ... -> should_failslab With an optional set of predicates and an optional set of parameters, which used with predicates. You can read call chan and predicate examples from https://github.com/chaos-mesh/bpfki/tree/develop/examples to learn more. If no special call chain, just keep Callchain empty, which means it will fail at any call chain with slab alloc (eg: kmalloc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#callchain DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#callchain}
  */
  readonly callchain?: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchain[] | cdktf.IResolvable;
  /**
  * FailType indicates what to fail, can be set to '0' / '1' / '2' If '0', indicates slab to fail (should_failslab) If '1', indicates alloc_page to fail (should_fail_alloc_page) If '2', indicates bio to fail (should_fail_bio) You can read: 1. https://www.kernel.org/doc/html/latest/fault-injection/fault-injection.html 2. http://github.com/iovisor/bcc/blob/master/tools/inject_example.txt to learn more
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#failtype DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#failtype}
  */
  readonly failtype: number;
  /**
  * Headers indicates the appropriate kernel headers you need. Eg: 'linux/mmzone.h', 'linux/blkdev.h' and so on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#headers DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * Probability indicates the fails with probability. If you want 1%, please set this field with 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#probability DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#probability}
  */
  readonly probability?: number;
  /**
  * Times indicates the max times of fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#times DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#times}
  */
  readonly times?: number;
}

export function dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestToTerraform(struct?: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    callchain: cdktf.listMapper(dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchainToTerraform, false)(struct!.callchain),
    failtype: cdktf.numberToTerraform(struct!.failtype),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    probability: cdktf.numberToTerraform(struct!.probability),
    times: cdktf.numberToTerraform(struct!.times),
  }
}


export function dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestToHclTerraform(struct?: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    callchain: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchainToHclTerraform, false)(struct!.callchain),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchainList",
    },
    failtype: {
      value: cdktf.numberToHclTerraform(struct!.failtype),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    probability: {
      value: cdktf.numberToHclTerraform(struct!.probability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    times: {
      value: cdktf.numberToHclTerraform(struct!.times),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callchain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callchain = this._callchain?.internalValue;
    }
    if (this._failtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.failtype = this._failtype;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._probability !== undefined) {
      hasAnyValues = true;
      internalValueResult.probability = this._probability;
    }
    if (this._times !== undefined) {
      hasAnyValues = true;
      internalValueResult.times = this._times;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._callchain.internalValue = undefined;
      this._failtype = undefined;
      this._headers = undefined;
      this._probability = undefined;
      this._times = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._callchain.internalValue = value.callchain;
      this._failtype = value.failtype;
      this._headers = value.headers;
      this._probability = value.probability;
      this._times = value.times;
    }
  }

  // callchain - computed: false, optional: true, required: false
  private _callchain = new DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchainList(this, "callchain", false);
  public get callchain() {
    return this._callchain;
  }
  public putCallchain(value: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestCallchain[] | cdktf.IResolvable) {
    this._callchain.internalValue = value;
  }
  public resetCallchain() {
    this._callchain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callchainInput() {
    return this._callchain.internalValue;
  }

  // failtype - computed: false, optional: false, required: true
  private _failtype?: number; 
  public get failtype() {
    return this.getNumberAttribute('failtype');
  }
  public set failtype(value: number) {
    this._failtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failtypeInput() {
    return this._failtype;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // probability - computed: false, optional: true, required: false
  private _probability?: number; 
  public get probability() {
    return this.getNumberAttribute('probability');
  }
  public set probability(value: number) {
    this._probability = value;
  }
  public resetProbability() {
    this._probability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probabilityInput() {
    return this._probability;
  }

  // times - computed: false, optional: true, required: false
  private _times?: number; 
  public get times() {
    return this.getNumberAttribute('times');
  }
  public set times(value: number) {
    this._times = value;
  }
  public resetTimes() {
    this._times = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times;
  }
}
export interface DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectors {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#key DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#operator DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#values DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToTerraform(struct?: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToHclTerraform(struct?: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable | undefined) {
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

export class DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsOutputReference {
    return new DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelector {
  /**
  * Map of string keys and values that can be used to select objects. A selector based on annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#annotation_selectors DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#annotation_selectors}
  */
  readonly annotationSelectors?: { [key: string]: string };
  /**
  * a slice of label selector expressions that can be used to select objects. A list of selectors based on set-based label expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#expression_selectors DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#expression_selectors}
  */
  readonly expressionSelectors?: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectors[] | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to select objects. A selector based on fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#field_selectors DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#field_selectors}
  */
  readonly fieldSelectors?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to select objects. A selector based on labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#label_selectors DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#label_selectors}
  */
  readonly labelSelectors?: { [key: string]: string };
  /**
  * Namespaces is a set of namespace to which objects belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#namespaces DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Map of string keys and values that can be used to select nodes. Selector which must match a node's labels, and objects must belong to these selected nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#node_selectors DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#node_selectors}
  */
  readonly nodeSelectors?: { [key: string]: string };
  /**
  * Nodes is a set of node name and objects must belong to these nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#nodes DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#nodes}
  */
  readonly nodes?: string[];
  /**
  * PodPhaseSelectors is a set of condition of a pod at the current time. supported value: Pending / Running / Succeeded / Failed / Unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#pod_phase_selectors DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#pod_phase_selectors}
  */
  readonly podPhaseSelectors?: string[];
  /**
  * Pods is a map of string keys and a set values that used to select pods. The key defines the namespace which pods belong, and the each values is a set of pod names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#pods DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#pods}
  */
  readonly pods?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorToTerraform(struct?: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotationSelectors),
    expression_selectors: cdktf.listMapper(dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToTerraform, false)(struct!.expressionSelectors),
    field_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fieldSelectors),
    label_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labelSelectors),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    node_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelectors),
    nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodes),
    pod_phase_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podPhaseSelectors),
    pods: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.pods),
  }
}


export function dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorToHclTerraform(struct?: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotationSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    expression_selectors: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToHclTerraform, false)(struct!.expressionSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsList",
    },
    field_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fieldSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    label_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labelSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pod_phase_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podPhaseSelectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pods: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.pods),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelectors = this._annotationSelectors;
    }
    if (this._expressionSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionSelectors = this._expressionSelectors?.internalValue;
    }
    if (this._fieldSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelectors = this._fieldSelectors;
    }
    if (this._labelSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelectors = this._labelSelectors;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._nodeSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectors = this._nodeSelectors;
    }
    if (this._nodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes;
    }
    if (this._podPhaseSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPhaseSelectors = this._podPhaseSelectors;
    }
    if (this._pods !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelectors = undefined;
      this._expressionSelectors.internalValue = undefined;
      this._fieldSelectors = undefined;
      this._labelSelectors = undefined;
      this._namespaces = undefined;
      this._nodeSelectors = undefined;
      this._nodes = undefined;
      this._podPhaseSelectors = undefined;
      this._pods = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationSelectors = value.annotationSelectors;
      this._expressionSelectors.internalValue = value.expressionSelectors;
      this._fieldSelectors = value.fieldSelectors;
      this._labelSelectors = value.labelSelectors;
      this._namespaces = value.namespaces;
      this._nodeSelectors = value.nodeSelectors;
      this._nodes = value.nodes;
      this._podPhaseSelectors = value.podPhaseSelectors;
      this._pods = value.pods;
    }
  }

  // annotation_selectors - computed: false, optional: true, required: false
  private _annotationSelectors?: { [key: string]: string }; 
  public get annotationSelectors() {
    return this.getStringMapAttribute('annotation_selectors');
  }
  public set annotationSelectors(value: { [key: string]: string }) {
    this._annotationSelectors = value;
  }
  public resetAnnotationSelectors() {
    this._annotationSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorsInput() {
    return this._annotationSelectors;
  }

  // expression_selectors - computed: false, optional: true, required: false
  private _expressionSelectors = new DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsList(this, "expression_selectors", false);
  public get expressionSelectors() {
    return this._expressionSelectors;
  }
  public putExpressionSelectors(value: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorExpressionSelectors[] | cdktf.IResolvable) {
    this._expressionSelectors.internalValue = value;
  }
  public resetExpressionSelectors() {
    this._expressionSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionSelectorsInput() {
    return this._expressionSelectors.internalValue;
  }

  // field_selectors - computed: false, optional: true, required: false
  private _fieldSelectors?: { [key: string]: string }; 
  public get fieldSelectors() {
    return this.getStringMapAttribute('field_selectors');
  }
  public set fieldSelectors(value: { [key: string]: string }) {
    this._fieldSelectors = value;
  }
  public resetFieldSelectors() {
    this._fieldSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorsInput() {
    return this._fieldSelectors;
  }

  // label_selectors - computed: false, optional: true, required: false
  private _labelSelectors?: { [key: string]: string }; 
  public get labelSelectors() {
    return this.getStringMapAttribute('label_selectors');
  }
  public set labelSelectors(value: { [key: string]: string }) {
    this._labelSelectors = value;
  }
  public resetLabelSelectors() {
    this._labelSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorsInput() {
    return this._labelSelectors;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // node_selectors - computed: false, optional: true, required: false
  private _nodeSelectors?: { [key: string]: string }; 
  public get nodeSelectors() {
    return this.getStringMapAttribute('node_selectors');
  }
  public set nodeSelectors(value: { [key: string]: string }) {
    this._nodeSelectors = value;
  }
  public resetNodeSelectors() {
    this._nodeSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorsInput() {
    return this._nodeSelectors;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes?: string[]; 
  public get nodes() {
    return this.getListAttribute('nodes');
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // pod_phase_selectors - computed: false, optional: true, required: false
  private _podPhaseSelectors?: string[]; 
  public get podPhaseSelectors() {
    return this.getListAttribute('pod_phase_selectors');
  }
  public set podPhaseSelectors(value: string[]) {
    this._podPhaseSelectors = value;
  }
  public resetPodPhaseSelectors() {
    this._podPhaseSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPhaseSelectorsInput() {
    return this._podPhaseSelectors;
  }

  // pods - computed: false, optional: true, required: false
  private _pods?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get pods() {
    return this.interpolationForAttribute('pods');
  }
  public set pods(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._pods = value;
  }
  public resetPods() {
    this._pods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods;
  }
}
export interface DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpec {
  /**
  * ContainerNames indicates list of the name of affected container. If not set, the first container will be injected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#container_names DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#container_names}
  */
  readonly containerNames?: string[];
  /**
  * Duration represents the duration of the chaos action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#duration DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * FailKernRequest defines the request of kernel injection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#fail_kern_request DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#fail_kern_request}
  */
  readonly failKernRequest: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequest;
  /**
  * Mode defines the mode to run chaos action. Supported mode: one / all / fixed / fixed-percent / random-max-percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#mode DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#mode}
  */
  readonly mode: string;
  /**
  * RemoteCluster represents the remote cluster where the chaos will be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#remote_cluster DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#remote_cluster}
  */
  readonly remoteCluster?: string;
  /**
  * Selector is used to select pods that are used to inject chaos action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#selector DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#selector}
  */
  readonly selector: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelector;
  /**
  * Value is required when the mode is set to 'FixedMode' / 'FixedPercentMode' / 'RandomMaxPercentMode'. If 'FixedMode', provide an integer of pods to do chaos action. If 'FixedPercentMode', provide a number from 0-100 to specify the percent of pods the server can do chaos action. IF 'RandomMaxPercentMode', provide a number from 0-100 to specify the max percent of pods to do chaos action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#value DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecToTerraform(struct?: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerNames),
    duration: cdktf.stringToTerraform(struct!.duration),
    fail_kern_request: dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestToTerraform(struct!.failKernRequest),
    mode: cdktf.stringToTerraform(struct!.mode),
    remote_cluster: cdktf.stringToTerraform(struct!.remoteCluster),
    selector: dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorToTerraform(struct!.selector),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_kern_request: {
      value: dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestToHclTerraform(struct!.failKernRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequest",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_cluster: {
      value: cdktf.stringToHclTerraform(struct!.remoteCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelector",
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

export class DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerNames = this._containerNames;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._failKernRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failKernRequest = this._failKernRequest?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._remoteCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteCluster = this._remoteCluster;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerNames = undefined;
      this._duration = undefined;
      this._failKernRequest.internalValue = undefined;
      this._mode = undefined;
      this._remoteCluster = undefined;
      this._selector.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerNames = value.containerNames;
      this._duration = value.duration;
      this._failKernRequest.internalValue = value.failKernRequest;
      this._mode = value.mode;
      this._remoteCluster = value.remoteCluster;
      this._selector.internalValue = value.selector;
      this._value = value.value;
    }
  }

  // container_names - computed: false, optional: true, required: false
  private _containerNames?: string[]; 
  public get containerNames() {
    return this.getListAttribute('container_names');
  }
  public set containerNames(value: string[]) {
    this._containerNames = value;
  }
  public resetContainerNames() {
    this._containerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNamesInput() {
    return this._containerNames;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // fail_kern_request - computed: false, optional: false, required: true
  private _failKernRequest = new DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequestOutputReference(this, "fail_kern_request");
  public get failKernRequest() {
    return this._failKernRequest;
  }
  public putFailKernRequest(value: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecFailKernRequest) {
    this._failKernRequest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failKernRequestInput() {
    return this._failKernRequest.internalValue;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // remote_cluster - computed: false, optional: true, required: false
  private _remoteCluster?: string; 
  public get remoteCluster() {
    return this.getStringAttribute('remote_cluster');
  }
  public set remoteCluster(value: string) {
    this._remoteCluster = value;
  }
  public resetRemoteCluster() {
    this._remoteCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteClusterInput() {
    return this._remoteCluster;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest k8s_chaos_mesh_org_kernel_chaos_v1alpha1_manifest}
*/
export class DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_chaos_mesh_org_kernel_chaos_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChaosMeshOrgKernelChaosV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_chaos_mesh_org_kernel_chaos_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_kernel_chaos_v1alpha1_manifest k8s_chaos_mesh_org_kernel_chaos_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_chaos_mesh_org_kernel_chaos_v1alpha1_manifest',
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
  private _metadata = new DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgKernelChaosV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
