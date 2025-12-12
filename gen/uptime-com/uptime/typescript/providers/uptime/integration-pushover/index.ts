// https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushover
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationPushoverConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of contact group names to receive notifications.
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations)
  * that will be notified when alerts are triggered. Defaults to ['Default'] if not specified.
  * Set to an empty list to disable notifications at this level and rely on parent check group notifications instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushover#contact_groups IntegrationPushover#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushover#name IntegrationPushover#name}
  */
  readonly name: string;
  /**
  * Message priority (-2 to 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushover#priority IntegrationPushover#priority}
  */
  readonly priority: number;
  /**
  * Pushover user key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushover#user IntegrationPushover#user}
  */
  readonly user: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushover uptime_integration_pushover}
*/
export class IntegrationPushover extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_integration_pushover";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationPushover resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationPushover to import
  * @param importFromId The id of the existing IntegrationPushover that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushover#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationPushover to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_integration_pushover", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushover uptime_integration_pushover} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationPushoverConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationPushoverConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_integration_pushover',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.22.0',
        providerVersionConstraint: '2.22.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactGroups = config.contactGroups;
    this._name = config.name;
    this._priority = config.priority;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_groups - computed: true, optional: true, required: false
  private _contactGroups?: string[]; 
  public get contactGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('contact_groups'));
  }
  public set contactGroups(value: string[]) {
    this._contactGroups = value;
  }
  public resetContactGroups() {
    this._contactGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
