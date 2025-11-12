// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgIdpLdapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable if users should get prompted to link an existing ZITADEL user to an external account if the selected attribute matches, supported values: AUTO_LINKING_OPTION_UNSPECIFIED, AUTO_LINKING_OPTION_USERNAME, AUTO_LINKING_OPTION_EMAIL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#auto_linking OrgIdpLdap#auto_linking}
  */
  readonly autoLinking?: string;
  /**
  * User attribute for the avatar url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#avatar_url_attribute OrgIdpLdap#avatar_url_attribute}
  */
  readonly avatarUrlAttribute?: string;
  /**
  * Base DN for LDAP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#base_dn OrgIdpLdap#base_dn}
  */
  readonly baseDn: string;
  /**
  * Bind DN for LDAP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#bind_dn OrgIdpLdap#bind_dn}
  */
  readonly bindDn: string;
  /**
  * Bind password for LDAP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#bind_password OrgIdpLdap#bind_password}
  */
  readonly bindPassword: string;
  /**
  * User attribute for the display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#display_name_attribute OrgIdpLdap#display_name_attribute}
  */
  readonly displayNameAttribute?: string;
  /**
  * User attribute for the email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#email_attribute OrgIdpLdap#email_attribute}
  */
  readonly emailAttribute?: string;
  /**
  * User attribute for the email verified state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#email_verified_attribute OrgIdpLdap#email_verified_attribute}
  */
  readonly emailVerifiedAttribute?: string;
  /**
  * User attribute for the first name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#first_name_attribute OrgIdpLdap#first_name_attribute}
  */
  readonly firstNameAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#id OrgIdpLdap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User attribute for the id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#id_attribute OrgIdpLdap#id_attribute}
  */
  readonly idAttribute?: string;
  /**
  * enable if a new account in ZITADEL should be created automatically on login with an external account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#is_auto_creation OrgIdpLdap#is_auto_creation}
  */
  readonly isAutoCreation: boolean | cdktf.IResolvable;
  /**
  * enable if a the ZITADEL account fields should be updated automatically on each login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#is_auto_update OrgIdpLdap#is_auto_update}
  */
  readonly isAutoUpdate: boolean | cdktf.IResolvable;
  /**
  * enable if users should be able to create a new account in ZITADEL when using an external account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#is_creation_allowed OrgIdpLdap#is_creation_allowed}
  */
  readonly isCreationAllowed: boolean | cdktf.IResolvable;
  /**
  * enable if users should be able to link an existing ZITADEL user with an external account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#is_linking_allowed OrgIdpLdap#is_linking_allowed}
  */
  readonly isLinkingAllowed: boolean | cdktf.IResolvable;
  /**
  * User attribute for the last name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#last_name_attribute OrgIdpLdap#last_name_attribute}
  */
  readonly lastNameAttribute?: string;
  /**
  * Name of the IDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#name OrgIdpLdap#name}
  */
  readonly name?: string;
  /**
  * User attribute for the nick name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#nick_name_attribute OrgIdpLdap#nick_name_attribute}
  */
  readonly nickNameAttribute?: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#org_id OrgIdpLdap#org_id}
  */
  readonly orgId?: string;
  /**
  * User attribute for the phone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#phone_attribute OrgIdpLdap#phone_attribute}
  */
  readonly phoneAttribute?: string;
  /**
  * User attribute for the phone verified state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#phone_verified_attribute OrgIdpLdap#phone_verified_attribute}
  */
  readonly phoneVerifiedAttribute?: string;
  /**
  * User attribute for the preferred language
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#preferred_language_attribute OrgIdpLdap#preferred_language_attribute}
  */
  readonly preferredLanguageAttribute?: string;
  /**
  * User attribute for the preferred username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#preferred_username_attribute OrgIdpLdap#preferred_username_attribute}
  */
  readonly preferredUsernameAttribute?: string;
  /**
  * User attribute for the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#profile_attribute OrgIdpLdap#profile_attribute}
  */
  readonly profileAttribute?: string;
  /**
  * Servers to try in order for establishing LDAP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#servers OrgIdpLdap#servers}
  */
  readonly servers: string[];
  /**
  * Wether to use StartTLS for LDAP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#start_tls OrgIdpLdap#start_tls}
  */
  readonly startTls: boolean | cdktf.IResolvable;
  /**
  * Timeout for LDAP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#timeout OrgIdpLdap#timeout}
  */
  readonly timeout: string;
  /**
  * User base for LDAP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#user_base OrgIdpLdap#user_base}
  */
  readonly userBase: string;
  /**
  * User filters for LDAP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#user_filters OrgIdpLdap#user_filters}
  */
  readonly userFilters: string[];
  /**
  * User object classes for LDAP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#user_object_classes OrgIdpLdap#user_object_classes}
  */
  readonly userObjectClasses: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap zitadel_org_idp_ldap}
