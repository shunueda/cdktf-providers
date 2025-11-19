// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#___path___ IpDns#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#address_list_extra_time IpDns#address_list_extra_time}
  */
  readonly addressListExtraTime?: string;
  /**
  * Specifies whether to allow network requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#allow_remote_requests IpDns#allow_remote_requests}
  */
  readonly allowRemoteRequests?: boolean | cdktf.IResolvable;
  /**
  * Maximum time-to-live for cache records. In other words, cache records will expire unconditionally after cache-max-ttl time. Shorter TTL received from DNS servers are respected. *Default: 1w*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#cache_max_ttl IpDns#cache_max_ttl}
  */
  readonly cacheMaxTtl?: string;
  /**
  * Specifies the size of DNS cache in KiB (64..4294967295). *Default: 2048*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#cache_size IpDns#cache_size}
  */
  readonly cacheSize?: number;
  /**
  * Specifies how many DoH concurrent queries are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#doh_max_concurrent_queries IpDns#doh_max_concurrent_queries}
  */
  readonly dohMaxConcurrentQueries?: number;
  /**
  * Specifies how many concurrent connections to the DoH server are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#doh_max_server_connections IpDns#doh_max_server_connections}
  */
  readonly dohMaxServerConnections?: number;
  /**
  * Specifies how long to wait for query response from the DoH server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#doh_timeout IpDns#doh_timeout}
  */
  readonly dohTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#id IpDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies how much concurrent queries are allowed. *Default: 100*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#max_concurrent_queries IpDns#max_concurrent_queries}
  */
  readonly maxConcurrentQueries?: number;
  /**
  * Specifies how much concurrent TCP sessions are allowed. *Default: 20*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#max_concurrent_tcp_sessions IpDns#max_concurrent_tcp_sessions}
  */
  readonly maxConcurrentTcpSessions?: number;
  /**
  * Maximum size of allowed UDP packet. *Default: 4096*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#max_udp_packet_size IpDns#max_udp_packet_size}
  */
  readonly maxUdpPacketSize?: number;
  /**
  * An option to enable mDNS repeater on specified interfaces. This option is available in RouterOS starting from version 7.16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#mdns_repeat_ifaces IpDns#mdns_repeat_ifaces}
  */
  readonly mdnsRepeatIfaces?: string[];
  /**
  * Specifies how long to wait for query response from one server. Time can be specified in milliseconds. *Default: 2s*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#query_server_timeout IpDns#query_server_timeout}
  */
  readonly queryServerTimeout?: string;
  /**
  * Specifies how long to wait for query response in total. Note that this setting must be configured taking into account query_server_timeout and number of used DNS server. Time can be specified in milliseconds. *Default: 10s*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#query_total_timeout IpDns#query_total_timeout}
  */
  readonly queryTotalTimeout?: string;
  /**
  * List of DNS server IPv4/IPv6 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#servers IpDns#servers}
  */
  readonly servers?: string[];
  /**
  * DNS over HTTPS (DoH) server URL.
  * 	> Mikrotik strongly suggest not use third-party download links for certificate fetching. 
  * 	Use the Certificate Authority's own website.
  * 
  * 	> RouterOS prioritize DoH over DNS server if both are configured on the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#use_doh_server IpDns#use_doh_server}
  */
  readonly useDohServer?: string;
  /**
  * DoH certificate verification. [See docs](https://wiki.mikrotik.com/wiki/Manual:IP/DNS#DNS_over_HTTPS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#verify_doh_cert IpDns#verify_doh_cert}
  */
  readonly verifyDohCert?: boolean | cdktf.IResolvable;
  /**
  * The VRF table this resource operates on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#vrf IpDns#vrf}
  */
  readonly vrf?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns routeros_ip_dns}
