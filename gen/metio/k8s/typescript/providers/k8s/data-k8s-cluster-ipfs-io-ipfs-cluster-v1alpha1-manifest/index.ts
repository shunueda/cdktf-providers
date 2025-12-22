// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#metadata DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestMetadata;
  /**
  * IpfsClusterSpec defines the desired state of the IpfsCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#spec DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpec;
}
export interface DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#annotations DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#labels DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#name DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#namespace DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#name DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#template DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#template}
  */
  readonly template: string;
}

export function dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollowsToTerraform(struct?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollowsToHclTerraform(struct?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollows | cdktf.IResolvable): any {
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
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._template = value.template;
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
}

export class DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollowsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollows[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollowsOutputReference {
    return new DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecIpfsResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#limits DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#requests DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecIpfsResourcesToTerraform(struct?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecIpfsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecIpfsResourcesToHclTerraform(struct?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecIpfsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecIpfsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecIpfsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecIpfsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecNetworking {
  /**
  * circuitRelays defines how many CircuitRelays should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#circuit_relays DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#circuit_relays}
  */
  readonly circuitRelays: number;
  /**
  * public is a switch which defines whether this IPFSCluster will use the global IPFS network or create its own.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#public DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
}

export function dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecNetworkingToTerraform(struct?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecNetworking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_relays: cdktf.numberToTerraform(struct!.circuitRelays),
    public: cdktf.booleanToTerraform(struct!.public),
  }
}


export function dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecNetworkingToHclTerraform(struct?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecNetworking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circuit_relays: {
      value: cdktf.numberToHclTerraform(struct!.circuitRelays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public: {
      value: cdktf.booleanToHclTerraform(struct!.public),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecNetworking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circuitRelays !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitRelays = this._circuitRelays;
    }
    if (this._public !== undefined) {
      hasAnyValues = true;
      internalValueResult.public = this._public;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecNetworking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._circuitRelays = undefined;
      this._public = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._circuitRelays = value.circuitRelays;
      this._public = value.public;
    }
  }

  // circuit_relays - computed: false, optional: false, required: true
  private _circuitRelays?: number; 
  public get circuitRelays() {
    return this.getNumberAttribute('circuit_relays');
  }
  public set circuitRelays(value: number) {
    this._circuitRelays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitRelaysInput() {
    return this._circuitRelays;
  }

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }
}
export interface DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecReprovider {
  /**
  * Interval sets the time between rounds of reproviding local content to the routing system. Defaults to '12h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#interval DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Strategy specifies the reprovider strategy, defaults to 'all'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#strategy DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecReproviderToTerraform(struct?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecReprovider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecReproviderToHclTerraform(struct?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecReprovider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecReproviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecReprovider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecReprovider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._strategy = value.strategy;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpec {
  /**
  * clusterStorage defines the amount of storage to be used by IPFS Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#cluster_storage DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#cluster_storage}
  */
  readonly clusterStorage: string;
  /**
  * follows defines the list of other IPFS Clusters this one should follow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#follows DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#follows}
  */
  readonly follows?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollows[] | cdktf.IResolvable;
  /**
  * ipfsResources specifies the resource requirements for each IPFS container. If this value is omitted, then the operator will automatically determine these settings based on the storage sizes used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#ipfs_resources DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#ipfs_resources}
  */
  readonly ipfsResources?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecIpfsResources;
  /**
  * ipfsStorage defines the total storage to be allocated by this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#ipfs_storage DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#ipfs_storage}
  */
  readonly ipfsStorage: string;
  /**
  * networking defines network configuration settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#networking DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#networking}
  */
  readonly networking: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecNetworking;
  /**
  * replicas sets the number of replicas of IPFS Cluster nodes we should be running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#replicas DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas: number;
  /**
  * reprovider Describes the settings that each IPFS node should use when reproviding content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#reprovider DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest#reprovider}
  */
  readonly reprovider?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecReprovider;
}

export function dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_storage: cdktf.stringToTerraform(struct!.clusterStorage),
    follows: cdktf.listMapper(dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollowsToTerraform, false)(struct!.follows),
    ipfs_resources: dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecIpfsResourcesToTerraform(struct!.ipfsResources),
    ipfs_storage: cdktf.stringToTerraform(struct!.ipfsStorage),
    networking: dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecNetworkingToTerraform(struct!.networking),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    reprovider: dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecReproviderToTerraform(struct!.reprovider),
  }
}


