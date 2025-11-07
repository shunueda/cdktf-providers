// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChatServicesChannelsMembersV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2#attributes ChatServicesChannelsMembersV2#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2#channel_sid ChatServicesChannelsMembersV2#channel_sid}
  */
  readonly channelSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2#date_created ChatServicesChannelsMembersV2#date_created}
  */
  readonly dateCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2#date_updated ChatServicesChannelsMembersV2#date_updated}
  */
  readonly dateUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2#id ChatServicesChannelsMembersV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2#identity ChatServicesChannelsMembersV2#identity}
  */
  readonly identity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2#last_consumed_message_index ChatServicesChannelsMembersV2#last_consumed_message_index}
  */
  readonly lastConsumedMessageIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2#last_consumption_timestamp ChatServicesChannelsMembersV2#last_consumption_timestamp}
  */
  readonly lastConsumptionTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2#role_sid ChatServicesChannelsMembersV2#role_sid}
  */
  readonly roleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2#service_sid ChatServicesChannelsMembersV2#service_sid}
  */
  readonly serviceSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2#x_twilio_webhook_enabled ChatServicesChannelsMembersV2#x_twilio_webhook_enabled}
  */
  readonly xTwilioWebhookEnabled?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2 twilio_chat_services_channels_members_v2}
*/
export class ChatServicesChannelsMembersV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_chat_services_channels_members_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChatServicesChannelsMembersV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChatServicesChannelsMembersV2 to import
  * @param importFromId The id of the existing ChatServicesChannelsMembersV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChatServicesChannelsMembersV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_chat_services_channels_members_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v2 twilio_chat_services_channels_members_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChatServicesChannelsMembersV2Config
  */
  public constructor(scope: Construct, id: string, config: ChatServicesChannelsMembersV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_chat_services_channels_members_v2',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
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
    this._channelSid = config.channelSid;
    this._dateCreated = config.dateCreated;
    this._dateUpdated = config.dateUpdated;
    this._id = config.id;
    this._identity = config.identity;
    this._lastConsumedMessageIndex = config.lastConsumedMessageIndex;
    this._lastConsumptionTimestamp = config.lastConsumptionTimestamp;
    this._roleSid = config.roleSid;
    this._serviceSid = config.serviceSid;
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

  // channel_sid - computed: false, optional: false, required: true
  private _channelSid?: string; 
  public get channelSid() {
    return this.getStringAttribute('channel_sid');
  }
  public set channelSid(value: string) {
    this._channelSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelSidInput() {
    return this._channelSid;
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

  // identity - computed: false, optional: false, required: true
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // last_consumed_message_index - computed: true, optional: true, required: false
  private _lastConsumedMessageIndex?: number; 
  public get lastConsumedMessageIndex() {
    return this.getNumberAttribute('last_consumed_message_index');
  }
  public set lastConsumedMessageIndex(value: number) {
    this._lastConsumedMessageIndex = value;
  }
  public resetLastConsumedMessageIndex() {
    this._lastConsumedMessageIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastConsumedMessageIndexInput() {
    return this._lastConsumedMessageIndex;
  }

  // last_consumption_timestamp - computed: true, optional: true, required: false
  private _lastConsumptionTimestamp?: string; 
  public get lastConsumptionTimestamp() {
    return this.getStringAttribute('last_consumption_timestamp');
  }
  public set lastConsumptionTimestamp(value: string) {
    this._lastConsumptionTimestamp = value;
  }
  public resetLastConsumptionTimestamp() {
    this._lastConsumptionTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastConsumptionTimestampInput() {
    return this._lastConsumptionTimestamp;
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

  // service_sid - computed: false, optional: false, required: true
  private _serviceSid?: string; 
  public get serviceSid() {
    return this.getStringAttribute('service_sid');
  }
  public set serviceSid(value: string) {
    this._serviceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSidInput() {
    return this._serviceSid;
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
      channel_sid: cdktf.stringToTerraform(this._channelSid),
      date_created: cdktf.stringToTerraform(this._dateCreated),
      date_updated: cdktf.stringToTerraform(this._dateUpdated),
      id: cdktf.stringToTerraform(this._id),
      identity: cdktf.stringToTerraform(this._identity),
      last_consumed_message_index: cdktf.numberToTerraform(this._lastConsumedMessageIndex),
      last_consumption_timestamp: cdktf.stringToTerraform(this._lastConsumptionTimestamp),
      role_sid: cdktf.stringToTerraform(this._roleSid),
      service_sid: cdktf.stringToTerraform(this._serviceSid),
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
      channel_sid: {
        value: cdktf.stringToHclTerraform(this._channelSid),
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
      last_consumed_message_index: {
        value: cdktf.numberToHclTerraform(this._lastConsumedMessageIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      last_consumption_timestamp: {
        value: cdktf.stringToHclTerraform(this._lastConsumptionTimestamp),
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
      service_sid: {
        value: cdktf.stringToHclTerraform(this._serviceSid),
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
