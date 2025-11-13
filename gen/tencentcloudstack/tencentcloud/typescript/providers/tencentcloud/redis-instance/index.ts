// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto-renew flag. 0 - default state (manual renewal); 1 - automatic renewal; 2 - explicit no automatic renewal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#auto_renew_flag RedisInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * The available zone of an instance to be created, like `ap-beijing-7`, please refer to `tencentcloud_redis_zone_config.list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#availability_zone RedisInstance#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * The charge type of instance. Valid values: `PREPAID` and `POSTPAID`. Default value is `POSTPAID`. Note: TencentCloud International only supports `POSTPAID`. Caution that update operation on this field will delete old instances and create new with new charge type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#charge_type RedisInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Indicate whether to delete Redis instance directly or not. Default is false. If set true, the instance will be deleted instead of staying recycle bin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#force_delete RedisInstance#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#id RedisInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address of an instance. When the `operation_network` is `changeVip`, this parameter needs to be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#ip RedisInstance#ip}
  */
  readonly ip?: string;
  /**
  * The memory volume of an available instance(in MB), please refer to `tencentcloud_redis_zone_config.list[zone].shard_memories`. When redis is standard type, it represents total memory size of the instance; when Redis is cluster type, it represents memory size of per sharding. `512MB` is supported only in master-slave instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#mem_size RedisInstance#mem_size}
  */
  readonly memSize: number;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#name RedisInstance#name}
  */
  readonly name?: string;
  /**
  * Indicates whether the redis instance support no-auth access. NOTE: Only available in private cloud environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#no_auth RedisInstance#no_auth}
  */
  readonly noAuth?: boolean | cdktf.IResolvable;
  /**
  * Refers to the category of the pre-modified network, including: `changeVip`: refers to switching the private network, including its intranet IPv4 address and port; `changeVpc`: refers to switching the subnet to which the private network belongs; `changeBaseToVpc`: refers to switching the basic network to a private network; `changeVPort`: refers to only modifying the instance network port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#operation_network RedisInstance#operation_network}
  */
  readonly operationNetwork?: string;
  /**
  * Specify params template id. If not set, will use default template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#params_template_id RedisInstance#params_template_id}
  */
  readonly paramsTemplateId?: string;
  /**
  * Password for a Redis user, which should be 8 to 16 characters. NOTE: Only `no_auth=true` specified can make password empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#password RedisInstance#password}
  */
  readonly password?: string;
  /**
  * The port used to access a redis instance. The default value is 6379. When the `operation_network` is `changeVPort` or `changeVip`, this parameter needs to be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#port RedisInstance#port}
  */
  readonly port?: number;
  /**
  * The tenancy (time unit is month) of the prepaid instance, NOTE: it only works when charge_type is set to `PREPAID`. Valid values are `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#prepaid_period RedisInstance#prepaid_period}
  */
  readonly prepaidPeriod?: number;
  /**
  * Specify the product version of the instance. `local`: Local disk version, `cloud`: Cloud disk version, `cdc`: Exclusive cluster version. Default is `local`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#product_version RedisInstance#product_version}
  */
  readonly productVersion?: string;
  /**
  * Specifies which project the instance should belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#project_id RedisInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * Original intranet IPv4 address retention time: unit: day, value range: `0`, `1`, `2`, `3`, `7`, `15`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#recycle RedisInstance#recycle}
  */
  readonly recycle?: number;
  /**
  * Exclusive cluster ID. When the `product_version` is set to `cdc`, this parameter must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#redis_cluster_id RedisInstance#redis_cluster_id}
  */
  readonly redisClusterId?: string;
  /**
  * The number of instance copies. This is not required for standalone and master slave versions and must equal to count of `replica_zone_ids`, Non-multi-AZ does not require `replica_zone_ids`; Redis memory version 4.0, 5.0, 6.2 standard architecture and cluster architecture support the number of copies in the range [1, 2, 3, 4, 5]; Redis 2.8 standard version and CKV standard version only support 1 copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#redis_replicas_num RedisInstance#redis_replicas_num}
  */
  readonly redisReplicasNum?: number;
  /**
  * The number of instance shards; this parameter does not need to be configured for standard version instances; for cluster version instances, the number of shards ranges from: [`1`, `3`, `5`, `8`, `12`, `16`, `24 `, `32`, `40`, `48`, `64`, `80`, `96`, `128`].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#redis_shard_num RedisInstance#redis_shard_num}
  */
  readonly redisShardNum?: number;
  /**
  * ID of replica nodes available zone. This is not required for standalone and master slave versions. NOTE: Removing some of the same zone of replicas (e.g. removing 100001 of [100001, 100001, 100002]) will pick the first hit to remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#replica_zone_ids RedisInstance#replica_zone_ids}
  */
  readonly replicaZoneIds?: number[];
  /**
  * Whether copy read-only is supported, Redis 2.8 Standard Edition and CKV Standard Edition do not support replica read-only, turn on replica read-only, the instance will automatically read and write separate, write requests are routed to the primary node, read requests are routed to the replica node, if you need to open replica read-only, the recommended number of replicas >=2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#replicas_read_only RedisInstance#replicas_read_only}
  */
  readonly replicasReadOnly?: boolean | cdktf.IResolvable;
  /**
  * ID of security group. If both vpc_id and subnet_id are not set, this argument should not be set either.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#security_groups RedisInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Specifies which subnet the instance should belong to. When the `operation_network` is `changeVpc` or `changeBaseToVpc`, this parameter needs to be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#subnet_id RedisInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Instance tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#tags RedisInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Instance type. Available values: `cluster_ckv`,`cluster_redis5.0`,`cluster_redis`,`master_slave_ckv`,`master_slave_redis4.0`,`master_slave_redis5.0`,`master_slave_redis`,`standalone_redis`, specific region support specific types, need to refer data `tencentcloud_redis_zone_config`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#type RedisInstance#type}
  */
  readonly type?: string;
  /**
  * Instance type. Available values reference data source `tencentcloud_redis_zone_config` or [document](https://intl.cloud.tencent.com/document/product/239/32069), toggle immediately when modified.<ul><li>2: Redis 2.8 Memory Edition (standard architecture);</li> <li>3: CKV 3.2 Memory Edition (standard architecture);</li> <li>4: CKV 3.2 Memory Edition (cluster architecture);</li> <li>6: Redis 4.0 Memory Edition (standard architecture);</li> <li>7: Redis 4.0 Memory Edition (cluster architecture);</li> <li>8: Redis 5.0 Memory Edition (standard architecture);</li> <li>9: Redis 5.0 Memory Edition (cluster architecture);</li> <li>15: Redis 6.2 Memory Edition (standard architecture);</li> <li>16: Redis 6.2 Memory Edition (cluster architecture);</li> <li>17: Redis 7.0 Memory Edition (standard architecture);</li> <li>18: Redis 7.0 Memory Edition (cluster architecture). </li> <li>200: Memcached 1.6 Memory Edition (cluster architecture). </li>Note: The CKV version is currently used by existing users and is temporarily retained.</ul>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#type_id RedisInstance#type_id}
  */
  readonly typeId?: number;
  /**
  * ID of the vpc with which the instance is to be associated. When the `operation_network` is `changeVpc` or `changeBaseToVpc`, this parameter needs to be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#vpc_id RedisInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Switching mode: `1`-maintenance time window switching, `2`-immediate switching, default value `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#wait_switch RedisInstance#wait_switch}
  */
  readonly waitSwitch?: number;
  /**
  * Wan address switch, default `close`, values: `open`, `close`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#wan_address_switch RedisInstance#wan_address_switch}
  */
  readonly wanAddressSwitch?: string;
}
export interface RedisInstanceNodeInfo {
}

