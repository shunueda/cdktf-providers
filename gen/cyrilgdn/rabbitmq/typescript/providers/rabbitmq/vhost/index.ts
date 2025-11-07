// https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/vhost
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VhostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/vhost#default_queue_type Vhost#default_queue_type}
  */
  readonly defaultQueueType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/vhost#description Vhost#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/vhost#id Vhost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/vhost#max_connections Vhost#max_connections}
  */
  readonly maxConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/vhost#max_queues Vhost#max_queues}
  */
  readonly maxQueues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/vhost#name Vhost#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/vhost#tracing Vhost#tracing}
  */
  readonly tracing?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/vhost rabbitmq_vhost}
*/
export class Vhost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rabbitmq_vhost";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vhost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vhost to import
  * @param importFromId The id of the existing Vhost that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/vhost#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vhost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rabbitmq_vhost", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/vhost rabbitmq_vhost} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VhostConfig
  */
  public constructor(scope: Construct, id: string, config: VhostConfig) {
    super(scope, id, {
      terraformResourceType: 'rabbitmq_vhost',
      terraformGeneratorMetadata: {
        providerName: 'rabbitmq',
        providerVersion: '1.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultQueueType = config.defaultQueueType;
    this._description = config.description;
    this._id = config.id;
    this._maxConnections = config.maxConnections;
    this._maxQueues = config.maxQueues;
    this._name = config.name;
    this._tracing = config.tracing;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_queue_type - computed: false, optional: true, required: false
  private _defaultQueueType?: string; 
  public get defaultQueueType() {
    return this.getStringAttribute('default_queue_type');
  }
  public set defaultQueueType(value: string) {
    this._defaultQueueType = value;
  }
  public resetDefaultQueueType() {
    this._defaultQueueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQueueTypeInput() {
    return this._defaultQueueType;
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

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: string; 
  public get maxConnections() {
    return this.getStringAttribute('max_connections');
  }
  public set maxConnections(value: string) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_queues - computed: false, optional: true, required: false
  private _maxQueues?: string; 
  public get maxQueues() {
    return this.getStringAttribute('max_queues');
  }
  public set maxQueues(value: string) {
    this._maxQueues = value;
  }
  public resetMaxQueues() {
    this._maxQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQueuesInput() {
    return this._maxQueues;
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

  // tracing - computed: false, optional: true, required: false
  private _tracing?: boolean | cdktf.IResolvable; 
  public get tracing() {
    return this.getBooleanAttribute('tracing');
  }
  public set tracing(value: boolean | cdktf.IResolvable) {
    this._tracing = value;
  }
  public resetTracing() {
    this._tracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_queue_type: cdktf.stringToTerraform(this._defaultQueueType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      max_connections: cdktf.stringToTerraform(this._maxConnections),
      max_queues: cdktf.stringToTerraform(this._maxQueues),
      name: cdktf.stringToTerraform(this._name),
      tracing: cdktf.booleanToTerraform(this._tracing),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_queue_type: {
        value: cdktf.stringToHclTerraform(this._defaultQueueType),
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
      max_connections: {
        value: cdktf.stringToHclTerraform(this._maxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_queues: {
        value: cdktf.stringToHclTerraform(this._maxQueues),
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
      tracing: {
        value: cdktf.booleanToHclTerraform(this._tracing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
