// https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/user#connection_limit User#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/user#create_db User#create_db}
  */
  readonly createDb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/user#password_disabled User#password_disabled}
  */
  readonly passwordDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/user#super_user User#super_user}
  */
  readonly superUser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/user#syslog_access User#syslog_access}
  */
  readonly syslogAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/user#username User#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/user#valid_until User#valid_until}
  */
  readonly validUntil?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/user redshift_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redshift_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redshift_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/user redshift_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'redshift_user',
      terraformGeneratorMetadata: {
        providerName: 'redshift',
        providerVersion: '0.0.4',
        providerVersionConstraint: '0.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionLimit = config.connectionLimit;
    this._createDb = config.createDb;
    this._id = config.id;
    this._password = config.password;
    this._passwordDisabled = config.passwordDisabled;
    this._superUser = config.superUser;
    this._syslogAccess = config.syslogAccess;
    this._username = config.username;
    this._validUntil = config.validUntil;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: string; 
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }
  public set connectionLimit(value: string) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // create_db - computed: false, optional: true, required: false
  private _createDb?: boolean | cdktf.IResolvable; 
  public get createDb() {
    return this.getBooleanAttribute('create_db');
  }
  public set createDb(value: boolean | cdktf.IResolvable) {
    this._createDb = value;
  }
  public resetCreateDb() {
    this._createDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDbInput() {
    return this._createDb;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_disabled - computed: false, optional: true, required: false
  private _passwordDisabled?: boolean | cdktf.IResolvable; 
  public get passwordDisabled() {
    return this.getBooleanAttribute('password_disabled');
  }
  public set passwordDisabled(value: boolean | cdktf.IResolvable) {
    this._passwordDisabled = value;
  }
  public resetPasswordDisabled() {
    this._passwordDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordDisabledInput() {
    return this._passwordDisabled;
  }

  // super_user - computed: false, optional: true, required: false
  private _superUser?: boolean | cdktf.IResolvable; 
  public get superUser() {
    return this.getBooleanAttribute('super_user');
  }
  public set superUser(value: boolean | cdktf.IResolvable) {
    this._superUser = value;
  }
  public resetSuperUser() {
    this._superUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superUserInput() {
    return this._superUser;
  }

  // syslog_access - computed: false, optional: true, required: false
  private _syslogAccess?: string; 
  public get syslogAccess() {
    return this.getStringAttribute('syslog_access');
  }
  public set syslogAccess(value: string) {
    this._syslogAccess = value;
  }
  public resetSyslogAccess() {
    this._syslogAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogAccessInput() {
    return this._syslogAccess;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // usesysid - computed: true, optional: false, required: false
  public get usesysid() {
    return this.getStringAttribute('usesysid');
  }

  // valid_until - computed: false, optional: true, required: false
  private _validUntil?: string; 
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_limit: cdktf.stringToTerraform(this._connectionLimit),
      create_db: cdktf.booleanToTerraform(this._createDb),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      password_disabled: cdktf.booleanToTerraform(this._passwordDisabled),
      super_user: cdktf.booleanToTerraform(this._superUser),
      syslog_access: cdktf.stringToTerraform(this._syslogAccess),
      username: cdktf.stringToTerraform(this._username),
      valid_until: cdktf.stringToTerraform(this._validUntil),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_limit: {
        value: cdktf.stringToHclTerraform(this._connectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_db: {
        value: cdktf.booleanToHclTerraform(this._createDb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_disabled: {
        value: cdktf.booleanToHclTerraform(this._passwordDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      super_user: {
        value: cdktf.booleanToHclTerraform(this._superUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      syslog_access: {
        value: cdktf.stringToHclTerraform(this._syslogAccess),
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
      valid_until: {
        value: cdktf.stringToHclTerraform(this._validUntil),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