export function redisInstanceNodeInfoToTerraform(struct?: RedisInstanceNodeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function redisInstanceNodeInfoToHclTerraform(struct?: RedisInstanceNodeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RedisInstanceNodeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedisInstanceNodeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisInstanceNodeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // master - computed: true, optional: false, required: false
  public get master() {
    return this.getBooleanAttribute('master');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }
}

export class RedisInstanceNodeInfoList extends cdktf.ComplexList {

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
  public get(index: number): RedisInstanceNodeInfoOutputReference {
    return new RedisInstanceNodeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance tencentcloud_redis_instance}
*/
export class RedisInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_redis_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisInstance to import
  * @param importFromId The id of the existing RedisInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_redis_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/redis_instance tencentcloud_redis_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RedisInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_redis_instance',
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
    this._autoRenewFlag = config.autoRenewFlag;
    this._availabilityZone = config.availabilityZone;
    this._chargeType = config.chargeType;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._ip = config.ip;
    this._memSize = config.memSize;
    this._name = config.name;
    this._noAuth = config.noAuth;
    this._operationNetwork = config.operationNetwork;
    this._paramsTemplateId = config.paramsTemplateId;
    this._password = config.password;
    this._port = config.port;
    this._prepaidPeriod = config.prepaidPeriod;
    this._productVersion = config.productVersion;
    this._projectId = config.projectId;
    this._recycle = config.recycle;
    this._redisClusterId = config.redisClusterId;
    this._redisReplicasNum = config.redisReplicasNum;
    this._redisShardNum = config.redisShardNum;
    this._replicaZoneIds = config.replicaZoneIds;
    this._replicasReadOnly = config.replicasReadOnly;
    this._securityGroups = config.securityGroups;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._type = config.type;
    this._typeId = config.typeId;
    this._vpcId = config.vpcId;
    this._waitSwitch = config.waitSwitch;
    this._wanAddressSwitch = config.wanAddressSwitch;
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

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dedicated_cluster_id - computed: true, optional: false, required: false
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mem_size - computed: false, optional: false, required: true
  private _memSize?: number; 
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }
  public set memSize(value: number) {
    this._memSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memSizeInput() {
    return this._memSize;
  }

  // name - computed: true, optional: true, required: false
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

  // no_auth - computed: false, optional: true, required: false
  private _noAuth?: boolean | cdktf.IResolvable; 
  public get noAuth() {
    return this.getBooleanAttribute('no_auth');
  }
  public set noAuth(value: boolean | cdktf.IResolvable) {
    this._noAuth = value;
  }
  public resetNoAuth() {
    this._noAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAuthInput() {
    return this._noAuth;
  }

  // node_info - computed: true, optional: false, required: false
  private _nodeInfo = new RedisInstanceNodeInfoList(this, "node_info", false);
  public get nodeInfo() {
    return this._nodeInfo;
  }

  // operation_network - computed: false, optional: true, required: false
  private _operationNetwork?: string; 
  public get operationNetwork() {
    return this.getStringAttribute('operation_network');
  }
  public set operationNetwork(value: string) {
    this._operationNetwork = value;
  }
  public resetOperationNetwork() {
    this._operationNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNetworkInput() {
    return this._operationNetwork;
  }

  // params_template_id - computed: false, optional: true, required: false
  private _paramsTemplateId?: string; 
  public get paramsTemplateId() {
    return this.getStringAttribute('params_template_id');
  }
  public set paramsTemplateId(value: string) {
    this._paramsTemplateId = value;
  }
  public resetParamsTemplateId() {
    this._paramsTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsTemplateIdInput() {
    return this._paramsTemplateId;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // product_version - computed: true, optional: true, required: false
  private _productVersion?: string; 
  public get productVersion() {
    return this.getStringAttribute('product_version');
  }
  public set productVersion(value: string) {
    this._productVersion = value;
  }
  public resetProductVersion() {
    this._productVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion;
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

  // recycle - computed: false, optional: true, required: false
  private _recycle?: number; 
  public get recycle() {
    return this.getNumberAttribute('recycle');
  }
  public set recycle(value: number) {
    this._recycle = value;
  }
  public resetRecycle() {
    this._recycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recycleInput() {
    return this._recycle;
  }

  // redis_cluster_id - computed: true, optional: true, required: false
  private _redisClusterId?: string; 
  public get redisClusterId() {
    return this.getStringAttribute('redis_cluster_id');
  }
  public set redisClusterId(value: string) {
    this._redisClusterId = value;
  }
  public resetRedisClusterId() {
    this._redisClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisClusterIdInput() {
    return this._redisClusterId;
  }

  // redis_replicas_num - computed: false, optional: true, required: false
  private _redisReplicasNum?: number; 
  public get redisReplicasNum() {
    return this.getNumberAttribute('redis_replicas_num');
  }
  public set redisReplicasNum(value: number) {
    this._redisReplicasNum = value;
  }
  public resetRedisReplicasNum() {
    this._redisReplicasNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisReplicasNumInput() {
    return this._redisReplicasNum;
  }

  // redis_shard_num - computed: true, optional: true, required: false
  private _redisShardNum?: number; 
  public get redisShardNum() {
    return this.getNumberAttribute('redis_shard_num');
  }
  public set redisShardNum(value: number) {
    this._redisShardNum = value;
  }
  public resetRedisShardNum() {
    this._redisShardNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisShardNumInput() {
    return this._redisShardNum;
  }

  // replica_zone_ids - computed: true, optional: true, required: false
  private _replicaZoneIds?: number[]; 
  public get replicaZoneIds() {
    return this.getNumberListAttribute('replica_zone_ids');
  }
  public set replicaZoneIds(value: number[]) {
    this._replicaZoneIds = value;
  }
  public resetReplicaZoneIds() {
    this._replicaZoneIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaZoneIdsInput() {
    return this._replicaZoneIds;
  }

  // replicas_read_only - computed: true, optional: true, required: false
  private _replicasReadOnly?: boolean | cdktf.IResolvable; 
  public get replicasReadOnly() {
    return this.getBooleanAttribute('replicas_read_only');
  }
  public set replicasReadOnly(value: boolean | cdktf.IResolvable) {
    this._replicasReadOnly = value;
  }
  public resetReplicasReadOnly() {
    this._replicasReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasReadOnlyInput() {
    return this._replicasReadOnly;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: true, required: false
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

  // type_id - computed: false, optional: true, required: false
  private _typeId?: number; 
  public get typeId() {
    return this.getNumberAttribute('type_id');
  }
  public set typeId(value: number) {
    this._typeId = value;
  }
  public resetTypeId() {
    this._typeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }

  // vpc_id - computed: true, optional: true, required: false
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

  // wait_switch - computed: false, optional: true, required: false
  private _waitSwitch?: number; 
  public get waitSwitch() {
    return this.getNumberAttribute('wait_switch');
  }
  public set waitSwitch(value: number) {
    this._waitSwitch = value;
  }
  public resetWaitSwitch() {
    this._waitSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitSwitchInput() {
    return this._waitSwitch;
  }

  // wan_address - computed: true, optional: false, required: false
  public get wanAddress() {
    return this.getStringAttribute('wan_address');
  }

  // wan_address_switch - computed: true, optional: true, required: false
  private _wanAddressSwitch?: string; 
  public get wanAddressSwitch() {
    return this.getStringAttribute('wan_address_switch');
  }
  public set wanAddressSwitch(value: string) {
    this._wanAddressSwitch = value;
  }
  public resetWanAddressSwitch() {
    this._wanAddressSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanAddressSwitchInput() {
    return this._wanAddressSwitch;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      mem_size: cdktf.numberToTerraform(this._memSize),
      name: cdktf.stringToTerraform(this._name),
      no_auth: cdktf.booleanToTerraform(this._noAuth),
      operation_network: cdktf.stringToTerraform(this._operationNetwork),
      params_template_id: cdktf.stringToTerraform(this._paramsTemplateId),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      prepaid_period: cdktf.numberToTerraform(this._prepaidPeriod),
      product_version: cdktf.stringToTerraform(this._productVersion),
      project_id: cdktf.numberToTerraform(this._projectId),
      recycle: cdktf.numberToTerraform(this._recycle),
      redis_cluster_id: cdktf.stringToTerraform(this._redisClusterId),
      redis_replicas_num: cdktf.numberToTerraform(this._redisReplicasNum),
      redis_shard_num: cdktf.numberToTerraform(this._redisShardNum),
      replica_zone_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._replicaZoneIds),
      replicas_read_only: cdktf.booleanToTerraform(this._replicasReadOnly),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      type_id: cdktf.numberToTerraform(this._typeId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      wait_switch: cdktf.numberToTerraform(this._waitSwitch),
      wan_address_switch: cdktf.stringToTerraform(this._wanAddressSwitch),
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
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
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
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mem_size: {
        value: cdktf.numberToHclTerraform(this._memSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_auth: {
        value: cdktf.booleanToHclTerraform(this._noAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_network: {
        value: cdktf.stringToHclTerraform(this._operationNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      params_template_id: {
        value: cdktf.stringToHclTerraform(this._paramsTemplateId),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
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
      product_version: {
        value: cdktf.stringToHclTerraform(this._productVersion),
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
      recycle: {
        value: cdktf.numberToHclTerraform(this._recycle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redis_cluster_id: {
        value: cdktf.stringToHclTerraform(this._redisClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redis_replicas_num: {
        value: cdktf.numberToHclTerraform(this._redisReplicasNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redis_shard_num: {
        value: cdktf.numberToHclTerraform(this._redisShardNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replica_zone_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._replicaZoneIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      replicas_read_only: {
        value: cdktf.booleanToHclTerraform(this._replicasReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_id: {
        value: cdktf.numberToHclTerraform(this._typeId),
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
      wait_switch: {
        value: cdktf.numberToHclTerraform(this._waitSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wan_address_switch: {
        value: cdktf.stringToHclTerraform(this._wanAddressSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
