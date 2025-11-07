// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto created users will have access to their profile page and will be able to perform actions such as generating an API key. Default value is "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#allow_user_to_access_profile LdapSetting#allow_user_to_access_profile}
  */
  readonly allowUserToAccessProfile?: boolean | cdktf.IResolvable;
  /**
  * When set, users are automatically created when using LDAP. Otherwise, users are transient and associated with auto-join groups defined in Artifactory. Default value is "true".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#auto_create_user LdapSetting#auto_create_user}
  */
  readonly autoCreateUser?: boolean | cdktf.IResolvable;
  /**
  * An attribute that can be used to map a user's email address to a user created automatically in Artifactory. Default value is "mail".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#email_attribute LdapSetting#email_attribute}
  */
  readonly emailAttribute?: string;
  /**
  * Flag to enable or disable the ldap setting. Default value is "true".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#enabled LdapSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#id LdapSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ldap setting name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#key LdapSetting#key}
  */
  readonly key: string;
  /**
  * Protects against LDAP poisoning by filtering out users exposed to vulnerabilities. Default value is "true".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#ldap_poisoning_protection LdapSetting#ldap_poisoning_protection}
  */
  readonly ldapPoisoningProtection?: boolean | cdktf.IResolvable;
  /**
  * Location of the LDAP server in the following format: ldap://myldapserver/dc=sampledomain,dc=com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#ldap_url LdapSetting#ldap_url}
  */
  readonly ldapUrl: string;
  /**
  * The full DN of the user that binds to the LDAP server to perform user searches. Only used with "search" authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#manager_dn LdapSetting#manager_dn}
  */
  readonly managerDn?: string;
  /**
  * The password of the user that binds to the LDAP server to perform the search. Only used with "search" authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#manager_password LdapSetting#manager_password}
  */
  readonly managerPassword?: string;
  /**
  * When set, supports paging results for the LDAP server. This feature requires that the LDAP server supports a PagedResultsControl configuration. Default value is "true".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#paging_support_enabled LdapSetting#paging_support_enabled}
  */
  readonly pagingSupportEnabled?: boolean | cdktf.IResolvable;
  /**
  * A context name to search in relative to the base DN of the LDAP URL. For example, 'ou=users' With the LDAP Group Add-on enabled, it is possible to enter multiple search base entries separated by a pipe ('|') character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#search_base LdapSetting#search_base}
  */
  readonly searchBase?: string;
  /**
  * A filter expression used to search for the user DN used in LDAP authentication. This is an LDAP search filter (as defined in 'RFC 2254') with optional arguments. In this case, the username is the only argument, and is denoted by '{0}'. Possible examples are: (uid={0}) - This searches for a username match on the attribute. Authentication to LDAP is performed from the DN found if successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#search_filter LdapSetting#search_filter}
  */
  readonly searchFilter?: string;
  /**
  * When set, enables deep search through the sub tree of the LDAP URL + search base. Default value is "true".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#search_sub_tree LdapSetting#search_sub_tree}
  */
  readonly searchSubTree?: boolean | cdktf.IResolvable;
  /**
  * A DN pattern that can be used to log users directly in to LDAP. This pattern is used to create a DN string for 'direct' user authentication where the pattern is relative to the base DN in the LDAP URL. The pattern argument {0} is replaced with the username. This only works if anonymous binding is allowed and a direct user DN can be used, which is not the default case for Active Directory (use User DN search filter instead). Example: uid={0},ou=People. Default value is blank/empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#user_dn_pattern LdapSetting#user_dn_pattern}
  */
  readonly userDnPattern?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting artifactory_ldap_setting}
