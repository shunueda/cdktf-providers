// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickhouseIntegrationKafkaV2Config extends cdktf.TerraformMetaArguments {
  /**
  * ID of the ClickHouse cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2#cluster_id ClickhouseIntegrationKafkaV2#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2#id ClickhouseIntegrationKafkaV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of of named collection used for the Kafka table integration config. Format: kafka-cluster-<integration-id>_topic_<topic-name>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2#named_collection ClickhouseIntegrationKafkaV2#named_collection}
  */
  readonly namedCollection?: string;
  /**
  * Status of the Kafka Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2#status ClickhouseIntegrationKafkaV2#status}
  */
  readonly status?: string;
  /**
  * kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2#kafka_cluster ClickhouseIntegrationKafkaV2#kafka_cluster}
  */
  readonly kafkaCluster: ClickhouseIntegrationKafkaV2KafkaCluster;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2#timeouts ClickhouseIntegrationKafkaV2#timeouts}
  */
  readonly timeouts?: ClickhouseIntegrationKafkaV2Timeouts;
}
export interface ClickhouseIntegrationKafkaV2KafkaCluster {
  /**
  * Format of the Kafka message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2#format ClickhouseIntegrationKafkaV2#format}
  */
  readonly format?: string;
  /**
  * ID of the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2#id ClickhouseIntegrationKafkaV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Kafka topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2#topic_name ClickhouseIntegrationKafkaV2#topic_name}
  */
  readonly topicName?: string;
}

export function clickhouseIntegrationKafkaV2KafkaClusterToTerraform(struct?: ClickhouseIntegrationKafkaV2KafkaClusterOutputReference | ClickhouseIntegrationKafkaV2KafkaCluster): any {
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


export function clickhouseIntegrationKafkaV2KafkaClusterToHclTerraform(struct?: ClickhouseIntegrationKafkaV2KafkaClusterOutputReference | ClickhouseIntegrationKafkaV2KafkaCluster): any {
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

export class ClickhouseIntegrationKafkaV2KafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClickhouseIntegrationKafkaV2KafkaCluster | undefined {
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

  public set internalValue(value: ClickhouseIntegrationKafkaV2KafkaCluster | undefined) {
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

  // format - computed: false, optional: true, required: false
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

  // id - computed: false, optional: true, required: false
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
export interface ClickhouseIntegrationKafkaV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2#create ClickhouseIntegrationKafkaV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2#default ClickhouseIntegrationKafkaV2#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2#delete ClickhouseIntegrationKafkaV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2#read ClickhouseIntegrationKafkaV2#read}
  */
  readonly read?: string;
}

export function clickhouseIntegrationKafkaV2TimeoutsToTerraform(struct?: ClickhouseIntegrationKafkaV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function clickhouseIntegrationKafkaV2TimeoutsToHclTerraform(struct?: ClickhouseIntegrationKafkaV2Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseIntegrationKafkaV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickhouseIntegrationKafkaV2Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseIntegrationKafkaV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2 instaclustr_clickhouse_integration_kafka_v2}
*/
export class ClickhouseIntegrationKafkaV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_clickhouse_integration_kafka_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClickhouseIntegrationKafkaV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClickhouseIntegrationKafkaV2 to import
  * @param importFromId The id of the existing ClickhouseIntegrationKafkaV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClickhouseIntegrationKafkaV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_clickhouse_integration_kafka_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/clickhouse_integration_kafka_v2 instaclustr_clickhouse_integration_kafka_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickhouseIntegrationKafkaV2Config
  */
  public constructor(scope: Construct, id: string, config: ClickhouseIntegrationKafkaV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_clickhouse_integration_kafka_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.28',
        providerVersionConstraint: '2.1.28'
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // kafka_cluster - computed: false, optional: false, required: true
  private _kafkaCluster = new ClickhouseIntegrationKafkaV2KafkaClusterOutputReference(this, "kafka_cluster");
  public get kafkaCluster() {
    return this._kafkaCluster;
  }
  public putKafkaCluster(value: ClickhouseIntegrationKafkaV2KafkaCluster) {
    this._kafkaCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterInput() {
    return this._kafkaCluster.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClickhouseIntegrationKafkaV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClickhouseIntegrationKafkaV2Timeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      named_collection: cdktf.stringToTerraform(this._namedCollection),
      status: cdktf.stringToTerraform(this._status),
      kafka_cluster: clickhouseIntegrationKafkaV2KafkaClusterToTerraform(this._kafkaCluster.internalValue),
      timeouts: clickhouseIntegrationKafkaV2TimeoutsToTerraform(this._timeouts.internalValue),
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
        value: clickhouseIntegrationKafkaV2KafkaClusterToHclTerraform(this._kafkaCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseIntegrationKafkaV2KafkaClusterList",
      },
      timeouts: {
        value: clickhouseIntegrationKafkaV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClickhouseIntegrationKafkaV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
