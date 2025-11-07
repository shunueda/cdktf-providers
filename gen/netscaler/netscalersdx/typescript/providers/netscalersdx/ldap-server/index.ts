// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum number of seconds the system will wait for a response from the LDAP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#auth_timeout LdapServer#auth_timeout}
  */
  readonly authTimeout?: number;
  /**
  * Set to false for public key Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#authentication LdapServer#authentication}
  */
  readonly authentication?: boolean | cdktf.IResolvable;
  /**
  * The base or node where the ldapsearch should start. Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#base_dn LdapServer#base_dn}
  */
  readonly baseDn?: string;
  /**
  * The full distinguished name used to bind to the LDAP server. Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#bind_dn LdapServer#bind_dn}
  */
  readonly bindDn?: string;
  /**
  * The password used to bind to the LDAP server. Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#bind_passwd LdapServer#bind_passwd}
  */
  readonly bindPasswd?: string;
  /**
  * Enable change of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#change_password LdapServer#change_password}
  */
  readonly changePassword?: boolean | cdktf.IResolvable;
  /**
  * This is the default group. Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#default_authentication_group LdapServer#default_authentication_group}
  */
  readonly defaultAuthenticationGroup?: string;
  /**
  * Enable following LDAP referrals received from LDAP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#follow_referrals LdapServer#follow_referrals}
  */
  readonly followReferrals?: boolean | cdktf.IResolvable;
  /**
  * The Attribute name for group extraction from the LDAP server. Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#group_attr_name LdapServer#group_attr_name}
  */
  readonly groupAttrName?: string;
  /**
  * Name that uniquely identifies a group in LDAP server. Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#group_name_identifier LdapServer#group_name_identifier}
  */
  readonly groupNameIdentifier?: string;
  /**
  * LDAP group search attribute. Used to determine to which groups a group belongs. Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#group_search_attribute LdapServer#group_search_attribute}
  */
  readonly groupSearchAttribute?: string;
  /**
  * String to be combined with the default LDAP group search string to form the search value. Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#group_search_filter LdapServer#group_search_filter}
  */
  readonly groupSearchFilter?: string;
  /**
  * LDAP group search subattribute. Used to determine to which groups a group belongs.. Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#group_search_subattribute LdapServer#group_search_subattribute}
  */
  readonly groupSearchSubattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#id LdapServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP address of the LDAP server.. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#ip_address LdapServer#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Host Name on the certificate from LDAP Server. Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#ldap_host_name LdapServer#ldap_host_name}
  */
  readonly ldapHostName?: string;
  /**
  * The name attribute used by the system to query the external LDAP server. Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#login_name LdapServer#login_name}
  */
  readonly loginName?: string;
  /**
  * Maximum number of ldap referrals to follow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#max_ldap_referrals LdapServer#max_ldap_referrals}
  */
  readonly maxLdapReferrals?: number;
  /**
  * Number of levels at which group extraction is allowed. Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#max_nesting_level LdapServer#max_nesting_level}
  */
  readonly maxNestingLevel?: number;
  /**
  * Name of LDAP server. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#name LdapServer#name}
  */
  readonly name: string;
  /**
  * Enable Nested Group Extraction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#nested_group_extraction LdapServer#nested_group_extraction}
  */
  readonly nestedGroupExtraction?: boolean | cdktf.IResolvable;
  /**
  * The port number on which the LDAP server is running. Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#port LdapServer#port}
  */
  readonly port?: number;
  /**
  * The String to be combined with the default LDAP user search string to form the value. Maximum length =  256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#search_filter LdapServer#search_filter}
  */
  readonly searchFilter?: string;
  /**
  * The communication type between the system and the LDAP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#sec_type LdapServer#sec_type}
  */
  readonly secType?: string;
  /**
  * SSH public key attribute holds the public keys of the user. Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#ssh_public_key LdapServer#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * The Sub-Attribute name for group extraction from LDAP server. Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#subattribute_name LdapServer#subattribute_name}
  */
  readonly subattributeName?: string;
  /**
  * The type of LDAP server. Minimum length =  2 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#type LdapServer#type}
  */
  readonly type: string;
  /**
  * Validate LDAP Server Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#validate_ldap_server_certs LdapServer#validate_ldap_server_certs}
  */
  readonly validateLdapServerCerts?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server netscalersdx_ldap_server}
