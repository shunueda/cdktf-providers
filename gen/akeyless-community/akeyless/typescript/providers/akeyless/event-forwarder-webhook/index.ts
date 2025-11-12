// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventForwarderWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auth Methods event sources to forward events about, for example: /abc/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#auth_methods_event_source_locations EventForwarderWebhook#auth_methods_event_source_locations}
  */
  readonly authMethodsEventSourceLocations?: string[];
  /**
  * Base64 encoded Token string relevant for token auth-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#auth_token EventForwarderWebhook#auth_token}
  */
  readonly authToken?: string;
  /**
  * The Webhook authentication type [user-pass, bearer-token, certificate]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#auth_type EventForwarderWebhook#auth_type}
  */
  readonly authType?: string;
  /**
  * Base64 encoded PEM certificate, relevant for certificate auth-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#client_cert_data EventForwarderWebhook#client_cert_data}
  */
  readonly clientCertData?: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#description EventForwarderWebhook#description}
  */
  readonly description?: string;
  /**
  * A comma-separated list of types of events to notify about
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#event_types EventForwarderWebhook#event_types}
  */
  readonly eventTypes?: string[];
  /**
  * Rate of periodic runner repetition in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#every EventForwarderWebhook#every}
  */
  readonly every?: string;
  /**
  * Gateways event sources to forward events about,for example the relevant Gateways cluster urls,: http://localhost:8000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#gateways_event_source_locations EventForwarderWebhook#gateways_event_source_locations}
  */
  readonly gatewaysEventSourceLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#id EventForwarderWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Items event sources to forward events about, for example: /abc/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#items_event_source_locations EventForwarderWebhook#items_event_source_locations}
  */
  readonly itemsEventSourceLocations?: string[];
  /**
  * Key name. The key will be used to encrypt the Event Forwarder secret value. If key name is not specified, the account default protection key is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#key EventForwarderWebhook#key}
  */
  readonly key?: string;
  /**
  * Event Forwarder name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#name EventForwarderWebhook#name}
  */
  readonly name: string;
  /**
  * Password for authentication relevant for user-pass auth-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#password EventForwarderWebhook#password}
  */
  readonly password?: string;
  /**
  * Base64 encoded PEM RSA Private Key, relevant for certificate auth-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#private_key_data EventForwarderWebhook#private_key_data}
  */
  readonly privateKeyData?: string;
  /**
  * Event Forwarder runner type [immediate/periodic]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#runner_type EventForwarderWebhook#runner_type}
  */
  readonly runnerType?: string;
  /**
  * Base64 encoded PEM certificate of the Webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#server_certificates EventForwarderWebhook#server_certificates}
  */
  readonly serverCertificates?: string;
  /**
  * Targets event sources to forward events about, for example: /abc/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#targets_event_source_locations EventForwarderWebhook#targets_event_source_locations}
  */
  readonly targetsEventSourceLocations?: string[];
  /**
  * Webhook URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#url EventForwarderWebhook#url}
  */
  readonly url?: string;
  /**
  * Username for authentication relevant for user-pass auth-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#username EventForwarderWebhook#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook akeyless_event_forwarder_webhook}
*/
export class EventForwarderWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_event_forwarder_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventForwarderWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventForwarderWebhook to import
  * @param importFromId The id of the existing EventForwarderWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventForwarderWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_event_forwarder_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_webhook akeyless_event_forwarder_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventForwarderWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: EventForwarderWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_event_forwarder_webhook',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authMethodsEventSourceLocations = config.authMethodsEventSourceLocations;
    this._authToken = config.authToken;
    this._authType = config.authType;
    this._clientCertData = config.clientCertData;
    this._description = config.description;
    this._eventTypes = config.eventTypes;
    this._every = config.every;
    this._gatewaysEventSourceLocations = config.gatewaysEventSourceLocations;
    this._id = config.id;
    this._itemsEventSourceLocations = config.itemsEventSourceLocations;
    this._key = config.key;
    this._name = config.name;
    this._password = config.password;
    this._privateKeyData = config.privateKeyData;
    this._runnerType = config.runnerType;
    this._serverCertificates = config.serverCertificates;
    this._targetsEventSourceLocations = config.targetsEventSourceLocations;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_methods_event_source_locations - computed: false, optional: true, required: false
  private _authMethodsEventSourceLocations?: string[]; 
  public get authMethodsEventSourceLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_methods_event_source_locations'));
  }
  public set authMethodsEventSourceLocations(value: string[]) {
    this._authMethodsEventSourceLocations = value;
  }
  public resetAuthMethodsEventSourceLocations() {
    this._authMethodsEventSourceLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodsEventSourceLocationsInput() {
    return this._authMethodsEventSourceLocations;
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // client_cert_data - computed: false, optional: true, required: false
  private _clientCertData?: string; 
  public get clientCertData() {
    return this.getStringAttribute('client_cert_data');
  }
  public set clientCertData(value: string) {
    this._clientCertData = value;
  }
  public resetClientCertData() {
    this._clientCertData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertDataInput() {
    return this._clientCertData;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // event_types - computed: false, optional: true, required: false
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('event_types'));
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  public resetEventTypes() {
    this._eventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
  }

  // every - computed: false, optional: true, required: false
  private _every?: string; 
  public get every() {
    return this.getStringAttribute('every');
  }
  public set every(value: string) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // gateways_event_source_locations - computed: false, optional: true, required: false
  private _gatewaysEventSourceLocations?: string[]; 
  public get gatewaysEventSourceLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('gateways_event_source_locations'));
  }
  public set gatewaysEventSourceLocations(value: string[]) {
    this._gatewaysEventSourceLocations = value;
  }
  public resetGatewaysEventSourceLocations() {
    this._gatewaysEventSourceLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysEventSourceLocationsInput() {
    return this._gatewaysEventSourceLocations;
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

  // items_event_source_locations - computed: false, optional: true, required: false
  private _itemsEventSourceLocations?: string[]; 
  public get itemsEventSourceLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('items_event_source_locations'));
  }
  public set itemsEventSourceLocations(value: string[]) {
    this._itemsEventSourceLocations = value;
  }
  public resetItemsEventSourceLocations() {
    this._itemsEventSourceLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsEventSourceLocationsInput() {
    return this._itemsEventSourceLocations;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // private_key_data - computed: false, optional: true, required: false
  private _privateKeyData?: string; 
  public get privateKeyData() {
    return this.getStringAttribute('private_key_data');
  }
  public set privateKeyData(value: string) {
    this._privateKeyData = value;
  }
  public resetPrivateKeyData() {
    this._privateKeyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyDataInput() {
    return this._privateKeyData;
  }

  // runner_type - computed: false, optional: true, required: false
  private _runnerType?: string; 
  public get runnerType() {
    return this.getStringAttribute('runner_type');
  }
  public set runnerType(value: string) {
    this._runnerType = value;
  }
  public resetRunnerType() {
    this._runnerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerTypeInput() {
    return this._runnerType;
  }

  // server_certificates - computed: false, optional: true, required: false
  private _serverCertificates?: string; 
  public get serverCertificates() {
    return this.getStringAttribute('server_certificates');
  }
  public set serverCertificates(value: string) {
    this._serverCertificates = value;
  }
  public resetServerCertificates() {
    this._serverCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificatesInput() {
    return this._serverCertificates;
  }

  // targets_event_source_locations - computed: false, optional: true, required: false
  private _targetsEventSourceLocations?: string[]; 
  public get targetsEventSourceLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('targets_event_source_locations'));
  }
  public set targetsEventSourceLocations(value: string[]) {
    this._targetsEventSourceLocations = value;
  }
  public resetTargetsEventSourceLocations() {
    this._targetsEventSourceLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsEventSourceLocationsInput() {
    return this._targetsEventSourceLocations;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_methods_event_source_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authMethodsEventSourceLocations),
      auth_token: cdktf.stringToTerraform(this._authToken),
      auth_type: cdktf.stringToTerraform(this._authType),
      client_cert_data: cdktf.stringToTerraform(this._clientCertData),
      description: cdktf.stringToTerraform(this._description),
      event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventTypes),
      every: cdktf.stringToTerraform(this._every),
      gateways_event_source_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gatewaysEventSourceLocations),
      id: cdktf.stringToTerraform(this._id),
      items_event_source_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._itemsEventSourceLocations),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      private_key_data: cdktf.stringToTerraform(this._privateKeyData),
      runner_type: cdktf.stringToTerraform(this._runnerType),
      server_certificates: cdktf.stringToTerraform(this._serverCertificates),
      targets_event_source_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetsEventSourceLocations),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_methods_event_source_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authMethodsEventSourceLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert_data: {
        value: cdktf.stringToHclTerraform(this._clientCertData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      every: {
        value: cdktf.stringToHclTerraform(this._every),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateways_event_source_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gatewaysEventSourceLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      items_event_source_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._itemsEventSourceLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_data: {
        value: cdktf.stringToHclTerraform(this._privateKeyData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runner_type: {
        value: cdktf.stringToHclTerraform(this._runnerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificates: {
        value: cdktf.stringToHclTerraform(this._serverCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets_event_source_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetsEventSourceLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
