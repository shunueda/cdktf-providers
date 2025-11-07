// https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to true if the user already exists and you want to import it. If user is not found, it will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user#already_exists_ok User#already_exists_ok}
  */
  readonly alreadyExistsOk?: boolean | cdktf.IResolvable;
  /**
  * Set to false if you want the user to not be deleted on destroy plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user#delete_on_destroy User#delete_on_destroy}
  */
  readonly deleteOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user#first_name User#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user#last_name User#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user#roles User#roles}
  */
  readonly roles?: string[];
  /**
  * This will send a password reset email to the user. If a password reset token does not already exist for this user, it will create one and then send it. If the user has not yet set up their account, it will send a setup email to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user#send_password_reset User#send_password_reset}
  */
  readonly sendPasswordReset?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user looker_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "looker_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "looker_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user looker_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'looker_user',
      terraformGeneratorMetadata: {
        providerName: 'looker',
        providerVersion: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alreadyExistsOk = config.alreadyExistsOk;
    this._deleteOnDestroy = config.deleteOnDestroy;
    this._email = config.email;
    this._firstName = config.firstName;
    this._lastName = config.lastName;
    this._roles = config.roles;
    this._sendPasswordReset = config.sendPasswordReset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // already_exists_ok - computed: false, optional: true, required: false
  private _alreadyExistsOk?: boolean | cdktf.IResolvable; 
  public get alreadyExistsOk() {
    return this.getBooleanAttribute('already_exists_ok');
  }
  public set alreadyExistsOk(value: boolean | cdktf.IResolvable) {
    this._alreadyExistsOk = value;
  }
  public resetAlreadyExistsOk() {
    this._alreadyExistsOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alreadyExistsOkInput() {
    return this._alreadyExistsOk;
  }

  // delete_on_destroy - computed: false, optional: true, required: false
  private _deleteOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteOnDestroy() {
    return this.getBooleanAttribute('delete_on_destroy');
  }
  public set deleteOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteOnDestroy = value;
  }
  public resetDeleteOnDestroy() {
    this._deleteOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnDestroyInput() {
    return this._deleteOnDestroy;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // send_password_reset - computed: false, optional: true, required: false
  private _sendPasswordReset?: boolean | cdktf.IResolvable; 
  public get sendPasswordReset() {
    return this.getBooleanAttribute('send_password_reset');
  }
  public set sendPasswordReset(value: boolean | cdktf.IResolvable) {
    this._sendPasswordReset = value;
  }
  public resetSendPasswordReset() {
    this._sendPasswordReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPasswordResetInput() {
    return this._sendPasswordReset;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      already_exists_ok: cdktf.booleanToTerraform(this._alreadyExistsOk),
      delete_on_destroy: cdktf.booleanToTerraform(this._deleteOnDestroy),
      email: cdktf.stringToTerraform(this._email),
      first_name: cdktf.stringToTerraform(this._firstName),
      last_name: cdktf.stringToTerraform(this._lastName),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      send_password_reset: cdktf.booleanToTerraform(this._sendPasswordReset),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      already_exists_ok: {
        value: cdktf.booleanToHclTerraform(this._alreadyExistsOk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deleteOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      send_password_reset: {
        value: cdktf.booleanToHclTerraform(this._sendPasswordReset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
