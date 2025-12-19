// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisTairInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#auto_renew RedisTairInstance#auto_renew}
  */
  readonly autoRenew?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#auto_renew_period RedisTairInstance#auto_renew_period}
  */
  readonly autoRenewPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#backup_id RedisTairInstance#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#cluster_backup_id RedisTairInstance#cluster_backup_id}
  */
  readonly clusterBackupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#connection_string_prefix RedisTairInstance#connection_string_prefix}
  */
  readonly connectionStringPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#effective_time RedisTairInstance#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#engine_version RedisTairInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#force_upgrade RedisTairInstance#force_upgrade}
  */
  readonly forceUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#global_instance_id RedisTairInstance#global_instance_id}
  */
  readonly globalInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#id RedisTairInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#instance_class RedisTairInstance#instance_class}
  */
  readonly instanceClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#instance_type RedisTairInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#intranet_bandwidth RedisTairInstance#intranet_bandwidth}
  */
  readonly intranetBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#modify_mode RedisTairInstance#modify_mode}
  */
  readonly modifyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#node_type RedisTairInstance#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#param_no_loose_sentinel_enabled RedisTairInstance#param_no_loose_sentinel_enabled}
  */
  readonly paramNoLooseSentinelEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#param_no_loose_sentinel_password_free_access RedisTairInstance#param_no_loose_sentinel_password_free_access}
  */
  readonly paramNoLooseSentinelPasswordFreeAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#param_no_loose_sentinel_password_free_commands RedisTairInstance#param_no_loose_sentinel_password_free_commands}
  */
  readonly paramNoLooseSentinelPasswordFreeCommands?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#param_repl_mode RedisTairInstance#param_repl_mode}
  */
  readonly paramReplMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#param_semisync_repl_timeout RedisTairInstance#param_semisync_repl_timeout}
  */
  readonly paramSemisyncReplTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#param_sentinel_compat_enable RedisTairInstance#param_sentinel_compat_enable}
  */
  readonly paramSentinelCompatEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#password RedisTairInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#payment_type RedisTairInstance#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#period RedisTairInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#port RedisTairInstance#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#read_only_count RedisTairInstance#read_only_count}
  */
  readonly readOnlyCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#recover_config_mode RedisTairInstance#recover_config_mode}
  */
  readonly recoverConfigMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#resource_group_id RedisTairInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#secondary_zone_id RedisTairInstance#secondary_zone_id}
  */
  readonly secondaryZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#security_group_id RedisTairInstance#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#security_ip_group_name RedisTairInstance#security_ip_group_name}
  */
  readonly securityIpGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#security_ips RedisTairInstance#security_ips}
  */
  readonly securityIps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#shard_count RedisTairInstance#shard_count}
  */
  readonly shardCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#slave_read_only_count RedisTairInstance#slave_read_only_count}
  */
  readonly slaveReadOnlyCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#src_db_instance_id RedisTairInstance#src_db_instance_id}
  */
  readonly srcDbInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#ssl_enabled RedisTairInstance#ssl_enabled}
  */
  readonly sslEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#storage_performance_level RedisTairInstance#storage_performance_level}
  */
  readonly storagePerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#storage_size_gb RedisTairInstance#storage_size_gb}
  */
  readonly storageSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#tags RedisTairInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#tair_instance_name RedisTairInstance#tair_instance_name}
  */
  readonly tairInstanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#vpc_auth_mode RedisTairInstance#vpc_auth_mode}
  */
  readonly vpcAuthMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#vpc_id RedisTairInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#vswitch_id RedisTairInstance#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#zone_id RedisTairInstance#zone_id}
  */
  readonly zoneId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#timeouts RedisTairInstance#timeouts}
  */
  readonly timeouts?: RedisTairInstanceTimeouts;
}
export interface RedisTairInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#create RedisTairInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#delete RedisTairInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#update RedisTairInstance#update}
  */
  readonly update?: string;
}

