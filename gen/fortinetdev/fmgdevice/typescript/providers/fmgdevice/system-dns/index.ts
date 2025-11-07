// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#alt_primary SystemDns#alt_primary}
  */
  readonly altPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#alt_secondary SystemDns#alt_secondary}
  */
  readonly altSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#cache_notfound_responses SystemDns#cache_notfound_responses}
  */
  readonly cacheNotfoundResponses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#device_name SystemDns#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#dns_cache_limit SystemDns#dns_cache_limit}
  */
  readonly dnsCacheLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#dns_cache_ttl SystemDns#dns_cache_ttl}
  */
  readonly dnsCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#dns_over_tls SystemDns#dns_over_tls}
  */
  readonly dnsOverTls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#domain SystemDns#domain}
  */
  readonly domain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#fqdn_cache_ttl SystemDns#fqdn_cache_ttl}
  */
  readonly fqdnCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#fqdn_max_refresh SystemDns#fqdn_max_refresh}
  */
  readonly fqdnMaxRefresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#fqdn_min_refresh SystemDns#fqdn_min_refresh}
  */
  readonly fqdnMinRefresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#hostname_limit SystemDns#hostname_limit}
  */
  readonly hostnameLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#hostname_ttl SystemDns#hostname_ttl}
  */
  readonly hostnameTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#id SystemDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#interface SystemDns#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#interface_select_method SystemDns#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#ip6_primary SystemDns#ip6_primary}
  */
  readonly ip6Primary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#ip6_secondary SystemDns#ip6_secondary}
  */
  readonly ip6Secondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#log SystemDns#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#primary SystemDns#primary}
  */
  readonly primary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#protocol SystemDns#protocol}
  */
  readonly protocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#retry SystemDns#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#root_servers SystemDns#root_servers}
  */
  readonly rootServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#secondary SystemDns#secondary}
  */
  readonly secondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#server_hostname SystemDns#server_hostname}
  */
  readonly serverHostname?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#server_select_method SystemDns#server_select_method}
  */
  readonly serverSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#source_ip SystemDns#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#source_ip_interface SystemDns#source_ip_interface}
  */
  readonly sourceIpInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#ssl_certificate SystemDns#ssl_certificate}
  */
  readonly sslCertificate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#timeout SystemDns#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#vrf_select SystemDns#vrf_select}
  */
  readonly vrfSelect?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns fmgdevice_system_dns}
*/
export class SystemDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDns to import
  * @param importFromId The id of the existing SystemDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dns fmgdevice_system_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDnsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDnsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_dns',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
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
    this._deviceName = config.deviceName;
    this._dnsCacheLimit = config.dnsCacheLimit;
    this._dnsCacheTtl = config.dnsCacheTtl;
    this._dnsOverTls = config.dnsOverTls;
    this._domain = config.domain;
    this._fqdnCacheTtl = config.fqdnCacheTtl;
    this._fqdnMaxRefresh = config.fqdnMaxRefresh;
    this._fqdnMinRefresh = config.fqdnMinRefresh;
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
    this._serverHostname = config.serverHostname;
    this._serverSelectMethod = config.serverSelectMethod;
    this._sourceIp = config.sourceIp;
    this._sourceIpInterface = config.sourceIpInterface;
    this._sslCertificate = config.sslCertificate;
    this._timeout = config.timeout;
    this._vrfSelect = config.vrfSelect;
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

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // dns_over_tls - computed: false, optional: true, required: false
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

  // domain - computed: true, optional: true, required: false
  private _domain?: string[]; 
  public get domain() {
    return cdktf.Fn.tolist(this.getListAttribute('domain'));
  }
  public set domain(value: string[]) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
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

  // primary - computed: true, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
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

  // server_hostname - computed: true, optional: true, required: false
  private _serverHostname?: string[]; 
  public get serverHostname() {
    return cdktf.Fn.tolist(this.getListAttribute('server_hostname'));
  }
  public set serverHostname(value: string[]) {
    this._serverHostname = value;
  }
  public resetServerHostname() {
    this._serverHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostnameInput() {
    return this._serverHostname;
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

  // source_ip_interface - computed: true, optional: true, required: false
  private _sourceIpInterface?: string[]; 
  public get sourceIpInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ip_interface'));
  }
  public set sourceIpInterface(value: string[]) {
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
  private _sslCertificate?: string[]; 
  public get sslCertificate() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_certificate'));
  }
  public set sslCertificate(value: string[]) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alt_primary: cdktf.stringToTerraform(this._altPrimary),
      alt_secondary: cdktf.stringToTerraform(this._altSecondary),
      cache_notfound_responses: cdktf.stringToTerraform(this._cacheNotfoundResponses),
      device_name: cdktf.stringToTerraform(this._deviceName),
      dns_cache_limit: cdktf.numberToTerraform(this._dnsCacheLimit),
      dns_cache_ttl: cdktf.numberToTerraform(this._dnsCacheTtl),
      dns_over_tls: cdktf.stringToTerraform(this._dnsOverTls),
      domain: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domain),
      fqdn_cache_ttl: cdktf.numberToTerraform(this._fqdnCacheTtl),
      fqdn_max_refresh: cdktf.numberToTerraform(this._fqdnMaxRefresh),
      fqdn_min_refresh: cdktf.numberToTerraform(this._fqdnMinRefresh),
      hostname_limit: cdktf.numberToTerraform(this._hostnameLimit),
      hostname_ttl: cdktf.numberToTerraform(this._hostnameTtl),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      ip6_primary: cdktf.stringToTerraform(this._ip6Primary),
      ip6_secondary: cdktf.stringToTerraform(this._ip6Secondary),
      log: cdktf.stringToTerraform(this._log),
      primary: cdktf.stringToTerraform(this._primary),
      protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocol),
      retry: cdktf.numberToTerraform(this._retry),
      root_servers: cdktf.stringToTerraform(this._rootServers),
      secondary: cdktf.stringToTerraform(this._secondary),
      server_hostname: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverHostname),
      server_select_method: cdktf.stringToTerraform(this._serverSelectMethod),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceIpInterface),
      ssl_certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslCertificate),
      timeout: cdktf.numberToTerraform(this._timeout),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
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
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      domain: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domain),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      server_hostname: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverHostname),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceIpInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssl_certificate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sslCertificate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
