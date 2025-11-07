// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#alt_primary SystemDns#alt_primary}
  */
  readonly altPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#alt_secondary SystemDns#alt_secondary}
  */
  readonly altSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#cache_notfound_responses SystemDns#cache_notfound_responses}
  */
  readonly cacheNotfoundResponses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#dns_cache_limit SystemDns#dns_cache_limit}
  */
  readonly dnsCacheLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#dns_cache_ttl SystemDns#dns_cache_ttl}
  */
  readonly dnsCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#dns_over_tls SystemDns#dns_over_tls}
  */
  readonly dnsOverTls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#dynamic_sort_subtable SystemDns#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#fqdn_cache_ttl SystemDns#fqdn_cache_ttl}
  */
  readonly fqdnCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#fqdn_max_refresh SystemDns#fqdn_max_refresh}
  */
  readonly fqdnMaxRefresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#fqdn_min_refresh SystemDns#fqdn_min_refresh}
  */
  readonly fqdnMinRefresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#get_all_tables SystemDns#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#hostname_limit SystemDns#hostname_limit}
  */
  readonly hostnameLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#hostname_ttl SystemDns#hostname_ttl}
  */
  readonly hostnameTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#id SystemDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#interface SystemDns#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#interface_select_method SystemDns#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#ip6_primary SystemDns#ip6_primary}
  */
  readonly ip6Primary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#ip6_secondary SystemDns#ip6_secondary}
  */
  readonly ip6Secondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#log SystemDns#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#primary SystemDns#primary}
  */
  readonly primary: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#protocol SystemDns#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#retry SystemDns#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#root_servers SystemDns#root_servers}
  */
  readonly rootServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#secondary SystemDns#secondary}
  */
  readonly secondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#server_select_method SystemDns#server_select_method}
  */
  readonly serverSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#source_ip SystemDns#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#source_ip_interface SystemDns#source_ip_interface}
  */
  readonly sourceIpInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#ssl_certificate SystemDns#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#timeout SystemDns#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#vdomparam SystemDns#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#vrf_select SystemDns#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#domain SystemDns#domain}
  */
  readonly domain?: SystemDnsDomain[] | cdktf.IResolvable;
  /**
  * server_hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#server_hostname SystemDns#server_hostname}
  */
  readonly serverHostname?: SystemDnsServerHostname[] | cdktf.IResolvable;
}
export interface SystemDnsDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#domain SystemDns#domain}
  */
  readonly domain?: string;
}

