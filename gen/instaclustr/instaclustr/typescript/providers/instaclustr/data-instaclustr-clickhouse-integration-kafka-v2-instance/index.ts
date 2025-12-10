// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/clickhouse_integration_kafka_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrClickhouseIntegrationKafkaV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the ClickHouse cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/clickhouse_integration_kafka_v2_instance#cluster_id DataInstaclustrClickhouseIntegrationKafkaV2Instance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/clickhouse_integration_kafka_v2_instance#id DataInstaclustrClickhouseIntegrationKafkaV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name of of named collection used for the Kafka table integration config. Format: kafka-cluster-<integration-id>_topic_<topic-name>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/clickhouse_integration_kafka_v2_instance#named_collection DataInstaclustrClickhouseIntegrationKafkaV2Instance#named_collection}
  */
  readonly namedCollection?: string;
  /**
  * Status of the Kafka Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/clickhouse_integration_kafka_v2_instance#status DataInstaclustrClickhouseIntegrationKafkaV2Instance#status}
  */
  readonly status?: string;
  /**
  * kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/clickhouse_integration_kafka_v2_instance#kafka_cluster DataInstaclustrClickhouseIntegrationKafkaV2Instance#kafka_cluster}
  */
  readonly kafkaCluster?: DataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaCluster;
}
export interface DataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaCluster {
  /**
  * Format of the Kafka message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/clickhouse_integration_kafka_v2_instance#format DataInstaclustrClickhouseIntegrationKafkaV2Instance#format}
  */
  readonly format?: string;
  /**
  * ID of the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/clickhouse_integration_kafka_v2_instance#id DataInstaclustrClickhouseIntegrationKafkaV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Kafka topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/clickhouse_integration_kafka_v2_instance#topic_name DataInstaclustrClickhouseIntegrationKafkaV2Instance#topic_name}
  */
  readonly topicName?: string;
}

export function dataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaClusterToTerraform(struct?: DataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaClusterOutputReference | DataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    id: cdktf.stringToTerraform(struct!.id),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}


export function dataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaClusterToHclTerraform(struct?: DataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaClusterOutputReference | DataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
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

export class DataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._format = undefined;
      this._id = undefined;
      this._topicName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._format = value.format;
      this._id = value.id;
      this._topicName = value.topicName;
    }
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // topic_name - computed: true, optional: true, required: false
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

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/clickhouse_integration_kafka_v2_instance instaclustr_clickhouse_integration_kafka_v2_instance}
*/
export class DataInstaclustrClickhouseIntegrationKafkaV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_clickhouse_integration_kafka_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrClickhouseIntegrationKafkaV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrClickhouseIntegrationKafkaV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrClickhouseIntegrationKafkaV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/clickhouse_integration_kafka_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrClickhouseIntegrationKafkaV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_clickhouse_integration_kafka_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/clickhouse_integration_kafka_v2_instance instaclustr_clickhouse_integration_kafka_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrClickhouseIntegrationKafkaV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrClickhouseIntegrationKafkaV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_clickhouse_integration_kafka_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.34',
        providerVersionConstraint: '2.1.34'
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
    this._id = config.id;
    this._namedCollection = config.namedCollection;
    this._status = config.status;
    this._kafkaCluster.internalValue = config.kafkaCluster;
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

  // named_collection - computed: true, optional: true, required: false
  private _namedCollection?: string; 
  public get namedCollection() {
    return this.getStringAttribute('named_collection');
  }
  public set namedCollection(value: string) {
    this._namedCollection = value;
  }
  public resetNamedCollection() {
    this._namedCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedCollectionInput() {
    return this._namedCollection;
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

  // kafka_cluster - computed: false, optional: true, required: false
  private _kafkaCluster = new DataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaClusterOutputReference(this, "kafka_cluster");
  public get kafkaCluster() {
    return this._kafkaCluster;
  }
  public putKafkaCluster(value: DataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaCluster) {
    this._kafkaCluster.internalValue = value;
  }
  public resetKafkaCluster() {
    this._kafkaCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterInput() {
    return this._kafkaCluster.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      named_collection: cdktf.stringToTerraform(this._namedCollection),
      status: cdktf.stringToTerraform(this._status),
      kafka_cluster: dataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaClusterToTerraform(this._kafkaCluster.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      named_collection: {
        value: cdktf.stringToHclTerraform(this._namedCollection),
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
      kafka_cluster: {
        value: dataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaClusterToHclTerraform(this._kafkaCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrClickhouseIntegrationKafkaV2InstanceKafkaClusterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