*/
export class LdapServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_ldap_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapServer to import
  * @param importFromId The id of the existing LdapServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_ldap_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ldap_server netscalersdx_ldap_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapServerConfig
  */
  public constructor(scope: Construct, id: string, config: LdapServerConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_ldap_server',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authTimeout = config.authTimeout;
    this._authentication = config.authentication;
    this._baseDn = config.baseDn;
    this._bindDn = config.bindDn;
    this._bindPasswd = config.bindPasswd;
    this._changePassword = config.changePassword;
    this._defaultAuthenticationGroup = config.defaultAuthenticationGroup;
    this._followReferrals = config.followReferrals;
    this._groupAttrName = config.groupAttrName;
    this._groupNameIdentifier = config.groupNameIdentifier;
    this._groupSearchAttribute = config.groupSearchAttribute;
    this._groupSearchFilter = config.groupSearchFilter;
    this._groupSearchSubattribute = config.groupSearchSubattribute;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._ldapHostName = config.ldapHostName;
    this._loginName = config.loginName;
    this._maxLdapReferrals = config.maxLdapReferrals;
    this._maxNestingLevel = config.maxNestingLevel;
    this._name = config.name;
    this._nestedGroupExtraction = config.nestedGroupExtraction;
    this._port = config.port;
    this._searchFilter = config.searchFilter;
    this._secType = config.secType;
    this._sshPublicKey = config.sshPublicKey;
    this._subattributeName = config.subattributeName;
    this._type = config.type;
    this._validateLdapServerCerts = config.validateLdapServerCerts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_timeout - computed: true, optional: true, required: false
  private _authTimeout?: number; 
  public get authTimeout() {
    return this.getNumberAttribute('auth_timeout');
  }
  public set authTimeout(value: number) {
    this._authTimeout = value;
  }
  public resetAuthTimeout() {
    this._authTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTimeoutInput() {
    return this._authTimeout;
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: boolean | cdktf.IResolvable; 
  public get authentication() {
    return this.getBooleanAttribute('authentication');
  }
  public set authentication(value: boolean | cdktf.IResolvable) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // bind_dn - computed: true, optional: true, required: false
  private _bindDn?: string; 
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }
  public set bindDn(value: string) {
    this._bindDn = value;
  }
  public resetBindDn() {
    this._bindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnInput() {
    return this._bindDn;
  }

  // bind_passwd - computed: false, optional: true, required: false
  private _bindPasswd?: string; 
  public get bindPasswd() {
    return this.getStringAttribute('bind_passwd');
  }
  public set bindPasswd(value: string) {
    this._bindPasswd = value;
  }
  public resetBindPasswd() {
    this._bindPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswdInput() {
    return this._bindPasswd;
  }

  // change_password - computed: true, optional: true, required: false
  private _changePassword?: boolean | cdktf.IResolvable; 
  public get changePassword() {
    return this.getBooleanAttribute('change_password');
  }
  public set changePassword(value: boolean | cdktf.IResolvable) {
    this._changePassword = value;
  }
  public resetChangePassword() {
    this._changePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordInput() {
    return this._changePassword;
  }

  // default_authentication_group - computed: true, optional: true, required: false
  private _defaultAuthenticationGroup?: string; 
  public get defaultAuthenticationGroup() {
    return this.getStringAttribute('default_authentication_group');
  }
  public set defaultAuthenticationGroup(value: string) {
    this._defaultAuthenticationGroup = value;
  }
  public resetDefaultAuthenticationGroup() {
    this._defaultAuthenticationGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAuthenticationGroupInput() {
    return this._defaultAuthenticationGroup;
  }

  // follow_referrals - computed: true, optional: true, required: false
  private _followReferrals?: boolean | cdktf.IResolvable; 
  public get followReferrals() {
    return this.getBooleanAttribute('follow_referrals');
  }
  public set followReferrals(value: boolean | cdktf.IResolvable) {
    this._followReferrals = value;
  }
  public resetFollowReferrals() {
    this._followReferrals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followReferralsInput() {
    return this._followReferrals;
  }

  // group_attr_name - computed: true, optional: true, required: false
  private _groupAttrName?: string; 
  public get groupAttrName() {
    return this.getStringAttribute('group_attr_name');
  }
  public set groupAttrName(value: string) {
    this._groupAttrName = value;
  }
  public resetGroupAttrName() {
    this._groupAttrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttrNameInput() {
    return this._groupAttrName;
  }

  // group_name_identifier - computed: true, optional: true, required: false
  private _groupNameIdentifier?: string; 
  public get groupNameIdentifier() {
    return this.getStringAttribute('group_name_identifier');
  }
  public set groupNameIdentifier(value: string) {
    this._groupNameIdentifier = value;
  }
  public resetGroupNameIdentifier() {
    this._groupNameIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameIdentifierInput() {
    return this._groupNameIdentifier;
  }

  // group_search_attribute - computed: true, optional: true, required: false
  private _groupSearchAttribute?: string; 
  public get groupSearchAttribute() {
    return this.getStringAttribute('group_search_attribute');
  }
  public set groupSearchAttribute(value: string) {
    this._groupSearchAttribute = value;
  }
  public resetGroupSearchAttribute() {
    this._groupSearchAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchAttributeInput() {
    return this._groupSearchAttribute;
  }

  // group_search_filter - computed: true, optional: true, required: false
  private _groupSearchFilter?: string; 
  public get groupSearchFilter() {
    return this.getStringAttribute('group_search_filter');
  }
  public set groupSearchFilter(value: string) {
    this._groupSearchFilter = value;
  }
  public resetGroupSearchFilter() {
    this._groupSearchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchFilterInput() {
    return this._groupSearchFilter;
  }

  // group_search_subattribute - computed: true, optional: true, required: false
  private _groupSearchSubattribute?: string; 
  public get groupSearchSubattribute() {
    return this.getStringAttribute('group_search_subattribute');
  }
  public set groupSearchSubattribute(value: string) {
    this._groupSearchSubattribute = value;
  }
  public resetGroupSearchSubattribute() {
    this._groupSearchSubattribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchSubattributeInput() {
    return this._groupSearchSubattribute;
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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ldap_host_name - computed: true, optional: true, required: false
  private _ldapHostName?: string; 
  public get ldapHostName() {
    return this.getStringAttribute('ldap_host_name');
  }
  public set ldapHostName(value: string) {
    this._ldapHostName = value;
  }
  public resetLdapHostName() {
    this._ldapHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapHostNameInput() {
    return this._ldapHostName;
  }

  // login_name - computed: true, optional: true, required: false
  private _loginName?: string; 
  public get loginName() {
    return this.getStringAttribute('login_name');
  }
  public set loginName(value: string) {
    this._loginName = value;
  }
  public resetLoginName() {
    this._loginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameInput() {
    return this._loginName;
  }

  // max_ldap_referrals - computed: true, optional: true, required: false
  private _maxLdapReferrals?: number; 
  public get maxLdapReferrals() {
    return this.getNumberAttribute('max_ldap_referrals');
  }
  public set maxLdapReferrals(value: number) {
    this._maxLdapReferrals = value;
  }
  public resetMaxLdapReferrals() {
    this._maxLdapReferrals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLdapReferralsInput() {
    return this._maxLdapReferrals;
  }

  // max_nesting_level - computed: true, optional: true, required: false
  private _maxNestingLevel?: number; 
  public get maxNestingLevel() {
    return this.getNumberAttribute('max_nesting_level');
  }
  public set maxNestingLevel(value: number) {
    this._maxNestingLevel = value;
  }
  public resetMaxNestingLevel() {
    this._maxNestingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNestingLevelInput() {
    return this._maxNestingLevel;
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

  // nested_group_extraction - computed: true, optional: true, required: false
  private _nestedGroupExtraction?: boolean | cdktf.IResolvable; 
  public get nestedGroupExtraction() {
    return this.getBooleanAttribute('nested_group_extraction');
  }
  public set nestedGroupExtraction(value: boolean | cdktf.IResolvable) {
    this._nestedGroupExtraction = value;
  }
  public resetNestedGroupExtraction() {
    this._nestedGroupExtraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedGroupExtractionInput() {
    return this._nestedGroupExtraction;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // search_filter - computed: true, optional: true, required: false
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

  // sec_type - computed: true, optional: true, required: false
  private _secType?: string; 
  public get secType() {
    return this.getStringAttribute('sec_type');
  }
  public set secType(value: string) {
    this._secType = value;
  }
  public resetSecType() {
    this._secType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secTypeInput() {
    return this._secType;
  }

  // ssh_public_key - computed: true, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // subattribute_name - computed: true, optional: true, required: false
  private _subattributeName?: string; 
  public get subattributeName() {
    return this.getStringAttribute('subattribute_name');
  }
  public set subattributeName(value: string) {
    this._subattributeName = value;
  }
  public resetSubattributeName() {
    this._subattributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subattributeNameInput() {
    return this._subattributeName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // validate_ldap_server_certs - computed: true, optional: true, required: false
  private _validateLdapServerCerts?: boolean | cdktf.IResolvable; 
  public get validateLdapServerCerts() {
    return this.getBooleanAttribute('validate_ldap_server_certs');
  }
  public set validateLdapServerCerts(value: boolean | cdktf.IResolvable) {
    this._validateLdapServerCerts = value;
  }
  public resetValidateLdapServerCerts() {
    this._validateLdapServerCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateLdapServerCertsInput() {
    return this._validateLdapServerCerts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_timeout: cdktf.numberToTerraform(this._authTimeout),
      authentication: cdktf.booleanToTerraform(this._authentication),
      base_dn: cdktf.stringToTerraform(this._baseDn),
      bind_dn: cdktf.stringToTerraform(this._bindDn),
      bind_passwd: cdktf.stringToTerraform(this._bindPasswd),
      change_password: cdktf.booleanToTerraform(this._changePassword),
      default_authentication_group: cdktf.stringToTerraform(this._defaultAuthenticationGroup),
      follow_referrals: cdktf.booleanToTerraform(this._followReferrals),
      group_attr_name: cdktf.stringToTerraform(this._groupAttrName),
      group_name_identifier: cdktf.stringToTerraform(this._groupNameIdentifier),
      group_search_attribute: cdktf.stringToTerraform(this._groupSearchAttribute),
      group_search_filter: cdktf.stringToTerraform(this._groupSearchFilter),
      group_search_subattribute: cdktf.stringToTerraform(this._groupSearchSubattribute),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ldap_host_name: cdktf.stringToTerraform(this._ldapHostName),
      login_name: cdktf.stringToTerraform(this._loginName),
      max_ldap_referrals: cdktf.numberToTerraform(this._maxLdapReferrals),
      max_nesting_level: cdktf.numberToTerraform(this._maxNestingLevel),
      name: cdktf.stringToTerraform(this._name),
      nested_group_extraction: cdktf.booleanToTerraform(this._nestedGroupExtraction),
      port: cdktf.numberToTerraform(this._port),
      search_filter: cdktf.stringToTerraform(this._searchFilter),
      sec_type: cdktf.stringToTerraform(this._secType),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      subattribute_name: cdktf.stringToTerraform(this._subattributeName),
      type: cdktf.stringToTerraform(this._type),
      validate_ldap_server_certs: cdktf.booleanToTerraform(this._validateLdapServerCerts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_timeout: {
        value: cdktf.numberToHclTerraform(this._authTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication: {
        value: cdktf.booleanToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      bind_passwd: {
        value: cdktf.stringToHclTerraform(this._bindPasswd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_password: {
        value: cdktf.booleanToHclTerraform(this._changePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_authentication_group: {
        value: cdktf.stringToHclTerraform(this._defaultAuthenticationGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      follow_referrals: {
        value: cdktf.booleanToHclTerraform(this._followReferrals),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_attr_name: {
        value: cdktf.stringToHclTerraform(this._groupAttrName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name_identifier: {
        value: cdktf.stringToHclTerraform(this._groupNameIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_search_attribute: {
        value: cdktf.stringToHclTerraform(this._groupSearchAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_search_filter: {
        value: cdktf.stringToHclTerraform(this._groupSearchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_search_subattribute: {
        value: cdktf.stringToHclTerraform(this._groupSearchSubattribute),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_host_name: {
        value: cdktf.stringToHclTerraform(this._ldapHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_name: {
        value: cdktf.stringToHclTerraform(this._loginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ldap_referrals: {
        value: cdktf.numberToHclTerraform(this._maxLdapReferrals),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_nesting_level: {
        value: cdktf.numberToHclTerraform(this._maxNestingLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nested_group_extraction: {
        value: cdktf.booleanToHclTerraform(this._nestedGroupExtraction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_filter: {
        value: cdktf.stringToHclTerraform(this._searchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sec_type: {
        value: cdktf.stringToHclTerraform(this._secType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subattribute_name: {
        value: cdktf.stringToHclTerraform(this._subattributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_ldap_server_certs: {
        value: cdktf.booleanToHclTerraform(this._validateLdapServerCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
