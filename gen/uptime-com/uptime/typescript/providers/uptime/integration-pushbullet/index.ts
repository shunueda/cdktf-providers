// https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushbullet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationPushbulletConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of contact group names to receive notifications.
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations)
  * that will be notified when alerts are triggered. Defaults to ['Default'] if not specified.
  * Set to an empty list to disable notifications at this level and rely on parent check group notifications instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushbullet#contact_groups IntegrationPushbullet#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Email address to send notifications to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushbullet#email IntegrationPushbullet#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushbullet#name IntegrationPushbullet#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushbullet uptime_integration_pushbullet}
*/
export class IntegrationPushbullet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_integration_pushbullet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationPushbullet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationPushbullet to import
  * @param importFromId The id of the existing IntegrationPushbullet that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushbullet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationPushbullet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_integration_pushbullet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_pushbullet uptime_integration_pushbullet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationPushbulletConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationPushbulletConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_integration_pushbullet',
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
    this._email = config.email;
    this._name = config.name;
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

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      email: cdktf.stringToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
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
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
