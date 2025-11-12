// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_web_channels_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlexWebChannelsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_web_channels_v1#chat_friendly_name FlexWebChannelsV1#chat_friendly_name}
  */
  readonly chatFriendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_web_channels_v1#chat_status FlexWebChannelsV1#chat_status}
  */
  readonly chatStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_web_channels_v1#chat_unique_name FlexWebChannelsV1#chat_unique_name}
  */
  readonly chatUniqueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_web_channels_v1#customer_friendly_name FlexWebChannelsV1#customer_friendly_name}
  */
  readonly customerFriendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_web_channels_v1#flex_flow_sid FlexWebChannelsV1#flex_flow_sid}
  */
  readonly flexFlowSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_web_channels_v1#id FlexWebChannelsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_web_channels_v1#identity FlexWebChannelsV1#identity}
  */
  readonly identity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_web_channels_v1#post_engagement_data FlexWebChannelsV1#post_engagement_data}
  */
  readonly postEngagementData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_web_channels_v1#pre_engagement_data FlexWebChannelsV1#pre_engagement_data}
  */
  readonly preEngagementData?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_web_channels_v1 twilio_flex_web_channels_v1}
*/
export class FlexWebChannelsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_flex_web_channels_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlexWebChannelsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlexWebChannelsV1 to import
  * @param importFromId The id of the existing FlexWebChannelsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_web_channels_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlexWebChannelsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_flex_web_channels_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_web_channels_v1 twilio_flex_web_channels_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlexWebChannelsV1Config
  */
  public constructor(scope: Construct, id: string, config: FlexWebChannelsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_flex_web_channels_v1',
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
    this._chatFriendlyName = config.chatFriendlyName;
    this._chatStatus = config.chatStatus;
    this._chatUniqueName = config.chatUniqueName;
    this._customerFriendlyName = config.customerFriendlyName;
    this._flexFlowSid = config.flexFlowSid;
    this._id = config.id;
    this._identity = config.identity;
    this._postEngagementData = config.postEngagementData;
    this._preEngagementData = config.preEngagementData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chat_friendly_name - computed: false, optional: false, required: true
  private _chatFriendlyName?: string; 
  public get chatFriendlyName() {
    return this.getStringAttribute('chat_friendly_name');
  }
  public set chatFriendlyName(value: string) {
    this._chatFriendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chatFriendlyNameInput() {
    return this._chatFriendlyName;
  }

  // chat_status - computed: true, optional: true, required: false
  private _chatStatus?: string; 
  public get chatStatus() {
    return this.getStringAttribute('chat_status');
  }
  public set chatStatus(value: string) {
    this._chatStatus = value;
  }
  public resetChatStatus() {
    this._chatStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatStatusInput() {
    return this._chatStatus;
  }

  // chat_unique_name - computed: true, optional: true, required: false
  private _chatUniqueName?: string; 
  public get chatUniqueName() {
    return this.getStringAttribute('chat_unique_name');
  }
  public set chatUniqueName(value: string) {
    this._chatUniqueName = value;
  }
  public resetChatUniqueName() {
    this._chatUniqueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatUniqueNameInput() {
    return this._chatUniqueName;
  }

  // customer_friendly_name - computed: false, optional: false, required: true
  private _customerFriendlyName?: string; 
  public get customerFriendlyName() {
    return this.getStringAttribute('customer_friendly_name');
  }
  public set customerFriendlyName(value: string) {
    this._customerFriendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerFriendlyNameInput() {
    return this._customerFriendlyName;
  }

  // flex_flow_sid - computed: false, optional: false, required: true
  private _flexFlowSid?: string; 
  public get flexFlowSid() {
    return this.getStringAttribute('flex_flow_sid');
  }
  public set flexFlowSid(value: string) {
    this._flexFlowSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flexFlowSidInput() {
    return this._flexFlowSid;
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

  // post_engagement_data - computed: true, optional: true, required: false
  private _postEngagementData?: string; 
  public get postEngagementData() {
    return this.getStringAttribute('post_engagement_data');
  }
  public set postEngagementData(value: string) {
    this._postEngagementData = value;
  }
  public resetPostEngagementData() {
    this._postEngagementData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postEngagementDataInput() {
    return this._postEngagementData;
  }

  // pre_engagement_data - computed: true, optional: true, required: false
  private _preEngagementData?: string; 
  public get preEngagementData() {
    return this.getStringAttribute('pre_engagement_data');
  }
  public set preEngagementData(value: string) {
    this._preEngagementData = value;
  }
  public resetPreEngagementData() {
    this._preEngagementData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preEngagementDataInput() {
    return this._preEngagementData;
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
      chat_friendly_name: cdktf.stringToTerraform(this._chatFriendlyName),
      chat_status: cdktf.stringToTerraform(this._chatStatus),
      chat_unique_name: cdktf.stringToTerraform(this._chatUniqueName),
      customer_friendly_name: cdktf.stringToTerraform(this._customerFriendlyName),
      flex_flow_sid: cdktf.stringToTerraform(this._flexFlowSid),
      id: cdktf.stringToTerraform(this._id),
      identity: cdktf.stringToTerraform(this._identity),
      post_engagement_data: cdktf.stringToTerraform(this._postEngagementData),
      pre_engagement_data: cdktf.stringToTerraform(this._preEngagementData),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chat_friendly_name: {
        value: cdktf.stringToHclTerraform(this._chatFriendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chat_status: {
        value: cdktf.stringToHclTerraform(this._chatStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chat_unique_name: {
        value: cdktf.stringToHclTerraform(this._chatUniqueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_friendly_name: {
        value: cdktf.stringToHclTerraform(this._customerFriendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flex_flow_sid: {
        value: cdktf.stringToHclTerraform(this._flexFlowSid),
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
      post_engagement_data: {
        value: cdktf.stringToHclTerraform(this._postEngagementData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_engagement_data: {
        value: cdktf.stringToHclTerraform(this._preEngagementData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
