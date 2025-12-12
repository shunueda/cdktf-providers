// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackAlikafkaInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#auto_create_topics_enable ApsarastackAlikafkaInstance#auto_create_topics_enable}
  */
  readonly autoCreateTopicsEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#background_threads ApsarastackAlikafkaInstance#background_threads}
  */
  readonly backgroundThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#cup_type ApsarastackAlikafkaInstance#cup_type}
  */
  readonly cupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#default_replication_factor ApsarastackAlikafkaInstance#default_replication_factor}
  */
  readonly defaultReplicationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#disk_num ApsarastackAlikafkaInstance#disk_num}
  */
  readonly diskNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#id ApsarastackAlikafkaInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#log_retention_bytes ApsarastackAlikafkaInstance#log_retention_bytes}
  */
  readonly logRetentionBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#message_max_bytes ApsarastackAlikafkaInstance#message_max_bytes}
  */
  readonly messageMaxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#name ApsarastackAlikafkaInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#num_io_threads ApsarastackAlikafkaInstance#num_io_threads}
  */
  readonly numIoThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#num_network_threads ApsarastackAlikafkaInstance#num_network_threads}
  */
  readonly numNetworkThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#num_partitions ApsarastackAlikafkaInstance#num_partitions}
  */
  readonly numPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#num_replica_fetchers ApsarastackAlikafkaInstance#num_replica_fetchers}
  */
  readonly numReplicaFetchers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#offsets_retention_minutes ApsarastackAlikafkaInstance#offsets_retention_minutes}
  */
  readonly offsetsRetentionMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#plaintext ApsarastackAlikafkaInstance#plaintext}
  */
  readonly plaintext?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#queued_max_requests ApsarastackAlikafkaInstance#queued_max_requests}
  */
  readonly queuedMaxRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#replica_fetch_max_bytes ApsarastackAlikafkaInstance#replica_fetch_max_bytes}
  */
  readonly replicaFetchMaxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#replica_fetch_wait_max_ms ApsarastackAlikafkaInstance#replica_fetch_wait_max_ms}
  */
  readonly replicaFetchWaitMaxMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#replica_lag_time_max_ms ApsarastackAlikafkaInstance#replica_lag_time_max_ms}
  */
  readonly replicaLagTimeMaxMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#replicas ApsarastackAlikafkaInstance#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#sasl ApsarastackAlikafkaInstance#sasl}
  */
  readonly sasl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#selected_zones ApsarastackAlikafkaInstance#selected_zones}
  */
  readonly selectedZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#spec ApsarastackAlikafkaInstance#spec}
  */
  readonly spec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#vpc_id ApsarastackAlikafkaInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#vswitch_id ApsarastackAlikafkaInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#zone_id ApsarastackAlikafkaInstance#zone_id}
  */
  readonly zoneId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#timeouts ApsarastackAlikafkaInstance#timeouts}
  */
  readonly timeouts?: ApsarastackAlikafkaInstanceTimeouts;
}
export interface ApsarastackAlikafkaInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#create ApsarastackAlikafkaInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#delete ApsarastackAlikafkaInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#update ApsarastackAlikafkaInstance#update}
  */
  readonly update?: string;
}

