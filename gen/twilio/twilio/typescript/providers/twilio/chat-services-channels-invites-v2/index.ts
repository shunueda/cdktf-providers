// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_invites_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChatServicesChannelsInvitesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_invites_v2#channel_sid ChatServicesChannelsInvitesV2#channel_sid}
  */
  readonly channelSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_invites_v2#id ChatServicesChannelsInvitesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_invites_v2#identity ChatServicesChannelsInvitesV2#identity}
  */
  readonly identity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_invites_v2#role_sid ChatServicesChannelsInvitesV2#role_sid}
  */
  readonly roleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_invites_v2#service_sid ChatServicesChannelsInvitesV2#service_sid}
  */
  readonly serviceSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_invites_v2 twilio_chat_services_channels_invites_v2}
*/
export class ChatServicesChannelsInvitesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_chat_services_channels_invites_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChatServicesChannelsInvitesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChatServicesChannelsInvitesV2 to import
  * @param importFromId The id of the existing ChatServicesChannelsInvitesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_invites_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChatServicesChannelsInvitesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_chat_services_channels_invites_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/chat_services_channels_invites_v2 twilio_chat_services_channels_invites_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChatServicesChannelsInvitesV2Config
  */
  public constructor(scope: Construct, id: string, config: ChatServicesChannelsInvitesV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_chat_services_channels_invites_v2',
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
    this._channelSid = config.channelSid;
    this._id = config.id;
    this._identity = config.identity;
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
