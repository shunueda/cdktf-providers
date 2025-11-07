// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, it will acquire the ClusterRole tke:admin. NOTE: this arguments cannot revoke to `false` after acquired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#acquire_cluster_admin_role KubernetesCluster#acquire_cluster_admin_role}
  */
  readonly acquireClusterAdminRole?: boolean | cdktf.IResolvable;
  /**
  * Whether the cluster level auto upgraded, valid for managed cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#auto_upgrade_cluster_level KubernetesCluster#auto_upgrade_cluster_level}
  */
  readonly autoUpgradeClusterLevel?: boolean | cdktf.IResolvable;
  /**
  * The number of basic pods. valid when enable_customized_pod_cidr=true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#base_pod_num KubernetesCluster#base_pod_num}
  */
  readonly basePodNum?: number;
  /**
  * CDC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cdc_id KubernetesCluster#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Claim expired seconds to recycle ENI. This field can only set when field `network_type` is 'VPC-CNI'. `claim_expired_seconds` must greater or equal than 300 and less than 15768000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#claim_expired_seconds KubernetesCluster#claim_expired_seconds}
  */
  readonly claimExpiredSeconds?: number;
  /**
  * A network address block of the cluster. Different from vpc cidr and cidr of other clusters within this vpc. Must be in  10./192.168/172.[16-31] segments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_cidr KubernetesCluster#cluster_cidr}
  */
  readonly clusterCidr?: string;
  /**
  * Deployment type of the cluster, the available values include: 'MANAGED_CLUSTER' and 'INDEPENDENT_CLUSTER'. Default is 'MANAGED_CLUSTER'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_deploy_type KubernetesCluster#cluster_deploy_type}
  */
  readonly clusterDeployType?: string;
  /**
  * Description of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_desc KubernetesCluster#cluster_desc}
  */
  readonly clusterDesc?: string;
  /**
  * Open internet access or not. If this field is set 'true', the field below `worker_config` must be set. Because only cluster with node is allowed enable access endpoint. You may open it through `tencentcloud_kubernetes_cluster_endpoint`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_internet KubernetesCluster#cluster_internet}
  */
  readonly clusterInternet?: boolean | cdktf.IResolvable;
  /**
  * Domain name for cluster Kube-apiserver internet access. Be careful if you modify value of this parameter, the cluster_external_endpoint value may be changed automatically too.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_internet_domain KubernetesCluster#cluster_internet_domain}
  */
  readonly clusterInternetDomain?: string;
  /**
  * Specify security group, NOTE: This argument must not be empty if cluster internet enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_internet_security_group KubernetesCluster#cluster_internet_security_group}
  */
  readonly clusterInternetSecurityGroup?: string;
  /**
  * Open intranet access or not. If this field is set 'true', the field below `worker_config` must be set. Because only cluster with node is allowed enable access endpoint. You may open it through `tencentcloud_kubernetes_cluster_endpoint`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_intranet KubernetesCluster#cluster_intranet}
  */
  readonly clusterIntranet?: boolean | cdktf.IResolvable;
  /**
  * Domain name for cluster Kube-apiserver intranet access. Be careful if you modify value of this parameter, the pgw_endpoint value may be changed automatically too.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_intranet_domain KubernetesCluster#cluster_intranet_domain}
  */
  readonly clusterIntranetDomain?: string;
  /**
  * Subnet id who can access this independent cluster, this field must and can only set  when `cluster_intranet` is true. `cluster_intranet_subnet_id` can not modify once be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_intranet_subnet_id KubernetesCluster#cluster_intranet_subnet_id}
  */
  readonly clusterIntranetSubnetId?: string;
  /**
  * Indicates whether `ipvs` is enabled. Default is true. False means `iptables` is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_ipvs KubernetesCluster#cluster_ipvs}
  */
  readonly clusterIpvs?: boolean | cdktf.IResolvable;
  /**
  * Specify cluster level, valid for managed cluster, use data source `tencentcloud_kubernetes_cluster_levels` to query available levels. Available value examples `L5`, `L20`, `L50`, `L100`, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_level KubernetesCluster#cluster_level}
  */
  readonly clusterLevel?: string;
  /**
  * The maximum number of Pods per node in the cluster. Default is 256. The minimum value is 4. When its power unequal to 2, it will round upward to the closest power of 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_max_pod_num KubernetesCluster#cluster_max_pod_num}
  */
  readonly clusterMaxPodNum?: number;
  /**
  * The maximum number of services in the cluster. Default is 256. The range is from 32 to 32768. When its power unequal to 2, it will round upward to the closest power of 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_max_service_num KubernetesCluster#cluster_max_service_num}
  */
  readonly clusterMaxServiceNum?: number;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_name KubernetesCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Cluster operating system, supports setting public images (the field passes the corresponding image Name) and custom images (the field passes the corresponding image ID). For details, please refer to: https://cloud.tencent.com/document/product/457/68289.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_os KubernetesCluster#cluster_os}
  */
  readonly clusterOs?: string;
  /**
  * Image type of the cluster os, the available values include: 'GENERAL'. Default is 'GENERAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_os_type KubernetesCluster#cluster_os_type}
  */
  readonly clusterOsType?: string;
  /**
  * Subnet ID of the cluster, such as: subnet-b3p7d7q5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_subnet_id KubernetesCluster#cluster_subnet_id}
  */
  readonly clusterSubnetId?: string;
  /**
  * Version of the cluster. Use `tencentcloud_kubernetes_available_cluster_versions` to get the upgradable cluster version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_version KubernetesCluster#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * Runtime type of the cluster, the available values include: 'docker' and 'containerd'.The Kubernetes v1.24 has removed dockershim, so please use containerd in v1.24 or higher. The default value is `docker` for versions below v1.24 and `containerd` for versions above v1.24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#container_runtime KubernetesCluster#container_runtime}
  */
  readonly containerRuntime?: string;
  /**
  * Whether to enable DataPlaneV2 (replace kube-proxy with cilium). `data_plane_v2` and `cluster_ipvs` should not be set at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#data_plane_v2 KubernetesCluster#data_plane_v2}
  */
  readonly dataPlaneV2?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether cluster deletion protection is enabled. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#deletion_protection KubernetesCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * To prevent the installation of a specific Addon component, enter the corresponding AddonName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#disable_addons KubernetesCluster#disable_addons}
  */
  readonly disableAddons?: string[];
  /**
  * Docker graph path. Default is `/var/lib/docker`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#docker_graph_path KubernetesCluster#docker_graph_path}
  */
  readonly dockerGraphPath?: string;
  /**
  * Whether to enable the custom mode of node podCIDR size. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#enable_customized_pod_cidr KubernetesCluster#enable_customized_pod_cidr}
  */
  readonly enableCustomizedPodCidr?: boolean | cdktf.IResolvable;
  /**
  * Subnet Ids for cluster with VPC-CNI network mode. This field can only set when field `network_type` is 'VPC-CNI'. `eni_subnet_ids` can not empty once be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#eni_subnet_ids KubernetesCluster#eni_subnet_ids}
  */
  readonly eniSubnetIds?: string[];
  /**
  * Custom parameter information related to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#extra_args KubernetesCluster#extra_args}
  */
  readonly extraArgs?: string[];
  /**
  * Indicate to set desired pod number in node. valid when enable_customized_pod_cidr=true, and it takes effect for all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#globe_desired_pod_num KubernetesCluster#globe_desired_pod_num}
  */
  readonly globeDesiredPodNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#id KubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether to ignore the cluster cidr conflict error. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#ignore_cluster_cidr_conflict KubernetesCluster#ignore_cluster_cidr_conflict}
  */
  readonly ignoreClusterCidrConflict?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to ignore the service cidr conflict error. Only valid in `VPC-CNI` mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#ignore_service_cidr_conflict KubernetesCluster#ignore_service_cidr_conflict}
  */
  readonly ignoreServiceCidrConflict?: boolean | cdktf.IResolvable;
  /**
  * The strategy for deleting cluster instances: terminate (destroy instances, only support pay as you go cloud host instances) retain (remove only, keep instances), Default is terminate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#instance_delete_mode KubernetesCluster#instance_delete_mode}
  */
  readonly instanceDeleteMode?: string;
  /**
  * In the VPC-CNI mode of the cluster, the dual stack cluster status defaults to false, indicating a non dual stack cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#is_dual_stack KubernetesCluster#is_dual_stack}
  */
  readonly isDualStack?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether non-static ip mode is enabled. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#is_non_static_ip_mode KubernetesCluster#is_non_static_ip_mode}
  */
  readonly isNonStaticIpMode?: boolean | cdktf.IResolvable;
  /**
  * Cluster kube-proxy mode, the available values include: 'kube-proxy-bpf'. Default is not set.When set to kube-proxy-bpf, cluster version greater than 1.14 and with Tencent Linux 2.4 is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#kube_proxy_mode KubernetesCluster#kube_proxy_mode}
  */
  readonly kubeProxyMode?: string;
  /**
  * Labels of tke cluster nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Security policies for managed cluster internet, like:'192.168.1.0/24' or '113.116.51.27', '0.0.0.0/0' means all. This field can only set when field `cluster_deploy_type` is 'MANAGED_CLUSTER' and `cluster_internet` is true. `managed_cluster_internet_security_policies` can not delete or empty once be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#managed_cluster_internet_security_policies KubernetesCluster#managed_cluster_internet_security_policies}
  */
  readonly managedClusterInternetSecurityPolicies?: string[];
  /**
  * Mount target. Default is not mounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#mount_target KubernetesCluster#mount_target}
  */
  readonly mountTarget?: string;
  /**
  * Cluster network type, the available values include: 'GR' and 'VPC-CNI' and 'CiliumOverlay'. Default is GR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#network_type KubernetesCluster#network_type}
  */
  readonly networkType?: string;
  /**
  * Node name type of Cluster, the available values include: 'lan-ip' and 'hostname', Default is 'lan-ip'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#node_name_type KubernetesCluster#node_name_type}
  */
  readonly nodeNameType?: string;
  /**
  * Base64-encoded user script, executed before initializing the node, currently only effective for adding existing nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#pre_start_user_script KubernetesCluster#pre_start_user_script}
  */
  readonly preStartUserScript?: string;
  /**
  * Project ID, default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#project_id KubernetesCluster#project_id}
  */
  readonly projectId?: number;
  /**
  * Container Runtime version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#runtime_version KubernetesCluster#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * A network address block of the service. Different from vpc cidr and cidr of other clusters within this vpc. Must be in  10./192.168/172.[16-31] segments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#service_cidr KubernetesCluster#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * The tags of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Sets whether the joining node participates in the schedule. Default is '0'. Participate in scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#unschedulable KubernetesCluster#unschedulable}
  */
  readonly unschedulable?: number;
  /**
  * Indicates whether upgrade all instances when cluster_version change. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#upgrade_instances_follow_cluster KubernetesCluster#upgrade_instances_follow_cluster}
  */
  readonly upgradeInstancesFollowCluster?: boolean | cdktf.IResolvable;
  /**
  * Distinguish between shared network card multi-IP mode and independent network card mode. Fill in `tke-route-eni` for shared network card multi-IP mode and `tke-direct-eni` for independent network card mode. The default is shared network card mode. When it is necessary to turn off the vpc-cni container network capability, both `eni_subnet_ids` and `vpc_cni_type` must be set to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#vpc_cni_type KubernetesCluster#vpc_cni_type}
  */
  readonly vpcCniType?: string;
  /**
  * Vpc Id of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#vpc_id KubernetesCluster#vpc_id}
  */
  readonly vpcId: string;
  /**
  * auth_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#auth_options KubernetesCluster#auth_options}
  */
  readonly authOptions?: KubernetesClusterAuthOptions;
  /**
  * cluster_audit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_audit KubernetesCluster#cluster_audit}
  */
  readonly clusterAudit?: KubernetesClusterClusterAudit;
  /**
  * cluster_extra_args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cluster_extra_args KubernetesCluster#cluster_extra_args}
  */
  readonly clusterExtraArgs?: KubernetesClusterClusterExtraArgs;
  /**
  * event_persistence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#event_persistence KubernetesCluster#event_persistence}
  */
  readonly eventPersistence?: KubernetesClusterEventPersistence;
  /**
  * exist_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#exist_instance KubernetesCluster#exist_instance}
  */
  readonly existInstance?: KubernetesClusterExistInstance[] | cdktf.IResolvable;
  /**
  * extension_addon block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#extension_addon KubernetesCluster#extension_addon}
  */
  readonly extensionAddon?: KubernetesClusterExtensionAddon[] | cdktf.IResolvable;
  /**
  * log_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#log_agent KubernetesCluster#log_agent}
  */
  readonly logAgent?: KubernetesClusterLogAgent;
  /**
  * master_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#master_config KubernetesCluster#master_config}
  */
  readonly masterConfig?: KubernetesClusterMasterConfig[] | cdktf.IResolvable;
  /**
  * node_pool_global_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#node_pool_global_config KubernetesCluster#node_pool_global_config}
  */
  readonly nodePoolGlobalConfig?: KubernetesClusterNodePoolGlobalConfig[] | cdktf.IResolvable;
  /**
  * resource_delete_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#resource_delete_options KubernetesCluster#resource_delete_options}
  */
  readonly resourceDeleteOptions?: KubernetesClusterResourceDeleteOptions[] | cdktf.IResolvable;
  /**
  * worker_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#worker_config KubernetesCluster#worker_config}
  */
  readonly workerConfig?: KubernetesClusterWorkerConfig[] | cdktf.IResolvable;
}
export interface KubernetesClusterWorkerInstancesListStruct {
}

