// https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email address of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * The access role of the user. One of `admin`, `standards_admin`, `team_member`, `user`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/user#role User#role}
  */
  readonly role?: string;
  /**
  * Send an invite email even if notifications are disabled for the account. **(default: false)**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/user#send_invite User#send_invite}
  */
  readonly sendInvite?: boolean | cdktf.IResolvable;
  /**
  * Don't send an email welcoming the user to OpsLevel. **(default: true)**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/user#skip_welcome_email User#skip_welcome_email}
  */
  readonly skipWelcomeEmail?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/user opslevel_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/user opslevel_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_user',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._name = config.name;
    this._role = config.role;
    this._sendInvite = config.sendInvite;
    this._skipWelcomeEmail = config.skipWelcomeEmail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // send_invite - computed: true, optional: true, required: false
  private _sendInvite?: boolean | cdktf.IResolvable; 
  public get sendInvite() {
    return this.getBooleanAttribute('send_invite');
  }
  public set sendInvite(value: boolean | cdktf.IResolvable) {
    this._sendInvite = value;
  }
  public resetSendInvite() {
    this._sendInvite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInviteInput() {
    return this._sendInvite;
  }

  // skip_welcome_email - computed: true, optional: true, required: false
  private _skipWelcomeEmail?: boolean | cdktf.IResolvable; 
  public get skipWelcomeEmail() {
    return this.getBooleanAttribute('skip_welcome_email');
  }
  public set skipWelcomeEmail(value: boolean | cdktf.IResolvable) {
    this._skipWelcomeEmail = value;
  }
  public resetSkipWelcomeEmail() {
    this._skipWelcomeEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWelcomeEmailInput() {
    return this._skipWelcomeEmail;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
      role: cdktf.stringToTerraform(this._role),
      send_invite: cdktf.booleanToTerraform(this._sendInvite),
      skip_welcome_email: cdktf.booleanToTerraform(this._skipWelcomeEmail),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      send_invite: {
        value: cdktf.booleanToHclTerraform(this._sendInvite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_welcome_email: {
        value: cdktf.booleanToHclTerraform(this._skipWelcomeEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
