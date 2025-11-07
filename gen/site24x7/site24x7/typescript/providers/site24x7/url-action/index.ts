// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UrlActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication method to access the action url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action#auth_method UrlAction#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Mandatory, if send_custom_parameters is set as true. Custom parameters to be passed while accessing the action url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action#custom_parameters UrlAction#custom_parameters}
  */
  readonly customParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action#id UrlAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * HTTP Method to access the action url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action#method UrlAction#method}
  */
  readonly method?: string;
  /**
  * Display name for the Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action#name UrlAction#name}
  */
  readonly name: string;
  /**
  * Configuration to send custom parameters while executing the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action#send_custom_parameters UrlAction#send_custom_parameters}
  */
  readonly sendCustomParameters?: boolean | cdktf.IResolvable;
  /**
  * Boolean indicating whether to send email or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action#send_email UrlAction#send_email}
  */
  readonly sendEmail?: boolean | cdktf.IResolvable;
  /**
  * Optional, use only if HTTP Method chosen is GET. Configuration to enable json format for post parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action#send_in_json_format UrlAction#send_in_json_format}
  */
  readonly sendInJsonFormat?: boolean | cdktf.IResolvable;
  /**
  * Configuration to send incident parameters while executing the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action#send_incident_parameters UrlAction#send_incident_parameters}
  */
  readonly sendIncidentParameters?: boolean | cdktf.IResolvable;
  /**
  * Timeout for connecting to website. Default value is 10. Range 1 - 90.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action#timeout UrlAction#timeout}
  */
  readonly timeout?: number;
  /**
  * URL to be invoked for action execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action#url UrlAction#url}
  */
  readonly url: string;
  /**
  * User Agent to be used while monitoring the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action#user_agent UrlAction#user_agent}
  */
  readonly userAgent?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action site24x7_url_action}
*/
export class UrlAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_url_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UrlAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UrlAction to import
  * @param importFromId The id of the existing UrlAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UrlAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_url_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/url_action site24x7_url_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UrlActionConfig
  */
  public constructor(scope: Construct, id: string, config: UrlActionConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_url_action',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authMethod = config.authMethod;
    this._customParameters = config.customParameters;
    this._id = config.id;
    this._method = config.method;
    this._name = config.name;
    this._sendCustomParameters = config.sendCustomParameters;
    this._sendEmail = config.sendEmail;
    this._sendInJsonFormat = config.sendInJsonFormat;
    this._sendIncidentParameters = config.sendIncidentParameters;
    this._timeout = config.timeout;
    this._url = config.url;
    this._userAgent = config.userAgent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // custom_parameters - computed: false, optional: true, required: false
  private _customParameters?: string; 
  public get customParameters() {
    return this.getStringAttribute('custom_parameters');
  }
  public set customParameters(value: string) {
    this._customParameters = value;
  }
  public resetCustomParameters() {
    this._customParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParametersInput() {
    return this._customParameters;
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

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // send_custom_parameters - computed: false, optional: true, required: false
  private _sendCustomParameters?: boolean | cdktf.IResolvable; 
  public get sendCustomParameters() {
    return this.getBooleanAttribute('send_custom_parameters');
  }
  public set sendCustomParameters(value: boolean | cdktf.IResolvable) {
    this._sendCustomParameters = value;
  }
  public resetSendCustomParameters() {
    this._sendCustomParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCustomParametersInput() {
    return this._sendCustomParameters;
  }

  // send_email - computed: false, optional: true, required: false
  private _sendEmail?: boolean | cdktf.IResolvable; 
  public get sendEmail() {
    return this.getBooleanAttribute('send_email');
  }
  public set sendEmail(value: boolean | cdktf.IResolvable) {
    this._sendEmail = value;
  }
  public resetSendEmail() {
    this._sendEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailInput() {
    return this._sendEmail;
  }

  // send_in_json_format - computed: false, optional: true, required: false
  private _sendInJsonFormat?: boolean | cdktf.IResolvable; 
  public get sendInJsonFormat() {
    return this.getBooleanAttribute('send_in_json_format');
  }
  public set sendInJsonFormat(value: boolean | cdktf.IResolvable) {
    this._sendInJsonFormat = value;
  }
  public resetSendInJsonFormat() {
    this._sendInJsonFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInJsonFormatInput() {
    return this._sendInJsonFormat;
  }

  // send_incident_parameters - computed: false, optional: true, required: false
  private _sendIncidentParameters?: boolean | cdktf.IResolvable; 
  public get sendIncidentParameters() {
    return this.getBooleanAttribute('send_incident_parameters');
  }
  public set sendIncidentParameters(value: boolean | cdktf.IResolvable) {
    this._sendIncidentParameters = value;
  }
  public resetSendIncidentParameters() {
    this._sendIncidentParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIncidentParametersInput() {
    return this._sendIncidentParameters;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_method: cdktf.stringToTerraform(this._authMethod),
      custom_parameters: cdktf.stringToTerraform(this._customParameters),
      id: cdktf.stringToTerraform(this._id),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      send_custom_parameters: cdktf.booleanToTerraform(this._sendCustomParameters),
      send_email: cdktf.booleanToTerraform(this._sendEmail),
      send_in_json_format: cdktf.booleanToTerraform(this._sendInJsonFormat),
      send_incident_parameters: cdktf.booleanToTerraform(this._sendIncidentParameters),
      timeout: cdktf.numberToTerraform(this._timeout),
      url: cdktf.stringToTerraform(this._url),
      user_agent: cdktf.stringToTerraform(this._userAgent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_method: {
        value: cdktf.stringToHclTerraform(this._authMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_parameters: {
        value: cdktf.stringToHclTerraform(this._customParameters),
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
      method: {
        value: cdktf.stringToHclTerraform(this._method),
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
      send_custom_parameters: {
        value: cdktf.booleanToHclTerraform(this._sendCustomParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_email: {
        value: cdktf.booleanToHclTerraform(this._sendEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_in_json_format: {
        value: cdktf.booleanToHclTerraform(this._sendInJsonFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_incident_parameters: {
        value: cdktf.booleanToHclTerraform(this._sendIncidentParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_agent: {
        value: cdktf.stringToHclTerraform(this._userAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
