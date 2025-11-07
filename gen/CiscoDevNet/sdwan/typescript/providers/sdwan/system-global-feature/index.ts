// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemGlobalFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set ARP Proxy
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#arp_proxy SystemGlobalFeature#arp_proxy}
  */
  readonly arpProxy?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#arp_proxy_variable SystemGlobalFeature#arp_proxy_variable}
  */
  readonly arpProxyVariable?: string;
  /**
  * Configure CDP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#cdp SystemGlobalFeature#cdp}
  */
  readonly cdp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#cdp_variable SystemGlobalFeature#cdp_variable}
  */
  readonly cdpVariable?: string;
  /**
  * Configure Console Logging
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#console_logging SystemGlobalFeature#console_logging}
  */
  readonly consoleLogging?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#console_logging_variable SystemGlobalFeature#console_logging_variable}
  */
  readonly consoleLoggingVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#description SystemGlobalFeature#description}
  */
  readonly description?: string;
  /**
  * Configure Domain-Lookup
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#domain_lookup SystemGlobalFeature#domain_lookup}
  */
  readonly domainLookup?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#domain_lookup_variable SystemGlobalFeature#domain_lookup_variable}
  */
  readonly domainLookupVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#feature_profile_id SystemGlobalFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Set Passive FTP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#ftp_passive SystemGlobalFeature#ftp_passive}
  */
  readonly ftpPassive?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#ftp_passive_variable SystemGlobalFeature#ftp_passive_variable}
  */
  readonly ftpPassiveVariable?: string;
  /**
  * Set preference for HTTP Authentication
  *   - Choices: `local`, `aaa`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#http_authentication SystemGlobalFeature#http_authentication}
  */
  readonly httpAuthentication?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#http_authentication_variable SystemGlobalFeature#http_authentication_variable}
  */
  readonly httpAuthenticationVariable?: string;
  /**
  * Set a HTTP Server
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#http_server SystemGlobalFeature#http_server}
  */
  readonly httpServer?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#http_server_variable SystemGlobalFeature#http_server_variable}
  */
  readonly httpServerVariable?: string;
  /**
  * Set a HTTPS Server
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#https_server SystemGlobalFeature#https_server}
  */
  readonly httpsServer?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#https_server_variable SystemGlobalFeature#https_server_variable}
  */
  readonly httpsServerVariable?: string;
  /**
  * Configure Ignore BOOTP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#ignore_bootp SystemGlobalFeature#ignore_bootp}
  */
  readonly ignoreBootp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#ignore_bootp_variable SystemGlobalFeature#ignore_bootp_variable}
  */
  readonly ignoreBootpVariable?: string;
  /**
  * Set Source Route
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#ip_source_routing SystemGlobalFeature#ip_source_routing}
  */
  readonly ipSourceRouting?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#ip_source_routing_variable SystemGlobalFeature#ip_source_routing_variable}
  */
  readonly ipSourceRoutingVariable?: string;
  /**
  * Configure Telnet (Outbound)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#line_vty SystemGlobalFeature#line_vty}
  */
  readonly lineVty?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#line_vty_variable SystemGlobalFeature#line_vty_variable}
  */
  readonly lineVtyVariable?: string;
  /**
  * Configure LLDP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#lldp SystemGlobalFeature#lldp}
  */
  readonly lldp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#lldp_variable SystemGlobalFeature#lldp_variable}
  */
  readonly lldpVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#name SystemGlobalFeature#name}
  */
  readonly name: string;
  /**
  * Set NAT64 TCP session timeout, in seconds
  *   - Range: `1`-`536870`
  *   - Default value: `3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#nat64_tcp_timeout SystemGlobalFeature#nat64_tcp_timeout}
  */
  readonly nat64TcpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#nat64_tcp_timeout_variable SystemGlobalFeature#nat64_tcp_timeout_variable}
  */
  readonly nat64TcpTimeoutVariable?: string;
  /**
  * Set NAT64 UDP session timeout, in seconds
  *   - Range: `1`-`536870`
  *   - Default value: `300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#nat64_udp_timeout SystemGlobalFeature#nat64_udp_timeout}
  */
  readonly nat64UdpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#nat64_udp_timeout_variable SystemGlobalFeature#nat64_udp_timeout_variable}
  */
  readonly nat64UdpTimeoutVariable?: string;
  /**
  * Set RSH/RCP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#rsh_rcp SystemGlobalFeature#rsh_rcp}
  */
  readonly rshRcp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#rsh_rcp_variable SystemGlobalFeature#rsh_rcp_variable}
  */
  readonly rshRcpVariable?: string;
  /**
  * Configure SNMP Ifindex Persist
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#snmp_ifindex_persist SystemGlobalFeature#snmp_ifindex_persist}
  */
  readonly snmpIfindexPersist?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#snmp_ifindex_persist_variable SystemGlobalFeature#snmp_ifindex_persist_variable}
  */
  readonly snmpIfindexPersistVariable?: string;
  /**
  * Specify interface for source address in all HTTP(S) client connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#source_interface SystemGlobalFeature#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#source_interface_variable SystemGlobalFeature#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
  /**
  * Set SSH version
  *   - Choices: `2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#ssh_version SystemGlobalFeature#ssh_version}
  */
  readonly sshVersion?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#ssh_version_variable SystemGlobalFeature#ssh_version_variable}
  */
  readonly sshVersionVariable?: string;
  /**
  * Configure tcp-keepalives-in
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#tcp_keepalives_in SystemGlobalFeature#tcp_keepalives_in}
  */
  readonly tcpKeepalivesIn?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#tcp_keepalives_in_variable SystemGlobalFeature#tcp_keepalives_in_variable}
  */
  readonly tcpKeepalivesInVariable?: string;
  /**
  * Configure tcp-keepalives-out
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#tcp_keepalives_out SystemGlobalFeature#tcp_keepalives_out}
  */
  readonly tcpKeepalivesOut?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#tcp_keepalives_out_variable SystemGlobalFeature#tcp_keepalives_out_variable}
  */
  readonly tcpKeepalivesOutVariable?: string;
  /**
  * Configure tcp-small-servers
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#tcp_small_servers SystemGlobalFeature#tcp_small_servers}
  */
  readonly tcpSmallServers?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#tcp_small_servers_variable SystemGlobalFeature#tcp_small_servers_variable}
  */
  readonly tcpSmallServersVariable?: string;
  /**
  * Configure udp-small-servers
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#udp_small_servers SystemGlobalFeature#udp_small_servers}
  */
  readonly udpSmallServers?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#udp_small_servers_variable SystemGlobalFeature#udp_small_servers_variable}
  */
  readonly udpSmallServersVariable?: string;
  /**
  * Configure VTY Line Logging
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#vty_line_logging SystemGlobalFeature#vty_line_logging}
  */
  readonly vtyLineLogging?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#vty_line_logging_variable SystemGlobalFeature#vty_line_logging_variable}
  */
  readonly vtyLineLoggingVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature sdwan_system_global_feature}
