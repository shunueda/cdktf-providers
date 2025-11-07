// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaMirrormakerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30  GiB to scale your service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the service nodes to go through a rolling restart, and there might be a short downtime for services without an autoscaler integration or high availability capabilities. The field can be safely removed when autoscaler is enabled without causing any changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#additional_disk_space KafkaMirrormaker#additional_disk_space}
  */
  readonly additionalDiskSpace?: string;
  /**
  * The cloud provider and region the service is hosted in. The format is `provider-region`, for example: `google-europe-west1`. The [available cloud regions](https://aiven.io/docs/platform/reference/list_of_clouds) can differ per project and service. Changing this value [migrates the service to another cloud provider or region](https://aiven.io/docs/platform/howto/migrate-services-cloud-region). The migration runs in the background and includes a DNS update to redirect traffic to the new region. Most services experience no downtime, but some databases may have a brief interruption during DNS propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#cloud_name KafkaMirrormaker#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing will result in the service rebalancing. Please use `additional_disk_space` to specify the space to be added to the default disk space defined by the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#disk_space KafkaMirrormaker#disk_space}
  */
  readonly diskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#id KafkaMirrormaker#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#maintenance_window_dow KafkaMirrormaker#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#maintenance_window_time KafkaMirrormaker#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available options can be seen from the [Aiven pricing page](https://aiven.io/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#plan KafkaMirrormaker#plan}
  */
  readonly plan: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#project KafkaMirrormaker#project}
  */
  readonly project: string;
  /**
  * Specifies the VPC the service should run in. If the value is not set, the service runs on the Public Internet. When set, the value should be given as a reference to set up dependencies correctly, and the VPC must be in the same cloud and region as the service itself. The service can be freely moved to and from VPC after creation, but doing so triggers migration to new servers, so the operation can take a significant amount of time to complete if the service has a lot of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#project_vpc_id KafkaMirrormaker#project_vpc_id}
  */
  readonly projectVpcId?: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#service_name KafkaMirrormaker#service_name}
  */
  readonly serviceName: string;
  /**
  * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a static ip resource is in the 'assigned' state it cannot be unbound from the node again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#static_ips KafkaMirrormaker#static_ips}
  */
  readonly staticIps?: string[];
  /**
  * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent unintentional service deletion. This does not shield against deleting databases or topics but for services with backups much of the content can at least be restored from backup in case accidental deletion is done.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#termination_protection KafkaMirrormaker#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * kafka_mirrormaker_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#kafka_mirrormaker_user_config KafkaMirrormaker#kafka_mirrormaker_user_config}
  */
  readonly kafkaMirrormakerUserConfig?: KafkaMirrormakerKafkaMirrormakerUserConfig;
  /**
  * service_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#service_integrations KafkaMirrormaker#service_integrations}
  */
  readonly serviceIntegrations?: KafkaMirrormakerServiceIntegrations[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#tag KafkaMirrormaker#tag}
  */
  readonly tag?: KafkaMirrormakerTag[] | cdktf.IResolvable;
  /**
  * tech_emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#tech_emails KafkaMirrormaker#tech_emails}
  */
  readonly techEmails?: KafkaMirrormakerTechEmails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#timeouts KafkaMirrormaker#timeouts}
  */
  readonly timeouts?: KafkaMirrormakerTimeouts;
}
export interface KafkaMirrormakerComponents {
}

