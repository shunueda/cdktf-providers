// https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_kafka
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationKafkaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The format to use when writing data to kafka
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_kafka#destination_format DestinationKafka#destination_format}
  */
  readonly destinationFormat?: string;
  /**
  * Include schema in json message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_kafka#json_schema_enable DestinationKafka#json_schema_enable}
  */
  readonly jsonSchemaEnable?: boolean | cdktf.IResolvable;
  /**
  * A comma-separated list of host and port pairs that are the addresses of the Destination Kafka brokers. This list should be in the form host1:port1,host2:port2,...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_kafka#kafka_sink_bootstrap DestinationKafka#kafka_sink_bootstrap}
  */
  readonly kafkaSinkBootstrap: string;
  /**
  * Destination name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_kafka#name DestinationKafka#name}
  */
  readonly name: string;
  /**
  * Kafka Hostname Or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_kafka#schema_registry_url DestinationKafka#schema_registry_url}
  */
  readonly schemaRegistryUrl?: string;
  /**
  * The maximum number of active task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_kafka#tasks_max DestinationKafka#tasks_max}
  */
  readonly tasksMax?: number;
  /**
  * Prefix for destination topics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_kafka#topic_prefix DestinationKafka#topic_prefix}
  */
  readonly topicPrefix?: string;
  /**
  * Suffix for destination topics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_kafka#topic_suffix DestinationKafka#topic_suffix}
  */
  readonly topicSuffix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_kafka streamkap_destination_kafka}
*/
export class DestinationKafka extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "streamkap_destination_kafka";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationKafka resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationKafka to import
  * @param importFromId The id of the existing DestinationKafka that should be imported. Refer to the {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_kafka#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationKafka to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "streamkap_destination_kafka", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_kafka streamkap_destination_kafka} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationKafkaConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationKafkaConfig) {
    super(scope, id, {
      terraformResourceType: 'streamkap_destination_kafka',
      terraformGeneratorMetadata: {
        providerName: 'streamkap',
        providerVersion: '2.1.17',
        providerVersionConstraint: '2.1.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationFormat = config.destinationFormat;
    this._jsonSchemaEnable = config.jsonSchemaEnable;
    this._kafkaSinkBootstrap = config.kafkaSinkBootstrap;
    this._name = config.name;
    this._schemaRegistryUrl = config.schemaRegistryUrl;
    this._tasksMax = config.tasksMax;
    this._topicPrefix = config.topicPrefix;
    this._topicSuffix = config.topicSuffix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector - computed: true, optional: false, required: false
  public get connector() {
    return this.getStringAttribute('connector');
  }

  // destination_format - computed: true, optional: true, required: false
  private _destinationFormat?: string; 
  public get destinationFormat() {
    return this.getStringAttribute('destination_format');
  }
  public set destinationFormat(value: string) {
    this._destinationFormat = value;
  }
  public resetDestinationFormat() {
    this._destinationFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFormatInput() {
    return this._destinationFormat;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // json_schema_enable - computed: true, optional: true, required: false
  private _jsonSchemaEnable?: boolean | cdktf.IResolvable; 
  public get jsonSchemaEnable() {
    return this.getBooleanAttribute('json_schema_enable');
  }
  public set jsonSchemaEnable(value: boolean | cdktf.IResolvable) {
    this._jsonSchemaEnable = value;
  }
  public resetJsonSchemaEnable() {
    this._jsonSchemaEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonSchemaEnableInput() {
    return this._jsonSchemaEnable;
  }

  // kafka_sink_bootstrap - computed: false, optional: false, required: true
  private _kafkaSinkBootstrap?: string; 
  public get kafkaSinkBootstrap() {
    return this.getStringAttribute('kafka_sink_bootstrap');
  }
  public set kafkaSinkBootstrap(value: string) {
    this._kafkaSinkBootstrap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSinkBootstrapInput() {
    return this._kafkaSinkBootstrap;
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

  // schema_registry_url - computed: true, optional: true, required: false
  private _schemaRegistryUrl?: string; 
  public get schemaRegistryUrl() {
    return this.getStringAttribute('schema_registry_url');
  }
  public set schemaRegistryUrl(value: string) {
    this._schemaRegistryUrl = value;
  }
  public resetSchemaRegistryUrl() {
    this._schemaRegistryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryUrlInput() {
    return this._schemaRegistryUrl;
  }

  // tasks_max - computed: true, optional: true, required: false
  private _tasksMax?: number; 
  public get tasksMax() {
    return this.getNumberAttribute('tasks_max');
  }
  public set tasksMax(value: number) {
    this._tasksMax = value;
  }
  public resetTasksMax() {
    this._tasksMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksMaxInput() {
    return this._tasksMax;
  }

  // topic_prefix - computed: true, optional: true, required: false
  private _topicPrefix?: string; 
  public get topicPrefix() {
    return this.getStringAttribute('topic_prefix');
  }
  public set topicPrefix(value: string) {
    this._topicPrefix = value;
  }
  public resetTopicPrefix() {
    this._topicPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicPrefixInput() {
    return this._topicPrefix;
  }

  // topic_suffix - computed: true, optional: true, required: false
  private _topicSuffix?: string; 
  public get topicSuffix() {
    return this.getStringAttribute('topic_suffix');
  }
  public set topicSuffix(value: string) {
    this._topicSuffix = value;
  }
  public resetTopicSuffix() {
    this._topicSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicSuffixInput() {
    return this._topicSuffix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_format: cdktf.stringToTerraform(this._destinationFormat),
      json_schema_enable: cdktf.booleanToTerraform(this._jsonSchemaEnable),
      kafka_sink_bootstrap: cdktf.stringToTerraform(this._kafkaSinkBootstrap),
      name: cdktf.stringToTerraform(this._name),
      schema_registry_url: cdktf.stringToTerraform(this._schemaRegistryUrl),
      tasks_max: cdktf.numberToTerraform(this._tasksMax),
      topic_prefix: cdktf.stringToTerraform(this._topicPrefix),
      topic_suffix: cdktf.stringToTerraform(this._topicSuffix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_format: {
        value: cdktf.stringToHclTerraform(this._destinationFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_schema_enable: {
        value: cdktf.booleanToHclTerraform(this._jsonSchemaEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kafka_sink_bootstrap: {
        value: cdktf.stringToHclTerraform(this._kafkaSinkBootstrap),
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
      schema_registry_url: {
        value: cdktf.stringToHclTerraform(this._schemaRegistryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tasks_max: {
        value: cdktf.numberToHclTerraform(this._tasksMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topic_prefix: {
        value: cdktf.stringToHclTerraform(this._topicPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_suffix: {
        value: cdktf.stringToHclTerraform(this._topicSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
