// generated from terraform resource schema

import { DataKopsClusterAddonsList, 
DataKopsClusterApiList, 
DataKopsClusterAssetsList, 
DataKopsClusterAuthenticationList, 
DataKopsClusterAuthorizationList, 
DataKopsClusterAwsLoadBalancerControllerList, 
DataKopsClusterCertManagerList, 
DataKopsClusterCloudConfigList, 
DataKopsClusterCloudProviderList, 
DataKopsClusterClusterAutoscalerList, 
DataKopsClusterContainerdList, 
DataKopsClusterDockerList, 
DataKopsClusterEgressProxyList, 
DataKopsClusterEtcdClusterList, 
DataKopsClusterExternalCloudControllerManagerList, 
DataKopsClusterExternalDnsList, 
DataKopsClusterFileAssetsList, 
DataKopsClusterHooksList, 
DataKopsClusterIamList, 
DataKopsClusterKarpenterList, 
DataKopsClusterKubeApiServerList, 
DataKopsClusterKubeControllerManagerList, 
DataKopsClusterKubeDnsList, 
DataKopsClusterKubeProxyList, 
DataKopsClusterKubeSchedulerList, 
DataKopsClusterKubeletList, 
DataKopsClusterMasterKubeletList, 
DataKopsClusterMetricsServerList, 
DataKopsClusterNetworkingList, 
DataKopsClusterNodeAuthorizationList, 
DataKopsClusterNodeProblemDetectorList, 
DataKopsClusterNodeTerminationHandlerList, 
DataKopsClusterNtpList, 
DataKopsClusterPodIdentityWebhookList, 
DataKopsClusterRollingUpdateList, 
DataKopsClusterSecretsList, 
DataKopsClusterServiceAccountIssuerDiscoveryList, 
DataKopsClusterSnapshotControllerList, 
DataKopsClusterSubnetList, 
DataKopsClusterTopologyList, 
DataKopsClusterWarmPoolList, 
DataKopsClusterExternalPolicies, 
dataKopsClusterExternalPoliciesToTerraform, 
dataKopsClusterExternalPoliciesToHclTerraform, 
DataKopsClusterExternalPoliciesList, 
DataKopsClusterTagSubnets, 
dataKopsClusterTagSubnetsToTerraform, 
dataKopsClusterTagSubnetsToHclTerraform, 
DataKopsClusterTagSubnetsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataKopsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/cluster#id DataKopsCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/cluster#name DataKopsCluster#name}
  */
  readonly name: string;
  /**
  * external_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/cluster#external_policies DataKopsCluster#external_policies}
  */
  readonly externalPolicies?: DataKopsClusterExternalPolicies[] | cdktf.IResolvable;
  /**
  * tag_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/cluster#tag_subnets DataKopsCluster#tag_subnets}
  */
  readonly tagSubnets?: DataKopsClusterTagSubnets;
}

