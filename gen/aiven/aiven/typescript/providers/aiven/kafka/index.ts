// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30  GiB to scale your service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the service nodes to go through a rolling restart, and there might be a short downtime for services without an autoscaler integration or high availability capabilities. The field can be safely removed when autoscaler is enabled without causing any changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#additional_disk_space Kafka#additional_disk_space}
  */
  readonly additionalDiskSpace?: string;
  /**
  * The cloud provider and region the service is hosted in. The format is `provider-region`, for example: `google-europe-west1`. The [available cloud regions](https://aiven.io/docs/platform/reference/list_of_clouds) can differ per project and service. Changing this value [migrates the service to another cloud provider or region](https://aiven.io/docs/platform/howto/migrate-services-cloud-region). The migration runs in the background and includes a DNS update to redirect traffic to the new region. Most services experience no downtime, but some databases may have a brief interruption during DNS propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#cloud_name Kafka#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * Create a default wildcard Kafka ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#default_acl Kafka#default_acl}
  */
  readonly defaultAcl?: boolean | cdktf.IResolvable;
  /**
  * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing will result in the service rebalancing. Please use `additional_disk_space` to specify the space to be added to the default disk space defined by the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#disk_space Kafka#disk_space}
  */
  readonly diskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#id Kafka#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Switch the service to use [Karapace](https://aiven.io/docs/products/kafka/karapace) for schema registry and REST proxy. This attribute is deprecated, use `schema_registry` and `kafka_rest` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#karapace Kafka#karapace}
  */
  readonly karapace?: boolean | cdktf.IResolvable;
  /**
  * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#maintenance_window_dow Kafka#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#maintenance_window_time Kafka#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available options can be seen from the [Aiven pricing page](https://aiven.io/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#plan Kafka#plan}
  */
  readonly plan: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#project Kafka#project}
  */
  readonly project: string;
  /**
  * Specifies the VPC the service should run in. If the value is not set, the service runs on the Public Internet. When set, the value should be given as a reference to set up dependencies correctly, and the VPC must be in the same cloud and region as the service itself. The service can be freely moved to and from VPC after creation, but doing so triggers migration to new servers, so the operation can take a significant amount of time to complete if the service has a lot of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#project_vpc_id Kafka#project_vpc_id}
  */
  readonly projectVpcId?: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#service_name Kafka#service_name}
  */
  readonly serviceName: string;
  /**
  * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a static ip resource is in the 'assigned' state it cannot be unbound from the node again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#static_ips Kafka#static_ips}
  */
  readonly staticIps?: string[];
  /**
  * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent unintentional service deletion. This does not shield against deleting databases or topics but for services with backups much of the content can at least be restored from backup in case accidental deletion is done.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#termination_protection Kafka#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka Kafka#kafka}
  */
  readonly kafka?: KafkaKafka;
  /**
  * kafka_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_user_config Kafka#kafka_user_config}
  */
  readonly kafkaUserConfig?: KafkaKafkaUserConfig;
  /**
  * service_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#service_integrations Kafka#service_integrations}
  */
  readonly serviceIntegrations?: KafkaServiceIntegrations[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#tag Kafka#tag}
  */
  readonly tag?: KafkaTag[] | cdktf.IResolvable;
  /**
  * tech_emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#tech_emails Kafka#tech_emails}
  */
  readonly techEmails?: KafkaTechEmails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#timeouts Kafka#timeouts}
  */
  readonly timeouts?: KafkaTimeouts;
}
export interface KafkaComponents {
}

