// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest#metadata DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest#spec DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpec;
}
export interface DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest#annotations DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest#labels DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest#name DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest#namespace DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest#gateway_ip DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest#gateway_ip}
  */
  readonly gatewayIp?: string;
}

export function dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfosToTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
  }
}


export function dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfosToHclTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewayIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewayIp = value.gatewayIp;
    }
  }

  // gateway_ip - computed: false, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }
}

export class DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfosList extends cdktf.ComplexList {
  public internalValue? : DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfos[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfosOutputReference {
    return new DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecWireGuard {
  /**
  * Public key of the WireGuard tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest#public_key DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest#public_key}
  */
  readonly publicKey?: string;
}

export function dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecWireGuardToTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecWireGuard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}


export function dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecWireGuardToHclTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecWireGuard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecWireGuardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecWireGuard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecWireGuard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publicKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publicKey = value.publicKey;
    }
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }
}
export interface DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpec {
  /**
  * ClusterID of the member cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest#cluster_id DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * GatewayInfos has information of Gateways
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest#gateway_infos DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest#gateway_infos}
  */
  readonly gatewayInfos?: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfos[] | cdktf.IResolvable;
  /**
  * PodCIDRs is the Pod IP address CIDRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest#pod_cidrs DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest#pod_cidrs}
  */
  readonly podCidrs?: string[];
  /**
  * ServiceCIDR is the IP ranges used by Service ClusterIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest#service_cidr DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * WireGuardInfo includes information of a WireGuard tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest#wire_guard DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest#wire_guard}
  */
  readonly wireGuard?: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecWireGuard;
}

export function dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    gateway_infos: cdktf.listMapper(dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfosToTerraform, false)(struct!.gatewayInfos),
    pod_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podCidrs),
    service_cidr: cdktf.stringToTerraform(struct!.serviceCidr),
    wire_guard: dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecWireGuardToTerraform(struct!.wireGuard),
  }
}


export function dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_infos: {
      value: cdktf.listMapperHcl(dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfosToHclTerraform, false)(struct!.gatewayInfos),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfosList",
    },
    pod_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_cidr: {
      value: cdktf.stringToHclTerraform(struct!.serviceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wire_guard: {
      value: dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecWireGuardToHclTerraform(struct!.wireGuard),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecWireGuard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._gatewayInfos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayInfos = this._gatewayInfos?.internalValue;
    }
    if (this._podCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrs = this._podCidrs;
    }
    if (this._serviceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCidr = this._serviceCidr;
    }
    if (this._wireGuard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wireGuard = this._wireGuard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._gatewayInfos.internalValue = undefined;
      this._podCidrs = undefined;
      this._serviceCidr = undefined;
      this._wireGuard.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._gatewayInfos.internalValue = value.gatewayInfos;
      this._podCidrs = value.podCidrs;
      this._serviceCidr = value.serviceCidr;
      this._wireGuard.internalValue = value.wireGuard;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // gateway_infos - computed: false, optional: true, required: false
  private _gatewayInfos = new DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfosList(this, "gateway_infos", false);
  public get gatewayInfos() {
    return this._gatewayInfos;
  }
  public putGatewayInfos(value: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecGatewayInfos[] | cdktf.IResolvable) {
    this._gatewayInfos.internalValue = value;
  }
  public resetGatewayInfos() {
    this._gatewayInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInfosInput() {
    return this._gatewayInfos.internalValue;
  }

  // pod_cidrs - computed: false, optional: true, required: false
  private _podCidrs?: string[]; 
  public get podCidrs() {
    return this.getListAttribute('pod_cidrs');
  }
  public set podCidrs(value: string[]) {
    this._podCidrs = value;
  }
  public resetPodCidrs() {
    this._podCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrsInput() {
    return this._podCidrs;
  }

  // service_cidr - computed: false, optional: true, required: false
  private _serviceCidr?: string; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string) {
    this._serviceCidr = value;
  }
  public resetServiceCidr() {
    this._serviceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }

  // wire_guard - computed: false, optional: true, required: false
  private _wireGuard = new DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecWireGuardOutputReference(this, "wire_guard");
  public get wireGuard() {
    return this._wireGuard;
  }
  public putWireGuard(value: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecWireGuard) {
    this._wireGuard.internalValue = value;
  }
  public resetWireGuard() {
    this._wireGuard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wireGuardInput() {
    return this._wireGuard.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest k8s_multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest}
*/
export class DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest k8s_multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_multicluster_crd_antrea_io_cluster_info_import_v1alpha1_manifest',
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
  private _metadata = new DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpec) {
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
      metadata: dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMulticlusterCrdAntreaIoClusterInfoImportV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
