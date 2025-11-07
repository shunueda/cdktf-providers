// https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#comment Users#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#company Users#company}
  */
  readonly company?: string;
  /**
  * Map of custom attribute key/value pairs. This field is being deprecated in favor of the onelogin_user_custom_attributes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#custom_attributes Users#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#department Users#department}
  */
  readonly department?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#directory_id Users#directory_id}
  */
  readonly directoryId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#distinguished_name Users#distinguished_name}
  */
  readonly distinguishedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#email Users#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#external_id Users#external_id}
  */
  readonly externalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#firstname Users#firstname}
  */
  readonly firstname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#group_id Users#group_id}
  */
  readonly groupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#id Users#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#lastname Users#lastname}
  */
  readonly lastname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#manager_ad_id Users#manager_ad_id}
  */
  readonly managerAdId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#manager_user_id Users#manager_user_id}
  */
  readonly managerUserId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#member_of Users#member_of}
  */
  readonly memberOf?: string;
  /**
  * The user's password. This field is sensitive and will not be displayed in logs or output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#password Users#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#phone Users#phone}
  */
  readonly phone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#samaccountname Users#samaccountname}
  */
  readonly samaccountname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#state Users#state}
  */
  readonly state?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#status Users#status}
  */
  readonly status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#title Users#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#trusted_idp_id Users#trusted_idp_id}
  */
  readonly trustedIdpId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#username Users#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#userprincipalname Users#userprincipalname}
  */
  readonly userprincipalname?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users onelogin_users}
