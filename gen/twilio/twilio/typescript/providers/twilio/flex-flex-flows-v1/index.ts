// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlexFlexFlowsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#channel_type FlexFlexFlowsV1#channel_type}
  */
  readonly channelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#chat_service_sid FlexFlexFlowsV1#chat_service_sid}
  */
  readonly chatServiceSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#contact_identity FlexFlexFlowsV1#contact_identity}
  */
  readonly contactIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#enabled FlexFlexFlowsV1#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#friendly_name FlexFlexFlowsV1#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#id FlexFlexFlowsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#integration_channel FlexFlexFlowsV1#integration_channel}
  */
  readonly integrationChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#integration_creation_on_message FlexFlexFlowsV1#integration_creation_on_message}
  */
  readonly integrationCreationOnMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#integration_flow_sid FlexFlexFlowsV1#integration_flow_sid}
  */
  readonly integrationFlowSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#integration_priority FlexFlexFlowsV1#integration_priority}
  */
  readonly integrationPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#integration_retry_count FlexFlexFlowsV1#integration_retry_count}
  */
  readonly integrationRetryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#integration_timeout FlexFlexFlowsV1#integration_timeout}
  */
  readonly integrationTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#integration_type FlexFlexFlowsV1#integration_type}
  */
  readonly integrationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#integration_url FlexFlexFlowsV1#integration_url}
  */
  readonly integrationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#integration_workflow_sid FlexFlexFlowsV1#integration_workflow_sid}
  */
  readonly integrationWorkflowSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#integration_workspace_sid FlexFlexFlowsV1#integration_workspace_sid}
  */
  readonly integrationWorkspaceSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#janitor_enabled FlexFlexFlowsV1#janitor_enabled}
  */
  readonly janitorEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#long_lived FlexFlexFlowsV1#long_lived}
  */
  readonly longLived?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1 twilio_flex_flex_flows_v1}
