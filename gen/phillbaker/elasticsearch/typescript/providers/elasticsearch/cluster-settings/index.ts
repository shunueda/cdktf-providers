// https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to automatically create an index if it doesn’t already exist and apply any configured index template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#action_auto_create_index ClusterSettings#action_auto_create_index}
  */
  readonly actionAutoCreateIndex?: string;
  /**
  * When set to true, you must specify the index name to delete an index and it is not possible to delete all indices with _all or use wildcards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#action_destructive_requires_name ClusterSettings#action_destructive_requires_name}
  */
  readonly actionDestructiveRequiresName?: boolean | cdktf.IResolvable;
  /**
  * Make the whole cluster read only and metadata is not allowed to be modified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_blocks_read_only ClusterSettings#cluster_blocks_read_only}
  */
  readonly clusterBlocksReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Make the whole cluster read only, but allows to delete indices to free up resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_blocks_read_only_allow_delete ClusterSettings#cluster_blocks_read_only_allow_delete}
  */
  readonly clusterBlocksReadOnlyAllowDelete?: boolean | cdktf.IResolvable;
  /**
  * If false, you cannot close open indices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_indices_close_enable ClusterSettings#cluster_indices_close_enable}
  */
  readonly clusterIndicesCloseEnable?: boolean | cdktf.IResolvable;
  /**
  * A time string controlling how often Elasticsearch should check on disk usage for each node in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_info_update_interval ClusterSettings#cluster_info_update_interval}
  */
  readonly clusterInfoUpdateInterval?: string;
  /**
  * The total number of primary and replica shards for the cluster, this number is multiplied by the number of non-frozen data nodes; shards for closed indices do not count toward this limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_max_shards_per_node ClusterSettings#cluster_max_shards_per_node}
  */
  readonly clusterMaxShardsPerNode?: number;
  /**
  * The total number of primary and replica frozen shards, for the cluster; Ssards for closed indices do not count toward this limit, a cluster with no frozen data nodes is unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_max_shards_per_node_frozen ClusterSettings#cluster_max_shards_per_node_frozen}
  */
  readonly clusterMaxShardsPerNodeFrozen?: number;
  /**
  * Specifies which operations are rejected when there is no active master in a cluster (all, write)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_no_master_block ClusterSettings#cluster_no_master_block}
  */
  readonly clusterNoMasterBlock?: string;
  /**
  * Whether allocation for persistent tasks is active (all, none)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_persistent_tasks_allocation_enable ClusterSettings#cluster_persistent_tasks_allocation_enable}
  */
  readonly clusterPersistentTasksAllocationEnable?: string;
  /**
  * A time string controling how often assignment checks are performed to react to whether persistent tasks can be assigned to nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_persistent_tasks_allocation_recheck_interval ClusterSettings#cluster_persistent_tasks_allocation_recheck_interval}
  */
  readonly clusterPersistentTasksAllocationRecheckInterval?: string;
  /**
  * Specify when shard rebalancing is allowed (always, indices_primaries_active, indices_all_active)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_allow_rebalance ClusterSettings#cluster_routing_allocation_allow_rebalance}
  */
  readonly clusterRoutingAllocationAllowRebalance?: string;
  /**
  * Use custom node attributes to take hardware configuration into account when allocating shards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_awareness_attributes ClusterSettings#cluster_routing_allocation_awareness_attributes}
  */
  readonly clusterRoutingAllocationAwarenessAttributes?: string;
  /**
  * Weight factor for the number of shards per index allocated on a node, increasing this raises the tendency to equalize the number of shards per index across all nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_balance_index ClusterSettings#cluster_routing_allocation_balance_index}
  */
  readonly clusterRoutingAllocationBalanceIndex?: number;
  /**
  * Weight factor for the total number of shards allocated on a node, increasing this raises the tendency to equalize the number of shards across all nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_balance_shard ClusterSettings#cluster_routing_allocation_balance_shard}
  */
  readonly clusterRoutingAllocationBalanceShard?: number;
  /**
  * Minimal optimization value of operations that should be performed, raising this will cause the cluster to be less aggressive about optimizing the shard balance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_balance_threshold ClusterSettings#cluster_routing_allocation_balance_threshold}
  */
  readonly clusterRoutingAllocationBalanceThreshold?: number;
  /**
  * How many concurrent shard rebalances are allowed cluster wide
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_cluster_concurrent_rebalance ClusterSettings#cluster_routing_allocation_cluster_concurrent_rebalance}
  */
  readonly clusterRoutingAllocationClusterConcurrentRebalance?: number;
  /**
  * Whether the allocator will take into account shards that are currently being relocated to the target node when computing a node’s disk usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_disk_include_relocations ClusterSettings#cluster_routing_allocation_disk_include_relocations}
  */
  readonly clusterRoutingAllocationDiskIncludeRelocations?: boolean | cdktf.IResolvable;
  /**
  * Whether the disk allocation decider is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_disk_threshold_enabled ClusterSettings#cluster_routing_allocation_disk_threshold_enabled}
  */
  readonly clusterRoutingAllocationDiskThresholdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Allocator will attempt to relocate shards away from a node whose disk usage is above this percentage disk used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_disk_watermark_high ClusterSettings#cluster_routing_allocation_disk_watermark_high}
  */
  readonly clusterRoutingAllocationDiskWatermarkHigh?: string;
  /**
  * Allocator will not allocate shards to nodes that have more than this percentage disk used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_disk_watermark_low ClusterSettings#cluster_routing_allocation_disk_watermark_low}
  */
  readonly clusterRoutingAllocationDiskWatermarkLow?: string;
  /**
  * Enable or disable allocation for specific kinds of shards (all, primaries, new_primaries, none)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_enable ClusterSettings#cluster_routing_allocation_enable}
  */
  readonly clusterRoutingAllocationEnable?: string;
  /**
  * How many incoming recoveries where the target shard (likely the replica unless a shard is relocating) are allocated on the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_node_concurrent_incoming_recoveries ClusterSettings#cluster_routing_allocation_node_concurrent_incoming_recoveries}
  */
  readonly clusterRoutingAllocationNodeConcurrentIncomingRecoveries?: number;
  /**
  * How many outgoing recoveries where the source shard (likely the primary unless a shard is relocating) are allocated on the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_node_concurrent_outgoing_recoveries ClusterSettings#cluster_routing_allocation_node_concurrent_outgoing_recoveries}
  */
  readonly clusterRoutingAllocationNodeConcurrentOutgoingRecoveries?: number;
  /**
  * A shortcut to set both incoming and outgoing recoveries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_node_concurrent_recoveries ClusterSettings#cluster_routing_allocation_node_concurrent_recoveries}
  */
  readonly clusterRoutingAllocationNodeConcurrentRecoveries?: number;
  /**
  * Set a (usually) higher rate for primary recovery on node restart (usually from disk, so fast)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_node_initial_primaries_recoveries ClusterSettings#cluster_routing_allocation_node_initial_primaries_recoveries}
  */
  readonly clusterRoutingAllocationNodeInitialPrimariesRecoveries?: number;
  /**
  * Perform a check to prevent allocation of multiple instances of the same shard on a single host, if multiple nodes are started on the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_same_shard_host ClusterSettings#cluster_routing_allocation_same_shard_host}
  */
  readonly clusterRoutingAllocationSameShardHost?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of primary and replica shards allocated to each node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_allocation_total_shards_per_node ClusterSettings#cluster_routing_allocation_total_shards_per_node}
  */
  readonly clusterRoutingAllocationTotalShardsPerNode?: number;
  /**
  * Allow rebalancing for specific kinds of shards (all, primaries, replicas, none)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#cluster_routing_rebalance_enable ClusterSettings#cluster_routing_rebalance_enable}
  */
  readonly clusterRoutingRebalanceEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#id ClusterSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The percentage of memory above which if loading a field into the field data cache would cause the cache to exceed this limit, an error is returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#indices_breaker_fielddata_limit ClusterSettings#indices_breaker_fielddata_limit}
  */
  readonly indicesBreakerFielddataLimit?: string;
  /**
  * A constant that all field data estimations are multiplied by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#indices_breaker_fielddata_overhead ClusterSettings#indices_breaker_fielddata_overhead}
  */
  readonly indicesBreakerFielddataOverhead?: number;
  /**
  * The percentabge of memory above which per-request data structures (e.g. calculating aggregations) are prevented from exceeding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#indices_breaker_request_limit ClusterSettings#indices_breaker_request_limit}
  */
  readonly indicesBreakerRequestLimit?: string;
  /**
  * A constant that all request estimations are multiplied by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#indices_breaker_request_overhead ClusterSettings#indices_breaker_request_overhead}
  */
  readonly indicesBreakerRequestOverhead?: number;
  /**
  * The percentage of total amount of memory that can be used across all breakers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#indices_breaker_total_limit ClusterSettings#indices_breaker_total_limit}
  */
  readonly indicesBreakerTotalLimit?: string;
  /**
  * Maximum total inbound and outbound recovery traffic for each node, in mb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#indices_recovery_max_bytes_per_sec ClusterSettings#indices_recovery_max_bytes_per_sec}
  */
  readonly indicesRecoveryMaxBytesPerSec?: string;
  /**
  * The percentage limit of memory usage on a node of all currently active incoming requests on transport or HTTP level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#network_breaker_inflight_requests_limit ClusterSettings#network_breaker_inflight_requests_limit}
  */
  readonly networkBreakerInflightRequestsLimit?: string;
  /**
  * A constant that all in flight requests estimations are multiplied by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#network_breaker_inflight_requests_overhead ClusterSettings#network_breaker_inflight_requests_overhead}
  */
  readonly networkBreakerInflightRequestsOverhead?: number;
  /**
  * Limit for the number of unique dynamic scripts within a certain interval that are allowed to be compiled, expressed as compilations divided by a time string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#script_max_compilations_rate ClusterSettings#script_max_compilations_rate}
  */
  readonly scriptMaxCompilationsRate?: string;
  /**
  * A time string setting a cluster-wide default timeout for all search requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#search_default_search_timeout ClusterSettings#search_default_search_timeout}
  */
  readonly searchDefaultSearchTimeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings elasticsearch_cluster_settings}
