// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The network bandwidth of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#bandwidth ContainerCluster#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * The network type of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#bandwidth_type ContainerCluster#bandwidth_type}
  */
  readonly bandwidthType: string;
  /**
  * The CIDR which the cluster is going to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#cluster_cidr ContainerCluster#cluster_cidr}
  */
  readonly clusterCidr: string;
  /**
  * The description of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#cluster_desc ContainerCluster#cluster_desc}
  */
  readonly clusterDesc?: string;
  /**
  * The name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#cluster_name ContainerCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * The kubernetes version of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#cluster_version ContainerCluster#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * The cpu of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#cpu ContainerCluster#cpu}
  */
  readonly cpu?: number;
  /**
  * The type of node needed by cvm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#cvm_type ContainerCluster#cvm_type}
  */
  readonly cvmType?: string;
  /**
  * The docker graph path is going to mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#docker_graph_path ContainerCluster#docker_graph_path}
  */
  readonly dockerGraphPath?: string;
  /**
  * The node number is going to create in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#goods_num ContainerCluster#goods_num}
  */
  readonly goodsNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#id ContainerCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name ot node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#instance_name ContainerCluster#instance_name}
  */
  readonly instanceName?: string;
  /**
  * The instance type of the node needed by cvm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#instance_type ContainerCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Describe whether the node enable the gateway capability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#is_vpc_gateway ContainerCluster#is_vpc_gateway}
  */
  readonly isVpcGateway: number;
  /**
  * The key_id of each node(if using key pair to access).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#key_id ContainerCluster#key_id}
  */
  readonly keyId?: string;
  /**
  * The memory of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#mem ContainerCluster#mem}
  */
  readonly mem?: number;
  /**
  * The path which volume is going to be mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#mount_target ContainerCluster#mount_target}
  */
  readonly mountTarget?: string;
  /**
  * The system os name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#os_name ContainerCluster#os_name}
  */
  readonly osName: string;
  /**
  * The password of each node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#password ContainerCluster#password}
  */
  readonly password?: string;
  /**
  * The puchase duration of the node needed by cvm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#period ContainerCluster#period}
  */
  readonly period?: number;
  /**
  * Indicate whether wan ip is needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#require_wan_ip ContainerCluster#require_wan_ip}
  */
  readonly requireWanIp?: number;
  /**
  * The size of the root volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#root_size ContainerCluster#root_size}
  */
  readonly rootSize: number;
  /**
  * The type of the root volume. see more from CVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#root_type ContainerCluster#root_type}
  */
  readonly rootType?: string;
  /**
  * The security group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#sg_id ContainerCluster#sg_id}
  */
  readonly sgId?: string;
  /**
  * The size of the data volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#storage_size ContainerCluster#storage_size}
  */
  readonly storageSize: number;
  /**
  * The type of the data volume. see more from CVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#storage_type ContainerCluster#storage_type}
  */
  readonly storageType?: string;
  /**
  * The subnet id which the node stays in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#subnet_id ContainerCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Determine whether the node will be schedulable. 0 is the default meaning node will be schedulable. 1 for unschedulable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#unschedulable ContainerCluster#unschedulable}
  */
  readonly unschedulable?: number;
  /**
  * User defined script in a base64-format. The script runs after the kubernetes component is ready on node. see more from CCS api documents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#user_script ContainerCluster#user_script}
  */
  readonly userScript?: string;
  /**
  * Specify vpc which the node(s) stay in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#vpc_id ContainerCluster#vpc_id}
  */
  readonly vpcId: string;
  /**
  * The zone which the node stays in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#zone_id ContainerCluster#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster tencentcloud_container_cluster}
*/
export class ContainerCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_container_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerCluster to import
  * @param importFromId The id of the existing ContainerCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_container_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/container_cluster tencentcloud_container_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_container_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._bandwidthType = config.bandwidthType;
    this._clusterCidr = config.clusterCidr;
    this._clusterDesc = config.clusterDesc;
    this._clusterName = config.clusterName;
    this._clusterVersion = config.clusterVersion;
    this._cpu = config.cpu;
    this._cvmType = config.cvmType;
    this._dockerGraphPath = config.dockerGraphPath;
    this._goodsNum = config.goodsNum;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._instanceType = config.instanceType;
    this._isVpcGateway = config.isVpcGateway;
    this._keyId = config.keyId;
    this._mem = config.mem;
    this._mountTarget = config.mountTarget;
    this._osName = config.osName;
    this._password = config.password;
    this._period = config.period;
    this._requireWanIp = config.requireWanIp;
    this._rootSize = config.rootSize;
    this._rootType = config.rootType;
    this._sgId = config.sgId;
    this._storageSize = config.storageSize;
    this._storageType = config.storageType;
    this._subnetId = config.subnetId;
    this._unschedulable = config.unschedulable;
    this._userScript = config.userScript;
    this._vpcId = config.vpcId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // bandwidth_type - computed: false, optional: false, required: true
  private _bandwidthType?: string; 
  public get bandwidthType() {
    return this.getStringAttribute('bandwidth_type');
  }
  public set bandwidthType(value: string) {
    this._bandwidthType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthTypeInput() {
    return this._bandwidthType;
  }

  // cluster_cidr - computed: false, optional: false, required: true
  private _clusterCidr?: string; 
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }
  public set clusterCidr(value: string) {
    this._clusterCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCidrInput() {
    return this._clusterCidr;
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

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_version - computed: false, optional: true, required: false
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

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // cvm_type - computed: false, optional: true, required: false
  private _cvmType?: string; 
  public get cvmType() {
    return this.getStringAttribute('cvm_type');
  }
  public set cvmType(value: string) {
    this._cvmType = value;
  }
  public resetCvmType() {
    this._cvmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmTypeInput() {
    return this._cvmType;
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

  // goods_num - computed: false, optional: false, required: true
  private _goodsNum?: number; 
  public get goodsNum() {
    return this.getNumberAttribute('goods_num');
  }
  public set goodsNum(value: number) {
    this._goodsNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goodsNumInput() {
    return this._goodsNum;
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

  // is_vpc_gateway - computed: false, optional: false, required: true
  private _isVpcGateway?: number; 
  public get isVpcGateway() {
    return this.getNumberAttribute('is_vpc_gateway');
  }
  public set isVpcGateway(value: number) {
    this._isVpcGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isVpcGatewayInput() {
    return this._isVpcGateway;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // mem - computed: false, optional: true, required: false
  private _mem?: number; 
  public get mem() {
    return this.getNumberAttribute('mem');
  }
  public set mem(value: number) {
    this._mem = value;
  }
  public resetMem() {
    this._mem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memInput() {
    return this._mem;
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

  // nodes_num - computed: true, optional: false, required: false
  public get nodesNum() {
    return this.getNumberAttribute('nodes_num');
  }

  // nodes_status - computed: true, optional: false, required: false
  public get nodesStatus() {
    return this.getStringAttribute('nodes_status');
  }

  // os_name - computed: false, optional: false, required: true
  private _osName?: string; 
  public get osName() {
    return this.getStringAttribute('os_name');
  }
  public set osName(value: string) {
    this._osName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osNameInput() {
    return this._osName;
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // require_wan_ip - computed: false, optional: true, required: false
  private _requireWanIp?: number; 
  public get requireWanIp() {
    return this.getNumberAttribute('require_wan_ip');
  }
  public set requireWanIp(value: number) {
    this._requireWanIp = value;
  }
  public resetRequireWanIp() {
    this._requireWanIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireWanIpInput() {
    return this._requireWanIp;
  }

  // root_size - computed: false, optional: false, required: true
  private _rootSize?: number; 
  public get rootSize() {
    return this.getNumberAttribute('root_size');
  }
  public set rootSize(value: number) {
    this._rootSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSizeInput() {
    return this._rootSize;
  }

  // root_type - computed: false, optional: true, required: false
  private _rootType?: string; 
  public get rootType() {
    return this.getStringAttribute('root_type');
  }
  public set rootType(value: string) {
    this._rootType = value;
  }
  public resetRootType() {
    this._rootType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootTypeInput() {
    return this._rootType;
  }

  // sg_id - computed: false, optional: true, required: false
  private _sgId?: string; 
  public get sgId() {
    return this.getStringAttribute('sg_id');
  }
  public set sgId(value: string) {
    this._sgId = value;
  }
  public resetSgId() {
    this._sgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgIdInput() {
    return this._sgId;
  }

  // storage_size - computed: false, optional: false, required: true
  private _storageSize?: number; 
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }
  public set storageSize(value: number) {
    this._storageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
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

  // total_cpu - computed: true, optional: false, required: false
  public get totalCpu() {
    return this.getNumberAttribute('total_cpu');
  }

  // total_mem - computed: true, optional: false, required: false
  public get totalMem() {
    return this.getNumberAttribute('total_mem');
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

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      bandwidth_type: cdktf.stringToTerraform(this._bandwidthType),
      cluster_cidr: cdktf.stringToTerraform(this._clusterCidr),
      cluster_desc: cdktf.stringToTerraform(this._clusterDesc),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      cpu: cdktf.numberToTerraform(this._cpu),
      cvm_type: cdktf.stringToTerraform(this._cvmType),
      docker_graph_path: cdktf.stringToTerraform(this._dockerGraphPath),
      goods_num: cdktf.numberToTerraform(this._goodsNum),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      is_vpc_gateway: cdktf.numberToTerraform(this._isVpcGateway),
      key_id: cdktf.stringToTerraform(this._keyId),
      mem: cdktf.numberToTerraform(this._mem),
      mount_target: cdktf.stringToTerraform(this._mountTarget),
      os_name: cdktf.stringToTerraform(this._osName),
      password: cdktf.stringToTerraform(this._password),
      period: cdktf.numberToTerraform(this._period),
      require_wan_ip: cdktf.numberToTerraform(this._requireWanIp),
      root_size: cdktf.numberToTerraform(this._rootSize),
      root_type: cdktf.stringToTerraform(this._rootType),
      sg_id: cdktf.stringToTerraform(this._sgId),
      storage_size: cdktf.numberToTerraform(this._storageSize),
      storage_type: cdktf.stringToTerraform(this._storageType),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      unschedulable: cdktf.numberToTerraform(this._unschedulable),
      user_script: cdktf.stringToTerraform(this._userScript),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_type: {
        value: cdktf.stringToHclTerraform(this._bandwidthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_cidr: {
        value: cdktf.stringToHclTerraform(this._clusterCidr),
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
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cvm_type: {
        value: cdktf.stringToHclTerraform(this._cvmType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_graph_path: {
        value: cdktf.stringToHclTerraform(this._dockerGraphPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      goods_num: {
        value: cdktf.numberToHclTerraform(this._goodsNum),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_vpc_gateway: {
        value: cdktf.numberToHclTerraform(this._isVpcGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mem: {
        value: cdktf.numberToHclTerraform(this._mem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount_target: {
        value: cdktf.stringToHclTerraform(this._mountTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_name: {
        value: cdktf.stringToHclTerraform(this._osName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      require_wan_ip: {
        value: cdktf.numberToHclTerraform(this._requireWanIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      root_size: {
        value: cdktf.numberToHclTerraform(this._rootSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      root_type: {
        value: cdktf.stringToHclTerraform(this._rootType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sg_id: {
        value: cdktf.stringToHclTerraform(this._sgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_size: {
        value: cdktf.numberToHclTerraform(this._storageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unschedulable: {
        value: cdktf.numberToHclTerraform(this._unschedulable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_script: {
        value: cdktf.stringToHclTerraform(this._userScript),
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
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
