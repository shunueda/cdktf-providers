// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpdbOperationalDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * CPU Architecture is used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#architecture OpdbOperationalDatabase#architecture}
  */
  readonly architecture?: string;
  /**
  * Attached storage for the worker nodes for AWS, Azure, and GCP cloud providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#attached_storage_for_workers OpdbOperationalDatabase#attached_storage_for_workers}
  */
  readonly attachedStorageForWorkers?: OpdbOperationalDatabaseAttachedStorageForWorkers;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#auto_scaling_parameters OpdbOperationalDatabase#auto_scaling_parameters}
  */
  readonly autoScalingParameters?: OpdbOperationalDatabaseAutoScalingParameters;
  /**
  * Optional tags to apply to launched infrastructure resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#custom_user_tags OpdbOperationalDatabase#custom_user_tags}
  */
  readonly customUserTags?: OpdbOperationalDatabaseCustomUserTags[] | cdktf.IResolvable;
  /**
  * The name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#database_name OpdbOperationalDatabase#database_name}
  */
  readonly databaseName: string;
  /**
  * Disable external database creation or not. It is only available in the BETA api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#disable_external_db OpdbOperationalDatabase#disable_external_db}
  */
  readonly disableExternalDb?: boolean | cdktf.IResolvable;
  /**
  * Disable OAuth Bearer (JWT) authentication scheme. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#disable_jwt_auth OpdbOperationalDatabase#disable_jwt_auth}
  */
  readonly disableJwtAuth?: boolean | cdktf.IResolvable;
  /**
  * Disable Kerberos authentication. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#disable_kerberos OpdbOperationalDatabase#disable_kerberos}
  */
  readonly disableKerberos?: boolean | cdktf.IResolvable;
  /**
  * Disable deployment to multiple availability zones or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#disable_multi_az OpdbOperationalDatabase#disable_multi_az}
  */
  readonly disableMultiAz?: boolean | cdktf.IResolvable;
  /**
  * To enable grafana server for the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#enable_grafana OpdbOperationalDatabase#enable_grafana}
  */
  readonly enableGrafana?: boolean | cdktf.IResolvable;
  /**
  * To enable the region canary for the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#enable_region_canary OpdbOperationalDatabase#enable_region_canary}
  */
  readonly enableRegionCanary?: boolean | cdktf.IResolvable;
  /**
  * The name of the environment where the cluster will belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#environment_name OpdbOperationalDatabase#environment_name}
  */
  readonly environmentName: string;
  /**
  * Details of an Image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#image OpdbOperationalDatabase#image}
  */
  readonly image?: OpdbOperationalDatabaseImage;
  /**
  * Java version. It is only available in the BETA api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#java_version OpdbOperationalDatabase#java_version}
  */
  readonly javaVersion?: number;
  /**
  * Number of edge nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#num_edge_nodes OpdbOperationalDatabase#num_edge_nodes}
  */
  readonly numEdgeNodes?: number;
  /**
  * Polling related configuration options that could specify various values that will be used during CDP resource creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#polling_options OpdbOperationalDatabase#polling_options}
  */
  readonly pollingOptions?: OpdbOperationalDatabasePollingOptions;
  /**
  * Custom recipes for the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#recipes OpdbOperationalDatabase#recipes}
  */
  readonly recipes?: OpdbOperationalDatabaseRecipes[] | cdktf.IResolvable;
  /**
  * Scale type, MICRO, LIGHT or HEAVY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#scale_type OpdbOperationalDatabase#scale_type}
  */
  readonly scaleType?: string;
  /**
  * Storage Location for OPDB. It is only available in the BETA api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#storage_location OpdbOperationalDatabase#storage_location}
  */
  readonly storageLocation?: string;
  /**
  * Storage type for clusters, CLOUD_WITH_EPHEMERAL, CLOUD or HDFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#storage_type OpdbOperationalDatabase#storage_type}
  */
  readonly storageType?: string;
  /**
  * ID of the subnet to deploy to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#subnet_id OpdbOperationalDatabase#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Specifies encryption key to encrypt volume for instance group. It is currently supported for AWS cloud provider only. It is only available in the BETA api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#volume_encryptions OpdbOperationalDatabase#volume_encryptions}
  */
  readonly volumeEncryptions?: OpdbOperationalDatabaseVolumeEncryptions[] | cdktf.IResolvable;
}
export interface OpdbOperationalDatabaseAttachedStorageForWorkers {
  /**
  * The number of Volumes. Default is 4. Valid Range: Minimum value of 1, maximum value 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#volume_count OpdbOperationalDatabase#volume_count}
  */
  readonly volumeCount?: number;
  /**
  * The target size of the volume, in GiB. Default is 2048.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#volume_size OpdbOperationalDatabase#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Volume Type. HDD - Hard disk drives (HDD) volume type. Default is HDD. SSD - Solid disk drives (SSD) volume type. LOCAL_SSD - Local SSD volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#volume_type OpdbOperationalDatabase#volume_type}
  */
  readonly volumeType?: string;
}

