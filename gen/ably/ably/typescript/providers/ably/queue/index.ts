// https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/queue#app_id Queue#app_id}
  */
  readonly appId: string;
  /**
  * Message limit in number of messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/queue#max_length Queue#max_length}
  */
  readonly maxLength: number;
  /**
  * The name of the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/queue#name Queue#name}
  */
  readonly name: string;
  /**
  * The data center region. US East (Virginia) or EU West (Ireland). Values are us-east-1-a or eu-west-1-a.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/queue#region Queue#region}
  */
  readonly region: string;
  /**
  * Time to live in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/queue#ttl Queue#ttl}
  */
  readonly ttl: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/queue ably_queue}
*/
export class Queue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ably_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Queue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Queue to import
  * @param importFromId The id of the existing Queue that should be imported. Refer to the {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Queue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ably_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/queue ably_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QueueConfig
  */
  public constructor(scope: Construct, id: string, config: QueueConfig) {
    super(scope, id, {
      terraformResourceType: 'ably_queue',
      terraformGeneratorMetadata: {
        providerName: 'ably',
        providerVersion: '0.11.1',
        providerVersionConstraint: '0.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._maxLength = config.maxLength;
    this._name = config.name;
    this._region = config.region;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amqp_queue_name - computed: true, optional: false, required: false
  public get amqpQueueName() {
    return this.getStringAttribute('amqp_queue_name');
  }

  // amqp_uri - computed: true, optional: false, required: false
  public get amqpUri() {
    return this.getStringAttribute('amqp_uri');
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // deadletter - computed: true, optional: false, required: false
  public get deadletter() {
    return this.getBooleanAttribute('deadletter');
  }

  // deadletter_id - computed: true, optional: false, required: false
  public get deadletterId() {
    return this.getStringAttribute('deadletter_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_length - computed: false, optional: false, required: true
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // messages_ready - computed: true, optional: false, required: false
  public get messagesReady() {
    return this.getNumberAttribute('messages_ready');
  }

  // messages_total - computed: true, optional: false, required: false
  public get messagesTotal() {
    return this.getNumberAttribute('messages_total');
  }

  // messages_unacknowledged - computed: true, optional: false, required: false
  public get messagesUnacknowledged() {
    return this.getNumberAttribute('messages_unacknowledged');
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stats_acknowledgement_rate - computed: true, optional: false, required: false
  public get statsAcknowledgementRate() {
    return this.getNumberAttribute('stats_acknowledgement_rate');
  }

  // stats_delivery_rate - computed: true, optional: false, required: false
  public get statsDeliveryRate() {
    return this.getNumberAttribute('stats_delivery_rate');
  }

  // stats_publish_rate - computed: true, optional: false, required: false
  public get statsPublishRate() {
    return this.getNumberAttribute('stats_publish_rate');
  }

  // stomp_destination - computed: true, optional: false, required: false
  public get stompDestination() {
    return this.getStringAttribute('stomp_destination');
  }

  // stomp_host - computed: true, optional: false, required: false
  public get stompHost() {
    return this.getStringAttribute('stomp_host');
  }

  // stomp_uri - computed: true, optional: false, required: false
  public get stompUri() {
    return this.getStringAttribute('stomp_uri');
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      max_length: cdktf.numberToTerraform(this._maxLength),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_length: {
        value: cdktf.numberToHclTerraform(this._maxLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
