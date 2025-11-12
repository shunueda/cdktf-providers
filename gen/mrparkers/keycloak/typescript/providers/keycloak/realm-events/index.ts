// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_events
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RealmEventsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_events#admin_events_details_enabled RealmEvents#admin_events_details_enabled}
  */
  readonly adminEventsDetailsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_events#admin_events_enabled RealmEvents#admin_events_enabled}
  */
  readonly adminEventsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_events#enabled_event_types RealmEvents#enabled_event_types}
  */
  readonly enabledEventTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_events#events_enabled RealmEvents#events_enabled}
  */
  readonly eventsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_events#events_expiration RealmEvents#events_expiration}
  */
  readonly eventsExpiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_events#events_listeners RealmEvents#events_listeners}
  */
  readonly eventsListeners?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_events#id RealmEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_events#realm_id RealmEvents#realm_id}
  */
  readonly realmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_events keycloak_realm_events}
*/
export class RealmEvents extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_realm_events";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RealmEvents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RealmEvents to import
  * @param importFromId The id of the existing RealmEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_events#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RealmEvents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_realm_events", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_events keycloak_realm_events} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RealmEventsConfig
  */
  public constructor(scope: Construct, id: string, config: RealmEventsConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_realm_events',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0',
        providerVersionConstraint: '4.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminEventsDetailsEnabled = config.adminEventsDetailsEnabled;
    this._adminEventsEnabled = config.adminEventsEnabled;
    this._enabledEventTypes = config.enabledEventTypes;
    this._eventsEnabled = config.eventsEnabled;
    this._eventsExpiration = config.eventsExpiration;
    this._eventsListeners = config.eventsListeners;
    this._id = config.id;
    this._realmId = config.realmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_events_details_enabled - computed: false, optional: true, required: false
  private _adminEventsDetailsEnabled?: boolean | cdktf.IResolvable; 
  public get adminEventsDetailsEnabled() {
    return this.getBooleanAttribute('admin_events_details_enabled');
  }
  public set adminEventsDetailsEnabled(value: boolean | cdktf.IResolvable) {
    this._adminEventsDetailsEnabled = value;
  }
  public resetAdminEventsDetailsEnabled() {
    this._adminEventsDetailsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEventsDetailsEnabledInput() {
    return this._adminEventsDetailsEnabled;
  }

  // admin_events_enabled - computed: false, optional: true, required: false
  private _adminEventsEnabled?: boolean | cdktf.IResolvable; 
  public get adminEventsEnabled() {
    return this.getBooleanAttribute('admin_events_enabled');
  }
  public set adminEventsEnabled(value: boolean | cdktf.IResolvable) {
    this._adminEventsEnabled = value;
  }
  public resetAdminEventsEnabled() {
    this._adminEventsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEventsEnabledInput() {
    return this._adminEventsEnabled;
  }

  // enabled_event_types - computed: false, optional: true, required: false
  private _enabledEventTypes?: string[]; 
  public get enabledEventTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_event_types'));
  }
  public set enabledEventTypes(value: string[]) {
    this._enabledEventTypes = value;
  }
  public resetEnabledEventTypes() {
    this._enabledEventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledEventTypesInput() {
    return this._enabledEventTypes;
  }

  // events_enabled - computed: false, optional: true, required: false
  private _eventsEnabled?: boolean | cdktf.IResolvable; 
  public get eventsEnabled() {
    return this.getBooleanAttribute('events_enabled');
  }
  public set eventsEnabled(value: boolean | cdktf.IResolvable) {
    this._eventsEnabled = value;
  }
  public resetEventsEnabled() {
    this._eventsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsEnabledInput() {
    return this._eventsEnabled;
  }

  // events_expiration - computed: false, optional: true, required: false
  private _eventsExpiration?: number; 
  public get eventsExpiration() {
    return this.getNumberAttribute('events_expiration');
  }
  public set eventsExpiration(value: number) {
    this._eventsExpiration = value;
  }
  public resetEventsExpiration() {
    this._eventsExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsExpirationInput() {
    return this._eventsExpiration;
  }

  // events_listeners - computed: false, optional: true, required: false
  private _eventsListeners?: string[]; 
  public get eventsListeners() {
    return cdktf.Fn.tolist(this.getListAttribute('events_listeners'));
  }
  public set eventsListeners(value: string[]) {
    this._eventsListeners = value;
  }
  public resetEventsListeners() {
    this._eventsListeners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsListenersInput() {
    return this._eventsListeners;
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

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_events_details_enabled: cdktf.booleanToTerraform(this._adminEventsDetailsEnabled),
      admin_events_enabled: cdktf.booleanToTerraform(this._adminEventsEnabled),
      enabled_event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledEventTypes),
      events_enabled: cdktf.booleanToTerraform(this._eventsEnabled),
      events_expiration: cdktf.numberToTerraform(this._eventsExpiration),
      events_listeners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventsListeners),
      id: cdktf.stringToTerraform(this._id),
      realm_id: cdktf.stringToTerraform(this._realmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_events_details_enabled: {
        value: cdktf.booleanToHclTerraform(this._adminEventsDetailsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_events_enabled: {
        value: cdktf.booleanToHclTerraform(this._adminEventsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled_event_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledEventTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      events_enabled: {
        value: cdktf.booleanToHclTerraform(this._eventsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      events_expiration: {
        value: cdktf.numberToHclTerraform(this._eventsExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      events_listeners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventsListeners),
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
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
