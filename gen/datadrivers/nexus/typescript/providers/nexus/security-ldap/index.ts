// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityLdapConfig extends cdktf.TerraformMetaArguments {
  /**
  * The password to bind with. Required if authScheme other than none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#auth_password SecurityLdap#auth_password}
  */
  readonly authPassword?: string;
  /**
  * The SASL realm to bind to. Required if authScheme is CRAM_MD5 or DIGEST_MD5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#auth_realm SecurityLdap#auth_realm}
  */
  readonly authRealm?: string;
  /**
  * Authentication scheme used for connecting to LDAP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#auth_schema SecurityLdap#auth_schema}
  */
  readonly authSchema: string;
  /**
  * This must be a fully qualified username if simple authentication is used. Required if authScheme other than none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#auth_username SecurityLdap#auth_username}
  */
  readonly authUsername: string;
  /**
  * How long to wait before retrying
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#connection_retry_delay_seconds SecurityLdap#connection_retry_delay_seconds}
  */
  readonly connectionRetryDelaySeconds: number;
  /**
  * How long to wait before timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#connection_timeout_seconds SecurityLdap#connection_timeout_seconds}
  */
  readonly connectionTimeoutSeconds: number;
  /**
  * The relative DN where group objects are found (e.g. ou=Group). This value will have the Search base DN value appended to form the full Group search base DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#group_base_dn SecurityLdap#group_base_dn}
  */
  readonly groupBaseDn?: string;
  /**
  * This field specifies the attribute of the Object class that defines the Group ID. Required if groupType is static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#group_id_attribute SecurityLdap#group_id_attribute}
  */
  readonly groupIdAttribute?: string;
  /**
  * LDAP attribute containing the usernames for the group. Required if groupType is static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#group_member_attribute SecurityLdap#group_member_attribute}
  */
  readonly groupMemberAttribute?: string;
  /**
  * The format of user ID stored in the group member attribute. Required if groupType is static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#group_member_format SecurityLdap#group_member_format}
  */
  readonly groupMemberFormat?: string;
  /**
  * LDAP class for group objects. Required if groupType is static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#group_object_class SecurityLdap#group_object_class}
  */
  readonly groupObjectClass?: string;
  /**
  * Are groups located in structures below the group base DN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#group_subtree SecurityLdap#group_subtree}
  */
  readonly groupSubtree?: boolean | cdktf.IResolvable;
  /**
  * Defines a type of groups used: static (a group contains a list of users) or dynamic (a user contains a list of groups). Required if ldapGroupsAsRoles is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#group_type SecurityLdap#group_type}
  */
  readonly groupType: string;
  /**
  * LDAP server connection hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#host SecurityLdap#host}
  */
  readonly host: string;
  /**
  * Denotes whether LDAP assigned roles are used as Nexus Repository Manager roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#ldap_groups_as_roles SecurityLdap#ldap_groups_as_roles}
  */
  readonly ldapGroupsAsRoles?: boolean | cdktf.IResolvable;
  /**
  * How many retry attempts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#max_incident_count SecurityLdap#max_incident_count}
  */
  readonly maxIncidentCount: number;
  /**
  * LDAP server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#name SecurityLdap#name}
  */
  readonly name: string;
  /**
  * LDAP server connection port to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#port SecurityLdap#port}
  */
  readonly port: number;
  /**
  * LDAP server connection Protocol to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#protocol SecurityLdap#protocol}
  */
  readonly protocol: string;
  /**
  * LDAP location to be added to the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#search_base SecurityLdap#search_base}
  */
  readonly searchBase: string;
  /**
  * Whether to use certificates stored in Nexus Repository Manager's truststore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#use_trust_store SecurityLdap#use_trust_store}
  */
  readonly useTrustStore?: boolean | cdktf.IResolvable;
  /**
  * The relative DN where user objects are found (e.g. ou=people). This value will have the Search base DN value appended to form the full User search base DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#user_base_dn SecurityLdap#user_base_dn}
  */
  readonly userBaseDn?: string;
  /**
  * This is used to find an email address given the user ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#user_email_address_attribute SecurityLdap#user_email_address_attribute}
  */
  readonly userEmailAddressAttribute?: string;
  /**
  * This is used to find a user given its user ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#user_id_attribute SecurityLdap#user_id_attribute}
  */
  readonly userIdAttribute?: string;
  /**
  * LDAP search filter to limit user search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#user_ldap_filter SecurityLdap#user_ldap_filter}
  */
  readonly userLdapFilter?: string;
  /**
  * Set this to the attribute used to store the attribute which holds groups DN in the user object. Required if groupType is dynamic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#user_member_of_attribute SecurityLdap#user_member_of_attribute}
  */
  readonly userMemberOfAttribute?: string;
  /**
  * LDAP class for user objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#user_object_class SecurityLdap#user_object_class}
  */
  readonly userObjectClass?: string;
  /**
  * If this field is blank the user will be authenticated against a bind with the LDAP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#user_password_attribute SecurityLdap#user_password_attribute}
  */
  readonly userPasswordAttribute?: string;
  /**
  * This is used to find a real name given the user ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#user_real_name_attribute SecurityLdap#user_real_name_attribute}
  */
  readonly userRealNameAttribute?: string;
  /**
  * Are users located in structures below the user base DN?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#user_subtree SecurityLdap#user_subtree}
  */
  readonly userSubtree?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap nexus_security_ldap}
