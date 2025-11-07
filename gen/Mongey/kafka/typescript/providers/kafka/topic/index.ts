// https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * A map of string k/v attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/topic#config Topic#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/topic#id Topic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/topic#name Topic#name}
  */
  readonly name: string;
  /**
  * Number of partitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/topic#partitions Topic#partitions}
  */
  readonly partitions: number;
  /**
  * Number of replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/topic#replication_factor Topic#replication_factor}
  */
  readonly replicationFactor: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/topic kafka_topic}
*/
export class Topic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kafka_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Topic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Topic to import
  * @param importFromId The id of the existing Topic that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Topic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kafka_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/topic kafka_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TopicConfig
  */
  public constructor(scope: Construct, id: string, config: TopicConfig) {
    super(scope, id, {
      terraformResourceType: 'kafka_topic',
      terraformGeneratorMetadata: {
        providerName: 'kafka',
        providerVersion: '0.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._id = config.id;
    this._name = config.name;
    this._partitions = config.partitions;
    this._replicationFactor = config.replicationFactor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // partitions - computed: false, optional: false, required: true
  private _partitions?: number; 
  public get partitions() {
    return this.getNumberAttribute('partitions');
  }
  public set partitions(value: number) {
    this._partitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions;
  }

  // replication_factor - computed: false, optional: false, required: true
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      partitions: cdktf.numberToTerraform(this._partitions),
      replication_factor: cdktf.numberToTerraform(this._replicationFactor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._config),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      partitions: {
        value: cdktf.numberToHclTerraform(this._partitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_factor: {
        value: cdktf.numberToHclTerraform(this._replicationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