/**
* Represents a {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/cluster kops_cluster}
*/
export class DataKopsCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kops_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKopsCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKopsCluster to import
  * @param importFromId The id of the existing DataKopsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKopsCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kops_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/cluster kops_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKopsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataKopsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'kops_cluster',
      terraformGeneratorMetadata: {
        providerName: 'kops',
        providerVersion: '1.25.4',
        providerVersionConstraint: '1.25.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._externalPolicies.internalValue = config.externalPolicies;
    this._tagSubnets.internalValue = config.tagSubnets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_network_cidrs - computed: true, optional: false, required: false
  public get additionalNetworkCidrs() {
    return this.getListAttribute('additional_network_cidrs');
  }

  // additional_policies - computed: true, optional: false, required: false
  private _additionalPolicies = new cdktf.StringMap(this, "additional_policies");
  public get additionalPolicies() {
    return this._additionalPolicies;
  }

  // additional_sans - computed: true, optional: false, required: false
  public get additionalSans() {
    return this.getListAttribute('additional_sans');
  }

  // addons - computed: true, optional: false, required: false
  private _addons = new DataKopsClusterAddonsList(this, "addons", false);
  public get addons() {
    return this._addons;
  }

  // admin_ssh_key - computed: true, optional: false, required: false
  public get adminSshKey() {
    return this.getStringAttribute('admin_ssh_key');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // api - computed: true, optional: false, required: false
  private _api = new DataKopsClusterApiList(this, "api", false);
  public get api() {
    return this._api;
  }

  // assets - computed: true, optional: false, required: false
  private _assets = new DataKopsClusterAssetsList(this, "assets", false);
  public get assets() {
    return this._assets;
  }

  // authentication - computed: true, optional: false, required: false
  private _authentication = new DataKopsClusterAuthenticationList(this, "authentication", false);
  public get authentication() {
    return this._authentication;
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataKopsClusterAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // aws_load_balancer_controller - computed: true, optional: false, required: false
  private _awsLoadBalancerController = new DataKopsClusterAwsLoadBalancerControllerList(this, "aws_load_balancer_controller", false);
  public get awsLoadBalancerController() {
    return this._awsLoadBalancerController;
  }

  // cert_manager - computed: true, optional: false, required: false
  private _certManager = new DataKopsClusterCertManagerList(this, "cert_manager", false);
  public get certManager() {
    return this._certManager;
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }

  // cloud_config - computed: true, optional: false, required: false
  private _cloudConfig = new DataKopsClusterCloudConfigList(this, "cloud_config", false);
  public get cloudConfig() {
    return this._cloudConfig;
  }

  // cloud_labels - computed: true, optional: false, required: false
  private _cloudLabels = new cdktf.StringMap(this, "cloud_labels");
  public get cloudLabels() {
    return this._cloudLabels;
  }

  // cloud_provider - computed: true, optional: false, required: false
  private _cloudProvider = new DataKopsClusterCloudProviderList(this, "cloud_provider", false);
  public get cloudProvider() {
    return this._cloudProvider;
  }

  // cluster_autoscaler - computed: true, optional: false, required: false
  private _clusterAutoscaler = new DataKopsClusterClusterAutoscalerList(this, "cluster_autoscaler", false);
  public get clusterAutoscaler() {
    return this._clusterAutoscaler;
  }

  // cluster_dns_domain - computed: true, optional: false, required: false
  public get clusterDnsDomain() {
    return this.getStringAttribute('cluster_dns_domain');
  }

  // config_base - computed: true, optional: false, required: false
  public get configBase() {
    return this.getStringAttribute('config_base');
  }

  // config_store - computed: true, optional: false, required: false
  public get configStore() {
    return this.getStringAttribute('config_store');
  }

  // container_runtime - computed: true, optional: false, required: false
  public get containerRuntime() {
    return this.getStringAttribute('container_runtime');
  }

  // containerd - computed: true, optional: false, required: false
  private _containerd = new DataKopsClusterContainerdList(this, "containerd", false);
  public get containerd() {
    return this._containerd;
  }

  // dns_zone - computed: true, optional: false, required: false
  public get dnsZone() {
    return this.getStringAttribute('dns_zone');
  }

  // docker - computed: true, optional: false, required: false
  private _docker = new DataKopsClusterDockerList(this, "docker", false);
  public get docker() {
    return this._docker;
  }

  // egress_proxy - computed: true, optional: false, required: false
  private _egressProxy = new DataKopsClusterEgressProxyList(this, "egress_proxy", false);
  public get egressProxy() {
    return this._egressProxy;
  }

  // encryption_config - computed: true, optional: false, required: false
  public get encryptionConfig() {
    return this.getBooleanAttribute('encryption_config');
  }

  // etcd_cluster - computed: true, optional: false, required: false
  private _etcdCluster = new DataKopsClusterEtcdClusterList(this, "etcd_cluster", false);
  public get etcdCluster() {
    return this._etcdCluster;
  }

  // external_cloud_controller_manager - computed: true, optional: false, required: false
  private _externalCloudControllerManager = new DataKopsClusterExternalCloudControllerManagerList(this, "external_cloud_controller_manager", false);
  public get externalCloudControllerManager() {
    return this._externalCloudControllerManager;
  }

  // external_dns - computed: true, optional: false, required: false
  private _externalDns = new DataKopsClusterExternalDnsList(this, "external_dns", false);
  public get externalDns() {
    return this._externalDns;
  }

  // file_assets - computed: true, optional: false, required: false
  private _fileAssets = new DataKopsClusterFileAssetsList(this, "file_assets", false);
  public get fileAssets() {
    return this._fileAssets;
  }

  // hooks - computed: true, optional: false, required: false
  private _hooks = new DataKopsClusterHooksList(this, "hooks", false);
  public get hooks() {
    return this._hooks;
  }

  // iam - computed: true, optional: false, required: false
  private _iam = new DataKopsClusterIamList(this, "iam", false);
  public get iam() {
    return this._iam;
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

  // isolate_masters - computed: true, optional: false, required: false
  public get isolateMasters() {
    return this.getBooleanAttribute('isolate_masters');
  }

  // karpenter - computed: true, optional: false, required: false
  private _karpenter = new DataKopsClusterKarpenterList(this, "karpenter", false);
  public get karpenter() {
    return this._karpenter;
  }

  // key_store - computed: true, optional: false, required: false
  public get keyStore() {
    return this.getStringAttribute('key_store');
  }

  // kube_api_server - computed: true, optional: false, required: false
  private _kubeApiServer = new DataKopsClusterKubeApiServerList(this, "kube_api_server", false);
  public get kubeApiServer() {
    return this._kubeApiServer;
  }

  // kube_controller_manager - computed: true, optional: false, required: false
  private _kubeControllerManager = new DataKopsClusterKubeControllerManagerList(this, "kube_controller_manager", false);
  public get kubeControllerManager() {
    return this._kubeControllerManager;
  }

  // kube_dns - computed: true, optional: false, required: false
  private _kubeDns = new DataKopsClusterKubeDnsList(this, "kube_dns", false);
  public get kubeDns() {
    return this._kubeDns;
  }

  // kube_proxy - computed: true, optional: false, required: false
  private _kubeProxy = new DataKopsClusterKubeProxyList(this, "kube_proxy", false);
  public get kubeProxy() {
    return this._kubeProxy;
  }

  // kube_scheduler - computed: true, optional: false, required: false
  private _kubeScheduler = new DataKopsClusterKubeSchedulerList(this, "kube_scheduler", false);
  public get kubeScheduler() {
    return this._kubeScheduler;
  }

  // kubelet - computed: true, optional: false, required: false
  private _kubelet = new DataKopsClusterKubeletList(this, "kubelet", false);
  public get kubelet() {
    return this._kubelet;
  }

  // kubernetes_api_access - computed: true, optional: false, required: false
  public get kubernetesApiAccess() {
    return this.getListAttribute('kubernetes_api_access');
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // master_internal_name - computed: true, optional: false, required: false
  public get masterInternalName() {
    return this.getStringAttribute('master_internal_name');
  }

  // master_kubelet - computed: true, optional: false, required: false
  private _masterKubelet = new DataKopsClusterMasterKubeletList(this, "master_kubelet", false);
  public get masterKubelet() {
    return this._masterKubelet;
  }

  // master_public_name - computed: true, optional: false, required: false
  public get masterPublicName() {
    return this.getStringAttribute('master_public_name');
  }

  // metrics_server - computed: true, optional: false, required: false
  private _metricsServer = new DataKopsClusterMetricsServerList(this, "metrics_server", false);
  public get metricsServer() {
    return this._metricsServer;
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

  // network_cidr - computed: true, optional: false, required: false
  public get networkCidr() {
    return this.getStringAttribute('network_cidr');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // networking - computed: true, optional: false, required: false
  private _networking = new DataKopsClusterNetworkingList(this, "networking", false);
  public get networking() {
    return this._networking;
  }

  // node_authorization - computed: true, optional: false, required: false
  private _nodeAuthorization = new DataKopsClusterNodeAuthorizationList(this, "node_authorization", false);
  public get nodeAuthorization() {
    return this._nodeAuthorization;
  }

  // node_port_access - computed: true, optional: false, required: false
  public get nodePortAccess() {
    return this.getListAttribute('node_port_access');
  }

  // node_problem_detector - computed: true, optional: false, required: false
  private _nodeProblemDetector = new DataKopsClusterNodeProblemDetectorList(this, "node_problem_detector", false);
  public get nodeProblemDetector() {
    return this._nodeProblemDetector;
  }

  // node_termination_handler - computed: true, optional: false, required: false
  private _nodeTerminationHandler = new DataKopsClusterNodeTerminationHandlerList(this, "node_termination_handler", false);
  public get nodeTerminationHandler() {
    return this._nodeTerminationHandler;
  }

  // non_masquerade_cidr - computed: true, optional: false, required: false
  public get nonMasqueradeCidr() {
    return this.getStringAttribute('non_masquerade_cidr');
  }

  // ntp - computed: true, optional: false, required: false
  private _ntp = new DataKopsClusterNtpList(this, "ntp", false);
  public get ntp() {
    return this._ntp;
  }

  // pod_cidr - computed: true, optional: false, required: false
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }

  // pod_identity_webhook - computed: true, optional: false, required: false
  private _podIdentityWebhook = new DataKopsClusterPodIdentityWebhookList(this, "pod_identity_webhook", false);
  public get podIdentityWebhook() {
    return this._podIdentityWebhook;
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // rolling_update - computed: true, optional: false, required: false
  private _rollingUpdate = new DataKopsClusterRollingUpdateList(this, "rolling_update", false);
  public get rollingUpdate() {
    return this._rollingUpdate;
  }

  // secret_store - computed: true, optional: false, required: false
  public get secretStore() {
    return this.getStringAttribute('secret_store');
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new DataKopsClusterSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }

  // service_account_issuer_discovery - computed: true, optional: false, required: false
  private _serviceAccountIssuerDiscovery = new DataKopsClusterServiceAccountIssuerDiscoveryList(this, "service_account_issuer_discovery", false);
  public get serviceAccountIssuerDiscovery() {
    return this._serviceAccountIssuerDiscovery;
  }

  // service_cluster_ip_range - computed: true, optional: false, required: false
  public get serviceClusterIpRange() {
    return this.getStringAttribute('service_cluster_ip_range');
  }

  // snapshot_controller - computed: true, optional: false, required: false
  private _snapshotController = new DataKopsClusterSnapshotControllerList(this, "snapshot_controller", false);
  public get snapshotController() {
    return this._snapshotController;
  }

  // ssh_access - computed: true, optional: false, required: false
  public get sshAccess() {
    return this.getListAttribute('ssh_access');
  }

  // ssh_key_name - computed: true, optional: false, required: false
  public get sshKeyName() {
    return this.getStringAttribute('ssh_key_name');
  }

  // subnet - computed: true, optional: false, required: false
  private _subnet = new DataKopsClusterSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }

  // sysctl_parameters - computed: true, optional: false, required: false
  public get sysctlParameters() {
    return this.getListAttribute('sysctl_parameters');
  }

  // topology - computed: true, optional: false, required: false
  private _topology = new DataKopsClusterTopologyList(this, "topology", false);
  public get topology() {
    return this._topology;
  }

  // update_policy - computed: true, optional: false, required: false
  public get updatePolicy() {
    return this.getStringAttribute('update_policy');
  }

  // use_host_certificates - computed: true, optional: false, required: false
  public get useHostCertificates() {
    return this.getBooleanAttribute('use_host_certificates');
  }

  // warm_pool - computed: true, optional: false, required: false
  private _warmPool = new DataKopsClusterWarmPoolList(this, "warm_pool", false);
  public get warmPool() {
    return this._warmPool;
  }

  // external_policies - computed: false, optional: true, required: false
  private _externalPolicies = new DataKopsClusterExternalPoliciesList(this, "external_policies", false);
  public get externalPolicies() {
    return this._externalPolicies;
  }
  public putExternalPolicies(value: DataKopsClusterExternalPolicies[] | cdktf.IResolvable) {
    this._externalPolicies.internalValue = value;
  }
  public resetExternalPolicies() {
    this._externalPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPoliciesInput() {
    return this._externalPolicies.internalValue;
  }

  // tag_subnets - computed: false, optional: true, required: false
  private _tagSubnets = new DataKopsClusterTagSubnetsOutputReference(this, "tag_subnets");
  public get tagSubnets() {
    return this._tagSubnets;
  }
  public putTagSubnets(value: DataKopsClusterTagSubnets) {
    this._tagSubnets.internalValue = value;
  }
  public resetTagSubnets() {
    this._tagSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSubnetsInput() {
    return this._tagSubnets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      external_policies: cdktf.listMapper(dataKopsClusterExternalPoliciesToTerraform, true)(this._externalPolicies.internalValue),
      tag_subnets: dataKopsClusterTagSubnetsToTerraform(this._tagSubnets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      external_policies: {
        value: cdktf.listMapperHcl(dataKopsClusterExternalPoliciesToHclTerraform, true)(this._externalPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKopsClusterExternalPoliciesList",
      },
      tag_subnets: {
        value: dataKopsClusterTagSubnetsToHclTerraform(this._tagSubnets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKopsClusterTagSubnetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