*/
export class SecurityLdap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_security_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityLdap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityLdap to import
  * @param importFromId The id of the existing SecurityLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityLdap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_security_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ldap nexus_security_ldap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityLdapConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityLdapConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_security_ldap',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authPassword = config.authPassword;
    this._authRealm = config.authRealm;
    this._authSchema = config.authSchema;
    this._authUsername = config.authUsername;
    this._connectionRetryDelaySeconds = config.connectionRetryDelaySeconds;
    this._connectionTimeoutSeconds = config.connectionTimeoutSeconds;
    this._groupBaseDn = config.groupBaseDn;
    this._groupIdAttribute = config.groupIdAttribute;
    this._groupMemberAttribute = config.groupMemberAttribute;
    this._groupMemberFormat = config.groupMemberFormat;
    this._groupObjectClass = config.groupObjectClass;
    this._groupSubtree = config.groupSubtree;
    this._groupType = config.groupType;
    this._host = config.host;
    this._ldapGroupsAsRoles = config.ldapGroupsAsRoles;
    this._maxIncidentCount = config.maxIncidentCount;
    this._name = config.name;
    this._port = config.port;
    this._protocol = config.protocol;
    this._searchBase = config.searchBase;
    this._useTrustStore = config.useTrustStore;
    this._userBaseDn = config.userBaseDn;
    this._userEmailAddressAttribute = config.userEmailAddressAttribute;
    this._userIdAttribute = config.userIdAttribute;
    this._userLdapFilter = config.userLdapFilter;
    this._userMemberOfAttribute = config.userMemberOfAttribute;
    this._userObjectClass = config.userObjectClass;
    this._userPasswordAttribute = config.userPasswordAttribute;
    this._userRealNameAttribute = config.userRealNameAttribute;
    this._userSubtree = config.userSubtree;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_realm - computed: false, optional: true, required: false
  private _authRealm?: string; 
  public get authRealm() {
    return this.getStringAttribute('auth_realm');
  }
  public set authRealm(value: string) {
    this._authRealm = value;
  }
  public resetAuthRealm() {
    this._authRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRealmInput() {
    return this._authRealm;
  }

  // auth_schema - computed: false, optional: false, required: true
  private _authSchema?: string; 
  public get authSchema() {
    return this.getStringAttribute('auth_schema');
  }
  public set authSchema(value: string) {
    this._authSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authSchemaInput() {
    return this._authSchema;
  }

  // auth_username - computed: false, optional: false, required: true
  private _authUsername?: string; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string) {
    this._authUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername;
  }

  // connection_retry_delay_seconds - computed: false, optional: false, required: true
  private _connectionRetryDelaySeconds?: number; 
  public get connectionRetryDelaySeconds() {
    return this.getNumberAttribute('connection_retry_delay_seconds');
  }
  public set connectionRetryDelaySeconds(value: number) {
    this._connectionRetryDelaySeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRetryDelaySecondsInput() {
    return this._connectionRetryDelaySeconds;
  }

  // connection_timeout_seconds - computed: false, optional: false, required: true
  private _connectionTimeoutSeconds?: number; 
  public get connectionTimeoutSeconds() {
    return this.getNumberAttribute('connection_timeout_seconds');
  }
  public set connectionTimeoutSeconds(value: number) {
    this._connectionTimeoutSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutSecondsInput() {
    return this._connectionTimeoutSeconds;
  }

  // group_base_dn - computed: false, optional: true, required: false
  private _groupBaseDn?: string; 
  public get groupBaseDn() {
    return this.getStringAttribute('group_base_dn');
  }
  public set groupBaseDn(value: string) {
    this._groupBaseDn = value;
  }
  public resetGroupBaseDn() {
    this._groupBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBaseDnInput() {
    return this._groupBaseDn;
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

  // group_member_attribute - computed: false, optional: true, required: false
  private _groupMemberAttribute?: string; 
  public get groupMemberAttribute() {
    return this.getStringAttribute('group_member_attribute');
  }
  public set groupMemberAttribute(value: string) {
    this._groupMemberAttribute = value;
  }
  public resetGroupMemberAttribute() {
    this._groupMemberAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberAttributeInput() {
    return this._groupMemberAttribute;
  }

  // group_member_format - computed: false, optional: true, required: false
  private _groupMemberFormat?: string; 
  public get groupMemberFormat() {
    return this.getStringAttribute('group_member_format');
  }
  public set groupMemberFormat(value: string) {
    this._groupMemberFormat = value;
  }
  public resetGroupMemberFormat() {
    this._groupMemberFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberFormatInput() {
    return this._groupMemberFormat;
  }

  // group_object_class - computed: false, optional: true, required: false
  private _groupObjectClass?: string; 
  public get groupObjectClass() {
    return this.getStringAttribute('group_object_class');
  }
  public set groupObjectClass(value: string) {
    this._groupObjectClass = value;
  }
  public resetGroupObjectClass() {
    this._groupObjectClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupObjectClassInput() {
    return this._groupObjectClass;
  }

  // group_subtree - computed: false, optional: true, required: false
  private _groupSubtree?: boolean | cdktf.IResolvable; 
  public get groupSubtree() {
    return this.getBooleanAttribute('group_subtree');
  }
  public set groupSubtree(value: boolean | cdktf.IResolvable) {
    this._groupSubtree = value;
  }
  public resetGroupSubtree() {
    this._groupSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSubtreeInput() {
    return this._groupSubtree;
  }

  // group_type - computed: false, optional: false, required: true
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap_groups_as_roles - computed: false, optional: true, required: false
  private _ldapGroupsAsRoles?: boolean | cdktf.IResolvable; 
  public get ldapGroupsAsRoles() {
    return this.getBooleanAttribute('ldap_groups_as_roles');
  }
  public set ldapGroupsAsRoles(value: boolean | cdktf.IResolvable) {
    this._ldapGroupsAsRoles = value;
  }
  public resetLdapGroupsAsRoles() {
    this._ldapGroupsAsRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupsAsRolesInput() {
    return this._ldapGroupsAsRoles;
  }

  // max_incident_count - computed: false, optional: false, required: true
  private _maxIncidentCount?: number; 
  public get maxIncidentCount() {
    return this.getNumberAttribute('max_incident_count');
  }
  public set maxIncidentCount(value: number) {
    this._maxIncidentCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIncidentCountInput() {
    return this._maxIncidentCount;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // search_base - computed: false, optional: false, required: true
  private _searchBase?: string; 
  public get searchBase() {
    return this.getStringAttribute('search_base');
  }
  public set searchBase(value: string) {
    this._searchBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBaseInput() {
    return this._searchBase;
  }

  // use_trust_store - computed: false, optional: true, required: false
  private _useTrustStore?: boolean | cdktf.IResolvable; 
  public get useTrustStore() {
    return this.getBooleanAttribute('use_trust_store');
  }
  public set useTrustStore(value: boolean | cdktf.IResolvable) {
    this._useTrustStore = value;
  }
  public resetUseTrustStore() {
    this._useTrustStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTrustStoreInput() {
    return this._useTrustStore;
  }

  // user_base_dn - computed: false, optional: true, required: false
  private _userBaseDn?: string; 
  public get userBaseDn() {
    return this.getStringAttribute('user_base_dn');
  }
  public set userBaseDn(value: string) {
    this._userBaseDn = value;
  }
  public resetUserBaseDn() {
    this._userBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBaseDnInput() {
    return this._userBaseDn;
  }

  // user_email_address_attribute - computed: false, optional: true, required: false
  private _userEmailAddressAttribute?: string; 
  public get userEmailAddressAttribute() {
    return this.getStringAttribute('user_email_address_attribute');
  }
  public set userEmailAddressAttribute(value: string) {
    this._userEmailAddressAttribute = value;
  }
  public resetUserEmailAddressAttribute() {
    this._userEmailAddressAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailAddressAttributeInput() {
    return this._userEmailAddressAttribute;
  }

  // user_id_attribute - computed: false, optional: true, required: false
  private _userIdAttribute?: string; 
  public get userIdAttribute() {
    return this.getStringAttribute('user_id_attribute');
  }
  public set userIdAttribute(value: string) {
    this._userIdAttribute = value;
  }
  public resetUserIdAttribute() {
    this._userIdAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdAttributeInput() {
    return this._userIdAttribute;
  }

  // user_ldap_filter - computed: false, optional: true, required: false
  private _userLdapFilter?: string; 
  public get userLdapFilter() {
    return this.getStringAttribute('user_ldap_filter');
  }
  public set userLdapFilter(value: string) {
    this._userLdapFilter = value;
  }
  public resetUserLdapFilter() {
    this._userLdapFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLdapFilterInput() {
    return this._userLdapFilter;
  }

  // user_member_of_attribute - computed: false, optional: true, required: false
  private _userMemberOfAttribute?: string; 
  public get userMemberOfAttribute() {
    return this.getStringAttribute('user_member_of_attribute');
  }
  public set userMemberOfAttribute(value: string) {
    this._userMemberOfAttribute = value;
  }
  public resetUserMemberOfAttribute() {
    this._userMemberOfAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMemberOfAttributeInput() {
    return this._userMemberOfAttribute;
  }

  // user_object_class - computed: false, optional: true, required: false
  private _userObjectClass?: string; 
  public get userObjectClass() {
    return this.getStringAttribute('user_object_class');
  }
  public set userObjectClass(value: string) {
    this._userObjectClass = value;
  }
  public resetUserObjectClass() {
    this._userObjectClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userObjectClassInput() {
    return this._userObjectClass;
  }

  // user_password_attribute - computed: false, optional: true, required: false
  private _userPasswordAttribute?: string; 
  public get userPasswordAttribute() {
    return this.getStringAttribute('user_password_attribute');
  }
  public set userPasswordAttribute(value: string) {
    this._userPasswordAttribute = value;
  }
  public resetUserPasswordAttribute() {
    this._userPasswordAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordAttributeInput() {
    return this._userPasswordAttribute;
  }

  // user_real_name_attribute - computed: false, optional: true, required: false
  private _userRealNameAttribute?: string; 
  public get userRealNameAttribute() {
    return this.getStringAttribute('user_real_name_attribute');
  }
  public set userRealNameAttribute(value: string) {
    this._userRealNameAttribute = value;
  }
  public resetUserRealNameAttribute() {
    this._userRealNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRealNameAttributeInput() {
    return this._userRealNameAttribute;
  }

  // user_subtree - computed: false, optional: true, required: false
  private _userSubtree?: boolean | cdktf.IResolvable; 
  public get userSubtree() {
    return this.getBooleanAttribute('user_subtree');
  }
  public set userSubtree(value: boolean | cdktf.IResolvable) {
    this._userSubtree = value;
  }
  public resetUserSubtree() {
    this._userSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSubtreeInput() {
    return this._userSubtree;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_password: cdktf.stringToTerraform(this._authPassword),
      auth_realm: cdktf.stringToTerraform(this._authRealm),
      auth_schema: cdktf.stringToTerraform(this._authSchema),
      auth_username: cdktf.stringToTerraform(this._authUsername),
      connection_retry_delay_seconds: cdktf.numberToTerraform(this._connectionRetryDelaySeconds),
      connection_timeout_seconds: cdktf.numberToTerraform(this._connectionTimeoutSeconds),
      group_base_dn: cdktf.stringToTerraform(this._groupBaseDn),
      group_id_attribute: cdktf.stringToTerraform(this._groupIdAttribute),
      group_member_attribute: cdktf.stringToTerraform(this._groupMemberAttribute),
      group_member_format: cdktf.stringToTerraform(this._groupMemberFormat),
      group_object_class: cdktf.stringToTerraform(this._groupObjectClass),
      group_subtree: cdktf.booleanToTerraform(this._groupSubtree),
      group_type: cdktf.stringToTerraform(this._groupType),
      host: cdktf.stringToTerraform(this._host),
      ldap_groups_as_roles: cdktf.booleanToTerraform(this._ldapGroupsAsRoles),
      max_incident_count: cdktf.numberToTerraform(this._maxIncidentCount),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      search_base: cdktf.stringToTerraform(this._searchBase),
      use_trust_store: cdktf.booleanToTerraform(this._useTrustStore),
      user_base_dn: cdktf.stringToTerraform(this._userBaseDn),
      user_email_address_attribute: cdktf.stringToTerraform(this._userEmailAddressAttribute),
      user_id_attribute: cdktf.stringToTerraform(this._userIdAttribute),
      user_ldap_filter: cdktf.stringToTerraform(this._userLdapFilter),
      user_member_of_attribute: cdktf.stringToTerraform(this._userMemberOfAttribute),
      user_object_class: cdktf.stringToTerraform(this._userObjectClass),
      user_password_attribute: cdktf.stringToTerraform(this._userPasswordAttribute),
      user_real_name_attribute: cdktf.stringToTerraform(this._userRealNameAttribute),
      user_subtree: cdktf.booleanToTerraform(this._userSubtree),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_password: {
        value: cdktf.stringToHclTerraform(this._authPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_realm: {
        value: cdktf.stringToHclTerraform(this._authRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_schema: {
        value: cdktf.stringToHclTerraform(this._authSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_username: {
        value: cdktf.stringToHclTerraform(this._authUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_retry_delay_seconds: {
        value: cdktf.numberToHclTerraform(this._connectionRetryDelaySeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._connectionTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_base_dn: {
        value: cdktf.stringToHclTerraform(this._groupBaseDn),
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
      group_member_attribute: {
        value: cdktf.stringToHclTerraform(this._groupMemberAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_member_format: {
        value: cdktf.stringToHclTerraform(this._groupMemberFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_object_class: {
        value: cdktf.stringToHclTerraform(this._groupObjectClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_subtree: {
        value: cdktf.booleanToHclTerraform(this._groupSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_groups_as_roles: {
        value: cdktf.booleanToHclTerraform(this._ldapGroupsAsRoles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_incident_count: {
        value: cdktf.numberToHclTerraform(this._maxIncidentCount),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_base: {
        value: cdktf.stringToHclTerraform(this._searchBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_trust_store: {
        value: cdktf.booleanToHclTerraform(this._useTrustStore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_base_dn: {
        value: cdktf.stringToHclTerraform(this._userBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_email_address_attribute: {
        value: cdktf.stringToHclTerraform(this._userEmailAddressAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id_attribute: {
        value: cdktf.stringToHclTerraform(this._userIdAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ldap_filter: {
        value: cdktf.stringToHclTerraform(this._userLdapFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_member_of_attribute: {
        value: cdktf.stringToHclTerraform(this._userMemberOfAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_object_class: {
        value: cdktf.stringToHclTerraform(this._userObjectClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_password_attribute: {
        value: cdktf.stringToHclTerraform(this._userPasswordAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_real_name_attribute: {
        value: cdktf.stringToHclTerraform(this._userRealNameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_subtree: {
        value: cdktf.booleanToHclTerraform(this._userSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
