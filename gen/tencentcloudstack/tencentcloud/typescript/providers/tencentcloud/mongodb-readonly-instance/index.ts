// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbReadonlyInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto renew flag. Valid values are `0`(NOTIFY_AND_MANUAL_RENEW), `1`(NOTIFY_AND_AUTO_RENEW) and `2`(DISABLE_NOTIFY_AND_MANUAL_RENEW). Default value is `0`. Note: only works for PREPAID instance. Only supports`0` and `1` for creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#auto_renew_flag MongodbReadonlyInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * The available zone of the Mongodb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#available_zone MongodbReadonlyInstance#available_zone}
  */
  readonly availableZone: string;
  /**
  * The charge type of instance. Valid values are `PREPAID` and `POSTPAID_BY_HOUR`. Default value is `POSTPAID_BY_HOUR`. Note: TencentCloud International only supports `POSTPAID_BY_HOUR`. Caution that update operation on this field will delete old instances and create new one with new charge type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#charge_type MongodbReadonlyInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Instance schema type.	- REPLSET: Replset cluster;	- SHARD: Shard cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#cluster_type MongodbReadonlyInstance#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Refers to version information. The DescribeSpecInfo API can be called to obtain detailed information about the supported versions.
  * - MONGO_40_WT: version of the MongoDB 4.0 WiredTiger storage engine.
  * - MONGO_42_WT: version of the MongoDB 4.2 WiredTiger storage engine.
  * - MONGO_44_WT: version of the MongoDB 4.4 WiredTiger storage engine.
  * - MONGO_50_WT: version of the MongoDB 5.0 WiredTiger storage engine.
  * - MONGO_60_WT: version of the MongoDB 6.0 WiredTiger storage engine.
  * - MONGO_70_WT: version of the MongoDB 7.0 WiredTiger storage engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#engine_version MongodbReadonlyInstance#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Indicates the main instance ID of readonly instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#father_instance_id MongodbReadonlyInstance#father_instance_id}
  */
  readonly fatherInstanceId: string;
  /**
  * Indicates the region of main instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#father_instance_region MongodbReadonlyInstance#father_instance_region}
  */
  readonly fatherInstanceRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#id MongodbReadonlyInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Switch time for instance configuration changes.
  * 	- 0: When the adjustment is completed, perform the configuration task immediately. Default is 0.
  * 	- 1: Perform reconfiguration tasks within the maintenance time window.
  * Note: Adjusting the number of nodes and slices does not support changes within the maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#in_maintenance MongodbReadonlyInstance#in_maintenance}
  */
  readonly inMaintenance?: number;
  /**
  * Name of the Mongodb instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#instance_name MongodbReadonlyInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Type of Mongodb instance, and available values include `HIO`(or `GIO` which will be deprecated, represents high IO) and `HIO10G`(or `TGIO` which will be deprecated, represents 10-gigabit high IO).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#machine_type MongodbReadonlyInstance#machine_type}
  */
  readonly machineType: string;
  /**
  * Memory size. The minimum value is 2, and unit is GB. Memory and volume must be upgraded or degraded simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#memory MongodbReadonlyInstance#memory}
  */
  readonly memory: number;
  /**
  * Number of mongos cpu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#mongos_cpu MongodbReadonlyInstance#mongos_cpu}
  */
  readonly mongosCpu?: number;
  /**
  * Mongos memory size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#mongos_memory MongodbReadonlyInstance#mongos_memory}
  */
  readonly mongosMemory?: number;
  /**
  * Number of mongos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#mongos_node_num MongodbReadonlyInstance#mongos_node_num}
  */
  readonly mongosNodeNum?: number;
  /**
  * The number of nodes in each replica set. Default value: 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#node_num MongodbReadonlyInstance#node_num}
  */
  readonly nodeNum?: number;
  /**
  * Number of nodes per shard, at least 3(one master and two slaves).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#nodes_per_shard MongodbReadonlyInstance#nodes_per_shard}
  */
  readonly nodesPerShard?: number;
  /**
  * The tenancy (time unit is month) of the prepaid instance. Valid values are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36. NOTE: it only works when charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#prepaid_period MongodbReadonlyInstance#prepaid_period}
  */
  readonly prepaidPeriod?: number;
  /**
  * ID of the project which the instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#project_id MongodbReadonlyInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * ID of the security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#security_groups MongodbReadonlyInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Number of sharding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#shard_quantity MongodbReadonlyInstance#shard_quantity}
  */
  readonly shardQuantity?: number;
  /**
  * ID of the subnet within this VPC. The value is required if `vpc_id` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#subnet_id MongodbReadonlyInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The tags of the Mongodb. Key name `project` is system reserved and can't be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#tags MongodbReadonlyInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Disk size. The minimum value is 25, and unit is GB. Memory and volume must be upgraded or degraded simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#volume MongodbReadonlyInstance#volume}
  */
  readonly volume: number;
  /**
  * ID of the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#vpc_id MongodbReadonlyInstance#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance tencentcloud_mongodb_readonly_instance}
*/
export class MongodbReadonlyInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mongodb_readonly_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbReadonlyInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbReadonlyInstance to import
  * @param importFromId The id of the existing MongodbReadonlyInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbReadonlyInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mongodb_readonly_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_readonly_instance tencentcloud_mongodb_readonly_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbReadonlyInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbReadonlyInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mongodb_readonly_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenewFlag = config.autoRenewFlag;
    this._availableZone = config.availableZone;
    this._chargeType = config.chargeType;
    this._clusterType = config.clusterType;
    this._engineVersion = config.engineVersion;
    this._fatherInstanceId = config.fatherInstanceId;
    this._fatherInstanceRegion = config.fatherInstanceRegion;
    this._id = config.id;
    this._inMaintenance = config.inMaintenance;
    this._instanceName = config.instanceName;
    this._machineType = config.machineType;
    this._memory = config.memory;
    this._mongosCpu = config.mongosCpu;
    this._mongosMemory = config.mongosMemory;
    this._mongosNodeNum = config.mongosNodeNum;
    this._nodeNum = config.nodeNum;
    this._nodesPerShard = config.nodesPerShard;
    this._prepaidPeriod = config.prepaidPeriod;
    this._projectId = config.projectId;
    this._securityGroups = config.securityGroups;
    this._shardQuantity = config.shardQuantity;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._volume = config.volume;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew_flag - computed: false, optional: true, required: false
  private _autoRenewFlag?: number; 
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }
  public set autoRenewFlag(value: number) {
    this._autoRenewFlag = value;
  }
  public resetAutoRenewFlag() {
    this._autoRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewFlagInput() {
    return this._autoRenewFlag;
  }

  // available_zone - computed: false, optional: false, required: true
  private _availableZone?: string; 
  public get availableZone() {
    return this.getStringAttribute('available_zone');
  }
  public set availableZone(value: string) {
    this._availableZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availableZoneInput() {
    return this._availableZone;
  }

  // charge_type - computed: false, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // father_instance_id - computed: false, optional: false, required: true
  private _fatherInstanceId?: string; 
  public get fatherInstanceId() {
    return this.getStringAttribute('father_instance_id');
  }
  public set fatherInstanceId(value: string) {
    this._fatherInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fatherInstanceIdInput() {
    return this._fatherInstanceId;
  }

  // father_instance_region - computed: false, optional: false, required: true
  private _fatherInstanceRegion?: string; 
  public get fatherInstanceRegion() {
    return this.getStringAttribute('father_instance_region');
  }
  public set fatherInstanceRegion(value: string) {
    this._fatherInstanceRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fatherInstanceRegionInput() {
    return this._fatherInstanceRegion;
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

  // in_maintenance - computed: false, optional: true, required: false
  private _inMaintenance?: number; 
  public get inMaintenance() {
    return this.getNumberAttribute('in_maintenance');
  }
  public set inMaintenance(value: number) {
    this._inMaintenance = value;
  }
  public resetInMaintenance() {
    this._inMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inMaintenanceInput() {
    return this._inMaintenance;
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
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

  // mongos_cpu - computed: true, optional: true, required: false
  private _mongosCpu?: number; 
  public get mongosCpu() {
    return this.getNumberAttribute('mongos_cpu');
  }
  public set mongosCpu(value: number) {
    this._mongosCpu = value;
  }
  public resetMongosCpu() {
    this._mongosCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongosCpuInput() {
    return this._mongosCpu;
  }

  // mongos_memory - computed: true, optional: true, required: false
  private _mongosMemory?: number; 
  public get mongosMemory() {
    return this.getNumberAttribute('mongos_memory');
  }
  public set mongosMemory(value: number) {
    this._mongosMemory = value;
  }
  public resetMongosMemory() {
    this._mongosMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongosMemoryInput() {
    return this._mongosMemory;
  }

  // mongos_node_num - computed: true, optional: true, required: false
  private _mongosNodeNum?: number; 
  public get mongosNodeNum() {
    return this.getNumberAttribute('mongos_node_num');
  }
  public set mongosNodeNum(value: number) {
    this._mongosNodeNum = value;
  }
  public resetMongosNodeNum() {
    this._mongosNodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongosNodeNumInput() {
    return this._mongosNodeNum;
  }

  // node_num - computed: true, optional: true, required: false
  private _nodeNum?: number; 
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }
  public set nodeNum(value: number) {
    this._nodeNum = value;
  }
  public resetNodeNum() {
    this._nodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumInput() {
    return this._nodeNum;
  }

  // nodes_per_shard - computed: true, optional: true, required: false
  private _nodesPerShard?: number; 
  public get nodesPerShard() {
    return this.getNumberAttribute('nodes_per_shard');
  }
  public set nodesPerShard(value: number) {
    this._nodesPerShard = value;
  }
  public resetNodesPerShard() {
    this._nodesPerShard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesPerShardInput() {
    return this._nodesPerShard;
  }

  // prepaid_period - computed: false, optional: true, required: false
  private _prepaidPeriod?: number; 
  public get prepaidPeriod() {
    return this.getNumberAttribute('prepaid_period');
  }
  public set prepaidPeriod(value: number) {
    this._prepaidPeriod = value;
  }
  public resetPrepaidPeriod() {
    this._prepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepaidPeriodInput() {
    return this._prepaidPeriod;
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

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // shard_quantity - computed: true, optional: true, required: false
  private _shardQuantity?: number; 
  public get shardQuantity() {
    return this.getNumberAttribute('shard_quantity');
  }
  public set shardQuantity(value: number) {
    this._shardQuantity = value;
  }
  public resetShardQuantity() {
    this._shardQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardQuantityInput() {
    return this._shardQuantity;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: number; 
  public get volume() {
    return this.getNumberAttribute('volume');
  }
  public set volume(value: number) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getNumberAttribute('vport');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      available_zone: cdktf.stringToTerraform(this._availableZone),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      father_instance_id: cdktf.stringToTerraform(this._fatherInstanceId),
      father_instance_region: cdktf.stringToTerraform(this._fatherInstanceRegion),
      id: cdktf.stringToTerraform(this._id),
      in_maintenance: cdktf.numberToTerraform(this._inMaintenance),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      machine_type: cdktf.stringToTerraform(this._machineType),
      memory: cdktf.numberToTerraform(this._memory),
      mongos_cpu: cdktf.numberToTerraform(this._mongosCpu),
      mongos_memory: cdktf.numberToTerraform(this._mongosMemory),
      mongos_node_num: cdktf.numberToTerraform(this._mongosNodeNum),
      node_num: cdktf.numberToTerraform(this._nodeNum),
      nodes_per_shard: cdktf.numberToTerraform(this._nodesPerShard),
      prepaid_period: cdktf.numberToTerraform(this._prepaidPeriod),
      project_id: cdktf.numberToTerraform(this._projectId),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      shard_quantity: cdktf.numberToTerraform(this._shardQuantity),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      volume: cdktf.numberToTerraform(this._volume),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew_flag: {
        value: cdktf.numberToHclTerraform(this._autoRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      available_zone: {
        value: cdktf.stringToHclTerraform(this._availableZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      father_instance_id: {
        value: cdktf.stringToHclTerraform(this._fatherInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      father_instance_region: {
        value: cdktf.stringToHclTerraform(this._fatherInstanceRegion),
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
      in_maintenance: {
        value: cdktf.numberToHclTerraform(this._inMaintenance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mongos_cpu: {
        value: cdktf.numberToHclTerraform(this._mongosCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mongos_memory: {
        value: cdktf.numberToHclTerraform(this._mongosMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mongos_node_num: {
        value: cdktf.numberToHclTerraform(this._mongosNodeNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_num: {
        value: cdktf.numberToHclTerraform(this._nodeNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nodes_per_shard: {
        value: cdktf.numberToHclTerraform(this._nodesPerShard),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prepaid_period: {
        value: cdktf.numberToHclTerraform(this._prepaidPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      shard_quantity: {
        value: cdktf.numberToHclTerraform(this._shardQuantity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
      volume: {
        value: cdktf.numberToHclTerraform(this._volume),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
