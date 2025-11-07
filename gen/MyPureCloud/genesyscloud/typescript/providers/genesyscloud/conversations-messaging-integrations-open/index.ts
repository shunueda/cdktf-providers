// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_open
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConversationsMessagingIntegrationsOpenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_open#id ConversationsMessagingIntegrationsOpen#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Messaging Setting for messaging platform integrations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_open#messaging_setting_id ConversationsMessagingIntegrationsOpen#messaging_setting_id}
  */
  readonly messagingSettingId?: string;
  /**
  * The name of the Open messaging integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_open#name ConversationsMessagingIntegrationsOpen#name}
  */
  readonly name: string;
  /**
  * The outbound notification webhook signature secret token. This token must be longer than 15 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_open#outbound_notification_webhook_signature_secret_token ConversationsMessagingIntegrationsOpen#outbound_notification_webhook_signature_secret_token}
  */
  readonly outboundNotificationWebhookSignatureSecretToken: string;
  /**
  * The outbound notification webhook URL for the Open messaging integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_open#outbound_notification_webhook_url ConversationsMessagingIntegrationsOpen#outbound_notification_webhook_url}
  */
  readonly outboundNotificationWebhookUrl: string;
  /**
  * Reference to supported content profile associated with the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_open#supported_content_id ConversationsMessagingIntegrationsOpen#supported_content_id}
  */
  readonly supportedContentId?: string;
  /**
  * The user specified headers for the Open messaging integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_open#webhook_headers ConversationsMessagingIntegrationsOpen#webhook_headers}
  */
  readonly webhookHeaders?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_open genesyscloud_conversations_messaging_integrations_open}
*/
export class ConversationsMessagingIntegrationsOpen extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_conversations_messaging_integrations_open";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConversationsMessagingIntegrationsOpen resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConversationsMessagingIntegrationsOpen to import
  * @param importFromId The id of the existing ConversationsMessagingIntegrationsOpen that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_open#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConversationsMessagingIntegrationsOpen to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_conversations_messaging_integrations_open", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_open genesyscloud_conversations_messaging_integrations_open} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConversationsMessagingIntegrationsOpenConfig
  */
  public constructor(scope: Construct, id: string, config: ConversationsMessagingIntegrationsOpenConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_conversations_messaging_integrations_open',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
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
    this._messagingSettingId = config.messagingSettingId;
    this._name = config.name;
    this._outboundNotificationWebhookSignatureSecretToken = config.outboundNotificationWebhookSignatureSecretToken;
    this._outboundNotificationWebhookUrl = config.outboundNotificationWebhookUrl;
    this._supportedContentId = config.supportedContentId;
    this._webhookHeaders = config.webhookHeaders;
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

  // messaging_setting_id - computed: false, optional: true, required: false
  private _messagingSettingId?: string; 
  public get messagingSettingId() {
    return this.getStringAttribute('messaging_setting_id');
  }
  public set messagingSettingId(value: string) {
    this._messagingSettingId = value;
  }
  public resetMessagingSettingId() {
    this._messagingSettingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingSettingIdInput() {
    return this._messagingSettingId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // outbound_notification_webhook_signature_secret_token - computed: false, optional: false, required: true
  private _outboundNotificationWebhookSignatureSecretToken?: string; 
  public get outboundNotificationWebhookSignatureSecretToken() {
    return this.getStringAttribute('outbound_notification_webhook_signature_secret_token');
  }
  public set outboundNotificationWebhookSignatureSecretToken(value: string) {
    this._outboundNotificationWebhookSignatureSecretToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNotificationWebhookSignatureSecretTokenInput() {
    return this._outboundNotificationWebhookSignatureSecretToken;
  }

  // outbound_notification_webhook_url - computed: false, optional: false, required: true
  private _outboundNotificationWebhookUrl?: string; 
  public get outboundNotificationWebhookUrl() {
    return this.getStringAttribute('outbound_notification_webhook_url');
  }
  public set outboundNotificationWebhookUrl(value: string) {
    this._outboundNotificationWebhookUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNotificationWebhookUrlInput() {
    return this._outboundNotificationWebhookUrl;
  }

  // supported_content_id - computed: false, optional: true, required: false
  private _supportedContentId?: string; 
  public get supportedContentId() {
    return this.getStringAttribute('supported_content_id');
  }
  public set supportedContentId(value: string) {
    this._supportedContentId = value;
  }
  public resetSupportedContentId() {
    this._supportedContentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedContentIdInput() {
    return this._supportedContentId;
  }

  // webhook_headers - computed: true, optional: true, required: false
  private _webhookHeaders?: string; 
  public get webhookHeaders() {
    return this.getStringAttribute('webhook_headers');
  }
  public set webhookHeaders(value: string) {
    this._webhookHeaders = value;
  }
  public resetWebhookHeaders() {
    this._webhookHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookHeadersInput() {
    return this._webhookHeaders;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      messaging_setting_id: cdktf.stringToTerraform(this._messagingSettingId),
      name: cdktf.stringToTerraform(this._name),
      outbound_notification_webhook_signature_secret_token: cdktf.stringToTerraform(this._outboundNotificationWebhookSignatureSecretToken),
      outbound_notification_webhook_url: cdktf.stringToTerraform(this._outboundNotificationWebhookUrl),
      supported_content_id: cdktf.stringToTerraform(this._supportedContentId),
      webhook_headers: cdktf.stringToTerraform(this._webhookHeaders),
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
      messaging_setting_id: {
        value: cdktf.stringToHclTerraform(this._messagingSettingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_notification_webhook_signature_secret_token: {
        value: cdktf.stringToHclTerraform(this._outboundNotificationWebhookSignatureSecretToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_notification_webhook_url: {
        value: cdktf.stringToHclTerraform(this._outboundNotificationWebhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_content_id: {
        value: cdktf.stringToHclTerraform(this._supportedContentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_headers: {
        value: cdktf.stringToHclTerraform(this._webhookHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
