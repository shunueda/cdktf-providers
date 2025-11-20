// https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaMirrorTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic#id KafkaMirrorTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the topic to be mirrored over the Kafka Mirror Topic, i.e. the source topic's name. Only required when there is a prefix configured on the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic#mirror_topic_name KafkaMirrorTopic#mirror_topic_name}
  */
  readonly mirrorTopicName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic#status KafkaMirrorTopic#status}
  */
  readonly status?: string;
  /**
  * cluster_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic#cluster_link KafkaMirrorTopic#cluster_link}
  */
  readonly clusterLink: KafkaMirrorTopicClusterLink;
  /**
  * kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic#kafka_cluster KafkaMirrorTopic#kafka_cluster}
  */
  readonly kafkaCluster: KafkaMirrorTopicKafkaCluster;
  /**
  * source_kafka_topic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic#source_kafka_topic KafkaMirrorTopic#source_kafka_topic}
  */
  readonly sourceKafkaTopic: KafkaMirrorTopicSourceKafkaTopic;
}
export interface KafkaMirrorTopicClusterLink {
  /**
  * The name of the Cluster Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic#link_name KafkaMirrorTopic#link_name}
  */
  readonly linkName: string;
}

export function kafkaMirrorTopicClusterLinkToTerraform(struct?: KafkaMirrorTopicClusterLinkOutputReference | KafkaMirrorTopicClusterLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_name: cdktf.stringToTerraform(struct!.linkName),
  }
}