export function kafkaComponentsToTerraform(struct?: KafkaComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kafkaComponentsToHclTerraform(struct?: KafkaComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KafkaComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaComponents | undefined) {
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

export class KafkaComponentsList extends cdktf.ComplexList {

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
  public get(index: number): KafkaComponentsOutputReference {
    return new KafkaComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaKafka {
  /**
  * Kafka server URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#uris Kafka#uris}
  */
  readonly uris?: string[];
}

export function kafkaKafkaToTerraform(struct?: KafkaKafkaOutputReference | KafkaKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function kafkaKafkaToHclTerraform(struct?: KafkaKafkaOutputReference | KafkaKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uris = value.uris;
    }
  }

  // access_cert - computed: true, optional: false, required: false
  public get accessCert() {
    return this.getStringAttribute('access_cert');
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // connect_uri - computed: true, optional: false, required: false
  public get connectUri() {
    return this.getStringAttribute('connect_uri');
  }

  // rest_uri - computed: true, optional: false, required: false
  public get restUri() {
    return this.getStringAttribute('rest_uri');
  }

  // schema_registry_uri - computed: true, optional: false, required: false
  public get schemaRegistryUri() {
    return this.getStringAttribute('schema_registry_uri');
  }

  // uris - computed: true, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}
export interface KafkaKafkaUserConfigFollowerFetching {
  /**
  * Whether to enable the follower fetching functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#enabled Kafka#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function kafkaKafkaUserConfigFollowerFetchingToTerraform(struct?: KafkaKafkaUserConfigFollowerFetchingOutputReference | KafkaKafkaUserConfigFollowerFetching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function kafkaKafkaUserConfigFollowerFetchingToHclTerraform(struct?: KafkaKafkaUserConfigFollowerFetchingOutputReference | KafkaKafkaUserConfigFollowerFetching): any {
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

export class KafkaKafkaUserConfigFollowerFetchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigFollowerFetching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigFollowerFetching | undefined) {
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
export interface KafkaKafkaUserConfigIpFilterObject {
  /**
  * Description for IP filter list entry. Example: `Production service IP range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#description Kafka#description}
  */
  readonly description?: string;
  /**
  * CIDR address block. Example: `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#network Kafka#network}
  */
  readonly network: string;
}

export function kafkaKafkaUserConfigIpFilterObjectToTerraform(struct?: KafkaKafkaUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function kafkaKafkaUserConfigIpFilterObjectToHclTerraform(struct?: KafkaKafkaUserConfigIpFilterObject | cdktf.IResolvable): any {
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

export class KafkaKafkaUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaKafkaUserConfigIpFilterObject | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaKafkaUserConfigIpFilterObject | cdktf.IResolvable | undefined) {
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

export class KafkaKafkaUserConfigIpFilterObjectList extends cdktf.ComplexList {
  public internalValue? : KafkaKafkaUserConfigIpFilterObject[] | cdktf.IResolvable

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
  public get(index: number): KafkaKafkaUserConfigIpFilterObjectOutputReference {
    return new KafkaKafkaUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaKafkaUserConfigKafka {
  /**
  * Enable auto-creation of topics. (Default: true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#auto_create_topics_enable Kafka#auto_create_topics_enable}
  */
  readonly autoCreateTopicsEnable?: boolean | cdktf.IResolvable;
  /**
  * Enum: `gzip`, `lz4`, `producer`, `snappy`, `uncompressed`, `zstd`. Specify the final compression type for a given topic. This configuration accepts the standard compression codecs (`gzip`, `snappy`, `lz4`, `zstd`). It additionally accepts `uncompressed` which is equivalent to no compression; and `producer` which means retain the original compression codec set by the producer.(Default: producer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#compression_type Kafka#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Idle connections timeout: the server socket processor threads close the connections that idle for longer than this. (Default: 600000 ms (10 minutes)). Example: `540000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#connections_max_idle_ms Kafka#connections_max_idle_ms}
  */
  readonly connectionsMaxIdleMs?: number;
  /**
  * Replication factor for auto-created topics (Default: 3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#default_replication_factor Kafka#default_replication_factor}
  */
  readonly defaultReplicationFactor?: number;
  /**
  * The amount of time, in milliseconds, the group coordinator will wait for more consumers to join a new group before performing the first rebalance. A longer delay means potentially fewer rebalances, but increases the time until processing begins. The default value for this is 3 seconds. During development and testing it might be desirable to set this to 0 in order to not delay test execution time. (Default: 3000 ms (3 seconds)). Example: `3000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#group_initial_rebalance_delay_ms Kafka#group_initial_rebalance_delay_ms}
  */
  readonly groupInitialRebalanceDelayMs?: number;
  /**
  * The maximum allowed session timeout for registered consumers. Longer timeouts give consumers more time to process messages in between heartbeats at the cost of a longer time to detect failures. Default: 1800000 ms (30 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#group_max_session_timeout_ms Kafka#group_max_session_timeout_ms}
  */
  readonly groupMaxSessionTimeoutMs?: number;
  /**
  * The minimum allowed session timeout for registered consumers. Longer timeouts give consumers more time to process messages in between heartbeats at the cost of a longer time to detect failures. (Default: 6000 ms (6 seconds)). Example: `6000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#group_min_session_timeout_ms Kafka#group_min_session_timeout_ms}
  */
  readonly groupMinSessionTimeoutMs?: number;
  /**
  * How long are delete records retained? (Default: 86400000 (1 day)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_cleaner_delete_retention_ms Kafka#log_cleaner_delete_retention_ms}
  */
  readonly logCleanerDeleteRetentionMs?: number;
  /**
  * The maximum amount of time message will remain uncompacted. Only applicable for logs that are being compacted. (Default: 9223372036854775807 ms (Long.MAX_VALUE)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_cleaner_max_compaction_lag_ms Kafka#log_cleaner_max_compaction_lag_ms}
  */
  readonly logCleanerMaxCompactionLagMs?: number;
  /**
  * Controls log compactor frequency. Larger value means more frequent compactions but also more space wasted for logs. Consider setting log.cleaner.max.compaction.lag.ms to enforce compactions sooner, instead of setting a very high value for this option. (Default: 0.5). Example: `0.5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_cleaner_min_cleanable_ratio Kafka#log_cleaner_min_cleanable_ratio}
  */
  readonly logCleanerMinCleanableRatio?: number;
  /**
  * The minimum time a message will remain uncompacted in the log. Only applicable for logs that are being compacted. (Default: 0 ms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_cleaner_min_compaction_lag_ms Kafka#log_cleaner_min_compaction_lag_ms}
  */
  readonly logCleanerMinCompactionLagMs?: number;
  /**
  * Enum: `compact`, `compact,delete`, `delete`. The default cleanup policy for segments beyond the retention window (Default: delete).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_cleanup_policy Kafka#log_cleanup_policy}
  */
  readonly logCleanupPolicy?: string;
  /**
  * The number of messages accumulated on a log partition before messages are flushed to disk (Default: 9223372036854775807 (Long.MAX_VALUE)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_flush_interval_messages Kafka#log_flush_interval_messages}
  */
  readonly logFlushIntervalMessages?: number;
  /**
  * The maximum time in ms that a message in any topic is kept in memory (page-cache) before flushed to disk. If not set, the value in log.flush.scheduler.interval.ms is used (Default: null).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_flush_interval_ms Kafka#log_flush_interval_ms}
  */
  readonly logFlushIntervalMs?: number;
  /**
  * The interval with which Kafka adds an entry to the offset index (Default: 4096 bytes (4 kibibytes)). Example: `4096`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_index_interval_bytes Kafka#log_index_interval_bytes}
  */
  readonly logIndexIntervalBytes?: number;
  /**
  * The maximum size in bytes of the offset index (Default: 10485760 (10 mebibytes)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_index_size_max_bytes Kafka#log_index_size_max_bytes}
  */
  readonly logIndexSizeMaxBytes?: number;
  /**
  * The maximum size of local log segments that can grow for a partition before it gets eligible for deletion. If set to -2, the value of log.retention.bytes is used. The effective value should always be less than or equal to log.retention.bytes value. (Default: -2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_local_retention_bytes Kafka#log_local_retention_bytes}
  */
  readonly logLocalRetentionBytes?: number;
  /**
  * The number of milliseconds to keep the local log segments before it gets eligible for deletion. If set to -2, the value of log.retention.ms is used. The effective value should always be less than or equal to log.retention.ms value. (Default: -2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_local_retention_ms Kafka#log_local_retention_ms}
  */
  readonly logLocalRetentionMs?: number;
  /**
  * This configuration controls whether down-conversion of message formats is enabled to satisfy consume requests. (Default: true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_message_downconversion_enable Kafka#log_message_downconversion_enable}
  */
  readonly logMessageDownconversionEnable?: boolean | cdktf.IResolvable;
  /**
  * The maximum difference allowed between the timestamp when a broker receives a message and the timestamp specified in the message. If message.timestamp.type=CreateTime, a message will be rejected if the difference in timestamp exceeds this threshold. Applies only for messages with timestamps later than the broker's timestamp. (Default: 9223372036854775807 (Long.MAX_VALUE)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_message_timestamp_after_max_ms Kafka#log_message_timestamp_after_max_ms}
  */
  readonly logMessageTimestampAfterMaxMs?: number;
  /**
  * The maximum difference allowed between the timestamp when a broker receives a message and the timestamp specified in the message. If message.timestamp.type=CreateTime, a message will be rejected if the difference in timestamp exceeds this threshold. Applies only for messages with timestamps earlier than the broker's timestamp. (Default: 9223372036854775807 (Long.MAX_VALUE)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_message_timestamp_before_max_ms Kafka#log_message_timestamp_before_max_ms}
  */
  readonly logMessageTimestampBeforeMaxMs?: number;
  /**
  * The maximum difference allowed between the timestamp when a broker receives a message and the timestamp specified in the message (Default: 9223372036854775807 (Long.MAX_VALUE)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_message_timestamp_difference_max_ms Kafka#log_message_timestamp_difference_max_ms}
  */
  readonly logMessageTimestampDifferenceMaxMs?: number;
  /**
  * Enum: `CreateTime`, `LogAppendTime`. Define whether the timestamp in the message is message create time or log append time. (Default: CreateTime).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_message_timestamp_type Kafka#log_message_timestamp_type}
  */
  readonly logMessageTimestampType?: string;
  /**
  * Should pre allocate file when create new segment? (Default: false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_preallocate Kafka#log_preallocate}
  */
  readonly logPreallocate?: boolean | cdktf.IResolvable;
  /**
  * The maximum size of the log before deleting messages (Default: -1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_retention_bytes Kafka#log_retention_bytes}
  */
  readonly logRetentionBytes?: number;
  /**
  * The number of hours to keep a log file before deleting it (Default: 168 hours (1 week)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_retention_hours Kafka#log_retention_hours}
  */
  readonly logRetentionHours?: number;
  /**
  * The number of milliseconds to keep a log file before deleting it (in milliseconds), If not set, the value in log.retention.minutes is used. If set to -1, no time limit is applied. (Default: null, log.retention.hours applies).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_retention_ms Kafka#log_retention_ms}
  */
  readonly logRetentionMs?: number;
  /**
  * The maximum jitter to subtract from logRollTimeMillis (in milliseconds). If not set, the value in log.roll.jitter.hours is used (Default: null).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_roll_jitter_ms Kafka#log_roll_jitter_ms}
  */
  readonly logRollJitterMs?: number;
  /**
  * The maximum time before a new log segment is rolled out (in milliseconds). (Default: null, log.roll.hours applies (Default: 168, 7 days)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_roll_ms Kafka#log_roll_ms}
  */
  readonly logRollMs?: number;
  /**
  * The maximum size of a single log file (Default: 1073741824 bytes (1 gibibyte)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_segment_bytes Kafka#log_segment_bytes}
  */
  readonly logSegmentBytes?: number;
  /**
  * The amount of time to wait before deleting a file from the filesystem (Default: 60000 ms (1 minute)). Example: `60000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#log_segment_delete_delay_ms Kafka#log_segment_delete_delay_ms}
  */
  readonly logSegmentDeleteDelayMs?: number;
  /**
  * The maximum number of connections allowed from each ip address (Default: 2147483647).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#max_connections_per_ip Kafka#max_connections_per_ip}
  */
  readonly maxConnectionsPerIp?: number;
  /**
  * The maximum number of incremental fetch sessions that the broker will maintain. (Default: 1000). Example: `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#max_incremental_fetch_session_cache_slots Kafka#max_incremental_fetch_session_cache_slots}
  */
  readonly maxIncrementalFetchSessionCacheSlots?: number;
  /**
  * The maximum size of message that the server can receive. (Default: 1048588 bytes (1 mebibyte + 12 bytes)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#message_max_bytes Kafka#message_max_bytes}
  */
  readonly messageMaxBytes?: number;
  /**
  * When a producer sets acks to `all` (or `-1`), min.insync.replicas specifies the minimum number of replicas that must acknowledge a write for the write to be considered successful. (Default: 1). Example: `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#min_insync_replicas Kafka#min_insync_replicas}
  */
  readonly minInsyncReplicas?: number;
  /**
  * Number of partitions for auto-created topics (Default: 1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#num_partitions Kafka#num_partitions}
  */
  readonly numPartitions?: number;
  /**
  * Log retention window in minutes for offsets topic (Default: 10080 minutes (7 days)). Example: `10080`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#offsets_retention_minutes Kafka#offsets_retention_minutes}
  */
  readonly offsetsRetentionMinutes?: number;
  /**
  * The purge interval (in number of requests) of the producer request purgatory (Default: 1000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#producer_purgatory_purge_interval_requests Kafka#producer_purgatory_purge_interval_requests}
  */
  readonly producerPurgatoryPurgeIntervalRequests?: number;
  /**
  * The number of bytes of messages to attempt to fetch for each partition . This is not an absolute maximum, if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that progress can be made. (Default: 1048576 bytes (1 mebibytes)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#replica_fetch_max_bytes Kafka#replica_fetch_max_bytes}
  */
  readonly replicaFetchMaxBytes?: number;
  /**
  * Maximum bytes expected for the entire fetch response. Records are fetched in batches, and if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that progress can be made. As such, this is not an absolute maximum. (Default: 10485760 bytes (10 mebibytes)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#replica_fetch_response_max_bytes Kafka#replica_fetch_response_max_bytes}
  */
  readonly replicaFetchResponseMaxBytes?: number;
  /**
  * The (optional) comma-delimited setting for the broker to use to verify that the JWT was issued for one of the expected audiences. (Default: null).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#sasl_oauthbearer_expected_audience Kafka#sasl_oauthbearer_expected_audience}
  */
  readonly saslOauthbearerExpectedAudience?: string;
  /**
  * Optional setting for the broker to use to verify that the JWT was created by the expected issuer.(Default: null).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#sasl_oauthbearer_expected_issuer Kafka#sasl_oauthbearer_expected_issuer}
  */
  readonly saslOauthbearerExpectedIssuer?: string;
  /**
  * OIDC JWKS endpoint URL. By setting this the SASL SSL OAuth2/OIDC authentication is enabled. See also other options for SASL OAuth2/OIDC. (Default: null).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#sasl_oauthbearer_jwks_endpoint_url Kafka#sasl_oauthbearer_jwks_endpoint_url}
  */
  readonly saslOauthbearerJwksEndpointUrl?: string;
  /**
  * Name of the scope from which to extract the subject claim from the JWT.(Default: sub).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#sasl_oauthbearer_sub_claim_name Kafka#sasl_oauthbearer_sub_claim_name}
  */
  readonly saslOauthbearerSubClaimName?: string;
  /**
  * The maximum number of bytes in a socket request (Default: 104857600 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#socket_request_max_bytes Kafka#socket_request_max_bytes}
  */
  readonly socketRequestMaxBytes?: number;
  /**
  * Enable verification that checks that the partition has been added to the transaction before writing transactional records to the partition. (Default: true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#transaction_partition_verification_enable Kafka#transaction_partition_verification_enable}
  */
  readonly transactionPartitionVerificationEnable?: boolean | cdktf.IResolvable;
  /**
  * The interval at which to remove transactions that have expired due to transactional.id.expiration.ms passing (Default: 3600000 ms (1 hour)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#transaction_remove_expired_transaction_cleanup_interval_ms Kafka#transaction_remove_expired_transaction_cleanup_interval_ms}
  */
  readonly transactionRemoveExpiredTransactionCleanupIntervalMs?: number;
  /**
  * The transaction topic segment bytes should be kept relatively small in order to facilitate faster log compaction and cache loads (Default: 104857600 bytes (100 mebibytes)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#transaction_state_log_segment_bytes Kafka#transaction_state_log_segment_bytes}
  */
  readonly transactionStateLogSegmentBytes?: number;
}

export function kafkaKafkaUserConfigKafkaToTerraform(struct?: KafkaKafkaUserConfigKafkaOutputReference | KafkaKafkaUserConfigKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_create_topics_enable: cdktf.booleanToTerraform(struct!.autoCreateTopicsEnable),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    connections_max_idle_ms: cdktf.numberToTerraform(struct!.connectionsMaxIdleMs),
    default_replication_factor: cdktf.numberToTerraform(struct!.defaultReplicationFactor),
    group_initial_rebalance_delay_ms: cdktf.numberToTerraform(struct!.groupInitialRebalanceDelayMs),
    group_max_session_timeout_ms: cdktf.numberToTerraform(struct!.groupMaxSessionTimeoutMs),
    group_min_session_timeout_ms: cdktf.numberToTerraform(struct!.groupMinSessionTimeoutMs),
    log_cleaner_delete_retention_ms: cdktf.numberToTerraform(struct!.logCleanerDeleteRetentionMs),
    log_cleaner_max_compaction_lag_ms: cdktf.numberToTerraform(struct!.logCleanerMaxCompactionLagMs),
    log_cleaner_min_cleanable_ratio: cdktf.numberToTerraform(struct!.logCleanerMinCleanableRatio),
    log_cleaner_min_compaction_lag_ms: cdktf.numberToTerraform(struct!.logCleanerMinCompactionLagMs),
    log_cleanup_policy: cdktf.stringToTerraform(struct!.logCleanupPolicy),
    log_flush_interval_messages: cdktf.numberToTerraform(struct!.logFlushIntervalMessages),
    log_flush_interval_ms: cdktf.numberToTerraform(struct!.logFlushIntervalMs),
    log_index_interval_bytes: cdktf.numberToTerraform(struct!.logIndexIntervalBytes),
    log_index_size_max_bytes: cdktf.numberToTerraform(struct!.logIndexSizeMaxBytes),
    log_local_retention_bytes: cdktf.numberToTerraform(struct!.logLocalRetentionBytes),
    log_local_retention_ms: cdktf.numberToTerraform(struct!.logLocalRetentionMs),
    log_message_downconversion_enable: cdktf.booleanToTerraform(struct!.logMessageDownconversionEnable),
    log_message_timestamp_after_max_ms: cdktf.numberToTerraform(struct!.logMessageTimestampAfterMaxMs),
    log_message_timestamp_before_max_ms: cdktf.numberToTerraform(struct!.logMessageTimestampBeforeMaxMs),
    log_message_timestamp_difference_max_ms: cdktf.numberToTerraform(struct!.logMessageTimestampDifferenceMaxMs),
    log_message_timestamp_type: cdktf.stringToTerraform(struct!.logMessageTimestampType),
    log_preallocate: cdktf.booleanToTerraform(struct!.logPreallocate),
    log_retention_bytes: cdktf.numberToTerraform(struct!.logRetentionBytes),
    log_retention_hours: cdktf.numberToTerraform(struct!.logRetentionHours),
    log_retention_ms: cdktf.numberToTerraform(struct!.logRetentionMs),
    log_roll_jitter_ms: cdktf.numberToTerraform(struct!.logRollJitterMs),
    log_roll_ms: cdktf.numberToTerraform(struct!.logRollMs),
    log_segment_bytes: cdktf.numberToTerraform(struct!.logSegmentBytes),
    log_segment_delete_delay_ms: cdktf.numberToTerraform(struct!.logSegmentDeleteDelayMs),
    max_connections_per_ip: cdktf.numberToTerraform(struct!.maxConnectionsPerIp),
    max_incremental_fetch_session_cache_slots: cdktf.numberToTerraform(struct!.maxIncrementalFetchSessionCacheSlots),
    message_max_bytes: cdktf.numberToTerraform(struct!.messageMaxBytes),
    min_insync_replicas: cdktf.numberToTerraform(struct!.minInsyncReplicas),
    num_partitions: cdktf.numberToTerraform(struct!.numPartitions),
    offsets_retention_minutes: cdktf.numberToTerraform(struct!.offsetsRetentionMinutes),
    producer_purgatory_purge_interval_requests: cdktf.numberToTerraform(struct!.producerPurgatoryPurgeIntervalRequests),
    replica_fetch_max_bytes: cdktf.numberToTerraform(struct!.replicaFetchMaxBytes),
    replica_fetch_response_max_bytes: cdktf.numberToTerraform(struct!.replicaFetchResponseMaxBytes),
    sasl_oauthbearer_expected_audience: cdktf.stringToTerraform(struct!.saslOauthbearerExpectedAudience),
    sasl_oauthbearer_expected_issuer: cdktf.stringToTerraform(struct!.saslOauthbearerExpectedIssuer),
    sasl_oauthbearer_jwks_endpoint_url: cdktf.stringToTerraform(struct!.saslOauthbearerJwksEndpointUrl),
    sasl_oauthbearer_sub_claim_name: cdktf.stringToTerraform(struct!.saslOauthbearerSubClaimName),
    socket_request_max_bytes: cdktf.numberToTerraform(struct!.socketRequestMaxBytes),
    transaction_partition_verification_enable: cdktf.booleanToTerraform(struct!.transactionPartitionVerificationEnable),
    transaction_remove_expired_transaction_cleanup_interval_ms: cdktf.numberToTerraform(struct!.transactionRemoveExpiredTransactionCleanupIntervalMs),
    transaction_state_log_segment_bytes: cdktf.numberToTerraform(struct!.transactionStateLogSegmentBytes),
  }
}


export function kafkaKafkaUserConfigKafkaToHclTerraform(struct?: KafkaKafkaUserConfigKafkaOutputReference | KafkaKafkaUserConfigKafka): any {
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
    connections_max_idle_ms: {
      value: cdktf.numberToHclTerraform(struct!.connectionsMaxIdleMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_replication_factor: {
      value: cdktf.numberToHclTerraform(struct!.defaultReplicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_initial_rebalance_delay_ms: {
      value: cdktf.numberToHclTerraform(struct!.groupInitialRebalanceDelayMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_max_session_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.groupMaxSessionTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_min_session_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.groupMinSessionTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_cleaner_delete_retention_ms: {
      value: cdktf.numberToHclTerraform(struct!.logCleanerDeleteRetentionMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_cleaner_max_compaction_lag_ms: {
      value: cdktf.numberToHclTerraform(struct!.logCleanerMaxCompactionLagMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_cleaner_min_cleanable_ratio: {
      value: cdktf.numberToHclTerraform(struct!.logCleanerMinCleanableRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_cleaner_min_compaction_lag_ms: {
      value: cdktf.numberToHclTerraform(struct!.logCleanerMinCompactionLagMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_cleanup_policy: {
      value: cdktf.stringToHclTerraform(struct!.logCleanupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_flush_interval_messages: {
      value: cdktf.numberToHclTerraform(struct!.logFlushIntervalMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_flush_interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.logFlushIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_index_interval_bytes: {
      value: cdktf.numberToHclTerraform(struct!.logIndexIntervalBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_index_size_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.logIndexSizeMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_local_retention_bytes: {
      value: cdktf.numberToHclTerraform(struct!.logLocalRetentionBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_local_retention_ms: {
      value: cdktf.numberToHclTerraform(struct!.logLocalRetentionMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_message_downconversion_enable: {
      value: cdktf.booleanToHclTerraform(struct!.logMessageDownconversionEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_message_timestamp_after_max_ms: {
      value: cdktf.numberToHclTerraform(struct!.logMessageTimestampAfterMaxMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_message_timestamp_before_max_ms: {
      value: cdktf.numberToHclTerraform(struct!.logMessageTimestampBeforeMaxMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_message_timestamp_difference_max_ms: {
      value: cdktf.numberToHclTerraform(struct!.logMessageTimestampDifferenceMaxMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_message_timestamp_type: {
      value: cdktf.stringToHclTerraform(struct!.logMessageTimestampType),
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
      value: cdktf.numberToHclTerraform(struct!.logRetentionBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_retention_hours: {
      value: cdktf.numberToHclTerraform(struct!.logRetentionHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_retention_ms: {
      value: cdktf.numberToHclTerraform(struct!.logRetentionMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_roll_jitter_ms: {
      value: cdktf.numberToHclTerraform(struct!.logRollJitterMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_roll_ms: {
      value: cdktf.numberToHclTerraform(struct!.logRollMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_segment_bytes: {
      value: cdktf.numberToHclTerraform(struct!.logSegmentBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_segment_delete_delay_ms: {
      value: cdktf.numberToHclTerraform(struct!.logSegmentDeleteDelayMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_connections_per_ip: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionsPerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_incremental_fetch_session_cache_slots: {
      value: cdktf.numberToHclTerraform(struct!.maxIncrementalFetchSessionCacheSlots),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.messageMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_insync_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minInsyncReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_partitions: {
      value: cdktf.numberToHclTerraform(struct!.numPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offsets_retention_minutes: {
      value: cdktf.numberToHclTerraform(struct!.offsetsRetentionMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_purgatory_purge_interval_requests: {
      value: cdktf.numberToHclTerraform(struct!.producerPurgatoryPurgeIntervalRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_fetch_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.replicaFetchMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_fetch_response_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.replicaFetchResponseMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sasl_oauthbearer_expected_audience: {
      value: cdktf.stringToHclTerraform(struct!.saslOauthbearerExpectedAudience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_oauthbearer_expected_issuer: {
      value: cdktf.stringToHclTerraform(struct!.saslOauthbearerExpectedIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_oauthbearer_jwks_endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.saslOauthbearerJwksEndpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_oauthbearer_sub_claim_name: {
      value: cdktf.stringToHclTerraform(struct!.saslOauthbearerSubClaimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socket_request_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.socketRequestMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transaction_partition_verification_enable: {
      value: cdktf.booleanToHclTerraform(struct!.transactionPartitionVerificationEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transaction_remove_expired_transaction_cleanup_interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.transactionRemoveExpiredTransactionCleanupIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transaction_state_log_segment_bytes: {
      value: cdktf.numberToHclTerraform(struct!.transactionStateLogSegmentBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigKafka | undefined {
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
    if (this._connectionsMaxIdleMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionsMaxIdleMs = this._connectionsMaxIdleMs;
    }
    if (this._defaultReplicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultReplicationFactor = this._defaultReplicationFactor;
    }
    if (this._groupInitialRebalanceDelayMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupInitialRebalanceDelayMs = this._groupInitialRebalanceDelayMs;
    }
    if (this._groupMaxSessionTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMaxSessionTimeoutMs = this._groupMaxSessionTimeoutMs;
    }
    if (this._groupMinSessionTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMinSessionTimeoutMs = this._groupMinSessionTimeoutMs;
    }
    if (this._logCleanerDeleteRetentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logCleanerDeleteRetentionMs = this._logCleanerDeleteRetentionMs;
    }
    if (this._logCleanerMaxCompactionLagMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logCleanerMaxCompactionLagMs = this._logCleanerMaxCompactionLagMs;
    }
    if (this._logCleanerMinCleanableRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.logCleanerMinCleanableRatio = this._logCleanerMinCleanableRatio;
    }
    if (this._logCleanerMinCompactionLagMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logCleanerMinCompactionLagMs = this._logCleanerMinCompactionLagMs;
    }
    if (this._logCleanupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.logCleanupPolicy = this._logCleanupPolicy;
    }
    if (this._logFlushIntervalMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFlushIntervalMessages = this._logFlushIntervalMessages;
    }
    if (this._logFlushIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFlushIntervalMs = this._logFlushIntervalMs;
    }
    if (this._logIndexIntervalBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logIndexIntervalBytes = this._logIndexIntervalBytes;
    }
    if (this._logIndexSizeMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logIndexSizeMaxBytes = this._logIndexSizeMaxBytes;
    }
    if (this._logLocalRetentionBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLocalRetentionBytes = this._logLocalRetentionBytes;
    }
    if (this._logLocalRetentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLocalRetentionMs = this._logLocalRetentionMs;
    }
    if (this._logMessageDownconversionEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMessageDownconversionEnable = this._logMessageDownconversionEnable;
    }
    if (this._logMessageTimestampAfterMaxMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMessageTimestampAfterMaxMs = this._logMessageTimestampAfterMaxMs;
    }
    if (this._logMessageTimestampBeforeMaxMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMessageTimestampBeforeMaxMs = this._logMessageTimestampBeforeMaxMs;
    }
    if (this._logMessageTimestampDifferenceMaxMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMessageTimestampDifferenceMaxMs = this._logMessageTimestampDifferenceMaxMs;
    }
    if (this._logMessageTimestampType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMessageTimestampType = this._logMessageTimestampType;
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
    if (this._logRetentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionMs = this._logRetentionMs;
    }
    if (this._logRollJitterMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRollJitterMs = this._logRollJitterMs;
    }
    if (this._logRollMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRollMs = this._logRollMs;
    }
    if (this._logSegmentBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSegmentBytes = this._logSegmentBytes;
    }
    if (this._logSegmentDeleteDelayMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSegmentDeleteDelayMs = this._logSegmentDeleteDelayMs;
    }
    if (this._maxConnectionsPerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionsPerIp = this._maxConnectionsPerIp;
    }
    if (this._maxIncrementalFetchSessionCacheSlots !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIncrementalFetchSessionCacheSlots = this._maxIncrementalFetchSessionCacheSlots;
    }
    if (this._messageMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageMaxBytes = this._messageMaxBytes;
    }
    if (this._minInsyncReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInsyncReplicas = this._minInsyncReplicas;
    }
    if (this._numPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPartitions = this._numPartitions;
    }
    if (this._offsetsRetentionMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetsRetentionMinutes = this._offsetsRetentionMinutes;
    }
    if (this._producerPurgatoryPurgeIntervalRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerPurgatoryPurgeIntervalRequests = this._producerPurgatoryPurgeIntervalRequests;
    }
    if (this._replicaFetchMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaFetchMaxBytes = this._replicaFetchMaxBytes;
    }
    if (this._replicaFetchResponseMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaFetchResponseMaxBytes = this._replicaFetchResponseMaxBytes;
    }
    if (this._saslOauthbearerExpectedAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslOauthbearerExpectedAudience = this._saslOauthbearerExpectedAudience;
    }
    if (this._saslOauthbearerExpectedIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslOauthbearerExpectedIssuer = this._saslOauthbearerExpectedIssuer;
    }
    if (this._saslOauthbearerJwksEndpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslOauthbearerJwksEndpointUrl = this._saslOauthbearerJwksEndpointUrl;
    }
    if (this._saslOauthbearerSubClaimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslOauthbearerSubClaimName = this._saslOauthbearerSubClaimName;
    }
    if (this._socketRequestMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketRequestMaxBytes = this._socketRequestMaxBytes;
    }
    if (this._transactionPartitionVerificationEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionPartitionVerificationEnable = this._transactionPartitionVerificationEnable;
    }
    if (this._transactionRemoveExpiredTransactionCleanupIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionRemoveExpiredTransactionCleanupIntervalMs = this._transactionRemoveExpiredTransactionCleanupIntervalMs;
    }
    if (this._transactionStateLogSegmentBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionStateLogSegmentBytes = this._transactionStateLogSegmentBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoCreateTopicsEnable = undefined;
      this._compressionType = undefined;
      this._connectionsMaxIdleMs = undefined;
      this._defaultReplicationFactor = undefined;
      this._groupInitialRebalanceDelayMs = undefined;
      this._groupMaxSessionTimeoutMs = undefined;
      this._groupMinSessionTimeoutMs = undefined;
      this._logCleanerDeleteRetentionMs = undefined;
      this._logCleanerMaxCompactionLagMs = undefined;
      this._logCleanerMinCleanableRatio = undefined;
      this._logCleanerMinCompactionLagMs = undefined;
      this._logCleanupPolicy = undefined;
      this._logFlushIntervalMessages = undefined;
      this._logFlushIntervalMs = undefined;
      this._logIndexIntervalBytes = undefined;
      this._logIndexSizeMaxBytes = undefined;
      this._logLocalRetentionBytes = undefined;
      this._logLocalRetentionMs = undefined;
      this._logMessageDownconversionEnable = undefined;
      this._logMessageTimestampAfterMaxMs = undefined;
      this._logMessageTimestampBeforeMaxMs = undefined;
      this._logMessageTimestampDifferenceMaxMs = undefined;
      this._logMessageTimestampType = undefined;
      this._logPreallocate = undefined;
      this._logRetentionBytes = undefined;
      this._logRetentionHours = undefined;
      this._logRetentionMs = undefined;
      this._logRollJitterMs = undefined;
      this._logRollMs = undefined;
      this._logSegmentBytes = undefined;
      this._logSegmentDeleteDelayMs = undefined;
      this._maxConnectionsPerIp = undefined;
      this._maxIncrementalFetchSessionCacheSlots = undefined;
      this._messageMaxBytes = undefined;
      this._minInsyncReplicas = undefined;
      this._numPartitions = undefined;
      this._offsetsRetentionMinutes = undefined;
      this._producerPurgatoryPurgeIntervalRequests = undefined;
      this._replicaFetchMaxBytes = undefined;
      this._replicaFetchResponseMaxBytes = undefined;
      this._saslOauthbearerExpectedAudience = undefined;
      this._saslOauthbearerExpectedIssuer = undefined;
      this._saslOauthbearerJwksEndpointUrl = undefined;
      this._saslOauthbearerSubClaimName = undefined;
      this._socketRequestMaxBytes = undefined;
      this._transactionPartitionVerificationEnable = undefined;
      this._transactionRemoveExpiredTransactionCleanupIntervalMs = undefined;
      this._transactionStateLogSegmentBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoCreateTopicsEnable = value.autoCreateTopicsEnable;
      this._compressionType = value.compressionType;
      this._connectionsMaxIdleMs = value.connectionsMaxIdleMs;
      this._defaultReplicationFactor = value.defaultReplicationFactor;
      this._groupInitialRebalanceDelayMs = value.groupInitialRebalanceDelayMs;
      this._groupMaxSessionTimeoutMs = value.groupMaxSessionTimeoutMs;
      this._groupMinSessionTimeoutMs = value.groupMinSessionTimeoutMs;
      this._logCleanerDeleteRetentionMs = value.logCleanerDeleteRetentionMs;
      this._logCleanerMaxCompactionLagMs = value.logCleanerMaxCompactionLagMs;
      this._logCleanerMinCleanableRatio = value.logCleanerMinCleanableRatio;
      this._logCleanerMinCompactionLagMs = value.logCleanerMinCompactionLagMs;
      this._logCleanupPolicy = value.logCleanupPolicy;
      this._logFlushIntervalMessages = value.logFlushIntervalMessages;
      this._logFlushIntervalMs = value.logFlushIntervalMs;
      this._logIndexIntervalBytes = value.logIndexIntervalBytes;
      this._logIndexSizeMaxBytes = value.logIndexSizeMaxBytes;
      this._logLocalRetentionBytes = value.logLocalRetentionBytes;
      this._logLocalRetentionMs = value.logLocalRetentionMs;
      this._logMessageDownconversionEnable = value.logMessageDownconversionEnable;
      this._logMessageTimestampAfterMaxMs = value.logMessageTimestampAfterMaxMs;
      this._logMessageTimestampBeforeMaxMs = value.logMessageTimestampBeforeMaxMs;
      this._logMessageTimestampDifferenceMaxMs = value.logMessageTimestampDifferenceMaxMs;
      this._logMessageTimestampType = value.logMessageTimestampType;
      this._logPreallocate = value.logPreallocate;
      this._logRetentionBytes = value.logRetentionBytes;
      this._logRetentionHours = value.logRetentionHours;
      this._logRetentionMs = value.logRetentionMs;
      this._logRollJitterMs = value.logRollJitterMs;
      this._logRollMs = value.logRollMs;
      this._logSegmentBytes = value.logSegmentBytes;
      this._logSegmentDeleteDelayMs = value.logSegmentDeleteDelayMs;
      this._maxConnectionsPerIp = value.maxConnectionsPerIp;
      this._maxIncrementalFetchSessionCacheSlots = value.maxIncrementalFetchSessionCacheSlots;
      this._messageMaxBytes = value.messageMaxBytes;
      this._minInsyncReplicas = value.minInsyncReplicas;
      this._numPartitions = value.numPartitions;
      this._offsetsRetentionMinutes = value.offsetsRetentionMinutes;
      this._producerPurgatoryPurgeIntervalRequests = value.producerPurgatoryPurgeIntervalRequests;
      this._replicaFetchMaxBytes = value.replicaFetchMaxBytes;
      this._replicaFetchResponseMaxBytes = value.replicaFetchResponseMaxBytes;
      this._saslOauthbearerExpectedAudience = value.saslOauthbearerExpectedAudience;
      this._saslOauthbearerExpectedIssuer = value.saslOauthbearerExpectedIssuer;
      this._saslOauthbearerJwksEndpointUrl = value.saslOauthbearerJwksEndpointUrl;
      this._saslOauthbearerSubClaimName = value.saslOauthbearerSubClaimName;
      this._socketRequestMaxBytes = value.socketRequestMaxBytes;
      this._transactionPartitionVerificationEnable = value.transactionPartitionVerificationEnable;
      this._transactionRemoveExpiredTransactionCleanupIntervalMs = value.transactionRemoveExpiredTransactionCleanupIntervalMs;
      this._transactionStateLogSegmentBytes = value.transactionStateLogSegmentBytes;
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

  // connections_max_idle_ms - computed: false, optional: true, required: false
  private _connectionsMaxIdleMs?: number; 
  public get connectionsMaxIdleMs() {
    return this.getNumberAttribute('connections_max_idle_ms');
  }
  public set connectionsMaxIdleMs(value: number) {
    this._connectionsMaxIdleMs = value;
  }
  public resetConnectionsMaxIdleMs() {
    this._connectionsMaxIdleMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsMaxIdleMsInput() {
    return this._connectionsMaxIdleMs;
  }

  // default_replication_factor - computed: false, optional: true, required: false
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

  // group_initial_rebalance_delay_ms - computed: false, optional: true, required: false
  private _groupInitialRebalanceDelayMs?: number; 
  public get groupInitialRebalanceDelayMs() {
    return this.getNumberAttribute('group_initial_rebalance_delay_ms');
  }
  public set groupInitialRebalanceDelayMs(value: number) {
    this._groupInitialRebalanceDelayMs = value;
  }
  public resetGroupInitialRebalanceDelayMs() {
    this._groupInitialRebalanceDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInitialRebalanceDelayMsInput() {
    return this._groupInitialRebalanceDelayMs;
  }

  // group_max_session_timeout_ms - computed: false, optional: true, required: false
  private _groupMaxSessionTimeoutMs?: number; 
  public get groupMaxSessionTimeoutMs() {
    return this.getNumberAttribute('group_max_session_timeout_ms');
  }
  public set groupMaxSessionTimeoutMs(value: number) {
    this._groupMaxSessionTimeoutMs = value;
  }
  public resetGroupMaxSessionTimeoutMs() {
    this._groupMaxSessionTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMaxSessionTimeoutMsInput() {
    return this._groupMaxSessionTimeoutMs;
  }

  // group_min_session_timeout_ms - computed: false, optional: true, required: false
  private _groupMinSessionTimeoutMs?: number; 
  public get groupMinSessionTimeoutMs() {
    return this.getNumberAttribute('group_min_session_timeout_ms');
  }
  public set groupMinSessionTimeoutMs(value: number) {
    this._groupMinSessionTimeoutMs = value;
  }
  public resetGroupMinSessionTimeoutMs() {
    this._groupMinSessionTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMinSessionTimeoutMsInput() {
    return this._groupMinSessionTimeoutMs;
  }

  // log_cleaner_delete_retention_ms - computed: false, optional: true, required: false
  private _logCleanerDeleteRetentionMs?: number; 
  public get logCleanerDeleteRetentionMs() {
    return this.getNumberAttribute('log_cleaner_delete_retention_ms');
  }
  public set logCleanerDeleteRetentionMs(value: number) {
    this._logCleanerDeleteRetentionMs = value;
  }
  public resetLogCleanerDeleteRetentionMs() {
    this._logCleanerDeleteRetentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCleanerDeleteRetentionMsInput() {
    return this._logCleanerDeleteRetentionMs;
  }

  // log_cleaner_max_compaction_lag_ms - computed: false, optional: true, required: false
  private _logCleanerMaxCompactionLagMs?: number; 
  public get logCleanerMaxCompactionLagMs() {
    return this.getNumberAttribute('log_cleaner_max_compaction_lag_ms');
  }
  public set logCleanerMaxCompactionLagMs(value: number) {
    this._logCleanerMaxCompactionLagMs = value;
  }
  public resetLogCleanerMaxCompactionLagMs() {
    this._logCleanerMaxCompactionLagMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCleanerMaxCompactionLagMsInput() {
    return this._logCleanerMaxCompactionLagMs;
  }

  // log_cleaner_min_cleanable_ratio - computed: false, optional: true, required: false
  private _logCleanerMinCleanableRatio?: number; 
  public get logCleanerMinCleanableRatio() {
    return this.getNumberAttribute('log_cleaner_min_cleanable_ratio');
  }
  public set logCleanerMinCleanableRatio(value: number) {
    this._logCleanerMinCleanableRatio = value;
  }
  public resetLogCleanerMinCleanableRatio() {
    this._logCleanerMinCleanableRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCleanerMinCleanableRatioInput() {
    return this._logCleanerMinCleanableRatio;
  }

  // log_cleaner_min_compaction_lag_ms - computed: false, optional: true, required: false
  private _logCleanerMinCompactionLagMs?: number; 
  public get logCleanerMinCompactionLagMs() {
    return this.getNumberAttribute('log_cleaner_min_compaction_lag_ms');
  }
  public set logCleanerMinCompactionLagMs(value: number) {
    this._logCleanerMinCompactionLagMs = value;
  }
  public resetLogCleanerMinCompactionLagMs() {
    this._logCleanerMinCompactionLagMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCleanerMinCompactionLagMsInput() {
    return this._logCleanerMinCompactionLagMs;
  }

  // log_cleanup_policy - computed: false, optional: true, required: false
  private _logCleanupPolicy?: string; 
  public get logCleanupPolicy() {
    return this.getStringAttribute('log_cleanup_policy');
  }
  public set logCleanupPolicy(value: string) {
    this._logCleanupPolicy = value;
  }
  public resetLogCleanupPolicy() {
    this._logCleanupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCleanupPolicyInput() {
    return this._logCleanupPolicy;
  }

  // log_flush_interval_messages - computed: false, optional: true, required: false
  private _logFlushIntervalMessages?: number; 
  public get logFlushIntervalMessages() {
    return this.getNumberAttribute('log_flush_interval_messages');
  }
  public set logFlushIntervalMessages(value: number) {
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
  private _logFlushIntervalMs?: number; 
  public get logFlushIntervalMs() {
    return this.getNumberAttribute('log_flush_interval_ms');
  }
  public set logFlushIntervalMs(value: number) {
    this._logFlushIntervalMs = value;
  }
  public resetLogFlushIntervalMs() {
    this._logFlushIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFlushIntervalMsInput() {
    return this._logFlushIntervalMs;
  }

  // log_index_interval_bytes - computed: false, optional: true, required: false
  private _logIndexIntervalBytes?: number; 
  public get logIndexIntervalBytes() {
    return this.getNumberAttribute('log_index_interval_bytes');
  }
  public set logIndexIntervalBytes(value: number) {
    this._logIndexIntervalBytes = value;
  }
  public resetLogIndexIntervalBytes() {
    this._logIndexIntervalBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIndexIntervalBytesInput() {
    return this._logIndexIntervalBytes;
  }

  // log_index_size_max_bytes - computed: false, optional: true, required: false
  private _logIndexSizeMaxBytes?: number; 
  public get logIndexSizeMaxBytes() {
    return this.getNumberAttribute('log_index_size_max_bytes');
  }
  public set logIndexSizeMaxBytes(value: number) {
    this._logIndexSizeMaxBytes = value;
  }
  public resetLogIndexSizeMaxBytes() {
    this._logIndexSizeMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIndexSizeMaxBytesInput() {
    return this._logIndexSizeMaxBytes;
  }

  // log_local_retention_bytes - computed: false, optional: true, required: false
  private _logLocalRetentionBytes?: number; 
  public get logLocalRetentionBytes() {
    return this.getNumberAttribute('log_local_retention_bytes');
  }
  public set logLocalRetentionBytes(value: number) {
    this._logLocalRetentionBytes = value;
  }
  public resetLogLocalRetentionBytes() {
    this._logLocalRetentionBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLocalRetentionBytesInput() {
    return this._logLocalRetentionBytes;
  }

  // log_local_retention_ms - computed: false, optional: true, required: false
  private _logLocalRetentionMs?: number; 
  public get logLocalRetentionMs() {
    return this.getNumberAttribute('log_local_retention_ms');
  }
  public set logLocalRetentionMs(value: number) {
    this._logLocalRetentionMs = value;
  }
  public resetLogLocalRetentionMs() {
    this._logLocalRetentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLocalRetentionMsInput() {
    return this._logLocalRetentionMs;
  }

  // log_message_downconversion_enable - computed: false, optional: true, required: false
  private _logMessageDownconversionEnable?: boolean | cdktf.IResolvable; 
  public get logMessageDownconversionEnable() {
    return this.getBooleanAttribute('log_message_downconversion_enable');
  }
  public set logMessageDownconversionEnable(value: boolean | cdktf.IResolvable) {
    this._logMessageDownconversionEnable = value;
  }
  public resetLogMessageDownconversionEnable() {
    this._logMessageDownconversionEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMessageDownconversionEnableInput() {
    return this._logMessageDownconversionEnable;
  }

  // log_message_timestamp_after_max_ms - computed: false, optional: true, required: false
  private _logMessageTimestampAfterMaxMs?: number; 
  public get logMessageTimestampAfterMaxMs() {
    return this.getNumberAttribute('log_message_timestamp_after_max_ms');
  }
  public set logMessageTimestampAfterMaxMs(value: number) {
    this._logMessageTimestampAfterMaxMs = value;
  }
  public resetLogMessageTimestampAfterMaxMs() {
    this._logMessageTimestampAfterMaxMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMessageTimestampAfterMaxMsInput() {
    return this._logMessageTimestampAfterMaxMs;
  }

  // log_message_timestamp_before_max_ms - computed: false, optional: true, required: false
  private _logMessageTimestampBeforeMaxMs?: number; 
  public get logMessageTimestampBeforeMaxMs() {
    return this.getNumberAttribute('log_message_timestamp_before_max_ms');
  }
  public set logMessageTimestampBeforeMaxMs(value: number) {
    this._logMessageTimestampBeforeMaxMs = value;
  }
  public resetLogMessageTimestampBeforeMaxMs() {
    this._logMessageTimestampBeforeMaxMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMessageTimestampBeforeMaxMsInput() {
    return this._logMessageTimestampBeforeMaxMs;
  }

  // log_message_timestamp_difference_max_ms - computed: false, optional: true, required: false
  private _logMessageTimestampDifferenceMaxMs?: number; 
  public get logMessageTimestampDifferenceMaxMs() {
    return this.getNumberAttribute('log_message_timestamp_difference_max_ms');
  }
  public set logMessageTimestampDifferenceMaxMs(value: number) {
    this._logMessageTimestampDifferenceMaxMs = value;
  }
  public resetLogMessageTimestampDifferenceMaxMs() {
    this._logMessageTimestampDifferenceMaxMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMessageTimestampDifferenceMaxMsInput() {
    return this._logMessageTimestampDifferenceMaxMs;
  }

  // log_message_timestamp_type - computed: false, optional: true, required: false
  private _logMessageTimestampType?: string; 
  public get logMessageTimestampType() {
    return this.getStringAttribute('log_message_timestamp_type');
  }
  public set logMessageTimestampType(value: string) {
    this._logMessageTimestampType = value;
  }
  public resetLogMessageTimestampType() {
    this._logMessageTimestampType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMessageTimestampTypeInput() {
    return this._logMessageTimestampType;
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

  // log_retention_hours - computed: false, optional: true, required: false
  private _logRetentionHours?: number; 
  public get logRetentionHours() {
    return this.getNumberAttribute('log_retention_hours');
  }
  public set logRetentionHours(value: number) {
    this._logRetentionHours = value;
  }
  public resetLogRetentionHours() {
    this._logRetentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionHoursInput() {
    return this._logRetentionHours;
  }

  // log_retention_ms - computed: false, optional: true, required: false
  private _logRetentionMs?: number; 
  public get logRetentionMs() {
    return this.getNumberAttribute('log_retention_ms');
  }
  public set logRetentionMs(value: number) {
    this._logRetentionMs = value;
  }
  public resetLogRetentionMs() {
    this._logRetentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionMsInput() {
    return this._logRetentionMs;
  }

  // log_roll_jitter_ms - computed: false, optional: true, required: false
  private _logRollJitterMs?: number; 
  public get logRollJitterMs() {
    return this.getNumberAttribute('log_roll_jitter_ms');
  }
  public set logRollJitterMs(value: number) {
    this._logRollJitterMs = value;
  }
  public resetLogRollJitterMs() {
    this._logRollJitterMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRollJitterMsInput() {
    return this._logRollJitterMs;
  }

  // log_roll_ms - computed: false, optional: true, required: false
  private _logRollMs?: number; 
  public get logRollMs() {
    return this.getNumberAttribute('log_roll_ms');
  }
  public set logRollMs(value: number) {
    this._logRollMs = value;
  }
  public resetLogRollMs() {
    this._logRollMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRollMsInput() {
    return this._logRollMs;
  }

  // log_segment_bytes - computed: false, optional: true, required: false
  private _logSegmentBytes?: number; 
  public get logSegmentBytes() {
    return this.getNumberAttribute('log_segment_bytes');
  }
  public set logSegmentBytes(value: number) {
    this._logSegmentBytes = value;
  }
  public resetLogSegmentBytes() {
    this._logSegmentBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSegmentBytesInput() {
    return this._logSegmentBytes;
  }

  // log_segment_delete_delay_ms - computed: false, optional: true, required: false
  private _logSegmentDeleteDelayMs?: number; 
  public get logSegmentDeleteDelayMs() {
    return this.getNumberAttribute('log_segment_delete_delay_ms');
  }
  public set logSegmentDeleteDelayMs(value: number) {
    this._logSegmentDeleteDelayMs = value;
  }
  public resetLogSegmentDeleteDelayMs() {
    this._logSegmentDeleteDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSegmentDeleteDelayMsInput() {
    return this._logSegmentDeleteDelayMs;
  }

  // max_connections_per_ip - computed: false, optional: true, required: false
  private _maxConnectionsPerIp?: number; 
  public get maxConnectionsPerIp() {
    return this.getNumberAttribute('max_connections_per_ip');
  }
  public set maxConnectionsPerIp(value: number) {
    this._maxConnectionsPerIp = value;
  }
  public resetMaxConnectionsPerIp() {
    this._maxConnectionsPerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsPerIpInput() {
    return this._maxConnectionsPerIp;
  }

  // max_incremental_fetch_session_cache_slots - computed: false, optional: true, required: false
  private _maxIncrementalFetchSessionCacheSlots?: number; 
  public get maxIncrementalFetchSessionCacheSlots() {
    return this.getNumberAttribute('max_incremental_fetch_session_cache_slots');
  }
  public set maxIncrementalFetchSessionCacheSlots(value: number) {
    this._maxIncrementalFetchSessionCacheSlots = value;
  }
  public resetMaxIncrementalFetchSessionCacheSlots() {
    this._maxIncrementalFetchSessionCacheSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIncrementalFetchSessionCacheSlotsInput() {
    return this._maxIncrementalFetchSessionCacheSlots;
  }

  // message_max_bytes - computed: false, optional: true, required: false
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

  // min_insync_replicas - computed: false, optional: true, required: false
  private _minInsyncReplicas?: number; 
  public get minInsyncReplicas() {
    return this.getNumberAttribute('min_insync_replicas');
  }
  public set minInsyncReplicas(value: number) {
    this._minInsyncReplicas = value;
  }
  public resetMinInsyncReplicas() {
    this._minInsyncReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInsyncReplicasInput() {
    return this._minInsyncReplicas;
  }

  // num_partitions - computed: false, optional: true, required: false
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

  // offsets_retention_minutes - computed: false, optional: true, required: false
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

  // producer_purgatory_purge_interval_requests - computed: false, optional: true, required: false
  private _producerPurgatoryPurgeIntervalRequests?: number; 
  public get producerPurgatoryPurgeIntervalRequests() {
    return this.getNumberAttribute('producer_purgatory_purge_interval_requests');
  }
  public set producerPurgatoryPurgeIntervalRequests(value: number) {
    this._producerPurgatoryPurgeIntervalRequests = value;
  }
  public resetProducerPurgatoryPurgeIntervalRequests() {
    this._producerPurgatoryPurgeIntervalRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerPurgatoryPurgeIntervalRequestsInput() {
    return this._producerPurgatoryPurgeIntervalRequests;
  }

  // replica_fetch_max_bytes - computed: false, optional: true, required: false
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

  // replica_fetch_response_max_bytes - computed: false, optional: true, required: false
  private _replicaFetchResponseMaxBytes?: number; 
  public get replicaFetchResponseMaxBytes() {
    return this.getNumberAttribute('replica_fetch_response_max_bytes');
  }
  public set replicaFetchResponseMaxBytes(value: number) {
    this._replicaFetchResponseMaxBytes = value;
  }
  public resetReplicaFetchResponseMaxBytes() {
    this._replicaFetchResponseMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaFetchResponseMaxBytesInput() {
    return this._replicaFetchResponseMaxBytes;
  }

  // sasl_oauthbearer_expected_audience - computed: false, optional: true, required: false
  private _saslOauthbearerExpectedAudience?: string; 
  public get saslOauthbearerExpectedAudience() {
    return this.getStringAttribute('sasl_oauthbearer_expected_audience');
  }
  public set saslOauthbearerExpectedAudience(value: string) {
    this._saslOauthbearerExpectedAudience = value;
  }
  public resetSaslOauthbearerExpectedAudience() {
    this._saslOauthbearerExpectedAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslOauthbearerExpectedAudienceInput() {
    return this._saslOauthbearerExpectedAudience;
  }

  // sasl_oauthbearer_expected_issuer - computed: false, optional: true, required: false
  private _saslOauthbearerExpectedIssuer?: string; 
  public get saslOauthbearerExpectedIssuer() {
    return this.getStringAttribute('sasl_oauthbearer_expected_issuer');
  }
  public set saslOauthbearerExpectedIssuer(value: string) {
    this._saslOauthbearerExpectedIssuer = value;
  }
  public resetSaslOauthbearerExpectedIssuer() {
    this._saslOauthbearerExpectedIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslOauthbearerExpectedIssuerInput() {
    return this._saslOauthbearerExpectedIssuer;
  }

  // sasl_oauthbearer_jwks_endpoint_url - computed: false, optional: true, required: false
  private _saslOauthbearerJwksEndpointUrl?: string; 
  public get saslOauthbearerJwksEndpointUrl() {
    return this.getStringAttribute('sasl_oauthbearer_jwks_endpoint_url');
  }
  public set saslOauthbearerJwksEndpointUrl(value: string) {
    this._saslOauthbearerJwksEndpointUrl = value;
  }
  public resetSaslOauthbearerJwksEndpointUrl() {
    this._saslOauthbearerJwksEndpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslOauthbearerJwksEndpointUrlInput() {
    return this._saslOauthbearerJwksEndpointUrl;
  }

  // sasl_oauthbearer_sub_claim_name - computed: false, optional: true, required: false
  private _saslOauthbearerSubClaimName?: string; 
  public get saslOauthbearerSubClaimName() {
    return this.getStringAttribute('sasl_oauthbearer_sub_claim_name');
  }
  public set saslOauthbearerSubClaimName(value: string) {
    this._saslOauthbearerSubClaimName = value;
  }
  public resetSaslOauthbearerSubClaimName() {
    this._saslOauthbearerSubClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslOauthbearerSubClaimNameInput() {
    return this._saslOauthbearerSubClaimName;
  }

  // socket_request_max_bytes - computed: false, optional: true, required: false
  private _socketRequestMaxBytes?: number; 
  public get socketRequestMaxBytes() {
    return this.getNumberAttribute('socket_request_max_bytes');
  }
  public set socketRequestMaxBytes(value: number) {
    this._socketRequestMaxBytes = value;
  }
  public resetSocketRequestMaxBytes() {
    this._socketRequestMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketRequestMaxBytesInput() {
    return this._socketRequestMaxBytes;
  }

  // transaction_partition_verification_enable - computed: false, optional: true, required: false
  private _transactionPartitionVerificationEnable?: boolean | cdktf.IResolvable; 
  public get transactionPartitionVerificationEnable() {
    return this.getBooleanAttribute('transaction_partition_verification_enable');
  }
  public set transactionPartitionVerificationEnable(value: boolean | cdktf.IResolvable) {
    this._transactionPartitionVerificationEnable = value;
  }
  public resetTransactionPartitionVerificationEnable() {
    this._transactionPartitionVerificationEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionPartitionVerificationEnableInput() {
    return this._transactionPartitionVerificationEnable;
  }

  // transaction_remove_expired_transaction_cleanup_interval_ms - computed: false, optional: true, required: false
  private _transactionRemoveExpiredTransactionCleanupIntervalMs?: number; 
  public get transactionRemoveExpiredTransactionCleanupIntervalMs() {
    return this.getNumberAttribute('transaction_remove_expired_transaction_cleanup_interval_ms');
  }
  public set transactionRemoveExpiredTransactionCleanupIntervalMs(value: number) {
    this._transactionRemoveExpiredTransactionCleanupIntervalMs = value;
  }
  public resetTransactionRemoveExpiredTransactionCleanupIntervalMs() {
    this._transactionRemoveExpiredTransactionCleanupIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionRemoveExpiredTransactionCleanupIntervalMsInput() {
    return this._transactionRemoveExpiredTransactionCleanupIntervalMs;
  }

  // transaction_state_log_segment_bytes - computed: false, optional: true, required: false
  private _transactionStateLogSegmentBytes?: number; 
  public get transactionStateLogSegmentBytes() {
    return this.getNumberAttribute('transaction_state_log_segment_bytes');
  }
  public set transactionStateLogSegmentBytes(value: number) {
    this._transactionStateLogSegmentBytes = value;
  }
  public resetTransactionStateLogSegmentBytes() {
    this._transactionStateLogSegmentBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionStateLogSegmentBytesInput() {
    return this._transactionStateLogSegmentBytes;
  }
}
export interface KafkaKafkaUserConfigKafkaAuthenticationMethods {
  /**
  * Enable certificate/SSL authentication. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#certificate Kafka#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Enable SASL authentication. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#sasl Kafka#sasl}
  */
  readonly sasl?: boolean | cdktf.IResolvable;
}

export function kafkaKafkaUserConfigKafkaAuthenticationMethodsToTerraform(struct?: KafkaKafkaUserConfigKafkaAuthenticationMethodsOutputReference | KafkaKafkaUserConfigKafkaAuthenticationMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.booleanToTerraform(struct!.certificate),
    sasl: cdktf.booleanToTerraform(struct!.sasl),
  }
}


export function kafkaKafkaUserConfigKafkaAuthenticationMethodsToHclTerraform(struct?: KafkaKafkaUserConfigKafkaAuthenticationMethodsOutputReference | KafkaKafkaUserConfigKafkaAuthenticationMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.booleanToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sasl: {
      value: cdktf.booleanToHclTerraform(struct!.sasl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigKafkaAuthenticationMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigKafkaAuthenticationMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._sasl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigKafkaAuthenticationMethods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._sasl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._sasl = value.sasl;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: boolean | cdktf.IResolvable; 
  public get certificate() {
    return this.getBooleanAttribute('certificate');
  }
  public set certificate(value: boolean | cdktf.IResolvable) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // sasl - computed: false, optional: true, required: false
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
}
export interface KafkaKafkaUserConfigKafkaConnectConfig {
  /**
  * Enum: `All`, `None`. Defines what client configurations can be overridden by the connector. Default is None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#connector_client_config_override_policy Kafka#connector_client_config_override_policy}
  */
  readonly connectorClientConfigOverridePolicy?: string;
  /**
  * Enum: `earliest`, `latest`. What to do when there is no initial offset in Kafka or if the current offset does not exist any more on the server. Default is earliest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#consumer_auto_offset_reset Kafka#consumer_auto_offset_reset}
  */
  readonly consumerAutoOffsetReset?: string;
  /**
  * Records are fetched in batches by the consumer, and if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that the consumer can make progress. As such, this is not a absolute maximum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#consumer_fetch_max_bytes Kafka#consumer_fetch_max_bytes}
  */
  readonly consumerFetchMaxBytes?: number;
  /**
  * Enum: `read_committed`, `read_uncommitted`. Transaction read isolation level. read_uncommitted is the default, but read_committed can be used if consume-exactly-once behavior is desired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#consumer_isolation_level Kafka#consumer_isolation_level}
  */
  readonly consumerIsolationLevel?: string;
  /**
  * Records are fetched in batches by the consumer.If the first record batch in the first non-empty partition of the fetch is larger than this limit, the batch will still be returned to ensure that the consumer can make progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#consumer_max_partition_fetch_bytes Kafka#consumer_max_partition_fetch_bytes}
  */
  readonly consumerMaxPartitionFetchBytes?: number;
  /**
  * The maximum delay in milliseconds between invocations of poll() when using consumer group management (defaults to 300000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#consumer_max_poll_interval_ms Kafka#consumer_max_poll_interval_ms}
  */
  readonly consumerMaxPollIntervalMs?: number;
  /**
  * The maximum number of records returned in a single call to poll() (defaults to 500).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#consumer_max_poll_records Kafka#consumer_max_poll_records}
  */
  readonly consumerMaxPollRecords?: number;
  /**
  * The interval at which to try committing offsets for tasks (defaults to 60000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#offset_flush_interval_ms Kafka#offset_flush_interval_ms}
  */
  readonly offsetFlushIntervalMs?: number;
  /**
  * Maximum number of milliseconds to wait for records to flush and partition offset data to be committed to offset storage before cancelling the process and restoring the offset data to be committed in a future attempt (defaults to 5000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#offset_flush_timeout_ms Kafka#offset_flush_timeout_ms}
  */
  readonly offsetFlushTimeoutMs?: number;
  /**
  * This setting gives the upper bound of the batch size to be sent. If there are fewer than this many bytes accumulated for this partition, the producer will `linger` for the linger.ms time waiting for more records to show up. A batch size of zero will disable batching entirely (defaults to 16384).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#producer_batch_size Kafka#producer_batch_size}
  */
  readonly producerBatchSize?: number;
  /**
  * The total bytes of memory the producer can use to buffer records waiting to be sent to the broker (defaults to 33554432).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#producer_buffer_memory Kafka#producer_buffer_memory}
  */
  readonly producerBufferMemory?: number;
  /**
  * Enum: `gzip`, `lz4`, `none`, `snappy`, `zstd`. Specify the default compression type for producers. This configuration accepts the standard compression codecs (`gzip`, `snappy`, `lz4`, `zstd`). It additionally accepts `none` which is the default and equivalent to no compression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#producer_compression_type Kafka#producer_compression_type}
  */
  readonly producerCompressionType?: string;
  /**
  * This setting gives the upper bound on the delay for batching: once there is batch.size worth of records for a partition it will be sent immediately regardless of this setting, however if there are fewer than this many bytes accumulated for this partition the producer will `linger` for the specified time waiting for more records to show up. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#producer_linger_ms Kafka#producer_linger_ms}
  */
  readonly producerLingerMs?: number;
  /**
  * This setting will limit the number of record batches the producer will send in a single request to avoid sending huge requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#producer_max_request_size Kafka#producer_max_request_size}
  */
  readonly producerMaxRequestSize?: number;
  /**
  * The maximum delay that is scheduled in order to wait for the return of one or more departed workers before rebalancing and reassigning their connectors and tasks to the group. During this period the connectors and tasks of the departed workers remain unassigned. Defaults to 5 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#scheduled_rebalance_max_delay_ms Kafka#scheduled_rebalance_max_delay_ms}
  */
  readonly scheduledRebalanceMaxDelayMs?: number;
  /**
  * The timeout in milliseconds used to detect failures when using Kafka’s group management facilities (defaults to 10000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#session_timeout_ms Kafka#session_timeout_ms}
  */
  readonly sessionTimeoutMs?: number;
}

export function kafkaKafkaUserConfigKafkaConnectConfigToTerraform(struct?: KafkaKafkaUserConfigKafkaConnectConfigOutputReference | KafkaKafkaUserConfigKafkaConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_client_config_override_policy: cdktf.stringToTerraform(struct!.connectorClientConfigOverridePolicy),
    consumer_auto_offset_reset: cdktf.stringToTerraform(struct!.consumerAutoOffsetReset),
    consumer_fetch_max_bytes: cdktf.numberToTerraform(struct!.consumerFetchMaxBytes),
    consumer_isolation_level: cdktf.stringToTerraform(struct!.consumerIsolationLevel),
    consumer_max_partition_fetch_bytes: cdktf.numberToTerraform(struct!.consumerMaxPartitionFetchBytes),
    consumer_max_poll_interval_ms: cdktf.numberToTerraform(struct!.consumerMaxPollIntervalMs),
    consumer_max_poll_records: cdktf.numberToTerraform(struct!.consumerMaxPollRecords),
    offset_flush_interval_ms: cdktf.numberToTerraform(struct!.offsetFlushIntervalMs),
    offset_flush_timeout_ms: cdktf.numberToTerraform(struct!.offsetFlushTimeoutMs),
    producer_batch_size: cdktf.numberToTerraform(struct!.producerBatchSize),
    producer_buffer_memory: cdktf.numberToTerraform(struct!.producerBufferMemory),
    producer_compression_type: cdktf.stringToTerraform(struct!.producerCompressionType),
    producer_linger_ms: cdktf.numberToTerraform(struct!.producerLingerMs),
    producer_max_request_size: cdktf.numberToTerraform(struct!.producerMaxRequestSize),
    scheduled_rebalance_max_delay_ms: cdktf.numberToTerraform(struct!.scheduledRebalanceMaxDelayMs),
    session_timeout_ms: cdktf.numberToTerraform(struct!.sessionTimeoutMs),
  }
}


export function kafkaKafkaUserConfigKafkaConnectConfigToHclTerraform(struct?: KafkaKafkaUserConfigKafkaConnectConfigOutputReference | KafkaKafkaUserConfigKafkaConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_client_config_override_policy: {
      value: cdktf.stringToHclTerraform(struct!.connectorClientConfigOverridePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_auto_offset_reset: {
      value: cdktf.stringToHclTerraform(struct!.consumerAutoOffsetReset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_fetch_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.consumerFetchMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_isolation_level: {
      value: cdktf.stringToHclTerraform(struct!.consumerIsolationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_max_partition_fetch_bytes: {
      value: cdktf.numberToHclTerraform(struct!.consumerMaxPartitionFetchBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_max_poll_interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.consumerMaxPollIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_max_poll_records: {
      value: cdktf.numberToHclTerraform(struct!.consumerMaxPollRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset_flush_interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.offsetFlushIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset_flush_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.offsetFlushTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.producerBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_buffer_memory: {
      value: cdktf.numberToHclTerraform(struct!.producerBufferMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_compression_type: {
      value: cdktf.stringToHclTerraform(struct!.producerCompressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    producer_linger_ms: {
      value: cdktf.numberToHclTerraform(struct!.producerLingerMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_max_request_size: {
      value: cdktf.numberToHclTerraform(struct!.producerMaxRequestSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheduled_rebalance_max_delay_ms: {
      value: cdktf.numberToHclTerraform(struct!.scheduledRebalanceMaxDelayMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigKafkaConnectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigKafkaConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorClientConfigOverridePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorClientConfigOverridePolicy = this._connectorClientConfigOverridePolicy;
    }
    if (this._consumerAutoOffsetReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerAutoOffsetReset = this._consumerAutoOffsetReset;
    }
    if (this._consumerFetchMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerFetchMaxBytes = this._consumerFetchMaxBytes;
    }
    if (this._consumerIsolationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerIsolationLevel = this._consumerIsolationLevel;
    }
    if (this._consumerMaxPartitionFetchBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerMaxPartitionFetchBytes = this._consumerMaxPartitionFetchBytes;
    }
    if (this._consumerMaxPollIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerMaxPollIntervalMs = this._consumerMaxPollIntervalMs;
    }
    if (this._consumerMaxPollRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerMaxPollRecords = this._consumerMaxPollRecords;
    }
    if (this._offsetFlushIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetFlushIntervalMs = this._offsetFlushIntervalMs;
    }
    if (this._offsetFlushTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetFlushTimeoutMs = this._offsetFlushTimeoutMs;
    }
    if (this._producerBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerBatchSize = this._producerBatchSize;
    }
    if (this._producerBufferMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerBufferMemory = this._producerBufferMemory;
    }
    if (this._producerCompressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerCompressionType = this._producerCompressionType;
    }
    if (this._producerLingerMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerLingerMs = this._producerLingerMs;
    }
    if (this._producerMaxRequestSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerMaxRequestSize = this._producerMaxRequestSize;
    }
    if (this._scheduledRebalanceMaxDelayMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledRebalanceMaxDelayMs = this._scheduledRebalanceMaxDelayMs;
    }
    if (this._sessionTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeoutMs = this._sessionTimeoutMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigKafkaConnectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectorClientConfigOverridePolicy = undefined;
      this._consumerAutoOffsetReset = undefined;
      this._consumerFetchMaxBytes = undefined;
      this._consumerIsolationLevel = undefined;
      this._consumerMaxPartitionFetchBytes = undefined;
      this._consumerMaxPollIntervalMs = undefined;
      this._consumerMaxPollRecords = undefined;
      this._offsetFlushIntervalMs = undefined;
      this._offsetFlushTimeoutMs = undefined;
      this._producerBatchSize = undefined;
      this._producerBufferMemory = undefined;
      this._producerCompressionType = undefined;
      this._producerLingerMs = undefined;
      this._producerMaxRequestSize = undefined;
      this._scheduledRebalanceMaxDelayMs = undefined;
      this._sessionTimeoutMs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectorClientConfigOverridePolicy = value.connectorClientConfigOverridePolicy;
      this._consumerAutoOffsetReset = value.consumerAutoOffsetReset;
      this._consumerFetchMaxBytes = value.consumerFetchMaxBytes;
      this._consumerIsolationLevel = value.consumerIsolationLevel;
      this._consumerMaxPartitionFetchBytes = value.consumerMaxPartitionFetchBytes;
      this._consumerMaxPollIntervalMs = value.consumerMaxPollIntervalMs;
      this._consumerMaxPollRecords = value.consumerMaxPollRecords;
      this._offsetFlushIntervalMs = value.offsetFlushIntervalMs;
      this._offsetFlushTimeoutMs = value.offsetFlushTimeoutMs;
      this._producerBatchSize = value.producerBatchSize;
      this._producerBufferMemory = value.producerBufferMemory;
      this._producerCompressionType = value.producerCompressionType;
      this._producerLingerMs = value.producerLingerMs;
      this._producerMaxRequestSize = value.producerMaxRequestSize;
      this._scheduledRebalanceMaxDelayMs = value.scheduledRebalanceMaxDelayMs;
      this._sessionTimeoutMs = value.sessionTimeoutMs;
    }
  }

  // connector_client_config_override_policy - computed: false, optional: true, required: false
  private _connectorClientConfigOverridePolicy?: string; 
  public get connectorClientConfigOverridePolicy() {
    return this.getStringAttribute('connector_client_config_override_policy');
  }
  public set connectorClientConfigOverridePolicy(value: string) {
    this._connectorClientConfigOverridePolicy = value;
  }
  public resetConnectorClientConfigOverridePolicy() {
    this._connectorClientConfigOverridePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorClientConfigOverridePolicyInput() {
    return this._connectorClientConfigOverridePolicy;
  }

  // consumer_auto_offset_reset - computed: false, optional: true, required: false
  private _consumerAutoOffsetReset?: string; 
  public get consumerAutoOffsetReset() {
    return this.getStringAttribute('consumer_auto_offset_reset');
  }
  public set consumerAutoOffsetReset(value: string) {
    this._consumerAutoOffsetReset = value;
  }
  public resetConsumerAutoOffsetReset() {
    this._consumerAutoOffsetReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerAutoOffsetResetInput() {
    return this._consumerAutoOffsetReset;
  }

  // consumer_fetch_max_bytes - computed: false, optional: true, required: false
  private _consumerFetchMaxBytes?: number; 
  public get consumerFetchMaxBytes() {
    return this.getNumberAttribute('consumer_fetch_max_bytes');
  }
  public set consumerFetchMaxBytes(value: number) {
    this._consumerFetchMaxBytes = value;
  }
  public resetConsumerFetchMaxBytes() {
    this._consumerFetchMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerFetchMaxBytesInput() {
    return this._consumerFetchMaxBytes;
  }

  // consumer_isolation_level - computed: false, optional: true, required: false
  private _consumerIsolationLevel?: string; 
  public get consumerIsolationLevel() {
    return this.getStringAttribute('consumer_isolation_level');
  }
  public set consumerIsolationLevel(value: string) {
    this._consumerIsolationLevel = value;
  }
  public resetConsumerIsolationLevel() {
    this._consumerIsolationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIsolationLevelInput() {
    return this._consumerIsolationLevel;
  }

  // consumer_max_partition_fetch_bytes - computed: false, optional: true, required: false
  private _consumerMaxPartitionFetchBytes?: number; 
  public get consumerMaxPartitionFetchBytes() {
    return this.getNumberAttribute('consumer_max_partition_fetch_bytes');
  }
  public set consumerMaxPartitionFetchBytes(value: number) {
    this._consumerMaxPartitionFetchBytes = value;
  }
  public resetConsumerMaxPartitionFetchBytes() {
    this._consumerMaxPartitionFetchBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerMaxPartitionFetchBytesInput() {
    return this._consumerMaxPartitionFetchBytes;
  }

  // consumer_max_poll_interval_ms - computed: false, optional: true, required: false
  private _consumerMaxPollIntervalMs?: number; 
  public get consumerMaxPollIntervalMs() {
    return this.getNumberAttribute('consumer_max_poll_interval_ms');
  }
  public set consumerMaxPollIntervalMs(value: number) {
    this._consumerMaxPollIntervalMs = value;
  }
  public resetConsumerMaxPollIntervalMs() {
    this._consumerMaxPollIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerMaxPollIntervalMsInput() {
    return this._consumerMaxPollIntervalMs;
  }

  // consumer_max_poll_records - computed: false, optional: true, required: false
  private _consumerMaxPollRecords?: number; 
  public get consumerMaxPollRecords() {
    return this.getNumberAttribute('consumer_max_poll_records');
  }
  public set consumerMaxPollRecords(value: number) {
    this._consumerMaxPollRecords = value;
  }
  public resetConsumerMaxPollRecords() {
    this._consumerMaxPollRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerMaxPollRecordsInput() {
    return this._consumerMaxPollRecords;
  }

  // offset_flush_interval_ms - computed: false, optional: true, required: false
  private _offsetFlushIntervalMs?: number; 
  public get offsetFlushIntervalMs() {
    return this.getNumberAttribute('offset_flush_interval_ms');
  }
  public set offsetFlushIntervalMs(value: number) {
    this._offsetFlushIntervalMs = value;
  }
  public resetOffsetFlushIntervalMs() {
    this._offsetFlushIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetFlushIntervalMsInput() {
    return this._offsetFlushIntervalMs;
  }

  // offset_flush_timeout_ms - computed: false, optional: true, required: false
  private _offsetFlushTimeoutMs?: number; 
  public get offsetFlushTimeoutMs() {
    return this.getNumberAttribute('offset_flush_timeout_ms');
  }
  public set offsetFlushTimeoutMs(value: number) {
    this._offsetFlushTimeoutMs = value;
  }
  public resetOffsetFlushTimeoutMs() {
    this._offsetFlushTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetFlushTimeoutMsInput() {
    return this._offsetFlushTimeoutMs;
  }

  // producer_batch_size - computed: false, optional: true, required: false
  private _producerBatchSize?: number; 
  public get producerBatchSize() {
    return this.getNumberAttribute('producer_batch_size');
  }
  public set producerBatchSize(value: number) {
    this._producerBatchSize = value;
  }
  public resetProducerBatchSize() {
    this._producerBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerBatchSizeInput() {
    return this._producerBatchSize;
  }

  // producer_buffer_memory - computed: false, optional: true, required: false
  private _producerBufferMemory?: number; 
  public get producerBufferMemory() {
    return this.getNumberAttribute('producer_buffer_memory');
  }
  public set producerBufferMemory(value: number) {
    this._producerBufferMemory = value;
  }
  public resetProducerBufferMemory() {
    this._producerBufferMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerBufferMemoryInput() {
    return this._producerBufferMemory;
  }

  // producer_compression_type - computed: false, optional: true, required: false
  private _producerCompressionType?: string; 
  public get producerCompressionType() {
    return this.getStringAttribute('producer_compression_type');
  }
  public set producerCompressionType(value: string) {
    this._producerCompressionType = value;
  }
  public resetProducerCompressionType() {
    this._producerCompressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerCompressionTypeInput() {
    return this._producerCompressionType;
  }

  // producer_linger_ms - computed: false, optional: true, required: false
  private _producerLingerMs?: number; 
  public get producerLingerMs() {
    return this.getNumberAttribute('producer_linger_ms');
  }
  public set producerLingerMs(value: number) {
    this._producerLingerMs = value;
  }
  public resetProducerLingerMs() {
    this._producerLingerMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerLingerMsInput() {
    return this._producerLingerMs;
  }

  // producer_max_request_size - computed: false, optional: true, required: false
  private _producerMaxRequestSize?: number; 
  public get producerMaxRequestSize() {
    return this.getNumberAttribute('producer_max_request_size');
  }
  public set producerMaxRequestSize(value: number) {
    this._producerMaxRequestSize = value;
  }
  public resetProducerMaxRequestSize() {
    this._producerMaxRequestSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerMaxRequestSizeInput() {
    return this._producerMaxRequestSize;
  }

  // scheduled_rebalance_max_delay_ms - computed: false, optional: true, required: false
  private _scheduledRebalanceMaxDelayMs?: number; 
  public get scheduledRebalanceMaxDelayMs() {
    return this.getNumberAttribute('scheduled_rebalance_max_delay_ms');
  }
  public set scheduledRebalanceMaxDelayMs(value: number) {
    this._scheduledRebalanceMaxDelayMs = value;
  }
  public resetScheduledRebalanceMaxDelayMs() {
    this._scheduledRebalanceMaxDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledRebalanceMaxDelayMsInput() {
    return this._scheduledRebalanceMaxDelayMs;
  }

  // session_timeout_ms - computed: false, optional: true, required: false
  private _sessionTimeoutMs?: number; 
  public get sessionTimeoutMs() {
    return this.getNumberAttribute('session_timeout_ms');
  }
  public set sessionTimeoutMs(value: number) {
    this._sessionTimeoutMs = value;
  }
  public resetSessionTimeoutMs() {
    this._sessionTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutMsInput() {
    return this._sessionTimeoutMs;
  }
}
export interface KafkaKafkaUserConfigKafkaConnectPluginVersions {
  /**
  * The name of the plugin. Example: `debezium-connector`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#plugin_name Kafka#plugin_name}
  */
  readonly pluginName: string;
  /**
  * The version of the plugin. Example: `2.5.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#version Kafka#version}
  */
  readonly version: string;
}

export function kafkaKafkaUserConfigKafkaConnectPluginVersionsToTerraform(struct?: KafkaKafkaUserConfigKafkaConnectPluginVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function kafkaKafkaUserConfigKafkaConnectPluginVersionsToHclTerraform(struct?: KafkaKafkaUserConfigKafkaConnectPluginVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plugin_name: {
      value: cdktf.stringToHclTerraform(struct!.pluginName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigKafkaConnectPluginVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaKafkaUserConfigKafkaConnectPluginVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigKafkaConnectPluginVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pluginName = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pluginName = value.pluginName;
      this._version = value.version;
    }
  }

  // plugin_name - computed: false, optional: false, required: true
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
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
}

export class KafkaKafkaUserConfigKafkaConnectPluginVersionsList extends cdktf.ComplexList {
  public internalValue? : KafkaKafkaUserConfigKafkaConnectPluginVersions[] | cdktf.IResolvable

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
  public get(index: number): KafkaKafkaUserConfigKafkaConnectPluginVersionsOutputReference {
    return new KafkaKafkaUserConfigKafkaConnectPluginVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaKafkaUserConfigKafkaConnectSecretProvidersAws {
  /**
  * Access key used to authenticate with aws.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#access_key Kafka#access_key}
  */
  readonly accessKey?: string;
  /**
  * Enum: `credentials`. Auth method of the vault secret provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#auth_method Kafka#auth_method}
  */
  readonly authMethod: string;
  /**
  * Region used to lookup secrets with AWS SecretManager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#region Kafka#region}
  */
  readonly region: string;
  /**
  * Secret key used to authenticate with aws.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#secret_key Kafka#secret_key}
  */
  readonly secretKey?: string;
}

export function kafkaKafkaUserConfigKafkaConnectSecretProvidersAwsToTerraform(struct?: KafkaKafkaUserConfigKafkaConnectSecretProvidersAwsOutputReference | KafkaKafkaUserConfigKafkaConnectSecretProvidersAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function kafkaKafkaUserConfigKafkaConnectSecretProvidersAwsToHclTerraform(struct?: KafkaKafkaUserConfigKafkaConnectSecretProvidersAwsOutputReference | KafkaKafkaUserConfigKafkaConnectSecretProvidersAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigKafkaConnectSecretProvidersAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigKafkaConnectSecretProvidersAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigKafkaConnectSecretProvidersAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._authMethod = undefined;
      this._region = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._authMethod = value.authMethod;
      this._region = value.region;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface KafkaKafkaUserConfigKafkaConnectSecretProvidersVault {
  /**
  * Address of the Vault server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#address Kafka#address}
  */
  readonly address: string;
  /**
  * Enum: `token`. Auth method of the vault secret provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#auth_method Kafka#auth_method}
  */
  readonly authMethod: string;
  /**
  * Enum: `1`, `2`, and newer. KV Secrets Engine version of the Vault server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#engine_version Kafka#engine_version}
  */
  readonly engineVersion?: number;
  /**
  * Prefix path depth of the secrets Engine. Default is 1. If the secrets engine path has more than one segment it has to be increased to the number of segments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#prefix_path_depth Kafka#prefix_path_depth}
  */
  readonly prefixPathDepth?: number;
  /**
  * Token used to authenticate with vault and auth method `token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#token Kafka#token}
  */
  readonly token?: string;
}

export function kafkaKafkaUserConfigKafkaConnectSecretProvidersVaultToTerraform(struct?: KafkaKafkaUserConfigKafkaConnectSecretProvidersVaultOutputReference | KafkaKafkaUserConfigKafkaConnectSecretProvidersVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    engine_version: cdktf.numberToTerraform(struct!.engineVersion),
    prefix_path_depth: cdktf.numberToTerraform(struct!.prefixPathDepth),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function kafkaKafkaUserConfigKafkaConnectSecretProvidersVaultToHclTerraform(struct?: KafkaKafkaUserConfigKafkaConnectSecretProvidersVaultOutputReference | KafkaKafkaUserConfigKafkaConnectSecretProvidersVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_version: {
      value: cdktf.numberToHclTerraform(struct!.engineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_path_depth: {
      value: cdktf.numberToHclTerraform(struct!.prefixPathDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigKafkaConnectSecretProvidersVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigKafkaConnectSecretProvidersVault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._prefixPathDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPathDepth = this._prefixPathDepth;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigKafkaConnectSecretProvidersVault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._authMethod = undefined;
      this._engineVersion = undefined;
      this._prefixPathDepth = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._authMethod = value.authMethod;
      this._engineVersion = value.engineVersion;
      this._prefixPathDepth = value.prefixPathDepth;
      this._token = value.token;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion?: number; 
  public get engineVersion() {
    return this.getNumberAttribute('engine_version');
  }
  public set engineVersion(value: number) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // prefix_path_depth - computed: false, optional: true, required: false
  private _prefixPathDepth?: number; 
  public get prefixPathDepth() {
    return this.getNumberAttribute('prefix_path_depth');
  }
  public set prefixPathDepth(value: number) {
    this._prefixPathDepth = value;
  }
  public resetPrefixPathDepth() {
    this._prefixPathDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPathDepthInput() {
    return this._prefixPathDepth;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface KafkaKafkaUserConfigKafkaConnectSecretProviders {
  /**
  * Name of the secret provider. Used to reference secrets in connector config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#name Kafka#name}
  */
  readonly name: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#aws Kafka#aws}
  */
  readonly aws?: KafkaKafkaUserConfigKafkaConnectSecretProvidersAws;
  /**
  * vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#vault Kafka#vault}
  */
  readonly vault?: KafkaKafkaUserConfigKafkaConnectSecretProvidersVault;
}

export function kafkaKafkaUserConfigKafkaConnectSecretProvidersToTerraform(struct?: KafkaKafkaUserConfigKafkaConnectSecretProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    aws: kafkaKafkaUserConfigKafkaConnectSecretProvidersAwsToTerraform(struct!.aws),
    vault: kafkaKafkaUserConfigKafkaConnectSecretProvidersVaultToTerraform(struct!.vault),
  }
}


export function kafkaKafkaUserConfigKafkaConnectSecretProvidersToHclTerraform(struct?: KafkaKafkaUserConfigKafkaConnectSecretProviders | cdktf.IResolvable): any {
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
    aws: {
      value: kafkaKafkaUserConfigKafkaConnectSecretProvidersAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigKafkaConnectSecretProvidersAwsList",
    },
    vault: {
      value: kafkaKafkaUserConfigKafkaConnectSecretProvidersVaultToHclTerraform(struct!.vault),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigKafkaConnectSecretProvidersVaultList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigKafkaConnectSecretProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaKafkaUserConfigKafkaConnectSecretProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._vault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigKafkaConnectSecretProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._aws.internalValue = undefined;
      this._vault.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._aws.internalValue = value.aws;
      this._vault.internalValue = value.vault;
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

  // aws - computed: false, optional: true, required: false
  private _aws = new KafkaKafkaUserConfigKafkaConnectSecretProvidersAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: KafkaKafkaUserConfigKafkaConnectSecretProvidersAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // vault - computed: false, optional: true, required: false
  private _vault = new KafkaKafkaUserConfigKafkaConnectSecretProvidersVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }
  public putVault(value: KafkaKafkaUserConfigKafkaConnectSecretProvidersVault) {
    this._vault.internalValue = value;
  }
  public resetVault() {
    this._vault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault.internalValue;
  }
}

export class KafkaKafkaUserConfigKafkaConnectSecretProvidersList extends cdktf.ComplexList {
  public internalValue? : KafkaKafkaUserConfigKafkaConnectSecretProviders[] | cdktf.IResolvable

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
  public get(index: number): KafkaKafkaUserConfigKafkaConnectSecretProvidersOutputReference {
    return new KafkaKafkaUserConfigKafkaConnectSecretProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaKafkaUserConfigKafkaDiskless {
  /**
  * Whether to enable the Diskless functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#enabled Kafka#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function kafkaKafkaUserConfigKafkaDisklessToTerraform(struct?: KafkaKafkaUserConfigKafkaDisklessOutputReference | KafkaKafkaUserConfigKafkaDiskless): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function kafkaKafkaUserConfigKafkaDisklessToHclTerraform(struct?: KafkaKafkaUserConfigKafkaDisklessOutputReference | KafkaKafkaUserConfigKafkaDiskless): any {
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

export class KafkaKafkaUserConfigKafkaDisklessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigKafkaDiskless | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigKafkaDiskless | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface KafkaKafkaUserConfigKafkaRestConfig {
  /**
  * If true the consumer's offset will be periodically committed to Kafka in the background. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#consumer_enable_auto_commit Kafka#consumer_enable_auto_commit}
  */
  readonly consumerEnableAutoCommit?: boolean | cdktf.IResolvable;
  /**
  * Specifies the maximum duration (in seconds) a client can remain idle before it is deleted. If a consumer is inactive, it will exit the consumer group, and its state will be discarded. A value of 0 (default) indicates that the consumer will not be disconnected automatically due to inactivity. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#consumer_idle_disconnect_timeout Kafka#consumer_idle_disconnect_timeout}
  */
  readonly consumerIdleDisconnectTimeout?: number;
  /**
  * Maximum number of bytes in unencoded message keys and values by a single request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#consumer_request_max_bytes Kafka#consumer_request_max_bytes}
  */
  readonly consumerRequestMaxBytes?: number;
  /**
  * Enum: `1000`, `15000`, `30000`. The maximum total time to wait for messages for a request if the maximum number of messages has not yet been reached. Default: `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#consumer_request_timeout_ms Kafka#consumer_request_timeout_ms}
  */
  readonly consumerRequestTimeoutMs?: number;
  /**
  * Enum: `record_name`, `topic_name`, `topic_record_name`. Name strategy to use when selecting subject for storing schemas. Default: `topic_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#name_strategy Kafka#name_strategy}
  */
  readonly nameStrategy?: string;
  /**
  * If true, validate that given schema is registered under expected subject name by the used name strategy when producing messages. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#name_strategy_validation Kafka#name_strategy_validation}
  */
  readonly nameStrategyValidation?: boolean | cdktf.IResolvable;
  /**
  * Enum: `-1`, `0`, `1`, `all`. The number of acknowledgments the producer requires the leader to have received before considering a request complete. If set to `all` or `-1`, the leader will wait for the full set of in-sync replicas to acknowledge the record. Default: `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#producer_acks Kafka#producer_acks}
  */
  readonly producerAcks?: string;
  /**
  * Enum: `gzip`, `lz4`, `none`, `snappy`, `zstd`. Specify the default compression type for producers. This configuration accepts the standard compression codecs (`gzip`, `snappy`, `lz4`, `zstd`). It additionally accepts `none` which is the default and equivalent to no compression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#producer_compression_type Kafka#producer_compression_type}
  */
  readonly producerCompressionType?: string;
  /**
  * Wait for up to the given delay to allow batching records together. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#producer_linger_ms Kafka#producer_linger_ms}
  */
  readonly producerLingerMs?: number;
  /**
  * The maximum size of a request in bytes. Note that Kafka broker can also cap the record batch size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#producer_max_request_size Kafka#producer_max_request_size}
  */
  readonly producerMaxRequestSize?: number;
  /**
  * Maximum number of SimpleConsumers that can be instantiated per broker. Default: `25`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#simpleconsumer_pool_size_max Kafka#simpleconsumer_pool_size_max}
  */
  readonly simpleconsumerPoolSizeMax?: number;
}

export function kafkaKafkaUserConfigKafkaRestConfigToTerraform(struct?: KafkaKafkaUserConfigKafkaRestConfigOutputReference | KafkaKafkaUserConfigKafkaRestConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_enable_auto_commit: cdktf.booleanToTerraform(struct!.consumerEnableAutoCommit),
    consumer_idle_disconnect_timeout: cdktf.numberToTerraform(struct!.consumerIdleDisconnectTimeout),
    consumer_request_max_bytes: cdktf.numberToTerraform(struct!.consumerRequestMaxBytes),
    consumer_request_timeout_ms: cdktf.numberToTerraform(struct!.consumerRequestTimeoutMs),
    name_strategy: cdktf.stringToTerraform(struct!.nameStrategy),
    name_strategy_validation: cdktf.booleanToTerraform(struct!.nameStrategyValidation),
    producer_acks: cdktf.stringToTerraform(struct!.producerAcks),
    producer_compression_type: cdktf.stringToTerraform(struct!.producerCompressionType),
    producer_linger_ms: cdktf.numberToTerraform(struct!.producerLingerMs),
    producer_max_request_size: cdktf.numberToTerraform(struct!.producerMaxRequestSize),
    simpleconsumer_pool_size_max: cdktf.numberToTerraform(struct!.simpleconsumerPoolSizeMax),
  }
}


export function kafkaKafkaUserConfigKafkaRestConfigToHclTerraform(struct?: KafkaKafkaUserConfigKafkaRestConfigOutputReference | KafkaKafkaUserConfigKafkaRestConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_enable_auto_commit: {
      value: cdktf.booleanToHclTerraform(struct!.consumerEnableAutoCommit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    consumer_idle_disconnect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.consumerIdleDisconnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_request_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.consumerRequestMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_request_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.consumerRequestTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_strategy: {
      value: cdktf.stringToHclTerraform(struct!.nameStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_strategy_validation: {
      value: cdktf.booleanToHclTerraform(struct!.nameStrategyValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    producer_acks: {
      value: cdktf.stringToHclTerraform(struct!.producerAcks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    producer_compression_type: {
      value: cdktf.stringToHclTerraform(struct!.producerCompressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    producer_linger_ms: {
      value: cdktf.numberToHclTerraform(struct!.producerLingerMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_max_request_size: {
      value: cdktf.numberToHclTerraform(struct!.producerMaxRequestSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    simpleconsumer_pool_size_max: {
      value: cdktf.numberToHclTerraform(struct!.simpleconsumerPoolSizeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigKafkaRestConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigKafkaRestConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerEnableAutoCommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerEnableAutoCommit = this._consumerEnableAutoCommit;
    }
    if (this._consumerIdleDisconnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerIdleDisconnectTimeout = this._consumerIdleDisconnectTimeout;
    }
    if (this._consumerRequestMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerRequestMaxBytes = this._consumerRequestMaxBytes;
    }
    if (this._consumerRequestTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerRequestTimeoutMs = this._consumerRequestTimeoutMs;
    }
    if (this._nameStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameStrategy = this._nameStrategy;
    }
    if (this._nameStrategyValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameStrategyValidation = this._nameStrategyValidation;
    }
    if (this._producerAcks !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerAcks = this._producerAcks;
    }
    if (this._producerCompressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerCompressionType = this._producerCompressionType;
    }
    if (this._producerLingerMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerLingerMs = this._producerLingerMs;
    }
    if (this._producerMaxRequestSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerMaxRequestSize = this._producerMaxRequestSize;
    }
    if (this._simpleconsumerPoolSizeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleconsumerPoolSizeMax = this._simpleconsumerPoolSizeMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigKafkaRestConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumerEnableAutoCommit = undefined;
      this._consumerIdleDisconnectTimeout = undefined;
      this._consumerRequestMaxBytes = undefined;
      this._consumerRequestTimeoutMs = undefined;
      this._nameStrategy = undefined;
      this._nameStrategyValidation = undefined;
      this._producerAcks = undefined;
      this._producerCompressionType = undefined;
      this._producerLingerMs = undefined;
      this._producerMaxRequestSize = undefined;
      this._simpleconsumerPoolSizeMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumerEnableAutoCommit = value.consumerEnableAutoCommit;
      this._consumerIdleDisconnectTimeout = value.consumerIdleDisconnectTimeout;
      this._consumerRequestMaxBytes = value.consumerRequestMaxBytes;
      this._consumerRequestTimeoutMs = value.consumerRequestTimeoutMs;
      this._nameStrategy = value.nameStrategy;
      this._nameStrategyValidation = value.nameStrategyValidation;
      this._producerAcks = value.producerAcks;
      this._producerCompressionType = value.producerCompressionType;
      this._producerLingerMs = value.producerLingerMs;
      this._producerMaxRequestSize = value.producerMaxRequestSize;
      this._simpleconsumerPoolSizeMax = value.simpleconsumerPoolSizeMax;
    }
  }

  // consumer_enable_auto_commit - computed: false, optional: true, required: false
  private _consumerEnableAutoCommit?: boolean | cdktf.IResolvable; 
  public get consumerEnableAutoCommit() {
    return this.getBooleanAttribute('consumer_enable_auto_commit');
  }
  public set consumerEnableAutoCommit(value: boolean | cdktf.IResolvable) {
    this._consumerEnableAutoCommit = value;
  }
  public resetConsumerEnableAutoCommit() {
    this._consumerEnableAutoCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerEnableAutoCommitInput() {
    return this._consumerEnableAutoCommit;
  }

  // consumer_idle_disconnect_timeout - computed: false, optional: true, required: false
  private _consumerIdleDisconnectTimeout?: number; 
  public get consumerIdleDisconnectTimeout() {
    return this.getNumberAttribute('consumer_idle_disconnect_timeout');
  }
  public set consumerIdleDisconnectTimeout(value: number) {
    this._consumerIdleDisconnectTimeout = value;
  }
  public resetConsumerIdleDisconnectTimeout() {
    this._consumerIdleDisconnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIdleDisconnectTimeoutInput() {
    return this._consumerIdleDisconnectTimeout;
  }

  // consumer_request_max_bytes - computed: false, optional: true, required: false
  private _consumerRequestMaxBytes?: number; 
  public get consumerRequestMaxBytes() {
    return this.getNumberAttribute('consumer_request_max_bytes');
  }
  public set consumerRequestMaxBytes(value: number) {
    this._consumerRequestMaxBytes = value;
  }
  public resetConsumerRequestMaxBytes() {
    this._consumerRequestMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerRequestMaxBytesInput() {
    return this._consumerRequestMaxBytes;
  }

  // consumer_request_timeout_ms - computed: false, optional: true, required: false
  private _consumerRequestTimeoutMs?: number; 
  public get consumerRequestTimeoutMs() {
    return this.getNumberAttribute('consumer_request_timeout_ms');
  }
  public set consumerRequestTimeoutMs(value: number) {
    this._consumerRequestTimeoutMs = value;
  }
  public resetConsumerRequestTimeoutMs() {
    this._consumerRequestTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerRequestTimeoutMsInput() {
    return this._consumerRequestTimeoutMs;
  }

  // name_strategy - computed: false, optional: true, required: false
  private _nameStrategy?: string; 
  public get nameStrategy() {
    return this.getStringAttribute('name_strategy');
  }
  public set nameStrategy(value: string) {
    this._nameStrategy = value;
  }
  public resetNameStrategy() {
    this._nameStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameStrategyInput() {
    return this._nameStrategy;
  }

  // name_strategy_validation - computed: false, optional: true, required: false
  private _nameStrategyValidation?: boolean | cdktf.IResolvable; 
  public get nameStrategyValidation() {
    return this.getBooleanAttribute('name_strategy_validation');
  }
  public set nameStrategyValidation(value: boolean | cdktf.IResolvable) {
    this._nameStrategyValidation = value;
  }
  public resetNameStrategyValidation() {
    this._nameStrategyValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameStrategyValidationInput() {
    return this._nameStrategyValidation;
  }

  // producer_acks - computed: false, optional: true, required: false
  private _producerAcks?: string; 
  public get producerAcks() {
    return this.getStringAttribute('producer_acks');
  }
  public set producerAcks(value: string) {
    this._producerAcks = value;
  }
  public resetProducerAcks() {
    this._producerAcks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerAcksInput() {
    return this._producerAcks;
  }

  // producer_compression_type - computed: false, optional: true, required: false
  private _producerCompressionType?: string; 
  public get producerCompressionType() {
    return this.getStringAttribute('producer_compression_type');
  }
  public set producerCompressionType(value: string) {
    this._producerCompressionType = value;
  }
  public resetProducerCompressionType() {
    this._producerCompressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerCompressionTypeInput() {
    return this._producerCompressionType;
  }

  // producer_linger_ms - computed: false, optional: true, required: false
  private _producerLingerMs?: number; 
  public get producerLingerMs() {
    return this.getNumberAttribute('producer_linger_ms');
  }
  public set producerLingerMs(value: number) {
    this._producerLingerMs = value;
  }
  public resetProducerLingerMs() {
    this._producerLingerMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerLingerMsInput() {
    return this._producerLingerMs;
  }

  // producer_max_request_size - computed: false, optional: true, required: false
  private _producerMaxRequestSize?: number; 
  public get producerMaxRequestSize() {
    return this.getNumberAttribute('producer_max_request_size');
  }
  public set producerMaxRequestSize(value: number) {
    this._producerMaxRequestSize = value;
  }
  public resetProducerMaxRequestSize() {
    this._producerMaxRequestSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerMaxRequestSizeInput() {
    return this._producerMaxRequestSize;
  }

  // simpleconsumer_pool_size_max - computed: false, optional: true, required: false
  private _simpleconsumerPoolSizeMax?: number; 
  public get simpleconsumerPoolSizeMax() {
    return this.getNumberAttribute('simpleconsumer_pool_size_max');
  }
  public set simpleconsumerPoolSizeMax(value: number) {
    this._simpleconsumerPoolSizeMax = value;
  }
  public resetSimpleconsumerPoolSizeMax() {
    this._simpleconsumerPoolSizeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleconsumerPoolSizeMaxInput() {
    return this._simpleconsumerPoolSizeMax;
  }
}
export interface KafkaKafkaUserConfigKafkaSaslMechanisms {
  /**
  * Enable PLAIN mechanism. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#plain Kafka#plain}
  */
  readonly plain?: boolean | cdktf.IResolvable;
  /**
  * Enable SCRAM-SHA-256 mechanism. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#scram_sha_256 Kafka#scram_sha_256}
  */
  readonly scramSha256?: boolean | cdktf.IResolvable;
  /**
  * Enable SCRAM-SHA-512 mechanism. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#scram_sha_512 Kafka#scram_sha_512}
  */
  readonly scramSha512?: boolean | cdktf.IResolvable;
}

export function kafkaKafkaUserConfigKafkaSaslMechanismsToTerraform(struct?: KafkaKafkaUserConfigKafkaSaslMechanismsOutputReference | KafkaKafkaUserConfigKafkaSaslMechanisms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain: cdktf.booleanToTerraform(struct!.plain),
    scram_sha_256: cdktf.booleanToTerraform(struct!.scramSha256),
    scram_sha_512: cdktf.booleanToTerraform(struct!.scramSha512),
  }
}


export function kafkaKafkaUserConfigKafkaSaslMechanismsToHclTerraform(struct?: KafkaKafkaUserConfigKafkaSaslMechanismsOutputReference | KafkaKafkaUserConfigKafkaSaslMechanisms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plain: {
      value: cdktf.booleanToHclTerraform(struct!.plain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scram_sha_256: {
      value: cdktf.booleanToHclTerraform(struct!.scramSha256),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scram_sha_512: {
      value: cdktf.booleanToHclTerraform(struct!.scramSha512),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigKafkaSaslMechanismsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigKafkaSaslMechanisms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plain !== undefined) {
      hasAnyValues = true;
      internalValueResult.plain = this._plain;
    }
    if (this._scramSha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scramSha256 = this._scramSha256;
    }
    if (this._scramSha512 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scramSha512 = this._scramSha512;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigKafkaSaslMechanisms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plain = undefined;
      this._scramSha256 = undefined;
      this._scramSha512 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plain = value.plain;
      this._scramSha256 = value.scramSha256;
      this._scramSha512 = value.scramSha512;
    }
  }

  // plain - computed: false, optional: true, required: false
  private _plain?: boolean | cdktf.IResolvable; 
  public get plain() {
    return this.getBooleanAttribute('plain');
  }
  public set plain(value: boolean | cdktf.IResolvable) {
    this._plain = value;
  }
  public resetPlain() {
    this._plain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainInput() {
    return this._plain;
  }

  // scram_sha_256 - computed: false, optional: true, required: false
  private _scramSha256?: boolean | cdktf.IResolvable; 
  public get scramSha256() {
    return this.getBooleanAttribute('scram_sha_256');
  }
  public set scramSha256(value: boolean | cdktf.IResolvable) {
    this._scramSha256 = value;
  }
  public resetScramSha256() {
    this._scramSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scramSha256Input() {
    return this._scramSha256;
  }

  // scram_sha_512 - computed: false, optional: true, required: false
  private _scramSha512?: boolean | cdktf.IResolvable; 
  public get scramSha512() {
    return this.getBooleanAttribute('scram_sha_512');
  }
  public set scramSha512(value: boolean | cdktf.IResolvable) {
    this._scramSha512 = value;
  }
  public resetScramSha512() {
    this._scramSha512 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scramSha512Input() {
    return this._scramSha512;
  }
}
export interface KafkaKafkaUserConfigPrivateAccess {
  /**
  * Allow clients to connect to kafka with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka Kafka#kafka}
  */
  readonly kafka?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to kafka_connect with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_connect Kafka#kafka_connect}
  */
  readonly kafkaConnect?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to kafka_rest with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_rest Kafka#kafka_rest}
  */
  readonly kafkaRest?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to prometheus with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#prometheus Kafka#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to schema_registry with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#schema_registry Kafka#schema_registry}
  */
  readonly schemaRegistry?: boolean | cdktf.IResolvable;
}

export function kafkaKafkaUserConfigPrivateAccessToTerraform(struct?: KafkaKafkaUserConfigPrivateAccessOutputReference | KafkaKafkaUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka: cdktf.booleanToTerraform(struct!.kafka),
    kafka_connect: cdktf.booleanToTerraform(struct!.kafkaConnect),
    kafka_rest: cdktf.booleanToTerraform(struct!.kafkaRest),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
    schema_registry: cdktf.booleanToTerraform(struct!.schemaRegistry),
  }
}


export function kafkaKafkaUserConfigPrivateAccessToHclTerraform(struct?: KafkaKafkaUserConfigPrivateAccessOutputReference | KafkaKafkaUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kafka: {
      value: cdktf.booleanToHclTerraform(struct!.kafka),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kafka_connect: {
      value: cdktf.booleanToHclTerraform(struct!.kafkaConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kafka_rest: {
      value: cdktf.booleanToHclTerraform(struct!.kafkaRest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_registry: {
      value: cdktf.booleanToHclTerraform(struct!.schemaRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafka !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka;
    }
    if (this._kafkaConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnect = this._kafkaConnect;
    }
    if (this._kafkaRest !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaRest = this._kafkaRest;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    if (this._schemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistry = this._schemaRegistry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kafka = undefined;
      this._kafkaConnect = undefined;
      this._kafkaRest = undefined;
      this._prometheus = undefined;
      this._schemaRegistry = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kafka = value.kafka;
      this._kafkaConnect = value.kafkaConnect;
      this._kafkaRest = value.kafkaRest;
      this._prometheus = value.prometheus;
      this._schemaRegistry = value.schemaRegistry;
    }
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka?: boolean | cdktf.IResolvable; 
  public get kafka() {
    return this.getBooleanAttribute('kafka');
  }
  public set kafka(value: boolean | cdktf.IResolvable) {
    this._kafka = value;
  }
  public resetKafka() {
    this._kafka = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka;
  }

  // kafka_connect - computed: false, optional: true, required: false
  private _kafkaConnect?: boolean | cdktf.IResolvable; 
  public get kafkaConnect() {
    return this.getBooleanAttribute('kafka_connect');
  }
  public set kafkaConnect(value: boolean | cdktf.IResolvable) {
    this._kafkaConnect = value;
  }
  public resetKafkaConnect() {
    this._kafkaConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectInput() {
    return this._kafkaConnect;
  }

  // kafka_rest - computed: false, optional: true, required: false
  private _kafkaRest?: boolean | cdktf.IResolvable; 
  public get kafkaRest() {
    return this.getBooleanAttribute('kafka_rest');
  }
  public set kafkaRest(value: boolean | cdktf.IResolvable) {
    this._kafkaRest = value;
  }
  public resetKafkaRest() {
    this._kafkaRest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaRestInput() {
    return this._kafkaRest;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus?: boolean | cdktf.IResolvable; 
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
  public set prometheus(value: boolean | cdktf.IResolvable) {
    this._prometheus = value;
  }
  public resetPrometheus() {
    this._prometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus;
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
}
export interface KafkaKafkaUserConfigPrivatelinkAccess {
  /**
  * Enable jolokia.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#jolokia Kafka#jolokia}
  */
  readonly jolokia?: boolean | cdktf.IResolvable;
  /**
  * Enable kafka.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka Kafka#kafka}
  */
  readonly kafka?: boolean | cdktf.IResolvable;
  /**
  * Enable kafka_connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_connect Kafka#kafka_connect}
  */
  readonly kafkaConnect?: boolean | cdktf.IResolvable;
  /**
  * Enable kafka_rest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_rest Kafka#kafka_rest}
  */
  readonly kafkaRest?: boolean | cdktf.IResolvable;
  /**
  * Enable prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#prometheus Kafka#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
  /**
  * Enable schema_registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#schema_registry Kafka#schema_registry}
  */
  readonly schemaRegistry?: boolean | cdktf.IResolvable;
}

export function kafkaKafkaUserConfigPrivatelinkAccessToTerraform(struct?: KafkaKafkaUserConfigPrivatelinkAccessOutputReference | KafkaKafkaUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jolokia: cdktf.booleanToTerraform(struct!.jolokia),
    kafka: cdktf.booleanToTerraform(struct!.kafka),
    kafka_connect: cdktf.booleanToTerraform(struct!.kafkaConnect),
    kafka_rest: cdktf.booleanToTerraform(struct!.kafkaRest),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
    schema_registry: cdktf.booleanToTerraform(struct!.schemaRegistry),
  }
}


export function kafkaKafkaUserConfigPrivatelinkAccessToHclTerraform(struct?: KafkaKafkaUserConfigPrivatelinkAccessOutputReference | KafkaKafkaUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jolokia: {
      value: cdktf.booleanToHclTerraform(struct!.jolokia),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kafka: {
      value: cdktf.booleanToHclTerraform(struct!.kafka),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kafka_connect: {
      value: cdktf.booleanToHclTerraform(struct!.kafkaConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kafka_rest: {
      value: cdktf.booleanToHclTerraform(struct!.kafkaRest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_registry: {
      value: cdktf.booleanToHclTerraform(struct!.schemaRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigPrivatelinkAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigPrivatelinkAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jolokia !== undefined) {
      hasAnyValues = true;
      internalValueResult.jolokia = this._jolokia;
    }
    if (this._kafka !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka;
    }
    if (this._kafkaConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnect = this._kafkaConnect;
    }
    if (this._kafkaRest !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaRest = this._kafkaRest;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    if (this._schemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistry = this._schemaRegistry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigPrivatelinkAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jolokia = undefined;
      this._kafka = undefined;
      this._kafkaConnect = undefined;
      this._kafkaRest = undefined;
      this._prometheus = undefined;
      this._schemaRegistry = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jolokia = value.jolokia;
      this._kafka = value.kafka;
      this._kafkaConnect = value.kafkaConnect;
      this._kafkaRest = value.kafkaRest;
      this._prometheus = value.prometheus;
      this._schemaRegistry = value.schemaRegistry;
    }
  }

  // jolokia - computed: false, optional: true, required: false
  private _jolokia?: boolean | cdktf.IResolvable; 
  public get jolokia() {
    return this.getBooleanAttribute('jolokia');
  }
  public set jolokia(value: boolean | cdktf.IResolvable) {
    this._jolokia = value;
  }
  public resetJolokia() {
    this._jolokia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jolokiaInput() {
    return this._jolokia;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka?: boolean | cdktf.IResolvable; 
  public get kafka() {
    return this.getBooleanAttribute('kafka');
  }
  public set kafka(value: boolean | cdktf.IResolvable) {
    this._kafka = value;
  }
  public resetKafka() {
    this._kafka = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka;
  }

  // kafka_connect - computed: false, optional: true, required: false
  private _kafkaConnect?: boolean | cdktf.IResolvable; 
  public get kafkaConnect() {
    return this.getBooleanAttribute('kafka_connect');
  }
  public set kafkaConnect(value: boolean | cdktf.IResolvable) {
    this._kafkaConnect = value;
  }
  public resetKafkaConnect() {
    this._kafkaConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectInput() {
    return this._kafkaConnect;
  }

  // kafka_rest - computed: false, optional: true, required: false
  private _kafkaRest?: boolean | cdktf.IResolvable; 
  public get kafkaRest() {
    return this.getBooleanAttribute('kafka_rest');
  }
  public set kafkaRest(value: boolean | cdktf.IResolvable) {
    this._kafkaRest = value;
  }
  public resetKafkaRest() {
    this._kafkaRest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaRestInput() {
    return this._kafkaRest;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus?: boolean | cdktf.IResolvable; 
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
  public set prometheus(value: boolean | cdktf.IResolvable) {
    this._prometheus = value;
  }
  public resetPrometheus() {
    this._prometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus;
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
}
export interface KafkaKafkaUserConfigPublicAccess {
  /**
  * Allow clients to connect to kafka from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka Kafka#kafka}
  */
  readonly kafka?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to kafka_connect from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_connect Kafka#kafka_connect}
  */
  readonly kafkaConnect?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to kafka_rest from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_rest Kafka#kafka_rest}
  */
  readonly kafkaRest?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to prometheus from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#prometheus Kafka#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to schema_registry from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#schema_registry Kafka#schema_registry}
  */
  readonly schemaRegistry?: boolean | cdktf.IResolvable;
}

export function kafkaKafkaUserConfigPublicAccessToTerraform(struct?: KafkaKafkaUserConfigPublicAccessOutputReference | KafkaKafkaUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka: cdktf.booleanToTerraform(struct!.kafka),
    kafka_connect: cdktf.booleanToTerraform(struct!.kafkaConnect),
    kafka_rest: cdktf.booleanToTerraform(struct!.kafkaRest),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
    schema_registry: cdktf.booleanToTerraform(struct!.schemaRegistry),
  }
}


export function kafkaKafkaUserConfigPublicAccessToHclTerraform(struct?: KafkaKafkaUserConfigPublicAccessOutputReference | KafkaKafkaUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kafka: {
      value: cdktf.booleanToHclTerraform(struct!.kafka),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kafka_connect: {
      value: cdktf.booleanToHclTerraform(struct!.kafkaConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kafka_rest: {
      value: cdktf.booleanToHclTerraform(struct!.kafkaRest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_registry: {
      value: cdktf.booleanToHclTerraform(struct!.schemaRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafka !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka;
    }
    if (this._kafkaConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnect = this._kafkaConnect;
    }
    if (this._kafkaRest !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaRest = this._kafkaRest;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    if (this._schemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistry = this._schemaRegistry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kafka = undefined;
      this._kafkaConnect = undefined;
      this._kafkaRest = undefined;
      this._prometheus = undefined;
      this._schemaRegistry = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kafka = value.kafka;
      this._kafkaConnect = value.kafkaConnect;
      this._kafkaRest = value.kafkaRest;
      this._prometheus = value.prometheus;
      this._schemaRegistry = value.schemaRegistry;
    }
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka?: boolean | cdktf.IResolvable; 
  public get kafka() {
    return this.getBooleanAttribute('kafka');
  }
  public set kafka(value: boolean | cdktf.IResolvable) {
    this._kafka = value;
  }
  public resetKafka() {
    this._kafka = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka;
  }

  // kafka_connect - computed: false, optional: true, required: false
  private _kafkaConnect?: boolean | cdktf.IResolvable; 
  public get kafkaConnect() {
    return this.getBooleanAttribute('kafka_connect');
  }
  public set kafkaConnect(value: boolean | cdktf.IResolvable) {
    this._kafkaConnect = value;
  }
  public resetKafkaConnect() {
    this._kafkaConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectInput() {
    return this._kafkaConnect;
  }

  // kafka_rest - computed: false, optional: true, required: false
  private _kafkaRest?: boolean | cdktf.IResolvable; 
  public get kafkaRest() {
    return this.getBooleanAttribute('kafka_rest');
  }
  public set kafkaRest(value: boolean | cdktf.IResolvable) {
    this._kafkaRest = value;
  }
  public resetKafkaRest() {
    this._kafkaRest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaRestInput() {
    return this._kafkaRest;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus?: boolean | cdktf.IResolvable; 
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
  public set prometheus(value: boolean | cdktf.IResolvable) {
    this._prometheus = value;
  }
  public resetPrometheus() {
    this._prometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus;
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
}
export interface KafkaKafkaUserConfigSchemaRegistryConfig {
  /**
  * If true, Karapace / Schema Registry on the service nodes can participate in leader election. It might be needed to disable this when the schemas topic is replicated to a secondary cluster and Karapace / Schema Registry there must not participate in leader election. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#leader_eligibility Kafka#leader_eligibility}
  */
  readonly leaderEligibility?: boolean | cdktf.IResolvable;
  /**
  * If enabled, kafka errors which can be retried or custom errors specified for the service will not be raised, instead, a warning log is emitted. This will denoise issue tracking systems, i.e. sentry. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#retriable_errors_silenced Kafka#retriable_errors_silenced}
  */
  readonly retriableErrorsSilenced?: boolean | cdktf.IResolvable;
  /**
  * If enabled, causes the Karapace schema-registry service to shutdown when there are invalid schema records in the `_schemas` topic. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#schema_reader_strict_mode Kafka#schema_reader_strict_mode}
  */
  readonly schemaReaderStrictMode?: boolean | cdktf.IResolvable;
  /**
  * The durable single partition topic that acts as the durable log for the data. This topic must be compacted to avoid losing data due to retention policy. Please note that changing this configuration in an existing Schema Registry / Karapace setup leads to previous schemas being inaccessible, data encoded with them potentially unreadable and schema ID sequence put out of order. It's only possible to do the switch while Schema Registry / Karapace is disabled. Defaults to `_schemas`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#topic_name Kafka#topic_name}
  */
  readonly topicName?: string;
}

export function kafkaKafkaUserConfigSchemaRegistryConfigToTerraform(struct?: KafkaKafkaUserConfigSchemaRegistryConfigOutputReference | KafkaKafkaUserConfigSchemaRegistryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    leader_eligibility: cdktf.booleanToTerraform(struct!.leaderEligibility),
    retriable_errors_silenced: cdktf.booleanToTerraform(struct!.retriableErrorsSilenced),
    schema_reader_strict_mode: cdktf.booleanToTerraform(struct!.schemaReaderStrictMode),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}


export function kafkaKafkaUserConfigSchemaRegistryConfigToHclTerraform(struct?: KafkaKafkaUserConfigSchemaRegistryConfigOutputReference | KafkaKafkaUserConfigSchemaRegistryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    leader_eligibility: {
      value: cdktf.booleanToHclTerraform(struct!.leaderEligibility),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retriable_errors_silenced: {
      value: cdktf.booleanToHclTerraform(struct!.retriableErrorsSilenced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_reader_strict_mode: {
      value: cdktf.booleanToHclTerraform(struct!.schemaReaderStrictMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class KafkaKafkaUserConfigSchemaRegistryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigSchemaRegistryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leaderEligibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaderEligibility = this._leaderEligibility;
    }
    if (this._retriableErrorsSilenced !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriableErrorsSilenced = this._retriableErrorsSilenced;
    }
    if (this._schemaReaderStrictMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaReaderStrictMode = this._schemaReaderStrictMode;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigSchemaRegistryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leaderEligibility = undefined;
      this._retriableErrorsSilenced = undefined;
      this._schemaReaderStrictMode = undefined;
      this._topicName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leaderEligibility = value.leaderEligibility;
      this._retriableErrorsSilenced = value.retriableErrorsSilenced;
      this._schemaReaderStrictMode = value.schemaReaderStrictMode;
      this._topicName = value.topicName;
    }
  }

  // leader_eligibility - computed: false, optional: true, required: false
  private _leaderEligibility?: boolean | cdktf.IResolvable; 
  public get leaderEligibility() {
    return this.getBooleanAttribute('leader_eligibility');
  }
  public set leaderEligibility(value: boolean | cdktf.IResolvable) {
    this._leaderEligibility = value;
  }
  public resetLeaderEligibility() {
    this._leaderEligibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaderEligibilityInput() {
    return this._leaderEligibility;
  }

  // retriable_errors_silenced - computed: false, optional: true, required: false
  private _retriableErrorsSilenced?: boolean | cdktf.IResolvable; 
  public get retriableErrorsSilenced() {
    return this.getBooleanAttribute('retriable_errors_silenced');
  }
  public set retriableErrorsSilenced(value: boolean | cdktf.IResolvable) {
    this._retriableErrorsSilenced = value;
  }
  public resetRetriableErrorsSilenced() {
    this._retriableErrorsSilenced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriableErrorsSilencedInput() {
    return this._retriableErrorsSilenced;
  }

  // schema_reader_strict_mode - computed: false, optional: true, required: false
  private _schemaReaderStrictMode?: boolean | cdktf.IResolvable; 
  public get schemaReaderStrictMode() {
    return this.getBooleanAttribute('schema_reader_strict_mode');
  }
  public set schemaReaderStrictMode(value: boolean | cdktf.IResolvable) {
    this._schemaReaderStrictMode = value;
  }
  public resetSchemaReaderStrictMode() {
    this._schemaReaderStrictMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaReaderStrictModeInput() {
    return this._schemaReaderStrictMode;
  }

  // topic_name - computed: false, optional: true, required: false
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  public resetTopicName() {
    this._topicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }
}
export interface KafkaKafkaUserConfigSingleZone {
  /**
  * The availability zone to use for the service. This is only used when enabled is set to true. If not set the service will be allocated in random AZ.The AZ is not guaranteed, and the service may be allocated in a different AZ if the selected AZ is not available. Zones will not be validated and invalid zones will be ignored, falling back to random AZ selection. Common availability zones include: AWS (euc1-az1, euc1-az2, euc1-az3), GCP (europe-west1-a, europe-west1-b, europe-west1-c), Azure (germanywestcentral/1, germanywestcentral/2, germanywestcentral/3). Example: `euc1-az1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#availability_zone Kafka#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Whether to allocate nodes on the same Availability Zone or spread across zones available. By default service nodes are spread across different AZs. The single AZ support is best-effort and may temporarily allocate nodes in different AZs e.g. in case of capacity limitations in one AZ.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#enabled Kafka#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function kafkaKafkaUserConfigSingleZoneToTerraform(struct?: KafkaKafkaUserConfigSingleZoneOutputReference | KafkaKafkaUserConfigSingleZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function kafkaKafkaUserConfigSingleZoneToHclTerraform(struct?: KafkaKafkaUserConfigSingleZoneOutputReference | KafkaKafkaUserConfigSingleZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class KafkaKafkaUserConfigSingleZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigSingleZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigSingleZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZone = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZone = value.availabilityZone;
      this._enabled = value.enabled;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
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
export interface KafkaKafkaUserConfigTieredStorageLocalCache {
  /**
  * Local cache size in bytes. Example: `1073741824`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#size Kafka#size}
  */
  readonly size?: number;
}

export function kafkaKafkaUserConfigTieredStorageLocalCacheToTerraform(struct?: KafkaKafkaUserConfigTieredStorageLocalCacheOutputReference | KafkaKafkaUserConfigTieredStorageLocalCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function kafkaKafkaUserConfigTieredStorageLocalCacheToHclTerraform(struct?: KafkaKafkaUserConfigTieredStorageLocalCacheOutputReference | KafkaKafkaUserConfigTieredStorageLocalCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigTieredStorageLocalCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigTieredStorageLocalCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigTieredStorageLocalCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface KafkaKafkaUserConfigTieredStorage {
  /**
  * Whether to enable the tiered storage functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#enabled Kafka#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * local_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#local_cache Kafka#local_cache}
  */
  readonly localCache?: KafkaKafkaUserConfigTieredStorageLocalCache;
}

export function kafkaKafkaUserConfigTieredStorageToTerraform(struct?: KafkaKafkaUserConfigTieredStorageOutputReference | KafkaKafkaUserConfigTieredStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    local_cache: kafkaKafkaUserConfigTieredStorageLocalCacheToTerraform(struct!.localCache),
  }
}


export function kafkaKafkaUserConfigTieredStorageToHclTerraform(struct?: KafkaKafkaUserConfigTieredStorageOutputReference | KafkaKafkaUserConfigTieredStorage): any {
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
    local_cache: {
      value: kafkaKafkaUserConfigTieredStorageLocalCacheToHclTerraform(struct!.localCache),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigTieredStorageLocalCacheList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigTieredStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfigTieredStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._localCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localCache = this._localCache?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfigTieredStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._localCache.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._localCache.internalValue = value.localCache;
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

  // local_cache - computed: false, optional: true, required: false
  private _localCache = new KafkaKafkaUserConfigTieredStorageLocalCacheOutputReference(this, "local_cache");
  public get localCache() {
    return this._localCache;
  }
  public putLocalCache(value: KafkaKafkaUserConfigTieredStorageLocalCache) {
    this._localCache.internalValue = value;
  }
  public resetLocalCache() {
    this._localCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCacheInput() {
    return this._localCache.internalValue;
  }
}
export interface KafkaKafkaUserConfig {
  /**
  * Additional Cloud Regions for Backup Replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#additional_backup_regions Kafka#additional_backup_regions}
  */
  readonly additionalBackupRegions?: string[];
  /**
  * Allow access to read Kafka topic messages in the Aiven Console and REST API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#aiven_kafka_topic_messages Kafka#aiven_kafka_topic_messages}
  */
  readonly aivenKafkaTopicMessages?: boolean | cdktf.IResolvable;
  /**
  * Serve the web frontend using a custom CNAME pointing to the Aiven DNS name. Example: `grafana.example.org`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#custom_domain Kafka#custom_domain}
  */
  readonly customDomain?: string;
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#ip_filter Kafka#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#ip_filter_string Kafka#ip_filter_string}
  */
  readonly ipFilterString?: string[];
  /**
  * Enable Kafka Connect service. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_connect Kafka#kafka_connect}
  */
  readonly kafkaConnect?: boolean | cdktf.IResolvable;
  /**
  * Enable Kafka-REST service. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_rest Kafka#kafka_rest}
  */
  readonly kafkaRest?: boolean | cdktf.IResolvable;
  /**
  * Enable authorization in Kafka-REST service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_rest_authorization Kafka#kafka_rest_authorization}
  */
  readonly kafkaRestAuthorization?: boolean | cdktf.IResolvable;
  /**
  * Enum: `3.1`, `3.2`, `3.3`, `3.4`, `3.5`, `3.6`, `3.7`, `3.8`, `3.9`, `4.0`, and newer. Kafka major version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_version Kafka#kafka_version}
  */
  readonly kafkaVersion?: string;
  /**
  * Use Letsencrypt CA for Kafka SASL via Privatelink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#letsencrypt_sasl_privatelink Kafka#letsencrypt_sasl_privatelink}
  */
  readonly letsencryptSaslPrivatelink?: boolean | cdktf.IResolvable;
  /**
  * Enable Schema-Registry service. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#schema_registry Kafka#schema_registry}
  */
  readonly schemaRegistry?: boolean | cdktf.IResolvable;
  /**
  * Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#service_log Kafka#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Use static public IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#static_ips Kafka#static_ips}
  */
  readonly staticIps?: boolean | cdktf.IResolvable;
  /**
  * follower_fetching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#follower_fetching Kafka#follower_fetching}
  */
  readonly followerFetching?: KafkaKafkaUserConfigFollowerFetching;
  /**
  * ip_filter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#ip_filter_object Kafka#ip_filter_object}
  */
  readonly ipFilterObject?: KafkaKafkaUserConfigIpFilterObject[] | cdktf.IResolvable;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka Kafka#kafka}
  */
  readonly kafka?: KafkaKafkaUserConfigKafka;
  /**
  * kafka_authentication_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_authentication_methods Kafka#kafka_authentication_methods}
  */
  readonly kafkaAuthenticationMethods?: KafkaKafkaUserConfigKafkaAuthenticationMethods;
  /**
  * kafka_connect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_connect_config Kafka#kafka_connect_config}
  */
  readonly kafkaConnectConfig?: KafkaKafkaUserConfigKafkaConnectConfig;
  /**
  * kafka_connect_plugin_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_connect_plugin_versions Kafka#kafka_connect_plugin_versions}
  */
  readonly kafkaConnectPluginVersions?: KafkaKafkaUserConfigKafkaConnectPluginVersions[] | cdktf.IResolvable;
  /**
  * kafka_connect_secret_providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_connect_secret_providers Kafka#kafka_connect_secret_providers}
  */
  readonly kafkaConnectSecretProviders?: KafkaKafkaUserConfigKafkaConnectSecretProviders[] | cdktf.IResolvable;
  /**
  * kafka_diskless block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_diskless Kafka#kafka_diskless}
  */
  readonly kafkaDiskless?: KafkaKafkaUserConfigKafkaDiskless;
  /**
  * kafka_rest_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_rest_config Kafka#kafka_rest_config}
  */
  readonly kafkaRestConfig?: KafkaKafkaUserConfigKafkaRestConfig;
  /**
  * kafka_sasl_mechanisms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#kafka_sasl_mechanisms Kafka#kafka_sasl_mechanisms}
  */
  readonly kafkaSaslMechanisms?: KafkaKafkaUserConfigKafkaSaslMechanisms;
  /**
  * private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#private_access Kafka#private_access}
  */
  readonly privateAccess?: KafkaKafkaUserConfigPrivateAccess;
  /**
  * privatelink_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#privatelink_access Kafka#privatelink_access}
  */
  readonly privatelinkAccess?: KafkaKafkaUserConfigPrivatelinkAccess;
  /**
  * public_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#public_access Kafka#public_access}
  */
  readonly publicAccess?: KafkaKafkaUserConfigPublicAccess;
  /**
  * schema_registry_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#schema_registry_config Kafka#schema_registry_config}
  */
  readonly schemaRegistryConfig?: KafkaKafkaUserConfigSchemaRegistryConfig;
  /**
  * single_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#single_zone Kafka#single_zone}
  */
  readonly singleZone?: KafkaKafkaUserConfigSingleZone;
  /**
  * tiered_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#tiered_storage Kafka#tiered_storage}
  */
  readonly tieredStorage?: KafkaKafkaUserConfigTieredStorage;
}

export function kafkaKafkaUserConfigToTerraform(struct?: KafkaKafkaUserConfigOutputReference | KafkaKafkaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_backup_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalBackupRegions),
    aiven_kafka_topic_messages: cdktf.booleanToTerraform(struct!.aivenKafkaTopicMessages),
    custom_domain: cdktf.stringToTerraform(struct!.customDomain),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    ip_filter_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilterString),
    kafka_connect: cdktf.booleanToTerraform(struct!.kafkaConnect),
    kafka_rest: cdktf.booleanToTerraform(struct!.kafkaRest),
    kafka_rest_authorization: cdktf.booleanToTerraform(struct!.kafkaRestAuthorization),
    kafka_version: cdktf.stringToTerraform(struct!.kafkaVersion),
    letsencrypt_sasl_privatelink: cdktf.booleanToTerraform(struct!.letsencryptSaslPrivatelink),
    schema_registry: cdktf.booleanToTerraform(struct!.schemaRegistry),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    static_ips: cdktf.booleanToTerraform(struct!.staticIps),
    follower_fetching: kafkaKafkaUserConfigFollowerFetchingToTerraform(struct!.followerFetching),
    ip_filter_object: cdktf.listMapper(kafkaKafkaUserConfigIpFilterObjectToTerraform, true)(struct!.ipFilterObject),
    kafka: kafkaKafkaUserConfigKafkaToTerraform(struct!.kafka),
    kafka_authentication_methods: kafkaKafkaUserConfigKafkaAuthenticationMethodsToTerraform(struct!.kafkaAuthenticationMethods),
    kafka_connect_config: kafkaKafkaUserConfigKafkaConnectConfigToTerraform(struct!.kafkaConnectConfig),
    kafka_connect_plugin_versions: cdktf.listMapper(kafkaKafkaUserConfigKafkaConnectPluginVersionsToTerraform, true)(struct!.kafkaConnectPluginVersions),
    kafka_connect_secret_providers: cdktf.listMapper(kafkaKafkaUserConfigKafkaConnectSecretProvidersToTerraform, true)(struct!.kafkaConnectSecretProviders),
    kafka_diskless: kafkaKafkaUserConfigKafkaDisklessToTerraform(struct!.kafkaDiskless),
    kafka_rest_config: kafkaKafkaUserConfigKafkaRestConfigToTerraform(struct!.kafkaRestConfig),
    kafka_sasl_mechanisms: kafkaKafkaUserConfigKafkaSaslMechanismsToTerraform(struct!.kafkaSaslMechanisms),
    private_access: kafkaKafkaUserConfigPrivateAccessToTerraform(struct!.privateAccess),
    privatelink_access: kafkaKafkaUserConfigPrivatelinkAccessToTerraform(struct!.privatelinkAccess),
    public_access: kafkaKafkaUserConfigPublicAccessToTerraform(struct!.publicAccess),
    schema_registry_config: kafkaKafkaUserConfigSchemaRegistryConfigToTerraform(struct!.schemaRegistryConfig),
    single_zone: kafkaKafkaUserConfigSingleZoneToTerraform(struct!.singleZone),
    tiered_storage: kafkaKafkaUserConfigTieredStorageToTerraform(struct!.tieredStorage),
  }
}


export function kafkaKafkaUserConfigToHclTerraform(struct?: KafkaKafkaUserConfigOutputReference | KafkaKafkaUserConfig): any {
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
    aiven_kafka_topic_messages: {
      value: cdktf.booleanToHclTerraform(struct!.aivenKafkaTopicMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_domain: {
      value: cdktf.stringToHclTerraform(struct!.customDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    kafka_connect: {
      value: cdktf.booleanToHclTerraform(struct!.kafkaConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kafka_rest: {
      value: cdktf.booleanToHclTerraform(struct!.kafkaRest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kafka_rest_authorization: {
      value: cdktf.booleanToHclTerraform(struct!.kafkaRestAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kafka_version: {
      value: cdktf.stringToHclTerraform(struct!.kafkaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    letsencrypt_sasl_privatelink: {
      value: cdktf.booleanToHclTerraform(struct!.letsencryptSaslPrivatelink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_registry: {
      value: cdktf.booleanToHclTerraform(struct!.schemaRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    follower_fetching: {
      value: kafkaKafkaUserConfigFollowerFetchingToHclTerraform(struct!.followerFetching),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigFollowerFetchingList",
    },
    ip_filter_object: {
      value: cdktf.listMapperHcl(kafkaKafkaUserConfigIpFilterObjectToHclTerraform, true)(struct!.ipFilterObject),
      isBlock: true,
      type: "set",
      storageClassType: "KafkaKafkaUserConfigIpFilterObjectList",
    },
    kafka: {
      value: kafkaKafkaUserConfigKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigKafkaList",
    },
    kafka_authentication_methods: {
      value: kafkaKafkaUserConfigKafkaAuthenticationMethodsToHclTerraform(struct!.kafkaAuthenticationMethods),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigKafkaAuthenticationMethodsList",
    },
    kafka_connect_config: {
      value: kafkaKafkaUserConfigKafkaConnectConfigToHclTerraform(struct!.kafkaConnectConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigKafkaConnectConfigList",
    },
    kafka_connect_plugin_versions: {
      value: cdktf.listMapperHcl(kafkaKafkaUserConfigKafkaConnectPluginVersionsToHclTerraform, true)(struct!.kafkaConnectPluginVersions),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigKafkaConnectPluginVersionsList",
    },
    kafka_connect_secret_providers: {
      value: cdktf.listMapperHcl(kafkaKafkaUserConfigKafkaConnectSecretProvidersToHclTerraform, true)(struct!.kafkaConnectSecretProviders),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigKafkaConnectSecretProvidersList",
    },
    kafka_diskless: {
      value: kafkaKafkaUserConfigKafkaDisklessToHclTerraform(struct!.kafkaDiskless),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigKafkaDisklessList",
    },
    kafka_rest_config: {
      value: kafkaKafkaUserConfigKafkaRestConfigToHclTerraform(struct!.kafkaRestConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigKafkaRestConfigList",
    },
    kafka_sasl_mechanisms: {
      value: kafkaKafkaUserConfigKafkaSaslMechanismsToHclTerraform(struct!.kafkaSaslMechanisms),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigKafkaSaslMechanismsList",
    },
    private_access: {
      value: kafkaKafkaUserConfigPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigPrivateAccessList",
    },
    privatelink_access: {
      value: kafkaKafkaUserConfigPrivatelinkAccessToHclTerraform(struct!.privatelinkAccess),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigPrivatelinkAccessList",
    },
    public_access: {
      value: kafkaKafkaUserConfigPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigPublicAccessList",
    },
    schema_registry_config: {
      value: kafkaKafkaUserConfigSchemaRegistryConfigToHclTerraform(struct!.schemaRegistryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigSchemaRegistryConfigList",
    },
    single_zone: {
      value: kafkaKafkaUserConfigSingleZoneToHclTerraform(struct!.singleZone),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigSingleZoneList",
    },
    tiered_storage: {
      value: kafkaKafkaUserConfigTieredStorageToHclTerraform(struct!.tieredStorage),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaKafkaUserConfigTieredStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaKafkaUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaKafkaUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalBackupRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalBackupRegions = this._additionalBackupRegions;
    }
    if (this._aivenKafkaTopicMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.aivenKafkaTopicMessages = this._aivenKafkaTopicMessages;
    }
    if (this._customDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDomain = this._customDomain;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._ipFilterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterString = this._ipFilterString;
    }
    if (this._kafkaConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnect = this._kafkaConnect;
    }
    if (this._kafkaRest !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaRest = this._kafkaRest;
    }
    if (this._kafkaRestAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaRestAuthorization = this._kafkaRestAuthorization;
    }
    if (this._kafkaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaVersion = this._kafkaVersion;
    }
    if (this._letsencryptSaslPrivatelink !== undefined) {
      hasAnyValues = true;
      internalValueResult.letsencryptSaslPrivatelink = this._letsencryptSaslPrivatelink;
    }
    if (this._schemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistry = this._schemaRegistry;
    }
    if (this._serviceLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLog = this._serviceLog;
    }
    if (this._staticIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIps = this._staticIps;
    }
    if (this._followerFetching?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.followerFetching = this._followerFetching?.internalValue;
    }
    if (this._ipFilterObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterObject = this._ipFilterObject?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._kafkaAuthenticationMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaAuthenticationMethods = this._kafkaAuthenticationMethods?.internalValue;
    }
    if (this._kafkaConnectConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnectConfig = this._kafkaConnectConfig?.internalValue;
    }
    if (this._kafkaConnectPluginVersions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnectPluginVersions = this._kafkaConnectPluginVersions?.internalValue;
    }
    if (this._kafkaConnectSecretProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnectSecretProviders = this._kafkaConnectSecretProviders?.internalValue;
    }
    if (this._kafkaDiskless?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaDiskless = this._kafkaDiskless?.internalValue;
    }
    if (this._kafkaRestConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaRestConfig = this._kafkaRestConfig?.internalValue;
    }
    if (this._kafkaSaslMechanisms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaSaslMechanisms = this._kafkaSaslMechanisms?.internalValue;
    }
    if (this._privateAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAccess = this._privateAccess?.internalValue;
    }
    if (this._privatelinkAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatelinkAccess = this._privatelinkAccess?.internalValue;
    }
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    if (this._schemaRegistryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryConfig = this._schemaRegistryConfig?.internalValue;
    }
    if (this._singleZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleZone = this._singleZone?.internalValue;
    }
    if (this._tieredStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieredStorage = this._tieredStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaKafkaUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalBackupRegions = undefined;
      this._aivenKafkaTopicMessages = undefined;
      this._customDomain = undefined;
      this._ipFilter = undefined;
      this._ipFilterString = undefined;
      this._kafkaConnect = undefined;
      this._kafkaRest = undefined;
      this._kafkaRestAuthorization = undefined;
      this._kafkaVersion = undefined;
      this._letsencryptSaslPrivatelink = undefined;
      this._schemaRegistry = undefined;
      this._serviceLog = undefined;
      this._staticIps = undefined;
      this._followerFetching.internalValue = undefined;
      this._ipFilterObject.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._kafkaAuthenticationMethods.internalValue = undefined;
      this._kafkaConnectConfig.internalValue = undefined;
      this._kafkaConnectPluginVersions.internalValue = undefined;
      this._kafkaConnectSecretProviders.internalValue = undefined;
      this._kafkaDiskless.internalValue = undefined;
      this._kafkaRestConfig.internalValue = undefined;
      this._kafkaSaslMechanisms.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._privatelinkAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
      this._schemaRegistryConfig.internalValue = undefined;
      this._singleZone.internalValue = undefined;
      this._tieredStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalBackupRegions = value.additionalBackupRegions;
      this._aivenKafkaTopicMessages = value.aivenKafkaTopicMessages;
      this._customDomain = value.customDomain;
      this._ipFilter = value.ipFilter;
      this._ipFilterString = value.ipFilterString;
      this._kafkaConnect = value.kafkaConnect;
      this._kafkaRest = value.kafkaRest;
      this._kafkaRestAuthorization = value.kafkaRestAuthorization;
      this._kafkaVersion = value.kafkaVersion;
      this._letsencryptSaslPrivatelink = value.letsencryptSaslPrivatelink;
      this._schemaRegistry = value.schemaRegistry;
      this._serviceLog = value.serviceLog;
      this._staticIps = value.staticIps;
      this._followerFetching.internalValue = value.followerFetching;
      this._ipFilterObject.internalValue = value.ipFilterObject;
      this._kafka.internalValue = value.kafka;
      this._kafkaAuthenticationMethods.internalValue = value.kafkaAuthenticationMethods;
      this._kafkaConnectConfig.internalValue = value.kafkaConnectConfig;
      this._kafkaConnectPluginVersions.internalValue = value.kafkaConnectPluginVersions;
      this._kafkaConnectSecretProviders.internalValue = value.kafkaConnectSecretProviders;
      this._kafkaDiskless.internalValue = value.kafkaDiskless;
      this._kafkaRestConfig.internalValue = value.kafkaRestConfig;
      this._kafkaSaslMechanisms.internalValue = value.kafkaSaslMechanisms;
      this._privateAccess.internalValue = value.privateAccess;
      this._privatelinkAccess.internalValue = value.privatelinkAccess;
      this._publicAccess.internalValue = value.publicAccess;
      this._schemaRegistryConfig.internalValue = value.schemaRegistryConfig;
      this._singleZone.internalValue = value.singleZone;
      this._tieredStorage.internalValue = value.tieredStorage;
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

  // aiven_kafka_topic_messages - computed: false, optional: true, required: false
  private _aivenKafkaTopicMessages?: boolean | cdktf.IResolvable; 
  public get aivenKafkaTopicMessages() {
    return this.getBooleanAttribute('aiven_kafka_topic_messages');
  }
  public set aivenKafkaTopicMessages(value: boolean | cdktf.IResolvable) {
    this._aivenKafkaTopicMessages = value;
  }
  public resetAivenKafkaTopicMessages() {
    this._aivenKafkaTopicMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aivenKafkaTopicMessagesInput() {
    return this._aivenKafkaTopicMessages;
  }

  // custom_domain - computed: false, optional: true, required: false
  private _customDomain?: string; 
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }
  public set customDomain(value: string) {
    this._customDomain = value;
  }
  public resetCustomDomain() {
    this._customDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain;
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

  // kafka_connect - computed: false, optional: true, required: false
  private _kafkaConnect?: boolean | cdktf.IResolvable; 
  public get kafkaConnect() {
    return this.getBooleanAttribute('kafka_connect');
  }
  public set kafkaConnect(value: boolean | cdktf.IResolvable) {
    this._kafkaConnect = value;
  }
  public resetKafkaConnect() {
    this._kafkaConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectInput() {
    return this._kafkaConnect;
  }

  // kafka_rest - computed: false, optional: true, required: false
  private _kafkaRest?: boolean | cdktf.IResolvable; 
  public get kafkaRest() {
    return this.getBooleanAttribute('kafka_rest');
  }
  public set kafkaRest(value: boolean | cdktf.IResolvable) {
    this._kafkaRest = value;
  }
  public resetKafkaRest() {
    this._kafkaRest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaRestInput() {
    return this._kafkaRest;
  }

  // kafka_rest_authorization - computed: false, optional: true, required: false
  private _kafkaRestAuthorization?: boolean | cdktf.IResolvable; 
  public get kafkaRestAuthorization() {
    return this.getBooleanAttribute('kafka_rest_authorization');
  }
  public set kafkaRestAuthorization(value: boolean | cdktf.IResolvable) {
    this._kafkaRestAuthorization = value;
  }
  public resetKafkaRestAuthorization() {
    this._kafkaRestAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaRestAuthorizationInput() {
    return this._kafkaRestAuthorization;
  }

  // kafka_version - computed: false, optional: true, required: false
  private _kafkaVersion?: string; 
  public get kafkaVersion() {
    return this.getStringAttribute('kafka_version');
  }
  public set kafkaVersion(value: string) {
    this._kafkaVersion = value;
  }
  public resetKafkaVersion() {
    this._kafkaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionInput() {
    return this._kafkaVersion;
  }

  // letsencrypt_sasl_privatelink - computed: false, optional: true, required: false
  private _letsencryptSaslPrivatelink?: boolean | cdktf.IResolvable; 
  public get letsencryptSaslPrivatelink() {
    return this.getBooleanAttribute('letsencrypt_sasl_privatelink');
  }
  public set letsencryptSaslPrivatelink(value: boolean | cdktf.IResolvable) {
    this._letsencryptSaslPrivatelink = value;
  }
  public resetLetsencryptSaslPrivatelink() {
    this._letsencryptSaslPrivatelink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get letsencryptSaslPrivatelinkInput() {
    return this._letsencryptSaslPrivatelink;
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

  // follower_fetching - computed: false, optional: true, required: false
  private _followerFetching = new KafkaKafkaUserConfigFollowerFetchingOutputReference(this, "follower_fetching");
  public get followerFetching() {
    return this._followerFetching;
  }
  public putFollowerFetching(value: KafkaKafkaUserConfigFollowerFetching) {
    this._followerFetching.internalValue = value;
  }
  public resetFollowerFetching() {
    this._followerFetching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followerFetchingInput() {
    return this._followerFetching.internalValue;
  }

  // ip_filter_object - computed: false, optional: true, required: false
  private _ipFilterObject = new KafkaKafkaUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }
  public putIpFilterObject(value: KafkaKafkaUserConfigIpFilterObject[] | cdktf.IResolvable) {
    this._ipFilterObject.internalValue = value;
  }
  public resetIpFilterObject() {
    this._ipFilterObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterObjectInput() {
    return this._ipFilterObject.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new KafkaKafkaUserConfigKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: KafkaKafkaUserConfigKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // kafka_authentication_methods - computed: false, optional: true, required: false
  private _kafkaAuthenticationMethods = new KafkaKafkaUserConfigKafkaAuthenticationMethodsOutputReference(this, "kafka_authentication_methods");
  public get kafkaAuthenticationMethods() {
    return this._kafkaAuthenticationMethods;
  }
  public putKafkaAuthenticationMethods(value: KafkaKafkaUserConfigKafkaAuthenticationMethods) {
    this._kafkaAuthenticationMethods.internalValue = value;
  }
  public resetKafkaAuthenticationMethods() {
    this._kafkaAuthenticationMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaAuthenticationMethodsInput() {
    return this._kafkaAuthenticationMethods.internalValue;
  }

  // kafka_connect_config - computed: false, optional: true, required: false
  private _kafkaConnectConfig = new KafkaKafkaUserConfigKafkaConnectConfigOutputReference(this, "kafka_connect_config");
  public get kafkaConnectConfig() {
    return this._kafkaConnectConfig;
  }
  public putKafkaConnectConfig(value: KafkaKafkaUserConfigKafkaConnectConfig) {
    this._kafkaConnectConfig.internalValue = value;
  }
  public resetKafkaConnectConfig() {
    this._kafkaConnectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectConfigInput() {
    return this._kafkaConnectConfig.internalValue;
  }

  // kafka_connect_plugin_versions - computed: false, optional: true, required: false
  private _kafkaConnectPluginVersions = new KafkaKafkaUserConfigKafkaConnectPluginVersionsList(this, "kafka_connect_plugin_versions", false);
  public get kafkaConnectPluginVersions() {
    return this._kafkaConnectPluginVersions;
  }
  public putKafkaConnectPluginVersions(value: KafkaKafkaUserConfigKafkaConnectPluginVersions[] | cdktf.IResolvable) {
    this._kafkaConnectPluginVersions.internalValue = value;
  }
  public resetKafkaConnectPluginVersions() {
    this._kafkaConnectPluginVersions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectPluginVersionsInput() {
    return this._kafkaConnectPluginVersions.internalValue;
  }

  // kafka_connect_secret_providers - computed: false, optional: true, required: false
  private _kafkaConnectSecretProviders = new KafkaKafkaUserConfigKafkaConnectSecretProvidersList(this, "kafka_connect_secret_providers", false);
  public get kafkaConnectSecretProviders() {
    return this._kafkaConnectSecretProviders;
  }
  public putKafkaConnectSecretProviders(value: KafkaKafkaUserConfigKafkaConnectSecretProviders[] | cdktf.IResolvable) {
    this._kafkaConnectSecretProviders.internalValue = value;
  }
  public resetKafkaConnectSecretProviders() {
    this._kafkaConnectSecretProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectSecretProvidersInput() {
    return this._kafkaConnectSecretProviders.internalValue;
  }

  // kafka_diskless - computed: false, optional: true, required: false
  private _kafkaDiskless = new KafkaKafkaUserConfigKafkaDisklessOutputReference(this, "kafka_diskless");
  public get kafkaDiskless() {
    return this._kafkaDiskless;
  }
  public putKafkaDiskless(value: KafkaKafkaUserConfigKafkaDiskless) {
    this._kafkaDiskless.internalValue = value;
  }
  public resetKafkaDiskless() {
    this._kafkaDiskless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaDisklessInput() {
    return this._kafkaDiskless.internalValue;
  }

  // kafka_rest_config - computed: false, optional: true, required: false
  private _kafkaRestConfig = new KafkaKafkaUserConfigKafkaRestConfigOutputReference(this, "kafka_rest_config");
  public get kafkaRestConfig() {
    return this._kafkaRestConfig;
  }
  public putKafkaRestConfig(value: KafkaKafkaUserConfigKafkaRestConfig) {
    this._kafkaRestConfig.internalValue = value;
  }
  public resetKafkaRestConfig() {
    this._kafkaRestConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaRestConfigInput() {
    return this._kafkaRestConfig.internalValue;
  }

  // kafka_sasl_mechanisms - computed: false, optional: true, required: false
  private _kafkaSaslMechanisms = new KafkaKafkaUserConfigKafkaSaslMechanismsOutputReference(this, "kafka_sasl_mechanisms");
  public get kafkaSaslMechanisms() {
    return this._kafkaSaslMechanisms;
  }
  public putKafkaSaslMechanisms(value: KafkaKafkaUserConfigKafkaSaslMechanisms) {
    this._kafkaSaslMechanisms.internalValue = value;
  }
  public resetKafkaSaslMechanisms() {
    this._kafkaSaslMechanisms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSaslMechanismsInput() {
    return this._kafkaSaslMechanisms.internalValue;
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess = new KafkaKafkaUserConfigPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: KafkaKafkaUserConfigPrivateAccess) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // privatelink_access - computed: false, optional: true, required: false
  private _privatelinkAccess = new KafkaKafkaUserConfigPrivatelinkAccessOutputReference(this, "privatelink_access");
  public get privatelinkAccess() {
    return this._privatelinkAccess;
  }
  public putPrivatelinkAccess(value: KafkaKafkaUserConfigPrivatelinkAccess) {
    this._privatelinkAccess.internalValue = value;
  }
  public resetPrivatelinkAccess() {
    this._privatelinkAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatelinkAccessInput() {
    return this._privatelinkAccess.internalValue;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess = new KafkaKafkaUserConfigPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: KafkaKafkaUserConfigPublicAccess) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }

  // schema_registry_config - computed: false, optional: true, required: false
  private _schemaRegistryConfig = new KafkaKafkaUserConfigSchemaRegistryConfigOutputReference(this, "schema_registry_config");
  public get schemaRegistryConfig() {
    return this._schemaRegistryConfig;
  }
  public putSchemaRegistryConfig(value: KafkaKafkaUserConfigSchemaRegistryConfig) {
    this._schemaRegistryConfig.internalValue = value;
  }
  public resetSchemaRegistryConfig() {
    this._schemaRegistryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryConfigInput() {
    return this._schemaRegistryConfig.internalValue;
  }

  // single_zone - computed: false, optional: true, required: false
  private _singleZone = new KafkaKafkaUserConfigSingleZoneOutputReference(this, "single_zone");
  public get singleZone() {
    return this._singleZone;
  }
  public putSingleZone(value: KafkaKafkaUserConfigSingleZone) {
    this._singleZone.internalValue = value;
  }
  public resetSingleZone() {
    this._singleZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleZoneInput() {
    return this._singleZone.internalValue;
  }

  // tiered_storage - computed: false, optional: true, required: false
  private _tieredStorage = new KafkaKafkaUserConfigTieredStorageOutputReference(this, "tiered_storage");
  public get tieredStorage() {
    return this._tieredStorage;
  }
  public putTieredStorage(value: KafkaKafkaUserConfigTieredStorage) {
    this._tieredStorage.internalValue = value;
  }
  public resetTieredStorage() {
    this._tieredStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieredStorageInput() {
    return this._tieredStorage.internalValue;
  }
}
export interface KafkaServiceIntegrations {
  /**
  * Type of the service integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#integration_type Kafka#integration_type}
  */
  readonly integrationType: string;
  /**
  * Name of the source service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#source_service_name Kafka#source_service_name}
  */
  readonly sourceServiceName: string;
}

export function kafkaServiceIntegrationsToTerraform(struct?: KafkaServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
  }
}


export function kafkaServiceIntegrationsToHclTerraform(struct?: KafkaServiceIntegrations | cdktf.IResolvable): any {
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

export class KafkaServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaServiceIntegrations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaServiceIntegrations | cdktf.IResolvable | undefined) {
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

export class KafkaServiceIntegrationsList extends cdktf.ComplexList {
  public internalValue? : KafkaServiceIntegrations[] | cdktf.IResolvable

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
  public get(index: number): KafkaServiceIntegrationsOutputReference {
    return new KafkaServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaTag {
  /**
  * Service tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#key Kafka#key}
  */
  readonly key: string;
  /**
  * Service tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#value Kafka#value}
  */
  readonly value: string;
}

export function kafkaTagToTerraform(struct?: KafkaTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kafkaTagToHclTerraform(struct?: KafkaTag | cdktf.IResolvable): any {
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

export class KafkaTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaTag | cdktf.IResolvable | undefined) {
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

export class KafkaTagList extends cdktf.ComplexList {
  public internalValue? : KafkaTag[] | cdktf.IResolvable

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
  public get(index: number): KafkaTagOutputReference {
    return new KafkaTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaTechEmails {
  /**
  * An email address to contact for technical issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#email Kafka#email}
  */
  readonly email: string;
}

export function kafkaTechEmailsToTerraform(struct?: KafkaTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function kafkaTechEmailsToHclTerraform(struct?: KafkaTechEmails | cdktf.IResolvable): any {
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

export class KafkaTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaTechEmails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaTechEmails | cdktf.IResolvable | undefined) {
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

export class KafkaTechEmailsList extends cdktf.ComplexList {
  public internalValue? : KafkaTechEmails[] | cdktf.IResolvable

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
  public get(index: number): KafkaTechEmailsOutputReference {
    return new KafkaTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#create Kafka#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#default Kafka#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#delete Kafka#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#read Kafka#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#update Kafka#update}
  */
  readonly update?: string;
}

export function kafkaTimeoutsToTerraform(struct?: KafkaTimeouts | cdktf.IResolvable): any {
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


export function kafkaTimeoutsToHclTerraform(struct?: KafkaTimeouts | cdktf.IResolvable): any {
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

export class KafkaTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka aiven_kafka}
*/
export class Kafka extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_kafka";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Kafka resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Kafka to import
  * @param importFromId The id of the existing Kafka that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Kafka to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_kafka", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka aiven_kafka} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_kafka',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1',
        providerVersionConstraint: '4.46.1'
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
    this._defaultAcl = config.defaultAcl;
    this._diskSpace = config.diskSpace;
    this._id = config.id;
    this._karapace = config.karapace;
    this._maintenanceWindowDow = config.maintenanceWindowDow;
    this._maintenanceWindowTime = config.maintenanceWindowTime;
    this._plan = config.plan;
    this._project = config.project;
    this._projectVpcId = config.projectVpcId;
    this._serviceName = config.serviceName;
    this._staticIps = config.staticIps;
    this._terminationProtection = config.terminationProtection;
    this._kafka.internalValue = config.kafka;
    this._kafkaUserConfig.internalValue = config.kafkaUserConfig;
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
  private _components = new KafkaComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // default_acl - computed: false, optional: true, required: false
  private _defaultAcl?: boolean | cdktf.IResolvable; 
  public get defaultAcl() {
    return this.getBooleanAttribute('default_acl');
  }
  public set defaultAcl(value: boolean | cdktf.IResolvable) {
    this._defaultAcl = value;
  }
  public resetDefaultAcl() {
    this._defaultAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAclInput() {
    return this._defaultAcl;
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

  // karapace - computed: false, optional: true, required: false
  private _karapace?: boolean | cdktf.IResolvable; 
  public get karapace() {
    return this.getBooleanAttribute('karapace');
  }
  public set karapace(value: boolean | cdktf.IResolvable) {
    this._karapace = value;
  }
  public resetKarapace() {
    this._karapace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get karapaceInput() {
    return this._karapace;
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

  // kafka - computed: false, optional: true, required: false
  private _kafka = new KafkaKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: KafkaKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // kafka_user_config - computed: false, optional: true, required: false
  private _kafkaUserConfig = new KafkaKafkaUserConfigOutputReference(this, "kafka_user_config");
  public get kafkaUserConfig() {
    return this._kafkaUserConfig;
  }
  public putKafkaUserConfig(value: KafkaKafkaUserConfig) {
    this._kafkaUserConfig.internalValue = value;
  }
  public resetKafkaUserConfig() {
    this._kafkaUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaUserConfigInput() {
    return this._kafkaUserConfig.internalValue;
  }

  // service_integrations - computed: false, optional: true, required: false
  private _serviceIntegrations = new KafkaServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }
  public putServiceIntegrations(value: KafkaServiceIntegrations[] | cdktf.IResolvable) {
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
  private _tag = new KafkaTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: KafkaTag[] | cdktf.IResolvable) {
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
  private _techEmails = new KafkaTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }
  public putTechEmails(value: KafkaTechEmails[] | cdktf.IResolvable) {
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
  private _timeouts = new KafkaTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KafkaTimeouts) {
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
      default_acl: cdktf.booleanToTerraform(this._defaultAcl),
      disk_space: cdktf.stringToTerraform(this._diskSpace),
      id: cdktf.stringToTerraform(this._id),
      karapace: cdktf.booleanToTerraform(this._karapace),
      maintenance_window_dow: cdktf.stringToTerraform(this._maintenanceWindowDow),
      maintenance_window_time: cdktf.stringToTerraform(this._maintenanceWindowTime),
      plan: cdktf.stringToTerraform(this._plan),
      project: cdktf.stringToTerraform(this._project),
      project_vpc_id: cdktf.stringToTerraform(this._projectVpcId),
      service_name: cdktf.stringToTerraform(this._serviceName),
      static_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._staticIps),
      termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
      kafka: kafkaKafkaToTerraform(this._kafka.internalValue),
      kafka_user_config: kafkaKafkaUserConfigToTerraform(this._kafkaUserConfig.internalValue),
      service_integrations: cdktf.listMapper(kafkaServiceIntegrationsToTerraform, true)(this._serviceIntegrations.internalValue),
      tag: cdktf.listMapper(kafkaTagToTerraform, true)(this._tag.internalValue),
      tech_emails: cdktf.listMapper(kafkaTechEmailsToTerraform, true)(this._techEmails.internalValue),
      timeouts: kafkaTimeoutsToTerraform(this._timeouts.internalValue),
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
      default_acl: {
        value: cdktf.booleanToHclTerraform(this._defaultAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      karapace: {
        value: cdktf.booleanToHclTerraform(this._karapace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      kafka: {
        value: kafkaKafkaToHclTerraform(this._kafka.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaKafkaList",
      },
      kafka_user_config: {
        value: kafkaKafkaUserConfigToHclTerraform(this._kafkaUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaKafkaUserConfigList",
      },
      service_integrations: {
        value: cdktf.listMapperHcl(kafkaServiceIntegrationsToHclTerraform, true)(this._serviceIntegrations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KafkaServiceIntegrationsList",
      },
      tag: {
        value: cdktf.listMapperHcl(kafkaTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KafkaTagList",
      },
      tech_emails: {
        value: cdktf.listMapperHcl(kafkaTechEmailsToHclTerraform, true)(this._techEmails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KafkaTechEmailsList",
      },
      timeouts: {
        value: kafkaTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
