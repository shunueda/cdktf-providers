// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_services_conversations_webhooks_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConversationsServicesConversationsWebhooksV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_services_conversations_webhooks_v1#chat_service_sid ConversationsServicesConversationsWebhooksV1#chat_service_sid}
  */
  readonly chatServiceSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_services_conversations_webhooks_v1#configuration_filters ConversationsServicesConversationsWebhooksV1#configuration_filters}
  */
  readonly configurationFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_services_conversations_webhooks_v1#configuration_flow_sid ConversationsServicesConversationsWebhooksV1#configuration_flow_sid}
  */
  readonly configurationFlowSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_services_conversations_webhooks_v1#configuration_method ConversationsServicesConversationsWebhooksV1#configuration_method}
  */
  readonly configurationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_services_conversations_webhooks_v1#configuration_replay_after ConversationsServicesConversationsWebhooksV1#configuration_replay_after}
  */
  readonly configurationReplayAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_services_conversations_webhooks_v1#configuration_triggers ConversationsServicesConversationsWebhooksV1#configuration_triggers}
  */
  readonly configurationTriggers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_services_conversations_webhooks_v1#configuration_url ConversationsServicesConversationsWebhooksV1#configuration_url}
  */
  readonly configurationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_services_conversations_webhooks_v1#conversation_sid ConversationsServicesConversationsWebhooksV1#conversation_sid}
  */
  readonly conversationSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_services_conversations_webhooks_v1#id ConversationsServicesConversationsWebhooksV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_services_conversations_webhooks_v1#target ConversationsServicesConversationsWebhooksV1#target}
  */
  readonly target: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_services_conversations_webhooks_v1 twilio_conversations_services_conversations_webhooks_v1}
*/
export class ConversationsServicesConversationsWebhooksV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_conversations_services_conversations_webhooks_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConversationsServicesConversationsWebhooksV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConversationsServicesConversationsWebhooksV1 to import
  * @param importFromId The id of the existing ConversationsServicesConversationsWebhooksV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_services_conversations_webhooks_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConversationsServicesConversationsWebhooksV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_conversations_services_conversations_webhooks_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_services_conversations_webhooks_v1 twilio_conversations_services_conversations_webhooks_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConversationsServicesConversationsWebhooksV1Config
  */
  public constructor(scope: Construct, id: string, config: ConversationsServicesConversationsWebhooksV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_conversations_services_conversations_webhooks_v1',
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
    this._chatServiceSid = config.chatServiceSid;
    this._configurationFilters = config.configurationFilters;
    this._configurationFlowSid = config.configurationFlowSid;
    this._configurationMethod = config.configurationMethod;
    this._configurationReplayAfter = config.configurationReplayAfter;
    this._configurationTriggers = config.configurationTriggers;
    this._configurationUrl = config.configurationUrl;
    this._conversationSid = config.conversationSid;
    this._id = config.id;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chat_service_sid - computed: false, optional: false, required: true
  private _chatServiceSid?: string; 
  public get chatServiceSid() {
    return this.getStringAttribute('chat_service_sid');
  }
  public set chatServiceSid(value: string) {
    this._chatServiceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chatServiceSidInput() {
    return this._chatServiceSid;
  }

  // configuration_filters - computed: true, optional: true, required: false
  private _configurationFilters?: string[]; 
  public get configurationFilters() {
    return this.getListAttribute('configuration_filters');
  }
  public set configurationFilters(value: string[]) {
    this._configurationFilters = value;
  }
  public resetConfigurationFilters() {
    this._configurationFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationFiltersInput() {
    return this._configurationFilters;
  }

  // configuration_flow_sid - computed: true, optional: true, required: false
  private _configurationFlowSid?: string; 
  public get configurationFlowSid() {
    return this.getStringAttribute('configuration_flow_sid');
  }
  public set configurationFlowSid(value: string) {
    this._configurationFlowSid = value;
  }
  public resetConfigurationFlowSid() {
    this._configurationFlowSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationFlowSidInput() {
    return this._configurationFlowSid;
  }

  // configuration_method - computed: true, optional: true, required: false
  private _configurationMethod?: string; 
  public get configurationMethod() {
    return this.getStringAttribute('configuration_method');
  }
  public set configurationMethod(value: string) {
    this._configurationMethod = value;
  }
  public resetConfigurationMethod() {
    this._configurationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationMethodInput() {
    return this._configurationMethod;
  }

  // configuration_replay_after - computed: true, optional: true, required: false
  private _configurationReplayAfter?: number; 
  public get configurationReplayAfter() {
    return this.getNumberAttribute('configuration_replay_after');
  }
  public set configurationReplayAfter(value: number) {
    this._configurationReplayAfter = value;
  }
  public resetConfigurationReplayAfter() {
    this._configurationReplayAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationReplayAfterInput() {
    return this._configurationReplayAfter;
  }

  // configuration_triggers - computed: true, optional: true, required: false
  private _configurationTriggers?: string[]; 
  public get configurationTriggers() {
    return this.getListAttribute('configuration_triggers');
  }
  public set configurationTriggers(value: string[]) {
    this._configurationTriggers = value;
  }
  public resetConfigurationTriggers() {
    this._configurationTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTriggersInput() {
    return this._configurationTriggers;
  }

  // configuration_url - computed: true, optional: true, required: false
  private _configurationUrl?: string; 
  public get configurationUrl() {
    return this.getStringAttribute('configuration_url');
  }
  public set configurationUrl(value: string) {
    this._configurationUrl = value;
  }
  public resetConfigurationUrl() {
    this._configurationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationUrlInput() {
    return this._configurationUrl;
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

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chat_service_sid: cdktf.stringToTerraform(this._chatServiceSid),
      configuration_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configurationFilters),
      configuration_flow_sid: cdktf.stringToTerraform(this._configurationFlowSid),
      configuration_method: cdktf.stringToTerraform(this._configurationMethod),
      configuration_replay_after: cdktf.numberToTerraform(this._configurationReplayAfter),
      configuration_triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configurationTriggers),
      configuration_url: cdktf.stringToTerraform(this._configurationUrl),
      conversation_sid: cdktf.stringToTerraform(this._conversationSid),
      id: cdktf.stringToTerraform(this._id),
      target: cdktf.stringToTerraform(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chat_service_sid: {
        value: cdktf.stringToHclTerraform(this._chatServiceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configurationFilters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      configuration_flow_sid: {
        value: cdktf.stringToHclTerraform(this._configurationFlowSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_method: {
        value: cdktf.stringToHclTerraform(this._configurationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_replay_after: {
        value: cdktf.numberToHclTerraform(this._configurationReplayAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      configuration_triggers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configurationTriggers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      configuration_url: {
        value: cdktf.stringToHclTerraform(this._configurationUrl),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
