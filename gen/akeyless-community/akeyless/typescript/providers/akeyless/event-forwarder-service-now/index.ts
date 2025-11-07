// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventForwarderServiceNowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Workstation Admin Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#admin_name EventForwarderServiceNow#admin_name}
  */
  readonly adminName?: string;
  /**
  * Workstation Admin Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#admin_pwd EventForwarderServiceNow#admin_pwd}
  */
  readonly adminPwd?: string;
  /**
  * The RSA Private Key to use when connecting with jwt authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#app_private_key_base64 EventForwarderServiceNow#app_private_key_base64}
  */
  readonly appPrivateKeyBase64?: string;
  /**
  * Auth Methods event sources to forward events about, for example: /abc/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#auth_methods_event_source_locations EventForwarderServiceNow#auth_methods_event_source_locations}
  */
  readonly authMethodsEventSourceLocations?: string[];
  /**
  * The authentication type to use [user-pass/jwt]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#auth_type EventForwarderServiceNow#auth_type}
  */
  readonly authType?: string;
  /**
  * The client ID to use when connecting with jwt authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#client_id EventForwarderServiceNow#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret to use when connecting with jwt authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#client_secret EventForwarderServiceNow#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#description EventForwarderServiceNow#description}
  */
  readonly description?: string;
  /**
  * A comma-separated list of types of events to notify about
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#event_types EventForwarderServiceNow#event_types}
  */
  readonly eventTypes?: string[];
  /**
  * Rate of periodic runner repetition in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#every EventForwarderServiceNow#every}
  */
  readonly every?: string;
  /**
  * Gateways event sources to forward events about,for example the relevant Gateways cluster urls,: http://localhost:8000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#gateways_event_source_locations EventForwarderServiceNow#gateways_event_source_locations}
  */
  readonly gatewaysEventSourceLocations?: string[];
  /**
  * Workstation Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#host EventForwarderServiceNow#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#id EventForwarderServiceNow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Items event sources to forward events about, for example: /abc/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#items_event_source_locations EventForwarderServiceNow#items_event_source_locations}
  */
  readonly itemsEventSourceLocations?: string[];
  /**
  * Key name. The key will be used to encrypt the Event Forwarder secret value. If key name is not specified, the account default protection key is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#key EventForwarderServiceNow#key}
  */
  readonly key?: string;
  /**
  * Event Forwarder name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#name EventForwarderServiceNow#name}
  */
  readonly name: string;
  /**
  * Event Forwarder runner type [immediate/periodic]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#runner_type EventForwarderServiceNow#runner_type}
  */
  readonly runnerType?: string;
  /**
  * Targets event sources to forward events about, for example: /abc/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#targets_event_source_locations EventForwarderServiceNow#targets_event_source_locations}
  */
  readonly targetsEventSourceLocations?: string[];
  /**
  * The user email to identify with when connecting with jwt authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#user_email EventForwarderServiceNow#user_email}
  */
  readonly userEmail?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now akeyless_event_forwarder_service_now}
*/
export class EventForwarderServiceNow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_event_forwarder_service_now";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventForwarderServiceNow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventForwarderServiceNow to import
  * @param importFromId The id of the existing EventForwarderServiceNow that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventForwarderServiceNow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_event_forwarder_service_now", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/event_forwarder_service_now akeyless_event_forwarder_service_now} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventForwarderServiceNowConfig
  */
  public constructor(scope: Construct, id: string, config: EventForwarderServiceNowConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_event_forwarder_service_now',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminName = config.adminName;
    this._adminPwd = config.adminPwd;
    this._appPrivateKeyBase64 = config.appPrivateKeyBase64;
    this._authMethodsEventSourceLocations = config.authMethodsEventSourceLocations;
    this._authType = config.authType;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._description = config.description;
    this._eventTypes = config.eventTypes;
    this._every = config.every;
    this._gatewaysEventSourceLocations = config.gatewaysEventSourceLocations;
    this._host = config.host;
    this._id = config.id;
    this._itemsEventSourceLocations = config.itemsEventSourceLocations;
    this._key = config.key;
    this._name = config.name;
    this._runnerType = config.runnerType;
    this._targetsEventSourceLocations = config.targetsEventSourceLocations;
    this._userEmail = config.userEmail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_name - computed: false, optional: true, required: false
  private _adminName?: string; 
  public get adminName() {
    return this.getStringAttribute('admin_name');
  }
  public set adminName(value: string) {
    this._adminName = value;
  }
  public resetAdminName() {
    this._adminName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNameInput() {
    return this._adminName;
  }

  // admin_pwd - computed: false, optional: true, required: false
  private _adminPwd?: string; 
  public get adminPwd() {
    return this.getStringAttribute('admin_pwd');
  }
  public set adminPwd(value: string) {
    this._adminPwd = value;
  }
  public resetAdminPwd() {
    this._adminPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPwdInput() {
    return this._adminPwd;
  }

  // app_private_key_base64 - computed: false, optional: true, required: false
  private _appPrivateKeyBase64?: string; 
  public get appPrivateKeyBase64() {
    return this.getStringAttribute('app_private_key_base64');
  }
  public set appPrivateKeyBase64(value: string) {
    this._appPrivateKeyBase64 = value;
  }
  public resetAppPrivateKeyBase64() {
    this._appPrivateKeyBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPrivateKeyBase64Input() {
    return this._appPrivateKeyBase64;
  }

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

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // user_email - computed: false, optional: true, required: false
  private _userEmail?: string; 
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }
  public set userEmail(value: string) {
    this._userEmail = value;
  }
  public resetUserEmail() {
    this._userEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailInput() {
    return this._userEmail;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_name: cdktf.stringToTerraform(this._adminName),
      admin_pwd: cdktf.stringToTerraform(this._adminPwd),
      app_private_key_base64: cdktf.stringToTerraform(this._appPrivateKeyBase64),
      auth_methods_event_source_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authMethodsEventSourceLocations),
      auth_type: cdktf.stringToTerraform(this._authType),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      description: cdktf.stringToTerraform(this._description),
      event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventTypes),
      every: cdktf.stringToTerraform(this._every),
      gateways_event_source_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gatewaysEventSourceLocations),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      items_event_source_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._itemsEventSourceLocations),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      runner_type: cdktf.stringToTerraform(this._runnerType),
      targets_event_source_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetsEventSourceLocations),
      user_email: cdktf.stringToTerraform(this._userEmail),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_name: {
        value: cdktf.stringToHclTerraform(this._adminName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_pwd: {
        value: cdktf.stringToHclTerraform(this._adminPwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_private_key_base64: {
        value: cdktf.stringToHclTerraform(this._appPrivateKeyBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_methods_event_source_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authMethodsEventSourceLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
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
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      runner_type: {
        value: cdktf.stringToHclTerraform(this._runnerType),
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
      user_email: {
        value: cdktf.stringToHclTerraform(this._userEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
