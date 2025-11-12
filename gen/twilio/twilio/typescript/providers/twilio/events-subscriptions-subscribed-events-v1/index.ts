// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_subscriptions_subscribed_events_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventsSubscriptionsSubscribedEventsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_subscriptions_subscribed_events_v1#id EventsSubscriptionsSubscribedEventsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_subscriptions_subscribed_events_v1#schema_version EventsSubscriptionsSubscribedEventsV1#schema_version}
  */
  readonly schemaVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_subscriptions_subscribed_events_v1#subscription_sid EventsSubscriptionsSubscribedEventsV1#subscription_sid}
  */
  readonly subscriptionSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_subscriptions_subscribed_events_v1#type EventsSubscriptionsSubscribedEventsV1#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_subscriptions_subscribed_events_v1 twilio_events_subscriptions_subscribed_events_v1}
*/
export class EventsSubscriptionsSubscribedEventsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_events_subscriptions_subscribed_events_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventsSubscriptionsSubscribedEventsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventsSubscriptionsSubscribedEventsV1 to import
  * @param importFromId The id of the existing EventsSubscriptionsSubscribedEventsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_subscriptions_subscribed_events_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventsSubscriptionsSubscribedEventsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_events_subscriptions_subscribed_events_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_subscriptions_subscribed_events_v1 twilio_events_subscriptions_subscribed_events_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventsSubscriptionsSubscribedEventsV1Config
  */
  public constructor(scope: Construct, id: string, config: EventsSubscriptionsSubscribedEventsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_events_subscriptions_subscribed_events_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._schemaVersion = config.schemaVersion;
    this._subscriptionSid = config.subscriptionSid;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // schema_version - computed: true, optional: true, required: false
  private _schemaVersion?: number; 
  public get schemaVersion() {
    return this.getNumberAttribute('schema_version');
  }
  public set schemaVersion(value: number) {
    this._schemaVersion = value;
  }
  public resetSchemaVersion() {
    this._schemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionInput() {
    return this._schemaVersion;
  }

  // subscription_sid - computed: false, optional: false, required: true
  private _subscriptionSid?: string; 
  public get subscriptionSid() {
    return this.getStringAttribute('subscription_sid');
  }
  public set subscriptionSid(value: string) {
    this._subscriptionSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionSidInput() {
    return this._subscriptionSid;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      schema_version: cdktf.numberToTerraform(this._schemaVersion),
      subscription_sid: cdktf.stringToTerraform(this._subscriptionSid),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_version: {
        value: cdktf.numberToHclTerraform(this._schemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subscription_sid: {
        value: cdktf.stringToHclTerraform(this._subscriptionSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