*/
export class LdapSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_ldap_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapSetting to import
  * @param importFromId The id of the existing LdapSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_ldap_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_setting artifactory_ldap_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapSettingConfig
  */
  public constructor(scope: Construct, id: string, config: LdapSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_ldap_setting',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUserToAccessProfile = config.allowUserToAccessProfile;
    this._autoCreateUser = config.autoCreateUser;
    this._emailAttribute = config.emailAttribute;
    this._enabled = config.enabled;
    this._id = config.id;
    this._key = config.key;
    this._ldapPoisoningProtection = config.ldapPoisoningProtection;
    this._ldapUrl = config.ldapUrl;
    this._managerDn = config.managerDn;
    this._managerPassword = config.managerPassword;
    this._pagingSupportEnabled = config.pagingSupportEnabled;
    this._searchBase = config.searchBase;
    this._searchFilter = config.searchFilter;
    this._searchSubTree = config.searchSubTree;
    this._userDnPattern = config.userDnPattern;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_user_to_access_profile - computed: false, optional: true, required: false
  private _allowUserToAccessProfile?: boolean | cdktf.IResolvable; 
  public get allowUserToAccessProfile() {
    return this.getBooleanAttribute('allow_user_to_access_profile');
  }
  public set allowUserToAccessProfile(value: boolean | cdktf.IResolvable) {
    this._allowUserToAccessProfile = value;
  }
  public resetAllowUserToAccessProfile() {
    this._allowUserToAccessProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserToAccessProfileInput() {
    return this._allowUserToAccessProfile;
  }

  // auto_create_user - computed: false, optional: true, required: false
  private _autoCreateUser?: boolean | cdktf.IResolvable; 
  public get autoCreateUser() {
    return this.getBooleanAttribute('auto_create_user');
  }
  public set autoCreateUser(value: boolean | cdktf.IResolvable) {
    this._autoCreateUser = value;
  }
  public resetAutoCreateUser() {
    this._autoCreateUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateUserInput() {
    return this._autoCreateUser;
  }

  // email_attribute - computed: false, optional: true, required: false
  private _emailAttribute?: string; 
  public get emailAttribute() {
    return this.getStringAttribute('email_attribute');
  }
  public set emailAttribute(value: string) {
    this._emailAttribute = value;
  }
  public resetEmailAttribute() {
    this._emailAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAttributeInput() {
    return this._emailAttribute;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // ldap_poisoning_protection - computed: false, optional: true, required: false
  private _ldapPoisoningProtection?: boolean | cdktf.IResolvable; 
  public get ldapPoisoningProtection() {
    return this.getBooleanAttribute('ldap_poisoning_protection');
  }
  public set ldapPoisoningProtection(value: boolean | cdktf.IResolvable) {
    this._ldapPoisoningProtection = value;
  }
  public resetLdapPoisoningProtection() {
    this._ldapPoisoningProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPoisoningProtectionInput() {
    return this._ldapPoisoningProtection;
  }

  // ldap_url - computed: false, optional: false, required: true
  private _ldapUrl?: string; 
  public get ldapUrl() {
    return this.getStringAttribute('ldap_url');
  }
  public set ldapUrl(value: string) {
    this._ldapUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUrlInput() {
    return this._ldapUrl;
  }

  // manager_dn - computed: false, optional: true, required: false
  private _managerDn?: string; 
  public get managerDn() {
    return this.getStringAttribute('manager_dn');
  }
  public set managerDn(value: string) {
    this._managerDn = value;
  }
  public resetManagerDn() {
    this._managerDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerDnInput() {
    return this._managerDn;
  }

  // manager_password - computed: true, optional: true, required: false
  private _managerPassword?: string; 
  public get managerPassword() {
    return this.getStringAttribute('manager_password');
  }
  public set managerPassword(value: string) {
    this._managerPassword = value;
  }
  public resetManagerPassword() {
    this._managerPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerPasswordInput() {
    return this._managerPassword;
  }

  // paging_support_enabled - computed: false, optional: true, required: false
  private _pagingSupportEnabled?: boolean | cdktf.IResolvable; 
  public get pagingSupportEnabled() {
    return this.getBooleanAttribute('paging_support_enabled');
  }
  public set pagingSupportEnabled(value: boolean | cdktf.IResolvable) {
    this._pagingSupportEnabled = value;
  }
  public resetPagingSupportEnabled() {
    this._pagingSupportEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingSupportEnabledInput() {
    return this._pagingSupportEnabled;
  }

  // search_base - computed: false, optional: true, required: false
  private _searchBase?: string; 
  public get searchBase() {
    return this.getStringAttribute('search_base');
  }
  public set searchBase(value: string) {
    this._searchBase = value;
  }
  public resetSearchBase() {
    this._searchBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBaseInput() {
    return this._searchBase;
  }

  // search_filter - computed: false, optional: true, required: false
  private _searchFilter?: string; 
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }
  public set searchFilter(value: string) {
    this._searchFilter = value;
  }
  public resetSearchFilter() {
    this._searchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterInput() {
    return this._searchFilter;
  }

  // search_sub_tree - computed: false, optional: true, required: false
  private _searchSubTree?: boolean | cdktf.IResolvable; 
  public get searchSubTree() {
    return this.getBooleanAttribute('search_sub_tree');
  }
  public set searchSubTree(value: boolean | cdktf.IResolvable) {
    this._searchSubTree = value;
  }
  public resetSearchSubTree() {
    this._searchSubTree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSubTreeInput() {
    return this._searchSubTree;
  }

  // user_dn_pattern - computed: false, optional: true, required: false
  private _userDnPattern?: string; 
  public get userDnPattern() {
    return this.getStringAttribute('user_dn_pattern');
  }
  public set userDnPattern(value: string) {
    this._userDnPattern = value;
  }
  public resetUserDnPattern() {
    this._userDnPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDnPatternInput() {
    return this._userDnPattern;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_user_to_access_profile: cdktf.booleanToTerraform(this._allowUserToAccessProfile),
      auto_create_user: cdktf.booleanToTerraform(this._autoCreateUser),
      email_attribute: cdktf.stringToTerraform(this._emailAttribute),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      ldap_poisoning_protection: cdktf.booleanToTerraform(this._ldapPoisoningProtection),
      ldap_url: cdktf.stringToTerraform(this._ldapUrl),
      manager_dn: cdktf.stringToTerraform(this._managerDn),
      manager_password: cdktf.stringToTerraform(this._managerPassword),
      paging_support_enabled: cdktf.booleanToTerraform(this._pagingSupportEnabled),
      search_base: cdktf.stringToTerraform(this._searchBase),
      search_filter: cdktf.stringToTerraform(this._searchFilter),
      search_sub_tree: cdktf.booleanToTerraform(this._searchSubTree),
      user_dn_pattern: cdktf.stringToTerraform(this._userDnPattern),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_user_to_access_profile: {
        value: cdktf.booleanToHclTerraform(this._allowUserToAccessProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_create_user: {
        value: cdktf.booleanToHclTerraform(this._autoCreateUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email_attribute: {
        value: cdktf.stringToHclTerraform(this._emailAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_poisoning_protection: {
        value: cdktf.booleanToHclTerraform(this._ldapPoisoningProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ldap_url: {
        value: cdktf.stringToHclTerraform(this._ldapUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_dn: {
        value: cdktf.stringToHclTerraform(this._managerDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_password: {
        value: cdktf.stringToHclTerraform(this._managerPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paging_support_enabled: {
        value: cdktf.booleanToHclTerraform(this._pagingSupportEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      search_base: {
        value: cdktf.stringToHclTerraform(this._searchBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_filter: {
        value: cdktf.stringToHclTerraform(this._searchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_sub_tree: {
        value: cdktf.booleanToHclTerraform(this._searchSubTree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_dn_pattern: {
        value: cdktf.stringToHclTerraform(this._userDnPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
