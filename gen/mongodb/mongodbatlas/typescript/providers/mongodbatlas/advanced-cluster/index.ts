// https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdvancedClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * If reconfiguration is necessary to regain a primary due to a regional outage, submit this field alongside your topology reconfiguration to request a new regional outage resistant topology. Forced reconfigurations during an outage of the majority of electable nodes carry a risk of data loss if replicated writes (even majority committed writes) have not been replicated to the new primary node. MongoDB Atlas docs contain more information. To proceed with an operation which carries that risk, set **acceptDataRisksAndForceReplicaSetReconfig** to the current date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#accept_data_risks_and_force_replica_set_reconfig AdvancedCluster#accept_data_risks_and_force_replica_set_reconfig}
  */
  readonly acceptDataRisksAndForceReplicaSetReconfig?: string;
  /**
  * Additional settings for an Atlas cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#advanced_configuration AdvancedCluster#advanced_configuration}
  */
  readonly advancedConfiguration?: AdvancedClusterAdvancedConfiguration;
  /**
  * Flag that indicates whether the cluster can perform backups. If set to `true`, the cluster can perform backups. You must set this value to `true` for NVMe clusters. Backup uses [Cloud Backups](https://docs.atlas.mongodb.com/backup/cloud-backup/overview/) for dedicated clusters and [Shared Cluster Backups](https://docs.atlas.mongodb.com/backup/shared-tier/overview/) for tenant clusters. If set to `false`, the cluster doesn't use backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#backup_enabled AdvancedCluster#backup_enabled}
  */
  readonly backupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Settings needed to configure the MongoDB Connector for Business Intelligence for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#bi_connector_config AdvancedCluster#bi_connector_config}
  */
  readonly biConnectorConfig?: AdvancedClusterBiConnectorConfig;
  /**
  * Configuration of nodes that comprise the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#cluster_type AdvancedCluster#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Config Server Management Mode for creating or updating a sharded cluster.
  * 
  * When configured as ATLAS_MANAGED, atlas may automatically switch the cluster's config server type for optimal performance and savings.
  * 
  * When configured as FIXED_TO_DEDICATED, the cluster will always use a dedicated config server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#config_server_management_mode AdvancedCluster#config_server_management_mode}
  */
  readonly configServerManagementMode?: string;
  /**
  * Indicates whether to delete the resource being created if a timeout is reached when waiting for completion. When set to `true` and timeout occurs, it triggers the deletion and returns immediately without waiting for deletion to complete. When set to `false`, the timeout will not trigger resource deletion. If you suspect a transient error when the value is `true`, wait before retrying to allow resource deletion to finish. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#delete_on_create_timeout AdvancedCluster#delete_on_create_timeout}
  */
  readonly deleteOnCreateTimeout?: boolean | cdktf.IResolvable;
  /**
  * Cloud service provider that manages your customer keys to provide an additional layer of encryption at rest for the cluster. To enable customer key management for encryption at rest, the cluster **replicationSpecs[n].regionConfigs[m].{type}Specs.instanceSize** setting must be `M10` or higher and `"backupEnabled" : false` or omitted entirely.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#encryption_at_rest_provider AdvancedCluster#encryption_at_rest_provider}
  */
  readonly encryptionAtRestProvider?: string;
  /**
  * Set this field to configure the Sharding Management Mode when creating a new Global Cluster.
  * 
  * When set to false, the management mode is set to Atlas-Managed Sharding. This mode fully manages the sharding of your Global Cluster and is built to provide a seamless deployment experience.
  * 
  * When set to true, the management mode is set to Self-Managed Sharding. This mode leaves the management of shards in your hands and is built to provide an advanced and flexible deployment experience.
  * 
  * This setting cannot be changed once the cluster is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#global_cluster_self_managed_sharding AdvancedCluster#global_cluster_self_managed_sharding}
  */
  readonly globalClusterSelfManagedSharding?: boolean | cdktf.IResolvable;
  /**
  * Map of key-value pairs between 1 to 255 characters in length that tag and categorize the cluster. The MongoDB Cloud console doesn't display your labels.
  * 
  * Cluster labels are deprecated and will be removed in a future release. We strongly recommend that you use [resource tags](https://dochub.mongodb.org/core/add-cluster-tag-atlas) instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#labels AdvancedCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * MongoDB major version of the cluster.
  * 
  * On creation: Choose from the available versions of MongoDB, or leave unspecified for the current recommended default in the MongoDB Cloud platform. The recommended version is a recent Long Term Support version. The default is not guaranteed to be the most recently released version throughout the entire release cycle. For versions available in a specific project, see the linked documentation or use the API endpoint for [project LTS versions endpoint](#tag/Projects/operation/getProjectLTSVersions).
  * 
  *  On update: Increase version only by 1 major version at a time. If the cluster is pinned to a MongoDB feature compatibility version exactly one major version below the current MongoDB version, the MongoDB version can be downgraded to the previous major version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#mongo_db_major_version AdvancedCluster#mongo_db_major_version}
  */
  readonly mongoDbMajorVersion?: string;
  /**
  * Human-readable label that identifies this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#name AdvancedCluster#name}
  */
  readonly name: string;
  /**
  * Flag that indicates whether the cluster is paused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#paused AdvancedCluster#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Pins the Feature Compatibility Version (FCV) to the current MongoDB version with a provided expiration date. To unpin the FCV the `pinned_fcv` attribute must be removed. This operation can take several minutes as the request processes through the MongoDB data plane. Once FCV is unpinned it will not be possible to downgrade the `mongo_db_major_version`. It is advised that updates to `pinned_fcv` are done isolated from other cluster changes. If a plan contains multiple changes, the FCV change will be applied first. If FCV is unpinned past the expiration date the `pinned_fcv` attribute must be removed. The following [knowledge hub article](https://kb.corp.mongodb.com/article/000021785/) and [FCV documentation](https://www.mongodb.com/docs/atlas/tutorial/major-version-change/#manage-feature-compatibility--fcv--during-upgrades) can be referenced for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#pinned_fcv AdvancedCluster#pinned_fcv}
  */
  readonly pinnedFcv?: AdvancedClusterPinnedFcv;
  /**
  * Flag that indicates whether the cluster uses continuous cloud backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#pit_enabled AdvancedCluster#pit_enabled}
  */
  readonly pitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.
  * 
  * **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#project_id AdvancedCluster#project_id}
  */
  readonly projectId: string;
  /**
  * Enable or disable log redaction.
  * 
  * This setting configures the ``mongod`` or ``mongos`` to redact any document field contents from a message accompanying a given log event before logging. This prevents the program from writing potentially sensitive data stored on the database to the diagnostic log. Metadata such as error or operation codes, line numbers, and source file names are still visible in the logs.
  * 
  * Use ``redactClientLogData`` in conjunction with Encryption at Rest and TLS/SSL (Transport Encryption) to assist compliance with regulatory requirements.
  * 
  * *Note*: changing this setting on a cluster will trigger a rolling restart as soon as the cluster is updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#redact_client_log_data AdvancedCluster#redact_client_log_data}
  */
  readonly redactClientLogData?: boolean | cdktf.IResolvable;
  /**
  * Set this field to configure the replica set scaling mode for your cluster.
  * 
  * By default, Atlas scales under WORKLOAD_TYPE. This mode allows Atlas to scale your analytics nodes in parallel to your operational nodes.
  * 
  * When configured as SEQUENTIAL, Atlas scales all nodes sequentially. This mode is intended for steady-state workloads and applications performing latency-sensitive secondary reads.
  * 
  * When configured as NODE_TYPE, Atlas scales your electable nodes in parallel with your read-only and analytics nodes. This mode is intended for large, dynamic workloads requiring frequent and timely cluster tier scaling. This is the fastest scaling strategy, but it might impact latency of workloads when performing extensive secondary reads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#replica_set_scaling_strategy AdvancedCluster#replica_set_scaling_strategy}
  */
  readonly replicaSetScalingStrategy?: string;
  /**
  * List of settings that configure your cluster regions. This array has one object per shard representing node configurations in each shard. For replica sets there is only one object representing node configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#replication_specs AdvancedCluster#replication_specs}
  */
  readonly replicationSpecs: AdvancedClusterReplicationSpecs[] | cdktf.IResolvable;
  /**
  * Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#retain_backups_enabled AdvancedCluster#retain_backups_enabled}
  */
  readonly retainBackupsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Root Certificate Authority that MongoDB Cloud cluster uses. MongoDB Cloud supports Internet Security Research Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#root_cert_type AdvancedCluster#root_cert_type}
  */
  readonly rootCertType?: string;
  /**
  * Map that contains key-value pairs between 1 to 255 characters in length for tagging and categorizing the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#tags AdvancedCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Flag that indicates whether termination protection is enabled on the cluster. If set to `true`, MongoDB Cloud won't delete the cluster. If set to `false`, MongoDB Cloud will delete the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#termination_protection_enabled AdvancedCluster#termination_protection_enabled}
  */
  readonly terminationProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#timeouts AdvancedCluster#timeouts}
  */
  readonly timeouts?: AdvancedClusterTimeouts;
  /**
  * Controls how hardware specification fields are returned in the response. When set to true, the non-effective specs (`electable_specs`, `read_only_specs`, `analytics_specs`) fields return the hardware specifications that the client provided. When set to false (default), the non-effective specs fields show the **current** hardware specifications. Cluster auto-scaling is the primary cause for differences between initial and current hardware specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#use_effective_fields AdvancedCluster#use_effective_fields}
  */
  readonly useEffectiveFields?: boolean | cdktf.IResolvable;
  /**
  * Method by which the cluster maintains the MongoDB versions. If value is `CONTINUOUS`, you must not specify **mongoDBMajorVersion**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#version_release_system AdvancedCluster#version_release_system}
  */
  readonly versionReleaseSystem?: string;
}
export interface AdvancedClusterAdvancedConfiguration {
  /**
  * The minimum pre- and post-image retention time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#change_stream_options_pre_and_post_images_expire_after_seconds AdvancedCluster#change_stream_options_pre_and_post_images_expire_after_seconds}
  */
  readonly changeStreamOptionsPreAndPostImagesExpireAfterSeconds?: number;
  /**
  * The custom OpenSSL cipher suite list for TLS 1.2. This field is only valid when `tls_cipher_config_mode` is set to `CUSTOM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#custom_openssl_cipher_config_tls12 AdvancedCluster#custom_openssl_cipher_config_tls12}
  */
  readonly customOpensslCipherConfigTls12?: string[];
  /**
  * The custom OpenSSL cipher suite list for TLS 1.3. This field is only valid when `tls_cipher_config_mode` is set to `CUSTOM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#custom_openssl_cipher_config_tls13 AdvancedCluster#custom_openssl_cipher_config_tls13}
  */
  readonly customOpensslCipherConfigTls13?: string[];
  /**
  * Default time limit in milliseconds for individual read operations to complete. This parameter is supported only for MongoDB version 8.0 and above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#default_max_time_ms AdvancedCluster#default_max_time_ms}
  */
  readonly defaultMaxTimeMs?: number;
  /**
  * Default level of acknowledgment requested from MongoDB for write operations when none is specified by the driver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#default_write_concern AdvancedCluster#default_write_concern}
  */
  readonly defaultWriteConcern?: string;
  /**
  * Flag that indicates whether the cluster allows execution of operations that perform server-side executions of JavaScript. When using 8.0+, we recommend disabling server-side JavaScript and using operators of aggregation pipeline as more performant alternative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#javascript_enabled AdvancedCluster#javascript_enabled}
  */
  readonly javascriptEnabled?: boolean | cdktf.IResolvable;
  /**
  * Minimum Transport Layer Security (TLS) version that the cluster accepts for incoming connections. Clusters using TLS 1.0 or 1.1 should consider setting TLS 1.2 as the minimum TLS protocol version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#minimum_enabled_tls_protocol AdvancedCluster#minimum_enabled_tls_protocol}
  */
  readonly minimumEnabledTlsProtocol?: string;
  /**
  * Flag that indicates whether the cluster disables executing any query that requires a collection scan to return results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#no_table_scan AdvancedCluster#no_table_scan}
  */
  readonly noTableScan?: boolean | cdktf.IResolvable;
  /**
  * Minimum retention window for cluster's oplog expressed in hours. A value of null indicates that the cluster uses the default minimum oplog window that MongoDB Cloud calculates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#oplog_min_retention_hours AdvancedCluster#oplog_min_retention_hours}
  */
  readonly oplogMinRetentionHours?: number;
  /**
  * Storage limit of cluster's oplog expressed in megabytes. A value of null indicates that the cluster uses the default oplog size that MongoDB Cloud calculates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#oplog_size_mb AdvancedCluster#oplog_size_mb}
  */
  readonly oplogSizeMb?: number;
  /**
  * Interval in seconds at which the mongosqld process re-samples data to create its relational schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#sample_refresh_interval_bi_connector AdvancedCluster#sample_refresh_interval_bi_connector}
  */
  readonly sampleRefreshIntervalBiConnector?: number;
  /**
  * Number of documents per database to sample when gathering schema information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#sample_size_bi_connector AdvancedCluster#sample_size_bi_connector}
  */
  readonly sampleSizeBiConnector?: number;
  /**
  * The TLS cipher suite configuration mode. Valid values include `CUSTOM` or `DEFAULT`. The `DEFAULT` mode uses the default cipher suites. The `CUSTOM` mode allows you to specify custom cipher suites for both TLS 1.2 and TLS 1.3. To unset, this should be set back to `DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#tls_cipher_config_mode AdvancedCluster#tls_cipher_config_mode}
  */
  readonly tlsCipherConfigMode?: string;
  /**
  * Lifetime, in seconds, of multi-document transactions. Atlas considers the transactions that exceed this limit as expired and so aborts them through a periodic cleanup process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#transaction_lifetime_limit_seconds AdvancedCluster#transaction_lifetime_limit_seconds}
  */
  readonly transactionLifetimeLimitSeconds?: number;
}