*/
export class IpDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpDns to import
  * @param importFromId The id of the existing IpDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dns routeros_ip_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpDnsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpDnsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_dns',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._addressListExtraTime = config.addressListExtraTime;
    this._allowRemoteRequests = config.allowRemoteRequests;
    this._cacheMaxTtl = config.cacheMaxTtl;
    this._cacheSize = config.cacheSize;
    this._dohMaxConcurrentQueries = config.dohMaxConcurrentQueries;
    this._dohMaxServerConnections = config.dohMaxServerConnections;
    this._dohTimeout = config.dohTimeout;
    this._id = config.id;
    this._maxConcurrentQueries = config.maxConcurrentQueries;
    this._maxConcurrentTcpSessions = config.maxConcurrentTcpSessions;
    this._maxUdpPacketSize = config.maxUdpPacketSize;
    this._mdnsRepeatIfaces = config.mdnsRepeatIfaces;
    this._queryServerTimeout = config.queryServerTimeout;
    this._queryTotalTimeout = config.queryTotalTimeout;
    this._servers = config.servers;
    this._useDohServer = config.useDohServer;
    this._verifyDohCert = config.verifyDohCert;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // address_list_extra_time - computed: false, optional: true, required: false
  private _addressListExtraTime?: string; 
  public get addressListExtraTime() {
    return this.getStringAttribute('address_list_extra_time');
  }
  public set addressListExtraTime(value: string) {
    this._addressListExtraTime = value;
  }
  public resetAddressListExtraTime() {
    this._addressListExtraTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListExtraTimeInput() {
    return this._addressListExtraTime;
  }

  // allow_remote_requests - computed: false, optional: true, required: false
  private _allowRemoteRequests?: boolean | cdktf.IResolvable; 
  public get allowRemoteRequests() {
    return this.getBooleanAttribute('allow_remote_requests');
  }
  public set allowRemoteRequests(value: boolean | cdktf.IResolvable) {
    this._allowRemoteRequests = value;
  }
  public resetAllowRemoteRequests() {
    this._allowRemoteRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteRequestsInput() {
    return this._allowRemoteRequests;
  }

  // cache_max_ttl - computed: true, optional: true, required: false
  private _cacheMaxTtl?: string; 
  public get cacheMaxTtl() {
    return this.getStringAttribute('cache_max_ttl');
  }
  public set cacheMaxTtl(value: string) {
    this._cacheMaxTtl = value;
  }
  public resetCacheMaxTtl() {
    this._cacheMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheMaxTtlInput() {
    return this._cacheMaxTtl;
  }

  // cache_size - computed: true, optional: true, required: false
  private _cacheSize?: number; 
  public get cacheSize() {
    return this.getNumberAttribute('cache_size');
  }
  public set cacheSize(value: number) {
    this._cacheSize = value;
  }
  public resetCacheSize() {
    this._cacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInput() {
    return this._cacheSize;
  }

  // cache_used - computed: true, optional: false, required: false
  public get cacheUsed() {
    return this.getNumberAttribute('cache_used');
  }

  // doh_max_concurrent_queries - computed: true, optional: true, required: false
  private _dohMaxConcurrentQueries?: number; 
  public get dohMaxConcurrentQueries() {
    return this.getNumberAttribute('doh_max_concurrent_queries');
  }
  public set dohMaxConcurrentQueries(value: number) {
    this._dohMaxConcurrentQueries = value;
  }
  public resetDohMaxConcurrentQueries() {
    this._dohMaxConcurrentQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohMaxConcurrentQueriesInput() {
    return this._dohMaxConcurrentQueries;
  }

  // doh_max_server_connections - computed: true, optional: true, required: false
  private _dohMaxServerConnections?: number; 
  public get dohMaxServerConnections() {
    return this.getNumberAttribute('doh_max_server_connections');
  }
  public set dohMaxServerConnections(value: number) {
    this._dohMaxServerConnections = value;
  }
  public resetDohMaxServerConnections() {
    this._dohMaxServerConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohMaxServerConnectionsInput() {
    return this._dohMaxServerConnections;
  }

  // doh_timeout - computed: true, optional: true, required: false
  private _dohTimeout?: string; 
  public get dohTimeout() {
    return this.getStringAttribute('doh_timeout');
  }
  public set dohTimeout(value: string) {
    this._dohTimeout = value;
  }
  public resetDohTimeout() {
    this._dohTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohTimeoutInput() {
    return this._dohTimeout;
  }

  // dynamic_servers - computed: true, optional: false, required: false
  public get dynamicServers() {
    return this.getStringAttribute('dynamic_servers');
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

  // max_concurrent_queries - computed: true, optional: true, required: false
  private _maxConcurrentQueries?: number; 
  public get maxConcurrentQueries() {
    return this.getNumberAttribute('max_concurrent_queries');
  }
  public set maxConcurrentQueries(value: number) {
    this._maxConcurrentQueries = value;
  }
  public resetMaxConcurrentQueries() {
    this._maxConcurrentQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentQueriesInput() {
    return this._maxConcurrentQueries;
  }

  // max_concurrent_tcp_sessions - computed: true, optional: true, required: false
  private _maxConcurrentTcpSessions?: number; 
  public get maxConcurrentTcpSessions() {
    return this.getNumberAttribute('max_concurrent_tcp_sessions');
  }
  public set maxConcurrentTcpSessions(value: number) {
    this._maxConcurrentTcpSessions = value;
  }
  public resetMaxConcurrentTcpSessions() {
    this._maxConcurrentTcpSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentTcpSessionsInput() {
    return this._maxConcurrentTcpSessions;
  }

  // max_udp_packet_size - computed: true, optional: true, required: false
  private _maxUdpPacketSize?: number; 
  public get maxUdpPacketSize() {
    return this.getNumberAttribute('max_udp_packet_size');
  }
  public set maxUdpPacketSize(value: number) {
    this._maxUdpPacketSize = value;
  }
  public resetMaxUdpPacketSize() {
    this._maxUdpPacketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUdpPacketSizeInput() {
    return this._maxUdpPacketSize;
  }

  // mdns_repeat_ifaces - computed: false, optional: true, required: false
  private _mdnsRepeatIfaces?: string[]; 
  public get mdnsRepeatIfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('mdns_repeat_ifaces'));
  }
  public set mdnsRepeatIfaces(value: string[]) {
    this._mdnsRepeatIfaces = value;
  }
  public resetMdnsRepeatIfaces() {
    this._mdnsRepeatIfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdnsRepeatIfacesInput() {
    return this._mdnsRepeatIfaces;
  }

  // query_server_timeout - computed: true, optional: true, required: false
  private _queryServerTimeout?: string; 
  public get queryServerTimeout() {
    return this.getStringAttribute('query_server_timeout');
  }
  public set queryServerTimeout(value: string) {
    this._queryServerTimeout = value;
  }
  public resetQueryServerTimeout() {
    this._queryServerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryServerTimeoutInput() {
    return this._queryServerTimeout;
  }

  // query_total_timeout - computed: true, optional: true, required: false
  private _queryTotalTimeout?: string; 
  public get queryTotalTimeout() {
    return this.getStringAttribute('query_total_timeout');
  }
  public set queryTotalTimeout(value: string) {
    this._queryTotalTimeout = value;
  }
  public resetQueryTotalTimeout() {
    this._queryTotalTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTotalTimeoutInput() {
    return this._queryTotalTimeout;
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // use_doh_server - computed: false, optional: true, required: false
  private _useDohServer?: string; 
  public get useDohServer() {
    return this.getStringAttribute('use_doh_server');
  }
  public set useDohServer(value: string) {
    this._useDohServer = value;
  }
  public resetUseDohServer() {
    this._useDohServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDohServerInput() {
    return this._useDohServer;
  }

  // verify_doh_cert - computed: false, optional: true, required: false
  private _verifyDohCert?: boolean | cdktf.IResolvable; 
  public get verifyDohCert() {
    return this.getBooleanAttribute('verify_doh_cert');
  }
  public set verifyDohCert(value: boolean | cdktf.IResolvable) {
    this._verifyDohCert = value;
  }
  public resetVerifyDohCert() {
    this._verifyDohCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyDohCertInput() {
    return this._verifyDohCert;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      address_list_extra_time: cdktf.stringToTerraform(this._addressListExtraTime),
      allow_remote_requests: cdktf.booleanToTerraform(this._allowRemoteRequests),
      cache_max_ttl: cdktf.stringToTerraform(this._cacheMaxTtl),
      cache_size: cdktf.numberToTerraform(this._cacheSize),
      doh_max_concurrent_queries: cdktf.numberToTerraform(this._dohMaxConcurrentQueries),
      doh_max_server_connections: cdktf.numberToTerraform(this._dohMaxServerConnections),
      doh_timeout: cdktf.stringToTerraform(this._dohTimeout),
      id: cdktf.stringToTerraform(this._id),
      max_concurrent_queries: cdktf.numberToTerraform(this._maxConcurrentQueries),
      max_concurrent_tcp_sessions: cdktf.numberToTerraform(this._maxConcurrentTcpSessions),
      max_udp_packet_size: cdktf.numberToTerraform(this._maxUdpPacketSize),
      mdns_repeat_ifaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mdnsRepeatIfaces),
      query_server_timeout: cdktf.stringToTerraform(this._queryServerTimeout),
      query_total_timeout: cdktf.stringToTerraform(this._queryTotalTimeout),
      servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servers),
      use_doh_server: cdktf.stringToTerraform(this._useDohServer),
      verify_doh_cert: cdktf.booleanToTerraform(this._verifyDohCert),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_list_extra_time: {
        value: cdktf.stringToHclTerraform(this._addressListExtraTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_remote_requests: {
        value: cdktf.booleanToHclTerraform(this._allowRemoteRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_max_ttl: {
        value: cdktf.stringToHclTerraform(this._cacheMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_size: {
        value: cdktf.numberToHclTerraform(this._cacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      doh_max_concurrent_queries: {
        value: cdktf.numberToHclTerraform(this._dohMaxConcurrentQueries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      doh_max_server_connections: {
        value: cdktf.numberToHclTerraform(this._dohMaxServerConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      doh_timeout: {
        value: cdktf.stringToHclTerraform(this._dohTimeout),
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
      max_concurrent_queries: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentQueries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_concurrent_tcp_sessions: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentTcpSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_udp_packet_size: {
        value: cdktf.numberToHclTerraform(this._maxUdpPacketSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mdns_repeat_ifaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mdnsRepeatIfaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      query_server_timeout: {
        value: cdktf.stringToHclTerraform(this._queryServerTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_total_timeout: {
        value: cdktf.stringToHclTerraform(this._queryTotalTimeout),
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
      use_doh_server: {
        value: cdktf.stringToHclTerraform(this._useDohServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_doh_cert: {
        value: cdktf.booleanToHclTerraform(this._verifyDohCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
