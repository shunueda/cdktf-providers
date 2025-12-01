// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#___path___ IpSettings#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#___skip___ IpSettings#___skip___}
  */
  readonly skip?: string;
  /**
  * Whether to accept ICMP redirect messages. Typically should be enabled on the host and disabled on routers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#accept_redirects IpSettings#accept_redirects}
  */
  readonly acceptRedirects?: boolean | cdktf.IResolvable;
  /**
  * Whether to accept packets with the SRR option. Typically should be enabled on the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#accept_source_route IpSettings#accept_source_route}
  */
  readonly acceptSourceRoute?: boolean | cdktf.IResolvable;
  /**
  * Allows Fast Path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#allow_fast_path IpSettings#allow_fast_path}
  */
  readonly allowFastPath?: boolean | cdktf.IResolvable;
  /**
  * Sets Linux base_reachable_time (base_reachable_time_ms) on all interfaces that use ARP. The initial validity of the ARP entry is picked from the interval [timeout/2 - 3*timeout/2] (default from 15s to 45s) after the neighbor was found. Can use postfix ms, s, m, h, d for milliseconds, seconds, minutes, hours, or days. if no postfix is set then seconds (s) are used. The parameter means how long a valid ARP record will be considered complete if no one communicates with the specific MAC/IP during this time. The parameter does not represent a time when an ARP entry is removed from the ARP cache (see max-neighbor-entries setting).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#arp_timeout IpSettings#arp_timeout}
  */
  readonly arpTimeout?: string;
  /**
  * If enabled, the ICMP error message reply will be sent with the source address equal to primary address of the receiving interface that caused the error . This feature can be useful for complex network debugging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#icmp_errors_use_inbound_interface_address IpSettings#icmp_errors_use_inbound_interface_address}
  */
  readonly icmpErrorsUseInboundInterfaceAddress?: boolean | cdktf.IResolvable;
  /**
  * Limit the maximum rates for sending ICMP packets whose type matches icmp-rate-mask to specific targets. `0` disables any limiting, other values indicate the minimum space between responses in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#icmp_rate_limit IpSettings#icmp_rate_limit}
  */
  readonly icmpRateLimit?: number;
  /**
  * Mask made of ICMP types for which rates are being limited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#icmp_rate_mask IpSettings#icmp_rate_mask}
  */
  readonly icmpRateMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#id IpSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable/disable packet forwarding between interfaces. Resets all configuration parameters to defaults according to RFC1812 for routers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#ip_forward IpSettings#ip_forward}
  */
  readonly ipForward?: boolean | cdktf.IResolvable;
  /**
  * IPv4 Hash policy used for ECMP routing in `/ip/settings` menu
  *   * l3 -- layer-3 hashing of src IP, dst IP
  *   * l3-inner -- layer-3 hashing or inner layer-3 hashing if available
  *   * l4 -- layer-4 hashing of src IP, dst IP, IP protocol, src port, dst port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#ipv4_multipath_hash_policy IpSettings#ipv4_multipath_hash_policy}
  */
  readonly ipv4MultipathHashPolicy?: string;
  /**
  * Sets Linux gc_thresh3. A maximum number of allowed neighbors in the ARP table. Since `RouterOS version 7.1`, the default value depends on the installed amount of RAM. It is possible to set a higher value than the default, but it increases the risk of out-of-memory condition.
  * The default values for certain RAM sizes:
  *   *  2048 for 64 MB,
  *   *  4096 for 128 MB,
  *   *  8192 for 256 MB,
  *   *  16384 for 512 MB or higher.
  * The ARP cache stores ARP entries, and if some of these entries are incomplete, they can stay in the cache for an indefinite period of time. This will only happen if the number of entries in the cache is less than one-fourth of the maximum number allowed. The reason for this is to prevent the unnecessary running of the garbage-collector when the ARP table is not close to being full.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#max_neighbor_entries IpSettings#max_neighbor_entries}
  */
  readonly maxNeighborEntries?: number;
  /**
  * Disable or enable the Linux route cache. Note that disabling the route cache, will also disable the fast path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#route_cache IpSettings#route_cache}
  */
  readonly routeCache?: boolean | cdktf.IResolvable;
  /**
  * Disables or enables source validation.
  *   *  no - No source validation.
  *   *  strict - Strict mode as defined in RFC3704 Strict Reverse Path. Each incoming packet is tested against the FIB and if the interface is not the best reverse path the packet check will fail. By default failed packets are discarded.
  *   *  loose - Loose mode as defined in RFC3704 Loose Reverse Path. Each incoming packet's source address is also tested against the FIB and if the source address is not reachable via any interface the packet check will fail.
  * The current recommended practice in RFC3704 is to enable strict mode to prevent IP spoofing from DDoS attacks. If using asymmetric routing or other complicated routing or VRRP, then the loose mode is recommended.
  * `Warning`: strict mode does not work with routing tables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#rp_filter IpSettings#rp_filter}
  */
  readonly rpFilter?: string;
  /**
  * Accept ICMP redirect messages only for gateways, listed in the default gateway list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#secure_redirects IpSettings#secure_redirects}
  */
  readonly secureRedirects?: boolean | cdktf.IResolvable;
  /**
  * Whether to send ICMP redirects. Recommended to be enabled on routers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#send_redirects IpSettings#send_redirects}
  */
  readonly sendRedirects?: boolean | cdktf.IResolvable;
  /**
  * end out syncookies when the syn backlog queue of a socket overflows. This is to prevent the common 'SYN flood attack'. syncookies seriously violate TCP protocol, and disallow the use of TCP extensions, which can result in serious degradation of some services (f.e. SMTP relaying), visible not by you, but to your clients and relays, contacting you.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#tcp_syncookies IpSettings#tcp_syncookies}
  */
  readonly tcpSyncookies?: boolean | cdktf.IResolvable;
  /**
  * Parameter allows to enable/disable TCP timestamps or add random offset to TCP timestamp (default behavior). Disabling timestamps completely may help to reduce spikes of performance drops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#tcp_timestamps IpSettings#tcp_timestamps}
  */
  readonly tcpTimestamps?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings routeros_ip_settings}
