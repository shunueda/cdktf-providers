// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultTopologyAdminUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the time, in generalized time format (e.g., '20160101070000Z'), that the root user account should become active. If an activation time is specified, the user will not be permitted to authenticate, nor can the account be used as an authorization identity, until the activation time has arrived. This is stored in the ds-pwp-account-activation-time LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#account_activation_time DefaultTopologyAdminUser#account_activation_time}
  */
  readonly accountActivationTime?: string;
  /**
  * Specifies the time, in generalized time format (e.g., '20240101070000Z'), that the root user account should expire. If an expiration time is specified, the user will not be permitted to authenticate, nor can the account be used as an authorization identity, after this time has passed. This is stored in the ds-pwp-account-expiration-time LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#account_expiration_time DefaultTopologyAdminUser#account_expiration_time}
  */
  readonly accountExpirationTime?: string;
  /**
  * An IPv4 or IPv6 address mask that controls the set of IP addresses from which this User can authenticate to the server. For instance a value of 127.0.0.1 (or ::1 in IPv6) would restricted access only to localhost connections, whereas 10.6.1.* would restrict access to servers on the 10.6.1.* subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#allowed_authentication_ip_address DefaultTopologyAdminUser#allowed_authentication_ip_address}
  */
  readonly allowedAuthenticationIpAddress?: string[];
  /**
  * Indicates that User should only be allowed to authenticate in certain ways. Allowed values include "simple" (to indicate that the user should be allowed to bind using simple authentication) or "sasl {mech}" (to indicate that the user should be allowed to bind using the specified SASL mechanism, like "sasl PLAIN"). The list of available SASL mechanisms can be retrieved by running "dsconfig --advanced list-sasl-mechanism-handlers".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#allowed_authentication_type DefaultTopologyAdminUser#allowed_authentication_type}
  */
  readonly allowedAuthenticationType?: string[];
  /**
  * Specifies one or more alternate DNs that can be used to bind to the server as this User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#alternate_bind_dn DefaultTopologyAdminUser#alternate_bind_dn}
  */
  readonly alternateBindDn?: string[];
  /**
  * A description for this User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#description DefaultTopologyAdminUser#description}
  */
  readonly description?: string;
  /**
  * Specifies whether the root user account should be disabled. A disabled account is not permitted to authenticate, nor can it be used as an authorization identity. This is stored in the ds-pwp-account-disabled LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#disabled DefaultTopologyAdminUser#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the user's email address. This is stored in the mail LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#email_address DefaultTopologyAdminUser#email_address}
  */
  readonly emailAddress?: string[];
  /**
  * Specifies the user's first name. This is stored in the givenName LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#first_name DefaultTopologyAdminUser#first_name}
  */
  readonly firstName?: string[];
  /**
  * Specifies the user's home telephone number. This is stored in the homePhone LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#home_telephone_number DefaultTopologyAdminUser#home_telephone_number}
  */
  readonly homeTelephoneNumber?: string[];
  /**
  * Specifies the maximum length of time (in seconds) that a connection authenticated as this user may remain established without issuing any requests. A value of 0 indicates no limit should be enforced. This is stored in the ds-rlim-idle-time-limit LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#idle_time_limit_seconds DefaultTopologyAdminUser#idle_time_limit_seconds}
  */
  readonly idleTimeLimitSeconds?: number;
  /**
  * Indicates whether this User should be automatically granted the set of privileges defined in the default-root-privilege-name property of the Root DN configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#inherit_default_root_privileges DefaultTopologyAdminUser#inherit_default_root_privileges}
  */
  readonly inheritDefaultRootPrivileges?: boolean | cdktf.IResolvable;
  /**
  * This can be used to indicate whether the User can be used as an alternate authorization identity (using the proxied authorization v1 or v2 control, the intermediate client control, or a SASL mechanism that allows specifying an alternate authorization identity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#is_proxyable DefaultTopologyAdminUser#is_proxyable}
  */
  readonly isProxyable?: string;
  /**
  * Specifies the DNs of accounts that can proxy as this User using the proxied authorization v1 or v2 control, the intermediate client control, or a SASL mechanism that allows specifying an alternate authorization identity. This property is only applicable if is-proxyable is set to "allowed" or "required".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#is_proxyable_by_dn DefaultTopologyAdminUser#is_proxyable_by_dn}
  */
  readonly isProxyableByDn?: string[];
  /**
  * Specifies the DNs of groups whose members can proxy as this User using the proxied authorization v1 or v2 control, the intermediate client control, or a SASL mechanism that allows specifying an alternate authorization identity. This property is only applicable if is-proxyable is set to "allowed" or "required".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#is_proxyable_by_group DefaultTopologyAdminUser#is_proxyable_by_group}
  */
  readonly isProxyableByGroup?: string[];
  /**
  * Specifies LDAP URLs of accounts that can proxy as this User using the proxied authorization v1 or v2 control, the intermediate client control, or a SASL mechanism that allows specifying an alternate authorization identity. This property is only applicable if is-proxyable is set to "allowed" or "required".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#is_proxyable_by_url DefaultTopologyAdminUser#is_proxyable_by_url}
  */
  readonly isProxyableByUrl?: string[];
  /**
  * Specifies the user's last name. This is stored in the sn LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#last_name DefaultTopologyAdminUser#last_name}
  */
  readonly lastName?: string[];
  /**
  * Specifies the maximum number of candidate entries that the server may examine in the course of processing any single search request. A value of 0 indicates no limit should be enforced. This is stored in the ds-rlim-lookthrough-limit LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#look_through_entry_limit DefaultTopologyAdminUser#look_through_entry_limit}
  */
  readonly lookThroughEntryLimit?: number;
  /**
  * This restricts the set of accounts that this User can proxy as to entries with the specified DNs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#may_proxy_as_dn DefaultTopologyAdminUser#may_proxy_as_dn}
  */
  readonly mayProxyAsDn?: string[];
  /**
  * This restricts the set of accounts that this User can proxy as to entries that are in the group with the specified DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#may_proxy_as_group DefaultTopologyAdminUser#may_proxy_as_group}
  */
  readonly mayProxyAsGroup?: string[];
  /**
  * This restricts the set of accounts that this User can proxy as to entries that are matched by the specified LDAP URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#may_proxy_as_url DefaultTopologyAdminUser#may_proxy_as_url}
  */
  readonly mayProxyAsUrl?: string[];
  /**
  * Specifies the user's mobile telephone number. This is stored in the mobile LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#mobile_telephone_number DefaultTopologyAdminUser#mobile_telephone_number}
  */
  readonly mobileTelephoneNumber?: string[];
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#name DefaultTopologyAdminUser#name}
  */
  readonly name: string;
  /**
  * Specifies the user's pager telephone number. This is stored in the pager LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#pager_telephone_number DefaultTopologyAdminUser#pager_telephone_number}
  */
  readonly pagerTelephoneNumber?: string[];
  /**
  * Specifies the user's password. This is stored in the userPassword LDAP attribute. To set a pre-hashed value, the account making the change must have the bypass-pw-policy privilege.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#password DefaultTopologyAdminUser#password}
  */
  readonly password?: string;
  /**
  * Specifies the password policy for the user. This is stored in the ds-pwp-password-policy-dn LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#password_policy DefaultTopologyAdminUser#password_policy}
  */
  readonly passwordPolicy?: string;
  /**
  * Overrides the default settings for the mechanisms (e.g., email or SMS) that are used to deliver one time passwords to Users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#preferred_otp_delivery_mechanism DefaultTopologyAdminUser#preferred_otp_delivery_mechanism}
  */
  readonly preferredOtpDeliveryMechanism?: string[];
  /**
  * Privileges that are either explicitly granted or revoked from the root user. Privileges can be revoked by including a minus sign (-) before the privilege name. This is stored in the ds-privilege-name LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#privilege DefaultTopologyAdminUser#privilege}
  */
  readonly privilege?: string[];
  /**
  * Indicates whether this User must authenticate in a secure manner. When set to "true", the User will only be allowed to authenticate over a secure connection or using a mechanism that does not expose user credentials (e.g., the CRAM-MD5, DIGEST-MD5, and GSSAPI SASL mechanisms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#require_secure_authentication DefaultTopologyAdminUser#require_secure_authentication}
  */
  readonly requireSecureAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether this User must be required to communicate with the server over a secure connection. When set to "true", the User will only be allowed to communicate with the server over a secure connection (i.e., using TLS or the StartTLS extended operation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#require_secure_connections DefaultTopologyAdminUser#require_secure_connections}
  */
  readonly requireSecureConnections?: boolean | cdktf.IResolvable;
  /**
  * Specifies the maximum number of entries that the server may return to the user in response to any single search request. A value of 0 indicates no limit should be enforced. This is stored in the ds-rlim-size-limit LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#search_result_entry_limit DefaultTopologyAdminUser#search_result_entry_limit}
  */
  readonly searchResultEntryLimit?: number;
  /**
  * Specifies the maximum length of time (in seconds) that the server may spend processing any single search request. A value of 0 indicates no limit should be enforced. This is stored in the ds-rlim-time-limit LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#time_limit_seconds DefaultTopologyAdminUser#time_limit_seconds}
  */
  readonly timeLimitSeconds?: number;
  /**
  * Specifies the user's user ID. This is stored in the uid LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#user_id DefaultTopologyAdminUser#user_id}
  */
  readonly userId?: string;
  /**
  * Specifies the user's work telephone number. This is stored in the telephoneNumber LDAP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#work_telephone_number DefaultTopologyAdminUser#work_telephone_number}
  */
  readonly workTelephoneNumber?: string[];
}
export interface DefaultTopologyAdminUserRequiredActions {
}

