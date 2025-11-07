// https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/sql_login
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlLoginConfig extends cdktf.TerraformMetaArguments {
  /**
  * When `true`, password expiration policy is enforced for this login. Defaults to `false`.
  * 
  * -> **Note** In case of Azure SQL, which does not support this feature, the flag will be ignored. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/sql_login#check_password_expiration SqlLogin#check_password_expiration}
  */
  readonly checkPasswordExpiration?: boolean | cdktf.IResolvable;
  /**
  * When `true`, the Windows password policies of the computer on which SQL Server is running are enforced on this login. Defaults to `true`.
  * 
  * -> **Note** In case of Azure SQL, which does not support this feature, the flag will be ignored. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/sql_login#check_password_policy SqlLogin#check_password_policy}
  */
  readonly checkPasswordPolicy?: boolean | cdktf.IResolvable;
  /**
  * ID of login's default DB. The ID can be retrieved using `mssql_database` data resource. Defaults to ID of `master`.
  * 
  * -> **Note** In case of Azure SQL, which does not support this feature, the flag will be ignored. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/sql_login#default_database_id SqlLogin#default_database_id}
  */
  readonly defaultDatabaseId?: string;
  /**
  * Default language assigned to login. Defaults to current default language of the server. If the default language of the server is later changed, the default language of the login remains unchanged.
  * 
  * -> **Note** In case of Azure SQL, which does not support this feature, the flag will be ignored. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/sql_login#default_language SqlLogin#default_language}
  */
  readonly defaultLanguage?: string;
  /**
  * When true, password change will be forced on first logon. Defaults to `false`. 
  * 
  * -> **Note** After password is changed, this flag is being reset to `false`, which will show as changes in Terraform plan. Use `ignore_changes` block to prevent this behavior.
  * 
  * -> **Note** In case of Azure SQL, which does not support this feature, the flag will be ignored. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/sql_login#must_change_password SqlLogin#must_change_password}
  */
  readonly mustChangePassword?: boolean | cdktf.IResolvable;
  /**
  * Login name. Must follow [Regular Identifiers rules](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-identifiers#rules-for-regular-identifiers) and cannot contain `\ `
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/sql_login#name SqlLogin#name}
  */
  readonly name: string;
  /**
  * Password for the login. Must follow strong password policies defined for SQL server. Passwords are case-sensitive, length must be 8-128 chars, can include all characters except `'` or `name`.
  * 
  * ~> **Note** Password will be stored in the raw state as plain-text. [Read more about sensitive data in state](https://www.terraform.io/language/state/sensitive-data).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/sql_login#password SqlLogin#password}
  */
  readonly password: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/sql_login mssql_sql_login}
*/
export class SqlLogin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mssql_sql_login";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlLogin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlLogin to import
  * @param importFromId The id of the existing SqlLogin that should be imported. Refer to the {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/sql_login#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlLogin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mssql_sql_login", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/sql_login mssql_sql_login} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlLoginConfig
  */
  public constructor(scope: Construct, id: string, config: SqlLoginConfig) {
    super(scope, id, {
      terraformResourceType: 'mssql_sql_login',
      terraformGeneratorMetadata: {
        providerName: 'mssql',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkPasswordExpiration = config.checkPasswordExpiration;
    this._checkPasswordPolicy = config.checkPasswordPolicy;
    this._defaultDatabaseId = config.defaultDatabaseId;
    this._defaultLanguage = config.defaultLanguage;
    this._mustChangePassword = config.mustChangePassword;
    this._name = config.name;
    this._password = config.password;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_password_expiration - computed: false, optional: true, required: false
  private _checkPasswordExpiration?: boolean | cdktf.IResolvable; 
  public get checkPasswordExpiration() {
    return this.getBooleanAttribute('check_password_expiration');
  }
  public set checkPasswordExpiration(value: boolean | cdktf.IResolvable) {
    this._checkPasswordExpiration = value;
  }
  public resetCheckPasswordExpiration() {
    this._checkPasswordExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPasswordExpirationInput() {
    return this._checkPasswordExpiration;
  }

  // check_password_policy - computed: false, optional: true, required: false
  private _checkPasswordPolicy?: boolean | cdktf.IResolvable; 
  public get checkPasswordPolicy() {
    return this.getBooleanAttribute('check_password_policy');
  }
  public set checkPasswordPolicy(value: boolean | cdktf.IResolvable) {
    this._checkPasswordPolicy = value;
  }
  public resetCheckPasswordPolicy() {
    this._checkPasswordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPasswordPolicyInput() {
    return this._checkPasswordPolicy;
  }

  // default_database_id - computed: false, optional: true, required: false
  private _defaultDatabaseId?: string; 
  public get defaultDatabaseId() {
    return this.getStringAttribute('default_database_id');
  }
  public set defaultDatabaseId(value: string) {
    this._defaultDatabaseId = value;
  }
  public resetDefaultDatabaseId() {
    this._defaultDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatabaseIdInput() {
    return this._defaultDatabaseId;
  }

  // default_language - computed: false, optional: true, required: false
  private _defaultLanguage?: string; 
  public get defaultLanguage() {
    return this.getStringAttribute('default_language');
  }
  public set defaultLanguage(value: string) {
    this._defaultLanguage = value;
  }
  public resetDefaultLanguage() {
    this._defaultLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLanguageInput() {
    return this._defaultLanguage;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // must_change_password - computed: false, optional: true, required: false
  private _mustChangePassword?: boolean | cdktf.IResolvable; 
  public get mustChangePassword() {
    return this.getBooleanAttribute('must_change_password');
  }
  public set mustChangePassword(value: boolean | cdktf.IResolvable) {
    this._mustChangePassword = value;
  }
  public resetMustChangePassword() {
    this._mustChangePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustChangePasswordInput() {
    return this._mustChangePassword;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_password_expiration: cdktf.booleanToTerraform(this._checkPasswordExpiration),
      check_password_policy: cdktf.booleanToTerraform(this._checkPasswordPolicy),
      default_database_id: cdktf.stringToTerraform(this._defaultDatabaseId),
      default_language: cdktf.stringToTerraform(this._defaultLanguage),
      must_change_password: cdktf.booleanToTerraform(this._mustChangePassword),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_password_expiration: {
        value: cdktf.booleanToHclTerraform(this._checkPasswordExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_password_policy: {
        value: cdktf.booleanToHclTerraform(this._checkPasswordPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_database_id: {
        value: cdktf.stringToHclTerraform(this._defaultDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_language: {
        value: cdktf.stringToHclTerraform(this._defaultLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      must_change_password: {
        value: cdktf.booleanToHclTerraform(this._mustChangePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