export function kafkaMirrormakerComponentsToTerraform(struct?: KafkaMirrormakerComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kafkaMirrormakerComponentsToHclTerraform(struct?: KafkaMirrormakerComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KafkaMirrormakerComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaMirrormakerComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaMirrormakerComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // connection_uri - computed: true, optional: false, required: false
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // kafka_authentication_method - computed: true, optional: false, required: false
  public get kafkaAuthenticationMethod() {
    return this.getStringAttribute('kafka_authentication_method');
  }

  // kafka_ssl_ca - computed: true, optional: false, required: false
  public get kafkaSslCa() {
    return this.getStringAttribute('kafka_ssl_ca');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}

export class KafkaMirrormakerComponentsList extends cdktf.ComplexList {

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
  public get(index: number): KafkaMirrormakerComponentsOutputReference {
    return new KafkaMirrormakerComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObject {
  /**
  * Description for IP filter list entry. Example: `Production service IP range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#description KafkaMirrormaker#description}
  */
  readonly description?: string;
  /**
  * CIDR address block. Example: `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#network KafkaMirrormaker#network}
  */
  readonly network: string;
}

export function kafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObjectToTerraform(struct?: KafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function kafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObjectToHclTerraform(struct?: KafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._network = value.network;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}

export class KafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObjectList extends cdktf.ComplexList {
  public internalValue? : KafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObject[] | cdktf.IResolvable

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
  public get(index: number): KafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObjectOutputReference {
    return new KafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormaker {
  /**
  * Timeout for administrative tasks, e.g. detecting new topics, loading of consumer group and offsets. Defaults to 60000 milliseconds (1 minute).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#admin_timeout_ms KafkaMirrormaker#admin_timeout_ms}
  */
  readonly adminTimeoutMs?: number;
  /**
  * Whether to emit consumer group offset checkpoints to target cluster periodically (default: true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#emit_checkpoints_enabled KafkaMirrormaker#emit_checkpoints_enabled}
  */
  readonly emitCheckpointsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency at which consumer group offset checkpoints are emitted (default: 60, every minute). Example: `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#emit_checkpoints_interval_seconds KafkaMirrormaker#emit_checkpoints_interval_seconds}
  */
  readonly emitCheckpointsIntervalSeconds?: number;
  /**
  * Consumer groups to replicate. Supports comma-separated group IDs and regexes. Example: `.*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#groups KafkaMirrormaker#groups}
  */
  readonly groups?: string;
  /**
  * Exclude groups. Supports comma-separated group IDs and regexes. Excludes take precedence over includes. Example: `console-consumer-.*,connect-.*,__.*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#groups_exclude KafkaMirrormaker#groups_exclude}
  */
  readonly groupsExclude?: string;
  /**
  * How out-of-sync a remote partition can be before it is resynced. Example: `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#offset_lag_max KafkaMirrormaker#offset_lag_max}
  */
  readonly offsetLagMax?: number;
  /**
  * Whether to periodically check for new consumer groups. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#refresh_groups_enabled KafkaMirrormaker#refresh_groups_enabled}
  */
  readonly refreshGroupsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency of consumer group refresh in seconds. Defaults to 600 seconds (10 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#refresh_groups_interval_seconds KafkaMirrormaker#refresh_groups_interval_seconds}
  */
  readonly refreshGroupsIntervalSeconds?: number;
  /**
  * Whether to periodically check for new topics and partitions. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#refresh_topics_enabled KafkaMirrormaker#refresh_topics_enabled}
  */
  readonly refreshTopicsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency of topic and partitions refresh in seconds. Defaults to 600 seconds (10 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#refresh_topics_interval_seconds KafkaMirrormaker#refresh_topics_interval_seconds}
  */
  readonly refreshTopicsIntervalSeconds?: number;
  /**
  * Whether to periodically write the translated offsets of replicated consumer groups (in the source cluster) to __consumer_offsets topic in target cluster, as long as no active consumers in that group are connected to the target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#sync_group_offsets_enabled KafkaMirrormaker#sync_group_offsets_enabled}
  */
  readonly syncGroupOffsetsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency at which consumer group offsets are synced (default: 60, every minute). Example: `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#sync_group_offsets_interval_seconds KafkaMirrormaker#sync_group_offsets_interval_seconds}
  */
  readonly syncGroupOffsetsIntervalSeconds?: number;
  /**
  * Whether to periodically configure remote topics to match their corresponding upstream topics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#sync_topic_configs_enabled KafkaMirrormaker#sync_topic_configs_enabled}
  */
  readonly syncTopicConfigsEnabled?: boolean | cdktf.IResolvable;
  /**
  * `tasks.max` is set to this multiplied by the number of CPUs in the service. Default: `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#tasks_max_per_cpu KafkaMirrormaker#tasks_max_per_cpu}
  */
  readonly tasksMaxPerCpu?: number;
}

export function kafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormakerToTerraform(struct?: KafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormakerOutputReference | KafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormaker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_timeout_ms: cdktf.numberToTerraform(struct!.adminTimeoutMs),
    emit_checkpoints_enabled: cdktf.booleanToTerraform(struct!.emitCheckpointsEnabled),
    emit_checkpoints_interval_seconds: cdktf.numberToTerraform(struct!.emitCheckpointsIntervalSeconds),
    groups: cdktf.stringToTerraform(struct!.groups),
    groups_exclude: cdktf.stringToTerraform(struct!.groupsExclude),
    offset_lag_max: cdktf.numberToTerraform(struct!.offsetLagMax),
    refresh_groups_enabled: cdktf.booleanToTerraform(struct!.refreshGroupsEnabled),
    refresh_groups_interval_seconds: cdktf.numberToTerraform(struct!.refreshGroupsIntervalSeconds),
    refresh_topics_enabled: cdktf.booleanToTerraform(struct!.refreshTopicsEnabled),
    refresh_topics_interval_seconds: cdktf.numberToTerraform(struct!.refreshTopicsIntervalSeconds),
    sync_group_offsets_enabled: cdktf.booleanToTerraform(struct!.syncGroupOffsetsEnabled),
    sync_group_offsets_interval_seconds: cdktf.numberToTerraform(struct!.syncGroupOffsetsIntervalSeconds),
    sync_topic_configs_enabled: cdktf.booleanToTerraform(struct!.syncTopicConfigsEnabled),
    tasks_max_per_cpu: cdktf.numberToTerraform(struct!.tasksMaxPerCpu),
  }
}


export function kafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormakerToHclTerraform(struct?: KafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormakerOutputReference | KafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormaker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.adminTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    emit_checkpoints_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.emitCheckpointsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    emit_checkpoints_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.emitCheckpointsIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    groups: {
      value: cdktf.stringToHclTerraform(struct!.groups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups_exclude: {
      value: cdktf.stringToHclTerraform(struct!.groupsExclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset_lag_max: {
      value: cdktf.numberToHclTerraform(struct!.offsetLagMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_groups_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.refreshGroupsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_groups_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.refreshGroupsIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_topics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.refreshTopicsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_topics_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.refreshTopicsIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_group_offsets_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.syncGroupOffsetsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_group_offsets_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.syncGroupOffsetsIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_topic_configs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.syncTopicConfigsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tasks_max_per_cpu: {
      value: cdktf.numberToHclTerraform(struct!.tasksMaxPerCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormakerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormaker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminTimeoutMs = this._adminTimeoutMs;
    }
    if (this._emitCheckpointsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitCheckpointsEnabled = this._emitCheckpointsEnabled;
    }
    if (this._emitCheckpointsIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitCheckpointsIntervalSeconds = this._emitCheckpointsIntervalSeconds;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._groupsExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsExclude = this._groupsExclude;
    }
    if (this._offsetLagMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetLagMax = this._offsetLagMax;
    }
    if (this._refreshGroupsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshGroupsEnabled = this._refreshGroupsEnabled;
    }
    if (this._refreshGroupsIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshGroupsIntervalSeconds = this._refreshGroupsIntervalSeconds;
    }
    if (this._refreshTopicsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTopicsEnabled = this._refreshTopicsEnabled;
    }
    if (this._refreshTopicsIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTopicsIntervalSeconds = this._refreshTopicsIntervalSeconds;
    }
    if (this._syncGroupOffsetsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncGroupOffsetsEnabled = this._syncGroupOffsetsEnabled;
    }
    if (this._syncGroupOffsetsIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncGroupOffsetsIntervalSeconds = this._syncGroupOffsetsIntervalSeconds;
    }
    if (this._syncTopicConfigsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTopicConfigsEnabled = this._syncTopicConfigsEnabled;
    }
    if (this._tasksMaxPerCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasksMaxPerCpu = this._tasksMaxPerCpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormaker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminTimeoutMs = undefined;
      this._emitCheckpointsEnabled = undefined;
      this._emitCheckpointsIntervalSeconds = undefined;
      this._groups = undefined;
      this._groupsExclude = undefined;
      this._offsetLagMax = undefined;
      this._refreshGroupsEnabled = undefined;
      this._refreshGroupsIntervalSeconds = undefined;
      this._refreshTopicsEnabled = undefined;
      this._refreshTopicsIntervalSeconds = undefined;
      this._syncGroupOffsetsEnabled = undefined;
      this._syncGroupOffsetsIntervalSeconds = undefined;
      this._syncTopicConfigsEnabled = undefined;
      this._tasksMaxPerCpu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminTimeoutMs = value.adminTimeoutMs;
      this._emitCheckpointsEnabled = value.emitCheckpointsEnabled;
      this._emitCheckpointsIntervalSeconds = value.emitCheckpointsIntervalSeconds;
      this._groups = value.groups;
      this._groupsExclude = value.groupsExclude;
      this._offsetLagMax = value.offsetLagMax;
      this._refreshGroupsEnabled = value.refreshGroupsEnabled;
      this._refreshGroupsIntervalSeconds = value.refreshGroupsIntervalSeconds;
      this._refreshTopicsEnabled = value.refreshTopicsEnabled;
      this._refreshTopicsIntervalSeconds = value.refreshTopicsIntervalSeconds;
      this._syncGroupOffsetsEnabled = value.syncGroupOffsetsEnabled;
      this._syncGroupOffsetsIntervalSeconds = value.syncGroupOffsetsIntervalSeconds;
      this._syncTopicConfigsEnabled = value.syncTopicConfigsEnabled;
      this._tasksMaxPerCpu = value.tasksMaxPerCpu;
    }
  }

  // admin_timeout_ms - computed: false, optional: true, required: false
  private _adminTimeoutMs?: number; 
  public get adminTimeoutMs() {
    return this.getNumberAttribute('admin_timeout_ms');
  }
  public set adminTimeoutMs(value: number) {
    this._adminTimeoutMs = value;
  }
  public resetAdminTimeoutMs() {
    this._adminTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminTimeoutMsInput() {
    return this._adminTimeoutMs;
  }

  // emit_checkpoints_enabled - computed: false, optional: true, required: false
  private _emitCheckpointsEnabled?: boolean | cdktf.IResolvable; 
  public get emitCheckpointsEnabled() {
    return this.getBooleanAttribute('emit_checkpoints_enabled');
  }
  public set emitCheckpointsEnabled(value: boolean | cdktf.IResolvable) {
    this._emitCheckpointsEnabled = value;
  }
  public resetEmitCheckpointsEnabled() {
    this._emitCheckpointsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitCheckpointsEnabledInput() {
    return this._emitCheckpointsEnabled;
  }

  // emit_checkpoints_interval_seconds - computed: false, optional: true, required: false
  private _emitCheckpointsIntervalSeconds?: number; 
  public get emitCheckpointsIntervalSeconds() {
    return this.getNumberAttribute('emit_checkpoints_interval_seconds');
  }
  public set emitCheckpointsIntervalSeconds(value: number) {
    this._emitCheckpointsIntervalSeconds = value;
  }
  public resetEmitCheckpointsIntervalSeconds() {
    this._emitCheckpointsIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitCheckpointsIntervalSecondsInput() {
    return this._emitCheckpointsIntervalSeconds;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string; 
  public get groups() {
    return this.getStringAttribute('groups');
  }
  public set groups(value: string) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // groups_exclude - computed: false, optional: true, required: false
  private _groupsExclude?: string; 
  public get groupsExclude() {
    return this.getStringAttribute('groups_exclude');
  }
  public set groupsExclude(value: string) {
    this._groupsExclude = value;
  }
  public resetGroupsExclude() {
    this._groupsExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsExcludeInput() {
    return this._groupsExclude;
  }

  // offset_lag_max - computed: false, optional: true, required: false
  private _offsetLagMax?: number; 
  public get offsetLagMax() {
    return this.getNumberAttribute('offset_lag_max');
  }
  public set offsetLagMax(value: number) {
    this._offsetLagMax = value;
  }
  public resetOffsetLagMax() {
    this._offsetLagMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetLagMaxInput() {
    return this._offsetLagMax;
  }

  // refresh_groups_enabled - computed: false, optional: true, required: false
  private _refreshGroupsEnabled?: boolean | cdktf.IResolvable; 
  public get refreshGroupsEnabled() {
    return this.getBooleanAttribute('refresh_groups_enabled');
  }
  public set refreshGroupsEnabled(value: boolean | cdktf.IResolvable) {
    this._refreshGroupsEnabled = value;
  }
  public resetRefreshGroupsEnabled() {
    this._refreshGroupsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshGroupsEnabledInput() {
    return this._refreshGroupsEnabled;
  }

  // refresh_groups_interval_seconds - computed: false, optional: true, required: false
  private _refreshGroupsIntervalSeconds?: number; 
  public get refreshGroupsIntervalSeconds() {
    return this.getNumberAttribute('refresh_groups_interval_seconds');
  }
  public set refreshGroupsIntervalSeconds(value: number) {
    this._refreshGroupsIntervalSeconds = value;
  }
  public resetRefreshGroupsIntervalSeconds() {
    this._refreshGroupsIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshGroupsIntervalSecondsInput() {
    return this._refreshGroupsIntervalSeconds;
  }

  // refresh_topics_enabled - computed: false, optional: true, required: false
  private _refreshTopicsEnabled?: boolean | cdktf.IResolvable; 
  public get refreshTopicsEnabled() {
    return this.getBooleanAttribute('refresh_topics_enabled');
  }
  public set refreshTopicsEnabled(value: boolean | cdktf.IResolvable) {
    this._refreshTopicsEnabled = value;
  }
  public resetRefreshTopicsEnabled() {
    this._refreshTopicsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTopicsEnabledInput() {
    return this._refreshTopicsEnabled;
  }

  // refresh_topics_interval_seconds - computed: false, optional: true, required: false
  private _refreshTopicsIntervalSeconds?: number; 
  public get refreshTopicsIntervalSeconds() {
    return this.getNumberAttribute('refresh_topics_interval_seconds');
  }
  public set refreshTopicsIntervalSeconds(value: number) {
    this._refreshTopicsIntervalSeconds = value;
  }
  public resetRefreshTopicsIntervalSeconds() {
    this._refreshTopicsIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTopicsIntervalSecondsInput() {
    return this._refreshTopicsIntervalSeconds;
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

  // sync_topic_configs_enabled - computed: false, optional: true, required: false
  private _syncTopicConfigsEnabled?: boolean | cdktf.IResolvable; 
  public get syncTopicConfigsEnabled() {
    return this.getBooleanAttribute('sync_topic_configs_enabled');
  }
  public set syncTopicConfigsEnabled(value: boolean | cdktf.IResolvable) {
    this._syncTopicConfigsEnabled = value;
  }
  public resetSyncTopicConfigsEnabled() {
    this._syncTopicConfigsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTopicConfigsEnabledInput() {
    return this._syncTopicConfigsEnabled;
  }

  // tasks_max_per_cpu - computed: false, optional: true, required: false
  private _tasksMaxPerCpu?: number; 
  public get tasksMaxPerCpu() {
    return this.getNumberAttribute('tasks_max_per_cpu');
  }
  public set tasksMaxPerCpu(value: number) {
    this._tasksMaxPerCpu = value;
  }
  public resetTasksMaxPerCpu() {
    this._tasksMaxPerCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksMaxPerCpuInput() {
    return this._tasksMaxPerCpu;
  }
}
export interface KafkaMirrormakerKafkaMirrormakerUserConfig {
  /**
  * Additional Cloud Regions for Backup Replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#additional_backup_regions KafkaMirrormaker#additional_backup_regions}
  */
  readonly additionalBackupRegions?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#ip_filter KafkaMirrormaker#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#ip_filter_string KafkaMirrormaker#ip_filter_string}
  */
  readonly ipFilterString?: string[];
  /**
  * Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#service_log KafkaMirrormaker#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Use static public IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#static_ips KafkaMirrormaker#static_ips}
  */
  readonly staticIps?: boolean | cdktf.IResolvable;
  /**
  * ip_filter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#ip_filter_object KafkaMirrormaker#ip_filter_object}
  */
  readonly ipFilterObject?: KafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObject[] | cdktf.IResolvable;
  /**
  * kafka_mirrormaker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#kafka_mirrormaker KafkaMirrormaker#kafka_mirrormaker}
  */
  readonly kafkaMirrormaker?: KafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormaker;
}

export function kafkaMirrormakerKafkaMirrormakerUserConfigToTerraform(struct?: KafkaMirrormakerKafkaMirrormakerUserConfigOutputReference | KafkaMirrormakerKafkaMirrormakerUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_backup_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalBackupRegions),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    ip_filter_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilterString),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    static_ips: cdktf.booleanToTerraform(struct!.staticIps),
    ip_filter_object: cdktf.listMapper(kafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObjectToTerraform, true)(struct!.ipFilterObject),
    kafka_mirrormaker: kafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormakerToTerraform(struct!.kafkaMirrormaker),
  }
}


export function kafkaMirrormakerKafkaMirrormakerUserConfigToHclTerraform(struct?: KafkaMirrormakerKafkaMirrormakerUserConfigOutputReference | KafkaMirrormakerKafkaMirrormakerUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_backup_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalBackupRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_filter_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilterString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_log: {
      value: cdktf.booleanToHclTerraform(struct!.serviceLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ips: {
      value: cdktf.booleanToHclTerraform(struct!.staticIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_filter_object: {
      value: cdktf.listMapperHcl(kafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObjectToHclTerraform, true)(struct!.ipFilterObject),
      isBlock: true,
      type: "set",
      storageClassType: "KafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObjectList",
    },
    kafka_mirrormaker: {
      value: kafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormakerToHclTerraform(struct!.kafkaMirrormaker),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormakerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaMirrormakerKafkaMirrormakerUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaMirrormakerKafkaMirrormakerUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalBackupRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalBackupRegions = this._additionalBackupRegions;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._ipFilterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterString = this._ipFilterString;
    }
    if (this._serviceLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLog = this._serviceLog;
    }
    if (this._staticIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIps = this._staticIps;
    }
    if (this._ipFilterObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterObject = this._ipFilterObject?.internalValue;
    }
    if (this._kafkaMirrormaker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaMirrormaker = this._kafkaMirrormaker?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaMirrormakerKafkaMirrormakerUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalBackupRegions = undefined;
      this._ipFilter = undefined;
      this._ipFilterString = undefined;
      this._serviceLog = undefined;
      this._staticIps = undefined;
      this._ipFilterObject.internalValue = undefined;
      this._kafkaMirrormaker.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalBackupRegions = value.additionalBackupRegions;
      this._ipFilter = value.ipFilter;
      this._ipFilterString = value.ipFilterString;
      this._serviceLog = value.serviceLog;
      this._staticIps = value.staticIps;
      this._ipFilterObject.internalValue = value.ipFilterObject;
      this._kafkaMirrormaker.internalValue = value.kafkaMirrormaker;
    }
  }

  // additional_backup_regions - computed: false, optional: true, required: false
  private _additionalBackupRegions?: string[]; 
  public get additionalBackupRegions() {
    return this.getListAttribute('additional_backup_regions');
  }
  public set additionalBackupRegions(value: string[]) {
    this._additionalBackupRegions = value;
  }
  public resetAdditionalBackupRegions() {
    this._additionalBackupRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalBackupRegionsInput() {
    return this._additionalBackupRegions;
  }

  // ip_filter - computed: false, optional: true, required: false
  private _ipFilter?: string[]; 
  public get ipFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter'));
  }
  public set ipFilter(value: string[]) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }

  // ip_filter_string - computed: false, optional: true, required: false
  private _ipFilterString?: string[]; 
  public get ipFilterString() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter_string'));
  }
  public set ipFilterString(value: string[]) {
    this._ipFilterString = value;
  }
  public resetIpFilterString() {
    this._ipFilterString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterStringInput() {
    return this._ipFilterString;
  }

  // service_log - computed: false, optional: true, required: false
  private _serviceLog?: boolean | cdktf.IResolvable; 
  public get serviceLog() {
    return this.getBooleanAttribute('service_log');
  }
  public set serviceLog(value: boolean | cdktf.IResolvable) {
    this._serviceLog = value;
  }
  public resetServiceLog() {
    this._serviceLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLogInput() {
    return this._serviceLog;
  }

  // static_ips - computed: false, optional: true, required: false
  private _staticIps?: boolean | cdktf.IResolvable; 
  public get staticIps() {
    return this.getBooleanAttribute('static_ips');
  }
  public set staticIps(value: boolean | cdktf.IResolvable) {
    this._staticIps = value;
  }
  public resetStaticIps() {
    this._staticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpsInput() {
    return this._staticIps;
  }

  // ip_filter_object - computed: false, optional: true, required: false
  private _ipFilterObject = new KafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }
  public putIpFilterObject(value: KafkaMirrormakerKafkaMirrormakerUserConfigIpFilterObject[] | cdktf.IResolvable) {
    this._ipFilterObject.internalValue = value;
  }
  public resetIpFilterObject() {
    this._ipFilterObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterObjectInput() {
    return this._ipFilterObject.internalValue;
  }

  // kafka_mirrormaker - computed: false, optional: true, required: false
  private _kafkaMirrormaker = new KafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormakerOutputReference(this, "kafka_mirrormaker");
  public get kafkaMirrormaker() {
    return this._kafkaMirrormaker;
  }
  public putKafkaMirrormaker(value: KafkaMirrormakerKafkaMirrormakerUserConfigKafkaMirrormaker) {
    this._kafkaMirrormaker.internalValue = value;
  }
  public resetKafkaMirrormaker() {
    this._kafkaMirrormaker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaMirrormakerInput() {
    return this._kafkaMirrormaker.internalValue;
  }
}
export interface KafkaMirrormakerServiceIntegrations {
  /**
  * Type of the service integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#integration_type KafkaMirrormaker#integration_type}
  */
  readonly integrationType: string;
  /**
  * Name of the source service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#source_service_name KafkaMirrormaker#source_service_name}
  */
  readonly sourceServiceName: string;
}

export function kafkaMirrormakerServiceIntegrationsToTerraform(struct?: KafkaMirrormakerServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
  }
}


export function kafkaMirrormakerServiceIntegrationsToHclTerraform(struct?: KafkaMirrormakerServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_type: {
      value: cdktf.stringToHclTerraform(struct!.integrationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_service_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaMirrormakerServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaMirrormakerServiceIntegrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationType = this._integrationType;
    }
    if (this._sourceServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceServiceName = this._sourceServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaMirrormakerServiceIntegrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationType = undefined;
      this._sourceServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationType = value.integrationType;
      this._sourceServiceName = value.sourceServiceName;
    }
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // source_service_name - computed: false, optional: false, required: true
  private _sourceServiceName?: string; 
  public get sourceServiceName() {
    return this.getStringAttribute('source_service_name');
  }
  public set sourceServiceName(value: string) {
    this._sourceServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceNameInput() {
    return this._sourceServiceName;
  }
}

export class KafkaMirrormakerServiceIntegrationsList extends cdktf.ComplexList {
  public internalValue? : KafkaMirrormakerServiceIntegrations[] | cdktf.IResolvable

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
  public get(index: number): KafkaMirrormakerServiceIntegrationsOutputReference {
    return new KafkaMirrormakerServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaMirrormakerTag {
  /**
  * Service tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#key KafkaMirrormaker#key}
  */
  readonly key: string;
  /**
  * Service tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#value KafkaMirrormaker#value}
  */
  readonly value: string;
}

export function kafkaMirrormakerTagToTerraform(struct?: KafkaMirrormakerTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kafkaMirrormakerTagToHclTerraform(struct?: KafkaMirrormakerTag | cdktf.IResolvable): any {
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

export class KafkaMirrormakerTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaMirrormakerTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaMirrormakerTag | cdktf.IResolvable | undefined) {
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

export class KafkaMirrormakerTagList extends cdktf.ComplexList {
  public internalValue? : KafkaMirrormakerTag[] | cdktf.IResolvable

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
  public get(index: number): KafkaMirrormakerTagOutputReference {
    return new KafkaMirrormakerTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaMirrormakerTechEmails {
  /**
  * An email address to contact for technical issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#email KafkaMirrormaker#email}
  */
  readonly email: string;
}

export function kafkaMirrormakerTechEmailsToTerraform(struct?: KafkaMirrormakerTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function kafkaMirrormakerTechEmailsToHclTerraform(struct?: KafkaMirrormakerTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaMirrormakerTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaMirrormakerTechEmails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaMirrormakerTechEmails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class KafkaMirrormakerTechEmailsList extends cdktf.ComplexList {
  public internalValue? : KafkaMirrormakerTechEmails[] | cdktf.IResolvable

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
  public get(index: number): KafkaMirrormakerTechEmailsOutputReference {
    return new KafkaMirrormakerTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaMirrormakerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#create KafkaMirrormaker#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#default KafkaMirrormaker#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#delete KafkaMirrormaker#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#read KafkaMirrormaker#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#update KafkaMirrormaker#update}
  */
  readonly update?: string;
}

export function kafkaMirrormakerTimeoutsToTerraform(struct?: KafkaMirrormakerTimeouts | cdktf.IResolvable): any {
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


export function kafkaMirrormakerTimeoutsToHclTerraform(struct?: KafkaMirrormakerTimeouts | cdktf.IResolvable): any {
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

export class KafkaMirrormakerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaMirrormakerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaMirrormakerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker aiven_kafka_mirrormaker}
*/
export class KafkaMirrormaker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_kafka_mirrormaker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaMirrormaker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaMirrormaker to import
  * @param importFromId The id of the existing KafkaMirrormaker that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaMirrormaker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_kafka_mirrormaker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_mirrormaker aiven_kafka_mirrormaker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaMirrormakerConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaMirrormakerConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_kafka_mirrormaker',
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
    this._additionalDiskSpace = config.additionalDiskSpace;
    this._cloudName = config.cloudName;
    this._diskSpace = config.diskSpace;
    this._id = config.id;
    this._maintenanceWindowDow = config.maintenanceWindowDow;
    this._maintenanceWindowTime = config.maintenanceWindowTime;
    this._plan = config.plan;
    this._project = config.project;
    this._projectVpcId = config.projectVpcId;
    this._serviceName = config.serviceName;
    this._staticIps = config.staticIps;
    this._terminationProtection = config.terminationProtection;
    this._kafkaMirrormakerUserConfig.internalValue = config.kafkaMirrormakerUserConfig;
    this._serviceIntegrations.internalValue = config.serviceIntegrations;
    this._tag.internalValue = config.tag;
    this._techEmails.internalValue = config.techEmails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_disk_space - computed: true, optional: true, required: false
  private _additionalDiskSpace?: string; 
  public get additionalDiskSpace() {
    return this.getStringAttribute('additional_disk_space');
  }
  public set additionalDiskSpace(value: string) {
    this._additionalDiskSpace = value;
  }
  public resetAdditionalDiskSpace() {
    this._additionalDiskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDiskSpaceInput() {
    return this._additionalDiskSpace;
  }

  // cloud_name - computed: false, optional: true, required: false
  private _cloudName?: string; 
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }
  public set cloudName(value: string) {
    this._cloudName = value;
  }
  public resetCloudName() {
    this._cloudName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNameInput() {
    return this._cloudName;
  }

  // components - computed: true, optional: false, required: false
  private _components = new KafkaMirrormakerComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // disk_space - computed: false, optional: true, required: false
  private _diskSpace?: string; 
  public get diskSpace() {
    return this.getStringAttribute('disk_space');
  }
  public set diskSpace(value: string) {
    this._diskSpace = value;
  }
  public resetDiskSpace() {
    this._diskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSpaceInput() {
    return this._diskSpace;
  }

  // disk_space_cap - computed: true, optional: false, required: false
  public get diskSpaceCap() {
    return this.getStringAttribute('disk_space_cap');
  }

  // disk_space_default - computed: true, optional: false, required: false
  public get diskSpaceDefault() {
    return this.getStringAttribute('disk_space_default');
  }

  // disk_space_step - computed: true, optional: false, required: false
  public get diskSpaceStep() {
    return this.getStringAttribute('disk_space_step');
  }

  // disk_space_used - computed: true, optional: false, required: false
  public get diskSpaceUsed() {
    return this.getStringAttribute('disk_space_used');
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

  // maintenance_window_dow - computed: false, optional: true, required: false
  private _maintenanceWindowDow?: string; 
  public get maintenanceWindowDow() {
    return this.getStringAttribute('maintenance_window_dow');
  }
  public set maintenanceWindowDow(value: string) {
    this._maintenanceWindowDow = value;
  }
  public resetMaintenanceWindowDow() {
    this._maintenanceWindowDow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDowInput() {
    return this._maintenanceWindowDow;
  }

  // maintenance_window_enabled - computed: true, optional: false, required: false
  public get maintenanceWindowEnabled() {
    return this.getBooleanAttribute('maintenance_window_enabled');
  }

  // maintenance_window_time - computed: false, optional: true, required: false
  private _maintenanceWindowTime?: string; 
  public get maintenanceWindowTime() {
    return this.getStringAttribute('maintenance_window_time');
  }
  public set maintenanceWindowTime(value: string) {
    this._maintenanceWindowTime = value;
  }
  public resetMaintenanceWindowTime() {
    this._maintenanceWindowTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowTimeInput() {
    return this._maintenanceWindowTime;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
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

  // project_vpc_id - computed: false, optional: true, required: false
  private _projectVpcId?: string; 
  public get projectVpcId() {
    return this.getStringAttribute('project_vpc_id');
  }
  public set projectVpcId(value: string) {
    this._projectVpcId = value;
  }
  public resetProjectVpcId() {
    this._projectVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectVpcIdInput() {
    return this._projectVpcId;
  }

  // service_host - computed: true, optional: false, required: false
  public get serviceHost() {
    return this.getStringAttribute('service_host');
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

  // service_password - computed: true, optional: false, required: false
  public get servicePassword() {
    return this.getStringAttribute('service_password');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // service_uri - computed: true, optional: false, required: false
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }

  // service_username - computed: true, optional: false, required: false
  public get serviceUsername() {
    return this.getStringAttribute('service_username');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // static_ips - computed: false, optional: true, required: false
  private _staticIps?: string[]; 
  public get staticIps() {
    return cdktf.Fn.tolist(this.getListAttribute('static_ips'));
  }
  public set staticIps(value: string[]) {
    this._staticIps = value;
  }
  public resetStaticIps() {
    this._staticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpsInput() {
    return this._staticIps;
  }

  // termination_protection - computed: false, optional: true, required: false
  private _terminationProtection?: boolean | cdktf.IResolvable; 
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }
  public set terminationProtection(value: boolean | cdktf.IResolvable) {
    this._terminationProtection = value;
  }
  public resetTerminationProtection() {
    this._terminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionInput() {
    return this._terminationProtection;
  }

  // kafka_mirrormaker_user_config - computed: false, optional: true, required: false
  private _kafkaMirrormakerUserConfig = new KafkaMirrormakerKafkaMirrormakerUserConfigOutputReference(this, "kafka_mirrormaker_user_config");
  public get kafkaMirrormakerUserConfig() {
    return this._kafkaMirrormakerUserConfig;
  }
  public putKafkaMirrormakerUserConfig(value: KafkaMirrormakerKafkaMirrormakerUserConfig) {
    this._kafkaMirrormakerUserConfig.internalValue = value;
  }
  public resetKafkaMirrormakerUserConfig() {
    this._kafkaMirrormakerUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaMirrormakerUserConfigInput() {
    return this._kafkaMirrormakerUserConfig.internalValue;
  }

  // service_integrations - computed: false, optional: true, required: false
  private _serviceIntegrations = new KafkaMirrormakerServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }
  public putServiceIntegrations(value: KafkaMirrormakerServiceIntegrations[] | cdktf.IResolvable) {
    this._serviceIntegrations.internalValue = value;
  }
  public resetServiceIntegrations() {
    this._serviceIntegrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIntegrationsInput() {
    return this._serviceIntegrations.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new KafkaMirrormakerTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: KafkaMirrormakerTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // tech_emails - computed: false, optional: true, required: false
  private _techEmails = new KafkaMirrormakerTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }
  public putTechEmails(value: KafkaMirrormakerTechEmails[] | cdktf.IResolvable) {
    this._techEmails.internalValue = value;
  }
  public resetTechEmails() {
    this._techEmails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techEmailsInput() {
    return this._techEmails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KafkaMirrormakerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KafkaMirrormakerTimeouts) {
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
      additional_disk_space: cdktf.stringToTerraform(this._additionalDiskSpace),
      cloud_name: cdktf.stringToTerraform(this._cloudName),
      disk_space: cdktf.stringToTerraform(this._diskSpace),
      id: cdktf.stringToTerraform(this._id),
      maintenance_window_dow: cdktf.stringToTerraform(this._maintenanceWindowDow),
      maintenance_window_time: cdktf.stringToTerraform(this._maintenanceWindowTime),
      plan: cdktf.stringToTerraform(this._plan),
      project: cdktf.stringToTerraform(this._project),
      project_vpc_id: cdktf.stringToTerraform(this._projectVpcId),
      service_name: cdktf.stringToTerraform(this._serviceName),
      static_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._staticIps),
      termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
      kafka_mirrormaker_user_config: kafkaMirrormakerKafkaMirrormakerUserConfigToTerraform(this._kafkaMirrormakerUserConfig.internalValue),
      service_integrations: cdktf.listMapper(kafkaMirrormakerServiceIntegrationsToTerraform, true)(this._serviceIntegrations.internalValue),
      tag: cdktf.listMapper(kafkaMirrormakerTagToTerraform, true)(this._tag.internalValue),
      tech_emails: cdktf.listMapper(kafkaMirrormakerTechEmailsToTerraform, true)(this._techEmails.internalValue),
      timeouts: kafkaMirrormakerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_disk_space: {
        value: cdktf.stringToHclTerraform(this._additionalDiskSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_name: {
        value: cdktf.stringToHclTerraform(this._cloudName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_space: {
        value: cdktf.stringToHclTerraform(this._diskSpace),
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
      maintenance_window_dow: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowDow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_window_time: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
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
      project_vpc_id: {
        value: cdktf.stringToHclTerraform(this._projectVpcId),
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
      static_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._staticIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      termination_protection: {
        value: cdktf.booleanToHclTerraform(this._terminationProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kafka_mirrormaker_user_config: {
        value: kafkaMirrormakerKafkaMirrormakerUserConfigToHclTerraform(this._kafkaMirrormakerUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaMirrormakerKafkaMirrormakerUserConfigList",
      },
      service_integrations: {
        value: cdktf.listMapperHcl(kafkaMirrormakerServiceIntegrationsToHclTerraform, true)(this._serviceIntegrations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KafkaMirrormakerServiceIntegrationsList",
      },
      tag: {
        value: cdktf.listMapperHcl(kafkaMirrormakerTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KafkaMirrormakerTagList",
      },
      tech_emails: {
        value: cdktf.listMapperHcl(kafkaMirrormakerTechEmailsToHclTerraform, true)(this._techEmails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KafkaMirrormakerTechEmailsList",
      },
      timeouts: {
        value: kafkaMirrormakerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaMirrormakerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
