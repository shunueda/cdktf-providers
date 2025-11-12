// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConversationsConversationsParticipantsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1#attributes ConversationsConversationsParticipantsV1#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1#conversation_sid ConversationsConversationsParticipantsV1#conversation_sid}
  */
  readonly conversationSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1#date_created ConversationsConversationsParticipantsV1#date_created}
  */
  readonly dateCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1#date_updated ConversationsConversationsParticipantsV1#date_updated}
  */
  readonly dateUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1#id ConversationsConversationsParticipantsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1#identity ConversationsConversationsParticipantsV1#identity}
  */
  readonly identity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1#last_read_message_index ConversationsConversationsParticipantsV1#last_read_message_index}
  */
  readonly lastReadMessageIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1#last_read_timestamp ConversationsConversationsParticipantsV1#last_read_timestamp}
  */
  readonly lastReadTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1#messaging_binding_address ConversationsConversationsParticipantsV1#messaging_binding_address}
  */
  readonly messagingBindingAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1#messaging_binding_projected_address ConversationsConversationsParticipantsV1#messaging_binding_projected_address}
  */
  readonly messagingBindingProjectedAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1#messaging_binding_proxy_address ConversationsConversationsParticipantsV1#messaging_binding_proxy_address}
  */
  readonly messagingBindingProxyAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1#role_sid ConversationsConversationsParticipantsV1#role_sid}
  */
  readonly roleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1#x_twilio_webhook_enabled ConversationsConversationsParticipantsV1#x_twilio_webhook_enabled}
  */
  readonly xTwilioWebhookEnabled?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1 twilio_conversations_conversations_participants_v1}
*/
export class ConversationsConversationsParticipantsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_conversations_conversations_participants_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConversationsConversationsParticipantsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConversationsConversationsParticipantsV1 to import
  * @param importFromId The id of the existing ConversationsConversationsParticipantsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConversationsConversationsParticipantsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_conversations_conversations_participants_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_participants_v1 twilio_conversations_conversations_participants_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConversationsConversationsParticipantsV1Config
  */
  public constructor(scope: Construct, id: string, config: ConversationsConversationsParticipantsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_conversations_conversations_participants_v1',
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
    this._conversationSid = config.conversationSid;
    this._dateCreated = config.dateCreated;
    this._dateUpdated = config.dateUpdated;
    this._id = config.id;
    this._identity = config.identity;
    this._lastReadMessageIndex = config.lastReadMessageIndex;
    this._lastReadTimestamp = config.lastReadTimestamp;
    this._messagingBindingAddress = config.messagingBindingAddress;
    this._messagingBindingProjectedAddress = config.messagingBindingProjectedAddress;
    this._messagingBindingProxyAddress = config.messagingBindingProxyAddress;
    this._roleSid = config.roleSid;
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

  // conversation_sid - computed: false, optional: false, required: true
  private _conversationSid?: string; 
  public get conversationSid() {
    return this.getStringAttribute('conversation_sid');
  }
  public set conversationSid(value: string) {
    this._conversationSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationSidInput() {
    return this._conversationSid;
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

  // identity - computed: true, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // last_read_message_index - computed: true, optional: true, required: false
  private _lastReadMessageIndex?: number; 
  public get lastReadMessageIndex() {
    return this.getNumberAttribute('last_read_message_index');
  }
  public set lastReadMessageIndex(value: number) {
    this._lastReadMessageIndex = value;
  }
  public resetLastReadMessageIndex() {
    this._lastReadMessageIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastReadMessageIndexInput() {
    return this._lastReadMessageIndex;
  }

  // last_read_timestamp - computed: true, optional: true, required: false
  private _lastReadTimestamp?: string; 
  public get lastReadTimestamp() {
    return this.getStringAttribute('last_read_timestamp');
  }
  public set lastReadTimestamp(value: string) {
    this._lastReadTimestamp = value;
  }
  public resetLastReadTimestamp() {
    this._lastReadTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastReadTimestampInput() {
    return this._lastReadTimestamp;
  }

  // messaging_binding_address - computed: true, optional: true, required: false
  private _messagingBindingAddress?: string; 
  public get messagingBindingAddress() {
    return this.getStringAttribute('messaging_binding_address');
  }
  public set messagingBindingAddress(value: string) {
    this._messagingBindingAddress = value;
  }
  public resetMessagingBindingAddress() {
    this._messagingBindingAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingBindingAddressInput() {
    return this._messagingBindingAddress;
  }

  // messaging_binding_projected_address - computed: true, optional: true, required: false
  private _messagingBindingProjectedAddress?: string; 
  public get messagingBindingProjectedAddress() {
    return this.getStringAttribute('messaging_binding_projected_address');
  }
  public set messagingBindingProjectedAddress(value: string) {
    this._messagingBindingProjectedAddress = value;
  }
  public resetMessagingBindingProjectedAddress() {
    this._messagingBindingProjectedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingBindingProjectedAddressInput() {
    return this._messagingBindingProjectedAddress;
  }

  // messaging_binding_proxy_address - computed: true, optional: true, required: false
  private _messagingBindingProxyAddress?: string; 
  public get messagingBindingProxyAddress() {
    return this.getStringAttribute('messaging_binding_proxy_address');
  }
  public set messagingBindingProxyAddress(value: string) {
    this._messagingBindingProxyAddress = value;
  }
  public resetMessagingBindingProxyAddress() {
    this._messagingBindingProxyAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingBindingProxyAddressInput() {
    return this._messagingBindingProxyAddress;
  }

  // role_sid - computed: true, optional: true, required: false
  private _roleSid?: string; 
  public get roleSid() {
    return this.getStringAttribute('role_sid');
  }
  public set roleSid(value: string) {
    this._roleSid = value;
  }
  public resetRoleSid() {
    this._roleSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSidInput() {
    return this._roleSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
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
      conversation_sid: cdktf.stringToTerraform(this._conversationSid),
      date_created: cdktf.stringToTerraform(this._dateCreated),
      date_updated: cdktf.stringToTerraform(this._dateUpdated),
      id: cdktf.stringToTerraform(this._id),
      identity: cdktf.stringToTerraform(this._identity),
      last_read_message_index: cdktf.numberToTerraform(this._lastReadMessageIndex),
      last_read_timestamp: cdktf.stringToTerraform(this._lastReadTimestamp),
      messaging_binding_address: cdktf.stringToTerraform(this._messagingBindingAddress),
      messaging_binding_projected_address: cdktf.stringToTerraform(this._messagingBindingProjectedAddress),
      messaging_binding_proxy_address: cdktf.stringToTerraform(this._messagingBindingProxyAddress),
      role_sid: cdktf.stringToTerraform(this._roleSid),
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
      conversation_sid: {
        value: cdktf.stringToHclTerraform(this._conversationSid),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity: {
        value: cdktf.stringToHclTerraform(this._identity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_read_message_index: {
        value: cdktf.numberToHclTerraform(this._lastReadMessageIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      last_read_timestamp: {
        value: cdktf.stringToHclTerraform(this._lastReadTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messaging_binding_address: {
        value: cdktf.stringToHclTerraform(this._messagingBindingAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messaging_binding_projected_address: {
        value: cdktf.stringToHclTerraform(this._messagingBindingProjectedAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messaging_binding_proxy_address: {
        value: cdktf.stringToHclTerraform(this._messagingBindingProxyAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_sid: {
        value: cdktf.stringToHclTerraform(this._roleSid),
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
