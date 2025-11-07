// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/cse_kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdCseKubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique ID of the Kubernetes cluster to read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/cse_kubernetes_cluster#cluster_id DataVcdCseKubernetesCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The CSE version used by the cluster, only required if 'name' is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/cse_kubernetes_cluster#cse_version DataVcdCseKubernetesCluster#cse_version}
  */
  readonly cseVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/cse_kubernetes_cluster#id DataVcdCseKubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Kubernetes cluster to read. If there is more than one Kubernetes cluster with the same name, searching by name will fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/cse_kubernetes_cluster#name DataVcdCseKubernetesCluster#name}
  */
  readonly name?: string;
  /**
  * The ID of organization that owns the Kubernetes cluster, only required if 'name' is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/cse_kubernetes_cluster#org_id DataVcdCseKubernetesCluster#org_id}
  */
  readonly orgId?: string;
}
export interface DataVcdCseKubernetesClusterControlPlane {
}

export function dataVcdCseKubernetesClusterControlPlaneToTerraform(struct?: DataVcdCseKubernetesClusterControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdCseKubernetesClusterControlPlaneToHclTerraform(struct?: DataVcdCseKubernetesClusterControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdCseKubernetesClusterControlPlaneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdCseKubernetesClusterControlPlane | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdCseKubernetesClusterControlPlane | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_size_gi - computed: true, optional: false, required: false
  public get diskSizeGi() {
    return this.getNumberAttribute('disk_size_gi');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // machine_count - computed: true, optional: false, required: false
  public get machineCount() {
    return this.getNumberAttribute('machine_count');
  }

  // placement_policy_id - computed: true, optional: false, required: false
  public get placementPolicyId() {
    return this.getStringAttribute('placement_policy_id');
  }

  // sizing_policy_id - computed: true, optional: false, required: false
  public get sizingPolicyId() {
    return this.getStringAttribute('sizing_policy_id');
  }

  // storage_profile_id - computed: true, optional: false, required: false
  public get storageProfileId() {
    return this.getStringAttribute('storage_profile_id');
  }
}

export class DataVcdCseKubernetesClusterControlPlaneList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdCseKubernetesClusterControlPlaneOutputReference {
    return new DataVcdCseKubernetesClusterControlPlaneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdCseKubernetesClusterDefaultStorageClass {
}

export function dataVcdCseKubernetesClusterDefaultStorageClassToTerraform(struct?: DataVcdCseKubernetesClusterDefaultStorageClass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdCseKubernetesClusterDefaultStorageClassToHclTerraform(struct?: DataVcdCseKubernetesClusterDefaultStorageClass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdCseKubernetesClusterDefaultStorageClassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdCseKubernetesClusterDefaultStorageClass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdCseKubernetesClusterDefaultStorageClass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filesystem - computed: true, optional: false, required: false
  public get filesystem() {
    return this.getStringAttribute('filesystem');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reclaim_policy - computed: true, optional: false, required: false
  public get reclaimPolicy() {
    return this.getStringAttribute('reclaim_policy');
  }

  // storage_profile_id - computed: true, optional: false, required: false
  public get storageProfileId() {
    return this.getStringAttribute('storage_profile_id');
  }
}

export class DataVcdCseKubernetesClusterDefaultStorageClassList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdCseKubernetesClusterDefaultStorageClassOutputReference {
    return new DataVcdCseKubernetesClusterDefaultStorageClassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdCseKubernetesClusterEvents {
}

export function dataVcdCseKubernetesClusterEventsToTerraform(struct?: DataVcdCseKubernetesClusterEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdCseKubernetesClusterEventsToHclTerraform(struct?: DataVcdCseKubernetesClusterEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdCseKubernetesClusterEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdCseKubernetesClusterEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdCseKubernetesClusterEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // occurred_at - computed: true, optional: false, required: false
  public get occurredAt() {
    return this.getStringAttribute('occurred_at');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataVcdCseKubernetesClusterEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdCseKubernetesClusterEventsOutputReference {
    return new DataVcdCseKubernetesClusterEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdCseKubernetesClusterWorkerPool {
}

export function dataVcdCseKubernetesClusterWorkerPoolToTerraform(struct?: DataVcdCseKubernetesClusterWorkerPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdCseKubernetesClusterWorkerPoolToHclTerraform(struct?: DataVcdCseKubernetesClusterWorkerPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdCseKubernetesClusterWorkerPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdCseKubernetesClusterWorkerPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdCseKubernetesClusterWorkerPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaler_max_replicas - computed: true, optional: false, required: false
  public get autoscalerMaxReplicas() {
    return this.getNumberAttribute('autoscaler_max_replicas');
  }

  // autoscaler_min_replicas - computed: true, optional: false, required: false
  public get autoscalerMinReplicas() {
    return this.getNumberAttribute('autoscaler_min_replicas');
  }

  // disk_size_gi - computed: true, optional: false, required: false
  public get diskSizeGi() {
    return this.getNumberAttribute('disk_size_gi');
  }

  // machine_count - computed: true, optional: false, required: false
  public get machineCount() {
    return this.getNumberAttribute('machine_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // placement_policy_id - computed: true, optional: false, required: false
  public get placementPolicyId() {
    return this.getStringAttribute('placement_policy_id');
  }

  // sizing_policy_id - computed: true, optional: false, required: false
  public get sizingPolicyId() {
    return this.getStringAttribute('sizing_policy_id');
  }

  // storage_profile_id - computed: true, optional: false, required: false
  public get storageProfileId() {
    return this.getStringAttribute('storage_profile_id');
  }

  // vgpu_policy_id - computed: true, optional: false, required: false
  public get vgpuPolicyId() {
    return this.getStringAttribute('vgpu_policy_id');
  }
}

export class DataVcdCseKubernetesClusterWorkerPoolList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdCseKubernetesClusterWorkerPoolOutputReference {
    return new DataVcdCseKubernetesClusterWorkerPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/cse_kubernetes_cluster vcd_cse_kubernetes_cluster}
*/
export class DataVcdCseKubernetesCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_cse_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdCseKubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdCseKubernetesCluster to import
  * @param importFromId The id of the existing DataVcdCseKubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/cse_kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdCseKubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_cse_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/cse_kubernetes_cluster vcd_cse_kubernetes_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdCseKubernetesClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVcdCseKubernetesClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vcd_cse_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
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
    this._cseVersion = config.cseVersion;
    this._id = config.id;
    this._name = config.name;
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_repair_on_errors - computed: true, optional: false, required: false
  public get autoRepairOnErrors() {
    return this.getBooleanAttribute('auto_repair_on_errors');
  }

  // capvcd_version - computed: true, optional: false, required: false
  public get capvcdVersion() {
    return this.getStringAttribute('capvcd_version');
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

  // cluster_resource_set_bindings - computed: true, optional: false, required: false
  public get clusterResourceSetBindings() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_resource_set_bindings'));
  }

  // control_plane - computed: true, optional: false, required: false
  private _controlPlane = new DataVcdCseKubernetesClusterControlPlaneList(this, "control_plane", false);
  public get controlPlane() {
    return this._controlPlane;
  }

  // cpi_version - computed: true, optional: false, required: false
  public get cpiVersion() {
    return this.getStringAttribute('cpi_version');
  }

  // cse_version - computed: false, optional: true, required: false
  private _cseVersion?: string; 
  public get cseVersion() {
    return this.getStringAttribute('cse_version');
  }
  public set cseVersion(value: string) {
    this._cseVersion = value;
  }
  public resetCseVersion() {
    this._cseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cseVersionInput() {
    return this._cseVersion;
  }

  // csi_version - computed: true, optional: false, required: false
  public get csiVersion() {
    return this.getStringAttribute('csi_version');
  }

  // default_storage_class - computed: true, optional: false, required: false
  private _defaultStorageClass = new DataVcdCseKubernetesClusterDefaultStorageClassList(this, "default_storage_class", false);
  public get defaultStorageClass() {
    return this._defaultStorageClass;
  }

  // events - computed: true, optional: false, required: false
  private _events = new DataVcdCseKubernetesClusterEventsList(this, "events", false);
  public get events() {
    return this._events;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }

  // kubernetes_template_id - computed: true, optional: false, required: false
  public get kubernetesTemplateId() {
    return this.getStringAttribute('kubernetes_template_id');
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
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

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // node_health_check - computed: true, optional: false, required: false
  public get nodeHealthCheck() {
    return this.getBooleanAttribute('node_health_check');
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // pods_cidr - computed: true, optional: false, required: false
  public get podsCidr() {
    return this.getStringAttribute('pods_cidr');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // services_cidr - computed: true, optional: false, required: false
  public get servicesCidr() {
    return this.getStringAttribute('services_cidr');
  }

  // ssh_public_key - computed: true, optional: false, required: false
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // supported_upgrades - computed: true, optional: false, required: false
  public get supportedUpgrades() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_upgrades'));
  }

  // tkg_product_version - computed: true, optional: false, required: false
  public get tkgProductVersion() {
    return this.getStringAttribute('tkg_product_version');
  }

  // vdc_id - computed: true, optional: false, required: false
  public get vdcId() {
    return this.getStringAttribute('vdc_id');
  }

  // virtual_ip_subnet - computed: true, optional: false, required: false
  public get virtualIpSubnet() {
    return this.getStringAttribute('virtual_ip_subnet');
  }

  // worker_pool - computed: true, optional: false, required: false
  private _workerPool = new DataVcdCseKubernetesClusterWorkerPoolList(this, "worker_pool", false);
  public get workerPool() {
    return this._workerPool;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cse_version: cdktf.stringToTerraform(this._cseVersion),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
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
      cse_version: {
        value: cdktf.stringToHclTerraform(this._cseVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
