// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapUserFederationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of users to sync within a single transaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#batch_size_for_sync LdapUserFederation#batch_size_for_sync}
  */
  readonly batchSizeForSync?: number;
  /**
  * Password of LDAP admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#bind_credential LdapUserFederation#bind_credential}
  */
  readonly bindCredential?: string;
  /**
  * DN of LDAP admin, which will be used by Keycloak to access LDAP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#bind_dn LdapUserFederation#bind_dn}
  */
  readonly bindDn?: string;
  /**
  * How frequently Keycloak should sync changed LDAP users, in seconds. Omit this property to disable periodic changed users sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#changed_sync_period LdapUserFederation#changed_sync_period}
  */
  readonly changedSyncPeriod?: number;
  /**
  * LDAP connection timeout (duration string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#connection_timeout LdapUserFederation#connection_timeout}
  */
  readonly connectionTimeout?: string;
  /**
  * Connection URL to the LDAP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#connection_url LdapUserFederation#connection_url}
  */
  readonly connectionUrl: string;
  /**
  * Additional LDAP filter for filtering searched users. Must begin with '(' and end with ')'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#custom_user_search_filter LdapUserFederation#custom_user_search_filter}
  */
  readonly customUserSearchFilter?: string;
  /**
  * When true, the provider will delete the default mappers which are normally created by Keycloak when creating an LDAP user federation provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#delete_default_mappers LdapUserFederation#delete_default_mappers}
  */
  readonly deleteDefaultMappers?: boolean | cdktf.IResolvable;
  /**
  * READ_ONLY and WRITABLE are self-explanatory. UNSYNCED allows user data to be imported but not synced back to LDAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#edit_mode LdapUserFederation#edit_mode}
  */
  readonly editMode?: string;
  /**
  * When false, this provider will not be used when performing queries for users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#enabled LdapUserFederation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * How frequently Keycloak should sync all LDAP users, in seconds. Omit this property to disable periodic full sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#full_sync_period LdapUserFederation#full_sync_period}
  */
  readonly fullSyncPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#id LdapUserFederation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When true, LDAP users will be imported into the Keycloak database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#import_enabled LdapUserFederation#import_enabled}
  */
  readonly importEnabled?: boolean | cdktf.IResolvable;
  /**
  * Display name of the provider when displayed in the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#name LdapUserFederation#name}
  */
  readonly name: string;
  /**
  * When true, Keycloak assumes the LDAP server supports pagination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#pagination LdapUserFederation#pagination}
  */
  readonly pagination?: boolean | cdktf.IResolvable;
  /**
  * Priority of this provider when looking up users. Lower values are first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#priority LdapUserFederation#priority}
  */
  readonly priority?: number;
  /**
  * Name of the LDAP attribute to use as the relative distinguished name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#rdn_ldap_attribute LdapUserFederation#rdn_ldap_attribute}
  */
  readonly rdnLdapAttribute: string;
  /**
  * LDAP read timeout (duration string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#read_timeout LdapUserFederation#read_timeout}
  */
  readonly readTimeout?: string;
  /**
  * The realm this provider will provide user federation for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#realm_id LdapUserFederation#realm_id}
  */
  readonly realmId: string;
  /**
  * ONE_LEVEL: only search for users in the DN specified by user_dn. SUBTREE: search entire LDAP subtree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#search_scope LdapUserFederation#search_scope}
  */
  readonly searchScope?: string;
  /**
  * When true, Keycloak will encrypt the connection to LDAP using STARTTLS, which will disable connection pooling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#start_tls LdapUserFederation#start_tls}
  */
  readonly startTls?: boolean | cdktf.IResolvable;
  /**
  * When true, newly created users will be synced back to LDAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#sync_registrations LdapUserFederation#sync_registrations}
  */
  readonly syncRegistrations?: boolean | cdktf.IResolvable;
  /**
  * If enabled, email provided by this provider is not verified even if verification is enabled for the realm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#trust_email LdapUserFederation#trust_email}
  */
  readonly trustEmail?: boolean | cdktf.IResolvable;
  /**
  * When `true`, use the LDAPv3 Password Modify Extended Operation (RFC-3062).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#use_password_modify_extended_op LdapUserFederation#use_password_modify_extended_op}
  */
  readonly usePasswordModifyExtendedOp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#use_truststore_spi LdapUserFederation#use_truststore_spi}
  */
  readonly useTruststoreSpi?: string;
  /**
  * All values of LDAP objectClass attribute for users in LDAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#user_object_classes LdapUserFederation#user_object_classes}
  */
  readonly userObjectClasses: string[];
  /**
  * Name of the LDAP attribute to use as the Keycloak username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#username_ldap_attribute LdapUserFederation#username_ldap_attribute}
  */
  readonly usernameLdapAttribute: string;
  /**
  * Full DN of LDAP tree where your users are.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#users_dn LdapUserFederation#users_dn}
  */
  readonly usersDn: string;
  /**
  * Name of the LDAP attribute to use as a unique object identifier for objects in LDAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#uuid_ldap_attribute LdapUserFederation#uuid_ldap_attribute}
  */
  readonly uuidLdapAttribute: string;
  /**
  * When true, Keycloak will validate passwords using the realm policy before updating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#validate_password_policy LdapUserFederation#validate_password_policy}
  */
  readonly validatePasswordPolicy?: boolean | cdktf.IResolvable;
  /**
  * LDAP vendor. I am almost certain this field does nothing, but the UI indicates that it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#vendor LdapUserFederation#vendor}
  */
  readonly vendor?: string;
  /**
  * cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#cache LdapUserFederation#cache}
  */
  readonly cache?: LdapUserFederationCache;
  /**
  * kerberos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#kerberos LdapUserFederation#kerberos}
  */
  readonly kerberos?: LdapUserFederationKerberos;
}
export interface LdapUserFederationCache {
  /**
  * Day of the week the entry will become invalid on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#eviction_day LdapUserFederation#eviction_day}
  */
  readonly evictionDay?: number;
  /**
  * Hour of day the entry will become invalid on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#eviction_hour LdapUserFederation#eviction_hour}
  */
  readonly evictionHour?: number;
  /**
  * Minute of day the entry will become invalid on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#eviction_minute LdapUserFederation#eviction_minute}
  */
  readonly evictionMinute?: number;
  /**
  * Max lifespan of cache entry (duration string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#max_lifespan LdapUserFederation#max_lifespan}
  */
  readonly maxLifespan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#policy LdapUserFederation#policy}
  */
  readonly policy?: string;
}