export function dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_storage: {
      value: cdktf.stringToHclTerraform(struct!.clusterStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    follows: {
      value: cdktf.listMapperHcl(dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollowsToHclTerraform, false)(struct!.follows),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollowsList",
    },
    ipfs_resources: {
      value: dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecIpfsResourcesToHclTerraform(struct!.ipfsResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecIpfsResources",
    },
    ipfs_storage: {
      value: cdktf.stringToHclTerraform(struct!.ipfsStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networking: {
      value: dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecNetworkingToHclTerraform(struct!.networking),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecNetworking",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reprovider: {
      value: dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecReproviderToHclTerraform(struct!.reprovider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecReprovider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStorage = this._clusterStorage;
    }
    if (this._follows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.follows = this._follows?.internalValue;
    }
    if (this._ipfsResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfsResources = this._ipfsResources?.internalValue;
    }
    if (this._ipfsStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfsStorage = this._ipfsStorage;
    }
    if (this._networking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networking = this._networking?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._reprovider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reprovider = this._reprovider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterStorage = undefined;
      this._follows.internalValue = undefined;
      this._ipfsResources.internalValue = undefined;
      this._ipfsStorage = undefined;
      this._networking.internalValue = undefined;
      this._replicas = undefined;
      this._reprovider.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterStorage = value.clusterStorage;
      this._follows.internalValue = value.follows;
      this._ipfsResources.internalValue = value.ipfsResources;
      this._ipfsStorage = value.ipfsStorage;
      this._networking.internalValue = value.networking;
      this._replicas = value.replicas;
      this._reprovider.internalValue = value.reprovider;
    }
  }

  // cluster_storage - computed: false, optional: false, required: true
  private _clusterStorage?: string; 
  public get clusterStorage() {
    return this.getStringAttribute('cluster_storage');
  }
  public set clusterStorage(value: string) {
    this._clusterStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStorageInput() {
    return this._clusterStorage;
  }

  // follows - computed: false, optional: true, required: false
  private _follows = new DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollowsList(this, "follows", false);
  public get follows() {
    return this._follows;
  }
  public putFollows(value: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecFollows[] | cdktf.IResolvable) {
    this._follows.internalValue = value;
  }
  public resetFollows() {
    this._follows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followsInput() {
    return this._follows.internalValue;
  }

  // ipfs_resources - computed: false, optional: true, required: false
  private _ipfsResources = new DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecIpfsResourcesOutputReference(this, "ipfs_resources");
  public get ipfsResources() {
    return this._ipfsResources;
  }
  public putIpfsResources(value: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecIpfsResources) {
    this._ipfsResources.internalValue = value;
  }
  public resetIpfsResources() {
    this._ipfsResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfsResourcesInput() {
    return this._ipfsResources.internalValue;
  }

  // ipfs_storage - computed: false, optional: false, required: true
  private _ipfsStorage?: string; 
  public get ipfsStorage() {
    return this.getStringAttribute('ipfs_storage');
  }
  public set ipfsStorage(value: string) {
    this._ipfsStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfsStorageInput() {
    return this._ipfsStorage;
  }

  // networking - computed: false, optional: false, required: true
  private _networking = new DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecNetworking) {
    this._networking.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // reprovider - computed: false, optional: true, required: false
  private _reprovider = new DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecReproviderOutputReference(this, "reprovider");
  public get reprovider() {
    return this._reprovider;
  }
  public putReprovider(value: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecReprovider) {
    this._reprovider.internalValue = value;
  }
  public resetReprovider() {
    this._reprovider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reproviderInput() {
    return this._reprovider.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest k8s_cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest}
*/
export class DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClusterIpfsIoIpfsClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest k8s_cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cluster_ipfs_io_ipfs_cluster_v1alpha1_manifest',
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
  private _metadata = new DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterIpfsIoIpfsClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