export function systemDnsDomainToTerraform(struct?: SystemDnsDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function systemDnsDomainToHclTerraform(struct?: SystemDnsDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDnsDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemDnsDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDnsDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}

export class SystemDnsDomainList extends cdktf.ComplexList {
  public internalValue? : SystemDnsDomain[] | cdktf.IResolvable

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
  public get(index: number): SystemDnsDomainOutputReference {
    return new SystemDnsDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemDnsServerHostname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#hostname SystemDns#hostname}
  */
  readonly hostname?: string;
}

export function systemDnsServerHostnameToTerraform(struct?: SystemDnsServerHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function systemDnsServerHostnameToHclTerraform(struct?: SystemDnsServerHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDnsServerHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemDnsServerHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDnsServerHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}

export class SystemDnsServerHostnameList extends cdktf.ComplexList {
  public internalValue? : SystemDnsServerHostname[] | cdktf.IResolvable

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
  public get(index: number): SystemDnsServerHostnameOutputReference {
    return new SystemDnsServerHostnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns fortios_system_dns}
*/
export class SystemDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDns to import
  * @param importFromId The id of the existing SystemDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns fortios_system_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDnsConfig
  */
  public constructor(scope: Construct, id: string, config: SystemDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_dns',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._altPrimary = config.altPrimary;
    this._altSecondary = config.altSecondary;
    this._cacheNotfoundResponses = config.cacheNotfoundResponses;
    this._dnsCacheLimit = config.dnsCacheLimit;
    this._dnsCacheTtl = config.dnsCacheTtl;
    this._dnsOverTls = config.dnsOverTls;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fqdnCacheTtl = config.fqdnCacheTtl;
    this._fqdnMaxRefresh = config.fqdnMaxRefresh;
    this._fqdnMinRefresh = config.fqdnMinRefresh;
    this._getAllTables = config.fetchAllTables;
    this._hostnameLimit = config.hostnameLimit;
    this._hostnameTtl = config.hostnameTtl;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._ip6Primary = config.ip6Primary;
    this._ip6Secondary = config.ip6Secondary;
    this._log = config.log;
    this._primary = config.primary;
    this._protocol = config.protocol;
    this._retry = config.retry;
    this._rootServers = config.rootServers;
    this._secondary = config.secondary;
    this._serverSelectMethod = config.serverSelectMethod;
    this._sourceIp = config.sourceIp;
    this._sourceIpInterface = config.sourceIpInterface;
    this._sslCertificate = config.sslCertificate;
    this._timeout = config.timeout;
    this._vdomparam = config.vdomparam;
    this._vrfSelect = config.vrfSelect;
    this._domain.internalValue = config.domain;
    this._serverHostname.internalValue = config.serverHostname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alt_primary - computed: true, optional: true, required: false
  private _altPrimary?: string; 
  public get altPrimary() {
    return this.getStringAttribute('alt_primary');
  }
  public set altPrimary(value: string) {
    this._altPrimary = value;
  }
  public resetAltPrimary() {
    this._altPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altPrimaryInput() {
    return this._altPrimary;
  }

  // alt_secondary - computed: true, optional: true, required: false
  private _altSecondary?: string; 
  public get altSecondary() {
    return this.getStringAttribute('alt_secondary');
  }
  public set altSecondary(value: string) {
    this._altSecondary = value;
  }
  public resetAltSecondary() {
    this._altSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altSecondaryInput() {
    return this._altSecondary;
  }

  // cache_notfound_responses - computed: true, optional: true, required: false
  private _cacheNotfoundResponses?: string; 
  public get cacheNotfoundResponses() {
    return this.getStringAttribute('cache_notfound_responses');
  }
  public set cacheNotfoundResponses(value: string) {
    this._cacheNotfoundResponses = value;
  }
  public resetCacheNotfoundResponses() {
    this._cacheNotfoundResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNotfoundResponsesInput() {
    return this._cacheNotfoundResponses;
  }

  // dns_cache_limit - computed: true, optional: true, required: false
  private _dnsCacheLimit?: number; 
  public get dnsCacheLimit() {
    return this.getNumberAttribute('dns_cache_limit');
  }
  public set dnsCacheLimit(value: number) {
    this._dnsCacheLimit = value;
  }
  public resetDnsCacheLimit() {
    this._dnsCacheLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheLimitInput() {
    return this._dnsCacheLimit;
  }

  // dns_cache_ttl - computed: true, optional: true, required: false
  private _dnsCacheTtl?: number; 
  public get dnsCacheTtl() {
    return this.getNumberAttribute('dns_cache_ttl');
  }
  public set dnsCacheTtl(value: number) {
    this._dnsCacheTtl = value;
  }
  public resetDnsCacheTtl() {
    this._dnsCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheTtlInput() {
    return this._dnsCacheTtl;
  }

  // dns_over_tls - computed: true, optional: true, required: false
  private _dnsOverTls?: string; 
  public get dnsOverTls() {
    return this.getStringAttribute('dns_over_tls');
  }
  public set dnsOverTls(value: string) {
    this._dnsOverTls = value;
  }
  public resetDnsOverTls() {
    this._dnsOverTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOverTlsInput() {
    return this._dnsOverTls;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // fqdn_cache_ttl - computed: false, optional: true, required: false
  private _fqdnCacheTtl?: number; 
  public get fqdnCacheTtl() {
    return this.getNumberAttribute('fqdn_cache_ttl');
  }
  public set fqdnCacheTtl(value: number) {
    this._fqdnCacheTtl = value;
  }
  public resetFqdnCacheTtl() {
    this._fqdnCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnCacheTtlInput() {
    return this._fqdnCacheTtl;
  }

  // fqdn_max_refresh - computed: true, optional: true, required: false
  private _fqdnMaxRefresh?: number; 
  public get fqdnMaxRefresh() {
    return this.getNumberAttribute('fqdn_max_refresh');
  }
  public set fqdnMaxRefresh(value: number) {
    this._fqdnMaxRefresh = value;
  }
  public resetFqdnMaxRefresh() {
    this._fqdnMaxRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnMaxRefreshInput() {
    return this._fqdnMaxRefresh;
  }

  // fqdn_min_refresh - computed: true, optional: true, required: false
  private _fqdnMinRefresh?: number; 
  public get fqdnMinRefresh() {
    return this.getNumberAttribute('fqdn_min_refresh');
  }
  public set fqdnMinRefresh(value: number) {
    this._fqdnMinRefresh = value;
  }
  public resetFqdnMinRefresh() {
    this._fqdnMinRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnMinRefreshInput() {
    return this._fqdnMinRefresh;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // hostname_limit - computed: true, optional: true, required: false
  private _hostnameLimit?: number; 
  public get hostnameLimit() {
    return this.getNumberAttribute('hostname_limit');
  }
  public set hostnameLimit(value: number) {
    this._hostnameLimit = value;
  }
  public resetHostnameLimit() {
    this._hostnameLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameLimitInput() {
    return this._hostnameLimit;
  }

  // hostname_ttl - computed: true, optional: true, required: false
  private _hostnameTtl?: number; 
  public get hostnameTtl() {
    return this.getNumberAttribute('hostname_ttl');
  }
  public set hostnameTtl(value: number) {
    this._hostnameTtl = value;
  }
  public resetHostnameTtl() {
    this._hostnameTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameTtlInput() {
    return this._hostnameTtl;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // ip6_primary - computed: true, optional: true, required: false
  private _ip6Primary?: string; 
  public get ip6Primary() {
    return this.getStringAttribute('ip6_primary');
  }
  public set ip6Primary(value: string) {
    this._ip6Primary = value;
  }
  public resetIp6Primary() {
    this._ip6Primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6PrimaryInput() {
    return this._ip6Primary;
  }

  // ip6_secondary - computed: true, optional: true, required: false
  private _ip6Secondary?: string; 
  public get ip6Secondary() {
    return this.getStringAttribute('ip6_secondary');
  }
  public set ip6Secondary(value: string) {
    this._ip6Secondary = value;
  }
  public resetIp6Secondary() {
    this._ip6Secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SecondaryInput() {
    return this._ip6Secondary;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // primary - computed: false, optional: false, required: true
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // retry - computed: true, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // root_servers - computed: false, optional: true, required: false
  private _rootServers?: string; 
  public get rootServers() {
    return this.getStringAttribute('root_servers');
  }
  public set rootServers(value: string) {
    this._rootServers = value;
  }
  public resetRootServers() {
    this._rootServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootServersInput() {
    return this._rootServers;
  }

  // secondary - computed: true, optional: true, required: false
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }

  // server_select_method - computed: true, optional: true, required: false
  private _serverSelectMethod?: string; 
  public get serverSelectMethod() {
    return this.getStringAttribute('server_select_method');
  }
  public set serverSelectMethod(value: string) {
    this._serverSelectMethod = value;
  }
  public resetServerSelectMethod() {
    this._serverSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectMethodInput() {
    return this._serverSelectMethod;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip_interface - computed: false, optional: true, required: false
  private _sourceIpInterface?: string; 
  public get sourceIpInterface() {
    return this.getStringAttribute('source_ip_interface');
  }
  public set sourceIpInterface(value: string) {
    this._sourceIpInterface = value;
  }
  public resetSourceIpInterface() {
    this._sourceIpInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInterfaceInput() {
    return this._sourceIpInterface;
  }

  // ssl_certificate - computed: true, optional: true, required: false
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new SystemDnsDomainList(this, "domain", true);
  public get domain() {
    return this._domain;
  }
  public putDomain(value: SystemDnsDomain[] | cdktf.IResolvable) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // server_hostname - computed: false, optional: true, required: false
  private _serverHostname = new SystemDnsServerHostnameList(this, "server_hostname", true);
  public get serverHostname() {
    return this._serverHostname;
  }
  public putServerHostname(value: SystemDnsServerHostname[] | cdktf.IResolvable) {
    this._serverHostname.internalValue = value;
  }
  public resetServerHostname() {
    this._serverHostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostnameInput() {
    return this._serverHostname.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alt_primary: cdktf.stringToTerraform(this._altPrimary),
      alt_secondary: cdktf.stringToTerraform(this._altSecondary),
      cache_notfound_responses: cdktf.stringToTerraform(this._cacheNotfoundResponses),
      dns_cache_limit: cdktf.numberToTerraform(this._dnsCacheLimit),
      dns_cache_ttl: cdktf.numberToTerraform(this._dnsCacheTtl),
      dns_over_tls: cdktf.stringToTerraform(this._dnsOverTls),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fqdn_cache_ttl: cdktf.numberToTerraform(this._fqdnCacheTtl),
      fqdn_max_refresh: cdktf.numberToTerraform(this._fqdnMaxRefresh),
      fqdn_min_refresh: cdktf.numberToTerraform(this._fqdnMinRefresh),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      hostname_limit: cdktf.numberToTerraform(this._hostnameLimit),
      hostname_ttl: cdktf.numberToTerraform(this._hostnameTtl),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      ip6_primary: cdktf.stringToTerraform(this._ip6Primary),
      ip6_secondary: cdktf.stringToTerraform(this._ip6Secondary),
      log: cdktf.stringToTerraform(this._log),
      primary: cdktf.stringToTerraform(this._primary),
      protocol: cdktf.stringToTerraform(this._protocol),
      retry: cdktf.numberToTerraform(this._retry),
      root_servers: cdktf.stringToTerraform(this._rootServers),
      secondary: cdktf.stringToTerraform(this._secondary),
      server_select_method: cdktf.stringToTerraform(this._serverSelectMethod),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip_interface: cdktf.stringToTerraform(this._sourceIpInterface),
      ssl_certificate: cdktf.stringToTerraform(this._sslCertificate),
      timeout: cdktf.numberToTerraform(this._timeout),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
      domain: cdktf.listMapper(systemDnsDomainToTerraform, true)(this._domain.internalValue),
      server_hostname: cdktf.listMapper(systemDnsServerHostnameToTerraform, true)(this._serverHostname.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alt_primary: {
        value: cdktf.stringToHclTerraform(this._altPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alt_secondary: {
        value: cdktf.stringToHclTerraform(this._altSecondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_notfound_responses: {
        value: cdktf.stringToHclTerraform(this._cacheNotfoundResponses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_cache_limit: {
        value: cdktf.numberToHclTerraform(this._dnsCacheLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._dnsCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_over_tls: {
        value: cdktf.stringToHclTerraform(this._dnsOverTls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._fqdnCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fqdn_max_refresh: {
        value: cdktf.numberToHclTerraform(this._fqdnMaxRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fqdn_min_refresh: {
        value: cdktf.numberToHclTerraform(this._fqdnMinRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_limit: {
        value: cdktf.numberToHclTerraform(this._hostnameLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hostname_ttl: {
        value: cdktf.numberToHclTerraform(this._hostnameTtl),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_primary: {
        value: cdktf.stringToHclTerraform(this._ip6Primary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_secondary: {
        value: cdktf.stringToHclTerraform(this._ip6Secondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log: {
        value: cdktf.stringToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary: {
        value: cdktf.stringToHclTerraform(this._primary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      root_servers: {
        value: cdktf.stringToHclTerraform(this._rootServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary: {
        value: cdktf.stringToHclTerraform(this._secondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_select_method: {
        value: cdktf.stringToHclTerraform(this._serverSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_interface: {
        value: cdktf.stringToHclTerraform(this._sourceIpInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_certificate: {
        value: cdktf.stringToHclTerraform(this._sslCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.listMapperHcl(systemDnsDomainToHclTerraform, true)(this._domain.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemDnsDomainList",
      },
      server_hostname: {
        value: cdktf.listMapperHcl(systemDnsServerHostnameToHclTerraform, true)(this._serverHostname.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemDnsServerHostnameList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