export function kafkaMirrorTopicClusterLinkToHclTerraform(struct?: KafkaMirrorTopicClusterLinkOutputReference | KafkaMirrorTopicClusterLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_name: {
      value: cdktf.stringToHclTerraform(struct!.linkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaMirrorTopicClusterLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaMirrorTopicClusterLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkName = this._linkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaMirrorTopicClusterLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkName = value.linkName;
    }
  }

  // link_name - computed: false, optional: false, required: true
  private _linkName?: string; 
  public get linkName() {
    return this.getStringAttribute('link_name');
  }
  public set linkName(value: string) {
    this._linkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkNameInput() {
    return this._linkName;
  }
}
export interface KafkaMirrorTopicKafkaClusterCredentials {
  /**
  * The Kafka API Key for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic#key KafkaMirrorTopic#key}
  */
  readonly key: string;
  /**
  * The Kafka API Secret for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic#secret KafkaMirrorTopic#secret}
  */
  readonly secret: string;
}

export function kafkaMirrorTopicKafkaClusterCredentialsToTerraform(struct?: KafkaMirrorTopicKafkaClusterCredentialsOutputReference | KafkaMirrorTopicKafkaClusterCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function kafkaMirrorTopicKafkaClusterCredentialsToHclTerraform(struct?: KafkaMirrorTopicKafkaClusterCredentialsOutputReference | KafkaMirrorTopicKafkaClusterCredentials): any {
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
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaMirrorTopicKafkaClusterCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaMirrorTopicKafkaClusterCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaMirrorTopicKafkaClusterCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secret = value.secret;
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

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface KafkaMirrorTopicKafkaCluster {
  /**
  * The unique identifier for the referred Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic#id KafkaMirrorTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The REST endpoint of the Kafka cluster (e.g., `https://pkc-00000.us-central1.gcp.confluent.cloud:443`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic#rest_endpoint KafkaMirrorTopic#rest_endpoint}
  */
  readonly restEndpoint?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic#credentials KafkaMirrorTopic#credentials}
  */
  readonly credentials?: KafkaMirrorTopicKafkaClusterCredentials;
}

export function kafkaMirrorTopicKafkaClusterToTerraform(struct?: KafkaMirrorTopicKafkaClusterOutputReference | KafkaMirrorTopicKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    rest_endpoint: cdktf.stringToTerraform(struct!.restEndpoint),
    credentials: kafkaMirrorTopicKafkaClusterCredentialsToTerraform(struct!.credentials),
  }
}


export function kafkaMirrorTopicKafkaClusterToHclTerraform(struct?: KafkaMirrorTopicKafkaClusterOutputReference | KafkaMirrorTopicKafkaCluster): any {
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
    rest_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.restEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: kafkaMirrorTopicKafkaClusterCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaMirrorTopicKafkaClusterCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaMirrorTopicKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaMirrorTopicKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._restEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.restEndpoint = this._restEndpoint;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaMirrorTopicKafkaCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._restEndpoint = undefined;
      this._credentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._restEndpoint = value.restEndpoint;
      this._credentials.internalValue = value.credentials;
    }
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

  // rest_endpoint - computed: false, optional: true, required: false
  private _restEndpoint?: string; 
  public get restEndpoint() {
    return this.getStringAttribute('rest_endpoint');
  }
  public set restEndpoint(value: string) {
    this._restEndpoint = value;
  }
  public resetRestEndpoint() {
    this._restEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restEndpointInput() {
    return this._restEndpoint;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new KafkaMirrorTopicKafkaClusterCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: KafkaMirrorTopicKafkaClusterCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}
export interface KafkaMirrorTopicSourceKafkaTopic {
  /**
  * The name of the Source Kafka topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic#topic_name KafkaMirrorTopic#topic_name}
  */
  readonly topicName: string;
}

export function kafkaMirrorTopicSourceKafkaTopicToTerraform(struct?: KafkaMirrorTopicSourceKafkaTopicOutputReference | KafkaMirrorTopicSourceKafkaTopic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}


export function kafkaMirrorTopicSourceKafkaTopicToHclTerraform(struct?: KafkaMirrorTopicSourceKafkaTopicOutputReference | KafkaMirrorTopicSourceKafkaTopic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class KafkaMirrorTopicSourceKafkaTopicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaMirrorTopicSourceKafkaTopic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaMirrorTopicSourceKafkaTopic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topicName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topicName = value.topicName;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic confluent_kafka_mirror_topic}
*/
export class KafkaMirrorTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_kafka_mirror_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaMirrorTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaMirrorTopic to import
  * @param importFromId The id of the existing KafkaMirrorTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaMirrorTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_kafka_mirror_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/kafka_mirror_topic confluent_kafka_mirror_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaMirrorTopicConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaMirrorTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_kafka_mirror_topic',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.53.0',
        providerVersionConstraint: '2.53.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._mirrorTopicName = config.mirrorTopicName;
    this._status = config.status;
    this._clusterLink.internalValue = config.clusterLink;
    this._kafkaCluster.internalValue = config.kafkaCluster;
    this._sourceKafkaTopic.internalValue = config.sourceKafkaTopic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mirror_topic_name - computed: true, optional: true, required: false
  private _mirrorTopicName?: string; 
  public get mirrorTopicName() {
    return this.getStringAttribute('mirror_topic_name');
  }
  public set mirrorTopicName(value: string) {
    this._mirrorTopicName = value;
  }
  public resetMirrorTopicName() {
    this._mirrorTopicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorTopicNameInput() {
    return this._mirrorTopicName;
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

  // cluster_link - computed: false, optional: false, required: true
  private _clusterLink = new KafkaMirrorTopicClusterLinkOutputReference(this, "cluster_link");
  public get clusterLink() {
    return this._clusterLink;
  }
  public putClusterLink(value: KafkaMirrorTopicClusterLink) {
    this._clusterLink.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLinkInput() {
    return this._clusterLink.internalValue;
  }

  // kafka_cluster - computed: false, optional: false, required: true
  private _kafkaCluster = new KafkaMirrorTopicKafkaClusterOutputReference(this, "kafka_cluster");
  public get kafkaCluster() {
    return this._kafkaCluster;
  }
  public putKafkaCluster(value: KafkaMirrorTopicKafkaCluster) {
    this._kafkaCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterInput() {
    return this._kafkaCluster.internalValue;
  }

  // source_kafka_topic - computed: false, optional: false, required: true
  private _sourceKafkaTopic = new KafkaMirrorTopicSourceKafkaTopicOutputReference(this, "source_kafka_topic");
  public get sourceKafkaTopic() {
    return this._sourceKafkaTopic;
  }
  public putSourceKafkaTopic(value: KafkaMirrorTopicSourceKafkaTopic) {
    this._sourceKafkaTopic.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKafkaTopicInput() {
    return this._sourceKafkaTopic.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mirror_topic_name: cdktf.stringToTerraform(this._mirrorTopicName),
      status: cdktf.stringToTerraform(this._status),
      cluster_link: kafkaMirrorTopicClusterLinkToTerraform(this._clusterLink.internalValue),
      kafka_cluster: kafkaMirrorTopicKafkaClusterToTerraform(this._kafkaCluster.internalValue),
      source_kafka_topic: kafkaMirrorTopicSourceKafkaTopicToTerraform(this._sourceKafkaTopic.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirror_topic_name: {
        value: cdktf.stringToHclTerraform(this._mirrorTopicName),
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
      cluster_link: {
        value: kafkaMirrorTopicClusterLinkToHclTerraform(this._clusterLink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaMirrorTopicClusterLinkList",
      },
      kafka_cluster: {
        value: kafkaMirrorTopicKafkaClusterToHclTerraform(this._kafkaCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaMirrorTopicKafkaClusterList",
      },
      source_kafka_topic: {
        value: kafkaMirrorTopicSourceKafkaTopicToHclTerraform(this._sourceKafkaTopic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaMirrorTopicSourceKafkaTopicList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
