// https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/teammate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeammateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email address of the teammate. This will be used as the teammate's login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/teammate#email Teammate#email}
  */
  readonly email: string;
  /**
  * The first name of the teammate. Required for SSO users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/teammate#first_name Teammate#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/teammate#id Teammate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the teammate should have admin privileges. Admin teammates have full access to the account and don't need specific scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/teammate#is_admin Teammate#is_admin}
  */
  readonly isAdmin: boolean | cdktf.IResolvable;
  /**
  * Whether this is a Single Sign-On (SSO) user. SSO users require first_name and last_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/teammate#is_sso Teammate#is_sso}
  */
  readonly isSso: boolean | cdktf.IResolvable;
  /**
  * The last name of the teammate. Required for SSO users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/teammate#last_name Teammate#last_name}
  */
  readonly lastName?: string;
  /**
  * List of permission scopes for the teammate. Ignored if is_admin is true. Cannot include '2fa_exempt' or '2fa_required' as these are managed automatically by SendGrid. See SendGrid API documentation for available scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/teammate#scopes Teammate#scopes}
  */
  readonly scopes?: string[];
  /**
  * The username for the teammate. If not provided, the email will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/teammate#username Teammate#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/teammate sendgrid_teammate}
*/
export class Teammate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sendgrid_teammate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Teammate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Teammate to import
  * @param importFromId The id of the existing Teammate that should be imported. Refer to the {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/teammate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Teammate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sendgrid_teammate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/teammate sendgrid_teammate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeammateConfig
  */
  public constructor(scope: Construct, id: string, config: TeammateConfig) {
    super(scope, id, {
      terraformResourceType: 'sendgrid_teammate',
      terraformGeneratorMetadata: {
        providerName: 'sendgrid',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
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
    this._firstName = config.firstName;
    this._id = config.id;
    this._isAdmin = config.isAdmin;
    this._isSso = config.isSso;
    this._lastName = config.lastName;
    this._scopes = config.scopes;
    this._username = config.username;
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

  // is_admin - computed: false, optional: false, required: true
  private _isAdmin?: boolean | cdktf.IResolvable; 
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }
  public set isAdmin(value: boolean | cdktf.IResolvable) {
    this._isAdmin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAdminInput() {
    return this._isAdmin;
  }

  // is_sso - computed: false, optional: false, required: true
  private _isSso?: boolean | cdktf.IResolvable; 
  public get isSso() {
    return this.getBooleanAttribute('is_sso');
  }
  public set isSso(value: boolean | cdktf.IResolvable) {
    this._isSso = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isSsoInput() {
    return this._isSso;
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

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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
      email: cdktf.stringToTerraform(this._email),
      first_name: cdktf.stringToTerraform(this._firstName),
      id: cdktf.stringToTerraform(this._id),
      is_admin: cdktf.booleanToTerraform(this._isAdmin),
      is_sso: cdktf.booleanToTerraform(this._isSso),
      last_name: cdktf.stringToTerraform(this._lastName),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      username: cdktf.stringToTerraform(this._username),
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
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
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
      is_admin: {
        value: cdktf.booleanToHclTerraform(this._isAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_sso: {
        value: cdktf.booleanToHclTerraform(this._isSso),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
