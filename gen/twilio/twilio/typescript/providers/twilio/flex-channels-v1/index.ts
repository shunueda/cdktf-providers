// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlexChannelsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1#chat_friendly_name FlexChannelsV1#chat_friendly_name}
  */
  readonly chatFriendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1#chat_unique_name FlexChannelsV1#chat_unique_name}
  */
  readonly chatUniqueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1#chat_user_friendly_name FlexChannelsV1#chat_user_friendly_name}
  */
  readonly chatUserFriendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1#flex_flow_sid FlexChannelsV1#flex_flow_sid}
  */
  readonly flexFlowSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1#id FlexChannelsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1#identity FlexChannelsV1#identity}
  */
  readonly identity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1#long_lived FlexChannelsV1#long_lived}
  */
  readonly longLived?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1#pre_engagement_data FlexChannelsV1#pre_engagement_data}
  */
  readonly preEngagementData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1#target FlexChannelsV1#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1#task_attributes FlexChannelsV1#task_attributes}
  */
  readonly taskAttributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1#task_sid FlexChannelsV1#task_sid}
  */
  readonly taskSid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1 twilio_flex_channels_v1}
*/
export class FlexChannelsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_flex_channels_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlexChannelsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlexChannelsV1 to import
  * @param importFromId The id of the existing FlexChannelsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlexChannelsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_flex_channels_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_channels_v1 twilio_flex_channels_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlexChannelsV1Config
  */
  public constructor(scope: Construct, id: string, config: FlexChannelsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_flex_channels_v1',
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
    this._chatUniqueName = config.chatUniqueName;
    this._chatUserFriendlyName = config.chatUserFriendlyName;
    this._flexFlowSid = config.flexFlowSid;
    this._id = config.id;
    this._identity = config.identity;
    this._longLived = config.longLived;
    this._preEngagementData = config.preEngagementData;
    this._target = config.target;
    this._taskAttributes = config.taskAttributes;
    this._taskSid = config.taskSid;
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

  // chat_user_friendly_name - computed: false, optional: false, required: true
  private _chatUserFriendlyName?: string; 
  public get chatUserFriendlyName() {
    return this.getStringAttribute('chat_user_friendly_name');
  }
  public set chatUserFriendlyName(value: string) {
    this._chatUserFriendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chatUserFriendlyNameInput() {
    return this._chatUserFriendlyName;
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

  // long_lived - computed: true, optional: true, required: false
  private _longLived?: boolean | cdktf.IResolvable; 
  public get longLived() {
    return this.getBooleanAttribute('long_lived');
  }
  public set longLived(value: boolean | cdktf.IResolvable) {
    this._longLived = value;
  }
  public resetLongLived() {
    this._longLived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longLivedInput() {
    return this._longLived;
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

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // task_attributes - computed: true, optional: true, required: false
  private _taskAttributes?: string; 
  public get taskAttributes() {
    return this.getStringAttribute('task_attributes');
  }
  public set taskAttributes(value: string) {
    this._taskAttributes = value;
  }
  public resetTaskAttributes() {
    this._taskAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskAttributesInput() {
    return this._taskAttributes;
  }

  // task_sid - computed: true, optional: true, required: false
  private _taskSid?: string; 
  public get taskSid() {
    return this.getStringAttribute('task_sid');
  }
  public set taskSid(value: string) {
    this._taskSid = value;
  }
  public resetTaskSid() {
    this._taskSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskSidInput() {
    return this._taskSid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chat_friendly_name: cdktf.stringToTerraform(this._chatFriendlyName),
      chat_unique_name: cdktf.stringToTerraform(this._chatUniqueName),
      chat_user_friendly_name: cdktf.stringToTerraform(this._chatUserFriendlyName),
      flex_flow_sid: cdktf.stringToTerraform(this._flexFlowSid),
      id: cdktf.stringToTerraform(this._id),
      identity: cdktf.stringToTerraform(this._identity),
      long_lived: cdktf.booleanToTerraform(this._longLived),
      pre_engagement_data: cdktf.stringToTerraform(this._preEngagementData),
      target: cdktf.stringToTerraform(this._target),
      task_attributes: cdktf.stringToTerraform(this._taskAttributes),
      task_sid: cdktf.stringToTerraform(this._taskSid),
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
      chat_unique_name: {
        value: cdktf.stringToHclTerraform(this._chatUniqueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chat_user_friendly_name: {
        value: cdktf.stringToHclTerraform(this._chatUserFriendlyName),
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
      long_lived: {
        value: cdktf.booleanToHclTerraform(this._longLived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pre_engagement_data: {
        value: cdktf.stringToHclTerraform(this._preEngagementData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_attributes: {
        value: cdktf.stringToHclTerraform(this._taskAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_sid: {
        value: cdktf.stringToHclTerraform(this._taskSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
