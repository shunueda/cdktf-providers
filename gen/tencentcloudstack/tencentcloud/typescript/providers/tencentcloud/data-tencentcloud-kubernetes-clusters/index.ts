// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/kubernetes_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudKubernetesClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster. Conflict with cluster_name, can not be set at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/kubernetes_clusters#cluster_id DataTencentcloudKubernetesClusters#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Name of the cluster. Conflict with cluster_id, can not be set at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/kubernetes_clusters#cluster_name DataTencentcloudKubernetesClusters#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/kubernetes_clusters#id DataTencentcloudKubernetesClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path prefix of kube config. You can store KubeConfig in a specified directory by specifying this field, such as ~/.kube/k8s, then public network access will use ~/.kube/k8s-clusterID-kubeconfig naming, and intranet access will use ~/.kube /k8s-clusterID-kubeconfig-intranet naming. If this field is not set, the KubeConfig will not be exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/kubernetes_clusters#kube_config_file_prefix DataTencentcloudKubernetesClusters#kube_config_file_prefix}
  */
  readonly kubeConfigFilePrefix?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/kubernetes_clusters#result_output_file DataTencentcloudKubernetesClusters#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Tags of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/kubernetes_clusters#tags DataTencentcloudKubernetesClusters#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataTencentcloudKubernetesClustersListClusterExtraArgs {
}

