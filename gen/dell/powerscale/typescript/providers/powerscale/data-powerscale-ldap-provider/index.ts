// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/ldap_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleLdapProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/ldap_provider#filter DataPowerscaleLdapProvider#filter}
  */
  readonly filter?: DataPowerscaleLdapProviderFilter;
}
export interface DataPowerscaleLdapProviderLdapProviders {
}

export function dataPowerscaleLdapProviderLdapProvidersToTerraform(struct?: DataPowerscaleLdapProviderLdapProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleLdapProviderLdapProvidersToHclTerraform(struct?: DataPowerscaleLdapProviderLdapProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleLdapProviderLdapProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleLdapProviderLdapProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleLdapProviderLdapProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alternate_security_identities_attribute - computed: true, optional: false, required: false
  public get alternateSecurityIdentitiesAttribute() {
    return this.getStringAttribute('alternate_security_identities_attribute');
  }

  // authentication - computed: true, optional: false, required: false
  public get authentication() {
    return this.getBooleanAttribute('authentication');
  }

  // balance_servers - computed: true, optional: false, required: false
  public get balanceServers() {
    return this.getBooleanAttribute('balance_servers');
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // bind_dn - computed: true, optional: false, required: false
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }

  // bind_mechanism - computed: true, optional: false, required: false
  public get bindMechanism() {
    return this.getStringAttribute('bind_mechanism');
  }

  // bind_timeout - computed: true, optional: false, required: false
  public get bindTimeout() {
    return this.getNumberAttribute('bind_timeout');
  }

  // certificate_authority_file - computed: true, optional: false, required: false
  public get certificateAuthorityFile() {
    return this.getStringAttribute('certificate_authority_file');
  }

  // check_online_interval - computed: true, optional: false, required: false
  public get checkOnlineInterval() {
    return this.getNumberAttribute('check_online_interval');
  }

  // cn_attribute - computed: true, optional: false, required: false
  public get cnAttribute() {
    return this.getStringAttribute('cn_attribute');
  }

  // create_home_directory - computed: true, optional: false, required: false
  public get createHomeDirectory() {
    return this.getBooleanAttribute('create_home_directory');
  }

  // crypt_password_attribute - computed: true, optional: false, required: false
  public get cryptPasswordAttribute() {
    return this.getStringAttribute('crypt_password_attribute');
  }

  // email_attribute - computed: true, optional: false, required: false
  public get emailAttribute() {
    return this.getStringAttribute('email_attribute');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // enumerate_groups - computed: true, optional: false, required: false
  public get enumerateGroups() {
    return this.getBooleanAttribute('enumerate_groups');
  }

  // enumerate_users - computed: true, optional: false, required: false
  public get enumerateUsers() {
    return this.getBooleanAttribute('enumerate_users');
  }

  // findable_groups - computed: true, optional: false, required: false
  public get findableGroups() {
    return this.getListAttribute('findable_groups');
  }

  // findable_users - computed: true, optional: false, required: false
  public get findableUsers() {
    return this.getListAttribute('findable_users');
  }

  // gecos_attribute - computed: true, optional: false, required: false
  public get gecosAttribute() {
    return this.getStringAttribute('gecos_attribute');
  }

  // gid_attribute - computed: true, optional: false, required: false
  public get gidAttribute() {
    return this.getStringAttribute('gid_attribute');
  }

  // group_base_dn - computed: true, optional: false, required: false
  public get groupBaseDn() {
    return this.getStringAttribute('group_base_dn');
  }

  // group_domain - computed: true, optional: false, required: false
  public get groupDomain() {
    return this.getStringAttribute('group_domain');
  }

  // group_filter - computed: true, optional: false, required: false
  public get groupFilter() {
    return this.getStringAttribute('group_filter');
  }

  // group_members_attribute - computed: true, optional: false, required: false
  public get groupMembersAttribute() {
    return this.getStringAttribute('group_members_attribute');
  }

  // group_search_scope - computed: true, optional: false, required: false
  public get groupSearchScope() {
    return this.getStringAttribute('group_search_scope');
  }

  // groupnet - computed: true, optional: false, required: false
  public get groupnet() {
    return this.getStringAttribute('groupnet');
  }

  // home_directory_template - computed: true, optional: false, required: false
  public get homeDirectoryTemplate() {
    return this.getStringAttribute('home_directory_template');
  }

  // homedir_attribute - computed: true, optional: false, required: false
  public get homedirAttribute() {
    return this.getStringAttribute('homedir_attribute');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_tls_errors - computed: true, optional: false, required: false
  public get ignoreTlsErrors() {
    return this.getBooleanAttribute('ignore_tls_errors');
  }

  // listable_groups - computed: true, optional: false, required: false
  public get listableGroups() {
    return this.getListAttribute('listable_groups');
  }

  // listable_users - computed: true, optional: false, required: false
  public get listableUsers() {
    return this.getListAttribute('listable_users');
  }

  // login_shell - computed: true, optional: false, required: false
  public get loginShell() {
    return this.getStringAttribute('login_shell');
  }

  // member_lookup_method - computed: true, optional: false, required: false
  public get memberLookupMethod() {
    return this.getStringAttribute('member_lookup_method');
  }

  // member_of_attribute - computed: true, optional: false, required: false
  public get memberOfAttribute() {
    return this.getStringAttribute('member_of_attribute');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_attribute - computed: true, optional: false, required: false
  public get nameAttribute() {
    return this.getStringAttribute('name_attribute');
  }

  // netgroup_base_dn - computed: true, optional: false, required: false
  public get netgroupBaseDn() {
    return this.getStringAttribute('netgroup_base_dn');
  }

  // netgroup_filter - computed: true, optional: false, required: false
  public get netgroupFilter() {
    return this.getStringAttribute('netgroup_filter');
  }

  // netgroup_members_attribute - computed: true, optional: false, required: false
  public get netgroupMembersAttribute() {
    return this.getStringAttribute('netgroup_members_attribute');
  }

  // netgroup_search_scope - computed: true, optional: false, required: false
  public get netgroupSearchScope() {
    return this.getStringAttribute('netgroup_search_scope');
  }

  // netgroup_triple_attribute - computed: true, optional: false, required: false
  public get netgroupTripleAttribute() {
    return this.getStringAttribute('netgroup_triple_attribute');
  }

  // normalize_groups - computed: true, optional: false, required: false
  public get normalizeGroups() {
    return this.getBooleanAttribute('normalize_groups');
  }

  // normalize_users - computed: true, optional: false, required: false
  public get normalizeUsers() {
    return this.getBooleanAttribute('normalize_users');
  }

  // nt_password_attribute - computed: true, optional: false, required: false
  public get ntPasswordAttribute() {
    return this.getStringAttribute('nt_password_attribute');
  }

  // ntlm_support - computed: true, optional: false, required: false
  public get ntlmSupport() {
    return this.getStringAttribute('ntlm_support');
  }

  // ocsp_server_uris - computed: true, optional: false, required: false
  public get ocspServerUris() {
    return this.getListAttribute('ocsp_server_uris');
  }

  // provider_domain - computed: true, optional: false, required: false
  public get providerDomain() {
    return this.getStringAttribute('provider_domain');
  }

  // require_secure_connection - computed: true, optional: false, required: false
  public get requireSecureConnection() {
    return this.getBooleanAttribute('require_secure_connection');
  }

  // restrict_findable - computed: true, optional: false, required: false
  public get restrictFindable() {
    return this.getBooleanAttribute('restrict_findable');
  }

  // restrict_listable - computed: true, optional: false, required: false
  public get restrictListable() {
    return this.getBooleanAttribute('restrict_listable');
  }

  // search_scope - computed: true, optional: false, required: false
  public get searchScope() {
    return this.getStringAttribute('search_scope');
  }

  // search_timeout - computed: true, optional: false, required: false
  public get searchTimeout() {
    return this.getNumberAttribute('search_timeout');
  }

  // server_uris - computed: true, optional: false, required: false
  public get serverUris() {
    return this.getListAttribute('server_uris');
  }

  // shadow_expire_attribute - computed: true, optional: false, required: false
  public get shadowExpireAttribute() {
    return this.getStringAttribute('shadow_expire_attribute');
  }

  // shadow_flag_attribute - computed: true, optional: false, required: false
  public get shadowFlagAttribute() {
    return this.getStringAttribute('shadow_flag_attribute');
  }

  // shadow_inactive_attribute - computed: true, optional: false, required: false
  public get shadowInactiveAttribute() {
    return this.getStringAttribute('shadow_inactive_attribute');
  }

  // shadow_last_change_attribute - computed: true, optional: false, required: false
  public get shadowLastChangeAttribute() {
    return this.getStringAttribute('shadow_last_change_attribute');
  }

  // shadow_max_attribute - computed: true, optional: false, required: false
  public get shadowMaxAttribute() {
    return this.getStringAttribute('shadow_max_attribute');
  }

  // shadow_min_attribute - computed: true, optional: false, required: false
  public get shadowMinAttribute() {
    return this.getStringAttribute('shadow_min_attribute');
  }

  // shadow_user_filter - computed: true, optional: false, required: false
  public get shadowUserFilter() {
    return this.getStringAttribute('shadow_user_filter');
  }

  // shadow_warning_attribute - computed: true, optional: false, required: false
  public get shadowWarningAttribute() {
    return this.getStringAttribute('shadow_warning_attribute');
  }

  // shell_attribute - computed: true, optional: false, required: false
  public get shellAttribute() {
    return this.getStringAttribute('shell_attribute');
  }

  // ssh_public_key_attribute - computed: true, optional: false, required: false
  public get sshPublicKeyAttribute() {
    return this.getStringAttribute('ssh_public_key_attribute');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getBooleanAttribute('system');
  }

  // tls_protocol_min - computed: true, optional: false, required: false
  public get tlsProtocolMin() {
    return this.getStringAttribute('tls_protocol_min');
  }

  // tls_revocation_check_level - computed: true, optional: false, required: false
  public get tlsRevocationCheckLevel() {
    return this.getStringAttribute('tls_revocation_check_level');
  }

  // uid_attribute - computed: true, optional: false, required: false
  public get uidAttribute() {
    return this.getStringAttribute('uid_attribute');
  }

  // unfindable_groups - computed: true, optional: false, required: false
  public get unfindableGroups() {
    return this.getListAttribute('unfindable_groups');
  }

  // unfindable_users - computed: true, optional: false, required: false
  public get unfindableUsers() {
    return this.getListAttribute('unfindable_users');
  }

  // unique_group_members_attribute - computed: true, optional: false, required: false
  public get uniqueGroupMembersAttribute() {
    return this.getStringAttribute('unique_group_members_attribute');
  }

  // unlistable_groups - computed: true, optional: false, required: false
  public get unlistableGroups() {
    return this.getListAttribute('unlistable_groups');
  }

  // unlistable_users - computed: true, optional: false, required: false
  public get unlistableUsers() {
    return this.getListAttribute('unlistable_users');
  }

  // user_base_dn - computed: true, optional: false, required: false
  public get userBaseDn() {
    return this.getStringAttribute('user_base_dn');
  }

  // user_domain - computed: true, optional: false, required: false
  public get userDomain() {
    return this.getStringAttribute('user_domain');
  }

  // user_filter - computed: true, optional: false, required: false
  public get userFilter() {
    return this.getStringAttribute('user_filter');
  }

  // user_search_scope - computed: true, optional: false, required: false
  public get userSearchScope() {
    return this.getStringAttribute('user_search_scope');
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
}

export class DataPowerscaleLdapProviderLdapProvidersList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleLdapProviderLdapProvidersOutputReference {
    return new DataPowerscaleLdapProviderLdapProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleLdapProviderFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/ldap_provider#names DataPowerscaleLdapProvider#names}
  */
  readonly names?: string[];
  /**
  * If specified as "effective" or not specified, all fields are returned.  If specified as "user", only fields with non-default values are shown.  If specified as "default", the original values are returned. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/ldap_provider#scope DataPowerscaleLdapProvider#scope}
  */
  readonly scope?: string;
}

export function dataPowerscaleLdapProviderFilterToTerraform(struct?: DataPowerscaleLdapProviderFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dataPowerscaleLdapProviderFilterToHclTerraform(struct?: DataPowerscaleLdapProviderFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleLdapProviderFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleLdapProviderFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleLdapProviderFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
      this._scope = value.scope;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/ldap_provider powerscale_ldap_provider}
*/
export class DataPowerscaleLdapProvider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_ldap_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleLdapProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleLdapProvider to import
  * @param importFromId The id of the existing DataPowerscaleLdapProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/ldap_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleLdapProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_ldap_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/ldap_provider powerscale_ldap_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleLdapProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleLdapProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_ldap_provider',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap_providers - computed: true, optional: false, required: false
  private _ldapProviders = new DataPowerscaleLdapProviderLdapProvidersList(this, "ldap_providers", false);
  public get ldapProviders() {
    return this._ldapProviders;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleLdapProviderFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleLdapProviderFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerscaleLdapProviderFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleLdapProviderFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleLdapProviderFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
