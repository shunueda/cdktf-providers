// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/adsprovider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleAdsproviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/adsprovider#filter DataPowerscaleAdsprovider#filter}
  */
  readonly filter?: DataPowerscaleAdsproviderFilter;
}
export interface DataPowerscaleAdsproviderAdsProvidersDetails {
}

export function dataPowerscaleAdsproviderAdsProvidersDetailsToTerraform(struct?: DataPowerscaleAdsproviderAdsProvidersDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleAdsproviderAdsProvidersDetailsToHclTerraform(struct?: DataPowerscaleAdsproviderAdsProvidersDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleAdsproviderAdsProvidersDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleAdsproviderAdsProvidersDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleAdsproviderAdsProvidersDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocate_gids - computed: true, optional: false, required: false
  public get allocateGids() {
    return this.getBooleanAttribute('allocate_gids');
  }

  // allocate_uids - computed: true, optional: false, required: false
  public get allocateUids() {
    return this.getBooleanAttribute('allocate_uids');
  }

  // assume_default_domain - computed: true, optional: false, required: false
  public get assumeDefaultDomain() {
    return this.getBooleanAttribute('assume_default_domain');
  }

  // authentication - computed: true, optional: false, required: false
  public get authentication() {
    return this.getBooleanAttribute('authentication');
  }

  // check_online_interval - computed: true, optional: false, required: false
  public get checkOnlineInterval() {
    return this.getNumberAttribute('check_online_interval');
  }

  // controller_time - computed: true, optional: false, required: false
  public get controllerTime() {
    return this.getNumberAttribute('controller_time');
  }

  // create_home_directory - computed: true, optional: false, required: false
  public get createHomeDirectory() {
    return this.getBooleanAttribute('create_home_directory');
  }

  // domain_offline_alerts - computed: true, optional: false, required: false
  public get domainOfflineAlerts() {
    return this.getBooleanAttribute('domain_offline_alerts');
  }

  // dup_spns - computed: true, optional: false, required: false
  public get dupSpns() {
    return this.getListAttribute('dup_spns');
  }

  // extra_expected_spns - computed: true, optional: false, required: false
  public get extraExpectedSpns() {
    return this.getListAttribute('extra_expected_spns');
  }

  // findable_groups - computed: true, optional: false, required: false
  public get findableGroups() {
    return this.getListAttribute('findable_groups');
  }

  // findable_users - computed: true, optional: false, required: false
  public get findableUsers() {
    return this.getListAttribute('findable_users');
  }

  // forest - computed: true, optional: false, required: false
  public get forest() {
    return this.getStringAttribute('forest');
  }

  // groupnet - computed: true, optional: false, required: false
  public get groupnet() {
    return this.getStringAttribute('groupnet');
  }

  // home_directory_template - computed: true, optional: false, required: false
  public get homeDirectoryTemplate() {
    return this.getStringAttribute('home_directory_template');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_all_trusts - computed: true, optional: false, required: false
  public get ignoreAllTrusts() {
    return this.getBooleanAttribute('ignore_all_trusts');
  }

  // ignored_trusted_domains - computed: true, optional: false, required: false
  public get ignoredTrustedDomains() {
    return this.getListAttribute('ignored_trusted_domains');
  }

  // include_trusted_domains - computed: true, optional: false, required: false
  public get includeTrustedDomains() {
    return this.getListAttribute('include_trusted_domains');
  }

  // instance - computed: true, optional: false, required: false
  public get instance() {
    return this.getStringAttribute('instance');
  }

  // ldap_sign_and_seal - computed: true, optional: false, required: false
  public get ldapSignAndSeal() {
    return this.getBooleanAttribute('ldap_sign_and_seal');
  }

  // login_shell - computed: true, optional: false, required: false
  public get loginShell() {
    return this.getStringAttribute('login_shell');
  }

  // lookup_domains - computed: true, optional: false, required: false
  public get lookupDomains() {
    return this.getListAttribute('lookup_domains');
  }

  // lookup_groups - computed: true, optional: false, required: false
  public get lookupGroups() {
    return this.getBooleanAttribute('lookup_groups');
  }

  // lookup_normalize_groups - computed: true, optional: false, required: false
  public get lookupNormalizeGroups() {
    return this.getBooleanAttribute('lookup_normalize_groups');
  }

  // lookup_normalize_users - computed: true, optional: false, required: false
  public get lookupNormalizeUsers() {
    return this.getBooleanAttribute('lookup_normalize_users');
  }

  // lookup_users - computed: true, optional: false, required: false
  public get lookupUsers() {
    return this.getBooleanAttribute('lookup_users');
  }

  // machine_account - computed: true, optional: false, required: false
  public get machineAccount() {
    return this.getStringAttribute('machine_account');
  }

  // machine_password_changes - computed: true, optional: false, required: false
  public get machinePasswordChanges() {
    return this.getBooleanAttribute('machine_password_changes');
  }

  // machine_password_lifespan - computed: true, optional: false, required: false
  public get machinePasswordLifespan() {
    return this.getNumberAttribute('machine_password_lifespan');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // netbios_domain - computed: true, optional: false, required: false
  public get netbiosDomain() {
    return this.getStringAttribute('netbios_domain');
  }

  // node_dc_affinity - computed: true, optional: false, required: false
  public get nodeDcAffinity() {
    return this.getStringAttribute('node_dc_affinity');
  }

  // node_dc_affinity_timeout - computed: true, optional: false, required: false
  public get nodeDcAffinityTimeout() {
    return this.getNumberAttribute('node_dc_affinity_timeout');
  }

  // nss_enumeration - computed: true, optional: false, required: false
  public get nssEnumeration() {
    return this.getBooleanAttribute('nss_enumeration');
  }

  // primary_domain - computed: true, optional: false, required: false
  public get primaryDomain() {
    return this.getStringAttribute('primary_domain');
  }

  // restrict_findable - computed: true, optional: false, required: false
  public get restrictFindable() {
    return this.getBooleanAttribute('restrict_findable');
  }

  // rpc_call_timeout - computed: true, optional: false, required: false
  public get rpcCallTimeout() {
    return this.getNumberAttribute('rpc_call_timeout');
  }

  // server_retry_limit - computed: true, optional: false, required: false
  public get serverRetryLimit() {
    return this.getNumberAttribute('server_retry_limit');
  }

  // sfu_support - computed: true, optional: false, required: false
  public get sfuSupport() {
    return this.getStringAttribute('sfu_support');
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // store_sfu_mappings - computed: true, optional: false, required: false
  public get storeSfuMappings() {
    return this.getBooleanAttribute('store_sfu_mappings');
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getBooleanAttribute('system');
  }

  // unfindable_groups - computed: true, optional: false, required: false
  public get unfindableGroups() {
    return this.getListAttribute('unfindable_groups');
  }

  // unfindable_users - computed: true, optional: false, required: false
  public get unfindableUsers() {
    return this.getListAttribute('unfindable_users');
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
}

export class DataPowerscaleAdsproviderAdsProvidersDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleAdsproviderAdsProvidersDetailsOutputReference {
    return new DataPowerscaleAdsproviderAdsProvidersDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleAdsproviderFilter {
  /**
  * Filter ads providers by names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/adsprovider#names DataPowerscaleAdsprovider#names}
  */
  readonly names?: string[];
  /**
  * Filter ads providers by scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/adsprovider#scope DataPowerscaleAdsprovider#scope}
  */
  readonly scope?: string;
}

export function dataPowerscaleAdsproviderFilterToTerraform(struct?: DataPowerscaleAdsproviderFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dataPowerscaleAdsproviderFilterToHclTerraform(struct?: DataPowerscaleAdsproviderFilter | cdktf.IResolvable): any {
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

export class DataPowerscaleAdsproviderFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleAdsproviderFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowerscaleAdsproviderFilter | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/adsprovider powerscale_adsprovider}
*/
export class DataPowerscaleAdsprovider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_adsprovider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleAdsprovider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleAdsprovider to import
  * @param importFromId The id of the existing DataPowerscaleAdsprovider that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/adsprovider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleAdsprovider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_adsprovider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/adsprovider powerscale_adsprovider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleAdsproviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleAdsproviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_adsprovider',
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
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ads_providers_details - computed: true, optional: false, required: false
  private _adsProvidersDetails = new DataPowerscaleAdsproviderAdsProvidersDetailsList(this, "ads_providers_details", false);
  public get adsProvidersDetails() {
    return this._adsProvidersDetails;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleAdsproviderFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleAdsproviderFilter) {
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
      filter: dataPowerscaleAdsproviderFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleAdsproviderFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleAdsproviderFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
