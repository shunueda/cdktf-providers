// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the attribute name used when searching for alternate security identities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#alternate_security_identities_attribute LdapProvider#alternate_security_identities_attribute}
  */
  readonly alternateSecurityIdentitiesAttribute?: string;
  /**
  * If true, enables authentication and identity management through the authentication provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#authentication LdapProvider#authentication}
  */
  readonly authentication?: boolean | cdktf.IResolvable;
  /**
  * If true, connects the provider to a random server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#balance_servers LdapProvider#balance_servers}
  */
  readonly balanceServers?: boolean | cdktf.IResolvable;
  /**
  * Specifies the root of the tree in which to search identities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#base_dn LdapProvider#base_dn}
  */
  readonly baseDn: string;
  /**
  * Specifies the distinguished name for binding to the LDAP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#bind_dn LdapProvider#bind_dn}
  */
  readonly bindDn?: string;
  /**
  * Specifies which bind mechanism to use when connecting to an LDAP server. The only supported option is the 'simple' value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#bind_mechanism LdapProvider#bind_mechanism}
  */
  readonly bindMechanism?: string;
  /**
  * Specifies the timeout in seconds when binding to an LDAP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#bind_timeout LdapProvider#bind_timeout}
  */
  readonly bindTimeout?: number;
  /**
  * Specifies the path to the root certificates file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#certificate_authority_file LdapProvider#certificate_authority_file}
  */
  readonly certificateAuthorityFile?: string;
  /**
  * Specifies the time in seconds between provider online checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#check_online_interval LdapProvider#check_online_interval}
  */
  readonly checkOnlineInterval?: number;
  /**
  * Specifies the canonical name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#cn_attribute LdapProvider#cn_attribute}
  */
  readonly cnAttribute?: string;
  /**
  * Automatically create the home directory on the first login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#create_home_directory LdapProvider#create_home_directory}
  */
  readonly createHomeDirectory?: boolean | cdktf.IResolvable;
  /**
  * Specifies the hashed password value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#crypt_password_attribute LdapProvider#crypt_password_attribute}
  */
  readonly cryptPasswordAttribute?: string;
  /**
  * Specifies the LDAP Email attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#email_attribute LdapProvider#email_attribute}
  */
  readonly emailAttribute?: string;
  /**
  * If true, enables the LDAP provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#enabled LdapProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If true, allows the provider to enumerate groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#enumerate_groups LdapProvider#enumerate_groups}
  */
  readonly enumerateGroups?: boolean | cdktf.IResolvable;
  /**
  * If true, allows the provider to enumerate users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#enumerate_users LdapProvider#enumerate_users}
  */
  readonly enumerateUsers?: boolean | cdktf.IResolvable;
  /**
  * Specifies the list of groups that can be resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#findable_groups LdapProvider#findable_groups}
  */
  readonly findableGroups?: string[];
  /**
  * Specifies the list of users that can be resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#findable_users LdapProvider#findable_users}
  */
  readonly findableUsers?: string[];
  /**
  * Specifies the LDAP GECOS attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#gecos_attribute LdapProvider#gecos_attribute}
  */
  readonly gecosAttribute?: string;
  /**
  * Specifies the LDAP GID attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#gid_attribute LdapProvider#gid_attribute}
  */
  readonly gidAttribute?: string;
  /**
  * Specifies the distinguished name of the entry where LDAP searches for groups are started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#group_base_dn LdapProvider#group_base_dn}
  */
  readonly groupBaseDn?: string;
  /**
  * Specifies the domain for this provider through which groups are qualified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#group_domain LdapProvider#group_domain}
  */
  readonly groupDomain?: string;
  /**
  * Specifies the LDAP filter for group objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#group_filter LdapProvider#group_filter}
  */
  readonly groupFilter?: string;
  /**
  * Specifies the LDAP Group Members attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#group_members_attribute LdapProvider#group_members_attribute}
  */
  readonly groupMembersAttribute?: string;
  /**
  * Specifies the depth from the base DN to perform LDAP searches. Acceptable values: "default", "base", "onelevel", "subtree", "children".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#group_search_scope LdapProvider#group_search_scope}
  */
  readonly groupSearchScope?: string;
  /**
  * Groupnet identifier. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#groupnet LdapProvider#groupnet}
  */
  readonly groupnet?: string;
  /**
  * Specifies the path to the home directory template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#home_directory_template LdapProvider#home_directory_template}
  */
  readonly homeDirectoryTemplate?: string;
  /**
  * Specifies the LDAP Homedir attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#homedir_attribute LdapProvider#homedir_attribute}
  */
  readonly homedirAttribute?: string;
  /**
  * If true, continues over secure connections even if identity checks fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#ignore_tls_errors LdapProvider#ignore_tls_errors}
  */
  readonly ignoreTlsErrors?: boolean | cdktf.IResolvable;
  /**
  * Ignore unresolvable server URIs when creating and updating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#ignore_unresolvable_server_urls LdapProvider#ignore_unresolvable_server_urls}
  */
  readonly ignoreUnresolvableServerUrls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the groups that can be viewed in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#listable_groups LdapProvider#listable_groups}
  */
  readonly listableGroups?: string[];
  /**
  * Specifies the users that can be viewed in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#listable_users LdapProvider#listable_users}
  */
  readonly listableUsers?: string[];
  /**
  * Specifies the login shell path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#login_shell LdapProvider#login_shell}
  */
  readonly loginShell?: string;
  /**
  * Sets the method by which group member lookups are performed. Use caution when changing this option directly. Acceptable values: "default", "rfc2307bis".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#member_lookup_method LdapProvider#member_lookup_method}
  */
  readonly memberLookupMethod?: string;
  /**
  * Specifies the LDAP Query Member Of attribute, which performs reverse membership queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#member_of_attribute LdapProvider#member_of_attribute}
  */
  readonly memberOfAttribute?: string;
  /**
  * Specifies the name of the LDAP provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#name LdapProvider#name}
  */
  readonly name: string;
  /**
  * Specifies the LDAP UID attribute, which is used as the login name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#name_attribute LdapProvider#name_attribute}
  */
  readonly nameAttribute?: string;
  /**
  * Specifies the distinguished name of the entry where LDAP searches for netgroups are started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#netgroup_base_dn LdapProvider#netgroup_base_dn}
  */
  readonly netgroupBaseDn?: string;
  /**
  * Specifies the LDAP filter for netgroup objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#netgroup_filter LdapProvider#netgroup_filter}
  */
  readonly netgroupFilter?: string;
  /**
  * Specifies the LDAP Netgroup Members attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#netgroup_members_attribute LdapProvider#netgroup_members_attribute}
  */
  readonly netgroupMembersAttribute?: string;
  /**
  * Specifies the depth from the base DN to perform LDAP searches. Acceptable values: "default", "base", "onelevel", "subtree", "children".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#netgroup_search_scope LdapProvider#netgroup_search_scope}
  */
  readonly netgroupSearchScope?: string;
  /**
  * Specifies the LDAP Netgroup Triple attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#netgroup_triple_attribute LdapProvider#netgroup_triple_attribute}
  */
  readonly netgroupTripleAttribute?: string;
  /**
  * Normalizes group names to lowercase before look up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#normalize_groups LdapProvider#normalize_groups}
  */
  readonly normalizeGroups?: boolean | cdktf.IResolvable;
  /**
  * Normalizes user names to lowercase before look up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#normalize_users LdapProvider#normalize_users}
  */
  readonly normalizeUsers?: boolean | cdktf.IResolvable;
  /**
  * Specifies the LDAP NT Password attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#nt_password_attribute LdapProvider#nt_password_attribute}
  */
  readonly ntPasswordAttribute?: string;
  /**
  * Specifies which NTLM versions to support for users with NTLM-compatible credentials. Acceptable values: "all", "v2only", "none".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#ntlm_support LdapProvider#ntlm_support}
  */
  readonly ntlmSupport?: string;
  /**
  * Specifies the OCSP server URIs. Only available for PowerScale 9.5 and above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#ocsp_server_uris LdapProvider#ocsp_server_uris}
  */
  readonly ocspServerUris?: string[];
  /**
  * Specifies the provider domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#provider_domain LdapProvider#provider_domain}
  */
  readonly providerDomain?: string;
  /**
  * Determines whether to continue over a non-TLS connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#require_secure_connection LdapProvider#require_secure_connection}
  */
  readonly requireSecureConnection?: boolean | cdktf.IResolvable;
  /**
  * If true, checks the provider for filtered lists of findable and unfindable users and groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#restrict_findable LdapProvider#restrict_findable}
  */
  readonly restrictFindable?: boolean | cdktf.IResolvable;
  /**
  * If true, checks the provider for filtered lists of listable and unlistable users and groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#restrict_listable LdapProvider#restrict_listable}
  */
  readonly restrictListable?: boolean | cdktf.IResolvable;
  /**
  * Specifies the default depth from the base DN to perform LDAP searches. Acceptable values: "base", "onelevel", "subtree", "children".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#search_scope LdapProvider#search_scope}
  */
  readonly searchScope?: string;
  /**
  * Specifies the search timeout period in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#search_timeout LdapProvider#search_timeout}
  */
  readonly searchTimeout?: number;
  /**
  * Specifies the server URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#server_uris LdapProvider#server_uris}
  */
  readonly serverUris: string[];
  /**
  * Sets the attribute name that indicates the absolute date to expire the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#shadow_expire_attribute LdapProvider#shadow_expire_attribute}
  */
  readonly shadowExpireAttribute?: string;
  /**
  * Sets the attribute name that indicates the section of the shadow map that is used to store the flag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#shadow_flag_attribute LdapProvider#shadow_flag_attribute}
  */
  readonly shadowFlagAttribute?: string;
  /**
  * Sets the attribute name that indicates the number of days of inactivity that is allowed for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#shadow_inactive_attribute LdapProvider#shadow_inactive_attribute}
  */
  readonly shadowInactiveAttribute?: string;
  /**
  * Sets the attribute name that indicates the last change of the shadow information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#shadow_last_change_attribute LdapProvider#shadow_last_change_attribute}
  */
  readonly shadowLastChangeAttribute?: string;
  /**
  * Sets the attribute name that indicates the maximum number of days a password can be valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#shadow_max_attribute LdapProvider#shadow_max_attribute}
  */
  readonly shadowMaxAttribute?: string;
  /**
  * Sets the attribute name that indicates the minimum number of days between shadow changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#shadow_min_attribute LdapProvider#shadow_min_attribute}
  */
  readonly shadowMinAttribute?: string;
  /**
  * Sets LDAP filter for shadow user objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#shadow_user_filter LdapProvider#shadow_user_filter}
  */
  readonly shadowUserFilter?: string;
  /**
  * Sets the attribute name that indicates the number of days before the password expires to warn the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#shadow_warning_attribute LdapProvider#shadow_warning_attribute}
  */
  readonly shadowWarningAttribute?: string;
  /**
  * Specifies the LDAP Shell attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#shell_attribute LdapProvider#shell_attribute}
  */
  readonly shellAttribute?: string;
  /**
  * Sets the attribute name that indicates the SSH Public Key for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#ssh_public_key_attribute LdapProvider#ssh_public_key_attribute}
  */
  readonly sshPublicKeyAttribute?: string;
  /**
  * Specifies the status of the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#status LdapProvider#status}
  */
  readonly status?: string;
  /**
  * If true, indicates that this provider instance was created by OneFS and cannot be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#system LdapProvider#system}
  */
  readonly systemAttribute?: boolean | cdktf.IResolvable;
  /**
  * Specifies the minimum TLS protocol version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#tls_protocol_min LdapProvider#tls_protocol_min}
  */
  readonly tlsProtocolMin?: string;
  /**
  * This setting controls the behavior of the certificate revocation checking algorithm when the LDAP provider is presented with a digital certificate by an LDAP server. Acceptable values: "none", "allowNoData", "allowNoSrc", "strict". Only available for PowerScale 9.5 and above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#tls_revocation_check_level LdapProvider#tls_revocation_check_level}
  */
  readonly tlsRevocationCheckLevel?: string;
  /**
  * Specifies the LDAP UID Number attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#uid_attribute LdapProvider#uid_attribute}
  */
  readonly uidAttribute?: string;
  /**
  * Specifies the groups that cannot be resolved by the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#unfindable_groups LdapProvider#unfindable_groups}
  */
  readonly unfindableGroups?: string[];
  /**
  * Specifies users that cannot be resolved by the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#unfindable_users LdapProvider#unfindable_users}
  */
  readonly unfindableUsers?: string[];
  /**
  * Sets the LDAP Unique Group Members attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#unique_group_members_attribute LdapProvider#unique_group_members_attribute}
  */
  readonly uniqueGroupMembersAttribute?: string;
  /**
  * Specifies a group that cannot be listed by the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#unlistable_groups LdapProvider#unlistable_groups}
  */
  readonly unlistableGroups?: string[];
  /**
  * Specifies a user that cannot be listed by the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#unlistable_users LdapProvider#unlistable_users}
  */
  readonly unlistableUsers?: string[];
  /**
  * Specifies the distinguished name of the entry at which to start LDAP searches for users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#user_base_dn LdapProvider#user_base_dn}
  */
  readonly userBaseDn?: string;
  /**
  * Specifies the domain for this provider through which users are qualified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#user_domain LdapProvider#user_domain}
  */
  readonly userDomain?: string;
  /**
  * Specifies the LDAP filter for user objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#user_filter LdapProvider#user_filter}
  */
  readonly userFilter?: string;
  /**
  * Specifies the depth from the base DN to perform LDAP searches. Acceptable values: "default", "base", "onelevel", "subtree", "children".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#user_search_scope LdapProvider#user_search_scope}
  */
  readonly userSearchScope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider powerscale_ldap_provider}