export function redisTairInstanceTimeoutsToTerraform(struct?: RedisTairInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function redisTairInstanceTimeoutsToHclTerraform(struct?: RedisTairInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisTairInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedisTairInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisTairInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance alicloud_redis_tair_instance}
*/
export class RedisTairInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_redis_tair_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisTairInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisTairInstance to import
  * @param importFromId The id of the existing RedisTairInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisTairInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_redis_tair_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/redis_tair_instance alicloud_redis_tair_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisTairInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RedisTairInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_redis_tair_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenew = config.autoRenew;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._backupId = config.backupId;
    this._clusterBackupId = config.clusterBackupId;
    this._connectionStringPrefix = config.connectionStringPrefix;
    this._effectiveTime = config.effectiveTime;
    this._engineVersion = config.engineVersion;
    this._forceUpgrade = config.forceUpgrade;
    this._globalInstanceId = config.globalInstanceId;
    this._id = config.id;
    this._instanceClass = config.instanceClass;
    this._instanceType = config.instanceType;
    this._intranetBandwidth = config.intranetBandwidth;
    this._modifyMode = config.modifyMode;
    this._nodeType = config.nodeType;
    this._paramNoLooseSentinelEnabled = config.paramNoLooseSentinelEnabled;
    this._paramNoLooseSentinelPasswordFreeAccess = config.paramNoLooseSentinelPasswordFreeAccess;
    this._paramNoLooseSentinelPasswordFreeCommands = config.paramNoLooseSentinelPasswordFreeCommands;
    this._paramReplMode = config.paramReplMode;
    this._paramSemisyncReplTimeout = config.paramSemisyncReplTimeout;
    this._paramSentinelCompatEnable = config.paramSentinelCompatEnable;
    this._password = config.password;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._port = config.port;
    this._readOnlyCount = config.readOnlyCount;
    this._recoverConfigMode = config.recoverConfigMode;
    this._resourceGroupId = config.resourceGroupId;
    this._secondaryZoneId = config.secondaryZoneId;
    this._securityGroupId = config.securityGroupId;
    this._securityIpGroupName = config.securityIpGroupName;
    this._securityIps = config.securityIps;
    this._shardCount = config.shardCount;
    this._slaveReadOnlyCount = config.slaveReadOnlyCount;
    this._srcDbInstanceId = config.srcDbInstanceId;
    this._sslEnabled = config.sslEnabled;
    this._storagePerformanceLevel = config.storagePerformanceLevel;
    this._storageSizeGb = config.storageSizeGb;
    this._tags = config.tags;
    this._tairInstanceName = config.tairInstanceName;
    this._vpcAuthMode = config.vpcAuthMode;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture_type - computed: true, optional: false, required: false
  public get architectureType() {
    return this.getStringAttribute('architecture_type');
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: string; 
  public get autoRenew() {
    return this.getStringAttribute('auto_renew');
  }
  public set autoRenew(value: string) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_period - computed: false, optional: true, required: false
  private _autoRenewPeriod?: string; 
  public get autoRenewPeriod() {
    return this.getStringAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: string) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // backup_id - computed: false, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // cluster_backup_id - computed: false, optional: true, required: false
  private _clusterBackupId?: string; 
  public get clusterBackupId() {
    return this.getStringAttribute('cluster_backup_id');
  }
  public set clusterBackupId(value: string) {
    this._clusterBackupId = value;
  }
  public resetClusterBackupId() {
    this._clusterBackupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterBackupIdInput() {
    return this._clusterBackupId;
  }

  // connection_domain - computed: true, optional: false, required: false
  public get connectionDomain() {
    return this.getStringAttribute('connection_domain');
  }

  // connection_string_prefix - computed: false, optional: true, required: false
  private _connectionStringPrefix?: string; 
  public get connectionStringPrefix() {
    return this.getStringAttribute('connection_string_prefix');
  }
  public set connectionStringPrefix(value: string) {
    this._connectionStringPrefix = value;
  }
  public resetConnectionStringPrefix() {
    this._connectionStringPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringPrefixInput() {
    return this._connectionStringPrefix;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // effective_time - computed: false, optional: true, required: false
  private _effectiveTime?: string; 
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }
  public set effectiveTime(value: string) {
    this._effectiveTime = value;
  }
  public resetEffectiveTime() {
    this._effectiveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveTimeInput() {
    return this._effectiveTime;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // force_upgrade - computed: false, optional: true, required: false
  private _forceUpgrade?: boolean | cdktf.IResolvable; 
  public get forceUpgrade() {
    return this.getBooleanAttribute('force_upgrade');
  }
  public set forceUpgrade(value: boolean | cdktf.IResolvable) {
    this._forceUpgrade = value;
  }
  public resetForceUpgrade() {
    this._forceUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpgradeInput() {
    return this._forceUpgrade;
  }

  // global_instance_id - computed: false, optional: true, required: false
  private _globalInstanceId?: string; 
  public get globalInstanceId() {
    return this.getStringAttribute('global_instance_id');
  }
  public set globalInstanceId(value: string) {
    this._globalInstanceId = value;
  }
  public resetGlobalInstanceId() {
    this._globalInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInstanceIdInput() {
    return this._globalInstanceId;
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

  // instance_class - computed: false, optional: false, required: true
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
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

  // intranet_bandwidth - computed: true, optional: true, required: false
  private _intranetBandwidth?: number; 
  public get intranetBandwidth() {
    return this.getNumberAttribute('intranet_bandwidth');
  }
  public set intranetBandwidth(value: number) {
    this._intranetBandwidth = value;
  }
  public resetIntranetBandwidth() {
    this._intranetBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetBandwidthInput() {
    return this._intranetBandwidth;
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // modify_mode - computed: false, optional: true, required: false
  private _modifyMode?: string; 
  public get modifyMode() {
    return this.getStringAttribute('modify_mode');
  }
  public set modifyMode(value: string) {
    this._modifyMode = value;
  }
  public resetModifyMode() {
    this._modifyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyModeInput() {
    return this._modifyMode;
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // param_no_loose_sentinel_enabled - computed: true, optional: true, required: false
  private _paramNoLooseSentinelEnabled?: string; 
  public get paramNoLooseSentinelEnabled() {
    return this.getStringAttribute('param_no_loose_sentinel_enabled');
  }
  public set paramNoLooseSentinelEnabled(value: string) {
    this._paramNoLooseSentinelEnabled = value;
  }
  public resetParamNoLooseSentinelEnabled() {
    this._paramNoLooseSentinelEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramNoLooseSentinelEnabledInput() {
    return this._paramNoLooseSentinelEnabled;
  }

  // param_no_loose_sentinel_password_free_access - computed: true, optional: true, required: false
  private _paramNoLooseSentinelPasswordFreeAccess?: string; 
  public get paramNoLooseSentinelPasswordFreeAccess() {
    return this.getStringAttribute('param_no_loose_sentinel_password_free_access');
  }
  public set paramNoLooseSentinelPasswordFreeAccess(value: string) {
    this._paramNoLooseSentinelPasswordFreeAccess = value;
  }
  public resetParamNoLooseSentinelPasswordFreeAccess() {
    this._paramNoLooseSentinelPasswordFreeAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramNoLooseSentinelPasswordFreeAccessInput() {
    return this._paramNoLooseSentinelPasswordFreeAccess;
  }

  // param_no_loose_sentinel_password_free_commands - computed: true, optional: true, required: false
  private _paramNoLooseSentinelPasswordFreeCommands?: string; 
  public get paramNoLooseSentinelPasswordFreeCommands() {
    return this.getStringAttribute('param_no_loose_sentinel_password_free_commands');
  }
  public set paramNoLooseSentinelPasswordFreeCommands(value: string) {
    this._paramNoLooseSentinelPasswordFreeCommands = value;
  }
  public resetParamNoLooseSentinelPasswordFreeCommands() {
    this._paramNoLooseSentinelPasswordFreeCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramNoLooseSentinelPasswordFreeCommandsInput() {
    return this._paramNoLooseSentinelPasswordFreeCommands;
  }

  // param_repl_mode - computed: true, optional: true, required: false
  private _paramReplMode?: string; 
  public get paramReplMode() {
    return this.getStringAttribute('param_repl_mode');
  }
  public set paramReplMode(value: string) {
    this._paramReplMode = value;
  }
  public resetParamReplMode() {
    this._paramReplMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramReplModeInput() {
    return this._paramReplMode;
  }

  // param_semisync_repl_timeout - computed: true, optional: true, required: false
  private _paramSemisyncReplTimeout?: string; 
  public get paramSemisyncReplTimeout() {
    return this.getStringAttribute('param_semisync_repl_timeout');
  }
  public set paramSemisyncReplTimeout(value: string) {
    this._paramSemisyncReplTimeout = value;
  }
  public resetParamSemisyncReplTimeout() {
    this._paramSemisyncReplTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramSemisyncReplTimeoutInput() {
    return this._paramSemisyncReplTimeout;
  }

  // param_sentinel_compat_enable - computed: true, optional: true, required: false
  private _paramSentinelCompatEnable?: string; 
  public get paramSentinelCompatEnable() {
    return this.getStringAttribute('param_sentinel_compat_enable');
  }
  public set paramSentinelCompatEnable(value: string) {
    this._paramSentinelCompatEnable = value;
  }
  public resetParamSentinelCompatEnable() {
    this._paramSentinelCompatEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramSentinelCompatEnableInput() {
    return this._paramSentinelCompatEnable;
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

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
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

  // port - computed: true, optional: true, required: false
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

  // read_only_count - computed: false, optional: true, required: false
  private _readOnlyCount?: number; 
  public get readOnlyCount() {
    return this.getNumberAttribute('read_only_count');
  }
  public set readOnlyCount(value: number) {
    this._readOnlyCount = value;
  }
  public resetReadOnlyCount() {
    this._readOnlyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyCountInput() {
    return this._readOnlyCount;
  }

  // recover_config_mode - computed: false, optional: true, required: false
  private _recoverConfigMode?: string; 
  public get recoverConfigMode() {
    return this.getStringAttribute('recover_config_mode');
  }
  public set recoverConfigMode(value: string) {
    this._recoverConfigMode = value;
  }
  public resetRecoverConfigMode() {
    this._recoverConfigMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverConfigModeInput() {
    return this._recoverConfigMode;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // secondary_zone_id - computed: false, optional: true, required: false
  private _secondaryZoneId?: string; 
  public get secondaryZoneId() {
    return this.getStringAttribute('secondary_zone_id');
  }
  public set secondaryZoneId(value: string) {
    this._secondaryZoneId = value;
  }
  public resetSecondaryZoneId() {
    this._secondaryZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryZoneIdInput() {
    return this._secondaryZoneId;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_ip_group_name - computed: true, optional: true, required: false
  private _securityIpGroupName?: string; 
  public get securityIpGroupName() {
    return this.getStringAttribute('security_ip_group_name');
  }
  public set securityIpGroupName(value: string) {
    this._securityIpGroupName = value;
  }
  public resetSecurityIpGroupName() {
    this._securityIpGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpGroupNameInput() {
    return this._securityIpGroupName;
  }

  // security_ips - computed: true, optional: true, required: false
  private _securityIps?: string; 
  public get securityIps() {
    return this.getStringAttribute('security_ips');
  }
  public set securityIps(value: string) {
    this._securityIps = value;
  }
  public resetSecurityIps() {
    this._securityIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpsInput() {
    return this._securityIps;
  }

  // shard_count - computed: true, optional: true, required: false
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  public resetShardCount() {
    this._shardCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }

  // slave_read_only_count - computed: false, optional: true, required: false
  private _slaveReadOnlyCount?: number; 
  public get slaveReadOnlyCount() {
    return this.getNumberAttribute('slave_read_only_count');
  }
  public set slaveReadOnlyCount(value: number) {
    this._slaveReadOnlyCount = value;
  }
  public resetSlaveReadOnlyCount() {
    this._slaveReadOnlyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveReadOnlyCountInput() {
    return this._slaveReadOnlyCount;
  }

  // src_db_instance_id - computed: false, optional: true, required: false
  private _srcDbInstanceId?: string; 
  public get srcDbInstanceId() {
    return this.getStringAttribute('src_db_instance_id');
  }
  public set srcDbInstanceId(value: string) {
    this._srcDbInstanceId = value;
  }
  public resetSrcDbInstanceId() {
    this._srcDbInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDbInstanceIdInput() {
    return this._srcDbInstanceId;
  }

  // ssl_enabled - computed: true, optional: true, required: false
  private _sslEnabled?: string; 
  public get sslEnabled() {
    return this.getStringAttribute('ssl_enabled');
  }
  public set sslEnabled(value: string) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_performance_level - computed: false, optional: true, required: false
  private _storagePerformanceLevel?: string; 
  public get storagePerformanceLevel() {
    return this.getStringAttribute('storage_performance_level');
  }
  public set storagePerformanceLevel(value: string) {
    this._storagePerformanceLevel = value;
  }
  public resetStoragePerformanceLevel() {
    this._storagePerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePerformanceLevelInput() {
    return this._storagePerformanceLevel;
  }

  // storage_size_gb - computed: true, optional: true, required: false
  private _storageSizeGb?: number; 
  public get storageSizeGb() {
    return this.getNumberAttribute('storage_size_gb');
  }
  public set storageSizeGb(value: number) {
    this._storageSizeGb = value;
  }
  public resetStorageSizeGb() {
    this._storageSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeGbInput() {
    return this._storageSizeGb;
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

  // tair_instance_id - computed: true, optional: false, required: false
  public get tairInstanceId() {
    return this.getStringAttribute('tair_instance_id');
  }

  // tair_instance_name - computed: false, optional: true, required: false
  private _tairInstanceName?: string; 
  public get tairInstanceName() {
    return this.getStringAttribute('tair_instance_name');
  }
  public set tairInstanceName(value: string) {
    this._tairInstanceName = value;
  }
  public resetTairInstanceName() {
    this._tairInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tairInstanceNameInput() {
    return this._tairInstanceName;
  }

  // vpc_auth_mode - computed: true, optional: true, required: false
  private _vpcAuthMode?: string; 
  public get vpcAuthMode() {
    return this.getStringAttribute('vpc_auth_mode');
  }
  public set vpcAuthMode(value: string) {
    this._vpcAuthMode = value;
  }
  public resetVpcAuthMode() {
    this._vpcAuthMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAuthModeInput() {
    return this._vpcAuthMode;
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

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RedisTairInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RedisTairInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew: cdktf.stringToTerraform(this._autoRenew),
      auto_renew_period: cdktf.stringToTerraform(this._autoRenewPeriod),
      backup_id: cdktf.stringToTerraform(this._backupId),
      cluster_backup_id: cdktf.stringToTerraform(this._clusterBackupId),
      connection_string_prefix: cdktf.stringToTerraform(this._connectionStringPrefix),
      effective_time: cdktf.stringToTerraform(this._effectiveTime),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      force_upgrade: cdktf.booleanToTerraform(this._forceUpgrade),
      global_instance_id: cdktf.stringToTerraform(this._globalInstanceId),
      id: cdktf.stringToTerraform(this._id),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      intranet_bandwidth: cdktf.numberToTerraform(this._intranetBandwidth),
      modify_mode: cdktf.stringToTerraform(this._modifyMode),
      node_type: cdktf.stringToTerraform(this._nodeType),
      param_no_loose_sentinel_enabled: cdktf.stringToTerraform(this._paramNoLooseSentinelEnabled),
      param_no_loose_sentinel_password_free_access: cdktf.stringToTerraform(this._paramNoLooseSentinelPasswordFreeAccess),
      param_no_loose_sentinel_password_free_commands: cdktf.stringToTerraform(this._paramNoLooseSentinelPasswordFreeCommands),
      param_repl_mode: cdktf.stringToTerraform(this._paramReplMode),
      param_semisync_repl_timeout: cdktf.stringToTerraform(this._paramSemisyncReplTimeout),
      param_sentinel_compat_enable: cdktf.stringToTerraform(this._paramSentinelCompatEnable),
      password: cdktf.stringToTerraform(this._password),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      port: cdktf.numberToTerraform(this._port),
      read_only_count: cdktf.numberToTerraform(this._readOnlyCount),
      recover_config_mode: cdktf.stringToTerraform(this._recoverConfigMode),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      secondary_zone_id: cdktf.stringToTerraform(this._secondaryZoneId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      security_ip_group_name: cdktf.stringToTerraform(this._securityIpGroupName),
      security_ips: cdktf.stringToTerraform(this._securityIps),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      slave_read_only_count: cdktf.numberToTerraform(this._slaveReadOnlyCount),
      src_db_instance_id: cdktf.stringToTerraform(this._srcDbInstanceId),
      ssl_enabled: cdktf.stringToTerraform(this._sslEnabled),
      storage_performance_level: cdktf.stringToTerraform(this._storagePerformanceLevel),
      storage_size_gb: cdktf.numberToTerraform(this._storageSizeGb),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tair_instance_name: cdktf.stringToTerraform(this._tairInstanceName),
      vpc_auth_mode: cdktf.stringToTerraform(this._vpcAuthMode),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: redisTairInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew: {
        value: cdktf.stringToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew_period: {
        value: cdktf.stringToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_id: {
        value: cdktf.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_backup_id: {
        value: cdktf.stringToHclTerraform(this._clusterBackupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_string_prefix: {
        value: cdktf.stringToHclTerraform(this._connectionStringPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_time: {
        value: cdktf.stringToHclTerraform(this._effectiveTime),
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
      force_upgrade: {
        value: cdktf.booleanToHclTerraform(this._forceUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_instance_id: {
        value: cdktf.stringToHclTerraform(this._globalInstanceId),
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
      instance_class: {
        value: cdktf.stringToHclTerraform(this._instanceClass),
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
      intranet_bandwidth: {
        value: cdktf.numberToHclTerraform(this._intranetBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      modify_mode: {
        value: cdktf.stringToHclTerraform(this._modifyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      param_no_loose_sentinel_enabled: {
        value: cdktf.stringToHclTerraform(this._paramNoLooseSentinelEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      param_no_loose_sentinel_password_free_access: {
        value: cdktf.stringToHclTerraform(this._paramNoLooseSentinelPasswordFreeAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      param_no_loose_sentinel_password_free_commands: {
        value: cdktf.stringToHclTerraform(this._paramNoLooseSentinelPasswordFreeCommands),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      param_repl_mode: {
        value: cdktf.stringToHclTerraform(this._paramReplMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      param_semisync_repl_timeout: {
        value: cdktf.stringToHclTerraform(this._paramSemisyncReplTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      param_sentinel_compat_enable: {
        value: cdktf.stringToHclTerraform(this._paramSentinelCompatEnable),
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
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_only_count: {
        value: cdktf.numberToHclTerraform(this._readOnlyCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recover_config_mode: {
        value: cdktf.stringToHclTerraform(this._recoverConfigMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_zone_id: {
        value: cdktf.stringToHclTerraform(this._secondaryZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_ip_group_name: {
        value: cdktf.stringToHclTerraform(this._securityIpGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_ips: {
        value: cdktf.stringToHclTerraform(this._securityIps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shard_count: {
        value: cdktf.numberToHclTerraform(this._shardCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slave_read_only_count: {
        value: cdktf.numberToHclTerraform(this._slaveReadOnlyCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_db_instance_id: {
        value: cdktf.stringToHclTerraform(this._srcDbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_enabled: {
        value: cdktf.stringToHclTerraform(this._sslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_performance_level: {
        value: cdktf.stringToHclTerraform(this._storagePerformanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_size_gb: {
        value: cdktf.numberToHclTerraform(this._storageSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tair_instance_name: {
        value: cdktf.stringToHclTerraform(this._tairInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_auth_mode: {
        value: cdktf.stringToHclTerraform(this._vpcAuthMode),
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
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
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
      timeouts: {
        value: redisTairInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedisTairInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
