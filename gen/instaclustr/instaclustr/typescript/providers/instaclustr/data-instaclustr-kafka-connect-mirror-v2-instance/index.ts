// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrKafkaConnectMirrorV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the mirror connector. The value of this property has the form: [source-cluster].[target-cluster].[random-string]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#connector_name DataInstaclustrKafkaConnectMirrorV2Instance#connector_name}
  */
  readonly connectorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#id DataInstaclustrKafkaConnectMirrorV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * ID of the kafka connect cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#kafka_connect_cluster_id DataInstaclustrKafkaConnectMirrorV2Instance#kafka_connect_cluster_id}
  */
  readonly kafkaConnectClusterId?: string;
  /**
  * Maximum number of tasks for Kafka Connect to use. Should be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#max_tasks DataInstaclustrKafkaConnectMirrorV2Instance#max_tasks}
  */
  readonly maxTasks?: number;
  /**
  * Whether to rename topics as they are mirrored, by prefixing the sourceCluster.alias to the topic name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#rename_mirrored_topics DataInstaclustrKafkaConnectMirrorV2Instance#rename_mirrored_topics}
  */
  readonly renameMirroredTopics?: boolean | cdktf.IResolvable;
  /**
  * The overall status of this mirror.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#status DataInstaclustrKafkaConnectMirrorV2Instance#status}
  */
  readonly status?: string;
  /**
  * The latency in milliseconds above which this mirror will be considered out of sync. It can not be less than 1000ms. The suggested initial latency is 30000ms  for connectors to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#target_latency DataInstaclustrKafkaConnectMirrorV2Instance#target_latency}
  */
  readonly targetLatency?: number;
  /**
  * Regex to select which topics to mirror.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#topics_regex DataInstaclustrKafkaConnectMirrorV2Instance#topics_regex}
  */
  readonly topicsRegex?: string;
  /**
  * connectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#connectors DataInstaclustrKafkaConnectMirrorV2Instance#connectors}
  */
  readonly connectors?: DataInstaclustrKafkaConnectMirrorV2InstanceConnectors[] | cdktf.IResolvable;
  /**
  * mirrored_topics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#mirrored_topics DataInstaclustrKafkaConnectMirrorV2Instance#mirrored_topics}
  */
  readonly mirroredTopics?: DataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopics[] | cdktf.IResolvable;
  /**
  * source_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#source_cluster DataInstaclustrKafkaConnectMirrorV2Instance#source_cluster}
  */
  readonly sourceCluster?: DataInstaclustrKafkaConnectMirrorV2InstanceSourceCluster[] | cdktf.IResolvable;
}
export interface DataInstaclustrKafkaConnectMirrorV2InstanceConnectors {
  /**
  * Configuration of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#config DataInstaclustrKafkaConnectMirrorV2Instance#config}
  */
  readonly config?: string;
  /**
  * Name of the connector. Could be one of [Mirror Connector, Checkpoint Connector].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#name DataInstaclustrKafkaConnectMirrorV2Instance#name}
  */
  readonly name?: string;
  /**
  * Status of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#status DataInstaclustrKafkaConnectMirrorV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrKafkaConnectMirrorV2InstanceConnectorsToTerraform(struct?: DataInstaclustrKafkaConnectMirrorV2InstanceConnectors | cdktf.IResolvable): any {
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


export function dataInstaclustrKafkaConnectMirrorV2InstanceConnectorsToHclTerraform(struct?: DataInstaclustrKafkaConnectMirrorV2InstanceConnectors | cdktf.IResolvable): any {
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

export class DataInstaclustrKafkaConnectMirrorV2InstanceConnectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectMirrorV2InstanceConnectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrKafkaConnectMirrorV2InstanceConnectors | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrKafkaConnectMirrorV2InstanceConnectorsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectMirrorV2InstanceConnectors[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectMirrorV2InstanceConnectorsOutputReference {
    return new DataInstaclustrKafkaConnectMirrorV2InstanceConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopics {
  /**
  * Average latency in milliseconds for messages to travel from source to destination topics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#average_latency DataInstaclustrKafkaConnectMirrorV2Instance#average_latency}
  */
  readonly averageLatency?: number;
  /**
  * Average record rate for messages to travel from source to destination topics, it is 0 if there are no messages travelling in between.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#average_rate DataInstaclustrKafkaConnectMirrorV2Instance#average_rate}
  */
  readonly averageRate?: number;
  /**
  * Name of the mirrored topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#name DataInstaclustrKafkaConnectMirrorV2Instance#name}
  */
  readonly name?: string;
}

