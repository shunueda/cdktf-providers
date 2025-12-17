// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Allows topics to be deleted via the kafka-topics tool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#allow_delete_topics KafkaClusterV2#allow_delete_topics}
  */
  readonly allowDeleteTopics: boolean | cdktf.IResolvable;
  /**
  * Allows topics to be auto created by brokers when messages are published to a non-existent topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#auto_create_topics KafkaClusterV2#auto_create_topics}
  */
  readonly autoCreateTopics: boolean | cdktf.IResolvable;
  /**
  * Provision this cluster for [Bundled Use only](https://www.instaclustr.com/support/documentation/cadence/getting-started-with-cadence/bundled-use-only-cluster-deployments/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#bundled_use_only KafkaClusterV2#bundled_use_only}
  */
  readonly bundledUseOnly?: boolean | cdktf.IResolvable;
  /**
  * Enables Client ⇄ Broker Authentication with mTLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#client_broker_auth_with_mtls KafkaClusterV2#client_broker_auth_with_mtls}
  */
  readonly clientBrokerAuthWithMtls?: boolean | cdktf.IResolvable;
  /**
  * Enables Client ⇄ Cluster Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#client_to_cluster_encryption KafkaClusterV2#client_to_cluster_encryption}
  */
  readonly clientToClusterEncryption: boolean | cdktf.IResolvable;
  /**
  * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#current_cluster_operation_status KafkaClusterV2#current_cluster_operation_status}
  */
  readonly currentClusterOperationStatus?: string;
  /**
  * Default number of partitions to use when created new topics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#default_number_of_partitions KafkaClusterV2#default_number_of_partitions}
  */
  readonly defaultNumberOfPartitions: number;
  /**
  * Default Replication factor to use for new topic. Also represents the number of racks to use when allocating nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#default_replication_factor KafkaClusterV2#default_replication_factor}
  */
  readonly defaultReplicationFactor: number;
  /**
  * Password for the default Kafka user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#default_user_password KafkaClusterV2#default_user_password}
  */
  readonly defaultUserPassword?: string;
  /**
  * A description of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#description KafkaClusterV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#id KafkaClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Version of Kafka to run on the cluster. Available versions: <ul> <li>`3.9.1`</li> <li>`4.0.0`</li> <li>`4.1.1`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#kafka_version KafkaClusterV2#kafka_version}
  */
  readonly kafkaVersion: string;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#name KafkaClusterV2#name}
  */
  readonly name: string;
  /**
  * Creates a PCI compliant cluster, see [PCI Compliance](https://www.instaclustr.com/support/documentation/useful-information/pci-compliance/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#pci_compliance_mode KafkaClusterV2#pci_compliance_mode}
  */
  readonly pciComplianceMode: boolean | cdktf.IResolvable;
  /**
  * Creates the cluster with private network only, see [Private Network Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#private_network_cluster KafkaClusterV2#private_network_cluster}
  */
  readonly privateNetworkCluster: boolean | cdktf.IResolvable;
  /**
  * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is not available when using Developer class nodes. See [SLA Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#sla_tier KafkaClusterV2#sla_tier}
  */
  readonly slaTier: string;
  /**
  * Status of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#status KafkaClusterV2#status}
  */
  readonly status?: string;
  /**
  * client_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#client_metrics KafkaClusterV2#client_metrics}
  */
  readonly clientMetrics?: KafkaClusterV2ClientMetrics[] | cdktf.IResolvable;
  /**
  * collocated_zookeeper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#collocated_zookeeper KafkaClusterV2#collocated_zookeeper}
  */
  readonly collocatedZookeeper?: KafkaClusterV2CollocatedZookeeper[] | cdktf.IResolvable;
  /**
  * data_centre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#data_centre KafkaClusterV2#data_centre}
  */
  readonly dataCentre: KafkaClusterV2DataCentre[] | cdktf.IResolvable;
  /**
  * dedicated_kraft_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#dedicated_kraft_controller KafkaClusterV2#dedicated_kraft_controller}
  */
  readonly dedicatedKraftController?: KafkaClusterV2DedicatedKraftController[] | cdktf.IResolvable;
  /**
  * dedicated_zookeeper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#dedicated_zookeeper KafkaClusterV2#dedicated_zookeeper}
  */
  readonly dedicatedZookeeper?: KafkaClusterV2DedicatedZookeeper[] | cdktf.IResolvable;
  /**
  * karapace_rest_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#karapace_rest_proxy KafkaClusterV2#karapace_rest_proxy}
  */
  readonly karapaceRestProxy?: KafkaClusterV2KarapaceRestProxy[] | cdktf.IResolvable;
  /**
  * karapace_schema_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#karapace_schema_registry KafkaClusterV2#karapace_schema_registry}
  */
  readonly karapaceSchemaRegistry?: KafkaClusterV2KarapaceSchemaRegistry[] | cdktf.IResolvable;
  /**
  * kraft block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#kraft KafkaClusterV2#kraft}
  */
  readonly kraft?: KafkaClusterV2Kraft[] | cdktf.IResolvable;
  /**
  * resize_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#resize_settings KafkaClusterV2#resize_settings}
  */
  readonly resizeSettings?: KafkaClusterV2ResizeSettings[] | cdktf.IResolvable;
  /**
  * rest_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#rest_proxy KafkaClusterV2#rest_proxy}
  */
  readonly restProxy?: KafkaClusterV2RestProxy[] | cdktf.IResolvable;
  /**
  * schema_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#schema_registry KafkaClusterV2#schema_registry}
  */
  readonly schemaRegistry?: KafkaClusterV2SchemaRegistry[] | cdktf.IResolvable;
  /**
  * tiered_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#tiered_storage KafkaClusterV2#tiered_storage}
  */
  readonly tieredStorage?: KafkaClusterV2TieredStorage[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#timeouts KafkaClusterV2#timeouts}
  */
  readonly timeouts?: KafkaClusterV2Timeouts;
  /**
  * two_factor_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#two_factor_delete KafkaClusterV2#two_factor_delete}
  */
  readonly twoFactorDelete?: KafkaClusterV2TwoFactorDelete[] | cdktf.IResolvable;
}
export interface KafkaClusterV2ClientMetricsBasicAuthentication {
  /**
  * Password for basic authentication when shipping client metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#password KafkaClusterV2#password}
  */
  readonly password?: string;
  /**
  * Username for basic authentication when shipping client metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#username KafkaClusterV2#username}
  */
  readonly username?: string;
}

