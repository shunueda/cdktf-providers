// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_amqp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UseractionsSubscriptionAmqpConfig extends cdktf.TerraformMetaArguments {
  /**
  * A connection string of the following structure "scheme://username:password@host:port/virtual_host".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_amqp#connection_string UseractionsSubscriptionAmqp#connection_string}
  */
  readonly connectionString: string;
  /**
  * Exchange name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_amqp#exchange UseractionsSubscriptionAmqp#exchange}
  */
  readonly exchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_amqp#id UseractionsSubscriptionAmqp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set to true if you would like to receive user action logs of all clients with reseller_id matching the current client_id. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_amqp#receive_child_client_events UseractionsSubscriptionAmqp#receive_child_client_events}
  */
  readonly receiveChildClientEvents?: boolean | cdktf.IResolvable;
  /**
  * Routing key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_amqp#routing_key UseractionsSubscriptionAmqp#routing_key}
  */
  readonly routingKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_amqp edgecenter_useractions_subscription_amqp}
*/
export class UseractionsSubscriptionAmqp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_useractions_subscription_amqp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UseractionsSubscriptionAmqp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UseractionsSubscriptionAmqp to import
  * @param importFromId The id of the existing UseractionsSubscriptionAmqp that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_amqp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UseractionsSubscriptionAmqp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_useractions_subscription_amqp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/useractions_subscription_amqp edgecenter_useractions_subscription_amqp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UseractionsSubscriptionAmqpConfig
  */
  public constructor(scope: Construct, id: string, config: UseractionsSubscriptionAmqpConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_useractions_subscription_amqp',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.4',
        providerVersionConstraint: '0.10.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionString = config.connectionString;
    this._exchange = config.exchange;
    this._id = config.id;
    this._receiveChildClientEvents = config.receiveChildClientEvents;
    this._routingKey = config.routingKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // exchange - computed: false, optional: true, required: false
  private _exchange?: string; 
  public get exchange() {
    return this.getStringAttribute('exchange');
  }
  public set exchange(value: string) {
    this._exchange = value;
  }
  public resetExchange() {
    this._exchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeInput() {
    return this._exchange;
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

  // receive_child_client_events - computed: false, optional: true, required: false
  private _receiveChildClientEvents?: boolean | cdktf.IResolvable; 
  public get receiveChildClientEvents() {
    return this.getBooleanAttribute('receive_child_client_events');
  }
  public set receiveChildClientEvents(value: boolean | cdktf.IResolvable) {
    this._receiveChildClientEvents = value;
  }
  public resetReceiveChildClientEvents() {
    this._receiveChildClientEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveChildClientEventsInput() {
    return this._receiveChildClientEvents;
  }

  // routing_key - computed: false, optional: true, required: false
  private _routingKey?: string; 
  public get routingKey() {
    return this.getStringAttribute('routing_key');
  }
  public set routingKey(value: string) {
    this._routingKey = value;
  }
  public resetRoutingKey() {
    this._routingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingKeyInput() {
    return this._routingKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_string: cdktf.stringToTerraform(this._connectionString),
      exchange: cdktf.stringToTerraform(this._exchange),
      id: cdktf.stringToTerraform(this._id),
      receive_child_client_events: cdktf.booleanToTerraform(this._receiveChildClientEvents),
      routing_key: cdktf.stringToTerraform(this._routingKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_string: {
        value: cdktf.stringToHclTerraform(this._connectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exchange: {
        value: cdktf.stringToHclTerraform(this._exchange),
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
      receive_child_client_events: {
        value: cdktf.booleanToHclTerraform(this._receiveChildClientEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routing_key: {
        value: cdktf.stringToHclTerraform(this._routingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
