// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tag id’s to be associated with the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#alert_tags_id WebhookIntegration#alert_tags_id}
  */
  readonly alertTagsId?: string[];
  /**
  * Authentication method to access the action url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#auth_method WebhookIntegration#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Mandatory, When close_send_custom_parameters is set as true.Custom parameters to be passed while accessing the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#close_custom_parameters WebhookIntegration#close_custom_parameters}
  */
  readonly closeCustomParameters?: string;
  /**
  * HTTP Method to access the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#close_method WebhookIntegration#close_method}
  */
  readonly closeMethod?: string;
  /**
  * Configuration to send custom parameters while closing the ticket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#close_send_custom_parameters WebhookIntegration#close_send_custom_parameters}
  */
  readonly closeSendCustomParameters?: boolean | cdktf.IResolvable;
  /**
  * Configuration to post in JSON format while closing the ticket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#close_send_in_json_format WebhookIntegration#close_send_in_json_format}
  */
  readonly closeSendInJsonFormat?: boolean | cdktf.IResolvable;
  /**
  * Configuration to send incident parameters while closing the ticket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#close_send_incident_parameters WebhookIntegration#close_send_incident_parameters}
  */
  readonly closeSendIncidentParameters?: boolean | cdktf.IResolvable;
  /**
  * URL to be invoked to close the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#close_url WebhookIntegration#close_url}
  */
  readonly closeUrl?: string;
  /**
  * Setting this to 'true' will send alert notifications to this third-party integration when the monitor status changes to 'Critical'. One among trouble_alert|critical_alert|down_alert should be set to true for receiving notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#critical_alert WebhookIntegration#critical_alert}
  */
  readonly criticalAlert?: boolean | cdktf.IResolvable;
  /**
  * A Map of Header name and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#custom_headers WebhookIntegration#custom_headers}
  */
  readonly customHeaders?: { [key: string]: string };
  /**
  * Mandatory, if send_custom_parameters is set as true.Custom parameters to be passed while accessing the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#custom_parameters WebhookIntegration#custom_parameters}
  */
  readonly customParameters?: string;
  /**
  * Setting this to 'true' will send alert notifications to this third-party integration when the monitor status changes to 'Down'. One among trouble_alert|critical_alert|down_alert should be set to true for receiving notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#down_alert WebhookIntegration#down_alert}
  */
  readonly downAlert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#id WebhookIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Boolean indicating whether it is an On-Premise Poller based Webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#is_poller_webhook WebhookIntegration#is_poller_webhook}
  */
  readonly isPollerWebhook?: boolean | cdktf.IResolvable;
  /**
  * Configuration to handle ticketing based integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#manage_tickets WebhookIntegration#manage_tickets}
  */
  readonly manageTickets?: boolean | cdktf.IResolvable;
  /**
  * HTTP Method to be used for accessing the website. PUT, PATCH and DELETE are not supported. Default value is 'G'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#method WebhookIntegration#method}
  */
  readonly method?: string;
  /**
  * Monitors to be associated with the integration when the selection_type = 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#monitors WebhookIntegration#monitors}
  */
  readonly monitors?: string[];
  /**
  * Display name for the OpsGenie Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#name WebhookIntegration#name}
  */
  readonly name: string;
  /**
  * Provider ID of the OAuth Provider to be associated with the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#oauth2_provider WebhookIntegration#oauth2_provider}
  */
  readonly oauth2Provider?: string;
  /**
  * Password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#password WebhookIntegration#password}
  */
  readonly password?: string;
  /**
  * Mandatory, if is_poller_webhook is set as true. Denotes On-Premise Poller ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#poller WebhookIntegration#poller}
  */
  readonly poller?: string;
  /**
  * Resource Type associated with this integration. Default value is '0'. Can take values 0|2|3. '0' denotes 'All Monitors', '2' denotes 'Monitors', '3' denotes 'Tags'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#selection_type WebhookIntegration#selection_type}
  */
  readonly selectionType?: number;
  /**
  * Configuration to send custom parameters while executing the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#send_custom_parameters WebhookIntegration#send_custom_parameters}
  */
  readonly sendCustomParameters?: boolean | cdktf.IResolvable;
  /**
  * Configuration to enable JSON format for post parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#send_in_json_format WebhookIntegration#send_in_json_format}
  */
  readonly sendInJsonFormat?: boolean | cdktf.IResolvable;
  /**
  * Configuration to send incident parameters while executing the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#send_incident_parameters WebhookIntegration#send_incident_parameters}
  */
  readonly sendIncidentParameters?: boolean | cdktf.IResolvable;
  /**
  * Tags to be associated with the integration when the selection_type = 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#tags WebhookIntegration#tags}
  */
  readonly tags?: string[];
  /**
  * The amount of time a connection waits to time out. Default value is 30. Range 1 - 45.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#timeout WebhookIntegration#timeout}
  */
  readonly timeout?: number;
  /**
  * Setting this to 'true' will send alert notifications to this third-party integration when the monitor status changes to 'Trouble'. One among trouble_alert|critical_alert|down_alert should be set to true for receiving notifications. Default value is 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#trouble_alert WebhookIntegration#trouble_alert}
  */
  readonly troubleAlert?: boolean | cdktf.IResolvable;
  /**
  * Configuration to send custom parameters while updating the ticket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#update_custom_parameters WebhookIntegration#update_custom_parameters}
  */
  readonly updateCustomParameters?: string;
  /**
  * HTTP Method to access the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#update_method WebhookIntegration#update_method}
  */
  readonly updateMethod?: string;
  /**
  * Configuration to send custom parameters while updating the ticket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#update_send_custom_parameters WebhookIntegration#update_send_custom_parameters}
  */
  readonly updateSendCustomParameters?: boolean | cdktf.IResolvable;
  /**
  * Configuration to post in JSON format while updating the ticket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#update_send_in_json_format WebhookIntegration#update_send_in_json_format}
  */
  readonly updateSendInJsonFormat?: boolean | cdktf.IResolvable;
  /**
  * Configuration to send incident parameters while updating the ticket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#update_send_incident_parameters WebhookIntegration#update_send_incident_parameters}
  */
  readonly updateSendIncidentParameters?: boolean | cdktf.IResolvable;
  /**
  * URL to be invoked to update the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#update_url WebhookIntegration#update_url}
  */
  readonly updateUrl?: string;
  /**
  * URL to be invoked for action execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#url WebhookIntegration#url}
  */
  readonly url: string;
  /**
  * User Agent to be used while monitoring the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#user_agent WebhookIntegration#user_agent}
  */
  readonly userAgent?: string;
  /**
  * User name for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#user_name WebhookIntegration#user_name}
  */
  readonly userName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration site24x7_webhook_integration}
