// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClaudieIoInputManifestV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#metadata DataK8SClaudieIoInputManifestV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SClaudieIoInputManifestV1Beta1ManifestMetadata;
  /**
  * Specification of the desired behaviour of the InputManifest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#spec DataK8SClaudieIoInputManifestV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpec;
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#annotations DataK8SClaudieIoInputManifestV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#labels DataK8SClaudieIoInputManifestV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#name DataK8SClaudieIoInputManifestV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#namespace DataK8SClaudieIoInputManifestV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestMetadataToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClaudieIoInputManifestV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClaudieIoInputManifestV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersPools {
  /**
  * List of nodepool names, that will represent compute nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#compute DataK8SClaudieIoInputManifestV1Beta1Manifest#compute}
  */
  readonly compute: string[];
  /**
  * List of nodepool names, that will represent control plane nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#control DataK8SClaudieIoInputManifestV1Beta1Manifest#control}
  */
  readonly control: string[];
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersPoolsToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.compute),
    control: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.control),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersPoolsToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.compute),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    control: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.control),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersPoolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compute !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute;
    }
    if (this._control !== undefined) {
      hasAnyValues = true;
      internalValueResult.control = this._control;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compute = undefined;
      this._control = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compute = value.compute;
      this._control = value.control;
    }
  }

  // compute - computed: false, optional: false, required: true
  private _compute?: string[]; 
  public get compute() {
    return this.getListAttribute('compute');
  }
  public set compute(value: string[]) {
    this._compute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute;
  }

  // control - computed: false, optional: false, required: true
  private _control?: string[]; 
  public get control() {
    return this.getListAttribute('control');
  }
  public set control(value: string[]) {
    this._control = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlInput() {
    return this._control;
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClusters {
  /**
  * Name of the Kubernetes cluster. Each cluster will have a random hash appended to the name, so the whole name will be of format <name>-<hash>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#name DataK8SClaudieIoInputManifestV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Network range for the VPN of the cluster. The value should be defined in format A.B.C.D/mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#network DataK8SClaudieIoInputManifestV1Beta1Manifest#network}
  */
  readonly network: string;
  /**
  * List of nodepool names this cluster will use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#pools DataK8SClaudieIoInputManifestV1Beta1Manifest#pools}
  */
  readonly pools: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersPools;
  /**
  * Version should be defined in format vX.Y. In terms of supported versions of Kubernetes, Claudie follows kubeone releases and their supported versions. The current kubeone version used in Claudie is 1.5. To see the list of supported versions, please refer to kubeone documentation. https://docs.kubermatic.com/kubeone/v1.8/architecture/compatibility/supported-versions/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#version DataK8SClaudieIoInputManifestV1Beta1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    pools: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersPoolsToTerraform(struct!.pools),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClusters | cdktf.IResolvable): any {
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
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pools: {
      value: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersPoolsToHclTerraform(struct!.pools),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersPools",
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

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._network = undefined;
      this._pools.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._network = value.network;
      this._pools.internalValue = value.pools;
      this._version = value.version;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // pools - computed: false, optional: false, required: true
  private _pools = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersPoolsOutputReference(this, "pools");
  public get pools() {
    return this._pools;
  }
  public putPools(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersPools) {
    this._pools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersOutputReference {
    return new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetes {
  /**
  * List of Kubernetes clusters Claudie will create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#clusters DataK8SClaudieIoInputManifestV1Beta1Manifest#clusters}
  */
  readonly clusters?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClusters[] | cdktf.IResolvable;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clusters: cdktf.listMapper(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersToTerraform, false)(struct!.clusters),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clusters: {
      value: cdktf.listMapperHcl(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersToHclTerraform, false)(struct!.clusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusters.internalValue = value.clusters;
    }
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersDns {
  /**
  * DNS zone inside of which the records will be created. GCP/AWS/OCI/Azure/Cloudflare/Hetzner DNS zone is accepted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#dns_zone DataK8SClaudieIoInputManifestV1Beta1Manifest#dns_zone}
  */
  readonly dnsZone: string;
  /**
  * Custom hostname for your A record. If left empty, the hostname will be a random hash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#hostname DataK8SClaudieIoInputManifestV1Beta1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Name of provider to be used for creating an A record entry in defined DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#provider DataK8SClaudieIoInputManifestV1Beta1Manifest#provider}
  */
  readonly provider: string;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersDnsToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_zone: cdktf.stringToTerraform(struct!.dnsZone),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersDnsToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_zone: {
      value: cdktf.stringToHclTerraform(struct!.dnsZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZone = this._dnsZone;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsZone = undefined;
      this._hostname = undefined;
      this._provider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsZone = value.dnsZone;
      this._hostname = value.hostname;
      this._provider = value.provider;
    }
  }

  // dns_zone - computed: false, optional: false, required: true
  private _dnsZone?: string; 
  public get dnsZone() {
    return this.getStringAttribute('dns_zone');
  }
  public set dnsZone(value: string) {
    this._dnsZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneInput() {
    return this._dnsZone;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClusters {
  /**
  * Specification of the loadbalancer's DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#dns DataK8SClaudieIoInputManifestV1Beta1Manifest#dns}
  */
  readonly dns?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersDns;
  /**
  * Name of the loadbalancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#name DataK8SClaudieIoInputManifestV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * List of nodepool names this loadbalancer will use. Remember, that nodepools defined in nodepools are only 'blueprints'. The actual nodepool will be created once referenced here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#pools DataK8SClaudieIoInputManifestV1Beta1Manifest#pools}
  */
  readonly pools: string[];
  /**
  * List of roles the loadbalancer uses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#roles DataK8SClaudieIoInputManifestV1Beta1Manifest#roles}
  */
  readonly roles: string[];
  /**
  * Name of the Kubernetes cluster targeted by this loadbalancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#targeted_k8s DataK8SClaudieIoInputManifestV1Beta1Manifest#targeted_k8s}
  */
  readonly targetedK8S: string;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersDnsToTerraform(struct!.dns),
    name: cdktf.stringToTerraform(struct!.name),
    pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pools),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    targeted_k8s: cdktf.stringToTerraform(struct!.targetedK8S),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersDns",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pools: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    targeted_k8s: {
      value: cdktf.stringToHclTerraform(struct!.targetedK8S),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pools !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._targetedK8S !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetedK8S = this._targetedK8S;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns.internalValue = undefined;
      this._name = undefined;
      this._pools = undefined;
      this._roles = undefined;
      this._targetedK8S = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns.internalValue = value.dns;
      this._name = value.name;
      this._pools = value.pools;
      this._roles = value.roles;
      this._targetedK8S = value.targetedK8S;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
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

  // pools - computed: false, optional: false, required: true
  private _pools?: string[]; 
  public get pools() {
    return this.getListAttribute('pools');
  }
  public set pools(value: string[]) {
    this._pools = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // targeted_k8s - computed: false, optional: false, required: true
  private _targetedK8S?: string; 
  public get targetedK8S() {
    return this.getStringAttribute('targeted_k8s');
  }
  public set targetedK8S(value: string) {
    this._targetedK8S = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetedK8SInput() {
    return this._targetedK8S;
  }
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersOutputReference {
    return new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRoles {
  /**
  * Name of the role. Used as a reference in clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#name DataK8SClaudieIoInputManifestV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Port of the incoming traffic on the loadbalancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#port DataK8SClaudieIoInputManifestV1Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * Protocol of the rule. Allowed values are: tcp, udp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#protocol DataK8SClaudieIoInputManifestV1Beta1Manifest#protocol}
  */
  readonly protocol: string;
  /**
  * Defines nodepools of the targeted K8s cluster, from which nodes will be used for loadbalancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#target_pools DataK8SClaudieIoInputManifestV1Beta1Manifest#target_pools}
  */
  readonly targetPools: string[];
  /**
  * Port where loadbalancer forwards the traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#target_port DataK8SClaudieIoInputManifestV1Beta1Manifest#target_port}
  */
  readonly targetPort: number;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRolesToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetPools),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRolesToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRoles | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_pools: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetPools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPools = this._targetPools;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._targetPools = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
      this._targetPools = value.targetPools;
      this._targetPort = value.targetPort;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // target_pools - computed: false, optional: false, required: true
  private _targetPools?: string[]; 
  public get targetPools() {
    return this.getListAttribute('target_pools');
  }
  public set targetPools(value: string[]) {
    this._targetPools = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPoolsInput() {
    return this._targetPools;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRolesOutputReference {
    return new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancers {
  /**
  * A list of load balancers clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#clusters DataK8SClaudieIoInputManifestV1Beta1Manifest#clusters}
  */
  readonly clusters?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClusters[] | cdktf.IResolvable;
  /**
  * List of roles loadbalancers use to forward the traffic. Single role can be used in multiple loadbalancer clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#roles DataK8SClaudieIoInputManifestV1Beta1Manifest#roles}
  */
  readonly roles?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRoles[] | cdktf.IResolvable;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clusters: cdktf.listMapper(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersToTerraform, false)(struct!.clusters),
    roles: cdktf.listMapper(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRolesToTerraform, false)(struct!.roles),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clusters: {
      value: cdktf.listMapperHcl(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersToHclTerraform, false)(struct!.clusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersList",
    },
    roles: {
      value: cdktf.listMapperHcl(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRolesToHclTerraform, false)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusters.internalValue = undefined;
      this._roles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusters.internalValue = value.clusters;
      this._roles.internalValue = value.roles;
    }
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicAutoscaler {
  /**
  * Maximum number of nodes in nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#max DataK8SClaudieIoInputManifestV1Beta1Manifest#max}
  */
  readonly max?: number;
  /**
  * Minimum number of nodes in nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#min DataK8SClaudieIoInputManifestV1Beta1Manifest#min}
  */
  readonly min?: number;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicAutoscalerToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicAutoscalerToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicAutoscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicAutoscaler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicAutoscaler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicMachineSpec {
  /**
  * CpuCount specifies the number of CPU cores to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#cpu_count DataK8SClaudieIoInputManifestV1Beta1Manifest#cpu_count}
  */
  readonly cpuCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#memory DataK8SClaudieIoInputManifestV1Beta1Manifest#memory}
  */
  readonly memory: number;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicMachineSpecToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicMachineSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    memory: cdktf.numberToTerraform(struct!.memory),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicMachineSpecToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicMachineSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicMachineSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicMachineSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicMachineSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuCount = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuCount = value.cpuCount;
      this._memory = value.memory;
    }
  }

  // cpu_count - computed: false, optional: false, required: true
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicProviderSpec {
  /**
  * Name of the provider instance specified in providers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#name DataK8SClaudieIoInputManifestV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Region of the nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#region DataK8SClaudieIoInputManifestV1Beta1Manifest#region}
  */
  readonly region: string;
  /**
  * Zone of the nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#zone DataK8SClaudieIoInputManifestV1Beta1Manifest#zone}
  */
  readonly zone?: string;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicProviderSpecToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicProviderSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicProviderSpecToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicProviderSpec | cdktf.IResolvable): any {
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicProviderSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicProviderSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicProviderSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._region = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._region = value.region;
      this._zone = value.zone;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#effect DataK8SClaudieIoInputManifestV1Beta1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#key DataK8SClaudieIoInputManifestV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#time_added DataK8SClaudieIoInputManifestV1Beta1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#value DataK8SClaudieIoInputManifestV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaintsToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    time_added: cdktf.stringToTerraform(struct!.timeAdded),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaintsToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaints | cdktf.IResolvable): any {
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
    time_added: {
      value: cdktf.stringToHclTerraform(struct!.timeAdded),
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

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaints | cdktf.IResolvable | undefined {
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
    if (this._timeAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAdded = this._timeAdded;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._timeAdded = undefined;
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
      this._timeAdded = value.timeAdded;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // time_added - computed: false, optional: true, required: false
  private _timeAdded?: string; 
  public get timeAdded() {
    return this.getStringAttribute('time_added');
  }
  public set timeAdded(value: string) {
    this._timeAdded = value;
  }
  public resetTimeAdded() {
    this._timeAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAddedInput() {
    return this._timeAdded;
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

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaintsOutputReference {
    return new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamic {
  /**
  * User defined annotations for this nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#annotations DataK8SClaudieIoInputManifestV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Autoscaler configuration for this nodepool. Mutually exclusive with count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#autoscaler DataK8SClaudieIoInputManifestV1Beta1Manifest#autoscaler}
  */
  readonly autoscaler?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicAutoscaler;
  /**
  * Number of the nodes in the nodepool. Mutually exclusive with autoscaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#count DataK8SClaudieIoInputManifestV1Beta1Manifest#count}
  */
  readonly count?: number;
  /**
  * OS image of the machine. Currently, only Ubuntu 22.04 AMD64 images are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#image DataK8SClaudieIoInputManifestV1Beta1Manifest#image}
  */
  readonly image: string;
  /**
  * User defined labels for this nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#labels DataK8SClaudieIoInputManifestV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * MachineSpec further describe the properties of the selected server type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#machine_spec DataK8SClaudieIoInputManifestV1Beta1Manifest#machine_spec}
  */
  readonly machineSpec?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicMachineSpec;
  /**
  * Name of the nodepool. Each nodepool will have a random hash appended to the name, so the whole name will be of format <name>-<hash>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#name DataK8SClaudieIoInputManifestV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Collection of provider data to be used while creating the nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#provider_spec DataK8SClaudieIoInputManifestV1Beta1Manifest#provider_spec}
  */
  readonly providerSpec: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicProviderSpec;
  /**
  *  Type of the machines in the nodepool. Currently, only AMD64 machines are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#server_type DataK8SClaudieIoInputManifestV1Beta1Manifest#server_type}
  */
  readonly serverType: string;
  /**
  * Size of the storage disk on the nodes in the nodepool in GB. The OS disk is created automatically with predefined size of 100GB for kubernetes nodes and 50GB for Loadbalancer nodes. The value must be either -1 (no disk is created), or >= 50. If no value is specified, 50 is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#storage_disk_size DataK8SClaudieIoInputManifestV1Beta1Manifest#storage_disk_size}
  */
  readonly storageDiskSize?: number;
  /**
  * User defined taints for this nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#taints DataK8SClaudieIoInputManifestV1Beta1Manifest#taints}
  */
  readonly taints?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaints[] | cdktf.IResolvable;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    autoscaler: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicAutoscalerToTerraform(struct!.autoscaler),
    count: cdktf.numberToTerraform(struct!.count),
    image: cdktf.stringToTerraform(struct!.image),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    machine_spec: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicMachineSpecToTerraform(struct!.machineSpec),
    name: cdktf.stringToTerraform(struct!.name),
    provider_spec: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicProviderSpecToTerraform(struct!.providerSpec),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    storage_disk_size: cdktf.numberToTerraform(struct!.storageDiskSize),
    taints: cdktf.listMapper(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaintsToTerraform, false)(struct!.taints),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamic | cdktf.IResolvable): any {
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
    autoscaler: {
      value: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicAutoscalerToHclTerraform(struct!.autoscaler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicAutoscaler",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    machine_spec: {
      value: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicMachineSpecToHclTerraform(struct!.machineSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicMachineSpec",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_spec: {
      value: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicProviderSpecToHclTerraform(struct!.providerSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicProviderSpec",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.storageDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    taints: {
      value: cdktf.listMapperHcl(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._autoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaler = this._autoscaler?.internalValue;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._machineSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineSpec = this._machineSpec?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._providerSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerSpec = this._providerSpec?.internalValue;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    if (this._storageDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDiskSize = this._storageDiskSize;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._autoscaler.internalValue = undefined;
      this._count = undefined;
      this._image = undefined;
      this._labels = undefined;
      this._machineSpec.internalValue = undefined;
      this._name = undefined;
      this._providerSpec.internalValue = undefined;
      this._serverType = undefined;
      this._storageDiskSize = undefined;
      this._taints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._autoscaler.internalValue = value.autoscaler;
      this._count = value.count;
      this._image = value.image;
      this._labels = value.labels;
      this._machineSpec.internalValue = value.machineSpec;
      this._name = value.name;
      this._providerSpec.internalValue = value.providerSpec;
      this._serverType = value.serverType;
      this._storageDiskSize = value.storageDiskSize;
      this._taints.internalValue = value.taints;
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

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicAutoscalerOutputReference(this, "autoscaler");
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicAutoscaler) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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

  // machine_spec - computed: false, optional: true, required: false
  private _machineSpec = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicMachineSpecOutputReference(this, "machine_spec");
  public get machineSpec() {
    return this._machineSpec;
  }
  public putMachineSpec(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicMachineSpec) {
    this._machineSpec.internalValue = value;
  }
  public resetMachineSpec() {
    this._machineSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSpecInput() {
    return this._machineSpec.internalValue;
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

  // provider_spec - computed: false, optional: false, required: true
  private _providerSpec = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicProviderSpecOutputReference(this, "provider_spec");
  public get providerSpec() {
    return this._providerSpec;
  }
  public putProviderSpec(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicProviderSpec) {
    this._providerSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerSpecInput() {
    return this._providerSpec.internalValue;
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // storage_disk_size - computed: false, optional: true, required: false
  private _storageDiskSize?: number; 
  public get storageDiskSize() {
    return this.getNumberAttribute('storage_disk_size');
  }
  public set storageDiskSize(value: number) {
    this._storageDiskSize = value;
  }
  public resetStorageDiskSize() {
    this._storageDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDiskSizeInput() {
    return this._storageDiskSize;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicList extends cdktf.ComplexList {
  public internalValue? : DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamic[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicOutputReference {
    return new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesSecretRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#name DataK8SClaudieIoInputManifestV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#namespace DataK8SClaudieIoInputManifestV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesSecretRefToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesSecretRefToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesSecretRef | cdktf.IResolvable): any {
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

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodes {
  /**
  * Endpoint under which Claudie will access this node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#endpoint DataK8SClaudieIoInputManifestV1Beta1Manifest#endpoint}
  */
  readonly endpoint: string;
  /**
  * Secret reference to the private key of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#secret_ref DataK8SClaudieIoInputManifestV1Beta1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesSecretRef;
  /**
  * Username with root access. Used in SSH connection also.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#username DataK8SClaudieIoInputManifestV1Beta1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    secret_ref: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesSecretRefToTerraform(struct!.secretRef),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesSecretRef",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._secretRef.internalValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._secretRef.internalValue = value.secretRef;
      this._username = value.username;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesList extends cdktf.ComplexList {
  public internalValue? : DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesOutputReference {
    return new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#effect DataK8SClaudieIoInputManifestV1Beta1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#key DataK8SClaudieIoInputManifestV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#time_added DataK8SClaudieIoInputManifestV1Beta1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#value DataK8SClaudieIoInputManifestV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaintsToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    time_added: cdktf.stringToTerraform(struct!.timeAdded),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaintsToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaints | cdktf.IResolvable): any {
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
    time_added: {
      value: cdktf.stringToHclTerraform(struct!.timeAdded),
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

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaints | cdktf.IResolvable | undefined {
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
    if (this._timeAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAdded = this._timeAdded;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._timeAdded = undefined;
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
      this._timeAdded = value.timeAdded;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // time_added - computed: false, optional: true, required: false
  private _timeAdded?: string; 
  public get timeAdded() {
    return this.getStringAttribute('time_added');
  }
  public set timeAdded(value: string) {
    this._timeAdded = value;
  }
  public resetTimeAdded() {
    this._timeAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAddedInput() {
    return this._timeAdded;
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

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaintsOutputReference {
    return new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStatic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#annotations DataK8SClaudieIoInputManifestV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#labels DataK8SClaudieIoInputManifestV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#name DataK8SClaudieIoInputManifestV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * List of static nodes for a particular static nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#nodes DataK8SClaudieIoInputManifestV1Beta1Manifest#nodes}
  */
  readonly nodes: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#taints DataK8SClaudieIoInputManifestV1Beta1Manifest#taints}
  */
  readonly taints?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaints[] | cdktf.IResolvable;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    nodes: cdktf.listMapper(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesToTerraform, false)(struct!.nodes),
    taints: cdktf.listMapper(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaintsToTerraform, false)(struct!.taints),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStatic | cdktf.IResolvable): any {
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
    nodes: {
      value: cdktf.listMapperHcl(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesToHclTerraform, false)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesList",
    },
    taints: {
      value: cdktf.listMapperHcl(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStatic | cdktf.IResolvable | undefined {
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
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._nodes.internalValue = undefined;
      this._taints.internalValue = undefined;
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
      this._nodes.internalValue = value.nodes;
      this._taints.internalValue = value.taints;
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

  // nodes - computed: false, optional: false, required: true
  private _nodes = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticList extends cdktf.ComplexList {
  public internalValue? : DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStatic[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticOutputReference {
    return new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePools {
  /**
  * Dynamic nodepools define nodepools dynamically created by Claudie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#dynamic DataK8SClaudieIoInputManifestV1Beta1Manifest#dynamic}
  */
  readonly dynamic?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamic[] | cdktf.IResolvable;
  /**
  * Static nodepools define nodepools of already existing nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#static DataK8SClaudieIoInputManifestV1Beta1Manifest#static}
  */
  readonly static?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStatic[] | cdktf.IResolvable;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic: cdktf.listMapper(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicToTerraform, false)(struct!.dynamic),
    static: cdktf.listMapper(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticToTerraform, false)(struct!.static),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic: {
      value: cdktf.listMapperHcl(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicToHclTerraform, false)(struct!.dynamic),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicList",
    },
    static: {
      value: cdktf.listMapperHcl(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticToHclTerraform, false)(struct!.static),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamic.internalValue = undefined;
      this._static.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamic.internalValue = value.dynamic;
      this._static.internalValue = value.static;
    }
  }

  // dynamic - computed: false, optional: true, required: false
  private _dynamic = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamicList(this, "dynamic", false);
  public get dynamic() {
    return this._dynamic;
  }
  public putDynamic(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsDynamic[] | cdktf.IResolvable) {
    this._dynamic.internalValue = value;
  }
  public resetDynamic() {
    this._dynamic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStaticList(this, "static", false);
  public get static() {
    return this._static;
  }
  public putStatic(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsStatic[] | cdktf.IResolvable) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersSecretRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#name DataK8SClaudieIoInputManifestV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#namespace DataK8SClaudieIoInputManifestV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersSecretRefToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersSecretRefToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersSecretRef | cdktf.IResolvable): any {
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

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersTemplates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#path DataK8SClaudieIoInputManifestV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#repository DataK8SClaudieIoInputManifestV1Beta1Manifest#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#tag DataK8SClaudieIoInputManifestV1Beta1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersTemplatesToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersTemplatesToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersTemplates | cdktf.IResolvable): any {
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
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersTemplatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._repository = value.repository;
      this._tag = value.tag;
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

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProviders {
  /**
  * Name is the name of the provider specification. It has to be unique across all providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#name DataK8SClaudieIoInputManifestV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * ProviderType type of a provider. A list of available providers can be found at https://docs.claudie.io/v0.8.1/input-manifest/providers/aws/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#provider_type DataK8SClaudieIoInputManifestV1Beta1Manifest#provider_type}
  */
  readonly providerType: string;
  /**
  * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#secret_ref DataK8SClaudieIoInputManifestV1Beta1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersSecretRef;
  /**
  * External templates for building the cluster infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#templates DataK8SClaudieIoInputManifestV1Beta1Manifest#templates}
  */
  readonly templates?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersTemplates;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    provider_type: cdktf.stringToTerraform(struct!.providerType),
    secret_ref: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersSecretRefToTerraform(struct!.secretRef),
    templates: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersTemplatesToTerraform(struct!.templates),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProviders | cdktf.IResolvable): any {
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
    provider_type: {
      value: cdktf.stringToHclTerraform(struct!.providerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersSecretRef",
    },
    templates: {
      value: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersTemplatesToHclTerraform(struct!.templates),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersTemplates",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._providerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerType = this._providerType;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._templates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templates = this._templates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._providerType = undefined;
      this._secretRef.internalValue = undefined;
      this._templates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._providerType = value.providerType;
      this._secretRef.internalValue = value.secretRef;
      this._templates.internalValue = value.templates;
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

  // provider_type - computed: false, optional: false, required: true
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // templates - computed: false, optional: true, required: false
  private _templates = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersTemplatesOutputReference(this, "templates");
  public get templates() {
    return this._templates;
  }
  public putTemplates(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersTemplates) {
    this._templates.internalValue = value;
  }
  public resetTemplates() {
    this._templates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates.internalValue;
  }
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersList extends cdktf.ComplexList {
  public internalValue? : DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProviders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersOutputReference {
    return new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClaudieIoInputManifestV1Beta1ManifestSpec {
  /**
  * Kubernetes list of Kubernetes cluster this manifest will manage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#kubernetes DataK8SClaudieIoInputManifestV1Beta1Manifest#kubernetes}
  */
  readonly kubernetes?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetes;
  /**
  * LoadBalancers list of loadbalancer clusters the Kubernetes clusters may use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#load_balancers DataK8SClaudieIoInputManifestV1Beta1Manifest#load_balancers}
  */
  readonly loadBalancers?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancers;
  /**
  * NodePool is a map of dynamic nodepools and static nodepools which will be used to form kubernetes or loadbalancer clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#node_pools DataK8SClaudieIoInputManifestV1Beta1Manifest#node_pools}
  */
  readonly nodePools?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePools;
  /**
  * Providers list of defined cloud provider configuration that will be used while infrastructure provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#providers DataK8SClaudieIoInputManifestV1Beta1Manifest#providers}
  */
  readonly providers?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProviders[] | cdktf.IResolvable;
}

export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecToTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubernetes: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesToTerraform(struct!.kubernetes),
    load_balancers: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersToTerraform(struct!.loadBalancers),
    node_pools: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsToTerraform(struct!.nodePools),
    providers: cdktf.listMapper(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersToTerraform, false)(struct!.providers),
  }
}


export function dataK8SClaudieIoInputManifestV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SClaudieIoInputManifestV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubernetes: {
      value: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetes",
    },
    load_balancers: {
      value: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersToHclTerraform(struct!.loadBalancers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancers",
    },
    node_pools: {
      value: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsToHclTerraform(struct!.nodePools),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePools",
    },
    providers: {
      value: cdktf.listMapperHcl(dataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersToHclTerraform, false)(struct!.providers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClaudieIoInputManifestV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClaudieIoInputManifestV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._loadBalancers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancers = this._loadBalancers?.internalValue;
    }
    if (this._nodePools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePools = this._nodePools?.internalValue;
    }
    if (this._providers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providers = this._providers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kubernetes.internalValue = undefined;
      this._loadBalancers.internalValue = undefined;
      this._nodePools.internalValue = undefined;
      this._providers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kubernetes.internalValue = value.kubernetes;
      this._loadBalancers.internalValue = value.loadBalancers;
      this._nodePools.internalValue = value.nodePools;
      this._providers.internalValue = value.providers;
    }
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // load_balancers - computed: false, optional: true, required: false
  private _loadBalancers = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancersOutputReference(this, "load_balancers");
  public get loadBalancers() {
    return this._loadBalancers;
  }
  public putLoadBalancers(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecLoadBalancers) {
    this._loadBalancers.internalValue = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers.internalValue;
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePoolsOutputReference(this, "node_pools");
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecNodePools) {
    this._nodePools.internalValue = value;
  }
  public resetNodePools() {
    this._nodePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
  }

  // providers - computed: false, optional: true, required: false
  private _providers = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProvidersList(this, "providers", false);
  public get providers() {
    return this._providers;
  }
  public putProviders(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpecProviders[] | cdktf.IResolvable) {
    this._providers.internalValue = value;
  }
  public resetProviders() {
    this._providers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest k8s_claudie_io_input_manifest_v1beta1_manifest}
*/
export class DataK8SClaudieIoInputManifestV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_claudie_io_input_manifest_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClaudieIoInputManifestV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClaudieIoInputManifestV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SClaudieIoInputManifestV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClaudieIoInputManifestV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_claudie_io_input_manifest_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/claudie_io_input_manifest_v1beta1_manifest k8s_claudie_io_input_manifest_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClaudieIoInputManifestV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClaudieIoInputManifestV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_claudie_io_input_manifest_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SClaudieIoInputManifestV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClaudieIoInputManifestV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SClaudieIoInputManifestV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClaudieIoInputManifestV1Beta1ManifestSpec) {
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
      metadata: dataK8SClaudieIoInputManifestV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClaudieIoInputManifestV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SClaudieIoInputManifestV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClaudieIoInputManifestV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