*/
export class OrgIdpLdap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_org_idp_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgIdpLdap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgIdpLdap to import
  * @param importFromId The id of the existing OrgIdpLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgIdpLdap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_org_idp_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/org_idp_ldap zitadel_org_idp_ldap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgIdpLdapConfig
  */
  public constructor(scope: Construct, id: string, config: OrgIdpLdapConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_org_idp_ldap',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoLinking = config.autoLinking;
    this._avatarUrlAttribute = config.avatarUrlAttribute;
    this._baseDn = config.baseDn;
    this._bindDn = config.bindDn;
    this._bindPassword = config.bindPassword;
    this._displayNameAttribute = config.displayNameAttribute;
    this._emailAttribute = config.emailAttribute;
    this._emailVerifiedAttribute = config.emailVerifiedAttribute;
    this._firstNameAttribute = config.firstNameAttribute;
    this._id = config.id;
    this._idAttribute = config.idAttribute;
    this._isAutoCreation = config.isAutoCreation;
    this._isAutoUpdate = config.isAutoUpdate;
    this._isCreationAllowed = config.isCreationAllowed;
    this._isLinkingAllowed = config.isLinkingAllowed;
    this._lastNameAttribute = config.lastNameAttribute;
    this._name = config.name;
    this._nickNameAttribute = config.nickNameAttribute;
    this._orgId = config.orgId;
    this._phoneAttribute = config.phoneAttribute;
    this._phoneVerifiedAttribute = config.phoneVerifiedAttribute;
    this._preferredLanguageAttribute = config.preferredLanguageAttribute;
    this._preferredUsernameAttribute = config.preferredUsernameAttribute;
    this._profileAttribute = config.profileAttribute;
    this._servers = config.servers;
    this._startTls = config.startTls;
    this._timeout = config.timeout;
    this._userBase = config.userBase;
    this._userFilters = config.userFilters;
    this._userObjectClasses = config.userObjectClasses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_linking - computed: false, optional: true, required: false
  private _autoLinking?: string; 
  public get autoLinking() {
    return this.getStringAttribute('auto_linking');
  }
  public set autoLinking(value: string) {
    this._autoLinking = value;
  }
  public resetAutoLinking() {
    this._autoLinking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLinkingInput() {
    return this._autoLinking;
  }

  // avatar_url_attribute - computed: false, optional: true, required: false
  private _avatarUrlAttribute?: string; 
  public get avatarUrlAttribute() {
    return this.getStringAttribute('avatar_url_attribute');
  }
  public set avatarUrlAttribute(value: string) {
    this._avatarUrlAttribute = value;
  }
  public resetAvatarUrlAttribute() {
    this._avatarUrlAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarUrlAttributeInput() {
    return this._avatarUrlAttribute;
  }

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

  // display_name_attribute - computed: false, optional: true, required: false
  private _displayNameAttribute?: string; 
  public get displayNameAttribute() {
    return this.getStringAttribute('display_name_attribute');
  }
  public set displayNameAttribute(value: string) {
    this._displayNameAttribute = value;
  }
  public resetDisplayNameAttribute() {
    this._displayNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameAttributeInput() {
    return this._displayNameAttribute;
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

  // email_verified_attribute - computed: false, optional: true, required: false
  private _emailVerifiedAttribute?: string; 
  public get emailVerifiedAttribute() {
    return this.getStringAttribute('email_verified_attribute');
  }
  public set emailVerifiedAttribute(value: string) {
    this._emailVerifiedAttribute = value;
  }
  public resetEmailVerifiedAttribute() {
    this._emailVerifiedAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerifiedAttributeInput() {
    return this._emailVerifiedAttribute;
  }

  // first_name_attribute - computed: false, optional: true, required: false
  private _firstNameAttribute?: string; 
  public get firstNameAttribute() {
    return this.getStringAttribute('first_name_attribute');
  }
  public set firstNameAttribute(value: string) {
    this._firstNameAttribute = value;
  }
  public resetFirstNameAttribute() {
    this._firstNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameAttributeInput() {
    return this._firstNameAttribute;
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

  // id_attribute - computed: false, optional: true, required: false
  private _idAttribute?: string; 
  public get idAttribute() {
    return this.getStringAttribute('id_attribute');
  }
  public set idAttribute(value: string) {
    this._idAttribute = value;
  }
  public resetIdAttribute() {
    this._idAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idAttributeInput() {
    return this._idAttribute;
  }

  // is_auto_creation - computed: false, optional: false, required: true
  private _isAutoCreation?: boolean | cdktf.IResolvable; 
  public get isAutoCreation() {
    return this.getBooleanAttribute('is_auto_creation');
  }
  public set isAutoCreation(value: boolean | cdktf.IResolvable) {
    this._isAutoCreation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoCreationInput() {
    return this._isAutoCreation;
  }

  // is_auto_update - computed: false, optional: false, required: true
  private _isAutoUpdate?: boolean | cdktf.IResolvable; 
  public get isAutoUpdate() {
    return this.getBooleanAttribute('is_auto_update');
  }
  public set isAutoUpdate(value: boolean | cdktf.IResolvable) {
    this._isAutoUpdate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoUpdateInput() {
    return this._isAutoUpdate;
  }

  // is_creation_allowed - computed: false, optional: false, required: true
  private _isCreationAllowed?: boolean | cdktf.IResolvable; 
  public get isCreationAllowed() {
    return this.getBooleanAttribute('is_creation_allowed');
  }
  public set isCreationAllowed(value: boolean | cdktf.IResolvable) {
    this._isCreationAllowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isCreationAllowedInput() {
    return this._isCreationAllowed;
  }

  // is_linking_allowed - computed: false, optional: false, required: true
  private _isLinkingAllowed?: boolean | cdktf.IResolvable; 
  public get isLinkingAllowed() {
    return this.getBooleanAttribute('is_linking_allowed');
  }
  public set isLinkingAllowed(value: boolean | cdktf.IResolvable) {
    this._isLinkingAllowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isLinkingAllowedInput() {
    return this._isLinkingAllowed;
  }

  // last_name_attribute - computed: false, optional: true, required: false
  private _lastNameAttribute?: string; 
  public get lastNameAttribute() {
    return this.getStringAttribute('last_name_attribute');
  }
  public set lastNameAttribute(value: string) {
    this._lastNameAttribute = value;
  }
  public resetLastNameAttribute() {
    this._lastNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameAttributeInput() {
    return this._lastNameAttribute;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nick_name_attribute - computed: false, optional: true, required: false
  private _nickNameAttribute?: string; 
  public get nickNameAttribute() {
    return this.getStringAttribute('nick_name_attribute');
  }
  public set nickNameAttribute(value: string) {
    this._nickNameAttribute = value;
  }
  public resetNickNameAttribute() {
    this._nickNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nickNameAttributeInput() {
    return this._nickNameAttribute;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // phone_attribute - computed: false, optional: true, required: false
  private _phoneAttribute?: string; 
  public get phoneAttribute() {
    return this.getStringAttribute('phone_attribute');
  }
  public set phoneAttribute(value: string) {
    this._phoneAttribute = value;
  }
  public resetPhoneAttribute() {
    this._phoneAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneAttributeInput() {
    return this._phoneAttribute;
  }

  // phone_verified_attribute - computed: false, optional: true, required: false
  private _phoneVerifiedAttribute?: string; 
  public get phoneVerifiedAttribute() {
    return this.getStringAttribute('phone_verified_attribute');
  }
  public set phoneVerifiedAttribute(value: string) {
    this._phoneVerifiedAttribute = value;
  }
  public resetPhoneVerifiedAttribute() {
    this._phoneVerifiedAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneVerifiedAttributeInput() {
    return this._phoneVerifiedAttribute;
  }

  // preferred_language_attribute - computed: false, optional: true, required: false
  private _preferredLanguageAttribute?: string; 
  public get preferredLanguageAttribute() {
    return this.getStringAttribute('preferred_language_attribute');
  }
  public set preferredLanguageAttribute(value: string) {
    this._preferredLanguageAttribute = value;
  }
  public resetPreferredLanguageAttribute() {
    this._preferredLanguageAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLanguageAttributeInput() {
    return this._preferredLanguageAttribute;
  }

  // preferred_username_attribute - computed: false, optional: true, required: false
  private _preferredUsernameAttribute?: string; 
  public get preferredUsernameAttribute() {
    return this.getStringAttribute('preferred_username_attribute');
  }
  public set preferredUsernameAttribute(value: string) {
    this._preferredUsernameAttribute = value;
  }
  public resetPreferredUsernameAttribute() {
    this._preferredUsernameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredUsernameAttributeInput() {
    return this._preferredUsernameAttribute;
  }

  // profile_attribute - computed: false, optional: true, required: false
  private _profileAttribute?: string; 
  public get profileAttribute() {
    return this.getStringAttribute('profile_attribute');
  }
  public set profileAttribute(value: string) {
    this._profileAttribute = value;
  }
  public resetProfileAttribute() {
    this._profileAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileAttributeInput() {
    return this._profileAttribute;
  }

  // servers - computed: false, optional: false, required: true
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // start_tls - computed: false, optional: false, required: true
  private _startTls?: boolean | cdktf.IResolvable; 
  public get startTls() {
    return this.getBooleanAttribute('start_tls');
  }
  public set startTls(value: boolean | cdktf.IResolvable) {
    this._startTls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsInput() {
    return this._startTls;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // user_base - computed: false, optional: false, required: true
  private _userBase?: string; 
  public get userBase() {
    return this.getStringAttribute('user_base');
  }
  public set userBase(value: string) {
    this._userBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userBaseInput() {
    return this._userBase;
  }

  // user_filters - computed: false, optional: false, required: true
  private _userFilters?: string[]; 
  public get userFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('user_filters'));
  }
  public set userFilters(value: string[]) {
    this._userFilters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userFiltersInput() {
    return this._userFilters;
  }

  // user_object_classes - computed: false, optional: false, required: true
  private _userObjectClasses?: string[]; 
  public get userObjectClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('user_object_classes'));
  }
  public set userObjectClasses(value: string[]) {
    this._userObjectClasses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userObjectClassesInput() {
    return this._userObjectClasses;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_linking: cdktf.stringToTerraform(this._autoLinking),
      avatar_url_attribute: cdktf.stringToTerraform(this._avatarUrlAttribute),
      base_dn: cdktf.stringToTerraform(this._baseDn),
      bind_dn: cdktf.stringToTerraform(this._bindDn),
      bind_password: cdktf.stringToTerraform(this._bindPassword),
      display_name_attribute: cdktf.stringToTerraform(this._displayNameAttribute),
      email_attribute: cdktf.stringToTerraform(this._emailAttribute),
      email_verified_attribute: cdktf.stringToTerraform(this._emailVerifiedAttribute),
      first_name_attribute: cdktf.stringToTerraform(this._firstNameAttribute),
      id: cdktf.stringToTerraform(this._id),
      id_attribute: cdktf.stringToTerraform(this._idAttribute),
      is_auto_creation: cdktf.booleanToTerraform(this._isAutoCreation),
      is_auto_update: cdktf.booleanToTerraform(this._isAutoUpdate),
      is_creation_allowed: cdktf.booleanToTerraform(this._isCreationAllowed),
      is_linking_allowed: cdktf.booleanToTerraform(this._isLinkingAllowed),
      last_name_attribute: cdktf.stringToTerraform(this._lastNameAttribute),
      name: cdktf.stringToTerraform(this._name),
      nick_name_attribute: cdktf.stringToTerraform(this._nickNameAttribute),
      org_id: cdktf.stringToTerraform(this._orgId),
      phone_attribute: cdktf.stringToTerraform(this._phoneAttribute),
      phone_verified_attribute: cdktf.stringToTerraform(this._phoneVerifiedAttribute),
      preferred_language_attribute: cdktf.stringToTerraform(this._preferredLanguageAttribute),
      preferred_username_attribute: cdktf.stringToTerraform(this._preferredUsernameAttribute),
      profile_attribute: cdktf.stringToTerraform(this._profileAttribute),
      servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servers),
      start_tls: cdktf.booleanToTerraform(this._startTls),
      timeout: cdktf.stringToTerraform(this._timeout),
      user_base: cdktf.stringToTerraform(this._userBase),
      user_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userFilters),
      user_object_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userObjectClasses),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_linking: {
        value: cdktf.stringToHclTerraform(this._autoLinking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avatar_url_attribute: {
        value: cdktf.stringToHclTerraform(this._avatarUrlAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      bind_password: {
        value: cdktf.stringToHclTerraform(this._bindPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name_attribute: {
        value: cdktf.stringToHclTerraform(this._displayNameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_attribute: {
        value: cdktf.stringToHclTerraform(this._emailAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_verified_attribute: {
        value: cdktf.stringToHclTerraform(this._emailVerifiedAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name_attribute: {
        value: cdktf.stringToHclTerraform(this._firstNameAttribute),
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
      id_attribute: {
        value: cdktf.stringToHclTerraform(this._idAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_auto_creation: {
        value: cdktf.booleanToHclTerraform(this._isAutoCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_auto_update: {
        value: cdktf.booleanToHclTerraform(this._isAutoUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_creation_allowed: {
        value: cdktf.booleanToHclTerraform(this._isCreationAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_linking_allowed: {
        value: cdktf.booleanToHclTerraform(this._isLinkingAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_name_attribute: {
        value: cdktf.stringToHclTerraform(this._lastNameAttribute),
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
      nick_name_attribute: {
        value: cdktf.stringToHclTerraform(this._nickNameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_attribute: {
        value: cdktf.stringToHclTerraform(this._phoneAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_verified_attribute: {
        value: cdktf.stringToHclTerraform(this._phoneVerifiedAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_language_attribute: {
        value: cdktf.stringToHclTerraform(this._preferredLanguageAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_username_attribute: {
        value: cdktf.stringToHclTerraform(this._preferredUsernameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_attribute: {
        value: cdktf.stringToHclTerraform(this._profileAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._servers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      start_tls: {
        value: cdktf.booleanToHclTerraform(this._startTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_base: {
        value: cdktf.stringToHclTerraform(this._userBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userFilters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_object_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userObjectClasses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
