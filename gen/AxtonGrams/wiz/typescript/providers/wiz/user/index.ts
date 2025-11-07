// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Assigned Project Identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/user#assigned_project_ids User#assigned_project_ids}
  */
  readonly assignedProjectIds?: string[];
  /**
  * The user email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * The user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * Whether the project is archived/inactive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/user#role User#role}
  */
  readonly role: string;
  /**
  * Send email invite?
  *     - Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/user#send_email_invite User#send_email_invite}
  */
  readonly sendEmailInvite?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/user wiz_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/user wiz_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_user',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignedProjectIds = config.assignedProjectIds;
    this._email = config.email;
    this._name = config.name;
    this._role = config.role;
    this._sendEmailInvite = config.sendEmailInvite;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_project_ids - computed: false, optional: true, required: false
  private _assignedProjectIds?: string[]; 
  public get assignedProjectIds() {
    return this.getListAttribute('assigned_project_ids');
  }
  public set assignedProjectIds(value: string[]) {
    this._assignedProjectIds = value;
  }
  public resetAssignedProjectIds() {
    this._assignedProjectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedProjectIdsInput() {
    return this._assignedProjectIds;
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
    return this.getStringAttribute('id');
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // send_email_invite - computed: false, optional: true, required: false
  private _sendEmailInvite?: boolean | cdktf.IResolvable; 
  public get sendEmailInvite() {
    return this.getBooleanAttribute('send_email_invite');
  }
  public set sendEmailInvite(value: boolean | cdktf.IResolvable) {
    this._sendEmailInvite = value;
  }
  public resetSendEmailInvite() {
    this._sendEmailInvite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailInviteInput() {
    return this._sendEmailInvite;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assignedProjectIds),
      email: cdktf.stringToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
      role: cdktf.stringToTerraform(this._role),
      send_email_invite: cdktf.booleanToTerraform(this._sendEmailInvite),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_project_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assignedProjectIds),
        isBlock: false,
        type: "list",
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_email_invite: {
        value: cdktf.booleanToHclTerraform(this._sendEmailInvite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
