// https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/teammate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSendgridTeammateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Teammate's email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/teammate#email DataSendgridTeammate#email}
  */
  readonly email?: string;
  /**
  * Teammate's first name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/teammate#first_name DataSendgridTeammate#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/teammate#id DataSendgridTeammate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * True if teammate has admin privileges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/teammate#is_admin DataSendgridTeammate#is_admin}
  */
  readonly isAdmin?: boolean | cdktf.IResolvable;
  /**
  * Teammate's last name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/teammate#last_name DataSendgridTeammate#last_name}
  */
  readonly lastName?: string;
  /**
  * Scopes associated to teammate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/teammate#scopes DataSendgridTeammate#scopes}
  */
  readonly scopes?: string[];
  /**
  * Indicate the type of user: account owner, teammate admin user, or normal teammate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/teammate#user_type DataSendgridTeammate#user_type}
  */
  readonly userType?: string;
  /**
  * Teammate's username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/teammate#username DataSendgridTeammate#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/teammate sendgrid_teammate}
*/
export class DataSendgridTeammate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sendgrid_teammate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSendgridTeammate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSendgridTeammate to import
  * @param importFromId The id of the existing DataSendgridTeammate that should be imported. Refer to the {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/teammate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSendgridTeammate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sendgrid_teammate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/teammate sendgrid_teammate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSendgridTeammateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSendgridTeammateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sendgrid_teammate',
      terraformGeneratorMetadata: {
        providerName: 'sendgrid',
        providerVersion: '1.1.2'
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
    this._lastName = config.lastName;
    this._scopes = config.scopes;
    this._userType = config.userType;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_admin - computed: false, optional: true, required: false
  private _isAdmin?: boolean | cdktf.IResolvable; 
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }
  public set isAdmin(value: boolean | cdktf.IResolvable) {
    this._isAdmin = value;
  }
  public resetIsAdmin() {
    this._isAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAdminInput() {
    return this._isAdmin;
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
    return this.getListAttribute('scopes');
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

  // user_type - computed: false, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
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
      last_name: cdktf.stringToTerraform(this._lastName),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      user_type: cdktf.stringToTerraform(this._userType),
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
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_type: {
        value: cdktf.stringToHclTerraform(this._userType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
