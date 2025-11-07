// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#metadata DataK8SClusterXK8SIoClusterV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SClusterXK8SIoClusterV1Beta1ManifestMetadata;
  /**
  * ClusterSpec defines the desired state of Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#spec DataK8SClusterXK8SIoClusterV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpec;
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#annotations DataK8SClusterXK8SIoClusterV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#labels DataK8SClusterXK8SIoClusterV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#name DataK8SClusterXK8SIoClusterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGates {
  /**
  * conditionType refers to a positive polarity condition (status true means good) with matching type in the Cluster's condition list. If the conditions doesn't exist, it will be treated as unknown. Note: Both Cluster API conditions or conditions added by 3rd party controllers can be used as availability gates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#condition_type DataK8SClusterXK8SIoClusterV1Beta1Manifest#condition_type}
  */
  readonly conditionType: string;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGatesToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGatesToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionType = value.conditionType;
    }
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGatesOutputReference {
    return new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkPods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#cidr_blocks DataK8SClusterXK8SIoClusterV1Beta1Manifest#cidr_blocks}
  */
  readonly cidrBlocks: string[];
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkPodsToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkPodsToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: false, required: true
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#cidr_blocks DataK8SClusterXK8SIoClusterV1Beta1Manifest#cidr_blocks}
  */
  readonly cidrBlocks: string[];
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkServicesToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkServicesToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: false, required: true
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetwork {
  /**
  * APIServerPort specifies the port the API Server should bind to. Defaults to 6443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#api_server_port DataK8SClusterXK8SIoClusterV1Beta1Manifest#api_server_port}
  */
  readonly apiServerPort?: number;
  /**
  * The network ranges from which Pod networks are allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#pods DataK8SClusterXK8SIoClusterV1Beta1Manifest#pods}
  */
  readonly pods?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkPods;
  /**
  * Domain name for services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#service_domain DataK8SClusterXK8SIoClusterV1Beta1Manifest#service_domain}
  */
  readonly serviceDomain?: string;
  /**
  * The network ranges from which service VIPs are allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#services DataK8SClusterXK8SIoClusterV1Beta1Manifest#services}
  */
  readonly services?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkServices;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_port: cdktf.numberToTerraform(struct!.apiServerPort),
    pods: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkPodsToTerraform(struct!.pods),
    service_domain: cdktf.stringToTerraform(struct!.serviceDomain),
    services: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkServicesToTerraform(struct!.services),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server_port: {
      value: cdktf.numberToHclTerraform(struct!.apiServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pods: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkPods",
    },
    service_domain: {
      value: cdktf.stringToHclTerraform(struct!.serviceDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkServicesToHclTerraform(struct!.services),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkServices",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerPort = this._apiServerPort;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._serviceDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDomain = this._serviceDomain;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiServerPort = undefined;
      this._pods.internalValue = undefined;
      this._serviceDomain = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiServerPort = value.apiServerPort;
      this._pods.internalValue = value.pods;
      this._serviceDomain = value.serviceDomain;
      this._services.internalValue = value.services;
    }
  }

  // api_server_port - computed: false, optional: true, required: false
  private _apiServerPort?: number; 
  public get apiServerPort() {
    return this.getNumberAttribute('api_server_port');
  }
  public set apiServerPort(value: number) {
    this._apiServerPort = value;
  }
  public resetApiServerPort() {
    this._apiServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerPortInput() {
    return this._apiServerPort;
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkPods) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // service_domain - computed: false, optional: true, required: false
  private _serviceDomain?: string; 
  public get serviceDomain() {
    return this.getStringAttribute('service_domain');
  }
  public set serviceDomain(value: string) {
    this._serviceDomain = value;
  }
  public resetServiceDomain() {
    this._serviceDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDomainInput() {
    return this._serviceDomain;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkServices) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneEndpoint {
  /**
  * The hostname on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#host DataK8SClusterXK8SIoClusterV1Beta1Manifest#host}
  */
  readonly host: string;
  /**
  * The port on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#port DataK8SClusterXK8SIoClusterV1Beta1Manifest#port}
  */
  readonly port: number;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneEndpointToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneEndpointToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#api_version DataK8SClusterXK8SIoClusterV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#field_path DataK8SClusterXK8SIoClusterV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#kind DataK8SClusterXK8SIoClusterV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#name DataK8SClusterXK8SIoClusterV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#resource_version DataK8SClusterXK8SIoClusterV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#uid DataK8SClusterXK8SIoClusterV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneRefToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneRef | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
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
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
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
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecInfrastructureRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#api_version DataK8SClusterXK8SIoClusterV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#field_path DataK8SClusterXK8SIoClusterV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#kind DataK8SClusterXK8SIoClusterV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#name DataK8SClusterXK8SIoClusterV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#resource_version DataK8SClusterXK8SIoClusterV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#uid DataK8SClusterXK8SIoClusterV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecInfrastructureRefToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecInfrastructureRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecInfrastructureRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecInfrastructureRef | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
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
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecInfrastructureRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecInfrastructureRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
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
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecInfrastructureRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckRemediationTemplate {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#api_version DataK8SClusterXK8SIoClusterV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#field_path DataK8SClusterXK8SIoClusterV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#kind DataK8SClusterXK8SIoClusterV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#name DataK8SClusterXK8SIoClusterV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#resource_version DataK8SClusterXK8SIoClusterV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#uid DataK8SClusterXK8SIoClusterV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckRemediationTemplateToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckRemediationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckRemediationTemplateToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckRemediationTemplate | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
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
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckRemediationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckRemediationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
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
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckRemediationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#status DataK8SClusterXK8SIoClusterV1Beta1Manifest#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#timeout DataK8SClusterXK8SIoClusterV1Beta1Manifest#timeout}
  */
  readonly timeout: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#type DataK8SClusterXK8SIoClusterV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditionsToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditionsToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._timeout = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._timeout = value.timeout;
      this._type = value.type;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditionsOutputReference {
    return new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheck {
  /**
  * Enable controls if a MachineHealthCheck should be created for the target machines. If false: No MachineHealthCheck will be created. If not set(default): A MachineHealthCheck will be created if it is defined here or in the associated ClusterClass. If no MachineHealthCheck is defined then none will be created. If true: A MachineHealthCheck is guaranteed to be created. Cluster validation will block if 'enable' is true and no MachineHealthCheck definition is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#enable DataK8SClusterXK8SIoClusterV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Any further remediation is only allowed if at most 'MaxUnhealthy' machines selected by 'selector' are not healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#max_unhealthy DataK8SClusterXK8SIoClusterV1Beta1Manifest#max_unhealthy}
  */
  readonly maxUnhealthy?: string;
  /**
  * NodeStartupTimeout allows to set the maximum time for MachineHealthCheck to consider a Machine unhealthy if a corresponding Node isn't associated through a 'Spec.ProviderID' field. The duration set in this field is compared to the greatest of: - Cluster's infrastructure ready condition timestamp (if and when available) - Control Plane's initialized condition timestamp (if and when available) - Machine's infrastructure ready condition timestamp (if and when available) - Machine's metadata creation timestamp Defaults to 10 minutes. If you wish to disable this feature, set the value explicitly to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#node_startup_timeout DataK8SClusterXK8SIoClusterV1Beta1Manifest#node_startup_timeout}
  */
  readonly nodeStartupTimeout?: string;
  /**
  * RemediationTemplate is a reference to a remediation template provided by an infrastructure provider. This field is completely optional, when filled, the MachineHealthCheck controller creates a new object from the template referenced and hands off remediation of the machine to a controller that lives outside of Cluster API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#remediation_template DataK8SClusterXK8SIoClusterV1Beta1Manifest#remediation_template}
  */
  readonly remediationTemplate?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckRemediationTemplate;
  /**
  * UnhealthyConditions contains a list of the conditions that determine whether a node is considered unhealthy. The conditions are combined in a logical OR, i.e. if any of the conditions is met, the node is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#unhealthy_conditions DataK8SClusterXK8SIoClusterV1Beta1Manifest#unhealthy_conditions}
  */
  readonly unhealthyConditions?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditions[] | cdktf.IResolvable;
  /**
  * Any further remediation is only allowed if the number of machines selected by 'selector' as not healthy is within the range of 'UnhealthyRange'. Takes precedence over MaxUnhealthy. Eg. '[3-5]' - This means that remediation will be allowed only when: (a) there are at least 3 unhealthy machines (and) (b) there are at most 5 unhealthy machines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#unhealthy_range DataK8SClusterXK8SIoClusterV1Beta1Manifest#unhealthy_range}
  */
  readonly unhealthyRange?: string;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    max_unhealthy: cdktf.stringToTerraform(struct!.maxUnhealthy),
    node_startup_timeout: cdktf.stringToTerraform(struct!.nodeStartupTimeout),
    remediation_template: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckRemediationTemplateToTerraform(struct!.remediationTemplate),
    unhealthy_conditions: cdktf.listMapper(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditionsToTerraform, false)(struct!.unhealthyConditions),
    unhealthy_range: cdktf.stringToTerraform(struct!.unhealthyRange),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_unhealthy: {
      value: cdktf.stringToHclTerraform(struct!.maxUnhealthy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_startup_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeStartupTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remediation_template: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckRemediationTemplateToHclTerraform(struct!.remediationTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckRemediationTemplate",
    },
    unhealthy_conditions: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditionsToHclTerraform, false)(struct!.unhealthyConditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditionsList",
    },
    unhealthy_range: {
      value: cdktf.stringToHclTerraform(struct!.unhealthyRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._maxUnhealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthy = this._maxUnhealthy;
    }
    if (this._nodeStartupTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStartupTimeout = this._nodeStartupTimeout;
    }
    if (this._remediationTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationTemplate = this._remediationTemplate?.internalValue;
    }
    if (this._unhealthyConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyConditions = this._unhealthyConditions?.internalValue;
    }
    if (this._unhealthyRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyRange = this._unhealthyRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._maxUnhealthy = undefined;
      this._nodeStartupTimeout = undefined;
      this._remediationTemplate.internalValue = undefined;
      this._unhealthyConditions.internalValue = undefined;
      this._unhealthyRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._maxUnhealthy = value.maxUnhealthy;
      this._nodeStartupTimeout = value.nodeStartupTimeout;
      this._remediationTemplate.internalValue = value.remediationTemplate;
      this._unhealthyConditions.internalValue = value.unhealthyConditions;
      this._unhealthyRange = value.unhealthyRange;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // max_unhealthy - computed: false, optional: true, required: false
  private _maxUnhealthy?: string; 
  public get maxUnhealthy() {
    return this.getStringAttribute('max_unhealthy');
  }
  public set maxUnhealthy(value: string) {
    this._maxUnhealthy = value;
  }
  public resetMaxUnhealthy() {
    this._maxUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyInput() {
    return this._maxUnhealthy;
  }

  // node_startup_timeout - computed: false, optional: true, required: false
  private _nodeStartupTimeout?: string; 
  public get nodeStartupTimeout() {
    return this.getStringAttribute('node_startup_timeout');
  }
  public set nodeStartupTimeout(value: string) {
    this._nodeStartupTimeout = value;
  }
  public resetNodeStartupTimeout() {
    this._nodeStartupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStartupTimeoutInput() {
    return this._nodeStartupTimeout;
  }

  // remediation_template - computed: false, optional: true, required: false
  private _remediationTemplate = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckRemediationTemplateOutputReference(this, "remediation_template");
  public get remediationTemplate() {
    return this._remediationTemplate;
  }
  public putRemediationTemplate(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckRemediationTemplate) {
    this._remediationTemplate.internalValue = value;
  }
  public resetRemediationTemplate() {
    this._remediationTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTemplateInput() {
    return this._remediationTemplate.internalValue;
  }

  // unhealthy_conditions - computed: false, optional: true, required: false
  private _unhealthyConditions = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditionsList(this, "unhealthy_conditions", false);
  public get unhealthyConditions() {
    return this._unhealthyConditions;
  }
  public putUnhealthyConditions(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditions[] | cdktf.IResolvable) {
    this._unhealthyConditions.internalValue = value;
  }
  public resetUnhealthyConditions() {
    this._unhealthyConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyConditionsInput() {
    return this._unhealthyConditions.internalValue;
  }

  // unhealthy_range - computed: false, optional: true, required: false
  private _unhealthyRange?: string; 
  public get unhealthyRange() {
    return this.getStringAttribute('unhealthy_range');
  }
  public set unhealthyRange(value: string) {
    this._unhealthyRange = value;
  }
  public resetUnhealthyRange() {
    this._unhealthyRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyRangeInput() {
    return this._unhealthyRange;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#annotations DataK8SClusterXK8SIoClusterV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#labels DataK8SClusterXK8SIoClusterV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverrides {
  /**
  * DefinitionFrom specifies where the definition of this Variable is from. Deprecated: This field is deprecated, must not be set anymore and is going to be removed in the next apiVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#definition_from DataK8SClusterXK8SIoClusterV1Beta1Manifest#definition_from}
  */
  readonly definitionFrom?: string;
  /**
  * Name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#name DataK8SClusterXK8SIoClusterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of the variable. Note: the value will be validated against the schema of the corresponding ClusterClassVariable from the ClusterClass. Note: We have to use apiextensionsv1.JSON instead of a custom JSON type, because controller-tools has a hard-coded schema for apiextensionsv1.JSON which cannot be produced by another type via controller-tools, i.e. it is not possible to have no type field. Ref: https://github.com/kubernetes-sigs/controller-tools/blob/d0e03a142d0ecdd5491593e941ee1d6b5d91dba6/pkg/crd/known_types.go#L106-L111
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#value DataK8SClusterXK8SIoClusterV1Beta1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverridesToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition_from: cdktf.stringToTerraform(struct!.definitionFrom),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverridesToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition_from: {
      value: cdktf.stringToHclTerraform(struct!.definitionFrom),
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

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definitionFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitionFrom = this._definitionFrom;
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definitionFrom = undefined;
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
      this._definitionFrom = value.definitionFrom;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // definition_from - computed: false, optional: true, required: false
  private _definitionFrom?: string; 
  public get definitionFrom() {
    return this.getStringAttribute('definition_from');
  }
  public set definitionFrom(value: string) {
    this._definitionFrom = value;
  }
  public resetDefinitionFrom() {
    this._definitionFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionFromInput() {
    return this._definitionFrom;
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

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverridesList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverridesOutputReference {
    return new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariables {
  /**
  * Overrides can be used to override Cluster level variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#overrides DataK8SClusterXK8SIoClusterV1Beta1Manifest#overrides}
  */
  readonly overrides?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverrides[] | cdktf.IResolvable;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overrides: cdktf.listMapper(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverridesToTerraform, false)(struct!.overrides),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overrides: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverridesToHclTerraform, false)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrides.internalValue = value.overrides;
    }
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlane {
  /**
  * MachineHealthCheck allows to enable, disable and override the MachineHealthCheck configuration in the ClusterClass for this control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#machine_health_check DataK8SClusterXK8SIoClusterV1Beta1Manifest#machine_health_check}
  */
  readonly machineHealthCheck?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheck;
  /**
  * Metadata is the metadata applied to the ControlPlane and the Machines of the ControlPlane if the ControlPlaneTemplate referenced by the ClusterClass is machine based. If not, it is applied only to the ControlPlane. At runtime this metadata is merged with the corresponding metadata from the ClusterClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#metadata DataK8SClusterXK8SIoClusterV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMetadata;
  /**
  * NodeDeletionTimeout defines how long the controller will attempt to delete the Node that the Machine hosts after the Machine is marked for deletion. A duration of 0 will retry deletion indefinitely. Defaults to 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#node_deletion_timeout DataK8SClusterXK8SIoClusterV1Beta1Manifest#node_deletion_timeout}
  */
  readonly nodeDeletionTimeout?: string;
  /**
  * NodeDrainTimeout is the total amount of time that the controller will spend on draining a node. The default value is 0, meaning that the node can be drained without any time limitations. NOTE: NodeDrainTimeout is different from 'kubectl drain --timeout'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#node_drain_timeout DataK8SClusterXK8SIoClusterV1Beta1Manifest#node_drain_timeout}
  */
  readonly nodeDrainTimeout?: string;
  /**
  * NodeVolumeDetachTimeout is the total amount of time that the controller will spend on waiting for all volumes to be detached. The default value is 0, meaning that the volumes can be detached without any time limitations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#node_volume_detach_timeout DataK8SClusterXK8SIoClusterV1Beta1Manifest#node_volume_detach_timeout}
  */
  readonly nodeVolumeDetachTimeout?: string;
  /**
  * Replicas is the number of control plane nodes. If the value is nil, the ControlPlane object is created without the number of Replicas and it's assumed that the control plane controller does not implement support for this field. When specified against a control plane provider that lacks support for this field, this value will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#replicas DataK8SClusterXK8SIoClusterV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Variables can be used to customize the ControlPlane through patches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#variables DataK8SClusterXK8SIoClusterV1Beta1Manifest#variables}
  */
  readonly variables?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariables;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlane | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_health_check: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckToTerraform(struct!.machineHealthCheck),
    metadata: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMetadataToTerraform(struct!.metadata),
    node_deletion_timeout: cdktf.stringToTerraform(struct!.nodeDeletionTimeout),
    node_drain_timeout: cdktf.stringToTerraform(struct!.nodeDrainTimeout),
    node_volume_detach_timeout: cdktf.stringToTerraform(struct!.nodeVolumeDetachTimeout),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    variables: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesToTerraform(struct!.variables),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlane | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_health_check: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckToHclTerraform(struct!.machineHealthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheck",
    },
    metadata: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMetadata",
    },
    node_deletion_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeDeletionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_drain_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeDrainTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_volume_detach_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeVolumeDetachTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    variables: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlane | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineHealthCheck = this._machineHealthCheck?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._nodeDeletionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDeletionTimeout = this._nodeDeletionTimeout;
    }
    if (this._nodeDrainTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDrainTimeout = this._nodeDrainTimeout;
    }
    if (this._nodeVolumeDetachTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeVolumeDetachTimeout = this._nodeVolumeDetachTimeout;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlane | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineHealthCheck.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._nodeDeletionTimeout = undefined;
      this._nodeDrainTimeout = undefined;
      this._nodeVolumeDetachTimeout = undefined;
      this._replicas = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineHealthCheck.internalValue = value.machineHealthCheck;
      this._metadata.internalValue = value.metadata;
      this._nodeDeletionTimeout = value.nodeDeletionTimeout;
      this._nodeDrainTimeout = value.nodeDrainTimeout;
      this._nodeVolumeDetachTimeout = value.nodeVolumeDetachTimeout;
      this._replicas = value.replicas;
      this._variables.internalValue = value.variables;
    }
  }

  // machine_health_check - computed: false, optional: true, required: false
  private _machineHealthCheck = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheckOutputReference(this, "machine_health_check");
  public get machineHealthCheck() {
    return this._machineHealthCheck;
  }
  public putMachineHealthCheck(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMachineHealthCheck) {
    this._machineHealthCheck.internalValue = value;
  }
  public resetMachineHealthCheck() {
    this._machineHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineHealthCheckInput() {
    return this._machineHealthCheck.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // node_deletion_timeout - computed: false, optional: true, required: false
  private _nodeDeletionTimeout?: string; 
  public get nodeDeletionTimeout() {
    return this.getStringAttribute('node_deletion_timeout');
  }
  public set nodeDeletionTimeout(value: string) {
    this._nodeDeletionTimeout = value;
  }
  public resetNodeDeletionTimeout() {
    this._nodeDeletionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDeletionTimeoutInput() {
    return this._nodeDeletionTimeout;
  }

  // node_drain_timeout - computed: false, optional: true, required: false
  private _nodeDrainTimeout?: string; 
  public get nodeDrainTimeout() {
    return this.getStringAttribute('node_drain_timeout');
  }
  public set nodeDrainTimeout(value: string) {
    this._nodeDrainTimeout = value;
  }
  public resetNodeDrainTimeout() {
    this._nodeDrainTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDrainTimeoutInput() {
    return this._nodeDrainTimeout;
  }

  // node_volume_detach_timeout - computed: false, optional: true, required: false
  private _nodeVolumeDetachTimeout?: string; 
  public get nodeVolumeDetachTimeout() {
    return this.getStringAttribute('node_volume_detach_timeout');
  }
  public set nodeVolumeDetachTimeout(value: string) {
    this._nodeVolumeDetachTimeout = value;
  }
  public resetNodeVolumeDetachTimeout() {
    this._nodeVolumeDetachTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVolumeDetachTimeoutInput() {
    return this._nodeVolumeDetachTimeout;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneVariables) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariables {
  /**
  * DefinitionFrom specifies where the definition of this Variable is from. Deprecated: This field is deprecated, must not be set anymore and is going to be removed in the next apiVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#definition_from DataK8SClusterXK8SIoClusterV1Beta1Manifest#definition_from}
  */
  readonly definitionFrom?: string;
  /**
  * Name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#name DataK8SClusterXK8SIoClusterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of the variable. Note: the value will be validated against the schema of the corresponding ClusterClassVariable from the ClusterClass. Note: We have to use apiextensionsv1.JSON instead of a custom JSON type, because controller-tools has a hard-coded schema for apiextensionsv1.JSON which cannot be produced by another type via controller-tools, i.e. it is not possible to have no type field. Ref: https://github.com/kubernetes-sigs/controller-tools/blob/d0e03a142d0ecdd5491593e941ee1d6b5d91dba6/pkg/crd/known_types.go#L106-L111
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#value DataK8SClusterXK8SIoClusterV1Beta1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariablesToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition_from: cdktf.stringToTerraform(struct!.definitionFrom),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariablesToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition_from: {
      value: cdktf.stringToHclTerraform(struct!.definitionFrom),
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

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definitionFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitionFrom = this._definitionFrom;
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definitionFrom = undefined;
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
      this._definitionFrom = value.definitionFrom;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // definition_from - computed: false, optional: true, required: false
  private _definitionFrom?: string; 
  public get definitionFrom() {
    return this.getStringAttribute('definition_from');
  }
  public set definitionFrom(value: string) {
    this._definitionFrom = value;
  }
  public resetDefinitionFrom() {
    this._definitionFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionFromInput() {
    return this._definitionFrom;
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

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariablesList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariables[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariablesOutputReference {
    return new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#api_version DataK8SClusterXK8SIoClusterV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#field_path DataK8SClusterXK8SIoClusterV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#kind DataK8SClusterXK8SIoClusterV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#name DataK8SClusterXK8SIoClusterV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#resource_version DataK8SClusterXK8SIoClusterV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#uid DataK8SClusterXK8SIoClusterV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckRemediationTemplateToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckRemediationTemplateToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
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
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckRemediationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
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
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#status DataK8SClusterXK8SIoClusterV1Beta1Manifest#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#timeout DataK8SClusterXK8SIoClusterV1Beta1Manifest#timeout}
  */
  readonly timeout: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#type DataK8SClusterXK8SIoClusterV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._timeout = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._timeout = value.timeout;
      this._type = value.type;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsOutputReference {
    return new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheck {
  /**
  * Enable controls if a MachineHealthCheck should be created for the target machines. If false: No MachineHealthCheck will be created. If not set(default): A MachineHealthCheck will be created if it is defined here or in the associated ClusterClass. If no MachineHealthCheck is defined then none will be created. If true: A MachineHealthCheck is guaranteed to be created. Cluster validation will block if 'enable' is true and no MachineHealthCheck definition is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#enable DataK8SClusterXK8SIoClusterV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Any further remediation is only allowed if at most 'MaxUnhealthy' machines selected by 'selector' are not healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#max_unhealthy DataK8SClusterXK8SIoClusterV1Beta1Manifest#max_unhealthy}
  */
  readonly maxUnhealthy?: string;
  /**
  * NodeStartupTimeout allows to set the maximum time for MachineHealthCheck to consider a Machine unhealthy if a corresponding Node isn't associated through a 'Spec.ProviderID' field. The duration set in this field is compared to the greatest of: - Cluster's infrastructure ready condition timestamp (if and when available) - Control Plane's initialized condition timestamp (if and when available) - Machine's infrastructure ready condition timestamp (if and when available) - Machine's metadata creation timestamp Defaults to 10 minutes. If you wish to disable this feature, set the value explicitly to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#node_startup_timeout DataK8SClusterXK8SIoClusterV1Beta1Manifest#node_startup_timeout}
  */
  readonly nodeStartupTimeout?: string;
  /**
  * RemediationTemplate is a reference to a remediation template provided by an infrastructure provider. This field is completely optional, when filled, the MachineHealthCheck controller creates a new object from the template referenced and hands off remediation of the machine to a controller that lives outside of Cluster API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#remediation_template DataK8SClusterXK8SIoClusterV1Beta1Manifest#remediation_template}
  */
  readonly remediationTemplate?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate;
  /**
  * UnhealthyConditions contains a list of the conditions that determine whether a node is considered unhealthy. The conditions are combined in a logical OR, i.e. if any of the conditions is met, the node is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#unhealthy_conditions DataK8SClusterXK8SIoClusterV1Beta1Manifest#unhealthy_conditions}
  */
  readonly unhealthyConditions?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions[] | cdktf.IResolvable;
  /**
  * Any further remediation is only allowed if the number of machines selected by 'selector' as not healthy is within the range of 'UnhealthyRange'. Takes precedence over MaxUnhealthy. Eg. '[3-5]' - This means that remediation will be allowed only when: (a) there are at least 3 unhealthy machines (and) (b) there are at most 5 unhealthy machines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#unhealthy_range DataK8SClusterXK8SIoClusterV1Beta1Manifest#unhealthy_range}
  */
  readonly unhealthyRange?: string;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    max_unhealthy: cdktf.stringToTerraform(struct!.maxUnhealthy),
    node_startup_timeout: cdktf.stringToTerraform(struct!.nodeStartupTimeout),
    remediation_template: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckRemediationTemplateToTerraform(struct!.remediationTemplate),
    unhealthy_conditions: cdktf.listMapper(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsToTerraform, false)(struct!.unhealthyConditions),
    unhealthy_range: cdktf.stringToTerraform(struct!.unhealthyRange),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_unhealthy: {
      value: cdktf.stringToHclTerraform(struct!.maxUnhealthy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_startup_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeStartupTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remediation_template: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckRemediationTemplateToHclTerraform(struct!.remediationTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate",
    },
    unhealthy_conditions: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsToHclTerraform, false)(struct!.unhealthyConditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsList",
    },
    unhealthy_range: {
      value: cdktf.stringToHclTerraform(struct!.unhealthyRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._maxUnhealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthy = this._maxUnhealthy;
    }
    if (this._nodeStartupTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStartupTimeout = this._nodeStartupTimeout;
    }
    if (this._remediationTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationTemplate = this._remediationTemplate?.internalValue;
    }
    if (this._unhealthyConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyConditions = this._unhealthyConditions?.internalValue;
    }
    if (this._unhealthyRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyRange = this._unhealthyRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._maxUnhealthy = undefined;
      this._nodeStartupTimeout = undefined;
      this._remediationTemplate.internalValue = undefined;
      this._unhealthyConditions.internalValue = undefined;
      this._unhealthyRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._maxUnhealthy = value.maxUnhealthy;
      this._nodeStartupTimeout = value.nodeStartupTimeout;
      this._remediationTemplate.internalValue = value.remediationTemplate;
      this._unhealthyConditions.internalValue = value.unhealthyConditions;
      this._unhealthyRange = value.unhealthyRange;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // max_unhealthy - computed: false, optional: true, required: false
  private _maxUnhealthy?: string; 
  public get maxUnhealthy() {
    return this.getStringAttribute('max_unhealthy');
  }
  public set maxUnhealthy(value: string) {
    this._maxUnhealthy = value;
  }
  public resetMaxUnhealthy() {
    this._maxUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyInput() {
    return this._maxUnhealthy;
  }

  // node_startup_timeout - computed: false, optional: true, required: false
  private _nodeStartupTimeout?: string; 
  public get nodeStartupTimeout() {
    return this.getStringAttribute('node_startup_timeout');
  }
  public set nodeStartupTimeout(value: string) {
    this._nodeStartupTimeout = value;
  }
  public resetNodeStartupTimeout() {
    this._nodeStartupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStartupTimeoutInput() {
    return this._nodeStartupTimeout;
  }

  // remediation_template - computed: false, optional: true, required: false
  private _remediationTemplate = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckRemediationTemplateOutputReference(this, "remediation_template");
  public get remediationTemplate() {
    return this._remediationTemplate;
  }
  public putRemediationTemplate(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate) {
    this._remediationTemplate.internalValue = value;
  }
  public resetRemediationTemplate() {
    this._remediationTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTemplateInput() {
    return this._remediationTemplate.internalValue;
  }

  // unhealthy_conditions - computed: false, optional: true, required: false
  private _unhealthyConditions = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsList(this, "unhealthy_conditions", false);
  public get unhealthyConditions() {
    return this._unhealthyConditions;
  }
  public putUnhealthyConditions(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions[] | cdktf.IResolvable) {
    this._unhealthyConditions.internalValue = value;
  }
  public resetUnhealthyConditions() {
    this._unhealthyConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyConditionsInput() {
    return this._unhealthyConditions.internalValue;
  }

  // unhealthy_range - computed: false, optional: true, required: false
  private _unhealthyRange?: string; 
  public get unhealthyRange() {
    return this.getStringAttribute('unhealthy_range');
  }
  public set unhealthyRange(value: string) {
    this._unhealthyRange = value;
  }
  public resetUnhealthyRange() {
    this._unhealthyRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyRangeInput() {
    return this._unhealthyRange;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#annotations DataK8SClusterXK8SIoClusterV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#labels DataK8SClusterXK8SIoClusterV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRemediation {
  /**
  * MaxInFlight determines how many in flight remediations should happen at the same time. Remediation only happens on the MachineSet with the most current revision, while older MachineSets (usually present during rollout operations) aren't allowed to remediate. Note: In general (independent of remediations), unhealthy machines are always prioritized during scale down operations over healthy ones. MaxInFlight can be set to a fixed number or a percentage. Example: when this is set to 20%, the MachineSet controller deletes at most 20% of the desired replicas. If not set, remediation is limited to all machines (bounded by replicas) under the active MachineSet's management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#max_in_flight DataK8SClusterXK8SIoClusterV1Beta1Manifest#max_in_flight}
  */
  readonly maxInFlight?: string;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRemediationToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRemediation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_in_flight: cdktf.stringToTerraform(struct!.maxInFlight),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRemediationToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRemediation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_in_flight: {
      value: cdktf.stringToHclTerraform(struct!.maxInFlight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRemediationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRemediation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInFlight !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInFlight = this._maxInFlight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRemediation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxInFlight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxInFlight = value.maxInFlight;
    }
  }

  // max_in_flight - computed: false, optional: true, required: false
  private _maxInFlight?: string; 
  public get maxInFlight() {
    return this.getStringAttribute('max_in_flight');
  }
  public set maxInFlight(value: string) {
    this._maxInFlight = value;
  }
  public resetMaxInFlight() {
    this._maxInFlight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInFlightInput() {
    return this._maxInFlight;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRollingUpdate {
  /**
  * DeletePolicy defines the policy used by the MachineDeployment to identify nodes to delete when downscaling. Valid values are 'Random, 'Newest', 'Oldest' When no value is supplied, the default DeletePolicy of MachineSet is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#delete_policy DataK8SClusterXK8SIoClusterV1Beta1Manifest#delete_policy}
  */
  readonly deletePolicy?: string;
  /**
  * The maximum number of machines that can be scheduled above the desired number of machines. Value can be an absolute number (ex: 5) or a percentage of desired machines (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 1. Example: when this is set to 30%, the new MachineSet can be scaled up immediately when the rolling update starts, such that the total number of old and new machines do not exceed 130% of desired machines. Once old machines have been killed, new MachineSet can be scaled up further, ensuring that total number of machines running at any time during the update is at most 130% of desired machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#max_surge DataK8SClusterXK8SIoClusterV1Beta1Manifest#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * The maximum number of machines that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired machines (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 0. Example: when this is set to 30%, the old MachineSet can be scaled down to 70% of desired machines immediately when the rolling update starts. Once new machines are ready, old MachineSet can be scaled down further, followed by scaling up the new MachineSet, ensuring that the total number of machines available at all times during the update is at least 70% of desired machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#max_unavailable DataK8SClusterXK8SIoClusterV1Beta1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRollingUpdateToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_policy: cdktf.stringToTerraform(struct!.deletePolicy),
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRollingUpdateToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_policy: {
      value: cdktf.stringToHclTerraform(struct!.deletePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRollingUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletePolicy = this._deletePolicy;
    }
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRollingUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletePolicy = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletePolicy = value.deletePolicy;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // delete_policy - computed: false, optional: true, required: false
  private _deletePolicy?: string; 
  public get deletePolicy() {
    return this.getStringAttribute('delete_policy');
  }
  public set deletePolicy(value: string) {
    this._deletePolicy = value;
  }
  public resetDeletePolicy() {
    this._deletePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePolicyInput() {
    return this._deletePolicy;
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategy {
  /**
  * Remediation controls the strategy of remediating unhealthy machines and how remediating operations should occur during the lifecycle of the dependant MachineSets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#remediation DataK8SClusterXK8SIoClusterV1Beta1Manifest#remediation}
  */
  readonly remediation?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRemediation;
  /**
  * Rolling update config params. Present only if MachineDeploymentStrategyType = RollingUpdate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#rolling_update DataK8SClusterXK8SIoClusterV1Beta1Manifest#rolling_update}
  */
  readonly rollingUpdate?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRollingUpdate;
  /**
  * Type of deployment. Allowed values are RollingUpdate and OnDelete. The default is RollingUpdate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#type DataK8SClusterXK8SIoClusterV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remediation: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRemediationToTerraform(struct!.remediation),
    rolling_update: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remediation: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRemediationToHclTerraform(struct!.remediation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRemediation",
    },
    rolling_update: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRollingUpdate",
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

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remediation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediation = this._remediation?.internalValue;
    }
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remediation.internalValue = undefined;
      this._rollingUpdate.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remediation.internalValue = value.remediation;
      this._rollingUpdate.internalValue = value.rollingUpdate;
      this._type = value.type;
    }
  }

  // remediation - computed: false, optional: true, required: false
  private _remediation = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRemediationOutputReference(this, "remediation");
  public get remediation() {
    return this._remediation;
  }
  public putRemediation(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRemediation) {
    this._remediation.internalValue = value;
  }
  public resetRemediation() {
    this._remediation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationInput() {
    return this._remediation.internalValue;
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
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
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverrides {
  /**
  * DefinitionFrom specifies where the definition of this Variable is from. Deprecated: This field is deprecated, must not be set anymore and is going to be removed in the next apiVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#definition_from DataK8SClusterXK8SIoClusterV1Beta1Manifest#definition_from}
  */
  readonly definitionFrom?: string;
  /**
  * Name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#name DataK8SClusterXK8SIoClusterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of the variable. Note: the value will be validated against the schema of the corresponding ClusterClassVariable from the ClusterClass. Note: We have to use apiextensionsv1.JSON instead of a custom JSON type, because controller-tools has a hard-coded schema for apiextensionsv1.JSON which cannot be produced by another type via controller-tools, i.e. it is not possible to have no type field. Ref: https://github.com/kubernetes-sigs/controller-tools/blob/d0e03a142d0ecdd5491593e941ee1d6b5d91dba6/pkg/crd/known_types.go#L106-L111
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#value DataK8SClusterXK8SIoClusterV1Beta1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverridesToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition_from: cdktf.stringToTerraform(struct!.definitionFrom),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverridesToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition_from: {
      value: cdktf.stringToHclTerraform(struct!.definitionFrom),
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

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definitionFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitionFrom = this._definitionFrom;
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definitionFrom = undefined;
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
      this._definitionFrom = value.definitionFrom;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // definition_from - computed: false, optional: true, required: false
  private _definitionFrom?: string; 
  public get definitionFrom() {
    return this.getStringAttribute('definition_from');
  }
  public set definitionFrom(value: string) {
    this._definitionFrom = value;
  }
  public resetDefinitionFrom() {
    this._definitionFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionFromInput() {
    return this._definitionFrom;
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

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverridesList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverridesOutputReference {
    return new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariables {
  /**
  * Overrides can be used to override Cluster level variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#overrides DataK8SClusterXK8SIoClusterV1Beta1Manifest#overrides}
  */
  readonly overrides?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverrides[] | cdktf.IResolvable;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overrides: cdktf.listMapper(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverridesToTerraform, false)(struct!.overrides),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overrides: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverridesToHclTerraform, false)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrides.internalValue = value.overrides;
    }
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeployments {
  /**
  * Class is the name of the MachineDeploymentClass used to create the set of worker nodes. This should match one of the deployment classes defined in the ClusterClass object mentioned in the 'Cluster.Spec.Class' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#class DataK8SClusterXK8SIoClusterV1Beta1Manifest#class}
  */
  readonly class: string;
  /**
  * FailureDomain is the failure domain the machines will be created in. Must match a key in the FailureDomains map stored on the cluster object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#failure_domain DataK8SClusterXK8SIoClusterV1Beta1Manifest#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * MachineHealthCheck allows to enable, disable and override the MachineHealthCheck configuration in the ClusterClass for this MachineDeployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#machine_health_check DataK8SClusterXK8SIoClusterV1Beta1Manifest#machine_health_check}
  */
  readonly machineHealthCheck?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheck;
  /**
  * Metadata is the metadata applied to the MachineDeployment and the machines of the MachineDeployment. At runtime this metadata is merged with the corresponding metadata from the ClusterClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#metadata DataK8SClusterXK8SIoClusterV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMetadata;
  /**
  * Minimum number of seconds for which a newly created machine should be ready. Defaults to 0 (machine will be considered available as soon as it is ready)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#min_ready_seconds DataK8SClusterXK8SIoClusterV1Beta1Manifest#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * Name is the unique identifier for this MachineDeploymentTopology. The value is used with other unique identifiers to create a MachineDeployment's Name (e.g. cluster's name, etc). In case the name is greater than the allowed maximum length, the values are hashed together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#name DataK8SClusterXK8SIoClusterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * NodeDeletionTimeout defines how long the controller will attempt to delete the Node that the Machine hosts after the Machine is marked for deletion. A duration of 0 will retry deletion indefinitely. Defaults to 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#node_deletion_timeout DataK8SClusterXK8SIoClusterV1Beta1Manifest#node_deletion_timeout}
  */
  readonly nodeDeletionTimeout?: string;
  /**
  * NodeDrainTimeout is the total amount of time that the controller will spend on draining a node. The default value is 0, meaning that the node can be drained without any time limitations. NOTE: NodeDrainTimeout is different from 'kubectl drain --timeout'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#node_drain_timeout DataK8SClusterXK8SIoClusterV1Beta1Manifest#node_drain_timeout}
  */
  readonly nodeDrainTimeout?: string;
  /**
  * NodeVolumeDetachTimeout is the total amount of time that the controller will spend on waiting for all volumes to be detached. The default value is 0, meaning that the volumes can be detached without any time limitations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#node_volume_detach_timeout DataK8SClusterXK8SIoClusterV1Beta1Manifest#node_volume_detach_timeout}
  */
  readonly nodeVolumeDetachTimeout?: string;
  /**
  * Replicas is the number of worker nodes belonging to this set. If the value is nil, the MachineDeployment is created without the number of Replicas (defaulting to 1) and it's assumed that an external entity (like cluster autoscaler) is responsible for the management of this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#replicas DataK8SClusterXK8SIoClusterV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * The deployment strategy to use to replace existing machines with new ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#strategy DataK8SClusterXK8SIoClusterV1Beta1Manifest#strategy}
  */
  readonly strategy?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategy;
  /**
  * Variables can be used to customize the MachineDeployment through patches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#variables DataK8SClusterXK8SIoClusterV1Beta1Manifest#variables}
  */
  readonly variables?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariables;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeployments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    machine_health_check: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckToTerraform(struct!.machineHealthCheck),
    metadata: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMetadataToTerraform(struct!.metadata),
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    name: cdktf.stringToTerraform(struct!.name),
    node_deletion_timeout: cdktf.stringToTerraform(struct!.nodeDeletionTimeout),
    node_drain_timeout: cdktf.stringToTerraform(struct!.nodeDrainTimeout),
    node_volume_detach_timeout: cdktf.stringToTerraform(struct!.nodeVolumeDetachTimeout),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    strategy: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyToTerraform(struct!.strategy),
    variables: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesToTerraform(struct!.variables),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeployments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.failureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_health_check: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckToHclTerraform(struct!.machineHealthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheck",
    },
    metadata: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMetadata",
    },
    min_ready_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minReadySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_deletion_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeDeletionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_drain_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeDrainTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_volume_detach_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeVolumeDetachTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategy",
    },
    variables: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeployments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._failureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomain = this._failureDomain;
    }
    if (this._machineHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineHealthCheck = this._machineHealthCheck?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._minReadySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySeconds = this._minReadySeconds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeDeletionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDeletionTimeout = this._nodeDeletionTimeout;
    }
    if (this._nodeDrainTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDrainTimeout = this._nodeDrainTimeout;
    }
    if (this._nodeVolumeDetachTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeVolumeDetachTimeout = this._nodeVolumeDetachTimeout;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeployments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._failureDomain = undefined;
      this._machineHealthCheck.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._minReadySeconds = undefined;
      this._name = undefined;
      this._nodeDeletionTimeout = undefined;
      this._nodeDrainTimeout = undefined;
      this._nodeVolumeDetachTimeout = undefined;
      this._replicas = undefined;
      this._strategy.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._failureDomain = value.failureDomain;
      this._machineHealthCheck.internalValue = value.machineHealthCheck;
      this._metadata.internalValue = value.metadata;
      this._minReadySeconds = value.minReadySeconds;
      this._name = value.name;
      this._nodeDeletionTimeout = value.nodeDeletionTimeout;
      this._nodeDrainTimeout = value.nodeDrainTimeout;
      this._nodeVolumeDetachTimeout = value.nodeVolumeDetachTimeout;
      this._replicas = value.replicas;
      this._strategy.internalValue = value.strategy;
      this._variables.internalValue = value.variables;
    }
  }

  // class - computed: false, optional: false, required: true
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // failure_domain - computed: false, optional: true, required: false
  private _failureDomain?: string; 
  public get failureDomain() {
    return this.getStringAttribute('failure_domain');
  }
  public set failureDomain(value: string) {
    this._failureDomain = value;
  }
  public resetFailureDomain() {
    this._failureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainInput() {
    return this._failureDomain;
  }

  // machine_health_check - computed: false, optional: true, required: false
  private _machineHealthCheck = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheckOutputReference(this, "machine_health_check");
  public get machineHealthCheck() {
    return this._machineHealthCheck;
  }
  public putMachineHealthCheck(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMachineHealthCheck) {
    this._machineHealthCheck.internalValue = value;
  }
  public resetMachineHealthCheck() {
    this._machineHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineHealthCheckInput() {
    return this._machineHealthCheck.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // min_ready_seconds - computed: false, optional: true, required: false
  private _minReadySeconds?: number; 
  public get minReadySeconds() {
    return this.getNumberAttribute('min_ready_seconds');
  }
  public set minReadySeconds(value: number) {
    this._minReadySeconds = value;
  }
  public resetMinReadySeconds() {
    this._minReadySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadySecondsInput() {
    return this._minReadySeconds;
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

  // node_deletion_timeout - computed: false, optional: true, required: false
  private _nodeDeletionTimeout?: string; 
  public get nodeDeletionTimeout() {
    return this.getStringAttribute('node_deletion_timeout');
  }
  public set nodeDeletionTimeout(value: string) {
    this._nodeDeletionTimeout = value;
  }
  public resetNodeDeletionTimeout() {
    this._nodeDeletionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDeletionTimeoutInput() {
    return this._nodeDeletionTimeout;
  }

  // node_drain_timeout - computed: false, optional: true, required: false
  private _nodeDrainTimeout?: string; 
  public get nodeDrainTimeout() {
    return this.getStringAttribute('node_drain_timeout');
  }
  public set nodeDrainTimeout(value: string) {
    this._nodeDrainTimeout = value;
  }
  public resetNodeDrainTimeout() {
    this._nodeDrainTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDrainTimeoutInput() {
    return this._nodeDrainTimeout;
  }

  // node_volume_detach_timeout - computed: false, optional: true, required: false
  private _nodeVolumeDetachTimeout?: string; 
  public get nodeVolumeDetachTimeout() {
    return this.getStringAttribute('node_volume_detach_timeout');
  }
  public set nodeVolumeDetachTimeout(value: string) {
    this._nodeVolumeDetachTimeout = value;
  }
  public resetNodeVolumeDetachTimeout() {
    this._nodeVolumeDetachTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVolumeDetachTimeoutInput() {
    return this._nodeVolumeDetachTimeout;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsVariables) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeployments[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsOutputReference {
    return new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#annotations DataK8SClusterXK8SIoClusterV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#labels DataK8SClusterXK8SIoClusterV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverrides {
  /**
  * DefinitionFrom specifies where the definition of this Variable is from. Deprecated: This field is deprecated, must not be set anymore and is going to be removed in the next apiVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#definition_from DataK8SClusterXK8SIoClusterV1Beta1Manifest#definition_from}
  */
  readonly definitionFrom?: string;
  /**
  * Name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#name DataK8SClusterXK8SIoClusterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of the variable. Note: the value will be validated against the schema of the corresponding ClusterClassVariable from the ClusterClass. Note: We have to use apiextensionsv1.JSON instead of a custom JSON type, because controller-tools has a hard-coded schema for apiextensionsv1.JSON which cannot be produced by another type via controller-tools, i.e. it is not possible to have no type field. Ref: https://github.com/kubernetes-sigs/controller-tools/blob/d0e03a142d0ecdd5491593e941ee1d6b5d91dba6/pkg/crd/known_types.go#L106-L111
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#value DataK8SClusterXK8SIoClusterV1Beta1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverridesToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition_from: cdktf.stringToTerraform(struct!.definitionFrom),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverridesToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition_from: {
      value: cdktf.stringToHclTerraform(struct!.definitionFrom),
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

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definitionFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitionFrom = this._definitionFrom;
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definitionFrom = undefined;
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
      this._definitionFrom = value.definitionFrom;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // definition_from - computed: false, optional: true, required: false
  private _definitionFrom?: string; 
  public get definitionFrom() {
    return this.getStringAttribute('definition_from');
  }
  public set definitionFrom(value: string) {
    this._definitionFrom = value;
  }
  public resetDefinitionFrom() {
    this._definitionFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionFromInput() {
    return this._definitionFrom;
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

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverridesList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverridesOutputReference {
    return new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariables {
  /**
  * Overrides can be used to override Cluster level variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#overrides DataK8SClusterXK8SIoClusterV1Beta1Manifest#overrides}
  */
  readonly overrides?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverrides[] | cdktf.IResolvable;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overrides: cdktf.listMapper(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverridesToTerraform, false)(struct!.overrides),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overrides: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverridesToHclTerraform, false)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrides.internalValue = value.overrides;
    }
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePools {
  /**
  * Class is the name of the MachinePoolClass used to create the pool of worker nodes. This should match one of the deployment classes defined in the ClusterClass object mentioned in the 'Cluster.Spec.Class' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#class DataK8SClusterXK8SIoClusterV1Beta1Manifest#class}
  */
  readonly class: string;
  /**
  * FailureDomains is the list of failure domains the machine pool will be created in. Must match a key in the FailureDomains map stored on the cluster object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#failure_domains DataK8SClusterXK8SIoClusterV1Beta1Manifest#failure_domains}
  */
  readonly failureDomains?: string[];
  /**
  * Metadata is the metadata applied to the MachinePool. At runtime this metadata is merged with the corresponding metadata from the ClusterClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#metadata DataK8SClusterXK8SIoClusterV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsMetadata;
  /**
  * Minimum number of seconds for which a newly created machine pool should be ready. Defaults to 0 (machine will be considered available as soon as it is ready)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#min_ready_seconds DataK8SClusterXK8SIoClusterV1Beta1Manifest#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * Name is the unique identifier for this MachinePoolTopology. The value is used with other unique identifiers to create a MachinePool's Name (e.g. cluster's name, etc). In case the name is greater than the allowed maximum length, the values are hashed together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#name DataK8SClusterXK8SIoClusterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * NodeDeletionTimeout defines how long the controller will attempt to delete the Node that the MachinePool hosts after the MachinePool is marked for deletion. A duration of 0 will retry deletion indefinitely. Defaults to 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#node_deletion_timeout DataK8SClusterXK8SIoClusterV1Beta1Manifest#node_deletion_timeout}
  */
  readonly nodeDeletionTimeout?: string;
  /**
  * NodeDrainTimeout is the total amount of time that the controller will spend on draining a node. The default value is 0, meaning that the node can be drained without any time limitations. NOTE: NodeDrainTimeout is different from 'kubectl drain --timeout'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#node_drain_timeout DataK8SClusterXK8SIoClusterV1Beta1Manifest#node_drain_timeout}
  */
  readonly nodeDrainTimeout?: string;
  /**
  * NodeVolumeDetachTimeout is the total amount of time that the controller will spend on waiting for all volumes to be detached. The default value is 0, meaning that the volumes can be detached without any time limitations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#node_volume_detach_timeout DataK8SClusterXK8SIoClusterV1Beta1Manifest#node_volume_detach_timeout}
  */
  readonly nodeVolumeDetachTimeout?: string;
  /**
  * Replicas is the number of nodes belonging to this pool. If the value is nil, the MachinePool is created without the number of Replicas (defaulting to 1) and it's assumed that an external entity (like cluster autoscaler) is responsible for the management of this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#replicas DataK8SClusterXK8SIoClusterV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Variables can be used to customize the MachinePool through patches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#variables DataK8SClusterXK8SIoClusterV1Beta1Manifest#variables}
  */
  readonly variables?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariables;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    failure_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failureDomains),
    metadata: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsMetadataToTerraform(struct!.metadata),
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    name: cdktf.stringToTerraform(struct!.name),
    node_deletion_timeout: cdktf.stringToTerraform(struct!.nodeDeletionTimeout),
    node_drain_timeout: cdktf.stringToTerraform(struct!.nodeDrainTimeout),
    node_volume_detach_timeout: cdktf.stringToTerraform(struct!.nodeVolumeDetachTimeout),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    variables: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesToTerraform(struct!.variables),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failureDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsMetadata",
    },
    min_ready_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minReadySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_deletion_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeDeletionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_drain_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeDrainTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_volume_detach_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeVolumeDetachTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    variables: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._failureDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomains = this._failureDomains;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._minReadySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySeconds = this._minReadySeconds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeDeletionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDeletionTimeout = this._nodeDeletionTimeout;
    }
    if (this._nodeDrainTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDrainTimeout = this._nodeDrainTimeout;
    }
    if (this._nodeVolumeDetachTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeVolumeDetachTimeout = this._nodeVolumeDetachTimeout;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._failureDomains = undefined;
      this._metadata.internalValue = undefined;
      this._minReadySeconds = undefined;
      this._name = undefined;
      this._nodeDeletionTimeout = undefined;
      this._nodeDrainTimeout = undefined;
      this._nodeVolumeDetachTimeout = undefined;
      this._replicas = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._failureDomains = value.failureDomains;
      this._metadata.internalValue = value.metadata;
      this._minReadySeconds = value.minReadySeconds;
      this._name = value.name;
      this._nodeDeletionTimeout = value.nodeDeletionTimeout;
      this._nodeDrainTimeout = value.nodeDrainTimeout;
      this._nodeVolumeDetachTimeout = value.nodeVolumeDetachTimeout;
      this._replicas = value.replicas;
      this._variables.internalValue = value.variables;
    }
  }

  // class - computed: false, optional: false, required: true
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // failure_domains - computed: false, optional: true, required: false
  private _failureDomains?: string[]; 
  public get failureDomains() {
    return this.getListAttribute('failure_domains');
  }
  public set failureDomains(value: string[]) {
    this._failureDomains = value;
  }
  public resetFailureDomains() {
    this._failureDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainsInput() {
    return this._failureDomains;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // min_ready_seconds - computed: false, optional: true, required: false
  private _minReadySeconds?: number; 
  public get minReadySeconds() {
    return this.getNumberAttribute('min_ready_seconds');
  }
  public set minReadySeconds(value: number) {
    this._minReadySeconds = value;
  }
  public resetMinReadySeconds() {
    this._minReadySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadySecondsInput() {
    return this._minReadySeconds;
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

  // node_deletion_timeout - computed: false, optional: true, required: false
  private _nodeDeletionTimeout?: string; 
  public get nodeDeletionTimeout() {
    return this.getStringAttribute('node_deletion_timeout');
  }
  public set nodeDeletionTimeout(value: string) {
    this._nodeDeletionTimeout = value;
  }
  public resetNodeDeletionTimeout() {
    this._nodeDeletionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDeletionTimeoutInput() {
    return this._nodeDeletionTimeout;
  }

  // node_drain_timeout - computed: false, optional: true, required: false
  private _nodeDrainTimeout?: string; 
  public get nodeDrainTimeout() {
    return this.getStringAttribute('node_drain_timeout');
  }
  public set nodeDrainTimeout(value: string) {
    this._nodeDrainTimeout = value;
  }
  public resetNodeDrainTimeout() {
    this._nodeDrainTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDrainTimeoutInput() {
    return this._nodeDrainTimeout;
  }

  // node_volume_detach_timeout - computed: false, optional: true, required: false
  private _nodeVolumeDetachTimeout?: string; 
  public get nodeVolumeDetachTimeout() {
    return this.getStringAttribute('node_volume_detach_timeout');
  }
  public set nodeVolumeDetachTimeout(value: string) {
    this._nodeVolumeDetachTimeout = value;
  }
  public resetNodeVolumeDetachTimeout() {
    this._nodeVolumeDetachTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVolumeDetachTimeoutInput() {
    return this._nodeVolumeDetachTimeout;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsVariables) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePools[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsOutputReference {
    return new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkers {
  /**
  * MachineDeployments is a list of machine deployments in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#machine_deployments DataK8SClusterXK8SIoClusterV1Beta1Manifest#machine_deployments}
  */
  readonly machineDeployments?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeployments[] | cdktf.IResolvable;
  /**
  * MachinePools is a list of machine pools in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#machine_pools DataK8SClusterXK8SIoClusterV1Beta1Manifest#machine_pools}
  */
  readonly machinePools?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePools[] | cdktf.IResolvable;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_deployments: cdktf.listMapper(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsToTerraform, false)(struct!.machineDeployments),
    machine_pools: cdktf.listMapper(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsToTerraform, false)(struct!.machinePools),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_deployments: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsToHclTerraform, false)(struct!.machineDeployments),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsList",
    },
    machine_pools: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsToHclTerraform, false)(struct!.machinePools),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineDeployments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineDeployments = this._machineDeployments?.internalValue;
    }
    if (this._machinePools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machinePools = this._machinePools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineDeployments.internalValue = undefined;
      this._machinePools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineDeployments.internalValue = value.machineDeployments;
      this._machinePools.internalValue = value.machinePools;
    }
  }

  // machine_deployments - computed: false, optional: true, required: false
  private _machineDeployments = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeploymentsList(this, "machine_deployments", false);
  public get machineDeployments() {
    return this._machineDeployments;
  }
  public putMachineDeployments(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachineDeployments[] | cdktf.IResolvable) {
    this._machineDeployments.internalValue = value;
  }
  public resetMachineDeployments() {
    this._machineDeployments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineDeploymentsInput() {
    return this._machineDeployments.internalValue;
  }

  // machine_pools - computed: false, optional: true, required: false
  private _machinePools = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePoolsList(this, "machine_pools", false);
  public get machinePools() {
    return this._machinePools;
  }
  public putMachinePools(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersMachinePools[] | cdktf.IResolvable) {
    this._machinePools.internalValue = value;
  }
  public resetMachinePools() {
    this._machinePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePoolsInput() {
    return this._machinePools.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopology {
  /**
  * The name of the ClusterClass object to create the topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#class DataK8SClusterXK8SIoClusterV1Beta1Manifest#class}
  */
  readonly class: string;
  /**
  * ControlPlane describes the cluster control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#control_plane DataK8SClusterXK8SIoClusterV1Beta1Manifest#control_plane}
  */
  readonly controlPlane?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlane;
  /**
  * RolloutAfter performs a rollout of the entire cluster one component at a time, control plane first and then machine deployments. Deprecated: This field has no function and is going to be removed in the next apiVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#rollout_after DataK8SClusterXK8SIoClusterV1Beta1Manifest#rollout_after}
  */
  readonly rolloutAfter?: string;
  /**
  * Variables can be used to customize the Cluster through patches. They must comply to the corresponding VariableClasses defined in the ClusterClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#variables DataK8SClusterXK8SIoClusterV1Beta1Manifest#variables}
  */
  readonly variables?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariables[] | cdktf.IResolvable;
  /**
  * The Kubernetes version of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#version DataK8SClusterXK8SIoClusterV1Beta1Manifest#version}
  */
  readonly version: string;
  /**
  * Workers encapsulates the different constructs that form the worker nodes for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#workers DataK8SClusterXK8SIoClusterV1Beta1Manifest#workers}
  */
  readonly workers?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkers;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    control_plane: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneToTerraform(struct!.controlPlane),
    rollout_after: cdktf.stringToTerraform(struct!.rolloutAfter),
    variables: cdktf.listMapper(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariablesToTerraform, false)(struct!.variables),
    version: cdktf.stringToTerraform(struct!.version),
    workers: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersToTerraform(struct!.workers),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneToHclTerraform(struct!.controlPlane),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlane",
    },
    rollout_after: {
      value: cdktf.stringToHclTerraform(struct!.rolloutAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariablesToHclTerraform, false)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariablesList",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workers: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersToHclTerraform(struct!.workers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._controlPlane?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane?.internalValue;
    }
    if (this._rolloutAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutAfter = this._rolloutAfter;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._workers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workers = this._workers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._controlPlane.internalValue = undefined;
      this._rolloutAfter = undefined;
      this._variables.internalValue = undefined;
      this._version = undefined;
      this._workers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._controlPlane.internalValue = value.controlPlane;
      this._rolloutAfter = value.rolloutAfter;
      this._variables.internalValue = value.variables;
      this._version = value.version;
      this._workers.internalValue = value.workers;
    }
  }

  // class - computed: false, optional: false, required: true
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // control_plane - computed: false, optional: true, required: false
  private _controlPlane = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyControlPlane) {
    this._controlPlane.internalValue = value;
  }
  public resetControlPlane() {
    this._controlPlane.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // rollout_after - computed: false, optional: true, required: false
  private _rolloutAfter?: string; 
  public get rolloutAfter() {
    return this.getStringAttribute('rollout_after');
  }
  public set rolloutAfter(value: string) {
    this._rolloutAfter = value;
  }
  public resetRolloutAfter() {
    this._rolloutAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutAfterInput() {
    return this._rolloutAfter;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
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

  // workers - computed: false, optional: true, required: false
  private _workers = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkersOutputReference(this, "workers");
  public get workers() {
    return this._workers;
  }
  public putWorkers(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyWorkers) {
    this._workers.internalValue = value;
  }
  public resetWorkers() {
    this._workers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workersInput() {
    return this._workers.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Beta1ManifestSpec {
  /**
  * availabilityGates specifies additional conditions to include when evaluating Cluster Available condition. NOTE: this field is considered only for computing v1beta2 conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#availability_gates DataK8SClusterXK8SIoClusterV1Beta1Manifest#availability_gates}
  */
  readonly availabilityGates?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGates[] | cdktf.IResolvable;
  /**
  * Cluster network configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#cluster_network DataK8SClusterXK8SIoClusterV1Beta1Manifest#cluster_network}
  */
  readonly clusterNetwork?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetwork;
  /**
  * ControlPlaneEndpoint represents the endpoint used to communicate with the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#control_plane_endpoint DataK8SClusterXK8SIoClusterV1Beta1Manifest#control_plane_endpoint}
  */
  readonly controlPlaneEndpoint?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneEndpoint;
  /**
  * ControlPlaneRef is an optional reference to a provider-specific resource that holds the details for provisioning the Control Plane for a Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#control_plane_ref DataK8SClusterXK8SIoClusterV1Beta1Manifest#control_plane_ref}
  */
  readonly controlPlaneRef?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneRef;
  /**
  * InfrastructureRef is a reference to a provider-specific resource that holds the details for provisioning infrastructure for a cluster in said provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#infrastructure_ref DataK8SClusterXK8SIoClusterV1Beta1Manifest#infrastructure_ref}
  */
  readonly infrastructureRef?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecInfrastructureRef;
  /**
  * Paused can be used to prevent controllers from processing the Cluster and all its associated objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#paused DataK8SClusterXK8SIoClusterV1Beta1Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * This encapsulates the topology for the cluster. NOTE: It is required to enable the ClusterTopology feature gate flag to activate managed topologies support; this feature is highly experimental, and parts of it might still be not implemented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#topology DataK8SClusterXK8SIoClusterV1Beta1Manifest#topology}
  */
  readonly topology?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopology;
}

export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_gates: cdktf.listMapper(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGatesToTerraform, false)(struct!.availabilityGates),
    cluster_network: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkToTerraform(struct!.clusterNetwork),
    control_plane_endpoint: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneEndpointToTerraform(struct!.controlPlaneEndpoint),
    control_plane_ref: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneRefToTerraform(struct!.controlPlaneRef),
    infrastructure_ref: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecInfrastructureRefToTerraform(struct!.infrastructureRef),
    paused: cdktf.booleanToTerraform(struct!.paused),
    topology: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyToTerraform(struct!.topology),
  }
}


export function dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_gates: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGatesToHclTerraform, false)(struct!.availabilityGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGatesList",
    },
    cluster_network: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkToHclTerraform(struct!.clusterNetwork),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetwork",
    },
    control_plane_endpoint: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneEndpointToHclTerraform(struct!.controlPlaneEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneEndpoint",
    },
    control_plane_ref: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneRefToHclTerraform(struct!.controlPlaneRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneRef",
    },
    infrastructure_ref: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecInfrastructureRefToHclTerraform(struct!.infrastructureRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecInfrastructureRef",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    topology: {
      value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyToHclTerraform(struct!.topology),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopology",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityGates = this._availabilityGates?.internalValue;
    }
    if (this._clusterNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNetwork = this._clusterNetwork?.internalValue;
    }
    if (this._controlPlaneEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneEndpoint = this._controlPlaneEndpoint?.internalValue;
    }
    if (this._controlPlaneRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneRef = this._controlPlaneRef?.internalValue;
    }
    if (this._infrastructureRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureRef = this._infrastructureRef?.internalValue;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityGates.internalValue = undefined;
      this._clusterNetwork.internalValue = undefined;
      this._controlPlaneEndpoint.internalValue = undefined;
      this._controlPlaneRef.internalValue = undefined;
      this._infrastructureRef.internalValue = undefined;
      this._paused = undefined;
      this._topology.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityGates.internalValue = value.availabilityGates;
      this._clusterNetwork.internalValue = value.clusterNetwork;
      this._controlPlaneEndpoint.internalValue = value.controlPlaneEndpoint;
      this._controlPlaneRef.internalValue = value.controlPlaneRef;
      this._infrastructureRef.internalValue = value.infrastructureRef;
      this._paused = value.paused;
      this._topology.internalValue = value.topology;
    }
  }

  // availability_gates - computed: false, optional: true, required: false
  private _availabilityGates = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGatesList(this, "availability_gates", false);
  public get availabilityGates() {
    return this._availabilityGates;
  }
  public putAvailabilityGates(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecAvailabilityGates[] | cdktf.IResolvable) {
    this._availabilityGates.internalValue = value;
  }
  public resetAvailabilityGates() {
    this._availabilityGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityGatesInput() {
    return this._availabilityGates.internalValue;
  }

  // cluster_network - computed: false, optional: true, required: false
  private _clusterNetwork = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetworkOutputReference(this, "cluster_network");
  public get clusterNetwork() {
    return this._clusterNetwork;
  }
  public putClusterNetwork(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecClusterNetwork) {
    this._clusterNetwork.internalValue = value;
  }
  public resetClusterNetwork() {
    this._clusterNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNetworkInput() {
    return this._clusterNetwork.internalValue;
  }

  // control_plane_endpoint - computed: false, optional: true, required: false
  private _controlPlaneEndpoint = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneEndpointOutputReference(this, "control_plane_endpoint");
  public get controlPlaneEndpoint() {
    return this._controlPlaneEndpoint;
  }
  public putControlPlaneEndpoint(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneEndpoint) {
    this._controlPlaneEndpoint.internalValue = value;
  }
  public resetControlPlaneEndpoint() {
    this._controlPlaneEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEndpointInput() {
    return this._controlPlaneEndpoint.internalValue;
  }

  // control_plane_ref - computed: false, optional: true, required: false
  private _controlPlaneRef = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneRefOutputReference(this, "control_plane_ref");
  public get controlPlaneRef() {
    return this._controlPlaneRef;
  }
  public putControlPlaneRef(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecControlPlaneRef) {
    this._controlPlaneRef.internalValue = value;
  }
  public resetControlPlaneRef() {
    this._controlPlaneRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneRefInput() {
    return this._controlPlaneRef.internalValue;
  }

  // infrastructure_ref - computed: false, optional: true, required: false
  private _infrastructureRef = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecInfrastructureRefOutputReference(this, "infrastructure_ref");
  public get infrastructureRef() {
    return this._infrastructureRef;
  }
  public putInfrastructureRef(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecInfrastructureRef) {
    this._infrastructureRef.internalValue = value;
  }
  public resetInfrastructureRef() {
    this._infrastructureRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureRefInput() {
    return this._infrastructureRef.internalValue;
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

  // topology - computed: false, optional: true, required: false
  private _topology = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopologyOutputReference(this, "topology");
  public get topology() {
    return this._topology;
  }
  public putTopology(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecTopology) {
    this._topology.internalValue = value;
  }
  public resetTopology() {
    this._topology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest k8s_cluster_x_k8s_io_cluster_v1beta1_manifest}
*/
export class DataK8SClusterXK8SIoClusterV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cluster_x_k8s_io_cluster_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClusterXK8SIoClusterV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClusterXK8SIoClusterV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SClusterXK8SIoClusterV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClusterXK8SIoClusterV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cluster_x_k8s_io_cluster_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_v1beta1_manifest k8s_cluster_x_k8s_io_cluster_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClusterXK8SIoClusterV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClusterXK8SIoClusterV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cluster_x_k8s_io_cluster_v1beta1_manifest',
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
  private _metadata = new DataK8SClusterXK8SIoClusterV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SClusterXK8SIoClusterV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClusterXK8SIoClusterV1Beta1ManifestSpec) {
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
      metadata: dataK8SClusterXK8SIoClusterV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClusterXK8SIoClusterV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SClusterXK8SIoClusterV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterXK8SIoClusterV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