*/
export class WebhookIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_webhook_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebhookIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebhookIntegration to import
  * @param importFromId The id of the existing WebhookIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebhookIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_webhook_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/webhook_integration site24x7_webhook_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_webhook_integration',
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
    this._alertTagsId = config.alertTagsId;
    this._authMethod = config.authMethod;
    this._closeCustomParameters = config.closeCustomParameters;
    this._closeMethod = config.closeMethod;
    this._closeSendCustomParameters = config.closeSendCustomParameters;
    this._closeSendInJsonFormat = config.closeSendInJsonFormat;
    this._closeSendIncidentParameters = config.closeSendIncidentParameters;
    this._closeUrl = config.closeUrl;
    this._criticalAlert = config.criticalAlert;
    this._customHeaders = config.customHeaders;
    this._customParameters = config.customParameters;
    this._downAlert = config.downAlert;
    this._id = config.id;
    this._isPollerWebhook = config.isPollerWebhook;
    this._manageTickets = config.manageTickets;
    this._method = config.method;
    this._monitors = config.monitors;
    this._name = config.name;
    this._oauth2Provider = config.oauth2Provider;
    this._password = config.password;
    this._poller = config.poller;
    this._selectionType = config.selectionType;
    this._sendCustomParameters = config.sendCustomParameters;
    this._sendInJsonFormat = config.sendInJsonFormat;
    this._sendIncidentParameters = config.sendIncidentParameters;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._troubleAlert = config.troubleAlert;
    this._updateCustomParameters = config.updateCustomParameters;
    this._updateMethod = config.updateMethod;
    this._updateSendCustomParameters = config.updateSendCustomParameters;
    this._updateSendInJsonFormat = config.updateSendInJsonFormat;
    this._updateSendIncidentParameters = config.updateSendIncidentParameters;
    this._updateUrl = config.updateUrl;
    this._url = config.url;
    this._userAgent = config.userAgent;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_tags_id - computed: false, optional: true, required: false
  private _alertTagsId?: string[]; 
  public get alertTagsId() {
    return this.getListAttribute('alert_tags_id');
  }
  public set alertTagsId(value: string[]) {
    this._alertTagsId = value;
  }
  public resetAlertTagsId() {
    this._alertTagsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTagsIdInput() {
    return this._alertTagsId;
  }

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

  // close_custom_parameters - computed: false, optional: true, required: false
  private _closeCustomParameters?: string; 
  public get closeCustomParameters() {
    return this.getStringAttribute('close_custom_parameters');
  }
  public set closeCustomParameters(value: string) {
    this._closeCustomParameters = value;
  }
  public resetCloseCustomParameters() {
    this._closeCustomParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeCustomParametersInput() {
    return this._closeCustomParameters;
  }

  // close_method - computed: false, optional: true, required: false
  private _closeMethod?: string; 
  public get closeMethod() {
    return this.getStringAttribute('close_method');
  }
  public set closeMethod(value: string) {
    this._closeMethod = value;
  }
  public resetCloseMethod() {
    this._closeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeMethodInput() {
    return this._closeMethod;
  }

  // close_send_custom_parameters - computed: false, optional: true, required: false
  private _closeSendCustomParameters?: boolean | cdktf.IResolvable; 
  public get closeSendCustomParameters() {
    return this.getBooleanAttribute('close_send_custom_parameters');
  }
  public set closeSendCustomParameters(value: boolean | cdktf.IResolvable) {
    this._closeSendCustomParameters = value;
  }
  public resetCloseSendCustomParameters() {
    this._closeSendCustomParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeSendCustomParametersInput() {
    return this._closeSendCustomParameters;
  }

  // close_send_in_json_format - computed: false, optional: true, required: false
  private _closeSendInJsonFormat?: boolean | cdktf.IResolvable; 
  public get closeSendInJsonFormat() {
    return this.getBooleanAttribute('close_send_in_json_format');
  }
  public set closeSendInJsonFormat(value: boolean | cdktf.IResolvable) {
    this._closeSendInJsonFormat = value;
  }
  public resetCloseSendInJsonFormat() {
    this._closeSendInJsonFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeSendInJsonFormatInput() {
    return this._closeSendInJsonFormat;
  }

  // close_send_incident_parameters - computed: false, optional: true, required: false
  private _closeSendIncidentParameters?: boolean | cdktf.IResolvable; 
  public get closeSendIncidentParameters() {
    return this.getBooleanAttribute('close_send_incident_parameters');
  }
  public set closeSendIncidentParameters(value: boolean | cdktf.IResolvable) {
    this._closeSendIncidentParameters = value;
  }
  public resetCloseSendIncidentParameters() {
    this._closeSendIncidentParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeSendIncidentParametersInput() {
    return this._closeSendIncidentParameters;
  }

  // close_url - computed: false, optional: true, required: false
  private _closeUrl?: string; 
  public get closeUrl() {
    return this.getStringAttribute('close_url');
  }
  public set closeUrl(value: string) {
    this._closeUrl = value;
  }
  public resetCloseUrl() {
    this._closeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeUrlInput() {
    return this._closeUrl;
  }

  // critical_alert - computed: false, optional: true, required: false
  private _criticalAlert?: boolean | cdktf.IResolvable; 
  public get criticalAlert() {
    return this.getBooleanAttribute('critical_alert');
  }
  public set criticalAlert(value: boolean | cdktf.IResolvable) {
    this._criticalAlert = value;
  }
  public resetCriticalAlert() {
    this._criticalAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalAlertInput() {
    return this._criticalAlert;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders?: { [key: string]: string }; 
  public get customHeaders() {
    return this.getStringMapAttribute('custom_headers');
  }
  public set customHeaders(value: { [key: string]: string }) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders;
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

  // down_alert - computed: false, optional: true, required: false
  private _downAlert?: boolean | cdktf.IResolvable; 
  public get downAlert() {
    return this.getBooleanAttribute('down_alert');
  }
  public set downAlert(value: boolean | cdktf.IResolvable) {
    this._downAlert = value;
  }
  public resetDownAlert() {
    this._downAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downAlertInput() {
    return this._downAlert;
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

  // is_poller_webhook - computed: false, optional: true, required: false
  private _isPollerWebhook?: boolean | cdktf.IResolvable; 
  public get isPollerWebhook() {
    return this.getBooleanAttribute('is_poller_webhook');
  }
  public set isPollerWebhook(value: boolean | cdktf.IResolvable) {
    this._isPollerWebhook = value;
  }
  public resetIsPollerWebhook() {
    this._isPollerWebhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPollerWebhookInput() {
    return this._isPollerWebhook;
  }

  // manage_tickets - computed: false, optional: true, required: false
  private _manageTickets?: boolean | cdktf.IResolvable; 
  public get manageTickets() {
    return this.getBooleanAttribute('manage_tickets');
  }
  public set manageTickets(value: boolean | cdktf.IResolvable) {
    this._manageTickets = value;
  }
  public resetManageTickets() {
    this._manageTickets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageTicketsInput() {
    return this._manageTickets;
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

  // monitors - computed: false, optional: true, required: false
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  public resetMonitors() {
    this._monitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
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

  // oauth2_provider - computed: false, optional: true, required: false
  private _oauth2Provider?: string; 
  public get oauth2Provider() {
    return this.getStringAttribute('oauth2_provider');
  }
  public set oauth2Provider(value: string) {
    this._oauth2Provider = value;
  }
  public resetOauth2Provider() {
    this._oauth2Provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ProviderInput() {
    return this._oauth2Provider;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // poller - computed: false, optional: true, required: false
  private _poller?: string; 
  public get poller() {
    return this.getStringAttribute('poller');
  }
  public set poller(value: string) {
    this._poller = value;
  }
  public resetPoller() {
    this._poller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollerInput() {
    return this._poller;
  }

  // selection_type - computed: false, optional: true, required: false
  private _selectionType?: number; 
  public get selectionType() {
    return this.getNumberAttribute('selection_type');
  }
  public set selectionType(value: number) {
    this._selectionType = value;
  }
  public resetSelectionType() {
    this._selectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionTypeInput() {
    return this._selectionType;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // trouble_alert - computed: false, optional: true, required: false
  private _troubleAlert?: boolean | cdktf.IResolvable; 
  public get troubleAlert() {
    return this.getBooleanAttribute('trouble_alert');
  }
  public set troubleAlert(value: boolean | cdktf.IResolvable) {
    this._troubleAlert = value;
  }
  public resetTroubleAlert() {
    this._troubleAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get troubleAlertInput() {
    return this._troubleAlert;
  }

  // update_custom_parameters - computed: false, optional: true, required: false
  private _updateCustomParameters?: string; 
  public get updateCustomParameters() {
    return this.getStringAttribute('update_custom_parameters');
  }
  public set updateCustomParameters(value: string) {
    this._updateCustomParameters = value;
  }
  public resetUpdateCustomParameters() {
    this._updateCustomParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCustomParametersInput() {
    return this._updateCustomParameters;
  }

  // update_method - computed: false, optional: true, required: false
  private _updateMethod?: string; 
  public get updateMethod() {
    return this.getStringAttribute('update_method');
  }
  public set updateMethod(value: string) {
    this._updateMethod = value;
  }
  public resetUpdateMethod() {
    this._updateMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMethodInput() {
    return this._updateMethod;
  }

  // update_send_custom_parameters - computed: false, optional: true, required: false
  private _updateSendCustomParameters?: boolean | cdktf.IResolvable; 
  public get updateSendCustomParameters() {
    return this.getBooleanAttribute('update_send_custom_parameters');
  }
  public set updateSendCustomParameters(value: boolean | cdktf.IResolvable) {
    this._updateSendCustomParameters = value;
  }
  public resetUpdateSendCustomParameters() {
    this._updateSendCustomParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSendCustomParametersInput() {
    return this._updateSendCustomParameters;
  }

  // update_send_in_json_format - computed: false, optional: true, required: false
  private _updateSendInJsonFormat?: boolean | cdktf.IResolvable; 
  public get updateSendInJsonFormat() {
    return this.getBooleanAttribute('update_send_in_json_format');
  }
  public set updateSendInJsonFormat(value: boolean | cdktf.IResolvable) {
    this._updateSendInJsonFormat = value;
  }
  public resetUpdateSendInJsonFormat() {
    this._updateSendInJsonFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSendInJsonFormatInput() {
    return this._updateSendInJsonFormat;
  }

  // update_send_incident_parameters - computed: false, optional: true, required: false
  private _updateSendIncidentParameters?: boolean | cdktf.IResolvable; 
  public get updateSendIncidentParameters() {
    return this.getBooleanAttribute('update_send_incident_parameters');
  }
  public set updateSendIncidentParameters(value: boolean | cdktf.IResolvable) {
    this._updateSendIncidentParameters = value;
  }
  public resetUpdateSendIncidentParameters() {
    this._updateSendIncidentParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSendIncidentParametersInput() {
    return this._updateSendIncidentParameters;
  }

  // update_url - computed: false, optional: true, required: false
  private _updateUrl?: string; 
  public get updateUrl() {
    return this.getStringAttribute('update_url');
  }
  public set updateUrl(value: string) {
    this._updateUrl = value;
  }
  public resetUpdateUrl() {
    this._updateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateUrlInput() {
    return this._updateUrl;
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

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_tags_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertTagsId),
      auth_method: cdktf.stringToTerraform(this._authMethod),
      close_custom_parameters: cdktf.stringToTerraform(this._closeCustomParameters),
      close_method: cdktf.stringToTerraform(this._closeMethod),
      close_send_custom_parameters: cdktf.booleanToTerraform(this._closeSendCustomParameters),
      close_send_in_json_format: cdktf.booleanToTerraform(this._closeSendInJsonFormat),
      close_send_incident_parameters: cdktf.booleanToTerraform(this._closeSendIncidentParameters),
      close_url: cdktf.stringToTerraform(this._closeUrl),
      critical_alert: cdktf.booleanToTerraform(this._criticalAlert),
      custom_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._customHeaders),
      custom_parameters: cdktf.stringToTerraform(this._customParameters),
      down_alert: cdktf.booleanToTerraform(this._downAlert),
      id: cdktf.stringToTerraform(this._id),
      is_poller_webhook: cdktf.booleanToTerraform(this._isPollerWebhook),
      manage_tickets: cdktf.booleanToTerraform(this._manageTickets),
      method: cdktf.stringToTerraform(this._method),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      name: cdktf.stringToTerraform(this._name),
      oauth2_provider: cdktf.stringToTerraform(this._oauth2Provider),
      password: cdktf.stringToTerraform(this._password),
      poller: cdktf.stringToTerraform(this._poller),
      selection_type: cdktf.numberToTerraform(this._selectionType),
      send_custom_parameters: cdktf.booleanToTerraform(this._sendCustomParameters),
      send_in_json_format: cdktf.booleanToTerraform(this._sendInJsonFormat),
      send_incident_parameters: cdktf.booleanToTerraform(this._sendIncidentParameters),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      timeout: cdktf.numberToTerraform(this._timeout),
      trouble_alert: cdktf.booleanToTerraform(this._troubleAlert),
      update_custom_parameters: cdktf.stringToTerraform(this._updateCustomParameters),
      update_method: cdktf.stringToTerraform(this._updateMethod),
      update_send_custom_parameters: cdktf.booleanToTerraform(this._updateSendCustomParameters),
      update_send_in_json_format: cdktf.booleanToTerraform(this._updateSendInJsonFormat),
      update_send_incident_parameters: cdktf.booleanToTerraform(this._updateSendIncidentParameters),
      update_url: cdktf.stringToTerraform(this._updateUrl),
      url: cdktf.stringToTerraform(this._url),
      user_agent: cdktf.stringToTerraform(this._userAgent),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_tags_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertTagsId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auth_method: {
        value: cdktf.stringToHclTerraform(this._authMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      close_custom_parameters: {
        value: cdktf.stringToHclTerraform(this._closeCustomParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      close_method: {
        value: cdktf.stringToHclTerraform(this._closeMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      close_send_custom_parameters: {
        value: cdktf.booleanToHclTerraform(this._closeSendCustomParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      close_send_in_json_format: {
        value: cdktf.booleanToHclTerraform(this._closeSendInJsonFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      close_send_incident_parameters: {
        value: cdktf.booleanToHclTerraform(this._closeSendIncidentParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      close_url: {
        value: cdktf.stringToHclTerraform(this._closeUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      critical_alert: {
        value: cdktf.booleanToHclTerraform(this._criticalAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      custom_parameters: {
        value: cdktf.stringToHclTerraform(this._customParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      down_alert: {
        value: cdktf.booleanToHclTerraform(this._downAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_poller_webhook: {
        value: cdktf.booleanToHclTerraform(this._isPollerWebhook),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_tickets: {
        value: cdktf.booleanToHclTerraform(this._manageTickets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_provider: {
        value: cdktf.stringToHclTerraform(this._oauth2Provider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poller: {
        value: cdktf.stringToHclTerraform(this._poller),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selection_type: {
        value: cdktf.numberToHclTerraform(this._selectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      send_custom_parameters: {
        value: cdktf.booleanToHclTerraform(this._sendCustomParameters),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trouble_alert: {
        value: cdktf.booleanToHclTerraform(this._troubleAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_custom_parameters: {
        value: cdktf.stringToHclTerraform(this._updateCustomParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_method: {
        value: cdktf.stringToHclTerraform(this._updateMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_send_custom_parameters: {
        value: cdktf.booleanToHclTerraform(this._updateSendCustomParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_send_in_json_format: {
        value: cdktf.booleanToHclTerraform(this._updateSendInJsonFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_send_incident_parameters: {
        value: cdktf.booleanToHclTerraform(this._updateSendIncidentParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_url: {
        value: cdktf.stringToHclTerraform(this._updateUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