*/
export class ClusterSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticsearch_cluster_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterSettings to import
  * @param importFromId The id of the existing ClusterSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticsearch_cluster_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/cluster_settings elasticsearch_cluster_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClusterSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'elasticsearch_cluster_settings',
      terraformGeneratorMetadata: {
        providerName: 'elasticsearch',
        providerVersion: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionAutoCreateIndex = config.actionAutoCreateIndex;
    this._actionDestructiveRequiresName = config.actionDestructiveRequiresName;
    this._clusterBlocksReadOnly = config.clusterBlocksReadOnly;
    this._clusterBlocksReadOnlyAllowDelete = config.clusterBlocksReadOnlyAllowDelete;
    this._clusterIndicesCloseEnable = config.clusterIndicesCloseEnable;
    this._clusterInfoUpdateInterval = config.clusterInfoUpdateInterval;
    this._clusterMaxShardsPerNode = config.clusterMaxShardsPerNode;
    this._clusterMaxShardsPerNodeFrozen = config.clusterMaxShardsPerNodeFrozen;
    this._clusterNoMasterBlock = config.clusterNoMasterBlock;
    this._clusterPersistentTasksAllocationEnable = config.clusterPersistentTasksAllocationEnable;
    this._clusterPersistentTasksAllocationRecheckInterval = config.clusterPersistentTasksAllocationRecheckInterval;
    this._clusterRoutingAllocationAllowRebalance = config.clusterRoutingAllocationAllowRebalance;
    this._clusterRoutingAllocationAwarenessAttributes = config.clusterRoutingAllocationAwarenessAttributes;
    this._clusterRoutingAllocationBalanceIndex = config.clusterRoutingAllocationBalanceIndex;
    this._clusterRoutingAllocationBalanceShard = config.clusterRoutingAllocationBalanceShard;
    this._clusterRoutingAllocationBalanceThreshold = config.clusterRoutingAllocationBalanceThreshold;
    this._clusterRoutingAllocationClusterConcurrentRebalance = config.clusterRoutingAllocationClusterConcurrentRebalance;
    this._clusterRoutingAllocationDiskIncludeRelocations = config.clusterRoutingAllocationDiskIncludeRelocations;
    this._clusterRoutingAllocationDiskThresholdEnabled = config.clusterRoutingAllocationDiskThresholdEnabled;
    this._clusterRoutingAllocationDiskWatermarkHigh = config.clusterRoutingAllocationDiskWatermarkHigh;
    this._clusterRoutingAllocationDiskWatermarkLow = config.clusterRoutingAllocationDiskWatermarkLow;
    this._clusterRoutingAllocationEnable = config.clusterRoutingAllocationEnable;
    this._clusterRoutingAllocationNodeConcurrentIncomingRecoveries = config.clusterRoutingAllocationNodeConcurrentIncomingRecoveries;
    this._clusterRoutingAllocationNodeConcurrentOutgoingRecoveries = config.clusterRoutingAllocationNodeConcurrentOutgoingRecoveries;
    this._clusterRoutingAllocationNodeConcurrentRecoveries = config.clusterRoutingAllocationNodeConcurrentRecoveries;
    this._clusterRoutingAllocationNodeInitialPrimariesRecoveries = config.clusterRoutingAllocationNodeInitialPrimariesRecoveries;
    this._clusterRoutingAllocationSameShardHost = config.clusterRoutingAllocationSameShardHost;
    this._clusterRoutingAllocationTotalShardsPerNode = config.clusterRoutingAllocationTotalShardsPerNode;
    this._clusterRoutingRebalanceEnable = config.clusterRoutingRebalanceEnable;
    this._id = config.id;
    this._indicesBreakerFielddataLimit = config.indicesBreakerFielddataLimit;
    this._indicesBreakerFielddataOverhead = config.indicesBreakerFielddataOverhead;
    this._indicesBreakerRequestLimit = config.indicesBreakerRequestLimit;
    this._indicesBreakerRequestOverhead = config.indicesBreakerRequestOverhead;
    this._indicesBreakerTotalLimit = config.indicesBreakerTotalLimit;
    this._indicesRecoveryMaxBytesPerSec = config.indicesRecoveryMaxBytesPerSec;
    this._networkBreakerInflightRequestsLimit = config.networkBreakerInflightRequestsLimit;
    this._networkBreakerInflightRequestsOverhead = config.networkBreakerInflightRequestsOverhead;
    this._scriptMaxCompilationsRate = config.scriptMaxCompilationsRate;
    this._searchDefaultSearchTimeout = config.searchDefaultSearchTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_auto_create_index - computed: false, optional: true, required: false
  private _actionAutoCreateIndex?: string; 
  public get actionAutoCreateIndex() {
    return this.getStringAttribute('action_auto_create_index');
  }
  public set actionAutoCreateIndex(value: string) {
    this._actionAutoCreateIndex = value;
  }
  public resetActionAutoCreateIndex() {
    this._actionAutoCreateIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionAutoCreateIndexInput() {
    return this._actionAutoCreateIndex;
  }

  // action_destructive_requires_name - computed: false, optional: true, required: false
  private _actionDestructiveRequiresName?: boolean | cdktf.IResolvable; 
  public get actionDestructiveRequiresName() {
    return this.getBooleanAttribute('action_destructive_requires_name');
  }
  public set actionDestructiveRequiresName(value: boolean | cdktf.IResolvable) {
    this._actionDestructiveRequiresName = value;
  }
  public resetActionDestructiveRequiresName() {
    this._actionDestructiveRequiresName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDestructiveRequiresNameInput() {
    return this._actionDestructiveRequiresName;
  }

  // cluster_blocks_read_only - computed: false, optional: true, required: false
  private _clusterBlocksReadOnly?: boolean | cdktf.IResolvable; 
  public get clusterBlocksReadOnly() {
    return this.getBooleanAttribute('cluster_blocks_read_only');
  }
  public set clusterBlocksReadOnly(value: boolean | cdktf.IResolvable) {
    this._clusterBlocksReadOnly = value;
  }
  public resetClusterBlocksReadOnly() {
    this._clusterBlocksReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterBlocksReadOnlyInput() {
    return this._clusterBlocksReadOnly;
  }

  // cluster_blocks_read_only_allow_delete - computed: false, optional: true, required: false
  private _clusterBlocksReadOnlyAllowDelete?: boolean | cdktf.IResolvable; 
  public get clusterBlocksReadOnlyAllowDelete() {
    return this.getBooleanAttribute('cluster_blocks_read_only_allow_delete');
  }
  public set clusterBlocksReadOnlyAllowDelete(value: boolean | cdktf.IResolvable) {
    this._clusterBlocksReadOnlyAllowDelete = value;
  }
  public resetClusterBlocksReadOnlyAllowDelete() {
    this._clusterBlocksReadOnlyAllowDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterBlocksReadOnlyAllowDeleteInput() {
    return this._clusterBlocksReadOnlyAllowDelete;
  }

  // cluster_indices_close_enable - computed: false, optional: true, required: false
  private _clusterIndicesCloseEnable?: boolean | cdktf.IResolvable; 
  public get clusterIndicesCloseEnable() {
    return this.getBooleanAttribute('cluster_indices_close_enable');
  }
  public set clusterIndicesCloseEnable(value: boolean | cdktf.IResolvable) {
    this._clusterIndicesCloseEnable = value;
  }
  public resetClusterIndicesCloseEnable() {
    this._clusterIndicesCloseEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIndicesCloseEnableInput() {
    return this._clusterIndicesCloseEnable;
  }

  // cluster_info_update_interval - computed: false, optional: true, required: false
  private _clusterInfoUpdateInterval?: string; 
  public get clusterInfoUpdateInterval() {
    return this.getStringAttribute('cluster_info_update_interval');
  }
  public set clusterInfoUpdateInterval(value: string) {
    this._clusterInfoUpdateInterval = value;
  }
  public resetClusterInfoUpdateInterval() {
    this._clusterInfoUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInfoUpdateIntervalInput() {
    return this._clusterInfoUpdateInterval;
  }

  // cluster_max_shards_per_node - computed: false, optional: true, required: false
  private _clusterMaxShardsPerNode?: number; 
  public get clusterMaxShardsPerNode() {
    return this.getNumberAttribute('cluster_max_shards_per_node');
  }
  public set clusterMaxShardsPerNode(value: number) {
    this._clusterMaxShardsPerNode = value;
  }
  public resetClusterMaxShardsPerNode() {
    this._clusterMaxShardsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMaxShardsPerNodeInput() {
    return this._clusterMaxShardsPerNode;
  }

  // cluster_max_shards_per_node_frozen - computed: false, optional: true, required: false
  private _clusterMaxShardsPerNodeFrozen?: number; 
  public get clusterMaxShardsPerNodeFrozen() {
    return this.getNumberAttribute('cluster_max_shards_per_node_frozen');
  }
  public set clusterMaxShardsPerNodeFrozen(value: number) {
    this._clusterMaxShardsPerNodeFrozen = value;
  }
  public resetClusterMaxShardsPerNodeFrozen() {
    this._clusterMaxShardsPerNodeFrozen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMaxShardsPerNodeFrozenInput() {
    return this._clusterMaxShardsPerNodeFrozen;
  }

  // cluster_no_master_block - computed: false, optional: true, required: false
  private _clusterNoMasterBlock?: string; 
  public get clusterNoMasterBlock() {
    return this.getStringAttribute('cluster_no_master_block');
  }
  public set clusterNoMasterBlock(value: string) {
    this._clusterNoMasterBlock = value;
  }
  public resetClusterNoMasterBlock() {
    this._clusterNoMasterBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNoMasterBlockInput() {
    return this._clusterNoMasterBlock;
  }

  // cluster_persistent_tasks_allocation_enable - computed: false, optional: true, required: false
  private _clusterPersistentTasksAllocationEnable?: string; 
  public get clusterPersistentTasksAllocationEnable() {
    return this.getStringAttribute('cluster_persistent_tasks_allocation_enable');
  }
  public set clusterPersistentTasksAllocationEnable(value: string) {
    this._clusterPersistentTasksAllocationEnable = value;
  }
  public resetClusterPersistentTasksAllocationEnable() {
    this._clusterPersistentTasksAllocationEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPersistentTasksAllocationEnableInput() {
    return this._clusterPersistentTasksAllocationEnable;
  }

  // cluster_persistent_tasks_allocation_recheck_interval - computed: false, optional: true, required: false
  private _clusterPersistentTasksAllocationRecheckInterval?: string; 
  public get clusterPersistentTasksAllocationRecheckInterval() {
    return this.getStringAttribute('cluster_persistent_tasks_allocation_recheck_interval');
  }
  public set clusterPersistentTasksAllocationRecheckInterval(value: string) {
    this._clusterPersistentTasksAllocationRecheckInterval = value;
  }
  public resetClusterPersistentTasksAllocationRecheckInterval() {
    this._clusterPersistentTasksAllocationRecheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPersistentTasksAllocationRecheckIntervalInput() {
    return this._clusterPersistentTasksAllocationRecheckInterval;
  }

  // cluster_routing_allocation_allow_rebalance - computed: false, optional: true, required: false
  private _clusterRoutingAllocationAllowRebalance?: string; 
  public get clusterRoutingAllocationAllowRebalance() {
    return this.getStringAttribute('cluster_routing_allocation_allow_rebalance');
  }
  public set clusterRoutingAllocationAllowRebalance(value: string) {
    this._clusterRoutingAllocationAllowRebalance = value;
  }
  public resetClusterRoutingAllocationAllowRebalance() {
    this._clusterRoutingAllocationAllowRebalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationAllowRebalanceInput() {
    return this._clusterRoutingAllocationAllowRebalance;
  }

  // cluster_routing_allocation_awareness_attributes - computed: false, optional: true, required: false
  private _clusterRoutingAllocationAwarenessAttributes?: string; 
  public get clusterRoutingAllocationAwarenessAttributes() {
    return this.getStringAttribute('cluster_routing_allocation_awareness_attributes');
  }
  public set clusterRoutingAllocationAwarenessAttributes(value: string) {
    this._clusterRoutingAllocationAwarenessAttributes = value;
  }
  public resetClusterRoutingAllocationAwarenessAttributes() {
    this._clusterRoutingAllocationAwarenessAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationAwarenessAttributesInput() {
    return this._clusterRoutingAllocationAwarenessAttributes;
  }

  // cluster_routing_allocation_balance_index - computed: false, optional: true, required: false
  private _clusterRoutingAllocationBalanceIndex?: number; 
  public get clusterRoutingAllocationBalanceIndex() {
    return this.getNumberAttribute('cluster_routing_allocation_balance_index');
  }
  public set clusterRoutingAllocationBalanceIndex(value: number) {
    this._clusterRoutingAllocationBalanceIndex = value;
  }
  public resetClusterRoutingAllocationBalanceIndex() {
    this._clusterRoutingAllocationBalanceIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationBalanceIndexInput() {
    return this._clusterRoutingAllocationBalanceIndex;
  }

  // cluster_routing_allocation_balance_shard - computed: false, optional: true, required: false
  private _clusterRoutingAllocationBalanceShard?: number; 
  public get clusterRoutingAllocationBalanceShard() {
    return this.getNumberAttribute('cluster_routing_allocation_balance_shard');
  }
  public set clusterRoutingAllocationBalanceShard(value: number) {
    this._clusterRoutingAllocationBalanceShard = value;
  }
  public resetClusterRoutingAllocationBalanceShard() {
    this._clusterRoutingAllocationBalanceShard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationBalanceShardInput() {
    return this._clusterRoutingAllocationBalanceShard;
  }

  // cluster_routing_allocation_balance_threshold - computed: false, optional: true, required: false
  private _clusterRoutingAllocationBalanceThreshold?: number; 
  public get clusterRoutingAllocationBalanceThreshold() {
    return this.getNumberAttribute('cluster_routing_allocation_balance_threshold');
  }
  public set clusterRoutingAllocationBalanceThreshold(value: number) {
    this._clusterRoutingAllocationBalanceThreshold = value;
  }
  public resetClusterRoutingAllocationBalanceThreshold() {
    this._clusterRoutingAllocationBalanceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationBalanceThresholdInput() {
    return this._clusterRoutingAllocationBalanceThreshold;
  }

  // cluster_routing_allocation_cluster_concurrent_rebalance - computed: false, optional: true, required: false
  private _clusterRoutingAllocationClusterConcurrentRebalance?: number; 
  public get clusterRoutingAllocationClusterConcurrentRebalance() {
    return this.getNumberAttribute('cluster_routing_allocation_cluster_concurrent_rebalance');
  }
  public set clusterRoutingAllocationClusterConcurrentRebalance(value: number) {
    this._clusterRoutingAllocationClusterConcurrentRebalance = value;
  }
  public resetClusterRoutingAllocationClusterConcurrentRebalance() {
    this._clusterRoutingAllocationClusterConcurrentRebalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationClusterConcurrentRebalanceInput() {
    return this._clusterRoutingAllocationClusterConcurrentRebalance;
  }

  // cluster_routing_allocation_disk_include_relocations - computed: false, optional: true, required: false
  private _clusterRoutingAllocationDiskIncludeRelocations?: boolean | cdktf.IResolvable; 
  public get clusterRoutingAllocationDiskIncludeRelocations() {
    return this.getBooleanAttribute('cluster_routing_allocation_disk_include_relocations');
  }
  public set clusterRoutingAllocationDiskIncludeRelocations(value: boolean | cdktf.IResolvable) {
    this._clusterRoutingAllocationDiskIncludeRelocations = value;
  }
  public resetClusterRoutingAllocationDiskIncludeRelocations() {
    this._clusterRoutingAllocationDiskIncludeRelocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationDiskIncludeRelocationsInput() {
    return this._clusterRoutingAllocationDiskIncludeRelocations;
  }

  // cluster_routing_allocation_disk_threshold_enabled - computed: false, optional: true, required: false
  private _clusterRoutingAllocationDiskThresholdEnabled?: boolean | cdktf.IResolvable; 
  public get clusterRoutingAllocationDiskThresholdEnabled() {
    return this.getBooleanAttribute('cluster_routing_allocation_disk_threshold_enabled');
  }
  public set clusterRoutingAllocationDiskThresholdEnabled(value: boolean | cdktf.IResolvable) {
    this._clusterRoutingAllocationDiskThresholdEnabled = value;
  }
  public resetClusterRoutingAllocationDiskThresholdEnabled() {
    this._clusterRoutingAllocationDiskThresholdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationDiskThresholdEnabledInput() {
    return this._clusterRoutingAllocationDiskThresholdEnabled;
  }

  // cluster_routing_allocation_disk_watermark_high - computed: false, optional: true, required: false
  private _clusterRoutingAllocationDiskWatermarkHigh?: string; 
  public get clusterRoutingAllocationDiskWatermarkHigh() {
    return this.getStringAttribute('cluster_routing_allocation_disk_watermark_high');
  }
  public set clusterRoutingAllocationDiskWatermarkHigh(value: string) {
    this._clusterRoutingAllocationDiskWatermarkHigh = value;
  }
  public resetClusterRoutingAllocationDiskWatermarkHigh() {
    this._clusterRoutingAllocationDiskWatermarkHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationDiskWatermarkHighInput() {
    return this._clusterRoutingAllocationDiskWatermarkHigh;
  }

  // cluster_routing_allocation_disk_watermark_low - computed: false, optional: true, required: false
  private _clusterRoutingAllocationDiskWatermarkLow?: string; 
  public get clusterRoutingAllocationDiskWatermarkLow() {
    return this.getStringAttribute('cluster_routing_allocation_disk_watermark_low');
  }
  public set clusterRoutingAllocationDiskWatermarkLow(value: string) {
    this._clusterRoutingAllocationDiskWatermarkLow = value;
  }
  public resetClusterRoutingAllocationDiskWatermarkLow() {
    this._clusterRoutingAllocationDiskWatermarkLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationDiskWatermarkLowInput() {
    return this._clusterRoutingAllocationDiskWatermarkLow;
  }

  // cluster_routing_allocation_enable - computed: false, optional: true, required: false
  private _clusterRoutingAllocationEnable?: string; 
  public get clusterRoutingAllocationEnable() {
    return this.getStringAttribute('cluster_routing_allocation_enable');
  }
  public set clusterRoutingAllocationEnable(value: string) {
    this._clusterRoutingAllocationEnable = value;
  }
  public resetClusterRoutingAllocationEnable() {
    this._clusterRoutingAllocationEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationEnableInput() {
    return this._clusterRoutingAllocationEnable;
  }

  // cluster_routing_allocation_node_concurrent_incoming_recoveries - computed: false, optional: true, required: false
  private _clusterRoutingAllocationNodeConcurrentIncomingRecoveries?: number; 
  public get clusterRoutingAllocationNodeConcurrentIncomingRecoveries() {
    return this.getNumberAttribute('cluster_routing_allocation_node_concurrent_incoming_recoveries');
  }
  public set clusterRoutingAllocationNodeConcurrentIncomingRecoveries(value: number) {
    this._clusterRoutingAllocationNodeConcurrentIncomingRecoveries = value;
  }
  public resetClusterRoutingAllocationNodeConcurrentIncomingRecoveries() {
    this._clusterRoutingAllocationNodeConcurrentIncomingRecoveries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationNodeConcurrentIncomingRecoveriesInput() {
    return this._clusterRoutingAllocationNodeConcurrentIncomingRecoveries;
  }

  // cluster_routing_allocation_node_concurrent_outgoing_recoveries - computed: false, optional: true, required: false
  private _clusterRoutingAllocationNodeConcurrentOutgoingRecoveries?: number; 
  public get clusterRoutingAllocationNodeConcurrentOutgoingRecoveries() {
    return this.getNumberAttribute('cluster_routing_allocation_node_concurrent_outgoing_recoveries');
  }
  public set clusterRoutingAllocationNodeConcurrentOutgoingRecoveries(value: number) {
    this._clusterRoutingAllocationNodeConcurrentOutgoingRecoveries = value;
  }
  public resetClusterRoutingAllocationNodeConcurrentOutgoingRecoveries() {
    this._clusterRoutingAllocationNodeConcurrentOutgoingRecoveries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationNodeConcurrentOutgoingRecoveriesInput() {
    return this._clusterRoutingAllocationNodeConcurrentOutgoingRecoveries;
  }

  // cluster_routing_allocation_node_concurrent_recoveries - computed: false, optional: true, required: false
  private _clusterRoutingAllocationNodeConcurrentRecoveries?: number; 
  public get clusterRoutingAllocationNodeConcurrentRecoveries() {
    return this.getNumberAttribute('cluster_routing_allocation_node_concurrent_recoveries');
  }
  public set clusterRoutingAllocationNodeConcurrentRecoveries(value: number) {
    this._clusterRoutingAllocationNodeConcurrentRecoveries = value;
  }
  public resetClusterRoutingAllocationNodeConcurrentRecoveries() {
    this._clusterRoutingAllocationNodeConcurrentRecoveries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationNodeConcurrentRecoveriesInput() {
    return this._clusterRoutingAllocationNodeConcurrentRecoveries;
  }

  // cluster_routing_allocation_node_initial_primaries_recoveries - computed: false, optional: true, required: false
  private _clusterRoutingAllocationNodeInitialPrimariesRecoveries?: number; 
  public get clusterRoutingAllocationNodeInitialPrimariesRecoveries() {
    return this.getNumberAttribute('cluster_routing_allocation_node_initial_primaries_recoveries');
  }
  public set clusterRoutingAllocationNodeInitialPrimariesRecoveries(value: number) {
    this._clusterRoutingAllocationNodeInitialPrimariesRecoveries = value;
  }
  public resetClusterRoutingAllocationNodeInitialPrimariesRecoveries() {
    this._clusterRoutingAllocationNodeInitialPrimariesRecoveries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationNodeInitialPrimariesRecoveriesInput() {
    return this._clusterRoutingAllocationNodeInitialPrimariesRecoveries;
  }

  // cluster_routing_allocation_same_shard_host - computed: false, optional: true, required: false
  private _clusterRoutingAllocationSameShardHost?: boolean | cdktf.IResolvable; 
  public get clusterRoutingAllocationSameShardHost() {
    return this.getBooleanAttribute('cluster_routing_allocation_same_shard_host');
  }
  public set clusterRoutingAllocationSameShardHost(value: boolean | cdktf.IResolvable) {
    this._clusterRoutingAllocationSameShardHost = value;
  }
  public resetClusterRoutingAllocationSameShardHost() {
    this._clusterRoutingAllocationSameShardHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationSameShardHostInput() {
    return this._clusterRoutingAllocationSameShardHost;
  }

  // cluster_routing_allocation_total_shards_per_node - computed: false, optional: true, required: false
  private _clusterRoutingAllocationTotalShardsPerNode?: number; 
  public get clusterRoutingAllocationTotalShardsPerNode() {
    return this.getNumberAttribute('cluster_routing_allocation_total_shards_per_node');
  }
  public set clusterRoutingAllocationTotalShardsPerNode(value: number) {
    this._clusterRoutingAllocationTotalShardsPerNode = value;
  }
  public resetClusterRoutingAllocationTotalShardsPerNode() {
    this._clusterRoutingAllocationTotalShardsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationTotalShardsPerNodeInput() {
    return this._clusterRoutingAllocationTotalShardsPerNode;
  }

  // cluster_routing_rebalance_enable - computed: false, optional: true, required: false
  private _clusterRoutingRebalanceEnable?: string; 
  public get clusterRoutingRebalanceEnable() {
    return this.getStringAttribute('cluster_routing_rebalance_enable');
  }
  public set clusterRoutingRebalanceEnable(value: string) {
    this._clusterRoutingRebalanceEnable = value;
  }
  public resetClusterRoutingRebalanceEnable() {
    this._clusterRoutingRebalanceEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingRebalanceEnableInput() {
    return this._clusterRoutingRebalanceEnable;
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

  // indices_breaker_fielddata_limit - computed: false, optional: true, required: false
  private _indicesBreakerFielddataLimit?: string; 
  public get indicesBreakerFielddataLimit() {
    return this.getStringAttribute('indices_breaker_fielddata_limit');
  }
  public set indicesBreakerFielddataLimit(value: string) {
    this._indicesBreakerFielddataLimit = value;
  }
  public resetIndicesBreakerFielddataLimit() {
    this._indicesBreakerFielddataLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesBreakerFielddataLimitInput() {
    return this._indicesBreakerFielddataLimit;
  }

  // indices_breaker_fielddata_overhead - computed: false, optional: true, required: false
  private _indicesBreakerFielddataOverhead?: number; 
  public get indicesBreakerFielddataOverhead() {
    return this.getNumberAttribute('indices_breaker_fielddata_overhead');
  }
  public set indicesBreakerFielddataOverhead(value: number) {
    this._indicesBreakerFielddataOverhead = value;
  }
  public resetIndicesBreakerFielddataOverhead() {
    this._indicesBreakerFielddataOverhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesBreakerFielddataOverheadInput() {
    return this._indicesBreakerFielddataOverhead;
  }

  // indices_breaker_request_limit - computed: false, optional: true, required: false
  private _indicesBreakerRequestLimit?: string; 
  public get indicesBreakerRequestLimit() {
    return this.getStringAttribute('indices_breaker_request_limit');
  }
  public set indicesBreakerRequestLimit(value: string) {
    this._indicesBreakerRequestLimit = value;
  }
  public resetIndicesBreakerRequestLimit() {
    this._indicesBreakerRequestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesBreakerRequestLimitInput() {
    return this._indicesBreakerRequestLimit;
  }

  // indices_breaker_request_overhead - computed: false, optional: true, required: false
  private _indicesBreakerRequestOverhead?: number; 
  public get indicesBreakerRequestOverhead() {
    return this.getNumberAttribute('indices_breaker_request_overhead');
  }
  public set indicesBreakerRequestOverhead(value: number) {
    this._indicesBreakerRequestOverhead = value;
  }
  public resetIndicesBreakerRequestOverhead() {
    this._indicesBreakerRequestOverhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesBreakerRequestOverheadInput() {
    return this._indicesBreakerRequestOverhead;
  }

  // indices_breaker_total_limit - computed: false, optional: true, required: false
  private _indicesBreakerTotalLimit?: string; 
  public get indicesBreakerTotalLimit() {
    return this.getStringAttribute('indices_breaker_total_limit');
  }
  public set indicesBreakerTotalLimit(value: string) {
    this._indicesBreakerTotalLimit = value;
  }
  public resetIndicesBreakerTotalLimit() {
    this._indicesBreakerTotalLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesBreakerTotalLimitInput() {
    return this._indicesBreakerTotalLimit;
  }

  // indices_recovery_max_bytes_per_sec - computed: false, optional: true, required: false
  private _indicesRecoveryMaxBytesPerSec?: string; 
  public get indicesRecoveryMaxBytesPerSec() {
    return this.getStringAttribute('indices_recovery_max_bytes_per_sec');
  }
  public set indicesRecoveryMaxBytesPerSec(value: string) {
    this._indicesRecoveryMaxBytesPerSec = value;
  }
  public resetIndicesRecoveryMaxBytesPerSec() {
    this._indicesRecoveryMaxBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesRecoveryMaxBytesPerSecInput() {
    return this._indicesRecoveryMaxBytesPerSec;
  }

  // network_breaker_inflight_requests_limit - computed: false, optional: true, required: false
  private _networkBreakerInflightRequestsLimit?: string; 
  public get networkBreakerInflightRequestsLimit() {
    return this.getStringAttribute('network_breaker_inflight_requests_limit');
  }
  public set networkBreakerInflightRequestsLimit(value: string) {
    this._networkBreakerInflightRequestsLimit = value;
  }
  public resetNetworkBreakerInflightRequestsLimit() {
    this._networkBreakerInflightRequestsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkBreakerInflightRequestsLimitInput() {
    return this._networkBreakerInflightRequestsLimit;
  }

  // network_breaker_inflight_requests_overhead - computed: false, optional: true, required: false
  private _networkBreakerInflightRequestsOverhead?: number; 
  public get networkBreakerInflightRequestsOverhead() {
    return this.getNumberAttribute('network_breaker_inflight_requests_overhead');
  }
  public set networkBreakerInflightRequestsOverhead(value: number) {
    this._networkBreakerInflightRequestsOverhead = value;
  }
  public resetNetworkBreakerInflightRequestsOverhead() {
    this._networkBreakerInflightRequestsOverhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkBreakerInflightRequestsOverheadInput() {
    return this._networkBreakerInflightRequestsOverhead;
  }

  // script_max_compilations_rate - computed: false, optional: true, required: false
  private _scriptMaxCompilationsRate?: string; 
  public get scriptMaxCompilationsRate() {
    return this.getStringAttribute('script_max_compilations_rate');
  }
  public set scriptMaxCompilationsRate(value: string) {
    this._scriptMaxCompilationsRate = value;
  }
  public resetScriptMaxCompilationsRate() {
    this._scriptMaxCompilationsRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptMaxCompilationsRateInput() {
    return this._scriptMaxCompilationsRate;
  }

  // search_default_search_timeout - computed: false, optional: true, required: false
  private _searchDefaultSearchTimeout?: string; 
  public get searchDefaultSearchTimeout() {
    return this.getStringAttribute('search_default_search_timeout');
  }
  public set searchDefaultSearchTimeout(value: string) {
    this._searchDefaultSearchTimeout = value;
  }
  public resetSearchDefaultSearchTimeout() {
    this._searchDefaultSearchTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDefaultSearchTimeoutInput() {
    return this._searchDefaultSearchTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_auto_create_index: cdktf.stringToTerraform(this._actionAutoCreateIndex),
      action_destructive_requires_name: cdktf.booleanToTerraform(this._actionDestructiveRequiresName),
      cluster_blocks_read_only: cdktf.booleanToTerraform(this._clusterBlocksReadOnly),
      cluster_blocks_read_only_allow_delete: cdktf.booleanToTerraform(this._clusterBlocksReadOnlyAllowDelete),
      cluster_indices_close_enable: cdktf.booleanToTerraform(this._clusterIndicesCloseEnable),
      cluster_info_update_interval: cdktf.stringToTerraform(this._clusterInfoUpdateInterval),
      cluster_max_shards_per_node: cdktf.numberToTerraform(this._clusterMaxShardsPerNode),
      cluster_max_shards_per_node_frozen: cdktf.numberToTerraform(this._clusterMaxShardsPerNodeFrozen),
      cluster_no_master_block: cdktf.stringToTerraform(this._clusterNoMasterBlock),
      cluster_persistent_tasks_allocation_enable: cdktf.stringToTerraform(this._clusterPersistentTasksAllocationEnable),
      cluster_persistent_tasks_allocation_recheck_interval: cdktf.stringToTerraform(this._clusterPersistentTasksAllocationRecheckInterval),
      cluster_routing_allocation_allow_rebalance: cdktf.stringToTerraform(this._clusterRoutingAllocationAllowRebalance),
      cluster_routing_allocation_awareness_attributes: cdktf.stringToTerraform(this._clusterRoutingAllocationAwarenessAttributes),
      cluster_routing_allocation_balance_index: cdktf.numberToTerraform(this._clusterRoutingAllocationBalanceIndex),
      cluster_routing_allocation_balance_shard: cdktf.numberToTerraform(this._clusterRoutingAllocationBalanceShard),
      cluster_routing_allocation_balance_threshold: cdktf.numberToTerraform(this._clusterRoutingAllocationBalanceThreshold),
      cluster_routing_allocation_cluster_concurrent_rebalance: cdktf.numberToTerraform(this._clusterRoutingAllocationClusterConcurrentRebalance),
      cluster_routing_allocation_disk_include_relocations: cdktf.booleanToTerraform(this._clusterRoutingAllocationDiskIncludeRelocations),
      cluster_routing_allocation_disk_threshold_enabled: cdktf.booleanToTerraform(this._clusterRoutingAllocationDiskThresholdEnabled),
      cluster_routing_allocation_disk_watermark_high: cdktf.stringToTerraform(this._clusterRoutingAllocationDiskWatermarkHigh),
      cluster_routing_allocation_disk_watermark_low: cdktf.stringToTerraform(this._clusterRoutingAllocationDiskWatermarkLow),
      cluster_routing_allocation_enable: cdktf.stringToTerraform(this._clusterRoutingAllocationEnable),
      cluster_routing_allocation_node_concurrent_incoming_recoveries: cdktf.numberToTerraform(this._clusterRoutingAllocationNodeConcurrentIncomingRecoveries),
      cluster_routing_allocation_node_concurrent_outgoing_recoveries: cdktf.numberToTerraform(this._clusterRoutingAllocationNodeConcurrentOutgoingRecoveries),
      cluster_routing_allocation_node_concurrent_recoveries: cdktf.numberToTerraform(this._clusterRoutingAllocationNodeConcurrentRecoveries),
      cluster_routing_allocation_node_initial_primaries_recoveries: cdktf.numberToTerraform(this._clusterRoutingAllocationNodeInitialPrimariesRecoveries),
      cluster_routing_allocation_same_shard_host: cdktf.booleanToTerraform(this._clusterRoutingAllocationSameShardHost),
      cluster_routing_allocation_total_shards_per_node: cdktf.numberToTerraform(this._clusterRoutingAllocationTotalShardsPerNode),
      cluster_routing_rebalance_enable: cdktf.stringToTerraform(this._clusterRoutingRebalanceEnable),
      id: cdktf.stringToTerraform(this._id),
      indices_breaker_fielddata_limit: cdktf.stringToTerraform(this._indicesBreakerFielddataLimit),
      indices_breaker_fielddata_overhead: cdktf.numberToTerraform(this._indicesBreakerFielddataOverhead),
      indices_breaker_request_limit: cdktf.stringToTerraform(this._indicesBreakerRequestLimit),
      indices_breaker_request_overhead: cdktf.numberToTerraform(this._indicesBreakerRequestOverhead),
      indices_breaker_total_limit: cdktf.stringToTerraform(this._indicesBreakerTotalLimit),
      indices_recovery_max_bytes_per_sec: cdktf.stringToTerraform(this._indicesRecoveryMaxBytesPerSec),
      network_breaker_inflight_requests_limit: cdktf.stringToTerraform(this._networkBreakerInflightRequestsLimit),
      network_breaker_inflight_requests_overhead: cdktf.numberToTerraform(this._networkBreakerInflightRequestsOverhead),
      script_max_compilations_rate: cdktf.stringToTerraform(this._scriptMaxCompilationsRate),
      search_default_search_timeout: cdktf.stringToTerraform(this._searchDefaultSearchTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_auto_create_index: {
        value: cdktf.stringToHclTerraform(this._actionAutoCreateIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_destructive_requires_name: {
        value: cdktf.booleanToHclTerraform(this._actionDestructiveRequiresName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_blocks_read_only: {
        value: cdktf.booleanToHclTerraform(this._clusterBlocksReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_blocks_read_only_allow_delete: {
        value: cdktf.booleanToHclTerraform(this._clusterBlocksReadOnlyAllowDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_indices_close_enable: {
        value: cdktf.booleanToHclTerraform(this._clusterIndicesCloseEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_info_update_interval: {
        value: cdktf.stringToHclTerraform(this._clusterInfoUpdateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_max_shards_per_node: {
        value: cdktf.numberToHclTerraform(this._clusterMaxShardsPerNode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_max_shards_per_node_frozen: {
        value: cdktf.numberToHclTerraform(this._clusterMaxShardsPerNodeFrozen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_no_master_block: {
        value: cdktf.stringToHclTerraform(this._clusterNoMasterBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_persistent_tasks_allocation_enable: {
        value: cdktf.stringToHclTerraform(this._clusterPersistentTasksAllocationEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_persistent_tasks_allocation_recheck_interval: {
        value: cdktf.stringToHclTerraform(this._clusterPersistentTasksAllocationRecheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_routing_allocation_allow_rebalance: {
        value: cdktf.stringToHclTerraform(this._clusterRoutingAllocationAllowRebalance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_routing_allocation_awareness_attributes: {
        value: cdktf.stringToHclTerraform(this._clusterRoutingAllocationAwarenessAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_routing_allocation_balance_index: {
        value: cdktf.numberToHclTerraform(this._clusterRoutingAllocationBalanceIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_routing_allocation_balance_shard: {
        value: cdktf.numberToHclTerraform(this._clusterRoutingAllocationBalanceShard),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_routing_allocation_balance_threshold: {
        value: cdktf.numberToHclTerraform(this._clusterRoutingAllocationBalanceThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_routing_allocation_cluster_concurrent_rebalance: {
        value: cdktf.numberToHclTerraform(this._clusterRoutingAllocationClusterConcurrentRebalance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_routing_allocation_disk_include_relocations: {
        value: cdktf.booleanToHclTerraform(this._clusterRoutingAllocationDiskIncludeRelocations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_routing_allocation_disk_threshold_enabled: {
        value: cdktf.booleanToHclTerraform(this._clusterRoutingAllocationDiskThresholdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_routing_allocation_disk_watermark_high: {
        value: cdktf.stringToHclTerraform(this._clusterRoutingAllocationDiskWatermarkHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_routing_allocation_disk_watermark_low: {
        value: cdktf.stringToHclTerraform(this._clusterRoutingAllocationDiskWatermarkLow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_routing_allocation_enable: {
        value: cdktf.stringToHclTerraform(this._clusterRoutingAllocationEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_routing_allocation_node_concurrent_incoming_recoveries: {
        value: cdktf.numberToHclTerraform(this._clusterRoutingAllocationNodeConcurrentIncomingRecoveries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_routing_allocation_node_concurrent_outgoing_recoveries: {
        value: cdktf.numberToHclTerraform(this._clusterRoutingAllocationNodeConcurrentOutgoingRecoveries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_routing_allocation_node_concurrent_recoveries: {
        value: cdktf.numberToHclTerraform(this._clusterRoutingAllocationNodeConcurrentRecoveries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_routing_allocation_node_initial_primaries_recoveries: {
        value: cdktf.numberToHclTerraform(this._clusterRoutingAllocationNodeInitialPrimariesRecoveries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_routing_allocation_same_shard_host: {
        value: cdktf.booleanToHclTerraform(this._clusterRoutingAllocationSameShardHost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_routing_allocation_total_shards_per_node: {
        value: cdktf.numberToHclTerraform(this._clusterRoutingAllocationTotalShardsPerNode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_routing_rebalance_enable: {
        value: cdktf.stringToHclTerraform(this._clusterRoutingRebalanceEnable),
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
      indices_breaker_fielddata_limit: {
        value: cdktf.stringToHclTerraform(this._indicesBreakerFielddataLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indices_breaker_fielddata_overhead: {
        value: cdktf.numberToHclTerraform(this._indicesBreakerFielddataOverhead),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      indices_breaker_request_limit: {
        value: cdktf.stringToHclTerraform(this._indicesBreakerRequestLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indices_breaker_request_overhead: {
        value: cdktf.numberToHclTerraform(this._indicesBreakerRequestOverhead),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      indices_breaker_total_limit: {
        value: cdktf.stringToHclTerraform(this._indicesBreakerTotalLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indices_recovery_max_bytes_per_sec: {
        value: cdktf.stringToHclTerraform(this._indicesRecoveryMaxBytesPerSec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_breaker_inflight_requests_limit: {
        value: cdktf.stringToHclTerraform(this._networkBreakerInflightRequestsLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_breaker_inflight_requests_overhead: {
        value: cdktf.numberToHclTerraform(this._networkBreakerInflightRequestsOverhead),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      script_max_compilations_rate: {
        value: cdktf.stringToHclTerraform(this._scriptMaxCompilationsRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_default_search_timeout: {
        value: cdktf.stringToHclTerraform(this._searchDefaultSearchTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