export function kafkaClusterV2ClientMetricsBasicAuthenticationToTerraform(struct?: KafkaClusterV2ClientMetricsBasicAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function kafkaClusterV2ClientMetricsBasicAuthenticationToHclTerraform(struct?: KafkaClusterV2ClientMetricsBasicAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2ClientMetricsBasicAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2ClientMetricsBasicAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2ClientMetricsBasicAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class KafkaClusterV2ClientMetricsBasicAuthenticationList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2ClientMetricsBasicAuthentication[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2ClientMetricsBasicAuthenticationOutputReference {
    return new KafkaClusterV2ClientMetricsBasicAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2ClientMetrics {
  /**
  * Toggle to enable or disable Client Metrics for Kafka.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#enabled KafkaClusterV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * URL to which the client metrics will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#endpoint_url KafkaClusterV2#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * basic_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#basic_authentication KafkaClusterV2#basic_authentication}
  */
  readonly basicAuthentication?: KafkaClusterV2ClientMetricsBasicAuthentication[] | cdktf.IResolvable;
}

export function kafkaClusterV2ClientMetricsToTerraform(struct?: KafkaClusterV2ClientMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    basic_authentication: cdktf.listMapper(kafkaClusterV2ClientMetricsBasicAuthenticationToTerraform, true)(struct!.basicAuthentication),
  }
}


export function kafkaClusterV2ClientMetricsToHclTerraform(struct?: KafkaClusterV2ClientMetrics | cdktf.IResolvable): any {
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
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_authentication: {
      value: cdktf.listMapperHcl(kafkaClusterV2ClientMetricsBasicAuthenticationToHclTerraform, true)(struct!.basicAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaClusterV2ClientMetricsBasicAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2ClientMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2ClientMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._basicAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthentication = this._basicAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2ClientMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._endpointUrl = undefined;
      this._basicAuthentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._endpointUrl = value.endpointUrl;
      this._basicAuthentication.internalValue = value.basicAuthentication;
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

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // basic_authentication - computed: false, optional: true, required: false
  private _basicAuthentication = new KafkaClusterV2ClientMetricsBasicAuthenticationList(this, "basic_authentication", false);
  public get basicAuthentication() {
    return this._basicAuthentication;
  }
  public putBasicAuthentication(value: KafkaClusterV2ClientMetricsBasicAuthentication[] | cdktf.IResolvable) {
    this._basicAuthentication.internalValue = value;
  }
  public resetBasicAuthentication() {
    this._basicAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthenticationInput() {
    return this._basicAuthentication.internalValue;
  }
}

export class KafkaClusterV2ClientMetricsList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2ClientMetrics[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2ClientMetricsOutputReference {
    return new KafkaClusterV2ClientMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2CollocatedZookeeper {
  /**
  * Number of Zookeeper nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#node_count KafkaClusterV2#node_count}
  */
  readonly nodeCount: number;
}

export function kafkaClusterV2CollocatedZookeeperToTerraform(struct?: KafkaClusterV2CollocatedZookeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
  }
}


export function kafkaClusterV2CollocatedZookeeperToHclTerraform(struct?: KafkaClusterV2CollocatedZookeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class KafkaClusterV2CollocatedZookeeperOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2CollocatedZookeeper | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2CollocatedZookeeper | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeCount = value.nodeCount;
    }
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }
}

export class KafkaClusterV2CollocatedZookeeperList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2CollocatedZookeeper[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2CollocatedZookeeperOutputReference {
    return new KafkaClusterV2CollocatedZookeeperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2DataCentreAdditionalListenersPrivateLink {
  /**
  * Name of the advertised host for this listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#advertised_hostname KafkaClusterV2#advertised_hostname}
  */
  readonly advertisedHostname: string;
  /**
  * The Instaclustr ID of the AWS endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#end_point_service_id KafkaClusterV2#end_point_service_id}
  */
  readonly endPointServiceId?: string;
  /**
  * Name of the created endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#end_point_service_name KafkaClusterV2#end_point_service_name}
  */
  readonly endPointServiceName?: string;
}

export function kafkaClusterV2DataCentreAdditionalListenersPrivateLinkToTerraform(struct?: KafkaClusterV2DataCentreAdditionalListenersPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_hostname: cdktf.stringToTerraform(struct!.advertisedHostname),
    end_point_service_id: cdktf.stringToTerraform(struct!.endPointServiceId),
    end_point_service_name: cdktf.stringToTerraform(struct!.endPointServiceName),
  }
}


export function kafkaClusterV2DataCentreAdditionalListenersPrivateLinkToHclTerraform(struct?: KafkaClusterV2DataCentreAdditionalListenersPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertised_hostname: {
      value: cdktf.stringToHclTerraform(struct!.advertisedHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_service_id: {
      value: cdktf.stringToHclTerraform(struct!.endPointServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_service_name: {
      value: cdktf.stringToHclTerraform(struct!.endPointServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2DataCentreAdditionalListenersPrivateLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2DataCentreAdditionalListenersPrivateLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedHostname = this._advertisedHostname;
    }
    if (this._endPointServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointServiceId = this._endPointServiceId;
    }
    if (this._endPointServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointServiceName = this._endPointServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2DataCentreAdditionalListenersPrivateLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertisedHostname = undefined;
      this._endPointServiceId = undefined;
      this._endPointServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertisedHostname = value.advertisedHostname;
      this._endPointServiceId = value.endPointServiceId;
      this._endPointServiceName = value.endPointServiceName;
    }
  }

  // advertised_hostname - computed: false, optional: false, required: true
  private _advertisedHostname?: string; 
  public get advertisedHostname() {
    return this.getStringAttribute('advertised_hostname');
  }
  public set advertisedHostname(value: string) {
    this._advertisedHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedHostnameInput() {
    return this._advertisedHostname;
  }

  // end_point_service_id - computed: true, optional: true, required: false
  private _endPointServiceId?: string; 
  public get endPointServiceId() {
    return this.getStringAttribute('end_point_service_id');
  }
  public set endPointServiceId(value: string) {
    this._endPointServiceId = value;
  }
  public resetEndPointServiceId() {
    this._endPointServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceIdInput() {
    return this._endPointServiceId;
  }

  // end_point_service_name - computed: true, optional: true, required: false
  private _endPointServiceName?: string; 
  public get endPointServiceName() {
    return this.getStringAttribute('end_point_service_name');
  }
  public set endPointServiceName(value: string) {
    this._endPointServiceName = value;
  }
  public resetEndPointServiceName() {
    this._endPointServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceNameInput() {
    return this._endPointServiceName;
  }
}

export class KafkaClusterV2DataCentreAdditionalListenersPrivateLinkList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2DataCentreAdditionalListenersPrivateLink[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2DataCentreAdditionalListenersPrivateLinkOutputReference {
    return new KafkaClusterV2DataCentreAdditionalListenersPrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2DataCentreAdditionalListeners {
  /**
  * ID of the PrivateLink listener. Only available after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#id KafkaClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the PrivateLink listener. Only available after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#name KafkaClusterV2#name}
  */
  readonly name?: string;
  /**
  * Port of the PrivateLink listener. Only available after creation. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#port KafkaClusterV2#port}
  */
  readonly port?: number;
  /**
  * Kafka listener protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#protocol KafkaClusterV2#protocol}
  */
  readonly protocol: string;
  /**
  * Kafka listener types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#types KafkaClusterV2#types}
  */
  readonly types: string[];
  /**
  * private_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#private_link KafkaClusterV2#private_link}
  */
  readonly privateLink: KafkaClusterV2DataCentreAdditionalListenersPrivateLink[] | cdktf.IResolvable;
}

export function kafkaClusterV2DataCentreAdditionalListenersToTerraform(struct?: KafkaClusterV2DataCentreAdditionalListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
    private_link: cdktf.listMapper(kafkaClusterV2DataCentreAdditionalListenersPrivateLinkToTerraform, true)(struct!.privateLink),
  }
}


export function kafkaClusterV2DataCentreAdditionalListenersToHclTerraform(struct?: KafkaClusterV2DataCentreAdditionalListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    private_link: {
      value: cdktf.listMapperHcl(kafkaClusterV2DataCentreAdditionalListenersPrivateLinkToHclTerraform, true)(struct!.privateLink),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaClusterV2DataCentreAdditionalListenersPrivateLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2DataCentreAdditionalListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2DataCentreAdditionalListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._privateLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLink = this._privateLink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2DataCentreAdditionalListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._types = undefined;
      this._privateLink.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
      this._types = value.types;
      this._privateLink.internalValue = value.privateLink;
    }
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // types - computed: false, optional: false, required: true
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // private_link - computed: false, optional: false, required: true
  private _privateLink = new KafkaClusterV2DataCentreAdditionalListenersPrivateLinkList(this, "private_link", false);
  public get privateLink() {
    return this._privateLink;
  }
  public putPrivateLink(value: KafkaClusterV2DataCentreAdditionalListenersPrivateLink[] | cdktf.IResolvable) {
    this._privateLink.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkInput() {
    return this._privateLink.internalValue;
  }
}

export class KafkaClusterV2DataCentreAdditionalListenersList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2DataCentreAdditionalListeners[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2DataCentreAdditionalListenersOutputReference {
    return new KafkaClusterV2DataCentreAdditionalListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2DataCentreAwsSettings {
  /**
  * VPC ID into which the Data Centre will be provisioned. The Data Centre's network allocation must match the IPv4 CIDR block of the specified VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#custom_virtual_network_id KafkaClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * ID of a KMS encryption key to encrypt data on nodes. KMS encryption key must be set in Cluster Resources through the Instaclustr Console before provisioning an encrypted Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#ebs_encryption_key KafkaClusterV2#ebs_encryption_key}
  */
  readonly ebsEncryptionKey?: string;
}

export function kafkaClusterV2DataCentreAwsSettingsToTerraform(struct?: KafkaClusterV2DataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    ebs_encryption_key: cdktf.stringToTerraform(struct!.ebsEncryptionKey),
  }
}


export function kafkaClusterV2DataCentreAwsSettingsToHclTerraform(struct?: KafkaClusterV2DataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.ebsEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2DataCentreAwsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2DataCentreAwsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    if (this._ebsEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsEncryptionKey = this._ebsEncryptionKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2DataCentreAwsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
      this._ebsEncryptionKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
      this._ebsEncryptionKey = value.ebsEncryptionKey;
    }
  }

  // custom_virtual_network_id - computed: true, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }

  // ebs_encryption_key - computed: false, optional: true, required: false
  private _ebsEncryptionKey?: string; 
  public get ebsEncryptionKey() {
    return this.getStringAttribute('ebs_encryption_key');
  }
  public set ebsEncryptionKey(value: string) {
    this._ebsEncryptionKey = value;
  }
  public resetEbsEncryptionKey() {
    this._ebsEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsEncryptionKeyInput() {
    return this._ebsEncryptionKey;
  }
}

export class KafkaClusterV2DataCentreAwsSettingsList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2DataCentreAwsSettings[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2DataCentreAwsSettingsOutputReference {
    return new KafkaClusterV2DataCentreAwsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2DataCentreAzureSettings {
  /**
  * VNet ID into which the Data Centre will be provisioned. The VNet must have an available address space for the Data Centre's network allocation to be appended to the VNet. Currently supported for PostgreSQL clusters only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#custom_virtual_network_id KafkaClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * The name of the Azure Resource Group into which the Data Centre will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#resource_group KafkaClusterV2#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * The private network address block to be used for the storage network. This is only used for certain node sizes, currently limited to those which use Azure NetApp Files: for all other node sizes, this field should not be provided. The network must have a prefix length between /16 and /28, and must be part of a private address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#storage_network KafkaClusterV2#storage_network}
  */
  readonly storageNetwork?: string;
}

export function kafkaClusterV2DataCentreAzureSettingsToTerraform(struct?: KafkaClusterV2DataCentreAzureSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    storage_network: cdktf.stringToTerraform(struct!.storageNetwork),
  }
}


export function kafkaClusterV2DataCentreAzureSettingsToHclTerraform(struct?: KafkaClusterV2DataCentreAzureSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_network: {
      value: cdktf.stringToHclTerraform(struct!.storageNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2DataCentreAzureSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2DataCentreAzureSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._storageNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageNetwork = this._storageNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2DataCentreAzureSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
      this._resourceGroup = undefined;
      this._storageNetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
      this._resourceGroup = value.resourceGroup;
      this._storageNetwork = value.storageNetwork;
    }
  }

  // custom_virtual_network_id - computed: false, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // storage_network - computed: false, optional: true, required: false
  private _storageNetwork?: string; 
  public get storageNetwork() {
    return this.getStringAttribute('storage_network');
  }
  public set storageNetwork(value: string) {
    this._storageNetwork = value;
  }
  public resetStorageNetwork() {
    this._storageNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNetworkInput() {
    return this._storageNetwork;
  }
}

export class KafkaClusterV2DataCentreAzureSettingsList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2DataCentreAzureSettings[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2DataCentreAzureSettingsOutputReference {
    return new KafkaClusterV2DataCentreAzureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2DataCentreDeletedNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#deletion_time KafkaClusterV2#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#id KafkaClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#node_roles KafkaClusterV2#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#node_size KafkaClusterV2#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#private_address KafkaClusterV2#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#public_address KafkaClusterV2#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#rack KafkaClusterV2#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#start_time KafkaClusterV2#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#status KafkaClusterV2#status}
  */
  readonly status?: string;
}

export function kafkaClusterV2DataCentreDeletedNodesToTerraform(struct?: KafkaClusterV2DataCentreDeletedNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_time: cdktf.stringToTerraform(struct!.deletionTime),
    id: cdktf.stringToTerraform(struct!.id),
    node_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeRoles),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    private_address: cdktf.stringToTerraform(struct!.privateAddress),
    public_address: cdktf.stringToTerraform(struct!.publicAddress),
    rack: cdktf.stringToTerraform(struct!.rack),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function kafkaClusterV2DataCentreDeletedNodesToHclTerraform(struct?: KafkaClusterV2DataCentreDeletedNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_time: {
      value: cdktf.stringToHclTerraform(struct!.deletionTime),
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
    node_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_address: {
      value: cdktf.stringToHclTerraform(struct!.privateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_address: {
      value: cdktf.stringToHclTerraform(struct!.publicAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rack: {
      value: cdktf.stringToHclTerraform(struct!.rack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2DataCentreDeletedNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2DataCentreDeletedNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionTime = this._deletionTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodeRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRoles = this._nodeRoles;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._privateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAddress = this._privateAddress;
    }
    if (this._publicAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAddress = this._publicAddress;
    }
    if (this._rack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rack = this._rack;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2DataCentreDeletedNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionTime = undefined;
      this._id = undefined;
      this._nodeRoles = undefined;
      this._nodeSize = undefined;
      this._privateAddress = undefined;
      this._publicAddress = undefined;
      this._rack = undefined;
      this._startTime = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionTime = value.deletionTime;
      this._id = value.id;
      this._nodeRoles = value.nodeRoles;
      this._nodeSize = value.nodeSize;
      this._privateAddress = value.privateAddress;
      this._publicAddress = value.publicAddress;
      this._rack = value.rack;
      this._startTime = value.startTime;
      this._status = value.status;
    }
  }

  // deletion_time - computed: true, optional: true, required: false
  private _deletionTime?: string; 
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }
  public set deletionTime(value: string) {
    this._deletionTime = value;
  }
  public resetDeletionTime() {
    this._deletionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionTimeInput() {
    return this._deletionTime;
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

  // node_roles - computed: true, optional: true, required: false
  private _nodeRoles?: string[]; 
  public get nodeRoles() {
    return this.getListAttribute('node_roles');
  }
  public set nodeRoles(value: string[]) {
    this._nodeRoles = value;
  }
  public resetNodeRoles() {
    this._nodeRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRolesInput() {
    return this._nodeRoles;
  }

  // node_size - computed: true, optional: true, required: false
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  public resetNodeSize() {
    this._nodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // private_address - computed: true, optional: true, required: false
  private _privateAddress?: string; 
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }
  public set privateAddress(value: string) {
    this._privateAddress = value;
  }
  public resetPrivateAddress() {
    this._privateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressInput() {
    return this._privateAddress;
  }

  // public_address - computed: true, optional: true, required: false
  private _publicAddress?: string; 
  public get publicAddress() {
    return this.getStringAttribute('public_address');
  }
  public set publicAddress(value: string) {
    this._publicAddress = value;
  }
  public resetPublicAddress() {
    this._publicAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAddressInput() {
    return this._publicAddress;
  }

  // rack - computed: true, optional: true, required: false
  private _rack?: string; 
  public get rack() {
    return this.getStringAttribute('rack');
  }
  public set rack(value: string) {
    this._rack = value;
  }
  public resetRack() {
    this._rack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackInput() {
    return this._rack;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class KafkaClusterV2DataCentreDeletedNodesList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2DataCentreDeletedNodesOutputReference {
    return new KafkaClusterV2DataCentreDeletedNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2DataCentreGcpSettings {
  /**
  * Network name or a relative Network or Subnetwork URI.
  * The Data Centre's network allocation must match the IPv4 CIDR block of the specified subnet.
  * 
  * Examples:
  * - Network URI: <code>projects/{riyoa-gcp-project-name}/global/networks/{network-name}</code>.
  * - Network name: <code>{network-name}</code>, equivalent to <code>projects/{riyoa-gcp-project-name}/global/networks/{network-name}</code>.
  * - Same-project subnetwork URI: <code>projects/{riyoa-gcp-project-name}/regions/{region-id}/subnetworks/{subnetwork-name}</code>.
  * - Shared VPC subnetwork URI: <code>projects/{riyoa-gcp-host-project-name}/regions/{region-id}/subnetworks/{subnetwork-name}</code>.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#custom_virtual_network_id KafkaClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
}

export function kafkaClusterV2DataCentreGcpSettingsToTerraform(struct?: KafkaClusterV2DataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
  }
}


export function kafkaClusterV2DataCentreGcpSettingsToHclTerraform(struct?: KafkaClusterV2DataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2DataCentreGcpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2DataCentreGcpSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2DataCentreGcpSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
    }
  }

  // custom_virtual_network_id - computed: false, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }
}

export class KafkaClusterV2DataCentreGcpSettingsList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2DataCentreGcpSettings[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2DataCentreGcpSettingsOutputReference {
    return new KafkaClusterV2DataCentreGcpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2DataCentreNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#deletion_time KafkaClusterV2#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#id KafkaClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#node_roles KafkaClusterV2#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#node_size KafkaClusterV2#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#private_address KafkaClusterV2#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#public_address KafkaClusterV2#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#rack KafkaClusterV2#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#start_time KafkaClusterV2#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#status KafkaClusterV2#status}
  */
  readonly status?: string;
}

export function kafkaClusterV2DataCentreNodesToTerraform(struct?: KafkaClusterV2DataCentreNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_time: cdktf.stringToTerraform(struct!.deletionTime),
    id: cdktf.stringToTerraform(struct!.id),
    node_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeRoles),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    private_address: cdktf.stringToTerraform(struct!.privateAddress),
    public_address: cdktf.stringToTerraform(struct!.publicAddress),
    rack: cdktf.stringToTerraform(struct!.rack),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function kafkaClusterV2DataCentreNodesToHclTerraform(struct?: KafkaClusterV2DataCentreNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_time: {
      value: cdktf.stringToHclTerraform(struct!.deletionTime),
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
    node_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_address: {
      value: cdktf.stringToHclTerraform(struct!.privateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_address: {
      value: cdktf.stringToHclTerraform(struct!.publicAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rack: {
      value: cdktf.stringToHclTerraform(struct!.rack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2DataCentreNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2DataCentreNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionTime = this._deletionTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodeRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRoles = this._nodeRoles;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._privateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAddress = this._privateAddress;
    }
    if (this._publicAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAddress = this._publicAddress;
    }
    if (this._rack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rack = this._rack;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2DataCentreNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionTime = undefined;
      this._id = undefined;
      this._nodeRoles = undefined;
      this._nodeSize = undefined;
      this._privateAddress = undefined;
      this._publicAddress = undefined;
      this._rack = undefined;
      this._startTime = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionTime = value.deletionTime;
      this._id = value.id;
      this._nodeRoles = value.nodeRoles;
      this._nodeSize = value.nodeSize;
      this._privateAddress = value.privateAddress;
      this._publicAddress = value.publicAddress;
      this._rack = value.rack;
      this._startTime = value.startTime;
      this._status = value.status;
    }
  }

  // deletion_time - computed: true, optional: true, required: false
  private _deletionTime?: string; 
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }
  public set deletionTime(value: string) {
    this._deletionTime = value;
  }
  public resetDeletionTime() {
    this._deletionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionTimeInput() {
    return this._deletionTime;
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

  // node_roles - computed: true, optional: true, required: false
  private _nodeRoles?: string[]; 
  public get nodeRoles() {
    return this.getListAttribute('node_roles');
  }
  public set nodeRoles(value: string[]) {
    this._nodeRoles = value;
  }
  public resetNodeRoles() {
    this._nodeRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRolesInput() {
    return this._nodeRoles;
  }

  // node_size - computed: true, optional: true, required: false
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  public resetNodeSize() {
    this._nodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // private_address - computed: true, optional: true, required: false
  private _privateAddress?: string; 
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }
  public set privateAddress(value: string) {
    this._privateAddress = value;
  }
  public resetPrivateAddress() {
    this._privateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressInput() {
    return this._privateAddress;
  }

  // public_address - computed: true, optional: true, required: false
  private _publicAddress?: string; 
  public get publicAddress() {
    return this.getStringAttribute('public_address');
  }
  public set publicAddress(value: string) {
    this._publicAddress = value;
  }
  public resetPublicAddress() {
    this._publicAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAddressInput() {
    return this._publicAddress;
  }

  // rack - computed: true, optional: true, required: false
  private _rack?: string; 
  public get rack() {
    return this.getStringAttribute('rack');
  }
  public set rack(value: string) {
    this._rack = value;
  }
  public resetRack() {
    this._rack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackInput() {
    return this._rack;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class KafkaClusterV2DataCentreNodesList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2DataCentreNodes[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2DataCentreNodesOutputReference {
    return new KafkaClusterV2DataCentreNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2DataCentrePrivateLink {
  /**
  * The hostname to be used to connect to the PrivateLink cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#advertised_hostname KafkaClusterV2#advertised_hostname}
  */
  readonly advertisedHostname: string;
  /**
  * The Instaclustr ID of the AWS endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#end_point_service_id KafkaClusterV2#end_point_service_id}
  */
  readonly endPointServiceId?: string;
  /**
  * Name of the created endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#end_point_service_name KafkaClusterV2#end_point_service_name}
  */
  readonly endPointServiceName?: string;
}

export function kafkaClusterV2DataCentrePrivateLinkToTerraform(struct?: KafkaClusterV2DataCentrePrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_hostname: cdktf.stringToTerraform(struct!.advertisedHostname),
    end_point_service_id: cdktf.stringToTerraform(struct!.endPointServiceId),
    end_point_service_name: cdktf.stringToTerraform(struct!.endPointServiceName),
  }
}


export function kafkaClusterV2DataCentrePrivateLinkToHclTerraform(struct?: KafkaClusterV2DataCentrePrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertised_hostname: {
      value: cdktf.stringToHclTerraform(struct!.advertisedHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_service_id: {
      value: cdktf.stringToHclTerraform(struct!.endPointServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_service_name: {
      value: cdktf.stringToHclTerraform(struct!.endPointServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2DataCentrePrivateLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2DataCentrePrivateLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedHostname = this._advertisedHostname;
    }
    if (this._endPointServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointServiceId = this._endPointServiceId;
    }
    if (this._endPointServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointServiceName = this._endPointServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2DataCentrePrivateLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertisedHostname = undefined;
      this._endPointServiceId = undefined;
      this._endPointServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertisedHostname = value.advertisedHostname;
      this._endPointServiceId = value.endPointServiceId;
      this._endPointServiceName = value.endPointServiceName;
    }
  }

  // advertised_hostname - computed: false, optional: false, required: true
  private _advertisedHostname?: string; 
  public get advertisedHostname() {
    return this.getStringAttribute('advertised_hostname');
  }
  public set advertisedHostname(value: string) {
    this._advertisedHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedHostnameInput() {
    return this._advertisedHostname;
  }

  // end_point_service_id - computed: true, optional: true, required: false
  private _endPointServiceId?: string; 
  public get endPointServiceId() {
    return this.getStringAttribute('end_point_service_id');
  }
  public set endPointServiceId(value: string) {
    this._endPointServiceId = value;
  }
  public resetEndPointServiceId() {
    this._endPointServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceIdInput() {
    return this._endPointServiceId;
  }

  // end_point_service_name - computed: true, optional: true, required: false
  private _endPointServiceName?: string; 
  public get endPointServiceName() {
    return this.getStringAttribute('end_point_service_name');
  }
  public set endPointServiceName(value: string) {
    this._endPointServiceName = value;
  }
  public resetEndPointServiceName() {
    this._endPointServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceNameInput() {
    return this._endPointServiceName;
  }
}

export class KafkaClusterV2DataCentrePrivateLinkList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2DataCentrePrivateLink[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2DataCentrePrivateLinkOutputReference {
    return new KafkaClusterV2DataCentrePrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2DataCentreTag {
  /**
  * Key of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#key KafkaClusterV2#key}
  */
  readonly key: string;
  /**
  * Value of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#value KafkaClusterV2#value}
  */
  readonly value?: string;
}

export function kafkaClusterV2DataCentreTagToTerraform(struct?: KafkaClusterV2DataCentreTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kafkaClusterV2DataCentreTagToHclTerraform(struct?: KafkaClusterV2DataCentreTag | cdktf.IResolvable): any {
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

export class KafkaClusterV2DataCentreTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2DataCentreTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaClusterV2DataCentreTag | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KafkaClusterV2DataCentreTagList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2DataCentreTag[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2DataCentreTagOutputReference {
    return new KafkaClusterV2DataCentreTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2DataCentre {
  /**
  * Name of a cloud provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#cloud_provider KafkaClusterV2#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * List of Subject Alternative Names FQDNs as per RFC 1035.  Used by the applications with self signed certificates in keystores of nodes in the datacenter. NOTE: No private link cluster support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#custom_subject_alternative_names KafkaClusterV2#custom_subject_alternative_names}
  */
  readonly customSubjectAlternativeNames?: string[];
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#id KafkaClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A logical name for the data centre within a cluster. These names must be unique in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#name KafkaClusterV2#name}
  */
  readonly name: string;
  /**
  * The private network address block for the Data Centre specified using CIDR address notation. The network must have a prefix length between `/16` and `/26` and must be part of a private address space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#network KafkaClusterV2#network}
  */
  readonly network: string;
  /**
  * Size of the nodes provisioned in the Data Centre. Available node sizes: <details> <summary>*Amazon Web Services* [__AWS_VPC__]</summary> <br> <details> <summary>*Africa (Cape Town)* [__AF_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hong Kong)* [__AP_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hyderabad)* [__AP_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Jakarta)* [__AP_SOUTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Malaysia)* [__AP_SOUTHEAST_5__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Melbourne)* [__AP_SOUTHEAST_4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Mumbai)* [__AP_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Osaka)* [__AP_NORTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Seoul)* [__AP_NORTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Singapore)* [__AP_SOUTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Sydney)* [__AP_SOUTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Thailand)* [__AP_SOUTHEAST_7__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Tokyo)* [__AP_NORTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Canada (Central)* [__CA_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Canada West (Calgary)* [__CA_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Frankfurt)* [__EU_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Zurich)* [__EU_CENTRAL_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU North (Stockholm)* [__EU_NORTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU South (Milan)* [__EU_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU South (Spain)* [__EU_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (Ireland)* [__EU_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (London)* [__EU_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (Paris)* [__EU_WEST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Israel (Tel Aviv)* [__IL_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Middle East (Bahrain)* [__ME_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Middle East (UAE)* [__ME_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*South America (São Paulo)* [__SA_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US East (Northern Virginia)* [__US_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US East (Ohio)* [__US_EAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US West (Northern California)* [__US_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US West (Oregon)* [__US_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Microsoft Azure* [__AZURE_AZ__]</summary> <br> <details> <summary>*Australia East (NSW)* [__AUSTRALIA_EAST__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Canada Central (Toronto)* [__CANADA_CENTRAL__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*East US (Virginia)* [__EAST_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*East US 2 (Virginia)* [__EAST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*North Europe (Ireland)* [__NORTH_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*South Central US (Texas)* [__SOUTH_CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Southeast Asia (Singapore)* [__SOUTHEAST_ASIA__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Switzerland North (Zurich)* [__SWITZERLAND_NORTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*UK South (London)* [__UK_SOUTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*West Europe (Netherlands)* [__WEST_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*West US 2 (Washington)* [__WEST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E2s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E4s_v5-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-Standard_E8s_v5-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-DEV-Standard_D2ls_v5-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>Deprecated</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>Deprecated</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Google Cloud Platform* [__GCP__]</summary> <br> <details> <summary>*Central Europe (Warsaw)* [__europe-central2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central Middle East (Dammam)* [__me-central2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__us-central1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern Asia-Pacific (Taiwan)* [__asia-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern South America (Brazil)* [__southamerica-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (North Virginia)* [__us-east4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (South Carolina)* [__us-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern Asia-pacific (Japan)* [__asia-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern North America (Canada)* [__northamerica-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northern Europe (Finland)* [__europe-north1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Jakarta)* [__asia-southeast2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Singapore)* [__asia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Australia (Sydney)* [__australia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southern Asia (India)* [__asia-south1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southwestern Europe (Madrid)* [__europe-southwest1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Belgium)* [__europe-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (England)* [__europe-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Germany)* [__europe-west3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Milan)* [__europe-west8__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Netherlands)* [__europe-west4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Paris)* [__europe-west9__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Zurich)* [__europe-west6__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (California)* [__us-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (Oregon)* [__us-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#node_size KafkaClusterV2#node_size}
  */
  readonly nodeSize: string;
  /**
  * Total number of Kafka brokers in the Data Centre. Must be a multiple of `defaultReplicationFactor`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#number_of_nodes KafkaClusterV2#number_of_nodes}
  */
  readonly numberOfNodes: number;
  /**
  * For customers running in their own account. Your provider account can be found on the Create Cluster page on the Instaclustr Console, or the "Provider Account" property on any existing cluster. For customers provisioning on Instaclustr's cloud provider accounts, this property may be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#provider_account_name KafkaClusterV2#provider_account_name}
  */
  readonly providerAccountName?: string;
  /**
  * Region of the Data Centre. See the description for node size for a compatible Data Centre for a given node size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#region KafkaClusterV2#region}
  */
  readonly region: string;
  /**
  * Status of the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#status KafkaClusterV2#status}
  */
  readonly status?: string;
  /**
  * (Optional) Enable tag management for the data centre, allowing you to create, update and delete custom tags on the data centre via Instaclustr Terraform Provider v2, Cluster Management API or Management Console. Tag management is only available for RIYOA clusters and cannot be disabled once enabled. If not specified, the current value will remain unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#tag_management_enabled KafkaClusterV2#tag_management_enabled}
  */
  readonly tagManagementEnabled?: boolean | cdktf.IResolvable;
  /**
  * Zero Inbound Access gateways eliminate the requirement for any public IP addresses in cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#zero_inbound_access KafkaClusterV2#zero_inbound_access}
  */
  readonly zeroInboundAccess?: boolean | cdktf.IResolvable;
  /**
  * additional_listeners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#additional_listeners KafkaClusterV2#additional_listeners}
  */
  readonly additionalListeners?: KafkaClusterV2DataCentreAdditionalListeners[] | cdktf.IResolvable;
  /**
  * aws_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#aws_settings KafkaClusterV2#aws_settings}
  */
  readonly awsSettings?: KafkaClusterV2DataCentreAwsSettings[] | cdktf.IResolvable;
  /**
  * azure_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#azure_settings KafkaClusterV2#azure_settings}
  */
  readonly azureSettings?: KafkaClusterV2DataCentreAzureSettings[] | cdktf.IResolvable;
  /**
  * deleted_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#deleted_nodes KafkaClusterV2#deleted_nodes}
  */
  readonly deletedNodes?: KafkaClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable;
  /**
  * gcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#gcp_settings KafkaClusterV2#gcp_settings}
  */
  readonly gcpSettings?: KafkaClusterV2DataCentreGcpSettings[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#nodes KafkaClusterV2#nodes}
  */
  readonly nodes?: KafkaClusterV2DataCentreNodes[] | cdktf.IResolvable;
  /**
  * private_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#private_link KafkaClusterV2#private_link}
  */
  readonly privateLink?: KafkaClusterV2DataCentrePrivateLink[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#tag KafkaClusterV2#tag}
  */
  readonly tag?: KafkaClusterV2DataCentreTag[] | cdktf.IResolvable;
}

export function kafkaClusterV2DataCentreToTerraform(struct?: KafkaClusterV2DataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    custom_subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customSubjectAlternativeNames),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
    provider_account_name: cdktf.stringToTerraform(struct!.providerAccountName),
    region: cdktf.stringToTerraform(struct!.region),
    status: cdktf.stringToTerraform(struct!.status),
    tag_management_enabled: cdktf.booleanToTerraform(struct!.tagManagementEnabled),
    zero_inbound_access: cdktf.booleanToTerraform(struct!.zeroInboundAccess),
    additional_listeners: cdktf.listMapper(kafkaClusterV2DataCentreAdditionalListenersToTerraform, true)(struct!.additionalListeners),
    aws_settings: cdktf.listMapper(kafkaClusterV2DataCentreAwsSettingsToTerraform, true)(struct!.awsSettings),
    azure_settings: cdktf.listMapper(kafkaClusterV2DataCentreAzureSettingsToTerraform, true)(struct!.azureSettings),
    deleted_nodes: cdktf.listMapper(kafkaClusterV2DataCentreDeletedNodesToTerraform, true)(struct!.deletedNodes),
    gcp_settings: cdktf.listMapper(kafkaClusterV2DataCentreGcpSettingsToTerraform, true)(struct!.gcpSettings),
    nodes: cdktf.listMapper(kafkaClusterV2DataCentreNodesToTerraform, true)(struct!.nodes),
    private_link: cdktf.listMapper(kafkaClusterV2DataCentrePrivateLinkToTerraform, true)(struct!.privateLink),
    tag: cdktf.listMapper(kafkaClusterV2DataCentreTagToTerraform, true)(struct!.tag),
  }
}


export function kafkaClusterV2DataCentreToHclTerraform(struct?: KafkaClusterV2DataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.cloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_subject_alternative_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customSubjectAlternativeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provider_account_name: {
      value: cdktf.stringToHclTerraform(struct!.providerAccountName),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_management_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tagManagementEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zero_inbound_access: {
      value: cdktf.booleanToHclTerraform(struct!.zeroInboundAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    additional_listeners: {
      value: cdktf.listMapperHcl(kafkaClusterV2DataCentreAdditionalListenersToHclTerraform, true)(struct!.additionalListeners),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaClusterV2DataCentreAdditionalListenersList",
    },
    aws_settings: {
      value: cdktf.listMapperHcl(kafkaClusterV2DataCentreAwsSettingsToHclTerraform, true)(struct!.awsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaClusterV2DataCentreAwsSettingsList",
    },
    azure_settings: {
      value: cdktf.listMapperHcl(kafkaClusterV2DataCentreAzureSettingsToHclTerraform, true)(struct!.azureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaClusterV2DataCentreAzureSettingsList",
    },
    deleted_nodes: {
      value: cdktf.listMapperHcl(kafkaClusterV2DataCentreDeletedNodesToHclTerraform, true)(struct!.deletedNodes),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaClusterV2DataCentreDeletedNodesList",
    },
    gcp_settings: {
      value: cdktf.listMapperHcl(kafkaClusterV2DataCentreGcpSettingsToHclTerraform, true)(struct!.gcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaClusterV2DataCentreGcpSettingsList",
    },
    nodes: {
      value: cdktf.listMapperHcl(kafkaClusterV2DataCentreNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaClusterV2DataCentreNodesList",
    },
    private_link: {
      value: cdktf.listMapperHcl(kafkaClusterV2DataCentrePrivateLinkToHclTerraform, true)(struct!.privateLink),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaClusterV2DataCentrePrivateLinkList",
    },
    tag: {
      value: cdktf.listMapperHcl(kafkaClusterV2DataCentreTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaClusterV2DataCentreTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2DataCentreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2DataCentre | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    if (this._customSubjectAlternativeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSubjectAlternativeNames = this._customSubjectAlternativeNames;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._numberOfNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfNodes = this._numberOfNodes;
    }
    if (this._providerAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAccountName = this._providerAccountName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tagManagementEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagManagementEnabled = this._tagManagementEnabled;
    }
    if (this._zeroInboundAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroInboundAccess = this._zeroInboundAccess;
    }
    if (this._additionalListeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalListeners = this._additionalListeners?.internalValue;
    }
    if (this._awsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSettings = this._awsSettings?.internalValue;
    }
    if (this._azureSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSettings = this._azureSettings?.internalValue;
    }
    if (this._deletedNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletedNodes = this._deletedNodes?.internalValue;
    }
    if (this._gcpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSettings = this._gcpSettings?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._privateLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLink = this._privateLink?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2DataCentre | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudProvider = undefined;
      this._customSubjectAlternativeNames = undefined;
      this._id = undefined;
      this._name = undefined;
      this._network = undefined;
      this._nodeSize = undefined;
      this._numberOfNodes = undefined;
      this._providerAccountName = undefined;
      this._region = undefined;
      this._status = undefined;
      this._tagManagementEnabled = undefined;
      this._zeroInboundAccess = undefined;
      this._additionalListeners.internalValue = undefined;
      this._awsSettings.internalValue = undefined;
      this._azureSettings.internalValue = undefined;
      this._deletedNodes.internalValue = undefined;
      this._gcpSettings.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._privateLink.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudProvider = value.cloudProvider;
      this._customSubjectAlternativeNames = value.customSubjectAlternativeNames;
      this._id = value.id;
      this._name = value.name;
      this._network = value.network;
      this._nodeSize = value.nodeSize;
      this._numberOfNodes = value.numberOfNodes;
      this._providerAccountName = value.providerAccountName;
      this._region = value.region;
      this._status = value.status;
      this._tagManagementEnabled = value.tagManagementEnabled;
      this._zeroInboundAccess = value.zeroInboundAccess;
      this._additionalListeners.internalValue = value.additionalListeners;
      this._awsSettings.internalValue = value.awsSettings;
      this._azureSettings.internalValue = value.azureSettings;
      this._deletedNodes.internalValue = value.deletedNodes;
      this._gcpSettings.internalValue = value.gcpSettings;
      this._nodes.internalValue = value.nodes;
      this._privateLink.internalValue = value.privateLink;
      this._tag.internalValue = value.tag;
    }
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // custom_subject_alternative_names - computed: true, optional: true, required: false
  private _customSubjectAlternativeNames?: string[]; 
  public get customSubjectAlternativeNames() {
    return this.getListAttribute('custom_subject_alternative_names');
  }
  public set customSubjectAlternativeNames(value: string[]) {
    this._customSubjectAlternativeNames = value;
  }
  public resetCustomSubjectAlternativeNames() {
    this._customSubjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSubjectAlternativeNamesInput() {
    return this._customSubjectAlternativeNames;
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

  // node_size - computed: false, optional: false, required: true
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // number_of_nodes - computed: false, optional: false, required: true
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
  }

  // provider_account_name - computed: true, optional: true, required: false
  private _providerAccountName?: string; 
  public get providerAccountName() {
    return this.getStringAttribute('provider_account_name');
  }
  public set providerAccountName(value: string) {
    this._providerAccountName = value;
  }
  public resetProviderAccountName() {
    this._providerAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAccountNameInput() {
    return this._providerAccountName;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag_management_enabled - computed: true, optional: true, required: false
  private _tagManagementEnabled?: boolean | cdktf.IResolvable; 
  public get tagManagementEnabled() {
    return this.getBooleanAttribute('tag_management_enabled');
  }
  public set tagManagementEnabled(value: boolean | cdktf.IResolvable) {
    this._tagManagementEnabled = value;
  }
  public resetTagManagementEnabled() {
    this._tagManagementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagManagementEnabledInput() {
    return this._tagManagementEnabled;
  }

  // zero_inbound_access - computed: false, optional: true, required: false
  private _zeroInboundAccess?: boolean | cdktf.IResolvable; 
  public get zeroInboundAccess() {
    return this.getBooleanAttribute('zero_inbound_access');
  }
  public set zeroInboundAccess(value: boolean | cdktf.IResolvable) {
    this._zeroInboundAccess = value;
  }
  public resetZeroInboundAccess() {
    this._zeroInboundAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroInboundAccessInput() {
    return this._zeroInboundAccess;
  }

  // additional_listeners - computed: false, optional: true, required: false
  private _additionalListeners = new KafkaClusterV2DataCentreAdditionalListenersList(this, "additional_listeners", false);
  public get additionalListeners() {
    return this._additionalListeners;
  }
  public putAdditionalListeners(value: KafkaClusterV2DataCentreAdditionalListeners[] | cdktf.IResolvable) {
    this._additionalListeners.internalValue = value;
  }
  public resetAdditionalListeners() {
    this._additionalListeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalListenersInput() {
    return this._additionalListeners.internalValue;
  }

  // aws_settings - computed: false, optional: true, required: false
  private _awsSettings = new KafkaClusterV2DataCentreAwsSettingsList(this, "aws_settings", false);
  public get awsSettings() {
    return this._awsSettings;
  }
  public putAwsSettings(value: KafkaClusterV2DataCentreAwsSettings[] | cdktf.IResolvable) {
    this._awsSettings.internalValue = value;
  }
  public resetAwsSettings() {
    this._awsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSettingsInput() {
    return this._awsSettings.internalValue;
  }

  // azure_settings - computed: false, optional: true, required: false
  private _azureSettings = new KafkaClusterV2DataCentreAzureSettingsList(this, "azure_settings", false);
  public get azureSettings() {
    return this._azureSettings;
  }
  public putAzureSettings(value: KafkaClusterV2DataCentreAzureSettings[] | cdktf.IResolvable) {
    this._azureSettings.internalValue = value;
  }
  public resetAzureSettings() {
    this._azureSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSettingsInput() {
    return this._azureSettings.internalValue;
  }

  // deleted_nodes - computed: false, optional: true, required: false
  private _deletedNodes = new KafkaClusterV2DataCentreDeletedNodesList(this, "deleted_nodes", false);
  public get deletedNodes() {
    return this._deletedNodes;
  }
  public putDeletedNodes(value: KafkaClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable) {
    this._deletedNodes.internalValue = value;
  }
  public resetDeletedNodes() {
    this._deletedNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedNodesInput() {
    return this._deletedNodes.internalValue;
  }

  // gcp_settings - computed: false, optional: true, required: false
  private _gcpSettings = new KafkaClusterV2DataCentreGcpSettingsList(this, "gcp_settings", false);
  public get gcpSettings() {
    return this._gcpSettings;
  }
  public putGcpSettings(value: KafkaClusterV2DataCentreGcpSettings[] | cdktf.IResolvable) {
    this._gcpSettings.internalValue = value;
  }
  public resetGcpSettings() {
    this._gcpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSettingsInput() {
    return this._gcpSettings.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new KafkaClusterV2DataCentreNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: KafkaClusterV2DataCentreNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // private_link - computed: false, optional: true, required: false
  private _privateLink = new KafkaClusterV2DataCentrePrivateLinkList(this, "private_link", false);
  public get privateLink() {
    return this._privateLink;
  }
  public putPrivateLink(value: KafkaClusterV2DataCentrePrivateLink[] | cdktf.IResolvable) {
    this._privateLink.internalValue = value;
  }
  public resetPrivateLink() {
    this._privateLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkInput() {
    return this._privateLink.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new KafkaClusterV2DataCentreTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: KafkaClusterV2DataCentreTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class KafkaClusterV2DataCentreList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2DataCentre[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2DataCentreOutputReference {
    return new KafkaClusterV2DataCentreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2DedicatedKraftController {
  /**
  * Number of dedicated KRaft Controller nodes. Must be 3 or 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#controller_node_count KafkaClusterV2#controller_node_count}
  */
  readonly controllerNodeCount: number;
  /**
  * Size of the nodes provisioned as dedicated KRaftController nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#controller_node_size KafkaClusterV2#controller_node_size}
  */
  readonly controllerNodeSize: string;
}

export function kafkaClusterV2DedicatedKraftControllerToTerraform(struct?: KafkaClusterV2DedicatedKraftController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_node_count: cdktf.numberToTerraform(struct!.controllerNodeCount),
    controller_node_size: cdktf.stringToTerraform(struct!.controllerNodeSize),
  }
}


export function kafkaClusterV2DedicatedKraftControllerToHclTerraform(struct?: KafkaClusterV2DedicatedKraftController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_node_count: {
      value: cdktf.numberToHclTerraform(struct!.controllerNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    controller_node_size: {
      value: cdktf.stringToHclTerraform(struct!.controllerNodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2DedicatedKraftControllerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2DedicatedKraftController | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerNodeCount = this._controllerNodeCount;
    }
    if (this._controllerNodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerNodeSize = this._controllerNodeSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2DedicatedKraftController | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerNodeCount = undefined;
      this._controllerNodeSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerNodeCount = value.controllerNodeCount;
      this._controllerNodeSize = value.controllerNodeSize;
    }
  }

  // controller_node_count - computed: false, optional: false, required: true
  private _controllerNodeCount?: number; 
  public get controllerNodeCount() {
    return this.getNumberAttribute('controller_node_count');
  }
  public set controllerNodeCount(value: number) {
    this._controllerNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerNodeCountInput() {
    return this._controllerNodeCount;
  }

  // controller_node_size - computed: false, optional: false, required: true
  private _controllerNodeSize?: string; 
  public get controllerNodeSize() {
    return this.getStringAttribute('controller_node_size');
  }
  public set controllerNodeSize(value: string) {
    this._controllerNodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerNodeSizeInput() {
    return this._controllerNodeSize;
  }
}

export class KafkaClusterV2DedicatedKraftControllerList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2DedicatedKraftController[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2DedicatedKraftControllerOutputReference {
    return new KafkaClusterV2DedicatedKraftControllerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2DedicatedZookeeper {
  /**
  * Number of dedicated Zookeeper node count, it must be 3 or 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#zookeeper_node_count KafkaClusterV2#zookeeper_node_count}
  */
  readonly zookeeperNodeCount: number;
  /**
  * Size of the nodes provisioned as dedicated Zookeeper nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#zookeeper_node_size KafkaClusterV2#zookeeper_node_size}
  */
  readonly zookeeperNodeSize: string;
}

export function kafkaClusterV2DedicatedZookeeperToTerraform(struct?: KafkaClusterV2DedicatedZookeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zookeeper_node_count: cdktf.numberToTerraform(struct!.zookeeperNodeCount),
    zookeeper_node_size: cdktf.stringToTerraform(struct!.zookeeperNodeSize),
  }
}


export function kafkaClusterV2DedicatedZookeeperToHclTerraform(struct?: KafkaClusterV2DedicatedZookeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zookeeper_node_count: {
      value: cdktf.numberToHclTerraform(struct!.zookeeperNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zookeeper_node_size: {
      value: cdktf.stringToHclTerraform(struct!.zookeeperNodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2DedicatedZookeeperOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2DedicatedZookeeper | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zookeeperNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperNodeCount = this._zookeeperNodeCount;
    }
    if (this._zookeeperNodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperNodeSize = this._zookeeperNodeSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2DedicatedZookeeper | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._zookeeperNodeCount = undefined;
      this._zookeeperNodeSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._zookeeperNodeCount = value.zookeeperNodeCount;
      this._zookeeperNodeSize = value.zookeeperNodeSize;
    }
  }

  // zookeeper_node_count - computed: false, optional: false, required: true
  private _zookeeperNodeCount?: number; 
  public get zookeeperNodeCount() {
    return this.getNumberAttribute('zookeeper_node_count');
  }
  public set zookeeperNodeCount(value: number) {
    this._zookeeperNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperNodeCountInput() {
    return this._zookeeperNodeCount;
  }

  // zookeeper_node_size - computed: false, optional: false, required: true
  private _zookeeperNodeSize?: string; 
  public get zookeeperNodeSize() {
    return this.getStringAttribute('zookeeper_node_size');
  }
  public set zookeeperNodeSize(value: string) {
    this._zookeeperNodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperNodeSizeInput() {
    return this._zookeeperNodeSize;
  }
}

export class KafkaClusterV2DedicatedZookeeperList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2DedicatedZookeeper[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2DedicatedZookeeperOutputReference {
    return new KafkaClusterV2DedicatedZookeeperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2KarapaceRestProxy {
  /**
  * Enables Integration of the Karapace REST proxy with the local Karapace Schema registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#integrate_rest_proxy_with_schema_registry KafkaClusterV2#integrate_rest_proxy_with_schema_registry}
  */
  readonly integrateRestProxyWithSchemaRegistry: boolean | cdktf.IResolvable;
  /**
  * Adds the specified version of Kafka REST Proxy to the Kafka cluster. Available versions: <ul> <li>`5.0.0`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#version KafkaClusterV2#version}
  */
  readonly version: string;
}

export function kafkaClusterV2KarapaceRestProxyToTerraform(struct?: KafkaClusterV2KarapaceRestProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integrate_rest_proxy_with_schema_registry: cdktf.booleanToTerraform(struct!.integrateRestProxyWithSchemaRegistry),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function kafkaClusterV2KarapaceRestProxyToHclTerraform(struct?: KafkaClusterV2KarapaceRestProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integrate_rest_proxy_with_schema_registry: {
      value: cdktf.booleanToHclTerraform(struct!.integrateRestProxyWithSchemaRegistry),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2KarapaceRestProxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2KarapaceRestProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrateRestProxyWithSchemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrateRestProxyWithSchemaRegistry = this._integrateRestProxyWithSchemaRegistry;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2KarapaceRestProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrateRestProxyWithSchemaRegistry = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrateRestProxyWithSchemaRegistry = value.integrateRestProxyWithSchemaRegistry;
      this._version = value.version;
    }
  }

  // integrate_rest_proxy_with_schema_registry - computed: false, optional: false, required: true
  private _integrateRestProxyWithSchemaRegistry?: boolean | cdktf.IResolvable; 
  public get integrateRestProxyWithSchemaRegistry() {
    return this.getBooleanAttribute('integrate_rest_proxy_with_schema_registry');
  }
  public set integrateRestProxyWithSchemaRegistry(value: boolean | cdktf.IResolvable) {
    this._integrateRestProxyWithSchemaRegistry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrateRestProxyWithSchemaRegistryInput() {
    return this._integrateRestProxyWithSchemaRegistry;
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

export class KafkaClusterV2KarapaceRestProxyList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2KarapaceRestProxy[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2KarapaceRestProxyOutputReference {
    return new KafkaClusterV2KarapaceRestProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2KarapaceSchemaRegistry {
  /**
  * Adds the specified version of Kafka Schema Registry to the Kafka cluster. Available versions: <ul> <li>`5.0.0`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#version KafkaClusterV2#version}
  */
  readonly version: string;
}

export function kafkaClusterV2KarapaceSchemaRegistryToTerraform(struct?: KafkaClusterV2KarapaceSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function kafkaClusterV2KarapaceSchemaRegistryToHclTerraform(struct?: KafkaClusterV2KarapaceSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class KafkaClusterV2KarapaceSchemaRegistryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2KarapaceSchemaRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2KarapaceSchemaRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
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

export class KafkaClusterV2KarapaceSchemaRegistryList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2KarapaceSchemaRegistry[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2KarapaceSchemaRegistryOutputReference {
    return new KafkaClusterV2KarapaceSchemaRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2Kraft {
  /**
  * Number of KRaft controller nodes (only 3 is currently supported).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#controller_node_count KafkaClusterV2#controller_node_count}
  */
  readonly controllerNodeCount: number;
}

export function kafkaClusterV2KraftToTerraform(struct?: KafkaClusterV2Kraft | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_node_count: cdktf.numberToTerraform(struct!.controllerNodeCount),
  }
}


export function kafkaClusterV2KraftToHclTerraform(struct?: KafkaClusterV2Kraft | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_node_count: {
      value: cdktf.numberToHclTerraform(struct!.controllerNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2KraftOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2Kraft | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerNodeCount = this._controllerNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2Kraft | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerNodeCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerNodeCount = value.controllerNodeCount;
    }
  }

  // controller_node_count - computed: false, optional: false, required: true
  private _controllerNodeCount?: number; 
  public get controllerNodeCount() {
    return this.getNumberAttribute('controller_node_count');
  }
  public set controllerNodeCount(value: number) {
    this._controllerNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerNodeCountInput() {
    return this._controllerNodeCount;
  }
}

export class KafkaClusterV2KraftList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2Kraft[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2KraftOutputReference {
    return new KafkaClusterV2KraftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2ResizeSettings {
  /**
  * Number of concurrent nodes to resize during a resize operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#concurrency KafkaClusterV2#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Setting this property to `true` will notify the Instaclustr Account's designated support contacts on resize completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#notify_support_contacts KafkaClusterV2#notify_support_contacts}
  */
  readonly notifySupportContacts?: boolean | cdktf.IResolvable;
}

export function kafkaClusterV2ResizeSettingsToTerraform(struct?: KafkaClusterV2ResizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    notify_support_contacts: cdktf.booleanToTerraform(struct!.notifySupportContacts),
  }
}


export function kafkaClusterV2ResizeSettingsToHclTerraform(struct?: KafkaClusterV2ResizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notify_support_contacts: {
      value: cdktf.booleanToHclTerraform(struct!.notifySupportContacts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2ResizeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2ResizeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._notifySupportContacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifySupportContacts = this._notifySupportContacts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2ResizeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrency = undefined;
      this._notifySupportContacts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrency = value.concurrency;
      this._notifySupportContacts = value.notifySupportContacts;
    }
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // notify_support_contacts - computed: false, optional: true, required: false
  private _notifySupportContacts?: boolean | cdktf.IResolvable; 
  public get notifySupportContacts() {
    return this.getBooleanAttribute('notify_support_contacts');
  }
  public set notifySupportContacts(value: boolean | cdktf.IResolvable) {
    this._notifySupportContacts = value;
  }
  public resetNotifySupportContacts() {
    this._notifySupportContacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifySupportContactsInput() {
    return this._notifySupportContacts;
  }
}

export class KafkaClusterV2ResizeSettingsList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2ResizeSettings[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2ResizeSettingsOutputReference {
    return new KafkaClusterV2ResizeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2RestProxy {
  /**
  * Enables Integration of the REST proxy with a Schema registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#integrate_rest_proxy_with_schema_registry KafkaClusterV2#integrate_rest_proxy_with_schema_registry}
  */
  readonly integrateRestProxyWithSchemaRegistry: boolean | cdktf.IResolvable;
  /**
  * Password to use when connecting to the Kafka schema registry. Requires 'integrateRestProxyWithSchemaRegistry' to be 'true' and useLocalSchemaRegistry to be 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#schema_registry_password KafkaClusterV2#schema_registry_password}
  */
  readonly schemaRegistryPassword?: string;
  /**
  * URL of the Kafka schema registry to integrate with. Requires 'integrateRestProxyWithSchemaRegistry' to be 'true' and useLocalSchemaRegistry to be 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#schema_registry_server_url KafkaClusterV2#schema_registry_server_url}
  */
  readonly schemaRegistryServerUrl?: string;
  /**
  * Username to use when connecting to the Kafka schema registry. Requires 'integrateRestProxyWithSchemaRegistry' to be 'true' and useLocalSchemaRegistry to be 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#schema_registry_username KafkaClusterV2#schema_registry_username}
  */
  readonly schemaRegistryUsername?: string;
  /**
  * Integrates the REST proxy with the Schema registry attached to this cluster. Requires 'integrateRestProxyWithSchemaRegistry' to be 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#use_local_schema_registry KafkaClusterV2#use_local_schema_registry}
  */
  readonly useLocalSchemaRegistry?: boolean | cdktf.IResolvable;
  /**
  * Adds the specified version of Kafka REST Proxy to the Kafka cluster. Available versions: <ul> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#version KafkaClusterV2#version}
  */
  readonly version: string;
}

export function kafkaClusterV2RestProxyToTerraform(struct?: KafkaClusterV2RestProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integrate_rest_proxy_with_schema_registry: cdktf.booleanToTerraform(struct!.integrateRestProxyWithSchemaRegistry),
    schema_registry_password: cdktf.stringToTerraform(struct!.schemaRegistryPassword),
    schema_registry_server_url: cdktf.stringToTerraform(struct!.schemaRegistryServerUrl),
    schema_registry_username: cdktf.stringToTerraform(struct!.schemaRegistryUsername),
    use_local_schema_registry: cdktf.booleanToTerraform(struct!.useLocalSchemaRegistry),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function kafkaClusterV2RestProxyToHclTerraform(struct?: KafkaClusterV2RestProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integrate_rest_proxy_with_schema_registry: {
      value: cdktf.booleanToHclTerraform(struct!.integrateRestProxyWithSchemaRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_registry_password: {
      value: cdktf.stringToHclTerraform(struct!.schemaRegistryPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_server_url: {
      value: cdktf.stringToHclTerraform(struct!.schemaRegistryServerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_username: {
      value: cdktf.stringToHclTerraform(struct!.schemaRegistryUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_local_schema_registry: {
      value: cdktf.booleanToHclTerraform(struct!.useLocalSchemaRegistry),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2RestProxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2RestProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrateRestProxyWithSchemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrateRestProxyWithSchemaRegistry = this._integrateRestProxyWithSchemaRegistry;
    }
    if (this._schemaRegistryPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryPassword = this._schemaRegistryPassword;
    }
    if (this._schemaRegistryServerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryServerUrl = this._schemaRegistryServerUrl;
    }
    if (this._schemaRegistryUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryUsername = this._schemaRegistryUsername;
    }
    if (this._useLocalSchemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLocalSchemaRegistry = this._useLocalSchemaRegistry;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2RestProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrateRestProxyWithSchemaRegistry = undefined;
      this._schemaRegistryPassword = undefined;
      this._schemaRegistryServerUrl = undefined;
      this._schemaRegistryUsername = undefined;
      this._useLocalSchemaRegistry = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrateRestProxyWithSchemaRegistry = value.integrateRestProxyWithSchemaRegistry;
      this._schemaRegistryPassword = value.schemaRegistryPassword;
      this._schemaRegistryServerUrl = value.schemaRegistryServerUrl;
      this._schemaRegistryUsername = value.schemaRegistryUsername;
      this._useLocalSchemaRegistry = value.useLocalSchemaRegistry;
      this._version = value.version;
    }
  }

  // integrate_rest_proxy_with_schema_registry - computed: false, optional: false, required: true
  private _integrateRestProxyWithSchemaRegistry?: boolean | cdktf.IResolvable; 
  public get integrateRestProxyWithSchemaRegistry() {
    return this.getBooleanAttribute('integrate_rest_proxy_with_schema_registry');
  }
  public set integrateRestProxyWithSchemaRegistry(value: boolean | cdktf.IResolvable) {
    this._integrateRestProxyWithSchemaRegistry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrateRestProxyWithSchemaRegistryInput() {
    return this._integrateRestProxyWithSchemaRegistry;
  }

  // schema_registry_password - computed: true, optional: true, required: false
  private _schemaRegistryPassword?: string; 
  public get schemaRegistryPassword() {
    return this.getStringAttribute('schema_registry_password');
  }
  public set schemaRegistryPassword(value: string) {
    this._schemaRegistryPassword = value;
  }
  public resetSchemaRegistryPassword() {
    this._schemaRegistryPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryPasswordInput() {
    return this._schemaRegistryPassword;
  }

  // schema_registry_server_url - computed: true, optional: true, required: false
  private _schemaRegistryServerUrl?: string; 
  public get schemaRegistryServerUrl() {
    return this.getStringAttribute('schema_registry_server_url');
  }
  public set schemaRegistryServerUrl(value: string) {
    this._schemaRegistryServerUrl = value;
  }
  public resetSchemaRegistryServerUrl() {
    this._schemaRegistryServerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryServerUrlInput() {
    return this._schemaRegistryServerUrl;
  }

  // schema_registry_username - computed: true, optional: true, required: false
  private _schemaRegistryUsername?: string; 
  public get schemaRegistryUsername() {
    return this.getStringAttribute('schema_registry_username');
  }
  public set schemaRegistryUsername(value: string) {
    this._schemaRegistryUsername = value;
  }
  public resetSchemaRegistryUsername() {
    this._schemaRegistryUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryUsernameInput() {
    return this._schemaRegistryUsername;
  }

  // use_local_schema_registry - computed: true, optional: true, required: false
  private _useLocalSchemaRegistry?: boolean | cdktf.IResolvable; 
  public get useLocalSchemaRegistry() {
    return this.getBooleanAttribute('use_local_schema_registry');
  }
  public set useLocalSchemaRegistry(value: boolean | cdktf.IResolvable) {
    this._useLocalSchemaRegistry = value;
  }
  public resetUseLocalSchemaRegistry() {
    this._useLocalSchemaRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLocalSchemaRegistryInput() {
    return this._useLocalSchemaRegistry;
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

export class KafkaClusterV2RestProxyList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2RestProxy[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2RestProxyOutputReference {
    return new KafkaClusterV2RestProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2SchemaRegistry {
  /**
  * Adds the specified version of Kafka Schema Registry to the Kafka cluster. Available versions: <ul> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#version KafkaClusterV2#version}
  */
  readonly version: string;
}

export function kafkaClusterV2SchemaRegistryToTerraform(struct?: KafkaClusterV2SchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function kafkaClusterV2SchemaRegistryToHclTerraform(struct?: KafkaClusterV2SchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class KafkaClusterV2SchemaRegistryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2SchemaRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2SchemaRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
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

export class KafkaClusterV2SchemaRegistryList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2SchemaRegistry[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2SchemaRegistryOutputReference {
    return new KafkaClusterV2SchemaRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2TieredStorageGcsSettings {
  /**
  * GCS bucket name for Kafka remote storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#gcs_bucket_name KafkaClusterV2#gcs_bucket_name}
  */
  readonly gcsBucketName: string;
  /**
  * GCS prefix to store the remote data in the GCS bucket, by default the prefix format is `<cluster_id>-data/`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#prefix KafkaClusterV2#prefix}
  */
  readonly prefix?: string;
}

export function kafkaClusterV2TieredStorageGcsSettingsToTerraform(struct?: KafkaClusterV2TieredStorageGcsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcs_bucket_name: cdktf.stringToTerraform(struct!.gcsBucketName),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function kafkaClusterV2TieredStorageGcsSettingsToHclTerraform(struct?: KafkaClusterV2TieredStorageGcsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcs_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.gcsBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2TieredStorageGcsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2TieredStorageGcsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcsBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsBucketName = this._gcsBucketName;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2TieredStorageGcsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gcsBucketName = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gcsBucketName = value.gcsBucketName;
      this._prefix = value.prefix;
    }
  }

  // gcs_bucket_name - computed: false, optional: false, required: true
  private _gcsBucketName?: string; 
  public get gcsBucketName() {
    return this.getStringAttribute('gcs_bucket_name');
  }
  public set gcsBucketName(value: string) {
    this._gcsBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsBucketNameInput() {
    return this._gcsBucketName;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class KafkaClusterV2TieredStorageGcsSettingsList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2TieredStorageGcsSettings[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2TieredStorageGcsSettingsOutputReference {
    return new KafkaClusterV2TieredStorageGcsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2TieredStorageS3Settings {
  /**
  * S3 prefix to store the remote data in the S3 bucket, by default the prefix format is `<cluster_id>-data/`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#prefix KafkaClusterV2#prefix}
  */
  readonly prefix?: string;
  /**
  * S3 bucket name for Kafka remote storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#s3_bucket_name KafkaClusterV2#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Use custom provided S3 bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#use_custom_bucket KafkaClusterV2#use_custom_bucket}
  */
  readonly useCustomBucket?: boolean | cdktf.IResolvable;
}

export function kafkaClusterV2TieredStorageS3SettingsToTerraform(struct?: KafkaClusterV2TieredStorageS3Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    use_custom_bucket: cdktf.booleanToTerraform(struct!.useCustomBucket),
  }
}


export function kafkaClusterV2TieredStorageS3SettingsToHclTerraform(struct?: KafkaClusterV2TieredStorageS3Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_custom_bucket: {
      value: cdktf.booleanToHclTerraform(struct!.useCustomBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2TieredStorageS3SettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2TieredStorageS3Settings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._useCustomBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCustomBucket = this._useCustomBucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2TieredStorageS3Settings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._s3BucketName = undefined;
      this._useCustomBucket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._s3BucketName = value.s3BucketName;
      this._useCustomBucket = value.useCustomBucket;
    }
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // use_custom_bucket - computed: false, optional: true, required: false
  private _useCustomBucket?: boolean | cdktf.IResolvable; 
  public get useCustomBucket() {
    return this.getBooleanAttribute('use_custom_bucket');
  }
  public set useCustomBucket(value: boolean | cdktf.IResolvable) {
    this._useCustomBucket = value;
  }
  public resetUseCustomBucket() {
    this._useCustomBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomBucketInput() {
    return this._useCustomBucket;
  }
}

export class KafkaClusterV2TieredStorageS3SettingsList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2TieredStorageS3Settings[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2TieredStorageS3SettingsOutputReference {
    return new KafkaClusterV2TieredStorageS3SettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2TieredStorage {
  /**
  * gcs_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#gcs_settings KafkaClusterV2#gcs_settings}
  */
  readonly gcsSettings?: KafkaClusterV2TieredStorageGcsSettings[] | cdktf.IResolvable;
  /**
  * s3_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#s3_settings KafkaClusterV2#s3_settings}
  */
  readonly s3Settings?: KafkaClusterV2TieredStorageS3Settings[] | cdktf.IResolvable;
}

export function kafkaClusterV2TieredStorageToTerraform(struct?: KafkaClusterV2TieredStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcs_settings: cdktf.listMapper(kafkaClusterV2TieredStorageGcsSettingsToTerraform, true)(struct!.gcsSettings),
    s3_settings: cdktf.listMapper(kafkaClusterV2TieredStorageS3SettingsToTerraform, true)(struct!.s3Settings),
  }
}


export function kafkaClusterV2TieredStorageToHclTerraform(struct?: KafkaClusterV2TieredStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcs_settings: {
      value: cdktf.listMapperHcl(kafkaClusterV2TieredStorageGcsSettingsToHclTerraform, true)(struct!.gcsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaClusterV2TieredStorageGcsSettingsList",
    },
    s3_settings: {
      value: cdktf.listMapperHcl(kafkaClusterV2TieredStorageS3SettingsToHclTerraform, true)(struct!.s3Settings),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaClusterV2TieredStorageS3SettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2TieredStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2TieredStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsSettings = this._gcsSettings?.internalValue;
    }
    if (this._s3Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Settings = this._s3Settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2TieredStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gcsSettings.internalValue = undefined;
      this._s3Settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gcsSettings.internalValue = value.gcsSettings;
      this._s3Settings.internalValue = value.s3Settings;
    }
  }

  // gcs_settings - computed: false, optional: true, required: false
  private _gcsSettings = new KafkaClusterV2TieredStorageGcsSettingsList(this, "gcs_settings", false);
  public get gcsSettings() {
    return this._gcsSettings;
  }
  public putGcsSettings(value: KafkaClusterV2TieredStorageGcsSettings[] | cdktf.IResolvable) {
    this._gcsSettings.internalValue = value;
  }
  public resetGcsSettings() {
    this._gcsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsSettingsInput() {
    return this._gcsSettings.internalValue;
  }

  // s3_settings - computed: false, optional: true, required: false
  private _s3Settings = new KafkaClusterV2TieredStorageS3SettingsList(this, "s3_settings", false);
  public get s3Settings() {
    return this._s3Settings;
  }
  public putS3Settings(value: KafkaClusterV2TieredStorageS3Settings[] | cdktf.IResolvable) {
    this._s3Settings.internalValue = value;
  }
  public resetS3Settings() {
    this._s3Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SettingsInput() {
    return this._s3Settings.internalValue;
  }
}

export class KafkaClusterV2TieredStorageList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2TieredStorage[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2TieredStorageOutputReference {
    return new KafkaClusterV2TieredStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#create KafkaClusterV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#default KafkaClusterV2#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#update KafkaClusterV2#update}
  */
  readonly update?: string;
}

export function kafkaClusterV2TimeoutsToTerraform(struct?: KafkaClusterV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kafkaClusterV2TimeoutsToHclTerraform(struct?: KafkaClusterV2Timeouts | cdktf.IResolvable): any {
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

export class KafkaClusterV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaClusterV2Timeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
export interface KafkaClusterV2TwoFactorDelete {
  /**
  * The email address which will be contacted when the cluster is requested to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#confirmation_email KafkaClusterV2#confirmation_email}
  */
  readonly confirmationEmail: string;
  /**
  * The phone number which will be contacted when the cluster is requested to be delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#confirmation_phone_number KafkaClusterV2#confirmation_phone_number}
  */
  readonly confirmationPhoneNumber?: string;
}

export function kafkaClusterV2TwoFactorDeleteToTerraform(struct?: KafkaClusterV2TwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirmation_email: cdktf.stringToTerraform(struct!.confirmationEmail),
    confirmation_phone_number: cdktf.stringToTerraform(struct!.confirmationPhoneNumber),
  }
}


export function kafkaClusterV2TwoFactorDeleteToHclTerraform(struct?: KafkaClusterV2TwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confirmation_email: {
      value: cdktf.stringToHclTerraform(struct!.confirmationEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confirmation_phone_number: {
      value: cdktf.stringToHclTerraform(struct!.confirmationPhoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterV2TwoFactorDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterV2TwoFactorDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confirmationEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationEmail = this._confirmationEmail;
    }
    if (this._confirmationPhoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationPhoneNumber = this._confirmationPhoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterV2TwoFactorDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confirmationEmail = undefined;
      this._confirmationPhoneNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confirmationEmail = value.confirmationEmail;
      this._confirmationPhoneNumber = value.confirmationPhoneNumber;
    }
  }

  // confirmation_email - computed: false, optional: false, required: true
  private _confirmationEmail?: string; 
  public get confirmationEmail() {
    return this.getStringAttribute('confirmation_email');
  }
  public set confirmationEmail(value: string) {
    this._confirmationEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationEmailInput() {
    return this._confirmationEmail;
  }

  // confirmation_phone_number - computed: true, optional: true, required: false
  private _confirmationPhoneNumber?: string; 
  public get confirmationPhoneNumber() {
    return this.getStringAttribute('confirmation_phone_number');
  }
  public set confirmationPhoneNumber(value: string) {
    this._confirmationPhoneNumber = value;
  }
  public resetConfirmationPhoneNumber() {
    this._confirmationPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationPhoneNumberInput() {
    return this._confirmationPhoneNumber;
  }
}

export class KafkaClusterV2TwoFactorDeleteList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterV2TwoFactorDelete[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterV2TwoFactorDeleteOutputReference {
    return new KafkaClusterV2TwoFactorDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2 instaclustr_kafka_cluster_v2}
*/
export class KafkaClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaClusterV2 to import
  * @param importFromId The id of the existing KafkaClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/kafka_cluster_v2 instaclustr_kafka_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: KafkaClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.38',
        providerVersionConstraint: '2.1.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDeleteTopics = config.allowDeleteTopics;
    this._autoCreateTopics = config.autoCreateTopics;
    this._bundledUseOnly = config.bundledUseOnly;
    this._clientBrokerAuthWithMtls = config.clientBrokerAuthWithMtls;
    this._clientToClusterEncryption = config.clientToClusterEncryption;
    this._currentClusterOperationStatus = config.currentClusterOperationStatus;
    this._defaultNumberOfPartitions = config.defaultNumberOfPartitions;
    this._defaultReplicationFactor = config.defaultReplicationFactor;
    this._defaultUserPassword = config.defaultUserPassword;
    this._description = config.description;
    this._id = config.id;
    this._kafkaVersion = config.kafkaVersion;
    this._name = config.name;
    this._pciComplianceMode = config.pciComplianceMode;
    this._privateNetworkCluster = config.privateNetworkCluster;
    this._slaTier = config.slaTier;
    this._status = config.status;
    this._clientMetrics.internalValue = config.clientMetrics;
    this._collocatedZookeeper.internalValue = config.collocatedZookeeper;
    this._dataCentre.internalValue = config.dataCentre;
    this._dedicatedKraftController.internalValue = config.dedicatedKraftController;
    this._dedicatedZookeeper.internalValue = config.dedicatedZookeeper;
    this._karapaceRestProxy.internalValue = config.karapaceRestProxy;
    this._karapaceSchemaRegistry.internalValue = config.karapaceSchemaRegistry;
    this._kraft.internalValue = config.kraft;
    this._resizeSettings.internalValue = config.resizeSettings;
    this._restProxy.internalValue = config.restProxy;
    this._schemaRegistry.internalValue = config.schemaRegistry;
    this._tieredStorage.internalValue = config.tieredStorage;
    this._timeouts.internalValue = config.timeouts;
    this._twoFactorDelete.internalValue = config.twoFactorDelete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_delete_topics - computed: false, optional: false, required: true
  private _allowDeleteTopics?: boolean | cdktf.IResolvable; 
  public get allowDeleteTopics() {
    return this.getBooleanAttribute('allow_delete_topics');
  }
  public set allowDeleteTopics(value: boolean | cdktf.IResolvable) {
    this._allowDeleteTopics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDeleteTopicsInput() {
    return this._allowDeleteTopics;
  }

  // auto_create_topics - computed: false, optional: false, required: true
  private _autoCreateTopics?: boolean | cdktf.IResolvable; 
  public get autoCreateTopics() {
    return this.getBooleanAttribute('auto_create_topics');
  }
  public set autoCreateTopics(value: boolean | cdktf.IResolvable) {
    this._autoCreateTopics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateTopicsInput() {
    return this._autoCreateTopics;
  }

  // bundled_use_only - computed: true, optional: true, required: false
  private _bundledUseOnly?: boolean | cdktf.IResolvable; 
  public get bundledUseOnly() {
    return this.getBooleanAttribute('bundled_use_only');
  }
  public set bundledUseOnly(value: boolean | cdktf.IResolvable) {
    this._bundledUseOnly = value;
  }
  public resetBundledUseOnly() {
    this._bundledUseOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundledUseOnlyInput() {
    return this._bundledUseOnly;
  }

  // client_broker_auth_with_mtls - computed: false, optional: true, required: false
  private _clientBrokerAuthWithMtls?: boolean | cdktf.IResolvable; 
  public get clientBrokerAuthWithMtls() {
    return this.getBooleanAttribute('client_broker_auth_with_mtls');
  }
  public set clientBrokerAuthWithMtls(value: boolean | cdktf.IResolvable) {
    this._clientBrokerAuthWithMtls = value;
  }
  public resetClientBrokerAuthWithMtls() {
    this._clientBrokerAuthWithMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientBrokerAuthWithMtlsInput() {
    return this._clientBrokerAuthWithMtls;
  }

  // client_to_cluster_encryption - computed: false, optional: false, required: true
  private _clientToClusterEncryption?: boolean | cdktf.IResolvable; 
  public get clientToClusterEncryption() {
    return this.getBooleanAttribute('client_to_cluster_encryption');
  }
  public set clientToClusterEncryption(value: boolean | cdktf.IResolvable) {
    this._clientToClusterEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientToClusterEncryptionInput() {
    return this._clientToClusterEncryption;
  }

  // current_cluster_operation_status - computed: true, optional: true, required: false
  private _currentClusterOperationStatus?: string; 
  public get currentClusterOperationStatus() {
    return this.getStringAttribute('current_cluster_operation_status');
  }
  public set currentClusterOperationStatus(value: string) {
    this._currentClusterOperationStatus = value;
  }
  public resetCurrentClusterOperationStatus() {
    this._currentClusterOperationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentClusterOperationStatusInput() {
    return this._currentClusterOperationStatus;
  }

  // default_number_of_partitions - computed: false, optional: false, required: true
  private _defaultNumberOfPartitions?: number; 
  public get defaultNumberOfPartitions() {
    return this.getNumberAttribute('default_number_of_partitions');
  }
  public set defaultNumberOfPartitions(value: number) {
    this._defaultNumberOfPartitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNumberOfPartitionsInput() {
    return this._defaultNumberOfPartitions;
  }

  // default_replication_factor - computed: false, optional: false, required: true
  private _defaultReplicationFactor?: number; 
  public get defaultReplicationFactor() {
    return this.getNumberAttribute('default_replication_factor');
  }
  public set defaultReplicationFactor(value: number) {
    this._defaultReplicationFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultReplicationFactorInput() {
    return this._defaultReplicationFactor;
  }

  // default_user_password - computed: true, optional: true, required: false
  private _defaultUserPassword?: string; 
  public get defaultUserPassword() {
    return this.getStringAttribute('default_user_password');
  }
  public set defaultUserPassword(value: string) {
    this._defaultUserPassword = value;
  }
  public resetDefaultUserPassword() {
    this._defaultUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserPasswordInput() {
    return this._defaultUserPassword;
  }

  // description - computed: true, optional: true, required: false
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

  // kafka_version - computed: false, optional: false, required: true
  private _kafkaVersion?: string; 
  public get kafkaVersion() {
    return this.getStringAttribute('kafka_version');
  }
  public set kafkaVersion(value: string) {
    this._kafkaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionInput() {
    return this._kafkaVersion;
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

  // pci_compliance_mode - computed: false, optional: false, required: true
  private _pciComplianceMode?: boolean | cdktf.IResolvable; 
  public get pciComplianceMode() {
    return this.getBooleanAttribute('pci_compliance_mode');
  }
  public set pciComplianceMode(value: boolean | cdktf.IResolvable) {
    this._pciComplianceMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pciComplianceModeInput() {
    return this._pciComplianceMode;
  }

  // private_network_cluster - computed: false, optional: false, required: true
  private _privateNetworkCluster?: boolean | cdktf.IResolvable; 
  public get privateNetworkCluster() {
    return this.getBooleanAttribute('private_network_cluster');
  }
  public set privateNetworkCluster(value: boolean | cdktf.IResolvable) {
    this._privateNetworkCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkClusterInput() {
    return this._privateNetworkCluster;
  }

  // sla_tier - computed: false, optional: false, required: true
  private _slaTier?: string; 
  public get slaTier() {
    return this.getStringAttribute('sla_tier');
  }
  public set slaTier(value: string) {
    this._slaTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slaTierInput() {
    return this._slaTier;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // client_metrics - computed: false, optional: true, required: false
  private _clientMetrics = new KafkaClusterV2ClientMetricsList(this, "client_metrics", false);
  public get clientMetrics() {
    return this._clientMetrics;
  }
  public putClientMetrics(value: KafkaClusterV2ClientMetrics[] | cdktf.IResolvable) {
    this._clientMetrics.internalValue = value;
  }
  public resetClientMetrics() {
    this._clientMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMetricsInput() {
    return this._clientMetrics.internalValue;
  }

  // collocated_zookeeper - computed: false, optional: true, required: false
  private _collocatedZookeeper = new KafkaClusterV2CollocatedZookeeperList(this, "collocated_zookeeper", false);
  public get collocatedZookeeper() {
    return this._collocatedZookeeper;
  }
  public putCollocatedZookeeper(value: KafkaClusterV2CollocatedZookeeper[] | cdktf.IResolvable) {
    this._collocatedZookeeper.internalValue = value;
  }
  public resetCollocatedZookeeper() {
    this._collocatedZookeeper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collocatedZookeeperInput() {
    return this._collocatedZookeeper.internalValue;
  }

  // data_centre - computed: false, optional: false, required: true
  private _dataCentre = new KafkaClusterV2DataCentreList(this, "data_centre", false);
  public get dataCentre() {
    return this._dataCentre;
  }
  public putDataCentre(value: KafkaClusterV2DataCentre[] | cdktf.IResolvable) {
    this._dataCentre.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreInput() {
    return this._dataCentre.internalValue;
  }

  // dedicated_kraft_controller - computed: false, optional: true, required: false
  private _dedicatedKraftController = new KafkaClusterV2DedicatedKraftControllerList(this, "dedicated_kraft_controller", false);
  public get dedicatedKraftController() {
    return this._dedicatedKraftController;
  }
  public putDedicatedKraftController(value: KafkaClusterV2DedicatedKraftController[] | cdktf.IResolvable) {
    this._dedicatedKraftController.internalValue = value;
  }
  public resetDedicatedKraftController() {
    this._dedicatedKraftController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedKraftControllerInput() {
    return this._dedicatedKraftController.internalValue;
  }

  // dedicated_zookeeper - computed: false, optional: true, required: false
  private _dedicatedZookeeper = new KafkaClusterV2DedicatedZookeeperList(this, "dedicated_zookeeper", false);
  public get dedicatedZookeeper() {
    return this._dedicatedZookeeper;
  }
  public putDedicatedZookeeper(value: KafkaClusterV2DedicatedZookeeper[] | cdktf.IResolvable) {
    this._dedicatedZookeeper.internalValue = value;
  }
  public resetDedicatedZookeeper() {
    this._dedicatedZookeeper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedZookeeperInput() {
    return this._dedicatedZookeeper.internalValue;
  }

  // karapace_rest_proxy - computed: false, optional: true, required: false
  private _karapaceRestProxy = new KafkaClusterV2KarapaceRestProxyList(this, "karapace_rest_proxy", false);
  public get karapaceRestProxy() {
    return this._karapaceRestProxy;
  }
  public putKarapaceRestProxy(value: KafkaClusterV2KarapaceRestProxy[] | cdktf.IResolvable) {
    this._karapaceRestProxy.internalValue = value;
  }
  public resetKarapaceRestProxy() {
    this._karapaceRestProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get karapaceRestProxyInput() {
    return this._karapaceRestProxy.internalValue;
  }

  // karapace_schema_registry - computed: false, optional: true, required: false
  private _karapaceSchemaRegistry = new KafkaClusterV2KarapaceSchemaRegistryList(this, "karapace_schema_registry", false);
  public get karapaceSchemaRegistry() {
    return this._karapaceSchemaRegistry;
  }
  public putKarapaceSchemaRegistry(value: KafkaClusterV2KarapaceSchemaRegistry[] | cdktf.IResolvable) {
    this._karapaceSchemaRegistry.internalValue = value;
  }
  public resetKarapaceSchemaRegistry() {
    this._karapaceSchemaRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get karapaceSchemaRegistryInput() {
    return this._karapaceSchemaRegistry.internalValue;
  }

  // kraft - computed: false, optional: true, required: false
  private _kraft = new KafkaClusterV2KraftList(this, "kraft", false);
  public get kraft() {
    return this._kraft;
  }
  public putKraft(value: KafkaClusterV2Kraft[] | cdktf.IResolvable) {
    this._kraft.internalValue = value;
  }
  public resetKraft() {
    this._kraft.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kraftInput() {
    return this._kraft.internalValue;
  }

  // resize_settings - computed: false, optional: true, required: false
  private _resizeSettings = new KafkaClusterV2ResizeSettingsList(this, "resize_settings", false);
  public get resizeSettings() {
    return this._resizeSettings;
  }
  public putResizeSettings(value: KafkaClusterV2ResizeSettings[] | cdktf.IResolvable) {
    this._resizeSettings.internalValue = value;
  }
  public resetResizeSettings() {
    this._resizeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeSettingsInput() {
    return this._resizeSettings.internalValue;
  }

  // rest_proxy - computed: false, optional: true, required: false
  private _restProxy = new KafkaClusterV2RestProxyList(this, "rest_proxy", false);
  public get restProxy() {
    return this._restProxy;
  }
  public putRestProxy(value: KafkaClusterV2RestProxy[] | cdktf.IResolvable) {
    this._restProxy.internalValue = value;
  }
  public resetRestProxy() {
    this._restProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restProxyInput() {
    return this._restProxy.internalValue;
  }

  // schema_registry - computed: false, optional: true, required: false
  private _schemaRegistry = new KafkaClusterV2SchemaRegistryList(this, "schema_registry", false);
  public get schemaRegistry() {
    return this._schemaRegistry;
  }
  public putSchemaRegistry(value: KafkaClusterV2SchemaRegistry[] | cdktf.IResolvable) {
    this._schemaRegistry.internalValue = value;
  }
  public resetSchemaRegistry() {
    this._schemaRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryInput() {
    return this._schemaRegistry.internalValue;
  }

  // tiered_storage - computed: false, optional: true, required: false
  private _tieredStorage = new KafkaClusterV2TieredStorageList(this, "tiered_storage", false);
  public get tieredStorage() {
    return this._tieredStorage;
  }
  public putTieredStorage(value: KafkaClusterV2TieredStorage[] | cdktf.IResolvable) {
    this._tieredStorage.internalValue = value;
  }
  public resetTieredStorage() {
    this._tieredStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieredStorageInput() {
    return this._tieredStorage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KafkaClusterV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KafkaClusterV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // two_factor_delete - computed: false, optional: true, required: false
  private _twoFactorDelete = new KafkaClusterV2TwoFactorDeleteList(this, "two_factor_delete", false);
  public get twoFactorDelete() {
    return this._twoFactorDelete;
  }
  public putTwoFactorDelete(value: KafkaClusterV2TwoFactorDelete[] | cdktf.IResolvable) {
    this._twoFactorDelete.internalValue = value;
  }
  public resetTwoFactorDelete() {
    this._twoFactorDelete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorDeleteInput() {
    return this._twoFactorDelete.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_delete_topics: cdktf.booleanToTerraform(this._allowDeleteTopics),
      auto_create_topics: cdktf.booleanToTerraform(this._autoCreateTopics),
      bundled_use_only: cdktf.booleanToTerraform(this._bundledUseOnly),
      client_broker_auth_with_mtls: cdktf.booleanToTerraform(this._clientBrokerAuthWithMtls),
      client_to_cluster_encryption: cdktf.booleanToTerraform(this._clientToClusterEncryption),
      current_cluster_operation_status: cdktf.stringToTerraform(this._currentClusterOperationStatus),
      default_number_of_partitions: cdktf.numberToTerraform(this._defaultNumberOfPartitions),
      default_replication_factor: cdktf.numberToTerraform(this._defaultReplicationFactor),
      default_user_password: cdktf.stringToTerraform(this._defaultUserPassword),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kafka_version: cdktf.stringToTerraform(this._kafkaVersion),
      name: cdktf.stringToTerraform(this._name),
      pci_compliance_mode: cdktf.booleanToTerraform(this._pciComplianceMode),
      private_network_cluster: cdktf.booleanToTerraform(this._privateNetworkCluster),
      sla_tier: cdktf.stringToTerraform(this._slaTier),
      status: cdktf.stringToTerraform(this._status),
      client_metrics: cdktf.listMapper(kafkaClusterV2ClientMetricsToTerraform, true)(this._clientMetrics.internalValue),
      collocated_zookeeper: cdktf.listMapper(kafkaClusterV2CollocatedZookeeperToTerraform, true)(this._collocatedZookeeper.internalValue),
      data_centre: cdktf.listMapper(kafkaClusterV2DataCentreToTerraform, true)(this._dataCentre.internalValue),
      dedicated_kraft_controller: cdktf.listMapper(kafkaClusterV2DedicatedKraftControllerToTerraform, true)(this._dedicatedKraftController.internalValue),
      dedicated_zookeeper: cdktf.listMapper(kafkaClusterV2DedicatedZookeeperToTerraform, true)(this._dedicatedZookeeper.internalValue),
      karapace_rest_proxy: cdktf.listMapper(kafkaClusterV2KarapaceRestProxyToTerraform, true)(this._karapaceRestProxy.internalValue),
      karapace_schema_registry: cdktf.listMapper(kafkaClusterV2KarapaceSchemaRegistryToTerraform, true)(this._karapaceSchemaRegistry.internalValue),
      kraft: cdktf.listMapper(kafkaClusterV2KraftToTerraform, true)(this._kraft.internalValue),
      resize_settings: cdktf.listMapper(kafkaClusterV2ResizeSettingsToTerraform, true)(this._resizeSettings.internalValue),
      rest_proxy: cdktf.listMapper(kafkaClusterV2RestProxyToTerraform, true)(this._restProxy.internalValue),
      schema_registry: cdktf.listMapper(kafkaClusterV2SchemaRegistryToTerraform, true)(this._schemaRegistry.internalValue),
      tiered_storage: cdktf.listMapper(kafkaClusterV2TieredStorageToTerraform, true)(this._tieredStorage.internalValue),
      timeouts: kafkaClusterV2TimeoutsToTerraform(this._timeouts.internalValue),
      two_factor_delete: cdktf.listMapper(kafkaClusterV2TwoFactorDeleteToTerraform, true)(this._twoFactorDelete.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_delete_topics: {
        value: cdktf.booleanToHclTerraform(this._allowDeleteTopics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_create_topics: {
        value: cdktf.booleanToHclTerraform(this._autoCreateTopics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bundled_use_only: {
        value: cdktf.booleanToHclTerraform(this._bundledUseOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_broker_auth_with_mtls: {
        value: cdktf.booleanToHclTerraform(this._clientBrokerAuthWithMtls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_to_cluster_encryption: {
        value: cdktf.booleanToHclTerraform(this._clientToClusterEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      current_cluster_operation_status: {
        value: cdktf.stringToHclTerraform(this._currentClusterOperationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_number_of_partitions: {
        value: cdktf.numberToHclTerraform(this._defaultNumberOfPartitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_replication_factor: {
        value: cdktf.numberToHclTerraform(this._defaultReplicationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_user_password: {
        value: cdktf.stringToHclTerraform(this._defaultUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      kafka_version: {
        value: cdktf.stringToHclTerraform(this._kafkaVersion),
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
      pci_compliance_mode: {
        value: cdktf.booleanToHclTerraform(this._pciComplianceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_network_cluster: {
        value: cdktf.booleanToHclTerraform(this._privateNetworkCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sla_tier: {
        value: cdktf.stringToHclTerraform(this._slaTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_metrics: {
        value: cdktf.listMapperHcl(kafkaClusterV2ClientMetricsToHclTerraform, true)(this._clientMetrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClusterV2ClientMetricsList",
      },
      collocated_zookeeper: {
        value: cdktf.listMapperHcl(kafkaClusterV2CollocatedZookeeperToHclTerraform, true)(this._collocatedZookeeper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClusterV2CollocatedZookeeperList",
      },
      data_centre: {
        value: cdktf.listMapperHcl(kafkaClusterV2DataCentreToHclTerraform, true)(this._dataCentre.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClusterV2DataCentreList",
      },
      dedicated_kraft_controller: {
        value: cdktf.listMapperHcl(kafkaClusterV2DedicatedKraftControllerToHclTerraform, true)(this._dedicatedKraftController.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClusterV2DedicatedKraftControllerList",
      },
      dedicated_zookeeper: {
        value: cdktf.listMapperHcl(kafkaClusterV2DedicatedZookeeperToHclTerraform, true)(this._dedicatedZookeeper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClusterV2DedicatedZookeeperList",
      },
      karapace_rest_proxy: {
        value: cdktf.listMapperHcl(kafkaClusterV2KarapaceRestProxyToHclTerraform, true)(this._karapaceRestProxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClusterV2KarapaceRestProxyList",
      },
      karapace_schema_registry: {
        value: cdktf.listMapperHcl(kafkaClusterV2KarapaceSchemaRegistryToHclTerraform, true)(this._karapaceSchemaRegistry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClusterV2KarapaceSchemaRegistryList",
      },
      kraft: {
        value: cdktf.listMapperHcl(kafkaClusterV2KraftToHclTerraform, true)(this._kraft.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClusterV2KraftList",
      },
      resize_settings: {
        value: cdktf.listMapperHcl(kafkaClusterV2ResizeSettingsToHclTerraform, true)(this._resizeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClusterV2ResizeSettingsList",
      },
      rest_proxy: {
        value: cdktf.listMapperHcl(kafkaClusterV2RestProxyToHclTerraform, true)(this._restProxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClusterV2RestProxyList",
      },
      schema_registry: {
        value: cdktf.listMapperHcl(kafkaClusterV2SchemaRegistryToHclTerraform, true)(this._schemaRegistry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClusterV2SchemaRegistryList",
      },
      tiered_storage: {
        value: cdktf.listMapperHcl(kafkaClusterV2TieredStorageToHclTerraform, true)(this._tieredStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClusterV2TieredStorageList",
      },
      timeouts: {
        value: kafkaClusterV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaClusterV2Timeouts",
      },
      two_factor_delete: {
        value: cdktf.listMapperHcl(kafkaClusterV2TwoFactorDeleteToHclTerraform, true)(this._twoFactorDelete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClusterV2TwoFactorDeleteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
