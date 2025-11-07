// https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * A map of string k/v properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/quota#config Quota#config}
  */
  readonly config?: { [key: string]: number };
  /**
  * The name of the entity (if entity_name is not provided, it will create entity-default Kafka quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/quota#entity_name Quota#entity_name}
  */
  readonly entityName?: string;
  /**
  * The type of the entity (client-id, user, ip)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/quota#entity_type Quota#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/quota#id Quota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/quota kafka_quota}
*/
export class Quota extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kafka_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Quota resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Quota to import
  * @param importFromId The id of the existing Quota that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Quota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kafka_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/quota kafka_quota} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuotaConfig
  */
  public constructor(scope: Construct, id: string, config: QuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'kafka_quota',
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
    this._entityName = config.entityName;
    this._entityType = config.entityType;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: number }; 
  public get config() {
    return this.getNumberMapAttribute('config');
  }
  public set config(value: { [key: string]: number }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // entity_name - computed: false, optional: true, required: false
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  public resetEntityName() {
    this._entityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.hashMapper(cdktf.numberToTerraform)(this._config),
      entity_name: cdktf.stringToTerraform(this._entityName),
      entity_type: cdktf.stringToTerraform(this._entityType),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(this._config),
        isBlock: false,
        type: "map",
        storageClassType: "numberMap",
      },
      entity_name: {
        value: cdktf.stringToHclTerraform(this._entityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