export function defaultTopologyAdminUserRequiredActionsToTerraform(struct?: DefaultTopologyAdminUserRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultTopologyAdminUserRequiredActionsToHclTerraform(struct?: DefaultTopologyAdminUserRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultTopologyAdminUserRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultTopologyAdminUserRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultTopologyAdminUserRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultTopologyAdminUserRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DefaultTopologyAdminUserRequiredActionsOutputReference {
    return new DefaultTopologyAdminUserRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user pingdirectory_default_topology_admin_user}
*/
export class DefaultTopologyAdminUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_topology_admin_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultTopologyAdminUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultTopologyAdminUser to import
  * @param importFromId The id of the existing DefaultTopologyAdminUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultTopologyAdminUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_topology_admin_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_topology_admin_user pingdirectory_default_topology_admin_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultTopologyAdminUserConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultTopologyAdminUserConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_topology_admin_user',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountActivationTime = config.accountActivationTime;
    this._accountExpirationTime = config.accountExpirationTime;
    this._allowedAuthenticationIpAddress = config.allowedAuthenticationIpAddress;
    this._allowedAuthenticationType = config.allowedAuthenticationType;
    this._alternateBindDn = config.alternateBindDn;
    this._description = config.description;
    this._disabled = config.disabled;
    this._emailAddress = config.emailAddress;
    this._firstName = config.firstName;
    this._homeTelephoneNumber = config.homeTelephoneNumber;
    this._idleTimeLimitSeconds = config.idleTimeLimitSeconds;
    this._inheritDefaultRootPrivileges = config.inheritDefaultRootPrivileges;
    this._isProxyable = config.isProxyable;
    this._isProxyableByDn = config.isProxyableByDn;
    this._isProxyableByGroup = config.isProxyableByGroup;
    this._isProxyableByUrl = config.isProxyableByUrl;
    this._lastName = config.lastName;
    this._lookThroughEntryLimit = config.lookThroughEntryLimit;
    this._mayProxyAsDn = config.mayProxyAsDn;
    this._mayProxyAsGroup = config.mayProxyAsGroup;
    this._mayProxyAsUrl = config.mayProxyAsUrl;
    this._mobileTelephoneNumber = config.mobileTelephoneNumber;
    this._name = config.name;
    this._pagerTelephoneNumber = config.pagerTelephoneNumber;
    this._password = config.password;
    this._passwordPolicy = config.passwordPolicy;
    this._preferredOtpDeliveryMechanism = config.preferredOtpDeliveryMechanism;
    this._privilege = config.privilege;
    this._requireSecureAuthentication = config.requireSecureAuthentication;
    this._requireSecureConnections = config.requireSecureConnections;
    this._searchResultEntryLimit = config.searchResultEntryLimit;
    this._timeLimitSeconds = config.timeLimitSeconds;
    this._userId = config.userId;
    this._workTelephoneNumber = config.workTelephoneNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_activation_time - computed: true, optional: true, required: false
  private _accountActivationTime?: string; 
  public get accountActivationTime() {
    return this.getStringAttribute('account_activation_time');
  }
  public set accountActivationTime(value: string) {
    this._accountActivationTime = value;
  }
  public resetAccountActivationTime() {
    this._accountActivationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountActivationTimeInput() {
    return this._accountActivationTime;
  }

  // account_expiration_time - computed: true, optional: true, required: false
  private _accountExpirationTime?: string; 
  public get accountExpirationTime() {
    return this.getStringAttribute('account_expiration_time');
  }
  public set accountExpirationTime(value: string) {
    this._accountExpirationTime = value;
  }
  public resetAccountExpirationTime() {
    this._accountExpirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountExpirationTimeInput() {
    return this._accountExpirationTime;
  }

  // allowed_authentication_ip_address - computed: true, optional: true, required: false
  private _allowedAuthenticationIpAddress?: string[]; 
  public get allowedAuthenticationIpAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_authentication_ip_address'));
  }
  public set allowedAuthenticationIpAddress(value: string[]) {
    this._allowedAuthenticationIpAddress = value;
  }
  public resetAllowedAuthenticationIpAddress() {
    this._allowedAuthenticationIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAuthenticationIpAddressInput() {
    return this._allowedAuthenticationIpAddress;
  }

  // allowed_authentication_type - computed: true, optional: true, required: false
  private _allowedAuthenticationType?: string[]; 
  public get allowedAuthenticationType() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_authentication_type'));
  }
  public set allowedAuthenticationType(value: string[]) {
    this._allowedAuthenticationType = value;
  }
  public resetAllowedAuthenticationType() {
    this._allowedAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAuthenticationTypeInput() {
    return this._allowedAuthenticationType;
  }

  // alternate_bind_dn - computed: true, optional: true, required: false
  private _alternateBindDn?: string[]; 
  public get alternateBindDn() {
    return cdktf.Fn.tolist(this.getListAttribute('alternate_bind_dn'));
  }
  public set alternateBindDn(value: string[]) {
    this._alternateBindDn = value;
  }
  public resetAlternateBindDn() {
    this._alternateBindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateBindDnInput() {
    return this._alternateBindDn;
  }

  // description - computed: true, optional: true, required: false
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

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // email_address - computed: true, optional: true, required: false
  private _emailAddress?: string[]; 
  public get emailAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('email_address'));
  }
  public set emailAddress(value: string[]) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string[]; 
  public get firstName() {
    return cdktf.Fn.tolist(this.getListAttribute('first_name'));
  }
  public set firstName(value: string[]) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // home_telephone_number - computed: true, optional: true, required: false
  private _homeTelephoneNumber?: string[]; 
  public get homeTelephoneNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('home_telephone_number'));
  }
  public set homeTelephoneNumber(value: string[]) {
    this._homeTelephoneNumber = value;
  }
  public resetHomeTelephoneNumber() {
    this._homeTelephoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeTelephoneNumberInput() {
    return this._homeTelephoneNumber;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_time_limit_seconds - computed: true, optional: true, required: false
  private _idleTimeLimitSeconds?: number; 
  public get idleTimeLimitSeconds() {
    return this.getNumberAttribute('idle_time_limit_seconds');
  }
  public set idleTimeLimitSeconds(value: number) {
    this._idleTimeLimitSeconds = value;
  }
  public resetIdleTimeLimitSeconds() {
    this._idleTimeLimitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeLimitSecondsInput() {
    return this._idleTimeLimitSeconds;
  }

  // inherit_default_root_privileges - computed: true, optional: true, required: false
  private _inheritDefaultRootPrivileges?: boolean | cdktf.IResolvable; 
  public get inheritDefaultRootPrivileges() {
    return this.getBooleanAttribute('inherit_default_root_privileges');
  }
  public set inheritDefaultRootPrivileges(value: boolean | cdktf.IResolvable) {
    this._inheritDefaultRootPrivileges = value;
  }
  public resetInheritDefaultRootPrivileges() {
    this._inheritDefaultRootPrivileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritDefaultRootPrivilegesInput() {
    return this._inheritDefaultRootPrivileges;
  }

  // is_proxyable - computed: true, optional: true, required: false
  private _isProxyable?: string; 
  public get isProxyable() {
    return this.getStringAttribute('is_proxyable');
  }
  public set isProxyable(value: string) {
    this._isProxyable = value;
  }
  public resetIsProxyable() {
    this._isProxyable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProxyableInput() {
    return this._isProxyable;
  }

  // is_proxyable_by_dn - computed: true, optional: true, required: false
  private _isProxyableByDn?: string[]; 
  public get isProxyableByDn() {
    return cdktf.Fn.tolist(this.getListAttribute('is_proxyable_by_dn'));
  }
  public set isProxyableByDn(value: string[]) {
    this._isProxyableByDn = value;
  }
  public resetIsProxyableByDn() {
    this._isProxyableByDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProxyableByDnInput() {
    return this._isProxyableByDn;
  }

  // is_proxyable_by_group - computed: true, optional: true, required: false
  private _isProxyableByGroup?: string[]; 
  public get isProxyableByGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('is_proxyable_by_group'));
  }
  public set isProxyableByGroup(value: string[]) {
    this._isProxyableByGroup = value;
  }
  public resetIsProxyableByGroup() {
    this._isProxyableByGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProxyableByGroupInput() {
    return this._isProxyableByGroup;
  }

  // is_proxyable_by_url - computed: true, optional: true, required: false
  private _isProxyableByUrl?: string[]; 
  public get isProxyableByUrl() {
    return cdktf.Fn.tolist(this.getListAttribute('is_proxyable_by_url'));
  }
  public set isProxyableByUrl(value: string[]) {
    this._isProxyableByUrl = value;
  }
  public resetIsProxyableByUrl() {
    this._isProxyableByUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProxyableByUrlInput() {
    return this._isProxyableByUrl;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string[]; 
  public get lastName() {
    return cdktf.Fn.tolist(this.getListAttribute('last_name'));
  }
  public set lastName(value: string[]) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // look_through_entry_limit - computed: true, optional: true, required: false
  private _lookThroughEntryLimit?: number; 
  public get lookThroughEntryLimit() {
    return this.getNumberAttribute('look_through_entry_limit');
  }
  public set lookThroughEntryLimit(value: number) {
    this._lookThroughEntryLimit = value;
  }
  public resetLookThroughEntryLimit() {
    this._lookThroughEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookThroughEntryLimitInput() {
    return this._lookThroughEntryLimit;
  }

  // may_proxy_as_dn - computed: true, optional: true, required: false
  private _mayProxyAsDn?: string[]; 
  public get mayProxyAsDn() {
    return cdktf.Fn.tolist(this.getListAttribute('may_proxy_as_dn'));
  }
  public set mayProxyAsDn(value: string[]) {
    this._mayProxyAsDn = value;
  }
  public resetMayProxyAsDn() {
    this._mayProxyAsDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mayProxyAsDnInput() {
    return this._mayProxyAsDn;
  }

  // may_proxy_as_group - computed: true, optional: true, required: false
  private _mayProxyAsGroup?: string[]; 
  public get mayProxyAsGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('may_proxy_as_group'));
  }
  public set mayProxyAsGroup(value: string[]) {
    this._mayProxyAsGroup = value;
  }
  public resetMayProxyAsGroup() {
    this._mayProxyAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mayProxyAsGroupInput() {
    return this._mayProxyAsGroup;
  }

  // may_proxy_as_url - computed: true, optional: true, required: false
  private _mayProxyAsUrl?: string[]; 
  public get mayProxyAsUrl() {
    return cdktf.Fn.tolist(this.getListAttribute('may_proxy_as_url'));
  }
  public set mayProxyAsUrl(value: string[]) {
    this._mayProxyAsUrl = value;
  }
  public resetMayProxyAsUrl() {
    this._mayProxyAsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mayProxyAsUrlInput() {
    return this._mayProxyAsUrl;
  }

  // mobile_telephone_number - computed: true, optional: true, required: false
  private _mobileTelephoneNumber?: string[]; 
  public get mobileTelephoneNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('mobile_telephone_number'));
  }
  public set mobileTelephoneNumber(value: string[]) {
    this._mobileTelephoneNumber = value;
  }
  public resetMobileTelephoneNumber() {
    this._mobileTelephoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileTelephoneNumberInput() {
    return this._mobileTelephoneNumber;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // pager_telephone_number - computed: true, optional: true, required: false
  private _pagerTelephoneNumber?: string[]; 
  public get pagerTelephoneNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('pager_telephone_number'));
  }
  public set pagerTelephoneNumber(value: string[]) {
    this._pagerTelephoneNumber = value;
  }
  public resetPagerTelephoneNumber() {
    this._pagerTelephoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerTelephoneNumberInput() {
    return this._pagerTelephoneNumber;
  }

  // password - computed: true, optional: true, required: false
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

  // password_policy - computed: true, optional: true, required: false
  private _passwordPolicy?: string; 
  public get passwordPolicy() {
    return this.getStringAttribute('password_policy');
  }
  public set passwordPolicy(value: string) {
    this._passwordPolicy = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy;
  }

  // preferred_otp_delivery_mechanism - computed: true, optional: true, required: false
  private _preferredOtpDeliveryMechanism?: string[]; 
  public get preferredOtpDeliveryMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_otp_delivery_mechanism'));
  }
  public set preferredOtpDeliveryMechanism(value: string[]) {
    this._preferredOtpDeliveryMechanism = value;
  }
  public resetPreferredOtpDeliveryMechanism() {
    this._preferredOtpDeliveryMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredOtpDeliveryMechanismInput() {
    return this._preferredOtpDeliveryMechanism;
  }

  // privilege - computed: true, optional: true, required: false
  private _privilege?: string[]; 
  public get privilege() {
    return cdktf.Fn.tolist(this.getListAttribute('privilege'));
  }
  public set privilege(value: string[]) {
    this._privilege = value;
  }
  public resetPrivilege() {
    this._privilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
  }

  // require_secure_authentication - computed: true, optional: true, required: false
  private _requireSecureAuthentication?: boolean | cdktf.IResolvable; 
  public get requireSecureAuthentication() {
    return this.getBooleanAttribute('require_secure_authentication');
  }
  public set requireSecureAuthentication(value: boolean | cdktf.IResolvable) {
    this._requireSecureAuthentication = value;
  }
  public resetRequireSecureAuthentication() {
    this._requireSecureAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSecureAuthenticationInput() {
    return this._requireSecureAuthentication;
  }

  // require_secure_connections - computed: true, optional: true, required: false
  private _requireSecureConnections?: boolean | cdktf.IResolvable; 
  public get requireSecureConnections() {
    return this.getBooleanAttribute('require_secure_connections');
  }
  public set requireSecureConnections(value: boolean | cdktf.IResolvable) {
    this._requireSecureConnections = value;
  }
  public resetRequireSecureConnections() {
    this._requireSecureConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSecureConnectionsInput() {
    return this._requireSecureConnections;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultTopologyAdminUserRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // search_result_entry_limit - computed: true, optional: true, required: false
  private _searchResultEntryLimit?: number; 
  public get searchResultEntryLimit() {
    return this.getNumberAttribute('search_result_entry_limit');
  }
  public set searchResultEntryLimit(value: number) {
    this._searchResultEntryLimit = value;
  }
  public resetSearchResultEntryLimit() {
    this._searchResultEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchResultEntryLimitInput() {
    return this._searchResultEntryLimit;
  }

  // time_limit_seconds - computed: true, optional: true, required: false
  private _timeLimitSeconds?: number; 
  public get timeLimitSeconds() {
    return this.getNumberAttribute('time_limit_seconds');
  }
  public set timeLimitSeconds(value: number) {
    this._timeLimitSeconds = value;
  }
  public resetTimeLimitSeconds() {
    this._timeLimitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLimitSecondsInput() {
    return this._timeLimitSeconds;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // work_telephone_number - computed: true, optional: true, required: false
  private _workTelephoneNumber?: string[]; 
  public get workTelephoneNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('work_telephone_number'));
  }
  public set workTelephoneNumber(value: string[]) {
    this._workTelephoneNumber = value;
  }
  public resetWorkTelephoneNumber() {
    this._workTelephoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workTelephoneNumberInput() {
    return this._workTelephoneNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_activation_time: cdktf.stringToTerraform(this._accountActivationTime),
      account_expiration_time: cdktf.stringToTerraform(this._accountExpirationTime),
      allowed_authentication_ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAuthenticationIpAddress),
      allowed_authentication_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAuthenticationType),
      alternate_bind_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alternateBindDn),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      email_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailAddress),
      first_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._firstName),
      home_telephone_number: cdktf.listMapper(cdktf.stringToTerraform, false)(this._homeTelephoneNumber),
      idle_time_limit_seconds: cdktf.numberToTerraform(this._idleTimeLimitSeconds),
      inherit_default_root_privileges: cdktf.booleanToTerraform(this._inheritDefaultRootPrivileges),
      is_proxyable: cdktf.stringToTerraform(this._isProxyable),
      is_proxyable_by_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._isProxyableByDn),
      is_proxyable_by_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._isProxyableByGroup),
      is_proxyable_by_url: cdktf.listMapper(cdktf.stringToTerraform, false)(this._isProxyableByUrl),
      last_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lastName),
      look_through_entry_limit: cdktf.numberToTerraform(this._lookThroughEntryLimit),
      may_proxy_as_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mayProxyAsDn),
      may_proxy_as_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mayProxyAsGroup),
      may_proxy_as_url: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mayProxyAsUrl),
      mobile_telephone_number: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mobileTelephoneNumber),
      name: cdktf.stringToTerraform(this._name),
      pager_telephone_number: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pagerTelephoneNumber),
      password: cdktf.stringToTerraform(this._password),
      password_policy: cdktf.stringToTerraform(this._passwordPolicy),
      preferred_otp_delivery_mechanism: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredOtpDeliveryMechanism),
      privilege: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privilege),
      require_secure_authentication: cdktf.booleanToTerraform(this._requireSecureAuthentication),
      require_secure_connections: cdktf.booleanToTerraform(this._requireSecureConnections),
      search_result_entry_limit: cdktf.numberToTerraform(this._searchResultEntryLimit),
      time_limit_seconds: cdktf.numberToTerraform(this._timeLimitSeconds),
      user_id: cdktf.stringToTerraform(this._userId),
      work_telephone_number: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workTelephoneNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_activation_time: {
        value: cdktf.stringToHclTerraform(this._accountActivationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_expiration_time: {
        value: cdktf.stringToHclTerraform(this._accountExpirationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_authentication_ip_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAuthenticationIpAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_authentication_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAuthenticationType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alternate_bind_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alternateBindDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      first_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._firstName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      home_telephone_number: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._homeTelephoneNumber),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      idle_time_limit_seconds: {
        value: cdktf.numberToHclTerraform(this._idleTimeLimitSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inherit_default_root_privileges: {
        value: cdktf.booleanToHclTerraform(this._inheritDefaultRootPrivileges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_proxyable: {
        value: cdktf.stringToHclTerraform(this._isProxyable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_proxyable_by_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._isProxyableByDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_proxyable_by_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._isProxyableByGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_proxyable_by_url: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._isProxyableByUrl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      last_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lastName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      look_through_entry_limit: {
        value: cdktf.numberToHclTerraform(this._lookThroughEntryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      may_proxy_as_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mayProxyAsDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      may_proxy_as_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mayProxyAsGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      may_proxy_as_url: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mayProxyAsUrl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mobile_telephone_number: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mobileTelephoneNumber),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pager_telephone_number: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pagerTelephoneNumber),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_policy: {
        value: cdktf.stringToHclTerraform(this._passwordPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_otp_delivery_mechanism: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredOtpDeliveryMechanism),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      privilege: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privilege),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      require_secure_authentication: {
        value: cdktf.booleanToHclTerraform(this._requireSecureAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_secure_connections: {
        value: cdktf.booleanToHclTerraform(this._requireSecureConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      search_result_entry_limit: {
        value: cdktf.numberToHclTerraform(this._searchResultEntryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_limit_seconds: {
        value: cdktf.numberToHclTerraform(this._timeLimitSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_telephone_number: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workTelephoneNumber),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