export function advancedClusterAdvancedConfigurationToTerraform(struct?: AdvancedClusterAdvancedConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_stream_options_pre_and_post_images_expire_after_seconds: cdktf.numberToTerraform(struct!.changeStreamOptionsPreAndPostImagesExpireAfterSeconds),
    custom_openssl_cipher_config_tls12: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customOpensslCipherConfigTls12),
    custom_openssl_cipher_config_tls13: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customOpensslCipherConfigTls13),
    default_max_time_ms: cdktf.numberToTerraform(struct!.defaultMaxTimeMs),
    default_write_concern: cdktf.stringToTerraform(struct!.defaultWriteConcern),
    javascript_enabled: cdktf.booleanToTerraform(struct!.javascriptEnabled),
    minimum_enabled_tls_protocol: cdktf.stringToTerraform(struct!.minimumEnabledTlsProtocol),
    no_table_scan: cdktf.booleanToTerraform(struct!.noTableScan),
    oplog_min_retention_hours: cdktf.numberToTerraform(struct!.oplogMinRetentionHours),
    oplog_size_mb: cdktf.numberToTerraform(struct!.oplogSizeMb),
    sample_refresh_interval_bi_connector: cdktf.numberToTerraform(struct!.sampleRefreshIntervalBiConnector),
    sample_size_bi_connector: cdktf.numberToTerraform(struct!.sampleSizeBiConnector),
    tls_cipher_config_mode: cdktf.stringToTerraform(struct!.tlsCipherConfigMode),
    transaction_lifetime_limit_seconds: cdktf.numberToTerraform(struct!.transactionLifetimeLimitSeconds),
  }
}