export function apsarastackAlikafkaInstanceTimeoutsToTerraform(struct?: ApsarastackAlikafkaInstanceTimeouts | cdktf.IResolvable): any {
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


export function apsarastackAlikafkaInstanceTimeoutsToHclTerraform(struct?: ApsarastackAlikafkaInstanceTimeouts | cdktf.IResolvable): any {
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

export class ApsarastackAlikafkaInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackAlikafkaInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackAlikafkaInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance apsarastack_alikafka_instance}
*/
export class ApsarastackAlikafkaInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_alikafka_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackAlikafkaInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackAlikafkaInstance to import
  * @param importFromId The id of the existing ApsarastackAlikafkaInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackAlikafkaInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_alikafka_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_alikafka_instance apsarastack_alikafka_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackAlikafkaInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackAlikafkaInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_alikafka_instance',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCreateTopicsEnable = config.autoCreateTopicsEnable;
    this._backgroundThreads = config.backgroundThreads;
    this._cupType = config.cupType;
    this._defaultReplicationFactor = config.defaultReplicationFactor;
    this._diskNum = config.diskNum;
    this._id = config.id;
    this._logRetentionBytes = config.logRetentionBytes;
    this._messageMaxBytes = config.messageMaxBytes;
    this._name = config.name;
    this._numIoThreads = config.numIoThreads;
    this._numNetworkThreads = config.numNetworkThreads;
    this._numPartitions = config.numPartitions;
    this._numReplicaFetchers = config.numReplicaFetchers;
    this._offsetsRetentionMinutes = config.offsetsRetentionMinutes;
    this._plaintext = config.plaintext;
    this._queuedMaxRequests = config.queuedMaxRequests;
    this._replicaFetchMaxBytes = config.replicaFetchMaxBytes;
    this._replicaFetchWaitMaxMs = config.replicaFetchWaitMaxMs;
    this._replicaLagTimeMaxMs = config.replicaLagTimeMaxMs;
    this._replicas = config.replicas;
    this._sasl = config.sasl;
    this._selectedZones = config.selectedZones;
    this._spec = config.spec;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_topics_enable - computed: true, optional: true, required: false
  private _autoCreateTopicsEnable?: boolean | cdktf.IResolvable; 
  public get autoCreateTopicsEnable() {
    return this.getBooleanAttribute('auto_create_topics_enable');
  }
  public set autoCreateTopicsEnable(value: boolean | cdktf.IResolvable) {
    this._autoCreateTopicsEnable = value;
  }
  public resetAutoCreateTopicsEnable() {
    this._autoCreateTopicsEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateTopicsEnableInput() {
    return this._autoCreateTopicsEnable;
  }

  // background_threads - computed: true, optional: true, required: false
  private _backgroundThreads?: number; 
  public get backgroundThreads() {
    return this.getNumberAttribute('background_threads');
  }
  public set backgroundThreads(value: number) {
    this._backgroundThreads = value;
  }
  public resetBackgroundThreads() {
    this._backgroundThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundThreadsInput() {
    return this._backgroundThreads;
  }

  // cup_type - computed: true, optional: true, required: false
  private _cupType?: string; 
  public get cupType() {
    return this.getStringAttribute('cup_type');
  }
  public set cupType(value: string) {
    this._cupType = value;
  }
  public resetCupType() {
    this._cupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cupTypeInput() {
    return this._cupType;
  }

  // default_replication_factor - computed: true, optional: true, required: false
  private _defaultReplicationFactor?: number; 
  public get defaultReplicationFactor() {
    return this.getNumberAttribute('default_replication_factor');
  }
  public set defaultReplicationFactor(value: number) {
    this._defaultReplicationFactor = value;
  }
  public resetDefaultReplicationFactor() {
    this._defaultReplicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultReplicationFactorInput() {
    return this._defaultReplicationFactor;
  }

  // disk_num - computed: false, optional: true, required: false
  private _diskNum?: number; 
  public get diskNum() {
    return this.getNumberAttribute('disk_num');
  }
  public set diskNum(value: number) {
    this._diskNum = value;
  }
  public resetDiskNum() {
    this._diskNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNumInput() {
    return this._diskNum;
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

  // log_retention_bytes - computed: true, optional: true, required: false
  private _logRetentionBytes?: number; 
  public get logRetentionBytes() {
    return this.getNumberAttribute('log_retention_bytes');
  }
  public set logRetentionBytes(value: number) {
    this._logRetentionBytes = value;
  }
  public resetLogRetentionBytes() {
    this._logRetentionBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionBytesInput() {
    return this._logRetentionBytes;
  }

  // message_max_bytes - computed: true, optional: true, required: false
  private _messageMaxBytes?: number; 
  public get messageMaxBytes() {
    return this.getNumberAttribute('message_max_bytes');
  }
  public set messageMaxBytes(value: number) {
    this._messageMaxBytes = value;
  }
  public resetMessageMaxBytes() {
    this._messageMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageMaxBytesInput() {
    return this._messageMaxBytes;
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

  // num_io_threads - computed: true, optional: true, required: false
  private _numIoThreads?: number; 
  public get numIoThreads() {
    return this.getNumberAttribute('num_io_threads');
  }
  public set numIoThreads(value: number) {
    this._numIoThreads = value;
  }
  public resetNumIoThreads() {
    this._numIoThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numIoThreadsInput() {
    return this._numIoThreads;
  }

  // num_network_threads - computed: true, optional: true, required: false
  private _numNetworkThreads?: number; 
  public get numNetworkThreads() {
    return this.getNumberAttribute('num_network_threads');
  }
  public set numNetworkThreads(value: number) {
    this._numNetworkThreads = value;
  }
  public resetNumNetworkThreads() {
    this._numNetworkThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numNetworkThreadsInput() {
    return this._numNetworkThreads;
  }

  // num_partitions - computed: true, optional: true, required: false
  private _numPartitions?: number; 
  public get numPartitions() {
    return this.getNumberAttribute('num_partitions');
  }
  public set numPartitions(value: number) {
    this._numPartitions = value;
  }
  public resetNumPartitions() {
    this._numPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPartitionsInput() {
    return this._numPartitions;
  }

  // num_replica_fetchers - computed: true, optional: true, required: false
  private _numReplicaFetchers?: number; 
  public get numReplicaFetchers() {
    return this.getNumberAttribute('num_replica_fetchers');
  }
  public set numReplicaFetchers(value: number) {
    this._numReplicaFetchers = value;
  }
  public resetNumReplicaFetchers() {
    this._numReplicaFetchers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numReplicaFetchersInput() {
    return this._numReplicaFetchers;
  }

  // offsets_retention_minutes - computed: true, optional: true, required: false
  private _offsetsRetentionMinutes?: number; 
  public get offsetsRetentionMinutes() {
    return this.getNumberAttribute('offsets_retention_minutes');
  }
  public set offsetsRetentionMinutes(value: number) {
    this._offsetsRetentionMinutes = value;
  }
  public resetOffsetsRetentionMinutes() {
    this._offsetsRetentionMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetsRetentionMinutesInput() {
    return this._offsetsRetentionMinutes;
  }

  // plaintext - computed: true, optional: true, required: false
  private _plaintext?: boolean | cdktf.IResolvable; 
  public get plaintext() {
    return this.getBooleanAttribute('plaintext');
  }
  public set plaintext(value: boolean | cdktf.IResolvable) {
    this._plaintext = value;
  }
  public resetPlaintext() {
    this._plaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }

  // plaintext_endpoint - computed: true, optional: false, required: false
  public get plaintextEndpoint() {
    return this.getListAttribute('plaintext_endpoint');
  }

  // queued_max_requests - computed: true, optional: true, required: false
  private _queuedMaxRequests?: number; 
  public get queuedMaxRequests() {
    return this.getNumberAttribute('queued_max_requests');
  }
  public set queuedMaxRequests(value: number) {
    this._queuedMaxRequests = value;
  }
  public resetQueuedMaxRequests() {
    this._queuedMaxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuedMaxRequestsInput() {
    return this._queuedMaxRequests;
  }

  // replica_fetch_max_bytes - computed: true, optional: true, required: false
  private _replicaFetchMaxBytes?: number; 
  public get replicaFetchMaxBytes() {
    return this.getNumberAttribute('replica_fetch_max_bytes');
  }
  public set replicaFetchMaxBytes(value: number) {
    this._replicaFetchMaxBytes = value;
  }
  public resetReplicaFetchMaxBytes() {
    this._replicaFetchMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaFetchMaxBytesInput() {
    return this._replicaFetchMaxBytes;
  }

  // replica_fetch_wait_max_ms - computed: true, optional: true, required: false
  private _replicaFetchWaitMaxMs?: number; 
  public get replicaFetchWaitMaxMs() {
    return this.getNumberAttribute('replica_fetch_wait_max_ms');
  }
  public set replicaFetchWaitMaxMs(value: number) {
    this._replicaFetchWaitMaxMs = value;
  }
  public resetReplicaFetchWaitMaxMs() {
    this._replicaFetchWaitMaxMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaFetchWaitMaxMsInput() {
    return this._replicaFetchWaitMaxMs;
  }

  // replica_lag_time_max_ms - computed: true, optional: true, required: false
  private _replicaLagTimeMaxMs?: number; 
  public get replicaLagTimeMaxMs() {
    return this.getNumberAttribute('replica_lag_time_max_ms');
  }
  public set replicaLagTimeMaxMs(value: number) {
    this._replicaLagTimeMaxMs = value;
  }
  public resetReplicaLagTimeMaxMs() {
    this._replicaLagTimeMaxMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaLagTimeMaxMsInput() {
    return this._replicaLagTimeMaxMs;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // sasl - computed: true, optional: true, required: false
  private _sasl?: boolean | cdktf.IResolvable; 
  public get sasl() {
    return this.getBooleanAttribute('sasl');
  }
  public set sasl(value: boolean | cdktf.IResolvable) {
    this._sasl = value;
  }
  public resetSasl() {
    this._sasl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl;
  }

  // sasl_plaintext_endpoint - computed: true, optional: false, required: false
  public get saslPlaintextEndpoint() {
    return this.getListAttribute('sasl_plaintext_endpoint');
  }

  // sasl_ssl_endpoint - computed: true, optional: false, required: false
  public get saslSslEndpoint() {
    return this.getListAttribute('sasl_ssl_endpoint');
  }

  // selected_zones - computed: false, optional: true, required: false
  private _selectedZones?: string[]; 
  public get selectedZones() {
    return this.getListAttribute('selected_zones');
  }
  public set selectedZones(value: string[]) {
    this._selectedZones = value;
  }
  public resetSelectedZones() {
    this._selectedZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedZonesInput() {
    return this._selectedZones;
  }

  // spec - computed: true, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // vip_type - computed: true, optional: false, required: false
  public get vipType() {
    return this.getStringAttribute('vip_type');
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

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
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
  private _timeouts = new ApsarastackAlikafkaInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackAlikafkaInstanceTimeouts) {
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
      auto_create_topics_enable: cdktf.booleanToTerraform(this._autoCreateTopicsEnable),
      background_threads: cdktf.numberToTerraform(this._backgroundThreads),
      cup_type: cdktf.stringToTerraform(this._cupType),
      default_replication_factor: cdktf.numberToTerraform(this._defaultReplicationFactor),
      disk_num: cdktf.numberToTerraform(this._diskNum),
      id: cdktf.stringToTerraform(this._id),
      log_retention_bytes: cdktf.numberToTerraform(this._logRetentionBytes),
      message_max_bytes: cdktf.numberToTerraform(this._messageMaxBytes),
      name: cdktf.stringToTerraform(this._name),
      num_io_threads: cdktf.numberToTerraform(this._numIoThreads),
      num_network_threads: cdktf.numberToTerraform(this._numNetworkThreads),
      num_partitions: cdktf.numberToTerraform(this._numPartitions),
      num_replica_fetchers: cdktf.numberToTerraform(this._numReplicaFetchers),
      offsets_retention_minutes: cdktf.numberToTerraform(this._offsetsRetentionMinutes),
      plaintext: cdktf.booleanToTerraform(this._plaintext),
      queued_max_requests: cdktf.numberToTerraform(this._queuedMaxRequests),
      replica_fetch_max_bytes: cdktf.numberToTerraform(this._replicaFetchMaxBytes),
      replica_fetch_wait_max_ms: cdktf.numberToTerraform(this._replicaFetchWaitMaxMs),
      replica_lag_time_max_ms: cdktf.numberToTerraform(this._replicaLagTimeMaxMs),
      replicas: cdktf.numberToTerraform(this._replicas),
      sasl: cdktf.booleanToTerraform(this._sasl),
      selected_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedZones),
      spec: cdktf.stringToTerraform(this._spec),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: apsarastackAlikafkaInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_topics_enable: {
        value: cdktf.booleanToHclTerraform(this._autoCreateTopicsEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      background_threads: {
        value: cdktf.numberToHclTerraform(this._backgroundThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cup_type: {
        value: cdktf.stringToHclTerraform(this._cupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_replication_factor: {
        value: cdktf.numberToHclTerraform(this._defaultReplicationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_num: {
        value: cdktf.numberToHclTerraform(this._diskNum),
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
      log_retention_bytes: {
        value: cdktf.numberToHclTerraform(this._logRetentionBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_max_bytes: {
        value: cdktf.numberToHclTerraform(this._messageMaxBytes),
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
      num_io_threads: {
        value: cdktf.numberToHclTerraform(this._numIoThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_network_threads: {
        value: cdktf.numberToHclTerraform(this._numNetworkThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_partitions: {
        value: cdktf.numberToHclTerraform(this._numPartitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_replica_fetchers: {
        value: cdktf.numberToHclTerraform(this._numReplicaFetchers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offsets_retention_minutes: {
        value: cdktf.numberToHclTerraform(this._offsetsRetentionMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      plaintext: {
        value: cdktf.booleanToHclTerraform(this._plaintext),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      queued_max_requests: {
        value: cdktf.numberToHclTerraform(this._queuedMaxRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replica_fetch_max_bytes: {
        value: cdktf.numberToHclTerraform(this._replicaFetchMaxBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replica_fetch_wait_max_ms: {
        value: cdktf.numberToHclTerraform(this._replicaFetchWaitMaxMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replica_lag_time_max_ms: {
        value: cdktf.numberToHclTerraform(this._replicaLagTimeMaxMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sasl: {
        value: cdktf.booleanToHclTerraform(this._sasl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      selected_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      spec: {
        value: cdktf.stringToHclTerraform(this._spec),
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
        value: apsarastackAlikafkaInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackAlikafkaInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
