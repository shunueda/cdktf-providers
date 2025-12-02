// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMdbKafkaClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#cluster_id DataYandexMdbKafkaCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#deletion_protection DataYandexMdbKafkaCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#folder_id DataYandexMdbKafkaCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#id DataYandexMdbKafkaCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#name DataYandexMdbKafkaCluster#name}
  */
  readonly name?: string;
  /**
  * The list of VPC subnets identifiers which resource is attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#subnet_ids DataYandexMdbKafkaCluster#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#config DataYandexMdbKafkaCluster#config}
  */
  readonly config?: DataYandexMdbKafkaClusterConfigA;
  /**
  * topic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#topic DataYandexMdbKafkaCluster#topic}
  */
  readonly topic?: DataYandexMdbKafkaClusterTopic[] | cdktf.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#user DataYandexMdbKafkaCluster#user}
  */
  readonly user?: DataYandexMdbKafkaClusterUser[] | cdktf.IResolvable;
}
export interface DataYandexMdbKafkaClusterHost {
}

export function dataYandexMdbKafkaClusterHostToTerraform(struct?: DataYandexMdbKafkaClusterHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbKafkaClusterHostToHclTerraform(struct?: DataYandexMdbKafkaClusterHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbKafkaClusterHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaClusterHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataYandexMdbKafkaClusterHostList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbKafkaClusterHostOutputReference {
    return new DataYandexMdbKafkaClusterHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbKafkaClusterMaintenanceWindow {
}

export function dataYandexMdbKafkaClusterMaintenanceWindowToTerraform(struct?: DataYandexMdbKafkaClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbKafkaClusterMaintenanceWindowToHclTerraform(struct?: DataYandexMdbKafkaClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbKafkaClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaClusterMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataYandexMdbKafkaClusterMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbKafkaClusterMaintenanceWindowOutputReference {
    return new DataYandexMdbKafkaClusterMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbKafkaClusterConfigAccess {
  /**
  * Allow access for [DataTransfer](https://yandex.cloud/services/data-transfer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#data_transfer DataYandexMdbKafkaCluster#data_transfer}
  */
  readonly dataTransfer?: boolean | cdktf.IResolvable;
}

export function dataYandexMdbKafkaClusterConfigAccessToTerraform(struct?: DataYandexMdbKafkaClusterConfigAccessOutputReference | DataYandexMdbKafkaClusterConfigAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_transfer: cdktf.booleanToTerraform(struct!.dataTransfer),
  }
}


export function dataYandexMdbKafkaClusterConfigAccessToHclTerraform(struct?: DataYandexMdbKafkaClusterConfigAccessOutputReference | DataYandexMdbKafkaClusterConfigAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.dataTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterConfigAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransfer = this._dataTransfer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataTransfer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataTransfer = value.dataTransfer;
    }
  }

  // data_transfer - computed: false, optional: true, required: false
  private _dataTransfer?: boolean | cdktf.IResolvable; 
  public get dataTransfer() {
    return this.getBooleanAttribute('data_transfer');
  }
  public set dataTransfer(value: boolean | cdktf.IResolvable) {
    this._dataTransfer = value;
  }
  public resetDataTransfer() {
    this._dataTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferInput() {
    return this._dataTransfer;
  }
}
export interface DataYandexMdbKafkaClusterConfigDiskSizeAutoscaling {
  /**
  * Maximum possible size of disk in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#disk_size_limit DataYandexMdbKafkaCluster#disk_size_limit}
  */
  readonly diskSizeLimit: number;
  /**
  * Percent of disk utilization. Disk will autoscale immediately, if this threshold reached. Value is between 0 and 100. Default value is 0 (autoscaling disabled). Must be not less then 'planned_usage_threshold' value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#emergency_usage_threshold DataYandexMdbKafkaCluster#emergency_usage_threshold}
  */
  readonly emergencyUsageThreshold?: number;
  /**
  * Percent of disk utilization. During maintenance disk will autoscale, if this threshold reached. Value is between 0 and 100. Default value is 0 (autoscaling disabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#planned_usage_threshold DataYandexMdbKafkaCluster#planned_usage_threshold}
  */
  readonly plannedUsageThreshold?: number;
}

export function dataYandexMdbKafkaClusterConfigDiskSizeAutoscalingToTerraform(struct?: DataYandexMdbKafkaClusterConfigDiskSizeAutoscalingOutputReference | DataYandexMdbKafkaClusterConfigDiskSizeAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_limit: cdktf.numberToTerraform(struct!.diskSizeLimit),
    emergency_usage_threshold: cdktf.numberToTerraform(struct!.emergencyUsageThreshold),
    planned_usage_threshold: cdktf.numberToTerraform(struct!.plannedUsageThreshold),
  }
}


export function dataYandexMdbKafkaClusterConfigDiskSizeAutoscalingToHclTerraform(struct?: DataYandexMdbKafkaClusterConfigDiskSizeAutoscalingOutputReference | DataYandexMdbKafkaClusterConfigDiskSizeAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_limit: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    emergency_usage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.emergencyUsageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    planned_usage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.plannedUsageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterConfigDiskSizeAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigDiskSizeAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeLimit = this._diskSizeLimit;
    }
    if (this._emergencyUsageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.emergencyUsageThreshold = this._emergencyUsageThreshold;
    }
    if (this._plannedUsageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.plannedUsageThreshold = this._plannedUsageThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigDiskSizeAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSizeLimit = undefined;
      this._emergencyUsageThreshold = undefined;
      this._plannedUsageThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSizeLimit = value.diskSizeLimit;
      this._emergencyUsageThreshold = value.emergencyUsageThreshold;
      this._plannedUsageThreshold = value.plannedUsageThreshold;
    }
  }

  // disk_size_limit - computed: false, optional: false, required: true
  private _diskSizeLimit?: number; 
  public get diskSizeLimit() {
    return this.getNumberAttribute('disk_size_limit');
  }
  public set diskSizeLimit(value: number) {
    this._diskSizeLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeLimitInput() {
    return this._diskSizeLimit;
  }

  // emergency_usage_threshold - computed: false, optional: true, required: false
  private _emergencyUsageThreshold?: number; 
  public get emergencyUsageThreshold() {
    return this.getNumberAttribute('emergency_usage_threshold');
  }
  public set emergencyUsageThreshold(value: number) {
    this._emergencyUsageThreshold = value;
  }
  public resetEmergencyUsageThreshold() {
    this._emergencyUsageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyUsageThresholdInput() {
    return this._emergencyUsageThreshold;
  }

  // planned_usage_threshold - computed: false, optional: true, required: false
  private _plannedUsageThreshold?: number; 
  public get plannedUsageThreshold() {
    return this.getNumberAttribute('planned_usage_threshold');
  }
  public set plannedUsageThreshold(value: number) {
    this._plannedUsageThreshold = value;
  }
  public resetPlannedUsageThreshold() {
    this._plannedUsageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plannedUsageThresholdInput() {
    return this._plannedUsageThreshold;
  }
}
export interface DataYandexMdbKafkaClusterConfigKafkaKafkaConfig {
  /**
  * Enable auto creation of topic on the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#auto_create_topics_enable DataYandexMdbKafkaCluster#auto_create_topics_enable}
  */
  readonly autoCreateTopicsEnable?: boolean | cdktf.IResolvable;
  /**
  * Compression type of kafka topics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#compression_type DataYandexMdbKafkaCluster#compression_type}
  */
  readonly compressionType?: string;
  /**
  * The replication factor for automatically created topics, and for topics created with -1 as the replication factor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#default_replication_factor DataYandexMdbKafkaCluster#default_replication_factor}
  */
  readonly defaultReplicationFactor?: string;
  /**
  * The number of messages accumulated on a log partition before messages are flushed to disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#log_flush_interval_messages DataYandexMdbKafkaCluster#log_flush_interval_messages}
  */
  readonly logFlushIntervalMessages?: string;
  /**
  * The maximum time in ms that a message in any topic is kept in memory before flushed to disk. If not set, the value in log.flush.scheduler.interval.ms is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#log_flush_interval_ms DataYandexMdbKafkaCluster#log_flush_interval_ms}
  */
  readonly logFlushIntervalMs?: string;
  /**
  * The frequency in ms that the log flusher checks whether any log needs to be flushed to disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#log_flush_scheduler_interval_ms DataYandexMdbKafkaCluster#log_flush_scheduler_interval_ms}
  */
  readonly logFlushSchedulerIntervalMs?: string;
  /**
  * Should pre allocate file when create new segment?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#log_preallocate DataYandexMdbKafkaCluster#log_preallocate}
  */
  readonly logPreallocate?: boolean | cdktf.IResolvable;
  /**
  * The maximum size of the log before deleting it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#log_retention_bytes DataYandexMdbKafkaCluster#log_retention_bytes}
  */
  readonly logRetentionBytes?: string;
  /**
  * The number of hours to keep a log file before deleting it (in hours), tertiary to log.retention.ms property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#log_retention_hours DataYandexMdbKafkaCluster#log_retention_hours}
  */
  readonly logRetentionHours?: string;
  /**
  * The number of minutes to keep a log file before deleting it (in minutes), secondary to log.retention.ms property. If not set, the value in log.retention.hours is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#log_retention_minutes DataYandexMdbKafkaCluster#log_retention_minutes}
  */
  readonly logRetentionMinutes?: string;
  /**
  * The number of milliseconds to keep a log file before deleting it (in milliseconds), If not set, the value in log.retention.minutes is used. If set to -1, no time limit is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#log_retention_ms DataYandexMdbKafkaCluster#log_retention_ms}
  */
  readonly logRetentionMs?: string;
  /**
  * The maximum size of a single log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#log_segment_bytes DataYandexMdbKafkaCluster#log_segment_bytes}
  */
  readonly logSegmentBytes?: string;
  /**
  * The largest record batch size allowed by Kafka (after compression if compression is enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#message_max_bytes DataYandexMdbKafkaCluster#message_max_bytes}
  */
  readonly messageMaxBytes?: string;
  /**
  * The default number of log partitions per topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#num_partitions DataYandexMdbKafkaCluster#num_partitions}
  */
  readonly numPartitions?: string;
  /**
  * For subscribed consumers, committed offset of a specific partition will be expired and discarded after this period of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#offsets_retention_minutes DataYandexMdbKafkaCluster#offsets_retention_minutes}
  */
  readonly offsetsRetentionMinutes?: string;
  /**
  * The number of bytes of messages to attempt to fetch for each partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#replica_fetch_max_bytes DataYandexMdbKafkaCluster#replica_fetch_max_bytes}
  */
  readonly replicaFetchMaxBytes?: string;
  /**
  * The list of SASL mechanisms enabled in the Kafka server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#sasl_enabled_mechanisms DataYandexMdbKafkaCluster#sasl_enabled_mechanisms}
  */
  readonly saslEnabledMechanisms?: string[];
  /**
  * The SO_RCVBUF buffer of the socket server sockets. If the value is -1, the OS default will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#socket_receive_buffer_bytes DataYandexMdbKafkaCluster#socket_receive_buffer_bytes}
  */
  readonly socketReceiveBufferBytes?: string;
  /**
  * The SO_SNDBUF buffer of the socket server sockets. If the value is -1, the OS default will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#socket_send_buffer_bytes DataYandexMdbKafkaCluster#socket_send_buffer_bytes}
  */
  readonly socketSendBufferBytes?: string;
  /**
  * A list of cipher suites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#ssl_cipher_suites DataYandexMdbKafkaCluster#ssl_cipher_suites}
  */
  readonly sslCipherSuites?: string[];
}

export function dataYandexMdbKafkaClusterConfigKafkaKafkaConfigToTerraform(struct?: DataYandexMdbKafkaClusterConfigKafkaKafkaConfigOutputReference | DataYandexMdbKafkaClusterConfigKafkaKafkaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_create_topics_enable: cdktf.booleanToTerraform(struct!.autoCreateTopicsEnable),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    default_replication_factor: cdktf.stringToTerraform(struct!.defaultReplicationFactor),
    log_flush_interval_messages: cdktf.stringToTerraform(struct!.logFlushIntervalMessages),
    log_flush_interval_ms: cdktf.stringToTerraform(struct!.logFlushIntervalMs),
    log_flush_scheduler_interval_ms: cdktf.stringToTerraform(struct!.logFlushSchedulerIntervalMs),
    log_preallocate: cdktf.booleanToTerraform(struct!.logPreallocate),
    log_retention_bytes: cdktf.stringToTerraform(struct!.logRetentionBytes),
    log_retention_hours: cdktf.stringToTerraform(struct!.logRetentionHours),
    log_retention_minutes: cdktf.stringToTerraform(struct!.logRetentionMinutes),
    log_retention_ms: cdktf.stringToTerraform(struct!.logRetentionMs),
    log_segment_bytes: cdktf.stringToTerraform(struct!.logSegmentBytes),
    message_max_bytes: cdktf.stringToTerraform(struct!.messageMaxBytes),
    num_partitions: cdktf.stringToTerraform(struct!.numPartitions),
    offsets_retention_minutes: cdktf.stringToTerraform(struct!.offsetsRetentionMinutes),
    replica_fetch_max_bytes: cdktf.stringToTerraform(struct!.replicaFetchMaxBytes),
    sasl_enabled_mechanisms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.saslEnabledMechanisms),
    socket_receive_buffer_bytes: cdktf.stringToTerraform(struct!.socketReceiveBufferBytes),
    socket_send_buffer_bytes: cdktf.stringToTerraform(struct!.socketSendBufferBytes),
    ssl_cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sslCipherSuites),
  }
}


export function dataYandexMdbKafkaClusterConfigKafkaKafkaConfigToHclTerraform(struct?: DataYandexMdbKafkaClusterConfigKafkaKafkaConfigOutputReference | DataYandexMdbKafkaClusterConfigKafkaKafkaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_create_topics_enable: {
      value: cdktf.booleanToHclTerraform(struct!.autoCreateTopicsEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_replication_factor: {
      value: cdktf.stringToHclTerraform(struct!.defaultReplicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_flush_interval_messages: {
      value: cdktf.stringToHclTerraform(struct!.logFlushIntervalMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_flush_interval_ms: {
      value: cdktf.stringToHclTerraform(struct!.logFlushIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_flush_scheduler_interval_ms: {
      value: cdktf.stringToHclTerraform(struct!.logFlushSchedulerIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_preallocate: {
      value: cdktf.booleanToHclTerraform(struct!.logPreallocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_retention_bytes: {
      value: cdktf.stringToHclTerraform(struct!.logRetentionBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_retention_hours: {
      value: cdktf.stringToHclTerraform(struct!.logRetentionHours),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_retention_minutes: {
      value: cdktf.stringToHclTerraform(struct!.logRetentionMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_retention_ms: {
      value: cdktf.stringToHclTerraform(struct!.logRetentionMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_segment_bytes: {
      value: cdktf.stringToHclTerraform(struct!.logSegmentBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_max_bytes: {
      value: cdktf.stringToHclTerraform(struct!.messageMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_partitions: {
      value: cdktf.stringToHclTerraform(struct!.numPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offsets_retention_minutes: {
      value: cdktf.stringToHclTerraform(struct!.offsetsRetentionMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_fetch_max_bytes: {
      value: cdktf.stringToHclTerraform(struct!.replicaFetchMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_enabled_mechanisms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.saslEnabledMechanisms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    socket_receive_buffer_bytes: {
      value: cdktf.stringToHclTerraform(struct!.socketReceiveBufferBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socket_send_buffer_bytes: {
      value: cdktf.stringToHclTerraform(struct!.socketSendBufferBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sslCipherSuites),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterConfigKafkaKafkaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigKafkaKafkaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCreateTopicsEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateTopicsEnable = this._autoCreateTopicsEnable;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._defaultReplicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultReplicationFactor = this._defaultReplicationFactor;
    }
    if (this._logFlushIntervalMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFlushIntervalMessages = this._logFlushIntervalMessages;
    }
    if (this._logFlushIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFlushIntervalMs = this._logFlushIntervalMs;
    }
    if (this._logFlushSchedulerIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFlushSchedulerIntervalMs = this._logFlushSchedulerIntervalMs;
    }
    if (this._logPreallocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPreallocate = this._logPreallocate;
    }
    if (this._logRetentionBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionBytes = this._logRetentionBytes;
    }
    if (this._logRetentionHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionHours = this._logRetentionHours;
    }
    if (this._logRetentionMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionMinutes = this._logRetentionMinutes;
    }
    if (this._logRetentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionMs = this._logRetentionMs;
    }
    if (this._logSegmentBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSegmentBytes = this._logSegmentBytes;
    }
    if (this._messageMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageMaxBytes = this._messageMaxBytes;
    }
    if (this._numPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPartitions = this._numPartitions;
    }
    if (this._offsetsRetentionMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetsRetentionMinutes = this._offsetsRetentionMinutes;
    }
    if (this._replicaFetchMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaFetchMaxBytes = this._replicaFetchMaxBytes;
    }
    if (this._saslEnabledMechanisms !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslEnabledMechanisms = this._saslEnabledMechanisms;
    }
    if (this._socketReceiveBufferBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketReceiveBufferBytes = this._socketReceiveBufferBytes;
    }
    if (this._socketSendBufferBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketSendBufferBytes = this._socketSendBufferBytes;
    }
    if (this._sslCipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCipherSuites = this._sslCipherSuites;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigKafkaKafkaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoCreateTopicsEnable = undefined;
      this._compressionType = undefined;
      this._defaultReplicationFactor = undefined;
      this._logFlushIntervalMessages = undefined;
      this._logFlushIntervalMs = undefined;
      this._logFlushSchedulerIntervalMs = undefined;
      this._logPreallocate = undefined;
      this._logRetentionBytes = undefined;
      this._logRetentionHours = undefined;
      this._logRetentionMinutes = undefined;
      this._logRetentionMs = undefined;
      this._logSegmentBytes = undefined;
      this._messageMaxBytes = undefined;
      this._numPartitions = undefined;
      this._offsetsRetentionMinutes = undefined;
      this._replicaFetchMaxBytes = undefined;
      this._saslEnabledMechanisms = undefined;
      this._socketReceiveBufferBytes = undefined;
      this._socketSendBufferBytes = undefined;
      this._sslCipherSuites = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoCreateTopicsEnable = value.autoCreateTopicsEnable;
      this._compressionType = value.compressionType;
      this._defaultReplicationFactor = value.defaultReplicationFactor;
      this._logFlushIntervalMessages = value.logFlushIntervalMessages;
      this._logFlushIntervalMs = value.logFlushIntervalMs;
      this._logFlushSchedulerIntervalMs = value.logFlushSchedulerIntervalMs;
      this._logPreallocate = value.logPreallocate;
      this._logRetentionBytes = value.logRetentionBytes;
      this._logRetentionHours = value.logRetentionHours;
      this._logRetentionMinutes = value.logRetentionMinutes;
      this._logRetentionMs = value.logRetentionMs;
      this._logSegmentBytes = value.logSegmentBytes;
      this._messageMaxBytes = value.messageMaxBytes;
      this._numPartitions = value.numPartitions;
      this._offsetsRetentionMinutes = value.offsetsRetentionMinutes;
      this._replicaFetchMaxBytes = value.replicaFetchMaxBytes;
      this._saslEnabledMechanisms = value.saslEnabledMechanisms;
      this._socketReceiveBufferBytes = value.socketReceiveBufferBytes;
      this._socketSendBufferBytes = value.socketSendBufferBytes;
      this._sslCipherSuites = value.sslCipherSuites;
    }
  }

  // auto_create_topics_enable - computed: false, optional: true, required: false
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

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // default_replication_factor - computed: false, optional: true, required: false
  private _defaultReplicationFactor?: string; 
  public get defaultReplicationFactor() {
    return this.getStringAttribute('default_replication_factor');
  }
  public set defaultReplicationFactor(value: string) {
    this._defaultReplicationFactor = value;
  }
  public resetDefaultReplicationFactor() {
    this._defaultReplicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultReplicationFactorInput() {
    return this._defaultReplicationFactor;
  }

  // log_flush_interval_messages - computed: false, optional: true, required: false
  private _logFlushIntervalMessages?: string; 
  public get logFlushIntervalMessages() {
    return this.getStringAttribute('log_flush_interval_messages');
  }
  public set logFlushIntervalMessages(value: string) {
    this._logFlushIntervalMessages = value;
  }
  public resetLogFlushIntervalMessages() {
    this._logFlushIntervalMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFlushIntervalMessagesInput() {
    return this._logFlushIntervalMessages;
  }

  // log_flush_interval_ms - computed: false, optional: true, required: false
  private _logFlushIntervalMs?: string; 
  public get logFlushIntervalMs() {
    return this.getStringAttribute('log_flush_interval_ms');
  }
  public set logFlushIntervalMs(value: string) {
    this._logFlushIntervalMs = value;
  }
  public resetLogFlushIntervalMs() {
    this._logFlushIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFlushIntervalMsInput() {
    return this._logFlushIntervalMs;
  }

  // log_flush_scheduler_interval_ms - computed: false, optional: true, required: false
  private _logFlushSchedulerIntervalMs?: string; 
  public get logFlushSchedulerIntervalMs() {
    return this.getStringAttribute('log_flush_scheduler_interval_ms');
  }
  public set logFlushSchedulerIntervalMs(value: string) {
    this._logFlushSchedulerIntervalMs = value;
  }
  public resetLogFlushSchedulerIntervalMs() {
    this._logFlushSchedulerIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFlushSchedulerIntervalMsInput() {
    return this._logFlushSchedulerIntervalMs;
  }

  // log_preallocate - computed: false, optional: true, required: false
  private _logPreallocate?: boolean | cdktf.IResolvable; 
  public get logPreallocate() {
    return this.getBooleanAttribute('log_preallocate');
  }
  public set logPreallocate(value: boolean | cdktf.IResolvable) {
    this._logPreallocate = value;
  }
  public resetLogPreallocate() {
    this._logPreallocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPreallocateInput() {
    return this._logPreallocate;
  }

  // log_retention_bytes - computed: false, optional: true, required: false
  private _logRetentionBytes?: string; 
  public get logRetentionBytes() {
    return this.getStringAttribute('log_retention_bytes');
  }
  public set logRetentionBytes(value: string) {
    this._logRetentionBytes = value;
  }
  public resetLogRetentionBytes() {
    this._logRetentionBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionBytesInput() {
    return this._logRetentionBytes;
  }

  // log_retention_hours - computed: false, optional: true, required: false
  private _logRetentionHours?: string; 
  public get logRetentionHours() {
    return this.getStringAttribute('log_retention_hours');
  }
  public set logRetentionHours(value: string) {
    this._logRetentionHours = value;
  }
  public resetLogRetentionHours() {
    this._logRetentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionHoursInput() {
    return this._logRetentionHours;
  }

  // log_retention_minutes - computed: false, optional: true, required: false
  private _logRetentionMinutes?: string; 
  public get logRetentionMinutes() {
    return this.getStringAttribute('log_retention_minutes');
  }
  public set logRetentionMinutes(value: string) {
    this._logRetentionMinutes = value;
  }
  public resetLogRetentionMinutes() {
    this._logRetentionMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionMinutesInput() {
    return this._logRetentionMinutes;
  }

  // log_retention_ms - computed: false, optional: true, required: false
  private _logRetentionMs?: string; 
  public get logRetentionMs() {
    return this.getStringAttribute('log_retention_ms');
  }
  public set logRetentionMs(value: string) {
    this._logRetentionMs = value;
  }
  public resetLogRetentionMs() {
    this._logRetentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionMsInput() {
    return this._logRetentionMs;
  }

  // log_segment_bytes - computed: false, optional: true, required: false
  private _logSegmentBytes?: string; 
  public get logSegmentBytes() {
    return this.getStringAttribute('log_segment_bytes');
  }
  public set logSegmentBytes(value: string) {
    this._logSegmentBytes = value;
  }
  public resetLogSegmentBytes() {
    this._logSegmentBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSegmentBytesInput() {
    return this._logSegmentBytes;
  }

  // message_max_bytes - computed: false, optional: true, required: false
  private _messageMaxBytes?: string; 
  public get messageMaxBytes() {
    return this.getStringAttribute('message_max_bytes');
  }
  public set messageMaxBytes(value: string) {
    this._messageMaxBytes = value;
  }
  public resetMessageMaxBytes() {
    this._messageMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageMaxBytesInput() {
    return this._messageMaxBytes;
  }

  // num_partitions - computed: false, optional: true, required: false
  private _numPartitions?: string; 
  public get numPartitions() {
    return this.getStringAttribute('num_partitions');
  }
  public set numPartitions(value: string) {
    this._numPartitions = value;
  }
  public resetNumPartitions() {
    this._numPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPartitionsInput() {
    return this._numPartitions;
  }

  // offsets_retention_minutes - computed: false, optional: true, required: false
  private _offsetsRetentionMinutes?: string; 
  public get offsetsRetentionMinutes() {
    return this.getStringAttribute('offsets_retention_minutes');
  }
  public set offsetsRetentionMinutes(value: string) {
    this._offsetsRetentionMinutes = value;
  }
  public resetOffsetsRetentionMinutes() {
    this._offsetsRetentionMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetsRetentionMinutesInput() {
    return this._offsetsRetentionMinutes;
  }

  // replica_fetch_max_bytes - computed: false, optional: true, required: false
  private _replicaFetchMaxBytes?: string; 
  public get replicaFetchMaxBytes() {
    return this.getStringAttribute('replica_fetch_max_bytes');
  }
  public set replicaFetchMaxBytes(value: string) {
    this._replicaFetchMaxBytes = value;
  }
  public resetReplicaFetchMaxBytes() {
    this._replicaFetchMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaFetchMaxBytesInput() {
    return this._replicaFetchMaxBytes;
  }

  // sasl_enabled_mechanisms - computed: false, optional: true, required: false
  private _saslEnabledMechanisms?: string[]; 
  public get saslEnabledMechanisms() {
    return cdktf.Fn.tolist(this.getListAttribute('sasl_enabled_mechanisms'));
  }
  public set saslEnabledMechanisms(value: string[]) {
    this._saslEnabledMechanisms = value;
  }
  public resetSaslEnabledMechanisms() {
    this._saslEnabledMechanisms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslEnabledMechanismsInput() {
    return this._saslEnabledMechanisms;
  }

  // socket_receive_buffer_bytes - computed: false, optional: true, required: false
  private _socketReceiveBufferBytes?: string; 
  public get socketReceiveBufferBytes() {
    return this.getStringAttribute('socket_receive_buffer_bytes');
  }
  public set socketReceiveBufferBytes(value: string) {
    this._socketReceiveBufferBytes = value;
  }
  public resetSocketReceiveBufferBytes() {
    this._socketReceiveBufferBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketReceiveBufferBytesInput() {
    return this._socketReceiveBufferBytes;
  }

  // socket_send_buffer_bytes - computed: false, optional: true, required: false
  private _socketSendBufferBytes?: string; 
  public get socketSendBufferBytes() {
    return this.getStringAttribute('socket_send_buffer_bytes');
  }
  public set socketSendBufferBytes(value: string) {
    this._socketSendBufferBytes = value;
  }
  public resetSocketSendBufferBytes() {
    this._socketSendBufferBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketSendBufferBytesInput() {
    return this._socketSendBufferBytes;
  }

  // ssl_cipher_suites - computed: false, optional: true, required: false
  private _sslCipherSuites?: string[]; 
  public get sslCipherSuites() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_cipher_suites'));
  }
  public set sslCipherSuites(value: string[]) {
    this._sslCipherSuites = value;
  }
  public resetSslCipherSuites() {
    this._sslCipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCipherSuitesInput() {
    return this._sslCipherSuites;
  }
}
export interface DataYandexMdbKafkaClusterConfigKafkaResources {
  /**
  * Volume of the storage available to a Kafka host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#disk_size DataYandexMdbKafkaCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Type of the storage of Kafka hosts. For more information see [the official documentation](https://yandex.cloud/docs/managed-kafka/concepts/storage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#disk_type_id DataYandexMdbKafkaCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * The ID of the preset for computational resources available to a Kafka host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-kafka/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#resource_preset_id DataYandexMdbKafkaCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function dataYandexMdbKafkaClusterConfigKafkaResourcesToTerraform(struct?: DataYandexMdbKafkaClusterConfigKafkaResourcesOutputReference | DataYandexMdbKafkaClusterConfigKafkaResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function dataYandexMdbKafkaClusterConfigKafkaResourcesToHclTerraform(struct?: DataYandexMdbKafkaClusterConfigKafkaResourcesOutputReference | DataYandexMdbKafkaClusterConfigKafkaResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type_id: {
      value: cdktf.stringToHclTerraform(struct!.diskTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterConfigKafkaResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigKafkaResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigKafkaResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: false, optional: false, required: true
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface DataYandexMdbKafkaClusterConfigKafka {
  /**
  * kafka_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#kafka_config DataYandexMdbKafkaCluster#kafka_config}
  */
  readonly kafkaConfig?: DataYandexMdbKafkaClusterConfigKafkaKafkaConfig;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#resources DataYandexMdbKafkaCluster#resources}
  */
  readonly resources: DataYandexMdbKafkaClusterConfigKafkaResources;
}

export function dataYandexMdbKafkaClusterConfigKafkaToTerraform(struct?: DataYandexMdbKafkaClusterConfigKafkaOutputReference | DataYandexMdbKafkaClusterConfigKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka_config: dataYandexMdbKafkaClusterConfigKafkaKafkaConfigToTerraform(struct!.kafkaConfig),
    resources: dataYandexMdbKafkaClusterConfigKafkaResourcesToTerraform(struct!.resources),
  }
}


export function dataYandexMdbKafkaClusterConfigKafkaToHclTerraform(struct?: DataYandexMdbKafkaClusterConfigKafkaOutputReference | DataYandexMdbKafkaClusterConfigKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kafka_config: {
      value: dataYandexMdbKafkaClusterConfigKafkaKafkaConfigToHclTerraform(struct!.kafkaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbKafkaClusterConfigKafkaKafkaConfigList",
    },
    resources: {
      value: dataYandexMdbKafkaClusterConfigKafkaResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbKafkaClusterConfigKafkaResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterConfigKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafkaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConfig = this._kafkaConfig?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kafkaConfig.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kafkaConfig.internalValue = value.kafkaConfig;
      this._resources.internalValue = value.resources;
    }
  }

  // kafka_config - computed: false, optional: true, required: false
  private _kafkaConfig = new DataYandexMdbKafkaClusterConfigKafkaKafkaConfigOutputReference(this, "kafka_config");
  public get kafkaConfig() {
    return this._kafkaConfig;
  }
  public putKafkaConfig(value: DataYandexMdbKafkaClusterConfigKafkaKafkaConfig) {
    this._kafkaConfig.internalValue = value;
  }
  public resetKafkaConfig() {
    this._kafkaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConfigInput() {
    return this._kafkaConfig.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new DataYandexMdbKafkaClusterConfigKafkaResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataYandexMdbKafkaClusterConfigKafkaResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataYandexMdbKafkaClusterConfigKafkaUi {
  /**
  * Enables KAFKA UI on cluster. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#enabled DataYandexMdbKafkaCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataYandexMdbKafkaClusterConfigKafkaUiToTerraform(struct?: DataYandexMdbKafkaClusterConfigKafkaUiOutputReference | DataYandexMdbKafkaClusterConfigKafkaUi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataYandexMdbKafkaClusterConfigKafkaUiToHclTerraform(struct?: DataYandexMdbKafkaClusterConfigKafkaUiOutputReference | DataYandexMdbKafkaClusterConfigKafkaUi): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterConfigKafkaUiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigKafkaUi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigKafkaUi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
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
}
export interface DataYandexMdbKafkaClusterConfigKraftResources {
  /**
  * Volume of the storage available to a KRaft-controller host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#disk_size DataYandexMdbKafkaCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the storage of KRaft-controller hosts. For more information see [the official documentation](https://yandex.cloud/docs/managed-kafka/concepts/storage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#disk_type_id DataYandexMdbKafkaCluster#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * The ID of the preset for computational resources available to a KRaft-controller host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-kafka/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#resource_preset_id DataYandexMdbKafkaCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function dataYandexMdbKafkaClusterConfigKraftResourcesToTerraform(struct?: DataYandexMdbKafkaClusterConfigKraftResourcesOutputReference | DataYandexMdbKafkaClusterConfigKraftResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function dataYandexMdbKafkaClusterConfigKraftResourcesToHclTerraform(struct?: DataYandexMdbKafkaClusterConfigKraftResourcesOutputReference | DataYandexMdbKafkaClusterConfigKraftResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type_id: {
      value: cdktf.stringToHclTerraform(struct!.diskTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterConfigKraftResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigKraftResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigKraftResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: true, optional: true, required: false
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  public resetDiskTypeId() {
    this._diskTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: true, optional: true, required: false
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  public resetResourcePresetId() {
    this._resourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface DataYandexMdbKafkaClusterConfigKraft {
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#resources DataYandexMdbKafkaCluster#resources}
  */
  readonly resources?: DataYandexMdbKafkaClusterConfigKraftResources;
}

export function dataYandexMdbKafkaClusterConfigKraftToTerraform(struct?: DataYandexMdbKafkaClusterConfigKraftOutputReference | DataYandexMdbKafkaClusterConfigKraft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: dataYandexMdbKafkaClusterConfigKraftResourcesToTerraform(struct!.resources),
  }
}


export function dataYandexMdbKafkaClusterConfigKraftToHclTerraform(struct?: DataYandexMdbKafkaClusterConfigKraftOutputReference | DataYandexMdbKafkaClusterConfigKraft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: dataYandexMdbKafkaClusterConfigKraftResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbKafkaClusterConfigKraftResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterConfigKraftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigKraft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigKraft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataYandexMdbKafkaClusterConfigKraftResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataYandexMdbKafkaClusterConfigKraftResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataYandexMdbKafkaClusterConfigRestApi {
  /**
  * Enables REST API on cluster. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#enabled DataYandexMdbKafkaCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataYandexMdbKafkaClusterConfigRestApiToTerraform(struct?: DataYandexMdbKafkaClusterConfigRestApiOutputReference | DataYandexMdbKafkaClusterConfigRestApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataYandexMdbKafkaClusterConfigRestApiToHclTerraform(struct?: DataYandexMdbKafkaClusterConfigRestApiOutputReference | DataYandexMdbKafkaClusterConfigRestApi): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterConfigRestApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigRestApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigRestApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
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
}
export interface DataYandexMdbKafkaClusterConfigZookeeperResources {
  /**
  * Volume of the storage available to a ZooKeeper host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#disk_size DataYandexMdbKafkaCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the storage of ZooKeeper hosts. For more information see [the official documentation](https://yandex.cloud/docs/managed-kafka/concepts/storage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#disk_type_id DataYandexMdbKafkaCluster#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * The ID of the preset for computational resources available to a ZooKeeper host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-kafka/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#resource_preset_id DataYandexMdbKafkaCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function dataYandexMdbKafkaClusterConfigZookeeperResourcesToTerraform(struct?: DataYandexMdbKafkaClusterConfigZookeeperResourcesOutputReference | DataYandexMdbKafkaClusterConfigZookeeperResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function dataYandexMdbKafkaClusterConfigZookeeperResourcesToHclTerraform(struct?: DataYandexMdbKafkaClusterConfigZookeeperResourcesOutputReference | DataYandexMdbKafkaClusterConfigZookeeperResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type_id: {
      value: cdktf.stringToHclTerraform(struct!.diskTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterConfigZookeeperResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigZookeeperResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigZookeeperResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: true, optional: true, required: false
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  public resetDiskTypeId() {
    this._diskTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: true, optional: true, required: false
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  public resetResourcePresetId() {
    this._resourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface DataYandexMdbKafkaClusterConfigZookeeper {
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#resources DataYandexMdbKafkaCluster#resources}
  */
  readonly resources?: DataYandexMdbKafkaClusterConfigZookeeperResources;
}

export function dataYandexMdbKafkaClusterConfigZookeeperToTerraform(struct?: DataYandexMdbKafkaClusterConfigZookeeperOutputReference | DataYandexMdbKafkaClusterConfigZookeeper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: dataYandexMdbKafkaClusterConfigZookeeperResourcesToTerraform(struct!.resources),
  }
}


export function dataYandexMdbKafkaClusterConfigZookeeperToHclTerraform(struct?: DataYandexMdbKafkaClusterConfigZookeeperOutputReference | DataYandexMdbKafkaClusterConfigZookeeper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: dataYandexMdbKafkaClusterConfigZookeeperResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbKafkaClusterConfigZookeeperResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterConfigZookeeperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigZookeeper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigZookeeper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataYandexMdbKafkaClusterConfigZookeeperResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataYandexMdbKafkaClusterConfigZookeeperResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataYandexMdbKafkaClusterConfigA {
  /**
  * Determines whether each broker will be assigned a public IP address. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#assign_public_ip DataYandexMdbKafkaCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Count of brokers per availability zone. The default is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#brokers_count DataYandexMdbKafkaCluster#brokers_count}
  */
  readonly brokersCount?: number;
  /**
  * Enables managed schema registry on cluster. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#schema_registry DataYandexMdbKafkaCluster#schema_registry}
  */
  readonly schemaRegistry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#unmanaged_topics DataYandexMdbKafkaCluster#unmanaged_topics}
  */
  readonly unmanagedTopics?: boolean | cdktf.IResolvable;
  /**
  * Version of the Kafka server software.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#version DataYandexMdbKafkaCluster#version}
  */
  readonly version: string;
  /**
  * List of availability zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#zones DataYandexMdbKafkaCluster#zones}
  */
  readonly zones: string[];
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#access DataYandexMdbKafkaCluster#access}
  */
  readonly access?: DataYandexMdbKafkaClusterConfigAccess;
  /**
  * disk_size_autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#disk_size_autoscaling DataYandexMdbKafkaCluster#disk_size_autoscaling}
  */
  readonly diskSizeAutoscaling?: DataYandexMdbKafkaClusterConfigDiskSizeAutoscaling;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#kafka DataYandexMdbKafkaCluster#kafka}
  */
  readonly kafka: DataYandexMdbKafkaClusterConfigKafka;
  /**
  * kafka_ui block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#kafka_ui DataYandexMdbKafkaCluster#kafka_ui}
  */
  readonly kafkaUi?: DataYandexMdbKafkaClusterConfigKafkaUi;
  /**
  * kraft block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#kraft DataYandexMdbKafkaCluster#kraft}
  */
  readonly kraft?: DataYandexMdbKafkaClusterConfigKraft;
  /**
  * rest_api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#rest_api DataYandexMdbKafkaCluster#rest_api}
  */
  readonly restApi?: DataYandexMdbKafkaClusterConfigRestApi;
  /**
  * zookeeper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#zookeeper DataYandexMdbKafkaCluster#zookeeper}
  */
  readonly zookeeper?: DataYandexMdbKafkaClusterConfigZookeeper;
}

export function dataYandexMdbKafkaClusterConfigAToTerraform(struct?: DataYandexMdbKafkaClusterConfigAOutputReference | DataYandexMdbKafkaClusterConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    brokers_count: cdktf.numberToTerraform(struct!.brokersCount),
    schema_registry: cdktf.booleanToTerraform(struct!.schemaRegistry),
    unmanaged_topics: cdktf.booleanToTerraform(struct!.unmanagedTopics),
    version: cdktf.stringToTerraform(struct!.version),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
    access: dataYandexMdbKafkaClusterConfigAccessToTerraform(struct!.access),
    disk_size_autoscaling: dataYandexMdbKafkaClusterConfigDiskSizeAutoscalingToTerraform(struct!.diskSizeAutoscaling),
    kafka: dataYandexMdbKafkaClusterConfigKafkaToTerraform(struct!.kafka),
    kafka_ui: dataYandexMdbKafkaClusterConfigKafkaUiToTerraform(struct!.kafkaUi),
    kraft: dataYandexMdbKafkaClusterConfigKraftToTerraform(struct!.kraft),
    rest_api: dataYandexMdbKafkaClusterConfigRestApiToTerraform(struct!.restApi),
    zookeeper: dataYandexMdbKafkaClusterConfigZookeeperToTerraform(struct!.zookeeper),
  }
}


export function dataYandexMdbKafkaClusterConfigAToHclTerraform(struct?: DataYandexMdbKafkaClusterConfigAOutputReference | DataYandexMdbKafkaClusterConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    brokers_count: {
      value: cdktf.numberToHclTerraform(struct!.brokersCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schema_registry: {
      value: cdktf.booleanToHclTerraform(struct!.schemaRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unmanaged_topics: {
      value: cdktf.booleanToHclTerraform(struct!.unmanagedTopics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access: {
      value: dataYandexMdbKafkaClusterConfigAccessToHclTerraform(struct!.access),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbKafkaClusterConfigAccessList",
    },
    disk_size_autoscaling: {
      value: dataYandexMdbKafkaClusterConfigDiskSizeAutoscalingToHclTerraform(struct!.diskSizeAutoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbKafkaClusterConfigDiskSizeAutoscalingList",
    },
    kafka: {
      value: dataYandexMdbKafkaClusterConfigKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbKafkaClusterConfigKafkaList",
    },
    kafka_ui: {
      value: dataYandexMdbKafkaClusterConfigKafkaUiToHclTerraform(struct!.kafkaUi),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbKafkaClusterConfigKafkaUiList",
    },
    kraft: {
      value: dataYandexMdbKafkaClusterConfigKraftToHclTerraform(struct!.kraft),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbKafkaClusterConfigKraftList",
    },
    rest_api: {
      value: dataYandexMdbKafkaClusterConfigRestApiToHclTerraform(struct!.restApi),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbKafkaClusterConfigRestApiList",
    },
    zookeeper: {
      value: dataYandexMdbKafkaClusterConfigZookeeperToHclTerraform(struct!.zookeeper),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbKafkaClusterConfigZookeeperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._brokersCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokersCount = this._brokersCount;
    }
    if (this._schemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistry = this._schemaRegistry;
    }
    if (this._unmanagedTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmanagedTopics = this._unmanagedTopics;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    if (this._diskSizeAutoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeAutoscaling = this._diskSizeAutoscaling?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._kafkaUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaUi = this._kafkaUi?.internalValue;
    }
    if (this._kraft?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kraft = this._kraft?.internalValue;
    }
    if (this._restApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restApi = this._restApi?.internalValue;
    }
    if (this._zookeeper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeper = this._zookeeper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignPublicIp = undefined;
      this._brokersCount = undefined;
      this._schemaRegistry = undefined;
      this._unmanagedTopics = undefined;
      this._version = undefined;
      this._zones = undefined;
      this._access.internalValue = undefined;
      this._diskSizeAutoscaling.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._kafkaUi.internalValue = undefined;
      this._kraft.internalValue = undefined;
      this._restApi.internalValue = undefined;
      this._zookeeper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignPublicIp = value.assignPublicIp;
      this._brokersCount = value.brokersCount;
      this._schemaRegistry = value.schemaRegistry;
      this._unmanagedTopics = value.unmanagedTopics;
      this._version = value.version;
      this._zones = value.zones;
      this._access.internalValue = value.access;
      this._diskSizeAutoscaling.internalValue = value.diskSizeAutoscaling;
      this._kafka.internalValue = value.kafka;
      this._kafkaUi.internalValue = value.kafkaUi;
      this._kraft.internalValue = value.kraft;
      this._restApi.internalValue = value.restApi;
      this._zookeeper.internalValue = value.zookeeper;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // brokers_count - computed: false, optional: true, required: false
  private _brokersCount?: number; 
  public get brokersCount() {
    return this.getNumberAttribute('brokers_count');
  }
  public set brokersCount(value: number) {
    this._brokersCount = value;
  }
  public resetBrokersCount() {
    this._brokersCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokersCountInput() {
    return this._brokersCount;
  }

  // patch_version - computed: true, optional: false, required: false
  public get patchVersion() {
    return this.getStringAttribute('patch_version');
  }

  // schema_registry - computed: false, optional: true, required: false
  private _schemaRegistry?: boolean | cdktf.IResolvable; 
  public get schemaRegistry() {
    return this.getBooleanAttribute('schema_registry');
  }
  public set schemaRegistry(value: boolean | cdktf.IResolvable) {
    this._schemaRegistry = value;
  }
  public resetSchemaRegistry() {
    this._schemaRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryInput() {
    return this._schemaRegistry;
  }

  // unmanaged_topics - computed: false, optional: true, required: false
  private _unmanagedTopics?: boolean | cdktf.IResolvable; 
  public get unmanagedTopics() {
    return this.getBooleanAttribute('unmanaged_topics');
  }
  public set unmanagedTopics(value: boolean | cdktf.IResolvable) {
    this._unmanagedTopics = value;
  }
  public resetUnmanagedTopics() {
    this._unmanagedTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmanagedTopicsInput() {
    return this._unmanagedTopics;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // zones - computed: false, optional: false, required: true
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // access - computed: false, optional: true, required: false
  private _access = new DataYandexMdbKafkaClusterConfigAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: DataYandexMdbKafkaClusterConfigAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // disk_size_autoscaling - computed: false, optional: true, required: false
  private _diskSizeAutoscaling = new DataYandexMdbKafkaClusterConfigDiskSizeAutoscalingOutputReference(this, "disk_size_autoscaling");
  public get diskSizeAutoscaling() {
    return this._diskSizeAutoscaling;
  }
  public putDiskSizeAutoscaling(value: DataYandexMdbKafkaClusterConfigDiskSizeAutoscaling) {
    this._diskSizeAutoscaling.internalValue = value;
  }
  public resetDiskSizeAutoscaling() {
    this._diskSizeAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeAutoscalingInput() {
    return this._diskSizeAutoscaling.internalValue;
  }

  // kafka - computed: false, optional: false, required: true
  private _kafka = new DataYandexMdbKafkaClusterConfigKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataYandexMdbKafkaClusterConfigKafka) {
    this._kafka.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // kafka_ui - computed: false, optional: true, required: false
  private _kafkaUi = new DataYandexMdbKafkaClusterConfigKafkaUiOutputReference(this, "kafka_ui");
  public get kafkaUi() {
    return this._kafkaUi;
  }
  public putKafkaUi(value: DataYandexMdbKafkaClusterConfigKafkaUi) {
    this._kafkaUi.internalValue = value;
  }
  public resetKafkaUi() {
    this._kafkaUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaUiInput() {
    return this._kafkaUi.internalValue;
  }

  // kraft - computed: false, optional: true, required: false
  private _kraft = new DataYandexMdbKafkaClusterConfigKraftOutputReference(this, "kraft");
  public get kraft() {
    return this._kraft;
  }
  public putKraft(value: DataYandexMdbKafkaClusterConfigKraft) {
    this._kraft.internalValue = value;
  }
  public resetKraft() {
    this._kraft.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kraftInput() {
    return this._kraft.internalValue;
  }

  // rest_api - computed: false, optional: true, required: false
  private _restApi = new DataYandexMdbKafkaClusterConfigRestApiOutputReference(this, "rest_api");
  public get restApi() {
    return this._restApi;
  }
  public putRestApi(value: DataYandexMdbKafkaClusterConfigRestApi) {
    this._restApi.internalValue = value;
  }
  public resetRestApi() {
    this._restApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiInput() {
    return this._restApi.internalValue;
  }

  // zookeeper - computed: false, optional: true, required: false
  private _zookeeper = new DataYandexMdbKafkaClusterConfigZookeeperOutputReference(this, "zookeeper");
  public get zookeeper() {
    return this._zookeeper;
  }
  public putZookeeper(value: DataYandexMdbKafkaClusterConfigZookeeper) {
    this._zookeeper.internalValue = value;
  }
  public resetZookeeper() {
    this._zookeeper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperInput() {
    return this._zookeeper.internalValue;
  }
}
export interface DataYandexMdbKafkaClusterTopicTopicConfig {
  /**
  * Retention policy to use on log segments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#cleanup_policy DataYandexMdbKafkaCluster#cleanup_policy}
  */
  readonly cleanupPolicy?: string;
  /**
  * Compression type of kafka topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#compression_type DataYandexMdbKafkaCluster#compression_type}
  */
  readonly compressionType?: string;
  /**
  * The amount of time to retain delete tombstone markers for log compacted topics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#delete_retention_ms DataYandexMdbKafkaCluster#delete_retention_ms}
  */
  readonly deleteRetentionMs?: string;
  /**
  * The time to wait before deleting a file from the filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#file_delete_delay_ms DataYandexMdbKafkaCluster#file_delete_delay_ms}
  */
  readonly fileDeleteDelayMs?: string;
  /**
  * This setting allows specifying an interval at which we will force an fsync of data written to the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#flush_messages DataYandexMdbKafkaCluster#flush_messages}
  */
  readonly flushMessages?: string;
  /**
  * This setting allows specifying a time interval at which we will force an fsync of data written to the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#flush_ms DataYandexMdbKafkaCluster#flush_ms}
  */
  readonly flushMs?: string;
  /**
  * The largest record batch size allowed by Kafka (after compression if compression is enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#max_message_bytes DataYandexMdbKafkaCluster#max_message_bytes}
  */
  readonly maxMessageBytes?: string;
  /**
  * The minimum time a message will remain uncompacted in the log. Only applicable for logs that are being compacted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#min_compaction_lag_ms DataYandexMdbKafkaCluster#min_compaction_lag_ms}
  */
  readonly minCompactionLagMs?: string;
  /**
  * When a producer sets acks to "all" (or "-1"), this configuration specifies the minimum number of replicas that must acknowledge a write for the write to be considered successful. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#min_insync_replicas DataYandexMdbKafkaCluster#min_insync_replicas}
  */
  readonly minInsyncReplicas?: string;
  /**
  * True if we should preallocate the file on disk when creating a new log segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#preallocate DataYandexMdbKafkaCluster#preallocate}
  */
  readonly preallocate?: boolean | cdktf.IResolvable;
  /**
  * This configuration controls the maximum size a partition (which consists of log segments) can grow to before we will discard old log segments to free up space if we are using the "delete" retention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#retention_bytes DataYandexMdbKafkaCluster#retention_bytes}
  */
  readonly retentionBytes?: string;
  /**
  * This configuration controls the maximum time we will retain a log before we will discard old log segments to free up space if we are using the "delete" retention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#retention_ms DataYandexMdbKafkaCluster#retention_ms}
  */
  readonly retentionMs?: string;
  /**
  * This configuration controls the segment file size for the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#segment_bytes DataYandexMdbKafkaCluster#segment_bytes}
  */
  readonly segmentBytes?: string;
}

export function dataYandexMdbKafkaClusterTopicTopicConfigToTerraform(struct?: DataYandexMdbKafkaClusterTopicTopicConfigOutputReference | DataYandexMdbKafkaClusterTopicTopicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_policy: cdktf.stringToTerraform(struct!.cleanupPolicy),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    delete_retention_ms: cdktf.stringToTerraform(struct!.deleteRetentionMs),
    file_delete_delay_ms: cdktf.stringToTerraform(struct!.fileDeleteDelayMs),
    flush_messages: cdktf.stringToTerraform(struct!.flushMessages),
    flush_ms: cdktf.stringToTerraform(struct!.flushMs),
    max_message_bytes: cdktf.stringToTerraform(struct!.maxMessageBytes),
    min_compaction_lag_ms: cdktf.stringToTerraform(struct!.minCompactionLagMs),
    min_insync_replicas: cdktf.stringToTerraform(struct!.minInsyncReplicas),
    preallocate: cdktf.booleanToTerraform(struct!.preallocate),
    retention_bytes: cdktf.stringToTerraform(struct!.retentionBytes),
    retention_ms: cdktf.stringToTerraform(struct!.retentionMs),
    segment_bytes: cdktf.stringToTerraform(struct!.segmentBytes),
  }
}


export function dataYandexMdbKafkaClusterTopicTopicConfigToHclTerraform(struct?: DataYandexMdbKafkaClusterTopicTopicConfigOutputReference | DataYandexMdbKafkaClusterTopicTopicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_policy: {
      value: cdktf.stringToHclTerraform(struct!.cleanupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_retention_ms: {
      value: cdktf.stringToHclTerraform(struct!.deleteRetentionMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_delete_delay_ms: {
      value: cdktf.stringToHclTerraform(struct!.fileDeleteDelayMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush_messages: {
      value: cdktf.stringToHclTerraform(struct!.flushMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush_ms: {
      value: cdktf.stringToHclTerraform(struct!.flushMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_message_bytes: {
      value: cdktf.stringToHclTerraform(struct!.maxMessageBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_compaction_lag_ms: {
      value: cdktf.stringToHclTerraform(struct!.minCompactionLagMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_insync_replicas: {
      value: cdktf.stringToHclTerraform(struct!.minInsyncReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preallocate: {
      value: cdktf.booleanToHclTerraform(struct!.preallocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_bytes: {
      value: cdktf.stringToHclTerraform(struct!.retentionBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_ms: {
      value: cdktf.stringToHclTerraform(struct!.retentionMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_bytes: {
      value: cdktf.stringToHclTerraform(struct!.segmentBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterTopicTopicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbKafkaClusterTopicTopicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPolicy = this._cleanupPolicy;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._deleteRetentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetentionMs = this._deleteRetentionMs;
    }
    if (this._fileDeleteDelayMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileDeleteDelayMs = this._fileDeleteDelayMs;
    }
    if (this._flushMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushMessages = this._flushMessages;
    }
    if (this._flushMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushMs = this._flushMs;
    }
    if (this._maxMessageBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMessageBytes = this._maxMessageBytes;
    }
    if (this._minCompactionLagMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCompactionLagMs = this._minCompactionLagMs;
    }
    if (this._minInsyncReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInsyncReplicas = this._minInsyncReplicas;
    }
    if (this._preallocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.preallocate = this._preallocate;
    }
    if (this._retentionBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionBytes = this._retentionBytes;
    }
    if (this._retentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionMs = this._retentionMs;
    }
    if (this._segmentBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentBytes = this._segmentBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterTopicTopicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleanupPolicy = undefined;
      this._compressionType = undefined;
      this._deleteRetentionMs = undefined;
      this._fileDeleteDelayMs = undefined;
      this._flushMessages = undefined;
      this._flushMs = undefined;
      this._maxMessageBytes = undefined;
      this._minCompactionLagMs = undefined;
      this._minInsyncReplicas = undefined;
      this._preallocate = undefined;
      this._retentionBytes = undefined;
      this._retentionMs = undefined;
      this._segmentBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleanupPolicy = value.cleanupPolicy;
      this._compressionType = value.compressionType;
      this._deleteRetentionMs = value.deleteRetentionMs;
      this._fileDeleteDelayMs = value.fileDeleteDelayMs;
      this._flushMessages = value.flushMessages;
      this._flushMs = value.flushMs;
      this._maxMessageBytes = value.maxMessageBytes;
      this._minCompactionLagMs = value.minCompactionLagMs;
      this._minInsyncReplicas = value.minInsyncReplicas;
      this._preallocate = value.preallocate;
      this._retentionBytes = value.retentionBytes;
      this._retentionMs = value.retentionMs;
      this._segmentBytes = value.segmentBytes;
    }
  }

  // cleanup_policy - computed: false, optional: true, required: false
  private _cleanupPolicy?: string; 
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }
  public set cleanupPolicy(value: string) {
    this._cleanupPolicy = value;
  }
  public resetCleanupPolicy() {
    this._cleanupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyInput() {
    return this._cleanupPolicy;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // delete_retention_ms - computed: false, optional: true, required: false
  private _deleteRetentionMs?: string; 
  public get deleteRetentionMs() {
    return this.getStringAttribute('delete_retention_ms');
  }
  public set deleteRetentionMs(value: string) {
    this._deleteRetentionMs = value;
  }
  public resetDeleteRetentionMs() {
    this._deleteRetentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionMsInput() {
    return this._deleteRetentionMs;
  }

  // file_delete_delay_ms - computed: false, optional: true, required: false
  private _fileDeleteDelayMs?: string; 
  public get fileDeleteDelayMs() {
    return this.getStringAttribute('file_delete_delay_ms');
  }
  public set fileDeleteDelayMs(value: string) {
    this._fileDeleteDelayMs = value;
  }
  public resetFileDeleteDelayMs() {
    this._fileDeleteDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDeleteDelayMsInput() {
    return this._fileDeleteDelayMs;
  }

  // flush_messages - computed: false, optional: true, required: false
  private _flushMessages?: string; 
  public get flushMessages() {
    return this.getStringAttribute('flush_messages');
  }
  public set flushMessages(value: string) {
    this._flushMessages = value;
  }
  public resetFlushMessages() {
    this._flushMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushMessagesInput() {
    return this._flushMessages;
  }

  // flush_ms - computed: false, optional: true, required: false
  private _flushMs?: string; 
  public get flushMs() {
    return this.getStringAttribute('flush_ms');
  }
  public set flushMs(value: string) {
    this._flushMs = value;
  }
  public resetFlushMs() {
    this._flushMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushMsInput() {
    return this._flushMs;
  }

  // max_message_bytes - computed: false, optional: true, required: false
  private _maxMessageBytes?: string; 
  public get maxMessageBytes() {
    return this.getStringAttribute('max_message_bytes');
  }
  public set maxMessageBytes(value: string) {
    this._maxMessageBytes = value;
  }
  public resetMaxMessageBytes() {
    this._maxMessageBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageBytesInput() {
    return this._maxMessageBytes;
  }

  // min_compaction_lag_ms - computed: false, optional: true, required: false
  private _minCompactionLagMs?: string; 
  public get minCompactionLagMs() {
    return this.getStringAttribute('min_compaction_lag_ms');
  }
  public set minCompactionLagMs(value: string) {
    this._minCompactionLagMs = value;
  }
  public resetMinCompactionLagMs() {
    this._minCompactionLagMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCompactionLagMsInput() {
    return this._minCompactionLagMs;
  }

  // min_insync_replicas - computed: false, optional: true, required: false
  private _minInsyncReplicas?: string; 
  public get minInsyncReplicas() {
    return this.getStringAttribute('min_insync_replicas');
  }
  public set minInsyncReplicas(value: string) {
    this._minInsyncReplicas = value;
  }
  public resetMinInsyncReplicas() {
    this._minInsyncReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInsyncReplicasInput() {
    return this._minInsyncReplicas;
  }

  // preallocate - computed: false, optional: true, required: false
  private _preallocate?: boolean | cdktf.IResolvable; 
  public get preallocate() {
    return this.getBooleanAttribute('preallocate');
  }
  public set preallocate(value: boolean | cdktf.IResolvable) {
    this._preallocate = value;
  }
  public resetPreallocate() {
    this._preallocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preallocateInput() {
    return this._preallocate;
  }

  // retention_bytes - computed: false, optional: true, required: false
  private _retentionBytes?: string; 
  public get retentionBytes() {
    return this.getStringAttribute('retention_bytes');
  }
  public set retentionBytes(value: string) {
    this._retentionBytes = value;
  }
  public resetRetentionBytes() {
    this._retentionBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionBytesInput() {
    return this._retentionBytes;
  }

  // retention_ms - computed: false, optional: true, required: false
  private _retentionMs?: string; 
  public get retentionMs() {
    return this.getStringAttribute('retention_ms');
  }
  public set retentionMs(value: string) {
    this._retentionMs = value;
  }
  public resetRetentionMs() {
    this._retentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionMsInput() {
    return this._retentionMs;
  }

  // segment_bytes - computed: false, optional: true, required: false
  private _segmentBytes?: string; 
  public get segmentBytes() {
    return this.getStringAttribute('segment_bytes');
  }
  public set segmentBytes(value: string) {
    this._segmentBytes = value;
  }
  public resetSegmentBytes() {
    this._segmentBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentBytesInput() {
    return this._segmentBytes;
  }
}
export interface DataYandexMdbKafkaClusterTopic {
  /**
  * The name of the topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#name DataYandexMdbKafkaCluster#name}
  */
  readonly name: string;
  /**
  * The number of the topic's partitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#partitions DataYandexMdbKafkaCluster#partitions}
  */
  readonly partitions: number;
  /**
  * Amount of data copies (replicas) for the topic in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#replication_factor DataYandexMdbKafkaCluster#replication_factor}
  */
  readonly replicationFactor: number;
  /**
  * topic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#topic_config DataYandexMdbKafkaCluster#topic_config}
  */
  readonly topicConfig?: DataYandexMdbKafkaClusterTopicTopicConfig;
}

export function dataYandexMdbKafkaClusterTopicToTerraform(struct?: DataYandexMdbKafkaClusterTopic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    partitions: cdktf.numberToTerraform(struct!.partitions),
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
    topic_config: dataYandexMdbKafkaClusterTopicTopicConfigToTerraform(struct!.topicConfig),
  }
}


export function dataYandexMdbKafkaClusterTopicToHclTerraform(struct?: DataYandexMdbKafkaClusterTopic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partitions: {
      value: cdktf.numberToHclTerraform(struct!.partitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replication_factor: {
      value: cdktf.numberToHclTerraform(struct!.replicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topic_config: {
      value: dataYandexMdbKafkaClusterTopicTopicConfigToHclTerraform(struct!.topicConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbKafkaClusterTopicTopicConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterTopicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaClusterTopic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._partitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitions = this._partitions;
    }
    if (this._replicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFactor = this._replicationFactor;
    }
    if (this._topicConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicConfig = this._topicConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterTopic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._partitions = undefined;
      this._replicationFactor = undefined;
      this._topicConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._partitions = value.partitions;
      this._replicationFactor = value.replicationFactor;
      this._topicConfig.internalValue = value.topicConfig;
    }
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

  // partitions - computed: false, optional: false, required: true
  private _partitions?: number; 
  public get partitions() {
    return this.getNumberAttribute('partitions');
  }
  public set partitions(value: number) {
    this._partitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions;
  }

  // replication_factor - computed: false, optional: false, required: true
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // topic_config - computed: false, optional: true, required: false
  private _topicConfig = new DataYandexMdbKafkaClusterTopicTopicConfigOutputReference(this, "topic_config");
  public get topicConfig() {
    return this._topicConfig;
  }
  public putTopicConfig(value: DataYandexMdbKafkaClusterTopicTopicConfig) {
    this._topicConfig.internalValue = value;
  }
  public resetTopicConfig() {
    this._topicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicConfigInput() {
    return this._topicConfig.internalValue;
  }
}

export class DataYandexMdbKafkaClusterTopicList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbKafkaClusterTopic[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbKafkaClusterTopicOutputReference {
    return new DataYandexMdbKafkaClusterTopicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbKafkaClusterUserPermission {
  /**
  * Set of hosts, to which this permission grants access to. Only ip-addresses allowed as value of single host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#allow_hosts DataYandexMdbKafkaCluster#allow_hosts}
  */
  readonly allowHosts?: string[];
  /**
  * The role type to grant to the topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#role DataYandexMdbKafkaCluster#role}
  */
  readonly role: string;
  /**
  * The name of the topic that the permission grants access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#topic_name DataYandexMdbKafkaCluster#topic_name}
  */
  readonly topicName: string;
}

export function dataYandexMdbKafkaClusterUserPermissionToTerraform(struct?: DataYandexMdbKafkaClusterUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowHosts),
    role: cdktf.stringToTerraform(struct!.role),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}


export function dataYandexMdbKafkaClusterUserPermissionToHclTerraform(struct?: DataYandexMdbKafkaClusterUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowHosts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterUserPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaClusterUserPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHosts = this._allowHosts;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterUserPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowHosts = undefined;
      this._role = undefined;
      this._topicName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowHosts = value.allowHosts;
      this._role = value.role;
      this._topicName = value.topicName;
    }
  }

  // allow_hosts - computed: false, optional: true, required: false
  private _allowHosts?: string[]; 
  public get allowHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_hosts'));
  }
  public set allowHosts(value: string[]) {
    this._allowHosts = value;
  }
  public resetAllowHosts() {
    this._allowHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHostsInput() {
    return this._allowHosts;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }
}

export class DataYandexMdbKafkaClusterUserPermissionList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbKafkaClusterUserPermission[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbKafkaClusterUserPermissionOutputReference {
    return new DataYandexMdbKafkaClusterUserPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbKafkaClusterUser {
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#name DataYandexMdbKafkaCluster#name}
  */
  readonly name: string;
  /**
  * The password of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#password DataYandexMdbKafkaCluster#password}
  */
  readonly password: string;
  /**
  * permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#permission DataYandexMdbKafkaCluster#permission}
  */
  readonly permission?: DataYandexMdbKafkaClusterUserPermission[] | cdktf.IResolvable;
}

export function dataYandexMdbKafkaClusterUserToTerraform(struct?: DataYandexMdbKafkaClusterUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    permission: cdktf.listMapper(dataYandexMdbKafkaClusterUserPermissionToTerraform, true)(struct!.permission),
  }
}


export function dataYandexMdbKafkaClusterUserToHclTerraform(struct?: DataYandexMdbKafkaClusterUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.listMapperHcl(dataYandexMdbKafkaClusterUserPermissionToHclTerraform, true)(struct!.permission),
      isBlock: true,
      type: "set",
      storageClassType: "DataYandexMdbKafkaClusterUserPermissionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbKafkaClusterUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbKafkaClusterUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._permission?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbKafkaClusterUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
      this._permission.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
      this._permission.internalValue = value.permission;
    }
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // permission - computed: false, optional: true, required: false
  private _permission = new DataYandexMdbKafkaClusterUserPermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: DataYandexMdbKafkaClusterUserPermission[] | cdktf.IResolvable) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }
}

export class DataYandexMdbKafkaClusterUserList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbKafkaClusterUser[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbKafkaClusterUserOutputReference {
    return new DataYandexMdbKafkaClusterUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster yandex_mdb_kafka_cluster}
*/
export class DataYandexMdbKafkaCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_kafka_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexMdbKafkaCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexMdbKafkaCluster to import
  * @param importFromId The id of the existing DataYandexMdbKafkaCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexMdbKafkaCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_kafka_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/mdb_kafka_cluster yandex_mdb_kafka_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMdbKafkaClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexMdbKafkaClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_kafka_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._deletionProtection = config.deletionProtection;
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
    this._subnetIds = config.subnetIds;
    this._config.internalValue = config.config;
    this._topic.internalValue = config.topic;
    this._user.internalValue = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataYandexMdbKafkaClusterHostList(this, "host", true);
  public get host() {
    return this._host;
  }

  // host_group_ids - computed: true, optional: false, required: false
  public get hostGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_group_ids'));
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataYandexMdbKafkaClusterMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
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

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataYandexMdbKafkaClusterConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataYandexMdbKafkaClusterConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // topic - computed: false, optional: true, required: false
  private _topic = new DataYandexMdbKafkaClusterTopicList(this, "topic", false);
  public get topic() {
    return this._topic;
  }
  public putTopic(value: DataYandexMdbKafkaClusterTopic[] | cdktf.IResolvable) {
    this._topic.internalValue = value;
  }
  public resetTopic() {
    this._topic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new DataYandexMdbKafkaClusterUserList(this, "user", true);
  public get user() {
    return this._user;
  }
  public putUser(value: DataYandexMdbKafkaClusterUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      config: dataYandexMdbKafkaClusterConfigAToTerraform(this._config.internalValue),
      topic: cdktf.listMapper(dataYandexMdbKafkaClusterTopicToTerraform, true)(this._topic.internalValue),
      user: cdktf.listMapper(dataYandexMdbKafkaClusterUserToTerraform, true)(this._user.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      config: {
        value: dataYandexMdbKafkaClusterConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbKafkaClusterConfigAList",
      },
      topic: {
        value: cdktf.listMapperHcl(dataYandexMdbKafkaClusterTopicToHclTerraform, true)(this._topic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbKafkaClusterTopicList",
      },
      user: {
        value: cdktf.listMapperHcl(dataYandexMdbKafkaClusterUserToHclTerraform, true)(this._user.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataYandexMdbKafkaClusterUserList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