export function advancedClusterAdvancedConfigurationToHclTerraform(struct?: AdvancedClusterAdvancedConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change_stream_options_pre_and_post_images_expire_after_seconds: {
      value: cdktf.numberToHclTerraform(struct!.changeStreamOptionsPreAndPostImagesExpireAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_openssl_cipher_config_tls12: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customOpensslCipherConfigTls12),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_openssl_cipher_config_tls13: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customOpensslCipherConfigTls13),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_max_time_ms: {
      value: cdktf.numberToHclTerraform(struct!.defaultMaxTimeMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_write_concern: {
      value: cdktf.stringToHclTerraform(struct!.defaultWriteConcern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    javascript_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.javascriptEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    minimum_enabled_tls_protocol: {
      value: cdktf.stringToHclTerraform(struct!.minimumEnabledTlsProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_table_scan: {
      value: cdktf.booleanToHclTerraform(struct!.noTableScan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oplog_min_retention_hours: {
      value: cdktf.numberToHclTerraform(struct!.oplogMinRetentionHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oplog_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.oplogSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_refresh_interval_bi_connector: {
      value: cdktf.numberToHclTerraform(struct!.sampleRefreshIntervalBiConnector),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_size_bi_connector: {
      value: cdktf.numberToHclTerraform(struct!.sampleSizeBiConnector),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_cipher_config_mode: {
      value: cdktf.stringToHclTerraform(struct!.tlsCipherConfigMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transaction_lifetime_limit_seconds: {
      value: cdktf.numberToHclTerraform(struct!.transactionLifetimeLimitSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterAdvancedConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdvancedClusterAdvancedConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeStreamOptionsPreAndPostImagesExpireAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeStreamOptionsPreAndPostImagesExpireAfterSeconds = this._changeStreamOptionsPreAndPostImagesExpireAfterSeconds;
    }
    if (this._customOpensslCipherConfigTls12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOpensslCipherConfigTls12 = this._customOpensslCipherConfigTls12;
    }
    if (this._customOpensslCipherConfigTls13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOpensslCipherConfigTls13 = this._customOpensslCipherConfigTls13;
    }
    if (this._defaultMaxTimeMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMaxTimeMs = this._defaultMaxTimeMs;
    }
    if (this._defaultWriteConcern !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultWriteConcern = this._defaultWriteConcern;
    }
    if (this._javascriptEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptEnabled = this._javascriptEnabled;
    }
    if (this._minimumEnabledTlsProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumEnabledTlsProtocol = this._minimumEnabledTlsProtocol;
    }
    if (this._noTableScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTableScan = this._noTableScan;
    }
    if (this._oplogMinRetentionHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.oplogMinRetentionHours = this._oplogMinRetentionHours;
    }
    if (this._oplogSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.oplogSizeMb = this._oplogSizeMb;
    }
    if (this._sampleRefreshIntervalBiConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRefreshIntervalBiConnector = this._sampleRefreshIntervalBiConnector;
    }
    if (this._sampleSizeBiConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleSizeBiConnector = this._sampleSizeBiConnector;
    }
    if (this._tlsCipherConfigMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCipherConfigMode = this._tlsCipherConfigMode;
    }
    if (this._transactionLifetimeLimitSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionLifetimeLimitSeconds = this._transactionLifetimeLimitSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterAdvancedConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._changeStreamOptionsPreAndPostImagesExpireAfterSeconds = undefined;
      this._customOpensslCipherConfigTls12 = undefined;
      this._customOpensslCipherConfigTls13 = undefined;
      this._defaultMaxTimeMs = undefined;
      this._defaultWriteConcern = undefined;
      this._javascriptEnabled = undefined;
      this._minimumEnabledTlsProtocol = undefined;
      this._noTableScan = undefined;
      this._oplogMinRetentionHours = undefined;
      this._oplogSizeMb = undefined;
      this._sampleRefreshIntervalBiConnector = undefined;
      this._sampleSizeBiConnector = undefined;
      this._tlsCipherConfigMode = undefined;
      this._transactionLifetimeLimitSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._changeStreamOptionsPreAndPostImagesExpireAfterSeconds = value.changeStreamOptionsPreAndPostImagesExpireAfterSeconds;
      this._customOpensslCipherConfigTls12 = value.customOpensslCipherConfigTls12;
      this._customOpensslCipherConfigTls13 = value.customOpensslCipherConfigTls13;
      this._defaultMaxTimeMs = value.defaultMaxTimeMs;
      this._defaultWriteConcern = value.defaultWriteConcern;
      this._javascriptEnabled = value.javascriptEnabled;
      this._minimumEnabledTlsProtocol = value.minimumEnabledTlsProtocol;
      this._noTableScan = value.noTableScan;
      this._oplogMinRetentionHours = value.oplogMinRetentionHours;
      this._oplogSizeMb = value.oplogSizeMb;
      this._sampleRefreshIntervalBiConnector = value.sampleRefreshIntervalBiConnector;
      this._sampleSizeBiConnector = value.sampleSizeBiConnector;
      this._tlsCipherConfigMode = value.tlsCipherConfigMode;
      this._transactionLifetimeLimitSeconds = value.transactionLifetimeLimitSeconds;
    }
  }

  // change_stream_options_pre_and_post_images_expire_after_seconds - computed: true, optional: true, required: false
  private _changeStreamOptionsPreAndPostImagesExpireAfterSeconds?: number; 
  public get changeStreamOptionsPreAndPostImagesExpireAfterSeconds() {
    return this.getNumberAttribute('change_stream_options_pre_and_post_images_expire_after_seconds');
  }
  public set changeStreamOptionsPreAndPostImagesExpireAfterSeconds(value: number) {
    this._changeStreamOptionsPreAndPostImagesExpireAfterSeconds = value;
  }
  public resetChangeStreamOptionsPreAndPostImagesExpireAfterSeconds() {
    this._changeStreamOptionsPreAndPostImagesExpireAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeStreamOptionsPreAndPostImagesExpireAfterSecondsInput() {
    return this._changeStreamOptionsPreAndPostImagesExpireAfterSeconds;
  }

  // custom_openssl_cipher_config_tls12 - computed: true, optional: true, required: false
  private _customOpensslCipherConfigTls12?: string[]; 
  public get customOpensslCipherConfigTls12() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_openssl_cipher_config_tls12'));
  }
  public set customOpensslCipherConfigTls12(value: string[]) {
    this._customOpensslCipherConfigTls12 = value;
  }
  public resetCustomOpensslCipherConfigTls12() {
    this._customOpensslCipherConfigTls12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOpensslCipherConfigTls12Input() {
    return this._customOpensslCipherConfigTls12;
  }

  // custom_openssl_cipher_config_tls13 - computed: true, optional: true, required: false
  private _customOpensslCipherConfigTls13?: string[]; 
  public get customOpensslCipherConfigTls13() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_openssl_cipher_config_tls13'));
  }
  public set customOpensslCipherConfigTls13(value: string[]) {
    this._customOpensslCipherConfigTls13 = value;
  }
  public resetCustomOpensslCipherConfigTls13() {
    this._customOpensslCipherConfigTls13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOpensslCipherConfigTls13Input() {
    return this._customOpensslCipherConfigTls13;
  }

  // default_max_time_ms - computed: true, optional: true, required: false
  private _defaultMaxTimeMs?: number; 
  public get defaultMaxTimeMs() {
    return this.getNumberAttribute('default_max_time_ms');
  }
  public set defaultMaxTimeMs(value: number) {
    this._defaultMaxTimeMs = value;
  }
  public resetDefaultMaxTimeMs() {
    this._defaultMaxTimeMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMaxTimeMsInput() {
    return this._defaultMaxTimeMs;
  }

  // default_write_concern - computed: true, optional: true, required: false
  private _defaultWriteConcern?: string; 
  public get defaultWriteConcern() {
    return this.getStringAttribute('default_write_concern');
  }
  public set defaultWriteConcern(value: string) {
    this._defaultWriteConcern = value;
  }
  public resetDefaultWriteConcern() {
    this._defaultWriteConcern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWriteConcernInput() {
    return this._defaultWriteConcern;
  }

  // javascript_enabled - computed: true, optional: true, required: false
  private _javascriptEnabled?: boolean | cdktf.IResolvable; 
  public get javascriptEnabled() {
    return this.getBooleanAttribute('javascript_enabled');
  }
  public set javascriptEnabled(value: boolean | cdktf.IResolvable) {
    this._javascriptEnabled = value;
  }
  public resetJavascriptEnabled() {
    this._javascriptEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptEnabledInput() {
    return this._javascriptEnabled;
  }

  // minimum_enabled_tls_protocol - computed: true, optional: true, required: false
  private _minimumEnabledTlsProtocol?: string; 
  public get minimumEnabledTlsProtocol() {
    return this.getStringAttribute('minimum_enabled_tls_protocol');
  }
  public set minimumEnabledTlsProtocol(value: string) {
    this._minimumEnabledTlsProtocol = value;
  }
  public resetMinimumEnabledTlsProtocol() {
    this._minimumEnabledTlsProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumEnabledTlsProtocolInput() {
    return this._minimumEnabledTlsProtocol;
  }

  // no_table_scan - computed: true, optional: true, required: false
  private _noTableScan?: boolean | cdktf.IResolvable; 
  public get noTableScan() {
    return this.getBooleanAttribute('no_table_scan');
  }
  public set noTableScan(value: boolean | cdktf.IResolvable) {
    this._noTableScan = value;
  }
  public resetNoTableScan() {
    this._noTableScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTableScanInput() {
    return this._noTableScan;
  }

  // oplog_min_retention_hours - computed: true, optional: true, required: false
  private _oplogMinRetentionHours?: number; 
  public get oplogMinRetentionHours() {
    return this.getNumberAttribute('oplog_min_retention_hours');
  }
  public set oplogMinRetentionHours(value: number) {
    this._oplogMinRetentionHours = value;
  }
  public resetOplogMinRetentionHours() {
    this._oplogMinRetentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oplogMinRetentionHoursInput() {
    return this._oplogMinRetentionHours;
  }

  // oplog_size_mb - computed: true, optional: true, required: false
  private _oplogSizeMb?: number; 
  public get oplogSizeMb() {
    return this.getNumberAttribute('oplog_size_mb');
  }
  public set oplogSizeMb(value: number) {
    this._oplogSizeMb = value;
  }
  public resetOplogSizeMb() {
    this._oplogSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oplogSizeMbInput() {
    return this._oplogSizeMb;
  }

  // sample_refresh_interval_bi_connector - computed: true, optional: true, required: false
  private _sampleRefreshIntervalBiConnector?: number; 
  public get sampleRefreshIntervalBiConnector() {
    return this.getNumberAttribute('sample_refresh_interval_bi_connector');
  }
  public set sampleRefreshIntervalBiConnector(value: number) {
    this._sampleRefreshIntervalBiConnector = value;
  }
  public resetSampleRefreshIntervalBiConnector() {
    this._sampleRefreshIntervalBiConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRefreshIntervalBiConnectorInput() {
    return this._sampleRefreshIntervalBiConnector;
  }

  // sample_size_bi_connector - computed: true, optional: true, required: false
  private _sampleSizeBiConnector?: number; 
  public get sampleSizeBiConnector() {
    return this.getNumberAttribute('sample_size_bi_connector');
  }
  public set sampleSizeBiConnector(value: number) {
    this._sampleSizeBiConnector = value;
  }
  public resetSampleSizeBiConnector() {
    this._sampleSizeBiConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleSizeBiConnectorInput() {
    return this._sampleSizeBiConnector;
  }

  // tls_cipher_config_mode - computed: true, optional: true, required: false
  private _tlsCipherConfigMode?: string; 
  public get tlsCipherConfigMode() {
    return this.getStringAttribute('tls_cipher_config_mode');
  }
  public set tlsCipherConfigMode(value: string) {
    this._tlsCipherConfigMode = value;
  }
  public resetTlsCipherConfigMode() {
    this._tlsCipherConfigMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCipherConfigModeInput() {
    return this._tlsCipherConfigMode;
  }

  // transaction_lifetime_limit_seconds - computed: true, optional: true, required: false
  private _transactionLifetimeLimitSeconds?: number; 
  public get transactionLifetimeLimitSeconds() {
    return this.getNumberAttribute('transaction_lifetime_limit_seconds');
  }
  public set transactionLifetimeLimitSeconds(value: number) {
    this._transactionLifetimeLimitSeconds = value;
  }
  public resetTransactionLifetimeLimitSeconds() {
    this._transactionLifetimeLimitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionLifetimeLimitSecondsInput() {
    return this._transactionLifetimeLimitSeconds;
  }
}
export interface AdvancedClusterBiConnectorConfig {
  /**
  * Flag that indicates whether MongoDB Connector for Business Intelligence is enabled on the specified cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#enabled AdvancedCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Data source node designated for the MongoDB Connector for Business Intelligence on MongoDB Cloud. The MongoDB Connector for Business Intelligence on MongoDB Cloud reads data from the primary, secondary, or analytics node based on your read preferences. Defaults to `ANALYTICS` node, or `SECONDARY` if there are no `ANALYTICS` nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#read_preference AdvancedCluster#read_preference}
  */
  readonly readPreference?: string;
}

export function advancedClusterBiConnectorConfigToTerraform(struct?: AdvancedClusterBiConnectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    read_preference: cdktf.stringToTerraform(struct!.readPreference),
  }
}


export function advancedClusterBiConnectorConfigToHclTerraform(struct?: AdvancedClusterBiConnectorConfig | cdktf.IResolvable): any {
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
    read_preference: {
      value: cdktf.stringToHclTerraform(struct!.readPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterBiConnectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdvancedClusterBiConnectorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._readPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.readPreference = this._readPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterBiConnectorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._readPreference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._readPreference = value.readPreference;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // read_preference - computed: true, optional: true, required: false
  private _readPreference?: string; 
  public get readPreference() {
    return this.getStringAttribute('read_preference');
  }
  public set readPreference(value: string) {
    this._readPreference = value;
  }
  public resetReadPreference() {
    this._readPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readPreferenceInput() {
    return this._readPreference;
  }
}
export interface AdvancedClusterConnectionStringsPrivateEndpointEndpoints {
}

export function advancedClusterConnectionStringsPrivateEndpointEndpointsToTerraform(struct?: AdvancedClusterConnectionStringsPrivateEndpointEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function advancedClusterConnectionStringsPrivateEndpointEndpointsToHclTerraform(struct?: AdvancedClusterConnectionStringsPrivateEndpointEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvancedClusterConnectionStringsPrivateEndpointEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterConnectionStringsPrivateEndpointEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class AdvancedClusterConnectionStringsPrivateEndpointEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference {
    return new AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvancedClusterConnectionStringsPrivateEndpoint {
}

export function advancedClusterConnectionStringsPrivateEndpointToTerraform(struct?: AdvancedClusterConnectionStringsPrivateEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function advancedClusterConnectionStringsPrivateEndpointToHclTerraform(struct?: AdvancedClusterConnectionStringsPrivateEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AdvancedClusterConnectionStringsPrivateEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvancedClusterConnectionStringsPrivateEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterConnectionStringsPrivateEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new AdvancedClusterConnectionStringsPrivateEndpointEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // srv_connection_string - computed: true, optional: false, required: false
  public get srvConnectionString() {
    return this.getStringAttribute('srv_connection_string');
  }

  // srv_shard_optimized_connection_string - computed: true, optional: false, required: false
  public get srvShardOptimizedConnectionString() {
    return this.getStringAttribute('srv_shard_optimized_connection_string');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class AdvancedClusterConnectionStringsPrivateEndpointList extends cdktf.ComplexList {

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
  public get(index: number): AdvancedClusterConnectionStringsPrivateEndpointOutputReference {
    return new AdvancedClusterConnectionStringsPrivateEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvancedClusterConnectionStrings {
}

export function advancedClusterConnectionStringsToTerraform(struct?: AdvancedClusterConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function advancedClusterConnectionStringsToHclTerraform(struct?: AdvancedClusterConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AdvancedClusterConnectionStringsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdvancedClusterConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterConnectionStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private - computed: true, optional: false, required: false
  public get private() {
    return this.getStringAttribute('private');
  }

  // private_endpoint - computed: true, optional: false, required: false
  private _privateEndpoint = new AdvancedClusterConnectionStringsPrivateEndpointList(this, "private_endpoint", false);
  public get privateEndpoint() {
    return this._privateEndpoint;
  }

  // private_srv - computed: true, optional: false, required: false
  public get privateSrv() {
    return this.getStringAttribute('private_srv');
  }

  // standard - computed: true, optional: false, required: false
  public get standard() {
    return this.getStringAttribute('standard');
  }

  // standard_srv - computed: true, optional: false, required: false
  public get standardSrv() {
    return this.getStringAttribute('standard_srv');
  }
}
export interface AdvancedClusterPinnedFcv {
  /**
  * Expiration date of the fixed FCV. This value is in the ISO 8601 timestamp format (e.g. 2024-12-04T16:25:00Z). Note that this field cannot exceed 4 weeks from the pinned date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#expiration_date AdvancedCluster#expiration_date}
  */
  readonly expirationDate: string;
}

export function advancedClusterPinnedFcvToTerraform(struct?: AdvancedClusterPinnedFcv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_date: cdktf.stringToTerraform(struct!.expirationDate),
  }
}


export function advancedClusterPinnedFcvToHclTerraform(struct?: AdvancedClusterPinnedFcv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_date: {
      value: cdktf.stringToHclTerraform(struct!.expirationDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterPinnedFcvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdvancedClusterPinnedFcv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDate = this._expirationDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterPinnedFcv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationDate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationDate = value.expirationDate;
    }
  }

  // expiration_date - computed: false, optional: false, required: true
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling {
  /**
  * Flag that indicates whether someone enabled instance size auto-scaling.
  * 
  * - Set to `true` to enable instance size auto-scaling. If enabled, you must specify a value for **replicationSpecs[n].regionConfigs[m].autoScaling.compute.maxInstanceSize**.
  * - Set to `false` to disable instance size automatic scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#compute_enabled AdvancedCluster#compute_enabled}
  */
  readonly computeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Minimum instance size to which your cluster can automatically scale. MongoDB Cloud requires this parameter if `"replicationSpecs[n].regionConfigs[m].autoScaling.compute.scaleDownEnabled" : true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#compute_max_instance_size AdvancedCluster#compute_max_instance_size}
  */
  readonly computeMaxInstanceSize?: string;
  /**
  * Minimum instance size to which your cluster can automatically scale. MongoDB Cloud requires this parameter if `"replicationSpecs[n].regionConfigs[m].autoScaling.compute.scaleDownEnabled" : true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#compute_min_instance_size AdvancedCluster#compute_min_instance_size}
  */
  readonly computeMinInstanceSize?: string;
  /**
  * Flag that indicates whether the instance size may scale down. MongoDB Cloud requires this parameter if `"replicationSpecs[n].regionConfigs[m].autoScaling.compute.enabled" : true`. If you enable this option, specify a value for **replicationSpecs[n].regionConfigs[m].autoScaling.compute.minInstanceSize**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#compute_scale_down_enabled AdvancedCluster#compute_scale_down_enabled}
  */
  readonly computeScaleDownEnabled?: boolean | cdktf.IResolvable;
  /**
  * Flag that indicates whether this cluster enables disk auto-scaling. The maximum memory allowed for the selected cluster tier and the oplog size can limit storage auto-scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#disk_gb_enabled AdvancedCluster#disk_gb_enabled}
  */
  readonly diskGbEnabled?: boolean | cdktf.IResolvable;
}

export function advancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingToTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_enabled: cdktf.booleanToTerraform(struct!.computeEnabled),
    compute_max_instance_size: cdktf.stringToTerraform(struct!.computeMaxInstanceSize),
    compute_min_instance_size: cdktf.stringToTerraform(struct!.computeMinInstanceSize),
    compute_scale_down_enabled: cdktf.booleanToTerraform(struct!.computeScaleDownEnabled),
    disk_gb_enabled: cdktf.booleanToTerraform(struct!.diskGbEnabled),
  }
}


export function advancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingToHclTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.computeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compute_max_instance_size: {
      value: cdktf.stringToHclTerraform(struct!.computeMaxInstanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_min_instance_size: {
      value: cdktf.stringToHclTerraform(struct!.computeMinInstanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_scale_down_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.computeScaleDownEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_gb_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.diskGbEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeEnabled = this._computeEnabled;
    }
    if (this._computeMaxInstanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeMaxInstanceSize = this._computeMaxInstanceSize;
    }
    if (this._computeMinInstanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeMinInstanceSize = this._computeMinInstanceSize;
    }
    if (this._computeScaleDownEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeScaleDownEnabled = this._computeScaleDownEnabled;
    }
    if (this._diskGbEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskGbEnabled = this._diskGbEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._computeEnabled = undefined;
      this._computeMaxInstanceSize = undefined;
      this._computeMinInstanceSize = undefined;
      this._computeScaleDownEnabled = undefined;
      this._diskGbEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._computeEnabled = value.computeEnabled;
      this._computeMaxInstanceSize = value.computeMaxInstanceSize;
      this._computeMinInstanceSize = value.computeMinInstanceSize;
      this._computeScaleDownEnabled = value.computeScaleDownEnabled;
      this._diskGbEnabled = value.diskGbEnabled;
    }
  }

  // compute_enabled - computed: true, optional: true, required: false
  private _computeEnabled?: boolean | cdktf.IResolvable; 
  public get computeEnabled() {
    return this.getBooleanAttribute('compute_enabled');
  }
  public set computeEnabled(value: boolean | cdktf.IResolvable) {
    this._computeEnabled = value;
  }
  public resetComputeEnabled() {
    this._computeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeEnabledInput() {
    return this._computeEnabled;
  }

  // compute_max_instance_size - computed: true, optional: true, required: false
  private _computeMaxInstanceSize?: string; 
  public get computeMaxInstanceSize() {
    return this.getStringAttribute('compute_max_instance_size');
  }
  public set computeMaxInstanceSize(value: string) {
    this._computeMaxInstanceSize = value;
  }
  public resetComputeMaxInstanceSize() {
    this._computeMaxInstanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeMaxInstanceSizeInput() {
    return this._computeMaxInstanceSize;
  }

  // compute_min_instance_size - computed: true, optional: true, required: false
  private _computeMinInstanceSize?: string; 
  public get computeMinInstanceSize() {
    return this.getStringAttribute('compute_min_instance_size');
  }
  public set computeMinInstanceSize(value: string) {
    this._computeMinInstanceSize = value;
  }
  public resetComputeMinInstanceSize() {
    this._computeMinInstanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeMinInstanceSizeInput() {
    return this._computeMinInstanceSize;
  }

  // compute_scale_down_enabled - computed: true, optional: true, required: false
  private _computeScaleDownEnabled?: boolean | cdktf.IResolvable; 
  public get computeScaleDownEnabled() {
    return this.getBooleanAttribute('compute_scale_down_enabled');
  }
  public set computeScaleDownEnabled(value: boolean | cdktf.IResolvable) {
    this._computeScaleDownEnabled = value;
  }
  public resetComputeScaleDownEnabled() {
    this._computeScaleDownEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeScaleDownEnabledInput() {
    return this._computeScaleDownEnabled;
  }

  // disk_gb_enabled - computed: true, optional: true, required: false
  private _diskGbEnabled?: boolean | cdktf.IResolvable; 
  public get diskGbEnabled() {
    return this.getBooleanAttribute('disk_gb_enabled');
  }
  public set diskGbEnabled(value: boolean | cdktf.IResolvable) {
    this._diskGbEnabled = value;
  }
  public resetDiskGbEnabled() {
    this._diskGbEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGbEnabledInput() {
    return this._diskGbEnabled;
  }
}
export interface AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs {
  /**
  * Target throughput desired for storage attached to your Azure-provisioned cluster. Change this parameter if you:
  * 
  * - set `"replicationSpecs[n].regionConfigs[m].providerName" : "Azure"`.
  * - set `"replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize" : "M40"` or greater not including `Mxx_NVME` tiers.
  * 
  * The maximum input/output operations per second (IOPS) depend on the selected **.instanceSize** and **.diskSizeGB**.
  * This parameter defaults to the cluster tier's standard IOPS value.
  * Changing this value impacts cluster cost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}
  */
  readonly diskIops?: number;
  /**
  * Storage capacity of instance data volumes expressed in gigabytes. Increase this number to add capacity.
  * 
  *  This value must be equal for all shards and node types.
  * 
  *  This value is not configurable on M0/M2/M5 clusters.
  * 
  *  MongoDB Cloud requires this parameter if you set **replicationSpecs**.
  * 
  *  If you specify a disk size below the minimum (10 GB), this parameter defaults to the minimum disk size value. 
  * 
  *  Storage charge calculations depend on whether you choose the default value or a custom value.
  * 
  *  The maximum value for disk storage cannot exceed 50 times the maximum RAM for the selected cluster. If you require more storage space, consider upgrading your cluster to a higher tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of storage you want to attach to your AWS-provisioned cluster.
  * 
  * - `STANDARD` volume types can't exceed the default input/output operations per second (IOPS) rate for the selected volume size. 
  * 
  * - `PROVISIONED` volume types must fall within the allowable IOPS range for the selected volume size. You must set this value to (`PROVISIONED`) for NVMe clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Hardware specification for the instance sizes in this region in this shard. Each instance size has a default storage and memory capacity. Electable nodes and read-only nodes (known as "base nodes") within a single shard must use the same instance size. Analytics nodes can scale independently from base nodes within a shard. Both base nodes and analytics nodes can scale independently from their equivalents in other shards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}
  */
  readonly instanceSize?: string;
  /**
  * Number of nodes of the given type for MongoDB Cloud to deploy to the region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}
  */
  readonly nodeCount?: number;
}

export function advancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsToTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_iops: cdktf.numberToTerraform(struct!.diskIops),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    ebs_volume_type: cdktf.stringToTerraform(struct!.ebsVolumeType),
    instance_size: cdktf.stringToTerraform(struct!.instanceSize),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
  }
}


export function advancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsToHclTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_iops: {
      value: cdktf.numberToHclTerraform(struct!.diskIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.ebsVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_size: {
      value: cdktf.stringToHclTerraform(struct!.instanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskIops = this._diskIops;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    if (this._instanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSize = this._instanceSize;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskIops = undefined;
      this._diskSizeGb = undefined;
      this._ebsVolumeType = undefined;
      this._instanceSize = undefined;
      this._nodeCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskIops = value.diskIops;
      this._diskSizeGb = value.diskSizeGb;
      this._ebsVolumeType = value.ebsVolumeType;
      this._instanceSize = value.instanceSize;
      this._nodeCount = value.nodeCount;
    }
  }

  // disk_iops - computed: true, optional: true, required: false
  private _diskIops?: number; 
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }
  public set diskIops(value: number) {
    this._diskIops = value;
  }
  public resetDiskIops() {
    this._diskIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsInput() {
    return this._diskIops;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // ebs_volume_type - computed: true, optional: true, required: false
  private _ebsVolumeType?: string; 
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }
  public set ebsVolumeType(value: string) {
    this._ebsVolumeType = value;
  }
  public resetEbsVolumeType() {
    this._ebsVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeTypeInput() {
    return this._ebsVolumeType;
  }

  // instance_size - computed: true, optional: true, required: false
  private _instanceSize?: string; 
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }
  public set instanceSize(value: string) {
    this._instanceSize = value;
  }
  public resetInstanceSize() {
    this._instanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSizeInput() {
    return this._instanceSize;
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }
}
export interface AdvancedClusterReplicationSpecsRegionConfigsAutoScaling {
  /**
  * Flag that indicates whether someone enabled instance size auto-scaling.
  * 
  * - Set to `true` to enable instance size auto-scaling. If enabled, you must specify a value for **replicationSpecs[n].regionConfigs[m].autoScaling.compute.maxInstanceSize**.
  * - Set to `false` to disable instance size automatic scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#compute_enabled AdvancedCluster#compute_enabled}
  */
  readonly computeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Minimum instance size to which your cluster can automatically scale. MongoDB Cloud requires this parameter if `"replicationSpecs[n].regionConfigs[m].autoScaling.compute.scaleDownEnabled" : true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#compute_max_instance_size AdvancedCluster#compute_max_instance_size}
  */
  readonly computeMaxInstanceSize?: string;
  /**
  * Minimum instance size to which your cluster can automatically scale. MongoDB Cloud requires this parameter if `"replicationSpecs[n].regionConfigs[m].autoScaling.compute.scaleDownEnabled" : true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#compute_min_instance_size AdvancedCluster#compute_min_instance_size}
  */
  readonly computeMinInstanceSize?: string;
  /**
  * Flag that indicates whether the instance size may scale down. MongoDB Cloud requires this parameter if `"replicationSpecs[n].regionConfigs[m].autoScaling.compute.enabled" : true`. If you enable this option, specify a value for **replicationSpecs[n].regionConfigs[m].autoScaling.compute.minInstanceSize**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#compute_scale_down_enabled AdvancedCluster#compute_scale_down_enabled}
  */
  readonly computeScaleDownEnabled?: boolean | cdktf.IResolvable;
  /**
  * Flag that indicates whether this cluster enables disk auto-scaling. The maximum memory allowed for the selected cluster tier and the oplog size can limit storage auto-scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#disk_gb_enabled AdvancedCluster#disk_gb_enabled}
  */
  readonly diskGbEnabled?: boolean | cdktf.IResolvable;
}

export function advancedClusterReplicationSpecsRegionConfigsAutoScalingToTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsAutoScaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_enabled: cdktf.booleanToTerraform(struct!.computeEnabled),
    compute_max_instance_size: cdktf.stringToTerraform(struct!.computeMaxInstanceSize),
    compute_min_instance_size: cdktf.stringToTerraform(struct!.computeMinInstanceSize),
    compute_scale_down_enabled: cdktf.booleanToTerraform(struct!.computeScaleDownEnabled),
    disk_gb_enabled: cdktf.booleanToTerraform(struct!.diskGbEnabled),
  }
}


export function advancedClusterReplicationSpecsRegionConfigsAutoScalingToHclTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsAutoScaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.computeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compute_max_instance_size: {
      value: cdktf.stringToHclTerraform(struct!.computeMaxInstanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_min_instance_size: {
      value: cdktf.stringToHclTerraform(struct!.computeMinInstanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_scale_down_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.computeScaleDownEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_gb_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.diskGbEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdvancedClusterReplicationSpecsRegionConfigsAutoScaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeEnabled = this._computeEnabled;
    }
    if (this._computeMaxInstanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeMaxInstanceSize = this._computeMaxInstanceSize;
    }
    if (this._computeMinInstanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeMinInstanceSize = this._computeMinInstanceSize;
    }
    if (this._computeScaleDownEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeScaleDownEnabled = this._computeScaleDownEnabled;
    }
    if (this._diskGbEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskGbEnabled = this._diskGbEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterReplicationSpecsRegionConfigsAutoScaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._computeEnabled = undefined;
      this._computeMaxInstanceSize = undefined;
      this._computeMinInstanceSize = undefined;
      this._computeScaleDownEnabled = undefined;
      this._diskGbEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._computeEnabled = value.computeEnabled;
      this._computeMaxInstanceSize = value.computeMaxInstanceSize;
      this._computeMinInstanceSize = value.computeMinInstanceSize;
      this._computeScaleDownEnabled = value.computeScaleDownEnabled;
      this._diskGbEnabled = value.diskGbEnabled;
    }
  }

  // compute_enabled - computed: true, optional: true, required: false
  private _computeEnabled?: boolean | cdktf.IResolvable; 
  public get computeEnabled() {
    return this.getBooleanAttribute('compute_enabled');
  }
  public set computeEnabled(value: boolean | cdktf.IResolvable) {
    this._computeEnabled = value;
  }
  public resetComputeEnabled() {
    this._computeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeEnabledInput() {
    return this._computeEnabled;
  }

  // compute_max_instance_size - computed: true, optional: true, required: false
  private _computeMaxInstanceSize?: string; 
  public get computeMaxInstanceSize() {
    return this.getStringAttribute('compute_max_instance_size');
  }
  public set computeMaxInstanceSize(value: string) {
    this._computeMaxInstanceSize = value;
  }
  public resetComputeMaxInstanceSize() {
    this._computeMaxInstanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeMaxInstanceSizeInput() {
    return this._computeMaxInstanceSize;
  }

  // compute_min_instance_size - computed: true, optional: true, required: false
  private _computeMinInstanceSize?: string; 
  public get computeMinInstanceSize() {
    return this.getStringAttribute('compute_min_instance_size');
  }
  public set computeMinInstanceSize(value: string) {
    this._computeMinInstanceSize = value;
  }
  public resetComputeMinInstanceSize() {
    this._computeMinInstanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeMinInstanceSizeInput() {
    return this._computeMinInstanceSize;
  }

  // compute_scale_down_enabled - computed: true, optional: true, required: false
  private _computeScaleDownEnabled?: boolean | cdktf.IResolvable; 
  public get computeScaleDownEnabled() {
    return this.getBooleanAttribute('compute_scale_down_enabled');
  }
  public set computeScaleDownEnabled(value: boolean | cdktf.IResolvable) {
    this._computeScaleDownEnabled = value;
  }
  public resetComputeScaleDownEnabled() {
    this._computeScaleDownEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeScaleDownEnabledInput() {
    return this._computeScaleDownEnabled;
  }

  // disk_gb_enabled - computed: true, optional: true, required: false
  private _diskGbEnabled?: boolean | cdktf.IResolvable; 
  public get diskGbEnabled() {
    return this.getBooleanAttribute('disk_gb_enabled');
  }
  public set diskGbEnabled(value: boolean | cdktf.IResolvable) {
    this._diskGbEnabled = value;
  }
  public resetDiskGbEnabled() {
    this._diskGbEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGbEnabledInput() {
    return this._diskGbEnabled;
  }
}
export interface AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs {
  /**
  * Target throughput desired for storage attached to your Azure-provisioned cluster. Change this parameter if you:
  * 
  * - set `"replicationSpecs[n].regionConfigs[m].providerName" : "Azure"`.
  * - set `"replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize" : "M40"` or greater not including `Mxx_NVME` tiers.
  * 
  * The maximum input/output operations per second (IOPS) depend on the selected **.instanceSize** and **.diskSizeGB**.
  * This parameter defaults to the cluster tier's standard IOPS value.
  * Changing this value impacts cluster cost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}
  */
  readonly diskIops?: number;
  /**
  * Storage capacity of instance data volumes expressed in gigabytes. Increase this number to add capacity.
  * 
  *  This value must be equal for all shards and node types.
  * 
  *  This value is not configurable on M0/M2/M5 clusters.
  * 
  *  MongoDB Cloud requires this parameter if you set **replicationSpecs**.
  * 
  *  If you specify a disk size below the minimum (10 GB), this parameter defaults to the minimum disk size value. 
  * 
  *  Storage charge calculations depend on whether you choose the default value or a custom value.
  * 
  *  The maximum value for disk storage cannot exceed 50 times the maximum RAM for the selected cluster. If you require more storage space, consider upgrading your cluster to a higher tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of storage you want to attach to your AWS-provisioned cluster.
  * 
  * - `STANDARD` volume types can't exceed the default input/output operations per second (IOPS) rate for the selected volume size. 
  * 
  * - `PROVISIONED` volume types must fall within the allowable IOPS range for the selected volume size. You must set this value to (`PROVISIONED`) for NVMe clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Hardware specification for the instance sizes in this region in this shard. Each instance size has a default storage and memory capacity. Electable nodes and read-only nodes (known as "base nodes") within a single shard must use the same instance size. Analytics nodes can scale independently from base nodes within a shard. Both base nodes and analytics nodes can scale independently from their equivalents in other shards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}
  */
  readonly instanceSize?: string;
  /**
  * Number of nodes of the given type for MongoDB Cloud to deploy to the region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}
  */
  readonly nodeCount?: number;
}

export function advancedClusterReplicationSpecsRegionConfigsElectableSpecsToTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_iops: cdktf.numberToTerraform(struct!.diskIops),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    ebs_volume_type: cdktf.stringToTerraform(struct!.ebsVolumeType),
    instance_size: cdktf.stringToTerraform(struct!.instanceSize),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
  }
}


export function advancedClusterReplicationSpecsRegionConfigsElectableSpecsToHclTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_iops: {
      value: cdktf.numberToHclTerraform(struct!.diskIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.ebsVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_size: {
      value: cdktf.stringToHclTerraform(struct!.instanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskIops = this._diskIops;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    if (this._instanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSize = this._instanceSize;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskIops = undefined;
      this._diskSizeGb = undefined;
      this._ebsVolumeType = undefined;
      this._instanceSize = undefined;
      this._nodeCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskIops = value.diskIops;
      this._diskSizeGb = value.diskSizeGb;
      this._ebsVolumeType = value.ebsVolumeType;
      this._instanceSize = value.instanceSize;
      this._nodeCount = value.nodeCount;
    }
  }

  // disk_iops - computed: true, optional: true, required: false
  private _diskIops?: number; 
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }
  public set diskIops(value: number) {
    this._diskIops = value;
  }
  public resetDiskIops() {
    this._diskIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsInput() {
    return this._diskIops;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // ebs_volume_type - computed: true, optional: true, required: false
  private _ebsVolumeType?: string; 
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }
  public set ebsVolumeType(value: string) {
    this._ebsVolumeType = value;
  }
  public resetEbsVolumeType() {
    this._ebsVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeTypeInput() {
    return this._ebsVolumeType;
  }

  // instance_size - computed: true, optional: true, required: false
  private _instanceSize?: string; 
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }
  public set instanceSize(value: string) {
    this._instanceSize = value;
  }
  public resetInstanceSize() {
    this._instanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSizeInput() {
    return this._instanceSize;
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }
}
export interface AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs {
  /**
  * Target throughput desired for storage attached to your Azure-provisioned cluster. Change this parameter if you:
  * 
  * - set `"replicationSpecs[n].regionConfigs[m].providerName" : "Azure"`.
  * - set `"replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize" : "M40"` or greater not including `Mxx_NVME` tiers.
  * 
  * The maximum input/output operations per second (IOPS) depend on the selected **.instanceSize** and **.diskSizeGB**.
  * This parameter defaults to the cluster tier's standard IOPS value.
  * Changing this value impacts cluster cost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}
  */
  readonly diskIops?: number;
  /**
  * Storage capacity of instance data volumes expressed in gigabytes. Increase this number to add capacity.
  * 
  *  This value must be equal for all shards and node types.
  * 
  *  This value is not configurable on M0/M2/M5 clusters.
  * 
  *  MongoDB Cloud requires this parameter if you set **replicationSpecs**.
  * 
  *  If you specify a disk size below the minimum (10 GB), this parameter defaults to the minimum disk size value. 
  * 
  *  Storage charge calculations depend on whether you choose the default value or a custom value.
  * 
  *  The maximum value for disk storage cannot exceed 50 times the maximum RAM for the selected cluster. If you require more storage space, consider upgrading your cluster to a higher tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of storage you want to attach to your AWS-provisioned cluster.
  * 
  * - `STANDARD` volume types can't exceed the default input/output operations per second (IOPS) rate for the selected volume size. 
  * 
  * - `PROVISIONED` volume types must fall within the allowable IOPS range for the selected volume size. You must set this value to (`PROVISIONED`) for NVMe clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Hardware specification for the instance sizes in this region in this shard. Each instance size has a default storage and memory capacity. Electable nodes and read-only nodes (known as "base nodes") within a single shard must use the same instance size. Analytics nodes can scale independently from base nodes within a shard. Both base nodes and analytics nodes can scale independently from their equivalents in other shards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}
  */
  readonly instanceSize?: string;
  /**
  * Number of nodes of the given type for MongoDB Cloud to deploy to the region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}
  */
  readonly nodeCount?: number;
}

export function advancedClusterReplicationSpecsRegionConfigsReadOnlySpecsToTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_iops: cdktf.numberToTerraform(struct!.diskIops),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    ebs_volume_type: cdktf.stringToTerraform(struct!.ebsVolumeType),
    instance_size: cdktf.stringToTerraform(struct!.instanceSize),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
  }
}


export function advancedClusterReplicationSpecsRegionConfigsReadOnlySpecsToHclTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_iops: {
      value: cdktf.numberToHclTerraform(struct!.diskIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.ebsVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_size: {
      value: cdktf.stringToHclTerraform(struct!.instanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskIops = this._diskIops;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    if (this._instanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSize = this._instanceSize;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskIops = undefined;
      this._diskSizeGb = undefined;
      this._ebsVolumeType = undefined;
      this._instanceSize = undefined;
      this._nodeCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskIops = value.diskIops;
      this._diskSizeGb = value.diskSizeGb;
      this._ebsVolumeType = value.ebsVolumeType;
      this._instanceSize = value.instanceSize;
      this._nodeCount = value.nodeCount;
    }
  }

  // disk_iops - computed: true, optional: true, required: false
  private _diskIops?: number; 
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }
  public set diskIops(value: number) {
    this._diskIops = value;
  }
  public resetDiskIops() {
    this._diskIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsInput() {
    return this._diskIops;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // ebs_volume_type - computed: true, optional: true, required: false
  private _ebsVolumeType?: string; 
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }
  public set ebsVolumeType(value: string) {
    this._ebsVolumeType = value;
  }
  public resetEbsVolumeType() {
    this._ebsVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeTypeInput() {
    return this._ebsVolumeType;
  }

  // instance_size - computed: true, optional: true, required: false
  private _instanceSize?: string; 
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }
  public set instanceSize(value: string) {
    this._instanceSize = value;
  }
  public resetInstanceSize() {
    this._instanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSizeInput() {
    return this._instanceSize;
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }
}
export interface AdvancedClusterReplicationSpecsRegionConfigs {
  /**
  * Options that determine how this cluster handles resource scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#analytics_auto_scaling AdvancedCluster#analytics_auto_scaling}
  */
  readonly analyticsAutoScaling?: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling;
  /**
  * Hardware specifications for nodes deployed in the region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#analytics_specs AdvancedCluster#analytics_specs}
  */
  readonly analyticsSpecs?: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs;
  /**
  * Options that determine how this cluster handles resource scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#auto_scaling AdvancedCluster#auto_scaling}
  */
  readonly autoScaling?: AdvancedClusterReplicationSpecsRegionConfigsAutoScaling;
  /**
  * Cloud service provider on which MongoDB Cloud provisioned the multi-tenant cluster. The resource returns this parameter when **providerName** is `TENANT` and **electableSpecs.instanceSize** is `M0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#backing_provider_name AdvancedCluster#backing_provider_name}
  */
  readonly backingProviderName?: string;
  /**
  * Hardware specifications for nodes deployed in the region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#electable_specs AdvancedCluster#electable_specs}
  */
  readonly electableSpecs?: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs;
  /**
  * Precedence is given to this region when a primary election occurs. If your **regionConfigs** has only **readOnlySpecs**, **analyticsSpecs**, or both, set this value to `0`. If you have multiple **regionConfigs** objects (your cluster is multi-region or multi-cloud), they must have priorities in descending order. The highest priority is `7`.
  * 
  * **Example:** If you have three regions, their priorities would be `7`, `6`, and `5` respectively. If you added two more regions for supporting electable nodes, the priorities of those regions would be `4` and `3` respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#priority AdvancedCluster#priority}
  */
  readonly priority: number;
  /**
  * Cloud service provider on which MongoDB Cloud provisions the hosts. Set dedicated clusters to `AWS`, `GCP`, `AZURE` or `TENANT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#provider_name AdvancedCluster#provider_name}
  */
  readonly providerName: string;
  /**
  * Hardware specifications for nodes deployed in the region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#read_only_specs AdvancedCluster#read_only_specs}
  */
  readonly readOnlySpecs?: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs;
  /**
  * Physical location of your MongoDB cluster nodes. The region you choose can affect network latency for clients accessing your databases. The region name is only returned in the response for single-region clusters. When MongoDB Cloud deploys a dedicated cluster, it checks if a VPC or VPC connection exists for that provider and region. If not, MongoDB Cloud creates them as part of the deployment. It assigns the VPC a Classless Inter-Domain Routing (CIDR) block. To limit a new VPC peering connection to one Classless Inter-Domain Routing (CIDR) block and region, create the connection first. Deploy the cluster after the connection starts. GCP Clusters and Multi-region clusters require one VPC peering connection for each region. MongoDB nodes can use only the peering connection that resides in the same region as the nodes to communicate with the peered VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#region_name AdvancedCluster#region_name}
  */
  readonly regionName: string;
}

export function advancedClusterReplicationSpecsRegionConfigsToTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analytics_auto_scaling: advancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingToTerraform(struct!.analyticsAutoScaling),
    analytics_specs: advancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsToTerraform(struct!.analyticsSpecs),
    auto_scaling: advancedClusterReplicationSpecsRegionConfigsAutoScalingToTerraform(struct!.autoScaling),
    backing_provider_name: cdktf.stringToTerraform(struct!.backingProviderName),
    electable_specs: advancedClusterReplicationSpecsRegionConfigsElectableSpecsToTerraform(struct!.electableSpecs),
    priority: cdktf.numberToTerraform(struct!.priority),
    provider_name: cdktf.stringToTerraform(struct!.providerName),
    read_only_specs: advancedClusterReplicationSpecsRegionConfigsReadOnlySpecsToTerraform(struct!.readOnlySpecs),
    region_name: cdktf.stringToTerraform(struct!.regionName),
  }
}


export function advancedClusterReplicationSpecsRegionConfigsToHclTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analytics_auto_scaling: {
      value: advancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingToHclTerraform(struct!.analyticsAutoScaling),
      isBlock: true,
      type: "struct",
      storageClassType: "AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling",
    },
    analytics_specs: {
      value: advancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsToHclTerraform(struct!.analyticsSpecs),
      isBlock: true,
      type: "struct",
      storageClassType: "AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs",
    },
    auto_scaling: {
      value: advancedClusterReplicationSpecsRegionConfigsAutoScalingToHclTerraform(struct!.autoScaling),
      isBlock: true,
      type: "struct",
      storageClassType: "AdvancedClusterReplicationSpecsRegionConfigsAutoScaling",
    },
    backing_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.backingProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    electable_specs: {
      value: advancedClusterReplicationSpecsRegionConfigsElectableSpecsToHclTerraform(struct!.electableSpecs),
      isBlock: true,
      type: "struct",
      storageClassType: "AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provider_name: {
      value: cdktf.stringToHclTerraform(struct!.providerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only_specs: {
      value: advancedClusterReplicationSpecsRegionConfigsReadOnlySpecsToHclTerraform(struct!.readOnlySpecs),
      isBlock: true,
      type: "struct",
      storageClassType: "AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs",
    },
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterReplicationSpecsRegionConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvancedClusterReplicationSpecsRegionConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyticsAutoScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsAutoScaling = this._analyticsAutoScaling?.internalValue;
    }
    if (this._analyticsSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsSpecs = this._analyticsSpecs?.internalValue;
    }
    if (this._autoScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaling = this._autoScaling?.internalValue;
    }
    if (this._backingProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingProviderName = this._backingProviderName;
    }
    if (this._electableSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.electableSpecs = this._electableSpecs?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    if (this._readOnlySpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlySpecs = this._readOnlySpecs?.internalValue;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterReplicationSpecsRegionConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyticsAutoScaling.internalValue = undefined;
      this._analyticsSpecs.internalValue = undefined;
      this._autoScaling.internalValue = undefined;
      this._backingProviderName = undefined;
      this._electableSpecs.internalValue = undefined;
      this._priority = undefined;
      this._providerName = undefined;
      this._readOnlySpecs.internalValue = undefined;
      this._regionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyticsAutoScaling.internalValue = value.analyticsAutoScaling;
      this._analyticsSpecs.internalValue = value.analyticsSpecs;
      this._autoScaling.internalValue = value.autoScaling;
      this._backingProviderName = value.backingProviderName;
      this._electableSpecs.internalValue = value.electableSpecs;
      this._priority = value.priority;
      this._providerName = value.providerName;
      this._readOnlySpecs.internalValue = value.readOnlySpecs;
      this._regionName = value.regionName;
    }
  }

  // analytics_auto_scaling - computed: true, optional: true, required: false
  private _analyticsAutoScaling = new AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference(this, "analytics_auto_scaling");
  public get analyticsAutoScaling() {
    return this._analyticsAutoScaling;
  }
  public putAnalyticsAutoScaling(value: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling) {
    this._analyticsAutoScaling.internalValue = value;
  }
  public resetAnalyticsAutoScaling() {
    this._analyticsAutoScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsAutoScalingInput() {
    return this._analyticsAutoScaling.internalValue;
  }

  // analytics_specs - computed: true, optional: true, required: false
  private _analyticsSpecs = new AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference(this, "analytics_specs");
  public get analyticsSpecs() {
    return this._analyticsSpecs;
  }
  public putAnalyticsSpecs(value: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs) {
    this._analyticsSpecs.internalValue = value;
  }
  public resetAnalyticsSpecs() {
    this._analyticsSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsSpecsInput() {
    return this._analyticsSpecs.internalValue;
  }

  // auto_scaling - computed: true, optional: true, required: false
  private _autoScaling = new AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference(this, "auto_scaling");
  public get autoScaling() {
    return this._autoScaling;
  }
  public putAutoScaling(value: AdvancedClusterReplicationSpecsRegionConfigsAutoScaling) {
    this._autoScaling.internalValue = value;
  }
  public resetAutoScaling() {
    this._autoScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingInput() {
    return this._autoScaling.internalValue;
  }

  // backing_provider_name - computed: false, optional: true, required: false
  private _backingProviderName?: string; 
  public get backingProviderName() {
    return this.getStringAttribute('backing_provider_name');
  }
  public set backingProviderName(value: string) {
    this._backingProviderName = value;
  }
  public resetBackingProviderName() {
    this._backingProviderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingProviderNameInput() {
    return this._backingProviderName;
  }

  // electable_specs - computed: true, optional: true, required: false
  private _electableSpecs = new AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference(this, "electable_specs");
  public get electableSpecs() {
    return this._electableSpecs;
  }
  public putElectableSpecs(value: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs) {
    this._electableSpecs.internalValue = value;
  }
  public resetElectableSpecs() {
    this._electableSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electableSpecsInput() {
    return this._electableSpecs.internalValue;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // read_only_specs - computed: true, optional: true, required: false
  private _readOnlySpecs = new AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference(this, "read_only_specs");
  public get readOnlySpecs() {
    return this._readOnlySpecs;
  }
  public putReadOnlySpecs(value: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs) {
    this._readOnlySpecs.internalValue = value;
  }
  public resetReadOnlySpecs() {
    this._readOnlySpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlySpecsInput() {
    return this._readOnlySpecs.internalValue;
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }
}

export class AdvancedClusterReplicationSpecsRegionConfigsList extends cdktf.ComplexList {
  public internalValue? : AdvancedClusterReplicationSpecsRegionConfigs[] | cdktf.IResolvable

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
  public get(index: number): AdvancedClusterReplicationSpecsRegionConfigsOutputReference {
    return new AdvancedClusterReplicationSpecsRegionConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvancedClusterReplicationSpecs {
  /**
  * Hardware specifications for nodes set for a given region. Each **regionConfigs** object describes the region's priority in elections and the number and type of MongoDB nodes that MongoDB Cloud deploys to the region. Each **regionConfigs** object must have either an **analyticsSpecs** object, **electableSpecs** object, or **readOnlySpecs** object. Tenant clusters only require **electableSpecs. Dedicated** clusters can specify any of these specifications, but must have at least one **electableSpecs** object within a **replicationSpec**.
  * 
  * **Example:**
  * 
  * If you set `"replicationSpecs[n].regionConfigs[m].analyticsSpecs.instanceSize" : "M30"`, set `"replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize" : `"M30"` if you have electable nodes and `"replicationSpecs[n].regionConfigs[m].readOnlySpecs.instanceSize" : `"M30"` if you have read-only nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#region_configs AdvancedCluster#region_configs}
  */
  readonly regionConfigs: AdvancedClusterReplicationSpecsRegionConfigs[] | cdktf.IResolvable;
  /**
  * Human-readable label that describes the zone this shard belongs to in a Global Cluster. Provide this value only if "clusterType" : "GEOSHARDED" but not "selfManagedSharding" : true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#zone_name AdvancedCluster#zone_name}
  */
  readonly zoneName?: string;
}

export function advancedClusterReplicationSpecsToTerraform(struct?: AdvancedClusterReplicationSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_configs: cdktf.listMapper(advancedClusterReplicationSpecsRegionConfigsToTerraform, false)(struct!.regionConfigs),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function advancedClusterReplicationSpecsToHclTerraform(struct?: AdvancedClusterReplicationSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_configs: {
      value: cdktf.listMapperHcl(advancedClusterReplicationSpecsRegionConfigsToHclTerraform, false)(struct!.regionConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "AdvancedClusterReplicationSpecsRegionConfigsList",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterReplicationSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvancedClusterReplicationSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionConfigs = this._regionConfigs?.internalValue;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterReplicationSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionConfigs.internalValue = undefined;
      this._zoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionConfigs.internalValue = value.regionConfigs;
      this._zoneName = value.zoneName;
    }
  }

  // container_id - computed: true, optional: false, required: false
  private _containerId = new cdktf.StringMap(this, "container_id");
  public get containerId() {
    return this._containerId;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // region_configs - computed: false, optional: false, required: true
  private _regionConfigs = new AdvancedClusterReplicationSpecsRegionConfigsList(this, "region_configs", false);
  public get regionConfigs() {
    return this._regionConfigs;
  }
  public putRegionConfigs(value: AdvancedClusterReplicationSpecsRegionConfigs[] | cdktf.IResolvable) {
    this._regionConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionConfigsInput() {
    return this._regionConfigs.internalValue;
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // zone_name - computed: true, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}

export class AdvancedClusterReplicationSpecsList extends cdktf.ComplexList {
  public internalValue? : AdvancedClusterReplicationSpecs[] | cdktf.IResolvable

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
  public get(index: number): AdvancedClusterReplicationSpecsOutputReference {
    return new AdvancedClusterReplicationSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvancedClusterTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#create AdvancedCluster#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#delete AdvancedCluster#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#update AdvancedCluster#update}
  */
  readonly update?: string;
}

export function advancedClusterTimeoutsToTerraform(struct?: AdvancedClusterTimeouts | cdktf.IResolvable): any {
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


export function advancedClusterTimeoutsToHclTerraform(struct?: AdvancedClusterTimeouts | cdktf.IResolvable): any {
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

export class AdvancedClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdvancedClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AdvancedClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster mongodbatlas_advanced_cluster}
*/
export class AdvancedCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_advanced_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdvancedCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdvancedCluster to import
  * @param importFromId The id of the existing AdvancedCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdvancedCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_advanced_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/advanced_cluster mongodbatlas_advanced_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdvancedClusterConfig
  */
  public constructor(scope: Construct, id: string, config: AdvancedClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_advanced_cluster',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptDataRisksAndForceReplicaSetReconfig = config.acceptDataRisksAndForceReplicaSetReconfig;
    this._advancedConfiguration.internalValue = config.advancedConfiguration;
    this._backupEnabled = config.backupEnabled;
    this._biConnectorConfig.internalValue = config.biConnectorConfig;
    this._clusterType = config.clusterType;
    this._configServerManagementMode = config.configServerManagementMode;
    this._deleteOnCreateTimeout = config.deleteOnCreateTimeout;
    this._encryptionAtRestProvider = config.encryptionAtRestProvider;
    this._globalClusterSelfManagedSharding = config.globalClusterSelfManagedSharding;
    this._labels = config.labels;
    this._mongoDbMajorVersion = config.mongoDbMajorVersion;
    this._name = config.name;
    this._paused = config.paused;
    this._pinnedFcv.internalValue = config.pinnedFcv;
    this._pitEnabled = config.pitEnabled;
    this._projectId = config.projectId;
    this._redactClientLogData = config.redactClientLogData;
    this._replicaSetScalingStrategy = config.replicaSetScalingStrategy;
    this._replicationSpecs.internalValue = config.replicationSpecs;
    this._retainBackupsEnabled = config.retainBackupsEnabled;
    this._rootCertType = config.rootCertType;
    this._tags = config.tags;
    this._terminationProtectionEnabled = config.terminationProtectionEnabled;
    this._timeouts.internalValue = config.timeouts;
    this._useEffectiveFields = config.useEffectiveFields;
    this._versionReleaseSystem = config.versionReleaseSystem;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_data_risks_and_force_replica_set_reconfig - computed: false, optional: true, required: false
  private _acceptDataRisksAndForceReplicaSetReconfig?: string; 
  public get acceptDataRisksAndForceReplicaSetReconfig() {
    return this.getStringAttribute('accept_data_risks_and_force_replica_set_reconfig');
  }
  public set acceptDataRisksAndForceReplicaSetReconfig(value: string) {
    this._acceptDataRisksAndForceReplicaSetReconfig = value;
  }
  public resetAcceptDataRisksAndForceReplicaSetReconfig() {
    this._acceptDataRisksAndForceReplicaSetReconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptDataRisksAndForceReplicaSetReconfigInput() {
    return this._acceptDataRisksAndForceReplicaSetReconfig;
  }

  // advanced_configuration - computed: true, optional: true, required: false
  private _advancedConfiguration = new AdvancedClusterAdvancedConfigurationOutputReference(this, "advanced_configuration");
  public get advancedConfiguration() {
    return this._advancedConfiguration;
  }
  public putAdvancedConfiguration(value: AdvancedClusterAdvancedConfiguration) {
    this._advancedConfiguration.internalValue = value;
  }
  public resetAdvancedConfiguration() {
    this._advancedConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigurationInput() {
    return this._advancedConfiguration.internalValue;
  }

  // backup_enabled - computed: true, optional: true, required: false
  private _backupEnabled?: boolean | cdktf.IResolvable; 
  public get backupEnabled() {
    return this.getBooleanAttribute('backup_enabled');
  }
  public set backupEnabled(value: boolean | cdktf.IResolvable) {
    this._backupEnabled = value;
  }
  public resetBackupEnabled() {
    this._backupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupEnabledInput() {
    return this._backupEnabled;
  }

  // bi_connector_config - computed: true, optional: true, required: false
  private _biConnectorConfig = new AdvancedClusterBiConnectorConfigOutputReference(this, "bi_connector_config");
  public get biConnectorConfig() {
    return this._biConnectorConfig;
  }
  public putBiConnectorConfig(value: AdvancedClusterBiConnectorConfig) {
    this._biConnectorConfig.internalValue = value;
  }
  public resetBiConnectorConfig() {
    this._biConnectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biConnectorConfigInput() {
    return this._biConnectorConfig.internalValue;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
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

  // config_server_management_mode - computed: true, optional: true, required: false
  private _configServerManagementMode?: string; 
  public get configServerManagementMode() {
    return this.getStringAttribute('config_server_management_mode');
  }
  public set configServerManagementMode(value: string) {
    this._configServerManagementMode = value;
  }
  public resetConfigServerManagementMode() {
    this._configServerManagementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configServerManagementModeInput() {
    return this._configServerManagementMode;
  }

  // config_server_type - computed: true, optional: false, required: false
  public get configServerType() {
    return this.getStringAttribute('config_server_type');
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new AdvancedClusterConnectionStringsOutputReference(this, "connection_strings");
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // delete_on_create_timeout - computed: true, optional: true, required: false
  private _deleteOnCreateTimeout?: boolean | cdktf.IResolvable; 
  public get deleteOnCreateTimeout() {
    return this.getBooleanAttribute('delete_on_create_timeout');
  }
  public set deleteOnCreateTimeout(value: boolean | cdktf.IResolvable) {
    this._deleteOnCreateTimeout = value;
  }
  public resetDeleteOnCreateTimeout() {
    this._deleteOnCreateTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnCreateTimeoutInput() {
    return this._deleteOnCreateTimeout;
  }

  // encryption_at_rest_provider - computed: true, optional: true, required: false
  private _encryptionAtRestProvider?: string; 
  public get encryptionAtRestProvider() {
    return this.getStringAttribute('encryption_at_rest_provider');
  }
  public set encryptionAtRestProvider(value: string) {
    this._encryptionAtRestProvider = value;
  }
  public resetEncryptionAtRestProvider() {
    this._encryptionAtRestProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtRestProviderInput() {
    return this._encryptionAtRestProvider;
  }

  // global_cluster_self_managed_sharding - computed: true, optional: true, required: false
  private _globalClusterSelfManagedSharding?: boolean | cdktf.IResolvable; 
  public get globalClusterSelfManagedSharding() {
    return this.getBooleanAttribute('global_cluster_self_managed_sharding');
  }
  public set globalClusterSelfManagedSharding(value: boolean | cdktf.IResolvable) {
    this._globalClusterSelfManagedSharding = value;
  }
  public resetGlobalClusterSelfManagedSharding() {
    this._globalClusterSelfManagedSharding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterSelfManagedShardingInput() {
    return this._globalClusterSelfManagedSharding;
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

  // mongo_db_major_version - computed: true, optional: true, required: false
  private _mongoDbMajorVersion?: string; 
  public get mongoDbMajorVersion() {
    return this.getStringAttribute('mongo_db_major_version');
  }
  public set mongoDbMajorVersion(value: string) {
    this._mongoDbMajorVersion = value;
  }
  public resetMongoDbMajorVersion() {
    this._mongoDbMajorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoDbMajorVersionInput() {
    return this._mongoDbMajorVersion;
  }

  // mongo_db_version - computed: true, optional: false, required: false
  public get mongoDbVersion() {
    return this.getStringAttribute('mongo_db_version');
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

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // pinned_fcv - computed: false, optional: true, required: false
  private _pinnedFcv = new AdvancedClusterPinnedFcvOutputReference(this, "pinned_fcv");
  public get pinnedFcv() {
    return this._pinnedFcv;
  }
  public putPinnedFcv(value: AdvancedClusterPinnedFcv) {
    this._pinnedFcv.internalValue = value;
  }
  public resetPinnedFcv() {
    this._pinnedFcv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedFcvInput() {
    return this._pinnedFcv.internalValue;
  }

  // pit_enabled - computed: true, optional: true, required: false
  private _pitEnabled?: boolean | cdktf.IResolvable; 
  public get pitEnabled() {
    return this.getBooleanAttribute('pit_enabled');
  }
  public set pitEnabled(value: boolean | cdktf.IResolvable) {
    this._pitEnabled = value;
  }
  public resetPitEnabled() {
    this._pitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pitEnabledInput() {
    return this._pitEnabled;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // redact_client_log_data - computed: true, optional: true, required: false
  private _redactClientLogData?: boolean | cdktf.IResolvable; 
  public get redactClientLogData() {
    return this.getBooleanAttribute('redact_client_log_data');
  }
  public set redactClientLogData(value: boolean | cdktf.IResolvable) {
    this._redactClientLogData = value;
  }
  public resetRedactClientLogData() {
    this._redactClientLogData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactClientLogDataInput() {
    return this._redactClientLogData;
  }

  // replica_set_scaling_strategy - computed: true, optional: true, required: false
  private _replicaSetScalingStrategy?: string; 
  public get replicaSetScalingStrategy() {
    return this.getStringAttribute('replica_set_scaling_strategy');
  }
  public set replicaSetScalingStrategy(value: string) {
    this._replicaSetScalingStrategy = value;
  }
  public resetReplicaSetScalingStrategy() {
    this._replicaSetScalingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSetScalingStrategyInput() {
    return this._replicaSetScalingStrategy;
  }

  // replication_specs - computed: false, optional: false, required: true
  private _replicationSpecs = new AdvancedClusterReplicationSpecsList(this, "replication_specs", false);
  public get replicationSpecs() {
    return this._replicationSpecs;
  }
  public putReplicationSpecs(value: AdvancedClusterReplicationSpecs[] | cdktf.IResolvable) {
    this._replicationSpecs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSpecsInput() {
    return this._replicationSpecs.internalValue;
  }

  // retain_backups_enabled - computed: false, optional: true, required: false
  private _retainBackupsEnabled?: boolean | cdktf.IResolvable; 
  public get retainBackupsEnabled() {
    return this.getBooleanAttribute('retain_backups_enabled');
  }
  public set retainBackupsEnabled(value: boolean | cdktf.IResolvable) {
    this._retainBackupsEnabled = value;
  }
  public resetRetainBackupsEnabled() {
    this._retainBackupsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainBackupsEnabledInput() {
    return this._retainBackupsEnabled;
  }

  // root_cert_type - computed: true, optional: true, required: false
  private _rootCertType?: string; 
  public get rootCertType() {
    return this.getStringAttribute('root_cert_type');
  }
  public set rootCertType(value: string) {
    this._rootCertType = value;
  }
  public resetRootCertType() {
    this._rootCertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCertTypeInput() {
    return this._rootCertType;
  }

  // state_name - computed: true, optional: false, required: false
  public get stateName() {
    return this.getStringAttribute('state_name');
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

  // termination_protection_enabled - computed: true, optional: true, required: false
  private _terminationProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get terminationProtectionEnabled() {
    return this.getBooleanAttribute('termination_protection_enabled');
  }
  public set terminationProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._terminationProtectionEnabled = value;
  }
  public resetTerminationProtectionEnabled() {
    this._terminationProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionEnabledInput() {
    return this._terminationProtectionEnabled;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AdvancedClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AdvancedClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // use_effective_fields - computed: false, optional: true, required: false
  private _useEffectiveFields?: boolean | cdktf.IResolvable; 
  public get useEffectiveFields() {
    return this.getBooleanAttribute('use_effective_fields');
  }
  public set useEffectiveFields(value: boolean | cdktf.IResolvable) {
    this._useEffectiveFields = value;
  }
  public resetUseEffectiveFields() {
    this._useEffectiveFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEffectiveFieldsInput() {
    return this._useEffectiveFields;
  }

  // version_release_system - computed: true, optional: true, required: false
  private _versionReleaseSystem?: string; 
  public get versionReleaseSystem() {
    return this.getStringAttribute('version_release_system');
  }
  public set versionReleaseSystem(value: string) {
    this._versionReleaseSystem = value;
  }
  public resetVersionReleaseSystem() {
    this._versionReleaseSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionReleaseSystemInput() {
    return this._versionReleaseSystem;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_data_risks_and_force_replica_set_reconfig: cdktf.stringToTerraform(this._acceptDataRisksAndForceReplicaSetReconfig),
      advanced_configuration: advancedClusterAdvancedConfigurationToTerraform(this._advancedConfiguration.internalValue),
      backup_enabled: cdktf.booleanToTerraform(this._backupEnabled),
      bi_connector_config: advancedClusterBiConnectorConfigToTerraform(this._biConnectorConfig.internalValue),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      config_server_management_mode: cdktf.stringToTerraform(this._configServerManagementMode),
      delete_on_create_timeout: cdktf.booleanToTerraform(this._deleteOnCreateTimeout),
      encryption_at_rest_provider: cdktf.stringToTerraform(this._encryptionAtRestProvider),
      global_cluster_self_managed_sharding: cdktf.booleanToTerraform(this._globalClusterSelfManagedSharding),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      mongo_db_major_version: cdktf.stringToTerraform(this._mongoDbMajorVersion),
      name: cdktf.stringToTerraform(this._name),
      paused: cdktf.booleanToTerraform(this._paused),
      pinned_fcv: advancedClusterPinnedFcvToTerraform(this._pinnedFcv.internalValue),
      pit_enabled: cdktf.booleanToTerraform(this._pitEnabled),
      project_id: cdktf.stringToTerraform(this._projectId),
      redact_client_log_data: cdktf.booleanToTerraform(this._redactClientLogData),
      replica_set_scaling_strategy: cdktf.stringToTerraform(this._replicaSetScalingStrategy),
      replication_specs: cdktf.listMapper(advancedClusterReplicationSpecsToTerraform, false)(this._replicationSpecs.internalValue),
      retain_backups_enabled: cdktf.booleanToTerraform(this._retainBackupsEnabled),
      root_cert_type: cdktf.stringToTerraform(this._rootCertType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      termination_protection_enabled: cdktf.booleanToTerraform(this._terminationProtectionEnabled),
      timeouts: advancedClusterTimeoutsToTerraform(this._timeouts.internalValue),
      use_effective_fields: cdktf.booleanToTerraform(this._useEffectiveFields),
      version_release_system: cdktf.stringToTerraform(this._versionReleaseSystem),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_data_risks_and_force_replica_set_reconfig: {
        value: cdktf.stringToHclTerraform(this._acceptDataRisksAndForceReplicaSetReconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_configuration: {
        value: advancedClusterAdvancedConfigurationToHclTerraform(this._advancedConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdvancedClusterAdvancedConfiguration",
      },
      backup_enabled: {
        value: cdktf.booleanToHclTerraform(this._backupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bi_connector_config: {
        value: advancedClusterBiConnectorConfigToHclTerraform(this._biConnectorConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdvancedClusterBiConnectorConfig",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_server_management_mode: {
        value: cdktf.stringToHclTerraform(this._configServerManagementMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_on_create_timeout: {
        value: cdktf.booleanToHclTerraform(this._deleteOnCreateTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_at_rest_provider: {
        value: cdktf.stringToHclTerraform(this._encryptionAtRestProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_cluster_self_managed_sharding: {
        value: cdktf.booleanToHclTerraform(this._globalClusterSelfManagedSharding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      mongo_db_major_version: {
        value: cdktf.stringToHclTerraform(this._mongoDbMajorVersion),
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
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pinned_fcv: {
        value: advancedClusterPinnedFcvToHclTerraform(this._pinnedFcv.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdvancedClusterPinnedFcv",
      },
      pit_enabled: {
        value: cdktf.booleanToHclTerraform(this._pitEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redact_client_log_data: {
        value: cdktf.booleanToHclTerraform(this._redactClientLogData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replica_set_scaling_strategy: {
        value: cdktf.stringToHclTerraform(this._replicaSetScalingStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_specs: {
        value: cdktf.listMapperHcl(advancedClusterReplicationSpecsToHclTerraform, false)(this._replicationSpecs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdvancedClusterReplicationSpecsList",
      },
      retain_backups_enabled: {
        value: cdktf.booleanToHclTerraform(this._retainBackupsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_cert_type: {
        value: cdktf.stringToHclTerraform(this._rootCertType),
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
      termination_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._terminationProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: advancedClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdvancedClusterTimeouts",
      },
      use_effective_fields: {
        value: cdktf.booleanToHclTerraform(this._useEffectiveFields),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version_release_system: {
        value: cdktf.stringToHclTerraform(this._versionReleaseSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
