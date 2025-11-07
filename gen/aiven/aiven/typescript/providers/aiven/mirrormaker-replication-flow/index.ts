// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MirrormakerReplicationFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of topic configuration properties and regular expressions to not replicate. The properties that are not replicated by default are: `follower.replication.throttled.replicas`, `leader.replication.throttled.replicas`, `message.timestamp.difference.max.ms`, `message.timestamp.type`, `unclean.leader.election.enable`, and `min.insync.replicas`. Setting this overrides the defaults. For example, to enable replication for 'min.insync.replicas' and 'unclean.leader.election.enable' set this to: ["follower\\\\.replication\\\\.throttled\\\\.replicas", "leader\\\\.replication\\\\.throttled\\\\.replicas", "message\\\\.timestamp\\\\.difference\\\\.max\\\\.ms",  "message\\\\.timestamp\\\\.type"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#config_properties_exclude MirrormakerReplicationFlow#config_properties_exclude}
  */
  readonly configPropertiesExclude?: string[];
  /**
  * Enables emitting heartbeats to the direction opposite to the flow, i.e. to the source cluster. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#emit_backward_heartbeats_enabled MirrormakerReplicationFlow#emit_backward_heartbeats_enabled}
  */
  readonly emitBackwardHeartbeatsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables emitting heartbeats to the target cluster. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#emit_heartbeats_enabled MirrormakerReplicationFlow#emit_heartbeats_enabled}
  */
  readonly emitHeartbeatsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables replication flow for a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#enable MirrormakerReplicationFlow#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Enables exactly-once message delivery. Set this to `enabled` for new replications. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#exactly_once_delivery_enabled MirrormakerReplicationFlow#exactly_once_delivery_enabled}
  */
  readonly exactlyOnceDeliveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#id MirrormakerReplicationFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Offset syncs topic location. The possible values are `source` and `target`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#offset_syncs_topic_location MirrormakerReplicationFlow#offset_syncs_topic_location}
  */
  readonly offsetSyncsTopicLocation: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#project MirrormakerReplicationFlow#project}
  */
  readonly project: string;
  /**
  * Replication factor, `>= 1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#replication_factor MirrormakerReplicationFlow#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Replication policy class. The possible values are `org.apache.kafka.connect.mirror.DefaultReplicationPolicy` and `org.apache.kafka.connect.mirror.IdentityReplicationPolicy`. The default value is `org.apache.kafka.connect.mirror.DefaultReplicationPolicy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#replication_policy_class MirrormakerReplicationFlow#replication_policy_class}
  */
  readonly replicationPolicyClass: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#service_name MirrormakerReplicationFlow#service_name}
  */
  readonly serviceName: string;
  /**
  * Source cluster alias. Maximum length: `128`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#source_cluster MirrormakerReplicationFlow#source_cluster}
  */
  readonly sourceCluster: string;
  /**
  * Sync consumer group offsets. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#sync_group_offsets_enabled MirrormakerReplicationFlow#sync_group_offsets_enabled}
  */
  readonly syncGroupOffsetsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency of consumer group offset sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#sync_group_offsets_interval_seconds MirrormakerReplicationFlow#sync_group_offsets_interval_seconds}
  */
  readonly syncGroupOffsetsIntervalSeconds?: number;
  /**
  * Target cluster alias. Maximum length: `128`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#target_cluster MirrormakerReplicationFlow#target_cluster}
  */
  readonly targetCluster: string;
  /**
  * The topics to include in the replica defined by a [list of regular expressions in Java format](https://aiven.io/docs/products/kafka/kafka-mirrormaker/concepts/replication-flow-topics-regex).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#topics MirrormakerReplicationFlow#topics}
  */
  readonly topics?: string[];
  /**
  * The topics to exclude from the replica defined by a [list of regular expressions in Java format](https://aiven.io/docs/products/kafka/kafka-mirrormaker/concepts/replication-flow-topics-regex).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#topics_blacklist MirrormakerReplicationFlow#topics_blacklist}
  */
  readonly topicsBlacklist?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#timeouts MirrormakerReplicationFlow#timeouts}
  */
  readonly timeouts?: MirrormakerReplicationFlowTimeouts;
}
export interface MirrormakerReplicationFlowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#create MirrormakerReplicationFlow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#default MirrormakerReplicationFlow#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#delete MirrormakerReplicationFlow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#read MirrormakerReplicationFlow#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#update MirrormakerReplicationFlow#update}
  */
  readonly update?: string;
}

