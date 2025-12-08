// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaConnectMirrorV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Name of the mirror connector. The value of this property has the form: [source-cluster].[target-cluster].[random-string]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#connector_name KafkaConnectMirrorV2#connector_name}
  */
  readonly connectorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#id KafkaConnectMirrorV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the kafka connect cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#kafka_connect_cluster_id KafkaConnectMirrorV2#kafka_connect_cluster_id}
  */
  readonly kafkaConnectClusterId: string;
  /**
  * Maximum number of tasks for Kafka Connect to use. Should be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#max_tasks KafkaConnectMirrorV2#max_tasks}
  */
  readonly maxTasks: number;
  /**
  * Whether to rename topics as they are mirrored, by prefixing the sourceCluster.alias to the topic name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#rename_mirrored_topics KafkaConnectMirrorV2#rename_mirrored_topics}
  */
  readonly renameMirroredTopics: boolean | cdktf.IResolvable;
  /**
  * The overall status of this mirror.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#status KafkaConnectMirrorV2#status}
  */
  readonly status?: string;
  /**
  * The latency in milliseconds above which this mirror will be considered out of sync. It can not be less than 1000ms. The suggested initial latency is 30000ms  for connectors to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#target_latency KafkaConnectMirrorV2#target_latency}
  */
  readonly targetLatency: number;
  /**
  * Regex to select which topics to mirror.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#topics_regex KafkaConnectMirrorV2#topics_regex}
  */
  readonly topicsRegex: string;
  /**
  * connectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#connectors KafkaConnectMirrorV2#connectors}
  */
  readonly connectors?: KafkaConnectMirrorV2Connectors[] | cdktf.IResolvable;
  /**
  * mirrored_topics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#mirrored_topics KafkaConnectMirrorV2#mirrored_topics}
  */
  readonly mirroredTopics?: KafkaConnectMirrorV2MirroredTopics[] | cdktf.IResolvable;
  /**
  * source_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#source_cluster KafkaConnectMirrorV2#source_cluster}
  */
  readonly sourceCluster: KafkaConnectMirrorV2SourceCluster[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#timeouts KafkaConnectMirrorV2#timeouts}
  */
  readonly timeouts?: KafkaConnectMirrorV2Timeouts;
}
export interface KafkaConnectMirrorV2Connectors {
  /**
  * Configuration of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#config KafkaConnectMirrorV2#config}
  */
  readonly config?: string;
  /**
  * Name of the connector. Could be one of [Mirror Connector, Checkpoint Connector].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#name KafkaConnectMirrorV2#name}
  */
  readonly name?: string;
  /**
  * Status of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#status KafkaConnectMirrorV2#status}
  */
  readonly status?: string;
}

