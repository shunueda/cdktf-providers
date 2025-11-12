// https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/data-sources/kubernetes_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMgcKubernetesNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/data-sources/kubernetes_node#cluster_id DataMgcKubernetesNode#cluster_id}
  */
  readonly clusterId: string;
  /**
  * ID of the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/data-sources/kubernetes_node#nodepool_id DataMgcKubernetesNode#nodepool_id}
  */
  readonly nodepoolId: string;
}
export interface DataMgcKubernetesNodeNodesAddresses {
}

export function dataMgcKubernetesNodeNodesAddressesToTerraform(struct?: DataMgcKubernetesNodeNodesAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMgcKubernetesNodeNodesAddressesToHclTerraform(struct?: DataMgcKubernetesNodeNodesAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMgcKubernetesNodeNodesAddressesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMgcKubernetesNodeNodesAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMgcKubernetesNodeNodesAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMgcKubernetesNodeNodesAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataMgcKubernetesNodeNodesAddressesOutputReference {
    return new DataMgcKubernetesNodeNodesAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMgcKubernetesNodeNodesTaints {
}

export function dataMgcKubernetesNodeNodesTaintsToTerraform(struct?: DataMgcKubernetesNodeNodesTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMgcKubernetesNodeNodesTaintsToHclTerraform(struct?: DataMgcKubernetesNodeNodesTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMgcKubernetesNodeNodesTaintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMgcKubernetesNodeNodesTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMgcKubernetesNodeNodesTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataMgcKubernetesNodeNodesTaintsList extends cdktf.ComplexList {

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
  public get(index: number): DataMgcKubernetesNodeNodesTaintsOutputReference {
    return new DataMgcKubernetesNodeNodesTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMgcKubernetesNodeNodes {
}

export function dataMgcKubernetesNodeNodesToTerraform(struct?: DataMgcKubernetesNodeNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMgcKubernetesNodeNodesToHclTerraform(struct?: DataMgcKubernetesNodeNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMgcKubernetesNodeNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMgcKubernetesNodeNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMgcKubernetesNodeNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addresses - computed: true, optional: false, required: false
  private _addresses = new DataMgcKubernetesNodeNodesAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }

  // allocatable_cpu - computed: true, optional: false, required: false
  public get allocatableCpu() {
    return this.getStringAttribute('allocatable_cpu');
  }

  // allocatable_ephemeral_storage - computed: true, optional: false, required: false
  public get allocatableEphemeralStorage() {
    return this.getStringAttribute('allocatable_ephemeral_storage');
  }

  // allocatable_hugepages_1gi - computed: true, optional: false, required: false
  public get allocatableHugepages1Gi() {
    return this.getStringAttribute('allocatable_hugepages_1gi');
  }

  // allocatable_hugepages_2mi - computed: true, optional: false, required: false
  public get allocatableHugepages2Mi() {
    return this.getStringAttribute('allocatable_hugepages_2mi');
  }

  // allocatable_memory - computed: true, optional: false, required: false
  public get allocatableMemory() {
    return this.getStringAttribute('allocatable_memory');
  }

  // allocatable_pods - computed: true, optional: false, required: false
  public get allocatablePods() {
    return this.getStringAttribute('allocatable_pods');
  }

  // capacity_cpu - computed: true, optional: false, required: false
  public get capacityCpu() {
    return this.getStringAttribute('capacity_cpu');
  }

  // capacity_ephemeral_storage - computed: true, optional: false, required: false
  public get capacityEphemeralStorage() {
    return this.getStringAttribute('capacity_ephemeral_storage');
  }

  // capacity_hugepages_1gi - computed: true, optional: false, required: false
  public get capacityHugepages1Gi() {
    return this.getStringAttribute('capacity_hugepages_1gi');
  }

  // capacity_hugepages_2mi - computed: true, optional: false, required: false
  public get capacityHugepages2Mi() {
    return this.getStringAttribute('capacity_hugepages_2mi');
  }

  // capacity_memory - computed: true, optional: false, required: false
  public get capacityMemory() {
    return this.getStringAttribute('capacity_memory');
  }

  // capacity_pods - computed: true, optional: false, required: false
  public get capacityPods() {
    return this.getStringAttribute('capacity_pods');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // flavor - computed: true, optional: false, required: false
  public get flavor() {
    return this.getStringAttribute('flavor');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infrastructure_architecture - computed: true, optional: false, required: false
  public get infrastructureArchitecture() {
    return this.getStringAttribute('infrastructure_architecture');
  }

  // infrastructure_container_runtime - computed: true, optional: false, required: false
  public get infrastructureContainerRuntime() {
    return this.getStringAttribute('infrastructure_container_runtime');
  }

  // infrastructure_kernel_version - computed: true, optional: false, required: false
  public get infrastructureKernelVersion() {
    return this.getStringAttribute('infrastructure_kernel_version');
  }

  // infrastructure_kube_proxy_version - computed: true, optional: false, required: false
  public get infrastructureKubeProxyVersion() {
    return this.getStringAttribute('infrastructure_kube_proxy_version');
  }

  // infrastructure_kubelet_version - computed: true, optional: false, required: false
  public get infrastructureKubeletVersion() {
    return this.getStringAttribute('infrastructure_kubelet_version');
  }

  // infrastructure_operating_system - computed: true, optional: false, required: false
  public get infrastructureOperatingSystem() {
    return this.getStringAttribute('infrastructure_operating_system');
  }

  // infrastructure_os_image - computed: true, optional: false, required: false
  public get infrastructureOsImage() {
    return this.getStringAttribute('infrastructure_os_image');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // nodepool_name - computed: true, optional: false, required: false
  public get nodepoolName() {
    return this.getStringAttribute('nodepool_name');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // status_state - computed: true, optional: false, required: false
  public get statusState() {
    return this.getStringAttribute('status_state');
  }

  // taints - computed: true, optional: false, required: false
  private _taints = new DataMgcKubernetesNodeNodesTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
}

export class DataMgcKubernetesNodeNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataMgcKubernetesNodeNodesOutputReference {
    return new DataMgcKubernetesNodeNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/data-sources/kubernetes_node mgc_kubernetes_node}
*/
export class DataMgcKubernetesNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_kubernetes_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMgcKubernetesNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMgcKubernetesNode to import
  * @param importFromId The id of the existing DataMgcKubernetesNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/data-sources/kubernetes_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMgcKubernetesNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_kubernetes_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/data-sources/kubernetes_node mgc_kubernetes_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMgcKubernetesNodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataMgcKubernetesNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_kubernetes_node',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.40.0',
        providerVersionConstraint: '0.40.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._nodepoolId = config.nodepoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // nodepool_id - computed: false, optional: false, required: true
  private _nodepoolId?: string; 
  public get nodepoolId() {
    return this.getStringAttribute('nodepool_id');
  }
  public set nodepoolId(value: string) {
    this._nodepoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodepoolIdInput() {
    return this._nodepoolId;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataMgcKubernetesNodeNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      nodepool_id: cdktf.stringToTerraform(this._nodepoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodepool_id: {
        value: cdktf.stringToHclTerraform(this._nodepoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