*/
export class IpSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpSettings to import
  * @param importFromId The id of the existing IpSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_settings routeros_ip_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_settings',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
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
    this._skip = config.skip;
    this._acceptRedirects = config.acceptRedirects;
    this._acceptSourceRoute = config.acceptSourceRoute;
    this._allowFastPath = config.allowFastPath;
    this._arpTimeout = config.arpTimeout;
    this._icmpErrorsUseInboundInterfaceAddress = config.icmpErrorsUseInboundInterfaceAddress;
    this._icmpRateLimit = config.icmpRateLimit;
    this._icmpRateMask = config.icmpRateMask;
    this._id = config.id;
    this._ipForward = config.ipForward;
    this._ipv4MultipathHashPolicy = config.ipv4MultipathHashPolicy;
    this._maxNeighborEntries = config.maxNeighborEntries;
    this._routeCache = config.routeCache;
    this._rpFilter = config.rpFilter;
    this._secureRedirects = config.secureRedirects;
    this._sendRedirects = config.sendRedirects;
    this._tcpSyncookies = config.tcpSyncookies;
    this._tcpTimestamps = config.tcpTimestamps;
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

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // accept_redirects - computed: false, optional: true, required: false
  private _acceptRedirects?: boolean | cdktf.IResolvable; 
  public get acceptRedirects() {
    return this.getBooleanAttribute('accept_redirects');
  }
  public set acceptRedirects(value: boolean | cdktf.IResolvable) {
    this._acceptRedirects = value;
  }
  public resetAcceptRedirects() {
    this._acceptRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptRedirectsInput() {
    return this._acceptRedirects;
  }

  // accept_source_route - computed: false, optional: true, required: false
  private _acceptSourceRoute?: boolean | cdktf.IResolvable; 
  public get acceptSourceRoute() {
    return this.getBooleanAttribute('accept_source_route');
  }
  public set acceptSourceRoute(value: boolean | cdktf.IResolvable) {
    this._acceptSourceRoute = value;
  }
  public resetAcceptSourceRoute() {
    this._acceptSourceRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptSourceRouteInput() {
    return this._acceptSourceRoute;
  }

  // allow_fast_path - computed: false, optional: true, required: false
  private _allowFastPath?: boolean | cdktf.IResolvable; 
  public get allowFastPath() {
    return this.getBooleanAttribute('allow_fast_path');
  }
  public set allowFastPath(value: boolean | cdktf.IResolvable) {
    this._allowFastPath = value;
  }
  public resetAllowFastPath() {
    this._allowFastPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFastPathInput() {
    return this._allowFastPath;
  }

  // arp_timeout - computed: false, optional: true, required: false
  private _arpTimeout?: string; 
  public get arpTimeout() {
    return this.getStringAttribute('arp_timeout');
  }
  public set arpTimeout(value: string) {
    this._arpTimeout = value;
  }
  public resetArpTimeout() {
    this._arpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTimeoutInput() {
    return this._arpTimeout;
  }

  // icmp_errors_use_inbound_interface_address - computed: false, optional: true, required: false
  private _icmpErrorsUseInboundInterfaceAddress?: boolean | cdktf.IResolvable; 
  public get icmpErrorsUseInboundInterfaceAddress() {
    return this.getBooleanAttribute('icmp_errors_use_inbound_interface_address');
  }
  public set icmpErrorsUseInboundInterfaceAddress(value: boolean | cdktf.IResolvable) {
    this._icmpErrorsUseInboundInterfaceAddress = value;
  }
  public resetIcmpErrorsUseInboundInterfaceAddress() {
    this._icmpErrorsUseInboundInterfaceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpErrorsUseInboundInterfaceAddressInput() {
    return this._icmpErrorsUseInboundInterfaceAddress;
  }

  // icmp_rate_limit - computed: false, optional: true, required: false
  private _icmpRateLimit?: number; 
  public get icmpRateLimit() {
    return this.getNumberAttribute('icmp_rate_limit');
  }
  public set icmpRateLimit(value: number) {
    this._icmpRateLimit = value;
  }
  public resetIcmpRateLimit() {
    this._icmpRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateLimitInput() {
    return this._icmpRateLimit;
  }

  // icmp_rate_mask - computed: false, optional: true, required: false
  private _icmpRateMask?: string; 
  public get icmpRateMask() {
    return this.getStringAttribute('icmp_rate_mask');
  }
  public set icmpRateMask(value: string) {
    this._icmpRateMask = value;
  }
  public resetIcmpRateMask() {
    this._icmpRateMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateMaskInput() {
    return this._icmpRateMask;
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

  // ip_forward - computed: false, optional: true, required: false
  private _ipForward?: boolean | cdktf.IResolvable; 
  public get ipForward() {
    return this.getBooleanAttribute('ip_forward');
  }
  public set ipForward(value: boolean | cdktf.IResolvable) {
    this._ipForward = value;
  }
  public resetIpForward() {
    this._ipForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipForwardInput() {
    return this._ipForward;
  }

  // ipv4_multipath_hash_policy - computed: false, optional: true, required: false
  private _ipv4MultipathHashPolicy?: string; 
  public get ipv4MultipathHashPolicy() {
    return this.getStringAttribute('ipv4_multipath_hash_policy');
  }
  public set ipv4MultipathHashPolicy(value: string) {
    this._ipv4MultipathHashPolicy = value;
  }
  public resetIpv4MultipathHashPolicy() {
    this._ipv4MultipathHashPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MultipathHashPolicyInput() {
    return this._ipv4MultipathHashPolicy;
  }

  // max_neighbor_entries - computed: false, optional: true, required: false
  private _maxNeighborEntries?: number; 
  public get maxNeighborEntries() {
    return this.getNumberAttribute('max_neighbor_entries');
  }
  public set maxNeighborEntries(value: number) {
    this._maxNeighborEntries = value;
  }
  public resetMaxNeighborEntries() {
    this._maxNeighborEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNeighborEntriesInput() {
    return this._maxNeighborEntries;
  }

  // route_cache - computed: false, optional: true, required: false
  private _routeCache?: boolean | cdktf.IResolvable; 
  public get routeCache() {
    return this.getBooleanAttribute('route_cache');
  }
  public set routeCache(value: boolean | cdktf.IResolvable) {
    this._routeCache = value;
  }
  public resetRouteCache() {
    this._routeCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeCacheInput() {
    return this._routeCache;
  }

  // rp_filter - computed: false, optional: true, required: false
  private _rpFilter?: string; 
  public get rpFilter() {
    return this.getStringAttribute('rp_filter');
  }
  public set rpFilter(value: string) {
    this._rpFilter = value;
  }
  public resetRpFilter() {
    this._rpFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpFilterInput() {
    return this._rpFilter;
  }

  // secure_redirects - computed: false, optional: true, required: false
  private _secureRedirects?: boolean | cdktf.IResolvable; 
  public get secureRedirects() {
    return this.getBooleanAttribute('secure_redirects');
  }
  public set secureRedirects(value: boolean | cdktf.IResolvable) {
    this._secureRedirects = value;
  }
  public resetSecureRedirects() {
    this._secureRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureRedirectsInput() {
    return this._secureRedirects;
  }

  // send_redirects - computed: false, optional: true, required: false
  private _sendRedirects?: boolean | cdktf.IResolvable; 
  public get sendRedirects() {
    return this.getBooleanAttribute('send_redirects');
  }
  public set sendRedirects(value: boolean | cdktf.IResolvable) {
    this._sendRedirects = value;
  }
  public resetSendRedirects() {
    this._sendRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendRedirectsInput() {
    return this._sendRedirects;
  }

  // tcp_syncookies - computed: false, optional: true, required: false
  private _tcpSyncookies?: boolean | cdktf.IResolvable; 
  public get tcpSyncookies() {
    return this.getBooleanAttribute('tcp_syncookies');
  }
  public set tcpSyncookies(value: boolean | cdktf.IResolvable) {
    this._tcpSyncookies = value;
  }
  public resetTcpSyncookies() {
    this._tcpSyncookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookiesInput() {
    return this._tcpSyncookies;
  }

  // tcp_timestamps - computed: false, optional: true, required: false
  private _tcpTimestamps?: string; 
  public get tcpTimestamps() {
    return this.getStringAttribute('tcp_timestamps');
  }
  public set tcpTimestamps(value: string) {
    this._tcpTimestamps = value;
  }
  public resetTcpTimestamps() {
    this._tcpTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimestampsInput() {
    return this._tcpTimestamps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      accept_redirects: cdktf.booleanToTerraform(this._acceptRedirects),
      accept_source_route: cdktf.booleanToTerraform(this._acceptSourceRoute),
      allow_fast_path: cdktf.booleanToTerraform(this._allowFastPath),
      arp_timeout: cdktf.stringToTerraform(this._arpTimeout),
      icmp_errors_use_inbound_interface_address: cdktf.booleanToTerraform(this._icmpErrorsUseInboundInterfaceAddress),
      icmp_rate_limit: cdktf.numberToTerraform(this._icmpRateLimit),
      icmp_rate_mask: cdktf.stringToTerraform(this._icmpRateMask),
      id: cdktf.stringToTerraform(this._id),
      ip_forward: cdktf.booleanToTerraform(this._ipForward),
      ipv4_multipath_hash_policy: cdktf.stringToTerraform(this._ipv4MultipathHashPolicy),
      max_neighbor_entries: cdktf.numberToTerraform(this._maxNeighborEntries),
      route_cache: cdktf.booleanToTerraform(this._routeCache),
      rp_filter: cdktf.stringToTerraform(this._rpFilter),
      secure_redirects: cdktf.booleanToTerraform(this._secureRedirects),
      send_redirects: cdktf.booleanToTerraform(this._sendRedirects),
      tcp_syncookies: cdktf.booleanToTerraform(this._tcpSyncookies),
      tcp_timestamps: cdktf.stringToTerraform(this._tcpTimestamps),
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
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accept_redirects: {
        value: cdktf.booleanToHclTerraform(this._acceptRedirects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      accept_source_route: {
        value: cdktf.booleanToHclTerraform(this._acceptSourceRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_fast_path: {
        value: cdktf.booleanToHclTerraform(this._allowFastPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      arp_timeout: {
        value: cdktf.stringToHclTerraform(this._arpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_errors_use_inbound_interface_address: {
        value: cdktf.booleanToHclTerraform(this._icmpErrorsUseInboundInterfaceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icmp_rate_limit: {
        value: cdktf.numberToHclTerraform(this._icmpRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_rate_mask: {
        value: cdktf.stringToHclTerraform(this._icmpRateMask),
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
      ip_forward: {
        value: cdktf.booleanToHclTerraform(this._ipForward),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_multipath_hash_policy: {
        value: cdktf.stringToHclTerraform(this._ipv4MultipathHashPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_neighbor_entries: {
        value: cdktf.numberToHclTerraform(this._maxNeighborEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_cache: {
        value: cdktf.booleanToHclTerraform(this._routeCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rp_filter: {
        value: cdktf.stringToHclTerraform(this._rpFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_redirects: {
        value: cdktf.booleanToHclTerraform(this._secureRedirects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_redirects: {
        value: cdktf.booleanToHclTerraform(this._sendRedirects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_syncookies: {
        value: cdktf.booleanToHclTerraform(this._tcpSyncookies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_timestamps: {
        value: cdktf.stringToHclTerraform(this._tcpTimestamps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
