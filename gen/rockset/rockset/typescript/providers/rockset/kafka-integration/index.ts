// https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Kafka bootstrap server url(s). Required only for V3 integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration#bootstrap_servers KafkaIntegration#bootstrap_servers}
  */
  readonly bootstrapServers?: string;
  /**
  * Kafka connection string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration#connection_string KafkaIntegration#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Text describing the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration#description KafkaIntegration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration#id KafkaIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The format of the Kafka topics being tailed. Possible values: JSON, AVRO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration#kafka_data_format KafkaIntegration#kafka_data_format}
  */
  readonly kafkaDataFormat?: string;
  /**
  * Kafka topics to tail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration#kafka_topic_names KafkaIntegration#kafka_topic_names}
  */
  readonly kafkaTopicNames?: string[];
  /**
  * Unique identifier for the integration. Can contain alphanumeric or dash characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration#name KafkaIntegration#name}
  */
  readonly name: string;
  /**
  * Kafka configuration for schema registry. Required only for V3 integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration#schema_registry_config KafkaIntegration#schema_registry_config}
  */
  readonly schemaRegistryConfig?: { [key: string]: string };
  /**
  * Kafka security configurations. Required only for V3 integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration#security_config KafkaIntegration#security_config}
  */
  readonly securityConfig?: { [key: string]: string };
  /**
  * Use v3 for Confluent Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration#use_v3 KafkaIntegration#use_v3}
  */
  readonly useV3?: boolean | cdktf.IResolvable;
  /**
  * Wait until the integration is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration#wait_for_integration KafkaIntegration#wait_for_integration}
  */
  readonly waitForIntegration?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration rockset_kafka_integration}
*/
export class KafkaIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rockset_kafka_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaIntegration to import
  * @param importFromId The id of the existing KafkaIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rockset_kafka_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_integration rockset_kafka_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'rockset_kafka_integration',
      terraformGeneratorMetadata: {
        providerName: 'rockset',
        providerVersion: '0.9.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootstrapServers = config.bootstrapServers;
    this._connectionString = config.connectionString;
    this._description = config.description;
    this._id = config.id;
    this._kafkaDataFormat = config.kafkaDataFormat;
    this._kafkaTopicNames = config.kafkaTopicNames;
    this._name = config.name;
    this._schemaRegistryConfig = config.schemaRegistryConfig;
    this._securityConfig = config.securityConfig;
    this._useV3 = config.useV3;
    this._waitForIntegration = config.waitForIntegration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bootstrap_servers - computed: false, optional: true, required: false
  private _bootstrapServers?: string; 
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string) {
    this._bootstrapServers = value;
  }
  public resetBootstrapServers() {
    this._bootstrapServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // connection_string - computed: true, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
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

  // kafka_data_format - computed: false, optional: true, required: false
  private _kafkaDataFormat?: string; 
  public get kafkaDataFormat() {
    return this.getStringAttribute('kafka_data_format');
  }
  public set kafkaDataFormat(value: string) {
    this._kafkaDataFormat = value;
  }
  public resetKafkaDataFormat() {
    this._kafkaDataFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaDataFormatInput() {
    return this._kafkaDataFormat;
  }

  // kafka_topic_names - computed: false, optional: true, required: false
  private _kafkaTopicNames?: string[]; 
  public get kafkaTopicNames() {
    return cdktf.Fn.tolist(this.getListAttribute('kafka_topic_names'));
  }
  public set kafkaTopicNames(value: string[]) {
    this._kafkaTopicNames = value;
  }
  public resetKafkaTopicNames() {
    this._kafkaTopicNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaTopicNamesInput() {
    return this._kafkaTopicNames;
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

  // schema_registry_config - computed: false, optional: true, required: false
  private _schemaRegistryConfig?: { [key: string]: string }; 
  public get schemaRegistryConfig() {
    return this.getStringMapAttribute('schema_registry_config');
  }
  public set schemaRegistryConfig(value: { [key: string]: string }) {
    this._schemaRegistryConfig = value;
  }
  public resetSchemaRegistryConfig() {
    this._schemaRegistryConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryConfigInput() {
    return this._schemaRegistryConfig;
  }

  // security_config - computed: false, optional: true, required: false
  private _securityConfig?: { [key: string]: string }; 
  public get securityConfig() {
    return this.getStringMapAttribute('security_config');
  }
  public set securityConfig(value: { [key: string]: string }) {
    this._securityConfig = value;
  }
  public resetSecurityConfig() {
    this._securityConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigInput() {
    return this._securityConfig;
  }

  // use_v3 - computed: false, optional: true, required: false
  private _useV3?: boolean | cdktf.IResolvable; 
  public get useV3() {
    return this.getBooleanAttribute('use_v3');
  }
  public set useV3(value: boolean | cdktf.IResolvable) {
    this._useV3 = value;
  }
  public resetUseV3() {
    this._useV3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useV3Input() {
    return this._useV3;
  }

  // wait_for_integration - computed: false, optional: true, required: false
  private _waitForIntegration?: boolean | cdktf.IResolvable; 
  public get waitForIntegration() {
    return this.getBooleanAttribute('wait_for_integration');
  }
  public set waitForIntegration(value: boolean | cdktf.IResolvable) {
    this._waitForIntegration = value;
  }
  public resetWaitForIntegration() {
    this._waitForIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForIntegrationInput() {
    return this._waitForIntegration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bootstrap_servers: cdktf.stringToTerraform(this._bootstrapServers),
      connection_string: cdktf.stringToTerraform(this._connectionString),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kafka_data_format: cdktf.stringToTerraform(this._kafkaDataFormat),
      kafka_topic_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._kafkaTopicNames),
      name: cdktf.stringToTerraform(this._name),
      schema_registry_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._schemaRegistryConfig),
      security_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityConfig),
      use_v3: cdktf.booleanToTerraform(this._useV3),
      wait_for_integration: cdktf.booleanToTerraform(this._waitForIntegration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bootstrap_servers: {
        value: cdktf.stringToHclTerraform(this._bootstrapServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_string: {
        value: cdktf.stringToHclTerraform(this._connectionString),
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
      kafka_data_format: {
        value: cdktf.stringToHclTerraform(this._kafkaDataFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_topic_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._kafkaTopicNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_registry_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._schemaRegistryConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      security_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      use_v3: {
        value: cdktf.booleanToHclTerraform(this._useV3),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_integration: {
        value: cdktf.booleanToHclTerraform(this._waitForIntegration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