export function ldapUserFederationCacheToTerraform(struct?: LdapUserFederationCacheOutputReference | LdapUserFederationCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eviction_day: cdktf.numberToTerraform(struct!.evictionDay),
    eviction_hour: cdktf.numberToTerraform(struct!.evictionHour),
    eviction_minute: cdktf.numberToTerraform(struct!.evictionMinute),
    max_lifespan: cdktf.stringToTerraform(struct!.maxLifespan),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function ldapUserFederationCacheToHclTerraform(struct?: LdapUserFederationCacheOutputReference | LdapUserFederationCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eviction_day: {
      value: cdktf.numberToHclTerraform(struct!.evictionDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eviction_hour: {
      value: cdktf.numberToHclTerraform(struct!.evictionHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eviction_minute: {
      value: cdktf.numberToHclTerraform(struct!.evictionMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_lifespan: {
      value: cdktf.stringToHclTerraform(struct!.maxLifespan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LdapUserFederationCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LdapUserFederationCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evictionDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionDay = this._evictionDay;
    }
    if (this._evictionHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionHour = this._evictionHour;
    }
    if (this._evictionMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionMinute = this._evictionMinute;
    }
    if (this._maxLifespan !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLifespan = this._maxLifespan;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LdapUserFederationCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evictionDay = undefined;
      this._evictionHour = undefined;
      this._evictionMinute = undefined;
      this._maxLifespan = undefined;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evictionDay = value.evictionDay;
      this._evictionHour = value.evictionHour;
      this._evictionMinute = value.evictionMinute;
      this._maxLifespan = value.maxLifespan;
      this._policy = value.policy;
    }
  }

  // eviction_day - computed: false, optional: true, required: false
  private _evictionDay?: number; 
  public get evictionDay() {
    return this.getNumberAttribute('eviction_day');
  }
  public set evictionDay(value: number) {
    this._evictionDay = value;
  }
  public resetEvictionDay() {
    this._evictionDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionDayInput() {
    return this._evictionDay;
  }

  // eviction_hour - computed: false, optional: true, required: false
  private _evictionHour?: number; 
  public get evictionHour() {
    return this.getNumberAttribute('eviction_hour');
  }
  public set evictionHour(value: number) {
    this._evictionHour = value;
  }
  public resetEvictionHour() {
    this._evictionHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionHourInput() {
    return this._evictionHour;
  }

  // eviction_minute - computed: false, optional: true, required: false
  private _evictionMinute?: number; 
  public get evictionMinute() {
    return this.getNumberAttribute('eviction_minute');
  }
  public set evictionMinute(value: number) {
    this._evictionMinute = value;
  }
  public resetEvictionMinute() {
    this._evictionMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionMinuteInput() {
    return this._evictionMinute;
  }

  // max_lifespan - computed: false, optional: true, required: false
  private _maxLifespan?: string; 
  public get maxLifespan() {
    return this.getStringAttribute('max_lifespan');
  }
  public set maxLifespan(value: string) {
    this._maxLifespan = value;
  }
  public resetMaxLifespan() {
    this._maxLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLifespanInput() {
    return this._maxLifespan;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface LdapUserFederationKerberos {
  /**
  * The name of the kerberos realm, e.g. FOO.LOCAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#kerberos_realm LdapUserFederation#kerberos_realm}
  */
  readonly kerberosRealm: string;
  /**
  * Path to the kerberos keytab file on the server with credentials of the service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#key_tab LdapUserFederation#key_tab}
  */
  readonly keyTab: string;
  /**
  * The kerberos server principal, e.g. 'HTTP/host.foo.com@FOO.LOCAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#server_principal LdapUserFederation#server_principal}
  */
  readonly serverPrincipal: string;
  /**
  * Use kerberos login module instead of ldap service api. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#use_kerberos_for_password_authentication LdapUserFederation#use_kerberos_for_password_authentication}
  */
  readonly useKerberosForPasswordAuthentication?: boolean | cdktf.IResolvable;
}

export function ldapUserFederationKerberosToTerraform(struct?: LdapUserFederationKerberosOutputReference | LdapUserFederationKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos_realm: cdktf.stringToTerraform(struct!.kerberosRealm),
    key_tab: cdktf.stringToTerraform(struct!.keyTab),
    server_principal: cdktf.stringToTerraform(struct!.serverPrincipal),
    use_kerberos_for_password_authentication: cdktf.booleanToTerraform(struct!.useKerberosForPasswordAuthentication),
  }
}


export function ldapUserFederationKerberosToHclTerraform(struct?: LdapUserFederationKerberosOutputReference | LdapUserFederationKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kerberos_realm: {
      value: cdktf.stringToHclTerraform(struct!.kerberosRealm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_tab: {
      value: cdktf.stringToHclTerraform(struct!.keyTab),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_principal: {
      value: cdktf.stringToHclTerraform(struct!.serverPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_kerberos_for_password_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.useKerberosForPasswordAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LdapUserFederationKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LdapUserFederationKerberos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kerberosRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRealm = this._kerberosRealm;
    }
    if (this._keyTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTab = this._keyTab;
    }
    if (this._serverPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPrincipal = this._serverPrincipal;
    }
    if (this._useKerberosForPasswordAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.useKerberosForPasswordAuthentication = this._useKerberosForPasswordAuthentication;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LdapUserFederationKerberos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kerberosRealm = undefined;
      this._keyTab = undefined;
      this._serverPrincipal = undefined;
      this._useKerberosForPasswordAuthentication = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kerberosRealm = value.kerberosRealm;
      this._keyTab = value.keyTab;
      this._serverPrincipal = value.serverPrincipal;
      this._useKerberosForPasswordAuthentication = value.useKerberosForPasswordAuthentication;
    }
  }

  // kerberos_realm - computed: false, optional: false, required: true
  private _kerberosRealm?: string; 
  public get kerberosRealm() {
    return this.getStringAttribute('kerberos_realm');
  }
  public set kerberosRealm(value: string) {
    this._kerberosRealm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRealmInput() {
    return this._kerberosRealm;
  }

  // key_tab - computed: false, optional: false, required: true
  private _keyTab?: string; 
  public get keyTab() {
    return this.getStringAttribute('key_tab');
  }
  public set keyTab(value: string) {
    this._keyTab = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTabInput() {
    return this._keyTab;
  }

  // server_principal - computed: false, optional: false, required: true
  private _serverPrincipal?: string; 
  public get serverPrincipal() {
    return this.getStringAttribute('server_principal');
  }
  public set serverPrincipal(value: string) {
    this._serverPrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPrincipalInput() {
    return this._serverPrincipal;
  }

  // use_kerberos_for_password_authentication - computed: false, optional: true, required: false
  private _useKerberosForPasswordAuthentication?: boolean | cdktf.IResolvable; 
  public get useKerberosForPasswordAuthentication() {
    return this.getBooleanAttribute('use_kerberos_for_password_authentication');
  }
  public set useKerberosForPasswordAuthentication(value: boolean | cdktf.IResolvable) {
    this._useKerberosForPasswordAuthentication = value;
  }
  public resetUseKerberosForPasswordAuthentication() {
    this._useKerberosForPasswordAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useKerberosForPasswordAuthenticationInput() {
    return this._useKerberosForPasswordAuthentication;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation keycloak_ldap_user_federation}
*/
export class LdapUserFederation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_ldap_user_federation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapUserFederation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapUserFederation to import
  * @param importFromId The id of the existing LdapUserFederation that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapUserFederation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_ldap_user_federation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_user_federation keycloak_ldap_user_federation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapUserFederationConfig
  */
  public constructor(scope: Construct, id: string, config: LdapUserFederationConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_ldap_user_federation',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0',
        providerVersionConstraint: '4.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._batchSizeForSync = config.batchSizeForSync;
    this._bindCredential = config.bindCredential;
    this._bindDn = config.bindDn;
    this._changedSyncPeriod = config.changedSyncPeriod;
    this._connectionTimeout = config.connectionTimeout;
    this._connectionUrl = config.connectionUrl;
    this._customUserSearchFilter = config.customUserSearchFilter;
    this._deleteDefaultMappers = config.deleteDefaultMappers;
    this._editMode = config.editMode;
    this._enabled = config.enabled;
    this._fullSyncPeriod = config.fullSyncPeriod;
    this._id = config.id;
    this._importEnabled = config.importEnabled;
    this._name = config.name;
    this._pagination = config.pagination;
    this._priority = config.priority;
    this._rdnLdapAttribute = config.rdnLdapAttribute;
    this._readTimeout = config.readTimeout;
    this._realmId = config.realmId;
    this._searchScope = config.searchScope;
    this._startTls = config.startTls;
    this._syncRegistrations = config.syncRegistrations;
    this._trustEmail = config.trustEmail;
    this._usePasswordModifyExtendedOp = config.usePasswordModifyExtendedOp;
    this._useTruststoreSpi = config.useTruststoreSpi;
    this._userObjectClasses = config.userObjectClasses;
    this._usernameLdapAttribute = config.usernameLdapAttribute;
    this._usersDn = config.usersDn;
    this._uuidLdapAttribute = config.uuidLdapAttribute;
    this._validatePasswordPolicy = config.validatePasswordPolicy;
    this._vendor = config.vendor;
    this._cache.internalValue = config.cache;
    this._kerberos.internalValue = config.kerberos;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_size_for_sync - computed: false, optional: true, required: false
  private _batchSizeForSync?: number; 
  public get batchSizeForSync() {
    return this.getNumberAttribute('batch_size_for_sync');
  }
  public set batchSizeForSync(value: number) {
    this._batchSizeForSync = value;
  }
  public resetBatchSizeForSync() {
    this._batchSizeForSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeForSyncInput() {
    return this._batchSizeForSync;
  }

  // bind_credential - computed: false, optional: true, required: false
  private _bindCredential?: string; 
  public get bindCredential() {
    return this.getStringAttribute('bind_credential');
  }
  public set bindCredential(value: string) {
    this._bindCredential = value;
  }
  public resetBindCredential() {
    this._bindCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindCredentialInput() {
    return this._bindCredential;
  }

  // bind_dn - computed: false, optional: true, required: false
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

  // changed_sync_period - computed: false, optional: true, required: false
  private _changedSyncPeriod?: number; 
  public get changedSyncPeriod() {
    return this.getNumberAttribute('changed_sync_period');
  }
  public set changedSyncPeriod(value: number) {
    this._changedSyncPeriod = value;
  }
  public resetChangedSyncPeriod() {
    this._changedSyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changedSyncPeriodInput() {
    return this._changedSyncPeriod;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: string; 
  public get connectionTimeout() {
    return this.getStringAttribute('connection_timeout');
  }
  public set connectionTimeout(value: string) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // connection_url - computed: false, optional: false, required: true
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // custom_user_search_filter - computed: false, optional: true, required: false
  private _customUserSearchFilter?: string; 
  public get customUserSearchFilter() {
    return this.getStringAttribute('custom_user_search_filter');
  }
  public set customUserSearchFilter(value: string) {
    this._customUserSearchFilter = value;
  }
  public resetCustomUserSearchFilter() {
    this._customUserSearchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUserSearchFilterInput() {
    return this._customUserSearchFilter;
  }

  // delete_default_mappers - computed: false, optional: true, required: false
  private _deleteDefaultMappers?: boolean | cdktf.IResolvable; 
  public get deleteDefaultMappers() {
    return this.getBooleanAttribute('delete_default_mappers');
  }
  public set deleteDefaultMappers(value: boolean | cdktf.IResolvable) {
    this._deleteDefaultMappers = value;
  }
  public resetDeleteDefaultMappers() {
    this._deleteDefaultMappers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDefaultMappersInput() {
    return this._deleteDefaultMappers;
  }

  // edit_mode - computed: false, optional: true, required: false
  private _editMode?: string; 
  public get editMode() {
    return this.getStringAttribute('edit_mode');
  }
  public set editMode(value: string) {
    this._editMode = value;
  }
  public resetEditMode() {
    this._editMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editModeInput() {
    return this._editMode;
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

  // full_sync_period - computed: false, optional: true, required: false
  private _fullSyncPeriod?: number; 
  public get fullSyncPeriod() {
    return this.getNumberAttribute('full_sync_period');
  }
  public set fullSyncPeriod(value: number) {
    this._fullSyncPeriod = value;
  }
  public resetFullSyncPeriod() {
    this._fullSyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullSyncPeriodInput() {
    return this._fullSyncPeriod;
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

  // import_enabled - computed: false, optional: true, required: false
  private _importEnabled?: boolean | cdktf.IResolvable; 
  public get importEnabled() {
    return this.getBooleanAttribute('import_enabled');
  }
  public set importEnabled(value: boolean | cdktf.IResolvable) {
    this._importEnabled = value;
  }
  public resetImportEnabled() {
    this._importEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importEnabledInput() {
    return this._importEnabled;
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

  // pagination - computed: false, optional: true, required: false
  private _pagination?: boolean | cdktf.IResolvable; 
  public get pagination() {
    return this.getBooleanAttribute('pagination');
  }
  public set pagination(value: boolean | cdktf.IResolvable) {
    this._pagination = value;
  }
  public resetPagination() {
    this._pagination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationInput() {
    return this._pagination;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rdn_ldap_attribute - computed: false, optional: false, required: true
  private _rdnLdapAttribute?: string; 
  public get rdnLdapAttribute() {
    return this.getStringAttribute('rdn_ldap_attribute');
  }
  public set rdnLdapAttribute(value: string) {
    this._rdnLdapAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnLdapAttributeInput() {
    return this._rdnLdapAttribute;
  }

  // read_timeout - computed: false, optional: true, required: false
  private _readTimeout?: string; 
  public get readTimeout() {
    return this.getStringAttribute('read_timeout');
  }
  public set readTimeout(value: string) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // search_scope - computed: false, optional: true, required: false
  private _searchScope?: string; 
  public get searchScope() {
    return this.getStringAttribute('search_scope');
  }
  public set searchScope(value: string) {
    this._searchScope = value;
  }
  public resetSearchScope() {
    this._searchScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchScopeInput() {
    return this._searchScope;
  }

  // start_tls - computed: false, optional: true, required: false
  private _startTls?: boolean | cdktf.IResolvable; 
  public get startTls() {
    return this.getBooleanAttribute('start_tls');
  }
  public set startTls(value: boolean | cdktf.IResolvable) {
    this._startTls = value;
  }
  public resetStartTls() {
    this._startTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsInput() {
    return this._startTls;
  }

  // sync_registrations - computed: false, optional: true, required: false
  private _syncRegistrations?: boolean | cdktf.IResolvable; 
  public get syncRegistrations() {
    return this.getBooleanAttribute('sync_registrations');
  }
  public set syncRegistrations(value: boolean | cdktf.IResolvable) {
    this._syncRegistrations = value;
  }
  public resetSyncRegistrations() {
    this._syncRegistrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRegistrationsInput() {
    return this._syncRegistrations;
  }

  // trust_email - computed: false, optional: true, required: false
  private _trustEmail?: boolean | cdktf.IResolvable; 
  public get trustEmail() {
    return this.getBooleanAttribute('trust_email');
  }
  public set trustEmail(value: boolean | cdktf.IResolvable) {
    this._trustEmail = value;
  }
  public resetTrustEmail() {
    this._trustEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustEmailInput() {
    return this._trustEmail;
  }

  // use_password_modify_extended_op - computed: false, optional: true, required: false
  private _usePasswordModifyExtendedOp?: boolean | cdktf.IResolvable; 
  public get usePasswordModifyExtendedOp() {
    return this.getBooleanAttribute('use_password_modify_extended_op');
  }
  public set usePasswordModifyExtendedOp(value: boolean | cdktf.IResolvable) {
    this._usePasswordModifyExtendedOp = value;
  }
  public resetUsePasswordModifyExtendedOp() {
    this._usePasswordModifyExtendedOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePasswordModifyExtendedOpInput() {
    return this._usePasswordModifyExtendedOp;
  }

  // use_truststore_spi - computed: false, optional: true, required: false
  private _useTruststoreSpi?: string; 
  public get useTruststoreSpi() {
    return this.getStringAttribute('use_truststore_spi');
  }
  public set useTruststoreSpi(value: string) {
    this._useTruststoreSpi = value;
  }
  public resetUseTruststoreSpi() {
    this._useTruststoreSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTruststoreSpiInput() {
    return this._useTruststoreSpi;
  }

  // user_object_classes - computed: false, optional: false, required: true
  private _userObjectClasses?: string[]; 
  public get userObjectClasses() {
    return this.getListAttribute('user_object_classes');
  }
  public set userObjectClasses(value: string[]) {
    this._userObjectClasses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userObjectClassesInput() {
    return this._userObjectClasses;
  }

  // username_ldap_attribute - computed: false, optional: false, required: true
  private _usernameLdapAttribute?: string; 
  public get usernameLdapAttribute() {
    return this.getStringAttribute('username_ldap_attribute');
  }
  public set usernameLdapAttribute(value: string) {
    this._usernameLdapAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameLdapAttributeInput() {
    return this._usernameLdapAttribute;
  }

  // users_dn - computed: false, optional: false, required: true
  private _usersDn?: string; 
  public get usersDn() {
    return this.getStringAttribute('users_dn');
  }
  public set usersDn(value: string) {
    this._usersDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersDnInput() {
    return this._usersDn;
  }

  // uuid_ldap_attribute - computed: false, optional: false, required: true
  private _uuidLdapAttribute?: string; 
  public get uuidLdapAttribute() {
    return this.getStringAttribute('uuid_ldap_attribute');
  }
  public set uuidLdapAttribute(value: string) {
    this._uuidLdapAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidLdapAttributeInput() {
    return this._uuidLdapAttribute;
  }

  // validate_password_policy - computed: false, optional: true, required: false
  private _validatePasswordPolicy?: boolean | cdktf.IResolvable; 
  public get validatePasswordPolicy() {
    return this.getBooleanAttribute('validate_password_policy');
  }
  public set validatePasswordPolicy(value: boolean | cdktf.IResolvable) {
    this._validatePasswordPolicy = value;
  }
  public resetValidatePasswordPolicy() {
    this._validatePasswordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatePasswordPolicyInput() {
    return this._validatePasswordPolicy;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // cache - computed: false, optional: true, required: false
  private _cache = new LdapUserFederationCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: LdapUserFederationCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // kerberos - computed: false, optional: true, required: false
  private _kerberos = new LdapUserFederationKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }
  public putKerberos(value: LdapUserFederationKerberos) {
    this._kerberos.internalValue = value;
  }
  public resetKerberos() {
    this._kerberos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosInput() {
    return this._kerberos.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      batch_size_for_sync: cdktf.numberToTerraform(this._batchSizeForSync),
      bind_credential: cdktf.stringToTerraform(this._bindCredential),
      bind_dn: cdktf.stringToTerraform(this._bindDn),
      changed_sync_period: cdktf.numberToTerraform(this._changedSyncPeriod),
      connection_timeout: cdktf.stringToTerraform(this._connectionTimeout),
      connection_url: cdktf.stringToTerraform(this._connectionUrl),
      custom_user_search_filter: cdktf.stringToTerraform(this._customUserSearchFilter),
      delete_default_mappers: cdktf.booleanToTerraform(this._deleteDefaultMappers),
      edit_mode: cdktf.stringToTerraform(this._editMode),
      enabled: cdktf.booleanToTerraform(this._enabled),
      full_sync_period: cdktf.numberToTerraform(this._fullSyncPeriod),
      id: cdktf.stringToTerraform(this._id),
      import_enabled: cdktf.booleanToTerraform(this._importEnabled),
      name: cdktf.stringToTerraform(this._name),
      pagination: cdktf.booleanToTerraform(this._pagination),
      priority: cdktf.numberToTerraform(this._priority),
      rdn_ldap_attribute: cdktf.stringToTerraform(this._rdnLdapAttribute),
      read_timeout: cdktf.stringToTerraform(this._readTimeout),
      realm_id: cdktf.stringToTerraform(this._realmId),
      search_scope: cdktf.stringToTerraform(this._searchScope),
      start_tls: cdktf.booleanToTerraform(this._startTls),
      sync_registrations: cdktf.booleanToTerraform(this._syncRegistrations),
      trust_email: cdktf.booleanToTerraform(this._trustEmail),
      use_password_modify_extended_op: cdktf.booleanToTerraform(this._usePasswordModifyExtendedOp),
      use_truststore_spi: cdktf.stringToTerraform(this._useTruststoreSpi),
      user_object_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userObjectClasses),
      username_ldap_attribute: cdktf.stringToTerraform(this._usernameLdapAttribute),
      users_dn: cdktf.stringToTerraform(this._usersDn),
      uuid_ldap_attribute: cdktf.stringToTerraform(this._uuidLdapAttribute),
      validate_password_policy: cdktf.booleanToTerraform(this._validatePasswordPolicy),
      vendor: cdktf.stringToTerraform(this._vendor),
      cache: ldapUserFederationCacheToTerraform(this._cache.internalValue),
      kerberos: ldapUserFederationKerberosToTerraform(this._kerberos.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      batch_size_for_sync: {
        value: cdktf.numberToHclTerraform(this._batchSizeForSync),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bind_credential: {
        value: cdktf.stringToHclTerraform(this._bindCredential),
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
      changed_sync_period: {
        value: cdktf.numberToHclTerraform(this._changedSyncPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_timeout: {
        value: cdktf.stringToHclTerraform(this._connectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_url: {
        value: cdktf.stringToHclTerraform(this._connectionUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_user_search_filter: {
        value: cdktf.stringToHclTerraform(this._customUserSearchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_default_mappers: {
        value: cdktf.booleanToHclTerraform(this._deleteDefaultMappers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edit_mode: {
        value: cdktf.stringToHclTerraform(this._editMode),
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
      full_sync_period: {
        value: cdktf.numberToHclTerraform(this._fullSyncPeriod),
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
      import_enabled: {
        value: cdktf.booleanToHclTerraform(this._importEnabled),
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
      pagination: {
        value: cdktf.booleanToHclTerraform(this._pagination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rdn_ldap_attribute: {
        value: cdktf.stringToHclTerraform(this._rdnLdapAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_timeout: {
        value: cdktf.stringToHclTerraform(this._readTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_scope: {
        value: cdktf.stringToHclTerraform(this._searchScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_tls: {
        value: cdktf.booleanToHclTerraform(this._startTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_registrations: {
        value: cdktf.booleanToHclTerraform(this._syncRegistrations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trust_email: {
        value: cdktf.booleanToHclTerraform(this._trustEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_password_modify_extended_op: {
        value: cdktf.booleanToHclTerraform(this._usePasswordModifyExtendedOp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_truststore_spi: {
        value: cdktf.stringToHclTerraform(this._useTruststoreSpi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_object_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userObjectClasses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      username_ldap_attribute: {
        value: cdktf.stringToHclTerraform(this._usernameLdapAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users_dn: {
        value: cdktf.stringToHclTerraform(this._usersDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid_ldap_attribute: {
        value: cdktf.stringToHclTerraform(this._uuidLdapAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_password_policy: {
        value: cdktf.booleanToHclTerraform(this._validatePasswordPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache: {
        value: ldapUserFederationCacheToHclTerraform(this._cache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LdapUserFederationCacheList",
      },
      kerberos: {
        value: ldapUserFederationKerberosToHclTerraform(this._kerberos.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LdapUserFederationKerberosList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