*/
export class FlexFlexFlowsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_flex_flex_flows_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlexFlexFlowsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlexFlexFlowsV1 to import
  * @param importFromId The id of the existing FlexFlexFlowsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlexFlexFlowsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_flex_flex_flows_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/flex_flex_flows_v1 twilio_flex_flex_flows_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlexFlexFlowsV1Config
  */
  public constructor(scope: Construct, id: string, config: FlexFlexFlowsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_flex_flex_flows_v1',
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
    this._channelType = config.channelType;
    this._chatServiceSid = config.chatServiceSid;
    this._contactIdentity = config.contactIdentity;
    this._enabled = config.enabled;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._integrationChannel = config.integrationChannel;
    this._integrationCreationOnMessage = config.integrationCreationOnMessage;
    this._integrationFlowSid = config.integrationFlowSid;
    this._integrationPriority = config.integrationPriority;
    this._integrationRetryCount = config.integrationRetryCount;
    this._integrationTimeout = config.integrationTimeout;
    this._integrationType = config.integrationType;
    this._integrationUrl = config.integrationUrl;
    this._integrationWorkflowSid = config.integrationWorkflowSid;
    this._integrationWorkspaceSid = config.integrationWorkspaceSid;
    this._janitorEnabled = config.janitorEnabled;
    this._longLived = config.longLived;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_type - computed: false, optional: false, required: true
  private _channelType?: string; 
  public get channelType() {
    return this.getStringAttribute('channel_type');
  }
  public set channelType(value: string) {
    this._channelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTypeInput() {
    return this._channelType;
  }

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

  // contact_identity - computed: true, optional: true, required: false
  private _contactIdentity?: string; 
  public get contactIdentity() {
    return this.getStringAttribute('contact_identity');
  }
  public set contactIdentity(value: string) {
    this._contactIdentity = value;
  }
  public resetContactIdentity() {
    this._contactIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdentityInput() {
    return this._contactIdentity;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
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

  // integration_channel - computed: true, optional: true, required: false
  private _integrationChannel?: string; 
  public get integrationChannel() {
    return this.getStringAttribute('integration_channel');
  }
  public set integrationChannel(value: string) {
    this._integrationChannel = value;
  }
  public resetIntegrationChannel() {
    this._integrationChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationChannelInput() {
    return this._integrationChannel;
  }

  // integration_creation_on_message - computed: true, optional: true, required: false
  private _integrationCreationOnMessage?: boolean | cdktf.IResolvable; 
  public get integrationCreationOnMessage() {
    return this.getBooleanAttribute('integration_creation_on_message');
  }
  public set integrationCreationOnMessage(value: boolean | cdktf.IResolvable) {
    this._integrationCreationOnMessage = value;
  }
  public resetIntegrationCreationOnMessage() {
    this._integrationCreationOnMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationCreationOnMessageInput() {
    return this._integrationCreationOnMessage;
  }

  // integration_flow_sid - computed: true, optional: true, required: false
  private _integrationFlowSid?: string; 
  public get integrationFlowSid() {
    return this.getStringAttribute('integration_flow_sid');
  }
  public set integrationFlowSid(value: string) {
    this._integrationFlowSid = value;
  }
  public resetIntegrationFlowSid() {
    this._integrationFlowSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationFlowSidInput() {
    return this._integrationFlowSid;
  }

  // integration_priority - computed: true, optional: true, required: false
  private _integrationPriority?: number; 
  public get integrationPriority() {
    return this.getNumberAttribute('integration_priority');
  }
  public set integrationPriority(value: number) {
    this._integrationPriority = value;
  }
  public resetIntegrationPriority() {
    this._integrationPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationPriorityInput() {
    return this._integrationPriority;
  }

  // integration_retry_count - computed: true, optional: true, required: false
  private _integrationRetryCount?: number; 
  public get integrationRetryCount() {
    return this.getNumberAttribute('integration_retry_count');
  }
  public set integrationRetryCount(value: number) {
    this._integrationRetryCount = value;
  }
  public resetIntegrationRetryCount() {
    this._integrationRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRetryCountInput() {
    return this._integrationRetryCount;
  }

  // integration_timeout - computed: true, optional: true, required: false
  private _integrationTimeout?: number; 
  public get integrationTimeout() {
    return this.getNumberAttribute('integration_timeout');
  }
  public set integrationTimeout(value: number) {
    this._integrationTimeout = value;
  }
  public resetIntegrationTimeout() {
    this._integrationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTimeoutInput() {
    return this._integrationTimeout;
  }

  // integration_type - computed: true, optional: true, required: false
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  public resetIntegrationType() {
    this._integrationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // integration_url - computed: true, optional: true, required: false
  private _integrationUrl?: string; 
  public get integrationUrl() {
    return this.getStringAttribute('integration_url');
  }
  public set integrationUrl(value: string) {
    this._integrationUrl = value;
  }
  public resetIntegrationUrl() {
    this._integrationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationUrlInput() {
    return this._integrationUrl;
  }

  // integration_workflow_sid - computed: true, optional: true, required: false
  private _integrationWorkflowSid?: string; 
  public get integrationWorkflowSid() {
    return this.getStringAttribute('integration_workflow_sid');
  }
  public set integrationWorkflowSid(value: string) {
    this._integrationWorkflowSid = value;
  }
  public resetIntegrationWorkflowSid() {
    this._integrationWorkflowSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationWorkflowSidInput() {
    return this._integrationWorkflowSid;
  }

  // integration_workspace_sid - computed: true, optional: true, required: false
  private _integrationWorkspaceSid?: string; 
  public get integrationWorkspaceSid() {
    return this.getStringAttribute('integration_workspace_sid');
  }
  public set integrationWorkspaceSid(value: string) {
    this._integrationWorkspaceSid = value;
  }
  public resetIntegrationWorkspaceSid() {
    this._integrationWorkspaceSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationWorkspaceSidInput() {
    return this._integrationWorkspaceSid;
  }

  // janitor_enabled - computed: true, optional: true, required: false
  private _janitorEnabled?: boolean | cdktf.IResolvable; 
  public get janitorEnabled() {
    return this.getBooleanAttribute('janitor_enabled');
  }
  public set janitorEnabled(value: boolean | cdktf.IResolvable) {
    this._janitorEnabled = value;
  }
  public resetJanitorEnabled() {
    this._janitorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get janitorEnabledInput() {
    return this._janitorEnabled;
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

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_type: cdktf.stringToTerraform(this._channelType),
      chat_service_sid: cdktf.stringToTerraform(this._chatServiceSid),
      contact_identity: cdktf.stringToTerraform(this._contactIdentity),
      enabled: cdktf.booleanToTerraform(this._enabled),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      integration_channel: cdktf.stringToTerraform(this._integrationChannel),
      integration_creation_on_message: cdktf.booleanToTerraform(this._integrationCreationOnMessage),
      integration_flow_sid: cdktf.stringToTerraform(this._integrationFlowSid),
      integration_priority: cdktf.numberToTerraform(this._integrationPriority),
      integration_retry_count: cdktf.numberToTerraform(this._integrationRetryCount),
      integration_timeout: cdktf.numberToTerraform(this._integrationTimeout),
      integration_type: cdktf.stringToTerraform(this._integrationType),
      integration_url: cdktf.stringToTerraform(this._integrationUrl),
      integration_workflow_sid: cdktf.stringToTerraform(this._integrationWorkflowSid),
      integration_workspace_sid: cdktf.stringToTerraform(this._integrationWorkspaceSid),
      janitor_enabled: cdktf.booleanToTerraform(this._janitorEnabled),
      long_lived: cdktf.booleanToTerraform(this._longLived),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_type: {
        value: cdktf.stringToHclTerraform(this._channelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chat_service_sid: {
        value: cdktf.stringToHclTerraform(this._chatServiceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_identity: {
        value: cdktf.stringToHclTerraform(this._contactIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      integration_channel: {
        value: cdktf.stringToHclTerraform(this._integrationChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_creation_on_message: {
        value: cdktf.booleanToHclTerraform(this._integrationCreationOnMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      integration_flow_sid: {
        value: cdktf.stringToHclTerraform(this._integrationFlowSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_priority: {
        value: cdktf.numberToHclTerraform(this._integrationPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      integration_retry_count: {
        value: cdktf.numberToHclTerraform(this._integrationRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      integration_timeout: {
        value: cdktf.numberToHclTerraform(this._integrationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      integration_type: {
        value: cdktf.stringToHclTerraform(this._integrationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_url: {
        value: cdktf.stringToHclTerraform(this._integrationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_workflow_sid: {
        value: cdktf.stringToHclTerraform(this._integrationWorkflowSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_workspace_sid: {
        value: cdktf.stringToHclTerraform(this._integrationWorkspaceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      janitor_enabled: {
        value: cdktf.booleanToHclTerraform(this._janitorEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      long_lived: {
        value: cdktf.booleanToHclTerraform(this._longLived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
