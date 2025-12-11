// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventForwarderEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auth Methods event sources to forward events about, for example: /abc/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#auth_methods_event_source_locations EventForwarderEmail#auth_methods_event_source_locations}
  */
  readonly authMethodsEventSourceLocations?: string[];
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#description EventForwarderEmail#description}
  */
  readonly description?: string;
  /**
  * A comma seperated list of email addresses to send event to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#email_to EventForwarderEmail#email_to}
  */
  readonly emailTo?: string;
  /**
  * A comma-separated list of types of events to notify about
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#event_types EventForwarderEmail#event_types}
  */
  readonly eventTypes?: string[];
  /**
  * Rate of periodic runner repetition in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#every EventForwarderEmail#every}
  */
  readonly every?: string;
  /**
  * Gateways event sources to forward events about,for example the relevant Gateways cluster urls,: http://localhost:8000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#gateways_event_source_locations EventForwarderEmail#gateways_event_source_locations}
  */
  readonly gatewaysEventSourceLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#id EventForwarderEmail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set this option to include event errors details [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#include_error EventForwarderEmail#include_error}
  */
  readonly includeError?: string;
  /**
  * Items event sources to forward events about, for example: /abc/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#items_event_source_locations EventForwarderEmail#items_event_source_locations}
  */
  readonly itemsEventSourceLocations?: string[];
  /**
  * Key name. The key will be used to encrypt the Event Forwarder secret value. If key name is not specified, the account default protection key is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#key EventForwarderEmail#key}
  */
  readonly key?: string;
  /**
  * Event Forwarder name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#name EventForwarderEmail#name}
  */
  readonly name: string;
  /**
  * Override Akeyless default URL with your Gateway url (port 18888)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#override_url EventForwarderEmail#override_url}
  */
  readonly overrideUrl?: string;
  /**
  * Event Forwarder runner type [immediate/periodic]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#runner_type EventForwarderEmail#runner_type}
  */
  readonly runnerType?: string;
  /**
  * Targets event sources to forward events about, for example: /abc/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#targets_event_source_locations EventForwarderEmail#targets_event_source_locations}
  */
  readonly targetsEventSourceLocations?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email akeyless_event_forwarder_email}
*/
export class EventForwarderEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_event_forwarder_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventForwarderEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventForwarderEmail to import
  * @param importFromId The id of the existing EventForwarderEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventForwarderEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_event_forwarder_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/event_forwarder_email akeyless_event_forwarder_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventForwarderEmailConfig
  */
  public constructor(scope: Construct, id: string, config: EventForwarderEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_event_forwarder_email',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
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
    this._description = config.description;
    this._emailTo = config.emailTo;
    this._eventTypes = config.eventTypes;
    this._every = config.every;
    this._gatewaysEventSourceLocations = config.gatewaysEventSourceLocations;
    this._id = config.id;
    this._includeError = config.includeError;
    this._itemsEventSourceLocations = config.itemsEventSourceLocations;
    this._key = config.key;
    this._name = config.name;
    this._overrideUrl = config.overrideUrl;
    this._runnerType = config.runnerType;
    this._targetsEventSourceLocations = config.targetsEventSourceLocations;
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

  // email_to - computed: false, optional: true, required: false
  private _emailTo?: string; 
  public get emailTo() {
    return this.getStringAttribute('email_to');
  }
  public set emailTo(value: string) {
    this._emailTo = value;
  }
  public resetEmailTo() {
    this._emailTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailToInput() {
    return this._emailTo;
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

  // include_error - computed: false, optional: true, required: false
  private _includeError?: string; 
  public get includeError() {
    return this.getStringAttribute('include_error');
  }
  public set includeError(value: string) {
    this._includeError = value;
  }
  public resetIncludeError() {
    this._includeError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeErrorInput() {
    return this._includeError;
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

  // override_url - computed: false, optional: true, required: false
  private _overrideUrl?: string; 
  public get overrideUrl() {
    return this.getStringAttribute('override_url');
  }
  public set overrideUrl(value: string) {
    this._overrideUrl = value;
  }
  public resetOverrideUrl() {
    this._overrideUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideUrlInput() {
    return this._overrideUrl;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_methods_event_source_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authMethodsEventSourceLocations),
      description: cdktf.stringToTerraform(this._description),
      email_to: cdktf.stringToTerraform(this._emailTo),
      event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventTypes),
      every: cdktf.stringToTerraform(this._every),
      gateways_event_source_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gatewaysEventSourceLocations),
      id: cdktf.stringToTerraform(this._id),
      include_error: cdktf.stringToTerraform(this._includeError),
      items_event_source_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._itemsEventSourceLocations),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      override_url: cdktf.stringToTerraform(this._overrideUrl),
      runner_type: cdktf.stringToTerraform(this._runnerType),
      targets_event_source_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetsEventSourceLocations),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_to: {
        value: cdktf.stringToHclTerraform(this._emailTo),
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
      include_error: {
        value: cdktf.stringToHclTerraform(this._includeError),
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
      override_url: {
        value: cdktf.stringToHclTerraform(this._overrideUrl),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