export function mirrormakerReplicationFlowTimeoutsToTerraform(struct?: MirrormakerReplicationFlowTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mirrormakerReplicationFlowTimeoutsToHclTerraform(struct?: MirrormakerReplicationFlowTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class MirrormakerReplicationFlowTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MirrormakerReplicationFlowTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MirrormakerReplicationFlowTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow aiven_mirrormaker_replication_flow}
*/
export class MirrormakerReplicationFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_mirrormaker_replication_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MirrormakerReplicationFlow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MirrormakerReplicationFlow to import
  * @param importFromId The id of the existing MirrormakerReplicationFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MirrormakerReplicationFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_mirrormaker_replication_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/mirrormaker_replication_flow aiven_mirrormaker_replication_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MirrormakerReplicationFlowConfig
  */
  public constructor(scope: Construct, id: string, config: MirrormakerReplicationFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_mirrormaker_replication_flow',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configPropertiesExclude = config.configPropertiesExclude;
    this._emitBackwardHeartbeatsEnabled = config.emitBackwardHeartbeatsEnabled;
    this._emitHeartbeatsEnabled = config.emitHeartbeatsEnabled;
    this._enable = config.enable;
    this._exactlyOnceDeliveryEnabled = config.exactlyOnceDeliveryEnabled;
    this._id = config.id;
    this._offsetSyncsTopicLocation = config.offsetSyncsTopicLocation;
    this._project = config.project;
    this._replicationFactor = config.replicationFactor;
    this._replicationPolicyClass = config.replicationPolicyClass;
    this._serviceName = config.serviceName;
    this._sourceCluster = config.sourceCluster;
    this._syncGroupOffsetsEnabled = config.syncGroupOffsetsEnabled;
    this._syncGroupOffsetsIntervalSeconds = config.syncGroupOffsetsIntervalSeconds;
    this._targetCluster = config.targetCluster;
    this._topics = config.topics;
    this._topicsBlacklist = config.topicsBlacklist;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_properties_exclude - computed: false, optional: true, required: false
  private _configPropertiesExclude?: string[]; 
  public get configPropertiesExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('config_properties_exclude'));
  }
  public set configPropertiesExclude(value: string[]) {
    this._configPropertiesExclude = value;
  }
  public resetConfigPropertiesExclude() {
    this._configPropertiesExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPropertiesExcludeInput() {
    return this._configPropertiesExclude;
  }

  // emit_backward_heartbeats_enabled - computed: false, optional: true, required: false
  private _emitBackwardHeartbeatsEnabled?: boolean | cdktf.IResolvable; 
  public get emitBackwardHeartbeatsEnabled() {
    return this.getBooleanAttribute('emit_backward_heartbeats_enabled');
  }
  public set emitBackwardHeartbeatsEnabled(value: boolean | cdktf.IResolvable) {
    this._emitBackwardHeartbeatsEnabled = value;
  }
  public resetEmitBackwardHeartbeatsEnabled() {
    this._emitBackwardHeartbeatsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitBackwardHeartbeatsEnabledInput() {
    return this._emitBackwardHeartbeatsEnabled;
  }

  // emit_heartbeats_enabled - computed: false, optional: true, required: false
  private _emitHeartbeatsEnabled?: boolean | cdktf.IResolvable; 
  public get emitHeartbeatsEnabled() {
    return this.getBooleanAttribute('emit_heartbeats_enabled');
  }
  public set emitHeartbeatsEnabled(value: boolean | cdktf.IResolvable) {
    this._emitHeartbeatsEnabled = value;
  }
  public resetEmitHeartbeatsEnabled() {
    this._emitHeartbeatsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitHeartbeatsEnabledInput() {
    return this._emitHeartbeatsEnabled;
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // exactly_once_delivery_enabled - computed: false, optional: true, required: false
  private _exactlyOnceDeliveryEnabled?: boolean | cdktf.IResolvable; 
  public get exactlyOnceDeliveryEnabled() {
    return this.getBooleanAttribute('exactly_once_delivery_enabled');
  }
  public set exactlyOnceDeliveryEnabled(value: boolean | cdktf.IResolvable) {
    this._exactlyOnceDeliveryEnabled = value;
  }
  public resetExactlyOnceDeliveryEnabled() {
    this._exactlyOnceDeliveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactlyOnceDeliveryEnabledInput() {
    return this._exactlyOnceDeliveryEnabled;
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

  // offset_syncs_topic_location - computed: false, optional: false, required: true
  private _offsetSyncsTopicLocation?: string; 
  public get offsetSyncsTopicLocation() {
    return this.getStringAttribute('offset_syncs_topic_location');
  }
  public set offsetSyncsTopicLocation(value: string) {
    this._offsetSyncsTopicLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetSyncsTopicLocationInput() {
    return this._offsetSyncsTopicLocation;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // replication_factor - computed: false, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // replication_policy_class - computed: false, optional: false, required: true
  private _replicationPolicyClass?: string; 
  public get replicationPolicyClass() {
    return this.getStringAttribute('replication_policy_class');
  }
  public set replicationPolicyClass(value: string) {
    this._replicationPolicyClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationPolicyClassInput() {
    return this._replicationPolicyClass;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // source_cluster - computed: false, optional: false, required: true
  private _sourceCluster?: string; 
  public get sourceCluster() {
    return this.getStringAttribute('source_cluster');
  }
  public set sourceCluster(value: string) {
    this._sourceCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceClusterInput() {
    return this._sourceCluster;
  }

  // sync_group_offsets_enabled - computed: false, optional: true, required: false
  private _syncGroupOffsetsEnabled?: boolean | cdktf.IResolvable; 
  public get syncGroupOffsetsEnabled() {
    return this.getBooleanAttribute('sync_group_offsets_enabled');
  }
  public set syncGroupOffsetsEnabled(value: boolean | cdktf.IResolvable) {
    this._syncGroupOffsetsEnabled = value;
  }
  public resetSyncGroupOffsetsEnabled() {
    this._syncGroupOffsetsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncGroupOffsetsEnabledInput() {
    return this._syncGroupOffsetsEnabled;
  }

  // sync_group_offsets_interval_seconds - computed: false, optional: true, required: false
  private _syncGroupOffsetsIntervalSeconds?: number; 
  public get syncGroupOffsetsIntervalSeconds() {
    return this.getNumberAttribute('sync_group_offsets_interval_seconds');
  }
  public set syncGroupOffsetsIntervalSeconds(value: number) {
    this._syncGroupOffsetsIntervalSeconds = value;
  }
  public resetSyncGroupOffsetsIntervalSeconds() {
    this._syncGroupOffsetsIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncGroupOffsetsIntervalSecondsInput() {
    return this._syncGroupOffsetsIntervalSeconds;
  }

  // target_cluster - computed: false, optional: false, required: true
  private _targetCluster?: string; 
  public get targetCluster() {
    return this.getStringAttribute('target_cluster');
  }
  public set targetCluster(value: string) {
    this._targetCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClusterInput() {
    return this._targetCluster;
  }

  // topics - computed: false, optional: true, required: false
  private _topics?: string[]; 
  public get topics() {
    return this.getListAttribute('topics');
  }
  public set topics(value: string[]) {
    this._topics = value;
  }
  public resetTopics() {
    this._topics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // topics_blacklist - computed: false, optional: true, required: false
  private _topicsBlacklist?: string[]; 
  public get topicsBlacklist() {
    return this.getListAttribute('topics_blacklist');
  }
  public set topicsBlacklist(value: string[]) {
    this._topicsBlacklist = value;
  }
  public resetTopicsBlacklist() {
    this._topicsBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsBlacklistInput() {
    return this._topicsBlacklist;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MirrormakerReplicationFlowTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MirrormakerReplicationFlowTimeouts) {
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
      config_properties_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configPropertiesExclude),
      emit_backward_heartbeats_enabled: cdktf.booleanToTerraform(this._emitBackwardHeartbeatsEnabled),
      emit_heartbeats_enabled: cdktf.booleanToTerraform(this._emitHeartbeatsEnabled),
      enable: cdktf.booleanToTerraform(this._enable),
      exactly_once_delivery_enabled: cdktf.booleanToTerraform(this._exactlyOnceDeliveryEnabled),
      id: cdktf.stringToTerraform(this._id),
      offset_syncs_topic_location: cdktf.stringToTerraform(this._offsetSyncsTopicLocation),
      project: cdktf.stringToTerraform(this._project),
      replication_factor: cdktf.numberToTerraform(this._replicationFactor),
      replication_policy_class: cdktf.stringToTerraform(this._replicationPolicyClass),
      service_name: cdktf.stringToTerraform(this._serviceName),
      source_cluster: cdktf.stringToTerraform(this._sourceCluster),
      sync_group_offsets_enabled: cdktf.booleanToTerraform(this._syncGroupOffsetsEnabled),
      sync_group_offsets_interval_seconds: cdktf.numberToTerraform(this._syncGroupOffsetsIntervalSeconds),
      target_cluster: cdktf.stringToTerraform(this._targetCluster),
      topics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topics),
      topics_blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topicsBlacklist),
      timeouts: mirrormakerReplicationFlowTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_properties_exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configPropertiesExclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      emit_backward_heartbeats_enabled: {
        value: cdktf.booleanToHclTerraform(this._emitBackwardHeartbeatsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      emit_heartbeats_enabled: {
        value: cdktf.booleanToHclTerraform(this._emitHeartbeatsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exactly_once_delivery_enabled: {
        value: cdktf.booleanToHclTerraform(this._exactlyOnceDeliveryEnabled),
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
      offset_syncs_topic_location: {
        value: cdktf.stringToHclTerraform(this._offsetSyncsTopicLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_factor: {
        value: cdktf.numberToHclTerraform(this._replicationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_policy_class: {
        value: cdktf.stringToHclTerraform(this._replicationPolicyClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_cluster: {
        value: cdktf.stringToHclTerraform(this._sourceCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_group_offsets_enabled: {
        value: cdktf.booleanToHclTerraform(this._syncGroupOffsetsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_group_offsets_interval_seconds: {
        value: cdktf.numberToHclTerraform(this._syncGroupOffsetsIntervalSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_cluster: {
        value: cdktf.stringToHclTerraform(this._targetCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._topics),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      topics_blacklist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._topicsBlacklist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: mirrormakerReplicationFlowTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MirrormakerReplicationFlowTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