*/
export class Users extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "onelogin_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Users resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Users to import
  * @param importFromId The id of the existing Users that should be imported. Refer to the {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Users to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "onelogin_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/users onelogin_users} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UsersConfig
  */
  public constructor(scope: Construct, id: string, config: UsersConfig) {
    super(scope, id, {
      terraformResourceType: 'onelogin_users',
      terraformGeneratorMetadata: {
        providerName: 'onelogin',
        providerVersion: '0.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._company = config.company;
    this._customAttributes = config.customAttributes;
    this._department = config.department;
    this._directoryId = config.directoryId;
    this._distinguishedName = config.distinguishedName;
    this._email = config.email;
    this._externalId = config.externalId;
    this._firstname = config.firstname;
    this._groupId = config.groupId;
    this._id = config.id;
    this._lastname = config.lastname;
    this._managerAdId = config.managerAdId;
    this._managerUserId = config.managerUserId;
    this._memberOf = config.memberOf;
    this._password = config.password;
    this._phone = config.phone;
    this._samaccountname = config.samaccountname;
    this._state = config.state;
    this._status = config.status;
    this._title = config.title;
    this._trustedIdpId = config.trustedIdpId;
    this._username = config.username;
    this._userprincipalname = config.userprincipalname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // company - computed: false, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes?: { [key: string]: string }; 
  public get customAttributes() {
    return this.getStringMapAttribute('custom_attributes');
  }
  public set customAttributes(value: { [key: string]: string }) {
    this._customAttributes = value;
  }
  public resetCustomAttributes() {
    this._customAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes;
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

  // directory_id - computed: true, optional: true, required: false
  private _directoryId?: number; 
  public get directoryId() {
    return this.getNumberAttribute('directory_id');
  }
  public set directoryId(value: number) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // distinguished_name - computed: false, optional: true, required: false
  private _distinguishedName?: string; 
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  public resetDistinguishedName() {
    this._distinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName;
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

  // external_id - computed: true, optional: true, required: false
  private _externalId?: number; 
  public get externalId() {
    return this.getNumberAttribute('external_id');
  }
  public set externalId(value: number) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // firstname - computed: false, optional: true, required: false
  private _firstname?: string; 
  public get firstname() {
    return this.getStringAttribute('firstname');
  }
  public set firstname(value: string) {
    this._firstname = value;
  }
  public resetFirstname() {
    this._firstname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstnameInput() {
    return this._firstname;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // lastname - computed: false, optional: true, required: false
  private _lastname?: string; 
  public get lastname() {
    return this.getStringAttribute('lastname');
  }
  public set lastname(value: string) {
    this._lastname = value;
  }
  public resetLastname() {
    this._lastname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastnameInput() {
    return this._lastname;
  }

  // manager_ad_id - computed: true, optional: true, required: false
  private _managerAdId?: number; 
  public get managerAdId() {
    return this.getNumberAttribute('manager_ad_id');
  }
  public set managerAdId(value: number) {
    this._managerAdId = value;
  }
  public resetManagerAdId() {
    this._managerAdId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerAdIdInput() {
    return this._managerAdId;
  }

  // manager_user_id - computed: true, optional: true, required: false
  private _managerUserId?: number; 
  public get managerUserId() {
    return this.getNumberAttribute('manager_user_id');
  }
  public set managerUserId(value: number) {
    this._managerUserId = value;
  }
  public resetManagerUserId() {
    this._managerUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerUserIdInput() {
    return this._managerUserId;
  }

  // member_of - computed: false, optional: true, required: false
  private _memberOf?: string; 
  public get memberOf() {
    return this.getStringAttribute('member_of');
  }
  public set memberOf(value: string) {
    this._memberOf = value;
  }
  public resetMemberOf() {
    this._memberOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberOfInput() {
    return this._memberOf;
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

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // samaccountname - computed: false, optional: true, required: false
  private _samaccountname?: string; 
  public get samaccountname() {
    return this.getStringAttribute('samaccountname');
  }
  public set samaccountname(value: string) {
    this._samaccountname = value;
  }
  public resetSamaccountname() {
    this._samaccountname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samaccountnameInput() {
    return this._samaccountname;
  }

  // state - computed: true, optional: true, required: false
  private _state?: number; 
  public get state() {
    return this.getNumberAttribute('state');
  }
  public set state(value: number) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // status - computed: true, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // trusted_idp_id - computed: true, optional: true, required: false
  private _trustedIdpId?: number; 
  public get trustedIdpId() {
    return this.getNumberAttribute('trusted_idp_id');
  }
  public set trustedIdpId(value: number) {
    this._trustedIdpId = value;
  }
  public resetTrustedIdpId() {
    this._trustedIdpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedIdpIdInput() {
    return this._trustedIdpId;
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

  // userprincipalname - computed: false, optional: true, required: false
  private _userprincipalname?: string; 
  public get userprincipalname() {
    return this.getStringAttribute('userprincipalname');
  }
  public set userprincipalname(value: string) {
    this._userprincipalname = value;
  }
  public resetUserprincipalname() {
    this._userprincipalname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userprincipalnameInput() {
    return this._userprincipalname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      company: cdktf.stringToTerraform(this._company),
      custom_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customAttributes),
      department: cdktf.stringToTerraform(this._department),
      directory_id: cdktf.numberToTerraform(this._directoryId),
      distinguished_name: cdktf.stringToTerraform(this._distinguishedName),
      email: cdktf.stringToTerraform(this._email),
      external_id: cdktf.numberToTerraform(this._externalId),
      firstname: cdktf.stringToTerraform(this._firstname),
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      lastname: cdktf.stringToTerraform(this._lastname),
      manager_ad_id: cdktf.numberToTerraform(this._managerAdId),
      manager_user_id: cdktf.numberToTerraform(this._managerUserId),
      member_of: cdktf.stringToTerraform(this._memberOf),
      password: cdktf.stringToTerraform(this._password),
      phone: cdktf.stringToTerraform(this._phone),
      samaccountname: cdktf.stringToTerraform(this._samaccountname),
      state: cdktf.numberToTerraform(this._state),
      status: cdktf.numberToTerraform(this._status),
      title: cdktf.stringToTerraform(this._title),
      trusted_idp_id: cdktf.numberToTerraform(this._trustedIdpId),
      username: cdktf.stringToTerraform(this._username),
      userprincipalname: cdktf.stringToTerraform(this._userprincipalname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company: {
        value: cdktf.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      department: {
        value: cdktf.stringToHclTerraform(this._department),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_id: {
        value: cdktf.numberToHclTerraform(this._directoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distinguished_name: {
        value: cdktf.stringToHclTerraform(this._distinguishedName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktf.numberToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      firstname: {
        value: cdktf.stringToHclTerraform(this._firstname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lastname: {
        value: cdktf.stringToHclTerraform(this._lastname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_ad_id: {
        value: cdktf.numberToHclTerraform(this._managerAdId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      manager_user_id: {
        value: cdktf.numberToHclTerraform(this._managerUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      member_of: {
        value: cdktf.stringToHclTerraform(this._memberOf),
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
      phone: {
        value: cdktf.stringToHclTerraform(this._phone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samaccountname: {
        value: cdktf.stringToHclTerraform(this._samaccountname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.numberToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_idp_id: {
        value: cdktf.numberToHclTerraform(this._trustedIdpId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userprincipalname: {
        value: cdktf.stringToHclTerraform(this._userprincipalname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