export function dataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopicsToTerraform(struct?: DataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopics | cdktf.IResolvable): any {
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


export function dataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopicsToHclTerraform(struct?: DataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopics | cdktf.IResolvable): any {
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

export class DataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopics | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopics | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopicsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopics[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopicsOutputReference {
    return new DataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalCluster {
  /**
  * Kafka connection properties string used to connect to external kafka cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#source_connection_properties DataInstaclustrKafkaConnectMirrorV2Instance#source_connection_properties}
  */
  readonly sourceConnectionProperties?: string;
}

export function dataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalClusterToTerraform(struct?: DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_connection_properties: cdktf.stringToTerraform(struct!.sourceConnectionProperties),
  }
}


export function dataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalClusterToHclTerraform(struct?: DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalCluster | cdktf.IResolvable): any {
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

export class DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalCluster | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalCluster | cdktf.IResolvable | undefined) {
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

  // source_connection_properties - computed: true, optional: true, required: false
  private _sourceConnectionProperties?: string; 
  public get sourceConnectionProperties() {
    return this.getStringAttribute('source_connection_properties');
  }
  public set sourceConnectionProperties(value: string) {
    this._sourceConnectionProperties = value;
  }
  public resetSourceConnectionProperties() {
    this._sourceConnectionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectionPropertiesInput() {
    return this._sourceConnectionProperties;
  }
}

export class DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalClusterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalCluster[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalClusterOutputReference {
    return new DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedCluster {
  /**
  * Source kafka cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#source_kafka_cluster_id DataInstaclustrKafkaConnectMirrorV2Instance#source_kafka_cluster_id}
  */
  readonly sourceKafkaClusterId?: string;
  /**
  * Whether or not to connect to source cluster's private IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#use_private_ips DataInstaclustrKafkaConnectMirrorV2Instance#use_private_ips}
  */
  readonly usePrivateIps?: boolean | cdktf.IResolvable;
}

export function dataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedClusterToTerraform(struct?: DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_kafka_cluster_id: cdktf.stringToTerraform(struct!.sourceKafkaClusterId),
    use_private_ips: cdktf.booleanToTerraform(struct!.usePrivateIps),
  }
}


export function dataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedClusterToHclTerraform(struct?: DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedCluster | cdktf.IResolvable): any {
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

export class DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedCluster | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedCluster | cdktf.IResolvable | undefined) {
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

  // source_kafka_cluster_id - computed: true, optional: true, required: false
  private _sourceKafkaClusterId?: string; 
  public get sourceKafkaClusterId() {
    return this.getStringAttribute('source_kafka_cluster_id');
  }
  public set sourceKafkaClusterId(value: string) {
    this._sourceKafkaClusterId = value;
  }
  public resetSourceKafkaClusterId() {
    this._sourceKafkaClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKafkaClusterIdInput() {
    return this._sourceKafkaClusterId;
  }

  // use_private_ips - computed: true, optional: true, required: false
  private _usePrivateIps?: boolean | cdktf.IResolvable; 
  public get usePrivateIps() {
    return this.getBooleanAttribute('use_private_ips');
  }
  public set usePrivateIps(value: boolean | cdktf.IResolvable) {
    this._usePrivateIps = value;
  }
  public resetUsePrivateIps() {
    this._usePrivateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivateIpsInput() {
    return this._usePrivateIps;
  }
}

export class DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedClusterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedCluster[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedClusterOutputReference {
    return new DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectMirrorV2InstanceSourceCluster {
  /**
  * Alias to use for the source kafka cluster. This will be used to rename topics if renameMirroredTopics is turned on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#alias DataInstaclustrKafkaConnectMirrorV2Instance#alias}
  */
  readonly alias?: string;
  /**
  * external_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#external_cluster DataInstaclustrKafkaConnectMirrorV2Instance#external_cluster}
  */
  readonly externalCluster?: DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalCluster[] | cdktf.IResolvable;
  /**
  * managed_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#managed_cluster DataInstaclustrKafkaConnectMirrorV2Instance#managed_cluster}
  */
  readonly managedCluster?: DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedCluster[] | cdktf.IResolvable;
}

export function dataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterToTerraform(struct?: DataInstaclustrKafkaConnectMirrorV2InstanceSourceCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    external_cluster: cdktf.listMapper(dataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalClusterToTerraform, true)(struct!.externalCluster),
    managed_cluster: cdktf.listMapper(dataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedClusterToTerraform, true)(struct!.managedCluster),
  }
}


export function dataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterToHclTerraform(struct?: DataInstaclustrKafkaConnectMirrorV2InstanceSourceCluster | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalClusterToHclTerraform, true)(struct!.externalCluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalClusterList",
    },
    managed_cluster: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedClusterToHclTerraform, true)(struct!.managedCluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectMirrorV2InstanceSourceCluster | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrKafkaConnectMirrorV2InstanceSourceCluster | cdktf.IResolvable | undefined) {
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

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // external_cluster - computed: false, optional: true, required: false
  private _externalCluster = new DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalClusterList(this, "external_cluster", false);
  public get externalCluster() {
    return this._externalCluster;
  }
  public putExternalCluster(value: DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterExternalCluster[] | cdktf.IResolvable) {
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
  private _managedCluster = new DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedClusterList(this, "managed_cluster", false);
  public get managedCluster() {
    return this._managedCluster;
  }
  public putManagedCluster(value: DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterManagedCluster[] | cdktf.IResolvable) {
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

export class DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectMirrorV2InstanceSourceCluster[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterOutputReference {
    return new DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance instaclustr_kafka_connect_mirror_v2_instance}
*/
export class DataInstaclustrKafkaConnectMirrorV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_connect_mirror_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrKafkaConnectMirrorV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrKafkaConnectMirrorV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrKafkaConnectMirrorV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrKafkaConnectMirrorV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_connect_mirror_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/kafka_connect_mirror_v2_instance instaclustr_kafka_connect_mirror_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrKafkaConnectMirrorV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrKafkaConnectMirrorV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_connect_mirror_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.29',
        providerVersionConstraint: '2.1.29'
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

  // kafka_connect_cluster_id - computed: true, optional: true, required: false
  private _kafkaConnectClusterId?: string; 
  public get kafkaConnectClusterId() {
    return this.getStringAttribute('kafka_connect_cluster_id');
  }
  public set kafkaConnectClusterId(value: string) {
    this._kafkaConnectClusterId = value;
  }
  public resetKafkaConnectClusterId() {
    this._kafkaConnectClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectClusterIdInput() {
    return this._kafkaConnectClusterId;
  }

  // max_tasks - computed: true, optional: true, required: false
  private _maxTasks?: number; 
  public get maxTasks() {
    return this.getNumberAttribute('max_tasks');
  }
  public set maxTasks(value: number) {
    this._maxTasks = value;
  }
  public resetMaxTasks() {
    this._maxTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTasksInput() {
    return this._maxTasks;
  }

  // rename_mirrored_topics - computed: true, optional: true, required: false
  private _renameMirroredTopics?: boolean | cdktf.IResolvable; 
  public get renameMirroredTopics() {
    return this.getBooleanAttribute('rename_mirrored_topics');
  }
  public set renameMirroredTopics(value: boolean | cdktf.IResolvable) {
    this._renameMirroredTopics = value;
  }
  public resetRenameMirroredTopics() {
    this._renameMirroredTopics = undefined;
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

  // target_latency - computed: true, optional: true, required: false
  private _targetLatency?: number; 
  public get targetLatency() {
    return this.getNumberAttribute('target_latency');
  }
  public set targetLatency(value: number) {
    this._targetLatency = value;
  }
  public resetTargetLatency() {
    this._targetLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLatencyInput() {
    return this._targetLatency;
  }

  // topics_regex - computed: true, optional: true, required: false
  private _topicsRegex?: string; 
  public get topicsRegex() {
    return this.getStringAttribute('topics_regex');
  }
  public set topicsRegex(value: string) {
    this._topicsRegex = value;
  }
  public resetTopicsRegex() {
    this._topicsRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsRegexInput() {
    return this._topicsRegex;
  }

  // connectors - computed: false, optional: true, required: false
  private _connectors = new DataInstaclustrKafkaConnectMirrorV2InstanceConnectorsList(this, "connectors", false);
  public get connectors() {
    return this._connectors;
  }
  public putConnectors(value: DataInstaclustrKafkaConnectMirrorV2InstanceConnectors[] | cdktf.IResolvable) {
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
  private _mirroredTopics = new DataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopicsList(this, "mirrored_topics", false);
  public get mirroredTopics() {
    return this._mirroredTopics;
  }
  public putMirroredTopics(value: DataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopics[] | cdktf.IResolvable) {
    this._mirroredTopics.internalValue = value;
  }
  public resetMirroredTopics() {
    this._mirroredTopics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroredTopicsInput() {
    return this._mirroredTopics.internalValue;
  }

  // source_cluster - computed: false, optional: true, required: false
  private _sourceCluster = new DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterList(this, "source_cluster", false);
  public get sourceCluster() {
    return this._sourceCluster;
  }
  public putSourceCluster(value: DataInstaclustrKafkaConnectMirrorV2InstanceSourceCluster[] | cdktf.IResolvable) {
    this._sourceCluster.internalValue = value;
  }
  public resetSourceCluster() {
    this._sourceCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceClusterInput() {
    return this._sourceCluster.internalValue;
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
      connectors: cdktf.listMapper(dataInstaclustrKafkaConnectMirrorV2InstanceConnectorsToTerraform, true)(this._connectors.internalValue),
      mirrored_topics: cdktf.listMapper(dataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopicsToTerraform, true)(this._mirroredTopics.internalValue),
      source_cluster: cdktf.listMapper(dataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterToTerraform, true)(this._sourceCluster.internalValue),
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
        value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectMirrorV2InstanceConnectorsToHclTerraform, true)(this._connectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaConnectMirrorV2InstanceConnectorsList",
      },
      mirrored_topics: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopicsToHclTerraform, true)(this._mirroredTopics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaConnectMirrorV2InstanceMirroredTopicsList",
      },
      source_cluster: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterToHclTerraform, true)(this._sourceCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaConnectMirrorV2InstanceSourceClusterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
