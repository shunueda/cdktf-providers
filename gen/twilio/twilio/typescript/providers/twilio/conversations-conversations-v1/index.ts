// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConversationsConversationsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1#attributes ConversationsConversationsV1#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1#bindings_email_address ConversationsConversationsV1#bindings_email_address}
  */
  readonly bindingsEmailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1#bindings_email_name ConversationsConversationsV1#bindings_email_name}
  */
  readonly bindingsEmailName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1#date_created ConversationsConversationsV1#date_created}
  */
  readonly dateCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1#date_updated ConversationsConversationsV1#date_updated}
  */
  readonly dateUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1#friendly_name ConversationsConversationsV1#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1#id ConversationsConversationsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1#messaging_service_sid ConversationsConversationsV1#messaging_service_sid}
  */
  readonly messagingServiceSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1#state ConversationsConversationsV1#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1#timers_closed ConversationsConversationsV1#timers_closed}
  */
  readonly timersClosed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1#timers_inactive ConversationsConversationsV1#timers_inactive}
  */
  readonly timersInactive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1#unique_name ConversationsConversationsV1#unique_name}
  */
  readonly uniqueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1#x_twilio_webhook_enabled ConversationsConversationsV1#x_twilio_webhook_enabled}
  */
  readonly xTwilioWebhookEnabled?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1 twilio_conversations_conversations_v1}
*/
export class ConversationsConversationsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_conversations_conversations_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConversationsConversationsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConversationsConversationsV1 to import
  * @param importFromId The id of the existing ConversationsConversationsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConversationsConversationsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_conversations_conversations_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_v1 twilio_conversations_conversations_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConversationsConversationsV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: ConversationsConversationsV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'twilio_conversations_conversations_v1',
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
    this._attributes = config.attributes;
    this._bindingsEmailAddress = config.bindingsEmailAddress;
    this._bindingsEmailName = config.bindingsEmailName;
    this._dateCreated = config.dateCreated;
    this._dateUpdated = config.dateUpdated;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._messagingServiceSid = config.messagingServiceSid;
    this._state = config.state;
    this._timersClosed = config.timersClosed;
    this._timersInactive = config.timersInactive;
    this._uniqueName = config.uniqueName;
    this._xTwilioWebhookEnabled = config.xTwilioWebhookEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // bindings_email_address - computed: true, optional: true, required: false
  private _bindingsEmailAddress?: string; 
  public get bindingsEmailAddress() {
    return this.getStringAttribute('bindings_email_address');
  }
  public set bindingsEmailAddress(value: string) {
    this._bindingsEmailAddress = value;
  }
  public resetBindingsEmailAddress() {
    this._bindingsEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsEmailAddressInput() {
    return this._bindingsEmailAddress;
  }

  // bindings_email_name - computed: true, optional: true, required: false
  private _bindingsEmailName?: string; 
  public get bindingsEmailName() {
    return this.getStringAttribute('bindings_email_name');
  }
  public set bindingsEmailName(value: string) {
    this._bindingsEmailName = value;
  }
  public resetBindingsEmailName() {
    this._bindingsEmailName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsEmailNameInput() {
    return this._bindingsEmailName;
  }

  // date_created - computed: true, optional: true, required: false
  private _dateCreated?: string; 
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }
  public set dateCreated(value: string) {
    this._dateCreated = value;
  }
  public resetDateCreated() {
    this._dateCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateCreatedInput() {
    return this._dateCreated;
  }

  // date_updated - computed: true, optional: true, required: false
  private _dateUpdated?: string; 
  public get dateUpdated() {
    return this.getStringAttribute('date_updated');
  }
  public set dateUpdated(value: string) {
    this._dateUpdated = value;
  }
  public resetDateUpdated() {
    this._dateUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateUpdatedInput() {
    return this._dateUpdated;
  }

  // friendly_name - computed: true, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // messaging_service_sid - computed: true, optional: true, required: false
  private _messagingServiceSid?: string; 
  public get messagingServiceSid() {
    return this.getStringAttribute('messaging_service_sid');
  }
  public set messagingServiceSid(value: string) {
    this._messagingServiceSid = value;
  }
  public resetMessagingServiceSid() {
    this._messagingServiceSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingServiceSidInput() {
    return this._messagingServiceSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // timers_closed - computed: true, optional: true, required: false
  private _timersClosed?: string; 
  public get timersClosed() {
    return this.getStringAttribute('timers_closed');
  }
  public set timersClosed(value: string) {
    this._timersClosed = value;
  }
  public resetTimersClosed() {
    this._timersClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersClosedInput() {
    return this._timersClosed;
  }

  // timers_inactive - computed: true, optional: true, required: false
  private _timersInactive?: string; 
  public get timersInactive() {
    return this.getStringAttribute('timers_inactive');
  }
  public set timersInactive(value: string) {
    this._timersInactive = value;
  }
  public resetTimersInactive() {
    this._timersInactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersInactiveInput() {
    return this._timersInactive;
  }

  // unique_name - computed: true, optional: true, required: false
  private _uniqueName?: string; 
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }
  public set uniqueName(value: string) {
    this._uniqueName = value;
  }
  public resetUniqueName() {
    this._uniqueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueNameInput() {
    return this._uniqueName;
  }

  // x_twilio_webhook_enabled - computed: true, optional: true, required: false
  private _xTwilioWebhookEnabled?: string; 
  public get xTwilioWebhookEnabled() {
    return this.getStringAttribute('x_twilio_webhook_enabled');
  }
  public set xTwilioWebhookEnabled(value: string) {
    this._xTwilioWebhookEnabled = value;
  }
  public resetXTwilioWebhookEnabled() {
    this._xTwilioWebhookEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xTwilioWebhookEnabledInput() {
    return this._xTwilioWebhookEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.stringToTerraform(this._attributes),
      bindings_email_address: cdktf.stringToTerraform(this._bindingsEmailAddress),
      bindings_email_name: cdktf.stringToTerraform(this._bindingsEmailName),
      date_created: cdktf.stringToTerraform(this._dateCreated),
      date_updated: cdktf.stringToTerraform(this._dateUpdated),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      messaging_service_sid: cdktf.stringToTerraform(this._messagingServiceSid),
      state: cdktf.stringToTerraform(this._state),
      timers_closed: cdktf.stringToTerraform(this._timersClosed),
      timers_inactive: cdktf.stringToTerraform(this._timersInactive),
      unique_name: cdktf.stringToTerraform(this._uniqueName),
      x_twilio_webhook_enabled: cdktf.stringToTerraform(this._xTwilioWebhookEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bindings_email_address: {
        value: cdktf.stringToHclTerraform(this._bindingsEmailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bindings_email_name: {
        value: cdktf.stringToHclTerraform(this._bindingsEmailName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_created: {
        value: cdktf.stringToHclTerraform(this._dateCreated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_updated: {
        value: cdktf.stringToHclTerraform(this._dateUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      messaging_service_sid: {
        value: cdktf.stringToHclTerraform(this._messagingServiceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timers_closed: {
        value: cdktf.stringToHclTerraform(this._timersClosed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timers_inactive: {
        value: cdktf.stringToHclTerraform(this._timersInactive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unique_name: {
        value: cdktf.stringToHclTerraform(this._uniqueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x_twilio_webhook_enabled: {
        value: cdktf.stringToHclTerraform(this._xTwilioWebhookEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
