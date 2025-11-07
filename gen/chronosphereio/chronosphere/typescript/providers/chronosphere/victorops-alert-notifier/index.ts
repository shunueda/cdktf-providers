// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VictoropsAlertNotifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#api_key VictoropsAlertNotifier#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#api_url VictoropsAlertNotifier#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#basic_auth_password VictoropsAlertNotifier#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#basic_auth_username VictoropsAlertNotifier#basic_auth_username}
  */
  readonly basicAuthUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#bearer_token VictoropsAlertNotifier#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#custom_fields VictoropsAlertNotifier#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#entity_display_name VictoropsAlertNotifier#entity_display_name}
  */
  readonly entityDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#id VictoropsAlertNotifier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#message_type VictoropsAlertNotifier#message_type}
  */
  readonly messageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#monitoring_tool VictoropsAlertNotifier#monitoring_tool}
  */
  readonly monitoringTool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#name VictoropsAlertNotifier#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#proxy_url VictoropsAlertNotifier#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#routing_key VictoropsAlertNotifier#routing_key}
  */
  readonly routingKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#send_resolved VictoropsAlertNotifier#send_resolved}
  */
  readonly sendResolved?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#slug VictoropsAlertNotifier#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#state_message VictoropsAlertNotifier#state_message}
  */
  readonly stateMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#tls_insecure_skip_verify VictoropsAlertNotifier#tls_insecure_skip_verify}
  */
  readonly tlsInsecureSkipVerify?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier chronosphere_victorops_alert_notifier}
*/
export class VictoropsAlertNotifier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_victorops_alert_notifier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VictoropsAlertNotifier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VictoropsAlertNotifier to import
  * @param importFromId The id of the existing VictoropsAlertNotifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VictoropsAlertNotifier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_victorops_alert_notifier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/victorops_alert_notifier chronosphere_victorops_alert_notifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VictoropsAlertNotifierConfig
  */
  public constructor(scope: Construct, id: string, config: VictoropsAlertNotifierConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_victorops_alert_notifier',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.17.0'
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
    this._apiUrl = config.apiUrl;
    this._basicAuthPassword = config.basicAuthPassword;
    this._basicAuthUsername = config.basicAuthUsername;
    this._bearerToken = config.bearerToken;
    this._customFields = config.customFields;
    this._entityDisplayName = config.entityDisplayName;
    this._id = config.id;
    this._messageType = config.messageType;
    this._monitoringTool = config.monitoringTool;
    this._name = config.name;
    this._proxyUrl = config.proxyUrl;
    this._routingKey = config.routingKey;
    this._sendResolved = config.sendResolved;
    this._slug = config.slug;
    this._stateMessage = config.stateMessage;
    this._tlsInsecureSkipVerify = config.tlsInsecureSkipVerify;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // basic_auth_password - computed: false, optional: true, required: false
  private _basicAuthPassword?: string; 
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }
  public set basicAuthPassword(value: string) {
    this._basicAuthPassword = value;
  }
  public resetBasicAuthPassword() {
    this._basicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordInput() {
    return this._basicAuthPassword;
  }

  // basic_auth_username - computed: false, optional: true, required: false
  private _basicAuthUsername?: string; 
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }
  public set basicAuthUsername(value: string) {
    this._basicAuthUsername = value;
  }
  public resetBasicAuthUsername() {
    this._basicAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUsernameInput() {
    return this._basicAuthUsername;
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // custom_fields - computed: false, optional: true, required: false
  private _customFields?: { [key: string]: string }; 
  public get customFields() {
    return this.getStringMapAttribute('custom_fields');
  }
  public set customFields(value: { [key: string]: string }) {
    this._customFields = value;
  }
  public resetCustomFields() {
    this._customFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields;
  }

  // entity_display_name - computed: false, optional: true, required: false
  private _entityDisplayName?: string; 
  public get entityDisplayName() {
    return this.getStringAttribute('entity_display_name');
  }
  public set entityDisplayName(value: string) {
    this._entityDisplayName = value;
  }
  public resetEntityDisplayName() {
    this._entityDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityDisplayNameInput() {
    return this._entityDisplayName;
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

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // monitoring_tool - computed: false, optional: true, required: false
  private _monitoringTool?: string; 
  public get monitoringTool() {
    return this.getStringAttribute('monitoring_tool');
  }
  public set monitoringTool(value: string) {
    this._monitoringTool = value;
  }
  public resetMonitoringTool() {
    this._monitoringTool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringToolInput() {
    return this._monitoringTool;
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

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // routing_key - computed: false, optional: false, required: true
  private _routingKey?: string; 
  public get routingKey() {
    return this.getStringAttribute('routing_key');
  }
  public set routingKey(value: string) {
    this._routingKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingKeyInput() {
    return this._routingKey;
  }

  // send_resolved - computed: false, optional: true, required: false
  private _sendResolved?: boolean | cdktf.IResolvable; 
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }
  public set sendResolved(value: boolean | cdktf.IResolvable) {
    this._sendResolved = value;
  }
  public resetSendResolved() {
    this._sendResolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendResolvedInput() {
    return this._sendResolved;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // state_message - computed: false, optional: true, required: false
  private _stateMessage?: string; 
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
  public set stateMessage(value: string) {
    this._stateMessage = value;
  }
  public resetStateMessage() {
    this._stateMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMessageInput() {
    return this._stateMessage;
  }

  // tls_insecure_skip_verify - computed: false, optional: true, required: false
  private _tlsInsecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get tlsInsecureSkipVerify() {
    return this.getBooleanAttribute('tls_insecure_skip_verify');
  }
  public set tlsInsecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._tlsInsecureSkipVerify = value;
  }
  public resetTlsInsecureSkipVerify() {
    this._tlsInsecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInsecureSkipVerifyInput() {
    return this._tlsInsecureSkipVerify;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      basic_auth_password: cdktf.stringToTerraform(this._basicAuthPassword),
      basic_auth_username: cdktf.stringToTerraform(this._basicAuthUsername),
      bearer_token: cdktf.stringToTerraform(this._bearerToken),
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      entity_display_name: cdktf.stringToTerraform(this._entityDisplayName),
      id: cdktf.stringToTerraform(this._id),
      message_type: cdktf.stringToTerraform(this._messageType),
      monitoring_tool: cdktf.stringToTerraform(this._monitoringTool),
      name: cdktf.stringToTerraform(this._name),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      routing_key: cdktf.stringToTerraform(this._routingKey),
      send_resolved: cdktf.booleanToTerraform(this._sendResolved),
      slug: cdktf.stringToTerraform(this._slug),
      state_message: cdktf.stringToTerraform(this._stateMessage),
      tls_insecure_skip_verify: cdktf.booleanToTerraform(this._tlsInsecureSkipVerify),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_password: {
        value: cdktf.stringToHclTerraform(this._basicAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_username: {
        value: cdktf.stringToHclTerraform(this._basicAuthUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bearer_token: {
        value: cdktf.stringToHclTerraform(this._bearerToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customFields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      entity_display_name: {
        value: cdktf.stringToHclTerraform(this._entityDisplayName),
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
      message_type: {
        value: cdktf.stringToHclTerraform(this._messageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_tool: {
        value: cdktf.stringToHclTerraform(this._monitoringTool),
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
      proxy_url: {
        value: cdktf.stringToHclTerraform(this._proxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_key: {
        value: cdktf.stringToHclTerraform(this._routingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_resolved: {
        value: cdktf.booleanToHclTerraform(this._sendResolved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_message: {
        value: cdktf.stringToHclTerraform(this._stateMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_insecure_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._tlsInsecureSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
