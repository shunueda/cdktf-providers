// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) Starting point to use when searching for users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#base_dn LdapConnection#base_dn}
  */
  readonly baseDn: string;
  /**
  * (Updateable) Starting point to use when searching for users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#bind_dn LdapConnection#bind_dn}
  */
  readonly bindDn: string;
  /**
  * (Updateable) Password for the Bind DN object of the LDAP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#bind_password LdapConnection#bind_password}
  */
  readonly bindPassword: string;
  /**
  * (Updateable) This is the description of the Ldap connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#description LdapConnection#description}
  */
  readonly description?: string;
  /**
  * (Updateable) Starting point to use when searching for groups. This value can be left empty to disable group support for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#group_base_dn LdapConnection#group_base_dn}
  */
  readonly groupBaseDn: string;
  /**
  * (Updateable) Search filter for listing groups. Searching with this filter should only return groups. This value can be left empty to disable group support for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#group_filter LdapConnection#group_filter}
  */
  readonly groupFilter: string;
  /**
  * (Updateable) Attribute inside the group object which contains group membership information, basically which users are members of the group. This value can be left empty to disable group support for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#group_id_attribute LdapConnection#group_id_attribute}
  */
  readonly groupIdAttribute?: string;
  /**
  * (Updateable) Attribute inside the group object which contains group membership information, basically which users are members of the group. This value can be left empty to disable group support for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#group_member_field LdapConnection#group_member_field}
  */
  readonly groupMemberField: string;
  /**
  * (Updateable) Attribute inside the group object which contains the friendly name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#group_name_attribute LdapConnection#group_name_attribute}
  */
  readonly groupNameAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#id LdapConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique connection name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#name LdapConnection#name}
  */
  readonly name: string;
  /**
  * Password that authenticates the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#password LdapConnection#password}
  */
  readonly password?: string;
  /**
  * (Updateable) Array of the CipherTrust products associated with the Ldap connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#products LdapConnection#products}
  */
  readonly products?: string[];
  /**
  * (Updateable) LDAP search filter which can further restrict the set of users who will be allowed to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#search_filter LdapConnection#search_filter}
  */
  readonly searchFilter: string;
  /**
  * (Updateable) url for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#url LdapConnection#url}
  */
  readonly url: string;
  /**
  * (Updateable) Attribute inside the user object which contains the user distingushed name. If user_dn_attribute is not provided, it will default to 'dn'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#user_dn_attribute LdapConnection#user_dn_attribute}
  */
  readonly userDnAttribute?: string;
  /**
  * (Updateable) Attribute inside the user object which contains the username used to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#user_login_attribute LdapConnection#user_login_attribute}
  */
  readonly userLoginAttribute: string;
  /**
  * Username to test the connection with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#username LdapConnection#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection ciphertrust_ldap_connection}
*/
export class LdapConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_ldap_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapConnection to import
  * @param importFromId The id of the existing LdapConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_ldap_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ldap_connection ciphertrust_ldap_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: LdapConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_ldap_connection',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseDn = config.baseDn;
    this._bindDn = config.bindDn;
    this._bindPassword = config.bindPassword;
    this._description = config.description;
    this._groupBaseDn = config.groupBaseDn;
    this._groupFilter = config.groupFilter;
    this._groupIdAttribute = config.groupIdAttribute;
    this._groupMemberField = config.groupMemberField;
    this._groupNameAttribute = config.groupNameAttribute;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._products = config.products;
    this._searchFilter = config.searchFilter;
    this._url = config.url;
    this._userDnAttribute = config.userDnAttribute;
    this._userLoginAttribute = config.userLoginAttribute;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // bind_dn - computed: false, optional: false, required: true
  private _bindDn?: string; 
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }
  public set bindDn(value: string) {
    this._bindDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnInput() {
    return this._bindDn;
  }

  // bind_password - computed: false, optional: false, required: true
  private _bindPassword?: string; 
  public get bindPassword() {
    return this.getStringAttribute('bind_password');
  }
  public set bindPassword(value: string) {
    this._bindPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordInput() {
    return this._bindPassword;
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

  // group_base_dn - computed: false, optional: false, required: true
  private _groupBaseDn?: string; 
  public get groupBaseDn() {
    return this.getStringAttribute('group_base_dn');
  }
  public set groupBaseDn(value: string) {
    this._groupBaseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBaseDnInput() {
    return this._groupBaseDn;
  }

  // group_filter - computed: false, optional: false, required: true
  private _groupFilter?: string; 
  public get groupFilter() {
    return this.getStringAttribute('group_filter');
  }
  public set groupFilter(value: string) {
    this._groupFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFilterInput() {
    return this._groupFilter;
  }

  // group_id_attribute - computed: false, optional: true, required: false
  private _groupIdAttribute?: string; 
  public get groupIdAttribute() {
    return this.getStringAttribute('group_id_attribute');
  }
  public set groupIdAttribute(value: string) {
    this._groupIdAttribute = value;
  }
  public resetGroupIdAttribute() {
    this._groupIdAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdAttributeInput() {
    return this._groupIdAttribute;
  }

  // group_member_field - computed: false, optional: false, required: true
  private _groupMemberField?: string; 
  public get groupMemberField() {
    return this.getStringAttribute('group_member_field');
  }
  public set groupMemberField(value: string) {
    this._groupMemberField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberFieldInput() {
    return this._groupMemberField;
  }

  // group_name_attribute - computed: false, optional: false, required: true
  private _groupNameAttribute?: string; 
  public get groupNameAttribute() {
    return this.getStringAttribute('group_name_attribute');
  }
  public set groupNameAttribute(value: string) {
    this._groupNameAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameAttributeInput() {
    return this._groupNameAttribute;
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

  // products - computed: false, optional: true, required: false
  private _products?: string[]; 
  public get products() {
    return this.getListAttribute('products');
  }
  public set products(value: string[]) {
    this._products = value;
  }
  public resetProducts() {
    this._products = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsInput() {
    return this._products;
  }

  // search_filter - computed: false, optional: false, required: true
  private _searchFilter?: string; 
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }
  public set searchFilter(value: string) {
    this._searchFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterInput() {
    return this._searchFilter;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_dn_attribute - computed: false, optional: true, required: false
  private _userDnAttribute?: string; 
  public get userDnAttribute() {
    return this.getStringAttribute('user_dn_attribute');
  }
  public set userDnAttribute(value: string) {
    this._userDnAttribute = value;
  }
  public resetUserDnAttribute() {
    this._userDnAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDnAttributeInput() {
    return this._userDnAttribute;
  }

  // user_login_attribute - computed: false, optional: false, required: true
  private _userLoginAttribute?: string; 
  public get userLoginAttribute() {
    return this.getStringAttribute('user_login_attribute');
  }
  public set userLoginAttribute(value: string) {
    this._userLoginAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userLoginAttributeInput() {
    return this._userLoginAttribute;
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
      base_dn: cdktf.stringToTerraform(this._baseDn),
      bind_dn: cdktf.stringToTerraform(this._bindDn),
      bind_password: cdktf.stringToTerraform(this._bindPassword),
      description: cdktf.stringToTerraform(this._description),
      group_base_dn: cdktf.stringToTerraform(this._groupBaseDn),
      group_filter: cdktf.stringToTerraform(this._groupFilter),
      group_id_attribute: cdktf.stringToTerraform(this._groupIdAttribute),
      group_member_field: cdktf.stringToTerraform(this._groupMemberField),
      group_name_attribute: cdktf.stringToTerraform(this._groupNameAttribute),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      products: cdktf.listMapper(cdktf.stringToTerraform, false)(this._products),
      search_filter: cdktf.stringToTerraform(this._searchFilter),
      url: cdktf.stringToTerraform(this._url),
      user_dn_attribute: cdktf.stringToTerraform(this._userDnAttribute),
      user_login_attribute: cdktf.stringToTerraform(this._userLoginAttribute),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_dn: {
        value: cdktf.stringToHclTerraform(this._baseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_dn: {
        value: cdktf.stringToHclTerraform(this._bindDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_password: {
        value: cdktf.stringToHclTerraform(this._bindPassword),
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
      group_base_dn: {
        value: cdktf.stringToHclTerraform(this._groupBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_filter: {
        value: cdktf.stringToHclTerraform(this._groupFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id_attribute: {
        value: cdktf.stringToHclTerraform(this._groupIdAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_member_field: {
        value: cdktf.stringToHclTerraform(this._groupMemberField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name_attribute: {
        value: cdktf.stringToHclTerraform(this._groupNameAttribute),
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
      products: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._products),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      search_filter: {
        value: cdktf.stringToHclTerraform(this._searchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_dn_attribute: {
        value: cdktf.stringToHclTerraform(this._userDnAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_login_attribute: {
        value: cdktf.stringToHclTerraform(this._userLoginAttribute),
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