*/
export class SystemGlobalFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_global_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemGlobalFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemGlobalFeature to import
  * @param importFromId The id of the existing SystemGlobalFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemGlobalFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_global_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_global_feature sdwan_system_global_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemGlobalFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemGlobalFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_global_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arpProxy = config.arpProxy;
    this._arpProxyVariable = config.arpProxyVariable;
    this._cdp = config.cdp;
    this._cdpVariable = config.cdpVariable;
    this._consoleLogging = config.consoleLogging;
    this._consoleLoggingVariable = config.consoleLoggingVariable;
    this._description = config.description;
    this._domainLookup = config.domainLookup;
    this._domainLookupVariable = config.domainLookupVariable;
    this._featureProfileId = config.featureProfileId;
    this._ftpPassive = config.ftpPassive;
    this._ftpPassiveVariable = config.ftpPassiveVariable;
    this._httpAuthentication = config.httpAuthentication;
    this._httpAuthenticationVariable = config.httpAuthenticationVariable;
    this._httpServer = config.httpServer;
    this._httpServerVariable = config.httpServerVariable;
    this._httpsServer = config.httpsServer;
    this._httpsServerVariable = config.httpsServerVariable;
    this._ignoreBootp = config.ignoreBootp;
    this._ignoreBootpVariable = config.ignoreBootpVariable;
    this._ipSourceRouting = config.ipSourceRouting;
    this._ipSourceRoutingVariable = config.ipSourceRoutingVariable;
    this._lineVty = config.lineVty;
    this._lineVtyVariable = config.lineVtyVariable;
    this._lldp = config.lldp;
    this._lldpVariable = config.lldpVariable;
    this._name = config.name;
    this._nat64TcpTimeout = config.nat64TcpTimeout;
    this._nat64TcpTimeoutVariable = config.nat64TcpTimeoutVariable;
    this._nat64UdpTimeout = config.nat64UdpTimeout;
    this._nat64UdpTimeoutVariable = config.nat64UdpTimeoutVariable;
    this._rshRcp = config.rshRcp;
    this._rshRcpVariable = config.rshRcpVariable;
    this._snmpIfindexPersist = config.snmpIfindexPersist;
    this._snmpIfindexPersistVariable = config.snmpIfindexPersistVariable;
    this._sourceInterface = config.sourceInterface;
    this._sourceInterfaceVariable = config.sourceInterfaceVariable;
    this._sshVersion = config.sshVersion;
    this._sshVersionVariable = config.sshVersionVariable;
    this._tcpKeepalivesIn = config.tcpKeepalivesIn;
    this._tcpKeepalivesInVariable = config.tcpKeepalivesInVariable;
    this._tcpKeepalivesOut = config.tcpKeepalivesOut;
    this._tcpKeepalivesOutVariable = config.tcpKeepalivesOutVariable;
    this._tcpSmallServers = config.tcpSmallServers;
    this._tcpSmallServersVariable = config.tcpSmallServersVariable;
    this._udpSmallServers = config.udpSmallServers;
    this._udpSmallServersVariable = config.udpSmallServersVariable;
    this._vtyLineLogging = config.vtyLineLogging;
    this._vtyLineLoggingVariable = config.vtyLineLoggingVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_proxy - computed: false, optional: true, required: false
  private _arpProxy?: boolean | cdktf.IResolvable; 
  public get arpProxy() {
    return this.getBooleanAttribute('arp_proxy');
  }
  public set arpProxy(value: boolean | cdktf.IResolvable) {
    this._arpProxy = value;
  }
  public resetArpProxy() {
    this._arpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpProxyInput() {
    return this._arpProxy;
  }

  // arp_proxy_variable - computed: false, optional: true, required: false
  private _arpProxyVariable?: string; 
  public get arpProxyVariable() {
    return this.getStringAttribute('arp_proxy_variable');
  }
  public set arpProxyVariable(value: string) {
    this._arpProxyVariable = value;
  }
  public resetArpProxyVariable() {
    this._arpProxyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpProxyVariableInput() {
    return this._arpProxyVariable;
  }

  // cdp - computed: false, optional: true, required: false
  private _cdp?: boolean | cdktf.IResolvable; 
  public get cdp() {
    return this.getBooleanAttribute('cdp');
  }
  public set cdp(value: boolean | cdktf.IResolvable) {
    this._cdp = value;
  }
  public resetCdp() {
    this._cdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpInput() {
    return this._cdp;
  }

  // cdp_variable - computed: false, optional: true, required: false
  private _cdpVariable?: string; 
  public get cdpVariable() {
    return this.getStringAttribute('cdp_variable');
  }
  public set cdpVariable(value: string) {
    this._cdpVariable = value;
  }
  public resetCdpVariable() {
    this._cdpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpVariableInput() {
    return this._cdpVariable;
  }

  // console_logging - computed: false, optional: true, required: false
  private _consoleLogging?: boolean | cdktf.IResolvable; 
  public get consoleLogging() {
    return this.getBooleanAttribute('console_logging');
  }
  public set consoleLogging(value: boolean | cdktf.IResolvable) {
    this._consoleLogging = value;
  }
  public resetConsoleLogging() {
    this._consoleLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleLoggingInput() {
    return this._consoleLogging;
  }

  // console_logging_variable - computed: false, optional: true, required: false
  private _consoleLoggingVariable?: string; 
  public get consoleLoggingVariable() {
    return this.getStringAttribute('console_logging_variable');
  }
  public set consoleLoggingVariable(value: string) {
    this._consoleLoggingVariable = value;
  }
  public resetConsoleLoggingVariable() {
    this._consoleLoggingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleLoggingVariableInput() {
    return this._consoleLoggingVariable;
  }

  // description - computed: false, optional: true, required: false
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

  // domain_lookup - computed: false, optional: true, required: false
  private _domainLookup?: boolean | cdktf.IResolvable; 
  public get domainLookup() {
    return this.getBooleanAttribute('domain_lookup');
  }
  public set domainLookup(value: boolean | cdktf.IResolvable) {
    this._domainLookup = value;
  }
  public resetDomainLookup() {
    this._domainLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainLookupInput() {
    return this._domainLookup;
  }

  // domain_lookup_variable - computed: false, optional: true, required: false
  private _domainLookupVariable?: string; 
  public get domainLookupVariable() {
    return this.getStringAttribute('domain_lookup_variable');
  }
  public set domainLookupVariable(value: string) {
    this._domainLookupVariable = value;
  }
  public resetDomainLookupVariable() {
    this._domainLookupVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainLookupVariableInput() {
    return this._domainLookupVariable;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // ftp_passive - computed: false, optional: true, required: false
  private _ftpPassive?: boolean | cdktf.IResolvable; 
  public get ftpPassive() {
    return this.getBooleanAttribute('ftp_passive');
  }
  public set ftpPassive(value: boolean | cdktf.IResolvable) {
    this._ftpPassive = value;
  }
  public resetFtpPassive() {
    this._ftpPassive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpPassiveInput() {
    return this._ftpPassive;
  }

  // ftp_passive_variable - computed: false, optional: true, required: false
  private _ftpPassiveVariable?: string; 
  public get ftpPassiveVariable() {
    return this.getStringAttribute('ftp_passive_variable');
  }
  public set ftpPassiveVariable(value: string) {
    this._ftpPassiveVariable = value;
  }
  public resetFtpPassiveVariable() {
    this._ftpPassiveVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpPassiveVariableInput() {
    return this._ftpPassiveVariable;
  }

  // http_authentication - computed: false, optional: true, required: false
  private _httpAuthentication?: string; 
  public get httpAuthentication() {
    return this.getStringAttribute('http_authentication');
  }
  public set httpAuthentication(value: string) {
    this._httpAuthentication = value;
  }
  public resetHttpAuthentication() {
    this._httpAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthenticationInput() {
    return this._httpAuthentication;
  }

  // http_authentication_variable - computed: false, optional: true, required: false
  private _httpAuthenticationVariable?: string; 
  public get httpAuthenticationVariable() {
    return this.getStringAttribute('http_authentication_variable');
  }
  public set httpAuthenticationVariable(value: string) {
    this._httpAuthenticationVariable = value;
  }
  public resetHttpAuthenticationVariable() {
    this._httpAuthenticationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthenticationVariableInput() {
    return this._httpAuthenticationVariable;
  }

  // http_server - computed: false, optional: true, required: false
  private _httpServer?: boolean | cdktf.IResolvable; 
  public get httpServer() {
    return this.getBooleanAttribute('http_server');
  }
  public set httpServer(value: boolean | cdktf.IResolvable) {
    this._httpServer = value;
  }
  public resetHttpServer() {
    this._httpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServerInput() {
    return this._httpServer;
  }

  // http_server_variable - computed: false, optional: true, required: false
  private _httpServerVariable?: string; 
  public get httpServerVariable() {
    return this.getStringAttribute('http_server_variable');
  }
  public set httpServerVariable(value: string) {
    this._httpServerVariable = value;
  }
  public resetHttpServerVariable() {
    this._httpServerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServerVariableInput() {
    return this._httpServerVariable;
  }

  // https_server - computed: false, optional: true, required: false
  private _httpsServer?: boolean | cdktf.IResolvable; 
  public get httpsServer() {
    return this.getBooleanAttribute('https_server');
  }
  public set httpsServer(value: boolean | cdktf.IResolvable) {
    this._httpsServer = value;
  }
  public resetHttpsServer() {
    this._httpsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsServerInput() {
    return this._httpsServer;
  }

  // https_server_variable - computed: false, optional: true, required: false
  private _httpsServerVariable?: string; 
  public get httpsServerVariable() {
    return this.getStringAttribute('https_server_variable');
  }
  public set httpsServerVariable(value: string) {
    this._httpsServerVariable = value;
  }
  public resetHttpsServerVariable() {
    this._httpsServerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsServerVariableInput() {
    return this._httpsServerVariable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_bootp - computed: false, optional: true, required: false
  private _ignoreBootp?: boolean | cdktf.IResolvable; 
  public get ignoreBootp() {
    return this.getBooleanAttribute('ignore_bootp');
  }
  public set ignoreBootp(value: boolean | cdktf.IResolvable) {
    this._ignoreBootp = value;
  }
  public resetIgnoreBootp() {
    this._ignoreBootp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreBootpInput() {
    return this._ignoreBootp;
  }

  // ignore_bootp_variable - computed: false, optional: true, required: false
  private _ignoreBootpVariable?: string; 
  public get ignoreBootpVariable() {
    return this.getStringAttribute('ignore_bootp_variable');
  }
  public set ignoreBootpVariable(value: string) {
    this._ignoreBootpVariable = value;
  }
  public resetIgnoreBootpVariable() {
    this._ignoreBootpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreBootpVariableInput() {
    return this._ignoreBootpVariable;
  }

  // ip_source_routing - computed: false, optional: true, required: false
  private _ipSourceRouting?: boolean | cdktf.IResolvable; 
  public get ipSourceRouting() {
    return this.getBooleanAttribute('ip_source_routing');
  }
  public set ipSourceRouting(value: boolean | cdktf.IResolvable) {
    this._ipSourceRouting = value;
  }
  public resetIpSourceRouting() {
    this._ipSourceRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSourceRoutingInput() {
    return this._ipSourceRouting;
  }

  // ip_source_routing_variable - computed: false, optional: true, required: false
  private _ipSourceRoutingVariable?: string; 
  public get ipSourceRoutingVariable() {
    return this.getStringAttribute('ip_source_routing_variable');
  }
  public set ipSourceRoutingVariable(value: string) {
    this._ipSourceRoutingVariable = value;
  }
  public resetIpSourceRoutingVariable() {
    this._ipSourceRoutingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSourceRoutingVariableInput() {
    return this._ipSourceRoutingVariable;
  }

  // line_vty - computed: false, optional: true, required: false
  private _lineVty?: boolean | cdktf.IResolvable; 
  public get lineVty() {
    return this.getBooleanAttribute('line_vty');
  }
  public set lineVty(value: boolean | cdktf.IResolvable) {
    this._lineVty = value;
  }
  public resetLineVty() {
    this._lineVty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineVtyInput() {
    return this._lineVty;
  }

  // line_vty_variable - computed: false, optional: true, required: false
  private _lineVtyVariable?: string; 
  public get lineVtyVariable() {
    return this.getStringAttribute('line_vty_variable');
  }
  public set lineVtyVariable(value: string) {
    this._lineVtyVariable = value;
  }
  public resetLineVtyVariable() {
    this._lineVtyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineVtyVariableInput() {
    return this._lineVtyVariable;
  }

  // lldp - computed: false, optional: true, required: false
  private _lldp?: boolean | cdktf.IResolvable; 
  public get lldp() {
    return this.getBooleanAttribute('lldp');
  }
  public set lldp(value: boolean | cdktf.IResolvable) {
    this._lldp = value;
  }
  public resetLldp() {
    this._lldp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpInput() {
    return this._lldp;
  }

  // lldp_variable - computed: false, optional: true, required: false
  private _lldpVariable?: string; 
  public get lldpVariable() {
    return this.getStringAttribute('lldp_variable');
  }
  public set lldpVariable(value: string) {
    this._lldpVariable = value;
  }
  public resetLldpVariable() {
    this._lldpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpVariableInput() {
    return this._lldpVariable;
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

  // nat64_tcp_timeout - computed: false, optional: true, required: false
  private _nat64TcpTimeout?: number; 
  public get nat64TcpTimeout() {
    return this.getNumberAttribute('nat64_tcp_timeout');
  }
  public set nat64TcpTimeout(value: number) {
    this._nat64TcpTimeout = value;
  }
  public resetNat64TcpTimeout() {
    this._nat64TcpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64TcpTimeoutInput() {
    return this._nat64TcpTimeout;
  }

  // nat64_tcp_timeout_variable - computed: false, optional: true, required: false
  private _nat64TcpTimeoutVariable?: string; 
  public get nat64TcpTimeoutVariable() {
    return this.getStringAttribute('nat64_tcp_timeout_variable');
  }
  public set nat64TcpTimeoutVariable(value: string) {
    this._nat64TcpTimeoutVariable = value;
  }
  public resetNat64TcpTimeoutVariable() {
    this._nat64TcpTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64TcpTimeoutVariableInput() {
    return this._nat64TcpTimeoutVariable;
  }

  // nat64_udp_timeout - computed: false, optional: true, required: false
  private _nat64UdpTimeout?: number; 
  public get nat64UdpTimeout() {
    return this.getNumberAttribute('nat64_udp_timeout');
  }
  public set nat64UdpTimeout(value: number) {
    this._nat64UdpTimeout = value;
  }
  public resetNat64UdpTimeout() {
    this._nat64UdpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64UdpTimeoutInput() {
    return this._nat64UdpTimeout;
  }

  // nat64_udp_timeout_variable - computed: false, optional: true, required: false
  private _nat64UdpTimeoutVariable?: string; 
  public get nat64UdpTimeoutVariable() {
    return this.getStringAttribute('nat64_udp_timeout_variable');
  }
  public set nat64UdpTimeoutVariable(value: string) {
    this._nat64UdpTimeoutVariable = value;
  }
  public resetNat64UdpTimeoutVariable() {
    this._nat64UdpTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64UdpTimeoutVariableInput() {
    return this._nat64UdpTimeoutVariable;
  }

  // rsh_rcp - computed: false, optional: true, required: false
  private _rshRcp?: boolean | cdktf.IResolvable; 
  public get rshRcp() {
    return this.getBooleanAttribute('rsh_rcp');
  }
  public set rshRcp(value: boolean | cdktf.IResolvable) {
    this._rshRcp = value;
  }
  public resetRshRcp() {
    this._rshRcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rshRcpInput() {
    return this._rshRcp;
  }

  // rsh_rcp_variable - computed: false, optional: true, required: false
  private _rshRcpVariable?: string; 
  public get rshRcpVariable() {
    return this.getStringAttribute('rsh_rcp_variable');
  }
  public set rshRcpVariable(value: string) {
    this._rshRcpVariable = value;
  }
  public resetRshRcpVariable() {
    this._rshRcpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rshRcpVariableInput() {
    return this._rshRcpVariable;
  }

  // snmp_ifindex_persist - computed: false, optional: true, required: false
  private _snmpIfindexPersist?: boolean | cdktf.IResolvable; 
  public get snmpIfindexPersist() {
    return this.getBooleanAttribute('snmp_ifindex_persist');
  }
  public set snmpIfindexPersist(value: boolean | cdktf.IResolvable) {
    this._snmpIfindexPersist = value;
  }
  public resetSnmpIfindexPersist() {
    this._snmpIfindexPersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpIfindexPersistInput() {
    return this._snmpIfindexPersist;
  }

  // snmp_ifindex_persist_variable - computed: false, optional: true, required: false
  private _snmpIfindexPersistVariable?: string; 
  public get snmpIfindexPersistVariable() {
    return this.getStringAttribute('snmp_ifindex_persist_variable');
  }
  public set snmpIfindexPersistVariable(value: string) {
    this._snmpIfindexPersistVariable = value;
  }
  public resetSnmpIfindexPersistVariable() {
    this._snmpIfindexPersistVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpIfindexPersistVariableInput() {
    return this._snmpIfindexPersistVariable;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // source_interface_variable - computed: false, optional: true, required: false
  private _sourceInterfaceVariable?: string; 
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }
  public set sourceInterfaceVariable(value: string) {
    this._sourceInterfaceVariable = value;
  }
  public resetSourceInterfaceVariable() {
    this._sourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceVariableInput() {
    return this._sourceInterfaceVariable;
  }

  // ssh_version - computed: false, optional: true, required: false
  private _sshVersion?: string; 
  public get sshVersion() {
    return this.getStringAttribute('ssh_version');
  }
  public set sshVersion(value: string) {
    this._sshVersion = value;
  }
  public resetSshVersion() {
    this._sshVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshVersionInput() {
    return this._sshVersion;
  }

  // ssh_version_variable - computed: false, optional: true, required: false
  private _sshVersionVariable?: string; 
  public get sshVersionVariable() {
    return this.getStringAttribute('ssh_version_variable');
  }
  public set sshVersionVariable(value: string) {
    this._sshVersionVariable = value;
  }
  public resetSshVersionVariable() {
    this._sshVersionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshVersionVariableInput() {
    return this._sshVersionVariable;
  }

  // tcp_keepalives_in - computed: false, optional: true, required: false
  private _tcpKeepalivesIn?: boolean | cdktf.IResolvable; 
  public get tcpKeepalivesIn() {
    return this.getBooleanAttribute('tcp_keepalives_in');
  }
  public set tcpKeepalivesIn(value: boolean | cdktf.IResolvable) {
    this._tcpKeepalivesIn = value;
  }
  public resetTcpKeepalivesIn() {
    this._tcpKeepalivesIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepalivesInInput() {
    return this._tcpKeepalivesIn;
  }

  // tcp_keepalives_in_variable - computed: false, optional: true, required: false
  private _tcpKeepalivesInVariable?: string; 
  public get tcpKeepalivesInVariable() {
    return this.getStringAttribute('tcp_keepalives_in_variable');
  }
  public set tcpKeepalivesInVariable(value: string) {
    this._tcpKeepalivesInVariable = value;
  }
  public resetTcpKeepalivesInVariable() {
    this._tcpKeepalivesInVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepalivesInVariableInput() {
    return this._tcpKeepalivesInVariable;
  }

  // tcp_keepalives_out - computed: false, optional: true, required: false
  private _tcpKeepalivesOut?: boolean | cdktf.IResolvable; 
  public get tcpKeepalivesOut() {
    return this.getBooleanAttribute('tcp_keepalives_out');
  }
  public set tcpKeepalivesOut(value: boolean | cdktf.IResolvable) {
    this._tcpKeepalivesOut = value;
  }
  public resetTcpKeepalivesOut() {
    this._tcpKeepalivesOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepalivesOutInput() {
    return this._tcpKeepalivesOut;
  }

  // tcp_keepalives_out_variable - computed: false, optional: true, required: false
  private _tcpKeepalivesOutVariable?: string; 
  public get tcpKeepalivesOutVariable() {
    return this.getStringAttribute('tcp_keepalives_out_variable');
  }
  public set tcpKeepalivesOutVariable(value: string) {
    this._tcpKeepalivesOutVariable = value;
  }
  public resetTcpKeepalivesOutVariable() {
    this._tcpKeepalivesOutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepalivesOutVariableInput() {
    return this._tcpKeepalivesOutVariable;
  }

  // tcp_small_servers - computed: false, optional: true, required: false
  private _tcpSmallServers?: boolean | cdktf.IResolvable; 
  public get tcpSmallServers() {
    return this.getBooleanAttribute('tcp_small_servers');
  }
  public set tcpSmallServers(value: boolean | cdktf.IResolvable) {
    this._tcpSmallServers = value;
  }
  public resetTcpSmallServers() {
    this._tcpSmallServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSmallServersInput() {
    return this._tcpSmallServers;
  }

  // tcp_small_servers_variable - computed: false, optional: true, required: false
  private _tcpSmallServersVariable?: string; 
  public get tcpSmallServersVariable() {
    return this.getStringAttribute('tcp_small_servers_variable');
  }
  public set tcpSmallServersVariable(value: string) {
    this._tcpSmallServersVariable = value;
  }
  public resetTcpSmallServersVariable() {
    this._tcpSmallServersVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSmallServersVariableInput() {
    return this._tcpSmallServersVariable;
  }

  // udp_small_servers - computed: false, optional: true, required: false
  private _udpSmallServers?: boolean | cdktf.IResolvable; 
  public get udpSmallServers() {
    return this.getBooleanAttribute('udp_small_servers');
  }
  public set udpSmallServers(value: boolean | cdktf.IResolvable) {
    this._udpSmallServers = value;
  }
  public resetUdpSmallServers() {
    this._udpSmallServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSmallServersInput() {
    return this._udpSmallServers;
  }

  // udp_small_servers_variable - computed: false, optional: true, required: false
  private _udpSmallServersVariable?: string; 
  public get udpSmallServersVariable() {
    return this.getStringAttribute('udp_small_servers_variable');
  }
  public set udpSmallServersVariable(value: string) {
    this._udpSmallServersVariable = value;
  }
  public resetUdpSmallServersVariable() {
    this._udpSmallServersVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSmallServersVariableInput() {
    return this._udpSmallServersVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vty_line_logging - computed: false, optional: true, required: false
  private _vtyLineLogging?: boolean | cdktf.IResolvable; 
  public get vtyLineLogging() {
    return this.getBooleanAttribute('vty_line_logging');
  }
  public set vtyLineLogging(value: boolean | cdktf.IResolvable) {
    this._vtyLineLogging = value;
  }
  public resetVtyLineLogging() {
    this._vtyLineLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtyLineLoggingInput() {
    return this._vtyLineLogging;
  }

  // vty_line_logging_variable - computed: false, optional: true, required: false
  private _vtyLineLoggingVariable?: string; 
  public get vtyLineLoggingVariable() {
    return this.getStringAttribute('vty_line_logging_variable');
  }
  public set vtyLineLoggingVariable(value: string) {
    this._vtyLineLoggingVariable = value;
  }
  public resetVtyLineLoggingVariable() {
    this._vtyLineLoggingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtyLineLoggingVariableInput() {
    return this._vtyLineLoggingVariable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp_proxy: cdktf.booleanToTerraform(this._arpProxy),
      arp_proxy_variable: cdktf.stringToTerraform(this._arpProxyVariable),
      cdp: cdktf.booleanToTerraform(this._cdp),
      cdp_variable: cdktf.stringToTerraform(this._cdpVariable),
      console_logging: cdktf.booleanToTerraform(this._consoleLogging),
      console_logging_variable: cdktf.stringToTerraform(this._consoleLoggingVariable),
      description: cdktf.stringToTerraform(this._description),
      domain_lookup: cdktf.booleanToTerraform(this._domainLookup),
      domain_lookup_variable: cdktf.stringToTerraform(this._domainLookupVariable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      ftp_passive: cdktf.booleanToTerraform(this._ftpPassive),
      ftp_passive_variable: cdktf.stringToTerraform(this._ftpPassiveVariable),
      http_authentication: cdktf.stringToTerraform(this._httpAuthentication),
      http_authentication_variable: cdktf.stringToTerraform(this._httpAuthenticationVariable),
      http_server: cdktf.booleanToTerraform(this._httpServer),
      http_server_variable: cdktf.stringToTerraform(this._httpServerVariable),
      https_server: cdktf.booleanToTerraform(this._httpsServer),
      https_server_variable: cdktf.stringToTerraform(this._httpsServerVariable),
      ignore_bootp: cdktf.booleanToTerraform(this._ignoreBootp),
      ignore_bootp_variable: cdktf.stringToTerraform(this._ignoreBootpVariable),
      ip_source_routing: cdktf.booleanToTerraform(this._ipSourceRouting),
      ip_source_routing_variable: cdktf.stringToTerraform(this._ipSourceRoutingVariable),
      line_vty: cdktf.booleanToTerraform(this._lineVty),
      line_vty_variable: cdktf.stringToTerraform(this._lineVtyVariable),
      lldp: cdktf.booleanToTerraform(this._lldp),
      lldp_variable: cdktf.stringToTerraform(this._lldpVariable),
      name: cdktf.stringToTerraform(this._name),
      nat64_tcp_timeout: cdktf.numberToTerraform(this._nat64TcpTimeout),
      nat64_tcp_timeout_variable: cdktf.stringToTerraform(this._nat64TcpTimeoutVariable),
      nat64_udp_timeout: cdktf.numberToTerraform(this._nat64UdpTimeout),
      nat64_udp_timeout_variable: cdktf.stringToTerraform(this._nat64UdpTimeoutVariable),
      rsh_rcp: cdktf.booleanToTerraform(this._rshRcp),
      rsh_rcp_variable: cdktf.stringToTerraform(this._rshRcpVariable),
      snmp_ifindex_persist: cdktf.booleanToTerraform(this._snmpIfindexPersist),
      snmp_ifindex_persist_variable: cdktf.stringToTerraform(this._snmpIfindexPersistVariable),
      source_interface: cdktf.stringToTerraform(this._sourceInterface),
      source_interface_variable: cdktf.stringToTerraform(this._sourceInterfaceVariable),
      ssh_version: cdktf.stringToTerraform(this._sshVersion),
      ssh_version_variable: cdktf.stringToTerraform(this._sshVersionVariable),
      tcp_keepalives_in: cdktf.booleanToTerraform(this._tcpKeepalivesIn),
      tcp_keepalives_in_variable: cdktf.stringToTerraform(this._tcpKeepalivesInVariable),
      tcp_keepalives_out: cdktf.booleanToTerraform(this._tcpKeepalivesOut),
      tcp_keepalives_out_variable: cdktf.stringToTerraform(this._tcpKeepalivesOutVariable),
      tcp_small_servers: cdktf.booleanToTerraform(this._tcpSmallServers),
      tcp_small_servers_variable: cdktf.stringToTerraform(this._tcpSmallServersVariable),
      udp_small_servers: cdktf.booleanToTerraform(this._udpSmallServers),
      udp_small_servers_variable: cdktf.stringToTerraform(this._udpSmallServersVariable),
      vty_line_logging: cdktf.booleanToTerraform(this._vtyLineLogging),
      vty_line_logging_variable: cdktf.stringToTerraform(this._vtyLineLoggingVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp_proxy: {
        value: cdktf.booleanToHclTerraform(this._arpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      arp_proxy_variable: {
        value: cdktf.stringToHclTerraform(this._arpProxyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdp: {
        value: cdktf.booleanToHclTerraform(this._cdp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cdp_variable: {
        value: cdktf.stringToHclTerraform(this._cdpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console_logging: {
        value: cdktf.booleanToHclTerraform(this._consoleLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      console_logging_variable: {
        value: cdktf.stringToHclTerraform(this._consoleLoggingVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_lookup: {
        value: cdktf.booleanToHclTerraform(this._domainLookup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_lookup_variable: {
        value: cdktf.stringToHclTerraform(this._domainLookupVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftp_passive: {
        value: cdktf.booleanToHclTerraform(this._ftpPassive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ftp_passive_variable: {
        value: cdktf.stringToHclTerraform(this._ftpPassiveVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_authentication: {
        value: cdktf.stringToHclTerraform(this._httpAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_authentication_variable: {
        value: cdktf.stringToHclTerraform(this._httpAuthenticationVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_server: {
        value: cdktf.booleanToHclTerraform(this._httpServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_server_variable: {
        value: cdktf.stringToHclTerraform(this._httpServerVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_server: {
        value: cdktf.booleanToHclTerraform(this._httpsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      https_server_variable: {
        value: cdktf.stringToHclTerraform(this._httpsServerVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_bootp: {
        value: cdktf.booleanToHclTerraform(this._ignoreBootp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_bootp_variable: {
        value: cdktf.stringToHclTerraform(this._ignoreBootpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_source_routing: {
        value: cdktf.booleanToHclTerraform(this._ipSourceRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_source_routing_variable: {
        value: cdktf.stringToHclTerraform(this._ipSourceRoutingVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      line_vty: {
        value: cdktf.booleanToHclTerraform(this._lineVty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      line_vty_variable: {
        value: cdktf.stringToHclTerraform(this._lineVtyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lldp: {
        value: cdktf.booleanToHclTerraform(this._lldp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lldp_variable: {
        value: cdktf.stringToHclTerraform(this._lldpVariable),
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
      nat64_tcp_timeout: {
        value: cdktf.numberToHclTerraform(this._nat64TcpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat64_tcp_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._nat64TcpTimeoutVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat64_udp_timeout: {
        value: cdktf.numberToHclTerraform(this._nat64UdpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat64_udp_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._nat64UdpTimeoutVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsh_rcp: {
        value: cdktf.booleanToHclTerraform(this._rshRcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rsh_rcp_variable: {
        value: cdktf.stringToHclTerraform(this._rshRcpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_ifindex_persist: {
        value: cdktf.booleanToHclTerraform(this._snmpIfindexPersist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snmp_ifindex_persist_variable: {
        value: cdktf.stringToHclTerraform(this._snmpIfindexPersistVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface: {
        value: cdktf.stringToHclTerraform(this._sourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface_variable: {
        value: cdktf.stringToHclTerraform(this._sourceInterfaceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_version: {
        value: cdktf.stringToHclTerraform(this._sshVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_version_variable: {
        value: cdktf.stringToHclTerraform(this._sshVersionVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_keepalives_in: {
        value: cdktf.booleanToHclTerraform(this._tcpKeepalivesIn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_keepalives_in_variable: {
        value: cdktf.stringToHclTerraform(this._tcpKeepalivesInVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_keepalives_out: {
        value: cdktf.booleanToHclTerraform(this._tcpKeepalivesOut),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_keepalives_out_variable: {
        value: cdktf.stringToHclTerraform(this._tcpKeepalivesOutVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_small_servers: {
        value: cdktf.booleanToHclTerraform(this._tcpSmallServers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_small_servers_variable: {
        value: cdktf.stringToHclTerraform(this._tcpSmallServersVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_small_servers: {
        value: cdktf.booleanToHclTerraform(this._udpSmallServers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      udp_small_servers_variable: {
        value: cdktf.stringToHclTerraform(this._udpSmallServersVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vty_line_logging: {
        value: cdktf.booleanToHclTerraform(this._vtyLineLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vty_line_logging_variable: {
        value: cdktf.stringToHclTerraform(this._vtyLineLoggingVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
