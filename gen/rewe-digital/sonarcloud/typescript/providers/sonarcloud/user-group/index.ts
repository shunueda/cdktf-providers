// https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/user_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description for the user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/user_group#description UserGroup#description}
  */
  readonly description?: string;
  /**
  * The name of the user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/user_group#name UserGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/user_group sonarcloud_user_group}
*/
export class UserGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarcloud_user_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserGroup to import
  * @param importFromId The id of the existing UserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/user_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarcloud_user_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/user_group sonarcloud_user_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserGroupConfig
  */
  public constructor(scope: Construct, id: string, config: UserGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarcloud_user_group',
      terraformGeneratorMetadata: {
        providerName: 'sonarcloud',
        providerVersion: '0.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members_count - computed: true, optional: false, required: false
  public get membersCount() {
    return this.getNumberAttribute('members_count');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