*/
export class LdapProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_ldap_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapProvider to import
  * @param importFromId The id of the existing LdapProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_ldap_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ldap_provider powerscale_ldap_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapProviderConfig
  */
  public constructor(scope: Construct, id: string, config: LdapProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_ldap_provider',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alternateSecurityIdentitiesAttribute = config.alternateSecurityIdentitiesAttribute;
    this._authentication = config.authentication;
    this._balanceServers = config.balanceServers;
    this._baseDn = config.baseDn;
    this._bindDn = config.bindDn;
    this._bindMechanism = config.bindMechanism;
    this._bindTimeout = config.bindTimeout;
    this._certificateAuthorityFile = config.certificateAuthorityFile;
    this._checkOnlineInterval = config.checkOnlineInterval;
    this._cnAttribute = config.cnAttribute;
    this._createHomeDirectory = config.createHomeDirectory;
    this._cryptPasswordAttribute = config.cryptPasswordAttribute;
    this._emailAttribute = config.emailAttribute;
    this._enabled = config.enabled;
    this._enumerateGroups = config.enumerateGroups;
    this._enumerateUsers = config.enumerateUsers;
    this._findableGroups = config.findableGroups;
    this._findableUsers = config.findableUsers;
    this._gecosAttribute = config.gecosAttribute;
    this._gidAttribute = config.gidAttribute;
    this._groupBaseDn = config.groupBaseDn;
    this._groupDomain = config.groupDomain;
    this._groupFilter = config.groupFilter;
    this._groupMembersAttribute = config.groupMembersAttribute;
    this._groupSearchScope = config.groupSearchScope;
    this._groupnet = config.groupnet;
    this._homeDirectoryTemplate = config.homeDirectoryTemplate;
    this._homedirAttribute = config.homedirAttribute;
    this._ignoreTlsErrors = config.ignoreTlsErrors;
    this._ignoreUnresolvableServerUrls = config.ignoreUnresolvableServerUrls;
    this._listableGroups = config.listableGroups;
    this._listableUsers = config.listableUsers;
    this._loginShell = config.loginShell;
    this._memberLookupMethod = config.memberLookupMethod;
    this._memberOfAttribute = config.memberOfAttribute;
    this._name = config.name;
    this._nameAttribute = config.nameAttribute;
    this._netgroupBaseDn = config.netgroupBaseDn;
    this._netgroupFilter = config.netgroupFilter;
    this._netgroupMembersAttribute = config.netgroupMembersAttribute;
    this._netgroupSearchScope = config.netgroupSearchScope;
    this._netgroupTripleAttribute = config.netgroupTripleAttribute;
    this._normalizeGroups = config.normalizeGroups;
    this._normalizeUsers = config.normalizeUsers;
    this._ntPasswordAttribute = config.ntPasswordAttribute;
    this._ntlmSupport = config.ntlmSupport;
    this._ocspServerUris = config.ocspServerUris;
    this._providerDomain = config.providerDomain;
    this._requireSecureConnection = config.requireSecureConnection;
    this._restrictFindable = config.restrictFindable;
    this._restrictListable = config.restrictListable;
    this._searchScope = config.searchScope;
    this._searchTimeout = config.searchTimeout;
    this._serverUris = config.serverUris;
    this._shadowExpireAttribute = config.shadowExpireAttribute;
    this._shadowFlagAttribute = config.shadowFlagAttribute;
    this._shadowInactiveAttribute = config.shadowInactiveAttribute;
    this._shadowLastChangeAttribute = config.shadowLastChangeAttribute;
    this._shadowMaxAttribute = config.shadowMaxAttribute;
    this._shadowMinAttribute = config.shadowMinAttribute;
    this._shadowUserFilter = config.shadowUserFilter;
    this._shadowWarningAttribute = config.shadowWarningAttribute;
    this._shellAttribute = config.shellAttribute;
    this._sshPublicKeyAttribute = config.sshPublicKeyAttribute;
    this._status = config.status;
    this._system = config.systemAttribute;
    this._tlsProtocolMin = config.tlsProtocolMin;
    this._tlsRevocationCheckLevel = config.tlsRevocationCheckLevel;
    this._uidAttribute = config.uidAttribute;
    this._unfindableGroups = config.unfindableGroups;
    this._unfindableUsers = config.unfindableUsers;
    this._uniqueGroupMembersAttribute = config.uniqueGroupMembersAttribute;
    this._unlistableGroups = config.unlistableGroups;
    this._unlistableUsers = config.unlistableUsers;
    this._userBaseDn = config.userBaseDn;
    this._userDomain = config.userDomain;
    this._userFilter = config.userFilter;
    this._userSearchScope = config.userSearchScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_security_identities_attribute - computed: true, optional: true, required: false
  private _alternateSecurityIdentitiesAttribute?: string; 
  public get alternateSecurityIdentitiesAttribute() {
    return this.getStringAttribute('alternate_security_identities_attribute');
  }
  public set alternateSecurityIdentitiesAttribute(value: string) {
    this._alternateSecurityIdentitiesAttribute = value;
  }
  public resetAlternateSecurityIdentitiesAttribute() {
    this._alternateSecurityIdentitiesAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateSecurityIdentitiesAttributeInput() {
    return this._alternateSecurityIdentitiesAttribute;
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

  // balance_servers - computed: true, optional: true, required: false
  private _balanceServers?: boolean | cdktf.IResolvable; 
  public get balanceServers() {
    return this.getBooleanAttribute('balance_servers');
  }
  public set balanceServers(value: boolean | cdktf.IResolvable) {
    this._balanceServers = value;
  }
  public resetBalanceServers() {
    this._balanceServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceServersInput() {
    return this._balanceServers;
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

  // bind_mechanism - computed: true, optional: true, required: false
  private _bindMechanism?: string; 
  public get bindMechanism() {
    return this.getStringAttribute('bind_mechanism');
  }
  public set bindMechanism(value: string) {
    this._bindMechanism = value;
  }
  public resetBindMechanism() {
    this._bindMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindMechanismInput() {
    return this._bindMechanism;
  }

  // bind_timeout - computed: true, optional: true, required: false
  private _bindTimeout?: number; 
  public get bindTimeout() {
    return this.getNumberAttribute('bind_timeout');
  }
  public set bindTimeout(value: number) {
    this._bindTimeout = value;
  }
  public resetBindTimeout() {
    this._bindTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindTimeoutInput() {
    return this._bindTimeout;
  }

  // certificate_authority_file - computed: true, optional: true, required: false
  private _certificateAuthorityFile?: string; 
  public get certificateAuthorityFile() {
    return this.getStringAttribute('certificate_authority_file');
  }
  public set certificateAuthorityFile(value: string) {
    this._certificateAuthorityFile = value;
  }
  public resetCertificateAuthorityFile() {
    this._certificateAuthorityFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityFileInput() {
    return this._certificateAuthorityFile;
  }

  // check_online_interval - computed: true, optional: true, required: false
  private _checkOnlineInterval?: number; 
  public get checkOnlineInterval() {
    return this.getNumberAttribute('check_online_interval');
  }
  public set checkOnlineInterval(value: number) {
    this._checkOnlineInterval = value;
  }
  public resetCheckOnlineInterval() {
    this._checkOnlineInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkOnlineIntervalInput() {
    return this._checkOnlineInterval;
  }

  // cn_attribute - computed: true, optional: true, required: false
  private _cnAttribute?: string; 
  public get cnAttribute() {
    return this.getStringAttribute('cn_attribute');
  }
  public set cnAttribute(value: string) {
    this._cnAttribute = value;
  }
  public resetCnAttribute() {
    this._cnAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnAttributeInput() {
    return this._cnAttribute;
  }

  // create_home_directory - computed: true, optional: true, required: false
  private _createHomeDirectory?: boolean | cdktf.IResolvable; 
  public get createHomeDirectory() {
    return this.getBooleanAttribute('create_home_directory');
  }
  public set createHomeDirectory(value: boolean | cdktf.IResolvable) {
    this._createHomeDirectory = value;
  }
  public resetCreateHomeDirectory() {
    this._createHomeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createHomeDirectoryInput() {
    return this._createHomeDirectory;
  }

  // crypt_password_attribute - computed: true, optional: true, required: false
  private _cryptPasswordAttribute?: string; 
  public get cryptPasswordAttribute() {
    return this.getStringAttribute('crypt_password_attribute');
  }
  public set cryptPasswordAttribute(value: string) {
    this._cryptPasswordAttribute = value;
  }
  public resetCryptPasswordAttribute() {
    this._cryptPasswordAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptPasswordAttributeInput() {
    return this._cryptPasswordAttribute;
  }

  // email_attribute - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
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

  // enumerate_groups - computed: true, optional: true, required: false
  private _enumerateGroups?: boolean | cdktf.IResolvable; 
  public get enumerateGroups() {
    return this.getBooleanAttribute('enumerate_groups');
  }
  public set enumerateGroups(value: boolean | cdktf.IResolvable) {
    this._enumerateGroups = value;
  }
  public resetEnumerateGroups() {
    this._enumerateGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumerateGroupsInput() {
    return this._enumerateGroups;
  }

  // enumerate_users - computed: true, optional: true, required: false
  private _enumerateUsers?: boolean | cdktf.IResolvable; 
  public get enumerateUsers() {
    return this.getBooleanAttribute('enumerate_users');
  }
  public set enumerateUsers(value: boolean | cdktf.IResolvable) {
    this._enumerateUsers = value;
  }
  public resetEnumerateUsers() {
    this._enumerateUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumerateUsersInput() {
    return this._enumerateUsers;
  }

  // findable_groups - computed: true, optional: true, required: false
  private _findableGroups?: string[]; 
  public get findableGroups() {
    return this.getListAttribute('findable_groups');
  }
  public set findableGroups(value: string[]) {
    this._findableGroups = value;
  }
  public resetFindableGroups() {
    this._findableGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findableGroupsInput() {
    return this._findableGroups;
  }

  // findable_users - computed: true, optional: true, required: false
  private _findableUsers?: string[]; 
  public get findableUsers() {
    return this.getListAttribute('findable_users');
  }
  public set findableUsers(value: string[]) {
    this._findableUsers = value;
  }
  public resetFindableUsers() {
    this._findableUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findableUsersInput() {
    return this._findableUsers;
  }

  // gecos_attribute - computed: true, optional: true, required: false
  private _gecosAttribute?: string; 
  public get gecosAttribute() {
    return this.getStringAttribute('gecos_attribute');
  }
  public set gecosAttribute(value: string) {
    this._gecosAttribute = value;
  }
  public resetGecosAttribute() {
    this._gecosAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gecosAttributeInput() {
    return this._gecosAttribute;
  }

  // gid_attribute - computed: true, optional: true, required: false
  private _gidAttribute?: string; 
  public get gidAttribute() {
    return this.getStringAttribute('gid_attribute');
  }
  public set gidAttribute(value: string) {
    this._gidAttribute = value;
  }
  public resetGidAttribute() {
    this._gidAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidAttributeInput() {
    return this._gidAttribute;
  }

  // group_base_dn - computed: true, optional: true, required: false
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

  // group_domain - computed: true, optional: true, required: false
  private _groupDomain?: string; 
  public get groupDomain() {
    return this.getStringAttribute('group_domain');
  }
  public set groupDomain(value: string) {
    this._groupDomain = value;
  }
  public resetGroupDomain() {
    this._groupDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDomainInput() {
    return this._groupDomain;
  }

  // group_filter - computed: true, optional: true, required: false
  private _groupFilter?: string; 
  public get groupFilter() {
    return this.getStringAttribute('group_filter');
  }
  public set groupFilter(value: string) {
    this._groupFilter = value;
  }
  public resetGroupFilter() {
    this._groupFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFilterInput() {
    return this._groupFilter;
  }

  // group_members_attribute - computed: true, optional: true, required: false
  private _groupMembersAttribute?: string; 
  public get groupMembersAttribute() {
    return this.getStringAttribute('group_members_attribute');
  }
  public set groupMembersAttribute(value: string) {
    this._groupMembersAttribute = value;
  }
  public resetGroupMembersAttribute() {
    this._groupMembersAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembersAttributeInput() {
    return this._groupMembersAttribute;
  }

  // group_search_scope - computed: true, optional: true, required: false
  private _groupSearchScope?: string; 
  public get groupSearchScope() {
    return this.getStringAttribute('group_search_scope');
  }
  public set groupSearchScope(value: string) {
    this._groupSearchScope = value;
  }
  public resetGroupSearchScope() {
    this._groupSearchScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchScopeInput() {
    return this._groupSearchScope;
  }

  // groupnet - computed: true, optional: true, required: false
  private _groupnet?: string; 
  public get groupnet() {
    return this.getStringAttribute('groupnet');
  }
  public set groupnet(value: string) {
    this._groupnet = value;
  }
  public resetGroupnet() {
    this._groupnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnetInput() {
    return this._groupnet;
  }

  // home_directory_template - computed: true, optional: true, required: false
  private _homeDirectoryTemplate?: string; 
  public get homeDirectoryTemplate() {
    return this.getStringAttribute('home_directory_template');
  }
  public set homeDirectoryTemplate(value: string) {
    this._homeDirectoryTemplate = value;
  }
  public resetHomeDirectoryTemplate() {
    this._homeDirectoryTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryTemplateInput() {
    return this._homeDirectoryTemplate;
  }

  // homedir_attribute - computed: true, optional: true, required: false
  private _homedirAttribute?: string; 
  public get homedirAttribute() {
    return this.getStringAttribute('homedir_attribute');
  }
  public set homedirAttribute(value: string) {
    this._homedirAttribute = value;
  }
  public resetHomedirAttribute() {
    this._homedirAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homedirAttributeInput() {
    return this._homedirAttribute;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_tls_errors - computed: true, optional: true, required: false
  private _ignoreTlsErrors?: boolean | cdktf.IResolvable; 
  public get ignoreTlsErrors() {
    return this.getBooleanAttribute('ignore_tls_errors');
  }
  public set ignoreTlsErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreTlsErrors = value;
  }
  public resetIgnoreTlsErrors() {
    this._ignoreTlsErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTlsErrorsInput() {
    return this._ignoreTlsErrors;
  }

  // ignore_unresolvable_server_urls - computed: false, optional: true, required: false
  private _ignoreUnresolvableServerUrls?: boolean | cdktf.IResolvable; 
  public get ignoreUnresolvableServerUrls() {
    return this.getBooleanAttribute('ignore_unresolvable_server_urls');
  }
  public set ignoreUnresolvableServerUrls(value: boolean | cdktf.IResolvable) {
    this._ignoreUnresolvableServerUrls = value;
  }
  public resetIgnoreUnresolvableServerUrls() {
    this._ignoreUnresolvableServerUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnresolvableServerUrlsInput() {
    return this._ignoreUnresolvableServerUrls;
  }

  // listable_groups - computed: true, optional: true, required: false
  private _listableGroups?: string[]; 
  public get listableGroups() {
    return this.getListAttribute('listable_groups');
  }
  public set listableGroups(value: string[]) {
    this._listableGroups = value;
  }
  public resetListableGroups() {
    this._listableGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listableGroupsInput() {
    return this._listableGroups;
  }

  // listable_users - computed: true, optional: true, required: false
  private _listableUsers?: string[]; 
  public get listableUsers() {
    return this.getListAttribute('listable_users');
  }
  public set listableUsers(value: string[]) {
    this._listableUsers = value;
  }
  public resetListableUsers() {
    this._listableUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listableUsersInput() {
    return this._listableUsers;
  }

  // login_shell - computed: true, optional: true, required: false
  private _loginShell?: string; 
  public get loginShell() {
    return this.getStringAttribute('login_shell');
  }
  public set loginShell(value: string) {
    this._loginShell = value;
  }
  public resetLoginShell() {
    this._loginShell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginShellInput() {
    return this._loginShell;
  }

  // member_lookup_method - computed: true, optional: true, required: false
  private _memberLookupMethod?: string; 
  public get memberLookupMethod() {
    return this.getStringAttribute('member_lookup_method');
  }
  public set memberLookupMethod(value: string) {
    this._memberLookupMethod = value;
  }
  public resetMemberLookupMethod() {
    this._memberLookupMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberLookupMethodInput() {
    return this._memberLookupMethod;
  }

  // member_of_attribute - computed: true, optional: true, required: false
  private _memberOfAttribute?: string; 
  public get memberOfAttribute() {
    return this.getStringAttribute('member_of_attribute');
  }
  public set memberOfAttribute(value: string) {
    this._memberOfAttribute = value;
  }
  public resetMemberOfAttribute() {
    this._memberOfAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberOfAttributeInput() {
    return this._memberOfAttribute;
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

  // name_attribute - computed: true, optional: true, required: false
  private _nameAttribute?: string; 
  public get nameAttribute() {
    return this.getStringAttribute('name_attribute');
  }
  public set nameAttribute(value: string) {
    this._nameAttribute = value;
  }
  public resetNameAttribute() {
    this._nameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAttributeInput() {
    return this._nameAttribute;
  }

  // netgroup_base_dn - computed: true, optional: true, required: false
  private _netgroupBaseDn?: string; 
  public get netgroupBaseDn() {
    return this.getStringAttribute('netgroup_base_dn');
  }
  public set netgroupBaseDn(value: string) {
    this._netgroupBaseDn = value;
  }
  public resetNetgroupBaseDn() {
    this._netgroupBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netgroupBaseDnInput() {
    return this._netgroupBaseDn;
  }

  // netgroup_filter - computed: true, optional: true, required: false
  private _netgroupFilter?: string; 
  public get netgroupFilter() {
    return this.getStringAttribute('netgroup_filter');
  }
  public set netgroupFilter(value: string) {
    this._netgroupFilter = value;
  }
  public resetNetgroupFilter() {
    this._netgroupFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netgroupFilterInput() {
    return this._netgroupFilter;
  }

  // netgroup_members_attribute - computed: true, optional: true, required: false
  private _netgroupMembersAttribute?: string; 
  public get netgroupMembersAttribute() {
    return this.getStringAttribute('netgroup_members_attribute');
  }
  public set netgroupMembersAttribute(value: string) {
    this._netgroupMembersAttribute = value;
  }
  public resetNetgroupMembersAttribute() {
    this._netgroupMembersAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netgroupMembersAttributeInput() {
    return this._netgroupMembersAttribute;
  }

  // netgroup_search_scope - computed: true, optional: true, required: false
  private _netgroupSearchScope?: string; 
  public get netgroupSearchScope() {
    return this.getStringAttribute('netgroup_search_scope');
  }
  public set netgroupSearchScope(value: string) {
    this._netgroupSearchScope = value;
  }
  public resetNetgroupSearchScope() {
    this._netgroupSearchScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netgroupSearchScopeInput() {
    return this._netgroupSearchScope;
  }

  // netgroup_triple_attribute - computed: true, optional: true, required: false
  private _netgroupTripleAttribute?: string; 
  public get netgroupTripleAttribute() {
    return this.getStringAttribute('netgroup_triple_attribute');
  }
  public set netgroupTripleAttribute(value: string) {
    this._netgroupTripleAttribute = value;
  }
  public resetNetgroupTripleAttribute() {
    this._netgroupTripleAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netgroupTripleAttributeInput() {
    return this._netgroupTripleAttribute;
  }

  // normalize_groups - computed: true, optional: true, required: false
  private _normalizeGroups?: boolean | cdktf.IResolvable; 
  public get normalizeGroups() {
    return this.getBooleanAttribute('normalize_groups');
  }
  public set normalizeGroups(value: boolean | cdktf.IResolvable) {
    this._normalizeGroups = value;
  }
  public resetNormalizeGroups() {
    this._normalizeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizeGroupsInput() {
    return this._normalizeGroups;
  }

  // normalize_users - computed: true, optional: true, required: false
  private _normalizeUsers?: boolean | cdktf.IResolvable; 
  public get normalizeUsers() {
    return this.getBooleanAttribute('normalize_users');
  }
  public set normalizeUsers(value: boolean | cdktf.IResolvable) {
    this._normalizeUsers = value;
  }
  public resetNormalizeUsers() {
    this._normalizeUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizeUsersInput() {
    return this._normalizeUsers;
  }

  // nt_password_attribute - computed: true, optional: true, required: false
  private _ntPasswordAttribute?: string; 
  public get ntPasswordAttribute() {
    return this.getStringAttribute('nt_password_attribute');
  }
  public set ntPasswordAttribute(value: string) {
    this._ntPasswordAttribute = value;
  }
  public resetNtPasswordAttribute() {
    this._ntPasswordAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntPasswordAttributeInput() {
    return this._ntPasswordAttribute;
  }

  // ntlm_support - computed: true, optional: true, required: false
  private _ntlmSupport?: string; 
  public get ntlmSupport() {
    return this.getStringAttribute('ntlm_support');
  }
  public set ntlmSupport(value: string) {
    this._ntlmSupport = value;
  }
  public resetNtlmSupport() {
    this._ntlmSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmSupportInput() {
    return this._ntlmSupport;
  }

  // ocsp_server_uris - computed: true, optional: true, required: false
  private _ocspServerUris?: string[]; 
  public get ocspServerUris() {
    return this.getListAttribute('ocsp_server_uris');
  }
  public set ocspServerUris(value: string[]) {
    this._ocspServerUris = value;
  }
  public resetOcspServerUris() {
    this._ocspServerUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspServerUrisInput() {
    return this._ocspServerUris;
  }

  // provider_domain - computed: true, optional: true, required: false
  private _providerDomain?: string; 
  public get providerDomain() {
    return this.getStringAttribute('provider_domain');
  }
  public set providerDomain(value: string) {
    this._providerDomain = value;
  }
  public resetProviderDomain() {
    this._providerDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerDomainInput() {
    return this._providerDomain;
  }

  // require_secure_connection - computed: true, optional: true, required: false
  private _requireSecureConnection?: boolean | cdktf.IResolvable; 
  public get requireSecureConnection() {
    return this.getBooleanAttribute('require_secure_connection');
  }
  public set requireSecureConnection(value: boolean | cdktf.IResolvable) {
    this._requireSecureConnection = value;
  }
  public resetRequireSecureConnection() {
    this._requireSecureConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSecureConnectionInput() {
    return this._requireSecureConnection;
  }

  // restrict_findable - computed: true, optional: true, required: false
  private _restrictFindable?: boolean | cdktf.IResolvable; 
  public get restrictFindable() {
    return this.getBooleanAttribute('restrict_findable');
  }
  public set restrictFindable(value: boolean | cdktf.IResolvable) {
    this._restrictFindable = value;
  }
  public resetRestrictFindable() {
    this._restrictFindable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictFindableInput() {
    return this._restrictFindable;
  }

  // restrict_listable - computed: true, optional: true, required: false
  private _restrictListable?: boolean | cdktf.IResolvable; 
  public get restrictListable() {
    return this.getBooleanAttribute('restrict_listable');
  }
  public set restrictListable(value: boolean | cdktf.IResolvable) {
    this._restrictListable = value;
  }
  public resetRestrictListable() {
    this._restrictListable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictListableInput() {
    return this._restrictListable;
  }

  // search_scope - computed: true, optional: true, required: false
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

  // search_timeout - computed: true, optional: true, required: false
  private _searchTimeout?: number; 
  public get searchTimeout() {
    return this.getNumberAttribute('search_timeout');
  }
  public set searchTimeout(value: number) {
    this._searchTimeout = value;
  }
  public resetSearchTimeout() {
    this._searchTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTimeoutInput() {
    return this._searchTimeout;
  }

  // server_uris - computed: false, optional: false, required: true
  private _serverUris?: string[]; 
  public get serverUris() {
    return this.getListAttribute('server_uris');
  }
  public set serverUris(value: string[]) {
    this._serverUris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrisInput() {
    return this._serverUris;
  }

  // shadow_expire_attribute - computed: true, optional: true, required: false
  private _shadowExpireAttribute?: string; 
  public get shadowExpireAttribute() {
    return this.getStringAttribute('shadow_expire_attribute');
  }
  public set shadowExpireAttribute(value: string) {
    this._shadowExpireAttribute = value;
  }
  public resetShadowExpireAttribute() {
    this._shadowExpireAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowExpireAttributeInput() {
    return this._shadowExpireAttribute;
  }

  // shadow_flag_attribute - computed: true, optional: true, required: false
  private _shadowFlagAttribute?: string; 
  public get shadowFlagAttribute() {
    return this.getStringAttribute('shadow_flag_attribute');
  }
  public set shadowFlagAttribute(value: string) {
    this._shadowFlagAttribute = value;
  }
  public resetShadowFlagAttribute() {
    this._shadowFlagAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowFlagAttributeInput() {
    return this._shadowFlagAttribute;
  }

  // shadow_inactive_attribute - computed: true, optional: true, required: false
  private _shadowInactiveAttribute?: string; 
  public get shadowInactiveAttribute() {
    return this.getStringAttribute('shadow_inactive_attribute');
  }
  public set shadowInactiveAttribute(value: string) {
    this._shadowInactiveAttribute = value;
  }
  public resetShadowInactiveAttribute() {
    this._shadowInactiveAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowInactiveAttributeInput() {
    return this._shadowInactiveAttribute;
  }

  // shadow_last_change_attribute - computed: true, optional: true, required: false
  private _shadowLastChangeAttribute?: string; 
  public get shadowLastChangeAttribute() {
    return this.getStringAttribute('shadow_last_change_attribute');
  }
  public set shadowLastChangeAttribute(value: string) {
    this._shadowLastChangeAttribute = value;
  }
  public resetShadowLastChangeAttribute() {
    this._shadowLastChangeAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowLastChangeAttributeInput() {
    return this._shadowLastChangeAttribute;
  }

  // shadow_max_attribute - computed: true, optional: true, required: false
  private _shadowMaxAttribute?: string; 
  public get shadowMaxAttribute() {
    return this.getStringAttribute('shadow_max_attribute');
  }
  public set shadowMaxAttribute(value: string) {
    this._shadowMaxAttribute = value;
  }
  public resetShadowMaxAttribute() {
    this._shadowMaxAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowMaxAttributeInput() {
    return this._shadowMaxAttribute;
  }

  // shadow_min_attribute - computed: true, optional: true, required: false
  private _shadowMinAttribute?: string; 
  public get shadowMinAttribute() {
    return this.getStringAttribute('shadow_min_attribute');
  }
  public set shadowMinAttribute(value: string) {
    this._shadowMinAttribute = value;
  }
  public resetShadowMinAttribute() {
    this._shadowMinAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowMinAttributeInput() {
    return this._shadowMinAttribute;
  }

  // shadow_user_filter - computed: true, optional: true, required: false
  private _shadowUserFilter?: string; 
  public get shadowUserFilter() {
    return this.getStringAttribute('shadow_user_filter');
  }
  public set shadowUserFilter(value: string) {
    this._shadowUserFilter = value;
  }
  public resetShadowUserFilter() {
    this._shadowUserFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowUserFilterInput() {
    return this._shadowUserFilter;
  }

  // shadow_warning_attribute - computed: true, optional: true, required: false
  private _shadowWarningAttribute?: string; 
  public get shadowWarningAttribute() {
    return this.getStringAttribute('shadow_warning_attribute');
  }
  public set shadowWarningAttribute(value: string) {
    this._shadowWarningAttribute = value;
  }
  public resetShadowWarningAttribute() {
    this._shadowWarningAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowWarningAttributeInput() {
    return this._shadowWarningAttribute;
  }

  // shell_attribute - computed: true, optional: true, required: false
  private _shellAttribute?: string; 
  public get shellAttribute() {
    return this.getStringAttribute('shell_attribute');
  }
  public set shellAttribute(value: string) {
    this._shellAttribute = value;
  }
  public resetShellAttribute() {
    this._shellAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellAttributeInput() {
    return this._shellAttribute;
  }

  // ssh_public_key_attribute - computed: true, optional: true, required: false
  private _sshPublicKeyAttribute?: string; 
  public get sshPublicKeyAttribute() {
    return this.getStringAttribute('ssh_public_key_attribute');
  }
  public set sshPublicKeyAttribute(value: string) {
    this._sshPublicKeyAttribute = value;
  }
  public resetSshPublicKeyAttribute() {
    this._sshPublicKeyAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyAttributeInput() {
    return this._sshPublicKeyAttribute;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // system - computed: true, optional: true, required: false
  private _system?: boolean | cdktf.IResolvable; 
  public get systemAttribute() {
    return this.getBooleanAttribute('system');
  }
  public set systemAttribute(value: boolean | cdktf.IResolvable) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // tls_protocol_min - computed: true, optional: true, required: false
  private _tlsProtocolMin?: string; 
  public get tlsProtocolMin() {
    return this.getStringAttribute('tls_protocol_min');
  }
  public set tlsProtocolMin(value: string) {
    this._tlsProtocolMin = value;
  }
  public resetTlsProtocolMin() {
    this._tlsProtocolMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsProtocolMinInput() {
    return this._tlsProtocolMin;
  }

  // tls_revocation_check_level - computed: true, optional: true, required: false
  private _tlsRevocationCheckLevel?: string; 
  public get tlsRevocationCheckLevel() {
    return this.getStringAttribute('tls_revocation_check_level');
  }
  public set tlsRevocationCheckLevel(value: string) {
    this._tlsRevocationCheckLevel = value;
  }
  public resetTlsRevocationCheckLevel() {
    this._tlsRevocationCheckLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRevocationCheckLevelInput() {
    return this._tlsRevocationCheckLevel;
  }

  // uid_attribute - computed: true, optional: true, required: false
  private _uidAttribute?: string; 
  public get uidAttribute() {
    return this.getStringAttribute('uid_attribute');
  }
  public set uidAttribute(value: string) {
    this._uidAttribute = value;
  }
  public resetUidAttribute() {
    this._uidAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidAttributeInput() {
    return this._uidAttribute;
  }

  // unfindable_groups - computed: true, optional: true, required: false
  private _unfindableGroups?: string[]; 
  public get unfindableGroups() {
    return this.getListAttribute('unfindable_groups');
  }
  public set unfindableGroups(value: string[]) {
    this._unfindableGroups = value;
  }
  public resetUnfindableGroups() {
    this._unfindableGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unfindableGroupsInput() {
    return this._unfindableGroups;
  }

  // unfindable_users - computed: true, optional: true, required: false
  private _unfindableUsers?: string[]; 
  public get unfindableUsers() {
    return this.getListAttribute('unfindable_users');
  }
  public set unfindableUsers(value: string[]) {
    this._unfindableUsers = value;
  }
  public resetUnfindableUsers() {
    this._unfindableUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unfindableUsersInput() {
    return this._unfindableUsers;
  }

  // unique_group_members_attribute - computed: true, optional: true, required: false
  private _uniqueGroupMembersAttribute?: string; 
  public get uniqueGroupMembersAttribute() {
    return this.getStringAttribute('unique_group_members_attribute');
  }
  public set uniqueGroupMembersAttribute(value: string) {
    this._uniqueGroupMembersAttribute = value;
  }
  public resetUniqueGroupMembersAttribute() {
    this._uniqueGroupMembersAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueGroupMembersAttributeInput() {
    return this._uniqueGroupMembersAttribute;
  }

  // unlistable_groups - computed: true, optional: true, required: false
  private _unlistableGroups?: string[]; 
  public get unlistableGroups() {
    return this.getListAttribute('unlistable_groups');
  }
  public set unlistableGroups(value: string[]) {
    this._unlistableGroups = value;
  }
  public resetUnlistableGroups() {
    this._unlistableGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlistableGroupsInput() {
    return this._unlistableGroups;
  }

  // unlistable_users - computed: true, optional: true, required: false
  private _unlistableUsers?: string[]; 
  public get unlistableUsers() {
    return this.getListAttribute('unlistable_users');
  }
  public set unlistableUsers(value: string[]) {
    this._unlistableUsers = value;
  }
  public resetUnlistableUsers() {
    this._unlistableUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlistableUsersInput() {
    return this._unlistableUsers;
  }

  // user_base_dn - computed: true, optional: true, required: false
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

  // user_domain - computed: true, optional: true, required: false
  private _userDomain?: string; 
  public get userDomain() {
    return this.getStringAttribute('user_domain');
  }
  public set userDomain(value: string) {
    this._userDomain = value;
  }
  public resetUserDomain() {
    this._userDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainInput() {
    return this._userDomain;
  }

  // user_filter - computed: true, optional: true, required: false
  private _userFilter?: string; 
  public get userFilter() {
    return this.getStringAttribute('user_filter');
  }
  public set userFilter(value: string) {
    this._userFilter = value;
  }
  public resetUserFilter() {
    this._userFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFilterInput() {
    return this._userFilter;
  }

  // user_search_scope - computed: true, optional: true, required: false
  private _userSearchScope?: string; 
  public get userSearchScope() {
    return this.getStringAttribute('user_search_scope');
  }
  public set userSearchScope(value: string) {
    this._userSearchScope = value;
  }
  public resetUserSearchScope() {
    this._userSearchScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchScopeInput() {
    return this._userSearchScope;
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alternate_security_identities_attribute: cdktf.stringToTerraform(this._alternateSecurityIdentitiesAttribute),
      authentication: cdktf.booleanToTerraform(this._authentication),
      balance_servers: cdktf.booleanToTerraform(this._balanceServers),
      base_dn: cdktf.stringToTerraform(this._baseDn),
      bind_dn: cdktf.stringToTerraform(this._bindDn),
      bind_mechanism: cdktf.stringToTerraform(this._bindMechanism),
      bind_timeout: cdktf.numberToTerraform(this._bindTimeout),
      certificate_authority_file: cdktf.stringToTerraform(this._certificateAuthorityFile),
      check_online_interval: cdktf.numberToTerraform(this._checkOnlineInterval),
      cn_attribute: cdktf.stringToTerraform(this._cnAttribute),
      create_home_directory: cdktf.booleanToTerraform(this._createHomeDirectory),
      crypt_password_attribute: cdktf.stringToTerraform(this._cryptPasswordAttribute),
      email_attribute: cdktf.stringToTerraform(this._emailAttribute),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enumerate_groups: cdktf.booleanToTerraform(this._enumerateGroups),
      enumerate_users: cdktf.booleanToTerraform(this._enumerateUsers),
      findable_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._findableGroups),
      findable_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._findableUsers),
      gecos_attribute: cdktf.stringToTerraform(this._gecosAttribute),
      gid_attribute: cdktf.stringToTerraform(this._gidAttribute),
      group_base_dn: cdktf.stringToTerraform(this._groupBaseDn),
      group_domain: cdktf.stringToTerraform(this._groupDomain),
      group_filter: cdktf.stringToTerraform(this._groupFilter),
      group_members_attribute: cdktf.stringToTerraform(this._groupMembersAttribute),
      group_search_scope: cdktf.stringToTerraform(this._groupSearchScope),
      groupnet: cdktf.stringToTerraform(this._groupnet),
      home_directory_template: cdktf.stringToTerraform(this._homeDirectoryTemplate),
      homedir_attribute: cdktf.stringToTerraform(this._homedirAttribute),
      ignore_tls_errors: cdktf.booleanToTerraform(this._ignoreTlsErrors),
      ignore_unresolvable_server_urls: cdktf.booleanToTerraform(this._ignoreUnresolvableServerUrls),
      listable_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._listableGroups),
      listable_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._listableUsers),
      login_shell: cdktf.stringToTerraform(this._loginShell),
      member_lookup_method: cdktf.stringToTerraform(this._memberLookupMethod),
      member_of_attribute: cdktf.stringToTerraform(this._memberOfAttribute),
      name: cdktf.stringToTerraform(this._name),
      name_attribute: cdktf.stringToTerraform(this._nameAttribute),
      netgroup_base_dn: cdktf.stringToTerraform(this._netgroupBaseDn),
      netgroup_filter: cdktf.stringToTerraform(this._netgroupFilter),
      netgroup_members_attribute: cdktf.stringToTerraform(this._netgroupMembersAttribute),
      netgroup_search_scope: cdktf.stringToTerraform(this._netgroupSearchScope),
      netgroup_triple_attribute: cdktf.stringToTerraform(this._netgroupTripleAttribute),
      normalize_groups: cdktf.booleanToTerraform(this._normalizeGroups),
      normalize_users: cdktf.booleanToTerraform(this._normalizeUsers),
      nt_password_attribute: cdktf.stringToTerraform(this._ntPasswordAttribute),
      ntlm_support: cdktf.stringToTerraform(this._ntlmSupport),
      ocsp_server_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ocspServerUris),
      provider_domain: cdktf.stringToTerraform(this._providerDomain),
      require_secure_connection: cdktf.booleanToTerraform(this._requireSecureConnection),
      restrict_findable: cdktf.booleanToTerraform(this._restrictFindable),
      restrict_listable: cdktf.booleanToTerraform(this._restrictListable),
      search_scope: cdktf.stringToTerraform(this._searchScope),
      search_timeout: cdktf.numberToTerraform(this._searchTimeout),
      server_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverUris),
      shadow_expire_attribute: cdktf.stringToTerraform(this._shadowExpireAttribute),
      shadow_flag_attribute: cdktf.stringToTerraform(this._shadowFlagAttribute),
      shadow_inactive_attribute: cdktf.stringToTerraform(this._shadowInactiveAttribute),
      shadow_last_change_attribute: cdktf.stringToTerraform(this._shadowLastChangeAttribute),
      shadow_max_attribute: cdktf.stringToTerraform(this._shadowMaxAttribute),
      shadow_min_attribute: cdktf.stringToTerraform(this._shadowMinAttribute),
      shadow_user_filter: cdktf.stringToTerraform(this._shadowUserFilter),
      shadow_warning_attribute: cdktf.stringToTerraform(this._shadowWarningAttribute),
      shell_attribute: cdktf.stringToTerraform(this._shellAttribute),
      ssh_public_key_attribute: cdktf.stringToTerraform(this._sshPublicKeyAttribute),
      status: cdktf.stringToTerraform(this._status),
      system: cdktf.booleanToTerraform(this._system),
      tls_protocol_min: cdktf.stringToTerraform(this._tlsProtocolMin),
      tls_revocation_check_level: cdktf.stringToTerraform(this._tlsRevocationCheckLevel),
      uid_attribute: cdktf.stringToTerraform(this._uidAttribute),
      unfindable_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._unfindableGroups),
      unfindable_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._unfindableUsers),
      unique_group_members_attribute: cdktf.stringToTerraform(this._uniqueGroupMembersAttribute),
      unlistable_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._unlistableGroups),
      unlistable_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._unlistableUsers),
      user_base_dn: cdktf.stringToTerraform(this._userBaseDn),
      user_domain: cdktf.stringToTerraform(this._userDomain),
      user_filter: cdktf.stringToTerraform(this._userFilter),
      user_search_scope: cdktf.stringToTerraform(this._userSearchScope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternate_security_identities_attribute: {
        value: cdktf.stringToHclTerraform(this._alternateSecurityIdentitiesAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: cdktf.booleanToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      balance_servers: {
        value: cdktf.booleanToHclTerraform(this._balanceServers),
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
      bind_mechanism: {
        value: cdktf.stringToHclTerraform(this._bindMechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_timeout: {
        value: cdktf.numberToHclTerraform(this._bindTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      certificate_authority_file: {
        value: cdktf.stringToHclTerraform(this._certificateAuthorityFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_online_interval: {
        value: cdktf.numberToHclTerraform(this._checkOnlineInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cn_attribute: {
        value: cdktf.stringToHclTerraform(this._cnAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_home_directory: {
        value: cdktf.booleanToHclTerraform(this._createHomeDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      crypt_password_attribute: {
        value: cdktf.stringToHclTerraform(this._cryptPasswordAttribute),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enumerate_groups: {
        value: cdktf.booleanToHclTerraform(this._enumerateGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enumerate_users: {
        value: cdktf.booleanToHclTerraform(this._enumerateUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      findable_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._findableGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      findable_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._findableUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      gecos_attribute: {
        value: cdktf.stringToHclTerraform(this._gecosAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gid_attribute: {
        value: cdktf.stringToHclTerraform(this._gidAttribute),
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
      group_domain: {
        value: cdktf.stringToHclTerraform(this._groupDomain),
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
      group_members_attribute: {
        value: cdktf.stringToHclTerraform(this._groupMembersAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_search_scope: {
        value: cdktf.stringToHclTerraform(this._groupSearchScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupnet: {
        value: cdktf.stringToHclTerraform(this._groupnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      home_directory_template: {
        value: cdktf.stringToHclTerraform(this._homeDirectoryTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      homedir_attribute: {
        value: cdktf.stringToHclTerraform(this._homedirAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_tls_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreTlsErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_unresolvable_server_urls: {
        value: cdktf.booleanToHclTerraform(this._ignoreUnresolvableServerUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      listable_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._listableGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      listable_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._listableUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      login_shell: {
        value: cdktf.stringToHclTerraform(this._loginShell),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_lookup_method: {
        value: cdktf.stringToHclTerraform(this._memberLookupMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_of_attribute: {
        value: cdktf.stringToHclTerraform(this._memberOfAttribute),
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
      name_attribute: {
        value: cdktf.stringToHclTerraform(this._nameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netgroup_base_dn: {
        value: cdktf.stringToHclTerraform(this._netgroupBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netgroup_filter: {
        value: cdktf.stringToHclTerraform(this._netgroupFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netgroup_members_attribute: {
        value: cdktf.stringToHclTerraform(this._netgroupMembersAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netgroup_search_scope: {
        value: cdktf.stringToHclTerraform(this._netgroupSearchScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netgroup_triple_attribute: {
        value: cdktf.stringToHclTerraform(this._netgroupTripleAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      normalize_groups: {
        value: cdktf.booleanToHclTerraform(this._normalizeGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      normalize_users: {
        value: cdktf.booleanToHclTerraform(this._normalizeUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nt_password_attribute: {
        value: cdktf.stringToHclTerraform(this._ntPasswordAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntlm_support: {
        value: cdktf.stringToHclTerraform(this._ntlmSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_server_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ocspServerUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      provider_domain: {
        value: cdktf.stringToHclTerraform(this._providerDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_secure_connection: {
        value: cdktf.booleanToHclTerraform(this._requireSecureConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_findable: {
        value: cdktf.booleanToHclTerraform(this._restrictFindable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_listable: {
        value: cdktf.booleanToHclTerraform(this._restrictListable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      search_scope: {
        value: cdktf.stringToHclTerraform(this._searchScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_timeout: {
        value: cdktf.numberToHclTerraform(this._searchTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shadow_expire_attribute: {
        value: cdktf.stringToHclTerraform(this._shadowExpireAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shadow_flag_attribute: {
        value: cdktf.stringToHclTerraform(this._shadowFlagAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shadow_inactive_attribute: {
        value: cdktf.stringToHclTerraform(this._shadowInactiveAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shadow_last_change_attribute: {
        value: cdktf.stringToHclTerraform(this._shadowLastChangeAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shadow_max_attribute: {
        value: cdktf.stringToHclTerraform(this._shadowMaxAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shadow_min_attribute: {
        value: cdktf.stringToHclTerraform(this._shadowMinAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shadow_user_filter: {
        value: cdktf.stringToHclTerraform(this._shadowUserFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shadow_warning_attribute: {
        value: cdktf.stringToHclTerraform(this._shadowWarningAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shell_attribute: {
        value: cdktf.stringToHclTerraform(this._shellAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key_attribute: {
        value: cdktf.stringToHclTerraform(this._sshPublicKeyAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system: {
        value: cdktf.booleanToHclTerraform(this._system),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_protocol_min: {
        value: cdktf.stringToHclTerraform(this._tlsProtocolMin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_revocation_check_level: {
        value: cdktf.stringToHclTerraform(this._tlsRevocationCheckLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid_attribute: {
        value: cdktf.stringToHclTerraform(this._uidAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unfindable_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._unfindableGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      unfindable_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._unfindableUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      unique_group_members_attribute: {
        value: cdktf.stringToHclTerraform(this._uniqueGroupMembersAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unlistable_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._unlistableGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      unlistable_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._unlistableUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_base_dn: {
        value: cdktf.stringToHclTerraform(this._userBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_domain: {
        value: cdktf.stringToHclTerraform(this._userDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_filter: {
        value: cdktf.stringToHclTerraform(this._userFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_search_scope: {
        value: cdktf.stringToHclTerraform(this._userSearchScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