export function opdbOperationalDatabaseAttachedStorageForWorkersToTerraform(struct?: OpdbOperationalDatabaseAttachedStorageForWorkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_count: cdktf.numberToTerraform(struct!.volumeCount),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function opdbOperationalDatabaseAttachedStorageForWorkersToHclTerraform(struct?: OpdbOperationalDatabaseAttachedStorageForWorkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_count: {
      value: cdktf.numberToHclTerraform(struct!.volumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_size: {
      value: cdktf.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpdbOperationalDatabaseAttachedStorageForWorkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpdbOperationalDatabaseAttachedStorageForWorkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeCount = this._volumeCount;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpdbOperationalDatabaseAttachedStorageForWorkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeCount = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeCount = value.volumeCount;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // volume_count - computed: true, optional: true, required: false
  private _volumeCount?: number; 
  public get volumeCount() {
    return this.getNumberAttribute('volume_count');
  }
  public set volumeCount(value: number) {
    this._volumeCount = value;
  }
  public resetVolumeCount() {
    this._volumeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeCountInput() {
    return this._volumeCount;
  }

  // volume_size - computed: true, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface OpdbOperationalDatabaseAutoScalingParameters {
  /**
  * Period of metrics(in seconds) needs to be considered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#evaluation_period OpdbOperationalDatabase#evaluation_period}
  */
  readonly evaluationPeriod?: number;
  /**
  * The maximum number of compute nodes, as per these metrics, that can be scaled up to. It is only available in the BETA api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#max_compute_nodes_for_database OpdbOperationalDatabase#max_compute_nodes_for_database}
  */
  readonly maxComputeNodesForDatabase?: number;
  /**
  * The maximum percentage threshold for the CPU utilization of the worker nodes. The CPU utilization is obtained from the Cloudera Manager metric ‘cpu_percent’ across worker nodes. Set 100 or more to disable the CPU metrics. It is only available in the BETA api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#max_cpu_utilization OpdbOperationalDatabase#max_cpu_utilization}
  */
  readonly maxCpuUtilization?: number;
  /**
  * The maximum percentage of HDFS utilization for the database before we trigger the scaling. It is only available in the BETA api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#max_hdfs_usage_percentage OpdbOperationalDatabase#max_hdfs_usage_percentage}
  */
  readonly maxHdfsUsagePercentage?: number;
  /**
  * The maximum number of regions per region server. It is only available in the BETA api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#max_regions_per_region_server OpdbOperationalDatabase#max_regions_per_region_server}
  */
  readonly maxRegionsPerRegionServer?: number;
  /**
  * Maximum number of worker nodes as per this metrics can be scaled up to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#max_workers_for_database OpdbOperationalDatabase#max_workers_for_database}
  */
  readonly maxWorkersForDatabase?: number;
  /**
  * Maximum number of worker nodes as per this metrics can be scaled up to in one batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#max_workers_per_batch OpdbOperationalDatabase#max_workers_per_batch}
  */
  readonly maxWorkersPerBatch?: number;
  /**
  * The minimum number of compute nodes, as per these metrics, that can be scaled down to. It is only available in the BETA api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#min_compute_nodes_for_database OpdbOperationalDatabase#min_compute_nodes_for_database}
  */
  readonly minComputeNodesForDatabase?: number;
  /**
  * Minimum number of worker nodes as per this metrics can be scaled down to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#min_workers_for_database OpdbOperationalDatabase#min_workers_for_database}
  */
  readonly minWorkersForDatabase?: number;
  /**
  * The amount of block cache, in Gigabytes, which the database should have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#minimum_block_cache_gb OpdbOperationalDatabase#minimum_block_cache_gb}
  */
  readonly minimumBlockCacheGb?: number;
  /**
  * The target value of the metric a user expect to maintain for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#targeted_value_for_metric OpdbOperationalDatabase#targeted_value_for_metric}
  */
  readonly targetedValueForMetric?: number;
}

export function opdbOperationalDatabaseAutoScalingParametersToTerraform(struct?: OpdbOperationalDatabaseAutoScalingParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_period: cdktf.numberToTerraform(struct!.evaluationPeriod),
    max_compute_nodes_for_database: cdktf.numberToTerraform(struct!.maxComputeNodesForDatabase),
    max_cpu_utilization: cdktf.numberToTerraform(struct!.maxCpuUtilization),
    max_hdfs_usage_percentage: cdktf.numberToTerraform(struct!.maxHdfsUsagePercentage),
    max_regions_per_region_server: cdktf.numberToTerraform(struct!.maxRegionsPerRegionServer),
    max_workers_for_database: cdktf.numberToTerraform(struct!.maxWorkersForDatabase),
    max_workers_per_batch: cdktf.numberToTerraform(struct!.maxWorkersPerBatch),
    min_compute_nodes_for_database: cdktf.numberToTerraform(struct!.minComputeNodesForDatabase),
    min_workers_for_database: cdktf.numberToTerraform(struct!.minWorkersForDatabase),
    minimum_block_cache_gb: cdktf.numberToTerraform(struct!.minimumBlockCacheGb),
    targeted_value_for_metric: cdktf.numberToTerraform(struct!.targetedValueForMetric),
  }
}


export function opdbOperationalDatabaseAutoScalingParametersToHclTerraform(struct?: OpdbOperationalDatabaseAutoScalingParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_period: {
      value: cdktf.numberToHclTerraform(struct!.evaluationPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_compute_nodes_for_database: {
      value: cdktf.numberToHclTerraform(struct!.maxComputeNodesForDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_cpu_utilization: {
      value: cdktf.numberToHclTerraform(struct!.maxCpuUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_hdfs_usage_percentage: {
      value: cdktf.numberToHclTerraform(struct!.maxHdfsUsagePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_regions_per_region_server: {
      value: cdktf.numberToHclTerraform(struct!.maxRegionsPerRegionServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_workers_for_database: {
      value: cdktf.numberToHclTerraform(struct!.maxWorkersForDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_workers_per_batch: {
      value: cdktf.numberToHclTerraform(struct!.maxWorkersPerBatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_compute_nodes_for_database: {
      value: cdktf.numberToHclTerraform(struct!.minComputeNodesForDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_workers_for_database: {
      value: cdktf.numberToHclTerraform(struct!.minWorkersForDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_block_cache_gb: {
      value: cdktf.numberToHclTerraform(struct!.minimumBlockCacheGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    targeted_value_for_metric: {
      value: cdktf.numberToHclTerraform(struct!.targetedValueForMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpdbOperationalDatabaseAutoScalingParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpdbOperationalDatabaseAutoScalingParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriod = this._evaluationPeriod;
    }
    if (this._maxComputeNodesForDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxComputeNodesForDatabase = this._maxComputeNodesForDatabase;
    }
    if (this._maxCpuUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpuUtilization = this._maxCpuUtilization;
    }
    if (this._maxHdfsUsagePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHdfsUsagePercentage = this._maxHdfsUsagePercentage;
    }
    if (this._maxRegionsPerRegionServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRegionsPerRegionServer = this._maxRegionsPerRegionServer;
    }
    if (this._maxWorkersForDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkersForDatabase = this._maxWorkersForDatabase;
    }
    if (this._maxWorkersPerBatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkersPerBatch = this._maxWorkersPerBatch;
    }
    if (this._minComputeNodesForDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.minComputeNodesForDatabase = this._minComputeNodesForDatabase;
    }
    if (this._minWorkersForDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWorkersForDatabase = this._minWorkersForDatabase;
    }
    if (this._minimumBlockCacheGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumBlockCacheGb = this._minimumBlockCacheGb;
    }
    if (this._targetedValueForMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetedValueForMetric = this._targetedValueForMetric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpdbOperationalDatabaseAutoScalingParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationPeriod = undefined;
      this._maxComputeNodesForDatabase = undefined;
      this._maxCpuUtilization = undefined;
      this._maxHdfsUsagePercentage = undefined;
      this._maxRegionsPerRegionServer = undefined;
      this._maxWorkersForDatabase = undefined;
      this._maxWorkersPerBatch = undefined;
      this._minComputeNodesForDatabase = undefined;
      this._minWorkersForDatabase = undefined;
      this._minimumBlockCacheGb = undefined;
      this._targetedValueForMetric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationPeriod = value.evaluationPeriod;
      this._maxComputeNodesForDatabase = value.maxComputeNodesForDatabase;
      this._maxCpuUtilization = value.maxCpuUtilization;
      this._maxHdfsUsagePercentage = value.maxHdfsUsagePercentage;
      this._maxRegionsPerRegionServer = value.maxRegionsPerRegionServer;
      this._maxWorkersForDatabase = value.maxWorkersForDatabase;
      this._maxWorkersPerBatch = value.maxWorkersPerBatch;
      this._minComputeNodesForDatabase = value.minComputeNodesForDatabase;
      this._minWorkersForDatabase = value.minWorkersForDatabase;
      this._minimumBlockCacheGb = value.minimumBlockCacheGb;
      this._targetedValueForMetric = value.targetedValueForMetric;
    }
  }

  // evaluation_period - computed: false, optional: true, required: false
  private _evaluationPeriod?: number; 
  public get evaluationPeriod() {
    return this.getNumberAttribute('evaluation_period');
  }
  public set evaluationPeriod(value: number) {
    this._evaluationPeriod = value;
  }
  public resetEvaluationPeriod() {
    this._evaluationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodInput() {
    return this._evaluationPeriod;
  }

  // max_compute_nodes_for_database - computed: false, optional: true, required: false
  private _maxComputeNodesForDatabase?: number; 
  public get maxComputeNodesForDatabase() {
    return this.getNumberAttribute('max_compute_nodes_for_database');
  }
  public set maxComputeNodesForDatabase(value: number) {
    this._maxComputeNodesForDatabase = value;
  }
  public resetMaxComputeNodesForDatabase() {
    this._maxComputeNodesForDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxComputeNodesForDatabaseInput() {
    return this._maxComputeNodesForDatabase;
  }

  // max_cpu_utilization - computed: false, optional: true, required: false
  private _maxCpuUtilization?: number; 
  public get maxCpuUtilization() {
    return this.getNumberAttribute('max_cpu_utilization');
  }
  public set maxCpuUtilization(value: number) {
    this._maxCpuUtilization = value;
  }
  public resetMaxCpuUtilization() {
    this._maxCpuUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuUtilizationInput() {
    return this._maxCpuUtilization;
  }

  // max_hdfs_usage_percentage - computed: false, optional: true, required: false
  private _maxHdfsUsagePercentage?: number; 
  public get maxHdfsUsagePercentage() {
    return this.getNumberAttribute('max_hdfs_usage_percentage');
  }
  public set maxHdfsUsagePercentage(value: number) {
    this._maxHdfsUsagePercentage = value;
  }
  public resetMaxHdfsUsagePercentage() {
    this._maxHdfsUsagePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHdfsUsagePercentageInput() {
    return this._maxHdfsUsagePercentage;
  }

  // max_regions_per_region_server - computed: false, optional: true, required: false
  private _maxRegionsPerRegionServer?: number; 
  public get maxRegionsPerRegionServer() {
    return this.getNumberAttribute('max_regions_per_region_server');
  }
  public set maxRegionsPerRegionServer(value: number) {
    this._maxRegionsPerRegionServer = value;
  }
  public resetMaxRegionsPerRegionServer() {
    this._maxRegionsPerRegionServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRegionsPerRegionServerInput() {
    return this._maxRegionsPerRegionServer;
  }

  // max_workers_for_database - computed: false, optional: true, required: false
  private _maxWorkersForDatabase?: number; 
  public get maxWorkersForDatabase() {
    return this.getNumberAttribute('max_workers_for_database');
  }
  public set maxWorkersForDatabase(value: number) {
    this._maxWorkersForDatabase = value;
  }
  public resetMaxWorkersForDatabase() {
    this._maxWorkersForDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersForDatabaseInput() {
    return this._maxWorkersForDatabase;
  }

  // max_workers_per_batch - computed: false, optional: true, required: false
  private _maxWorkersPerBatch?: number; 
  public get maxWorkersPerBatch() {
    return this.getNumberAttribute('max_workers_per_batch');
  }
  public set maxWorkersPerBatch(value: number) {
    this._maxWorkersPerBatch = value;
  }
  public resetMaxWorkersPerBatch() {
    this._maxWorkersPerBatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersPerBatchInput() {
    return this._maxWorkersPerBatch;
  }

  // min_compute_nodes_for_database - computed: false, optional: true, required: false
  private _minComputeNodesForDatabase?: number; 
  public get minComputeNodesForDatabase() {
    return this.getNumberAttribute('min_compute_nodes_for_database');
  }
  public set minComputeNodesForDatabase(value: number) {
    this._minComputeNodesForDatabase = value;
  }
  public resetMinComputeNodesForDatabase() {
    this._minComputeNodesForDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minComputeNodesForDatabaseInput() {
    return this._minComputeNodesForDatabase;
  }

  // min_workers_for_database - computed: false, optional: true, required: false
  private _minWorkersForDatabase?: number; 
  public get minWorkersForDatabase() {
    return this.getNumberAttribute('min_workers_for_database');
  }
  public set minWorkersForDatabase(value: number) {
    this._minWorkersForDatabase = value;
  }
  public resetMinWorkersForDatabase() {
    this._minWorkersForDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkersForDatabaseInput() {
    return this._minWorkersForDatabase;
  }

  // minimum_block_cache_gb - computed: false, optional: true, required: false
  private _minimumBlockCacheGb?: number; 
  public get minimumBlockCacheGb() {
    return this.getNumberAttribute('minimum_block_cache_gb');
  }
  public set minimumBlockCacheGb(value: number) {
    this._minimumBlockCacheGb = value;
  }
  public resetMinimumBlockCacheGb() {
    this._minimumBlockCacheGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBlockCacheGbInput() {
    return this._minimumBlockCacheGb;
  }

  // targeted_value_for_metric - computed: false, optional: true, required: false
  private _targetedValueForMetric?: number; 
  public get targetedValueForMetric() {
    return this.getNumberAttribute('targeted_value_for_metric');
  }
  public set targetedValueForMetric(value: number) {
    this._targetedValueForMetric = value;
  }
  public resetTargetedValueForMetric() {
    this._targetedValueForMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetedValueForMetricInput() {
    return this._targetedValueForMetric;
  }
}
export interface OpdbOperationalDatabaseCustomUserTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#key OpdbOperationalDatabase#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#value OpdbOperationalDatabase#value}
  */
  readonly value: string;
}

export function opdbOperationalDatabaseCustomUserTagsToTerraform(struct?: OpdbOperationalDatabaseCustomUserTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function opdbOperationalDatabaseCustomUserTagsToHclTerraform(struct?: OpdbOperationalDatabaseCustomUserTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class OpdbOperationalDatabaseCustomUserTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpdbOperationalDatabaseCustomUserTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: OpdbOperationalDatabaseCustomUserTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class OpdbOperationalDatabaseCustomUserTagsList extends cdktf.ComplexList {
  public internalValue? : OpdbOperationalDatabaseCustomUserTags[] | cdktf.IResolvable

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
  public get(index: number): OpdbOperationalDatabaseCustomUserTagsOutputReference {
    return new OpdbOperationalDatabaseCustomUserTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpdbOperationalDatabaseImage {
  /**
  * Catalog name for the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#catalog OpdbOperationalDatabase#catalog}
  */
  readonly catalog: string;
  /**
  * Image ID for the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#id OpdbOperationalDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function opdbOperationalDatabaseImageToTerraform(struct?: OpdbOperationalDatabaseImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function opdbOperationalDatabaseImageToHclTerraform(struct?: OpdbOperationalDatabaseImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpdbOperationalDatabaseImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpdbOperationalDatabaseImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpdbOperationalDatabaseImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._id = value.id;
    }
  }

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface OpdbOperationalDatabasePollingOptions {
  /**
  * Boolean value that specifies if Terraform should wait for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#async OpdbOperationalDatabase#async}
  */
  readonly async?: boolean | cdktf.IResolvable;
  /**
  * Threshold value that specifies how many times should a single call failure happen before giving up the polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#call_failure_threshold OpdbOperationalDatabase#call_failure_threshold}
  */
  readonly callFailureThreshold?: number;
  /**
  * Timeout value in minutes that specifies for how long should the polling go for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#polling_timeout OpdbOperationalDatabase#polling_timeout}
  */
  readonly pollingTimeout?: number;
}

export function opdbOperationalDatabasePollingOptionsToTerraform(struct?: OpdbOperationalDatabasePollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    async: cdktf.booleanToTerraform(struct!.async),
    call_failure_threshold: cdktf.numberToTerraform(struct!.callFailureThreshold),
    polling_timeout: cdktf.numberToTerraform(struct!.pollingTimeout),
  }
}


export function opdbOperationalDatabasePollingOptionsToHclTerraform(struct?: OpdbOperationalDatabasePollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    async: {
      value: cdktf.booleanToHclTerraform(struct!.async),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    call_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.callFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.pollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpdbOperationalDatabasePollingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpdbOperationalDatabasePollingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._async !== undefined) {
      hasAnyValues = true;
      internalValueResult.async = this._async;
    }
    if (this._callFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.callFailureThreshold = this._callFailureThreshold;
    }
    if (this._pollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingTimeout = this._pollingTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpdbOperationalDatabasePollingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._async = undefined;
      this._callFailureThreshold = undefined;
      this._pollingTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._async = value.async;
      this._callFailureThreshold = value.callFailureThreshold;
      this._pollingTimeout = value.pollingTimeout;
    }
  }

  // async - computed: true, optional: true, required: false
  private _async?: boolean | cdktf.IResolvable; 
  public get async() {
    return this.getBooleanAttribute('async');
  }
  public set async(value: boolean | cdktf.IResolvable) {
    this._async = value;
  }
  public resetAsync() {
    this._async = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInput() {
    return this._async;
  }

  // call_failure_threshold - computed: true, optional: true, required: false
  private _callFailureThreshold?: number; 
  public get callFailureThreshold() {
    return this.getNumberAttribute('call_failure_threshold');
  }
  public set callFailureThreshold(value: number) {
    this._callFailureThreshold = value;
  }
  public resetCallFailureThreshold() {
    this._callFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callFailureThresholdInput() {
    return this._callFailureThreshold;
  }

  // polling_timeout - computed: true, optional: true, required: false
  private _pollingTimeout?: number; 
  public get pollingTimeout() {
    return this.getNumberAttribute('polling_timeout');
  }
  public set pollingTimeout(value: number) {
    this._pollingTimeout = value;
  }
  public resetPollingTimeout() {
    this._pollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingTimeoutInput() {
    return this._pollingTimeout;
  }
}
export interface OpdbOperationalDatabaseRecipes {
  /**
  * The name of the designated instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#instance_group OpdbOperationalDatabase#instance_group}
  */
  readonly instanceGroup: string;
  /**
  * The set of recipe names that are going to be applied on the given instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#names OpdbOperationalDatabase#names}
  */
  readonly names: string[];
}

export function opdbOperationalDatabaseRecipesToTerraform(struct?: OpdbOperationalDatabaseRecipes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_group: cdktf.stringToTerraform(struct!.instanceGroup),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function opdbOperationalDatabaseRecipesToHclTerraform(struct?: OpdbOperationalDatabaseRecipes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_group: {
      value: cdktf.stringToHclTerraform(struct!.instanceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpdbOperationalDatabaseRecipesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpdbOperationalDatabaseRecipes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroup = this._instanceGroup;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpdbOperationalDatabaseRecipes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceGroup = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceGroup = value.instanceGroup;
      this._names = value.names;
    }
  }

  // instance_group - computed: false, optional: false, required: true
  private _instanceGroup?: string; 
  public get instanceGroup() {
    return this.getStringAttribute('instance_group');
  }
  public set instanceGroup(value: string) {
    this._instanceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupInput() {
    return this._instanceGroup;
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}

export class OpdbOperationalDatabaseRecipesList extends cdktf.ComplexList {
  public internalValue? : OpdbOperationalDatabaseRecipes[] | cdktf.IResolvable

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
  public get(index: number): OpdbOperationalDatabaseRecipesOutputReference {
    return new OpdbOperationalDatabaseRecipesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpdbOperationalDatabaseVolumeEncryptions {
  /**
  * Encryption key to encrypt volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#encryption_key OpdbOperationalDatabase#encryption_key}
  */
  readonly encryptionKey: string;
  /**
  * The name of the designated instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#instance_group OpdbOperationalDatabase#instance_group}
  */
  readonly instanceGroup: string;
}

export function opdbOperationalDatabaseVolumeEncryptionsToTerraform(struct?: OpdbOperationalDatabaseVolumeEncryptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    instance_group: cdktf.stringToTerraform(struct!.instanceGroup),
  }
}


export function opdbOperationalDatabaseVolumeEncryptionsToHclTerraform(struct?: OpdbOperationalDatabaseVolumeEncryptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_group: {
      value: cdktf.stringToHclTerraform(struct!.instanceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpdbOperationalDatabaseVolumeEncryptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpdbOperationalDatabaseVolumeEncryptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    if (this._instanceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroup = this._instanceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpdbOperationalDatabaseVolumeEncryptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKey = undefined;
      this._instanceGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKey = value.encryptionKey;
      this._instanceGroup = value.instanceGroup;
    }
  }

  // encryption_key - computed: false, optional: false, required: true
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // instance_group - computed: false, optional: false, required: true
  private _instanceGroup?: string; 
  public get instanceGroup() {
    return this.getStringAttribute('instance_group');
  }
  public set instanceGroup(value: string) {
    this._instanceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupInput() {
    return this._instanceGroup;
  }
}

export class OpdbOperationalDatabaseVolumeEncryptionsList extends cdktf.ComplexList {
  public internalValue? : OpdbOperationalDatabaseVolumeEncryptions[] | cdktf.IResolvable

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
  public get(index: number): OpdbOperationalDatabaseVolumeEncryptionsOutputReference {
    return new OpdbOperationalDatabaseVolumeEncryptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database cdp_opdb_operational_database}
*/
export class OpdbOperationalDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_opdb_operational_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpdbOperationalDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpdbOperationalDatabase to import
  * @param importFromId The id of the existing OpdbOperationalDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpdbOperationalDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_opdb_operational_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/opdb_operational_database cdp_opdb_operational_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpdbOperationalDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: OpdbOperationalDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_opdb_operational_database',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._architecture = config.architecture;
    this._attachedStorageForWorkers.internalValue = config.attachedStorageForWorkers;
    this._autoScalingParameters.internalValue = config.autoScalingParameters;
    this._customUserTags.internalValue = config.customUserTags;
    this._databaseName = config.databaseName;
    this._disableExternalDb = config.disableExternalDb;
    this._disableJwtAuth = config.disableJwtAuth;
    this._disableKerberos = config.disableKerberos;
    this._disableMultiAz = config.disableMultiAz;
    this._enableGrafana = config.enableGrafana;
    this._enableRegionCanary = config.enableRegionCanary;
    this._environmentName = config.environmentName;
    this._image.internalValue = config.image;
    this._javaVersion = config.javaVersion;
    this._numEdgeNodes = config.numEdgeNodes;
    this._pollingOptions.internalValue = config.pollingOptions;
    this._recipes.internalValue = config.recipes;
    this._scaleType = config.scaleType;
    this._storageLocation = config.storageLocation;
    this._storageType = config.storageType;
    this._subnetId = config.subnetId;
    this._volumeEncryptions.internalValue = config.volumeEncryptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: true, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // attached_storage_for_workers - computed: false, optional: true, required: false
  private _attachedStorageForWorkers = new OpdbOperationalDatabaseAttachedStorageForWorkersOutputReference(this, "attached_storage_for_workers");
  public get attachedStorageForWorkers() {
    return this._attachedStorageForWorkers;
  }
  public putAttachedStorageForWorkers(value: OpdbOperationalDatabaseAttachedStorageForWorkers) {
    this._attachedStorageForWorkers.internalValue = value;
  }
  public resetAttachedStorageForWorkers() {
    this._attachedStorageForWorkers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedStorageForWorkersInput() {
    return this._attachedStorageForWorkers.internalValue;
  }

  // auto_scaling_parameters - computed: false, optional: true, required: false
  private _autoScalingParameters = new OpdbOperationalDatabaseAutoScalingParametersOutputReference(this, "auto_scaling_parameters");
  public get autoScalingParameters() {
    return this._autoScalingParameters;
  }
  public putAutoScalingParameters(value: OpdbOperationalDatabaseAutoScalingParameters) {
    this._autoScalingParameters.internalValue = value;
  }
  public resetAutoScalingParameters() {
    this._autoScalingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingParametersInput() {
    return this._autoScalingParameters.internalValue;
  }

  // crn - computed: true, optional: false, required: false
  public get crn() {
    return this.getStringAttribute('crn');
  }

  // custom_user_tags - computed: false, optional: true, required: false
  private _customUserTags = new OpdbOperationalDatabaseCustomUserTagsList(this, "custom_user_tags", true);
  public get customUserTags() {
    return this._customUserTags;
  }
  public putCustomUserTags(value: OpdbOperationalDatabaseCustomUserTags[] | cdktf.IResolvable) {
    this._customUserTags.internalValue = value;
  }
  public resetCustomUserTags() {
    this._customUserTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUserTagsInput() {
    return this._customUserTags.internalValue;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // disable_external_db - computed: false, optional: true, required: false
  private _disableExternalDb?: boolean | cdktf.IResolvable; 
  public get disableExternalDb() {
    return this.getBooleanAttribute('disable_external_db');
  }
  public set disableExternalDb(value: boolean | cdktf.IResolvable) {
    this._disableExternalDb = value;
  }
  public resetDisableExternalDb() {
    this._disableExternalDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableExternalDbInput() {
    return this._disableExternalDb;
  }

  // disable_jwt_auth - computed: false, optional: true, required: false
  private _disableJwtAuth?: boolean | cdktf.IResolvable; 
  public get disableJwtAuth() {
    return this.getBooleanAttribute('disable_jwt_auth');
  }
  public set disableJwtAuth(value: boolean | cdktf.IResolvable) {
    this._disableJwtAuth = value;
  }
  public resetDisableJwtAuth() {
    this._disableJwtAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableJwtAuthInput() {
    return this._disableJwtAuth;
  }

  // disable_kerberos - computed: false, optional: true, required: false
  private _disableKerberos?: boolean | cdktf.IResolvable; 
  public get disableKerberos() {
    return this.getBooleanAttribute('disable_kerberos');
  }
  public set disableKerberos(value: boolean | cdktf.IResolvable) {
    this._disableKerberos = value;
  }
  public resetDisableKerberos() {
    this._disableKerberos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableKerberosInput() {
    return this._disableKerberos;
  }

  // disable_multi_az - computed: false, optional: true, required: false
  private _disableMultiAz?: boolean | cdktf.IResolvable; 
  public get disableMultiAz() {
    return this.getBooleanAttribute('disable_multi_az');
  }
  public set disableMultiAz(value: boolean | cdktf.IResolvable) {
    this._disableMultiAz = value;
  }
  public resetDisableMultiAz() {
    this._disableMultiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMultiAzInput() {
    return this._disableMultiAz;
  }

  // enable_grafana - computed: false, optional: true, required: false
  private _enableGrafana?: boolean | cdktf.IResolvable; 
  public get enableGrafana() {
    return this.getBooleanAttribute('enable_grafana');
  }
  public set enableGrafana(value: boolean | cdktf.IResolvable) {
    this._enableGrafana = value;
  }
  public resetEnableGrafana() {
    this._enableGrafana = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGrafanaInput() {
    return this._enableGrafana;
  }

  // enable_region_canary - computed: false, optional: true, required: false
  private _enableRegionCanary?: boolean | cdktf.IResolvable; 
  public get enableRegionCanary() {
    return this.getBooleanAttribute('enable_region_canary');
  }
  public set enableRegionCanary(value: boolean | cdktf.IResolvable) {
    this._enableRegionCanary = value;
  }
  public resetEnableRegionCanary() {
    this._enableRegionCanary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRegionCanaryInput() {
    return this._enableRegionCanary;
  }

  // environment_name - computed: false, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
  }

  // image - computed: false, optional: true, required: false
  private _image = new OpdbOperationalDatabaseImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: OpdbOperationalDatabaseImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // java_version - computed: false, optional: true, required: false
  private _javaVersion?: number; 
  public get javaVersion() {
    return this.getNumberAttribute('java_version');
  }
  public set javaVersion(value: number) {
    this._javaVersion = value;
  }
  public resetJavaVersion() {
    this._javaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaVersionInput() {
    return this._javaVersion;
  }

  // num_edge_nodes - computed: true, optional: true, required: false
  private _numEdgeNodes?: number; 
  public get numEdgeNodes() {
    return this.getNumberAttribute('num_edge_nodes');
  }
  public set numEdgeNodes(value: number) {
    this._numEdgeNodes = value;
  }
  public resetNumEdgeNodes() {
    this._numEdgeNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numEdgeNodesInput() {
    return this._numEdgeNodes;
  }

  // polling_options - computed: false, optional: true, required: false
  private _pollingOptions = new OpdbOperationalDatabasePollingOptionsOutputReference(this, "polling_options");
  public get pollingOptions() {
    return this._pollingOptions;
  }
  public putPollingOptions(value: OpdbOperationalDatabasePollingOptions) {
    this._pollingOptions.internalValue = value;
  }
  public resetPollingOptions() {
    this._pollingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingOptionsInput() {
    return this._pollingOptions.internalValue;
  }

  // recipes - computed: false, optional: true, required: false
  private _recipes = new OpdbOperationalDatabaseRecipesList(this, "recipes", true);
  public get recipes() {
    return this._recipes;
  }
  public putRecipes(value: OpdbOperationalDatabaseRecipes[] | cdktf.IResolvable) {
    this._recipes.internalValue = value;
  }
  public resetRecipes() {
    this._recipes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipesInput() {
    return this._recipes.internalValue;
  }

  // scale_type - computed: true, optional: true, required: false
  private _scaleType?: string; 
  public get scaleType() {
    return this.getStringAttribute('scale_type');
  }
  public set scaleType(value: string) {
    this._scaleType = value;
  }
  public resetScaleType() {
    this._scaleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTypeInput() {
    return this._scaleType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_location - computed: true, optional: true, required: false
  private _storageLocation?: string; 
  public get storageLocation() {
    return this.getStringAttribute('storage_location');
  }
  public set storageLocation(value: string) {
    this._storageLocation = value;
  }
  public resetStorageLocation() {
    this._storageLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation;
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

  // volume_encryptions - computed: false, optional: true, required: false
  private _volumeEncryptions = new OpdbOperationalDatabaseVolumeEncryptionsList(this, "volume_encryptions", true);
  public get volumeEncryptions() {
    return this._volumeEncryptions;
  }
  public putVolumeEncryptions(value: OpdbOperationalDatabaseVolumeEncryptions[] | cdktf.IResolvable) {
    this._volumeEncryptions.internalValue = value;
  }
  public resetVolumeEncryptions() {
    this._volumeEncryptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeEncryptionsInput() {
    return this._volumeEncryptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      architecture: cdktf.stringToTerraform(this._architecture),
      attached_storage_for_workers: opdbOperationalDatabaseAttachedStorageForWorkersToTerraform(this._attachedStorageForWorkers.internalValue),
      auto_scaling_parameters: opdbOperationalDatabaseAutoScalingParametersToTerraform(this._autoScalingParameters.internalValue),
      custom_user_tags: cdktf.listMapper(opdbOperationalDatabaseCustomUserTagsToTerraform, false)(this._customUserTags.internalValue),
      database_name: cdktf.stringToTerraform(this._databaseName),
      disable_external_db: cdktf.booleanToTerraform(this._disableExternalDb),
      disable_jwt_auth: cdktf.booleanToTerraform(this._disableJwtAuth),
      disable_kerberos: cdktf.booleanToTerraform(this._disableKerberos),
      disable_multi_az: cdktf.booleanToTerraform(this._disableMultiAz),
      enable_grafana: cdktf.booleanToTerraform(this._enableGrafana),
      enable_region_canary: cdktf.booleanToTerraform(this._enableRegionCanary),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      image: opdbOperationalDatabaseImageToTerraform(this._image.internalValue),
      java_version: cdktf.numberToTerraform(this._javaVersion),
      num_edge_nodes: cdktf.numberToTerraform(this._numEdgeNodes),
      polling_options: opdbOperationalDatabasePollingOptionsToTerraform(this._pollingOptions.internalValue),
      recipes: cdktf.listMapper(opdbOperationalDatabaseRecipesToTerraform, false)(this._recipes.internalValue),
      scale_type: cdktf.stringToTerraform(this._scaleType),
      storage_location: cdktf.stringToTerraform(this._storageLocation),
      storage_type: cdktf.stringToTerraform(this._storageType),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      volume_encryptions: cdktf.listMapper(opdbOperationalDatabaseVolumeEncryptionsToTerraform, false)(this._volumeEncryptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      architecture: {
        value: cdktf.stringToHclTerraform(this._architecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attached_storage_for_workers: {
        value: opdbOperationalDatabaseAttachedStorageForWorkersToHclTerraform(this._attachedStorageForWorkers.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpdbOperationalDatabaseAttachedStorageForWorkers",
      },
      auto_scaling_parameters: {
        value: opdbOperationalDatabaseAutoScalingParametersToHclTerraform(this._autoScalingParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpdbOperationalDatabaseAutoScalingParameters",
      },
      custom_user_tags: {
        value: cdktf.listMapperHcl(opdbOperationalDatabaseCustomUserTagsToHclTerraform, false)(this._customUserTags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpdbOperationalDatabaseCustomUserTagsList",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_external_db: {
        value: cdktf.booleanToHclTerraform(this._disableExternalDb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_jwt_auth: {
        value: cdktf.booleanToHclTerraform(this._disableJwtAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_kerberos: {
        value: cdktf.booleanToHclTerraform(this._disableKerberos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_multi_az: {
        value: cdktf.booleanToHclTerraform(this._disableMultiAz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_grafana: {
        value: cdktf.booleanToHclTerraform(this._enableGrafana),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_region_canary: {
        value: cdktf.booleanToHclTerraform(this._enableRegionCanary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: opdbOperationalDatabaseImageToHclTerraform(this._image.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpdbOperationalDatabaseImage",
      },
      java_version: {
        value: cdktf.numberToHclTerraform(this._javaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_edge_nodes: {
        value: cdktf.numberToHclTerraform(this._numEdgeNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      polling_options: {
        value: opdbOperationalDatabasePollingOptionsToHclTerraform(this._pollingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpdbOperationalDatabasePollingOptions",
      },
      recipes: {
        value: cdktf.listMapperHcl(opdbOperationalDatabaseRecipesToHclTerraform, false)(this._recipes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpdbOperationalDatabaseRecipesList",
      },
      scale_type: {
        value: cdktf.stringToHclTerraform(this._scaleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_location: {
        value: cdktf.stringToHclTerraform(this._storageLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      volume_encryptions: {
        value: cdktf.listMapperHcl(opdbOperationalDatabaseVolumeEncryptionsToHclTerraform, false)(this._volumeEncryptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpdbOperationalDatabaseVolumeEncryptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