export function kafkaConnectMirrorV2ConnectorsToTerraform(struct?: KafkaConnectMirrorV2Connectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function kafkaConnectMirrorV2ConnectorsToHclTerraform(struct?: KafkaConnectMirrorV2Connectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
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

export class KafkaConnectMirrorV2ConnectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectMirrorV2Connectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectMirrorV2Connectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._name = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._name = value.name;
      this._status = value.status;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

export class KafkaConnectMirrorV2ConnectorsList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectMirrorV2Connectors[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectMirrorV2ConnectorsOutputReference {
    return new KafkaConnectMirrorV2ConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectMirrorV2MirroredTopics {
  /**
  * Average latency in milliseconds for messages to travel from source to destination topics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#average_latency KafkaConnectMirrorV2#average_latency}
  */
  readonly averageLatency?: number;
  /**
  * Average record rate for messages to travel from source to destination topics, it is 0 if there are no messages travelling in between.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#average_rate KafkaConnectMirrorV2#average_rate}
  */
  readonly averageRate?: number;
  /**
  * Name of the mirrored topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#name KafkaConnectMirrorV2#name}
  */
  readonly name?: string;
}

export function kafkaConnectMirrorV2MirroredTopicsToTerraform(struct?: KafkaConnectMirrorV2MirroredTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_latency: cdktf.numberToTerraform(struct!.averageLatency),
    average_rate: cdktf.numberToTerraform(struct!.averageRate),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function kafkaConnectMirrorV2MirroredTopicsToHclTerraform(struct?: KafkaConnectMirrorV2MirroredTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_latency: {
      value: cdktf.numberToHclTerraform(struct!.averageLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_rate: {
      value: cdktf.numberToHclTerraform(struct!.averageRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectMirrorV2MirroredTopicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectMirrorV2MirroredTopics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageLatency = this._averageLatency;
    }
    if (this._averageRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageRate = this._averageRate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectMirrorV2MirroredTopics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageLatency = undefined;
      this._averageRate = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageLatency = value.averageLatency;
      this._averageRate = value.averageRate;
      this._name = value.name;
    }
  }

  // average_latency - computed: true, optional: true, required: false
  private _averageLatency?: number; 
  public get averageLatency() {
    return this.getNumberAttribute('average_latency');
  }
  public set averageLatency(value: number) {
    this._averageLatency = value;
  }
  public resetAverageLatency() {
    this._averageLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageLatencyInput() {
    return this._averageLatency;
  }

  // average_rate - computed: true, optional: true, required: false
  private _averageRate?: number; 
  public get averageRate() {
    return this.getNumberAttribute('average_rate');
  }
  public set averageRate(value: number) {
    this._averageRate = value;
  }
  public resetAverageRate() {
    this._averageRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageRateInput() {
    return this._averageRate;
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
}

export class KafkaConnectMirrorV2MirroredTopicsList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectMirrorV2MirroredTopics[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectMirrorV2MirroredTopicsOutputReference {
    return new KafkaConnectMirrorV2MirroredTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectMirrorV2SourceClusterExternalCluster {
  /**
  * Kafka connection properties string used to connect to external kafka cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#source_connection_properties KafkaConnectMirrorV2#source_connection_properties}
  */
  readonly sourceConnectionProperties: string;
}

export function kafkaConnectMirrorV2SourceClusterExternalClusterToTerraform(struct?: KafkaConnectMirrorV2SourceClusterExternalCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_connection_properties: cdktf.stringToTerraform(struct!.sourceConnectionProperties),
  }
}


export function kafkaConnectMirrorV2SourceClusterExternalClusterToHclTerraform(struct?: KafkaConnectMirrorV2SourceClusterExternalCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_connection_properties: {
      value: cdktf.stringToHclTerraform(struct!.sourceConnectionProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectMirrorV2SourceClusterExternalClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectMirrorV2SourceClusterExternalCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceConnectionProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConnectionProperties = this._sourceConnectionProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectMirrorV2SourceClusterExternalCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceConnectionProperties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceConnectionProperties = value.sourceConnectionProperties;
    }
  }

  // source_connection_properties - computed: false, optional: false, required: true
  private _sourceConnectionProperties?: string; 
  public get sourceConnectionProperties() {
    return this.getStringAttribute('source_connection_properties');
  }
  public set sourceConnectionProperties(value: string) {
    this._sourceConnectionProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectionPropertiesInput() {
    return this._sourceConnectionProperties;
  }
}

export class KafkaConnectMirrorV2SourceClusterExternalClusterList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectMirrorV2SourceClusterExternalCluster[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectMirrorV2SourceClusterExternalClusterOutputReference {
    return new KafkaConnectMirrorV2SourceClusterExternalClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectMirrorV2SourceClusterManagedCluster {
  /**
  * Source kafka cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#source_kafka_cluster_id KafkaConnectMirrorV2#source_kafka_cluster_id}
  */
  readonly sourceKafkaClusterId: string;
  /**
  * Whether or not to connect to source cluster's private IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#use_private_ips KafkaConnectMirrorV2#use_private_ips}
  */
  readonly usePrivateIps: boolean | cdktf.IResolvable;
}

export function kafkaConnectMirrorV2SourceClusterManagedClusterToTerraform(struct?: KafkaConnectMirrorV2SourceClusterManagedCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_kafka_cluster_id: cdktf.stringToTerraform(struct!.sourceKafkaClusterId),
    use_private_ips: cdktf.booleanToTerraform(struct!.usePrivateIps),
  }
}


export function kafkaConnectMirrorV2SourceClusterManagedClusterToHclTerraform(struct?: KafkaConnectMirrorV2SourceClusterManagedCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_kafka_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceKafkaClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_private_ips: {
      value: cdktf.booleanToHclTerraform(struct!.usePrivateIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectMirrorV2SourceClusterManagedClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectMirrorV2SourceClusterManagedCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceKafkaClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKafkaClusterId = this._sourceKafkaClusterId;
    }
    if (this._usePrivateIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePrivateIps = this._usePrivateIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectMirrorV2SourceClusterManagedCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceKafkaClusterId = undefined;
      this._usePrivateIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceKafkaClusterId = value.sourceKafkaClusterId;
      this._usePrivateIps = value.usePrivateIps;
    }
  }

  // source_kafka_cluster_id - computed: false, optional: false, required: true
  private _sourceKafkaClusterId?: string; 
  public get sourceKafkaClusterId() {
    return this.getStringAttribute('source_kafka_cluster_id');
  }
  public set sourceKafkaClusterId(value: string) {
    this._sourceKafkaClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKafkaClusterIdInput() {
    return this._sourceKafkaClusterId;
  }

  // use_private_ips - computed: false, optional: false, required: true
  private _usePrivateIps?: boolean | cdktf.IResolvable; 
  public get usePrivateIps() {
    return this.getBooleanAttribute('use_private_ips');
  }
  public set usePrivateIps(value: boolean | cdktf.IResolvable) {
    this._usePrivateIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivateIpsInput() {
    return this._usePrivateIps;
  }
}

export class KafkaConnectMirrorV2SourceClusterManagedClusterList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectMirrorV2SourceClusterManagedCluster[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectMirrorV2SourceClusterManagedClusterOutputReference {
    return new KafkaConnectMirrorV2SourceClusterManagedClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectMirrorV2SourceCluster {
  /**
  * Alias to use for the source kafka cluster. This will be used to rename topics if renameMirroredTopics is turned on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#alias KafkaConnectMirrorV2#alias}
  */
  readonly alias: string;
  /**
  * external_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#external_cluster KafkaConnectMirrorV2#external_cluster}
  */
  readonly externalCluster?: KafkaConnectMirrorV2SourceClusterExternalCluster[] | cdktf.IResolvable;
  /**
  * managed_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#managed_cluster KafkaConnectMirrorV2#managed_cluster}
  */
  readonly managedCluster?: KafkaConnectMirrorV2SourceClusterManagedCluster[] | cdktf.IResolvable;
}

export function kafkaConnectMirrorV2SourceClusterToTerraform(struct?: KafkaConnectMirrorV2SourceCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    external_cluster: cdktf.listMapper(kafkaConnectMirrorV2SourceClusterExternalClusterToTerraform, true)(struct!.externalCluster),
    managed_cluster: cdktf.listMapper(kafkaConnectMirrorV2SourceClusterManagedClusterToTerraform, true)(struct!.managedCluster),
  }
}


export function kafkaConnectMirrorV2SourceClusterToHclTerraform(struct?: KafkaConnectMirrorV2SourceCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_cluster: {
      value: cdktf.listMapperHcl(kafkaConnectMirrorV2SourceClusterExternalClusterToHclTerraform, true)(struct!.externalCluster),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectMirrorV2SourceClusterExternalClusterList",
    },
    managed_cluster: {
      value: cdktf.listMapperHcl(kafkaConnectMirrorV2SourceClusterManagedClusterToHclTerraform, true)(struct!.managedCluster),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectMirrorV2SourceClusterManagedClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectMirrorV2SourceClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectMirrorV2SourceCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._externalCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalCluster = this._externalCluster?.internalValue;
    }
    if (this._managedCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedCluster = this._managedCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectMirrorV2SourceCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._externalCluster.internalValue = undefined;
      this._managedCluster.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._externalCluster.internalValue = value.externalCluster;
      this._managedCluster.internalValue = value.managedCluster;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // external_cluster - computed: false, optional: true, required: false
  private _externalCluster = new KafkaConnectMirrorV2SourceClusterExternalClusterList(this, "external_cluster", false);
  public get externalCluster() {
    return this._externalCluster;
  }
  public putExternalCluster(value: KafkaConnectMirrorV2SourceClusterExternalCluster[] | cdktf.IResolvable) {
    this._externalCluster.internalValue = value;
  }
  public resetExternalCluster() {
    this._externalCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalClusterInput() {
    return this._externalCluster.internalValue;
  }

  // managed_cluster - computed: false, optional: true, required: false
  private _managedCluster = new KafkaConnectMirrorV2SourceClusterManagedClusterList(this, "managed_cluster", false);
  public get managedCluster() {
    return this._managedCluster;
  }
  public putManagedCluster(value: KafkaConnectMirrorV2SourceClusterManagedCluster[] | cdktf.IResolvable) {
    this._managedCluster.internalValue = value;
  }
  public resetManagedCluster() {
    this._managedCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterInput() {
    return this._managedCluster.internalValue;
  }
}

export class KafkaConnectMirrorV2SourceClusterList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectMirrorV2SourceCluster[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectMirrorV2SourceClusterOutputReference {
    return new KafkaConnectMirrorV2SourceClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectMirrorV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#create KafkaConnectMirrorV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#default KafkaConnectMirrorV2#default}
  */
  readonly default?: string;
}

export function kafkaConnectMirrorV2TimeoutsToTerraform(struct?: KafkaConnectMirrorV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function kafkaConnectMirrorV2TimeoutsToHclTerraform(struct?: KafkaConnectMirrorV2Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectMirrorV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaConnectMirrorV2Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectMirrorV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2 instaclustr_kafka_connect_mirror_v2}
*/
export class KafkaConnectMirrorV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_connect_mirror_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaConnectMirrorV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaConnectMirrorV2 to import
  * @param importFromId The id of the existing KafkaConnectMirrorV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaConnectMirrorV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_connect_mirror_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/resources/kafka_connect_mirror_v2 instaclustr_kafka_connect_mirror_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaConnectMirrorV2Config
  */
  public constructor(scope: Construct, id: string, config: KafkaConnectMirrorV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_connect_mirror_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.33',
        providerVersionConstraint: '2.1.33'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectorName = config.connectorName;
    this._id = config.id;
    this._kafkaConnectClusterId = config.kafkaConnectClusterId;
    this._maxTasks = config.maxTasks;
    this._renameMirroredTopics = config.renameMirroredTopics;
    this._status = config.status;
    this._targetLatency = config.targetLatency;
    this._topicsRegex = config.topicsRegex;
    this._connectors.internalValue = config.connectors;
    this._mirroredTopics.internalValue = config.mirroredTopics;
    this._sourceCluster.internalValue = config.sourceCluster;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_name - computed: true, optional: true, required: false
  private _connectorName?: string; 
  public get connectorName() {
    return this.getStringAttribute('connector_name');
  }
  public set connectorName(value: string) {
    this._connectorName = value;
  }
  public resetConnectorName() {
    this._connectorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorNameInput() {
    return this._connectorName;
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

  // kafka_connect_cluster_id - computed: false, optional: false, required: true
  private _kafkaConnectClusterId?: string; 
  public get kafkaConnectClusterId() {
    return this.getStringAttribute('kafka_connect_cluster_id');
  }
  public set kafkaConnectClusterId(value: string) {
    this._kafkaConnectClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectClusterIdInput() {
    return this._kafkaConnectClusterId;
  }

  // max_tasks - computed: false, optional: false, required: true
  private _maxTasks?: number; 
  public get maxTasks() {
    return this.getNumberAttribute('max_tasks');
  }
  public set maxTasks(value: number) {
    this._maxTasks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTasksInput() {
    return this._maxTasks;
  }

  // rename_mirrored_topics - computed: false, optional: false, required: true
  private _renameMirroredTopics?: boolean | cdktf.IResolvable; 
  public get renameMirroredTopics() {
    return this.getBooleanAttribute('rename_mirrored_topics');
  }
  public set renameMirroredTopics(value: boolean | cdktf.IResolvable) {
    this._renameMirroredTopics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renameMirroredTopicsInput() {
    return this._renameMirroredTopics;
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

  // target_latency - computed: false, optional: false, required: true
  private _targetLatency?: number; 
  public get targetLatency() {
    return this.getNumberAttribute('target_latency');
  }
  public set targetLatency(value: number) {
    this._targetLatency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLatencyInput() {
    return this._targetLatency;
  }

  // topics_regex - computed: false, optional: false, required: true
  private _topicsRegex?: string; 
  public get topicsRegex() {
    return this.getStringAttribute('topics_regex');
  }
  public set topicsRegex(value: string) {
    this._topicsRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsRegexInput() {
    return this._topicsRegex;
  }

  // connectors - computed: false, optional: true, required: false
  private _connectors = new KafkaConnectMirrorV2ConnectorsList(this, "connectors", false);
  public get connectors() {
    return this._connectors;
  }
  public putConnectors(value: KafkaConnectMirrorV2Connectors[] | cdktf.IResolvable) {
    this._connectors.internalValue = value;
  }
  public resetConnectors() {
    this._connectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorsInput() {
    return this._connectors.internalValue;
  }

  // mirrored_topics - computed: false, optional: true, required: false
  private _mirroredTopics = new KafkaConnectMirrorV2MirroredTopicsList(this, "mirrored_topics", false);
  public get mirroredTopics() {
    return this._mirroredTopics;
  }
  public putMirroredTopics(value: KafkaConnectMirrorV2MirroredTopics[] | cdktf.IResolvable) {
    this._mirroredTopics.internalValue = value;
  }
  public resetMirroredTopics() {
    this._mirroredTopics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroredTopicsInput() {
    return this._mirroredTopics.internalValue;
  }

  // source_cluster - computed: false, optional: false, required: true
  private _sourceCluster = new KafkaConnectMirrorV2SourceClusterList(this, "source_cluster", false);
  public get sourceCluster() {
    return this._sourceCluster;
  }
  public putSourceCluster(value: KafkaConnectMirrorV2SourceCluster[] | cdktf.IResolvable) {
    this._sourceCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceClusterInput() {
    return this._sourceCluster.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KafkaConnectMirrorV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KafkaConnectMirrorV2Timeouts) {
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
      connector_name: cdktf.stringToTerraform(this._connectorName),
      id: cdktf.stringToTerraform(this._id),
      kafka_connect_cluster_id: cdktf.stringToTerraform(this._kafkaConnectClusterId),
      max_tasks: cdktf.numberToTerraform(this._maxTasks),
      rename_mirrored_topics: cdktf.booleanToTerraform(this._renameMirroredTopics),
      status: cdktf.stringToTerraform(this._status),
      target_latency: cdktf.numberToTerraform(this._targetLatency),
      topics_regex: cdktf.stringToTerraform(this._topicsRegex),
      connectors: cdktf.listMapper(kafkaConnectMirrorV2ConnectorsToTerraform, true)(this._connectors.internalValue),
      mirrored_topics: cdktf.listMapper(kafkaConnectMirrorV2MirroredTopicsToTerraform, true)(this._mirroredTopics.internalValue),
      source_cluster: cdktf.listMapper(kafkaConnectMirrorV2SourceClusterToTerraform, true)(this._sourceCluster.internalValue),
      timeouts: kafkaConnectMirrorV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_name: {
        value: cdktf.stringToHclTerraform(this._connectorName),
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
      kafka_connect_cluster_id: {
        value: cdktf.stringToHclTerraform(this._kafkaConnectClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_tasks: {
        value: cdktf.numberToHclTerraform(this._maxTasks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rename_mirrored_topics: {
        value: cdktf.booleanToHclTerraform(this._renameMirroredTopics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_latency: {
        value: cdktf.numberToHclTerraform(this._targetLatency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topics_regex: {
        value: cdktf.stringToHclTerraform(this._topicsRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectors: {
        value: cdktf.listMapperHcl(kafkaConnectMirrorV2ConnectorsToHclTerraform, true)(this._connectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaConnectMirrorV2ConnectorsList",
      },
      mirrored_topics: {
        value: cdktf.listMapperHcl(kafkaConnectMirrorV2MirroredTopicsToHclTerraform, true)(this._mirroredTopics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaConnectMirrorV2MirroredTopicsList",
      },
      source_cluster: {
        value: cdktf.listMapperHcl(kafkaConnectMirrorV2SourceClusterToHclTerraform, true)(this._sourceCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaConnectMirrorV2SourceClusterList",
      },
      timeouts: {
        value: kafkaConnectMirrorV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaConnectMirrorV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
