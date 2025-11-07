// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_instagram
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConversationsMessagingIntegrationsInstagramConfig extends cdktf.TerraformMetaArguments {
  /**
  * The app ID of Facebook app. The appId is required when a customer wants to use their own approved Facebook app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_instagram#app_id ConversationsMessagingIntegrationsInstagram#app_id}
  */
  readonly appId?: string;
  /**
  * The app Secret of Facebook app. The appSecret is required when appId is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_instagram#app_secret ConversationsMessagingIntegrationsInstagram#app_secret}
  */
  readonly appSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_instagram#id ConversationsMessagingIntegrationsInstagram#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Messaging Setting for messaging platform integrations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_instagram#messaging_setting_id ConversationsMessagingIntegrationsInstagram#messaging_setting_id}
  */
  readonly messagingSettingId?: string;
  /**
  * The name of the Instagram Integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_instagram#name ConversationsMessagingIntegrationsInstagram#name}
  */
  readonly name: string;
  /**
  * The long-lived Page Access Token of Instagram page. See https://developers.facebook.com/docs/facebook-login/access-tokens. When a pageAccessToken is provided, pageId and userAccessToken are not required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_instagram#page_access_token ConversationsMessagingIntegrationsInstagram#page_access_token}
  */
  readonly pageAccessToken?: string;
  /**
  * The page ID of Instagram page. The pageId is required when userAccessToken is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_instagram#page_id ConversationsMessagingIntegrationsInstagram#page_id}
  */
  readonly pageId?: string;
  /**
  * Reference to supported content profile associated with the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_instagram#supported_content_id ConversationsMessagingIntegrationsInstagram#supported_content_id}
  */
  readonly supportedContentId?: string;
  /**
  * The short-lived User Access Token of Instagram user logged into Facebook app. See https://developers.facebook.com/docs/facebook-login/access-tokens. When userAccessToken is provided, pageId is mandatory. When userAccessToken/pageId combination is provided, pageAccessToken is not required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_instagram#user_access_token ConversationsMessagingIntegrationsInstagram#user_access_token}
  */
  readonly userAccessToken?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_instagram genesyscloud_conversations_messaging_integrations_instagram}
*/
export class ConversationsMessagingIntegrationsInstagram extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_conversations_messaging_integrations_instagram";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConversationsMessagingIntegrationsInstagram resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConversationsMessagingIntegrationsInstagram to import
  * @param importFromId The id of the existing ConversationsMessagingIntegrationsInstagram that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_instagram#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConversationsMessagingIntegrationsInstagram to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_conversations_messaging_integrations_instagram", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_integrations_instagram genesyscloud_conversations_messaging_integrations_instagram} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConversationsMessagingIntegrationsInstagramConfig
  */
  public constructor(scope: Construct, id: string, config: ConversationsMessagingIntegrationsInstagramConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_conversations_messaging_integrations_instagram',
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
    this._appId = config.appId;
    this._appSecret = config.appSecret;
    this._id = config.id;
    this._messagingSettingId = config.messagingSettingId;
    this._name = config.name;
    this._pageAccessToken = config.pageAccessToken;
    this._pageId = config.pageId;
    this._supportedContentId = config.supportedContentId;
    this._userAccessToken = config.userAccessToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_secret - computed: false, optional: true, required: false
  private _appSecret?: string; 
  public get appSecret() {
    return this.getStringAttribute('app_secret');
  }
  public set appSecret(value: string) {
    this._appSecret = value;
  }
  public resetAppSecret() {
    this._appSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretInput() {
    return this._appSecret;
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

  // page_access_token - computed: false, optional: true, required: false
  private _pageAccessToken?: string; 
  public get pageAccessToken() {
    return this.getStringAttribute('page_access_token');
  }
  public set pageAccessToken(value: string) {
    this._pageAccessToken = value;
  }
  public resetPageAccessToken() {
    this._pageAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageAccessTokenInput() {
    return this._pageAccessToken;
  }

  // page_id - computed: false, optional: true, required: false
  private _pageId?: string; 
  public get pageId() {
    return this.getStringAttribute('page_id');
  }
  public set pageId(value: string) {
    this._pageId = value;
  }
  public resetPageId() {
    this._pageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageIdInput() {
    return this._pageId;
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

  // user_access_token - computed: false, optional: true, required: false
  private _userAccessToken?: string; 
  public get userAccessToken() {
    return this.getStringAttribute('user_access_token');
  }
  public set userAccessToken(value: string) {
    this._userAccessToken = value;
  }
  public resetUserAccessToken() {
    this._userAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessTokenInput() {
    return this._userAccessToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      app_secret: cdktf.stringToTerraform(this._appSecret),
      id: cdktf.stringToTerraform(this._id),
      messaging_setting_id: cdktf.stringToTerraform(this._messagingSettingId),
      name: cdktf.stringToTerraform(this._name),
      page_access_token: cdktf.stringToTerraform(this._pageAccessToken),
      page_id: cdktf.stringToTerraform(this._pageId),
      supported_content_id: cdktf.stringToTerraform(this._supportedContentId),
      user_access_token: cdktf.stringToTerraform(this._userAccessToken),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_secret: {
        value: cdktf.stringToHclTerraform(this._appSecret),
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
      page_access_token: {
        value: cdktf.stringToHclTerraform(this._pageAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_id: {
        value: cdktf.stringToHclTerraform(this._pageId),
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
      user_access_token: {
        value: cdktf.stringToHclTerraform(this._userAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