export function dataTencentcloudKubernetesClustersListClusterExtraArgsToTerraform(struct?: DataTencentcloudKubernetesClustersListClusterExtraArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClustersListClusterExtraArgsToHclTerraform(struct?: DataTencentcloudKubernetesClustersListClusterExtraArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClustersListClusterExtraArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClustersListClusterExtraArgs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClustersListClusterExtraArgs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kube_apiserver - computed: true, optional: false, required: false
  public get kubeApiserver() {
    return this.getListAttribute('kube_apiserver');
  }

  // kube_controller_manager - computed: true, optional: false, required: false
  public get kubeControllerManager() {
    return this.getListAttribute('kube_controller_manager');
  }

  // kube_scheduler - computed: true, optional: false, required: false
  public get kubeScheduler() {
    return this.getListAttribute('kube_scheduler');
  }
}

export class DataTencentcloudKubernetesClustersListClusterExtraArgsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClustersListClusterExtraArgsOutputReference {
    return new DataTencentcloudKubernetesClustersListClusterExtraArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClustersListWorkerInstancesListStruct {
}

export function dataTencentcloudKubernetesClustersListWorkerInstancesListStructToTerraform(struct?: DataTencentcloudKubernetesClustersListWorkerInstancesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClustersListWorkerInstancesListStructToHclTerraform(struct?: DataTencentcloudKubernetesClustersListWorkerInstancesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClustersListWorkerInstancesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClustersListWorkerInstancesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClustersListWorkerInstancesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed_reason - computed: true, optional: false, required: false
  public get failedReason() {
    return this.getStringAttribute('failed_reason');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_role - computed: true, optional: false, required: false
  public get instanceRole() {
    return this.getStringAttribute('instance_role');
  }

  // instance_state - computed: true, optional: false, required: false
  public get instanceState() {
    return this.getStringAttribute('instance_state');
  }

  // lan_ip - computed: true, optional: false, required: false
  public get lanIp() {
    return this.getStringAttribute('lan_ip');
  }
}

export class DataTencentcloudKubernetesClustersListWorkerInstancesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClustersListWorkerInstancesListStructOutputReference {
    return new DataTencentcloudKubernetesClustersListWorkerInstancesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClustersListStruct {
}

export function dataTencentcloudKubernetesClustersListStructToTerraform(struct?: DataTencentcloudKubernetesClustersListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClustersListStructToHclTerraform(struct?: DataTencentcloudKubernetesClustersListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClustersListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClustersListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClustersListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cdc_id - computed: true, optional: false, required: false
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }

  // certification_authority - computed: true, optional: false, required: false
  public get certificationAuthority() {
    return this.getStringAttribute('certification_authority');
  }

  // claim_expired_seconds - computed: true, optional: false, required: false
  public get claimExpiredSeconds() {
    return this.getNumberAttribute('claim_expired_seconds');
  }

  // cluster_as_enabled - computed: true, optional: false, required: false
  public get clusterAsEnabled() {
    return this.getBooleanAttribute('cluster_as_enabled');
  }

  // cluster_cidr - computed: true, optional: false, required: false
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }

  // cluster_deploy_type - computed: true, optional: false, required: false
  public get clusterDeployType() {
    return this.getStringAttribute('cluster_deploy_type');
  }

  // cluster_desc - computed: true, optional: false, required: false
  public get clusterDesc() {
    return this.getStringAttribute('cluster_desc');
  }

  // cluster_external_endpoint - computed: true, optional: false, required: false
  public get clusterExternalEndpoint() {
    return this.getStringAttribute('cluster_external_endpoint');
  }

  // cluster_extra_args - computed: true, optional: false, required: false
  private _clusterExtraArgs = new DataTencentcloudKubernetesClustersListClusterExtraArgsList(this, "cluster_extra_args", false);
  public get clusterExtraArgs() {
    return this._clusterExtraArgs;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_ipvs - computed: true, optional: false, required: false
  public get clusterIpvs() {
    return this.getBooleanAttribute('cluster_ipvs');
  }

  // cluster_max_pod_num - computed: true, optional: false, required: false
  public get clusterMaxPodNum() {
    return this.getNumberAttribute('cluster_max_pod_num');
  }

  // cluster_max_service_num - computed: true, optional: false, required: false
  public get clusterMaxServiceNum() {
    return this.getNumberAttribute('cluster_max_service_num');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_node_num - computed: true, optional: false, required: false
  public get clusterNodeNum() {
    return this.getNumberAttribute('cluster_node_num');
  }

  // cluster_os - computed: true, optional: false, required: false
  public get clusterOs() {
    return this.getStringAttribute('cluster_os');
  }

  // cluster_version - computed: true, optional: false, required: false
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // container_runtime - computed: true, optional: false, required: false
  public get containerRuntime() {
    return this.getStringAttribute('container_runtime');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // eni_subnet_ids - computed: true, optional: false, required: false
  public get eniSubnetIds() {
    return this.getListAttribute('eni_subnet_ids');
  }

  // ignore_cluster_cidr_conflict - computed: true, optional: false, required: false
  public get ignoreClusterCidrConflict() {
    return this.getBooleanAttribute('ignore_cluster_cidr_conflict');
  }

  // is_non_static_ip_mode - computed: true, optional: false, required: false
  public get isNonStaticIpMode() {
    return this.getBooleanAttribute('is_non_static_ip_mode');
  }

  // kube_config - computed: true, optional: false, required: false
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }

  // kube_config_intranet - computed: true, optional: false, required: false
  public get kubeConfigIntranet() {
    return this.getStringAttribute('kube_config_intranet');
  }

  // kube_proxy_mode - computed: true, optional: false, required: false
  public get kubeProxyMode() {
    return this.getStringAttribute('kube_proxy_mode');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // node_name_type - computed: true, optional: false, required: false
  public get nodeNameType() {
    return this.getStringAttribute('node_name_type');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // pgw_endpoint - computed: true, optional: false, required: false
  public get pgwEndpoint() {
    return this.getStringAttribute('pgw_endpoint');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // security_policy - computed: true, optional: false, required: false
  public get securityPolicy() {
    return this.getListAttribute('security_policy');
  }

  // service_cidr - computed: true, optional: false, required: false
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // vpc_cni_type - computed: true, optional: false, required: false
  public get vpcCniType() {
    return this.getStringAttribute('vpc_cni_type');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // worker_instances_list - computed: true, optional: false, required: false
  private _workerInstancesList = new DataTencentcloudKubernetesClustersListWorkerInstancesListStructList(this, "worker_instances_list", false);
  public get workerInstancesList() {
    return this._workerInstancesList;
  }
}

export class DataTencentcloudKubernetesClustersListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClustersListStructOutputReference {
    return new DataTencentcloudKubernetesClustersListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/kubernetes_clusters tencentcloud_kubernetes_clusters}
*/
export class DataTencentcloudKubernetesClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudKubernetesClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudKubernetesClusters to import
  * @param importFromId The id of the existing DataTencentcloudKubernetesClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/kubernetes_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudKubernetesClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/kubernetes_clusters tencentcloud_kubernetes_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudKubernetesClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudKubernetesClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_clusters',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
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
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._kubeConfigFilePrefix = config.kubeConfigFilePrefix;
    this._resultOutputFile = config.resultOutputFile;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // kube_config_file_prefix - computed: false, optional: true, required: false
  private _kubeConfigFilePrefix?: string; 
  public get kubeConfigFilePrefix() {
    return this.getStringAttribute('kube_config_file_prefix');
  }
  public set kubeConfigFilePrefix(value: string) {
    this._kubeConfigFilePrefix = value;
  }
  public resetKubeConfigFilePrefix() {
    this._kubeConfigFilePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigFilePrefixInput() {
    return this._kubeConfigFilePrefix;
  }

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudKubernetesClustersListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      kube_config_file_prefix: cdktf.stringToTerraform(this._kubeConfigFilePrefix),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
      kube_config_file_prefix: {
        value: cdktf.stringToHclTerraform(this._kubeConfigFilePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
