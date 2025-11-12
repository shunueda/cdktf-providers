// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting_template_notification_template_name_authentication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityReportingTemplateNotificationTemplateNameAuthenticationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure api-key as a mode of authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting_template_notification_template_name_authentication#api_key VisibilityReportingTemplateNotificationTemplateNameAuthenticationA#api_key}
  */
  readonly apiKey?: number;
  /**
  * Configure api-key as a mode of authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting_template_notification_template_name_authentication#api_key_string VisibilityReportingTemplateNotificationTemplateNameAuthenticationA#api_key_string}
  */
  readonly apiKeyString?: string;
  /**
  * Configure the authentication user password (Authentication password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting_template_notification_template_name_authentication#auth_password VisibilityReportingTemplateNotificationTemplateNameAuthenticationA#auth_password}
  */
  readonly authPassword?: number;
  /**
  * Configure the authentication user password (Authentication password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting_template_notification_template_name_authentication#auth_password_string VisibilityReportingTemplateNotificationTemplateNameAuthenticationA#auth_password_string}
  */
  readonly authPasswordString?: string;
  /**
  * Configure the authentication user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting_template_notification_template_name_authentication#auth_username VisibilityReportingTemplateNotificationTemplateNameAuthenticationA#auth_username}
  */
  readonly authUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting_template_notification_template_name_authentication#id VisibilityReportingTemplateNotificationTemplateNameAuthenticationA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting_template_notification_template_name_authentication#name VisibilityReportingTemplateNotificationTemplateNameAuthenticationA#name}
  */
  readonly name: string;
  /**
  * Configure the authentication login uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting_template_notification_template_name_authentication#relative_login_uri VisibilityReportingTemplateNotificationTemplateNameAuthenticationA#relative_login_uri}
  */
  readonly relativeLoginUri?: string;
  /**
  * Configure the authentication logoff uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting_template_notification_template_name_authentication#relative_logoff_uri VisibilityReportingTemplateNotificationTemplateNameAuthenticationA#relative_logoff_uri}
  */
  readonly relativeLogoffUri?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting_template_notification_template_name_authentication#uuid VisibilityReportingTemplateNotificationTemplateNameAuthenticationA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting_template_notification_template_name_authentication thunder_visibility_reporting_template_notification_template_name_authentication}
*/
export class VisibilityReportingTemplateNotificationTemplateNameAuthenticationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_reporting_template_notification_template_name_authentication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityReportingTemplateNotificationTemplateNameAuthenticationA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityReportingTemplateNotificationTemplateNameAuthenticationA to import
  * @param importFromId The id of the existing VisibilityReportingTemplateNotificationTemplateNameAuthenticationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting_template_notification_template_name_authentication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityReportingTemplateNotificationTemplateNameAuthenticationA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_reporting_template_notification_template_name_authentication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting_template_notification_template_name_authentication thunder_visibility_reporting_template_notification_template_name_authentication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityReportingTemplateNotificationTemplateNameAuthenticationAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityReportingTemplateNotificationTemplateNameAuthenticationAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_reporting_template_notification_template_name_authentication',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._apiKeyString = config.apiKeyString;
    this._authPassword = config.authPassword;
    this._authPasswordString = config.authPasswordString;
    this._authUsername = config.authUsername;
    this._id = config.id;
    this._name = config.name;
    this._relativeLoginUri = config.relativeLoginUri;
    this._relativeLogoffUri = config.relativeLogoffUri;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: number; 
  public get apiKey() {
    return this.getNumberAttribute('api_key');
  }
  public set apiKey(value: number) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_string - computed: false, optional: true, required: false
  private _apiKeyString?: string; 
  public get apiKeyString() {
    return this.getStringAttribute('api_key_string');
  }
  public set apiKeyString(value: string) {
    this._apiKeyString = value;
  }
  public resetApiKeyString() {
    this._apiKeyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyStringInput() {
    return this._apiKeyString;
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: number; 
  public get authPassword() {
    return this.getNumberAttribute('auth_password');
  }
  public set authPassword(value: number) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_password_string - computed: false, optional: true, required: false
  private _authPasswordString?: string; 
  public get authPasswordString() {
    return this.getStringAttribute('auth_password_string');
  }
  public set authPasswordString(value: string) {
    this._authPasswordString = value;
  }
  public resetAuthPasswordString() {
    this._authPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordStringInput() {
    return this._authPasswordString;
  }

  // auth_username - computed: false, optional: true, required: false
  private _authUsername?: string; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string) {
    this._authUsername = value;
  }
  public resetAuthUsername() {
    this._authUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername;
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

  // relative_login_uri - computed: false, optional: true, required: false
  private _relativeLoginUri?: string; 
  public get relativeLoginUri() {
    return this.getStringAttribute('relative_login_uri');
  }
  public set relativeLoginUri(value: string) {
    this._relativeLoginUri = value;
  }
  public resetRelativeLoginUri() {
    this._relativeLoginUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeLoginUriInput() {
    return this._relativeLoginUri;
  }

  // relative_logoff_uri - computed: false, optional: true, required: false
  private _relativeLogoffUri?: string; 
  public get relativeLogoffUri() {
    return this.getStringAttribute('relative_logoff_uri');
  }
  public set relativeLogoffUri(value: string) {
    this._relativeLogoffUri = value;
  }
  public resetRelativeLogoffUri() {
    this._relativeLogoffUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeLogoffUriInput() {
    return this._relativeLogoffUri;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.numberToTerraform(this._apiKey),
      api_key_string: cdktf.stringToTerraform(this._apiKeyString),
      auth_password: cdktf.numberToTerraform(this._authPassword),
      auth_password_string: cdktf.stringToTerraform(this._authPasswordString),
      auth_username: cdktf.stringToTerraform(this._authUsername),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      relative_login_uri: cdktf.stringToTerraform(this._relativeLoginUri),
      relative_logoff_uri: cdktf.stringToTerraform(this._relativeLogoffUri),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.numberToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_key_string: {
        value: cdktf.stringToHclTerraform(this._apiKeyString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_password: {
        value: cdktf.numberToHclTerraform(this._authPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_password_string: {
        value: cdktf.stringToHclTerraform(this._authPasswordString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_username: {
        value: cdktf.stringToHclTerraform(this._authUsername),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relative_login_uri: {
        value: cdktf.stringToHclTerraform(this._relativeLoginUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relative_logoff_uri: {
        value: cdktf.stringToHclTerraform(this._relativeLogoffUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
