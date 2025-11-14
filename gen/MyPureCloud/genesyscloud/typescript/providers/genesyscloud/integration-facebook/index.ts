// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationFacebookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The app Id of Facebook app. The appId is required when a customer wants to use their own approved Facebook app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook#app_id IntegrationFacebook#app_id}
  */
  readonly appId?: string;
  /**
  * The app Secret of Facebook app. The appSecret is required when appId is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook#app_secret IntegrationFacebook#app_secret}
  */
  readonly appSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook#id IntegrationFacebook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The messaging Setting unique identifier associated with this integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook#messaging_setting_id IntegrationFacebook#messaging_setting_id}
  */
  readonly messagingSettingId?: string;
  /**
  * The name of the Facebook Integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook#name IntegrationFacebook#name}
  */
  readonly name: string;
  /**
  * The long-lived Page Access Token of Facebook page.
  * 			See https://developers.facebook.com/docs/facebook-login/access-tokens.
  * 			Either pageAccessToken or userAccessToken should be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook#page_access_token IntegrationFacebook#page_access_token}
  */
  readonly pageAccessToken?: string;
  /**
  * The page Id of Facebook page. The pageId is required when userAccessToken is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook#page_id IntegrationFacebook#page_id}
  */
  readonly pageId?: string;
  /**
  * The SupportedContent unique identifier associated with this integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook#supported_content_id IntegrationFacebook#supported_content_id}
  */
  readonly supportedContentId?: string;
  /**
  * The short-lived User Access Token of the Facebook user logged into the Facebook app.
  * 			See https://developers.facebook.com/docs/facebook-login/access-tokens.
  * 			Either pageAccessToken or userAccessToken should be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook#user_access_token IntegrationFacebook#user_access_token}
  */
  readonly userAccessToken?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook#timeouts IntegrationFacebook#timeouts}
  */
  readonly timeouts?: IntegrationFacebookTimeouts;
}
export interface IntegrationFacebookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook#read IntegrationFacebook#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook#update IntegrationFacebook#update}
  */
  readonly update?: string;
}

export function integrationFacebookTimeoutsToTerraform(struct?: IntegrationFacebookTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function integrationFacebookTimeoutsToHclTerraform(struct?: IntegrationFacebookTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationFacebookTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationFacebookTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationFacebookTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook genesyscloud_integration_facebook}
*/
export class IntegrationFacebook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_integration_facebook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationFacebook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationFacebook to import
  * @param importFromId The id of the existing IntegrationFacebook that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationFacebook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_integration_facebook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/integration_facebook genesyscloud_integration_facebook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationFacebookConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationFacebookConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_integration_facebook',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
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
    this._timeouts.internalValue = config.timeouts;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IntegrationFacebookTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IntegrationFacebookTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      timeouts: integrationFacebookTimeoutsToTerraform(this._timeouts.internalValue),
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
      timeouts: {
        value: integrationFacebookTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationFacebookTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