export function kubernetesClusterWorkerInstancesListStructToTerraform(struct?: KubernetesClusterWorkerInstancesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesClusterWorkerInstancesListStructToHclTerraform(struct?: KubernetesClusterWorkerInstancesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesClusterWorkerInstancesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterWorkerInstancesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterWorkerInstancesListStruct | undefined) {
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

export class KubernetesClusterWorkerInstancesListStructList extends cdktf.ComplexList {

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
  public get(index: number): KubernetesClusterWorkerInstancesListStructOutputReference {
    return new KubernetesClusterWorkerInstancesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterAuthOptions {
  /**
  * If set to `true`, the rbac rule will be created automatically which allow anonymous user to access '/.well-known/openid-configuration' and '/openid/v1/jwks'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#auto_create_discovery_anonymous_auth KubernetesCluster#auto_create_discovery_anonymous_auth}
  */
  readonly autoCreateDiscoveryAnonymousAuth?: boolean | cdktf.IResolvable;
  /**
  * Specify service-account-issuer. If use_tke_default is set to `true`, please do not set this field, it will be ignored anyway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#issuer KubernetesCluster#issuer}
  */
  readonly issuer?: string;
  /**
  * Specify service-account-jwks-uri. If use_tke_default is set to `true`, please do not set this field, it will be ignored anyway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#jwks_uri KubernetesCluster#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * If set to `true`, the issuer and jwks_uri will be generated automatically by tke, please do not set issuer and jwks_uri, and they will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#use_tke_default KubernetesCluster#use_tke_default}
  */
  readonly useTkeDefault?: boolean | cdktf.IResolvable;
}

export function kubernetesClusterAuthOptionsToTerraform(struct?: KubernetesClusterAuthOptionsOutputReference | KubernetesClusterAuthOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_create_discovery_anonymous_auth: cdktf.booleanToTerraform(struct!.autoCreateDiscoveryAnonymousAuth),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    jwks_uri: cdktf.stringToTerraform(struct!.jwksUri),
    use_tke_default: cdktf.booleanToTerraform(struct!.useTkeDefault),
  }
}


export function kubernetesClusterAuthOptionsToHclTerraform(struct?: KubernetesClusterAuthOptionsOutputReference | KubernetesClusterAuthOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_create_discovery_anonymous_auth: {
      value: cdktf.booleanToHclTerraform(struct!.autoCreateDiscoveryAnonymousAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_uri: {
      value: cdktf.stringToHclTerraform(struct!.jwksUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tke_default: {
      value: cdktf.booleanToHclTerraform(struct!.useTkeDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterAuthOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterAuthOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCreateDiscoveryAnonymousAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateDiscoveryAnonymousAuth = this._autoCreateDiscoveryAnonymousAuth;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._jwksUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUri = this._jwksUri;
    }
    if (this._useTkeDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTkeDefault = this._useTkeDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterAuthOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoCreateDiscoveryAnonymousAuth = undefined;
      this._issuer = undefined;
      this._jwksUri = undefined;
      this._useTkeDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoCreateDiscoveryAnonymousAuth = value.autoCreateDiscoveryAnonymousAuth;
      this._issuer = value.issuer;
      this._jwksUri = value.jwksUri;
      this._useTkeDefault = value.useTkeDefault;
    }
  }

  // auto_create_discovery_anonymous_auth - computed: false, optional: true, required: false
  private _autoCreateDiscoveryAnonymousAuth?: boolean | cdktf.IResolvable; 
  public get autoCreateDiscoveryAnonymousAuth() {
    return this.getBooleanAttribute('auto_create_discovery_anonymous_auth');
  }
  public set autoCreateDiscoveryAnonymousAuth(value: boolean | cdktf.IResolvable) {
    this._autoCreateDiscoveryAnonymousAuth = value;
  }
  public resetAutoCreateDiscoveryAnonymousAuth() {
    this._autoCreateDiscoveryAnonymousAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateDiscoveryAnonymousAuthInput() {
    return this._autoCreateDiscoveryAnonymousAuth;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks_uri - computed: false, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // use_tke_default - computed: false, optional: true, required: false
  private _useTkeDefault?: boolean | cdktf.IResolvable; 
  public get useTkeDefault() {
    return this.getBooleanAttribute('use_tke_default');
  }
  public set useTkeDefault(value: boolean | cdktf.IResolvable) {
    this._useTkeDefault = value;
  }
  public resetUseTkeDefault() {
    this._useTkeDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTkeDefaultInput() {
    return this._useTkeDefault;
  }
}
export interface KubernetesClusterClusterAudit {
  /**
  * when you want to close the cluster audit log or delete the cluster, you can use this parameter to determine whether the audit log set and topic created by default will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#delete_audit_log_and_topic KubernetesCluster#delete_audit_log_and_topic}
  */
  readonly deleteAuditLogAndTopic?: boolean | cdktf.IResolvable;
  /**
  * Specify weather the Cluster Audit enabled. NOTE: Enable Cluster Audit will also auto install Log Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specify id of existing CLS log set, or auto create a new set by leave it empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#log_set_id KubernetesCluster#log_set_id}
  */
  readonly logSetId?: string;
  /**
  * Specify id of existing CLS log topic, or auto create a new topic by leave it empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#topic_id KubernetesCluster#topic_id}
  */
  readonly topicId?: string;
}

export function kubernetesClusterClusterAuditToTerraform(struct?: KubernetesClusterClusterAuditOutputReference | KubernetesClusterClusterAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_audit_log_and_topic: cdktf.booleanToTerraform(struct!.deleteAuditLogAndTopic),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_set_id: cdktf.stringToTerraform(struct!.logSetId),
    topic_id: cdktf.stringToTerraform(struct!.topicId),
  }
}


export function kubernetesClusterClusterAuditToHclTerraform(struct?: KubernetesClusterClusterAuditOutputReference | KubernetesClusterClusterAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_audit_log_and_topic: {
      value: cdktf.booleanToHclTerraform(struct!.deleteAuditLogAndTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_set_id: {
      value: cdktf.stringToHclTerraform(struct!.logSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_id: {
      value: cdktf.stringToHclTerraform(struct!.topicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterClusterAuditOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterClusterAudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteAuditLogAndTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAuditLogAndTopic = this._deleteAuditLogAndTopic;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSetId = this._logSetId;
    }
    if (this._topicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicId = this._topicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterClusterAudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteAuditLogAndTopic = undefined;
      this._enabled = undefined;
      this._logSetId = undefined;
      this._topicId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteAuditLogAndTopic = value.deleteAuditLogAndTopic;
      this._enabled = value.enabled;
      this._logSetId = value.logSetId;
      this._topicId = value.topicId;
    }
  }

  // delete_audit_log_and_topic - computed: false, optional: true, required: false
  private _deleteAuditLogAndTopic?: boolean | cdktf.IResolvable; 
  public get deleteAuditLogAndTopic() {
    return this.getBooleanAttribute('delete_audit_log_and_topic');
  }
  public set deleteAuditLogAndTopic(value: boolean | cdktf.IResolvable) {
    this._deleteAuditLogAndTopic = value;
  }
  public resetDeleteAuditLogAndTopic() {
    this._deleteAuditLogAndTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAuditLogAndTopicInput() {
    return this._deleteAuditLogAndTopic;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_set_id - computed: false, optional: true, required: false
  private _logSetId?: string; 
  public get logSetId() {
    return this.getStringAttribute('log_set_id');
  }
  public set logSetId(value: string) {
    this._logSetId = value;
  }
  public resetLogSetId() {
    this._logSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSetIdInput() {
    return this._logSetId;
  }

  // topic_id - computed: false, optional: true, required: false
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  public resetTopicId() {
    this._topicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }
}
export interface KubernetesClusterClusterExtraArgs {
  /**
  * The customized parameters for kube-apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#kube_apiserver KubernetesCluster#kube_apiserver}
  */
  readonly kubeApiserver?: string[];
  /**
  * The customized parameters for kube-controller-manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#kube_controller_manager KubernetesCluster#kube_controller_manager}
  */
  readonly kubeControllerManager?: string[];
  /**
  * The customized parameters for kube-scheduler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#kube_scheduler KubernetesCluster#kube_scheduler}
  */
  readonly kubeScheduler?: string[];
}

export function kubernetesClusterClusterExtraArgsToTerraform(struct?: KubernetesClusterClusterExtraArgsOutputReference | KubernetesClusterClusterExtraArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kube_apiserver: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubeApiserver),
    kube_controller_manager: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubeControllerManager),
    kube_scheduler: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubeScheduler),
  }
}


export function kubernetesClusterClusterExtraArgsToHclTerraform(struct?: KubernetesClusterClusterExtraArgsOutputReference | KubernetesClusterClusterExtraArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kube_apiserver: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubeApiserver),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kube_controller_manager: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubeControllerManager),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kube_scheduler: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubeScheduler),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterClusterExtraArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterClusterExtraArgs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubeApiserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiserver = this._kubeApiserver;
    }
    if (this._kubeControllerManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeControllerManager = this._kubeControllerManager;
    }
    if (this._kubeScheduler !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeScheduler = this._kubeScheduler;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterClusterExtraArgs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubeApiserver = undefined;
      this._kubeControllerManager = undefined;
      this._kubeScheduler = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubeApiserver = value.kubeApiserver;
      this._kubeControllerManager = value.kubeControllerManager;
      this._kubeScheduler = value.kubeScheduler;
    }
  }

  // kube_apiserver - computed: false, optional: true, required: false
  private _kubeApiserver?: string[]; 
  public get kubeApiserver() {
    return this.getListAttribute('kube_apiserver');
  }
  public set kubeApiserver(value: string[]) {
    this._kubeApiserver = value;
  }
  public resetKubeApiserver() {
    this._kubeApiserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiserverInput() {
    return this._kubeApiserver;
  }

  // kube_controller_manager - computed: false, optional: true, required: false
  private _kubeControllerManager?: string[]; 
  public get kubeControllerManager() {
    return this.getListAttribute('kube_controller_manager');
  }
  public set kubeControllerManager(value: string[]) {
    this._kubeControllerManager = value;
  }
  public resetKubeControllerManager() {
    this._kubeControllerManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeControllerManagerInput() {
    return this._kubeControllerManager;
  }

  // kube_scheduler - computed: false, optional: true, required: false
  private _kubeScheduler?: string[]; 
  public get kubeScheduler() {
    return this.getListAttribute('kube_scheduler');
  }
  public set kubeScheduler(value: string[]) {
    this._kubeScheduler = value;
  }
  public resetKubeScheduler() {
    this._kubeScheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeSchedulerInput() {
    return this._kubeScheduler;
  }
}
export interface KubernetesClusterEventPersistence {
  /**
  * when you want to close the cluster event persistence or delete the cluster, you can use this parameter to determine whether the event persistence log set and topic created by default will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#delete_event_log_and_topic KubernetesCluster#delete_event_log_and_topic}
  */
  readonly deleteEventLogAndTopic?: boolean | cdktf.IResolvable;
  /**
  * Specify weather the Event Persistence enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specify id of existing CLS log set, or auto create a new set by leave it empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#log_set_id KubernetesCluster#log_set_id}
  */
  readonly logSetId?: string;
  /**
  * Specify id of existing CLS log topic, or auto create a new topic by leave it empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#topic_id KubernetesCluster#topic_id}
  */
  readonly topicId?: string;
}

export function kubernetesClusterEventPersistenceToTerraform(struct?: KubernetesClusterEventPersistenceOutputReference | KubernetesClusterEventPersistence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_event_log_and_topic: cdktf.booleanToTerraform(struct!.deleteEventLogAndTopic),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_set_id: cdktf.stringToTerraform(struct!.logSetId),
    topic_id: cdktf.stringToTerraform(struct!.topicId),
  }
}


export function kubernetesClusterEventPersistenceToHclTerraform(struct?: KubernetesClusterEventPersistenceOutputReference | KubernetesClusterEventPersistence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_event_log_and_topic: {
      value: cdktf.booleanToHclTerraform(struct!.deleteEventLogAndTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_set_id: {
      value: cdktf.stringToHclTerraform(struct!.logSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_id: {
      value: cdktf.stringToHclTerraform(struct!.topicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterEventPersistenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterEventPersistence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteEventLogAndTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteEventLogAndTopic = this._deleteEventLogAndTopic;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSetId = this._logSetId;
    }
    if (this._topicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicId = this._topicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterEventPersistence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteEventLogAndTopic = undefined;
      this._enabled = undefined;
      this._logSetId = undefined;
      this._topicId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteEventLogAndTopic = value.deleteEventLogAndTopic;
      this._enabled = value.enabled;
      this._logSetId = value.logSetId;
      this._topicId = value.topicId;
    }
  }

  // delete_event_log_and_topic - computed: false, optional: true, required: false
  private _deleteEventLogAndTopic?: boolean | cdktf.IResolvable; 
  public get deleteEventLogAndTopic() {
    return this.getBooleanAttribute('delete_event_log_and_topic');
  }
  public set deleteEventLogAndTopic(value: boolean | cdktf.IResolvable) {
    this._deleteEventLogAndTopic = value;
  }
  public resetDeleteEventLogAndTopic() {
    this._deleteEventLogAndTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEventLogAndTopicInput() {
    return this._deleteEventLogAndTopic;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_set_id - computed: false, optional: true, required: false
  private _logSetId?: string; 
  public get logSetId() {
    return this.getStringAttribute('log_set_id');
  }
  public set logSetId(value: string) {
    this._logSetId = value;
  }
  public resetLogSetId() {
    this._logSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSetIdInput() {
    return this._logSetId;
  }

  // topic_id - computed: false, optional: true, required: false
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  public resetTopicId() {
    this._topicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }
}
export interface KubernetesClusterExistInstanceInstancesParaMasterConfigDataDisk {
  /**
  * Indicate whether to auto format and mount or not. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#auto_format_and_mount KubernetesCluster#auto_format_and_mount}
  */
  readonly autoFormatAndMount?: boolean | cdktf.IResolvable;
  /**
  * The name of the device or partition to mount. NOTE: this argument doesn't support setting in node pool, or will leads to mount error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#disk_partition KubernetesCluster#disk_partition}
  */
  readonly diskPartition?: string;
  /**
  * Volume of disk in GB. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#disk_size KubernetesCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Types of disk. Valid value: `LOCAL_BASIC`, `LOCAL_SSD`, `CLOUD_BASIC`, `CLOUD_PREMIUM`, `CLOUD_SSD`, `CLOUD_HSSD`, `CLOUD_TSSD` and `CLOUD_BSSD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#disk_type KubernetesCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * File system, e.g. `ext3/ext4/xfs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#file_system KubernetesCluster#file_system}
  */
  readonly fileSystem?: string;
  /**
  * Mount target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#mount_target KubernetesCluster#mount_target}
  */
  readonly mountTarget?: string;
}

export function kubernetesClusterExistInstanceInstancesParaMasterConfigDataDiskToTerraform(struct?: KubernetesClusterExistInstanceInstancesParaMasterConfigDataDiskOutputReference | KubernetesClusterExistInstanceInstancesParaMasterConfigDataDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_format_and_mount: cdktf.booleanToTerraform(struct!.autoFormatAndMount),
    disk_partition: cdktf.stringToTerraform(struct!.diskPartition),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    file_system: cdktf.stringToTerraform(struct!.fileSystem),
    mount_target: cdktf.stringToTerraform(struct!.mountTarget),
  }
}


export function kubernetesClusterExistInstanceInstancesParaMasterConfigDataDiskToHclTerraform(struct?: KubernetesClusterExistInstanceInstancesParaMasterConfigDataDiskOutputReference | KubernetesClusterExistInstanceInstancesParaMasterConfigDataDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_format_and_mount: {
      value: cdktf.booleanToHclTerraform(struct!.autoFormatAndMount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_partition: {
      value: cdktf.stringToHclTerraform(struct!.diskPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system: {
      value: cdktf.stringToHclTerraform(struct!.fileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target: {
      value: cdktf.stringToHclTerraform(struct!.mountTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterExistInstanceInstancesParaMasterConfigDataDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterExistInstanceInstancesParaMasterConfigDataDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoFormatAndMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFormatAndMount = this._autoFormatAndMount;
    }
    if (this._diskPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPartition = this._diskPartition;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._fileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem;
    }
    if (this._mountTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTarget = this._mountTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterExistInstanceInstancesParaMasterConfigDataDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoFormatAndMount = undefined;
      this._diskPartition = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._fileSystem = undefined;
      this._mountTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoFormatAndMount = value.autoFormatAndMount;
      this._diskPartition = value.diskPartition;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._fileSystem = value.fileSystem;
      this._mountTarget = value.mountTarget;
    }
  }

  // auto_format_and_mount - computed: false, optional: true, required: false
  private _autoFormatAndMount?: boolean | cdktf.IResolvable; 
  public get autoFormatAndMount() {
    return this.getBooleanAttribute('auto_format_and_mount');
  }
  public set autoFormatAndMount(value: boolean | cdktf.IResolvable) {
    this._autoFormatAndMount = value;
  }
  public resetAutoFormatAndMount() {
    this._autoFormatAndMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFormatAndMountInput() {
    return this._autoFormatAndMount;
  }

  // disk_partition - computed: false, optional: true, required: false
  private _diskPartition?: string; 
  public get diskPartition() {
    return this.getStringAttribute('disk_partition');
  }
  public set diskPartition(value: string) {
    this._diskPartition = value;
  }
  public resetDiskPartition() {
    this._diskPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPartitionInput() {
    return this._diskPartition;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // file_system - computed: false, optional: true, required: false
  private _fileSystem?: string; 
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }
  public set fileSystem(value: string) {
    this._fileSystem = value;
  }
  public resetFileSystem() {
    this._fileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem;
  }

  // mount_target - computed: false, optional: true, required: false
  private _mountTarget?: string; 
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }
  public set mountTarget(value: string) {
    this._mountTarget = value;
  }
  public resetMountTarget() {
    this._mountTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetInput() {
    return this._mountTarget;
  }
}
export interface KubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgs {
  /**
  * Kubelet custom parameter. The parameter format is ["k1=v1", "k1=v2"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#kubelet KubernetesCluster#kubelet}
  */
  readonly kubelet?: string[];
}

export function kubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgsToTerraform(struct?: KubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgsOutputReference | KubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubelet: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubelet),
  }
}


export function kubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgsToHclTerraform(struct?: KubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgsOutputReference | KubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubelet: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubelet),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubelet !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubelet = this._kubelet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubelet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubelet = value.kubelet;
    }
  }

  // kubelet - computed: false, optional: true, required: false
  private _kubelet?: string[]; 
  public get kubelet() {
    return this.getListAttribute('kubelet');
  }
  public set kubelet(value: string[]) {
    this._kubelet = value;
  }
  public resetKubelet() {
    this._kubelet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletInput() {
    return this._kubelet;
  }
}
export interface KubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgs {
  /**
  * CUDA  version. Format like: `{ version: String, name: String }`. `version`: Version of GPU driver or CUDA; `name`: Name of GPU driver or CUDA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cuda KubernetesCluster#cuda}
  */
  readonly cuda?: { [key: string]: string };
  /**
  * cuDNN version. Format like: `{ version: String, name: String, doc_name: String, dev_name: String }`. `version`: cuDNN version; `name`: cuDNN name; `doc_name`: Doc name of cuDNN; `dev_name`: Dev name of cuDNN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cudnn KubernetesCluster#cudnn}
  */
  readonly cudnn?: { [key: string]: string };
  /**
  * Custom GPU driver. Format like: `{address: String}`. `address`: URL of custom GPU driver address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#custom_driver KubernetesCluster#custom_driver}
  */
  readonly customDriver?: { [key: string]: string };
  /**
  * GPU driver version. Format like: `{ version: String, name: String }`. `version`: Version of GPU driver or CUDA; `name`: Name of GPU driver or CUDA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#driver KubernetesCluster#driver}
  */
  readonly driver?: { [key: string]: string };
  /**
  * Whether to enable MIG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#mig_enable KubernetesCluster#mig_enable}
  */
  readonly migEnable?: boolean | cdktf.IResolvable;
}

export function kubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgsToTerraform(struct?: KubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgsOutputReference | KubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cuda: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cuda),
    cudnn: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cudnn),
    custom_driver: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customDriver),
    driver: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.driver),
    mig_enable: cdktf.booleanToTerraform(struct!.migEnable),
  }
}


export function kubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgsToHclTerraform(struct?: KubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgsOutputReference | KubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cuda: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cuda),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cudnn: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cudnn),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    custom_driver: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customDriver),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    driver: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.driver),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mig_enable: {
      value: cdktf.booleanToHclTerraform(struct!.migEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cuda !== undefined) {
      hasAnyValues = true;
      internalValueResult.cuda = this._cuda;
    }
    if (this._cudnn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cudnn = this._cudnn;
    }
    if (this._customDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDriver = this._customDriver;
    }
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._migEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.migEnable = this._migEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cuda = undefined;
      this._cudnn = undefined;
      this._customDriver = undefined;
      this._driver = undefined;
      this._migEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cuda = value.cuda;
      this._cudnn = value.cudnn;
      this._customDriver = value.customDriver;
      this._driver = value.driver;
      this._migEnable = value.migEnable;
    }
  }

  // cuda - computed: false, optional: true, required: false
  private _cuda?: { [key: string]: string }; 
  public get cuda() {
    return this.getStringMapAttribute('cuda');
  }
  public set cuda(value: { [key: string]: string }) {
    this._cuda = value;
  }
  public resetCuda() {
    this._cuda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cudaInput() {
    return this._cuda;
  }

  // cudnn - computed: false, optional: true, required: false
  private _cudnn?: { [key: string]: string }; 
  public get cudnn() {
    return this.getStringMapAttribute('cudnn');
  }
  public set cudnn(value: { [key: string]: string }) {
    this._cudnn = value;
  }
  public resetCudnn() {
    this._cudnn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cudnnInput() {
    return this._cudnn;
  }

  // custom_driver - computed: false, optional: true, required: false
  private _customDriver?: { [key: string]: string }; 
  public get customDriver() {
    return this.getStringMapAttribute('custom_driver');
  }
  public set customDriver(value: { [key: string]: string }) {
    this._customDriver = value;
  }
  public resetCustomDriver() {
    this._customDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDriverInput() {
    return this._customDriver;
  }

  // driver - computed: false, optional: true, required: false
  private _driver?: { [key: string]: string }; 
  public get driver() {
    return this.getStringMapAttribute('driver');
  }
  public set driver(value: { [key: string]: string }) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // mig_enable - computed: false, optional: true, required: false
  private _migEnable?: boolean | cdktf.IResolvable; 
  public get migEnable() {
    return this.getBooleanAttribute('mig_enable');
  }
  public set migEnable(value: boolean | cdktf.IResolvable) {
    this._migEnable = value;
  }
  public resetMigEnable() {
    this._migEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migEnableInput() {
    return this._migEnable;
  }
}
export interface KubernetesClusterExistInstanceInstancesParaMasterConfigLabels {
  /**
  * Name of map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Value of map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#value KubernetesCluster#value}
  */
  readonly value: string;
}

export function kubernetesClusterExistInstanceInstancesParaMasterConfigLabelsToTerraform(struct?: KubernetesClusterExistInstanceInstancesParaMasterConfigLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesClusterExistInstanceInstancesParaMasterConfigLabelsToHclTerraform(struct?: KubernetesClusterExistInstanceInstancesParaMasterConfigLabels | cdktf.IResolvable): any {
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

export class KubernetesClusterExistInstanceInstancesParaMasterConfigLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterExistInstanceInstancesParaMasterConfigLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterExistInstanceInstancesParaMasterConfigLabels | cdktf.IResolvable | undefined) {
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

export class KubernetesClusterExistInstanceInstancesParaMasterConfigLabelsList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterExistInstanceInstancesParaMasterConfigLabels[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterExistInstanceInstancesParaMasterConfigLabelsOutputReference {
    return new KubernetesClusterExistInstanceInstancesParaMasterConfigLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterExistInstanceInstancesParaMasterConfigTaints {
  /**
  * Effect of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#effect KubernetesCluster#effect}
  */
  readonly effect?: string;
  /**
  * Key of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#key KubernetesCluster#key}
  */
  readonly key?: string;
  /**
  * Value of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#value KubernetesCluster#value}
  */
  readonly value?: string;
}

export function kubernetesClusterExistInstanceInstancesParaMasterConfigTaintsToTerraform(struct?: KubernetesClusterExistInstanceInstancesParaMasterConfigTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesClusterExistInstanceInstancesParaMasterConfigTaintsToHclTerraform(struct?: KubernetesClusterExistInstanceInstancesParaMasterConfigTaints | cdktf.IResolvable): any {
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

export class KubernetesClusterExistInstanceInstancesParaMasterConfigTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterExistInstanceInstancesParaMasterConfigTaints | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterExistInstanceInstancesParaMasterConfigTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
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
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class KubernetesClusterExistInstanceInstancesParaMasterConfigTaintsList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterExistInstanceInstancesParaMasterConfigTaints[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterExistInstanceInstancesParaMasterConfigTaintsOutputReference {
    return new KubernetesClusterExistInstanceInstancesParaMasterConfigTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterExistInstanceInstancesParaMasterConfig {
  /**
  * Indicate to set desired pod number in node. valid when the cluster is podCIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#desired_pod_number KubernetesCluster#desired_pod_number}
  */
  readonly desiredPodNumber?: number;
  /**
  * Docker graph path. Default is `/var/lib/docker`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#docker_graph_path KubernetesCluster#docker_graph_path}
  */
  readonly dockerGraphPath?: string;
  /**
  * Mount target. Default is not mounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#mount_target KubernetesCluster#mount_target}
  */
  readonly mountTarget?: string;
  /**
  * Set whether the joined nodes participate in scheduling, with a default value of 0, indicating participation in scheduling; Non 0 means not participating in scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#unschedulable KubernetesCluster#unschedulable}
  */
  readonly unschedulable?: number;
  /**
  * User script encoded in base64, which will be executed after the k8s component runs. The user needs to ensure the script's reentrant and retry logic. The script and its generated log files can be viewed in the node path /data/ccs_userscript/. If the node needs to be initialized before joining the schedule, it can be used in conjunction with the `unschedulable` parameter. After the final initialization of the userScript is completed, add the command "kubectl uncordon nodename --kubeconfig=/root/.kube/config" to add the node to the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#user_script KubernetesCluster#user_script}
  */
  readonly userScript?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#data_disk KubernetesCluster#data_disk}
  */
  readonly dataDisk?: KubernetesClusterExistInstanceInstancesParaMasterConfigDataDisk;
  /**
  * extra_args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#extra_args KubernetesCluster#extra_args}
  */
  readonly extraArgs?: KubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgs;
  /**
  * gpu_args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#gpu_args KubernetesCluster#gpu_args}
  */
  readonly gpuArgs?: KubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgs;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}
  */
  readonly labels?: KubernetesClusterExistInstanceInstancesParaMasterConfigLabels[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#taints KubernetesCluster#taints}
  */
  readonly taints?: KubernetesClusterExistInstanceInstancesParaMasterConfigTaints[] | cdktf.IResolvable;
}

export function kubernetesClusterExistInstanceInstancesParaMasterConfigToTerraform(struct?: KubernetesClusterExistInstanceInstancesParaMasterConfigOutputReference | KubernetesClusterExistInstanceInstancesParaMasterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_pod_number: cdktf.numberToTerraform(struct!.desiredPodNumber),
    docker_graph_path: cdktf.stringToTerraform(struct!.dockerGraphPath),
    mount_target: cdktf.stringToTerraform(struct!.mountTarget),
    unschedulable: cdktf.numberToTerraform(struct!.unschedulable),
    user_script: cdktf.stringToTerraform(struct!.userScript),
    data_disk: kubernetesClusterExistInstanceInstancesParaMasterConfigDataDiskToTerraform(struct!.dataDisk),
    extra_args: kubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgsToTerraform(struct!.extraArgs),
    gpu_args: kubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgsToTerraform(struct!.gpuArgs),
    labels: cdktf.listMapper(kubernetesClusterExistInstanceInstancesParaMasterConfigLabelsToTerraform, true)(struct!.labels),
    taints: cdktf.listMapper(kubernetesClusterExistInstanceInstancesParaMasterConfigTaintsToTerraform, true)(struct!.taints),
  }
}


export function kubernetesClusterExistInstanceInstancesParaMasterConfigToHclTerraform(struct?: KubernetesClusterExistInstanceInstancesParaMasterConfigOutputReference | KubernetesClusterExistInstanceInstancesParaMasterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_pod_number: {
      value: cdktf.numberToHclTerraform(struct!.desiredPodNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    docker_graph_path: {
      value: cdktf.stringToHclTerraform(struct!.dockerGraphPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target: {
      value: cdktf.stringToHclTerraform(struct!.mountTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unschedulable: {
      value: cdktf.numberToHclTerraform(struct!.unschedulable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_script: {
      value: cdktf.stringToHclTerraform(struct!.userScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk: {
      value: kubernetesClusterExistInstanceInstancesParaMasterConfigDataDiskToHclTerraform(struct!.dataDisk),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterExistInstanceInstancesParaMasterConfigDataDiskList",
    },
    extra_args: {
      value: kubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgsToHclTerraform(struct!.extraArgs),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgsList",
    },
    gpu_args: {
      value: kubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgsToHclTerraform(struct!.gpuArgs),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgsList",
    },
    labels: {
      value: cdktf.listMapperHcl(kubernetesClusterExistInstanceInstancesParaMasterConfigLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterExistInstanceInstancesParaMasterConfigLabelsList",
    },
    taints: {
      value: cdktf.listMapperHcl(kubernetesClusterExistInstanceInstancesParaMasterConfigTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterExistInstanceInstancesParaMasterConfigTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterExistInstanceInstancesParaMasterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterExistInstanceInstancesParaMasterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredPodNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredPodNumber = this._desiredPodNumber;
    }
    if (this._dockerGraphPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerGraphPath = this._dockerGraphPath;
    }
    if (this._mountTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTarget = this._mountTarget;
    }
    if (this._unschedulable !== undefined) {
      hasAnyValues = true;
      internalValueResult.unschedulable = this._unschedulable;
    }
    if (this._userScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.userScript = this._userScript;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    if (this._extraArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs?.internalValue;
    }
    if (this._gpuArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuArgs = this._gpuArgs?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterExistInstanceInstancesParaMasterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desiredPodNumber = undefined;
      this._dockerGraphPath = undefined;
      this._mountTarget = undefined;
      this._unschedulable = undefined;
      this._userScript = undefined;
      this._dataDisk.internalValue = undefined;
      this._extraArgs.internalValue = undefined;
      this._gpuArgs.internalValue = undefined;
      this._labels.internalValue = undefined;
      this._taints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desiredPodNumber = value.desiredPodNumber;
      this._dockerGraphPath = value.dockerGraphPath;
      this._mountTarget = value.mountTarget;
      this._unschedulable = value.unschedulable;
      this._userScript = value.userScript;
      this._dataDisk.internalValue = value.dataDisk;
      this._extraArgs.internalValue = value.extraArgs;
      this._gpuArgs.internalValue = value.gpuArgs;
      this._labels.internalValue = value.labels;
      this._taints.internalValue = value.taints;
    }
  }

  // desired_pod_number - computed: false, optional: true, required: false
  private _desiredPodNumber?: number; 
  public get desiredPodNumber() {
    return this.getNumberAttribute('desired_pod_number');
  }
  public set desiredPodNumber(value: number) {
    this._desiredPodNumber = value;
  }
  public resetDesiredPodNumber() {
    this._desiredPodNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredPodNumberInput() {
    return this._desiredPodNumber;
  }

  // docker_graph_path - computed: false, optional: true, required: false
  private _dockerGraphPath?: string; 
  public get dockerGraphPath() {
    return this.getStringAttribute('docker_graph_path');
  }
  public set dockerGraphPath(value: string) {
    this._dockerGraphPath = value;
  }
  public resetDockerGraphPath() {
    this._dockerGraphPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerGraphPathInput() {
    return this._dockerGraphPath;
  }

  // mount_target - computed: false, optional: true, required: false
  private _mountTarget?: string; 
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }
  public set mountTarget(value: string) {
    this._mountTarget = value;
  }
  public resetMountTarget() {
    this._mountTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetInput() {
    return this._mountTarget;
  }

  // unschedulable - computed: false, optional: true, required: false
  private _unschedulable?: number; 
  public get unschedulable() {
    return this.getNumberAttribute('unschedulable');
  }
  public set unschedulable(value: number) {
    this._unschedulable = value;
  }
  public resetUnschedulable() {
    this._unschedulable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unschedulableInput() {
    return this._unschedulable;
  }

  // user_script - computed: false, optional: true, required: false
  private _userScript?: string; 
  public get userScript() {
    return this.getStringAttribute('user_script');
  }
  public set userScript(value: string) {
    this._userScript = value;
  }
  public resetUserScript() {
    this._userScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userScriptInput() {
    return this._userScript;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new KubernetesClusterExistInstanceInstancesParaMasterConfigDataDiskOutputReference(this, "data_disk");
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: KubernetesClusterExistInstanceInstancesParaMasterConfigDataDisk) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs = new KubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgsOutputReference(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }
  public putExtraArgs(value: KubernetesClusterExistInstanceInstancesParaMasterConfigExtraArgs) {
    this._extraArgs.internalValue = value;
  }
  public resetExtraArgs() {
    this._extraArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs.internalValue;
  }

  // gpu_args - computed: false, optional: true, required: false
  private _gpuArgs = new KubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgsOutputReference(this, "gpu_args");
  public get gpuArgs() {
    return this._gpuArgs;
  }
  public putGpuArgs(value: KubernetesClusterExistInstanceInstancesParaMasterConfigGpuArgs) {
    this._gpuArgs.internalValue = value;
  }
  public resetGpuArgs() {
    this._gpuArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuArgsInput() {
    return this._gpuArgs.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new KubernetesClusterExistInstanceInstancesParaMasterConfigLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: KubernetesClusterExistInstanceInstancesParaMasterConfigLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new KubernetesClusterExistInstanceInstancesParaMasterConfigTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: KubernetesClusterExistInstanceInstancesParaMasterConfigTaints[] | cdktf.IResolvable) {
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
export interface KubernetesClusterExistInstanceInstancesPara {
  /**
  * To specify whether to enable cloud monitor service. Default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#enhanced_monitor_service KubernetesCluster#enhanced_monitor_service}
  */
  readonly enhancedMonitorService?: boolean | cdktf.IResolvable;
  /**
  * To specify whether to enable cloud security service. Default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#enhanced_security_service KubernetesCluster#enhanced_security_service}
  */
  readonly enhancedSecurityService?: boolean | cdktf.IResolvable;
  /**
  * Cluster IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#instance_ids KubernetesCluster#instance_ids}
  */
  readonly instanceIds: string[];
  /**
  * ID list of keys, should be set if `password` not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#key_ids KubernetesCluster#key_ids}
  */
  readonly keyIds?: string[];
  /**
  * Password to access, should be set if `key_ids` not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#password KubernetesCluster#password}
  */
  readonly password?: string;
  /**
  * Security groups to which a CVM instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#security_group_ids KubernetesCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * master_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#master_config KubernetesCluster#master_config}
  */
  readonly masterConfig?: KubernetesClusterExistInstanceInstancesParaMasterConfig;
}

export function kubernetesClusterExistInstanceInstancesParaToTerraform(struct?: KubernetesClusterExistInstanceInstancesParaOutputReference | KubernetesClusterExistInstanceInstancesPara): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_monitor_service: cdktf.booleanToTerraform(struct!.enhancedMonitorService),
    enhanced_security_service: cdktf.booleanToTerraform(struct!.enhancedSecurityService),
    instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceIds),
    key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyIds),
    password: cdktf.stringToTerraform(struct!.password),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    master_config: kubernetesClusterExistInstanceInstancesParaMasterConfigToTerraform(struct!.masterConfig),
  }
}


export function kubernetesClusterExistInstanceInstancesParaToHclTerraform(struct?: KubernetesClusterExistInstanceInstancesParaOutputReference | KubernetesClusterExistInstanceInstancesPara): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_monitor_service: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedMonitorService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enhanced_security_service: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedSecurityService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    master_config: {
      value: kubernetesClusterExistInstanceInstancesParaMasterConfigToHclTerraform(struct!.masterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterExistInstanceInstancesParaMasterConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterExistInstanceInstancesParaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterExistInstanceInstancesPara | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedMonitorService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedMonitorService = this._enhancedMonitorService;
    }
    if (this._enhancedSecurityService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedSecurityService = this._enhancedSecurityService;
    }
    if (this._instanceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceIds = this._instanceIds;
    }
    if (this._keyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIds = this._keyIds;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._masterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterConfig = this._masterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterExistInstanceInstancesPara | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enhancedMonitorService = undefined;
      this._enhancedSecurityService = undefined;
      this._instanceIds = undefined;
      this._keyIds = undefined;
      this._password = undefined;
      this._securityGroupIds = undefined;
      this._masterConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enhancedMonitorService = value.enhancedMonitorService;
      this._enhancedSecurityService = value.enhancedSecurityService;
      this._instanceIds = value.instanceIds;
      this._keyIds = value.keyIds;
      this._password = value.password;
      this._securityGroupIds = value.securityGroupIds;
      this._masterConfig.internalValue = value.masterConfig;
    }
  }

  // enhanced_monitor_service - computed: false, optional: true, required: false
  private _enhancedMonitorService?: boolean | cdktf.IResolvable; 
  public get enhancedMonitorService() {
    return this.getBooleanAttribute('enhanced_monitor_service');
  }
  public set enhancedMonitorService(value: boolean | cdktf.IResolvable) {
    this._enhancedMonitorService = value;
  }
  public resetEnhancedMonitorService() {
    this._enhancedMonitorService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMonitorServiceInput() {
    return this._enhancedMonitorService;
  }

  // enhanced_security_service - computed: false, optional: true, required: false
  private _enhancedSecurityService?: boolean | cdktf.IResolvable; 
  public get enhancedSecurityService() {
    return this.getBooleanAttribute('enhanced_security_service');
  }
  public set enhancedSecurityService(value: boolean | cdktf.IResolvable) {
    this._enhancedSecurityService = value;
  }
  public resetEnhancedSecurityService() {
    this._enhancedSecurityService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedSecurityServiceInput() {
    return this._enhancedSecurityService;
  }

  // instance_ids - computed: false, optional: false, required: true
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // key_ids - computed: false, optional: true, required: false
  private _keyIds?: string[]; 
  public get keyIds() {
    return this.getListAttribute('key_ids');
  }
  public set keyIds(value: string[]) {
    this._keyIds = value;
  }
  public resetKeyIds() {
    this._keyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdsInput() {
    return this._keyIds;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // master_config - computed: false, optional: true, required: false
  private _masterConfig = new KubernetesClusterExistInstanceInstancesParaMasterConfigOutputReference(this, "master_config");
  public get masterConfig() {
    return this._masterConfig;
  }
  public putMasterConfig(value: KubernetesClusterExistInstanceInstancesParaMasterConfig) {
    this._masterConfig.internalValue = value;
  }
  public resetMasterConfig() {
    this._masterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterConfigInput() {
    return this._masterConfig.internalValue;
  }
}
export interface KubernetesClusterExistInstance {
  /**
  * Custom mode cluster, you can specify the number of pods for each node. corresponding to the existed_instances_para.instance_ids parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#desired_pod_numbers KubernetesCluster#desired_pod_numbers}
  */
  readonly desiredPodNumbers?: number[];
  /**
  * Role of existed node. Value: MASTER_ETCD or WORKER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#node_role KubernetesCluster#node_role}
  */
  readonly nodeRole?: string;
  /**
  * instances_para block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#instances_para KubernetesCluster#instances_para}
  */
  readonly instancesPara?: KubernetesClusterExistInstanceInstancesPara;
}

export function kubernetesClusterExistInstanceToTerraform(struct?: KubernetesClusterExistInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_pod_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.desiredPodNumbers),
    node_role: cdktf.stringToTerraform(struct!.nodeRole),
    instances_para: kubernetesClusterExistInstanceInstancesParaToTerraform(struct!.instancesPara),
  }
}


export function kubernetesClusterExistInstanceToHclTerraform(struct?: KubernetesClusterExistInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_pod_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.desiredPodNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    node_role: {
      value: cdktf.stringToHclTerraform(struct!.nodeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances_para: {
      value: kubernetesClusterExistInstanceInstancesParaToHclTerraform(struct!.instancesPara),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterExistInstanceInstancesParaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterExistInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterExistInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredPodNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredPodNumbers = this._desiredPodNumbers;
    }
    if (this._nodeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRole = this._nodeRole;
    }
    if (this._instancesPara?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancesPara = this._instancesPara?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterExistInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredPodNumbers = undefined;
      this._nodeRole = undefined;
      this._instancesPara.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredPodNumbers = value.desiredPodNumbers;
      this._nodeRole = value.nodeRole;
      this._instancesPara.internalValue = value.instancesPara;
    }
  }

  // desired_pod_numbers - computed: false, optional: true, required: false
  private _desiredPodNumbers?: number[]; 
  public get desiredPodNumbers() {
    return this.getNumberListAttribute('desired_pod_numbers');
  }
  public set desiredPodNumbers(value: number[]) {
    this._desiredPodNumbers = value;
  }
  public resetDesiredPodNumbers() {
    this._desiredPodNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredPodNumbersInput() {
    return this._desiredPodNumbers;
  }

  // node_role - computed: false, optional: true, required: false
  private _nodeRole?: string; 
  public get nodeRole() {
    return this.getStringAttribute('node_role');
  }
  public set nodeRole(value: string) {
    this._nodeRole = value;
  }
  public resetNodeRole() {
    this._nodeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRoleInput() {
    return this._nodeRole;
  }

  // instances_para - computed: false, optional: true, required: false
  private _instancesPara = new KubernetesClusterExistInstanceInstancesParaOutputReference(this, "instances_para");
  public get instancesPara() {
    return this._instancesPara;
  }
  public putInstancesPara(value: KubernetesClusterExistInstanceInstancesPara) {
    this._instancesPara.internalValue = value;
  }
  public resetInstancesPara() {
    this._instancesPara.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesParaInput() {
    return this._instancesPara.internalValue;
  }
}

export class KubernetesClusterExistInstanceList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterExistInstance[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterExistInstanceOutputReference {
    return new KubernetesClusterExistInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterExtensionAddon {
  /**
  * Add-on name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Parameter of the add-on resource object in JSON string format, please check the example at the top of page for reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#param KubernetesCluster#param}
  */
  readonly param: string;
}

export function kubernetesClusterExtensionAddonToTerraform(struct?: KubernetesClusterExtensionAddon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    param: cdktf.stringToTerraform(struct!.param),
  }
}


export function kubernetesClusterExtensionAddonToHclTerraform(struct?: KubernetesClusterExtensionAddon | cdktf.IResolvable): any {
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
    param: {
      value: cdktf.stringToHclTerraform(struct!.param),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterExtensionAddonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterExtensionAddon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._param !== undefined) {
      hasAnyValues = true;
      internalValueResult.param = this._param;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterExtensionAddon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._param = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._param = value.param;
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

  // param - computed: false, optional: false, required: true
  private _param?: string; 
  public get param() {
    return this.getStringAttribute('param');
  }
  public set param(value: string) {
    this._param = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramInput() {
    return this._param;
  }
}

export class KubernetesClusterExtensionAddonList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterExtensionAddon[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterExtensionAddonOutputReference {
    return new KubernetesClusterExtensionAddonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterLogAgent {
  /**
  * Whether the log agent enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Kubelet root directory as the literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#kubelet_root_dir KubernetesCluster#kubelet_root_dir}
  */
  readonly kubeletRootDir?: string;
}

export function kubernetesClusterLogAgentToTerraform(struct?: KubernetesClusterLogAgentOutputReference | KubernetesClusterLogAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    kubelet_root_dir: cdktf.stringToTerraform(struct!.kubeletRootDir),
  }
}


export function kubernetesClusterLogAgentToHclTerraform(struct?: KubernetesClusterLogAgentOutputReference | KubernetesClusterLogAgent): any {
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
    kubelet_root_dir: {
      value: cdktf.stringToHclTerraform(struct!.kubeletRootDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterLogAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterLogAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kubeletRootDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletRootDir = this._kubeletRootDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterLogAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._kubeletRootDir = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._kubeletRootDir = value.kubeletRootDir;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // kubelet_root_dir - computed: false, optional: true, required: false
  private _kubeletRootDir?: string; 
  public get kubeletRootDir() {
    return this.getStringAttribute('kubelet_root_dir');
  }
  public set kubeletRootDir(value: string) {
    this._kubeletRootDir = value;
  }
  public resetKubeletRootDir() {
    this._kubeletRootDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletRootDirInput() {
    return this._kubeletRootDir;
  }
}
export interface KubernetesClusterMasterConfigDataDisk {
  /**
  * Indicate whether to auto format and mount or not. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#auto_format_and_mount KubernetesCluster#auto_format_and_mount}
  */
  readonly autoFormatAndMount?: boolean | cdktf.IResolvable;
  /**
  * The name of the device or partition to mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#disk_partition KubernetesCluster#disk_partition}
  */
  readonly diskPartition?: string;
  /**
  * Volume of disk in GB. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#disk_size KubernetesCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Types of disk, available values: `CLOUD_PREMIUM` and `CLOUD_SSD` and `CLOUD_HSSD` and `CLOUD_TSSD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#disk_type KubernetesCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Indicates whether to encrypt data disk, default `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#encrypt KubernetesCluster#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * File system, e.g. `ext3/ext4/xfs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#file_system KubernetesCluster#file_system}
  */
  readonly fileSystem?: string;
  /**
  * ID of the custom CMK in the format of UUID or `kms-abcd1234`. This parameter is used to encrypt cloud disks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#kms_key_id KubernetesCluster#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Mount target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#mount_target KubernetesCluster#mount_target}
  */
  readonly mountTarget?: string;
  /**
  * Data disk snapshot ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#snapshot_id KubernetesCluster#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function kubernetesClusterMasterConfigDataDiskToTerraform(struct?: KubernetesClusterMasterConfigDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_format_and_mount: cdktf.booleanToTerraform(struct!.autoFormatAndMount),
    disk_partition: cdktf.stringToTerraform(struct!.diskPartition),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    encrypt: cdktf.booleanToTerraform(struct!.encrypt),
    file_system: cdktf.stringToTerraform(struct!.fileSystem),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    mount_target: cdktf.stringToTerraform(struct!.mountTarget),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function kubernetesClusterMasterConfigDataDiskToHclTerraform(struct?: KubernetesClusterMasterConfigDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_format_and_mount: {
      value: cdktf.booleanToHclTerraform(struct!.autoFormatAndMount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_partition: {
      value: cdktf.stringToHclTerraform(struct!.diskPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt: {
      value: cdktf.booleanToHclTerraform(struct!.encrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_system: {
      value: cdktf.stringToHclTerraform(struct!.fileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target: {
      value: cdktf.stringToHclTerraform(struct!.mountTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterConfigDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterMasterConfigDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoFormatAndMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFormatAndMount = this._autoFormatAndMount;
    }
    if (this._diskPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPartition = this._diskPartition;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._fileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._mountTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTarget = this._mountTarget;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterConfigDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoFormatAndMount = undefined;
      this._diskPartition = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._encrypt = undefined;
      this._fileSystem = undefined;
      this._kmsKeyId = undefined;
      this._mountTarget = undefined;
      this._snapshotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoFormatAndMount = value.autoFormatAndMount;
      this._diskPartition = value.diskPartition;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._encrypt = value.encrypt;
      this._fileSystem = value.fileSystem;
      this._kmsKeyId = value.kmsKeyId;
      this._mountTarget = value.mountTarget;
      this._snapshotId = value.snapshotId;
    }
  }

  // auto_format_and_mount - computed: false, optional: true, required: false
  private _autoFormatAndMount?: boolean | cdktf.IResolvable; 
  public get autoFormatAndMount() {
    return this.getBooleanAttribute('auto_format_and_mount');
  }
  public set autoFormatAndMount(value: boolean | cdktf.IResolvable) {
    this._autoFormatAndMount = value;
  }
  public resetAutoFormatAndMount() {
    this._autoFormatAndMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFormatAndMountInput() {
    return this._autoFormatAndMount;
  }

  // disk_partition - computed: false, optional: true, required: false
  private _diskPartition?: string; 
  public get diskPartition() {
    return this.getStringAttribute('disk_partition');
  }
  public set diskPartition(value: string) {
    this._diskPartition = value;
  }
  public resetDiskPartition() {
    this._diskPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPartitionInput() {
    return this._diskPartition;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // encrypt - computed: false, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // file_system - computed: false, optional: true, required: false
  private _fileSystem?: string; 
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }
  public set fileSystem(value: string) {
    this._fileSystem = value;
  }
  public resetFileSystem() {
    this._fileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // mount_target - computed: false, optional: true, required: false
  private _mountTarget?: string; 
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }
  public set mountTarget(value: string) {
    this._mountTarget = value;
  }
  public resetMountTarget() {
    this._mountTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetInput() {
    return this._mountTarget;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }
}

export class KubernetesClusterMasterConfigDataDiskList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterMasterConfigDataDisk[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterMasterConfigDataDiskOutputReference {
    return new KubernetesClusterMasterConfigDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterMasterConfig {
  /**
  * Indicates which availability zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#availability_zone KubernetesCluster#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * bandwidth package id. if user is standard user, then the bandwidth_package_id is needed, or default has bandwidth_package_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#bandwidth_package_id KubernetesCluster#bandwidth_package_id}
  */
  readonly bandwidthPackageId?: string;
  /**
  * CAM role name authorized to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cam_role_name KubernetesCluster#cam_role_name}
  */
  readonly camRoleName?: string;
  /**
  * Number of cvm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#count KubernetesCluster#count}
  */
  readonly count?: number;
  /**
  * Indicate to set desired pod number in node. valid when enable_customized_pod_cidr=true, and it override `[globe_]desired_pod_num` for current node. Either all the fields `desired_pod_num` or none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#desired_pod_num KubernetesCluster#desired_pod_num}
  */
  readonly desiredPodNum?: number;
  /**
  * Disaster recover groups to which a CVM instance belongs. Only support maximum 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#disaster_recover_group_ids KubernetesCluster#disaster_recover_group_ids}
  */
  readonly disasterRecoverGroupIds?: string[];
  /**
  * To specify whether to enable cloud monitor service. Default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#enhanced_monitor_service KubernetesCluster#enhanced_monitor_service}
  */
  readonly enhancedMonitorService?: boolean | cdktf.IResolvable;
  /**
  * To specify whether to enable cloud security service. Default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#enhanced_security_service KubernetesCluster#enhanced_security_service}
  */
  readonly enhancedSecurityService?: boolean | cdktf.IResolvable;
  /**
  * The host name of the attached instance. Dot (.) and dash (-) cannot be used as the first and last characters of HostName and cannot be used consecutively. Windows example: The length of the name character is [2, 15], letters (capitalization is not restricted), numbers and dashes (-) are allowed, dots (.) are not supported, and not all numbers are allowed. Examples of other types (Linux, etc.): The character length is [2, 60], and multiple dots are allowed. There is a segment between the dots. Each segment allows letters (with no limitation on capitalization), numbers and dashes (-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#hostname KubernetesCluster#hostname}
  */
  readonly hostname?: string;
  /**
  * Id of cvm hpc cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#hpc_cluster_id KubernetesCluster#hpc_cluster_id}
  */
  readonly hpcClusterId?: string;
  /**
  * The valid image id, format of img-xxx. Note: `img_id` will be replaced with the image corresponding to TKE `cluster_os`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#img_id KubernetesCluster#img_id}
  */
  readonly imgId?: string;
  /**
  * The charge type of instance. Valid values are `PREPAID` and `POSTPAID_BY_HOUR`. The default is `POSTPAID_BY_HOUR`. Note: TencentCloud International only supports `POSTPAID_BY_HOUR`, `PREPAID` instance will not terminated after cluster deleted, and may not allow to delete before expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#instance_charge_type KubernetesCluster#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * The tenancy (time unit is month) of the prepaid instance. NOTE: it only works when instance_charge_type is set to `PREPAID`. Valid values are `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#instance_charge_type_prepaid_period KubernetesCluster#instance_charge_type_prepaid_period}
  */
  readonly instanceChargeTypePrepaidPeriod?: number;
  /**
  * Auto renewal flag. Valid values: `NOTIFY_AND_AUTO_RENEW`: notify upon expiration and renew automatically, `NOTIFY_AND_MANUAL_RENEW`: notify upon expiration but do not renew automatically, `DISABLE_NOTIFY_AND_MANUAL_RENEW`: neither notify upon expiration nor renew automatically. Default value: `NOTIFY_AND_MANUAL_RENEW`. If this parameter is specified as `NOTIFY_AND_AUTO_RENEW`, the instance will be automatically renewed on a monthly basis if the account balance is sufficient. NOTE: it only works when instance_charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#instance_charge_type_prepaid_renew_flag KubernetesCluster#instance_charge_type_prepaid_renew_flag}
  */
  readonly instanceChargeTypePrepaidRenewFlag?: string;
  /**
  * Name of the CVMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#instance_name KubernetesCluster#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Specified types of CVM instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#instance_type KubernetesCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Charge types for network traffic. Available values include `TRAFFIC_POSTPAID_BY_HOUR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#internet_charge_type KubernetesCluster#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Max bandwidth of Internet access in Mbps. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#internet_max_bandwidth_out KubernetesCluster#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * ID list of keys, should be set if `password` not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#key_ids KubernetesCluster#key_ids}
  */
  readonly keyIds?: string[];
  /**
  * Password to access, should be set if `key_ids` not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#password KubernetesCluster#password}
  */
  readonly password?: string;
  /**
  * Specify whether to assign an Internet IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#public_ip_assigned KubernetesCluster#public_ip_assigned}
  */
  readonly publicIpAssigned?: boolean | cdktf.IResolvable;
  /**
  * Security groups to which a CVM instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#security_group_ids KubernetesCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Private network ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#subnet_id KubernetesCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Volume of system disk in GB. Default is `50`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#system_disk_size KubernetesCluster#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * System disk type. For more information on limits of system disk types, see [Storage Overview](https://intl.cloud.tencent.com/document/product/213/4952). Valid values: `LOCAL_BASIC`: local disk, `LOCAL_SSD`: local SSD disk, `CLOUD_SSD`: SSD, `CLOUD_PREMIUM`: Premium Cloud Storage. NOTE: `CLOUD_BASIC`, `LOCAL_BASIC` and `LOCAL_SSD` are deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#system_disk_type KubernetesCluster#system_disk_type}
  */
  readonly systemDiskType?: string;
  /**
  * ase64-encoded User Data text, the length limit is 16KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#user_data KubernetesCluster#user_data}
  */
  readonly userData?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#data_disk KubernetesCluster#data_disk}
  */
  readonly dataDisk?: KubernetesClusterMasterConfigDataDisk[] | cdktf.IResolvable;
}

export function kubernetesClusterMasterConfigToTerraform(struct?: KubernetesClusterMasterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    bandwidth_package_id: cdktf.stringToTerraform(struct!.bandwidthPackageId),
    cam_role_name: cdktf.stringToTerraform(struct!.camRoleName),
    count: cdktf.numberToTerraform(struct!.count),
    desired_pod_num: cdktf.numberToTerraform(struct!.desiredPodNum),
    disaster_recover_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disasterRecoverGroupIds),
    enhanced_monitor_service: cdktf.booleanToTerraform(struct!.enhancedMonitorService),
    enhanced_security_service: cdktf.booleanToTerraform(struct!.enhancedSecurityService),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    hpc_cluster_id: cdktf.stringToTerraform(struct!.hpcClusterId),
    img_id: cdktf.stringToTerraform(struct!.imgId),
    instance_charge_type: cdktf.stringToTerraform(struct!.instanceChargeType),
    instance_charge_type_prepaid_period: cdktf.numberToTerraform(struct!.instanceChargeTypePrepaidPeriod),
    instance_charge_type_prepaid_renew_flag: cdktf.stringToTerraform(struct!.instanceChargeTypePrepaidRenewFlag),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    internet_charge_type: cdktf.stringToTerraform(struct!.internetChargeType),
    internet_max_bandwidth_out: cdktf.numberToTerraform(struct!.internetMaxBandwidthOut),
    key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyIds),
    password: cdktf.stringToTerraform(struct!.password),
    public_ip_assigned: cdktf.booleanToTerraform(struct!.publicIpAssigned),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    system_disk_size: cdktf.numberToTerraform(struct!.systemDiskSize),
    system_disk_type: cdktf.stringToTerraform(struct!.systemDiskType),
    user_data: cdktf.stringToTerraform(struct!.userData),
    data_disk: cdktf.listMapper(kubernetesClusterMasterConfigDataDiskToTerraform, true)(struct!.dataDisk),
  }
}


export function kubernetesClusterMasterConfigToHclTerraform(struct?: KubernetesClusterMasterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_package_id: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthPackageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cam_role_name: {
      value: cdktf.stringToHclTerraform(struct!.camRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    desired_pod_num: {
      value: cdktf.numberToHclTerraform(struct!.desiredPodNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disaster_recover_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disasterRecoverGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enhanced_monitor_service: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedMonitorService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enhanced_security_service: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedSecurityService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hpc_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.hpcClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    img_id: {
      value: cdktf.stringToHclTerraform(struct!.imgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_charge_type_prepaid_period: {
      value: cdktf.numberToHclTerraform(struct!.instanceChargeTypePrepaidPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_charge_type_prepaid_renew_flag: {
      value: cdktf.stringToHclTerraform(struct!.instanceChargeTypePrepaidRenewFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.internetChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_max_bandwidth_out: {
      value: cdktf.numberToHclTerraform(struct!.internetMaxBandwidthOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_assigned: {
      value: cdktf.booleanToHclTerraform(struct!.publicIpAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.systemDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.systemDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk: {
      value: cdktf.listMapperHcl(kubernetesClusterMasterConfigDataDiskToHclTerraform, true)(struct!.dataDisk),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterMasterConfigDataDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterMasterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._bandwidthPackageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthPackageId = this._bandwidthPackageId;
    }
    if (this._camRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.camRoleName = this._camRoleName;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._desiredPodNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredPodNum = this._desiredPodNum;
    }
    if (this._disasterRecoverGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.disasterRecoverGroupIds = this._disasterRecoverGroupIds;
    }
    if (this._enhancedMonitorService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedMonitorService = this._enhancedMonitorService;
    }
    if (this._enhancedSecurityService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedSecurityService = this._enhancedSecurityService;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._hpcClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpcClusterId = this._hpcClusterId;
    }
    if (this._imgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imgId = this._imgId;
    }
    if (this._instanceChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeType = this._instanceChargeType;
    }
    if (this._instanceChargeTypePrepaidPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeTypePrepaidPeriod = this._instanceChargeTypePrepaidPeriod;
    }
    if (this._instanceChargeTypePrepaidRenewFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeTypePrepaidRenewFlag = this._instanceChargeTypePrepaidRenewFlag;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._internetChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetChargeType = this._internetChargeType;
    }
    if (this._internetMaxBandwidthOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetMaxBandwidthOut = this._internetMaxBandwidthOut;
    }
    if (this._keyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIds = this._keyIds;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._publicIpAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAssigned = this._publicIpAssigned;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._systemDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskSize = this._systemDiskSize;
    }
    if (this._systemDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskType = this._systemDiskType;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._bandwidthPackageId = undefined;
      this._camRoleName = undefined;
      this._count = undefined;
      this._desiredPodNum = undefined;
      this._disasterRecoverGroupIds = undefined;
      this._enhancedMonitorService = undefined;
      this._enhancedSecurityService = undefined;
      this._hostname = undefined;
      this._hpcClusterId = undefined;
      this._imgId = undefined;
      this._instanceChargeType = undefined;
      this._instanceChargeTypePrepaidPeriod = undefined;
      this._instanceChargeTypePrepaidRenewFlag = undefined;
      this._instanceName = undefined;
      this._instanceType = undefined;
      this._internetChargeType = undefined;
      this._internetMaxBandwidthOut = undefined;
      this._keyIds = undefined;
      this._password = undefined;
      this._publicIpAssigned = undefined;
      this._securityGroupIds = undefined;
      this._subnetId = undefined;
      this._systemDiskSize = undefined;
      this._systemDiskType = undefined;
      this._userData = undefined;
      this._dataDisk.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._bandwidthPackageId = value.bandwidthPackageId;
      this._camRoleName = value.camRoleName;
      this._count = value.count;
      this._desiredPodNum = value.desiredPodNum;
      this._disasterRecoverGroupIds = value.disasterRecoverGroupIds;
      this._enhancedMonitorService = value.enhancedMonitorService;
      this._enhancedSecurityService = value.enhancedSecurityService;
      this._hostname = value.hostname;
      this._hpcClusterId = value.hpcClusterId;
      this._imgId = value.imgId;
      this._instanceChargeType = value.instanceChargeType;
      this._instanceChargeTypePrepaidPeriod = value.instanceChargeTypePrepaidPeriod;
      this._instanceChargeTypePrepaidRenewFlag = value.instanceChargeTypePrepaidRenewFlag;
      this._instanceName = value.instanceName;
      this._instanceType = value.instanceType;
      this._internetChargeType = value.internetChargeType;
      this._internetMaxBandwidthOut = value.internetMaxBandwidthOut;
      this._keyIds = value.keyIds;
      this._password = value.password;
      this._publicIpAssigned = value.publicIpAssigned;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetId = value.subnetId;
      this._systemDiskSize = value.systemDiskSize;
      this._systemDiskType = value.systemDiskType;
      this._userData = value.userData;
      this._dataDisk.internalValue = value.dataDisk;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // bandwidth_package_id - computed: false, optional: true, required: false
  private _bandwidthPackageId?: string; 
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }
  public set bandwidthPackageId(value: string) {
    this._bandwidthPackageId = value;
  }
  public resetBandwidthPackageId() {
    this._bandwidthPackageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPackageIdInput() {
    return this._bandwidthPackageId;
  }

  // cam_role_name - computed: false, optional: true, required: false
  private _camRoleName?: string; 
  public get camRoleName() {
    return this.getStringAttribute('cam_role_name');
  }
  public set camRoleName(value: string) {
    this._camRoleName = value;
  }
  public resetCamRoleName() {
    this._camRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get camRoleNameInput() {
    return this._camRoleName;
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

  // desired_pod_num - computed: false, optional: true, required: false
  private _desiredPodNum?: number; 
  public get desiredPodNum() {
    return this.getNumberAttribute('desired_pod_num');
  }
  public set desiredPodNum(value: number) {
    this._desiredPodNum = value;
  }
  public resetDesiredPodNum() {
    this._desiredPodNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredPodNumInput() {
    return this._desiredPodNum;
  }

  // disaster_recover_group_ids - computed: false, optional: true, required: false
  private _disasterRecoverGroupIds?: string[]; 
  public get disasterRecoverGroupIds() {
    return this.getListAttribute('disaster_recover_group_ids');
  }
  public set disasterRecoverGroupIds(value: string[]) {
    this._disasterRecoverGroupIds = value;
  }
  public resetDisasterRecoverGroupIds() {
    this._disasterRecoverGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disasterRecoverGroupIdsInput() {
    return this._disasterRecoverGroupIds;
  }

  // enhanced_monitor_service - computed: false, optional: true, required: false
  private _enhancedMonitorService?: boolean | cdktf.IResolvable; 
  public get enhancedMonitorService() {
    return this.getBooleanAttribute('enhanced_monitor_service');
  }
  public set enhancedMonitorService(value: boolean | cdktf.IResolvable) {
    this._enhancedMonitorService = value;
  }
  public resetEnhancedMonitorService() {
    this._enhancedMonitorService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMonitorServiceInput() {
    return this._enhancedMonitorService;
  }

  // enhanced_security_service - computed: false, optional: true, required: false
  private _enhancedSecurityService?: boolean | cdktf.IResolvable; 
  public get enhancedSecurityService() {
    return this.getBooleanAttribute('enhanced_security_service');
  }
  public set enhancedSecurityService(value: boolean | cdktf.IResolvable) {
    this._enhancedSecurityService = value;
  }
  public resetEnhancedSecurityService() {
    this._enhancedSecurityService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedSecurityServiceInput() {
    return this._enhancedSecurityService;
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

  // hpc_cluster_id - computed: false, optional: true, required: false
  private _hpcClusterId?: string; 
  public get hpcClusterId() {
    return this.getStringAttribute('hpc_cluster_id');
  }
  public set hpcClusterId(value: string) {
    this._hpcClusterId = value;
  }
  public resetHpcClusterId() {
    this._hpcClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpcClusterIdInput() {
    return this._hpcClusterId;
  }

  // img_id - computed: false, optional: true, required: false
  private _imgId?: string; 
  public get imgId() {
    return this.getStringAttribute('img_id');
  }
  public set imgId(value: string) {
    this._imgId = value;
  }
  public resetImgId() {
    this._imgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imgIdInput() {
    return this._imgId;
  }

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_charge_type_prepaid_period - computed: false, optional: true, required: false
  private _instanceChargeTypePrepaidPeriod?: number; 
  public get instanceChargeTypePrepaidPeriod() {
    return this.getNumberAttribute('instance_charge_type_prepaid_period');
  }
  public set instanceChargeTypePrepaidPeriod(value: number) {
    this._instanceChargeTypePrepaidPeriod = value;
  }
  public resetInstanceChargeTypePrepaidPeriod() {
    this._instanceChargeTypePrepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypePrepaidPeriodInput() {
    return this._instanceChargeTypePrepaidPeriod;
  }

  // instance_charge_type_prepaid_renew_flag - computed: true, optional: true, required: false
  private _instanceChargeTypePrepaidRenewFlag?: string; 
  public get instanceChargeTypePrepaidRenewFlag() {
    return this.getStringAttribute('instance_charge_type_prepaid_renew_flag');
  }
  public set instanceChargeTypePrepaidRenewFlag(value: string) {
    this._instanceChargeTypePrepaidRenewFlag = value;
  }
  public resetInstanceChargeTypePrepaidRenewFlag() {
    this._instanceChargeTypePrepaidRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypePrepaidRenewFlagInput() {
    return this._instanceChargeTypePrepaidRenewFlag;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // internet_charge_type - computed: false, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // internet_max_bandwidth_out - computed: false, optional: true, required: false
  private _internetMaxBandwidthOut?: number; 
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }
  public set internetMaxBandwidthOut(value: number) {
    this._internetMaxBandwidthOut = value;
  }
  public resetInternetMaxBandwidthOut() {
    this._internetMaxBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthOutInput() {
    return this._internetMaxBandwidthOut;
  }

  // key_ids - computed: false, optional: true, required: false
  private _keyIds?: string[]; 
  public get keyIds() {
    return this.getListAttribute('key_ids');
  }
  public set keyIds(value: string[]) {
    this._keyIds = value;
  }
  public resetKeyIds() {
    this._keyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdsInput() {
    return this._keyIds;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // public_ip_assigned - computed: false, optional: true, required: false
  private _publicIpAssigned?: boolean | cdktf.IResolvable; 
  public get publicIpAssigned() {
    return this.getBooleanAttribute('public_ip_assigned');
  }
  public set publicIpAssigned(value: boolean | cdktf.IResolvable) {
    this._publicIpAssigned = value;
  }
  public resetPublicIpAssigned() {
    this._publicIpAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAssignedInput() {
    return this._publicIpAssigned;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // system_disk_size - computed: false, optional: true, required: false
  private _systemDiskSize?: number; 
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
  public set systemDiskSize(value: number) {
    this._systemDiskSize = value;
  }
  public resetSystemDiskSize() {
    this._systemDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSizeInput() {
    return this._systemDiskSize;
  }

  // system_disk_type - computed: false, optional: true, required: false
  private _systemDiskType?: string; 
  public get systemDiskType() {
    return this.getStringAttribute('system_disk_type');
  }
  public set systemDiskType(value: string) {
    this._systemDiskType = value;
  }
  public resetSystemDiskType() {
    this._systemDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskTypeInput() {
    return this._systemDiskType;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new KubernetesClusterMasterConfigDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: KubernetesClusterMasterConfigDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }
}

export class KubernetesClusterMasterConfigList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterMasterConfig[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterMasterConfigOutputReference {
    return new KubernetesClusterMasterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterNodePoolGlobalConfig {
  /**
  * Indicates which scale-out method will be used when there are multiple scaling groups. Valid values: `random` - select a random scaling group, `most-pods` - select the scaling group that can schedule the most pods, `least-waste` - select the scaling group that can ensure the fewest remaining resources after Pod scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#expander KubernetesCluster#expander}
  */
  readonly expander?: string;
  /**
  * Whether to ignore DaemonSet pods by default when calculating resource usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#ignore_daemon_sets_utilization KubernetesCluster#ignore_daemon_sets_utilization}
  */
  readonly ignoreDaemonSetsUtilization?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to enable scale-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#is_scale_in_enabled KubernetesCluster#is_scale_in_enabled}
  */
  readonly isScaleInEnabled?: boolean | cdktf.IResolvable;
  /**
  * Max concurrent scale-in volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#max_concurrent_scale_in KubernetesCluster#max_concurrent_scale_in}
  */
  readonly maxConcurrentScaleIn?: number;
  /**
  * Number of minutes after cluster scale-out when the system starts judging whether to perform scale-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#scale_in_delay KubernetesCluster#scale_in_delay}
  */
  readonly scaleInDelay?: number;
  /**
  * Number of consecutive minutes of idleness after which the node is subject to scale-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#scale_in_unneeded_time KubernetesCluster#scale_in_unneeded_time}
  */
  readonly scaleInUnneededTime?: number;
  /**
  * Percentage of node resource usage below which the node is considered to be idle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#scale_in_utilization_threshold KubernetesCluster#scale_in_utilization_threshold}
  */
  readonly scaleInUtilizationThreshold?: number;
  /**
  * During scale-in, ignore nodes with local storage pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#skip_nodes_with_local_storage KubernetesCluster#skip_nodes_with_local_storage}
  */
  readonly skipNodesWithLocalStorage?: boolean | cdktf.IResolvable;
  /**
  * During scale-in, ignore nodes with pods in the kube-system namespace that are not managed by DaemonSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#skip_nodes_with_system_pods KubernetesCluster#skip_nodes_with_system_pods}
  */
  readonly skipNodesWithSystemPods?: boolean | cdktf.IResolvable;
}

export function kubernetesClusterNodePoolGlobalConfigToTerraform(struct?: KubernetesClusterNodePoolGlobalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expander: cdktf.stringToTerraform(struct!.expander),
    ignore_daemon_sets_utilization: cdktf.booleanToTerraform(struct!.ignoreDaemonSetsUtilization),
    is_scale_in_enabled: cdktf.booleanToTerraform(struct!.isScaleInEnabled),
    max_concurrent_scale_in: cdktf.numberToTerraform(struct!.maxConcurrentScaleIn),
    scale_in_delay: cdktf.numberToTerraform(struct!.scaleInDelay),
    scale_in_unneeded_time: cdktf.numberToTerraform(struct!.scaleInUnneededTime),
    scale_in_utilization_threshold: cdktf.numberToTerraform(struct!.scaleInUtilizationThreshold),
    skip_nodes_with_local_storage: cdktf.booleanToTerraform(struct!.skipNodesWithLocalStorage),
    skip_nodes_with_system_pods: cdktf.booleanToTerraform(struct!.skipNodesWithSystemPods),
  }
}


export function kubernetesClusterNodePoolGlobalConfigToHclTerraform(struct?: KubernetesClusterNodePoolGlobalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expander: {
      value: cdktf.stringToHclTerraform(struct!.expander),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_daemon_sets_utilization: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDaemonSetsUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_scale_in_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isScaleInEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_concurrent_scale_in: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_in_delay: {
      value: cdktf.numberToHclTerraform(struct!.scaleInDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_in_unneeded_time: {
      value: cdktf.numberToHclTerraform(struct!.scaleInUnneededTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_in_utilization_threshold: {
      value: cdktf.numberToHclTerraform(struct!.scaleInUtilizationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_nodes_with_local_storage: {
      value: cdktf.booleanToHclTerraform(struct!.skipNodesWithLocalStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_nodes_with_system_pods: {
      value: cdktf.booleanToHclTerraform(struct!.skipNodesWithSystemPods),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterNodePoolGlobalConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterNodePoolGlobalConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expander !== undefined) {
      hasAnyValues = true;
      internalValueResult.expander = this._expander;
    }
    if (this._ignoreDaemonSetsUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDaemonSetsUtilization = this._ignoreDaemonSetsUtilization;
    }
    if (this._isScaleInEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isScaleInEnabled = this._isScaleInEnabled;
    }
    if (this._maxConcurrentScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentScaleIn = this._maxConcurrentScaleIn;
    }
    if (this._scaleInDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInDelay = this._scaleInDelay;
    }
    if (this._scaleInUnneededTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInUnneededTime = this._scaleInUnneededTime;
    }
    if (this._scaleInUtilizationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInUtilizationThreshold = this._scaleInUtilizationThreshold;
    }
    if (this._skipNodesWithLocalStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipNodesWithLocalStorage = this._skipNodesWithLocalStorage;
    }
    if (this._skipNodesWithSystemPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipNodesWithSystemPods = this._skipNodesWithSystemPods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNodePoolGlobalConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expander = undefined;
      this._ignoreDaemonSetsUtilization = undefined;
      this._isScaleInEnabled = undefined;
      this._maxConcurrentScaleIn = undefined;
      this._scaleInDelay = undefined;
      this._scaleInUnneededTime = undefined;
      this._scaleInUtilizationThreshold = undefined;
      this._skipNodesWithLocalStorage = undefined;
      this._skipNodesWithSystemPods = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expander = value.expander;
      this._ignoreDaemonSetsUtilization = value.ignoreDaemonSetsUtilization;
      this._isScaleInEnabled = value.isScaleInEnabled;
      this._maxConcurrentScaleIn = value.maxConcurrentScaleIn;
      this._scaleInDelay = value.scaleInDelay;
      this._scaleInUnneededTime = value.scaleInUnneededTime;
      this._scaleInUtilizationThreshold = value.scaleInUtilizationThreshold;
      this._skipNodesWithLocalStorage = value.skipNodesWithLocalStorage;
      this._skipNodesWithSystemPods = value.skipNodesWithSystemPods;
    }
  }

  // expander - computed: true, optional: true, required: false
  private _expander?: string; 
  public get expander() {
    return this.getStringAttribute('expander');
  }
  public set expander(value: string) {
    this._expander = value;
  }
  public resetExpander() {
    this._expander = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expanderInput() {
    return this._expander;
  }

  // ignore_daemon_sets_utilization - computed: true, optional: true, required: false
  private _ignoreDaemonSetsUtilization?: boolean | cdktf.IResolvable; 
  public get ignoreDaemonSetsUtilization() {
    return this.getBooleanAttribute('ignore_daemon_sets_utilization');
  }
  public set ignoreDaemonSetsUtilization(value: boolean | cdktf.IResolvable) {
    this._ignoreDaemonSetsUtilization = value;
  }
  public resetIgnoreDaemonSetsUtilization() {
    this._ignoreDaemonSetsUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDaemonSetsUtilizationInput() {
    return this._ignoreDaemonSetsUtilization;
  }

  // is_scale_in_enabled - computed: true, optional: true, required: false
  private _isScaleInEnabled?: boolean | cdktf.IResolvable; 
  public get isScaleInEnabled() {
    return this.getBooleanAttribute('is_scale_in_enabled');
  }
  public set isScaleInEnabled(value: boolean | cdktf.IResolvable) {
    this._isScaleInEnabled = value;
  }
  public resetIsScaleInEnabled() {
    this._isScaleInEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isScaleInEnabledInput() {
    return this._isScaleInEnabled;
  }

  // max_concurrent_scale_in - computed: true, optional: true, required: false
  private _maxConcurrentScaleIn?: number; 
  public get maxConcurrentScaleIn() {
    return this.getNumberAttribute('max_concurrent_scale_in');
  }
  public set maxConcurrentScaleIn(value: number) {
    this._maxConcurrentScaleIn = value;
  }
  public resetMaxConcurrentScaleIn() {
    this._maxConcurrentScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentScaleInInput() {
    return this._maxConcurrentScaleIn;
  }

  // scale_in_delay - computed: true, optional: true, required: false
  private _scaleInDelay?: number; 
  public get scaleInDelay() {
    return this.getNumberAttribute('scale_in_delay');
  }
  public set scaleInDelay(value: number) {
    this._scaleInDelay = value;
  }
  public resetScaleInDelay() {
    this._scaleInDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInDelayInput() {
    return this._scaleInDelay;
  }

  // scale_in_unneeded_time - computed: true, optional: true, required: false
  private _scaleInUnneededTime?: number; 
  public get scaleInUnneededTime() {
    return this.getNumberAttribute('scale_in_unneeded_time');
  }
  public set scaleInUnneededTime(value: number) {
    this._scaleInUnneededTime = value;
  }
  public resetScaleInUnneededTime() {
    this._scaleInUnneededTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInUnneededTimeInput() {
    return this._scaleInUnneededTime;
  }

  // scale_in_utilization_threshold - computed: true, optional: true, required: false
  private _scaleInUtilizationThreshold?: number; 
  public get scaleInUtilizationThreshold() {
    return this.getNumberAttribute('scale_in_utilization_threshold');
  }
  public set scaleInUtilizationThreshold(value: number) {
    this._scaleInUtilizationThreshold = value;
  }
  public resetScaleInUtilizationThreshold() {
    this._scaleInUtilizationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInUtilizationThresholdInput() {
    return this._scaleInUtilizationThreshold;
  }

  // skip_nodes_with_local_storage - computed: true, optional: true, required: false
  private _skipNodesWithLocalStorage?: boolean | cdktf.IResolvable; 
  public get skipNodesWithLocalStorage() {
    return this.getBooleanAttribute('skip_nodes_with_local_storage');
  }
  public set skipNodesWithLocalStorage(value: boolean | cdktf.IResolvable) {
    this._skipNodesWithLocalStorage = value;
  }
  public resetSkipNodesWithLocalStorage() {
    this._skipNodesWithLocalStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNodesWithLocalStorageInput() {
    return this._skipNodesWithLocalStorage;
  }

  // skip_nodes_with_system_pods - computed: true, optional: true, required: false
  private _skipNodesWithSystemPods?: boolean | cdktf.IResolvable; 
  public get skipNodesWithSystemPods() {
    return this.getBooleanAttribute('skip_nodes_with_system_pods');
  }
  public set skipNodesWithSystemPods(value: boolean | cdktf.IResolvable) {
    this._skipNodesWithSystemPods = value;
  }
  public resetSkipNodesWithSystemPods() {
    this._skipNodesWithSystemPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNodesWithSystemPodsInput() {
    return this._skipNodesWithSystemPods;
  }
}

export class KubernetesClusterNodePoolGlobalConfigList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterNodePoolGlobalConfig[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterNodePoolGlobalConfigOutputReference {
    return new KubernetesClusterNodePoolGlobalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterResourceDeleteOptions {
  /**
  * The deletion mode of CBS resources when the cluster is deleted, `terminate` (destroy), `retain` (retain). Other resources are deleted by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#delete_mode KubernetesCluster#delete_mode}
  */
  readonly deleteMode: string;
  /**
  * Resource type, valid values are `CBS`, `CLB`, and `CVM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#resource_type KubernetesCluster#resource_type}
  */
  readonly resourceType: string;
  /**
  * Whether to skip resources with deletion protection enabled, the default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#skip_deletion_protection KubernetesCluster#skip_deletion_protection}
  */
  readonly skipDeletionProtection?: boolean | cdktf.IResolvable;
}

export function kubernetesClusterResourceDeleteOptionsToTerraform(struct?: KubernetesClusterResourceDeleteOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_mode: cdktf.stringToTerraform(struct!.deleteMode),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    skip_deletion_protection: cdktf.booleanToTerraform(struct!.skipDeletionProtection),
  }
}


export function kubernetesClusterResourceDeleteOptionsToHclTerraform(struct?: KubernetesClusterResourceDeleteOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_mode: {
      value: cdktf.stringToHclTerraform(struct!.deleteMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_deletion_protection: {
      value: cdktf.booleanToHclTerraform(struct!.skipDeletionProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterResourceDeleteOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterResourceDeleteOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMode = this._deleteMode;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._skipDeletionProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDeletionProtection = this._skipDeletionProtection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterResourceDeleteOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteMode = undefined;
      this._resourceType = undefined;
      this._skipDeletionProtection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteMode = value.deleteMode;
      this._resourceType = value.resourceType;
      this._skipDeletionProtection = value.skipDeletionProtection;
    }
  }

  // delete_mode - computed: false, optional: false, required: true
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // skip_deletion_protection - computed: false, optional: true, required: false
  private _skipDeletionProtection?: boolean | cdktf.IResolvable; 
  public get skipDeletionProtection() {
    return this.getBooleanAttribute('skip_deletion_protection');
  }
  public set skipDeletionProtection(value: boolean | cdktf.IResolvable) {
    this._skipDeletionProtection = value;
  }
  public resetSkipDeletionProtection() {
    this._skipDeletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDeletionProtectionInput() {
    return this._skipDeletionProtection;
  }
}

export class KubernetesClusterResourceDeleteOptionsList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterResourceDeleteOptions[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterResourceDeleteOptionsOutputReference {
    return new KubernetesClusterResourceDeleteOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterWorkerConfigDataDisk {
  /**
  * Indicate whether to auto format and mount or not. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#auto_format_and_mount KubernetesCluster#auto_format_and_mount}
  */
  readonly autoFormatAndMount?: boolean | cdktf.IResolvable;
  /**
  * The name of the device or partition to mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#disk_partition KubernetesCluster#disk_partition}
  */
  readonly diskPartition?: string;
  /**
  * Volume of disk in GB. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#disk_size KubernetesCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Types of disk, available values: `CLOUD_PREMIUM` and `CLOUD_SSD` and `CLOUD_HSSD` and `CLOUD_TSSD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#disk_type KubernetesCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Indicates whether to encrypt data disk, default `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#encrypt KubernetesCluster#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * File system, e.g. `ext3/ext4/xfs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#file_system KubernetesCluster#file_system}
  */
  readonly fileSystem?: string;
  /**
  * ID of the custom CMK in the format of UUID or `kms-abcd1234`. This parameter is used to encrypt cloud disks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#kms_key_id KubernetesCluster#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Mount target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#mount_target KubernetesCluster#mount_target}
  */
  readonly mountTarget?: string;
  /**
  * Data disk snapshot ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#snapshot_id KubernetesCluster#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function kubernetesClusterWorkerConfigDataDiskToTerraform(struct?: KubernetesClusterWorkerConfigDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_format_and_mount: cdktf.booleanToTerraform(struct!.autoFormatAndMount),
    disk_partition: cdktf.stringToTerraform(struct!.diskPartition),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    encrypt: cdktf.booleanToTerraform(struct!.encrypt),
    file_system: cdktf.stringToTerraform(struct!.fileSystem),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    mount_target: cdktf.stringToTerraform(struct!.mountTarget),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function kubernetesClusterWorkerConfigDataDiskToHclTerraform(struct?: KubernetesClusterWorkerConfigDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_format_and_mount: {
      value: cdktf.booleanToHclTerraform(struct!.autoFormatAndMount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_partition: {
      value: cdktf.stringToHclTerraform(struct!.diskPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt: {
      value: cdktf.booleanToHclTerraform(struct!.encrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_system: {
      value: cdktf.stringToHclTerraform(struct!.fileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target: {
      value: cdktf.stringToHclTerraform(struct!.mountTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterWorkerConfigDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterWorkerConfigDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoFormatAndMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFormatAndMount = this._autoFormatAndMount;
    }
    if (this._diskPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPartition = this._diskPartition;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._fileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._mountTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTarget = this._mountTarget;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterWorkerConfigDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoFormatAndMount = undefined;
      this._diskPartition = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._encrypt = undefined;
      this._fileSystem = undefined;
      this._kmsKeyId = undefined;
      this._mountTarget = undefined;
      this._snapshotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoFormatAndMount = value.autoFormatAndMount;
      this._diskPartition = value.diskPartition;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._encrypt = value.encrypt;
      this._fileSystem = value.fileSystem;
      this._kmsKeyId = value.kmsKeyId;
      this._mountTarget = value.mountTarget;
      this._snapshotId = value.snapshotId;
    }
  }

  // auto_format_and_mount - computed: false, optional: true, required: false
  private _autoFormatAndMount?: boolean | cdktf.IResolvable; 
  public get autoFormatAndMount() {
    return this.getBooleanAttribute('auto_format_and_mount');
  }
  public set autoFormatAndMount(value: boolean | cdktf.IResolvable) {
    this._autoFormatAndMount = value;
  }
  public resetAutoFormatAndMount() {
    this._autoFormatAndMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFormatAndMountInput() {
    return this._autoFormatAndMount;
  }

  // disk_partition - computed: false, optional: true, required: false
  private _diskPartition?: string; 
  public get diskPartition() {
    return this.getStringAttribute('disk_partition');
  }
  public set diskPartition(value: string) {
    this._diskPartition = value;
  }
  public resetDiskPartition() {
    this._diskPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPartitionInput() {
    return this._diskPartition;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // encrypt - computed: false, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // file_system - computed: false, optional: true, required: false
  private _fileSystem?: string; 
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }
  public set fileSystem(value: string) {
    this._fileSystem = value;
  }
  public resetFileSystem() {
    this._fileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // mount_target - computed: false, optional: true, required: false
  private _mountTarget?: string; 
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }
  public set mountTarget(value: string) {
    this._mountTarget = value;
  }
  public resetMountTarget() {
    this._mountTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetInput() {
    return this._mountTarget;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }
}

export class KubernetesClusterWorkerConfigDataDiskList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterWorkerConfigDataDisk[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterWorkerConfigDataDiskOutputReference {
    return new KubernetesClusterWorkerConfigDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterWorkerConfig {
  /**
  * Indicates which availability zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#availability_zone KubernetesCluster#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * bandwidth package id. if user is standard user, then the bandwidth_package_id is needed, or default has bandwidth_package_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#bandwidth_package_id KubernetesCluster#bandwidth_package_id}
  */
  readonly bandwidthPackageId?: string;
  /**
  * CAM role name authorized to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#cam_role_name KubernetesCluster#cam_role_name}
  */
  readonly camRoleName?: string;
  /**
  * Number of cvm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#count KubernetesCluster#count}
  */
  readonly count?: number;
  /**
  * Indicate to set desired pod number in node. valid when enable_customized_pod_cidr=true, and it override `[globe_]desired_pod_num` for current node. Either all the fields `desired_pod_num` or none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#desired_pod_num KubernetesCluster#desired_pod_num}
  */
  readonly desiredPodNum?: number;
  /**
  * Disaster recover groups to which a CVM instance belongs. Only support maximum 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#disaster_recover_group_ids KubernetesCluster#disaster_recover_group_ids}
  */
  readonly disasterRecoverGroupIds?: string[];
  /**
  * To specify whether to enable cloud monitor service. Default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#enhanced_monitor_service KubernetesCluster#enhanced_monitor_service}
  */
  readonly enhancedMonitorService?: boolean | cdktf.IResolvable;
  /**
  * To specify whether to enable cloud security service. Default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#enhanced_security_service KubernetesCluster#enhanced_security_service}
  */
  readonly enhancedSecurityService?: boolean | cdktf.IResolvable;
  /**
  * The host name of the attached instance. Dot (.) and dash (-) cannot be used as the first and last characters of HostName and cannot be used consecutively. Windows example: The length of the name character is [2, 15], letters (capitalization is not restricted), numbers and dashes (-) are allowed, dots (.) are not supported, and not all numbers are allowed. Examples of other types (Linux, etc.): The character length is [2, 60], and multiple dots are allowed. There is a segment between the dots. Each segment allows letters (with no limitation on capitalization), numbers and dashes (-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#hostname KubernetesCluster#hostname}
  */
  readonly hostname?: string;
  /**
  * Id of cvm hpc cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#hpc_cluster_id KubernetesCluster#hpc_cluster_id}
  */
  readonly hpcClusterId?: string;
  /**
  * The valid image id, format of img-xxx. Note: `img_id` will be replaced with the image corresponding to TKE `cluster_os`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#img_id KubernetesCluster#img_id}
  */
  readonly imgId?: string;
  /**
  * The charge type of instance. Valid values are `PREPAID` and `POSTPAID_BY_HOUR`. The default is `POSTPAID_BY_HOUR`. Note: TencentCloud International only supports `POSTPAID_BY_HOUR`, `PREPAID` instance will not terminated after cluster deleted, and may not allow to delete before expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#instance_charge_type KubernetesCluster#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * The tenancy (time unit is month) of the prepaid instance. NOTE: it only works when instance_charge_type is set to `PREPAID`. Valid values are `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#instance_charge_type_prepaid_period KubernetesCluster#instance_charge_type_prepaid_period}
  */
  readonly instanceChargeTypePrepaidPeriod?: number;
  /**
  * Auto renewal flag. Valid values: `NOTIFY_AND_AUTO_RENEW`: notify upon expiration and renew automatically, `NOTIFY_AND_MANUAL_RENEW`: notify upon expiration but do not renew automatically, `DISABLE_NOTIFY_AND_MANUAL_RENEW`: neither notify upon expiration nor renew automatically. Default value: `NOTIFY_AND_MANUAL_RENEW`. If this parameter is specified as `NOTIFY_AND_AUTO_RENEW`, the instance will be automatically renewed on a monthly basis if the account balance is sufficient. NOTE: it only works when instance_charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#instance_charge_type_prepaid_renew_flag KubernetesCluster#instance_charge_type_prepaid_renew_flag}
  */
  readonly instanceChargeTypePrepaidRenewFlag?: string;
  /**
  * Name of the CVMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#instance_name KubernetesCluster#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Specified types of CVM instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#instance_type KubernetesCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Charge types for network traffic. Available values include `TRAFFIC_POSTPAID_BY_HOUR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#internet_charge_type KubernetesCluster#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Max bandwidth of Internet access in Mbps. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#internet_max_bandwidth_out KubernetesCluster#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * ID list of keys, should be set if `password` not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#key_ids KubernetesCluster#key_ids}
  */
  readonly keyIds?: string[];
  /**
  * Password to access, should be set if `key_ids` not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#password KubernetesCluster#password}
  */
  readonly password?: string;
  /**
  * Specify whether to assign an Internet IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#public_ip_assigned KubernetesCluster#public_ip_assigned}
  */
  readonly publicIpAssigned?: boolean | cdktf.IResolvable;
  /**
  * Security groups to which a CVM instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#security_group_ids KubernetesCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Private network ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#subnet_id KubernetesCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Volume of system disk in GB. Default is `50`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#system_disk_size KubernetesCluster#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * System disk type. For more information on limits of system disk types, see [Storage Overview](https://intl.cloud.tencent.com/document/product/213/4952). Valid values: `LOCAL_BASIC`: local disk, `LOCAL_SSD`: local SSD disk, `CLOUD_SSD`: SSD, `CLOUD_PREMIUM`: Premium Cloud Storage. NOTE: `CLOUD_BASIC`, `LOCAL_BASIC` and `LOCAL_SSD` are deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#system_disk_type KubernetesCluster#system_disk_type}
  */
  readonly systemDiskType?: string;
  /**
  * ase64-encoded User Data text, the length limit is 16KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#user_data KubernetesCluster#user_data}
  */
  readonly userData?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#data_disk KubernetesCluster#data_disk}
  */
  readonly dataDisk?: KubernetesClusterWorkerConfigDataDisk[] | cdktf.IResolvable;
}

export function kubernetesClusterWorkerConfigToTerraform(struct?: KubernetesClusterWorkerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    bandwidth_package_id: cdktf.stringToTerraform(struct!.bandwidthPackageId),
    cam_role_name: cdktf.stringToTerraform(struct!.camRoleName),
    count: cdktf.numberToTerraform(struct!.count),
    desired_pod_num: cdktf.numberToTerraform(struct!.desiredPodNum),
    disaster_recover_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disasterRecoverGroupIds),
    enhanced_monitor_service: cdktf.booleanToTerraform(struct!.enhancedMonitorService),
    enhanced_security_service: cdktf.booleanToTerraform(struct!.enhancedSecurityService),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    hpc_cluster_id: cdktf.stringToTerraform(struct!.hpcClusterId),
    img_id: cdktf.stringToTerraform(struct!.imgId),
    instance_charge_type: cdktf.stringToTerraform(struct!.instanceChargeType),
    instance_charge_type_prepaid_period: cdktf.numberToTerraform(struct!.instanceChargeTypePrepaidPeriod),
    instance_charge_type_prepaid_renew_flag: cdktf.stringToTerraform(struct!.instanceChargeTypePrepaidRenewFlag),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    internet_charge_type: cdktf.stringToTerraform(struct!.internetChargeType),
    internet_max_bandwidth_out: cdktf.numberToTerraform(struct!.internetMaxBandwidthOut),
    key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyIds),
    password: cdktf.stringToTerraform(struct!.password),
    public_ip_assigned: cdktf.booleanToTerraform(struct!.publicIpAssigned),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    system_disk_size: cdktf.numberToTerraform(struct!.systemDiskSize),
    system_disk_type: cdktf.stringToTerraform(struct!.systemDiskType),
    user_data: cdktf.stringToTerraform(struct!.userData),
    data_disk: cdktf.listMapper(kubernetesClusterWorkerConfigDataDiskToTerraform, true)(struct!.dataDisk),
  }
}


export function kubernetesClusterWorkerConfigToHclTerraform(struct?: KubernetesClusterWorkerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_package_id: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthPackageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cam_role_name: {
      value: cdktf.stringToHclTerraform(struct!.camRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    desired_pod_num: {
      value: cdktf.numberToHclTerraform(struct!.desiredPodNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disaster_recover_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disasterRecoverGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enhanced_monitor_service: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedMonitorService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enhanced_security_service: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedSecurityService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hpc_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.hpcClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    img_id: {
      value: cdktf.stringToHclTerraform(struct!.imgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_charge_type_prepaid_period: {
      value: cdktf.numberToHclTerraform(struct!.instanceChargeTypePrepaidPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_charge_type_prepaid_renew_flag: {
      value: cdktf.stringToHclTerraform(struct!.instanceChargeTypePrepaidRenewFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.internetChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_max_bandwidth_out: {
      value: cdktf.numberToHclTerraform(struct!.internetMaxBandwidthOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_assigned: {
      value: cdktf.booleanToHclTerraform(struct!.publicIpAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.systemDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.systemDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk: {
      value: cdktf.listMapperHcl(kubernetesClusterWorkerConfigDataDiskToHclTerraform, true)(struct!.dataDisk),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterWorkerConfigDataDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterWorkerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterWorkerConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._bandwidthPackageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthPackageId = this._bandwidthPackageId;
    }
    if (this._camRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.camRoleName = this._camRoleName;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._desiredPodNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredPodNum = this._desiredPodNum;
    }
    if (this._disasterRecoverGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.disasterRecoverGroupIds = this._disasterRecoverGroupIds;
    }
    if (this._enhancedMonitorService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedMonitorService = this._enhancedMonitorService;
    }
    if (this._enhancedSecurityService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedSecurityService = this._enhancedSecurityService;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._hpcClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpcClusterId = this._hpcClusterId;
    }
    if (this._imgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imgId = this._imgId;
    }
    if (this._instanceChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeType = this._instanceChargeType;
    }
    if (this._instanceChargeTypePrepaidPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeTypePrepaidPeriod = this._instanceChargeTypePrepaidPeriod;
    }
    if (this._instanceChargeTypePrepaidRenewFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeTypePrepaidRenewFlag = this._instanceChargeTypePrepaidRenewFlag;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._internetChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetChargeType = this._internetChargeType;
    }
    if (this._internetMaxBandwidthOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetMaxBandwidthOut = this._internetMaxBandwidthOut;
    }
    if (this._keyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIds = this._keyIds;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._publicIpAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAssigned = this._publicIpAssigned;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._systemDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskSize = this._systemDiskSize;
    }
    if (this._systemDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskType = this._systemDiskType;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterWorkerConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._bandwidthPackageId = undefined;
      this._camRoleName = undefined;
      this._count = undefined;
      this._desiredPodNum = undefined;
      this._disasterRecoverGroupIds = undefined;
      this._enhancedMonitorService = undefined;
      this._enhancedSecurityService = undefined;
      this._hostname = undefined;
      this._hpcClusterId = undefined;
      this._imgId = undefined;
      this._instanceChargeType = undefined;
      this._instanceChargeTypePrepaidPeriod = undefined;
      this._instanceChargeTypePrepaidRenewFlag = undefined;
      this._instanceName = undefined;
      this._instanceType = undefined;
      this._internetChargeType = undefined;
      this._internetMaxBandwidthOut = undefined;
      this._keyIds = undefined;
      this._password = undefined;
      this._publicIpAssigned = undefined;
      this._securityGroupIds = undefined;
      this._subnetId = undefined;
      this._systemDiskSize = undefined;
      this._systemDiskType = undefined;
      this._userData = undefined;
      this._dataDisk.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._bandwidthPackageId = value.bandwidthPackageId;
      this._camRoleName = value.camRoleName;
      this._count = value.count;
      this._desiredPodNum = value.desiredPodNum;
      this._disasterRecoverGroupIds = value.disasterRecoverGroupIds;
      this._enhancedMonitorService = value.enhancedMonitorService;
      this._enhancedSecurityService = value.enhancedSecurityService;
      this._hostname = value.hostname;
      this._hpcClusterId = value.hpcClusterId;
      this._imgId = value.imgId;
      this._instanceChargeType = value.instanceChargeType;
      this._instanceChargeTypePrepaidPeriod = value.instanceChargeTypePrepaidPeriod;
      this._instanceChargeTypePrepaidRenewFlag = value.instanceChargeTypePrepaidRenewFlag;
      this._instanceName = value.instanceName;
      this._instanceType = value.instanceType;
      this._internetChargeType = value.internetChargeType;
      this._internetMaxBandwidthOut = value.internetMaxBandwidthOut;
      this._keyIds = value.keyIds;
      this._password = value.password;
      this._publicIpAssigned = value.publicIpAssigned;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetId = value.subnetId;
      this._systemDiskSize = value.systemDiskSize;
      this._systemDiskType = value.systemDiskType;
      this._userData = value.userData;
      this._dataDisk.internalValue = value.dataDisk;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // bandwidth_package_id - computed: false, optional: true, required: false
  private _bandwidthPackageId?: string; 
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }
  public set bandwidthPackageId(value: string) {
    this._bandwidthPackageId = value;
  }
  public resetBandwidthPackageId() {
    this._bandwidthPackageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPackageIdInput() {
    return this._bandwidthPackageId;
  }

  // cam_role_name - computed: false, optional: true, required: false
  private _camRoleName?: string; 
  public get camRoleName() {
    return this.getStringAttribute('cam_role_name');
  }
  public set camRoleName(value: string) {
    this._camRoleName = value;
  }
  public resetCamRoleName() {
    this._camRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get camRoleNameInput() {
    return this._camRoleName;
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

  // desired_pod_num - computed: false, optional: true, required: false
  private _desiredPodNum?: number; 
  public get desiredPodNum() {
    return this.getNumberAttribute('desired_pod_num');
  }
  public set desiredPodNum(value: number) {
    this._desiredPodNum = value;
  }
  public resetDesiredPodNum() {
    this._desiredPodNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredPodNumInput() {
    return this._desiredPodNum;
  }

  // disaster_recover_group_ids - computed: false, optional: true, required: false
  private _disasterRecoverGroupIds?: string[]; 
  public get disasterRecoverGroupIds() {
    return this.getListAttribute('disaster_recover_group_ids');
  }
  public set disasterRecoverGroupIds(value: string[]) {
    this._disasterRecoverGroupIds = value;
  }
  public resetDisasterRecoverGroupIds() {
    this._disasterRecoverGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disasterRecoverGroupIdsInput() {
    return this._disasterRecoverGroupIds;
  }

  // enhanced_monitor_service - computed: false, optional: true, required: false
  private _enhancedMonitorService?: boolean | cdktf.IResolvable; 
  public get enhancedMonitorService() {
    return this.getBooleanAttribute('enhanced_monitor_service');
  }
  public set enhancedMonitorService(value: boolean | cdktf.IResolvable) {
    this._enhancedMonitorService = value;
  }
  public resetEnhancedMonitorService() {
    this._enhancedMonitorService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMonitorServiceInput() {
    return this._enhancedMonitorService;
  }

  // enhanced_security_service - computed: false, optional: true, required: false
  private _enhancedSecurityService?: boolean | cdktf.IResolvable; 
  public get enhancedSecurityService() {
    return this.getBooleanAttribute('enhanced_security_service');
  }
  public set enhancedSecurityService(value: boolean | cdktf.IResolvable) {
    this._enhancedSecurityService = value;
  }
  public resetEnhancedSecurityService() {
    this._enhancedSecurityService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedSecurityServiceInput() {
    return this._enhancedSecurityService;
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

  // hpc_cluster_id - computed: false, optional: true, required: false
  private _hpcClusterId?: string; 
  public get hpcClusterId() {
    return this.getStringAttribute('hpc_cluster_id');
  }
  public set hpcClusterId(value: string) {
    this._hpcClusterId = value;
  }
  public resetHpcClusterId() {
    this._hpcClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpcClusterIdInput() {
    return this._hpcClusterId;
  }

  // img_id - computed: false, optional: true, required: false
  private _imgId?: string; 
  public get imgId() {
    return this.getStringAttribute('img_id');
  }
  public set imgId(value: string) {
    this._imgId = value;
  }
  public resetImgId() {
    this._imgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imgIdInput() {
    return this._imgId;
  }

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_charge_type_prepaid_period - computed: false, optional: true, required: false
  private _instanceChargeTypePrepaidPeriod?: number; 
  public get instanceChargeTypePrepaidPeriod() {
    return this.getNumberAttribute('instance_charge_type_prepaid_period');
  }
  public set instanceChargeTypePrepaidPeriod(value: number) {
    this._instanceChargeTypePrepaidPeriod = value;
  }
  public resetInstanceChargeTypePrepaidPeriod() {
    this._instanceChargeTypePrepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypePrepaidPeriodInput() {
    return this._instanceChargeTypePrepaidPeriod;
  }

  // instance_charge_type_prepaid_renew_flag - computed: true, optional: true, required: false
  private _instanceChargeTypePrepaidRenewFlag?: string; 
  public get instanceChargeTypePrepaidRenewFlag() {
    return this.getStringAttribute('instance_charge_type_prepaid_renew_flag');
  }
  public set instanceChargeTypePrepaidRenewFlag(value: string) {
    this._instanceChargeTypePrepaidRenewFlag = value;
  }
  public resetInstanceChargeTypePrepaidRenewFlag() {
    this._instanceChargeTypePrepaidRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypePrepaidRenewFlagInput() {
    return this._instanceChargeTypePrepaidRenewFlag;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // internet_charge_type - computed: false, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // internet_max_bandwidth_out - computed: false, optional: true, required: false
  private _internetMaxBandwidthOut?: number; 
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }
  public set internetMaxBandwidthOut(value: number) {
    this._internetMaxBandwidthOut = value;
  }
  public resetInternetMaxBandwidthOut() {
    this._internetMaxBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthOutInput() {
    return this._internetMaxBandwidthOut;
  }

  // key_ids - computed: false, optional: true, required: false
  private _keyIds?: string[]; 
  public get keyIds() {
    return this.getListAttribute('key_ids');
  }
  public set keyIds(value: string[]) {
    this._keyIds = value;
  }
  public resetKeyIds() {
    this._keyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdsInput() {
    return this._keyIds;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // public_ip_assigned - computed: false, optional: true, required: false
  private _publicIpAssigned?: boolean | cdktf.IResolvable; 
  public get publicIpAssigned() {
    return this.getBooleanAttribute('public_ip_assigned');
  }
  public set publicIpAssigned(value: boolean | cdktf.IResolvable) {
    this._publicIpAssigned = value;
  }
  public resetPublicIpAssigned() {
    this._publicIpAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAssignedInput() {
    return this._publicIpAssigned;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // system_disk_size - computed: false, optional: true, required: false
  private _systemDiskSize?: number; 
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
  public set systemDiskSize(value: number) {
    this._systemDiskSize = value;
  }
  public resetSystemDiskSize() {
    this._systemDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSizeInput() {
    return this._systemDiskSize;
  }

  // system_disk_type - computed: false, optional: true, required: false
  private _systemDiskType?: string; 
  public get systemDiskType() {
    return this.getStringAttribute('system_disk_type');
  }
  public set systemDiskType(value: string) {
    this._systemDiskType = value;
  }
  public resetSystemDiskType() {
    this._systemDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskTypeInput() {
    return this._systemDiskType;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new KubernetesClusterWorkerConfigDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: KubernetesClusterWorkerConfigDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }
}

export class KubernetesClusterWorkerConfigList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterWorkerConfig[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterWorkerConfigOutputReference {
    return new KubernetesClusterWorkerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster tencentcloud_kubernetes_cluster}
*/
export class KubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesCluster to import
  * @param importFromId The id of the existing KubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kubernetes_cluster tencentcloud_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acquireClusterAdminRole = config.acquireClusterAdminRole;
    this._autoUpgradeClusterLevel = config.autoUpgradeClusterLevel;
    this._basePodNum = config.basePodNum;
    this._cdcId = config.cdcId;
    this._claimExpiredSeconds = config.claimExpiredSeconds;
    this._clusterCidr = config.clusterCidr;
    this._clusterDeployType = config.clusterDeployType;
    this._clusterDesc = config.clusterDesc;
    this._clusterInternet = config.clusterInternet;
    this._clusterInternetDomain = config.clusterInternetDomain;
    this._clusterInternetSecurityGroup = config.clusterInternetSecurityGroup;
    this._clusterIntranet = config.clusterIntranet;
    this._clusterIntranetDomain = config.clusterIntranetDomain;
    this._clusterIntranetSubnetId = config.clusterIntranetSubnetId;
    this._clusterIpvs = config.clusterIpvs;
    this._clusterLevel = config.clusterLevel;
    this._clusterMaxPodNum = config.clusterMaxPodNum;
    this._clusterMaxServiceNum = config.clusterMaxServiceNum;
    this._clusterName = config.clusterName;
    this._clusterOs = config.clusterOs;
    this._clusterOsType = config.clusterOsType;
    this._clusterSubnetId = config.clusterSubnetId;
    this._clusterVersion = config.clusterVersion;
    this._containerRuntime = config.containerRuntime;
    this._dataPlaneV2 = config.dataPlaneV2;
    this._deletionProtection = config.deletionProtection;
    this._disableAddons = config.disableAddons;
    this._dockerGraphPath = config.dockerGraphPath;
    this._enableCustomizedPodCidr = config.enableCustomizedPodCidr;
    this._eniSubnetIds = config.eniSubnetIds;
    this._extraArgs = config.extraArgs;
    this._globeDesiredPodNum = config.globeDesiredPodNum;
    this._id = config.id;
    this._ignoreClusterCidrConflict = config.ignoreClusterCidrConflict;
    this._ignoreServiceCidrConflict = config.ignoreServiceCidrConflict;
    this._instanceDeleteMode = config.instanceDeleteMode;
    this._isDualStack = config.isDualStack;
    this._isNonStaticIpMode = config.isNonStaticIpMode;
    this._kubeProxyMode = config.kubeProxyMode;
    this._labels = config.labels;
    this._managedClusterInternetSecurityPolicies = config.managedClusterInternetSecurityPolicies;
    this._mountTarget = config.mountTarget;
    this._networkType = config.networkType;
    this._nodeNameType = config.nodeNameType;
    this._preStartUserScript = config.preStartUserScript;
    this._projectId = config.projectId;
    this._runtimeVersion = config.runtimeVersion;
    this._serviceCidr = config.serviceCidr;
    this._tags = config.tags;
    this._unschedulable = config.unschedulable;
    this._upgradeInstancesFollowCluster = config.upgradeInstancesFollowCluster;
    this._vpcCniType = config.vpcCniType;
    this._vpcId = config.vpcId;
    this._authOptions.internalValue = config.authOptions;
    this._clusterAudit.internalValue = config.clusterAudit;
    this._clusterExtraArgs.internalValue = config.clusterExtraArgs;
    this._eventPersistence.internalValue = config.eventPersistence;
    this._existInstance.internalValue = config.existInstance;
    this._extensionAddon.internalValue = config.extensionAddon;
    this._logAgent.internalValue = config.logAgent;
    this._masterConfig.internalValue = config.masterConfig;
    this._nodePoolGlobalConfig.internalValue = config.nodePoolGlobalConfig;
    this._resourceDeleteOptions.internalValue = config.resourceDeleteOptions;
    this._workerConfig.internalValue = config.workerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acquire_cluster_admin_role - computed: false, optional: true, required: false
  private _acquireClusterAdminRole?: boolean | cdktf.IResolvable; 
  public get acquireClusterAdminRole() {
    return this.getBooleanAttribute('acquire_cluster_admin_role');
  }
  public set acquireClusterAdminRole(value: boolean | cdktf.IResolvable) {
    this._acquireClusterAdminRole = value;
  }
  public resetAcquireClusterAdminRole() {
    this._acquireClusterAdminRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acquireClusterAdminRoleInput() {
    return this._acquireClusterAdminRole;
  }

  // auto_upgrade_cluster_level - computed: false, optional: true, required: false
  private _autoUpgradeClusterLevel?: boolean | cdktf.IResolvable; 
  public get autoUpgradeClusterLevel() {
    return this.getBooleanAttribute('auto_upgrade_cluster_level');
  }
  public set autoUpgradeClusterLevel(value: boolean | cdktf.IResolvable) {
    this._autoUpgradeClusterLevel = value;
  }
  public resetAutoUpgradeClusterLevel() {
    this._autoUpgradeClusterLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeClusterLevelInput() {
    return this._autoUpgradeClusterLevel;
  }

  // base_pod_num - computed: false, optional: true, required: false
  private _basePodNum?: number; 
  public get basePodNum() {
    return this.getNumberAttribute('base_pod_num');
  }
  public set basePodNum(value: number) {
    this._basePodNum = value;
  }
  public resetBasePodNum() {
    this._basePodNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePodNumInput() {
    return this._basePodNum;
  }

  // cdc_id - computed: false, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // certification_authority - computed: true, optional: false, required: false
  public get certificationAuthority() {
    return this.getStringAttribute('certification_authority');
  }

  // claim_expired_seconds - computed: true, optional: true, required: false
  private _claimExpiredSeconds?: number; 
  public get claimExpiredSeconds() {
    return this.getNumberAttribute('claim_expired_seconds');
  }
  public set claimExpiredSeconds(value: number) {
    this._claimExpiredSeconds = value;
  }
  public resetClaimExpiredSeconds() {
    this._claimExpiredSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimExpiredSecondsInput() {
    return this._claimExpiredSeconds;
  }

  // cluster_as_enabled - computed: true, optional: false, required: false
  public get clusterAsEnabled() {
    return this.getBooleanAttribute('cluster_as_enabled');
  }

  // cluster_cidr - computed: false, optional: true, required: false
  private _clusterCidr?: string; 
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }
  public set clusterCidr(value: string) {
    this._clusterCidr = value;
  }
  public resetClusterCidr() {
    this._clusterCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCidrInput() {
    return this._clusterCidr;
  }

  // cluster_deploy_type - computed: false, optional: true, required: false
  private _clusterDeployType?: string; 
  public get clusterDeployType() {
    return this.getStringAttribute('cluster_deploy_type');
  }
  public set clusterDeployType(value: string) {
    this._clusterDeployType = value;
  }
  public resetClusterDeployType() {
    this._clusterDeployType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDeployTypeInput() {
    return this._clusterDeployType;
  }

  // cluster_desc - computed: false, optional: true, required: false
  private _clusterDesc?: string; 
  public get clusterDesc() {
    return this.getStringAttribute('cluster_desc');
  }
  public set clusterDesc(value: string) {
    this._clusterDesc = value;
  }
  public resetClusterDesc() {
    this._clusterDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDescInput() {
    return this._clusterDesc;
  }

  // cluster_external_endpoint - computed: true, optional: false, required: false
  public get clusterExternalEndpoint() {
    return this.getStringAttribute('cluster_external_endpoint');
  }

  // cluster_internet - computed: true, optional: true, required: false
  private _clusterInternet?: boolean | cdktf.IResolvable; 
  public get clusterInternet() {
    return this.getBooleanAttribute('cluster_internet');
  }
  public set clusterInternet(value: boolean | cdktf.IResolvable) {
    this._clusterInternet = value;
  }
  public resetClusterInternet() {
    this._clusterInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInternetInput() {
    return this._clusterInternet;
  }

  // cluster_internet_domain - computed: true, optional: true, required: false
  private _clusterInternetDomain?: string; 
  public get clusterInternetDomain() {
    return this.getStringAttribute('cluster_internet_domain');
  }
  public set clusterInternetDomain(value: string) {
    this._clusterInternetDomain = value;
  }
  public resetClusterInternetDomain() {
    this._clusterInternetDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInternetDomainInput() {
    return this._clusterInternetDomain;
  }

  // cluster_internet_security_group - computed: true, optional: true, required: false
  private _clusterInternetSecurityGroup?: string; 
  public get clusterInternetSecurityGroup() {
    return this.getStringAttribute('cluster_internet_security_group');
  }
  public set clusterInternetSecurityGroup(value: string) {
    this._clusterInternetSecurityGroup = value;
  }
  public resetClusterInternetSecurityGroup() {
    this._clusterInternetSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInternetSecurityGroupInput() {
    return this._clusterInternetSecurityGroup;
  }

  // cluster_intranet - computed: true, optional: true, required: false
  private _clusterIntranet?: boolean | cdktf.IResolvable; 
  public get clusterIntranet() {
    return this.getBooleanAttribute('cluster_intranet');
  }
  public set clusterIntranet(value: boolean | cdktf.IResolvable) {
    this._clusterIntranet = value;
  }
  public resetClusterIntranet() {
    this._clusterIntranet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIntranetInput() {
    return this._clusterIntranet;
  }

  // cluster_intranet_domain - computed: true, optional: true, required: false
  private _clusterIntranetDomain?: string; 
  public get clusterIntranetDomain() {
    return this.getStringAttribute('cluster_intranet_domain');
  }
  public set clusterIntranetDomain(value: string) {
    this._clusterIntranetDomain = value;
  }
  public resetClusterIntranetDomain() {
    this._clusterIntranetDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIntranetDomainInput() {
    return this._clusterIntranetDomain;
  }

  // cluster_intranet_subnet_id - computed: true, optional: true, required: false
  private _clusterIntranetSubnetId?: string; 
  public get clusterIntranetSubnetId() {
    return this.getStringAttribute('cluster_intranet_subnet_id');
  }
  public set clusterIntranetSubnetId(value: string) {
    this._clusterIntranetSubnetId = value;
  }
  public resetClusterIntranetSubnetId() {
    this._clusterIntranetSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIntranetSubnetIdInput() {
    return this._clusterIntranetSubnetId;
  }

  // cluster_ipvs - computed: false, optional: true, required: false
  private _clusterIpvs?: boolean | cdktf.IResolvable; 
  public get clusterIpvs() {
    return this.getBooleanAttribute('cluster_ipvs');
  }
  public set clusterIpvs(value: boolean | cdktf.IResolvable) {
    this._clusterIpvs = value;
  }
  public resetClusterIpvs() {
    this._clusterIpvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpvsInput() {
    return this._clusterIpvs;
  }

  // cluster_level - computed: true, optional: true, required: false
  private _clusterLevel?: string; 
  public get clusterLevel() {
    return this.getStringAttribute('cluster_level');
  }
  public set clusterLevel(value: string) {
    this._clusterLevel = value;
  }
  public resetClusterLevel() {
    this._clusterLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLevelInput() {
    return this._clusterLevel;
  }

  // cluster_max_pod_num - computed: false, optional: true, required: false
  private _clusterMaxPodNum?: number; 
  public get clusterMaxPodNum() {
    return this.getNumberAttribute('cluster_max_pod_num');
  }
  public set clusterMaxPodNum(value: number) {
    this._clusterMaxPodNum = value;
  }
  public resetClusterMaxPodNum() {
    this._clusterMaxPodNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMaxPodNumInput() {
    return this._clusterMaxPodNum;
  }

  // cluster_max_service_num - computed: false, optional: true, required: false
  private _clusterMaxServiceNum?: number; 
  public get clusterMaxServiceNum() {
    return this.getNumberAttribute('cluster_max_service_num');
  }
  public set clusterMaxServiceNum(value: number) {
    this._clusterMaxServiceNum = value;
  }
  public resetClusterMaxServiceNum() {
    this._clusterMaxServiceNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMaxServiceNumInput() {
    return this._clusterMaxServiceNum;
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

  // cluster_node_num - computed: true, optional: false, required: false
  public get clusterNodeNum() {
    return this.getNumberAttribute('cluster_node_num');
  }

  // cluster_os - computed: false, optional: true, required: false
  private _clusterOs?: string; 
  public get clusterOs() {
    return this.getStringAttribute('cluster_os');
  }
  public set clusterOs(value: string) {
    this._clusterOs = value;
  }
  public resetClusterOs() {
    this._clusterOs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOsInput() {
    return this._clusterOs;
  }

  // cluster_os_type - computed: false, optional: true, required: false
  private _clusterOsType?: string; 
  public get clusterOsType() {
    return this.getStringAttribute('cluster_os_type');
  }
  public set clusterOsType(value: string) {
    this._clusterOsType = value;
  }
  public resetClusterOsType() {
    this._clusterOsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOsTypeInput() {
    return this._clusterOsType;
  }

  // cluster_subnet_id - computed: false, optional: true, required: false
  private _clusterSubnetId?: string; 
  public get clusterSubnetId() {
    return this.getStringAttribute('cluster_subnet_id');
  }
  public set clusterSubnetId(value: string) {
    this._clusterSubnetId = value;
  }
  public resetClusterSubnetId() {
    this._clusterSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSubnetIdInput() {
    return this._clusterSubnetId;
  }

  // cluster_version - computed: true, optional: true, required: false
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  public resetClusterVersion() {
    this._clusterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
  }

  // container_runtime - computed: true, optional: true, required: false
  private _containerRuntime?: string; 
  public get containerRuntime() {
    return this.getStringAttribute('container_runtime');
  }
  public set containerRuntime(value: string) {
    this._containerRuntime = value;
  }
  public resetContainerRuntime() {
    this._containerRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRuntimeInput() {
    return this._containerRuntime;
  }

  // data_plane_v2 - computed: true, optional: true, required: false
  private _dataPlaneV2?: boolean | cdktf.IResolvable; 
  public get dataPlaneV2() {
    return this.getBooleanAttribute('data_plane_v2');
  }
  public set dataPlaneV2(value: boolean | cdktf.IResolvable) {
    this._dataPlaneV2 = value;
  }
  public resetDataPlaneV2() {
    this._dataPlaneV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPlaneV2Input() {
    return this._dataPlaneV2;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // disable_addons - computed: false, optional: true, required: false
  private _disableAddons?: string[]; 
  public get disableAddons() {
    return this.getListAttribute('disable_addons');
  }
  public set disableAddons(value: string[]) {
    this._disableAddons = value;
  }
  public resetDisableAddons() {
    this._disableAddons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAddonsInput() {
    return this._disableAddons;
  }

  // docker_graph_path - computed: false, optional: true, required: false
  private _dockerGraphPath?: string; 
  public get dockerGraphPath() {
    return this.getStringAttribute('docker_graph_path');
  }
  public set dockerGraphPath(value: string) {
    this._dockerGraphPath = value;
  }
  public resetDockerGraphPath() {
    this._dockerGraphPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerGraphPathInput() {
    return this._dockerGraphPath;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // enable_customized_pod_cidr - computed: false, optional: true, required: false
  private _enableCustomizedPodCidr?: boolean | cdktf.IResolvable; 
  public get enableCustomizedPodCidr() {
    return this.getBooleanAttribute('enable_customized_pod_cidr');
  }
  public set enableCustomizedPodCidr(value: boolean | cdktf.IResolvable) {
    this._enableCustomizedPodCidr = value;
  }
  public resetEnableCustomizedPodCidr() {
    this._enableCustomizedPodCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCustomizedPodCidrInput() {
    return this._enableCustomizedPodCidr;
  }

  // eni_subnet_ids - computed: false, optional: true, required: false
  private _eniSubnetIds?: string[]; 
  public get eniSubnetIds() {
    return this.getListAttribute('eni_subnet_ids');
  }
  public set eniSubnetIds(value: string[]) {
    this._eniSubnetIds = value;
  }
  public resetEniSubnetIds() {
    this._eniSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eniSubnetIdsInput() {
    return this._eniSubnetIds;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs?: string[]; 
  public get extraArgs() {
    return this.getListAttribute('extra_args');
  }
  public set extraArgs(value: string[]) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // globe_desired_pod_num - computed: false, optional: true, required: false
  private _globeDesiredPodNum?: number; 
  public get globeDesiredPodNum() {
    return this.getNumberAttribute('globe_desired_pod_num');
  }
  public set globeDesiredPodNum(value: number) {
    this._globeDesiredPodNum = value;
  }
  public resetGlobeDesiredPodNum() {
    this._globeDesiredPodNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globeDesiredPodNumInput() {
    return this._globeDesiredPodNum;
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

  // ignore_cluster_cidr_conflict - computed: false, optional: true, required: false
  private _ignoreClusterCidrConflict?: boolean | cdktf.IResolvable; 
  public get ignoreClusterCidrConflict() {
    return this.getBooleanAttribute('ignore_cluster_cidr_conflict');
  }
  public set ignoreClusterCidrConflict(value: boolean | cdktf.IResolvable) {
    this._ignoreClusterCidrConflict = value;
  }
  public resetIgnoreClusterCidrConflict() {
    this._ignoreClusterCidrConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreClusterCidrConflictInput() {
    return this._ignoreClusterCidrConflict;
  }

  // ignore_service_cidr_conflict - computed: true, optional: true, required: false
  private _ignoreServiceCidrConflict?: boolean | cdktf.IResolvable; 
  public get ignoreServiceCidrConflict() {
    return this.getBooleanAttribute('ignore_service_cidr_conflict');
  }
  public set ignoreServiceCidrConflict(value: boolean | cdktf.IResolvable) {
    this._ignoreServiceCidrConflict = value;
  }
  public resetIgnoreServiceCidrConflict() {
    this._ignoreServiceCidrConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreServiceCidrConflictInput() {
    return this._ignoreServiceCidrConflict;
  }

  // instance_delete_mode - computed: false, optional: true, required: false
  private _instanceDeleteMode?: string; 
  public get instanceDeleteMode() {
    return this.getStringAttribute('instance_delete_mode');
  }
  public set instanceDeleteMode(value: string) {
    this._instanceDeleteMode = value;
  }
  public resetInstanceDeleteMode() {
    this._instanceDeleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceDeleteModeInput() {
    return this._instanceDeleteMode;
  }

  // is_dual_stack - computed: true, optional: true, required: false
  private _isDualStack?: boolean | cdktf.IResolvable; 
  public get isDualStack() {
    return this.getBooleanAttribute('is_dual_stack');
  }
  public set isDualStack(value: boolean | cdktf.IResolvable) {
    this._isDualStack = value;
  }
  public resetIsDualStack() {
    this._isDualStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDualStackInput() {
    return this._isDualStack;
  }

  // is_non_static_ip_mode - computed: false, optional: true, required: false
  private _isNonStaticIpMode?: boolean | cdktf.IResolvable; 
  public get isNonStaticIpMode() {
    return this.getBooleanAttribute('is_non_static_ip_mode');
  }
  public set isNonStaticIpMode(value: boolean | cdktf.IResolvable) {
    this._isNonStaticIpMode = value;
  }
  public resetIsNonStaticIpMode() {
    this._isNonStaticIpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNonStaticIpModeInput() {
    return this._isNonStaticIpMode;
  }

  // kube_config - computed: true, optional: false, required: false
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }

  // kube_config_intranet - computed: true, optional: false, required: false
  public get kubeConfigIntranet() {
    return this.getStringAttribute('kube_config_intranet');
  }

  // kube_proxy_mode - computed: false, optional: true, required: false
  private _kubeProxyMode?: string; 
  public get kubeProxyMode() {
    return this.getStringAttribute('kube_proxy_mode');
  }
  public set kubeProxyMode(value: string) {
    this._kubeProxyMode = value;
  }
  public resetKubeProxyMode() {
    this._kubeProxyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeProxyModeInput() {
    return this._kubeProxyMode;
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

  // managed_cluster_internet_security_policies - computed: false, optional: true, required: false
  private _managedClusterInternetSecurityPolicies?: string[]; 
  public get managedClusterInternetSecurityPolicies() {
    return this.getListAttribute('managed_cluster_internet_security_policies');
  }
  public set managedClusterInternetSecurityPolicies(value: string[]) {
    this._managedClusterInternetSecurityPolicies = value;
  }
  public resetManagedClusterInternetSecurityPolicies() {
    this._managedClusterInternetSecurityPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterInternetSecurityPoliciesInput() {
    return this._managedClusterInternetSecurityPolicies;
  }

  // mount_target - computed: false, optional: true, required: false
  private _mountTarget?: string; 
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }
  public set mountTarget(value: string) {
    this._mountTarget = value;
  }
  public resetMountTarget() {
    this._mountTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetInput() {
    return this._mountTarget;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // node_name_type - computed: false, optional: true, required: false
  private _nodeNameType?: string; 
  public get nodeNameType() {
    return this.getStringAttribute('node_name_type');
  }
  public set nodeNameType(value: string) {
    this._nodeNameType = value;
  }
  public resetNodeNameType() {
    this._nodeNameType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameTypeInput() {
    return this._nodeNameType;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // pgw_endpoint - computed: true, optional: false, required: false
  public get pgwEndpoint() {
    return this.getStringAttribute('pgw_endpoint');
  }

  // pre_start_user_script - computed: false, optional: true, required: false
  private _preStartUserScript?: string; 
  public get preStartUserScript() {
    return this.getStringAttribute('pre_start_user_script');
  }
  public set preStartUserScript(value: string) {
    this._preStartUserScript = value;
  }
  public resetPreStartUserScript() {
    this._preStartUserScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStartUserScriptInput() {
    return this._preStartUserScript;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }

  // security_policy - computed: true, optional: false, required: false
  public get securityPolicy() {
    return this.getListAttribute('security_policy');
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

  // unschedulable - computed: false, optional: true, required: false
  private _unschedulable?: number; 
  public get unschedulable() {
    return this.getNumberAttribute('unschedulable');
  }
  public set unschedulable(value: number) {
    this._unschedulable = value;
  }
  public resetUnschedulable() {
    this._unschedulable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unschedulableInput() {
    return this._unschedulable;
  }

  // upgrade_instances_follow_cluster - computed: false, optional: true, required: false
  private _upgradeInstancesFollowCluster?: boolean | cdktf.IResolvable; 
  public get upgradeInstancesFollowCluster() {
    return this.getBooleanAttribute('upgrade_instances_follow_cluster');
  }
  public set upgradeInstancesFollowCluster(value: boolean | cdktf.IResolvable) {
    this._upgradeInstancesFollowCluster = value;
  }
  public resetUpgradeInstancesFollowCluster() {
    this._upgradeInstancesFollowCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeInstancesFollowClusterInput() {
    return this._upgradeInstancesFollowCluster;
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // vpc_cni_type - computed: true, optional: true, required: false
  private _vpcCniType?: string; 
  public get vpcCniType() {
    return this.getStringAttribute('vpc_cni_type');
  }
  public set vpcCniType(value: string) {
    this._vpcCniType = value;
  }
  public resetVpcCniType() {
    this._vpcCniType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCniTypeInput() {
    return this._vpcCniType;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // worker_instances_list - computed: true, optional: false, required: false
  private _workerInstancesList = new KubernetesClusterWorkerInstancesListStructList(this, "worker_instances_list", false);
  public get workerInstancesList() {
    return this._workerInstancesList;
  }

  // auth_options - computed: false, optional: true, required: false
  private _authOptions = new KubernetesClusterAuthOptionsOutputReference(this, "auth_options");
  public get authOptions() {
    return this._authOptions;
  }
  public putAuthOptions(value: KubernetesClusterAuthOptions) {
    this._authOptions.internalValue = value;
  }
  public resetAuthOptions() {
    this._authOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authOptionsInput() {
    return this._authOptions.internalValue;
  }

  // cluster_audit - computed: false, optional: true, required: false
  private _clusterAudit = new KubernetesClusterClusterAuditOutputReference(this, "cluster_audit");
  public get clusterAudit() {
    return this._clusterAudit;
  }
  public putClusterAudit(value: KubernetesClusterClusterAudit) {
    this._clusterAudit.internalValue = value;
  }
  public resetClusterAudit() {
    this._clusterAudit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAuditInput() {
    return this._clusterAudit.internalValue;
  }

  // cluster_extra_args - computed: false, optional: true, required: false
  private _clusterExtraArgs = new KubernetesClusterClusterExtraArgsOutputReference(this, "cluster_extra_args");
  public get clusterExtraArgs() {
    return this._clusterExtraArgs;
  }
  public putClusterExtraArgs(value: KubernetesClusterClusterExtraArgs) {
    this._clusterExtraArgs.internalValue = value;
  }
  public resetClusterExtraArgs() {
    this._clusterExtraArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterExtraArgsInput() {
    return this._clusterExtraArgs.internalValue;
  }

  // event_persistence - computed: false, optional: true, required: false
  private _eventPersistence = new KubernetesClusterEventPersistenceOutputReference(this, "event_persistence");
  public get eventPersistence() {
    return this._eventPersistence;
  }
  public putEventPersistence(value: KubernetesClusterEventPersistence) {
    this._eventPersistence.internalValue = value;
  }
  public resetEventPersistence() {
    this._eventPersistence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPersistenceInput() {
    return this._eventPersistence.internalValue;
  }

  // exist_instance - computed: false, optional: true, required: false
  private _existInstance = new KubernetesClusterExistInstanceList(this, "exist_instance", true);
  public get existInstance() {
    return this._existInstance;
  }
  public putExistInstance(value: KubernetesClusterExistInstance[] | cdktf.IResolvable) {
    this._existInstance.internalValue = value;
  }
  public resetExistInstance() {
    this._existInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existInstanceInput() {
    return this._existInstance.internalValue;
  }

  // extension_addon - computed: false, optional: true, required: false
  private _extensionAddon = new KubernetesClusterExtensionAddonList(this, "extension_addon", false);
  public get extensionAddon() {
    return this._extensionAddon;
  }
  public putExtensionAddon(value: KubernetesClusterExtensionAddon[] | cdktf.IResolvable) {
    this._extensionAddon.internalValue = value;
  }
  public resetExtensionAddon() {
    this._extensionAddon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionAddonInput() {
    return this._extensionAddon.internalValue;
  }

  // log_agent - computed: false, optional: true, required: false
  private _logAgent = new KubernetesClusterLogAgentOutputReference(this, "log_agent");
  public get logAgent() {
    return this._logAgent;
  }
  public putLogAgent(value: KubernetesClusterLogAgent) {
    this._logAgent.internalValue = value;
  }
  public resetLogAgent() {
    this._logAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentInput() {
    return this._logAgent.internalValue;
  }

  // master_config - computed: false, optional: true, required: false
  private _masterConfig = new KubernetesClusterMasterConfigList(this, "master_config", false);
  public get masterConfig() {
    return this._masterConfig;
  }
  public putMasterConfig(value: KubernetesClusterMasterConfig[] | cdktf.IResolvable) {
    this._masterConfig.internalValue = value;
  }
  public resetMasterConfig() {
    this._masterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterConfigInput() {
    return this._masterConfig.internalValue;
  }

  // node_pool_global_config - computed: false, optional: true, required: false
  private _nodePoolGlobalConfig = new KubernetesClusterNodePoolGlobalConfigList(this, "node_pool_global_config", false);
  public get nodePoolGlobalConfig() {
    return this._nodePoolGlobalConfig;
  }
  public putNodePoolGlobalConfig(value: KubernetesClusterNodePoolGlobalConfig[] | cdktf.IResolvable) {
    this._nodePoolGlobalConfig.internalValue = value;
  }
  public resetNodePoolGlobalConfig() {
    this._nodePoolGlobalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolGlobalConfigInput() {
    return this._nodePoolGlobalConfig.internalValue;
  }

  // resource_delete_options - computed: false, optional: true, required: false
  private _resourceDeleteOptions = new KubernetesClusterResourceDeleteOptionsList(this, "resource_delete_options", true);
  public get resourceDeleteOptions() {
    return this._resourceDeleteOptions;
  }
  public putResourceDeleteOptions(value: KubernetesClusterResourceDeleteOptions[] | cdktf.IResolvable) {
    this._resourceDeleteOptions.internalValue = value;
  }
  public resetResourceDeleteOptions() {
    this._resourceDeleteOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDeleteOptionsInput() {
    return this._resourceDeleteOptions.internalValue;
  }

  // worker_config - computed: false, optional: true, required: false
  private _workerConfig = new KubernetesClusterWorkerConfigList(this, "worker_config", false);
  public get workerConfig() {
    return this._workerConfig;
  }
  public putWorkerConfig(value: KubernetesClusterWorkerConfig[] | cdktf.IResolvable) {
    this._workerConfig.internalValue = value;
  }
  public resetWorkerConfig() {
    this._workerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigInput() {
    return this._workerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acquire_cluster_admin_role: cdktf.booleanToTerraform(this._acquireClusterAdminRole),
      auto_upgrade_cluster_level: cdktf.booleanToTerraform(this._autoUpgradeClusterLevel),
      base_pod_num: cdktf.numberToTerraform(this._basePodNum),
      cdc_id: cdktf.stringToTerraform(this._cdcId),
      claim_expired_seconds: cdktf.numberToTerraform(this._claimExpiredSeconds),
      cluster_cidr: cdktf.stringToTerraform(this._clusterCidr),
      cluster_deploy_type: cdktf.stringToTerraform(this._clusterDeployType),
      cluster_desc: cdktf.stringToTerraform(this._clusterDesc),
      cluster_internet: cdktf.booleanToTerraform(this._clusterInternet),
      cluster_internet_domain: cdktf.stringToTerraform(this._clusterInternetDomain),
      cluster_internet_security_group: cdktf.stringToTerraform(this._clusterInternetSecurityGroup),
      cluster_intranet: cdktf.booleanToTerraform(this._clusterIntranet),
      cluster_intranet_domain: cdktf.stringToTerraform(this._clusterIntranetDomain),
      cluster_intranet_subnet_id: cdktf.stringToTerraform(this._clusterIntranetSubnetId),
      cluster_ipvs: cdktf.booleanToTerraform(this._clusterIpvs),
      cluster_level: cdktf.stringToTerraform(this._clusterLevel),
      cluster_max_pod_num: cdktf.numberToTerraform(this._clusterMaxPodNum),
      cluster_max_service_num: cdktf.numberToTerraform(this._clusterMaxServiceNum),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_os: cdktf.stringToTerraform(this._clusterOs),
      cluster_os_type: cdktf.stringToTerraform(this._clusterOsType),
      cluster_subnet_id: cdktf.stringToTerraform(this._clusterSubnetId),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      container_runtime: cdktf.stringToTerraform(this._containerRuntime),
      data_plane_v2: cdktf.booleanToTerraform(this._dataPlaneV2),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      disable_addons: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disableAddons),
      docker_graph_path: cdktf.stringToTerraform(this._dockerGraphPath),
      enable_customized_pod_cidr: cdktf.booleanToTerraform(this._enableCustomizedPodCidr),
      eni_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eniSubnetIds),
      extra_args: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extraArgs),
      globe_desired_pod_num: cdktf.numberToTerraform(this._globeDesiredPodNum),
      id: cdktf.stringToTerraform(this._id),
      ignore_cluster_cidr_conflict: cdktf.booleanToTerraform(this._ignoreClusterCidrConflict),
      ignore_service_cidr_conflict: cdktf.booleanToTerraform(this._ignoreServiceCidrConflict),
      instance_delete_mode: cdktf.stringToTerraform(this._instanceDeleteMode),
      is_dual_stack: cdktf.booleanToTerraform(this._isDualStack),
      is_non_static_ip_mode: cdktf.booleanToTerraform(this._isNonStaticIpMode),
      kube_proxy_mode: cdktf.stringToTerraform(this._kubeProxyMode),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      managed_cluster_internet_security_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedClusterInternetSecurityPolicies),
      mount_target: cdktf.stringToTerraform(this._mountTarget),
      network_type: cdktf.stringToTerraform(this._networkType),
      node_name_type: cdktf.stringToTerraform(this._nodeNameType),
      pre_start_user_script: cdktf.stringToTerraform(this._preStartUserScript),
      project_id: cdktf.numberToTerraform(this._projectId),
      runtime_version: cdktf.stringToTerraform(this._runtimeVersion),
      service_cidr: cdktf.stringToTerraform(this._serviceCidr),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      unschedulable: cdktf.numberToTerraform(this._unschedulable),
      upgrade_instances_follow_cluster: cdktf.booleanToTerraform(this._upgradeInstancesFollowCluster),
      vpc_cni_type: cdktf.stringToTerraform(this._vpcCniType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      auth_options: kubernetesClusterAuthOptionsToTerraform(this._authOptions.internalValue),
      cluster_audit: kubernetesClusterClusterAuditToTerraform(this._clusterAudit.internalValue),
      cluster_extra_args: kubernetesClusterClusterExtraArgsToTerraform(this._clusterExtraArgs.internalValue),
      event_persistence: kubernetesClusterEventPersistenceToTerraform(this._eventPersistence.internalValue),
      exist_instance: cdktf.listMapper(kubernetesClusterExistInstanceToTerraform, true)(this._existInstance.internalValue),
      extension_addon: cdktf.listMapper(kubernetesClusterExtensionAddonToTerraform, true)(this._extensionAddon.internalValue),
      log_agent: kubernetesClusterLogAgentToTerraform(this._logAgent.internalValue),
      master_config: cdktf.listMapper(kubernetesClusterMasterConfigToTerraform, true)(this._masterConfig.internalValue),
      node_pool_global_config: cdktf.listMapper(kubernetesClusterNodePoolGlobalConfigToTerraform, true)(this._nodePoolGlobalConfig.internalValue),
      resource_delete_options: cdktf.listMapper(kubernetesClusterResourceDeleteOptionsToTerraform, true)(this._resourceDeleteOptions.internalValue),
      worker_config: cdktf.listMapper(kubernetesClusterWorkerConfigToTerraform, true)(this._workerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acquire_cluster_admin_role: {
        value: cdktf.booleanToHclTerraform(this._acquireClusterAdminRole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_upgrade_cluster_level: {
        value: cdktf.booleanToHclTerraform(this._autoUpgradeClusterLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      base_pod_num: {
        value: cdktf.numberToHclTerraform(this._basePodNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cdc_id: {
        value: cdktf.stringToHclTerraform(this._cdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      claim_expired_seconds: {
        value: cdktf.numberToHclTerraform(this._claimExpiredSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_cidr: {
        value: cdktf.stringToHclTerraform(this._clusterCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_deploy_type: {
        value: cdktf.stringToHclTerraform(this._clusterDeployType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_desc: {
        value: cdktf.stringToHclTerraform(this._clusterDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_internet: {
        value: cdktf.booleanToHclTerraform(this._clusterInternet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_internet_domain: {
        value: cdktf.stringToHclTerraform(this._clusterInternetDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_internet_security_group: {
        value: cdktf.stringToHclTerraform(this._clusterInternetSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_intranet: {
        value: cdktf.booleanToHclTerraform(this._clusterIntranet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_intranet_domain: {
        value: cdktf.stringToHclTerraform(this._clusterIntranetDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_intranet_subnet_id: {
        value: cdktf.stringToHclTerraform(this._clusterIntranetSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_ipvs: {
        value: cdktf.booleanToHclTerraform(this._clusterIpvs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_level: {
        value: cdktf.stringToHclTerraform(this._clusterLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_max_pod_num: {
        value: cdktf.numberToHclTerraform(this._clusterMaxPodNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_max_service_num: {
        value: cdktf.numberToHclTerraform(this._clusterMaxServiceNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_os: {
        value: cdktf.stringToHclTerraform(this._clusterOs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_os_type: {
        value: cdktf.stringToHclTerraform(this._clusterOsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_subnet_id: {
        value: cdktf.stringToHclTerraform(this._clusterSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_version: {
        value: cdktf.stringToHclTerraform(this._clusterVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_runtime: {
        value: cdktf.stringToHclTerraform(this._containerRuntime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_plane_v2: {
        value: cdktf.booleanToHclTerraform(this._dataPlaneV2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_addons: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disableAddons),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      docker_graph_path: {
        value: cdktf.stringToHclTerraform(this._dockerGraphPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_customized_pod_cidr: {
        value: cdktf.booleanToHclTerraform(this._enableCustomizedPodCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eni_subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eniSubnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      extra_args: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extraArgs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      globe_desired_pod_num: {
        value: cdktf.numberToHclTerraform(this._globeDesiredPodNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_cluster_cidr_conflict: {
        value: cdktf.booleanToHclTerraform(this._ignoreClusterCidrConflict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_service_cidr_conflict: {
        value: cdktf.booleanToHclTerraform(this._ignoreServiceCidrConflict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_delete_mode: {
        value: cdktf.stringToHclTerraform(this._instanceDeleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_dual_stack: {
        value: cdktf.booleanToHclTerraform(this._isDualStack),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_non_static_ip_mode: {
        value: cdktf.booleanToHclTerraform(this._isNonStaticIpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kube_proxy_mode: {
        value: cdktf.stringToHclTerraform(this._kubeProxyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      managed_cluster_internet_security_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managedClusterInternetSecurityPolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mount_target: {
        value: cdktf.stringToHclTerraform(this._mountTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_name_type: {
        value: cdktf.stringToHclTerraform(this._nodeNameType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_start_user_script: {
        value: cdktf.stringToHclTerraform(this._preStartUserScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runtime_version: {
        value: cdktf.stringToHclTerraform(this._runtimeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_cidr: {
        value: cdktf.stringToHclTerraform(this._serviceCidr),
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
      unschedulable: {
        value: cdktf.numberToHclTerraform(this._unschedulable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upgrade_instances_follow_cluster: {
        value: cdktf.booleanToHclTerraform(this._upgradeInstancesFollowCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc_cni_type: {
        value: cdktf.stringToHclTerraform(this._vpcCniType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_options: {
        value: kubernetesClusterAuthOptionsToHclTerraform(this._authOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterAuthOptionsList",
      },
      cluster_audit: {
        value: kubernetesClusterClusterAuditToHclTerraform(this._clusterAudit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterClusterAuditList",
      },
      cluster_extra_args: {
        value: kubernetesClusterClusterExtraArgsToHclTerraform(this._clusterExtraArgs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterClusterExtraArgsList",
      },
      event_persistence: {
        value: kubernetesClusterEventPersistenceToHclTerraform(this._eventPersistence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterEventPersistenceList",
      },
      exist_instance: {
        value: cdktf.listMapperHcl(kubernetesClusterExistInstanceToHclTerraform, true)(this._existInstance.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KubernetesClusterExistInstanceList",
      },
      extension_addon: {
        value: cdktf.listMapperHcl(kubernetesClusterExtensionAddonToHclTerraform, true)(this._extensionAddon.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterExtensionAddonList",
      },
      log_agent: {
        value: kubernetesClusterLogAgentToHclTerraform(this._logAgent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterLogAgentList",
      },
      master_config: {
        value: cdktf.listMapperHcl(kubernetesClusterMasterConfigToHclTerraform, true)(this._masterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterMasterConfigList",
      },
      node_pool_global_config: {
        value: cdktf.listMapperHcl(kubernetesClusterNodePoolGlobalConfigToHclTerraform, true)(this._nodePoolGlobalConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterNodePoolGlobalConfigList",
      },
      resource_delete_options: {
        value: cdktf.listMapperHcl(kubernetesClusterResourceDeleteOptionsToHclTerraform, true)(this._resourceDeleteOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KubernetesClusterResourceDeleteOptionsList",
      },
      worker_config: {
        value: cdktf.listMapperHcl(kubernetesClusterWorkerConfigToHclTerraform, true)(this._workerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterWorkerConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
