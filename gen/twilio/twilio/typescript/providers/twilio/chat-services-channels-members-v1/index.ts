// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChatServicesChannelsMembersV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v1#channel_sid ChatServicesChannelsMembersV1#channel_sid}
  */
  readonly channelSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v1#id ChatServicesChannelsMembersV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v1#identity ChatServicesChannelsMembersV1#identity}
  */
  readonly identity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v1#last_consumed_message_index ChatServicesChannelsMembersV1#last_consumed_message_index}
  */
  readonly lastConsumedMessageIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v1#role_sid ChatServicesChannelsMembersV1#role_sid}
  */
  readonly roleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v1#service_sid ChatServicesChannelsMembersV1#service_sid}
  */
  readonly serviceSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v1 twilio_chat_services_channels_members_v1}
*/
export class ChatServicesChannelsMembersV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_chat_services_channels_members_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChatServicesChannelsMembersV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChatServicesChannelsMembersV1 to import
  * @param importFromId The id of the existing ChatServicesChannelsMembersV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChatServicesChannelsMembersV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_chat_services_channels_members_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_members_v1 twilio_chat_services_channels_members_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChatServicesChannelsMembersV1Config
  */
  public constructor(scope: Construct, id: string, config: ChatServicesChannelsMembersV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_chat_services_channels_members_v1',
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
    this._channelSid = config.channelSid;
    this._id = config.id;
    this._identity = config.identity;
    this._lastConsumedMessageIndex = config.lastConsumedMessageIndex;
    this._roleSid = config.roleSid;
    this._serviceSid = config.serviceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_sid: cdktf.stringToTerraform(this._channelSid),
      id: cdktf.stringToTerraform(this._id),
      identity: cdktf.stringToTerraform(this._identity),
      last_consumed_message_index: cdktf.numberToTerraform(this._lastConsumedMessageIndex),
      role_sid: cdktf.stringToTerraform(this._roleSid),
      service_sid: cdktf.stringToTerraform(this._serviceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_sid: {
        value: cdktf.stringToHclTerraform(this._channelSid),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
