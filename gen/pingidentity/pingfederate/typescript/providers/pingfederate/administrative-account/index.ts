// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/administrative_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdministrativeAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the account is active or not. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/administrative_account#active AdministrativeAccount#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the account belongs to an Auditor. An Auditor has View-only permissions for all administrative functions. An Auditor cannot have any administrative roles. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/administrative_account#auditor AdministrativeAccount#auditor}
  */
  readonly auditor?: boolean | cdktf.IResolvable;
  /**
  * The Department name of the account user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/administrative_account#department AdministrativeAccount#department}
  */
  readonly department?: string;
  /**
  * Description of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/administrative_account#description AdministrativeAccount#description}
  */
  readonly description?: string;
  /**
  * Email address associated with the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/administrative_account#email_address AdministrativeAccount#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Encrypted password for the account. This field holds the value returned from PingFederate and used for updating an existing Administrative Account. Either this attribute or `password` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/administrative_account#encrypted_password AdministrativeAccount#encrypted_password}
  */
  readonly encryptedPassword?: string;
  /**
  * Password for the Account. This field is immutable and will trigger a replacement plan if changed. Either this attribute or `encrypted_password` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/administrative_account#password AdministrativeAccount#password}
  */
  readonly password?: string;
  /**
  * Phone number associated with the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/administrative_account#phone_number AdministrativeAccount#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Roles available for an administrator. `USER_ADMINISTRATOR` - Can create, deactivate or delete accounts and reset passwords. Additionally, install replacement license keys. `CRYPTO_ADMINISTRATOR` - Can manage local keys and certificates. `ADMINISTRATOR` - Can configure partner connections and most system settings (except the management of native accounts and the handling of local keys and certificates. `EXPRESSION_ADMINISTRATOR` - Can add and update OGNL expressions. `DATA_COLLECTION_ADMINISTRATOR` - Can run the Collect Support Data Utility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/administrative_account#roles AdministrativeAccount#roles}
  */
  readonly roles: string[];
  /**
  * Username for the Administrative Account. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/administrative_account#username AdministrativeAccount#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/administrative_account pingfederate_administrative_account}
*/
export class AdministrativeAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_administrative_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdministrativeAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdministrativeAccount to import
  * @param importFromId The id of the existing AdministrativeAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/administrative_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdministrativeAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_administrative_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/administrative_account pingfederate_administrative_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdministrativeAccountConfig
  */
  public constructor(scope: Construct, id: string, config: AdministrativeAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_administrative_account',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._auditor = config.auditor;
    this._department = config.department;
    this._description = config.description;
    this._emailAddress = config.emailAddress;
    this._encryptedPassword = config.encryptedPassword;
    this._password = config.password;
    this._phoneNumber = config.phoneNumber;
    this._roles = config.roles;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // auditor - computed: true, optional: true, required: false
  private _auditor?: boolean | cdktf.IResolvable; 
  public get auditor() {
    return this.getBooleanAttribute('auditor');
  }
  public set auditor(value: boolean | cdktf.IResolvable) {
    this._auditor = value;
  }
  public resetAuditor() {
    this._auditor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditorInput() {
    return this._auditor;
  }

  // department - computed: false, optional: true, required: false
  private _department?: string; 
  public get department() {
    return this.getStringAttribute('department');
  }
  public set department(value: string) {
    this._department = value;
  }
  public resetDepartment() {
    this._department = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentInput() {
    return this._department;
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

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // encrypted_password - computed: true, optional: true, required: false
  private _encryptedPassword?: string; 
  public get encryptedPassword() {
    return this.getStringAttribute('encrypted_password');
  }
  public set encryptedPassword(value: string) {
    this._encryptedPassword = value;
  }
  public resetEncryptedPassword() {
    this._encryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedPasswordInput() {
    return this._encryptedPassword;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      auditor: cdktf.booleanToTerraform(this._auditor),
      department: cdktf.stringToTerraform(this._department),
      description: cdktf.stringToTerraform(this._description),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      encrypted_password: cdktf.stringToTerraform(this._encryptedPassword),
      password: cdktf.stringToTerraform(this._password),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auditor: {
        value: cdktf.booleanToHclTerraform(this._auditor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      department: {
        value: cdktf.stringToHclTerraform(this._department),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypted_password: {
        value: cdktf.stringToHclTerraform(this._encryptedPassword),
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
      phone_number: {
        value: cdktf.stringToHclTerraform(this._phoneNumber),
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
